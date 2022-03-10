const { test, expect } = require("@playwright/test");

test.describe("Select", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dropdown");
  });

  test("should select  option 1 from the select dropdown", async ({ page }) => {



    
    //select dropdown
    await page.selectOption("#dropdown", "1");

    //set value of selected
    const selectedValue = await page.$eval("#dropdown", (e) => e.value);

    //assertion  value = 1
    expect(selectedValue).toContain("1");
  });

  test("should select  option 2 from the select dropdown", async ({ page }) => {
    //select dropdown
    await page.selectOption("#dropdown", "2");

    //set value of selected
    const selectedValue = await page.$eval("#dropdown", (e) => e.value);

    //assertion  value = 2
    expect(selectedValue).toContain("2");
  });
});

