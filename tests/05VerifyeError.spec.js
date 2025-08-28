import {test,expect} from  '@playwright/test';
test.use({ viewport: { width: 1080, height: 620 } });
test("Verify Error Message", async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login",{waitUntil: 'domcontentloaded'})
const Mesurments = await page.viewportSize();
//console.log(Mesurments.width);
//console.log(Mesurments.height);
await page.locator("//input[@placeholder='email@example.com']").fill("desaink@gmail.com")
await page.locator("//input[@placeholder='enter your passsword']").fill("Balaji@77")
await page.locator("//input[@type='submit' and @name='login']").click()
//wait fror the error message to appear
 const errorMessage = page.locator("//div[contains(@class, 'toast-bottom-right')]")
 await expect(errorMessage).toBeVisible( {timeout: 4000 })
 const Errortext= (await errorMessage.textContent()).trim()
 console.log("Error Message is :", Errortext);
 expect(Errortext.includes("Incorrect email or password.")).toBeTruthy()
 expect(Errortext.includes("password")).toBeTruthy();
 expect(Errortext.includes("Neel")).toBeFalsy();
 expect(Errortext==="Incorrect email or password.").toBeTruthy();

})
