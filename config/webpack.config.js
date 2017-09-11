// const webpack = require('webpack');
// var path = require('path');
const paths = require('./paths')
const ENV = 'production'

// var BUILD_DIR = path.resolve(__dirname, '../src/client/public');
// var APP_DIR = path.resolve(__dirname, '../src/client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: paths.appDist,
    filename: 'bundle.js',
    publicPath: '/'
  },
  context: paths.appSrc,
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
