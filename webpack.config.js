module.exports = {
	entry: './src/ts/index.js',
	output: {
		filename: 'dist/js/bundle.js',
		path: __dirname
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /.ss$/,
				exclude: /node_modules/,
				loader: 'snakeskin-loader'
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	}
};