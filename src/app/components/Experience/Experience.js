var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var cx = require('classnames');

var Experience = React.createClass({
  componentWillMount: function() {
    if (ExecutionEnvironment.canUseDOM) {
      window.addEventListener('scroll', this.revealOnScroll, false);
    }
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.revealOnScroll);
  },
  getInitialState: function() {
    return {
      hidden: true,
      animated: false,
      fadeInLeftBig: false
    };
  },
  render: function() {
    var workClasses = cx({
      'work': true,
      'hidden': this.state.hidden,
      'animated': this.state.animated,
      'fadeInLeftBig': this.state.fadeInLeftBig
    });
    return (
      <div id="experience" className="mgm-container experience">
        <div className="experience-inner">
          <div className={workClasses}>
            <h2>
              Currently I work as a Researcher Programmer/Analyst <br />
              at the Icahn School of Medicine at Mount Sinai, developing <br />
              websites and applications to help researchers be more productive.
            </h2>
          </div>
        </div>
      </div>
    );
  },
  revealOnScroll: function() {
    var heightToShow = window.innerHeight * 1.25;

    if (window.pageYOffset > heightToShow && !this.state.animated) {
      this.setState({ hidden: false, animated: true, fadeInLeftBig: true });
      window.removeEventListener('scroll', this.revealOnScroll);
    }
  }

});

module.exports = Experience;
