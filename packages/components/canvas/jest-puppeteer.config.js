/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = {
  server: {
    command: "npm run start -- --port 8083",
    port: 8083
  },
  launch: {
    args: ['--no-sandbox', '--disable-setuid-sandbox'], // https://github.com/puppeteer/puppeteer/blob/master/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
    dumpio: true, // output browser console to cmd line
    // slowMo: 50, // slows down process for easier viewing
    // headless: false, // run in the browser
  },
};
