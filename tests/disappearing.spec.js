
const { test, expect } = require("@playwright/test");


test.describe("DisappearingDynamic page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/disappearing_elements');
  });

  test('should route to home page', async ({ page }) => {
    
  
    await page.locator('text=Home').click();
    //assert
  
    
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/');

  
  });
  
  test('should route to about page', async ({ page }) => {
    
  //about button
    await page.locator('text=About').click();
    
  //assert about
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/about/');
  
  
    
  
  });


  test('should route to contact us page', async ({ page }) => {
    
    //about button
      await page.locator('text=Contact Us').click();
      
    //assert about
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/contact-us/');
    
    
      
    
    });
  






  
});

