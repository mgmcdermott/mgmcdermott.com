var nodeMailer = require('nodemailer');
var React = require('react');
var App = require('../app/components/App/App');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    var html = React.renderToStaticMarkup(

      <div id="app">
        <App />
      </div>
    );
    res.end(html);
  });

  // create reusable transporter object using SMTP transport
  var transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mgmcdermottcom@gmail.com',
      pass: 'mgmcdermott@124'
    }
  });

  app.post('/contact', function(req, res) {
    var opts = {
      from: req.body.from,
      to: 'michael@mgmcdermott.com',
      subject: req.body.subject,
      text: req.body.content
      // html: '<b>Hello world ✔</b>'
    };

    transporter.sendMail(opts, function(err, info) {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred sending email');
      } else {
        res.status(200).send('Message sent: ' + info.response);
      }
    });
  });
};
