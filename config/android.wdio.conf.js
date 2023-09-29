const { config } = require('./wdio.conf')

config.port = 4723

config.specs = [
    '../test/android/specs/**/*.js'
]

// capabilities for local Appium web tests on an Android Emulator
config.capabilities = [
    {  
        'appium:platformName': 'Android',
        'appium:deviceName': 'Pixel 6',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app':'/Users/testvagrant/Mobile Automation/smule/app/android/smule.apk',
        'appium:autoGrantPermissions': true,
    }
]

exports.config = config
