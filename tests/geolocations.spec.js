const { test, expect } = require('@playwright/test');
test('geolocation', async ({ page }) => {
  // Go to https://the-internet.herokuapp.com/geolocation
  await page.goto('https://the-internet.herokuapp.com/geolocation');

  // Click text=Where am I button
  await page.locator('text=Where am I?').click();
  
  //
  // Click on <div> "-1.2812288"
  await expect(page.locator('#lat-value')).toBeTruthy();

  // Click on <div> "36.8214016"
  await expect(page.locator('#long-value')).toBeTruthy()













});