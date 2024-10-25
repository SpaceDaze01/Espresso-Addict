
import { Given, When, Then } from '@cucumber/cucumber';
import { By, until, Key } from 'selenium-webdriver';
import { expect } from 'chai';

Given('that the user is on the game page {string}', async function(url){
  await this.driver.get(url);
});

When('the user clicks on the {string} icon', async function(fullScreenMode){
  let element = await this.get('.go-fullscreen');

  let fullScreen = (await element.getText()).trim();
  expect(fullScreen).to.equal(fullScreenMode);

  await element.click();
});

Then('the user should be able to play in full screen mode', async function (screenBig) {
  //FIXA
  let isFullscreen = await this.execute(function () {
    return document.fullscreenElement !== null;
  });

  expect(isFullscreen).to.equal(screenBig === 'true');
});
