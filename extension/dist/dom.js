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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/dom/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/dom.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/dom.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".mute_tooltip {\r\n    position: absolute;\r\n    left: -50px;\r\n    top: -33px;\r\n    display: none;\r\n}\r\n\r\n.mute_tooltip::after {\r\n    left: 61px !important;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.mute_message:hover .mute_tooltip {\r\n    display: block !important;\r\n    opacity: 1;\r\n}\r\n\r\n.mute_message {\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    padding-top: 2px;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-size: 11px !important;\r\n}\r\n\r\n.im-mess--actions {\r\n    margin-right: -30px !important;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/dom/controls.js":
/*!*****************************!*\
  !*** ./src/dom/controls.js ***!
  \*****************************/
/*! exports provided: tryToAddControls, hideExistingMessages, createTryToInitInterval, tryToInitControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryToAddControls", function() { return tryToAddControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideExistingMessages", function() { return hideExistingMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTryToInitInterval", function() { return createTryToInitInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryToInitControls", function() { return tryToInitControls; });
/* harmony import */ var _utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getChatBody */ "./src/utils/getChatBody.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 * @param id {String}
 * @return {HTMLSpanElement}
 */


function muteBtnHTML(id) {
  var element = document.createElement('span');
  element.setAttribute('class', 'mute_message');
  element.setAttribute('id', "mute".concat(id));
  element.setAttribute('label', 'Заглушить');
  element.style.background = "url(".concat(chrome.runtime.getURL("assets/mute.png"), ") center no-repeat");
  element.innerHTML = '<div class="mute_tooltip tt_w tt_black tt_down"><div class="tt_text">Заглушить</div></div>';
  return element;
}

function tryToAddControls(target) {
  if (target.className === 'im-mess--check fl_l') {
    var message = target.parentElement;
    addControlButton(message);
  }
}
/**
 * Create mute button and inset it to the actionArea
 * @param actionArea {HTMLElement}
 * @param senderId {String}
 * @return {HTMLElement}
 */

function addMuteButton(actionArea, senderId) {
  var muteButton = muteBtnHTML(senderId);
  actionArea.appendChild(muteButton);
  muteButton.style.display = "none";
  return muteButton;
}
/**
 * Add event listeners to the actionArea
 * @param actionsArea {HTMLElement}
 */


function addActionAreaEvents(actionsArea) {
  actionsArea.parentElement.addEventListener("mouseenter", function (event) {
    event.target.getElementsByClassName("mute_message")[0].style.display = "inline-block";
  });
  actionsArea.parentElement.addEventListener("mouseleave", function (event) {
    event.target.getElementsByClassName("mute_message")[0].style.display = "none";
  });
}
/**
 *
 * @return {function(...[]=)}
 */


function setIdToHideHandle() {
  return function (event) {
    var clickedId = event.target.id.substr(4); // get id of sender from element id

    var clickedName = event.target.parentElement.parentElement.parentElement.parentElement;
    clickedName = clickedName.children[0].children[0].children[0].innerText;
    chrome.storage.sync.get('idsToHide', function (data) {
      var idsToHide = data.idsToHide || [];

      if (idsToHide.filter(function (user) {
        return user.id == clickedId;
      }).length === 0) {
        idsToHide.push({
          id: clickedId,
          name: clickedName
        });
        chrome.storage.sync.set({
          idsToHide: idsToHide
        }, function () {
          chrome.storage.sync.get('isExtensionOn', function (data) {
            if (data.isExtensionOn) {
              hideExistingMessages();
            }
          });
        });
      }
    });
  };
}

function hideExistingMessages() {
  chrome.storage.sync.get('idsToHide', function (data) {
    var chatBody = Object(_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__["getChatBody"])();

    var _iterator = _createForOfIteratorHelper(chatBody.children),
        _step;

    try {
      var _loop = function _loop() {
        var item = _step.value;

        if (data.idsToHide.filter(function (user) {
          return user.id == item.dataset.peer;
        }).length > 0) {
          item.style.display = "none";
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
} // Try to add controls until successful. Needed for page refresh.

function createTryToInitInterval() {
  var controlsInterval = setInterval(function () {
    if (!tryToInitControls(controlsInterval)) {
      clearInterval(controlsInterval);
    }
  }, 200);
  return controlsInterval;
}
/**
 *
 * @param message {HTMLElement}
 */

function addControlButton(message) {
  // Check if message is not an outgoing one
  if (!message.classList.contains('im-mess_out')) {
    var actionsArea = message.getElementsByClassName("im-mess--actions")[0];

    if (actionsArea && actionsArea.lastChild.className !== "mute_message") {
      var senderId = message.parentElement.parentElement.parentElement["dataset"].peer;
      var muteBtn = addMuteButton(actionsArea, senderId);
      addActionAreaEvents(actionsArea);
      muteBtn.addEventListener("click", setIdToHideHandle());
      return true;
    } else {
      return false;
    }
  }
}

function tryToInitControls() {
  var status = true;
  var chatBody = Object(_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__["getChatBody"])();
  if (!chatBody) return false;

  var _iterator2 = _createForOfIteratorHelper(chatBody.children),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;

      if (item.className.includes('im-mess-stack _im_mess_stack')) {
        var messages = item.children[1].children[1].getElementsByClassName('im-mess _im_mess');

        var _iterator3 = _createForOfIteratorHelper(messages),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var message = _step3.value;
            status = addControlButton(message);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return status;
}

/***/ }),

/***/ "./src/dom/dom.css":
/*!*************************!*\
  !*** ./src/dom/dom.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./dom.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/dom.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/dom/hide_element.js":
/*!*********************************!*\
  !*** ./src/dom/hide_element.js ***!
  \*********************************/
/*! exports provided: addNewMessageEventListener, returnMessagesEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewMessageEventListener", function() { return addNewMessageEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnMessagesEventListener", function() { return returnMessagesEventListener; });
/* harmony import */ var _utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getChatBody */ "./src/utils/getChatBody.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/dom/controls.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function addNewMessageEventListener() {
  var chatBody = Object(_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__["getChatBody"])();
  chatBody.addEventListener('DOMNodeInserted', function (event) {
    newMessageHandler(event.target);
  });
}

function newMessageHandler(message) {
  Object(_controls__WEBPACK_IMPORTED_MODULE_1__["tryToAddControls"])(message);

  if (message.className === 'im-mess-stack _im_mess_stack ') {
    chrome.storage.sync.get('isExtensionOn', function (data) {
      if (data.isExtensionOn) {
        chrome.storage.sync.get('idsToHide', function (data) {
          if (data.idsToHide.filter(function (user) {
            return user.id == message.dataset.peer;
          }).length > 0) {
            message.style.display = "none";
          }
        });
      }
    });
  }
}

function returnMessagesEventListener() {
  chrome.storage.onChanged.addListener(function (changes) {
    var isExtensionOn = changes.isExtensionOn;
    var idsToHide = changes.idsToHide;
    var chatBody = Object(_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__["getChatBody"])();

    if (isExtensionOn) {
      if (isExtensionOn.newValue === false) {
        var _iterator = _createForOfIteratorHelper(chatBody.children),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.style.display = "block";
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        Object(_controls__WEBPACK_IMPORTED_MODULE_1__["hideExistingMessages"])();
      }
    }

    if (idsToHide) {
      chrome.storage.sync.get('isExtensionOn', function (data) {
        if (data.isExtensionOn) {
          if (idsToHide.newValue.length < idsToHide.oldValue.length) {
            // for (let item of chatBody.children) {
            //     item.style.display = "block";
            // }
            // hideExistingMessages();
            var _iterator2 = _createForOfIteratorHelper(chatBody.children),
                _step2;

            try {
              var _loop = function _loop() {
                var item = _step2.value;

                if (idsToHide.newValue.filter(function (user) {
                  return user.id == item.dataset.peer;
                }).length === 0) {
                  item.style.display = "block";
                }
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
      });
    }
  });
}

/***/ }),

/***/ "./src/dom/main.js":
/*!*************************!*\
  !*** ./src/dom/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.css */ "./src/dom/dom.css");
/* harmony import */ var _dom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/dom/controls.js");
/* harmony import */ var _utils_Url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Url */ "./src/utils/Url.js");
/* harmony import */ var _hide_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hide_element */ "./src/dom/hide_element.js");





function init() {
  var url = new _utils_Url__WEBPACK_IMPORTED_MODULE_2__["UrlController"]();
  url.onChange(function () {
    if (Object(_controls__WEBPACK_IMPORTED_MODULE_1__["tryToInitControls"])()) {
      Object(_controls__WEBPACK_IMPORTED_MODULE_1__["createTryToInitInterval"])();
      Object(_hide_element__WEBPACK_IMPORTED_MODULE_3__["addNewMessageEventListener"])();
      Object(_hide_element__WEBPACK_IMPORTED_MODULE_3__["returnMessagesEventListener"])();
      chrome.storage.sync.get('isExtensionOn', function (data) {
        if (data.isExtensionOn) {
          Object(_controls__WEBPACK_IMPORTED_MODULE_1__["hideExistingMessages"])();
        }
      });
    }
  });
}

init();

/***/ }),

/***/ "./src/utils/Url.js":
/*!**************************!*\
  !*** ./src/utils/Url.js ***!
  \**************************/
/*! exports provided: UrlController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlController", function() { return UrlController; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var INTERVAL_TIME = 100;
var UrlController = /*#__PURE__*/function () {
  function UrlController() {
    _classCallCheck(this, UrlController);

    this._changeListeners = [];
    this._interval = null;
    this._url = window.location.href;
  }

  _createClass(UrlController, [{
    key: "onChange",
    value: function onChange(cb) {
      this._changeListeners.push(cb);

      if (this._interval === null) {
        this._createInterval();
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(cb) {
      this._changeListeners = this._changeListeners.filter(function (item) {
        return item !== cb;
      });

      if (this._changeListeners.length === 0) {
        this._clearInterval();
      }
    }
  }, {
    key: "_intervalTick",
    value: function _intervalTick() {
      var currentUrl = window.location.href;

      if (currentUrl !== this.url) {
        this._broadcast(this.url, currentUrl);

        this.url = currentUrl;
      }
    }
  }, {
    key: "_broadcast",
    value: function _broadcast(oldUrl, newUrl) {
      this._changeListeners.forEach(function (cb) {
        return cb(oldUrl, newUrl);
      });
    }
  }, {
    key: "_createInterval",
    value: function _createInterval() {
      var _this = this;

      this.interval = setInterval(function () {
        return _this._intervalTick();
      }, INTERVAL_TIME);
    }
  }, {
    key: "_clearInterval",
    value: function _clearInterval() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }]);

  return UrlController;
}();

/***/ }),

/***/ "./src/utils/getChatBody.js":
/*!**********************************!*\
  !*** ./src/utils/getChatBody.js ***!
  \**********************************/
/*! exports provided: getChatBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChatBody", function() { return getChatBody; });
function getChatBody() {
  return document.getElementsByClassName("_im_peer_history im-page-chat-contain")[0];
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzPzliNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9oaWRlX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9VcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldENoYXRCb2R5LmpzIl0sIm5hbWVzIjpbIm11dGVCdG5IVE1MIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY2hyb21lIiwicnVudGltZSIsImdldFVSTCIsImlubmVySFRNTCIsInRyeVRvQWRkQ29udHJvbHMiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJtZXNzYWdlIiwicGFyZW50RWxlbWVudCIsImFkZENvbnRyb2xCdXR0b24iLCJhZGRNdXRlQnV0dG9uIiwiYWN0aW9uQXJlYSIsInNlbmRlcklkIiwibXV0ZUJ1dHRvbiIsImFwcGVuZENoaWxkIiwiZGlzcGxheSIsImFkZEFjdGlvbkFyZWFFdmVudHMiLCJhY3Rpb25zQXJlYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZXRJZFRvSGlkZUhhbmRsZSIsImNsaWNrZWRJZCIsInN1YnN0ciIsImNsaWNrZWROYW1lIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJzdG9yYWdlIiwic3luYyIsImdldCIsImRhdGEiLCJpZHNUb0hpZGUiLCJmaWx0ZXIiLCJ1c2VyIiwibGVuZ3RoIiwicHVzaCIsIm5hbWUiLCJzZXQiLCJpc0V4dGVuc2lvbk9uIiwiaGlkZUV4aXN0aW5nTWVzc2FnZXMiLCJjaGF0Qm9keSIsImdldENoYXRCb2R5IiwiaXRlbSIsImRhdGFzZXQiLCJwZWVyIiwiY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwiLCJjb250cm9sc0ludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0cnlUb0luaXRDb250cm9scyIsImNsZWFySW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImxhc3RDaGlsZCIsIm11dGVCdG4iLCJzdGF0dXMiLCJpbmNsdWRlcyIsIm1lc3NhZ2VzIiwiYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIiLCJuZXdNZXNzYWdlSGFuZGxlciIsInJldHVybk1lc3NhZ2VzRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlZCIsImFkZExpc3RlbmVyIiwiY2hhbmdlcyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJpbml0IiwidXJsIiwiVXJsQ29udHJvbGxlciIsIm9uQ2hhbmdlIiwiSU5URVJWQUxfVElNRSIsIl9jaGFuZ2VMaXN0ZW5lcnMiLCJfaW50ZXJ2YWwiLCJfdXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2IiLCJfY3JlYXRlSW50ZXJ2YWwiLCJfY2xlYXJJbnRlcnZhbCIsImN1cnJlbnRVcmwiLCJfYnJvYWRjYXN0Iiwib2xkVXJsIiwibmV3VXJsIiwiZm9yRWFjaCIsImludGVydmFsIiwiX2ludGVydmFsVGljayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsa0JBQWtCLDJCQUEyQixvQkFBb0IsbUJBQW1CLHNCQUFzQixLQUFLLDhCQUE4Qiw4QkFBOEIsS0FBSyxvSEFBb0gsa0NBQWtDLG1CQUFtQixLQUFLLHVCQUF1QiwyQkFBMkIsOEJBQThCLDRCQUE0Qix5QkFBeUIsb0JBQW9CLHFCQUFxQix5Q0FBeUMsS0FBSywyQkFBMkIsdUNBQXVDLEtBQUs7QUFDeHBCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7Ozs7O0FBS0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsRUFBckIsRUFBeUI7QUFDckIsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBaEI7QUFDQUYsU0FBTyxDQUFDRyxZQUFSLENBQXFCLE9BQXJCLEVBQThCLGNBQTlCO0FBQ0FILFNBQU8sQ0FBQ0csWUFBUixDQUFxQixJQUFyQixnQkFBa0NKLEVBQWxDO0FBQ0FDLFNBQU8sQ0FBQ0csWUFBUixDQUFxQixPQUFyQixFQUE4QixXQUE5QjtBQUNBSCxTQUFPLENBQUNJLEtBQVIsQ0FBY0MsVUFBZCxpQkFBa0NDLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxNQUFmLENBQXNCLGlCQUF0QixDQUFsQztBQUNBUixTQUFPLENBQUNTLFNBQVIsR0FBb0IsNEZBQXBCO0FBQ0EsU0FBT1QsT0FBUDtBQUNIOztBQUVNLFNBQVNVLGdCQUFULENBQTBCQyxNQUExQixFQUFrQztBQUNyQyxNQUFJQSxNQUFNLENBQUNDLFNBQVAsS0FBcUIscUJBQXpCLEVBQWdEO0FBQzVDLFFBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxhQUF2QjtBQUNBQyxvQkFBZ0IsQ0FBQ0YsT0FBRCxDQUFoQjtBQUNIO0FBQ0o7QUFFRDs7Ozs7OztBQU1BLFNBQVNHLGFBQVQsQ0FBdUJDLFVBQXZCLEVBQW1DQyxRQUFuQyxFQUE2QztBQUN6QyxNQUFNQyxVQUFVLEdBQUdyQixXQUFXLENBQUNvQixRQUFELENBQTlCO0FBQ0FELFlBQVUsQ0FBQ0csV0FBWCxDQUF1QkQsVUFBdkI7QUFDQUEsWUFBVSxDQUFDZixLQUFYLENBQWlCaUIsT0FBakIsR0FBMkIsTUFBM0I7QUFDQSxTQUFPRixVQUFQO0FBQ0g7QUFFRDs7Ozs7O0FBSUEsU0FBU0csbUJBQVQsQ0FBNkJDLFdBQTdCLEVBQTBDO0FBQ3RDQSxhQUFXLENBQUNULGFBQVosQ0FBMEJVLGdCQUExQixDQUEyQyxZQUEzQyxFQUF5RCxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RFQSxTQUFLLENBQUNkLE1BQU4sQ0FBYWUsc0JBQWIsQ0FBb0MsY0FBcEMsRUFBb0QsQ0FBcEQsRUFBdUR0QixLQUF2RCxDQUE2RGlCLE9BQTdELEdBQXVFLGNBQXZFO0FBQ0gsR0FGRDtBQUlBRSxhQUFXLENBQUNULGFBQVosQ0FBMEJVLGdCQUExQixDQUEyQyxZQUEzQyxFQUF5RCxVQUFVQyxLQUFWLEVBQWlCO0FBQ3RFQSxTQUFLLENBQUNkLE1BQU4sQ0FBYWUsc0JBQWIsQ0FBb0MsY0FBcEMsRUFBb0QsQ0FBcEQsRUFBdUR0QixLQUF2RCxDQUE2RGlCLE9BQTdELEdBQXVFLE1BQXZFO0FBQ0gsR0FGRDtBQUdIO0FBRUQ7Ozs7OztBQUlBLFNBQVNNLGlCQUFULEdBQTZCO0FBQ3pCLFNBQU8sVUFBVUYsS0FBVixFQUFpQjtBQUNwQixRQUFNRyxTQUFTLEdBQUdILEtBQUssQ0FBQ2QsTUFBTixDQUFhWixFQUFiLENBQWdCOEIsTUFBaEIsQ0FBdUIsQ0FBdkIsQ0FBbEIsQ0FEb0IsQ0FDNkI7O0FBQ2pELFFBQUlDLFdBQVcsR0FBR0wsS0FBSyxDQUFDZCxNQUFOLENBQWFHLGFBQWIsQ0FBMkJBLGFBQTNCLENBQXlDQSxhQUF6QyxDQUF1REEsYUFBekU7QUFDQWdCLGVBQVcsR0FBR0EsV0FBVyxDQUFDQyxRQUFaLENBQXFCLENBQXJCLEVBQXdCQSxRQUF4QixDQUFpQyxDQUFqQyxFQUFvQ0EsUUFBcEMsQ0FBNkMsQ0FBN0MsRUFBZ0RDLFNBQTlEO0FBRUExQixVQUFNLENBQUMyQixPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCLEVBQXFDLFVBQVNDLElBQVQsRUFBZTtBQUNoRCxVQUFJQyxTQUFTLEdBQUdELElBQUksQ0FBQ0MsU0FBTCxJQUFrQixFQUFsQzs7QUFDQSxVQUFJQSxTQUFTLENBQUNDLE1BQVYsQ0FBaUIsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ3hDLEVBQUwsSUFBVzZCLFNBQWY7QUFBQSxPQUFyQixFQUErQ1ksTUFBL0MsS0FBMEQsQ0FBOUQsRUFBaUU7QUFDN0RILGlCQUFTLENBQUNJLElBQVYsQ0FBZTtBQUNYMUMsWUFBRSxFQUFFNkIsU0FETztBQUVYYyxjQUFJLEVBQUVaO0FBRkssU0FBZjtBQUlBeEIsY0FBTSxDQUFDMkIsT0FBUCxDQUFlQyxJQUFmLENBQW9CUyxHQUFwQixDQUF3QjtBQUFDTixtQkFBUyxFQUFFQTtBQUFaLFNBQXhCLEVBQWdELFlBQVk7QUFDeEQvQixnQkFBTSxDQUFDMkIsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxVQUFTQyxJQUFULEVBQWU7QUFDcEQsZ0JBQUlBLElBQUksQ0FBQ1EsYUFBVCxFQUF3QjtBQUNwQkMsa0NBQW9CO0FBQ3ZCO0FBQ0osV0FKRDtBQUtILFNBTkQ7QUFPSDtBQUNKLEtBZkQ7QUFnQkgsR0FyQkQ7QUFzQkg7O0FBRU0sU0FBU0Esb0JBQVQsR0FBZ0M7QUFDbkN2QyxRQUFNLENBQUMyQixPQUFQLENBQWVDLElBQWYsQ0FBb0JDLEdBQXBCLENBQXdCLFdBQXhCLEVBQXFDLFVBQVNDLElBQVQsRUFBZTtBQUNoRCxRQUFNVSxRQUFRLEdBQUdDLHNFQUFXLEVBQTVCOztBQURnRCwrQ0FFL0JELFFBQVEsQ0FBQ2YsUUFGc0I7QUFBQTs7QUFBQTtBQUFBO0FBQUEsWUFFdkNpQixJQUZ1Qzs7QUFHNUMsWUFBSVosSUFBSSxDQUFDQyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsVUFBQUMsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUN4QyxFQUFMLElBQVdpRCxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsSUFBNUI7QUFBQSxTQUExQixFQUE0RFYsTUFBNUQsR0FBcUUsQ0FBekUsRUFBNEU7QUFDeEVRLGNBQUksQ0FBQzVDLEtBQUwsQ0FBV2lCLE9BQVgsR0FBcUIsTUFBckI7QUFDSDtBQUwyQzs7QUFFaEQsMERBQW9DO0FBQUE7QUFJbkM7QUFOK0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9uRCxHQVBEO0FBUUgsQyxDQUVEOztBQUNPLFNBQVM4Qix1QkFBVCxHQUFtQztBQUN0QyxNQUFNQyxnQkFBZ0IsR0FBR0MsV0FBVyxDQUFDLFlBQVk7QUFDN0MsUUFBRyxDQUFDQyxpQkFBaUIsQ0FBQ0YsZ0JBQUQsQ0FBckIsRUFBd0M7QUFDcENHLG1CQUFhLENBQUNILGdCQUFELENBQWI7QUFDSDtBQUNKLEdBSm1DLEVBSWpDLEdBSmlDLENBQXBDO0FBS0EsU0FBT0EsZ0JBQVA7QUFDSDtBQUVEOzs7OztBQUlBLFNBQVNyQyxnQkFBVCxDQUEwQkYsT0FBMUIsRUFBbUM7QUFDL0I7QUFDQSxNQUFJLENBQUNBLE9BQU8sQ0FBQzJDLFNBQVIsQ0FBa0JDLFFBQWxCLENBQTJCLGFBQTNCLENBQUwsRUFBZ0Q7QUFDNUMsUUFBTWxDLFdBQVcsR0FBR1YsT0FBTyxDQUFDYSxzQkFBUixDQUErQixrQkFBL0IsRUFBbUQsQ0FBbkQsQ0FBcEI7O0FBQ0EsUUFBSUgsV0FBVyxJQUFJQSxXQUFXLENBQUNtQyxTQUFaLENBQXNCOUMsU0FBdEIsS0FBb0MsY0FBdkQsRUFBdUU7QUFDbkUsVUFBTU0sUUFBUSxHQUFHTCxPQUFPLENBQUNDLGFBQVIsQ0FBc0JBLGFBQXRCLENBQW9DQSxhQUFwQyxDQUFrRCxTQUFsRCxFQUE2RG9DLElBQTlFO0FBQ0EsVUFBTVMsT0FBTyxHQUFHM0MsYUFBYSxDQUFDTyxXQUFELEVBQWNMLFFBQWQsQ0FBN0I7QUFDQUkseUJBQW1CLENBQUNDLFdBQUQsQ0FBbkI7QUFDQW9DLGFBQU8sQ0FBQ25DLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDRyxpQkFBaUIsRUFBbkQ7QUFDQSxhQUFPLElBQVA7QUFDSCxLQU5ELE1BTU87QUFDSCxhQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0o7O0FBRU0sU0FBUzJCLGlCQUFULEdBQTZCO0FBQ2hDLE1BQUlNLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBTWQsUUFBUSxHQUFHQyxzRUFBVyxFQUE1QjtBQUNBLE1BQUcsQ0FBQ0QsUUFBSixFQUFjLE9BQU8sS0FBUDs7QUFIa0IsOENBSWZBLFFBQVEsQ0FBQ2YsUUFKTTtBQUFBOztBQUFBO0FBSWhDLDJEQUFvQztBQUFBLFVBQTNCaUIsSUFBMkI7O0FBQ2hDLFVBQUlBLElBQUksQ0FBQ3BDLFNBQUwsQ0FBZWlELFFBQWYsQ0FBd0IsOEJBQXhCLENBQUosRUFBNkQ7QUFDekQsWUFBSUMsUUFBUSxHQUFHZCxJQUFJLENBQUNqQixRQUFMLENBQWMsQ0FBZCxFQUFpQkEsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJMLHNCQUE3QixDQUFvRCxrQkFBcEQsQ0FBZjs7QUFEeUQsb0RBRXJDb0MsUUFGcUM7QUFBQTs7QUFBQTtBQUV6RCxpRUFBOEI7QUFBQSxnQkFBckJqRCxPQUFxQjtBQUMxQitDLGtCQUFNLEdBQUc3QyxnQkFBZ0IsQ0FBQ0YsT0FBRCxDQUF6QjtBQUNIO0FBSndEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLNUQ7QUFDSjtBQVgrQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVloQyxTQUFPK0MsTUFBUDtBQUNILEM7Ozs7Ozs7Ozs7O0FDdElELFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMscUhBQXVEOztBQUV6Rjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUVPLFNBQVNHLDBCQUFULEdBQXNDO0FBQ3pDLE1BQU1qQixRQUFRLEdBQUdDLHNFQUFXLEVBQTVCO0FBQ0FELFVBQVEsQ0FBQ3RCLGdCQUFULENBQTBCLGlCQUExQixFQUE2QyxVQUFTQyxLQUFULEVBQWdCO0FBQ3pEdUMscUJBQWlCLENBQUN2QyxLQUFLLENBQUNkLE1BQVAsQ0FBakI7QUFDSCxHQUZEO0FBR0g7O0FBRUQsU0FBU3FELGlCQUFULENBQTJCbkQsT0FBM0IsRUFBb0M7QUFDaENILG9FQUFnQixDQUFDRyxPQUFELENBQWhCOztBQUNBLE1BQUlBLE9BQU8sQ0FBQ0QsU0FBUixLQUFzQiwrQkFBMUIsRUFBMkQ7QUFDdkROLFVBQU0sQ0FBQzJCLE9BQVAsQ0FBZUMsSUFBZixDQUFvQkMsR0FBcEIsQ0FBd0IsZUFBeEIsRUFBeUMsVUFBU0MsSUFBVCxFQUFlO0FBQ3BELFVBQUlBLElBQUksQ0FBQ1EsYUFBVCxFQUF3QjtBQUNwQnRDLGNBQU0sQ0FBQzJCLE9BQVAsQ0FBZUMsSUFBZixDQUFvQkMsR0FBcEIsQ0FBd0IsV0FBeEIsRUFBcUMsVUFBU0MsSUFBVCxFQUFlO0FBQ2hELGNBQUlBLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxNQUFmLENBQXNCLFVBQUFDLElBQUk7QUFBQSxtQkFBSUEsSUFBSSxDQUFDeEMsRUFBTCxJQUFXYyxPQUFPLENBQUNvQyxPQUFSLENBQWdCQyxJQUEvQjtBQUFBLFdBQTFCLEVBQStEVixNQUEvRCxHQUF3RSxDQUE1RSxFQUErRTtBQUMzRTNCLG1CQUFPLENBQUNULEtBQVIsQ0FBY2lCLE9BQWQsR0FBd0IsTUFBeEI7QUFDSDtBQUNKLFNBSkQ7QUFLSDtBQUNKLEtBUkQ7QUFTSDtBQUNKOztBQUVNLFNBQVM0QywyQkFBVCxHQUF1QztBQUMxQzNELFFBQU0sQ0FBQzJCLE9BQVAsQ0FBZWlDLFNBQWYsQ0FBeUJDLFdBQXpCLENBQXFDLFVBQVNDLE9BQVQsRUFBa0I7QUFDbkQsUUFBTXhCLGFBQWEsR0FBR3dCLE9BQU8sQ0FBQ3hCLGFBQTlCO0FBQ0EsUUFBTVAsU0FBUyxHQUFHK0IsT0FBTyxDQUFDL0IsU0FBMUI7QUFDQSxRQUFNUyxRQUFRLEdBQUdDLHNFQUFXLEVBQTVCOztBQUNBLFFBQUlILGFBQUosRUFBbUI7QUFDZixVQUFJQSxhQUFhLENBQUN5QixRQUFkLEtBQTJCLEtBQS9CLEVBQXNDO0FBQUEsbURBQ2pCdkIsUUFBUSxDQUFDZixRQURRO0FBQUE7O0FBQUE7QUFDbEMsOERBQW9DO0FBQUEsZ0JBQTNCaUIsSUFBMkI7QUFDaENBLGdCQUFJLENBQUM1QyxLQUFMLENBQVdpQixPQUFYLEdBQXFCLE9BQXJCO0FBQ0g7QUFIaUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlyQyxPQUpELE1BSU87QUFDSHdCLDhFQUFvQjtBQUN2QjtBQUNKOztBQUNELFFBQUlSLFNBQUosRUFBZTtBQUNYL0IsWUFBTSxDQUFDMkIsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxVQUFTQyxJQUFULEVBQWU7QUFDcEQsWUFBSUEsSUFBSSxDQUFDUSxhQUFULEVBQXdCO0FBQ3BCLGNBQUlQLFNBQVMsQ0FBQ2dDLFFBQVYsQ0FBbUI3QixNQUFuQixHQUE0QkgsU0FBUyxDQUFDaUMsUUFBVixDQUFtQjlCLE1BQW5ELEVBQTJEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBSnVELHdEQUt0Q00sUUFBUSxDQUFDZixRQUw2QjtBQUFBOztBQUFBO0FBQUE7QUFBQSxvQkFLOUNpQixJQUw4Qzs7QUFNbkQsb0JBQUlYLFNBQVMsQ0FBQ2dDLFFBQVYsQ0FBbUIvQixNQUFuQixDQUEwQixVQUFBQyxJQUFJO0FBQUEseUJBQUlBLElBQUksQ0FBQ3hDLEVBQUwsSUFBV2lELElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxJQUE1QjtBQUFBLGlCQUE5QixFQUFnRVYsTUFBaEUsS0FBMkUsQ0FBL0UsRUFBa0Y7QUFDOUVRLHNCQUFJLENBQUM1QyxLQUFMLENBQVdpQixPQUFYLEdBQXFCLE9BQXJCO0FBQ0g7QUFSa0Q7O0FBS3ZELHFFQUFvQztBQUFBO0FBSW5DO0FBVHNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVMUQ7QUFDSjtBQUNKLE9BZEQ7QUFlSDtBQUNKLEdBOUJEO0FBK0JILEM7Ozs7Ozs7Ozs7OztBQ3pERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTa0QsSUFBVCxHQUFnQjtBQUNaLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyx3REFBSixFQUFaO0FBQ0FELEtBQUcsQ0FBQ0UsUUFBSixDQUFhLFlBQU07QUFDZixRQUFJcEIsbUVBQWlCLEVBQXJCLEVBQXlCO0FBQ3JCSCwrRUFBdUI7QUFDdkJZLHNGQUEwQjtBQUMxQkUsdUZBQTJCO0FBQzNCM0QsWUFBTSxDQUFDMkIsT0FBUCxDQUFlQyxJQUFmLENBQW9CQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxVQUFTQyxJQUFULEVBQWU7QUFDcEQsWUFBSUEsSUFBSSxDQUFDUSxhQUFULEVBQXdCO0FBQ3BCQyxnRkFBb0I7QUFDdkI7QUFDSixPQUpEO0FBS0g7QUFDSixHQVhEO0FBWUg7O0FBRUQwQixJQUFJLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJKLElBQU1JLGFBQWEsR0FBRyxHQUF0QjtBQUVPLElBQU1GLGFBQWI7QUFFSSwyQkFBYztBQUFBOztBQUNWLFNBQUtHLGdCQUFMLEdBQXdCLEVBQXhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUtDLElBQUwsR0FBWUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUE1QjtBQUNIOztBQU5MO0FBQUE7QUFBQSw2QkFRYUMsRUFSYixFQVFpQjtBQUNULFdBQUtOLGdCQUFMLENBQXNCbkMsSUFBdEIsQ0FBMkJ5QyxFQUEzQjs7QUFDQSxVQUFJLEtBQUtMLFNBQUwsS0FBbUIsSUFBdkIsRUFBNkI7QUFDekIsYUFBS00sZUFBTDtBQUNIO0FBQ0o7QUFiTDtBQUFBO0FBQUEsd0NBZXdCRCxFQWZ4QixFQWU0QjtBQUNwQixXQUFLTixnQkFBTCxHQUF3QixLQUFLQSxnQkFBTCxDQUFzQnRDLE1BQXRCLENBQTZCLFVBQUFVLElBQUk7QUFBQSxlQUFFQSxJQUFJLEtBQUtrQyxFQUFYO0FBQUEsT0FBakMsQ0FBeEI7O0FBQ0EsVUFBRyxLQUFLTixnQkFBTCxDQUFzQnBDLE1BQXRCLEtBQWlDLENBQXBDLEVBQXVDO0FBQ25DLGFBQUs0QyxjQUFMO0FBQ0g7QUFDSjtBQXBCTDtBQUFBO0FBQUEsb0NBc0JvQjtBQUNaLFVBQU1DLFVBQVUsR0FBR04sTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFuQzs7QUFDQSxVQUFJSSxVQUFVLEtBQUssS0FBS2IsR0FBeEIsRUFBNkI7QUFDekIsYUFBS2MsVUFBTCxDQUFnQixLQUFLZCxHQUFyQixFQUEwQmEsVUFBMUI7O0FBQ0EsYUFBS2IsR0FBTCxHQUFXYSxVQUFYO0FBQ0g7QUFFSjtBQTdCTDtBQUFBO0FBQUEsK0JBK0JlRSxNQS9CZixFQStCdUJDLE1BL0J2QixFQStCK0I7QUFDdkIsV0FBS1osZ0JBQUwsQ0FBc0JhLE9BQXRCLENBQThCLFVBQUFQLEVBQUU7QUFBQSxlQUFJQSxFQUFFLENBQUNLLE1BQUQsRUFBU0MsTUFBVCxDQUFOO0FBQUEsT0FBaEM7QUFDSDtBQWpDTDtBQUFBO0FBQUEsc0NBbUNzQjtBQUFBOztBQUNkLFdBQUtFLFFBQUwsR0FBZ0JyQyxXQUFXLENBQUM7QUFBQSxlQUFNLEtBQUksQ0FBQ3NDLGFBQUwsRUFBTjtBQUFBLE9BQUQsRUFBNkJoQixhQUE3QixDQUEzQjtBQUNIO0FBckNMO0FBQUE7QUFBQSxxQ0F1Q3FCO0FBQ2JwQixtQkFBYSxDQUFDLEtBQUttQyxRQUFOLENBQWI7QUFDQSxXQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUExQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQU8sU0FBUzNDLFdBQVQsR0FBdUI7QUFDMUIsU0FBTzlDLFFBQVEsQ0FBQ3lCLHNCQUFULENBQWdDLHVDQUFoQyxFQUF5RSxDQUF6RSxDQUFQO0FBQ0gsQyIsImZpbGUiOiJkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kb20vbWFpbi5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubXV0ZV90b29sdGlwIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAtNTBweDtcXHJcXG4gICAgdG9wOiAtMzNweDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm11dGVfdG9vbHRpcDo6YWZ0ZXIge1xcclxcbiAgICBsZWZ0OiA2MXB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xcclxcbi5tdXRlX21lc3NhZ2U6aG92ZXIgLm11dGVfdG9vbHRpcCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5tdXRlX21lc3NhZ2Uge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDJweDtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5pbS1tZXNzLS1hY3Rpb25zIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzBweCAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCB7U3RyaW5nfVxyXG4gKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9XHJcbiAqL1xyXG5pbXBvcnQge2dldENoYXRCb2R5fSBmcm9tIFwiLi4vdXRpbHMvZ2V0Q2hhdEJvZHlcIjtcclxuXHJcbmZ1bmN0aW9uIG11dGVCdG5IVE1MKGlkKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ211dGVfbWVzc2FnZScpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG11dGUke2lkfWApO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ9CX0LDQs9C70YPRiNC40YLRjCcpO1xyXG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2Nocm9tZS5ydW50aW1lLmdldFVSTChcImFzc2V0cy9tdXRlLnBuZ1wiKX0pIGNlbnRlciBuby1yZXBlYXRgO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm11dGVfdG9vbHRpcCB0dF93IHR0X2JsYWNrIHR0X2Rvd25cIj48ZGl2IGNsYXNzPVwidHRfdGV4dFwiPtCX0LDQs9C70YPRiNC40YLRjDwvZGl2PjwvZGl2Pic7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVRvQWRkQ29udHJvbHModGFyZ2V0KSB7XHJcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ltLW1lc3MtLWNoZWNrIGZsX2wnKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGFkZENvbnRyb2xCdXR0b24obWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGUgbXV0ZSBidXR0b24gYW5kIGluc2V0IGl0IHRvIHRoZSBhY3Rpb25BcmVhXHJcbiAqIEBwYXJhbSBhY3Rpb25BcmVhIHtIVE1MRWxlbWVudH1cclxuICogQHBhcmFtIHNlbmRlcklkIHtTdHJpbmd9XHJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkTXV0ZUJ1dHRvbihhY3Rpb25BcmVhLCBzZW5kZXJJZCkge1xyXG4gICAgY29uc3QgbXV0ZUJ1dHRvbiA9IG11dGVCdG5IVE1MKHNlbmRlcklkKTtcclxuICAgIGFjdGlvbkFyZWEuYXBwZW5kQ2hpbGQobXV0ZUJ1dHRvbik7XHJcbiAgICBtdXRlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIHJldHVybiBtdXRlQnV0dG9uO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYWN0aW9uQXJlYVxyXG4gKiBAcGFyYW0gYWN0aW9uc0FyZWEge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkQWN0aW9uQXJlYUV2ZW50cyhhY3Rpb25zQXJlYSkge1xyXG4gICAgYWN0aW9uc0FyZWEucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC50YXJnZXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm11dGVfbWVzc2FnZVwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH0pO1xyXG5cclxuICAgIGFjdGlvbnNBcmVhLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtdXRlX21lc3NhZ2VcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcmV0dXJuIHtmdW5jdGlvbiguLi5bXT0pfVxyXG4gKi9cclxuZnVuY3Rpb24gc2V0SWRUb0hpZGVIYW5kbGUoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgY2xpY2tlZElkID0gZXZlbnQudGFyZ2V0LmlkLnN1YnN0cig0KTsgICAgIC8vIGdldCBpZCBvZiBzZW5kZXIgZnJvbSBlbGVtZW50IGlkXHJcbiAgICAgICAgbGV0IGNsaWNrZWROYW1lID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgY2xpY2tlZE5hbWUgPSBjbGlja2VkTmFtZS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5jaGlsZHJlblswXS5pbm5lclRleHQ7XHJcblxyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZHNUb0hpZGUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGxldCBpZHNUb0hpZGUgPSBkYXRhLmlkc1RvSGlkZSB8fCBbXTtcclxuICAgICAgICAgICAgaWYgKGlkc1RvSGlkZS5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09IGNsaWNrZWRJZCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZHNUb0hpZGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNsaWNrZWRJZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjbGlja2VkTmFtZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7aWRzVG9IaWRlOiBpZHNUb0hpZGV9LCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lzRXh0ZW5zaW9uT24nLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzRXh0ZW5zaW9uT24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlRXhpc3RpbmdNZXNzYWdlcygpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZHNUb0hpZGUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgY2hhdEJvZHkgPSBnZXRDaGF0Qm9keSgpO1xyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuaWRzVG9IaWRlLmZpbHRlcih1c2VyID0+IHVzZXIuaWQgPT0gaXRlbS5kYXRhc2V0LnBlZXIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gVHJ5IHRvIGFkZCBjb250cm9scyB1bnRpbCBzdWNjZXNzZnVsLiBOZWVkZWQgZm9yIHBhZ2UgcmVmcmVzaC5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyeVRvSW5pdEludGVydmFsKCkge1xyXG4gICAgY29uc3QgY29udHJvbHNJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZighdHJ5VG9Jbml0Q29udHJvbHMoY29udHJvbHNJbnRlcnZhbCkpe1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKGNvbnRyb2xzSW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDIwMClcclxuICAgIHJldHVybiBjb250cm9sc0ludGVydmFsO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIG1lc3NhZ2Uge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gYWRkQ29udHJvbEJ1dHRvbihtZXNzYWdlKSB7XHJcbiAgICAvLyBDaGVjayBpZiBtZXNzYWdlIGlzIG5vdCBhbiBvdXRnb2luZyBvbmVcclxuICAgIGlmICghbWVzc2FnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ltLW1lc3Nfb3V0JykpIHtcclxuICAgICAgICBjb25zdCBhY3Rpb25zQXJlYSA9IG1lc3NhZ2UuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImltLW1lc3MtLWFjdGlvbnNcIilbMF07XHJcbiAgICAgICAgaWYgKGFjdGlvbnNBcmVhICYmIGFjdGlvbnNBcmVhLmxhc3RDaGlsZC5jbGFzc05hbWUgIT09IFwibXV0ZV9tZXNzYWdlXCIpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2VuZGVySWQgPSBtZXNzYWdlLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50W1wiZGF0YXNldFwiXS5wZWVyO1xyXG4gICAgICAgICAgICBjb25zdCBtdXRlQnRuID0gYWRkTXV0ZUJ1dHRvbihhY3Rpb25zQXJlYSwgc2VuZGVySWQpO1xyXG4gICAgICAgICAgICBhZGRBY3Rpb25BcmVhRXZlbnRzKGFjdGlvbnNBcmVhKTtcclxuICAgICAgICAgICAgbXV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2V0SWRUb0hpZGVIYW5kbGUoKSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cnlUb0luaXRDb250cm9scygpIHtcclxuICAgIGxldCBzdGF0dXMgPSB0cnVlO1xyXG4gICAgY29uc3QgY2hhdEJvZHkgPSBnZXRDaGF0Qm9keSgpO1xyXG4gICAgaWYoIWNoYXRCb2R5KSByZXR1cm4gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBpdGVtIG9mIGNoYXRCb2R5LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NOYW1lLmluY2x1ZGVzKCdpbS1tZXNzLXN0YWNrIF9pbV9tZXNzX3N0YWNrJykpIHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VzID0gaXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbS1tZXNzIF9pbV9tZXNzJyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGFkZENvbnRyb2xCdXR0b24obWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdHVzO1xyXG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RvbS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHtnZXRDaGF0Qm9keX0gZnJvbSBcIi4uL3V0aWxzL2dldENoYXRCb2R5XCI7XHJcbmltcG9ydCB7dHJ5VG9BZGRDb250cm9scywgaGlkZUV4aXN0aW5nTWVzc2FnZXN9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XHJcbiAgICBjaGF0Qm9keS5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIG5ld01lc3NhZ2VIYW5kbGVyKGV2ZW50LnRhcmdldClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdNZXNzYWdlSGFuZGxlcihtZXNzYWdlKSB7XHJcbiAgICB0cnlUb0FkZENvbnRyb2xzKG1lc3NhZ2UpO1xyXG4gICAgaWYgKG1lc3NhZ2UuY2xhc3NOYW1lID09PSAnaW0tbWVzcy1zdGFjayBfaW1fbWVzc19zdGFjayAnKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lzRXh0ZW5zaW9uT24nLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmlzRXh0ZW5zaW9uT24pIHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZHNUb0hpZGUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaWRzVG9IaWRlLmZpbHRlcih1c2VyID0+IHVzZXIuaWQgPT0gbWVzc2FnZS5kYXRhc2V0LnBlZXIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybk1lc3NhZ2VzRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbihjaGFuZ2VzKSB7XHJcbiAgICAgICAgY29uc3QgaXNFeHRlbnNpb25PbiA9IGNoYW5nZXMuaXNFeHRlbnNpb25PbjtcclxuICAgICAgICBjb25zdCBpZHNUb0hpZGUgPSBjaGFuZ2VzLmlkc1RvSGlkZTtcclxuICAgICAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XHJcbiAgICAgICAgaWYgKGlzRXh0ZW5zaW9uT24pIHtcclxuICAgICAgICAgICAgaWYgKGlzRXh0ZW5zaW9uT24ubmV3VmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNoYXRCb2R5LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaGlkZUV4aXN0aW5nTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaWRzVG9IaWRlKSB7XHJcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpc0V4dGVuc2lvbk9uJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXNFeHRlbnNpb25Pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZHNUb0hpZGUubmV3VmFsdWUubGVuZ3RoIDwgaWRzVG9IaWRlLm9sZFZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpdGVtIG9mIGNoYXRCb2R5LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGlkZUV4aXN0aW5nTWVzc2FnZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjaGF0Qm9keS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkc1RvSGlkZS5uZXdWYWx1ZS5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09IGl0ZW0uZGF0YXNldC5wZWVyKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0ICcuL2RvbS5jc3MnXHJcbmltcG9ydCB7Y3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwsIGhpZGVFeGlzdGluZ01lc3NhZ2VzLCB0cnlUb0luaXRDb250cm9sc30gZnJvbSBcIi4vY29udHJvbHNcIjtcclxuaW1wb3J0IHtVcmxDb250cm9sbGVyfSBmcm9tIFwiLi4vdXRpbHMvVXJsXCI7XHJcbmltcG9ydCB7YWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIsIHJldHVybk1lc3NhZ2VzRXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4vaGlkZV9lbGVtZW50XCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgdXJsID0gbmV3IFVybENvbnRyb2xsZXIoKTtcclxuICAgIHVybC5vbkNoYW5nZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyeVRvSW5pdENvbnRyb2xzKCkpIHtcclxuICAgICAgICAgICAgY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwoKTtcclxuICAgICAgICAgICAgYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuTWVzc2FnZXNFdmVudExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpc0V4dGVuc2lvbk9uJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXNFeHRlbnNpb25Pbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmluaXQoKTsiLCJjb25zdCBJTlRFUlZBTF9USU1FID0gMTAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVybENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcclxuICAgICAgICB0aGlzLl91cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShjYikge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycy5wdXNoKGNiKTtcclxuICAgICAgICBpZiAodGhpcy5faW50ZXJ2YWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlSW50ZXJ2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihjYikge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycyA9IHRoaXMuX2NoYW5nZUxpc3RlbmVycy5maWx0ZXIoaXRlbT0+aXRlbSAhPT0gY2IpO1xyXG4gICAgICAgIGlmKHRoaXMuX2NoYW5nZUxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaW50ZXJ2YWxUaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICBpZiAoY3VycmVudFVybCAhPT0gdGhpcy51cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnJvYWRjYXN0KHRoaXMudXJsLCBjdXJyZW50VXJsKTtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSBjdXJyZW50VXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2Jyb2FkY2FzdChvbGRVcmwsIG5ld1VybCkge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGNiID0+IGNiKG9sZFVybCwgbmV3VXJsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUludGVydmFsKCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9pbnRlcnZhbFRpY2soKSwgSU5URVJWQUxfVElNRSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IG51bGxcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q2hhdEJvZHkoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIl9pbV9wZWVyX2hpc3RvcnkgaW0tcGFnZS1jaGF0LWNvbnRhaW5cIilbMF07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9