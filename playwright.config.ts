import {devices, PlaywrightTestConfig} from "@playwright/test"


const config: PlaywrightTestConfig = {
  use: {
    baseURL:"https://www.lambdatest.com/selenium-playground/",
    headless: false,
    screenshot: "on",
    video: "on",
    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    }
  },
  reporter:[["json", {
    outputFile: "report/jsonReport.json"
  }],["html"]]
};

export default config;