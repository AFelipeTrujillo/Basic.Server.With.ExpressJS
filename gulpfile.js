var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');

gulp.task('imagemin',function(){

	gulp.src('src/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('app/images'));

});

gulp.task('styles',function(){
	gulp.src(['src/styles/*.css'])
	.pipe(concat('styles.css'))
	.pipe(autoprefix('last 2 versions'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('app/'));
});

gulp.task('js',function(){
	gulp.src('src/js/*.js')
	.pipe(concat('scripts.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/'));
});

gulp.task('default',['browserSync','imagemin','styles','js'],function(){

	gulp.watch('src/styles/*.css',['styles']).on('change',browserSync.reload);

	gulp.watch('src/images/**/*',['imagemin']).on('change',browserSync.reload);

	gulp.watch('app/*.html').on('change', browserSync.reload);

	gulp.watch('src/js/**/*.js',['js']).on('change',browserSync.reload);

});

gulp.task('browserSync',function(){
	browserSync.init({
		server : {
			baseDir: 'app'
		}
	});
});