const { test, expect } = require("@playwright/test");


test('test', async ({ page }) => {

  // Go to https://the-internet.herokuapp.com/dynamic_content
  await page.goto('https://the-internet.herokuapp.com/dynamic_content');

  // Click text=Dynamic Content
  await page.locator('text=Dynamic Content').click();

  // Click text=?with_content=static
  await page.locator('text=?with_content=static').click();

  // Click text=click here
  await page.locator('text=click here').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/dynamic_content?with_content=static');

  // Click img >> nth=1
  await page.locator('img').nth(1).click();

  // Click img >> nth=2
  await page.locator('img').nth(2).click();

  // Click img >> nth=3
  await page.locator('img').nth(3).click();

  

});