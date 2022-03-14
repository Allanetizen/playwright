const { test, expect } = require('@playwright/test');

test('inputs page test', async ({ page }) => {

  // Go to https://the-internet.herokuapp.com/inputs
  await page.goto('https://the-internet.herokuapp.com/inputs');

// input value var
const inputVal = await page.$("input[type='number']");

//set val
// const  value = await page.evaluate(el => el.textContent, element)


//add value
await inputVal.type("1");

//assert
expect(inputVal).toBeTruthy();

//assert for value

// expect(value).toBe(1)


});