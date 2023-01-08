const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const json5 = require('json5');

const paths = require('./paths');

module.exports = {
	entry: {
		index: `${paths.src}/index.ts`,
	},
	output: {
		filename: '[name].bundle.js',
		path: paths.build,
		clean: true,
		publicPath: '/',
	},
	module: {
		rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.tsx?$/i,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse,
				},
			},
			{ 
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i, 
				type: 'asset/resource' 
			},
      { 
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
				type: 'asset/inline' 
			},
		],
	},
	plugins: [
		new CopyPlugin({
      patterns: [
        {
          from: paths.public,
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
		new HtmlWebpackPlugin({
			title: 'Webpack-easy-start-template',
			template: `${paths.public}/template.html`,
			filename: 'index.html',
			templateParameters: {
        author: 'Kirill Gruzdev',
        description: 'Easy Webpack 5 start template for any spa projects',
        keywords: 'webpack, babel, typescript',
      }
		}),
		new Dotenv()
	],
	resolve: {
		modules: [paths.src, 'node_modules'],
		alias: {
      "@img": `${paths.src}/img`
    },
		extensions: ['.tsx', '.ts', '.tsx', '.js', 'json'],
	},
};