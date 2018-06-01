const path = require('path')

module.exports = {
  entry: {
    'env-var-truthy': './test/test-files/env-var-truthy.js',
    'env-var-falsey': './test/test-files/env-var-falsey.js',
    'falsey': './test/test-files/falsey.js',
    'truthy': './test/test-files/truthy.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: ['forked-webpack-conditional-loader']
    }]
  }
}
