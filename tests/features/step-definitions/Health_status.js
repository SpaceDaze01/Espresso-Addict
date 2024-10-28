
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the first page {string}', async function(url){
  await this.driver.get(url);
});

When('the user interacts by clicking on the {string} button on the page', async function(waitBtn){
  let waitButton = await this.driver.findElements(By.css('ul li'));
  for (let button of waitButton) {
    if (await button.getText() === waitBtn) {
      await button.click();
      break;
    }
  }
});

Then('the {string} condition should go down to {float}', async function (statusType, expectedValue){
  // Get the current value directly
  const cssSelector = `.${statusType.toLowerCase()} .progress`;
  const currentValue = Number(await this.driver.findElement({ css: cssSelector }).getText());

  // Compare the current value with the expected value
  expect(currentValue).to.equal(expectedValue);
});