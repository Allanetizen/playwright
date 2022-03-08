const { test, expect } = require("@playwright/test");
test.describe("Alert", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  });
  test("should trigger an alert with a message", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      
      //alert dialog
      expect(dialog.message()).toContain("I am a JS Alert");
      
      //dismiss dialog
      await dialog.dismiss();
    });
    await page.click("text=Click for JS Alert");
  });
  test("should trigger a confirmation with a message", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      //assertion for confirm message
      expect(dialog.message()).toContain("I am a JS Confirm");
      await dialog.accept();
    });
    //click button
    await page.click("text=Click for JS Confirm");
    const $answer = await page.$("#result");
    const answerText = await $answer.innerText();
    //confirmation assertion
    expect(answerText).toContain("You clicked: Ok");
  });
});
