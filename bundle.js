webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// user require with a reference to bundle the file and use it in this file
	// var example = require('./example');

	// load manifests
	// scripts

	__webpack_require__(1);
	__webpack_require__(2);

	// styles
	__webpack_require__(4);

	// attach jQuery globally
	__webpack_require__(8);
	__webpack_require__(9);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// user require with a reference to bundle the file and use it in this file
	// var example = require('./example');

	// use require without a reference to ensure a file is bundled

	__webpack_require__(2);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(jQuery) {'use strict';

	(function ($) {
	    "use strict";

	    $('body').scrollspy({
	        target: '.navbar-fixed-top',
	        offset: 60
	    });

	    $('#topNav').affix({
	        offset: {
	            top: 200
	        }
	    });

	    new WOW().init();

	    $('a.page-scroll').bind('click', function (event) {
	        var $ele = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($ele.attr('href')).offset().top - 60
	        }, 1450, 'easeInOutExpo');
	        event.preventDefault();
	    });

	    $('.navbar-collapse ul li a').click(function () {
	        /* always close responsive nav after click */
	        $('.navbar-toggle:visible').click();
	    });

	    $('#galleryModal').on('show.bs.modal', function (e) {
	        $('#galleryImage').attr("src", $(e.relatedTarget).data("src"));
	    });
	})(jQuery);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Questrial);", ""]);
	exports.push([module.id, "@import url(http://fonts.googleapis.com/css?family=Dancing+Script:700);", ""]);

	// module
	exports.push([module.id, "html,\nbody {\n  width: 100%;\n  height: 100%; }\n\ni {\n  padding: .5em;\n  box-sizing: content-box; }\n\n.address {\n  text-align: center; }\n\nbody {\n  font-family: 'Questrial','Helvetica Neue',Arial,sans-serif;\n  background-color: #282828;\n  color: #d3d3d3;\n  webkit-tap-highlight-color: #222; }\n\nhr {\n  max-width: 80px;\n  border-width: 3px;\n  opacity: 0.09;\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\nhr.light {\n  border-color: #fff; }\n\na {\n  color: #EF881E;\n  -webkit-transition: all .35s;\n  -moz-transition: all .35s;\n  transition: all .35s; }\n\na:hover,\na:focus {\n  color: #EF881E;\n  outline: 0; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Questrial','Helvetica Neue',Arial,sans-serif; }\n\np {\n  font-size: 17px;\n  line-height: 1.7;\n  margin-bottom: 20px; }\n\n.wide-space {\n  letter-spacing: 1.6px; }\n\n.icon-lg {\n  font-size: 50px; }\n\n.bg-primary {\n  background-color: #333; }\n\n.bg-dark {\n  color: #eee;\n  background-color: #222; }\n\n.cursive {\n  font-family: 'Dancing Script', cursive;\n  text-transform: none; }\n\n.text-faded {\n  color: rgba(245, 245, 245, 0.7); }\n\n.text-dark {\n  color: #111; }\n\n.text-primary {\n  color: #EF881E; }\n\n.modal-content {\n  background-color: #1d1d1d; }\n\nsection {\n  padding: 70px 0; }\n\naside {\n  padding: 50px 0; }\n\nfooter {\n  padding: 15px; }\n\n.no-padding {\n  padding: 0; }\n\n.navbar-default {\n  border-color: rgba(35, 35, 35, 0.05);\n  font-family: 'Questrial','Helvetica Neue',Arial,sans-serif;\n  background-color: #222;\n  -webkit-transition: all .4s;\n  -moz-transition: all .4s;\n  transition: all .4s; }\n\n.navbar-header > .navbar-brand {\n  font-family: 'Questrial','Helvetica Neue',Arial,sans-serif;\n  color: #EF881E;\n  padding: 15px;\n  -webkit-transition: padding .2s ease-in;\n  -moz-transition: padding .2s ease-in;\n  transition: padding .2s ease-in; }\n\n.navbar-header > .navbar-brand:hover,\n.navbar-header > .navbar-brand:focus {\n  color: #8b27b0; }\n\n.navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {\n  background-color: #181818; }\n\n.navbar-default .navbar-toggle, .navbar-default .navbar-collapse {\n  border-color: transparent; }\n\n.navbar-default .nav > li > a,\n.navbar-default .nav > li > a:focus {\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 700;\n  color: #eee; }\n\n.navbar-default .nav > li > a:hover,\n.navbar-default .nav > li > a:focus:hover {\n  color: #EF881E; }\n\n.navbar-default .nav > li.active > a,\n.navbar-default .nav > li.active > a:focus {\n  color: #EF881E !important;\n  background-color: transparent; }\n\n.navbar-default .nav > li.active > a:hover,\n.navbar-default .nav > li.active > a:focus:hover {\n  background-color: transparent; }\n\n@media (min-width: 768px) {\n  .navbar-default {\n    border-color: transparent;\n    background-color: transparent;\n    min-height: 60px; }\n  .navbar-header > .navbar-brand {\n    color: rgba(255, 255, 255, 0.7);\n    padding: 19px; }\n  .navbar-default .navbar-header .navbar-brand:hover,\n  .navbar-default .navbar-header .navbar-brand:focus {\n    color: #f4f4f4; }\n  .navbar-default .nav > li > a,\n  .navbar-default .nav > li > a:focus {\n    color: rgba(255, 255, 255, 0.8);\n    padding: 20px;\n    letter-spacing: 1.1px;\n    text-shadow: 1px 1px 1px rgba(60, 60, 60, 0.7); }\n  .navbar-default .nav > li > a:hover,\n  .navbar-default .nav > li > a:focus:hover {\n    color: #fefefe; }\n  .navbar-default.affix {\n    border-color: rgba(34, 34, 34, 0.05);\n    background-color: #222; }\n  .navbar-default.affix .navbar-header .navbar-brand {\n    font-size: 15px;\n    color: #EF881E;\n    padding: 20px;\n    letter-spacing: 1px; }\n  .navbar-default.affix .navbar-header .navbar-brand:hover,\n  .navbar-default.affix .navbar-header .navbar-brand:focus {\n    color: #8b27b0; }\n  .navbar-default.affix .nav > li > a,\n  .navbar-default.affix .nav > li > a:focus {\n    color: #ddd;\n    text-shadow: 1px 1px 1px rgba(30, 30, 30, 0.7); }\n  .navbar-default.affix .nav > li > a:hover,\n  .navbar-default.affix .nav > li > a:focus:hover {\n    color: #EF881E; } }\n\nheader {\n  position: relative;\n  min-height: auto;\n  text-align: center;\n  color: #fff;\n  width: 100%;\n  background-color: #c9c9c9;\n  background-image: url(\"https://splashbase.s3.amazonaws.com/lifeofpix/regular/Life-of-Pix-free-stock-photos-Slate-Stone-Xeromatic-1440x953.jpg\");\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  background-size: cover;\n  -o-background-size: cover; }\n\nheader .header-content {\n  position: relative;\n  width: 100%;\n  padding: 100px 15px;\n  text-align: center;\n  z-index: 2; }\n\nheader .header-content .inner h1 {\n  margin-top: 0;\n  margin-bottom: 0; }\n\nheader .header-content .inner p {\n  margin-bottom: 50px;\n  font-size: 16px;\n  font-weight: 300;\n  color: rgba(255, 255, 255, 0.7); }\n\n#video-background {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: 1; }\n\n#video-background.collapsing {\n  display: none; }\n\nfooter {\n  background-color: #2d2d2d; }\n\n@media (min-width: 768px) {\n  .icon-lg {\n    font-size: 80px; }\n  header {\n    min-height: 100%; }\n  header .header-content {\n    position: absolute;\n    top: 50%;\n    padding: 0 50px;\n    -webkit-transform: translateY(-50%);\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%); }\n  header .header-content .inner {\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 1000px; }\n  header .header-content .inner h1 {\n    font-size: 53px; }\n  header .header-content .inner p {\n    margin-right: auto;\n    margin-left: auto;\n    max-width: 80%;\n    font-size: 18px; }\n  section {\n    min-height: 450px;\n    padding: 75px 0; } }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 35px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #eee;\n  background-color: #36333d;\n  background-image: none;\n  border: 1px solid #36333d;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }\n\n.form-control:focus {\n  color: #222;\n  background-color: #ccc;\n  box-shadow: none; }\n\ntextarea {\n  resize: none; }\n\n.margin-top-0 {\n  margin-top: 0; }\n\n.feature {\n  margin: 50px auto 0;\n  max-width: 400px; }\n\n@media (min-width: 992px) {\n  .feature {\n    margin: 20px auto 0; } }\n\n.feature p {\n  margin-bottom: 0; }\n\n.call-to-action h2 {\n  margin: 0 auto 20px; }\n\n.gallery-box {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  max-width: 650px;\n  overflow: hidden; }\n\n.gallery-box .gallery-box-caption {\n  display: block;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  color: #fff;\n  opacity: 0;\n  background: rgba(44, 44, 44, 0.8);\n  -webkit-transition: all .35s;\n  -moz-transition: all .35s;\n  transition: all .35s; }\n\n.gallery-box .gallery-box-caption .gallery-box-content {\n  position: absolute;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  transform: translateY(-50%); }\n\n.gallery-box:hover .gallery-box-caption {\n  opacity: 1; }\n\n.gallery-box:hover img {\n  -webkit-transform: scale(1.1);\n  -ms-transform: scale(1.1);\n  transform: scale(1.1); }\n\n.gallery-box img {\n  -webkit-transition: all 300ms ease-in-out;\n  transition: all 300ms ease-in-out; }\n\n.no-gutter > [class*=col-] {\n  padding-right: 0;\n  padding-left: 0; }\n\n.btn-default {\n  border-color: #fff;\n  color: #222;\n  background-color: #fff;\n  -webkit-transition: all .35s;\n  -moz-transition: all .35s;\n  transition: all .35s; }\n\n.btn-default:hover,\n.btn-default:focus,\n.btn-default.focus,\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  border-color: #ededed;\n  color: #222;\n  background-color: #f2f2f2;\n  opacity: 0.7; }\n\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none; }\n\n.btn-default.disabled,\n.btn-default[disabled],\nfieldset[disabled] .btn-default,\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus,\n.btn-default.disabled:active,\n.btn-default[disabled]:active,\nfieldset[disabled] .btn-default:active,\n.btn-default.disabled.active,\n.btn-default[disabled].active,\nfieldset[disabled] .btn-default.active {\n  border-color: #fff;\n  background-color: #fff;\n  opacity: 0.7; }\n\n.btn-default .badge {\n  color: #fff;\n  background-color: #222; }\n\n.btn.btn-primary {\n  background-color: transparent;\n  border: 1px solid #f0f0f0;\n  border-color: #f0f0f0;\n  -webkit-transition: all .35s;\n  -moz-transition: all .35s;\n  transition: all .35s; }\n\n.btn.btn-primary:hover {\n  opacity: 0.7; }\n\n.btn {\n  border: 0;\n  border-radius: 290px;\n  font-family: 'Helvetica Neue',Arial,sans-serif; }\n\n.btn-xl {\n  padding: 15px 30px;\n  font-size: 20px; }\n\n::-moz-selection {\n  text-shadow: none;\n  color: #fff;\n  background: #222; }\n\n::selection {\n  text-shadow: none;\n  color: #fff;\n  background: #222; }\n\nimg::selection {\n  color: #fff;\n  background: 0 0; }\n\nimg::-moz-selection {\n  color: #fff;\n  background: 0 0; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
]);