var gulp = require('gulp');
var jshint = require('gulp-jshint');//linting JS files
var changed = require('gulp-changed');//moniters files for changes to be gulped
var webpack = require('gulp-webpack');//not sure what this does yet but it's important
var shell = require('gulp-shell');//shell commands for pushing to heroku
var webpackConfig = require('./webpack.config.js');
var minifyHtml = require('gulp-minify-html');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

// Gulp task test
gulp.task('default', function() {
  console.log('GULP works!');
});

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./compiled/components/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// gulp babel to compile components.
gulp.task('babel', function() {
	return gulp.src('./public/components/*')
    // .pipe(jsx())
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(gulp.dest('./compiled/public/components'));
});

// gulp watch to monitor changes in any jsx file.
// If there is a file change, use babel task.
gulp.task('watch', function() {
  gulp.watch('./public/components/*.jsx', ['babel']);
});

// gulp deploy to activate Heroku commands in cli.
// Be sure to login to Heroku, clone repo, create, add, commit
// before using this task.
gulp.task('heroku', shell.task([
  'git push heroku master',
  'heroku open'
]));

// gulp webpack to minify, watch, and pipe compiled js files to dist.
gulp.task('webpack', function() {
  return gulp.src('./compiled/components/*.js')
  .pipe(webpack({
    watch: true,
    webpackConfig
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('babel', function() {
	return gulp.src('public/components/*')
    // .pipe(jsx())
		.pipe(babel({
			presets: ['react']
		}))
		.pipe(gulp.dest('compiled/public/components'));
});

gulp.task('watch', function() {
  gulp.watch('public/components/*.jsx', ['babel']);
});
