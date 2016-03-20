var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist/',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        noParse: /es6-promise\.js$/,
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            loader: 'babel'
        }, {
            test: /\.scss$/,
            exclude: /node_modules|dist/,
            loaders: ['style', 'css', 'sass']
        }, {
            test: /\.(jpg|png|gif)$/,
            loader: 'url-loader'
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: '#source-map'
}
