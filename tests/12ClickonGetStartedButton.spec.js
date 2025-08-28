import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
describe('GetStarted', () =>{
    test('Open Home page and verify GetStarted button', async ({page})=>{

await page.goto('https://practice.sdetunicorns.com/');
page.locator('#get-started').click();
await expect(page).toHaveURL(/.*#get-started/);


})

})