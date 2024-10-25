
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the first page {string}', async function(url){
  await this.driver.get(url);
});

When('the user interact by clicking on different buttons on the page', async function(){
  // TODO: implement step
});

Then('the health condition is lowered', async function(){
  // TODO: implement step
});