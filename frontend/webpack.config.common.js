const webpack = require('webpack');
const path = require('path');
const { argv } = require('yargs');

const packageJson = require('./package.json');

module.exports = {
  devtool: 'source-map',
  performance: {
    hints: false
  },
  entry: ['whatwg-fetch', path.resolve('src', 'index.js')],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', 'jsx']
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
    filename: `${packageJson.name}-[name].js`,
    chunkFilename: `${packageJson.name}-[name].[id].js`
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      CLIENT_VERSION: argv.buildVersion || 'not_specified',
      CLIENT_NAME: packageJson.name
    })
  ]
};
