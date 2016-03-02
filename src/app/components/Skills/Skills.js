var React = require('react');
// var cx = require('classnames');
var Header = require('../Header/Header');
var Board = require('./ChessBoard');

var Skills = React.createClass({
  render: function() {
    return (
      <div id="skills" className="mgm-container skills">
        <Header title="Trying to kill some time?" windowMult={2} />
        <div className="mgm-inner center">
          <Board />
        </div>
      </div>
    );
  }
});

module.exports = Skills;
