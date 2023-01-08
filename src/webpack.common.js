const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: path.resolve(__dirname, './src/index.ts'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack-ts-start-template',
			template: path.resolve(__dirname, './src/template.html'),
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
};