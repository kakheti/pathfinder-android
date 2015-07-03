var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserify = require('gulp-browserify');

gulp.task('default', ['sass', 'js']);

gulp.task('sass', function(){
	gulp.src('assets/stylesheets/client.scss')
		.pipe(sass({
			errLogToConsole: true
		}))
		.pipe(gulp.dest('www/assets'));
});

gulp.task('js', function(){
	gulp.src('assets/javascripts/client.js')
		.pipe(browserify())
		.pipe(gulp.dest('www/assets'));
});

gulp.task('watch', function(){
	return gulp.watch('assets/**/*', ['default']);
});