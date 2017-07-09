var gulp = require('gulp');
var stylus = require('gulp-stylus');
var bootstrap = require('bootstrap-styl');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

gulp.task('stylus', function() {
	return gulp.src('assets/stylus/main.styl')
				.pipe(stylus({
						use: [
							bootstrap()
						]
				}))
				.pipe(cssmin())
				.pipe(rename({suffix: '.min'}))
				.pipe(gulp.dest('assets/css'));
});

gulp.task('browserSync', ['stylus'], function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('public/stylesheets/stylus/*', ['stylus', 'browserSync']);
});