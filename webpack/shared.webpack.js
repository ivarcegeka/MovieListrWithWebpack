var exports = module.exports = {};

const webpack = require('webpack');
const sharedConfig = require('./shared.webpack');
const HtmlWebpack = require('html-webpack-plugin');
const path = require('path');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
var CleanWebpackPlugin = require('clean-webpack-plugin');


const rootDir = path.resolve(__dirname, '..');

exports.rootDir = rootDir;
exports.basicConfig = {
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
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            'root': rootDir
        }),
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ]
}