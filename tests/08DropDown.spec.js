const{test, expect} = require('@playwright/test');
test ('Dropdown Test', async ({ page }) => {
await page.goto('https://freelance-learn-automation.vercel.app/signup');
await page.locator("//input[@id='name']").fill("Neel");
await page.locator("//input[@id='email'and @name='email']").fill("Neel@gmail.com");
await page.locator("//input[@id='password']").fill("password");
await page.getByLabel('JavaScript').check();
await page.locator('#gender1').click();
await page.locator("#state").selectOption({ label: "Andhra Pradesh" });
//await page.locator("#state").selectOption({ value: "Andhra Pradesh" });
//await page.locator("#state").selectOption({ index: 1 });
await expect(page.locator("#state")).toHaveValue("Andhra Pradesh");
/*const statesValues = await page.locator("#state").allTextContents();
console.log("All states values:\n"+ statesValues.join('\n'));
statesValues.forEach((state, index) => { 
console.log(`${index + 1}. ${state.trim()}`); */
let state = await page.$("#state");
  let allElements =await state.$$("option");
  let ddStatus=false;
  for (let i=0;i<allElements.length;i++){
    let element=allElements[i];
    let value=await element.textContent();
    console.log("Each state name is : " + value.trim());
    if (value.includes("Kerala")) {
      ddStatus=true;
      break;
    }
  }
  await expect(ddStatus).toBeTruthy();
  //expect`(statesValues).toContain("Andhra Pradesh").toBeTruthy();`  
  Option1    
  await page.locator('#hobbies').selectOption([
    { label: 'Reading' },
    { label: 'Swimming' },
    { label: 'Dancing' }
  ]);
  await page.waitForTimeout(2000);
  //await page.locator("//button[@class='submit-btn']").click();
});

