/*=========== GULP + Plugins init ==============*/

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import plumber from 'gulp-plumber';
import prefixer from 'gulp-autoprefixer';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import cssmin from 'gulp-cssmin';
import browserSync from 'browser-sync';
import cache from 'gulp-cache';
import htmlhint from 'gulp-htmlhint';
import rename from 'gulp-rename';
/*=========== Compile SCSS ==============*/

gulp.task('sass', function (cb) {

	gulp.src('./src/static/sass/**/*.scss')
		.pipe(plumber())
		.pipe(sass(
			{
				linefeed: "crlf"
			}
		))
		.pipe(cssmin())
		.pipe(prefixer(
			{
				overrideBrowserslist: ['last 12 versions'],
				cascade: false
			}
		))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./src/static/css'))
		.pipe(browserSync.stream());

	cb();
});


/*=========== Watch ==============*/

gulp.task('watch', function () {

	browserSync.init({
		server: {
			baseDir: "./src",
			index: "index.html"
		}
	});

	gulp.watch('./src/static/sass/**/*.scss', gulp.series('sass'));
});


/*=========== Minimization IMAGE ==============*/

gulp.task('images', function (cb) {
	gulp.src('./src/static/img/**/*.**')
		.pipe(cache(imagemin({
			interlaced: true
		})))
		.pipe(gulp.dest('./src/static/img'));

	cb();
});

/*============= HTML-validator ==============*/

gulp.task('html-valid', function (cb) {
	gulp.src("./src/*.html")
		.pipe(htmlhint());
	cb();
});


/*============= Join tasks ==============*/

gulp.task('default', gulp.parallel('watch', 'sass'));

gulp.task('build', gulp.series('sass', 'html-valid', 'images'));