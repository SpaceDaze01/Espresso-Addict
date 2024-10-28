
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';
//KLAR
Given('that the user is on the game page {string}', async function(url){
  await this.driver.get(url);
});

When('the user clicks on the {string} icon', async function(fullScreenMode){
  let element = await this.get('.go-fullscreen');

  let fullScreen = (await element.getText()).trim();
  expect(fullScreen).to.equal(fullScreenMode);

  await element.click();
});

Then('the user should be able to play in full screen mode {string}', async function (screenBig) {
  // Wait until the fullscreen state changes
  await this.driver.wait(async () => {
    return await this.driver.executeScript('return document.fullscreenElement !== null;');
  }, 5000); // Adjust timeout as necessary

  // Check if the user is in fullscreen mode
  const isFullscreen = await this.driver.executeScript('return document.fullscreenElement !== null;');
  expect(isFullscreen).to.equal(screenBig === 'true');
 
});
