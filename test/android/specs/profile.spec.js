const loginScreen = require("../pageobjects/login.screen");
const profileScreen = require("../pageobjects/profile.screen");
const loginUtils = require("../../../utils/loginUtils");

describe('Profile page test', () => {
    before('login before assetions',async() => {
        await loginUtils.doLogin()
    });
    
    it('Should check the profile name', async() => {
        await profileScreen.profileButton.click()
        await profileScreen.profileButton.click()
        await profileScreen.editProfile.click()
        const bio ='Just added bio'
        await profileScreen.editBioField.setValue(bio)
        await profileScreen.saveButton.click()
        expect (await profileScreen.bioDisplayField).toHaveText(bio)
    });
});