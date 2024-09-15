import {PlaywrightTestConfig} from "@playwright/test"


const config: PlaywrightTestConfig = {
  use: {
    baseURL:"https://www.lambdatest.com/selenium-playground/",
    headless: false,
    screenshot: "on",
    video: "on",
    /* launchOptions: {
      slowMo: 2000
    } */
  },
  reporter:[["json", {
    outputFile: "report/jsonReport.json"
  }],["html"]]
};

export default config;