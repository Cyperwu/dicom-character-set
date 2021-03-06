const merge = require('./merge');
const baseConfig = require('./webpack-dev');
const prodCommon = require('./webpack-prod-common');

baseConfig.output.filename = baseConfig.output.filename.replace('.js', '.min.js');

module.exports = merge(baseConfig, prodCommon);