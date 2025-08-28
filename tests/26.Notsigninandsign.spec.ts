 import {test, expect} from '@playwright/test';
test.describe('Account Page', () => {
   test.use({storageState: 'notLoggedInstate.json'});
    
    test('Verify login and register is visiable', async ({page}) => {
        await page.goto('https://practice.sdetunicorns.com/my-account/');
        await expect(page.locator('//button[@name="register"]')).toBeVisible();
        await expect(page.locator('//button[@name="login"]')).toBeVisible();
    

    })


}); 

