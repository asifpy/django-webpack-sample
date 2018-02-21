var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: {
    app: './django_webpack_sample/assets/js/index',
    //another_entry: './django_webpack_sample/assets/another/entry',
  },

  output: {
      path: path.resolve('./django_webpack_sample/assets/dist/'),
      publicPath: '/static/dist/',
      filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],

  module: {
    loaders: [
      //{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
      { test: /\.(scss)?$/, loaders: ['style-loader', 'css-loader', 'sass-loader?sourceMap'] },
      { test: /\.(css)?$/, loaders: ['style-loader', 'css-loader'] },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loader: 'file-loader' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?2?$/, loader: 'url-loader'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader'},
    ],
  },
  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.jsx', '.css']
  },
}