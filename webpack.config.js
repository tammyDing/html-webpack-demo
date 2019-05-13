const path = require('path')
const webpack = require('webpack') // 引入webpack
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 每次打包之前都删除dist文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: { // 多页面应程程序有多个入口文件
        // vendor: ['jquery', './src/js/common.js'], // 提取公用文件+优化配置 webpack4不需要此配置
        index: './src/js/index.js',
        cart: './src/js/cart.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].js', // name多个入口文件动态输出对应的文件名
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/, // 排队
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ // 多个页面需要多个
            title: 'index',
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index', 'vendor'], // 分块打包
            minify: { // html压缩
                removeComments: true, // 注释
                collapseWhitespace: true // 空格
            }
        }),
        new HtmlWebpackPlugin({
            title:'cart',
            filename: 'cart.html',
            template: './src/cart.html',
            chunks: ['cart', 'vendor'],
            minify: { // html压缩
                removeComments: true, // 注释
                collapseWhitespace: true // 空格
            }
        }),
        new UglifyJsPlugin(), // 压缩js
        new webpack.ProvidePlugin({ // 指定全局jquery
            $: 'jquery',
            'window.jQuery': 'jquery',
            jQuery: 'jquery'
        })
    ],
    stats: {
        children: false // 解决HtmlWebpackPlugin编译中报错Entrypoint undefined = index.html的问题
    },
    optimization: {
        splitChunks: { // 根据不同的策略来分割打包出来的bundle  --- 按照默认配置不需要修改
            chunks: 'all', // 同时分割同步和异步代码
            minChunks: 2
        },
    }
}
