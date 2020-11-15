var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		index: "./js/entry/index.js",
		links: "./js/entry/links.js",
		reference: "./js/entry/reference.js",
		manage: "./js/entry/manage.js",
	},
	output: {
		path: __dirname + "/packed",
		filename: "[name]-bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					"style-loader", "css-loader"
				]
			},
			{
				test: /\.png$/,
				use: [
					"url-loader"
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			"filename": "index.html",
			"template": "index.html",
			"scriptLoading": "defer",
			"chunks": ["index"]
		}),
		new HtmlWebpackPlugin({
			"filename": "links.html",
			"template": "links/links.html",
			"scriptLoading": "defer",
			"chunks": ["links"]
		}),
		new HtmlWebpackPlugin({
			"filename": "reference.html",
			"template": "reference/reference.html",
			"scriptLoading": "defer",
			"chunks": ["reference"]
		}),
		new HtmlWebpackPlugin({
			"filename": "manage.html",
			"template": "manage/manage.html",
			"scriptLoading": "defer",
			"chunks": ["manage"]
		}),
	]
};