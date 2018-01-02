(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else if(typeof exports === 'object')
		exports["jasmine-jquery-matchers"] = factory(require("jquery"));
	else
		root["jasmine-jquery-matchers"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _customJqueryMatchers = __webpack_require__(1);

	Object.keys(_customJqueryMatchers).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _customJqueryMatchers[key];
	    }
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _matchers = __webpack_require__(2);

	Object.keys(_matchers).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _matchers[key];
	    }
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toHaveDescendantWithText = exports.toHaveDescendant = exports.toBeMatchedBy = exports.toBeInDom = exports.toBeFocused = exports.toBeVisible = exports.toBeSelected = exports.toBeHidden = exports.toBeEmpty = exports.toBeDisabled = exports.toBeChecked = exports.toHaveCss = exports.toHaveValue = exports.toHaveData = exports.toHaveText = exports.toHaveProp = exports.toHaveAttr = exports.toHaveTag = exports.toHaveClass = exports.toHaveId = exports.toHaveLength = exports.toExist = undefined;

	var _jquery = __webpack_require__(3);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasProperty = function hasProperty(actual, expected) {
	  return expected === undefined ? actual !== undefined : actual === expected;
	};

	var hasCss = function hasCss(el, css) {
	  var prop = void 0;
	  var value = void 0;
	  var $el = (0, _jquery2.default)(el);

	  for (prop in css) {
	    if (css.hasOwnProperty(prop)) {
	      value = css[prop];
	      if (value === 'auto' && $el.get(0).style[prop] === 'auto') {
	        continue;
	      }
	      if ($el.css(prop) !== value) {
	        return false;
	      }
	    }
	  }
	  return true;
	};

	var comparator = function comparator(func) {
	  return function () {
	    return {
	      compare: func
	    };
	  };
	};

	var toExist = exports.toExist = comparator(function (el) {
	  var actual = (0, _jquery2.default)(el).length;
	  var pass = actual > 0;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to exist';
	  return { pass: pass, message: message };
	});

	var toHaveLength = exports.toHaveLength = comparator(function (el, expected) {
	  var actual = (0, _jquery2.default)(el).length;
	  var pass = actual === expected;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have length ' + expected + ', but had ' + actual;
	  return { pass: pass, message: message };
	});

	var toHaveId = exports.toHaveId = comparator(function (el, expected) {
	  var actual = (0, _jquery2.default)(el).attr('id');
	  var pass = actual === expected;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have ID \'' + expected + '\', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveClass = exports.toHaveClass = comparator(function (el, expected) {
	  var actual = (0, _jquery2.default)(el).attr('class');
	  var pass = (0, _jquery2.default)(el).hasClass(expected);
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have class \'' + expected + '\', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveTag = exports.toHaveTag = comparator(function (el, expected) {
	  expected = expected.toLowerCase();
	  var actual = (0, _jquery2.default)(el).prop('tagName').toLowerCase();
	  var pass = actual === expected;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have tag \'' + expected + '\', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveAttr = exports.toHaveAttr = comparator(function (el, attr, expected) {
	  var actual = (0, _jquery2.default)(el).attr(attr);
	  var addendum = expected !== undefined ? ' with value \'' + expected + '\'' : '';
	  var pass = hasProperty(actual, expected);
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have attribute \'' + attr + '\'' + addendum + ', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveProp = exports.toHaveProp = comparator(function (el, prop, expected) {
	  var actual = (0, _jquery2.default)(el).prop(prop);
	  var addendum = expected !== undefined ? ' with value \'' + expected + '\'' : '';
	  var pass = hasProperty(actual, expected);
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have property \'' + prop + '\'' + addendum + ', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveText = exports.toHaveText = comparator(function (el, expected) {
	  var actual = _jquery2.default.trim((0, _jquery2.default)(el).text());
	  if (expected && _jquery2.default.isFunction(expected.test)) {
	    var _pass = expected.test(actual);
	    var _message = 'Expected element' + (_pass ? ' not' : '') + ' to have text matching \'' + expected + '\', but had \'' + actual + '\'';
	    return { pass: _pass, message: _message };
	  }
	  var pass = actual.indexOf(expected) !== -1;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have text \'' + expected + '\', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveData = exports.toHaveData = comparator(function (el, data, expected) {
	  var actual = (0, _jquery2.default)(el).data(data);
	  var addendum = expected !== undefined ? ' with value \'' + expected + '\'' : '';
	  var pass = hasProperty(actual, expected);
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have data \'' + data + '\'' + addendum + ', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveValue = exports.toHaveValue = comparator(function (el, expected) {
	  var actual = (0, _jquery2.default)(el).val();
	  var pass = actual === expected;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have value \'' + expected + '\', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveCss = exports.toHaveCss = comparator(function (el, expected) {
	  var pass = hasCss(el, expected);
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have CSS ' + jasmine.pp(expected);
	  return { pass: pass, message: message };
	});

	var toBeChecked = exports.toBeChecked = comparator(function (el) {
	  var pass = (0, _jquery2.default)(el).is(':checked');
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be checked';
	  return { pass: pass, message: message };
	});

	var toBeDisabled = exports.toBeDisabled = comparator(function (el) {
	  var pass = (0, _jquery2.default)(el).is(':disabled');
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be disabled';
	  return { pass: pass, message: message };
	});

	var toBeEmpty = exports.toBeEmpty = comparator(function (el) {
	  var pass = (0, _jquery2.default)(el).is(':empty');
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be empty';
	  return { pass: pass, message: message };
	});

	var toBeHidden = exports.toBeHidden = comparator(function (el) {
	  var pass = (0, _jquery2.default)(el).is(':hidden');
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be hidden';
	  return { pass: pass, message: message };
	});

	var toBeSelected = exports.toBeSelected = comparator(function (el) {
	  var pass = (0, _jquery2.default)(el).is(':selected');
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be selected';
	  return { pass: pass, message: message };
	});

	var toBeVisible = exports.toBeVisible = comparator(function (el) {
	  var pass = (0, _jquery2.default)(el).is(':visible');
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be visible';
	  return { pass: pass, message: message };
	});

	var toBeFocused = exports.toBeFocused = comparator(function (el) {
	  el = (0, _jquery2.default)(el).get(0);
	  var pass = el === el.ownerDocument.activeElement;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be focused';
	  return { pass: pass, message: message };
	});

	var toBeInDom = exports.toBeInDom = comparator(function (el) {
	  el = (0, _jquery2.default)(el).get(0);
	  var pass = _jquery2.default.contains(document.documentElement, el);
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be attached to the DOM';
	  return { pass: pass, message: message };
	});

	var toBeMatchedBy = exports.toBeMatchedBy = comparator(function (el, expected) {
	  var actual = (0, _jquery2.default)(el).filter(expected).length;
	  var pass = actual > 0;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to be matched by \'' + expected + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveDescendant = exports.toHaveDescendant = comparator(function (el, selector) {
	  var actual = (0, _jquery2.default)(el).find(selector).length;
	  var pass = actual > 0;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to contain child \'' + selector + '\'';
	  return { pass: pass, message: message };
	});

	var toHaveDescendantWithText = exports.toHaveDescendantWithText = comparator(function (el, selector, expected) {
	  var actual = _jquery2.default.trim((0, _jquery2.default)(el).find(selector).text());
	  if (expected && _jquery2.default.isFunction(expected.test)) {
	    var _pass2 = expected.test(actual);
	    var _message2 = 'Expected element' + (_pass2 ? ' not' : '') + ' to have descendant \'' + selector + '\' with text matching \'' + expected + '\', but had \'' + actual + '\'';
	    return { pass: _pass2, message: _message2 };
	  }
	  var pass = actual.indexOf(expected) !== -1;
	  var message = 'Expected element' + (pass ? ' not' : '') + ' to have descendant \'' + selector + '\' with text \'' + expected + '\', but had \'' + actual + '\'';
	  return { pass: pass, message: message };
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }
/******/ ])
});
;