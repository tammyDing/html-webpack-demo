const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
        a: './src/js/a.js',
        b: './src/js/b.js',
        c: './src/js/c.js'
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
            inject: false, // 指定js放在html的哪个位置
            title: 'webpack a title', // 定义title变量html页面通过<%= htmlWebpackPlugin.options.title %>获取
            // chunks: ['main', 'a'], // 指定当前页面引用的js
            excludeChunks: ['b', 'c'], // 排除的js
        }),
        new HtmlWebpackPlugin({
            filename: 'b.html', // 指定生成的文件名称：index-[hash].html
            template: 'index.html', // 指定根目录下的index文件
            inject: false,
            title: 'webpack b title',
            // chunks: ['b']
            excludeChunks: ['a', 'c'],
        }),
        new HtmlWebpackPlugin({
            filename: 'c.html', // 指定生成的文件名称：index-[hash].html
            template: 'index.html', // 指定根目录下的index文件
            inject: false, // 指定js放在html的哪个位置
            title: 'webpack c title', // 定义title变量html页面通过<%= htmlWebpackPlugin.options.title %>获取
            // chunks: ['c']
            excludeChunks: ['a', 'b'],
        })
    ]
}
