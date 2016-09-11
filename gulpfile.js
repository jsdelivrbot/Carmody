var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('sass', function() {
	return gulp.src('ang/scss/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('ang/scss/**/*.scss', ['sass']);
	gulp.watch('ang/*.html', browserSync.reload);
	gulp.watch('ang/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'ang'
		},
	})
});

gulp.task('js', function() {
	gulp.src(['ang/js/lib/*.js','ang/*.js','ang/*/*.module.js', 'ang/*/*.component.js', 'ang/*/*.js'])
		.pipe(concat('ang.js'))
		.pipe(gulp.dest('ang/'))
})

gulp.task('useref', function() {
	return gulp.src('ang/*.html')
		.pipe(useref())
		.pipe(gulpIf('ang.js', uglify()))
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
	return gulp.src('ang/img/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest('dist/img'))
});

gulp.task('clean:dist', function() {
	return del.sync('dist');
});

gulp.task('build', function (callback) {
	runSequence('clean:dist',
		['sass', 'useref', 'images'],
		callback
	)
});

gulp.task('default', function (callback) {
	runSequence(['sass', 'browserSync', 'watch'],
		callback
	)
});
