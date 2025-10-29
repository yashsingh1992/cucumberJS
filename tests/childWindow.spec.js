const {test, expect} = require('@playwright/test');


test('Child Window Handling', async ({browser}) => {
  
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://demo.automationtesting.in/Windows.html");
await page.locator("//a[contains(text(),'Open New Tabbed Windows ')]").click();

const [newPage] = await Promise.all ([

context.waitForEvent('page'),
page.locator("(//button[contains(text(),'click')])[1]").click(),

])

await newPage.locator("//button[@aria-label='Search']").click();


});
    