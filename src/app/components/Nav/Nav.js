var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var cx = require('classnames');

var Nav = React.createClass({
  componentDidMount: function() {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('scroll', this.handleScroll, false);
    }
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  getInitialState: function() {
    return {
      hidden: true
    };
  },
  render: function() {
    var navClasses = cx({
      'mgm-nav': true,
      'hidden': this.state.hidden
    });
    return (
      <div className={navClasses}>
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-dot">.</span>
            <span className="mgm-kwd">mgm</span>
          </div>
          <div className="nav-right">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </div>
    );
  },
  handleScroll: function() {
    // Navbar is 60px in height. Could also get height of DOM node here and
    // subtract that.
    var heightToShow = window.innerHeight - 60;

    if (window.pageYOffset > heightToShow) {
      this.setState({ hidden: false });
    }

    if (window.pageYOffset < heightToShow) {
      this.setState({ hidden: true });
    }
  }
});

module.exports = Nav;
