import { expect, Page } from "@playwright/test";

export default class InputForm {
    constructor(public page: Page) { }

    async SubmitForm() {

        await this.page.getByText("Input Form Submit").click();
        expect(this.page.url()).toContain('input-form-demo');

        const cookiebox='#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection'
        
        if (await this.page.locator(cookiebox).isVisible()) {
            await this.page.click(cookiebox);
            console.log('Cookie consent popup found and clicked.');
        }

        await this.page.getByText('Submit').click();

        const errorMessage = await this.page.$eval(
            "input:invalid",
            (input: HTMLInputElement) => input.validationMessage
        );

        // Validate the error message as per requirement
        if (errorMessage === "Please fill out this field.") {
            console.log("Validation passed. Required field error message is correct.");
        } else {
            console.error("Validation failed. Unexpected error message:", errorMessage);
        }

    }

    async submitWithValues() {
        await this.page.getByText('Submit').click();
        await this.page.waitForTimeout(50)
        const successMessage = await this.page.locator("p[class='success-msg hidden']").innerText();
        expect(successMessage).toBe("Thanks for contacting us, we will get back to you shortly.")

    }


    async enterName(fullname: string) {
        await this.page.locator("#name")
            .fill(fullname);

    }
    async enterEmail(email: string) {
        await this.page.locator("#inputEmail4")
            .fill(email);
    }
    async enterPassword(password: string) {
        await this.page.locator("input[name='password']")
            .fill(password)
    }
    async enterCompany(company: string) {
        await this.page.locator("input[name='company']")
            .fill(company)
    }
    async enterWebsite(website: string) {
        await this.page.locator("input[name='website']")
            .fill(website)
    }
    async selectCountry() {
        await this.page.selectOption("select[name='country']",{
            value:"US"
        })

    }
    async enterCity(city: string) {
        await this.page.locator("input[name='city']")
            .fill(city)
    }
    async enterAddress(address: string) {
        await this.page.locator("input[name='address_line1']")
            .fill(address)
    }
    async enterAddress2(secondline: string) {
        await this.page.locator("input[name='address_line2']")
            .fill(secondline)
    }
    async enterState(state: string) {
        await this.page.locator("#inputState")
            .fill(state)
    }
    async enterZipCode(zipcode: number) {
        await this.page.locator("input[name='zip']")
            .fill(zipcode.toString())
    }
}