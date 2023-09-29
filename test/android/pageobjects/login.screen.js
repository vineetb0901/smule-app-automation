class login {
    async selectLanguage(language) {
        const scrollElement = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${language}")`;
        await $(scrollElement).click();

        await $("//*[@resource-id='com.smule.singandroid:id/yesButton']").click();
    }

    get logInUsingEmail() {
        return $("//*[@text='Sign in with Email']");
    }

    get emailField() {
        return $('//*[@resource-id="com.smule.singandroid:id/editField"]');
    }

    get passwordField() {
        return $('//*[@resource-id="com.smule.singandroid:id/editField"]');
    }

    get nextButton() {
        return $('//*[@resource-id="com.smule.singandroid:id/btn_next"]');
    }

    async doesErrorMessageExist() {
        const errorMessage = await $('//*[@resource-id="com.smule.singandroid:id/error_with_title_container"]');
        await errorMessage.waitForExist({ timeout: 10000 });

        return await errorMessage.isDisplayed();
    }

    get cancelButton(){
        return $('//*[@resource-id="com.smule.singandroid:id/cancel_button"]')
    }

    async isProfileIconExists() {
        const profileIcon = await $('//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]');
        await profileIcon.waitForExist({ timeout: 15000 });
        return profileIcon.isDisplayed();
    }
    
}
module.exports = new login()