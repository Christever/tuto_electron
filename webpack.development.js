const { merge } = require('webpack-merge');
const base = require('./webpack.config.js');

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: '40992',
  },
});
