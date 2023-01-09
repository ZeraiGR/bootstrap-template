const { merge } = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	context: paths.project,
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		compress: true,
		static: paths.dist,
		historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
		client: {
      logging: 'warn',
    },
	},
	module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
	],
});