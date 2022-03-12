const { test, expect } = require('@playwright/test');

test('inputs page test', async ({ page }) => {

  // Go to https://the-internet.herokuapp.com/inputs
  await page.goto('https://the-internet.herokuapp.com/inputs');

 // Fill "2" on <input> input
 await page.fill('input', '2');

  const $answer = await page.$('input[type="number"]');
  const answerText = await $answer.innerText();

  //assert value
  

  expect(answerText).toBe('2')
//   expect(await page.locator('input[type="number"]')).toHaveValue('10')

});