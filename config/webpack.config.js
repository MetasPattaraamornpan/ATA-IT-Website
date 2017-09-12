const ENV = 'production'
const webpack = require('webpack');
const path = require('path');
const getLoaders = require('./loaders')

const BUILD_DIR = path.resolve(__dirname, '../src/client/public');
const APP_DIR = path.resolve(__dirname, '../src/client/app');
const DEV_DIR = path.resolve(__dirname, '../src/client');

let config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: DEV_DIR
  },
  devtool: 'source-map',
  // devServer: {
  //     // contentBase: DEV_DIR,
  //     inline: true,
  //     host: '0.0.0.0',
  //     port: 5000,
  //     publicPath: BUILD_DIR,
  //     filename: "bundle.js"
  // },
  module : {
    noParse: /node_modules\/.bin/,
    rules: getLoaders(ENV)
  }
};

module.exports = config;
