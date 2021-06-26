const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        dom: './src/dom/main.js',
        background: './src/background/background.js',
        popup: './src/popup/popup.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'extension/dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/popup/popup.html",
        filename: "popup.html",
        chunks: ['popup']
    }),
    new HtmlWebpackPlugin({
        template: "./src/donate.html",
        filename: "donate.html",
        chunks: ['donate']
    })]

}