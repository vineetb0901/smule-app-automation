class profileScreen {
    get profileButton(){
        return $('//*[@resource-id="com.smule.singandroid:id/menu_item_profile"]')
    }
   

    get editProfile(){
        return $('//*[@text="Edit Profile"]')
    }

    get editBioField(){
        return $('//*[@resource-id="com.smule.singandroid:id/edit_bio"]')
    }

    get saveButton(){
        return $('//*[@resource-id="com.smule.singandroid:id/btn_save"]')
    }

    get bioDisplayField(){
        return $('//*[@resource-id="com.smule.singandroid:id/txt_profile_blurb"]')
    }

}
module.exports = new profileScreen()