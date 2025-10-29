const { test, expect } = require('@playwright/test');
import { ai } from '@zerostep/playwright'


test('TC001 - open google.com', async ({ page }) => {

    const aiArgs = { page, test }
    await page.goto('https://app.testsigma.com/ui/')
    await ai('enter email as "sigma@qateam.com"', aiArgs)
    await ai('enter password as "Testsigma"', aiArgs)
    await ai('click sign in button', aiArgs)
    await page.waitForTimeout(5000); 
    await page.goto('https://app.testsigma.com/ui/td/2009/cases/filters/20664?isCreate=true')
    await page.waitForTimeout(5000);
    await ai('click on Record button', aiArgs)
    await page.waitForTimeout(10000);

});




