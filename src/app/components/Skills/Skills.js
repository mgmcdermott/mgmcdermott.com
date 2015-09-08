var React = require('react');
// var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
// var cx = require('classnames');
var Header = require('../Header/Header');

var Skills = React.createClass({
  render: function() {
    // Don't forget to add mgm-container back to outer-div once completed
    return (
      <div id="skills" className="skills">
        <div className="under-construction">
          <div className="construction-banner">
            <h1>This section is under construction. Hold tight!</h1>
          </div>
        </div>
        <Header title="Some Things I Enjoy Working With" windowMult={2} />
        <div className="mgm-inner">
          <div className="mgm-logos">
            <div className="mgm-logo docker-logo"></div>
            <div className="mgm-logo javascript-logo"></div>
            <div className="mgm-logo mesos-logo"></div>
            <div className="mgm-logo reactjs-logo"></div>
            <div className="mgm-logo angularjs-logo"></div>
            <div className="mgm-logo marathon-logo"></div>
            <div className="mgm-logo sass-logo"></div>
            <div className="mgm-logo nodejs-logo"></div>
            <div className="mgm-logo gulp-logo"></div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Skills;
