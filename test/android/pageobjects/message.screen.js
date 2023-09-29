class messageScreen {
    get messageIcon(){
        return $('//*[@resource-id="com.smule.singandroid:id/action_message_center"]')
    }

    get startNewChatBtn(){
        return $('//*[@resource-id="com.smule.singandroid:id/start_new_chat_menu"]')
    }

    get usernameSearchField(){
        return $('//*[@resource-id="com.smule.singandroid:id/search_edit_text"]')
    }

    get foundUser(){
        return $('//*[@resource-id="com.smule.singandroid:id/chat_title"]/parent::*')
    }

    get nextButton(){
        return $('//*[@resource-id="com.smule.singandroid:id/action_next"]')
    }

    async sendMessage(){
        const message = 'hi baganna!'
        const messageField = await $('//*[@resource-id="com.smule.singandroid:id/inputBox"]')
        messageField.setValue(message)
        const sendButton = await $('//*[@resource-id="com.smule.singandroid:id/send_button"]')
        await sendButton.click()
    }

    async textMessages(){
        await $('//*[@resource-id="com.smule.singandroid:id/chat_text_bubble"]').waitForExist({ timeout: 5000 })
        const texts = await $$('//*[@resource-id="com.smule.singandroid:id/chat_text_bubble"]')

        const textMessages=[]
        for(const text of texts){
            textMessages.push(await text.getText())
        }
        return textMessages
    }

    // com.smule.singandroid:id/chat_text_bubble
}
module.exports = new messageScreen()