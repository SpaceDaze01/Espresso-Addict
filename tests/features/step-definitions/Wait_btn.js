
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the page {string}', async function(url){
  await this.driver.get(url);
});


Then('the user should be able to interact with the game by various directives that appear on the screen', async function(){
  // TODO: implement step
});