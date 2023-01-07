const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (env) => {
	
	return {
		mode: 'development',
		context: __dirname,
		entry: {
			index: path.resolve(__dirname, './src/index.ts'),
		},
		devtool: 'eval-cheap-module-source-map',
		devServer: {
			static: './dist',
			hot: true,
		},
		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, 'dist'),
			clean: true,
		},
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.(woff|woff2|eot|ttf|otf)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.json5$/i,
					type: 'json',
					parser: {
						parse: json5.parse,
					},
				},
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/,
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: 'Webpack-ts-start-template',
				template: path.resolve(__dirname, './src/template.html'),
			}),
			new ForkTsCheckerWebpackPlugin(),
		],
		watchOptions: {
			ignored: /node_modules/,
		},
		optimization: {
			moduleIds: 'deterministic',
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
			// https://bundlers.tooling.report/code-splitting/multi-entry/
		},
	}
};