
import { test, expect } from '@playwright/test';
test("Verify Screenshot Functionality", async ({ page }) => {
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.screenshot({ path: "C:\Users\Neelakanta\Desktop\JavaScript\login.png"});
await page.getByPlaceholder("email@example.com").fill("desainkr@gmail.com")
await page.screenshot({ path: "C:\Users\Neelakanta\Desktop\JavaScript\Username.png"});
await page.getByPlaceholder("enter your passsword").fill("Balaji@123");
await page.screenshot({ path: "C:\Users\Neelakanta\Desktop\JavaScript\pwd.png"});
await page.locator("//input[@id='login']").click();
await page.screenshot({ path: "C:\Users\Neelakanta\Desktop\JavaScript\Submit.png"});
});