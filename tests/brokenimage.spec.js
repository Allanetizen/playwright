const { test, expect } = require("@playwright/test");
test("test for broken image", async ({ page }) => {
  // Go to https://the-internet.herokuapp.com/broken_images
  await page.goto("https://the-internet.herokuapp.com/broken_images");

  //assert for heading
  await expect(page.locator("h3").locator("text=Broken Images")).toBeVisible();
  //assert for visible image 3
  await expect(page.locator("img").locator("nth=3")).toBeVisible();

  //assert for images not visible
  await expect(page.locator("img").locator("img >> nth=1")).not.toBeVisible();
  await expect(page.locator("img").locator("img >> nth=2")).not.toBeVisible();
});
