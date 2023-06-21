const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('./package.json');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    // change to NODE_ENV
    mode: 'development',
    entry: {
        // change to one entry point
        bundle: path.resolve(__dirname, 'client/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        //change to one filename
        filename: '[name].[contenthash].js',
        clean: true,
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        proxy: {
            '/pin/*': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        },
    },
    module: {
        rules: [{
                test: /\.(scss|css)$/,
                exclude: /node_modules/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer'),
                                ],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    // DON'T WE NEED THIS?
                    // options: {
                    //     presets: ['@babel/preset-env','@babel/preset-react'],
                    // },
                },
            },
            {
                test: /\.svg$/,
                use: {
                   loader: 'babel-loader',
                    // options: {
                    //     presets: ["@dr.pogodin/babel-preset-svgr"],
                    // },
                },
            },

            // {
            //     // test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //     test: /\.(svg)$/,
            //     issuer: /\.[jt]sx?$/,
            //     use: [{
            //         loader: '@svgr/webpack',
            //         options: {
            //             prettier: false,
            //             svgo: true,
            //             type: "javascript/auto",
            //             svgoConfig: {
            //                 plugins: [{
            //                     removeViewBox: false
            //                 }],
            //             },
            //             titleProp: true,
            //         },
            //     }, ],
            // },

            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        plugins: [
            // WHAT IS THIS DOING?
            new DirectoryNamedWebpackPlugin({
                honorIndex: true, // defaults to false

                // respect "main" fields defined in package.json
                // if it's an Array, values will be used as name of the fields to check
                // defaults to true, which is the same as ["main"]
                honorPackage: true,

                // if it's matching with resolving directory's path, plugin will ignore the custom resolving.
                // it can be string/regex or Array of string/regex.
                exclude: /node_modules/,

                ignoreFn: function(webpackResolveRequest) {
                    // custom logic to decide whether request should be ignored
                    // return true if request should be ignored, false otherwise
                    return false; // default
                },

                // define where the imported files will be resolving by DirectoryNamedWebpackPlugin.
                // it can be string/regex or Array of string/regex.
                include: [
                    path.resolve('./client/components')
                ],

                transformFn: function(dirName, dirPath, webpackResolveRequest) {
                    // use this function to provide custom transforms of resolving directory name
                    // return desired filename or array of filenames which will be used
                    // one by one (honoring order) in attempts to resolve module
                    return dirName; // default
                },
            })
        ],
        alias: {
            A: path.resolve(__dirname, 'client/assets'),
            C: path.resolve(__dirname, 'client/components'),
            R: path.resolve(__dirname, 'client/routes'),
            S: path.resolve(__dirname, 'client/styles'),
            Z: path.resolve(__dirname, 'client/state'),
            U: path.resolve(__dirname, 'client/utilities'),
        },
        extensions: ['.js', '.jsx', '.json', '.wasm'],

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv(),
        new HtmlWebpackPlugin({
            title: packageJson.name,
            filename: 'index.html',
            template: path.resolve(__dirname, 'client/index.html'),
        }),
    ],
};
