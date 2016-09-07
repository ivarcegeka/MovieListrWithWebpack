'use strict';

const path = require('path');

var basicConfig = require('./shared.webpack').basicConfig;
var rootDir = require('./shared.webpack').rootDir;

basicConfig.debug = true;
basicConfig.devServer = {
    contentBase: path.resolve(rootDir, 'dist'),
    port: 9000
}

module.exports = basicConfig;