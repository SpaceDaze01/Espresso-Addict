
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the main page {string}', async function(url){
  await this.driver.get(url);
});

When('the user clicks on the {string} button {float} times', async function (waitBtn, b) {
  //FIXA
  let waitButton = await this.driver.findElements(By.css('ul li'));
  for (let button of waitButton) {
    if (await button.getText() === waitBtn) {
      await button.click();
      break;
    }
  }
});

Then('the game should end and the user should see a game over screen', async function(){
  // TODO: implement step
});