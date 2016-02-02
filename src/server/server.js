/**
 * @author Michael McDermott
 * Created on 5/20/15.
 */

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var timeout = require('connect-timeout');
var compress = require('compression');

var app = express();
var port = process.env.PORT || 4224;
app.set('port', port);

var config = require('./config');
mongoose.connect(config.dbUrl, function(err) {
  if (err) {
    console.log('Error connecting to database: ' + err);
  } else {
    console.log('Connection to database successful.');
  }
});

mongoose.set('debug', true);

app.use(cors());
app.use(timeout('20s'));
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(compress());

var publicDir = __dirname;
console.log('Serving static files from ' + publicDir);

app.use('/', express.static(publicDir));

require('./routes')(app, publicDir);

app.use(haltOnTimeout);

function haltOnTimeout(req, res, next) {
  if (!req.timeout) {
    next();
  }
}

app.listen(app.get('port'), function() {
  if (process.send) {
    process.send('online');
  } else {
    console.log('The server is running at http://localhost:' +
      app.get('port'));
  }
});
