const { test, expect } = require("@playwright/test");
test.describe("Add Element", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements");
  });
  test("should trigger a delete button", async ({ page }) => {
      
      
   

    const btnDelete = page.locator('button.added-manually')
    const addBtn = page.locator('text=Add Element')
    //click the add element button

     addBtn.click();

    //assert to delete button
    
    expect(btnDelete).toHaveBeenCalled()
   //click btn button

    
  });
  

  
});
