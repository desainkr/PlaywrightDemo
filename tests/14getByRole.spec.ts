import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
import HomePage from './Pages/home.page';
describe('Text', () =>{
    let homePage: HomePage;
    test('Open Home page and verify Home Link', async ({page})=>{
homePage =new HomePage(page);

//Open URL
await homePage.navigate();
//page.waitForTimeout(100);
//Find the Home locator
//const homeLink= page.getByRole('link', {name: 'Home'}).nth(0);//Working fine
//await expect(homeLink).toBeTruthy();
//const homeLink = page.locator('#zak-primary-menu').getByRole('link', { name: 'Home' });
const homeEnabled =await homePage.homeLink.getByRole('link', { name: 'Home' });
await expect(homeEnabled).toBeEnabled();

//page.locator('//*[@id='zak-masthead']//*[contains(@class, 'zak-header-action zak-header-search')] [1]').click();
})

})

