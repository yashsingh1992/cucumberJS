// @ts-check
const { defineConfig, devices, chromium } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  testMatch: 'login.spec.js',
  timeout: 40 *1000,
  reporter: 'html',

  use: { 

    browserName: 'chromium',
    headless: false
  
  },

  
});
