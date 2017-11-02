var path = require('path')
var webpack = require('webpack')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: function() {
        return {
            app: './src/index.js',
            a: './src/print.js'
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: '/dist/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.(jpg|png|gif)$/,
            use:[
                'file-loader'
            ]
        }]
    },
    devtool: 'inline-source-map',
    devServer: {
        port: 8080,
        filename: '[name].js',
        publicPath: '/dist/',
        contentBase: './dist/',
        historyApiFallback: false,
        inline: true,
        hot: true
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        // new webpack.optimize.UglifyJsPlugin(),
        new htmlWebpackPlugin({
            title: 'hello world'
            // template: path.resolve(__dirname, 'index.html')
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}