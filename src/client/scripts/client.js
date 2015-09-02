/**
 * @author Michael McDermott
 * Created on 6/19/15.
 */

var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var App = require('../../app/components/App/App');

if (ExecutionEnvironment.canUseDOM) {
  var $ = require('jquery');
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(
          /^\//, '') && location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +
          ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
}

React.render(<App />, document.getElementById('app'));
