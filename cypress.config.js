const { defineConfig } = require("cypress");

module.exports = defineConfig({
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "test-results/mochaawesome",
    overwrite: "false",
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: "https://demo.guru99.com/v4/index.php",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/web automation/E2E",
  },
  // other configuration options here
});
