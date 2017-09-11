
var path = require('path')
var webpack = require('webpack')
var pxtorem = require('postcss-pxtorem')
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
    entry: path.resolve(__dirname, '../app/index'),
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: "index.js"
    },
    resolve:{
        extensions: ['.web.js', '.jsx', '.js', '.json'],
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                  limit: 10000
                }
            },
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    // postcss: [
    //     require('autoprefixer'),
    //     pxtorem({
    //         rootValue: 100,
    //         propWhiteList: []
    //     })
    // ],
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
        })
    ]
}

module.exports = config

