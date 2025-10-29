const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pageObjects/loginPage');


Given('I am on login page', async function () {
   
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  this.login = new LoginPage(page);
  await this.login.goto();

  });


When('I enter {string}, {string} and click the sign in', async function (username, password) {
 
      await this.login.validLogin(username, password);

    });


Then('I should be redirected to the dashboard', function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });