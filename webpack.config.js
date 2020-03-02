const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'practicalTasks/delegationEvent/ReactJS/index'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, 'practicalTasks/delegationEvent/ReactJS'),
            use: ['babel-loader']
        }],
    },
    devServer: {
        contentBase:  path.resolve(__dirname, 'dist'),
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "practicalTasks/delegationEvent/ReactJS/public/index.html"
        })
    ]
};