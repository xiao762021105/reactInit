const path = require('path');
const webpack = require('webpack');
const ManifestPlugin = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {"app": './src/index.js'},
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: ['babel-loader'],
        // 排除 node_modules 目录下的文件，node_modules 目录下的文件都是采用的 ES5 语法，没必要再通过 Babel 去转换
        exclude: path.resolve(__dirname, '../node_modules'),
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader','postcss-loader']
      },
      {
        test: /\.json$/,
        type: "javascript/auto",
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              publicPath: '../dist',
              modules: true,
              sourceMap: true,
              importLoader: 2
            }
          },
          "sass-loader"
        ]
      },
      {
        //file-loader是解析图片地址，把图片从源位置拷贝到目标位置并且修改原引用地址
        //url-loader可以在文件比较小的时候，直接变成base64字符串内嵌到页面中
        test: /\.(png|jpg|gif|svg|bmp|eot|woff|woff2|ttf)/,
        loader: {
          loader: 'url-loader',
          options: {
            limit: 5 * 1024,
            //指定拷贝文件的输出目录
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.gz$/,
        enforce: 'pre',
        use: 'gzip-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        chunkfile: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  resolve: {
    //引入模块的时候，可以不用扩展名 
    extensions: [".js", ".json", ".jsx"],
    alias: {//别名
      Redux: path.resolve(__dirname, '../src/redux/'),
      Common: path.resolve(__dirname, '../src/common/'),
      Components: path.resolve(__dirname, '../src/components/'),
      Service: path.resolve(__dirname, '../src/API/'),
      Tools: path.resolve(__dirname, '../tools/'),
    }
  },
  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks:['app','vendors','commons'],
      template: "./src/index.html",
      minify: {
        collapseWhitespace: true, //把生成的 index.html 文件的内容的没用空格去掉，减少空间
      },
      hash: true,
    }),
    new MiniCssExtractPlugin({//实例MiniCssExtractPlugin
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[name].css"
    }),
    new ManifestPlugin({}),
    new CopyWebpackPlugin([{from: path.resolve(__dirname, '../src/common/'), to: path.resolve(__dirname, '../dist/common/') }])
  ]
}