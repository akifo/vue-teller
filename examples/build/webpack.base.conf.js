const webpack = require('webpack')
const path = require('path')
const vueLoaderConfig = require('./vue-loader.conf')
const cssnext = require('postcss-cssnext')

const NODE_ENV = process.env.NODE_ENV || 'development'

function resolve (dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = {

  entry: {
    main: resolve('./src/main.js')
  },

  output: {
    publicPath: '/',
    path: resolve('../docs'),
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')],
        exclude: resolve('../node_modules')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              importLoaders: 1,
              parser: 'sugarss',
              plugins: [
                cssnext()
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'assets/[name].[ext]?[hash]'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.vue', '.json', '.png', 'styl'],
    alias: {
      'vue-teller': resolve('../src/index.js'),
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    },
    modules: [
      'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    })
  ]
}
