/**
 * @author Michael McDermott
 * Created on 7/13/15.
 */

var React = require('react');

var Landing = require('./Landing');
var About = require('./About');
// var jsCode = require('./code/javascript');
// var feCode = require('./code/feTech');

var Resume = React.createClass({
  render: function () {
    return (
      <div className="resume">
        <Landing />
        <About />
      </div>
    );
  }
});

module.exports = Resume;
