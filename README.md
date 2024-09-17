
---

# Playwright 101 - Test Automation Suite

This repository contains an automated test suite using **Playwright** with **TypeScript** for testing web applications. The tests are designed for scenarios like form submissions, handling sliders, and interacting with UI components. Additionally, the tests are executed on **LambdaTest's Cloud Playwright Grid** using multiple browser and OS combinations.

## Table of Contents


- [Setup](#setup)
- [How to Run Tests Locally](#how-to-run-tests-locally)
- [Running Tests on LambdaTest Cloud](#running-tests-on-lambdatest-cloud)
- [Configuration](#configuration)
- [Reporting](#reporting)


## Setup

### Prerequisites

- **Node.js** (version >= 12)
- **Playwright** installed globally or locally in your project

### Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

### Playwright Browsers

To install the necessary browsers for Playwright, run:

```bash
npx playwright install
```

This will install the required browser binaries for Chromium, Firefox, and WebKit.

## How to Run Tests Locally

To run all the tests in the `tests` folder locally, use the following command:

```bash
npx playwright test
```

To run a specific test file, for example, `Demo.test.ts`, run:

```bash
npx playwright test tests/Demo.test.ts
```

## Running Tests on LambdaTest Cloud

This project is also configured to run tests on **LambdaTest's Cloud Playwright Grid** using different browsers and operating systems. The configurations are defined in the `playwright.config.ts` file.
### Running Tests on LambdaTest

To run tests on LambdaTest Cloud, ensure that you have set your **LambdaTest username** and **access key** as environment variables. You can set them using the following commands:

#### On Windows (Command Prompt):

```bash
set LT_USERNAME=your-lambdatest-username
set LT_ACCESS_KEY=your-lambdatest-access-key
```

#### On MacOS/Linux (Terminal):

```bash
export LT_USERNAME=your-lambdatest-username
export LT_ACCESS_KEY=your-lambdatest-access-key
```

Once the environment variables are set, you can run the tests on LambdaTest by executing:

```bash
npx playwright test --project="chrome:latest:MacOS Ventura@lambdatest"
```

You can similarly run the tests for the other browser and OS combinations configured in the `projects` array in `playwright.config.ts`.

## Cloud-Based Development with Gitpod

You can also run this project directly in a cloud-based development environment using [Gitpod](https://www.gitpod.io/). Gitpod provides a ready-to-code environment with all the dependencies pre-installed, so you can focus on writing and running tests.

To launch the project on Gitpod, click the button below:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/AKKI1903/Playwright-101)

Gitpod will automatically use the configuration defined in the `.gitpod.yml` file to set up the environment.

### How Gitpod is configured

- The `.gitpod.yml` file handles:
  - Installing dependencies (`npm install`)
  - Setting up Playwright browsers (`npx playwright install`)
  - Running Playwright tests (`npx playwright test`)
  - Prebuilding the workspace for faster startup.

You can find the `.gitpod.yml` file [here](./.gitpod.yml).

---

## Configuration

The test configuration is defined in `playwright.config.ts`. This includes browser settings, timeout configurations, and parallel execution setups. You can specify different browser and OS combinations to run tests on LambdaTest's cloud infrastructure.

```typescript
use: {
  baseURL: "https://www.lambdatest.com/selenium-playground/",
  screenshot: "on",
  video: "on",
  viewport: { width: 1920, height: 1080 },
}
```

## Reporting

After running tests, reports are generated in the `playwright-report` folder and in a JSON format at `report/jsonReport.json`.

To view the HTML report locally:

```bash
npx playwright show-report
```
