# 多页面应用 
在单页面基础上增加，entry入口对象增加项 
plugins增加new HtmlewebpackPlugin({ ... })

# 现存在问题
```
{
    test: /\.(ttf|woff2?|eot|svg)$/,
    loader: 'url-loader', // 解析url路径
    options: {
        limit: 10
    }
}
```
图片压缩打包无效，图片size没有变化


