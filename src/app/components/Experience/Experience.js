var React = require('react');

var Experience = React.createClass({

  render: function() {
    return (
      <div id="experience" className="mgm-container experience">
        <h2 className="mgm-header experience-header">Experience</h2>
        <div className="mgm-inner">
          <div className="work">
            <div className="work-header">
              <h3 className="company">Icahn School of Medicine at Mount Sinai</h3>
              <h3 className="work-date">November 2014 - Present</h3>
            </div>
            <h4 className="job-title">Researcher/Programmer Analyst</h4>
            <p className="job-desc">Foo bar</p>
            <div className="work-header">
              <h3 className="company">University of Connecticut School of Fine Arts</h3>
              <h3 className="work-date">August 2013 - June 2014</h3>
            </div>
            <h4 className="job-title">IT Assistant</h4>
            <p className="job-desc">
              In addition to repairing and installing computers, I was part of
              a team responsible for the development and maintaining of
              http://art.uconn.edu
            </p>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Experience;
