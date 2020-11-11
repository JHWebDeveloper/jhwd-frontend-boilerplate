const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
	target: 'web',
	entry: {
		index: path.resolve('src', 'index.js')
	},
	output: {
		path: path.resolve('build'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [
									postcssPresetEnv({ stage: 0 })
								]
							}
						}
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			actions: path.resolve('src', 'actions'),
			css: path.resolve('src', 'css'),
			store: path.resolve('src', 'store')
		}
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: path.join('assets', 'css', '[name].min.css')
		}),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: path.resolve('src', 'index.html')
		})
	]
}
