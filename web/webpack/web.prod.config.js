const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    path.join(__dirname, '../../app/web/index'),
  ],
  output: {
    path: path.join(__dirname, '../public/'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
		rules: [
      // take all less files, compile them, and bundle them in with our js bundle
      {
				test: /\.less$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'autoprefixer-loader',
						options: {
							browsers: 'last 2 version'
						}
					},
					'less-loader'
				]
			},
      {
        test: /\.js$/,
        exclude: /node_modules/,
				use: [
					loader: 'babel-loader',
					options: {
						presets: ['es2015', 'react'],
					},
				]
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // Useful to reduce the size of client-side libraries, e.g. react
        NODE_ENV: JSON.stringify('production'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    // optimizations
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
