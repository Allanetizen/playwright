const { test, expect } = require("@playwright/test");

test('disappearing elements home', async ({ page }) => {
  // Go to https://the-internet.herokuapp.com/disappearing_elements
  await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
  // Click text=Home
  await page.locator('text=Home').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
  
 



});

