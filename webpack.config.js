module.exports = {
	entry: [
		"./js/entry/index.js",
	],
	output: {
		path: __dirname,
		filename: "./packed/bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/, loader: "css-loader"
			}
		]
	}
};