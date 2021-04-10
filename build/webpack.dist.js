const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const webpackConf = require('./webpack.base');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function () {
    return {
        mode: 'production',
        devtool: 'source-map',
        externals: [
            {
                react: {
                    commonjs: 'react',
                    commonjs2: 'react',
                    amd: 'react',
                    root: 'React',
                },
                'react-dom': {
                    commonjs: 'react-dom',
                    commonjs2: 'react-dom',
                    amd: 'react-dom',
                    root: 'ReactDOM',
                },
                lodash: {
                    commonjs: 'lodash',
                    commonjs2: 'lodash',
                    amd: 'lodash',
                    root: '_',
                },
            },
            /^monaco-editor.*$/,
        ],
        optimization: {
            minimize: false,
        },
        entry: {
            index: path.resolve(__dirname, '../src/index.ts'),
        },
        output: {
            path: path.resolve(__dirname, '../dist'),
            library: 'molecule',
            libraryTarget: 'umd',
            libraryExport: 'var',
            filename: 'index.js',
            umdNamedDefine: true,
        },
        resolve: {
            extensions: ['.js', '.jsx', '.tsx', '.ts', '.css', '.scss'],
            alias: {
                mo: path.resolve(__dirname, '../src'),
            },
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
                    test: /\.(jpg|png|gif|eot|woff|svg|ttf|woff2|gif|appcache|webp)(\?|$)/,
                    use: ['file-loader'],
                },
                {
                    test: /\.[s]?css$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].css',
                            },
                        },
                        {
                            loader: 'extract-loader',
                        },
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new webpack.DefinePlugin({
                __DEVELOPMENT__: false,
            }),
            // new MiniCssExtractPlugin({
            //     filename: 'molecule.css'
            // }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(
                            __dirname,
                            '../src/extensions/theme-defaults/**/*'
                        ),
                        to: path.resolve(
                            __dirname,
                            '../dist/extensions/theme-defaults/'
                        ),
                        globOptions: {
                            dot: true,
                            gitignore: true,
                            ignore: ['**/*.ts'],
                        },
                    },
                    {
                        from: path.resolve(
                            __dirname,
                            '../src/extensions/theme-monokai/**/*'
                        ),
                        to: path.resolve(
                            __dirname,
                            '../dist/extensions/theme-monokai/'
                        ),
                        globOptions: {
                            dot: true,
                            gitignore: true,
                            ignore: ['**/*.ts'],
                        },
                    },
                    {
                        from: path.resolve(
                            __dirname,
                            '../src/extensions/theme-monokai/**/*'
                        ),
                        to: path.resolve(
                            __dirname,
                            '../dist/extensions/vscode-palenight-theme/'
                        ),
                        globOptions: {
                            dot: true,
                            gitignore: true,
                            ignore: ['**/*.ts'],
                        },
                    },
                ],
            }),
        ],
    };
};
