import { test } from "@playwright/test";
import SimpleForm from "../pages/simpleForm"
import BarsAndSliders from "../pages/barsAndSlider";


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