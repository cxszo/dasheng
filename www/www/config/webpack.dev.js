
var path = require('path')
var webpack = require('webpack')
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');

var config = {
    devtool: 'inline-source-map',
    // devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: '../app',
        historyApiFallback:{
            index:'/index.html',
            rewrites: [
                { from: /^\/blog/, to: 'build/index.html' }
            ]
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify('true'),
            'process.env': {
              'NODE_ENV': JSON.stringify('dev')
            }
        })
    ]
}

module.exports = Merge(CommonConfig, config)

