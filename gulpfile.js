const gulp  = require('gulp');
const rename = require('gulp-rename');
const ext_replace = require('gulp-ext-replace');

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

// Pull in some optional configuration from the package.json file, a la:
// "vfConfig": {
//   "vfName": "My Component Library",
//   "vfNameSpace": "myco-",
//   "vfComponentPath": "./src/components",
//   "vfComponentDirectories": [
//      "vf-core-components",
//      "../node_modules/your-optional-collection-of-dependencies"
//     NOTE: Don't forget to symlink: `cd components` `ln -s ../node_modules/your-optional-collection-of-dependencies`
//    ],
//   "vfBuildDestination": "./build",
//   "vfThemePath": "@frctl/mandelbrot"
// },
// all settings are optional
// todo: this could/should become a JS module
const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync('./package.json'));
const vfCoreConfig = JSON.parse(fs.readFileSync(require.resolve('@visual-framework/vf-core/package.json')));
config.vfConfig = config.vfConfig || [];
global.vfName = config.vfConfig.vfName || "Visual Framework 2.0";
global.vfNamespace = config.vfConfig.vfNamespace || "vf-";
global.vfComponentPath = config.vfConfig.vfComponentPath || path.resolve('.', __dirname + '/components');
global.vfBuildDestination = config.vfConfig.vfBuildDestination || __dirname + '/temp/build-files';
global.vfThemePath = config.vfConfig.vfThemePath || './tools/vf-frctl-theme';
global.vfVersion = vfCoreConfig.version || 'not-specified';
const componentPath = path.resolve('.', global.vfComponentPath).replace(/\\/g, '/');
const componentDirectories = config.vfConfig.vfComponentDirectories || ['vf-core-components'];
const buildDestionation = path.resolve('.', global.vfBuildDestination).replace(/\\/g, '/');

// Tasks to build/run vf-core component system
require('./node_modules/\@visual-framework/vf-core/tools/gulp-tasks/_gulp_rollup.js')(gulp, path, componentPath, componentDirectories, buildDestionation);

// Eleventy config
process.argv.push('--config=eleventy.js');

// Watch folders for changess
gulp.task('watch', function() {
  gulp.watch(['./src/components/**/*.scss', '!./src/components/**/package.variables.scss'], gulp.parallel('vf-css'));
  gulp.watch(['./src/components/**/*.js'], gulp.parallel('vf-scripts'));
});

gulp.task('elventy-set-to-serve', function(done) {
  // Since we're not using the 11ty command line directly, we need to set the
  // `--serve` param manually
  process.argv.push('--serve');
  process.env.ELEVENTY_ENV = 'development';
  fractalBuildMode = 'server';
  done();
});

gulp.task('elventy-set-to-build', function(done) {
  // Since we're not using the 11ty command line directly, we need to set the
  // `--serve` param manually
  process.argv.push('--quiet');
  process.env.ELEVENTY_ENV = 'production';
  done();
});

// Run eleventy, but only after we wait for fractal to bootstrap
// @todo: consider if this could/should be two parallel gulp tasks
gulp.task('eleventy', function(done) {
  global.vfBuilderPath   = __dirname + '/build/vf-core-components';
  global.vfDocsPath      = __dirname + '/node_modules/\@visual-framework/vf-eleventy--extensions/fractal/docs';
  global.vfOpenBrowser   = false; // if you want to open a browser tab for the component library
  global.fractal         = require('@visual-framework/vf-core/fractal.js').initialize(fractalBuildMode,fractalReadyCallback); // make fractal components are available gloablly

  function fractalReadyCallback(fractal) {
    global.fractal = fractal; // save fractal globally
    global.eleventy = require('@11ty/eleventy/cmd.js');
    done();
  }
});

gulp.task('copy-design-tokens', function () {
  return gulp.src('./node_modules/@visual-framework/vf-design-tokens/dist/json/*.json')
  .pipe(gulp.dest('./src/site/_data/styles/'))
  .pipe(ext_replace('.ios.json', '.json'))
});

// A placeholder until vf-core beta.4
gulp.task('component-compiled-css', function() {
  return gulp
    .src([componentPath + '/vf-core-components/**/*.css', componentPath + '/**/*.css'])
    .pipe(gulp.dest(buildDestionation + '/assets'));
});


// Let's build this sucker.
let fractalBuildMode = 'build';
gulp.task('build', gulp.series(
  'vf-clean',
  'copy-design-tokens',
  gulp.parallel('vf-css','vf-css:generate-component-css','vf-scripts','vf-component-assets'),
  'component-compiled-css',
  'elventy-set-to-build',
  'eleventy'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  'copy-design-tokens',
  gulp.parallel('vf-css','vf-scripts','vf-component-assets'),
  'elventy-set-to-serve',
  'eleventy',
  gulp.parallel('watch','vf-watch')
));
