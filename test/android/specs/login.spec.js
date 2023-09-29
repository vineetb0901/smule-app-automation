const loginScreen = require('../pageobjects/login.screen');
const credentials = require('../../../credentials.json')
const chai = require('chai');
const expect = chai.expect;
describe('loginScreen Test', () => {
    it('scroll and select the language test', async() => {
        await loginScreen.selectLanguage('English')
        await loginScreen.logInUsingEmail.click()

    });
    it("Should enter invalid email and check if the next button is enabled", async () => {
        await loginScreen.emailField.setValue(credentials.invalidEmail);
        expect(await loginScreen.nextButton.isEnabled()).to.be.false;
    });
    
    it('should enter invalid password and check for error message', async () => {
        await loginScreen.emailField.setValue(credentials.email);
        await loginScreen.nextButton.click();
        await loginScreen.passwordField.setValue(credentials.invalidPassword);
        await loginScreen.nextButton.click();
        expect(await loginScreen.doesErrorMessageExist()).to.be.true;
    });

    it('should enter the valid password and login', async() => {
        await loginScreen.cancelButton.click()
        await loginScreen.passwordField.setValue(credentials.password);
        await loginScreen.nextButton.click();

        expect(await loginScreen.isProfileIconExists()).to.be.true;
    });
    
});