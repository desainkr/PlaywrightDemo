import {test,expect} from '@playwright/test';
import { log } from 'console';
import { describe } from 'node:test';
describe('Blog content', () =>{

   test('Validate Blog content', async ({page}) => {
        
     //Open Blog URL
  await page.goto('https://practice.sdetunicorns.com/blog/');
  //click on contatc link
  await page.locator('#zak-primary-menu li[id*=menu]').nth(5).click();
  // Wait for blog page to load
  //await page.waitForURL('**/blog/');

  // Wget the recent post list elements
  //await page.waitForSelector('#recent-posts-3 li a');
  const recentPostElements= page.locator('#recent-posts-3 li a');

  //loop through the list and assert the char lenth >10
/* for(let i=0; 1 <recentPostElements  ; i++){
   const text=await recentPostElements.nth(i).textContent();
    const trimmedText= text?.trim() || '';
    console.log(`post ${i+1}: "${trimmedText}" (Length: ${trimmedText.length} characters)`);
  
 }*/

for (const el of await recentPostElements.elementHandles()) {
    const text= (await el.textContent())?.trim() || ``;
    expect(text.length).toBeGreaterThan(15);
}

    //assert the total length=5
    expect(await recentPostElements.count()).toEqual(5);
  
    })

})