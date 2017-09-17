

var webpack = require('webpack')
var path = require('path')
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');


const CompressionPlugin = require("compression-webpack-plugin");

var config = {
    entry: {
        app: path.resolve(__dirname, '../app/index'),
        vendor: [
            'react', 
            'react-dom',
            'react-router-dom',
        ]
    },
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: "[name].[chunkhash:7].js",
        publicPath: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            _dev_: JSON.stringify('false'),
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        }),
        // 代码压缩
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            minimize: true,
            compress: {warnings: false},
            output: {comments: false},
        }),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[chunkhash:7].js'
        }),
        // new CompressionPlugin({
        //     asset: "[path].gz[query]",
        //     algorithm: "gzip",
        //     test: /\.js$|\.css$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0,
        // }),
    ]
}

module.exports = Merge(CommonConfig, config)