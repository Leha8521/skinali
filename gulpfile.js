var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: '0dZkLlOnHRsWTrJtPpCZtashojC0nzcq'
           
        }))
        .pipe(gulp.dest('images'));
        done();
});