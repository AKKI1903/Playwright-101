import {devices, PlaywrightTestConfig} from "@playwright/test"

const config: PlaywrightTestConfig = {
  projects:[
  {
    name: "chrome:latest:MacOS Ventura@lambdatest",
    use: {
      viewport: { width: 1920, height: 1080 },
    },
  },
  {
     name: "chrome:latest:Windows 11@lambdatest",
     use: {
       viewport: { width: 1920, height: 1080 },
    },  
  },
  {
    name: "pw-firefox:latest:Windows 11@lambdatest",
    use: {
      viewport: { width: 1920, height: 1080 },
    },
  },
   /*  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'], viewport: { width: 1920, height: 1080 } }
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'], viewport: { width: 1920, height: 1080 } }
  } */],
  testMatch:["tests/Demo.test.ts"],
  use: {
    baseURL:"https://www.lambdatest.com/selenium-playground/",
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