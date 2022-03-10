const { test, expect } = require('@playwright/test');

test('testing the login page', async ({ page }) => {

  // Go to https://the-internet.herokuapp.com/login
  await page.goto('https://the-internet.herokuapp.com/login');

  // Click input[name="username"]
  await page.locator('input[name="username"]').click();

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('tomsmith');

 
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('SuperSecretPassword!');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();

   // assert flash text content
   expect(await page.locator('#flash').textContent()).toContain('You logged into a secure area!')


  //click the logout button
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
 
  

});