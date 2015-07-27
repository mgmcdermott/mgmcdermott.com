/**
 * @author Michael McDermott
 * Created on 7/13/15.
 */

var React = require('react');
var jsCode = require('./code/javascript');
var feCode = require('./code/feTech');


var Resume = React.createClass({
  render: function () {
    return (
      <div className="resume">
        <div className="mgm-container center name">
          <h1>Michael McDermott</h1>

          <ul>
            <li>New York, NY</li>
            <li>1 (617) 304&#8211;2573</li>
            <li>resume@mgmcdermott.com</li>
          </ul>
        </div>
        <div className="mgm-container center about">
        <h2 className="mgm-header">About</h2>
          <div className="mgm-inner about-inner center">
            <div className="mgm-headshot">Headshot Container</div>
              <div className="about-info">
              <p>
                I am a passionate web developer with exposure to some of the hottest
                frameworks on the client and server, including React, AngularJS, and
                NodeJS.
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
                In my spare time, I host websites for myself, friends, and family on
                my personal servers running Ubuntu, nginx, and PM2. I also enjoy
                contributing to open source javascript and giving back on Stack
                Overflow.
              </p>
              </div>
            </div>
        </div>
        <div className="mgm-container skill">
          <h2 className="mgm-header">Skills</h2>
          <div className="mgm-inner skill-inner">
              <pre className="default prettyprint" style={{border: 0}}>
                <code>
                  {jsCode}
                </code>
              </pre>
          </div>
        </div>
        <div className="mgm-container skill">
          <div className="mgm-inner skill-inner">
              <pre className="default prettyprint" style={{border: 0}}>
                <code>
                  {feCode}
                </code>
              </pre>
          </div>
        </div>
            <div className="databases">
              <h4>Databases</h4>

              <p>
                While familiar with the benefits and uses of other database types,
                the scale and needs of my projects have not called for anything
                 other than MongoDB or MySQL (have also used SQLite)
              </p>
            </div>
            <div className="cluster-comp">
              <h4>Cluster Computing</h4>

              <p>
                At work, I have set up a cluster containing 3 masters and 12 slaves
                running Ubuntu. Resources shared amongst these servers and the
                relationships between masters and slaves are managed using the
                Apache
                Mesos kernel. Applications are deployed in docker containers and run
                on Mesosphere&#8217;s Marathon. Large-scale data-processing jobs
                are run on the cluster through Apache Spark.
              </p>
            </div>
            <div className="other">
              <h4>Other Skills</h4>

              <p>
                Build processes (Gulp/Grunt), module bundlers (Webpack/Browserify),
                JSX, Python, Java, nginx, HAProxy, Apache2, Linux (Ubuntu),
                openSUSE, Bash scripts, Git/SVN, jQuery, PhantomJS
              </p>

            </div>
        <section>
          <h2 className="mgm-header">Projects</h2>

          <ul>
            <li>LINCS Data Registry - <a href="http://amp.pharm.mssm.edu/LDR/">
              http://amp.pharm.mssm.edu/LDR/</a>
            </li>
            <ul>
              <li>
                The LINCS Data Registry is a web application created to allow
                the LINCS Data Signature Generation Centers to submit their data
                release instances in a consistent and controlled format. Written
                in AngularJS, Bootstrap, and Node.js, the code for this project
                can be found on <a href="https://github.com/MaayanLab/LDR">
                https://github.com/MaayanLab/LDR</a>. It is built with
                Gulp, compiled into a docker container, and run on Marathon.
                Karma, mocha, chai, and sinon are used to mock modules, test the
                API, and general front-end unit testing.
              </li>
            </ul>
            <li>KevinandKevin.com</li>
            <li>
              Personal website - <a href="http://www.mgmcdermott.com">
              http://www.mgmcdermott.com</a>
            </li>
          </ul>

        </section>
        <section>
          <h2 className="mgm-header">Work</h2>

          <p>
            Icahn School of Medicine at Mount Sinai - Ma&#8217;ayan Lab
            November 2014 - Present
            Researcher Programmer/Analyst
            - In charge of developing and maintaining several web applications
            including the <a
            href="http://amp.pharm.mssm.edu/LDR/">LINCS Data Registry</a>, <a
            href="http://amp.pharm.mssm.edu/milestones/">LINCS Milestones</a>,
            and <a
            href="http://www.lincsproject.org">lincsproject.org</a>.
          </p>

        </section>
        <h3>Education</h3>

        <p>
          University of Connecticut, Storrs, CT
          Bachelor of Science in Biomedical Engineering, May 2014
          Track: Bioinformatics (Computer Science)
          GPA: 3.12
        </p>
      </div>
    );
  }
});

module.exports = Resume;
