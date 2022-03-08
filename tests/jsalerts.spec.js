const { test, expect } = require('@playwright/test');
test.describe('Alert', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  });
  test('should trigger an alert with a message', async ({ page }) => {
    page.on('dialog', async dialog => {
      expect(dialog.message()).toContain('I am a JS Alert');
      await dialog.dismiss();
    });
    await page.click('text=Click for JS Alert');
  });


});