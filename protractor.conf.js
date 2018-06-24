exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //multiCapabilities: [ ], {browserName: 'chrome',},
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            // args: ['--headless', '--disable-gpu', '--disable-browser-side-navigation']
            args: ['--disable-browser-side-navigation'] 
          }   
    },
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false, // Disable the Control Flow - use async await instead
    framework: 'jasmine',
    specs: ['./helpers/constantCreation.js'],
    // beforeLaunch: function() { },
    onPrepare: () => {
        browser.driver.manage().window().maximize();
    },
    // afterLaunch: function(exitCode) { },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 1000000,
        showTiming: true,
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
    },
    // allScriptsTimeout: 120000
};