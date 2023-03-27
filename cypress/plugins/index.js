const { createMochaAwesomeReporter } = require("mochawesome");
const { path } = require("path");

module.exports = (on, config) => {
  const reporterOptions = {
    reportDir: path.join(__dirname, "..", "..", "test-results", "mochaawesome"),
    overwrite: false,
    html: false,
    json: true,
  };

  on("after:run", (results) => {
    createMochaAwesomeReporter(reporterOptions).writeReport(results);
  });
};
