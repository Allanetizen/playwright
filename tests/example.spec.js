// example.spec.js
const { test, expect } = require("@playwright/test");

test("my test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/abtest");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);
  // Expect an attribute "to be strictly equal" to the value.
});
