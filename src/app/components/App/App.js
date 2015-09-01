/**
 * @author Michael McDermott
 * Created on 6/19/15.
 */

var React = require('react');
var NavBar = require('../Nav/Nav');
var Landing = require('../Landing/Landing');
var About = require('../About/About');
var Experience = require('../Experience/Experience');
var Skills = require('../Skills/Skills');
var Contact = require('../Contact/Contact');
var Footer = require('../Footer/Footer');

var App = React.createClass({

  render: function() {
    return (
      <div className="wrapper">
        <NavBar />
        <Landing />
        <About />
        <Experience />
        <Skills />
        <Contact />
        <Footer />
      </div>
    );
  }
});

module.exports = App;
