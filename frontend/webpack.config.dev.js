const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.config.common.js');
const configureDevServer = require('./webpack-dev-server.config.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new webpack.EnvironmentPlugin({ DEBUG: true })],
  devServer: {
    contentBase: path.resolve('local'),
    hot: true,
    before: configureDevServer
  }
});
