module.exports = {
	entry: {
		index: "./js/entry/index.js",
		links: "./js/entry/links.js",
		reference: "./js/entry/reference.js",
		manage: "./js/entry/manage.js",
	},
	output: {
		path: __dirname,
		filename: "./packed/[name]-bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader", "css-loader?minimize"
				]
			}
		]
	}
};