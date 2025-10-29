const {test, expect} = require('@playwright/test');
const {loginPage} = require('../node_modules/pageObject/loginPage');


test('loginPageObject',async ({page})=>

{

    const username = "anshika@gmail.com";
    const password = "Iamking@000"; 
    const login = new loginPage(page);
    await login.goto();
    await login.validLogin(username, password);
   // await page.pause();

});