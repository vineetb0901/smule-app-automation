class themeScreen {
    get navbarMenu(){
        const navbar = $('//*[@resource-id="com.smule.singandroid:id/btn_menu"]')
        navbar.waitForExist({timeout:4000})
        return navbar
    }

    get settingsIcon(){
        const settings = $('//*[@resource-id="com.smule.singandroid:id/content"]')
        settings.waitForExist({timeout:4000})
        return settings
    }

    // get darkThemeText(){
    //     return $('//*[@text="Dark Theme"]')
    // }

    // get darkThemeToggle(){
    //     return $('//*[@resource-id="com.smule.singandroid:id/enable_dark_theme_switch"]')
    // }

    async toggleDarkTheme() {
        const scrollElement = `android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Dark Theme")`;
        const toggleBtn = await $('//*[@resource-id="com.smule.singandroid:id/enable_dark_theme_switch"]')
        await toggleBtn.click();

        await $("//*[@resource-id='com.smule.singandroid:id/yesButton']").click();
    }
}
module.exports = new themeScreen()