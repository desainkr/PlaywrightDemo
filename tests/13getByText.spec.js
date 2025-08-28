import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
describe('Text', () =>{
    test('Open Home page and verify Text Locator', async ({page})=>{
//Open URL
await page.goto('https://practice.sdetunicorns.com/');
page.waitForTimeout(200);
//Find the text locator
const headingText= page.getByText('Think different. Make different.');
await expect(headingText).toBeVisible();


})

})