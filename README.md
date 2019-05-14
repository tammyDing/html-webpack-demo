# 多页面应用 

# 存在问题
### 1.字体文件路径问题
font/font.scss font/wkronim.woff2 -> 打包后未生成font所在目录和文件，页面访问未加载到而报错
分析原因及解决办法：common.scss通过@import引入到scss文中，font路径错误；改为common.scss从main.js中import进来

### 2.main.js无法解析
暂未找到原因


