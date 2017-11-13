const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./js/ClientApp.jsx",
    devtool: "cheap-eval-source-map", // inline all source maps into code, only in dev,
    output: {
        path: path.join(__dirname, 'public'), // always has to be an absolute path
        filename: 'bundle.js'
    },
    devServer: {
        publicPath: '/public/',
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    stats: {
        colors: true,
        reasons: true,
        chunks: true
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/, // run any file with ext of either js or jsx through babel
                loader: 'babel-loader'
            }
        ]
    }
};