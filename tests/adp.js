const Reporting = require('perfecto-reporting');

module.exports = {

  before: function (browser) {
    console.log('Setting up...');

    // Setup Perfecto reporting client
    const perfectoExecutionContext = new Reporting.Perfecto.PerfectoExecutionContext({
      webdriver: {
        executeScript: (command, params) => {
          browser.execute(command, [params])
        }
      },
      job: new Reporting.Model.Job({
        jobName: 'Nightwatch',
        buildNumber: 1234,
        branch: 'master'
      }),
      project: new Reporting.Model.Project('nightwatch sample', '1.0.0'),
      tags: ['nightwatch', 'optional tag 2'],
      customFields: [new Reporting.Model.CustomField('framework', 'nightwatch')]

    });

    browser.reporting = new Reporting.Perfecto.PerfectoReportingClient(perfectoExecutionContext);
  },



  beforeEach: function (browser) {
    browser.reporting.testStart(browser.currentTest.name, browser.tags);
    // Do something before each test function
  },

  tags: ['ADP'],

  'ADP Nightwatch Demo': function (browser) {

    browser.reporting.stepStart('Navigate')
    browser
      .url('http://www.adp.com')
      .waitForElementVisible('body', 1000);

    browser.reporting.stepStart('Open Menu');
    browser
        .click('#hamburger')
        .click('#ctl08_ctl00_ctl00_rptStickyMenu_adpMenuItem_0_hlItemLink_0')
        .pause(1000);

    browser.reporting.stepStart('Search');

    browser
        .click('#ctl08_rptMenu_adpMenuItem_2_hlItemLink_2abc')
        .pause(1000)
        .waitForElementVisible('#site-search', 2000)
        .setValue('#site-search', 'payroll')
        .click('id', 'site-search-button')
        .pause(2000);

  },

  afterEach: function (browser, done) {
    // Do something after each test function

    let varSuccess = (browser.currentTest.results.failed == 0) ? true : false;

    /**
     * determines the test's result and pass it to Reporting
     */
    if (varSuccess) {
      browser.reporting.testStop({
        status: Reporting.Constants.results.passed
      })
    } else {
      browser.reporting.testStop({
        status: Reporting.Constants.results.failed,
        // Will pass the first error (could be more then one)
        message: browser.currentTest.results.lastError.message.substr(0,4095)
      })
    }
    done();
  },

  after: function (browser) {

    console.log(browser.currentTest.results.lastError);
    console.log('Closing down...');
    browser.end();
  }

};
