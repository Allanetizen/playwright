const { test, expect } = require('@playwright/test');


test('notification test', async ({ page }) => {

//   // Go to https://the-internet.herokuapp.com/notification_message_rendered
//   await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');

//   // Click text=Click here
//   await page.locator('text=Click here').click();
//   await expect(page).toHaveURL('https://the-internet.herokuapp.com/notification_message_rendered');
//   expect(await page.locator('#flash').textContent()).toContain(' Action unsuccesful, please try again')

//   await browser.close();


});
test('notification after link click twice', async ({ page }) => {

    // Go to https://the-internet.herokuapp.com/notification_message_rendered
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');
  
    // Click text=Click here
    await page.locator('text=Click here').click();
    expect(await page.locator('#flash').textContent()).toContain(' Action unsuccesful, please try again')  
    //click twice
    await page.locator('text=Click here').click();
    expect(await page.locator('#flash').textContent()).toContain('Action successful')
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/notification_message_rendered');
    
  
  
  });