const webpack = require('webpack');
const path = require('path');
const { argv } = require('yargs');

const packageJson = require('./package.json');

module.exports = {
  devtool: 'source-map',
  performance: {
    hints: false
  },
  entry: [
    'whatwg-fetch',
    path.resolve('src', 'index.tsx')
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['awesome-typescript-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
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
