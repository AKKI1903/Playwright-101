import { expect, Page } from "@playwright/test";

export default class SimpleForm {
    constructor(public page: Page) { }

    async formInteraction() {

        await this.page.getByText("Simple Form Demo").click();
        expect(this.page.url()).toContain('simple-form-demo');
        const message = "Welcome to LambdaTest";
        const messageinput = this.page.locator("input#user-message");
        console.log('Before Entering Input: ' + await messageinput.getAttribute('placeholder'));
        await this.page.locator("input#user-message").fill(message)
        await this.page.locator("#showInput").click();
        console.log('After enterting the value: ' + await messageinput.inputValue())
        expect(this.page.locator('#message')).toHaveText(message)

    }
}