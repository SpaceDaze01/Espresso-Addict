import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
// import { By, until, Key } from 'selenium-webdriver';

Given('that I have started the game by navigating to {string}', async function (url) {
  await this.driver.get(url);
  // Important: wait for the relevant DOM element(s) to exist
  // - we should choose to wait for an element we expect to only be in the DOM
  //   with correct content/text to verify that the app has fully loaded
  await this.getByXPathWait('/descendant::*[@class="health"]//*[contains(text(), "50")]');
});

// Note: This step checks both health, money and consumed espresso shots....
Then('the value of my {string} should be {float}', async function (statusType, expectedNumValue) {
  // Translate statusType (Health, Money, Espressos) to cssSelector (.health, .money., .espressoCups)
  let cssSelector = '.' + statusType.toLowerCase();
  if (cssSelector === '.espressos') { cssSelector = '.espressocups'; }
  // Convert the selector so it only grabs the child element .progress
  cssSelector += ' .progress';
  // Grab the element and the text inside it and conver to a number (using +)
  let element = await this.get(cssSelector);
  let numValue = +(await element.getText());
  // Check world the value is correct
  expect(numValue).to.equal(expectedNumValue);
});

Then('my hipster bag should contain {string}', async function (expectedBagContent) {
  // Get the element with the bag content
  let bagElement = await this.get('.bag-content');
  // Get the text and trim from spaces at beginning and end
  let bagContent = (await bagElement.getText()).trim();
  // Check the bag content is correct
  expect(bagContent).to.equal(expectedBagContent);
});

Given('that my position is {string}', async function (a) {
  // TODO: implement step
});

Given('that I make the choice to {string}', async function (a) {
  // TODO: implement step
});

Then('my position should be {string}', async function (a) {
  // TODO: implement step
});

Given('that I know my current health', async function () {
  // TODO: implement step
});

When('I wait for the event {string} to take place', async function (a) {
  // TODO: implement step
});

Then('my health should be {string}', async function (a) {
  // TODO: implement step
});

Given('that I know my current menu choices', async function () {
  // TODO: implement step
});

Then('I should be given the new choice {string}', async function (a) {
  // TODO: implement step
});