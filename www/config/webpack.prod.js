

var webpack = require('webpack')
var path = require('path')
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');



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
        filename: "[name].[chunkhash:5].js",
        publicPath: './'
    },
    plugins: [
        new webpack.DefinePlugin({
            _dev_: JSON.stringify('false'),
            'process.env': {
              'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
              screw_ie8: true,
              keep_fnames: true
            },
            compress: {
              screw_ie8: true
            },
            comments: false
        }),
        // 提供公共代码
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: '[name].[chunkhash:5].js'
        })
    ]
}

module.exports = Merge(CommonConfig, config)