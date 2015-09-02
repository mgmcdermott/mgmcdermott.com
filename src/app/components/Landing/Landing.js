var React = require('react');
var $ = require('jquery');

$(function() {
  $('.typed').typed({
    strings: [
    '<<span class="mgm-kwd">div</span> <span class="mgm-class">className</span>=<span class="mgm-str">"mgm-dev"</span>><<span class="mgm-kwd">div</span>>',
      '<span class="mgm-kwd">var</span> mgm = <span class="mgm-kwd">require</span>(<span class="mgm-str">\'dev\'</span>);',
      '<span class="mgm-kwd">@import</span> <span class="mgm-str">\'mgm\'</span>;',
      '<span class="mgm-kwd">FROM</span> mgm:dev',
      '<span class="mgm-kwd">{%</span> <span class="mgm-kwd">extends</span> <span class="mgm-str">\'mgm.dev\'</span> <span class="mgm-kwd">%}</span>',
      '<span class="mgm-kwd">from</span> mgm <span class="mgm-kwd">import</span> dev',
      '<span class="mgm-kwd">SELECT</span> * <span class="mgm-kwd">FROM</span> mgm_dev',
      'angular<span class="mgm-kwd">.module</span>(<span class="mgm-str">\'mgm\'</span>, [<span class="mgm-str">\'dev\'</span>]);'

    ],
    typeSpeed: 0,
    backDelay: 1000,
    loop: true,
    loopCount: false,
    contentType: 'html',
    cursorChar: '|',
    callback: function() {
    },
    // starting callback function before each string
    preStringTyped: function() {

    },
    //callback for every typed string
    onStringTyped: function() {

    },
    // callback for reset
    resetCallback: function() {

    }
 });
});

var Landing = React.createClass({

  render: function() {
    return (
      <div id="landing" className="mgm-container center name">
        <h1 className="typed"></h1>
        <a href="#about">
          <svg version="1.1" x="0px" y="0px"
          width="52.682px" height="30.071px" viewBox="23.656 39.858 52.682 30.071"
          enable-background="new 23.656 39.858 52.682 30.071">
            <g>
              <g>
                <g>
                  <path fill="#FFFFFF" d="M75.493,44.782c1.127-1.127,1.127-2.952,0-4.079c-1.127-1.126-2.952-1.126-4.079,0L50,62.121
                    L28.58,40.703c-1.126-1.126-2.952-1.126-4.079,0c-0.563,0.563-0.845,1.302-0.845,2.04c0,0.738,0.282,1.476,0.845,2.04
                    L47.96,68.238c1.127,1.127,2.953,1.127,4.079,0L75.493,44.782z"></path>
                </g>
              </g>
            </g>
          </svg>
        </a>
      </div>
    );
  }
});

module.exports = Landing;
