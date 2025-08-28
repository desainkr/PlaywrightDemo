 import {test, expect} from '@playwright/test';
test.describe('My Account', () => {
  
    
    test('Access orders', async ({page}) => {
        //await page.goto('/my-account/');
        await page.goto('https://practice.sdetunicorns.com/my-account/'); // navigate first
        await page.locator(`li a[href*='orders']`).click();
        await expect(page).toHaveURL(/.*orders/);

    })

    test('Access Downloads', async ({page}) => {

         await page.goto('https://practice.sdetunicorns.com/my-account/'); //navigate first
         await page.locator(`li a[href*='downloads']`).click();
        await expect(page).toHaveURL(/.*downloads/);

    });

}); 

