const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const path = require('path');

const proConfig = {
  mode: 'production',
}

module.exports = merge(proConfig,baseConfig);
