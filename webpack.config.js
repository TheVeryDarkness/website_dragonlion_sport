// For HtmlWebpackPlugin, see:
//  https://github.com/jantimon/html-webpack-plugin
// For style-loader, see:
//  https://webpack.js.org/loaders/style-loader/
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
							mozjpeg: {
								progressive: true,
								quality: 65,
							},
							optipng: {
								enabled: true,
							},
							pngquant: {
								quality: [0.65, 0.90],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
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
			minChunks: 1,
			minSize: 1024,
			maxAsyncRequests: 5,
			maxInitialRequests: 3
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			"filename": "index.html",
			"template": "index.html",
			"chunks": ["index"],
			"favicon": "pic/icon/DragonLion.png"
		}),
		new HtmlWebpackPlugin({
			"filename": "links/links.html",
			"template": "links/links.html",
			"chunks": ["normal"],
			"favicon": "pic/icon/DragonLion.png"
		}),
		new HtmlWebpackPlugin({
			"filename": "reference/reference.html",
			"template": "reference/reference.html",
			"chunks": ["normal"],
			"favicon": "pic/icon/DragonLion.png"
		}),
		new HtmlWebpackPlugin({
			"filename": "manage/manage.html",
			"template": "manage/manage.html",
			"chunks": ["manage"],
			"favicon": "pic/icon/DragonLion.png"
		})
	]
};