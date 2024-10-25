
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the homepage {string}', async function(url){
  await this.driver.get(url);
});

When('the user helps the barista with exporting a beer', async function(){
  // TODO: implement step
});

Then('the user should be able to put it in their hipster bag', async function(){
  // TODO: implement step
});

Then('the user should receive double espressos from the barista as a reward', async function(){
  // TODO: implement step
});