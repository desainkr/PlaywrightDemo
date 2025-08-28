Preconditions for Playwright to run

Node.js installed

Playwright needs Node.js (≥ 14.x is recommended, though latest LTS is best).

Check with:

node -v
npm -v


Project setup with npm / yarn / pnpm

Initialize a project:

npm init -y


Install Playwright:

npm install -D @playwright/test


(Optional) Install browsers:

npx playwright install


Test runner setup

Playwright provides its own runner (@playwright/test).

Your package.json should include a script:

"scripts": {
  "test": "npx playwright test"
}


Supported OS

Works on Windows, macOS, Linux (Ubuntu/Debian/Fedora/CentOS).

If you’re running in CI, you may need additional system libraries (Playwright docs list them).

Git (optional, but useful)

Needed if you plan to push your tests to GitHub or use GitHub Actions.

VS Code setup (optional, but recommended)

Install Playwright Test for VSCode extension for debugging and recording tests.
