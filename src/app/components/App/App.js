/**
 * @author Michael McDermott
 * Created on 6/19/15.
 */

var React = require('react');
//var ComingSoon = require('../ComingSoon/ComingSoon');
//var Resume = require('../Resume/Resume');
var Mikebook = require('../Resumes/Mikebook/Mikebook');

var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
          <Mikebook />
      </div>
    );
  }
});

module.exports = App;
