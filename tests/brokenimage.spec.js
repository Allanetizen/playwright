import { test, expect } from '@playwright/test';
test('test', async ({ page }) => {
  // Go to https://the-internet.herokuapp.com/broken_images
  await page.goto('https://the-internet.herokuapp.com/broken_images');
  // Click img >> nth=1
  await page.locator('img').nth(1).click();
  // Click img >> nth=2
  await page.locator('img').nth(2).click();
  // Click img >> nth=3
  await page.locator('img').nth(3).click();
  
});