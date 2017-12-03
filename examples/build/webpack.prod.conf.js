const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackBaseConf = require('./webpack.base.conf.js')

function resolve (dir) {
  return path.join(__dirname, '../', dir)
}

const version = require('../../package.json').version
const banner =
  `vue-teller v${version}
  (c) 2017-${new Date().getFullYear()} Akiho Nagao
  Released under the MIT license
  https://github.com/akifo/vue-teller`

module.exports = merge(webpackBaseConf, {

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    //   sourceMap: true
    // }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      inject: true
    }),
    new webpack.BannerPlugin(banner)
  ]

})
