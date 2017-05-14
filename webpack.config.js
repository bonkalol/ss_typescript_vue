module.exports = {
	entry: './src/ts/index.ts',
	output: {
		filename: 'dist/js/bundle.js',
		path: __dirname
	},
	module: {
		rules: [
			{
				test: /.ts$/,
				exclude: /node_modules/,
				loader: 'ts-loader'
			}
		]
	},
	resolve: {
		alias: {
			vue: 'vue/dist/vue.js'
		}
	}
};