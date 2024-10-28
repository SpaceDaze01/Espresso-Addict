
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the game site {string}', async function(url){
  await this.driver.get(url);
});

When('the user clicks on the {string} button', async function(helpBtn){
  //FIXA
  let helpButton = await this.driver.findElements(By.css('ul li'));
  for (let button of helpButton) {
    if (await button.getText() === helpBtn) {
      await button.click();
      break;
    }
  }
});

Then('it should display a text with information and rules about the game', async function(){
  // TODO: implement step
});