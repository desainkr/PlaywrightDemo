import {test,expect} from '@playwright/test';
import { describe } from 'node:test';
import path from 'path';
import CartPage from './Pages/cart.page';
//const path = require('path');
test.describe('Upload files from dirctory', () =>{
  let cartPage: CartPage;

  //passing parameters
   const filename =['Capture.PNG','TestRigor.pdf'];

    for (const name of filename) {
      test(`Shoul upload a ${name} file`, async ({page}) => {
      
        cartPage= new CartPage(page); 
     //Open cart URL
  await page.goto('https://practice.sdetunicorns.com/cart/');
             
  // provide test file path
  const filepath = path.join(__dirname,`../data/${name}`);
  
  cartPage.uploadComponent().uploadFile(filepath);
  //cartPage.uploadComponent().submitBtn.click();

await expect(cartPage.uploadComponent().successUploadMesage).toContainText(`File ${name} uploaded successfully`,{timeout:10000});
    
    })}

})