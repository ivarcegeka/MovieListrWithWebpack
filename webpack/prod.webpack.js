'use strict';

const webpack = require('webpack');

const basicConfig = require('./shared.webpack').basicConfig;

basicConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    output: {
        comments: false
    },
    compressor: {
        warnings: false
    }
}));

module.exports = basicConfig;