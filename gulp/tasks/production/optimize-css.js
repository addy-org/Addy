var gulp   = require('gulp');
var csso   = require('gulp-csso');
var size   = require('gulp-size');
var config = require('../../config').optimize.css;

/**
 * Copy and minimize CSS files
 */
gulp.task('optimize:css', function() {
  return gulp.src(config.src)
    .pipe(csso(config.options))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});