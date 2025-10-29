const {test, expect} = require('@playwright/test');


test('endtoendTestcase',async ({page})=>

{

const productName = "ZARA COAT 3";    
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");    
await page.locator("input#userEmail").fill("anshika@gmail.com");
await page.locator("input#userPassword").fill("Iamking@000");
await page.locator("input#login").click();
const lastTitle = await page.locator("//h5[@style='text-transform: uppercase;']").last().textContent();
console.log('Last Title ::' + lastTitle);
const products = await page.locator("//h5[@style='text-transform: uppercase;']").allTextContents();
//console.log('All Products name :: ' + products);
const count = products.length;
console.log("Total count is ::" + count);

for (let i = 0; i < count; i++ )
{
if(products[i] === productName)

{
 
console.log("ProductName :: "+ products[i]);    
await page.locator("(//button[@class='btn w-10 rounded'])[1]").click();
console.log("Add to cart clicked :: ")

}

}

await page.locator("//button[@routerlink='/dashboard/cart']").click();
await page.locator("div li").first().waitFor();
const bool= await page.locator("//h3[text()='ZARA COAT 3']").isVisible();
console.log("Boolean :: "+ bool);
expect(bool).toBeTruthy();

await page.locator("text=Checkout").click();
await page.locator("//input[@placeholder='Select Country']").pressSequentially("Ind");
// Wait for dropdown to appear and load
await page.locator("//section[@class='ta-results list-group ng-star-inserted']").waitFor();
// Wait a bit more for all options to load
await page.waitForTimeout(3000);

const countryLast = await page.locator("//section[@class='ta-results list-group ng-star-inserted']//button").last().textContent();
console.log(countryLast)

// Get all dropdown buttons (there should be 3: British Indian Ocean Territory, India, Indonesia)
const dropdownButtons = await page.locator("//section[@class='ta-results list-group ng-star-inserted']//button").allTextContents();
console.log("Dropdown buttons:", dropdownButtons.length, dropdownButtons);

// Clean up the text to remove extra whitespace and get just the country names
//const countries = dropdownButtons.map(text => text.trim()).filter(text => text.length > 0);
const countryCount = dropdownButtons.length;
console.log("Country count:", dropdownButtons);
//console.log("Countries:", countries);

for (let j=0; j<countryCount; j++){

   console.log(dropdownButtons[j]);
   
    if(dropdownButtons[j] == " India")
    {
        await page.locator("//section[@class='ta-results list-group ng-star-inserted']//button").nth(j).click();
        await page.pause();
        break;
    }

}


});
