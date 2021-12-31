import BasePage from "./BasePage";

export default class LoginPage extends BasePage{

    async isLoginFormDisplayed() {
        await page.waitForSelector("#login_form");
        await page.waitForSelector("#user_login");
        await page.waitForSelector("#user_password");
    }

    async login(username,password){
        
        await page.waitForSelector("#login_form");
        await page.type("#user_login",username)
        await page.type("#user_password",password)
        await page.click(".btn")

        await page.waitForSelector(".alert-error")
        const txtContent = await page.$eval(".alert",el => el.textContent)
        await expect(txtContent).toContain("Login and/or password are wrong.")
    }
}