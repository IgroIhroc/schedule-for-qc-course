// @ts-nocheck
const config = {
  testRunner: "jest",

  jest: {
    configFile: "jest.config.js",
  },

  mutate: [
    "src/helper/getScheduleType.js"
  ],

  reporters: ["html", "clear-text", "progress"],

  htmlReporter: {
    fileName: "reports/mutation/mutation.html"
  },

  coverageAnalysis: "off",

  concurrency: 2,
  timeoutMS: 3000,
};

export default config;