var config = require('../../nightwatch.conf.js');

module.exports = {
  'my custom functional test name - React App Assert Title': function(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
      .assert.title('React App')
      .saveScreenshot(config.imgpath(browser) + 'react-app.png')
      .end();
  }
};