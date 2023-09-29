const loginUtils = require("../../../utils/loginUtils");
const feedScreen = require("../pageobjects/feed.screen");
const chai = require('chai');
const expect = chai.expect;

describe('Test the feed screen', () => {
    before('login before assetions', async () => {
        await loginUtils.doLogin()
    });

    it('should open the test feed', async() => {
        await feedScreen.feedButton.click()
        await feedScreen.feedButton.click()
        expect(await feedScreen.feedTitleContainer).to.be.exist

    });

    it('should tap on three dots and add it to playlist', async() => {
        await feedScreen.threeDotIcon.click()
        await feedScreen.addToPlaylistButton.click()
        await feedScreen.newPlaylistButton.click()
        await feedScreen.newPlaylistNameField.click()
        await feedScreen.newPlaylistNameField.setValue('automate')
        await feedScreen.playlistCreateBtn.click()
        expect(await feedScreen.isSuccessAlertDisplayed()).to.be.true

    });


});