
const {test, expect} = require('@playwright/test');


test('iframeTest',async ({page})=>

{

await page.goto("https://selectorshub.com/iframe-and-nested-iframe/");
const iframe = page.frameLocator("#pact2");
const iframe1 = iframe.frameLocator("#pact3");
await iframe1.locator("#glaf").fill("Yashaswi");
//page.locator("#jex").fill("Yashaswi");
await page.pause();


});


