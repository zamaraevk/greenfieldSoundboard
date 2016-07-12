var gulp = require('gulp');
var jshint = require('gulp-jshint');//linting JS files
var changed = require('gulp-changed');//moniters files for changes to be gulped
var webpack = require('gulp-webpack');//not sure what this does yet but it's important
var shell = require('gulp-shell');//shell commands for pushing to heroku


gulp.task('default', function() {
  // place code for your default task here
});

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
