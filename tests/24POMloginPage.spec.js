import {test,expect} from '@playwright/test';
import {LoginPage} from './Pages/loginPage';


test('Verify login functionality', async ({page})=>{``
    const Login = new LoginPage(page);

    await page.goto('https://the-internet.herokuapp.com/login');
    //await page.locator('#username').fill("tomsmith");
     await Login.login('tomsmith','SuperSecretPassword!');
    // await page.locator('#password').fill("SuperSecretPassword!");
    // await page.locator('//button[@type="submit"]').click();
    // expect(page.locator('//*[@id="content"]/div/h4')).toContainText("Welcome to the Secure Area. When you are done click logout below.")

}) 