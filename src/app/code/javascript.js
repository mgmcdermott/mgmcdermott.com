var beautify = require('js-beautify');

var raw = `

// Javascript

function testing() {
  /**
   * Utilizing frameworks such as Karma, Jasmine, Mocha, Chai, and Sinon, I
   * have written many tests for both front-end and server components of
   * applications. I prefer the use of frameworks such as these for their
   * expressive nature and readable style. I have also used istanbul for
   * code coverage, however chasing after code coverage can result in
   * fragile tests.
   */
 }

function frameworks() {
  /**
   * On the job, I have been using AngularJS very extensively due to its
   * ability to help get projects up and running quickly and efficiently.
   * However, it's dependency injection, two-way data binding,
   * debugging difficulty, and lack of server-side rendering have led to
   * me to use React in my personal projects. Because my projects tend to
   * rely on communication via JSON, Node.js made sense to me from the start,
   * and I've loved it ever since.
   */
}

/**
 * Hires a specific candidate at the company specified
 * @example
 * // returns a job
 * jobMarket.hire(michael, companyX);
 * @returns {Job} Returns a job for the candidate
 */

jobMarket.hire = function(candidate, company) {
  var companyIndex = candidate.potentialCompanies.indexOf(company);
  var wantsJob = (companyIndex > -1);
  if (wantsJob && company instanceof Company && company.isQualified(candidate)) {
    var newJob = new Job(company);
    candidate.setJob(newJob);
    return newJob;
  } else if (wantsJob) {
    console.log(company.name.toString() + ' wishes  ' + candidate.toString() +
      ' the best of luck in his/her career');
    candidate.potentialCompanies.splice(companyIndex);
    continueSearch();
  } else {
    console.log('It just did not work out.');
  }
}
`;

var code = beautify(raw);

module.exports = code;
