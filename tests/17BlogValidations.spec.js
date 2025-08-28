import {test,expect} from '@playwright/test';
import { log } from 'console';
import { describe } from 'node:test';
import { BlogPage } from './Pages/blog.page';

describe('Blog content', () =>{
test.beforeEach(async({ page })=>{
  const blogPage = new BlogPage(page);
  await blogPage.navigate();

})

  test('Validate Blog content', async ({page}) => {
      
     //Open URL
  //await page.goto('https://practice.sdetunicorns.com/');
    
  //click on contatc link
  await page.locator('#zak-primary-menu li[id*=menu]').nth(5).click();
  
  // Wait for blog page to load
  //await page.waitForURL('**/blog/');

  // Wait for the recent posts widget to appear
  await page.waitForSelector('#recent-posts-3 li a');

  //const blogLength= page.locator('#recent-posts-3 li a');
  // const blogLength= blogPage.recentPostList;
  // const blogCount =await blogLength.count();
  // for( let i=0; i<blogCount; i++){
  //   const text=await blogLength.nth(i).textContent();
  //   const trimmedText= text?.trim() || '';
  //   console.log(`post ${i+1}: "${trimmedText}" (Length: ${trimmedText.length} characters)`);
   // blogPage.printRecentPosts;

  })
  //console.log(`number of posts: ${blogCount}`);
  
//   const postLength= page.locator('#recent-posts-3 li a');
//  const Noofpostslength =await postLength.le
    })

