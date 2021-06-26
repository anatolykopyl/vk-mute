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
exports.push([module.i, ".mute_message .mutetooltip {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n    \r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 125%;\r\n    left: 50%;\r\n    margin-left: -60px;\r\n    \r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n.mute_message .mutetooltip::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.mute_message:hover .mutetooltip {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.mute_message {\r\n    width: 16px;\r\n    height: 16px;\r\n    position: relative; \r\n    display: inline-block;\r\n    vertical-align: top;\r\n    /*background: url('chrome-extension://__MSG_@@extension_id__/mute.png') !important;*/\r\n    background-repeat: no-repeat;\r\n    padding: 6px;\r\n}\r\n\r\n.im-mess--actions {\r\n    margin-right: -30px !important;\r\n}", ""]);
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
/*! exports provided: hideExistingMessages, createTryToInitInterval, tryToInitControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  element.innerHTML = "\n        \uD83D\uDD07\n        <span class=\"mutetooltip\">\u0417\u0430\u0433\u043B\u0443\u0448\u0438\u0442\u044C</span>\n    ";
  return element;
}
/**
 *
 * @param chatBody {HTMLElement}
 * @return {function(...[*]=)}
 */


function addControls(event) {
  console.log(event);

  if (event.target.className === 'im-mess--check fl_l') {
    var message = event.target.parentElement;
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
 * @param chatBody {HTMLElement}
 * @return {function(...[]=)}
 */


function setIdToHideHandle(chatBody) {
  return function (event) {
    var clickedId = event.target.id.substr(4); // get id of sender from element id

    chrome.storage.sync.get('idsToHide', function (data) {
      var idsToHide = data.idsToHide || [];
      idsToHide.push(clickedId);
      chrome.storage.sync.set({
        idsToHide: idsToHide
      }, function () {
        hideExistingMessages();
        console.log('idsToHide: ' + data.idsToHide);
      });
    });
  };
}

function hideExistingMessages() {
  chrome.storage.sync.get('idsToHide', function (data) {
    var chatBody = Object(_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__["getChatBody"])();

    var _iterator = _createForOfIteratorHelper(chatBody.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (data.idsToHide.includes(item.dataset.peer)) {
          item.style.display = "none";
        }
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

function addControlButton(message, chatBody) {
  var actionsArea = message.getElementsByClassName("im-mess--actions")[0];

  if (actionsArea && actionsArea.lastChild.className !== "mute_message") {
    var senderId = message.parentElement.parentElement.parentElement["dataset"].peer;
    var muteBtn = addMuteButton(actionsArea, senderId);
    addActionAreaEvents(actionsArea);
    muteBtn.addEventListener("click", setIdToHideHandle(chatBody));
    return true;
  } else {
    return false;
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
            status = addControlButton(message, chatBody);
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
/*! exports provided: addNewMessageEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewMessageEventListener", function() { return addNewMessageEventListener; });
/* harmony import */ var _utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getChatBody */ "./src/utils/getChatBody.js");

function addNewMessageEventListener() {
  var chatBody = Object(_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__["getChatBody"])();
  chrome.storage.sync.get('idsToHide', function (data) {
    var idsToHide = data.idsToHide;
    chatBody.addEventListener('DOMNodeInserted', function (event) {
      newMessageHandler(event.target, idsToHide);
    });
  });
}

function newMessageHandler(message) {
  if (message.className === 'im-mess-stack _im_mess_stack ') {
    var idsToHide;
    chrome.storage.sync.get('idsToHide', function (data) {
      idsToHide = data.idsToHide;
    });
    chrome.storage.sync.get('isExtensionOn', function (data) {
      if (data.isExtensionOn) {
        if (idsToHide.includes(message.dataset.peer)) {
          message.style.display = "none";
        }
      }
    });
  }
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
      Object(_controls__WEBPACK_IMPORTED_MODULE_1__["hideExistingMessages"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzPzliNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9oaWRlX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9VcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldENoYXRCb2R5LmpzIl0sIm5hbWVzIjpbIm11dGVCdG5IVE1MIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWRkQ29udHJvbHMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJtZXNzYWdlIiwicGFyZW50RWxlbWVudCIsImFkZENvbnRyb2xCdXR0b24iLCJhZGRNdXRlQnV0dG9uIiwiYWN0aW9uQXJlYSIsInNlbmRlcklkIiwibXV0ZUJ1dHRvbiIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkQWN0aW9uQXJlYUV2ZW50cyIsImFjdGlvbnNBcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZXRJZFRvSGlkZUhhbmRsZSIsImNoYXRCb2R5IiwiY2xpY2tlZElkIiwic3Vic3RyIiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJkYXRhIiwiaWRzVG9IaWRlIiwicHVzaCIsInNldCIsImhpZGVFeGlzdGluZ01lc3NhZ2VzIiwiZ2V0Q2hhdEJvZHkiLCJjaGlsZHJlbiIsIml0ZW0iLCJpbmNsdWRlcyIsImRhdGFzZXQiLCJwZWVyIiwiY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwiLCJjb250cm9sc0ludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0cnlUb0luaXRDb250cm9scyIsImNsZWFySW50ZXJ2YWwiLCJsYXN0Q2hpbGQiLCJtdXRlQnRuIiwic3RhdHVzIiwibWVzc2FnZXMiLCJhZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lciIsIm5ld01lc3NhZ2VIYW5kbGVyIiwiaXNFeHRlbnNpb25PbiIsImluaXQiLCJ1cmwiLCJVcmxDb250cm9sbGVyIiwib25DaGFuZ2UiLCJJTlRFUlZBTF9USU1FIiwiX2NoYW5nZUxpc3RlbmVycyIsIl9pbnRlcnZhbCIsIl91cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJjYiIsIl9jcmVhdGVJbnRlcnZhbCIsImZpbHRlciIsImxlbmd0aCIsIl9jbGVhckludGVydmFsIiwiY3VycmVudFVybCIsIl9icm9hZGNhc3QiLCJvbGRVcmwiLCJuZXdVcmwiLCJmb3JFYWNoIiwiaW50ZXJ2YWwiLCJfaW50ZXJ2YWxUaWNrIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFF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YjtBQUNBLFdBQUtBLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSDtBQTFDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBTyxTQUFTdkMsV0FBVCxHQUF1QjtBQUMxQixTQUFPckMsUUFBUSxDQUFDdUIsc0JBQVQsQ0FBZ0MsdUNBQWhDLEVBQXlFLENBQXpFLENBQVA7QUFDSCxDIiwiZmlsZSI6ImRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2RvbS9tYWluLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5tdXRlX21lc3NhZ2UgLm11dGV0b29sdGlwIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIFxcclxcbiAgICAvKiBQb3NpdGlvbiB0aGUgdG9vbHRpcCB0ZXh0ICovXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYm90dG9tOiAxMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcXHJcXG4gICAgXFxyXFxuICAgIC8qIEZhZGUgaW4gdG9vbHRpcCAqL1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi8qIFRvb2x0aXAgYXJyb3cgKi9cXHJcXG4ubXV0ZV9tZXNzYWdlIC5tdXRldG9vbHRpcDo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDEwMCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxuICAgIGJvcmRlci13aWR0aDogNXB4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6ICM1NTUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xcclxcbi5tdXRlX21lc3NhZ2U6aG92ZXIgLm11dGV0b29sdGlwIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm11dGVfbWVzc2FnZSB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgXFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gICAgLypiYWNrZ3JvdW5kOiB1cmwoJ2Nocm9tZS1leHRlbnNpb246Ly9fX01TR19AQGV4dGVuc2lvbl9pZF9fL211dGUucG5nJykgIWltcG9ydGFudDsqL1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBwYWRkaW5nOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5pbS1tZXNzLS1hY3Rpb25zIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzBweCAhaW1wb3J0YW50O1xcclxcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBpZCB7U3RyaW5nfVxyXG4gKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9XHJcbiAqL1xyXG5pbXBvcnQge2dldENoYXRCb2R5fSBmcm9tIFwiLi4vdXRpbHMvZ2V0Q2hhdEJvZHlcIjtcclxuXHJcbmZ1bmN0aW9uIG11dGVCdG5IVE1MKGlkKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ211dGVfbWVzc2FnZScpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgYG11dGUke2lkfWApO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAg8J+Uh1xyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibXV0ZXRvb2x0aXBcIj7Ql9Cw0LPQu9GD0YjQuNGC0Yw8L3NwYW4+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gY2hhdEJvZHkge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtmdW5jdGlvbiguLi5bKl09KX1cclxuICovXHJcbmZ1bmN0aW9uIGFkZENvbnRyb2xzKGV2ZW50KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ltLW1lc3MtLWNoZWNrIGZsX2wnKSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGFkZENvbnRyb2xCdXR0b24obWVzc2FnZSlcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBtdXRlIGJ1dHRvbiBhbmQgaW5zZXQgaXQgdG8gdGhlIGFjdGlvbkFyZWFcclxuICogQHBhcmFtIGFjdGlvbkFyZWEge0hUTUxFbGVtZW50fVxyXG4gKiBAcGFyYW0gc2VuZGVySWQge1N0cmluZ31cclxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRNdXRlQnV0dG9uKGFjdGlvbkFyZWEsIHNlbmRlcklkKSB7XHJcbiAgICBjb25zdCBtdXRlQnV0dG9uID0gbXV0ZUJ0bkhUTUwoc2VuZGVySWQpO1xyXG4gICAgYWN0aW9uQXJlYS5hcHBlbmRDaGlsZChtdXRlQnV0dG9uKTtcclxuICAgIG11dGVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgcmV0dXJuIG11dGVCdXR0b247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBhY3Rpb25BcmVhXHJcbiAqIEBwYXJhbSBhY3Rpb25zQXJlYSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRBY3Rpb25BcmVhRXZlbnRzKGFjdGlvbnNBcmVhKSB7XHJcbiAgICBhY3Rpb25zQXJlYS5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXV0ZV9tZXNzYWdlXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWN0aW9uc0FyZWEucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBldmVudC50YXJnZXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm11dGVfbWVzc2FnZVwiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBjaGF0Qm9keSB7SFRNTEVsZW1lbnR9XHJcbiAqIEByZXR1cm4ge2Z1bmN0aW9uKC4uLltdPSl9XHJcbiAqL1xyXG5mdW5jdGlvbiBzZXRJZFRvSGlkZUhhbmRsZShjaGF0Qm9keSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRJZCA9IGV2ZW50LnRhcmdldC5pZC5zdWJzdHIoNCk7ICAgICAvLyBnZXQgaWQgb2Ygc2VuZGVyIGZyb20gZWxlbWVudCBpZFxyXG5cclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaWRzVG9IaWRlJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgaWRzVG9IaWRlID0gZGF0YS5pZHNUb0hpZGUgfHwgW107XHJcbiAgICAgICAgICAgIGlkc1RvSGlkZS5wdXNoKGNsaWNrZWRJZCk7XHJcbiAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtpZHNUb0hpZGU6IGlkc1RvSGlkZX0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWRzVG9IaWRlOiAnICsgZGF0YS5pZHNUb0hpZGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVFeGlzdGluZ01lc3NhZ2VzKCkge1xyXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lkc1RvSGlkZScsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjaGF0Qm9keS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5pZHNUb0hpZGUuaW5jbHVkZXMoaXRlbS5kYXRhc2V0LnBlZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIFRyeSB0byBhZGQgY29udHJvbHMgdW50aWwgc3VjY2Vzc2Z1bC4gTmVlZGVkIGZvciBwYWdlIHJlZnJlc2guXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcnlUb0luaXRJbnRlcnZhbCgpIHtcclxuICAgIGNvbnN0IGNvbnRyb2xzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoIXRyeVRvSW5pdENvbnRyb2xzKGNvbnRyb2xzSW50ZXJ2YWwpKXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb250cm9sc0ludGVydmFsKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSwgMjAwKVxyXG4gICAgcmV0dXJuIGNvbnRyb2xzSW50ZXJ2YWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gbWVzc2FnZSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5mdW5jdGlvbiBhZGRDb250cm9sQnV0dG9uKG1lc3NhZ2UsIGNoYXRCb2R5KSB7XHJcbiAgICBjb25zdCBhY3Rpb25zQXJlYSA9IG1lc3NhZ2UuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImltLW1lc3MtLWFjdGlvbnNcIilbMF07XHJcbiAgICBpZiAoYWN0aW9uc0FyZWEgJiYgYWN0aW9uc0FyZWEubGFzdENoaWxkLmNsYXNzTmFtZSAhPT0gXCJtdXRlX21lc3NhZ2VcIikge1xyXG4gICAgICAgIGNvbnN0IHNlbmRlcklkID0gbWVzc2FnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFtcImRhdGFzZXRcIl0ucGVlcjtcclxuICAgICAgICBjb25zdCBtdXRlQnRuID0gYWRkTXV0ZUJ1dHRvbihhY3Rpb25zQXJlYSwgc2VuZGVySWQpO1xyXG4gICAgICAgIGFkZEFjdGlvbkFyZWFFdmVudHMoYWN0aW9uc0FyZWEpO1xyXG4gICAgICAgIG11dGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldElkVG9IaWRlSGFuZGxlKGNoYXRCb2R5KSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRyeVRvSW5pdENvbnRyb2xzKCkge1xyXG4gICAgbGV0IHN0YXR1cyA9IHRydWU7XHJcbiAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XHJcbiAgICBpZighY2hhdEJvZHkpIHJldHVybiBmYWxzZTtcclxuICAgIGZvciAobGV0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pIHtcclxuICAgICAgICBpZiAoaXRlbS5jbGFzc05hbWUuaW5jbHVkZXMoJ2ltLW1lc3Mtc3RhY2sgX2ltX21lc3Nfc3RhY2snKSkge1xyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZXMgPSBpdGVtLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltLW1lc3MgX2ltX21lc3MnKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gYWRkQ29udHJvbEJ1dHRvbihtZXNzYWdlLCBjaGF0Qm9keSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0dXM7XHJcbn0iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZG9tLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJpbXBvcnQge2dldENoYXRCb2R5fSBmcm9tIFwiLi4vdXRpbHMvZ2V0Q2hhdEJvZHlcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IGNoYXRCb2R5ID0gZ2V0Q2hhdEJvZHkoKTtcclxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZHNUb0hpZGUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgbGV0IGlkc1RvSGlkZSA9IGRhdGEuaWRzVG9IaWRlO1xyXG4gICAgICAgIGNoYXRCb2R5LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTU5vZGVJbnNlcnRlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIG5ld01lc3NhZ2VIYW5kbGVyKGV2ZW50LnRhcmdldCwgaWRzVG9IaWRlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5ld01lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpIHtcclxuICAgIGlmIChtZXNzYWdlLmNsYXNzTmFtZSA9PT0gJ2ltLW1lc3Mtc3RhY2sgX2ltX21lc3Nfc3RhY2sgJykge1xyXG4gICAgICAgIGxldCBpZHNUb0hpZGU7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lkc1RvSGlkZScsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWRzVG9IaWRlID0gZGF0YS5pZHNUb0hpZGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpc0V4dGVuc2lvbk9uJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5pc0V4dGVuc2lvbk9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaWRzVG9IaWRlLmluY2x1ZGVzKG1lc3NhZ2UuZGF0YXNldC5wZWVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgJy4vZG9tLmNzcydcclxuaW1wb3J0IHtjcmVhdGVUcnlUb0luaXRJbnRlcnZhbCwgaGlkZUV4aXN0aW5nTWVzc2FnZXMsIHRyeVRvSW5pdENvbnRyb2xzfSBmcm9tIFwiLi9jb250cm9sc1wiO1xyXG5pbXBvcnQge1VybENvbnRyb2xsZXJ9IGZyb20gXCIuLi91dGlscy9VcmxcIjtcclxuaW1wb3J0IHthZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4vaGlkZV9lbGVtZW50XCI7XHJcblxyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY29uc3QgdXJsID0gbmV3IFVybENvbnRyb2xsZXIoKTtcclxuICAgIHVybC5vbkNoYW5nZSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRyeVRvSW5pdENvbnRyb2xzKCkpIHtcclxuICAgICAgICAgICAgY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwoKTtcclxuICAgICAgICAgICAgYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIoKTtcclxuICAgICAgICAgICAgaGlkZUV4aXN0aW5nTWVzc2FnZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5pbml0KCk7IiwiY29uc3QgSU5URVJWQUxfVElNRSA9IDEwMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBVcmxDb250cm9sbGVyIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoY2IpIHtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMucHVzaChjYik7XHJcbiAgICAgICAgaWYgKHRoaXMuX2ludGVydmFsID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUludGVydmFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoY2IpIHtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMgPSB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGl0ZW09Pml0ZW0gIT09IGNiKTtcclxuICAgICAgICBpZih0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2ludGVydmFsVGljaygpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRVcmwgIT09IHRoaXMudXJsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jyb2FkY2FzdCh0aGlzLnVybCwgY3VycmVudFVybCk7XHJcbiAgICAgICAgICAgIHRoaXMudXJsID0gY3VycmVudFVybDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIF9icm9hZGNhc3Qob2xkVXJsLCBuZXdVcmwpIHtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChjYiA9PiBjYihvbGRVcmwsIG5ld1VybCkpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jcmVhdGVJbnRlcnZhbCgpIHtcclxuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5faW50ZXJ2YWxUaWNrKCksIElOVEVSVkFMX1RJTUUpXHJcbiAgICB9XHJcblxyXG4gICAgX2NsZWFySW50ZXJ2YWwoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdldENoYXRCb2R5KCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJfaW1fcGVlcl9oaXN0b3J5IGltLXBhZ2UtY2hhdC1jb250YWluXCIpWzBdO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==