var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var cx = require('classnames');

var Header = React.createClass({
  componentWillMount: function() {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('scroll', this.revealOnScroll, false);
    }
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.revealOnScroll);
  },
  propTypes: {
    title: React.PropTypes.string,
    windowMult: React.PropTypes.number
  },
  getDefaultProps: function() {
    return {
      title: 'Content',
      windowMult: 1
    };
  },
  getInitialState: function() {
    return {
      hidden: true,
      animated: false,
      runAnimation: false
    };
  },
  render: function() {
    var titleClasses = cx({
      'mgm-header': true,
      'hidden': this.state.hidden,
      'animated': this.state.animated,
      'fadeInDown': this.state.runAnimation
    });
    return (
      <h2 className={titleClasses}>{this.props.title}</h2>
    );
  },
  revealOnScroll: function() {
    var heightToShow = window.innerHeight * this.props.windowMult;

    if (window.pageYOffset > heightToShow && !this.state.animated) {
      this.setState({
        hidden: false,
        animated: true,
        runAnimation: true
      });
      window.removeEventListener('scroll', this.revealOnScroll);
    }
  }
});

module.exports = Header;
