import {test} from "@playwright/test";

test("Test Scenaio 1", async({page, baseURL})=>{
    await page.goto(`${baseURL}`);
})