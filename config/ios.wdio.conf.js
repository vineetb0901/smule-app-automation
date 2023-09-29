const { config } = require('./wdio.conf')

config.port = 4723

config.specs = [
    '../test/ios/specs/**/*.js'
]

config.capabilities =[
    {
        platformName: "iOS",
        "appium:platformVersion": "16.4",
        "appium:deviceName": "iPhone 14",
        "appium:automationName": "XCUITest",
        "appium:app": "/Users/testvagrant/Mobile Automation/smule/app/ios/smule.ipa",
    }
]
exports.config = config