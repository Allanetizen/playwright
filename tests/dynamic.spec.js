const { test, expect } = require("@playwright/test");

test.describe("Dynamic page test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_content");
  });

  test("link test test", async ({ page }) => {
    // Click text=Dynamic Content
    await page.locator("text=Dynamic Content").click();

    // Click text=?with_content=static
    await page.locator("text=?with_content=static").click();

    // Click text=click here
    await page.locator("text=click here").click();
    await expect(page).toHaveURL(
      "https://the-internet.herokuapp.com/dynamic_content?with_content=static"
    );
  });

  test("all images should have a true value", async ({ page }) => {
    // Click img >> nth=1
    await page.locator("img").nth(1).click();

    //assert all images
    await expect(page.locator("img")).toBeTruthy();
  });
});
