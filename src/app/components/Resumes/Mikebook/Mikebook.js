/**
 * @author Michael McDermott
 * Created on 7/13/15.
 */

var React = require('react');

var MenuBar = React.createClass({
  render: function () {
    return (
      <header className="mb-header">
        <h1 className="title">
          <a href="http://www.mgmcdermott.com/mikebook">
            <img src="../../../images/mikebook-logo.png" alt="Mikebook"
                 width="170" height="33"/>
          </a>
        </h1>
      </header>
    );
  }
});

var LeftNav = React.createClass({
  render: function () {
    return (
      <aside className="aside left-nav">Aside 1</aside>
    );
  }
});


var RightTrending = React.createClass({
  render: function () {
    return (
      <aside className="aside right-trending">Aside 2</aside>
    );
  }
});

// Icon, Poster, Time, Content

var PostBox = React.createClass({
  render: function() {
    return (
      <div className="post-box"></div>
    );
  }
});

var Main = React.createClass({
  render: function () {
    return (
      <div className="mb-main">
        <PostBox />
      </div>
    );
  }
});

var Mikebook = React.createClass({
  render: function () {
    return (
      <div className="wrapper mb-wrapper">
        <MenuBar />

        <div className="mb-content">
          <Main />
          <LeftNav />
          <RightTrending />
        </div>
      </div>
    );
  }
});

module.exports = Mikebook;
