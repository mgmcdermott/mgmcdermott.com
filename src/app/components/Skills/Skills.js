var React = require('react');
// var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
// var cx = require('classnames');
var Header = require('../Header/Header');

var Skills = React.createClass({
  render: function() {
    return (
      <div id="skills" className="mgm-container skills">
        <Header title="Some Things I Enjoy Working With" windowMult={2} />
        <div className="mgm-inner">
          <div className="mgm-logos">
            <img src="../../images/docker-logo.png" alt="docker" />
            <img src="../../images/javascript.png" alt="javascript" />
            <img src="../../images/mesos.png" alt="mesos" />
            <img src="../../images/reactjs.svg" alt="reactjs" />
            <img src="../../images/angularjs.png" alt="angularjs" />
            <img src="../../images/marathon.png" alt="marathon" />
            <img src="../../images/sass.png" alt="sass" />
            <img src="../../images/nodejs.png" alt="nodejs" />
            <img src="../../images/gulp.png" alt="gulp" />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Skills;
