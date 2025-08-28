
const { test, expect } = require('@playwright/test')

 test("Valid login", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login", {waitUntil: 'domcontentloaded'});
  await page.getByPlaceholder("email@example.com").fill("desainkr@gmail.com",{delay:200});
  await page.locator("//input[@id='userPassword']").fill("Balaji@77",{delay:200});
  await page.locator("//input[@type='submit' and @name='login']").click({delay:200});
  //await page.waitForTimeout(5000);
  await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/dashboard/dash");
  await page.locator("//button[@class='btn btn-custom']").nth(3).click({delay:300});
  //await page.waitForTimeout(1000);
  await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/auth333/login");
 })
  
