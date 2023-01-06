const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
    static: './dist',
  },
	output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
		clean: true,
  },
	module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', "sass-loader"],
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
    ],
  },
	plugins: [
    new HtmlWebpackPlugin({
     title: 'Development',
    }),
  ],
	optimization: {
    runtimeChunk: 'single',
		// https://bundlers.tooling.report/code-splitting/multi-entry/
  },
};