const { test, expect } = require('@playwright/test');

test('testing the logout page', async ({ page }) => {

  // Go to https://the-internet.herokuapp.com/login
  await page.goto('https://the-internet.herokuapp.com/logout');

  // Click input[name="username"]
  await page.locator('input[name="username"]').click();

  // Fill input[name="username"]
  await page.locator('input[name="username"]').fill('tomsmith');

 
  // Fill input[name="password"]
  await page.locator('input[name="password"]').fill('SuperSecretPassword!');

  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();

  

    //logout
   await page.locator('i:has-text("Logout")').click();
   await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

   //
    // assert flash text content
    expect(await page.locator('#flash').textContent()).toContain('You logged out of the secure area!')
   

 
  

});