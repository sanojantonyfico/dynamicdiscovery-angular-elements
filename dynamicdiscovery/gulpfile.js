var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
var open = require('gulp-open');

gulp.task('create-dyn1-element', function() {
  return gulp.src('./dist/dynamicdiscovery1/*.js')
    .pipe(concat('dynamic.element1.js'))
    .pipe(gulp.dest('./elements-demo'));
});

gulp.task('create-dyn2-element', function() {
  return gulp.src('./dist/dynamicdiscovery2/*.js')
    .pipe(concat('dynamic.element2.js'))
    .pipe(gulp.dest('./elements-demo'));
});

gulp.task('create-dyn3-element', function() {
  return gulp.src('./dist/dynamicdiscovery3/*.js')
    .pipe(concat('dynamic.element3.js'))
    .pipe(gulp.dest('./elements-demo'));
});

gulp.task('demo-elements', function() {
  gulp.src('elements-demo')
    .pipe(webserver({
      port:9080,
      livereload: false,
      directoryListing: true,
      open: "index.html",
      fallback: 'index.html'
    }));
});

gulp.task('default', ['create-dyn1-element','create-dyn2-element', 'create-dyn3-element','demo-elements']);
