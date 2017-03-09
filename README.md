项目结构
```
├── dist: 打包生成目录
|   ├── assets          图片文件目录
|   ├── build.js        打包文件
|   └── build.js.map    source-map文件
├── src: 开发环境
|   ├── assets          图片文件目录
|   ├── component       组件目录
|   ├── directives      自定义指令
|   ├── router          路由配置
|   ├── styles          scss文件
|   ├── vuex            vuex管理
|   ├── App.vue         根组件
|   └── main.js         vue实例和router定义
├── .babelrc            babel配置文件
├── .gitignore          gitignore文件
├── index.html          html文件
├── package.json        npm配置文件
├── README.md           README文件
└── webpack.config.js   webpack配置文件
```

规范

使用webpack打包 js规范
整体样式在 src/styles/index.scss中定义，单文件组件样式在组件的style中定义

# 安装依赖
npm install

# 本地服务与热重载 localhost:8081
npm run dev

# 建立生产与压缩资源
npm run build


<!-- 备注记录 -->
encodeURIComponent()   	中文编码
decodeURIComponent()	中文解码