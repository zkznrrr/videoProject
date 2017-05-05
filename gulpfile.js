var elixir = require('laravel-elixir');
require('laravel-elixir-remove');

elixir.config.production = true;
elixir.config.sourcemaps = false;

var gulp   = require('gulp');
var shell  = require('gulp-shell');
var minifycss = require('gulp-minify-css');
var jsuglify = require('gulp-uglify');

var Task = elixir.Task;

elixir.extend('minifycss', function() {
  new Task('minifycss', function () {
    return gulp.src('public/css/*.css')
      .pipe(minifycss())
      .pipe(gulp.dest('public/css/'));
  });
});

elixir.extend('jsminify', function() {
  new Task('jsminify', function () {
    return gulp.src('public/js/*.js')
      .pipe(jsuglify())
      .pipe(gulp.dest('public/js/'));
  });
});

var node_path = 'node_modules';

var paths = {
  'backbone'        : node_path + '/backbone',
  'underscore'      : node_path + '/underscore',
  'moment'          : node_path + '/moment',
  'jquery'          : node_path + '/jquery',
  'jquery_sortable' : node_path + '/jquery-sortable',
  'bootstrap_sass'  : node_path + '/bootstrap-sass',
  'font_awesome'    : node_path + '/font-awesome',
  'ionicons'        : node_path + '/ionicons',
  'html5shiv'       : node_path + '/html5shiv',
  'respond'         : node_path + '/respond',
  'cropper'         : node_path + '/cropper',
  'toastr'          : node_path + '/toastr'
};

elixir(function(mix) {
  mix
    // .sass(['admin/jedate.scss'], 'public/css/jedate.css', 'resources/assets/sass')
    .styles([
      paths.font_awesome + '/css/font-awesome.css',
      paths.ionicons    + '/css/ionicons.css',
      paths.toastr      + '/build/toastr.css',
      paths.cropper     + '/dist/cropper.css'
    ], 'public/css/vendor.css', './')
    .minifycss()
    .scripts([
      paths.html5shiv + '/dist/html5shiv.js',
      paths.respond   + '/main.js'
    ], 'public/js/ie.js', node_path)
    .scripts([
      paths.jquery          + '/dist/jquery.js',
      paths.moment          + '/moment.js',
      paths.bootstrap_sass  + '/assets/javascripts/bootstrap.js',
      paths.backbone        + '/backbone.js',
      paths.toastr          + '/toastr.js',
      paths.cropper         + '/dist/cropper.js'
    ], 'public/js/vendor.js', node_path)
    // .scripts([
    //   'admin/index.js'
    // ], 'public/js/adminIndex.js', 'resources/assets/js')
    .jsminify()
    .copy(paths.bootstrap_sass + '/assets/fonts/bootstrap/**', 'public/fonts')
    .copy(paths.font_awesome + '/fonts/**',           'public/fonts')
    .copy(paths.ionicons    + '/fonts/**',           'public/fonts')
    .version([
      'public/css/vendor.css',
      'public/js/ie.js',
      'public/js/vendor.js'
    ])
    .copy('public/fonts', 'public/build/fonts')
    .remove([
      'public/css',
      'public/js',
      'public/fonts'
    ]);
});