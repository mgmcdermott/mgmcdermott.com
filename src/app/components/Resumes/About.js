var React = require('react');

var About = React.createClass({

  render: function() {
    return (
      <div id="about" className="mgm-container center about">
        <h2 className="mgm-header">About</h2>
          <div className="mgm-inner about-inner center">
            <div className="mgm-headshot">Headshot Container</div>
            <div className="about-info">
              <p>
                I am a passionate web developer with exposure to some of the hottest
                frameworks on the client and server, including React, AngularJS, and
                NodeJS.
              </p>
              <p>
                Combined with my knowledge of HTML and CSS, I&#8217;ve built web
                applications from the ground up with dynamic front-ends
                communicating
                with extensive REST APIs on the server. I&#8217;m a firm believer
                that
                javascript is the future of the web and I spend every day trying to
                prepare for it.
              </p>
              <p>
                In my spare time, I host websites for myself, friends, and family on
                my personal servers running Ubuntu, nginx, and PM2. I also enjoy
                contributing to open source javascript and giving back on Stack
                Overflow.
              </p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = About;
