const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const path = require('path');

const testConfig = {
  mode: 'production',
}

module.exports = merge(testConfig,baseConfig);
