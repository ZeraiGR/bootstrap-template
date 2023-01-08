module.exports = (env) => {
	
	return {
		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, 'dist'),
			publicPath: '/',
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
	}
};