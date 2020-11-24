// For HtmlWebpackPlugin, see:
//  https://github.com/jantimon/html-webpack-plugin
// For style-loader, see:
//  https://webpack.js.org/loaders/style-loader/
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlMinifyOption = {
	collapseWhitespace: true,
	removeComments: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	useShortDoctype: true,
	minifyCSS: true,
	html5: true,
	minifyURLs: true
};
module.exports = {
	mode: "production",
	entry: {
		index: "./js/entry/index.js",
		normal: "./js/entry/normal.js",
		manage: "./js/entry/manage.js"
	},
	output: {
		path: __dirname + "/docs",
		filename: "[name]-bundle.js"
	},
	module: {
		rules: [
			{
				test: /(dark|light)\.css$/,
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
				test: /basic\.css$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
					}
				]
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: "url-loader",
						options: {
							limit: 10240,
							fallback: 'file-loader',
							name: 'images/[name].[hash].[ext]',
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							optipng: {
								enabled: true,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4,
							},
							webp: {
								quality: 75,
							}
						}
					}
				]
			}
		]
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			minChunks: 2,
			minSize: 1024,
			maxSize: 40960,
			maxAsyncRequests: 3,
			maxInitialRequests: 4
		}
	},
	watch: true,
	plugins: [
		new HtmlWebpackPlugin({
			"filename": "index.html",
			"template": "index.html",
			"chunks": ["index"],
			"favicon": "pic/icon/DragonLion.png",
			"minify": htmlMinifyOption
		}),
		new HtmlWebpackPlugin({
			"filename": "links/links.html",
			"template": "links/links.html",
			"chunks": ["normal"],
			"favicon": "pic/icon/DragonLion.png",
			"minify": htmlMinifyOption
		}),
		new HtmlWebpackPlugin({
			"filename": "reference/reference.html",
			"template": "reference/reference.html",
			"chunks": ["normal"],
			"favicon": "pic/icon/DragonLion.png",
			"minify": htmlMinifyOption
		}),
		new HtmlWebpackPlugin({
			"filename": "manage/manage.html",
			"template": "manage/manage.html",
			"chunks": ["manage"],
			"favicon": "pic/icon/DragonLion.png",
			"minify": htmlMinifyOption
		})
	]
};