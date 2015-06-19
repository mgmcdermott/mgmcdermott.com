/**
 * @author Michael McDermott
 * Created on 6/19/15.
 */

var React = require('react');
var ComingSoon = require('../ComingSoon/ComingSoon');

var App = React.createClass({
  render: function() {
    return (
      <div className="wrapper">
        <div className="content">
          <ComingSoon />
        </div>
      </div>
    );
  }
});

module.exports = App;
