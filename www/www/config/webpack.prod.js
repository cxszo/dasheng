

var webpack = require('webpack')
var Merge = require('webpack-merge');
var CommonConfig = require('./webpack.common.js');

var ExtractTextPlugin = require('extract-text-webpack-plugin')



var config = {

    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify('false'),
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
        })
    ]
}

module.exports = Merge(CommonConfig, config)