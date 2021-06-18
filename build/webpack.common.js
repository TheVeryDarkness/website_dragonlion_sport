// For HtmlWebpackPlugin, see:
//  https://github.com/jantimon/html-webpack-plugin
// For style-loader, see:
//  https://webpack.js.org/loaders/style-loader/
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
 entry: {
  index: "./src/entry/index.js",
  links: "./src/entry/links.js",
  reference: "./src/entry/reference.js",
  manage: "./src/entry/manage.js"
 },
 output: {
  path: __dirname + "/docs",
  filename: "[name]-[contenthash].js"
 },
 module: {
  rules: [
   {
    test: /\.vue$/,
    loader: "vue-loader" // 处理以.vue结尾的文件
   },
   {
    test: /\.png$/,
    use: [
     {
      loader: "url-loader",
      options: {
       limit: 10240,
       fallback: "file-loader",
       name: "images/[name].[hash].[ext]"
      }
     },
     {
      loader: "image-webpack-loader",
      options: {
       optipng: {
        enabled: true
       },
       pngquant: {
        quality: [0.65, 0.9],
        speed: 4
       },
       webp: {
        quality: 75
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
   maxInitialRequests: 5
  }
 },
 watch: true,
 watchOptions: {
  ignored: /(\.vscode|\.git|docs|node_modules)/,
  poll: 1000
 },
 plugins: [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({minify:htmlMinifyOption})
 ]
};
