// For HtmlWebpackPlugin, see:
//  https://github.com/jantimon/html-webpack-plugin
// For style-loader, see:
//  https://webpack.js.org/loaders/style-loader/
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
					{
						loader: "style-loader",
						options: { "injectType": "lazyStyleTag" }
					},
					{
						loader: "css-loader",
					}
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
			"chunks": ["index"],
			"favicon": "pic/icon/DragonLion.png"
		}),
		new HtmlWebpackPlugin({
			"filename": "links/links.html",
			"template": "links/links.html",
			"scriptLoading": "defer",
			"chunks": ["links"],
			"favicon": "pic/icon/DragonLion.png"
		}),
		new HtmlWebpackPlugin({
			"filename": "reference/reference.html",
			"template": "reference/reference.html",
			"scriptLoading": "defer",
			"chunks": ["reference"],
			"favicon": "pic/icon/DragonLion.png"
		}),
		new HtmlWebpackPlugin({
			"filename": "manage/manage.html",
			"template": "manage/manage.html",
			"scriptLoading": "defer",
			"chunks": ["manage"],
			"favicon": "pic/icon/DragonLion.png"
		}),
	]
};