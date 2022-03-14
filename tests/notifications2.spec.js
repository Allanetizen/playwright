const { test, expect } = require('@playwright/test');

test('notification after link click twice', async ({ page }) => {

    // Go to https://the-internet.herokuapp.com/notification_message_rendered
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
  
    
    await page.locator('text=Click here').click();
    expect(await page.locator('#flash')).toBeTruthy();
   
    
  
  
  });