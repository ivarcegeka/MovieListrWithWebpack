'use strict';

const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require('extract-text-webpack-plugin');


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
            },
            {
                test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                loader: 'url'
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
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new ExtractTextPlugin('bundle.css')
    ],
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: 9000
    }
}
;