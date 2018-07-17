const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');

const devConfig = {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    hot: true,
    after(app){
      console.log("the server is listening on port 9000!");
    },
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: {"^/api" : ""},
        secure: false
      }
    }
  }
}

module.exports = merge(devConfig,baseConfig);
