var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var cssMin = require('gulp-css');

gulp.task('cssMinfy', function(){
  gulp.src('src/**/*.css')
    .pipe(cssMin())
    .pipe(gulp.dest('dist'));
});

gulp.task('browserify', function () {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
  gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['browserify', 'cssMinfy', 'copy']);

gulp.task('watch', function () {
  gulp.start('default');
  gulp.watch('src/**/*.*', ['default']);
});
