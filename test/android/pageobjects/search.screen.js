class searchScreen {
    get searchButton(){
        return $('//*[@resource-id="com.smule.singandroid:id/pre_search_title_text_view"]')
    }

    get searchField(){
        return $('//*[@resource-id="com.smule.singandroid:id/search_edit_text"]')
    }
    

    async matchingSongs(){
        await $('//*[@resource-id="com.smule.singandroid:id/song_title_textview"]').waitForExist({ timeout: 5000 })
        const songs = await $$('//*[@resource-id="com.smule.singandroid:id/song_title_textview"]')

        const songtTitle=[]
        for(const song of songs){
            songtTitle.push(await song.getText())
        }
        return songtTitle
    }

    async matchingArtists(){
        await $('//*[@resource-id="com.smule.singandroid:id/song_title_textview"]').waitForExist({ timeout: 5000 })
        const artists = await $$('//*[@resource-id="com.smule.singandroid:id/artist_textview"]')

        const artistNames=[]
        for(const artist of artists){
            artistNames.push(await artist.getText())
        }
        return artistNames
    }
}
module.exports = new searchScreen()