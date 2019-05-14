const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        // main: './src/app.js',
        home: './src/views/home/main.js',
        news: './src/views/news/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].[hash:5].js', // name多个入口文件动态输出对应的文件名
        publicPath: '/'
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
                test: /\.(png|jpe?g|gif|ico)$/, // 图片处理 在模板中的引用方式:require(图片地址)
                loader: 'file-loader',
                options: {
                    limit: 1, // 图片压缩
                    name: 'static/img/[name]-[hash:5].[ext]' // 图片增加hash值
                }
            },
            {
                test: /\.(ttf|woff2?|eot|svg)$/,
                loader: 'url-loader?limit=1000&name=static/font/[name].[ext]', // 解析url路径
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'html/home.html', // 指定生成的文件名称：index-[hash].html
            template: './src/views/home/template.html', // 指定根目录下的index文件
            favicon: path.resolve(__dirname, './favicon.ico'),
            inject: 'body', // 指定js放在html的哪个位置
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            filename: 'html/news.html', // 指定生成的文件名称：index-[hash].html
            template: './src/views/news/template.html', // 指定根目录下的index文件
            favicon: path.resolve(__dirname, './favicon.ico'),
            inject: 'body', // 指定js放在html的哪个位置
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            chunks: ['news']
        })
    ],
    stats: {
        children: false // 解决HtmlWebpackPlugin编译中报错Entrypoint undefined = index.html的问题
    },
}
