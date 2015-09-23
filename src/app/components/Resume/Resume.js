var React = require('react');

var Resume = React.createClass({

  render: function() {
    return (
      <div id="resume">
        <div className="resume-header">
          <h1>Michael McDermott</h1>
          <h3>New York, NY &middot; 617.304.2573 &middot; resume@mgmcdermott.com</h3>
        </div>
        <div className="resume-section summary">
          <h2>Summary</h2>
          <p>I am a passionate web developer with exposure to some of the hottest frameworks on the client and server, including React, AngularJS, and NodeJS. </p>
          <p>Combined with my knowledge of HTML and CSS, I've built web applications from the ground up with dynamic front-ends communicating with extensive REST APIs on the server. I'm a firm believer that javascript is the future of the web and I spend every day trying to prepare for it.</p>
          <p>In my spare time, I host websites for myself, friends, and family on my personal servers running Ubuntu, nginx, and PM2. I also enjoy contributing to open source javascript and giving back on Stack Overflow.</p>
        </div>
        <div className="resume-section resume-experience">
          <h2>Experience</h2>
          <h4>Research Programmer/Analyst at Icahn School of Medicine at Mount Sinai</h4>
          <p className="resume-dates">November 2014 - Present</p>
          <p>
            In charge of the development of web applications using primarily
            javascript (Node.JS and frontend) to assist researchers in their
            studies. My current projects are the LINCS Dataset Registry
            (http://amp.pharm.mssm.edu/LDR) and the remaking of the NIH LINCS
            Program's website http://www.lincsproject.org. I also maintain a
            cluster of 15 servers running web applications and high-performance
            computing jobs on Apache Mesos (applications are run in Docker
            containers and monitored on Marathon).
          </p>
          <h4>IT Assistant at the University of Connecticut</h4>
          <p className="resume-dates">November 2013 - June 2014</p>
          <p>
            Managed time-sensitive issues through the telephone, met with
            clients, and solved various computer issues on both Windows and
            Mac OS platforms. In addition, I assisted in the development and
            maintaining of http://art.uconn.edu.
          </p>
        </div>
        <div className="resume-section resume-skills">
          <h2>Skills</h2>
          <h4>Javascript</h4>
          <h5>Testing</h5>
          <p>Utilizing frameworks such as Karma, Jasmine, Mocha, Chai, and Sinon, I have written many tests for both front-end and server components of applications. I prefer the use of frameworks such as these for their expressive nature and readable style. I have also used istanbul for code coverage, however chasing after code coverage can result in fragile tests.</p>
          <h5>Frameworks</h5>
          <h4>Other Front-end Technologies</h4>
          <h4>Databases</h4>
          <h4>Cluster Computing</h4>
        </div>
        <div className="resume-section resume-projects">
          <h2>Projects</h2>
        </div>
        <div className="resume-section resume-education">
          <h2>Education</h2>
        </div>
        <div className="resume-section resume-contributing">
          <h2>Contributing</h2>
        </div>

      </div>
    );
  }

});

module.exports = Resume;
