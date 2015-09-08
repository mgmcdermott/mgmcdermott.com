/**
 * @author Michael McDermott
 * Created 5/20/15
 */

'use strict';

var merge = require('lodash/object/merge');
var webpack = require('webpack');
var argv = require('minimist')(process.argv.slice(2));

var DEBUG = !argv.release;
var STYLE_LOADER = 'style-loader/useable';
var CSS_LOADER = DEBUG ? 'css-loader' : 'css-loader?minimize';
var GLOBALS = {
  'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
  '__DEV__': DEBUG
};

//
// Common configuration chunk to be used for both
// client-side (app.js) and server-side (server.js) bundles
// -----------------------------------------------------------------------------

var config = {
  output: {
    path: './build/',
    publicPath: './',
    sourcePrefix: '  '
  },

  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? 'source-map' : false,

  stats: {
    colors: true,
    reasons: DEBUG
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.PrefetchPlugin('react')
  ],

  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  externals: {},

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: [/node_modules/, /src\/libs/],
      loader: 'eslint-loader'
    }],

    loaders: [{
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }, {
      test: /\.css$/,
      loader: CSS_LOADER
    }, {
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      'file?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
    ]
  }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

if (!DEBUG) {
  config.externals = {
    'react': 'React',
    'jquery': 'jQuery'
  };
}

//
// Configuration for the client-side bundle (app.js)
// -----------------------------------------------------------------------------

var appConfig = merge({}, config, {
  entry: './src/client/scripts/client.js',
  output: {
    filename: 'app.js'
  },
  plugins: config.plugins.concat([
    new webpack.DefinePlugin(merge(GLOBALS, {
      '__SERVER__': false
    }))
  ].concat(DEBUG ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true,
      output: {
        comments: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]))
});

//
// Configuration for the server-side bundle (server.js)
// -----------------------------------------------------------------------------

var serverConfig = merge({}, config, {
  entry: './src/server/server.js',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: /^[a-z][a-z\.\-0-9]*$/,
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  plugins: config.plugins.concat(
    new webpack.DefinePlugin(merge(GLOBALS, {
      '__SERVER__': true
    }))
  )
});

module.exports = [appConfig, serverConfig];
