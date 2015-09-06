/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	/* 内容区模块代码 */
	var ContentMode = React.createClass({displayName: "ContentMode",
	        render: function(){
	            return (
	                React.createElement("div", {className: "ContentMode"}, 
						React.createElement("div", {class: "contents"}, this.props.contents), 
	                    this.props.children
	                )
	            )
	        }
	});
	/* 页面div封装 上面三个模块 */
	var Page = React.createClass({displayName: "Page",
	    render: function(){
	        return (
	            React.createElement("div", {className: "homepage"}, 
	                React.createElement(ContentMode, {contents: "longen"}, "this is one comment"), 
	                React.createElement(ContentMode, {contents: "longen2"}, "this is two comment")
	            )
	            )
	        }
	});
	/* 初始化到content容器内 */
	React.render(
	    React.createElement(Page,null),document.getElementById("content")
	);

/***/ }
/******/ ]);