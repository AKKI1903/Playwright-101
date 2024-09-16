import { test } from "@playwright/test";
import SimpleForm from "../pages/simpleForm"
import BarsAndSliders from "../pages/barsAndSlider";
import InputForm from "../pages/inputForms"


test("Test Scenaio 1", async({page, baseURL})=>{
    const simpleInput = new SimpleForm(page)
    await page.goto(`${baseURL}`);
    await simpleInput.formInteraction();
})

test("Test Scenaio 2", async({page, baseURL})=>{
    const slide = new BarsAndSliders(page)
    await page.goto(`${baseURL}`);
    await slide.Slider(95);
})

test("Test Scenaio 3", async({page, baseURL})=>{
    const inputForm = new InputForm(page)
    await page.goto(`${baseURL}`);
    await inputForm.SubmitForm();
    await inputForm.enterName("Sample Name");
    await inputForm.enterEmail("test@example.com");
    await inputForm.enterPassword("random@123!");
    await inputForm.enterCompany("Lambda Test");
    await inputForm.enterWebsite("https://www.example.com");
    await inputForm.selectCountry();
    await inputForm.enterCity("Ohio")
    await inputForm.enterAddress("1 ave");
    await inputForm.enterAddress2("N St");
    await inputForm.enterState("Costo");
    await inputForm.enterZipCode(213514)
    await inputForm.submitWithValues();

})