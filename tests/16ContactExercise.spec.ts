
    import { test, expect } from '@playwright/test';
    import { ContactPage } from './Pages/contactPage';
    import { faker } from '@faker-js/faker';
test('Validate contact exercise', async ({ page }) => {
   const contactinfo= new ContactPage(page);
 //contactinfo.navigate();
   await page.goto('/');

 //wait page.pause(); // 🔥 Should open Playwright Inspector

  await page.locator('#zak-primary-menu li[id*=menu]').nth(4).click();
  await contactinfo.enterPersonalInfo(faker.person.fullName(),faker.internet.email(),faker.phone.number(),faker.lorem.paragraph());
  // await page.locator('#evf-277-field_ys0GeZISRs-1').fill("Neel");
  // await page.locator('#evf-277-field_LbH5NxasXM-2').fill("Neel@gmail.com");
  // await page.locator('#evf-277-field_66FR384cge-3').fill("9163333333");
  // await page.locator('#evf-277-field_yhGx3FOwr2-4').fill("Playwright testing in progress");
  // await page.locator('#evf-submit-277').click();

   const successMessage = page.getByRole('alert');
   //await expect(successMessage).toBeVisible(); // First, assert it’s visible
   await expect(successMessage).toHaveText("Thanks for contacting us! We will be in touch with you shortly");

  
  
});


