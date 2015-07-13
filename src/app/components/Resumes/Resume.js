/**
 * @author Michael McDermott
 * Created on 7/13/15.
 */

var React = require('react');

var Resume = React.createClass({
  render: function () {
    return (
      <div className="resume">
        <section>
          <h1>Michael McDermott</h1>

          <ul>
            <li>1091 Second Avenue, New York, NY, 10022</li>
            <li>1 (617) 304&#8211;2573</li>
            <li>resume@mgmcdermott.com</li>
          </ul>
        </section>
        <section>
          <h3>Summary</h3>

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
        </section>
        <section>
          <h3>Skills</h3>

          <h4>Javascript</h4>

          <h5>Testing</h5>

          <p>
            Utilizing frameworks such as Karma, Jasmine, Mocha, Chai, and Sinon,
            I
            have written many tests for both front-end and server components of
            applications. I prefer the use of frameworks such as these for their
            expressive nature and readable style. I have also used istanbul for
            code coverage, however chasing after code coverage can result in
            fragile tests.
          </p>

          <h5>Frameworks</h5>

          <p>
            On the job, I have been using AngularJS very extensively due to its
            ability to help get projects up and running quickly and efficiently.
            However, it&#8217;s dependency injection, two-way data binding,
            debugging difficulty, and lack of server-side rendering have led to
            me
            to use React in my personal projects. Because my projects tend to
            rely
            on communication via JSON, Node.js made sense to me from the start,
            and I&#8217;ve loved it ever since.
          </p>

          <h4>Other Front-end Technologies</h4>

          <p>
            I have used both pure HTML and HTML templating languages such as
            Jade
            or Jinja2 in my projects. While the templating languages offer some
            more functionality, I don&#8217;t have a preference either way. As
            for
            CSS, I was a big fan and user of bootstrap, however, I find myself
            using the Flexbox layout now to lay out and align items in my
            projects
            now. Unlike with HTML, I also much prefer a pre-processor
            (Sass/Scss is my favorite but I have experience with Less).
          </p>

          <h4>Databases</h4>

          <p>
            While familiar with the benefits and uses of other database types,
            the
            scale and needs of my projects have not called for anything other
            than
            MongoDB or MySQL (have also used SQLite)
          </p>

          <h4>Cluster Computing</h4>

          <p>
            At work, I have set up a cluster containing 3 masters and 12 slaves
            running Ubuntu. Resources shared amongst these servers and the
            relationships between masters and slaves are managed using the
            Apache
            Mesos kernel. Applications are deployed in docker containers and run
            on Mesosphere&#8217;s Marathon. The Hadoop file system as a common
            file system amongst the servers and large-scale data-processing jobs
            are run through Apache Spark.
          </p>

          <h4>Other Skills</h4>

          <p>
            Build processes (Gulp/Grunt), module bundlers (Webpack/Browserify),
            JSX, Python, Java, nginx, HAProxy, Apache2, Linux (Ubuntu),
            openSUSE,
            Bash scripts, Git/SVN, jQuery, PhantomJS
          </p>

        </section>
        <section>
          <h3>Projects</h3>

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
          <h3>Work</h3>

          <p>
            Icahn School of Medicine at Mount Sinai - Ma&#8217;ayan Lab
            November 2014 - Present
            Researcher Programmer/Analyst
            - In charge of developing and maintaining several web applications
            including the <a
            href="http://amp.pharm.mssm.edu/LDR/">LINCS Data Registry</a>, <a
            href="http://amp.pharm.mssm.edu/milestones/">LINCS Milestones </a>,
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
