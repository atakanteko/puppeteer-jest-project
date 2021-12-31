export default class BasePage{
    async wait(time) {
        await page.waitFor(time);
    }

    async getTitle() {
        await page.title();
    }

    async getUrl() {
        await page.url();
    }
}