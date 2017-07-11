var config = require('../../nightwatch.conf.js');

module.exports = {
  before: () => console.log(' *** STARTING APP TEST ***'),
  after: () => console.log(' *** ENDING APP TEST ***'),

  // By default the done invocation timeout is set to 10 seconds
  beforeEach: (browser, done) => {
    browser
      .resizeWindow(1024, 768, done)
      .url('http://localhost:3000/')
      .waitForElementVisible('body')
  },

  'my custom functional test name - React App Assert Title': (browser) => {
    browser
      .assert.title('React App')
      .saveScreenshot(config.imgpath(browser) + 'react-app.png');
  },

  'Testing some CSS class names within the app': (browser) => {
    browser
      .waitForElementVisible('#hideMe', 1000)
      .assert.cssClassPresent('#hideMe', 'hideButton')
      .assert.cssClassNotPresent('#hideMe', 'changeLanguageButton')
      // need to find a better way to refer to that button without having to use the class name
      .assert.cssClassPresent('button.changeLanguageButton', 'changeLanguageButton')
      .assert.cssClassPresent('button[class=changeLanguageButton]', 'changeLanguageButton');
  },

  'Testing some CSS properties within the app': (browser) => {
    browser
      .waitForElementVisible('#hideMe', 1000)
      .assert.cssProperty('#hideMe', 'font-weight', 'bold')
      // colors need to be given as rgba values
      .assert.cssProperty('button.changeLanguageButton', 'background-color', 'rgba(255, 215, 0, 1)')
      .assert.cssProperty('button[class=changeLanguageButton]', 'font-size', '15px');
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
      .assert.urlContains('thulium')
      .assert.urlEquals('http://www.thulium69.com/');
  },

  'Testing the presence of the Hello text by default in the language container': (browser) => {
    browser
      .assert.elementPresent('.languageContainer')
      .assert.containsText('.languageContainer', 'Hello');
  },

  'Testing the non-presence of the Bonjour text by default in the language container': (browser) => {
    // assert doesnt have a .not assertion yet so we have to use expect
    browser.expect.element('.languageContainer').text.to.not.contain('Bonjour');
  },

  'Testing the presence of the Frenchify text by default in the change language button': (browser) => {
    browser.expect.element('.changeLanguageButton').to.be.a('button');
    browser.expect.element('.changeLanguageButton').text.to.contain('Frenchify');
  },

  'Testing the non-presence of the Englishfy text by default in the change language button': (browser) => {
    browser.expect.element('.changeLanguageButton').text.not.to.contain('Englishfy');
  },

  'Clicking the Frenchify button to change the displayed language to Bonjour and the button to Englishfy': (browser) => {
    browser
      .click('.changeLanguageButton')
      .assert.containsText('.languageContainer', 'Bonjour')
      .expect.element('.languageContainer').text.not.to.contain('Hello');

    browser
      .assert.containsText('.changeLanguageButton', 'Englishfy')
      .expect.element('.changeLanguageButton').text.not.to.contain('Frenchify');
    browser.end();
  }
};