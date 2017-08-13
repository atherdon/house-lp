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
			// 'assets/js/nivo-lightbox/nivo-lightbox.css',
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
















gulp.task('scripts', function() {
	return gulp.src([
			'assets/vendor/lightbox2-master/dist/js/lightbox.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/js/bootstrap-datepicker.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/locales/bootstrap-datepicker.ru.min.js',
			'assets/js/jquery.timepicker.js',
			'assets/js/jquery.validate.min.js',
			'assets/js/jquery.form.min.js',
			'https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.11/jquery.mask.min.js',
			'assets/js/main.js',
			'assets/js/slider.js',
			'assets/js/google-maps-init.js',
			'assets/js/contact-form-init.js',
			'assets/js/arrow-link-init.js'
		])
			.pipe(concat('all.js', {newLine: ';'}))
			.pipe(gulp.dest('assets/js'));
}); 


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

gulp.task('watch2', ['browserSync', 'scripts'], function(){
	gulp.watch('assets/stylus/**/**.styl', ['stylus']);
});