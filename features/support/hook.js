const {Before, After, AfterStep, Status} = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const { LoginPage } = require('../../pageObjects/loginPage');   


Before( async function () {
  
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    this.page = await context.newPage();
    this.login = new LoginPage(this.page);

  });

After(async function () {
  console.log("After hook");
});

// BeforeStep({tags: "@foo"}, function () {
//     // This hook will be executed before all steps in a scenario with tag @foo
//   });
  
  AfterStep( async function ({result}) {    
    // This hook will be executed after all steps, and take a screenshot on step failure
    if (result.status === Status.FAILED) {

      await this.page.screenshot({path: 'screenshot.png'});
    }
  });