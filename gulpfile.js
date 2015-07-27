/**
 * @author Michael McDermott
 * Created on 5/20/15
 */

// Include Gulp and other build automation tools and utilities
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var autoprefixer = require('autoprefixer-core');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));

var src = {};
var watch = false;
var browserSync;

// The default task
gulp.task('default', ['sync']);

// Clean output directory
gulp.task('clean', del.bind(
  null, ['.tmp', 'build/*', '!build/.git'], {dot: true}
));

gulp.task('vendor', function() {
  gulp.src('package.json')
    .pipe(gulp.dest('build'));
  return gulp.src('node_modules/bootstrap/dist/fonts/**')
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('favicons', function() {
  src.favicons = [
    'src/app/images/favicons/**'
  ];
  return gulp.src(src.favicons)
    .pipe($.changed('build'))
    .pipe(gulp.dest('build'))
    .pipe($.size({title: 'favicons'}));
});

gulp.task('images', function() {
  src.images = [
    'src/app/images/**',
    '!src/app/images/{favicons,favicons/**}'
  ];
  return gulp.src(src.images)
    .pipe($.changed('build/images'))
    .pipe(gulp.dest('build/images'))
    .pipe($.size({title: 'images'}));
});

gulp.task('sass', function() {
  src.styles = [
    'src/app/**/*.scss'
  ];
  var processors = [
    autoprefixer({browsers: ['last 2 versions']}),
    mqpacker,
    csswring
  ];
  return gulp.src(src.styles)
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss(processors))
    .pipe($.concat('main.css'))
    .pipe($.sourcemaps.write())
    .pipe($.size({title: 'sass'}))
    .pipe(gulp.dest('build'));
});

gulp.task('copy', function() {
  src.static = [
    'src/app/server/**',
    'src/client/index.html',
    'src/client/scripts/prettify.min.js',
    'src/client/prettify.min.css'
  ];
  return gulp.src(src.static)
    .pipe($.changed('build'))
    .pipe(gulp.dest('build'))
    .pipe($.size({title: 'static'}));
});

// Bundle
gulp.task('bundle', function(cb) {
  var started = false;
  var config = require('./webpack.config.js');
  var bundler = webpack(config);
  var verbose = !!argv.verbose;

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    console.log(stats.toString({
      colors: $.util.colors.supportsColor,
      hash: verbose,
      version: verbose,
      timings: verbose,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose
    }));

    if (!started) {
      started = true;
      return cb();
    }
  }

  if (watch) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});

// Build the app from source code
gulp.task('build', ['clean'], function(cb) {
  runSequence(['vendor', 'favicons', 'images', 'sass', 'copy', 'bundle'], cb);
});

// Build and start watching for modifications
gulp.task('build:watch', function(cb) {
  watch = true;
  runSequence('build', function() {
    gulp.watch(src.static, ['copy']);
    gulp.watch(src.favicons, ['favicons']);
    gulp.watch(src.images, ['images']);
    gulp.watch(src.styles, ['sass']);
    cb();
  });
});

// Launch a Node.js/Express server
gulp.task('serve', ['build:watch'], function(cb) {
  src.server = [
    'build/server.js'
  ];

  var started = false;
  var cp = require('child_process');
  var assign = require('react/lib/Object.assign');

  var server = (function startup() {
    var child = cp.fork('build/server.js', {
      env: assign({NODE_ENV: 'development'}, process.env)
    });
    child.once('message', function(message) {
      if (message.match(/^online$/)) {
        if (browserSync) {
          browserSync.reload();
        }
        if (!started) {
          started = true;
          gulp.watch(src.server, function() {
            $.util.log('Restarting development server.');
            server.kill('SIGTERM');
            server = startup();
          });
          cb();
        }
      }
    });
    return child;
  })();

  process.on('exit', function() {
    server.kill('SIGTERM');
  });
});

// Launch BrowserSync development server
gulp.task('sync', ['serve'], function(cb) {
  browserSync = require('browser-sync');

  browserSync({
    logPrefix: 'ME',
    notify: true,
    // Run as an https by setting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    https: false,
    // Informs browser-sync to proxy our Express app which would run
    // at the following location
    proxy: 'localhost:4224'
  }, cb);

  process.on('exit', function() {
    browserSync.exit();
  });

  gulp.watch(['build/**/*.*'].concat(
    src.server.map(function(file) {
      return '!' + file;
    })
  ), function(file) {
    browserSync.reload(path.relative(__dirname, file.path));
  });
});

// Deploy via Git
gulp.task('deploy', function(cb) {
  var push = require('git-push');
  if (argv.production) {
    push('./build', 'ssh://mgm@copper/var/repo/kevinandkevin.git', cb);
  } else {
    push('.', 'https://github.com/mgmcdermott/mgmcdermott.com.git', cb);
  }
});

// Run PageSpeed Insights
gulp.task('pagespeed', function(cb) {
  var pagespeed = require('psi');
  // Update the below URL to the public URL of your site
  pagespeed.output('example.com', {
    strategy: 'mobile'
    // By default we use the PageSpeed Insights free (no API key) tier.
    // Use a Google Developer API key if you have one: http://goo.gl/RkN0vE
    // key: 'YOUR_API_KEY'
  }, cb);
});
