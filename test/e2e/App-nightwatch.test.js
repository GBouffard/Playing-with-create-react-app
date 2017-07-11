var config = require('../../nightwatch.conf.js');

module.exports = {
  before: () => console.log(' *** STARTING APP TEST ***'),
  after: () => console.log(' *** ENDING APP TEST ***'),

  beforeEach: (browser, done) => {
    browser
      .resizeWindow(1024, 768, done)
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
  },

  'my custom functional test name - React App Assert Title': (browser) => {
    browser
      .assert.title('React App')
      .saveScreenshot(config.imgpath(browser) + 'react-app.png')
  },

  'Testing the Hide me Button to hide when clicked': (browser) => {
    browser
      .waitForElementVisible('#hideMe', 1000)
      .click('#hideMe')
      // pause suspends the test for the given time in milliseconds
      .pause(1000)
      .waitForElementNotVisible('#hideMe', 1000)
      // .hidden .Checks if the given element is not visible on the page.
      .assert.hidden('#hideMe')
      // expect was also introduced
      .expect.element('#hideMe').to.not.be.visible;
  },

  'Testing the Thulium link': (browser) => {
    browser
      .waitForElementVisible('.normal', 1000)
      .click('.normal')
      .pause(1000)
      .assert.urlEquals("http://www.thulium69.com/")
      // end () ends the session and close the window
      .end();
  }
};