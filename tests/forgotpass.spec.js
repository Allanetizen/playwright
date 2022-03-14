// import { test, expect } from '@playwright/test';
const {test, expect} = require('@playwright/test')

test('test', async ({ page }) => {

  // Go to https://the-internet.herokuapp.com/forgot_password
  await page.goto('https://the-internet.herokuapp.com/forgot_password');

   // Click on <input> #email
   await page.click('#email');

   // Fill "kiballkip@gmail.com" on <input> #email
   await page.fill('#email', 'kiballkip@gmail.com');
 

  //retrieve
  await page.click('#form_submit');


  //assert error after redirection
  
  expect(page.locator('h1')).toContainText('Internal Server Error')



  await expect(page).toHaveURL('https://the-internet.herokuapp.com/forgot_password');

 

});