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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Router.js":
/*!***********************!*\
  !*** ./src/Router.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _home = __webpack_require__(/*! ./container/home */ \"./src/container/home/index.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _login = __webpack_require__(/*! ./container/login */ \"./src/container/login/index.js\");\n\nvar _login2 = _interopRequireDefault(_login);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _react2.default.createElement(\n\t'div',\n\tnull,\n\t_react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _home2.default }),\n\t_react2.default.createElement(_reactRouterDom.Route, { path: '/login', component: _login2.default })\n);\n\n//# sourceURL=webpack:///./src/Router.js?");

/***/ }),

/***/ "./src/container/home/index.js":
/*!*************************************!*\
  !*** ./src/container/home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t'ssr\\u6E32\\u67D3\\u70B9\\u51FB\\u4E8B\\u4EF6'\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'button',\n\t\t\t{ onClick: function onClick() {\n\t\t\t\t\treturn alert('点击开始了');\n\t\t\t\t} },\n\t\t\t'\\u70B9\\u51FB'\n\t\t)\n\t);\n};\n\n// node下暴露不可以export default Home;\n\n// module.export = {\n// \tdefault: Home,\n// };\n// const React = require('react');\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/container/home/index.js?");

/***/ }),

/***/ "./src/container/login/index.js":
/*!**************************************!*\
  !*** ./src/container/login/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Login = function Login() {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t'\\u7528\\u6237\\u540D\\uFF1A ',\n\t\t_react2.default.createElement('input', { type: 'text' }),\n\t\t_react2.default.createElement(\n\t\t\t'button',\n\t\t\t{ onClick: function onClick() {\n\t\t\t\t\treturn alert('点击开始了');\n\t\t\t\t} },\n\t\t\t'\\u767B\\u5F55'\n\t\t)\n\t);\n};\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/container/login/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server.js */ \"react-dom/server.js\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Router = __webpack_require__(/*! ../Router */ \"./src/Router.js\");\n\nvar _Router2 = _interopRequireDefault(_Router);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)(); // var express = require('express');\n\napp.use(_express2.default.static('public')); //让浏览器识别静态文件\n\n// const content = renderToString(<Home />);\n\napp.get('/', function (req, res) {\n\t/**\n  * StaticRouter 并不智能  要求浏览器端发送请求地址location  根据地址判断请求的网页是那个组件 然后再去渲染相对应得组件\n  */\n\tvar content = (0, _server.renderToString)(_react2.default.createElement(\n\t\t_reactRouterDom.StaticRouter,\n\t\t{ location: req.path, context: {} },\n\t\t_Router2.default\n\t));\n\tres.send('<!DOCTYPE html>\\n\\t<html lang=\"en\">\\n\\t<head>\\n\\t\\t<meta charset=\"UTF-8\">\\n\\t\\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\\n\\t\\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\\n\\t\\t<title>Document</title>\\n\\t</head>\\n\\t<body>\\n\\t\\t <div id=\"root\">' + content + '</div>\\n\\t\\t <script src=\"/index.js\"></script>\\n\\t</body>\\n\\t</html>');\n});\n\nvar server = app.listen(3000);\nconsole.log('服务器3000开启了');\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server.js":
/*!**************************************!*\
  !*** external "react-dom/server.js" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server.js\");\n\n//# sourceURL=webpack:///external_%22react-dom/server.js%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });