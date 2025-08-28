/*import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
describe('Text', () =>{
    test('Open verify seach Icon', async ({page})=>{
//Open URL
await page.goto('https://practice.sdetunicorns.com/');

//find seach icon

const searchIcon = page.locator('xpath=(//*[@id="zak-masthead"]//*[@class="zak-header-action zak-header-search"])[1]');

// verify search icon visible
await expect(searchIcon).toBeVisible();
})

}) */
//
import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
describe('Text', () =>{
    test(' verify text for all Navigation links', async ({page})=>{
        const expectedLinks=["Home", "About","Shop","Blog","Contact","My account"];
//Open URL
await page.goto('https://practice.sdetunicorns.com/');

//find Navigation Links icon

//const navLinks = page.locator('#zak-primary-menu li[id*=menu]')
//Verify nav links text
//console.log(await NavLinks.allTextContents());//  Will now print the array of texts

/*const links = await navLinks.allTextContents();
links.forEach((text, i) => {
  console.log(`Link ${i + 1}: ${text}`);
});
 Blog;
const navLinks = page.locator('#zak-primary-menu li[id*=menu]').nth(3);
 expect( await navLinks.textContent()).toEqual(expectedLinks[3]); */
 const navLinks = page.locator('#zak-primary-menu li[id*=menu]');
 const actualLinks=[];
 for (const el of await navLinks.elementHandles()) {
    const text= await el.textContent();
    actualLinks.push(text?.trim());// Use trim() to clean up spaces
    
 }
 actualLinks.forEach((text, i) =>{
 console.log(`Link ${i+1} : ${text}`)

 } );    
expect(actualLinks).toEqual(expectedLinks);
})

});

