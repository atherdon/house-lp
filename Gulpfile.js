var gulp        = require('gulp');
var stylus      = require('gulp-stylus');
var bootstrap   = require('bootstrap-styl');
var concat      = require('gulp-concat');
var cssmin      = require('gulp-cssmin');
var rename      = require('gulp-rename');
var browserSync = require('browser-sync');

gulp.task('stylus', function() {
	return gulp.src([

			'assets/css/jquery.bxslider.css',
			'assets/css/jquery.timepicker.css',
			'assets/js/nivo-lightbox/nivo-lightbox.css',
			'assets/css/bootstrap-datepicker.min.css',
			'assets/css/select2.min.css',
			// 'assets/font-awesome-4.7.0/css/font-awesome.min.css',
			'assets/stylus/style.styl'
		])
		.pipe(stylus({
				use: [
					bootstrap()
				]
		}))
		.pipe(concat('style.css'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/css'));
});

// gulp.task('stylus', function() {
// 	return gulp.src('assets/stylus/style.styl')
// 				.pipe(stylus({
// 						use: [
// 							bootstrap()
// 						]
// 				}))
// 				.pipe(cssmin())
// 				.pipe(rename({suffix: '.min'}))
// 				.pipe(gulp.dest('assets/css'));
// });

gulp.task('browserSync', ['stylus'], function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['browserSync'], function(){
	gulp.watch('assets/stylus/**/**.styl', ['stylus']);
});