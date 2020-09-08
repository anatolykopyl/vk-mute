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
exports.push([module.i, ".mute_message .mutetooltip {\n    visibility: hidden;\n    width: 120px;\n    background-color: #555;\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n    \n    /* Position the tooltip text */\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -60px;\n    \n    /* Fade in tooltip */\n    opacity: 0;\n    transition: opacity 0.3s;\n}\n\n/* Tooltip arrow */\n.mute_message .mutetooltip::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.mute_message:hover .mutetooltip {\n    visibility: visible;\n    opacity: 1;\n}\n\n.mute_message {\n    width: 16px;\n    height: 16px;\n    position: relative; \n    display: inline-block;\n    vertical-align: top;\n    /*background: url('chrome-extension://__MSG_@@extension_id__/mute.png') !important;*/\n    background-repeat: no-repeat;\n    padding: 6px;\n}\n\n.im-mess--actions {\n    margin-right: -30px !important;\n}", ""]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9kb20uY3NzPzliNmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9oaWRlX2VsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9VcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2dldENoYXRCb2R5LmpzIl0sIm5hbWVzIjpbIm11dGVCdG5IVE1MIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwiYWRkQ29udHJvbHMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJtZXNzYWdlIiwicGFyZW50RWxlbWVudCIsImFkZENvbnRyb2xCdXR0b24iLCJhZGRNdXRlQnV0dG9uIiwiYWN0aW9uQXJlYSIsInNlbmRlcklkIiwibXV0ZUJ1dHRvbiIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkQWN0aW9uQXJlYUV2ZW50cyIsImFjdGlvbnNBcmVhIiwiYWRkRXZlbnRMaXN0ZW5lciIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzZXRJZFRvSGlkZUhhbmRsZSIsImNoYXRCb2R5IiwiY2xpY2tlZElkIiwic3Vic3RyIiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJzZXQiLCJpZFRvSGlkZSIsImhpZGVFeGlzdGluZ01lc3NhZ2VzIiwiZ2V0Q2hhdEJvZHkiLCJjaGlsZHJlbiIsIml0ZW0iLCJkYXRhc2V0IiwicGVlciIsImNyZWF0ZVRyeVRvSW5pdEludGVydmFsIiwiY29udHJvbHNJbnRlcnZhbCIsInNldEludGVydmFsIiwidHJ5VG9Jbml0Q29udHJvbHMiLCJjbGVhckludGVydmFsIiwibGFzdENoaWxkIiwibXV0ZUJ0biIsInN0YXR1cyIsImluY2x1ZGVzIiwibWVzc2FnZXMiLCJhZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lciIsImdldCIsImRhdGEiLCJuZXdNZXNzYWdlSGFuZGxlciIsImlzRXh0ZW5zaW9uT24iLCJpbml0IiwidXJsIiwiVXJsQ29udHJvbGxlciIsIm9uQ2hhbmdlIiwib2xkVXJsIiwibmV3VXJsIiwiSU5URVJWQUxfVElNRSIsIl9jaGFuZ2VMaXN0ZW5lcnMiLCJfaW50ZXJ2YWwiLCJfdXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2IiLCJwdXNoIiwiX2NyZWF0ZUludGVydmFsIiwiZmlsdGVyIiwibGVuZ3RoIiwiX2NsZWFySW50ZXJ2YWwiLCJjdXJyZW50VXJsIiwiX2Jyb2FkY2FzdCIsImZvckVhY2giLCJpbnRlcnZhbCIsIl9pbnRlcnZhbFRpY2siXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUs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LE9BQWpDLENBQXhCOztBQUNBLFVBQUcsS0FBS04sZ0JBQUwsQ0FBc0JVLE1BQXRCLEtBQWlDLENBQXBDLEVBQXVDO0FBQ25DLGFBQUtDLGNBQUw7QUFDSDtBQUNKO0FBcEJMO0FBQUE7QUFBQSxvQ0FzQm9CO0FBQ1osVUFBTUMsVUFBVSxHQUFHVCxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQW5DOztBQUNBLFVBQUlPLFVBQVUsS0FBSyxLQUFLbEIsR0FBeEIsRUFBNkI7QUFDekIsYUFBS21CLFVBQUwsQ0FBZ0IsS0FBS25CLEdBQXJCLEVBQTBCa0IsVUFBMUI7O0FBQ0EsYUFBS2xCLEdBQUwsR0FBV2tCLFVBQVg7QUFDSDtBQUVKO0FBN0JMO0FBQUE7QUFBQSwrQkErQmVmLE1BL0JmLEVBK0J1QkMsTUEvQnZCLEVBK0IrQjtBQUN2QixXQUFLRSxnQkFBTCxDQUFzQmMsT0FBdEIsQ0FBOEIsVUFBQVIsRUFBRTtBQUFBLGVBQUlBLEVBQUUsQ0FBQ1QsTUFBRCxFQUFTQyxNQUFULENBQU47QUFBQSxPQUFoQztBQUNIO0FBakNMO0FBQUE7QUFBQSxzQ0FtQ3NCO0FBQUE7O0FBQ2QsV0FBS2lCLFFBQUwsR0FBZ0JuQyxXQUFXLENBQUM7QUFBQSxlQUFNLEtBQUksQ0FBQ29DLGFBQUwsRUFBTjtBQUFBLE9BQUQsRUFBNkJqQixhQUE3QixDQUEzQjtBQUNIO0FBckNMO0FBQUE7QUFBQSxxQ0F1Q3FCO0FBQ2JqQixtQkFBYSxDQUFDLEtBQUtpQyxRQUFOLENBQWI7QUFDQSxXQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7QUExQ0w7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNGQTtBQUFBO0FBQU8sU0FBUzFDLFdBQVQsR0FBdUI7QUFDMUIsU0FBT2xDLFFBQVEsQ0FBQ3VCLHNCQUFULENBQWdDLHVDQUFoQyxFQUF5RSxDQUF6RSxDQUFQO0FBQ0gsQyIsImZpbGUiOiJkb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kb20vbWFpbi5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubXV0ZV9tZXNzYWdlIC5tdXRldG9vbHRpcCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBcXG4gICAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAqL1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJvdHRvbTogMTI1JTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTYwcHg7XFxuICAgIFxcbiAgICAvKiBGYWRlIGluIHRvb2x0aXAgKi9cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcbn1cXG5cXG4vKiBUb29sdGlwIGFycm93ICovXFxuLm11dGVfbWVzc2FnZSAubXV0ZXRvb2x0aXA6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMDAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xcbiAgICBib3JkZXItd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU1IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBTaG93IHRoZSB0b29sdGlwIHRleHQgd2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgdG9vbHRpcCBjb250YWluZXIgKi9cXG4ubXV0ZV9tZXNzYWdlOmhvdmVyIC5tdXRldG9vbHRpcCB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5tdXRlX21lc3NhZ2Uge1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIC8qYmFja2dyb3VuZDogdXJsKCdjaHJvbWUtZXh0ZW5zaW9uOi8vX19NU0dfQEBleHRlbnNpb25faWRfXy9tdXRlLnBuZycpICFpbXBvcnRhbnQ7Ki9cXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG4uaW0tbWVzcy0tYWN0aW9ucyB7XFxuICAgIG1hcmdpbi1yaWdodDogLTMwcHggIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8qKlxuICpcbiAqIEBwYXJhbSBpZCB7U3RyaW5nfVxuICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fVxuICovXG5pbXBvcnQge2dldENoYXRCb2R5fSBmcm9tIFwiLi4vdXRpbHMvZ2V0Q2hhdEJvZHlcIjtcblxuZnVuY3Rpb24gbXV0ZUJ0bkhUTUwoaWQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtdXRlX21lc3NhZ2UnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgbXV0ZSR7aWR9YCk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIPCflIdcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtdXRldG9vbHRpcFwiPtCX0LDQs9C70YPRiNC40YLRjDwvc3Bhbj5cbiAgICBgO1xuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gY2hhdEJvZHkge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7ZnVuY3Rpb24oLi4uWypdPSl9XG4gKi9cbmZ1bmN0aW9uIGFkZENvbnRyb2xzKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnaW0tbWVzcy0tY2hlY2sgZmxfbCcpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBhZGRDb250cm9sQnV0dG9uKG1lc3NhZ2UpXG4gICAgfVxufVxuXG4vKipcbiAqIENyZWF0ZSBtdXRlIGJ1dHRvbiBhbmQgaW5zZXQgaXQgdG8gdGhlIGFjdGlvbkFyZWFcbiAqIEBwYXJhbSBhY3Rpb25BcmVhIHtIVE1MRWxlbWVudH1cbiAqIEBwYXJhbSBzZW5kZXJJZCB7U3RyaW5nfVxuICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGFkZE11dGVCdXR0b24oYWN0aW9uQXJlYSwgc2VuZGVySWQpIHtcbiAgICBjb25zdCBtdXRlQnV0dG9uID0gbXV0ZUJ0bkhUTUwoc2VuZGVySWQpO1xuICAgIGFjdGlvbkFyZWEuYXBwZW5kQ2hpbGQobXV0ZUJ1dHRvbik7XG4gICAgbXV0ZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcmV0dXJuIG11dGVCdXR0b247XG59XG5cbi8qKlxuICogQWRkIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgYWN0aW9uQXJlYVxuICogQHBhcmFtIGFjdGlvbnNBcmVhIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gYWRkQWN0aW9uQXJlYUV2ZW50cyhhY3Rpb25zQXJlYSkge1xuICAgIGFjdGlvbnNBcmVhLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnRhcmdldC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXV0ZV9tZXNzYWdlXCIpWzBdLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgIH0pO1xuXG4gICAgYWN0aW9uc0FyZWEucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtdXRlX21lc3NhZ2VcIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0pO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gY2hhdEJvZHkge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7ZnVuY3Rpb24oLi4uW109KX1cbiAqL1xuZnVuY3Rpb24gc2V0SWRUb0hpZGVIYW5kbGUoY2hhdEJvZHkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRJZCA9IGV2ZW50LnRhcmdldC5pZC5zdWJzdHIoNCk7ICAgICAvLyBnZXQgaWQgb2Ygc2VuZGVyIGZyb20gZWxlbWVudCBpZFxuXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHtpZFRvSGlkZTogY2xpY2tlZElkfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGlkZUV4aXN0aW5nTWVzc2FnZXMoY2xpY2tlZElkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZFRvSGlkZTogJyArIGNsaWNrZWRJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVFeGlzdGluZ01lc3NhZ2VzKGlkKSB7XG4gICAgY29uc3QgY2hhdEJvZHkgPSBnZXRDaGF0Qm9keSgpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC5wZWVyID09PSBpZCkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFRyeSB0byBhZGQgY29udHJvbHMgdW50aWwgc3VjY2Vzc2Z1bC4gTmVlZGVkIGZvciBwYWdlIHJlZnJlc2guXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwoKSB7XG4gICAgY29uc3QgY29udHJvbHNJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoIXRyeVRvSW5pdENvbnRyb2xzKGNvbnRyb2xzSW50ZXJ2YWwpKXtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY29udHJvbHNJbnRlcnZhbCk7XG5cbiAgICAgICAgfVxuICAgIH0sIDIwMClcbiAgICByZXR1cm4gY29udHJvbHNJbnRlcnZhbDtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIG1lc3NhZ2Uge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBhZGRDb250cm9sQnV0dG9uKG1lc3NhZ2UsIGNoYXRCb2R5KSB7XG4gICAgY29uc3QgYWN0aW9uc0FyZWEgPSBtZXNzYWdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbS1tZXNzLS1hY3Rpb25zXCIpWzBdO1xuICAgIGlmIChhY3Rpb25zQXJlYSAmJiBhY3Rpb25zQXJlYS5sYXN0Q2hpbGQuY2xhc3NOYW1lICE9PSBcIm11dGVfbWVzc2FnZVwiKSB7XG4gICAgICAgIGNvbnN0IHNlbmRlcklkID0gbWVzc2FnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFtcImRhdGFzZXRcIl0ucGVlcjtcbiAgICAgICAgY29uc3QgbXV0ZUJ0biA9IGFkZE11dGVCdXR0b24oYWN0aW9uc0FyZWEsIHNlbmRlcklkKTtcbiAgICAgICAgYWRkQWN0aW9uQXJlYUV2ZW50cyhhY3Rpb25zQXJlYSk7XG4gICAgICAgIG11dGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldElkVG9IaWRlSGFuZGxlKGNoYXRCb2R5KSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnlUb0luaXRDb250cm9scygpIHtcbiAgICBsZXQgc3RhdHVzID0gdHJ1ZTtcbiAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XG4gICAgaWYoIWNoYXRCb2R5KSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaXRlbSBvZiBjaGF0Qm9keS5jaGlsZHJlbikge1xuICAgICAgICBpZiAoaXRlbS5jbGFzc05hbWUuaW5jbHVkZXMoJ2ltLW1lc3Mtc3RhY2sgX2ltX21lc3Nfc3RhY2snKSkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2VzID0gaXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbS1tZXNzIF9pbV9tZXNzJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gYWRkQ29udHJvbEJ1dHRvbihtZXNzYWdlLCBjaGF0Qm9keSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xufSIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kb20uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsImltcG9ydCB7Z2V0Q2hhdEJvZHl9IGZyb20gXCIuLi91dGlscy9nZXRDaGF0Qm9keVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIoKSB7XG4gICAgY29uc3QgY2hhdEJvZHkgPSBnZXRDaGF0Qm9keSgpO1xuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZFRvSGlkZScsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgbGV0IGlkVG9IaWRlID0gZGF0YS5pZFRvSGlkZTtcbiAgICAgICAgY2hhdEJvZHkuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIG5ld01lc3NhZ2VIYW5kbGVyKGV2ZW50LnRhcmdldCwgaWRUb0hpZGUpXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBuZXdNZXNzYWdlSGFuZGxlcihtZXNzYWdlLCBpZFRvSGlkZSkge1xuICAgIGlmIChtZXNzYWdlLmNsYXNzTmFtZSA9PT0gJ2ltLW1lc3Mtc3RhY2sgX2ltX21lc3Nfc3RhY2sgJykge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaWRUb0hpZGUnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBpZFRvSGlkZSA9IGRhdGEuaWRUb0hpZGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpc0V4dGVuc2lvbk9uJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaXNFeHRlbnNpb25Pbikge1xuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmRhdGFzZXQucGVlciA9PT0gaWRUb0hpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgJy4vZG9tLmNzcydcbmltcG9ydCB7Y3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwsIGhpZGVFeGlzdGluZ01lc3NhZ2VzLCB0cnlUb0luaXRDb250cm9sc30gZnJvbSBcIi4vY29udHJvbHNcIjtcbmltcG9ydCB7VXJsQ29udHJvbGxlcn0gZnJvbSBcIi4uL3V0aWxzL1VybFwiO1xuaW1wb3J0IHthZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lcn0gZnJvbSBcIi4vaGlkZV9lbGVtZW50XCI7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVybENvbnRyb2xsZXIoKTtcbiAgICB1cmwub25DaGFuZ2UoKG9sZFVybCwgbmV3VXJsKSA9PiB7XG4gICAgICAgIC8vIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZFRvSGlkZScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vICAgICBsZXQgaWRUb0hpZGUgPSBkYXRhLmlkVG9IaWRlO1xuICAgICAgICAvLyAgICAgaGlkZUV4aXN0aW5nTWVzc2FnZXMoaWRUb0hpZGUpXG4gICAgICAgIC8vIH0pO1xuICAgICAgICBpZiAodHJ5VG9Jbml0Q29udHJvbHMoKSkge1xuICAgICAgICAgICAgY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwoKTtcbiAgICAgICAgICAgIGFkZE5ld01lc3NhZ2VFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pbml0KCk7IiwiY29uc3QgSU5URVJWQUxfVElNRSA9IDEwMDtcblxuZXhwb3J0IGNsYXNzIFVybENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3VybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKGNiKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycy5wdXNoKGNiKTtcbiAgICAgICAgaWYgKHRoaXMuX2ludGVydmFsID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVJbnRlcnZhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihjYikge1xuICAgICAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMgPSB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGl0ZW09Pml0ZW0gIT09IGNiKTtcbiAgICAgICAgaWYodGhpcy5fY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2ludGVydmFsVGljaygpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBpZiAoY3VycmVudFVybCAhPT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Jyb2FkY2FzdCh0aGlzLnVybCwgY3VycmVudFVybCk7XG4gICAgICAgICAgICB0aGlzLnVybCA9IGN1cnJlbnRVcmw7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIF9icm9hZGNhc3Qob2xkVXJsLCBuZXdVcmwpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goY2IgPT4gY2Iob2xkVXJsLCBuZXdVcmwpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlSW50ZXJ2YWwoKSB7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLl9pbnRlcnZhbFRpY2soKSwgSU5URVJWQUxfVElNRSlcbiAgICB9XG5cbiAgICBfY2xlYXJJbnRlcnZhbCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgICAgICB0aGlzLmludGVydmFsID0gbnVsbFxuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBnZXRDaGF0Qm9keSgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIl9pbV9wZWVyX2hpc3RvcnkgaW0tcGFnZS1jaGF0LWNvbnRhaW5cIilbMF07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==