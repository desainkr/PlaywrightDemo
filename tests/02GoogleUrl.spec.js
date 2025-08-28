const {test,expect} = require('@playwright/test')

test("Verify Application URL",async ({page}) => {
   await page.goto("https://www.google.com")
    const url = await page.url()
  console.log("Google URL is: " + url)

  
})

