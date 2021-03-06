const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'stage-0']
      }
    }]
  }
};
