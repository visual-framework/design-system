const path = require('path');
const gulp  = require('gulp');
const ext_replace = require('gulp-ext-replace');

// Pull in optional configuration from the package.json file, a la:
const {componentPath, componentDirectories, buildDestionation} = require('@visual-framework/vf-config');

// Tasks to build/run vf-core component system
require('./node_modules/\@visual-framework/vf-core/tools/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
require('./node_modules/\@visual-framework/vf-extensions/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
require('./node_modules/\@visual-framework/vf-extensions/gulp-tasks/gulp-build-search-index.js')(gulp, path, buildDestionation);

// Watch folders for changess
gulp.task('watch', function() {
  // build search index after search page is compiled
  gulp.watch(['./build/search/index.html'], gulp.parallel('vf-build-search-index'));
  // gulp.watch(['./src/**/*.{njk,html,md}'], gulp.series('eleventy:reload'));
});

gulp.task('copy-design-tokens', function () {
  return gulp.src('./node_modules/@visual-framework/vf-design-tokens/dist/json/*.json')
  .pipe(gulp.dest('./src/site/_data/styles/'))
  .pipe(ext_replace('.ios.json', '.json'))
});

// More thoroghouh than the other `vf-component-assets`,
// this copies all assets. Good for design system docs
gulp.task('vf-component-assets:all', function() {
  return gulp
    .src([componentPath + '/vf-core-components/**/*', componentPath + '/**/*'])
    .pipe(gulp.dest(buildDestionation + '/assets'));
});

// Let's build this sucker.
gulp.task('build', gulp.series(
  'vf-clean',
  'copy-design-tokens',
  'vf-build-search-index',
  gulp.parallel('vf-css','vf-css:generate-component-css','vf-scripts'),
  'vf-component-assets:all',
  'fractal:build',
  'fractal',
  'eleventy:init',
  'eleventy:build',
  'manual-exit'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  'copy-design-tokens',
  gulp.parallel('vf-css','vf-css:generate-component-css','vf-scripts'),
  'vf-component-assets:all',
  'fractal:development',
  'fractal',
  'eleventy:init',
  'eleventy:develop',
  gulp.parallel('watch','vf-watch','vf-build-search-index')
));
