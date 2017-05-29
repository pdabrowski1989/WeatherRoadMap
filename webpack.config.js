const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './app/app.module.js',
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './**/*.html',
            to: path.resolve(__dirname, 'dist')
        }]),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ]
};