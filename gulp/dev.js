import gulp from 'gulp'

// 开发环境
gulp.task('dev',
    gulp.series(
        'clean:dev', // 删除dev开发及打包文件夹
        'html:dev',
        gulp.parallel('scss:dev', 'js:dev', 'static:dev', 'favicon:dev'),
        'img:dev',
        'server'
    )
)