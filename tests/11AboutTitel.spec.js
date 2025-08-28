import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
import HomePage from './Pages/home.page';
describe('About', () =>{
    let homePage;
    test('Open Home page and verify title', async ({page})=>{
        homePage= new HomePage(page);
await page.goto('https://practice.sdetunicorns.com/');
await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');


})

test('Open about page and verify title', async ({page})=>{

await page.goto('https://practice.sdetunicorns.com/about/');
await expect(page).toHaveTitle('About – Practice E-Commerce Site');


})
})