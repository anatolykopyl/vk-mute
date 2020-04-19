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
exports.push([module.i, ".mute_message .mutetooltip {\n    visibility: hidden;\n    width: 120px;\n    background-color: #555;\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    \n    /* Position the tooltip text */\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -60px;\n    \n    /* Fade in tooltip */\n    opacity: 0;\n    transition: opacity 0.3s;\n}\n\n/* Tooltip arrow */\n.mute_message .mutetooltip::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.mute_message:hover .mutetooltip {\n    visibility: visible;\n    opacity: 1;\n}\n\n.mute_message {\n    width: 16px;\n    height: 16px;\n    position: relative; \n    display: inline-block;\n    vertical-align: top;\n    /*background: url('chrome-extension://__MSG_@@extension_id__/mute.png') !important;*/\n    background-repeat: no-repeat;\n    padding: 6px;\n}", ""]);
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
/*! exports provided: addControls, hideExistingMessages, createTryToInitInterval, tryToInitControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addControls", function() { return addControls; });
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


function addControls(chatBody) {
  return function (event) {
    if (event.target.className === 'im-mess--check fl_l') {
      var message = event.target.parentElement;
      addControlButton(message, chatBody);
    }
  };
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

    chrome.storage.sync.set({
      idToHide: clickedId
    }, function () {
      hideExistingMessages(clickedId);
      console.log('idToHide: ' + clickedId);
    });
  };
}

function hideExistingMessages(id) {
  var chatBody = Object(_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__["getChatBody"])();

  var _iterator = _createForOfIteratorHelper(chatBody.children),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (item.dataset.peer === id) {
        item.style.display = "none";
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
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
        var messages = item.children[1].children[1].getElementsByClassName('im-mess im_in _im_mess');

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
  chrome.storage.sync.get('idToHide', function (data) {
    var idToHide = data.idToHide;
    chatBody.addEventListener('DOMNodeInserted', function (event) {
      newMessageHandler(event.target, idToHide);
    });
  });
}

function newMessageHandler(message, idToHide) {
  if (message.className === 'im-mess-stack _im_mess_stack ') {
    chrome.storage.sync.get('idToHide', function (data) {
      idToHide = data.idToHide;
    });
    chrome.storage.sync.get('isExtensionOn', function (data) {
      if (data.isExtensionOn) {
        if (message.dataset.peer === idToHide) {
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
  url.onChange(function (oldUrl, newUrl) {
    // chrome.storage.sync.get('idToHide', function (data) {
    //     let idToHide = data.idToHide;
    //     hideExistingMessages(idToHide)
    // });
    if (Object(_controls__WEBPACK_IMPORTED_MODULE_1__["tryToInitControls"])()) {
      Object(_controls__WEBPACK_IMPORTED_MODULE_1__["createTryToInitInterval"])();
      Object(_hide_element__WEBPACK_IMPORTED_MODULE_3__["addNewMessageEventListener"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzPzliNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9oaWRlX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9VcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldENoYXRCb2R5LmpzIl0sIm5hbWVzIjpbIm11dGVCdG5IVE1MIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWRkQ29udHJvbHMiLCJjaGF0Qm9keSIsImV2ZW50IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwibWVzc2FnZSIsInBhcmVudEVsZW1lbnQiLCJhZGRDb250cm9sQnV0dG9uIiwiYWRkTXV0ZUJ1dHRvbiIsImFjdGlvbkFyZWEiLCJzZW5kZXJJZCIsIm11dGVCdXR0b24iLCJhcHBlbmRDaGlsZCIsInN0eWxlIiwiZGlzcGxheSIsImFkZEFjdGlvbkFyZWFFdmVudHMiLCJhY3Rpb25zQXJlYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2V0SWRUb0hpZGVIYW5kbGUiLCJjbGlja2VkSWQiLCJzdWJzdHIiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsInNldCIsImlkVG9IaWRlIiwiaGlkZUV4aXN0aW5nTWVzc2FnZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hhdEJvZHkiLCJjaGlsZHJlbiIsIml0ZW0iLCJkYXRhc2V0IiwicGVlciIsImNyZWF0ZVRyeVRvSW5pdEludGVydmFsIiwiY29udHJvbHNJbnRlcnZhbCIsInNldEludGVydmFsIiwidHJ5VG9Jbml0Q29udHJvbHMiLCJjbGVhckludGVydmFsIiwibGFzdENoaWxkIiwibXV0ZUJ0biIsInN0YXR1cyIsImluY2x1ZGVzIiwibWVzc2FnZXMiLCJhZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lciIsImdldCIsImRhdGEiLCJuZXdNZXNzYWdlSGFuZGxlciIsImlzRXh0ZW5zaW9uT24iLCJpbml0IiwidXJsIiwiVXJsQ29udHJvbGxlciIsIm9uQ2hhbmdlIiwib2xkVXJsIiwibmV3VXJsIiwiSU5URVJWQUxfVElNRSIsIl9jaGFuZ2VMaXN0ZW5lcnMiLCJfaW50ZXJ2YWwiLCJfdXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2IiLCJwdXNoIiwiX2NyZWF0ZUludGVydmFsIiwiZmlsdGVyIiwibGVuZ3RoIiwiX2NsZWFySW50ZXJ2YWwiLCJjdXJyZW50VXJsIiwiX2Jyb2FkY2FzdCIsImZvckVhY2giLCJpbnRlcnZhbCIsIl9pbnRlcnZhbFRpY2siXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUs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LE9BQWpDLENBQXhCOztBQUNBLFVBQUcsS0FBS04sZ0JBQUwsQ0FBc0JVLE1BQXRCLEtBQWlDLENBQXBDLEVBQXVDO0FBQ25DLGFBQUtDLGNBQUw7QUFDSDtBQUNKO0FBcEJMO0FBQUE7QUFBQSxvQ0FzQm9CO0FBQ1osVUFBTUMsVUFBVSxHQUFHVCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQW5DOztBQUNBLFVBQUlPLFVBQVUsS0FBSyxLQUFLbEIsR0FBeEIsRUFBNkI7QUFDekIsYUFBS21CLFVBQUwsQ0FBZ0IsS0FBS25CLEdBQXJCLEVBQTBCa0IsVUFBMUI7O0FBQ0EsYUFBS2xCLEdBQUwsR0FBV2tCLFVBQVg7QUFDSDtBQUVKO0FBN0JMO0FBQUE7QUFBQSwrQkErQmVmLE1BL0JmLEVBK0J1QkMsTUEvQnZCLEVBK0IrQjtBQUN2QixXQUFLRSxnQkFBTCxDQUFzQmMsT0FBdEIsQ0FBOEIsVUFBQVIsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQ1QsTUFBRCxFQUFTQyxNQUFULENBQU47QUFBQSxPQUFoQztBQUNIO0FBakNMO0FBQUE7QUFBQSxzQ0FtQ3NCO0FBQUE7O0FBQ2QsV0FBS2lCLFFBQUwsR0FBZ0JuQyxXQUFXLENBQUM7QUFBQSxlQUFNLEtBQUksQ0FBQ29DLGFBQUwsRUFBTjtBQUFBLE9BQUQsRUFBNkJqQixhQUE3QixDQUEzQjtBQUNIO0FBckNMO0FBQUE7QUFBQSxxQ0F1Q3FCO0FBQ2JqQixtQkFBYSxDQUFDLEtBQUtpQyxRQUFOLENBQWI7QUFDQSxXQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUExQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQU8sU0FBUzFDLFdBQVQsR0FBdUI7QUFDMUIsU0FBT2xDLFFBQVEsQ0FBQ3NCLHNCQUFULENBQWdDLHVDQUFoQyxFQUF5RSxDQUF6RSxDQUFQO0FBQ0gsQyIsImZpbGUiOiJkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kb20vbWFpbi5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubXV0ZV9tZXNzYWdlIC5tdXRldG9vbHRpcCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBcXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvdHRvbTogMTI1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICAgIFxcbiAgICAvKiBGYWRlIGluIHRvb2x0aXAgKi9cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbn1cXG5cXG4vKiBUb29sdGlwIGFycm93ICovXFxuLm11dGVfbWVzc2FnZSAubXV0ZXRvb2x0aXA6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBTaG93IHRoZSB0b29sdGlwIHRleHQgd2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgdG9vbHRpcCBjb250YWluZXIgKi9cXG4ubXV0ZV9tZXNzYWdlOmhvdmVyIC5tdXRldG9vbHRpcCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tdXRlX21lc3NhZ2Uge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIC8qYmFja2dyb3VuZDogdXJsKCdjaHJvbWUtZXh0ZW5zaW9uOi8vX19NU0dfQEBleHRlbnNpb25faWRfXy9tdXRlLnBuZycpICFpbXBvcnRhbnQ7Ki9cXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyoqXG4gKlxuICogQHBhcmFtIGlkIHtTdHJpbmd9XG4gKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9XG4gKi9cbmltcG9ydCB7Z2V0Q2hhdEJvZHl9IGZyb20gXCIuLi91dGlscy9nZXRDaGF0Qm9keVwiO1xuXG5mdW5jdGlvbiBtdXRlQnRuSFRNTChpZCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ211dGVfbWVzc2FnZScpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGBtdXRlJHtpZH1gKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAg8J+Uh1xuICAgICAgICA8c3BhbiBjbGFzcz1cIm11dGV0b29sdGlwXCI+0JfQsNCz0LvRg9GI0LjRgtGMPC9zcGFuPlxuICAgIGA7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBjaGF0Qm9keSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtmdW5jdGlvbiguLi5bKl09KX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbnRyb2xzKGNoYXRCb2R5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ltLW1lc3MtLWNoZWNrIGZsX2wnKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBhZGRDb250cm9sQnV0dG9uKG1lc3NhZ2UsIGNoYXRCb2R5KVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBtdXRlIGJ1dHRvbiBhbmQgaW5zZXQgaXQgdG8gdGhlIGFjdGlvbkFyZWFcbiAqIEBwYXJhbSBhY3Rpb25BcmVhIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBzZW5kZXJJZCB7U3RyaW5nfVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGFkZE11dGVCdXR0b24oYWN0aW9uQXJlYSwgc2VuZGVySWQpIHtcbiAgICBjb25zdCBtdXRlQnV0dG9uID0gbXV0ZUJ0bkhUTUwoc2VuZGVySWQpO1xuICAgIGFjdGlvbkFyZWEuYXBwZW5kQ2hpbGQobXV0ZUJ1dHRvbik7XG4gICAgbXV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcmV0dXJuIG11dGVCdXR0b247XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYWN0aW9uQXJlYVxuICogQHBhcmFtIGFjdGlvbnNBcmVhIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gYWRkQWN0aW9uQXJlYUV2ZW50cyhhY3Rpb25zQXJlYSkge1xuICAgIGFjdGlvbnNBcmVhLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXV0ZV9tZXNzYWdlXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgYWN0aW9uc0FyZWEucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtdXRlX21lc3NhZ2VcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gY2hhdEJvZHkge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7ZnVuY3Rpb24oLi4uW109KX1cbiAqL1xuZnVuY3Rpb24gc2V0SWRUb0hpZGVIYW5kbGUoY2hhdEJvZHkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRJZCA9IGV2ZW50LnRhcmdldC5pZC5zdWJzdHIoNCk7ICAgICAvLyBnZXQgaWQgb2Ygc2VuZGVyIGZyb20gZWxlbWVudCBpZFxuXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtpZFRvSGlkZTogY2xpY2tlZElkfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGlkZUV4aXN0aW5nTWVzc2FnZXMoY2xpY2tlZElkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZFRvSGlkZTogJyArIGNsaWNrZWRJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVFeGlzdGluZ01lc3NhZ2VzKGlkKSB7XG4gICAgY29uc3QgY2hhdEJvZHkgPSBnZXRDaGF0Qm9keSgpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC5wZWVyID09PSBpZCkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFRyeSB0byBhZGQgY29udHJvbHMgdW50aWwgc3VjY2Vzc2Z1bC4gTmVlZGVkIGZvciBwYWdlIHJlZnJlc2guXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgY29udHJvbHNJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoIXRyeVRvSW5pdENvbnRyb2xzKGNvbnRyb2xzSW50ZXJ2YWwpKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY29udHJvbHNJbnRlcnZhbCk7XG5cbiAgICAgICAgfVxuICAgIH0sIDIwMClcbiAgICByZXR1cm4gY29udHJvbHNJbnRlcnZhbDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG1lc3NhZ2Uge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBhZGRDb250cm9sQnV0dG9uKG1lc3NhZ2UsIGNoYXRCb2R5KSB7XG4gICAgY29uc3QgYWN0aW9uc0FyZWEgPSBtZXNzYWdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbS1tZXNzLS1hY3Rpb25zXCIpWzBdO1xuICAgIGlmIChhY3Rpb25zQXJlYSAmJiBhY3Rpb25zQXJlYS5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9PSBcIm11dGVfbWVzc2FnZVwiKSB7XG4gICAgICAgIGNvbnN0IHNlbmRlcklkID0gbWVzc2FnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFtcImRhdGFzZXRcIl0ucGVlcjtcbiAgICAgICAgY29uc3QgbXV0ZUJ0biA9IGFkZE11dGVCdXR0b24oYWN0aW9uc0FyZWEsIHNlbmRlcklkKTtcbiAgICAgICAgYWRkQWN0aW9uQXJlYUV2ZW50cyhhY3Rpb25zQXJlYSk7XG4gICAgICAgIG11dGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldElkVG9IaWRlSGFuZGxlKGNoYXRCb2R5KSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnlUb0luaXRDb250cm9scygpIHtcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcbiAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XG4gICAgaWYoIWNoYXRCb2R5KSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBjaGF0Qm9keS5jaGlsZHJlbikge1xuICAgICAgICBpZiAoaXRlbS5jbGFzc05hbWUuaW5jbHVkZXMoJ2ltLW1lc3Mtc3RhY2sgX2ltX21lc3Nfc3RhY2snKSkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VzID0gaXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbS1tZXNzIGltX2luIF9pbV9tZXNzJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gYWRkQ29udHJvbEJ1dHRvbihtZXNzYWdlLCBjaGF0Qm9keSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kb20uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7Z2V0Q2hhdEJvZHl9IGZyb20gXCIuLi91dGlscy9nZXRDaGF0Qm9keVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld01lc3NhZ2VFdmVudExpc3RlbmVyKCkge1xyXG4gICAgY29uc3QgY2hhdEJvZHkgPSBnZXRDaGF0Qm9keSgpO1xyXG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lkVG9IaWRlJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGxldCBpZFRvSGlkZSA9IGRhdGEuaWRUb0hpZGU7XHJcbiAgICAgICAgY2hhdEJvZHkuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgbmV3TWVzc2FnZUhhbmRsZXIoZXZlbnQudGFyZ2V0LCBpZFRvSGlkZSlcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdNZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBpZFRvSGlkZSkge1xyXG4gICAgaWYgKG1lc3NhZ2UuY2xhc3NOYW1lID09PSAnaW0tbWVzcy1zdGFjayBfaW1fbWVzc19zdGFjayAnKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lkVG9IaWRlJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZFRvSGlkZSA9IGRhdGEuaWRUb0hpZGU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpc0V4dGVuc2lvbk9uJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5pc0V4dGVuc2lvbk9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhc2V0LnBlZXIgPT09IGlkVG9IaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgJy4vZG9tLmNzcydcbmltcG9ydCB7Y3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwsIGhpZGVFeGlzdGluZ01lc3NhZ2VzLCB0cnlUb0luaXRDb250cm9sc30gZnJvbSBcIi4vY29udHJvbHNcIjtcbmltcG9ydCB7VXJsQ29udHJvbGxlcn0gZnJvbSBcIi4uL3V0aWxzL1VybFwiO1xuaW1wb3J0IHthZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4vaGlkZV9lbGVtZW50XCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVybENvbnRyb2xsZXIoKTtcbiAgICB1cmwub25DaGFuZ2UoKG9sZFVybCwgbmV3VXJsKSA9PiB7XG4gICAgICAgIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZFRvSGlkZScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vICAgICBsZXQgaWRUb0hpZGUgPSBkYXRhLmlkVG9IaWRlO1xuICAgICAgICAvLyAgICAgaGlkZUV4aXN0aW5nTWVzc2FnZXMoaWRUb0hpZGUpXG4gICAgICAgIC8vIH0pO1xuICAgICAgICBpZiAodHJ5VG9Jbml0Q29udHJvbHMoKSkge1xuICAgICAgICAgICAgY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIGFkZE5ld01lc3NhZ2VFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pbml0KCk7IiwiY29uc3QgSU5URVJWQUxfVElNRSA9IDEwMDtcblxuZXhwb3J0IGNsYXNzIFVybENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3VybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKGNiKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycy5wdXNoKGNiKTtcbiAgICAgICAgaWYgKHRoaXMuX2ludGVydmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVJbnRlcnZhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihjYikge1xuICAgICAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMgPSB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGl0ZW09Pml0ZW0gIT09IGNiKTtcbiAgICAgICAgaWYodGhpcy5fY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ludGVydmFsVGljaygpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBpZiAoY3VycmVudFVybCAhPT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jyb2FkY2FzdCh0aGlzLnVybCwgY3VycmVudFVybCk7XG4gICAgICAgICAgICB0aGlzLnVybCA9IGN1cnJlbnRVcmw7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIF9icm9hZGNhc3Qob2xkVXJsLCBuZXdVcmwpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goY2IgPT4gY2Iob2xkVXJsLCBuZXdVcmwpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlSW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9pbnRlcnZhbFRpY2soKSwgSU5URVJWQUxfVElNRSlcbiAgICB9XG5cbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgICAgICB0aGlzLmludGVydmFsID0gbnVsbFxuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRDaGF0Qm9keSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIl9pbV9wZWVyX2hpc3RvcnkgaW0tcGFnZS1jaGF0LWNvbnRhaW5cIilbMF07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==