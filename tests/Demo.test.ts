import { test,  expect } from "../Fixture/myfixture";

test.describe ("Playwright Test Ground",async()=>{

    
    test("Test Scenario 1", async({page, baseURL, simpleForm})=>{ 
        await page.goto(`${baseURL}`);
        await simpleForm.formInteraction();
        
    })
    
    test("Test Scenario 2", async({page, baseURL,slider})=>{
        await page.goto(`${baseURL}`);
        await slider.Slider(95);
    })
    
    test.only("Test Scenario 3", async({page, baseURL, submitForm})=>{
        
        await page.goto(`${baseURL}`);
        await submitForm.SubmitForm();
        await submitForm.enterName("Sample Name");
        await submitForm.enterEmail("test@example.com");
        await submitForm.enterPassword("random@123!");
        await submitForm.enterCompany("Lambda Test");
        await submitForm.enterWebsite("https://www.example.com");
        await submitForm.selectCountry();
        await submitForm.enterCity("Ohio")
        await submitForm.enterAddress("1 ave");
        await submitForm.enterAddress2("N St");
        await submitForm.enterState("Costo");
        await submitForm.enterZipCode(213514)
        await submitForm.submitWithValues();
    
    })
})

