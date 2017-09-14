
var path = require('path')
var webpack = require('webpack')
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');

var config = {
    entry: path.resolve(__dirname, '../app/index'),
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: "[name].js"
    },
    // eslint: {
    //     configFile: '.eslintrc' // Rules for eslint
    // },
    // devtool: 'inline-source-map',
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
            _dev_: JSON.stringify('true'),
            'process.env': {
              'NODE_ENV': JSON.stringify('dev')
            }
        })
    ]
}

module.exports = Merge(CommonConfig, config)

