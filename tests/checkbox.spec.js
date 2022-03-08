const { test, expect } = require("@playwright/test");

test.describe("Checkboxes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/checkboxes");
  });

  test("should check all the checkboxes", async ({ page }) => {
    //check all the checkboxes
    const checkboxStates = await page.evaluate(() => {
      const checkboxes = document.querySelectorAll("[type=checkbox]");
      return [...checkboxes].map((c) => c.checked);
    });

    //assertion
    expect(checkboxStates).toBeTruthy();
  });
  test("should uncheck all the checkboxes", async ({ page }) => {
    //uncheck all the checkboxes
    const checkboxStates = await page.evaluate(() => {
      const checkboxes = document.querySelectorAll("[type=checkbox]");
      return [...checkboxes].map((c) => c.unChecked);
    });

    //assertion
    expect(checkboxStates).toBeTruthy();
  });
});
