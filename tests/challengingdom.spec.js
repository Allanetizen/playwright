

const { test, expect } = require("@playwright/test");

test.describe("Challenging dom", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/challenging_dom');
  });

  test("click buttons and check url match", async ({ page }) => {
    

     // Click text=bar
  await page.locator('a.button.alert').click();
  
  //assert link
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/challenging_dom');


  });
 
});









