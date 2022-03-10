const { test, expect } = require("@playwright/test");

test.describe("Add/Remove Elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
  });

  test("delete button should appear", async ({ page }) => {
 
    
    // Clicks add button.
await page.locator('button:has-text("Add Element")').click();


//expect a delete button
expect(page.locator('.added-manually')).toBeTruthy();



  });
 
});
