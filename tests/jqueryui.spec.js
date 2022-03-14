const{ test, expect } = require('@playwright/test');
test('jquery ui test', async ({ page }) => {
  // Go to https://the-internet.herokuapp.com/jqueryui/menu
  await page.goto('https://the-internet.herokuapp.com/jqueryui/menu');
  // Click text=JQuery UI Menus
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://the-internet.herokuapp.com/jqueryui/menu' }*/),
    page.locator('text=JQuery UI Menus').click()
  ]);

  // Go to https://the-internet.herokuapp.com/jqueryui/menu#
  await page.goto('https://the-internet.herokuapp.com/jqueryui/menu#');

  expect(page.locator('a:has-text("JQuery UI")').first()).toHaveAttribute('href', 'https://jqueryui.com/');

  // Go to https://the-internet.herokuapp.com/jqueryui
  await page.goto('https://the-internet.herokuapp.com/jqueryui');

  // Click a:has-text("JQuery UI")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://the-internet.herokuapp.com/jqueryui/menu' }*/),
    page.locator('a:has-text("JQuery UI")').click()

     
  
     
  ]);
  
});