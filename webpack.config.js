const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {filename: 'webpack.bundle.js'},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  optimization: {
    minimize: false,
  }
}