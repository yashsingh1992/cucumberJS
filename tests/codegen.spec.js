import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1761128877916&no_sw_cr=1');
  await page.locator('div').filter({ hasText: 'Sign in to GoogleGet the most' }).nth(3).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Automation Testing');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3DAutomation%2BTesting%26sca_esv%3D4acce884baa46368%26source%3Dhp%26ei%3DrLH4aM7SEvjm1sQPqaWkmAk%26iflsig%3DAOw8s4IAAAAAaPi_vJFfGvIsfwx4-tHIEChRRgdByg9i%26ved%3D0ahUKEwjO2M2ozLeQAxV4s5UCHakSCZMQ4dUDCBA%26uact%3D5%26oq%3DAutomation%2BTesting%26gs_lp%3DEgdnd3Mtd2l6IhJBdXRvbWF0aW9uIFRlc3RpbmcyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESLsvUPwJWM4lcAJ4AJABAJgByQGgAZUYqgEGMC4xOC4xuAEDyAEA-AEBmAIVoAKHGagCCsICChAAGAMY6gIYjwHCAg4QLhiABBixAxjRAxjHAcICBRAuGIAEwgIOEC4YgAQYsQMYgwEYigXCAgsQLhiABBjRAxjHAcICCxAuGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAgsQABiABBixAxiDAcICCBAuGIAEGLEDwgINEAAYgAQYsQMYRhj5AcICCxAuGIAEGLEDGNQCmAMK8QVkkM4IKl1meJIHBjIuMTguMaAH9ZIBsgcGMC4xOC4xuAf4GMIHCDAuNS4xNC4yyAdW%26sclient%3Dgws-wiz%26sei%3Du7H4aJa-MfDH4-EPxpK7eQ&q=EhAkBQIB0B8Qe0jGgK6YAouFGLzj4scGIjAvsEXfKwhrTc5n5MCKglyI3xKjoWeBwh7jVkm37hwQ3qsK-ZVMC6hhSwOiqiebNW8yAVJaAUM');
});