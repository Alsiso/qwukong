var gulp = require('gulp');
var browserSync = require('browser-sync').create(); // 浏览器实时刷新
global.browserSync = browserSync
var proxy = require('http-proxy-middleware'); // 设置代理服务，接口转发
const userConfig = require('../../user.config');

// 读取转发配置文件
let proxyMiddleware = userConfig.proxyConfig.map(item => {
    return proxy(item.path, item.config)
})

gulp.task('server', function() {

    // 从项目dev目录启动服务器
    browserSync.init({
        server: "./dev",
        port: userConfig.port,
        middleware: proxyMiddleware, // 转发
        notify: false //不显示在浏览器中的任何通知。
    });

});