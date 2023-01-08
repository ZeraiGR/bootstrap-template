const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	context: __dirname,
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		static: './dist',
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
	],
});