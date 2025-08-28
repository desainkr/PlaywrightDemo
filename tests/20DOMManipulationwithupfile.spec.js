import {test,expect} from '@playwright/test';
import { log } from 'console';
import { describe } from 'node:test';
import path from 'path';
//const path = require('path');
describe('Upload files from dirctory', () =>{

   test('Upload file', async ({page}) => {
        
     //Open cart URL
  await page.goto('https://practice.sdetunicorns.com/cart/');
 
                  
  // provide test file path
  const filePath = path.join(__dirname,'../data/Capture.PNG');
//DOM manipulation

 await page.evaluate(() =>{
    const selector = document.querySelector('upfile_1');
    if(selector){
        selector.className='';
    }

 })
  //Select and upload file
    await page.locator('//input[@id="upfile_1"]').setInputFiles(filePath);
  //click on upload button
  await page.locator('//input[@id="upload_1"]').click();
  // Validate upload success message/Assertion/working both ways

await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');


   })

})