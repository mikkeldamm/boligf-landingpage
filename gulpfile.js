var gulp        = require('gulp');
var minifyCss   = require('gulp-minify-css');
var $           = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss'
];

gulp.task('sass', function() {
  return gulp.src('src/scss/app.scss')
    .pipe($.sass({
        includePaths: sassPaths
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
        browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
    gulp.src('src/images/**/*.*')
        .pipe(gulp.dest('dist/images'));
});

gulp.task('default', ['sass', 'copy'], function() {
  gulp.watch(['src/scss/**/*.scss'], ['sass']);
  gulp.watch(['src/**/*.html'], ['copy']);
});