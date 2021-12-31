export default class LoginPage{
    async failLogin(username,password){
        await page.goto("http://zero.webappsecurity.com/login.html");

        await page.waitForSelector("#user_login");
        await page.waitForSelector("#user_password");
        await page.waitForSelector(".btn");

        await page.type("#user_login",username)
        await page.type("#user_password",password)
        await page.click(".btn")

        await page.waitForSelector(".alert-error")
        const txtContent = await page.$eval(".alert",el => el.textContent)
        await expect(txtContent).toContain("Login and/or password are wrong.")
    }
}