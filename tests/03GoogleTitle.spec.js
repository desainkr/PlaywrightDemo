import { test, expect } from '@playwright/test';

test("Verify Application Title", async ({ page }) => {
  await page.goto("https://www.google.com");

  const title = await page.title();
  console.log("Google Title is: " + title);
 await expect(page).toHaveTitle("Google");
  // Example assertion (optional)
  //expect(title).toContain("Google");
});