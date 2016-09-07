'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var purify = require("purifycss-webpack-plugin");


const rootDir = path.resolve(__dirname, '..');

module.exports = {
    entry: {
        app: [path.resolve(rootDir, 'src', 'app', 'main')],
        polyfills: [path.resolve(rootDir, 'src', 'app', 'polyfills')],
        vendor: [path.resolve(rootDir, 'src', 'app', 'vendor')]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist'),
        publicPath: path.resolve(rootDir, 'dist')
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.(html|css)$/,
                loader: 'raw',
                include: /src\/app/
            },
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallbackLoader: 'style', loader: 'css'}),
                exclude: /src/
            }
        ]
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        }),
        new ExtractTextPlugin('styles.css'),
        new purify({
            basePath: __dirname,
            paths: [
                "src/**/*.html",
            ]
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
                comments:false
            },
            compressor: {
                warnings:false
            }
        }),

        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        })
    ],
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000
    }
}
;