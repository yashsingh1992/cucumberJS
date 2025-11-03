const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pageObjects/loginPage');


Given('I am on login page', {timeout: 100*1000}, async function () {
   


  await this.login.goto();

  });


 When('I enter {string}, {string} and click the sign in', async function (username, password) {
 
      await this.login.validLogin(username, password);

    });


Then('I should be redirected to the dashboard', function () {
        
  console.log("I should be redirected to the dashboard");
    
});


