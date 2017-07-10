require('env2')('.env'); // optionally store youre Evironment Variables in .env 
const SCREENSHOT_PATH = './screenshots/';
const BINPATH = './node_modules/nightwatch/bin/';
 
// we use a nightwatch.conf.js file so we can include comments and helper functions 
module.exports = {
  'src_folders': [
    'test/e2e'// Where you are storing your Nightwatch e2e tests 
  ],
  'output_folder': './reports', // reports (test outcome) output by nightwatch 
  'selenium': { // downloaded by selenium-download module (see readme) 
    'start_process': true, // tells nightwatch to start/stop the selenium process 
    'server_path': BINPATH + 'selenium.jar',
    'host': '127.0.0.1',
    'port': 4444,
    'cli_args': {
      'webdriver.chrome.driver' : BINPATH + 'chromedriver',
      'webdriver.gecko.driver' : BINPATH + 'geckodriver'
    }
  },
  'test_settings': {
    'default': {
      'launch_url' : 'http://localhost:3000/',
      'screenshots': {
        'enabled': true, // if you want to keep screenshots 
        'path': './screenshots' // save screenshots here 
      },
      'globals': {
        'waitForConditionTimeout': 5000 // sometimes internet is slow so wait. 
      },
      'desiredCapabilities': { // use Chrome as the default browser for tests 
        'browserName': 'chrome'
      }
    },
    'guillaumeTest': {
      'launch_url': 'http://localhost',
      'selenium_port': 4444,
      'selenium_host': '127.0.0.1',
      'silent': true,
      'screenshots': {
        'enabled': true,
        'path': SCREENSHOT_PATH
      },
      'globals': {
        'waitForConditionTimeout': 5000
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'acceptSslCerts': true,
        'chromeOptions': {
          'args': [
            '--new-window',
            '--disable-background-networking',
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-hang-monitor',
            '--disable-prompt-on-repost',
            '--disable-default-apps',
            '--disable-translate',
            '--disable-sync',
            '--disable-web-resources',
            '--disable-translate-new-ux',
            '--disable-session-crashed-bubble',
            '--disable-password-manager-reauthentication',
            '--disable-save-password-bubble',
            '--disable-plugins-discovery',
            '--disable-plugins',
            '--disable-popup-blocking',
            '--safe-plugins',
            '--safebrowsing-disable-auto-update',
            '--safebrowsing-disable-download-protection',
            '--ignore-certificate-errors',
            '--metrics-recording-only',
            '--no-default-browser-check',
            '--no-first-run',
            '--no-managed-user-acknowledgment-check',
            '--no-network-profile-warning',
            '--no-pings',
            '--noerrdialogs',
            '--password-store=basic',
            '--test-type'
          ]
        }
      }
    }
  }
}
/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 /the following code checks for the existence of `selenium.jar` before trying to run our tests.
 */
 
require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it? 
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit! 
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});
 
function padLeft (count) { // theregister.co.uk/2016/03/23/npm_left_pad_chaos/ 
  return count < 10 ? '0' + count : count.toString();
}
 
var FILECOUNT = 0; // 'global' screenshot file count 
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath (browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name); // this is the test filename so always exists. 
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}
 
module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;