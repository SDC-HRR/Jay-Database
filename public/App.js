
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/App.jsx":
/*!************************!*\
  !*** ./client/App.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/haidersyed/github/hrr45-fec/sidebar-body-related/client/App.jsx: Expected corresponding JSX closing tag for <br> (38:8)\\n\\n\\u001b[0m \\u001b[90m 36 | \\u001b[39m              \\u001b[33mVR\\u001b[39m \\u001b[33mSupport\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 37 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mbr\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 38 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m        \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 39 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m \\u001b[36mclass\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[32m\\\"details_block vrsupport\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mHeadsets\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 41 | \\u001b[39m          \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:742:17)\\n    at Object.raiseWithData (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:735:17)\\n    at Object.raise (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:729:17)\\n    at Object.jsxParseElementAt (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:4588:16)\\n    at Object.jsxParseElementAt (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:4556:32)\\n    at Object.jsxParseElementAt (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:4556:32)\\n    at Object.jsxParseElement (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:4614:17)\\n    at Object.parseExprAtom (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:4621:19)\\n    at Object.parseExprSubscripts (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9624:23)\\n    at Object.parseMaybeUnary (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9604:21)\\n    at Object.parseExprOps (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9474:23)\\n    at Object.parseMaybeConditional (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9447:23)\\n    at Object.parseMaybeAssign (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9402:21)\\n    at Object.parseParenAndDistinguishExpression (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:10215:28)\\n    at Object.parseExprAtom (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9969:21)\\n    at Object.parseExprAtom (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:4626:20)\\n    at Object.parseExprSubscripts (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9624:23)\\n    at Object.parseMaybeUnary (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9604:21)\\n    at Object.parseExprOps (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9474:23)\\n    at Object.parseMaybeConditional (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9447:23)\\n    at Object.parseMaybeAssign (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9402:21)\\n    at Object.parseExpression (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:9354:23)\\n    at Object.parseReturnStatement (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:11471:28)\\n    at Object.parseStatementContent (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:11152:21)\\n    at Object.parseStatement (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:11104:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:11679:25)\\n    at Object.parseBlockBody (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:11665:10)\\n    at Object.parseBlock (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:11649:10)\\n    at Object.parseFunctionBody (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:10656:24)\\n    at Object.parseFunctionBodyAndFinish (/Users/haidersyed/github/hrr45-fec/sidebar-body-related/node_modules/@babel/parser/lib/index.js:10639:10)\");\n\n//# sourceURL=webpack:///./client/App.jsx?");

/***/ })

/******/ });
