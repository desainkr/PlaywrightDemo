import {test,expect} from '@playwright/test';
import { log } from 'console';
import { describe } from 'node:test';
import path from 'path';
//const path = require('path');
describe('Upload files from dirctory', () =>{

   test('Upload file', async ({page}) => {
        
     //Open cart URL
  await page.goto('https://practice.sdetunicorns.com/cart/');
  //click on shopCart link
       //  await page.locator('(//a[@title="View your shopping cart"])[1]').click();
                  
  // provide test file path
  const filePath = path.join(__dirname,'../data/TestRigor.pdf');
  //Select file
    await page.locator('//input[@id="upfile_1"]').setInputFiles(filePath);
  //Upload file
  await page.locator('//input[@id="upload_1"]').click();
  // Validate upload success message/Assertion/working both ways

  //wait for condition -- Recommended 
  await  page.locator('#wfu_messageblock_header_1_label_1').waitFor({state: 'visible', timeout: 10000});
   
/* const successUploadMesage=  page.getByText("File Capture.PNG uploaded successfully");
 await expect(successUploadMesage).toBeVisible();*/ 
await expect(page.locator('#wfu_messageblock_header_1_label_1')).toContainText('uploaded successfully');


   })

})