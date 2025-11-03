class LoginPage {


constructor(page)

{
      this.page = page;
      this.userName = page.locator("input#userEmail");
      this.password = page.locator("input#userPassword123");
      this.signInButton = page.locator("input#login");
}

async goto()

{
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");

}


async validLogin(username, password)
{
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.signInButton.click();
    await this.page.waitForLoadState('networkidle');

}
 
}

module.exports = { LoginPage };


