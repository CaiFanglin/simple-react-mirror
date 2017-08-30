var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, './src/js/index.jsx'),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react'],
                include: path.resolve(__dirname, './src/js')
            },
            {
                test: /\.css$/,
                loader: 'style!css',
                include: path.resolve(__dirname, './src/css')
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'mirror',
            template: './src/html/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true
    }
}