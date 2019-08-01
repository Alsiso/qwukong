import gulp from 'gulp';
import gulpClean from 'gulp-clean';

// 删除dist文件夹，生产环境打包代码
gulp.task('clean:prod', function() {
    return gulp.src('./dist', { read: false, allowEmpty: true })
        .pipe(gulpClean());
})

// 删除dev文件夹，开发环境打包代码
gulp.task('clean:dev', function() {
    return gulp.src('./dev', { read: false, allowEmpty: true })
        .pipe(gulpClean());
})

gulp.task('clean', gulp.parallel('clean:prod', 'clean:dev'))