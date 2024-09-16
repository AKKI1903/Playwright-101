import { test as baseTest, chromium } from "@playwright/test";
import SimpleForm from "../pages/simpleForm"
import BarsAndSliders from "../pages/barsAndSlider";
import InputForm from "../pages/inputForms"
import path from "path";

type pages = {
    simpleForm: SimpleForm;
    slider: BarsAndSliders;
    submitForm: InputForm;
}

const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 11 ", 
        build: "Playwright Test Build",
        name: "Playwright 101",
        user: "ankush.akki19",
        accessKey: "kzDFHJzi6YlOmtX3IyXJenaHGbq4DLVruqgxmfsT5xvZMkEKog",
        network: true,
        video: true,
        console: true
    } 
} 


const modifyCapabilities = (configName, testName) => {
    let config = configName.split("@lambdatest")[0];
    let [browserName, browserVersion, platform] = config.split(":");
    capabilities.browserName = browserName
        ? browserName
        : capabilities.browserName;
    capabilities.browserVersion = browserVersion
        ? browserVersion
        : capabilities.browserVersion;
    capabilities["LT:Options"]["platform"] = platform
        ? platform
        : capabilities["LT:Options"]["platform"];
    capabilities["LT:Options"]["name"] = testName;
}

const getErrorMessage = (obj, keys) =>
    keys.reduce(
        (obj, key) => (typeof obj == "object" ? obj[key] : undefined),
        obj
    );


const testPages = baseTest.extend<pages>({
    page: async({},use, testInfo)=>{
        let fileName = testInfo.file.split(path.sep).pop();
        if (testInfo.project.name.match(/lambdatest/)) {
            modifyCapabilities(
                testInfo.project.name,
                `${testInfo.title} - ${fileName}`
            ); 
        }
        const browser = await chromium.connect(`wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`) 
        const context = await browser.newContext(testInfo.project.use);
        const Ltpage = await context.newPage();
        await use(Ltpage);
        const testStatus = {
            action: "setTestStatus",
            arguments: {
                status: testInfo.status,
                remark: getErrorMessage(testInfo, ["error", "message"]),
            },
        };
        await Ltpage.evaluate(() => { },
            `lambdatest_action: ${JSON.stringify(testStatus)}`);
        await Ltpage.close();
        await context.close();
        await browser.close();
    },
    simpleForm: async ({ page }, use) => {
        await use(new SimpleForm(page));
    },
    slider: async ({ page }, use) => {
        await use(new BarsAndSliders(page));
    },
    submitForm: async ({ page }, use) => {
        await use(new InputForm(page));
    }

})

export const test = testPages;
export const expect = testPages.expect;