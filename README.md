基于gulp构建的静态化多语言网址导航项目

---

#### 脚手架简介

1. 基于gulp、babel构建，支持commenjs规范及esm规范
2. 使用ejs模版引擎快速生成静态页面，可支持多语言国际化开发
3. 使用sass预处理css，使用postcss处理浏览器后缀，跨浏览器支持
4. 使用browser-sync构建开发环境，使用http-proxy-middleware处理请求代理（跨域接口支持）

#### 如何运行

1. 基本配置文件：user.config.js（服务端口，代理服务配置）
2. 安装依赖：执行npm install或者yarn
3. 基本命令

```
//开发环境
npm run || dev npm start
//构建打包
npm run build
```



#### 处理html

- 添加html页面，以及打包配置
1.  在/src/html/文件夹中添加对应页面
2.  修改/gulp/task/html.js文件htmlConfig配置

- 打包国际化页面

1. 在/src/lang/文件夹中添加对应语言文件
2. 修改/gulp/task/html.js文件htmlConfig配置
3. 例如index.html页面会被打包为index.htm（中文）index-en.html（英文）页面

#### 处理js

- 添加js文件以及打包配置

1. /src/js/文件夹中添加对应js入口文件
2. 修改/gulp/task/js.js文件entries配置

- html引入js文件

1. 参照index.js文件引入方式，构建后会自动添加hash值
2. 外部库引入，参照jquery文件的引入

#### 处理css

- 添加scss文件以及引入css文件

1. /src/css/文件夹中添加对应scss文件
2. html中参照index.css文件引入方式

#### 处理图片

- 图片放在/src/imgs/文件夹中
- html、scss中引入图片，使用相对于文件方式引入，构建后会替换路径

```
<img src="../imgs/123.jpeg" alt="">
```

#### 项目结构

```
├── README.md
├── dev     //开发环境打包代码
├── dist    //生产环境打包代码
├── favicon.ico
├── gulp    //gulp配置
├── gulpfile.babel.js   //babel配置
├── package.json
├── src
│   ├── html    //index入口文件
│   │   ├── ejs
│   │   │   └── footer.ejs
│   │   └── index.html
│   ├── imgs    //图片
│   │   └── 123.jpeg
│   ├── js  //js
│   │   ├── index.js
│   │   └── moduleA.js
│   ├── lang    //国际化语言文件
│   │   ├── en.json
│   │   └── zh-cn.json
│   ├── scss    //sass文件
│   │   ├── common
│   │   │   └── _reset.scss
│   │   └── index.scss
│   └── static  //静态文件
│       └── jquery-3.2.1.min.js
└── user.config.js.config   //开发配置文件
```
