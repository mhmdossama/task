# QA Automation Assignment: UI & API Testing

## Overview
This repository contains solutions for both UI and API automation tasks using Playwright and TypeScript.

- **UI Test:** Automates a user workflow on https://www.saucedemo.com/ (login, add to cart, checkout).
- **API Test:** Validates the JSONPlaceholder endpoint https://jsonplaceholder.typicode.com/posts/1.

## Prerequisites
- Node.js (v18 or newer recommended)
- npm

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/mhmdossama/task.git
   cd task
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Running the Tests

### UI Test
Runs the SauceDemo user workflow automation:
```sh
npx playwright test tests/saucedemo.spec.ts --project=chromium
```

### API Test
Runs the JSONPlaceholder API validation:
```sh
npx playwright test tests/api.spec.ts --project=chromium
```

## Custom npm Scripts
Already included in `package.json`:
```sh
npm run test:ui   # Runs the UI test
npm run test:api  # Runs the API test
```

## Project Structure
- `tests/saucedemo.spec.ts` — UI automation test
- `tests/api.spec.ts` — API endpoint test
- `playwright.config.ts` — Playwright configuration
- `package.json`, `tsconfig.json` — Project configs

## Troubleshooting
- If you encounter issues with Playwright browsers, re-run:
   ```sh
   npx playwright install
   ```
- For more help, see [Playwright Docs](https://playwright.dev/docs/intro)

## Notes
- All tests use robust locators and Playwright best practices.
- See comments in test files for step-by-step logic.

