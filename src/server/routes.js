var nodeMailer = require('nodemailer');
var html = require('./staticHome');
var User = require('./models').User;

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
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
    if (!req.body.email) {
      res.status(400).send('Email required to contact');
    } else {
      var opts = {
        from: req.body.from,
        to: 'michael@mgmcdermott.com',
        subject: req.body.subject,
        text: req.body.content
          // html: '<b>Hello world ✔</b>'
      };

      var user = {
        name: req.body.name || '',
        email: req.body.email,
        addedFrom: 'Website Contact Form'
      };

      User.create(user, function(err) {
        if (err) {
          console.log(err);
        }
      });

      transporter.sendMail(opts, function(err, info) {
        if (err) {
          console.log(err);
          res.status(500).send('An error occurred sending email');
        } else {
          res.status(200).send('Message sent: ' + info.response);
        }
      });
    }

  });
};
