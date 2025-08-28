import{test, expect} from '@playwright/test';
test.describe('Home',() =>{
    test("open home page",async({page})=>{
  await page.goto("https://demowebshop.tricentis.com/login");
  await page.locator("//input[@id='Email']").fill("desainkr@gmail.com");
  await page.locator("//input[@id='Password']").fill("Letmein@77");
  await page.locator("//input[@value='Log in']").click();
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
    })}
)

