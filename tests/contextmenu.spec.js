const { test, expect } = require("@playwright/test");

test('Context menu', async ({ page }) => {
  // Go to https://the-internet.herokuapp.com/context_menu
  await page.goto('https://the-internet.herokuapp.com/context_menu');
  // Click h3:has-text("Context Menu")
  await page.locator('h3:has-text("Context Menu")').click();

  // Click #hot-spot
  await page.locator('#hot-spot').click();
  // Click #hot-spot
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});

    //assert dialog message
  expect(dialog.message()).toContain("You selected a context menu");
  });
  
  await page.locator('#hot-spot').click({
    button: 'right'
  });
});