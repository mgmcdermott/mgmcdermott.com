var React = require('react');
var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
var cx = require('classnames');
var Header = require('../Header/Header');

var About = React.createClass({
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
      runAnimation: false
    };
  },
  render: function() {
    var headshotClasses = cx({
      'mgm-headshot': true,
      'hidden': this.state.hidden,
      'animated': this.state.animated,
      'fadeInLeftBig': this.state.runAnimation
    });
    var infoClasses = cx({
      'about-info': true,
      'hidden': this.state.hidden,
      'animated': this.state.animated,
      'fadeInRightBig': this.state.runAnimation
    });
    return (
      <div id="about" className="mgm-container about">
        <Header title="About" windowMult={0.25} />
          <div className="mgm-inner about-inner center">
            <div className={headshotClasses}>Headshot Container</div>
            <div className={infoClasses}>
              <p>
                My name is Michael McDermott and I am a passionate web developer
                with exposure to some of the hottest frameworks on the client
                and server, including React, AngularJS, and NodeJS.
              </p>
              <p>
                Combined with my knowledge of HTML and CSS, I&#8217;ve built web
                applications from the ground up with dynamic front-ends
                communicating
                with extensive REST APIs on the server. I&#8217;m a firm believer
                that
                javascript is the future of the web and I spend every day trying to
                prepare for it.
              </p>
              <p>
                In my spare time, I host websites running in Docker containers
                for myself, friends, and family on my personal servers running
                Ubuntu and nginx. I also enjoy contributing to open source
                javascript and giving back on Stack Overflow.
              </p>
          </div>
        </div>
      </div>
    );
  },
  revealOnScroll: function() {
    var heightToShow = window.innerHeight / 4;

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

module.exports = About;
