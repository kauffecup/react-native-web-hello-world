const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, '../../app/web/index'),
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader'],
        })
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:[{
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
            "env": {
               // only enable it when process.env.NODE_ENV is 'development' or undefined
               "development": {
                 "plugins": [["react-transform", {
                   "transforms": [{
                     "transform": "react-transform-hmr",
                     // if you use React Native, pass "react-native" instead:
                     "imports": ["react"],
                     // this is important for Webpack HMR:
                     "locals": ["module"]
                   }]
                 }]]
               }
             }
          }
        }]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('css/[name].css')
  ],
};
