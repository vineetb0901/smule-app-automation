const loginUtils = require("../../../utils/loginUtils");
const profileScreen = require("../pageobjects/profile.screen");
const themeScreen = require("../pageobjects/theme.screen");

describe('setting test', () => {
    before('should do login before assertions',async() => {
        await loginUtils.doLogin()
    });
    
    it('should change the theme of app', async() => {
        await profileScreen.profileButton.click()
        await profileScreen.profileButton.click()
        await themeScreen.navbarMenu.click()
        await themeScreen.settingsIcon.click()
        await themeScreen.toggleDarkTheme()
        await driver.pause(5000)
    });
});