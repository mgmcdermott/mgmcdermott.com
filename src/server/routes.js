var nodeMailer = require('nodemailer');
var config = require('./config');
var html = require('./staticHome');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  });

  // create reusable transporter object using SMTP transport
  var transporter = nodeMailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.emailUser,
      pass: config.emailPass
    }
  });

  app.post('/contact', function(req, res) {
    var content = '<p><strong>Subject: </strong>' + req.body.subject + '</p>' +
      '<p><strong>Name: </strong>' + req.body.name + '</p>' +
      '<p><strong>Email: </strong>' + req.body.email + '</p>' +
      '<p><strong>Content: </strong>' + req.body.content + '</p>';

    var opts = {
      from: req.body.email,
      to: 'michael@mgmcdermott.com',
      subject: 'Someone sent a new message from mgmcdermott.com!',
      html: content
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
