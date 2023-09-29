class feedScreen {
    get feedButton(){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_feed"]')
    }

    get feedTitleContainer(){
        return $('//*[@resource-id="com.smule.singandroid:id/title_container"]')
    }

    async isFeedContainerExist() {
        await this.feedTitleContainer.waitForExist({ timeout: 15000 });
        return this.feedTitleContainer.isDisplayed();
    }

    get threeDotIcon(){
        return $('//*[@resource-id="com.smule.singandroid:id/mMoreIcon"]')
    }

    get addToPlaylistButton(){
        return $('//*[@text="Add to Playlist"]')
    }

    get newPlaylistButton(){
        return $('//*[@resource-id="com.smule.singandroid:id/btn_new_playlist"]')
    }

    get newPlaylistNameField(){
        return $('//*[@resource-id="com.smule.singandroid:id/edit_name"]')
    }

    get playlistCreateBtn(){
        return $('//*[@=resource-id"com.smule.singandroid:id/grp_progress_btn_frame"]')
    }

    async isSuccessAlertDisplayed(){
        const alertBar = await $('//*[@=resource-id="com.smule.singandroid:id/snackbar_text"]')
        // locators:  text= Added to automate, id = com.smule.singandroid:id/snackbar_text, package = com.smule.singandroid
        await alertBar.waitForExist({timeout:4000})
        return alertBar.isDisplayed()
    }

}
module.exports = new feedScreen()