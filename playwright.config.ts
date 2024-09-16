import {devices, PlaywrightTestConfig} from "@playwright/test"


const config: PlaywrightTestConfig = {
  projects:[{
    name: 'chromium',
    use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } }
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'], viewport: { width: 1920, height: 1080 } }
  }],
  use: {
    baseURL:"https://www.lambdatest.com/selenium-playground/",
    headless: false,
    screenshot: "on",
    video: "on",
 /*    viewport: null,
    launchOptions: {
      args: ['--start-maximized']
    } */
  },
  reporter:[["json", {
    outputFile: "report/jsonReport.json"
  }],["html"]]
};

export default config;