var gulp = require('gulp'),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream'),
	stylus = require('gulp-stylus'),
	runSequence = require('run-sequence'),
	wpconfig = require('./webpack.config.js'),
	browserSync = require('browser-sync').create(),
	plumber = require('gulp-plumber'),
	beep = require('beepbeep');

function log(err) {
	console.log(err);
	beep();
}


gulp.task('javascript', function () {
	return gulp.src('./src/ts/index.ts')
		.pipe(plumber({errorHandler: log}))
		.pipe(webpackStream(wpconfig, webpack))
		.pipe(gulp.dest('./'));
});


gulp.task('stylus', function () {
	return gulp.src('./src/stylus/main.styl')
		.pipe(plumber({errorHandler: log}))
		.pipe(stylus())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('static', function () {
	return gulp.src('./src/static/*.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', function(callback) {
	browserSync.init({
		server: {
			baseDir: './'
		},
		open: false
	});
	runSequence(
		'javascript',
		['stylus', 'static'],
		'watch',
		callback)
});

gulp.task('watch', function() {
	gulp.watch('./src/ts/*', ['javascript']);
	gulp.watch('./src/stylus/*', ['stylus']);
	gulp.watch('./src/static/*', ['static']);
});