const chai = require('chai');
const loginUtils = require('../../../utils/loginUtils');
const searchScreen = require('../pageobjects/search.screen');
const expect = chai.expect;


describe('searchbar test', () => {
    before('do login before assertions',async() => {
        await loginUtils.doLogin()
    });

    it('should search for songs', async() => {
        await searchScreen.searchButton.click()
        await searchScreen.searchButton.click()
        await searchScreen.searchField.addValue('heeriye')
        await driver.keys('Enter')
        const songs = await searchScreen.matchingSongs()
        console.log(songs);
        for(const song of songs){
            expect(song.toLowerCase()).to.contains('heeriye')
        }

    });

    it('should search for songs of particular artists', async() => {
        await searchScreen.searchField.setValue('Arijit singh')
        await driver.keys('Enter')
        const artists = await searchScreen.matchingArtists()
        for(const artist of artists){
            expect(artist.toLowerCase()).to.contains('arijit singh')
        }
    });
});