var path = require('path')
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var pxtorem = require("postcss-pxtorem");
 module.exports={
     entry:path.resolve(__dirname,'./src'),
     output:{
        path:__dirname + '/build',
        filename:"bundle.js"
     },
     resolve:{
         extensions:['','.web.js','.jsx','.js','json'],
     },
     module:{
         loaders:[
             {
                 test: /\.(js|jsx)$/,//设置要匹配的文件扩展名的正则表达式
                 // exclude: /node_modules/,//include/exclude	设置loader要包含或者忽略的目录或文件
                 loader: 'babel',//要使用的loader
                 query: {//向loader传递额外的条件选项
                     plugins: [
                         ["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
                     ],
                     presets: ['es2015', 'react']
                 },
             },
             { test: /\.css$/, loader: 'style!css!postcss' },
             { test: /\.scss$/, loaders: ['style', 'css', 'sass']},
             { test: /\.(png|jpe?g|gif)(\?\S*)?$/, loader: 'file-loader', query: {  name: '[path][sha512:hash:base64:7].[ext]' } },
             { test: /\.(svg)$/i, loader: 'svg-sprite', include: [
                 require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
             ]}
         ]
     },
     eslint: {
         configFile: '.eslintrc' // Rules for eslint
     },
     postcss: [
         require('autoprefixer') //调用autoprefixer插件，例如 display: flex
         // autoprefixer({
         //     browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
         // })
         ,
         pxtorem({
             rootValue: 100,
             propWhiteList: [],
         })

     ],
     plugins: [
         // html 模板插件
         new HtmlWebpackPlugin({
             template: __dirname + '/src/index.html'
         }),
         // new webpack.ProvidePlugin({
         //     $: 'jquery'
         // }),

         // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
         new webpack.DefinePlugin({
             __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
         })
     ],
     devServer:{
         proxy: {
             '/notcontrol': {
                 //target: 'http://hsk.gs.9188.com',
                 //target: 'http://www.huishuaka.com',
                  target: 'http://10.0.10.12:6969',
                 changeOrigin: true
             },
             '/appapi': {
                 target: 'http://hsk.gs.9188.com',
                 //target: 'http://www.huishuaka.com',
                 // target: 'http://10.0.10.94:9090',
                 changeOrigin: true
             },
             '/control': {
                 target: 'http://hsk.gs.9188.com',
                 //target: 'http://www.huishuaka.com',
                 // target: 'http://10.0.10.94:9090',
                 changeOrigin: true
             },
             '/user': {
                 target: 'http://hsk.gs.9188.com',
                 //target: 'http://www.huishuaka.com',
                 // target: 'http://10.0.10.94:9090',
                 changeOrigin: true
             },
             '/credit': {
                 target: 'http://hsk.gs.9188.com',
                 //target: 'http://www.huishuaka.com',
                 // target: 'http://10.0.10.94:9090',
                 changeOrigin: true
             },
             '/loanweb':{
                 target: 'http://hsk.gs.9188.com',
                 //target:'http://www.huishuaka.com',
                 changeOrigin: true
             },
             '/gjj':{
                 target: 'http://gjj_8095.gs.9188.com',
                 //target:'http://www.huishuaka.com',
                 changeOrigin: true
             },
             '/cooperation':{
                 target: 'http://hsk.gs.9188.com',
                 //target:'http://www.huishuaka.com',
                 changeOrigin: true
             },
         },
         colors: true, //终端中输出结果为彩色
         historyApiFallback: true, //不跳转
         inline: true, //实时刷新
         hot: true  // 使用热加载插件 HotModuleReplacementPlugin
     },

 }
