const loginUtils = require("../../../utils/loginUtils");
const messageScreen = require("../pageobjects/message.screen");
const chai = require('chai')
const expect = chai.expect;

describe('Message test', () => {
    before('should do login before assertions',async() => {
        await loginUtils.doLogin()
    });

    it('should test the message center', async() => {
        await messageScreen.messageIcon.click()
        await messageScreen.messageIcon.click()
        await driver.pause(15000)
        await messageScreen.startNewChatBtn.click()
        await driver.pause(10000)
        await messageScreen.usernameSearchField.click()
        await messageScreen.usernameSearchField.setValue('kbaganna')
        await driver.keys('Enter')
        await messageScreen.foundUser.click()
        await messageScreen.nextButton.click()
        await messageScreen.sendMessage()
        const textMessages = await messageScreen.textMessages()
        expect(textMessages[-1]).to.equals('hi baganna!')
    });
});