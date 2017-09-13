
var path = require('path')
var webpack = require('webpack')
var pxtorem = require('postcss-pxtorem')

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
    
    resolve:{
        extensions: ['.web.js', '.jsx', '.js', '.json'],
    },
    module:{
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                // exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                  limit: 1000,
                  name: './img/[sha512:hash:base64:5].[ext]'
                }
            }
            
            
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[chunkhash:5].css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss(){
                    return [require('autoprefixer')];
                }
            }
        })
    ]
}

module.exports = config

