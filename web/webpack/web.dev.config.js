const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // 'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, '../../app/web/index'),
  ],
  output: {
    path: path.join(__dirname, '../public'),
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
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015', 'react'],
							plugins: [['react-transform', {
								transforms: [{
									transform: 'react-transform-hmr',
									imports: ['react'],
									// this is important for Webpack HMR:
									locals: ['module']
								}],
							}]],
						},
					}
				]
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
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
  ],
};
