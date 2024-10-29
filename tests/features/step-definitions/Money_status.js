
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the site {string}', async function (url) {
  await this.driver.get(url);
});

When('When the user clicks on the button {string}', async function (enterCafeBtn) {
  let enterCafeButton = await this.driver.findElements(By.css('ul li'));
  for (let button of enterCafeButton) {
    if (await button.getText() === enterCafeBtn) {
      await button.click();
      break;
    }
  }
});

When('clicks on {string}', async function (buyEspressoBtn) {
  let buyEspressoButton = await this.driver.findElements(By.css('ul li'));
  for (let button of buyEspressoButton) {
    if (await button.getText() === buyEspressoBtn) {
      await button.click();
      break;
    }
  }
});

Then('the user should be able to see {string} status after the interaction go down to {float}', async function (statusTypeMoney, expectedValueMoney) {
  const cssSelector = `.${statusTypeMoney.toLowerCase()} .progress`;

  await this.driver.wait(until.elementLocated(By.css(cssSelector)), 5000);
  const element = await this.driver.findElement(By.css(cssSelector));
  const currentValue = await element.getText();

  expect(Number(currentValue)).to.equal(expectedValueMoney);
});
