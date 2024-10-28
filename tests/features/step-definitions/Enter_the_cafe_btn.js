
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
//KLAR
Given('that the user on the web page {string}', async function(url){
  await this.driver.get(url);
  await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]'); //kan användas till andra tester
});

When('the user clicks on the button {string}', async function(cafeButton){
  let buttons = await this.driver.findElements(By.css('ul li'));
  for (let button of buttons) {
    if (await button.getText() === cafeButton) {
      await button.click();
      break;
    }
  }
});

Then('the user should get two new aternatives to choose from: {string} and {string}', async function(exitBtn, buyBtn){
  let exitButton = await this.driver.findElements(By.css('ul li'));
  for (let button of exitButton) {
    if (await button.getText() === exitBtn) {
      await button.click();
      break;
    }
  }

  let buyButton = await this.driver.findElements(By.css('ul li'));
  for (let button of buyButton) {
    if (await button.getText() === buyBtn) {
      await button.click();
      break;
    }
  }

});