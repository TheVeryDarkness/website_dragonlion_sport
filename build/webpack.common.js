// For HtmlWebpackPlugin, see:
//  https://github.com/jantimon/html-webpack-plugin
// For style-loader, see:
//  https://webpack.js.org/loaders/style-loader/
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

function resolve(dir) {
 return path.join(__dirname, '..', dir)
}
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
  index: resolve("src/index.ts"),
 },
 output: {
  path: __dirname + "/../dist",
  filename: "[name]-[contenthash].js"
 },
 resolve: {
  alias: {
   "@": resolve("src"),
   "~": path.join(__dirname, ".."),
   'vue$': 'vue/dist/vue.esm-bundler.js'
  },
  extensions: [".js", ".ts"]
 },
 module: {
  rules: [
   {
    test: /\.vue$/,
    loader: "vue-loader", // 处理以.vue结尾的文件
    options: { loaders: { "css": ["vue-style-loader!css-loader"] } }
   },
   {
    test: /\.ts$/,
    loader: 'ts-loader',
    options: {
     appendTsSuffixTo: [/\.vue$/],
    }
   },
   {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [resolve('src')]
   },
   {
    test: /(dark|light)\.css$/,
    use: [
     {
      loader: "style-loader",
      options: { injectType: "lazyStyleTag" }
     },
     { loader: "css-loader" },
     { loader: "postcss-loader" }
    ]
   },
   {
    test: /basic\.css$/,
    use: [
     {
      loader: "style-loader"
     },
     { loader: "css-loader" },
     { loader: "postcss-loader" }
    ]
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
  ignored: /(\.vscode|\.git|dist|node_modules)/,
  poll: 1000
 },
 plugins: [
  new CleanWebpackPlugin(),
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
   template: resolve("index.html"),
   filename: "index.html",
   title: "Tongji Dragon&Lion Dance Sport",
   favicon: resolve("pic/icon/DragonLion.png"),
   minify: htmlMinifyOption
  })
 ]
};
