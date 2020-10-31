const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpackConf = require('./webpack.base');

module.exports = function(env) {
    return merge(webpackConf, {
        devtool: 'eval-source-map',
        devServer: {
            progress: false,
            hot: true,
            port: 8888,
        },
        entry: {
            'app': path.resolve(__dirname, './web/app.js'),
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(jpg|png|gif|eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
                    use: ['file-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, './web/index.html'),
            }),
        ].filter(Boolean),
    });
};
