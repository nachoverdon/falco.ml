var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


var files = ['*.js', 'assets/js/*.js', 'assets/less/*.less', 'views/*.html'];

// gulp.task('compileSCSS', function() {
//   var sass = require('gulp-sass');

//   var paths = [];

//   return gulp.src('./dist/lib/datatables-responsive/css/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest('./dist/css/compiled'));
// });
gulp.task('compileLESS', function() {
  var less = require('gulp-less');
  var path = require('path');

  return gulp.src('./assets/less/styles.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watchLESS', function() {
  gulp.watch('./assets/less/*.less', ['compileLESS']);
});

// gulp.task('inject', function() {
//   var wiredep = require('wiredep').stream;
//   var inject = require('gulp-inject');

//   var injectSrc = gulp.src(['./dist/css/*.css', './dist/custom/js/*.js',
//   './dist/custom/css/*.css'], {read: false});

//   var options = {
//     bowerJson: require('./bower.json'),
//     directory: './dist/lib',
//     ignorePath: '/../../dist',
//     exclude: [
//     'datatables', 'datatables-plugins', 'holderjs', 'eve', 'mocha',
//     'datatables-responsive', 'bootstrap-social', 'flot.tooltip'
//     ],
//     src: './pages/pug/parts/',
//     onError: function(err) {
//       console.log(err);
//     }
//   };

//   var injectOptions = {
//     ignorePath: ['dist/', 'dist/custom/', 'dist/css/compiled'],
//     addPrefix: '..',
//     addRootSlash: false
//   };

//   return gulp.src('./pages/pug/parts/*.pug')
//     .pipe(wiredep(options))
//     .pipe(inject(injectSrc, injectOptions))
//     .pipe(gulp.dest('./pages/pug/parts'));
// });

// gulp.task('serve', ['inject'], function() {
gulp.task('serve', ['watchLESS', 'compileLESS'], function() {
  var options = {
    script: 'app.js',
    delayTime: 1,
    // tasks: ['inject'],
    env: {
      'PORT': 5000
    },
    watch: files
  };

  return nodemon(options)
    .on('restart', function(ev) {
      console.log('restarting...');
    });
});