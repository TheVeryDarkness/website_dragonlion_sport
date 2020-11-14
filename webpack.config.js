module.exports = {
	entry: [
		"./js/entry/index.js",
	],
	output: {
		path: __dirname,
		filename: "./packed/index-bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/, loader: "css-loader"
			}
		]
	}
};