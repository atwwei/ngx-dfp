var gulp = require('gulp');
var prune = require('gulp-prune');

// 清除Angular ngc临时文件
gulp.task('default', () => {
    return gulp.src(['lib/**', '!lib/**/*.ngfactory.*', '!lib/**/*.ngsummary.*'])
        .pipe(prune('lib/'))
});