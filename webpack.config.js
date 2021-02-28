const path = require('path');
const webpacker = require("./build-tools/webpacker");

module.exports = webpacker(
    {
        typescript: ['all'],
        'build-size-budget': ['development'],
    });
