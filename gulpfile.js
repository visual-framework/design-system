const gulp  = require('gulp');
const ext_replace = require('gulp-ext-replace');
var   fractalBuildMode;

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
require('./node_modules/\@visual-framework/vf-eleventy--extensions/utils/vf-build-search-index.gulpfile.js')(gulp, path, buildDestionation);

// Watch folders for changess
gulp.task('watch', function() {
  gulp.watch(['./src/components/**/*.scss', '!./src/components/**/package.variables.scss'], gulp.parallel('vf-css','vf-css:generate-component-css'));
  gulp.watch(['./src/components/**/*.js'], gulp.parallel('vf-scripts'));
  // build search index after search page is compiled
  gulp.watch(['./build/search/index.html'], gulp.parallel('vf-build-search-index'));
});

gulp.task('set-to-development', function(done) {
  process.argv.push('--serve');
  process.env.ELEVENTY_ENV = 'development';
  fractalBuildMode = 'server';
  done();
});

gulp.task('set-to-static-build', function(done) {
  process.argv.push('--quiet');
  process.env.ELEVENTY_ENV = 'production';
  fractalBuildMode = 'dataobject'; // run fractal in server mode as there's no need for static html assets
  done();
});

// Run eleventy, but only after we wait for fractal to bootstrap
// @todo: consider if this could/should be two parallel gulp tasks
gulp.task('eleventy', function(done) {
  let elev;
  process.argv.push('--config=eleventy.js'); // Eleventy config
  global.vfBuilderPath   = __dirname + '/build/vf-core-components';
  global.vfDocsPath      = __dirname + '/node_modules/\@visual-framework/vf-eleventy--extensions/fractal/docs';
  global.vfOpenBrowser   = false; // if you want to open a browser tab for the component library
  global.fractal         = require('@visual-framework/vf-core/fractal.js').initialize(fractalBuildMode,fractalReadyCallback); // make fractal components are available gloablly

  function fractalReadyCallback(fractal) {
    global.fractal = fractal; // save fractal globally
    elev = require('./node_modules/\@visual-framework/vf-eleventy--extensions/11ty/cmd.js');
    console.log('Done building Fractal');
    buildEleventy();
  }

  function buildEleventy() {
    if (process.env.ELEVENTY_ENV == 'production') {
      elev.write().then(function() {
        console.log('Done building 11ty');
        done();
      });
    }
    if (process.env.ELEVENTY_ENV == 'development') {
      elev.watch().then(function() {
        elev.serve('3000');
        // console.log('Done building 11ty');
        done();
      });
    }
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

// Eleventy doesn't always finish promptly, this ensures we exit gulp "cleanly"
gulp.task('manual-exit', function(done) {
  done()(process.exit());
});

// Let's build this sucker.
gulp.task('build', gulp.series(
  'vf-clean',
  'copy-design-tokens',
  gulp.parallel('vf-css','vf-css:generate-component-css','vf-scripts','vf-component-assets'),
  'component-compiled-css',
  'set-to-static-build',
  'eleventy',
  'vf-build-search-index',
  'manual-exit'
));

// Build and watch things during dev
gulp.task('dev', gulp.series(
  'vf-clean',
  'copy-design-tokens',
  gulp.parallel('vf-css','vf-css:generate-component-css','vf-scripts','vf-component-assets'),
  'set-to-development',
  'eleventy',
  gulp.parallel('watch','vf-watch','vf-build-search-index')
));
