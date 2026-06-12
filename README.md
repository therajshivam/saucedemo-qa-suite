# SauceDemo QA Suite

This repository contains a Cypress-based end-to-end test suite for the SauceDemo sample web application. It uses Cypress with Cucumber-style feature files and generates Mochawesome reports for test execution results.

## Project Overview

- Test framework: Cypress
- BDD support: `@badeball/cypress-cucumber-preprocessor`
- Bundler: `@bahmutov/cypress-esbuild-preprocessor`
- Report generation: Mochawesome
- Base URL: `https://www.saucedemo.com`
- Browser: Chrome (default via `npm test`)

## Prerequisites

- Node.js 18+ or compatible version
- npm
- Chrome browser installed

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd "d:\Code Playground\qa project\saucedemo-qa-suite"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

Run the full suite in headless mode with Chrome:

```bash
npm test
```

## Generating Reports

After test execution, merge and generate Mochawesome reports:

```bash
npm run report:merge
npm run report:generate
```

Or run the full report pipeline in one command:

```bash
npm run report:full
```

The generated HTML report will be placed in `cypress/reports`.

## Project Structure

- `cypress.config.js` - Cypress configuration, including base URL, reporter options, and Cucumber preprocessors
- `package.json` - npm scripts and dev dependencies

- `cypress/e2e/` - Cypress test files (`*.cy.js`)
  - `auth/login.cy.js`
  - `cart/cart.cy.js`
  - `checkout/checkout.cy.js`
  - `product/product.cy.js`

- `cypress/features/` - Cucumber feature files
  - `login.feature`
  - `cart.feature`
  - `checkout.feature`
  - `product.feature`

- `cypress/step-definitions/` - Step definition implementations for feature files
  - `login.steps.js`
  - `cart.steps.js`
  - `checkout.steps.js`
  - `product.steps.js`

- `cypress/pages/` - Page object models used in tests
  - `LoginPage.js`
  - `CartPage.js`
  - `CheckoutPage.js`
  - `ProductsPage.js`

- `cypress/reports/` - Mochawesome JSON and HTML report outputs

- `cypress/support/` - Cypress support files and custom commands
  - `commands.js`
  - `e2e.js`

## Notes

- Screenshots are enabled for test failures.
- Video recording is disabled by default.
- The test runner is configured to process both `.cy.js` specs and `.feature` files.

## Customization

To change the base URL or viewport size, update `cypress.config.js`.

To add more tests, add feature files under `cypress/features/`, implement step definitions in `cypress/step-definitions/`, and optionally add or update page objects in `cypress/pages/`.
