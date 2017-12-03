const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const webpackBaseConf = require('./webpack.base.conf.js')

function resolve (dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = merge(webpackBaseConf, {

  devtool: '#cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      inject: true
    }),
    new FriendlyErrorsPlugin()
  ],

  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    contentBase: path.join(__dirname, '../')
  }

})
