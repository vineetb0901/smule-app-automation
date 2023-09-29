const loginScreen = require("../test/android/pageobjects/login.screen");
const credentials = require('../credentials.json');

class loginUtil {
    async doLogin(){
        await loginScreen.selectLanguage('English')
        await loginScreen.logInUsingEmail.click()
        await loginScreen.emailField.setValue(credentials.email);
        await loginScreen.nextButton.click()
        await loginScreen.passwordField.setValue(credentials.password)
        await loginScreen.nextButton.click()
    }
}
module.exports = new loginUtil()