// var webpack = require('webpack');
//
// module.exports = {
//     entry: './src/index.js',
//     output: {
//         path:__dirname + '/public',
//         filename: 'bundle.js'
//
//
//     }
// };

const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')

    }
};