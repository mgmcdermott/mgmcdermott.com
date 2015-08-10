/**
 * @author Michael McDermott
 * Created on 6/19/15.
 */

var React = require('react');
//var ComingSoon = require('../ComingSoon/ComingSoon');
var NavBar = require('../Nav/Nav');
var Resume = require('../Resumes/Resume');
// var Mikebook = require('../Resumes/Mikebook/Mikebook');

var App = React.createClass({

  render: function() {
    return (
      <div className="wrapper" onScroll={this.handleScroll}>
        <NavBar />
        <Resume />
      </div>
    );
  }
});

module.exports = App;
