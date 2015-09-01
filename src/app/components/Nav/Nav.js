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
        <div className="mgm-inner nav-inner">
          <div className="logo">
            <a href="#landing">.<span className="mgm-kwd">mgm</span></a>
          </div>
          <div className="nav-right">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            {/*<a href="http://blog.mgmcdermott.com*/}
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
