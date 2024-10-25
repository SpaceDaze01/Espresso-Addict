
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
// import { By, until, Key } from 'selenium-webdriver';

Given('that I have started the game by navigating to {string}', async function (url) {
  await this.driver.get(url);
});

Then('the value of my {string} should be {float}', async function (statusType, expectedNumValue) {
  // translate statusType (Health, Money, Espressos) to cssSelector (.health, .money., .espressoCups)
  let cssSelector = '.' + statusType.toLowerCase();
  if (cssSelector === '.espressos') { cssSelector = '.espressocups'; }
  // convert the selector so it only grabs the child element .progress
  cssSelector += ' .progress';
  // grab the dom element and the text inside it and conver to a number (using +)
  let element = await this.get(cssSelector);
  let numValue = +(await element.getText());
  // compare value and expected value
  expect(numValue).to.equal(expectedNumValue);
});

Then('my hipster bag should contain {string}', async function (expectedBagContent) {
  // get the lement with the bag content
  let element = await this.get('.bag-content');
  // get the text and trim from spaces at beginning and end
  let bagContent = (await element.getText()).trim();
  expect(bagContent).to.equal(expectedBagContent);
});

Then('I should be at the location {string}', async function (outsideCafeImage) {
 //FIXA
  // get the element with the image of the cafe
  let element = await this.get('.big-image img');

  // get the src attribute of the image
  let ImageCafe = (await element.getAttribute('src'));
  expect(ImageCafe).to.equal(outsideCafeImage);
});

Given('that I make the choice to {string}', async function (GoNorth) {
  // Select the button with specific text
  let buttonSelector = 'menu[class="choices"]'; // Adjust this if necessary
  
  let element = await this.get(buttonSelector);

  // Get the text of the button
  let northChoice = (await element.getText()).trim();
  
  // Check if the text matches the expected choice
  expect(northChoice).to.equal(GoNorth);
});


Given('that I am at the location {string}', async function (a) {
  // TODO: implement step
});

When('I wait for the event {string} to take place', async function (a) {
  // TODO: implement step
});

Then('the value of my {string} should be {string}', async function (a, b) {
  // TODO: implement step
});

Then('I should be given the new choice {string}', async function (a) {
  // TODO: implement step
});