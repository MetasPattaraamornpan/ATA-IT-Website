const path = require('path');
const APP_DIR = path.resolve(__dirname, '../src/client');

module.exports = {
  entry: APP_DIR+"/index.js",
  output: {
    path: APP_DIR,
    filename: "bundle.js",
    publicPath: "/public/"
  },
  devServer: {
      contentBase: APP_DIR,
      port: 5000
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: APP_DIR,
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader?modules']
    },{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader?modules', 'sass-loader']
    },{
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      exclude: /\/favicon.ico$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]'
          }
        }
      ]
    }]
  }
}
