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

  test("should trigger a confirmation with a message and cancel", async ({
    page,
  }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("I am a JS Confirm");
      await dialog.dismiss();
    });
    await page.click("text=Click for JS Confirm");
    const $answer = await page.$("#result");
    const answerText = await $answer.innerText();
    expect(answerText).toContain("You clicked: Cancel");
  });

  test("should trigger a prompt with a message", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("I am a JS prompt");
      await dialog.accept("Yes!");
    });
    //click button
    await page.click("text=Click for JS Prompt");
    //result = answer variable
    const $answer = await page.$("#result");

    const answerText = await $answer.innerText();
    //assertion for text
    expect(answerText).toContain("You entered: Yes!");
  });

  test("should trigger a prompt without a value", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.message()).toContain("I am a JS prompt");
      //cancel dialog
      await dialog.dismiss();
    });
    //click button
    await page.click("text=Click for JS Prompt");
    //result = answer variable
    const $answer = await page.$("#result");

    const answerText = await $answer.innerText();
    //assertion for text
    expect(answerText).toContain("You entered: null");
  });
});
