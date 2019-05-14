# 已解决的问题
### 1.字体文件路径问题
font/font.scss font/wkronim.woff2 -> 打包后未生成font所在目录和文件，页面访问未加载到而报错
分析原因及解决办法：common.scss通过@import引入到scss文中，font路径错误；改为common.scss从main.js中import进来

### 2.js报错
一个页面引入了所有的js，应该根据不同的页面引入不同的js
```
new HtmlWebpackPlugin({
    filename: 'html/home.html',
    template: './src/views/home/template.html',
    inject: 'body',
    chunks: ['home'] // 增加chunks
})
```

# 全局引入jquery
```
plugins: [
    new Webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({ // 引入公用模块jquery
        chunks: ['jquery', 'news']
    })
]
```

# 待实现功能点:
### 1.动态设置: entry, new HtmlWebpackPlugin
### 2.配置环境变量：开发环境不压缩html js css，生产环境压缩所有的包括image js css html; 开发环境可调试代码，生产环境不可调试代码
### 3.增量打包发版配置
### 4.全量打包发版配置
