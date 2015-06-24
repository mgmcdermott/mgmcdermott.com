module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * @author Michael McDermott
   * Created on 6/19/15.
   */
  /**
   * @author Michael McDermott
   * Created on 5/20/15.
   */
  
  'use strict';
  
  var express = __webpack_require__(5);
  var mongoose = __webpack_require__(6);
  var cors = __webpack_require__(4);
  var morgan = __webpack_require__(7);
  //var path = require('path');
  var bodyParser = __webpack_require__(1);
  var timeout = __webpack_require__(3);
  var compress = __webpack_require__(2);
  
  var app = express();
  var port = process.env.PORT || 4224;
  app.set('port', port);
  
  //var config = require('./config/base');
  //mongoose.connect(config.db);
  
  mongoose.set('debug', true);
  
  app.use(cors());
  app.use(timeout('20s'));
  app.use(morgan('dev')); // log every request to the console
  app.use(bodyParser.json()); // get information from html forms
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(compress());
  
  var publicDir = __dirname;
  console.log('Serving static files from ' + publicDir);
  app.use('/', express['static'](publicDir));
  
  //require('./routes')(app);
  
  app.get('/', function (req, res) {
    res.sendFile(publicDir + '/index.html');
  });
  
  app.use(haltOnTimeout);
  function haltOnTimeout(req, res, next) {
    if (!req.timeout) {
      next();
    }
  }
  
  app.listen(app.get('port'), function () {
    if (process.send) {
      process.send('online');
    } else {
      console.log('The server is running at http://localhost:' + app.get('port'));
    }
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("compression");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("connect-timeout");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("cors");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("mongoose");

/***/ },
/* 7 */
/***/ function(module, exports) {

  module.exports = require("morgan");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map