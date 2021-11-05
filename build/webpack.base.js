const path = require('path');
const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const varables = require('./variables');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts'],
        alias: {
            mo: path.resolve(__dirname, '../src'),
            '@stories': path.resolve(__dirname, '../stories'),
            '@test': path.resolve(__dirname, '../test'),
        },
    },
    output: {
        pathinfo: false,
        globalObject: 'self',
        filename: '[name].js',
        path: path.resolve(__dirname, '../lib'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new MonacoWebpackPlugin({
            languages: ['html', 'typescript', 'javascript', 'json', 'css'],
        }),
        new webpack.DefinePlugin(varables),
    ],
};
