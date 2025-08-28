import { chromium, FullConfig,expect } from "@playwright/test";

async function globalSetup(config: FullConfig){
     const browser= await chromium.launch();   
     const page = await browser.newPage();
        await page.goto('https://practice.sdetunicorns.com/my-account/');
        await page.context().storageState({path: 'notLoggedInstate.json'});
        //Login
        await page.locator('#username').fill('practiceuser1');
        await page.locator('#password').fill('PracticePass1!');
        await page.locator('//button[@name="login"]').click();
        // await expect(page).toHaveURL(/.*my-account/);
        // await expect(page.locator('//*[@id="post-9"]/div/div/div/div/p[1]/a')).toBeVisible();


        //save signed-in state to 'loggedInstate.json'
        await page.context().storageState({path: 'loggedInstate.json'});
        await browser.close();
}

export default globalSetup;