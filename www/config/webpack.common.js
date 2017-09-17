
var path = require('path')
var webpack = require('webpack')
var pxtorem = require('postcss-pxtorem')

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('css/[name].[chunkhash:7].css');
const extractLESS = new ExtractTextPlugin('css/[name].[chunkhash:7]-less.css');
const extractSASS = new ExtractTextPlugin('css/[name].[chunkhash:7]-scss.css');

var config = {
    
    resolve:{
        extensions: ['.web.js', '.jsx', '.js', '.json', '.less'],
    },
    module:{
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader: 'css-loader!postcss-loader',
                            options:{minimize: true}
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: extractSASS.extract({
                    fallback: "style-loader",
                    use:[
                        {loader: 'css-loader',options:{minimize: true}},
                        {loader: 'sass-loader'}
                    ]
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader",
                    use: [
                        {loader:'css-loader',options:{minimize: true}},
                        {loader:'less-loader'},

                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                exclude: /node_modules/,
                loader: 'url-loader',
                options: {
                  limit: 2500,
                  name: './img/[sha512:hash:base64:7].[ext]'
                }
            }
            
            
        ]
    },
    plugins: [
        extractCSS,
        extractLESS,
        extractSASS,
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: ()=>{
                    return [require('autoprefixer')];
                }
            }
        })
    ]
}

module.exports = config

