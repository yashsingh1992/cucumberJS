const {test, expect} = require('@playwright/test');


test('TC000',async ({page})=>

{
// playwright code
//const context = await browser.newContext()
//const page = await context.newPage()
await page.goto('https://www.google.com');
console.log(await page.title())//await expect(page).toHaveTitle("Facebook");
await page.locator('textarea#APjFqb').fill('Automation Testing');
await page.waitForTimeout(3000);
const text = await page.locator('[aria-label="Gmail "]').textContent();
console.log(text);
await expect(text).toContain('Gmail');
await page.keyboard.press('Enter');
console.log(await page.locator('[class="LC20lb MBeuO DKV0Md"]').nth(4).textContent());






});

