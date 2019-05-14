const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js', // name多个入口文件动态输出对应的文件名
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除范围
                include: path.resolve(__dirname, './src') ,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/, // 图片处理 在模板中的引用方式:require(图片地址)
                loader: 'file-loader',
                options: {
                    limit: 1024, // 图片压缩
                    name: 'assets/[name]-[hash:5].[ext]' // 图片增加hash值
                }
            },
            {
                test: /\.(ttf|woff2?|eot|svg)$/,
                loader: 'url-loader', // 解析url路径
                options: {
                    limit: 10
                }
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html', // 指定生成的文件名称：index-[hash].html
            template: 'index.html', // 指定根目录下的index文件
            inject: 'body', // 指定js放在html的哪个位置
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        })
    ],
    stats: {
        children: false // 解决HtmlWebpackPlugin编译中报错Entrypoint undefined = index.html的问题
    },
}
