var config = require('../../nightwatch.conf.js');

module.exports = {
  'my custom functional test name - React App Assert Title': function(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
      .assert.title('React App')
      .saveScreenshot(config.imgpath(browser) + 'react-app.png')
  },

  'Testing the Hide me Button to hide when clicked': function(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('#hideMe', 1000)
      .click('#hideMe')
      // pause suspends the test for the given time in milliseconds
      .pause(1000)
      .waitForElementNotVisible('#hideMe', 1000)
      // .hidden .Checks if the given element is not visible on the page.
      .assert.hidden('#hideMe')
      // end () ends the session and close the window
      .end();
  }
};