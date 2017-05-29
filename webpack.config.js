const path = require('path');
const webpack = require('webpack');
const config = {
    entry: {
        vendor: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/angular/angular.js',
            './node_modules/bootstrap/dist/js/bootstrap.js'
        ],
        app: [
            './app/app.module.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
        port: 3000
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor.min.js')
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),*/
    ]
};

module.exports = config;