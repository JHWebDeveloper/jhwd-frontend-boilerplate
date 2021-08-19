const { merge } = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common')

module.exports = merge(common, {
	mode: 'development',
	devServer: {
		port: 3000,
		devMiddleware: {
			publicPath: '/'
		},
		static: {
			directory: path.resolve('src'),
			watch: true
		},
		open: true
	}
})
