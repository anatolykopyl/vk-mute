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
exports.push([module.i, ".mute_message .mutetooltip {\r\n    visibility: hidden;\r\n    width: 120px;\r\n    background-color: #555;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 5px 0;\r\n    border-radius: 6px;\r\n    \r\n    /* Position the tooltip text */\r\n    position: absolute;\r\n    z-index: 1;\r\n    bottom: 110%;\r\n    margin-left: -53px;\r\n    \r\n    /* Fade in tooltip */\r\n    opacity: 0;\r\n    transition: opacity 0.3s;\r\n}\r\n\r\n/* Tooltip arrow */\r\n.mute_message .mutetooltip::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 50%;\r\n    margin-left: -5px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: #555 transparent transparent transparent;\r\n}\r\n\r\n/* Show the tooltip text when you mouse over the tooltip container */\r\n.mute_message:hover .mutetooltip {\r\n    visibility: visible;\r\n    opacity: 1;\r\n}\r\n\r\n.mute_message {\r\n    margin-top: .46rem;\r\n    margin-left: 4px;\r\n    margin-right: 3px;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    width: 12px;\r\n    height: 12px;\r\n    background-size: contain !important;\r\n}\r\n\r\n.im-mess--actions {\r\n    margin-right: -30px !important;\r\n}", ""]);
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
  element.style.background = "url(".concat(chrome.runtime.getURL("assets/mute.png"), ") center no-repeat");
  element.innerHTML = '<span class="mutetooltip">Заглушить</span>';
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
          hideExistingMessages();
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
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/dom/controls.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzPzliNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9oaWRlX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9VcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldENoYXRCb2R5LmpzIl0sIm5hbWVzIjpbIm11dGVCdG5IVE1MIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiY2hyb21lIiwicnVudGltZSIsImdldFVSTCIsImlubmVySFRNTCIsInRyeVRvQWRkQ29udHJvbHMiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJtZXNzYWdlIiwicGFyZW50RWxlbWVudCIsImFkZENvbnRyb2xCdXR0b24iLCJhZGRNdXRlQnV0dG9uIiwiYWN0aW9uQXJlYSIsInNlbmRlcklkIiwibXV0ZUJ1dHRvbiIsImFwcGVuZENoaWxkIiwiZGlzcGxheSIsImFkZEFjdGlvbkFyZWFFdmVudHMiLCJhY3Rpb25zQXJlYSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZXRJZFRvSGlkZUhhbmRsZSIsImNsaWNrZWRJZCIsInN1YnN0ciIsImNsaWNrZWROYW1lIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiLCJzdG9yYWdlIiwic3luYyIsImdldCIsImRhdGEiLCJpZHNUb0hpZGUiLCJmaWx0ZXIiLCJ1c2VyIiwibGVuZ3RoIiwicHVzaCIsIm5hbWUiLCJzZXQiLCJoaWRlRXhpc3RpbmdNZXNzYWdlcyIsImNoYXRCb2R5IiwiZ2V0Q2hhdEJvZHkiLCJpdGVtIiwiZGF0YXNldCIsInBlZXIiLCJjcmVhdGVUcnlUb0luaXRJbnRlcnZhbCIsImNvbnRyb2xzSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInRyeVRvSW5pdENvbnRyb2xzIiwiY2xlYXJJbnRlcnZhbCIsImxhc3RDaGlsZCIsIm11dGVCdG4iLCJzdGF0dXMiLCJpbmNsdWRlcyIsIm1lc3NhZ2VzIiwiYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIiLCJuZXdNZXNzYWdlSGFuZGxlciIsImlzRXh0ZW5zaW9uT24iLCJpbml0IiwidXJsIiwiVXJsQ29udHJvbGxlciIsIm9uQ2hhbmdlIiwiSU5URVJWQUxfVElNRSIsIl9jaGFuZ2VMaXN0ZW5lcnMiLCJfaW50ZXJ2YWwiLCJfdXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2IiLCJfY3JlYXRlSW50ZXJ2YWwiLCJfY2xlYXJJbnRlcnZhbCIsImN1cnJlbnRVcmwiLCJfYnJvYWRjYXN0Iiwib2xkVXJsIiwibmV3VXJsIiwiZm9yRWFjaCIsImludGVydmFsIiwiX2ludGVydmFsVGljayJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFD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Q0FBZ0IsS0FBS2QsR0FBckIsRUFBMEJhLFVBQTFCOztBQUNBLGFBQUtiLEdBQUwsR0FBV2EsVUFBWDtBQUNIO0FBRUo7QUE3Qkw7QUFBQTtBQUFBLCtCQStCZUUsTUEvQmYsRUErQnVCQyxNQS9CdkIsRUErQitCO0FBQ3ZCLFdBQUtaLGdCQUFMLENBQXNCYSxPQUF0QixDQUE4QixVQUFBUCxFQUFFO0FBQUEsZUFBSUEsRUFBRSxDQUFDSyxNQUFELEVBQVNDLE1BQVQsQ0FBTjtBQUFBLE9BQWhDO0FBQ0g7QUFqQ0w7QUFBQTtBQUFBLHNDQW1Dc0I7QUFBQTs7QUFDZCxXQUFLRSxRQUFMLEdBQWdCOUIsV0FBVyxDQUFDO0FBQUEsZUFBTSxLQUFJLENBQUMrQixhQUFMLEVBQU47QUFBQSxPQUFELEVBQTZCaEIsYUFBN0IsQ0FBM0I7QUFDSDtBQXJDTDtBQUFBO0FBQUEscUNBdUNxQjtBQUNiYixtQkFBYSxDQUFDLEtBQUs0QixRQUFOLENBQWI7QUFDQSxXQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUExQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQU8sU0FBU3BDLFdBQVQsR0FBdUI7QUFDMUIsU0FBTzdDLFFBQVEsQ0FBQ3lCLHNCQUFULENBQWdDLHVDQUFoQyxFQUF5RSxDQUF6RSxDQUFQO0FBQ0gsQyIsImZpbGUiOiJkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kb20vbWFpbi5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubXV0ZV9tZXNzYWdlIC5tdXRldG9vbHRpcCB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICBcXHJcXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJvdHRvbTogMTEwJTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IC01M3B4O1xcclxcbiAgICBcXHJcXG4gICAgLyogRmFkZSBpbiB0b29sdGlwICovXFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLyogVG9vbHRpcCBhcnJvdyAqL1xcclxcbi5tdXRlX21lc3NhZ2UgLm11dGV0b29sdGlwOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiA1cHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzU1NSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2hvdyB0aGUgdG9vbHRpcCB0ZXh0IHdoZW4geW91IG1vdXNlIG92ZXIgdGhlIHRvb2x0aXAgY29udGFpbmVyICovXFxyXFxuLm11dGVfbWVzc2FnZTpob3ZlciAubXV0ZXRvb2x0aXAge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubXV0ZV9tZXNzYWdlIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLjQ2cmVtO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgICB3aWR0aDogMTJweDtcXHJcXG4gICAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLmltLW1lc3MtLWFjdGlvbnMge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IC0zMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvKipcclxuICpcclxuICogQHBhcmFtIGlkIHtTdHJpbmd9XHJcbiAqIEByZXR1cm4ge0hUTUxTcGFuRWxlbWVudH1cclxuICovXHJcbmltcG9ydCB7Z2V0Q2hhdEJvZHl9IGZyb20gXCIuLi91dGlscy9nZXRDaGF0Qm9keVwiO1xyXG5cclxuZnVuY3Rpb24gbXV0ZUJ0bkhUTUwoaWQpIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbXV0ZV9tZXNzYWdlJyk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgbXV0ZSR7aWR9YCk7XHJcbiAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7Y2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwiYXNzZXRzL211dGUucG5nXCIpfSkgY2VudGVyIG5vLXJlcGVhdGA7XHJcbiAgICBlbGVtZW50LmlubmVySFRNTCA9JzxzcGFuIGNsYXNzPVwibXV0ZXRvb2x0aXBcIj7Ql9Cw0LPQu9GD0YjQuNGC0Yw8L3NwYW4+JztcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJ5VG9BZGRDb250cm9scyh0YXJnZXQpIHtcclxuICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnaW0tbWVzcy0tY2hlY2sgZmxfbCcpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgYWRkQ29udHJvbEJ1dHRvbihtZXNzYWdlKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlIG11dGUgYnV0dG9uIGFuZCBpbnNldCBpdCB0byB0aGUgYWN0aW9uQXJlYVxyXG4gKiBAcGFyYW0gYWN0aW9uQXJlYSB7SFRNTEVsZW1lbnR9XHJcbiAqIEBwYXJhbSBzZW5kZXJJZCB7U3RyaW5nfVxyXG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGFkZE11dGVCdXR0b24oYWN0aW9uQXJlYSwgc2VuZGVySWQpIHtcclxuICAgIGNvbnN0IG11dGVCdXR0b24gPSBtdXRlQnRuSFRNTChzZW5kZXJJZCk7XHJcbiAgICBhY3Rpb25BcmVhLmFwcGVuZENoaWxkKG11dGVCdXR0b24pO1xyXG4gICAgbXV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICByZXR1cm4gbXV0ZUJ1dHRvbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGFjdGlvbkFyZWFcclxuICogQHBhcmFtIGFjdGlvbnNBcmVhIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGFkZEFjdGlvbkFyZWFFdmVudHMoYWN0aW9uc0FyZWEpIHtcclxuICAgIGFjdGlvbnNBcmVhLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtdXRlX21lc3NhZ2VcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBhY3Rpb25zQXJlYS5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXV0ZV9tZXNzYWdlXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHJldHVybiB7ZnVuY3Rpb24oLi4uW109KX1cclxuICovXHJcbmZ1bmN0aW9uIHNldElkVG9IaWRlSGFuZGxlKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRJZCA9IGV2ZW50LnRhcmdldC5pZC5zdWJzdHIoNCk7ICAgICAvLyBnZXQgaWQgb2Ygc2VuZGVyIGZyb20gZWxlbWVudCBpZFxyXG4gICAgICAgIGxldCBjbGlja2VkTmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGNsaWNrZWROYW1lID0gY2xpY2tlZE5hbWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xyXG5cclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaWRzVG9IaWRlJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgaWRzVG9IaWRlID0gZGF0YS5pZHNUb0hpZGUgfHwgW107XHJcbiAgICAgICAgICAgIGlmIChpZHNUb0hpZGUuZmlsdGVyKHVzZXIgPT4gdXNlci5pZCA9PSBjbGlja2VkSWQpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWRzVG9IaWRlLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjbGlja2VkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY2xpY2tlZE5hbWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoe2lkc1RvSGlkZTogaWRzVG9IaWRlfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGlkZUV4aXN0aW5nTWVzc2FnZXMoKSB7XHJcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaWRzVG9IaWRlJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGNoYXRCb2R5ID0gZ2V0Q2hhdEJvZHkoKTtcclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNoYXRCb2R5LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmlkc1RvSGlkZS5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09IGl0ZW0uZGF0YXNldC5wZWVyKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8vIFRyeSB0byBhZGQgY29udHJvbHMgdW50aWwgc3VjY2Vzc2Z1bC4gTmVlZGVkIGZvciBwYWdlIHJlZnJlc2guXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcnlUb0luaXRJbnRlcnZhbCgpIHtcclxuICAgIGNvbnN0IGNvbnRyb2xzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYoIXRyeVRvSW5pdENvbnRyb2xzKGNvbnRyb2xzSW50ZXJ2YWwpKXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChjb250cm9sc0ludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9LCAyMDApXHJcbiAgICByZXR1cm4gY29udHJvbHNJbnRlcnZhbDtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdlIHtIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIGFkZENvbnRyb2xCdXR0b24obWVzc2FnZSkge1xyXG4gICAgY29uc3QgYWN0aW9uc0FyZWEgPSBtZXNzYWdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbS1tZXNzLS1hY3Rpb25zXCIpWzBdO1xyXG4gICAgaWYgKGFjdGlvbnNBcmVhICYmIGFjdGlvbnNBcmVhLmxhc3RDaGlsZC5jbGFzc05hbWUgIT09IFwibXV0ZV9tZXNzYWdlXCIpIHtcclxuICAgICAgICBjb25zdCBzZW5kZXJJZCA9IG1lc3NhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRbXCJkYXRhc2V0XCJdLnBlZXI7XHJcbiAgICAgICAgY29uc3QgbXV0ZUJ0biA9IGFkZE11dGVCdXR0b24oYWN0aW9uc0FyZWEsIHNlbmRlcklkKTtcclxuICAgICAgICBhZGRBY3Rpb25BcmVhRXZlbnRzKGFjdGlvbnNBcmVhKTtcclxuICAgICAgICBtdXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZXRJZFRvSGlkZUhhbmRsZSgpKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdHJ5VG9Jbml0Q29udHJvbHMoKSB7XHJcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcclxuICAgIGNvbnN0IGNoYXRCb2R5ID0gZ2V0Q2hhdEJvZHkoKTtcclxuICAgIGlmKCFjaGF0Qm9keSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgZm9yIChsZXQgaXRlbSBvZiBjaGF0Qm9keS5jaGlsZHJlbikge1xyXG4gICAgICAgIGlmIChpdGVtLmNsYXNzTmFtZS5pbmNsdWRlcygnaW0tbWVzcy1zdGFjayBfaW1fbWVzc19zdGFjaycpKSB7XHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlcyA9IGl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW0tbWVzcyBfaW1fbWVzcycpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXMgPSBhZGRDb250cm9sQnV0dG9uKG1lc3NhZ2UsIGNoYXRCb2R5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXR1cztcclxufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kb20uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7Z2V0Q2hhdEJvZHl9IGZyb20gXCIuLi91dGlscy9nZXRDaGF0Qm9keVwiO1xyXG5pbXBvcnQge3RyeVRvQWRkQ29udHJvbHN9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIoKSB7XHJcbiAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XHJcbiAgICBjaGF0Qm9keS5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIG5ld01lc3NhZ2VIYW5kbGVyKGV2ZW50LnRhcmdldClcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXdNZXNzYWdlSGFuZGxlcihtZXNzYWdlKSB7XHJcbiAgICB0cnlUb0FkZENvbnRyb2xzKG1lc3NhZ2UpO1xyXG4gICAgaWYgKG1lc3NhZ2UuY2xhc3NOYW1lID09PSAnaW0tbWVzcy1zdGFjayBfaW1fbWVzc19zdGFjayAnKSB7XHJcbiAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lzRXh0ZW5zaW9uT24nLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmlzRXh0ZW5zaW9uT24pIHtcclxuICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZHNUb0hpZGUnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuaWRzVG9IaWRlLmZpbHRlcih1c2VyID0+IHVzZXIuaWQgPT0gbWVzc2FnZS5kYXRhc2V0LnBlZXIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCAnLi9kb20uY3NzJ1xyXG5pbXBvcnQge2NyZWF0ZVRyeVRvSW5pdEludGVydmFsLCBoaWRlRXhpc3RpbmdNZXNzYWdlcywgdHJ5VG9Jbml0Q29udHJvbHN9IGZyb20gXCIuL2NvbnRyb2xzXCI7XHJcbmltcG9ydCB7VXJsQ29udHJvbGxlcn0gZnJvbSBcIi4uL3V0aWxzL1VybFwiO1xyXG5pbXBvcnQge2FkZE5ld01lc3NhZ2VFdmVudExpc3RlbmVyfSBmcm9tIFwiLi9oaWRlX2VsZW1lbnRcIjtcclxuXHJcbmZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVXJsQ29udHJvbGxlcigpO1xyXG4gICAgdXJsLm9uQ2hhbmdlKCgpID0+IHtcclxuICAgICAgICBpZiAodHJ5VG9Jbml0Q29udHJvbHMoKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVUcnlUb0luaXRJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICBhZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICBoaWRlRXhpc3RpbmdNZXNzYWdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmluaXQoKTsiLCJjb25zdCBJTlRFUlZBTF9USU1FID0gMTAwO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVybENvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbDtcclxuICAgICAgICB0aGlzLl91cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShjYikge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycy5wdXNoKGNiKTtcclxuICAgICAgICBpZiAodGhpcy5faW50ZXJ2YWwgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlSW50ZXJ2YWwoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihjYikge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycyA9IHRoaXMuX2NoYW5nZUxpc3RlbmVycy5maWx0ZXIoaXRlbT0+aXRlbSAhPT0gY2IpO1xyXG4gICAgICAgIGlmKHRoaXMuX2NoYW5nZUxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfaW50ZXJ2YWxUaWNrKCkge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgICAgICBpZiAoY3VycmVudFVybCAhPT0gdGhpcy51cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5fYnJvYWRjYXN0KHRoaXMudXJsLCBjdXJyZW50VXJsKTtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSBjdXJyZW50VXJsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgX2Jyb2FkY2FzdChvbGRVcmwsIG5ld1VybCkge1xyXG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGNiID0+IGNiKG9sZFVybCwgbmV3VXJsKSk7XHJcbiAgICB9XHJcblxyXG4gICAgX2NyZWF0ZUludGVydmFsKCkge1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9pbnRlcnZhbFRpY2soKSwgSU5URVJWQUxfVElNRSlcclxuICAgIH1cclxuXHJcbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpXHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IG51bGxcclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q2hhdEJvZHkoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIl9pbV9wZWVyX2hpc3RvcnkgaW0tcGFnZS1jaGF0LWNvbnRhaW5cIilbMF07XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9