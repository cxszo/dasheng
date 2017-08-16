
var path = require('path')
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pxtorem = require('postcss-pxtorem');
/*const CleanWebpackPlugin = require('clean-webpack-plugin');*/

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
        // 将 第三方依赖 单独打包
        vendor: [
            'react',
            'react-dom',
            'react-router',
            'es6-promise',
            'whatwg-fetch',
            'immutable'
        ]
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].[chunkhash:8].js",
        publicPath: '/5/wldNew/'
    },

    resolve:{
        extensions: ['', '.web.js', '.jsx', '.js', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,//设置要匹配的文件扩展名的正则表达式
                // exclude: /node_modules/,//include/exclude	设置loader要包含或者忽略的目录或文件
                loader: 'babel',//要使用的loader
                query: {//向loader传递额外的条件选项
                    plugins: [
                        ["import", [{ "style": "css", "libraryName": "antd-mobile" }]]
                    ],
                    presets: ['es2015','stage-0', 'react']
                },
            },
            { test: /\.css$/, loader: 'style!css!postcss' },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            // { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
            // { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss', 'sass')},
            { test: /\.(png|jpe?g|gif)(\?\S*)?$/, loader: 'file-loader', query: {  name: '[path][sha512:hash:base64:7].[ext]' } },
            { test: /\.(svg)$/i, loader: 'svg-sprite', include: [
                require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
            ]}
        ]
    },
    // module: {

    //   loaders: [
    //       { test: /\.(js|jsx)$/,  loader: 'babel' },
    //       { test: /\.less$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
    //       { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css!postcss') },
    //       { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss', 'sass')},
    //       { test:/\.(png|gif|jpg|jpeg|bmp)$/i, loader:'url-loader?limit=5000&name=img/[name].[chunkhash:8].[ext]' },
    //       { test:/\.(png|woff|woff2|ttf|eot)($|\?)/i, loader:'url-loader?limit=5000&name=fonts/[name].[chunkhash:8].[ext]'}
    //   ]
    // },
    postcss: [
        require('autoprefixer')
        ,
        pxtorem({
            rootValue: 100,
            propWhiteList: [],
        })
    ],

    plugins: [
        // webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by wei."),

        // html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        }),

        // 定义为生产环境，编译 React 时压缩到最小
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),

        // 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        // new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        // 分离CSS和JS文件
        new ExtractTextPlugin('[name].[chunkhash:8].css'),

        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'js/[name].[chunkhash:8].js'
        }),
        /* new CleanWebpackPlugin(//在编译前删除结果目录
             [ 'build'],
            {
                 root: __dirname,       　　　　　　　　　　//根目录
                verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
                 dry:      false        　　　　　　　　　　//启用删除文件
             }
         ),*/
        // 可在业务 js 代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示）
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        })
    ]
}