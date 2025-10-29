const { test, expect } = require('@playwright/test');

test('TC002 - Dynamic wait', async ({ page }) => {
  
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");    
await page.locator("input#userEmail").fill("anshika@gmail.com");
await page.locator("input#userPassword").fill("Iamking@000");
await page.locator("input#login").click();
const lastTitle = await page.locator(".card-body b").last().textContent();
console.log(lastTitle);
//await page.waitForLoadState("networkidle");
const titles = await page.locator(".card-body b").allTextContents();
console.log(titles);  

});
