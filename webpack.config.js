const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
        page: './src/js/page.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name]-[chunkhash].js', // name多个入口文件动态输出对应的文件名
        publicPath: ''
    },
    plugins: [
        new cleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'a.html', // 指定生成的文件名称：index-[hash].html
            template: 'index.html', // 指定根目录下的index文件
            inject: 'head', // 指定js放在html的哪个位置
            title: 'webpack title', // 定义title变量html页面通过<%= htmlWebpackPlugin.options.title %>获取
            time: new Date(), // 定义time变量，获取方式同上
            minify: {
                removeComments: true, // 删除注释
                collapseWhitespace: true // 删除空格
            }
        })
    ]
}
