
var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('bro',function(){
    gulp.src([
        'js/*.js',
        'css/*.css',
        'test/**/*.*'
    ]).pipe(browserSync.reload({stream:true}));
});
//动态刷新页面
gulp.task('browserSync', function() {
    browserSync.init({
        startPath: 'test/test-H5ComponentBase.html',
        server: {
            baseDir: './'
        }
    });
    gulp.watch([
        'js/*.js',
        'css/*.css',
        'test/**/*.*'
    ], ['bro']);
});
gulp.task('default', ['browserSync']);







