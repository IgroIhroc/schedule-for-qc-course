// @ts-nocheck
const config = {
    testRunner: "jest",
    jest: {
        configFile: "jest.config.js",
    },

    mutate: [
      "src/helper/getScheduleType.js"
    ],
    mutator: {
        name: "javascript"
    },

    reporters: ["html", "clear-text", "progress"],
    htmlReporter: {
        fileName: "reports/mutation/mutation.html"
    },

    coverageAnalysis: "perTest"
};

export default config;