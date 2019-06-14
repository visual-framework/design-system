'use strict';

const path = require('path');

const colors = require(path.join(process.cwd(), 'node_modules/@visual-framework/vf-design-tokens/dist/json/vf-colors.ios.json'));
console.log(typeof colors);

module.exports = colors;
