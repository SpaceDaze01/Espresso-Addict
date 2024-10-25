
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the site {string}', async function(url){
  await this.driver.get(url);
});

When('clicks on {string}', async function(a){
  // TODO: implement step
});

Then('the user should be able to see money status after the interaction', async function(){
  // TODO: implement step
});