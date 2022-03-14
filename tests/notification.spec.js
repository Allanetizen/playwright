const { test, expect } = require('@playwright/test');


test('notification test', async ({ page }) => {

  // Go to https://the-internet.herokuapp.com/notification_message_rendered
  await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');

  
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/notification_message_rendered');
   expect(await page.locator('#flash')).toBeTruthy();
  

});
