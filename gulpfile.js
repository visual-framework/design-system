const path = require('path');
const ext_replace = require('gulp-ext-replace');
const gulp = require('gulp');

// Pull in optional configuration from the package.json file, a la:
const {componentPath, componentDirectories, buildDestionation} = require('@visual-framework/vf-config');

// Tasks to build/run vf-core component system
require('./node_modules/\@visual-framework/vf-core/tools/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
require('./node_modules/\@visual-framework/vf-extensions/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);
require('./node_modules/\@visual-framework/vf-extensions/gulp-tasks/gulp-build-search-index.js')(gulp, path, buildDestionation);

// Watch folders for changes
gulp.task('watch', function() {
  // left for convenience for local watch additions
  gulp.watch(['./build/css/styles.css'], gulp.series('eleventy:reload'));
  gulp.watch(['./build/search/index.html'], gulp.parallel('vf-build-search-index'));
});

gulp.task('copy-design-tokens', function () {
  return gulp.src('./node_modules/@visual-framework/vf-design-tokens/dist/json/*.json')
  .pipe(gulp.dest('./src/site/_data/styles/'))
  .pipe(ext_replace('.ios.json', '.json'))
});

-// More thoroghouh than the other `vf-component-assets`,
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
  gulp.parallel('vf-css','vf-css:generate-component-css','vf-scripts'),
  'vf-css:production', //optimise, prefix css
  'fractal:build',
  'fractal',
  'eleventy:init',
  'eleventy:build',
  'vf-build-search-index'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  'copy-design-tokens',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets'),
  'fractal:development',
  'fractal',
  'eleventy:init',
  'eleventy:develop',
  gulp.parallel('watch','vf-watch','vf-build-search-index')
));
