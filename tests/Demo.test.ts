import { test } from "@playwright/test";
import SimpleForm from "../pages/simpleForm"


test("Test Scenaio 1", async({page, baseURL})=>{
    const simpleInput = new SimpleForm(page)
    await page.goto(`${baseURL}simple-form-demo`);
    await simpleInput.formInteraction();
})