import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.getByRole('textbox', { name: 'email@example.com' }).fill('desainkr@gmail.com');
  await page.getByRole('textbox', { name: 'enter your passsword' }).fill('Balaji@77');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Sign Out' }).click();
});