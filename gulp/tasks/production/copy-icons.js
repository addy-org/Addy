var gulp    = require('gulp');
var config  = require('../../config').optimize.ico;

gulp.task('copy:icons', function() {
  return gulp.src(config.src)
  	.pipe(gulp.dest(config.dest));
});