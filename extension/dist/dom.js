/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom/controls.js":
/*!*****************************!*\
  !*** ./src/dom/controls.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTryToInitInterval": () => (/* binding */ createTryToInitInterval),
/* harmony export */   "hideExistingMessages": () => (/* binding */ hideExistingMessages),
/* harmony export */   "tryToAddControls": () => (/* binding */ tryToAddControls),
/* harmony export */   "tryToInitControls": () => (/* binding */ tryToInitControls)
/* harmony export */ });
/* harmony import */ var _utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getChatBody */ "./src/utils/getChatBody.js");
/* harmony import */ var _mute_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mute.svg */ "./src/dom/mute.svg");
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
  element.setAttribute('class', 'im-mess--mute');
  element.setAttribute('id', "mute".concat(id));
  element.setAttribute('label', 'Заглушить');
  element.innerHTML = "".concat(_mute_svg__WEBPACK_IMPORTED_MODULE_1__["default"], "<div class=\"mute_tooltip tt_w tt_black tt_down\"><div class=\"tt_text\">\u0417\u0430\u0433\u043B\u0443\u0448\u0438\u0442\u044C</div></div>");
  return element;
}

/**
 *
 * @param target {HTMLElenemt}
 */
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
  muteButton.style.visibility = 'hidden';
  return muteButton;
}

/**
 * Add event listeners to the actionArea
 * @param actionsArea {HTMLElement}
 */
function addActionAreaEvents(actionsArea) {
  actionsArea.parentElement.addEventListener('mouseenter', function (event) {
    event.target.getElementsByClassName('im-mess--mute')[0].style.visibility = 'visible';
  });
  actionsArea.parentElement.addEventListener('mouseleave', function (event) {
    event.target.getElementsByClassName('im-mess--mute')[0].style.visibility = 'hidden';
  });
}

/**
 *
 * @this {HTMLElement}
 */
function setIdToHideHandle() {
  var clickedId = this.id.substring(4);
  var clickedName = this.parentElement.parentElement.parentElement.parentElement;
  clickedName = clickedName.children[0].children[0].children[0].textContent;
  chrome.storage.sync.get('idsToHide', function (data) {
    var idsToHide = data.idsToHide || [];
    if (idsToHide.filter(function (user) {
      return user.id === clickedId;
    }).length === 0) {
      idsToHide.push({
        id: clickedId,
        name: clickedName
      });
      chrome.storage.sync.set({
        idsToHide: idsToHide
      }, function () {
        chrome.storage.sync.get('isExtensionOn', function (data) {
          if (data.isExtensionOn) hideExistingMessages();
        });
      });
    }
  });
}
function hideExistingMessages() {
  chrome.storage.sync.get('idsToHide', function (data) {
    var chatBody = (0,_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__.getChatBody)();
    var _iterator = _createForOfIteratorHelper(chatBody.children),
      _step;
    try {
      var _loop = function _loop() {
        var item = _step.value;
        if (data.idsToHide.filter(function (user) {
          return user.id === item.dataset.peer;
        }).length > 0) item.style.display = 'none';
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
}

// Try to add controls until successful. Needed for page refresh.
function createTryToInitInterval() {
  var controlsInterval = setInterval(function () {
    if (!tryToInitControls(controlsInterval)) clearInterval(controlsInterval);
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
    var actionsArea = message.getElementsByClassName('im-mess--actions')[0];
    if (actionsArea && actionsArea.lastChild.className !== 'im-mess--mute') {
      var senderId = message.parentElement.parentElement.parentElement.dataset.peer;
      var muteBtn = addMuteButton(actionsArea, senderId);
      addActionAreaEvents(actionsArea);
      muteBtn.addEventListener('click', setIdToHideHandle);
      return true;
    } else {
      return false;
    }
  }
}
function tryToInitControls() {
  var status = true;
  var chatBody = (0,_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__.getChatBody)();
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

/***/ "./src/dom/hide_element.js":
/*!*********************************!*\
  !*** ./src/dom/hide_element.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addNewMessageEventListener": () => (/* binding */ addNewMessageEventListener),
/* harmony export */   "returnMessagesEventListener": () => (/* binding */ returnMessagesEventListener)
/* harmony export */ });
/* harmony import */ var _utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getChatBody */ "./src/utils/getChatBody.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/dom/controls.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function addNewMessageEventListener() {
  var chatBody = (0,_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__.getChatBody)();
  chatBody.addEventListener('DOMNodeInserted', function (event) {
    newMessageHandler(event.target);
  });
}
function newMessageHandler(message) {
  (0,_controls__WEBPACK_IMPORTED_MODULE_1__.tryToAddControls)(message);
  if (message.className === 'im-mess-stack _im_mess_stack ') {
    chrome.storage.sync.get('isExtensionOn', function (data) {
      if (data.isExtensionOn) {
        chrome.storage.sync.get('idsToHide', function (data) {
          if (data.idsToHide.filter(function (user) {
            return user.id === message.dataset.peer;
          }).length > 0) message.style.display = 'none';
        });
      }
    });
  }
}
function returnMessagesEventListener() {
  chrome.storage.onChanged.addListener(function (changes) {
    var isExtensionOn = changes.isExtensionOn;
    var idsToHide = changes.idsToHide;
    var chatBody = (0,_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__.getChatBody)();
    if (isExtensionOn) {
      if (isExtensionOn.newValue === false) {
        var _iterator = _createForOfIteratorHelper(chatBody.children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.style.display = 'block';
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        (0,_controls__WEBPACK_IMPORTED_MODULE_1__.hideExistingMessages)();
      }
    }
    if (idsToHide) {
      chrome.storage.sync.get('isExtensionOn', function (data) {
        if (data.isExtensionOn) {
          if (idsToHide.newValue.length < idsToHide.oldValue.length) {
            var _iterator2 = _createForOfIteratorHelper(chatBody.children),
              _step2;
            try {
              var _loop = function _loop() {
                var item = _step2.value;
                if (idsToHide.newValue.filter(function (user) {
                  return user.id === item.dataset.peer;
                }).length === 0) item.style.display = 'block';
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

/***/ "./src/utils/Url.js":
/*!**************************!*\
  !*** ./src/utils/Url.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlController": () => (/* binding */ UrlController)
/* harmony export */ });
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
      if (this._interval === null) this._createInterval();
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(cb) {
      this._changeListeners = this._changeListeners.filter(function (item) {
        return item !== cb;
      });
      if (this._changeListeners.length === 0) this._clearInterval();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChatBody": () => (/* binding */ getChatBody)
/* harmony export */ });
function getChatBody() {
  return document.getElementsByClassName('_im_peer_history im-page-chat-contain')[0];
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dom/dom.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dom/dom.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mute_tooltip {\n  position: absolute;\n  left: -50px;\n  top: -33px;\n  display: none;\n}\n\n.mute_tooltip::after {\n  left: 61px !important;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.im-mess--mute:hover .mute_tooltip {\n  display: block !important;\n  opacity: 1;\n}\n\n.im-mess--mute {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  opacity: .5;\n  color: var(--vkui--color_icon_secondary);\n}\n\n.im-mess--mute:hover {\n  opacity: 1;\n}\n\n.im-mess--actions {\n  margin-right: -30px !important;\n}", "",{"version":3,"sources":["webpack://./src/dom/dom.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,aAAa;AACf;;AAEA;EACE,qBAAqB;AACvB;;AAEA,oEAAoE;AACpE;EACE,yBAAyB;EACzB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,wCAAwC;AAC1C;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":[".mute_tooltip {\n  position: absolute;\n  left: -50px;\n  top: -33px;\n  display: none;\n}\n\n.mute_tooltip::after {\n  left: 61px !important;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.im-mess--mute:hover .mute_tooltip {\n  display: block !important;\n  opacity: 1;\n}\n\n.im-mess--mute {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 24px;\n  height: 24px;\n  opacity: .5;\n  color: var(--vkui--color_icon_secondary);\n}\n\n.im-mess--mute:hover {\n  opacity: 1;\n}\n\n.im-mess--actions {\n  margin-right: -30px !important;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/dom/mute.svg":
/*!**************************!*\
  !*** ./src/dom/mute.svg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<svg \n  xmlns=\"http://www.w3.org/2000/svg\" \n  width=\"16\" \n  height=\"16\" \n  fill=\"currentColor\" \n  viewBox=\"2 1 13 13\"\n>\n  <path d=\"M4.69 5.5 11 11.8v1.7c0 .3-.23.47-.49.5l-3.63-3.5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h.69Zm.77-2.85 2.2 2.19L10.5 2.5c.27.02.49.2.49.48v5.2l2.6 2.6a.75.75 0 0 1-1.06 1.06L4.4 3.71a.75.75 0 0 1 1.06-1.06Z\"></path>\n</svg>\n");

/***/ }),

/***/ "./src/dom/dom.css":
/*!*************************!*\
  !*** ./src/dom/dom.css ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dom.css */ "./node_modules/css-loader/dist/cjs.js!./src/dom/dom.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

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
    var nonce =  true ? __webpack_require__.nc : 0;

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/dom/main.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.css */ "./src/dom/dom.css");
/* harmony import */ var _dom_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dom_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_Url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/Url */ "./src/utils/Url.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/dom/controls.js");
/* harmony import */ var _hide_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hide_element */ "./src/dom/hide_element.js");




function init() {
  var url = new _utils_Url__WEBPACK_IMPORTED_MODULE_1__.UrlController();
  url.onChange(function () {
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_2__.tryToInitControls)()) {
      (0,_controls__WEBPACK_IMPORTED_MODULE_2__.createTryToInitInterval)();
      (0,_hide_element__WEBPACK_IMPORTED_MODULE_3__.addNewMessageEventListener)();
      (0,_hide_element__WEBPACK_IMPORTED_MODULE_3__.returnMessagesEventListener)();
      chrome.storage.sync.get('isExtensionOn', function (data) {
        if (data.isExtensionOn) (0,_controls__WEBPACK_IMPORTED_MODULE_2__.hideExistingMessages)();
      });
    }
  });
}
init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ1EsYUFBYSxFQUNwQkMsK0RBQW9CLENBQUMsQ0FBQztNQUMxQixDQUFDLENBQUM7SUFDSjtFQUNGLENBQUMsQ0FBQztBQUNKO0FBRUFrRSxJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vaGlkZV9lbGVtZW50LmpzIiwid2VicGFjazovL3ZrLW11dGUvLi9zcmMvdXRpbHMvVXJsLmpzIiwid2VicGFjazovL3ZrLW11dGUvLi9zcmMvdXRpbHMvZ2V0Q2hhdEJvZHkuanMiLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vZG9tLmNzcyIsIndlYnBhY2s6Ly92ay1tdXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92ay1tdXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vbXV0ZS5zdmciLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vZG9tLmNzcz85YjZhIiwid2VicGFjazovL3ZrLW11dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmstbXV0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ay1tdXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZrLW11dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZrLW11dGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92ay1tdXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmstbXV0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDaGF0Qm9keSB9IGZyb20gJy4uL3V0aWxzL2dldENoYXRCb2R5J1xuaW1wb3J0IG11dGVTdmcgZnJvbSAnLi9tdXRlLnN2ZydcblxuLyoqXG4gKlxuICogQHBhcmFtIGlkIHtTdHJpbmd9XG4gKiBAcmV0dXJuIHtIVE1MU3BhbkVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIG11dGVCdG5IVE1MKGlkKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ltLW1lc3MtLW11dGUnKVxuICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgbXV0ZSR7aWR9YClcbiAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ9CX0LDQs9C70YPRiNC40YLRjCcpXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gYCR7bXV0ZVN2Z308ZGl2IGNsYXNzPVwibXV0ZV90b29sdGlwIHR0X3cgdHRfYmxhY2sgdHRfZG93blwiPjxkaXYgY2xhc3M9XCJ0dF90ZXh0XCI+0JfQsNCz0LvRg9GI0LjRgtGMPC9kaXY+PC9kaXY+YFxuICByZXR1cm4gZWxlbWVudFxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gdGFyZ2V0IHtIVE1MRWxlbmVtdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyeVRvQWRkQ29udHJvbHModGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQuY2xhc3NOYW1lID09PSAnaW0tbWVzcy0tY2hlY2sgZmxfbCcpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGFyZ2V0LnBhcmVudEVsZW1lbnRcbiAgICBhZGRDb250cm9sQnV0dG9uKG1lc3NhZ2UpXG4gIH1cbn1cblxuLyoqXG4gKiBDcmVhdGUgbXV0ZSBidXR0b24gYW5kIGluc2V0IGl0IHRvIHRoZSBhY3Rpb25BcmVhXG4gKiBAcGFyYW0gYWN0aW9uQXJlYSB7SFRNTEVsZW1lbnR9XG4gKiBAcGFyYW0gc2VuZGVySWQge1N0cmluZ31cbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBhZGRNdXRlQnV0dG9uKGFjdGlvbkFyZWEsIHNlbmRlcklkKSB7XG4gIGNvbnN0IG11dGVCdXR0b24gPSBtdXRlQnRuSFRNTChzZW5kZXJJZClcbiAgYWN0aW9uQXJlYS5hcHBlbmRDaGlsZChtdXRlQnV0dG9uKVxuICBtdXRlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICByZXR1cm4gbXV0ZUJ1dHRvblxufVxuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGFjdGlvbkFyZWFcbiAqIEBwYXJhbSBhY3Rpb25zQXJlYSB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGFkZEFjdGlvbkFyZWFFdmVudHMoYWN0aW9uc0FyZWEpIHtcbiAgYWN0aW9uc0FyZWEucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltLW1lc3MtLW11dGUnKVswXS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnXG4gIH0pXG5cbiAgYWN0aW9uc0FyZWEucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltLW1lc3MtLW11dGUnKVswXS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbidcbiAgfSlcbn1cblxuLyoqXG4gKlxuICogQHRoaXMge0hUTUxFbGVtZW50fVxuICovXG5mdW5jdGlvbiBzZXRJZFRvSGlkZUhhbmRsZSgpIHtcbiAgY29uc3QgY2xpY2tlZElkID0gdGhpcy5pZC5zdWJzdHJpbmcoNClcbiAgbGV0IGNsaWNrZWROYW1lID0gdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gIGNsaWNrZWROYW1lID0gY2xpY2tlZE5hbWUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnRcblxuICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaWRzVG9IaWRlJywgKGRhdGEpID0+IHtcbiAgICBjb25zdCBpZHNUb0hpZGUgPSBkYXRhLmlkc1RvSGlkZSB8fCBbXVxuICAgIGlmIChpZHNUb0hpZGUuZmlsdGVyKHVzZXIgPT4gdXNlci5pZCA9PT0gY2xpY2tlZElkKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGlkc1RvSGlkZS5wdXNoKHtcbiAgICAgICAgaWQ6IGNsaWNrZWRJZCxcbiAgICAgICAgbmFtZTogY2xpY2tlZE5hbWUsXG4gICAgICB9KVxuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBpZHNUb0hpZGUgfSwgKCkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaXNFeHRlbnNpb25PbicsIChkYXRhKSA9PiB7XG4gICAgICAgICAgaWYgKGRhdGEuaXNFeHRlbnNpb25PbilcbiAgICAgICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUV4aXN0aW5nTWVzc2FnZXMoKSB7XG4gIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZHNUb0hpZGUnLCAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGNoYXRCb2R5ID0gZ2V0Q2hhdEJvZHkoKVxuICAgIGZvciAoY29uc3QgaXRlbSBvZiBjaGF0Qm9keS5jaGlsZHJlbikge1xuICAgICAgaWYgKGRhdGEuaWRzVG9IaWRlLmZpbHRlcih1c2VyID0+IHVzZXIuaWQgPT09IGl0ZW0uZGF0YXNldC5wZWVyKS5sZW5ndGggPiAwKVxuICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB9XG4gIH0pXG59XG5cbi8vIFRyeSB0byBhZGQgY29udHJvbHMgdW50aWwgc3VjY2Vzc2Z1bC4gTmVlZGVkIGZvciBwYWdlIHJlZnJlc2guXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwoKSB7XG4gIGNvbnN0IGNvbnRyb2xzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKCF0cnlUb0luaXRDb250cm9scyhjb250cm9sc0ludGVydmFsKSlcbiAgICAgIGNsZWFySW50ZXJ2YWwoY29udHJvbHNJbnRlcnZhbClcbiAgfSwgMjAwKVxuICByZXR1cm4gY29udHJvbHNJbnRlcnZhbFxufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGFkZENvbnRyb2xCdXR0b24obWVzc2FnZSkge1xuICAvLyBDaGVjayBpZiBtZXNzYWdlIGlzIG5vdCBhbiBvdXRnb2luZyBvbmVcbiAgaWYgKCFtZXNzYWdlLmNsYXNzTGlzdC5jb250YWlucygnaW0tbWVzc19vdXQnKSkge1xuICAgIGNvbnN0IGFjdGlvbnNBcmVhID0gbWVzc2FnZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbS1tZXNzLS1hY3Rpb25zJylbMF1cbiAgICBpZiAoYWN0aW9uc0FyZWEgJiYgYWN0aW9uc0FyZWEubGFzdENoaWxkLmNsYXNzTmFtZSAhPT0gJ2ltLW1lc3MtLW11dGUnKSB7XG4gICAgICBjb25zdCBzZW5kZXJJZCA9IG1lc3NhZ2UucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZGF0YXNldC5wZWVyXG4gICAgICBjb25zdCBtdXRlQnRuID0gYWRkTXV0ZUJ1dHRvbihhY3Rpb25zQXJlYSwgc2VuZGVySWQpXG4gICAgICBhZGRBY3Rpb25BcmVhRXZlbnRzKGFjdGlvbnNBcmVhKVxuICAgICAgbXV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNldElkVG9IaWRlSGFuZGxlKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyeVRvSW5pdENvbnRyb2xzKCkge1xuICBsZXQgc3RhdHVzID0gdHJ1ZVxuICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KClcbiAgaWYgKCFjaGF0Qm9keSlcbiAgICByZXR1cm4gZmFsc2VcbiAgZm9yIChjb25zdCBpdGVtIG9mIGNoYXRCb2R5LmNoaWxkcmVuKSB7XG4gICAgaWYgKGl0ZW0uY2xhc3NOYW1lLmluY2x1ZGVzKCdpbS1tZXNzLXN0YWNrIF9pbV9tZXNzX3N0YWNrJykpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2VzID0gaXRlbS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbS1tZXNzIF9pbV9tZXNzJylcbiAgICAgIGZvciAoY29uc3QgbWVzc2FnZSBvZiBtZXNzYWdlcylcbiAgICAgICAgc3RhdHVzID0gYWRkQ29udHJvbEJ1dHRvbihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdHVzXG59XG4iLCJpbXBvcnQgeyBnZXRDaGF0Qm9keSB9IGZyb20gJy4uL3V0aWxzL2dldENoYXRCb2R5J1xuaW1wb3J0IHsgaGlkZUV4aXN0aW5nTWVzc2FnZXMsIHRyeVRvQWRkQ29udHJvbHMgfSBmcm9tICcuL2NvbnRyb2xzJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIoKSB7XG4gIGNvbnN0IGNoYXRCb2R5ID0gZ2V0Q2hhdEJvZHkoKVxuICBjaGF0Qm9keS5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCAoZXZlbnQpID0+IHtcbiAgICBuZXdNZXNzYWdlSGFuZGxlcihldmVudC50YXJnZXQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIG5ld01lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpIHtcbiAgdHJ5VG9BZGRDb250cm9scyhtZXNzYWdlKVxuICBpZiAobWVzc2FnZS5jbGFzc05hbWUgPT09ICdpbS1tZXNzLXN0YWNrIF9pbV9tZXNzX3N0YWNrICcpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaXNFeHRlbnNpb25PbicsIChkYXRhKSA9PiB7XG4gICAgICBpZiAoZGF0YS5pc0V4dGVuc2lvbk9uKSB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZHNUb0hpZGUnLCAoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLmlkc1RvSGlkZS5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09PSBtZXNzYWdlLmRhdGFzZXQucGVlcikubGVuZ3RoID4gMClcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJldHVybk1lc3NhZ2VzRXZlbnRMaXN0ZW5lcigpIHtcbiAgY2hyb21lLnN0b3JhZ2Uub25DaGFuZ2VkLmFkZExpc3RlbmVyKChjaGFuZ2VzKSA9PiB7XG4gICAgY29uc3QgaXNFeHRlbnNpb25PbiA9IGNoYW5nZXMuaXNFeHRlbnNpb25PblxuICAgIGNvbnN0IGlkc1RvSGlkZSA9IGNoYW5nZXMuaWRzVG9IaWRlXG4gICAgY29uc3QgY2hhdEJvZHkgPSBnZXRDaGF0Qm9keSgpXG4gICAgaWYgKGlzRXh0ZW5zaW9uT24pIHtcbiAgICAgIGlmIChpc0V4dGVuc2lvbk9uLm5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pXG4gICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlkc1RvSGlkZSkge1xuICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lzRXh0ZW5zaW9uT24nLCAoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YS5pc0V4dGVuc2lvbk9uKSB7XG4gICAgICAgICAgaWYgKGlkc1RvSGlkZS5uZXdWYWx1ZS5sZW5ndGggPCBpZHNUb0hpZGUub2xkVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgaWYgKGlkc1RvSGlkZS5uZXdWYWx1ZS5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09PSBpdGVtLmRhdGFzZXQucGVlcikubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuIiwiY29uc3QgSU5URVJWQUxfVElNRSA9IDEwMFxuXG5leHBvcnQgY2xhc3MgVXJsQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycyA9IFtdXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fdXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgfVxuXG4gIG9uQ2hhbmdlKGNiKSB7XG4gICAgdGhpcy5fY2hhbmdlTGlzdGVuZXJzLnB1c2goY2IpXG4gICAgaWYgKHRoaXMuX2ludGVydmFsID09PSBudWxsKVxuICAgICAgdGhpcy5fY3JlYXRlSW50ZXJ2YWwoKVxuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihjYikge1xuICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycyA9IHRoaXMuX2NoYW5nZUxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBjYilcbiAgICBpZiAodGhpcy5fY2hhbmdlTGlzdGVuZXJzLmxlbmd0aCA9PT0gMClcbiAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKVxuICB9XG5cbiAgX2ludGVydmFsVGljaygpIHtcbiAgICBjb25zdCBjdXJyZW50VXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICBpZiAoY3VycmVudFVybCAhPT0gdGhpcy51cmwpIHtcbiAgICAgIHRoaXMuX2Jyb2FkY2FzdCh0aGlzLnVybCwgY3VycmVudFVybClcbiAgICAgIHRoaXMudXJsID0gY3VycmVudFVybFxuICAgIH1cbiAgfVxuXG4gIF9icm9hZGNhc3Qob2xkVXJsLCBuZXdVcmwpIHtcbiAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChjYiA9PiBjYihvbGRVcmwsIG5ld1VybCkpXG4gIH1cblxuICBfY3JlYXRlSW50ZXJ2YWwoKSB7XG4gICAgdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMuX2ludGVydmFsVGljaygpLCBJTlRFUlZBTF9USU1FKVxuICB9XG5cbiAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKVxuICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsXG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRDaGF0Qm9keSgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ19pbV9wZWVyX2hpc3RvcnkgaW0tcGFnZS1jaGF0LWNvbnRhaW4nKVswXVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubXV0ZV90b29sdGlwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC01MHB4O1xcbiAgdG9wOiAtMzNweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5tdXRlX3Rvb2x0aXA6OmFmdGVyIHtcXG4gIGxlZnQ6IDYxcHggIWltcG9ydGFudDtcXG59XFxuXFxuLyogU2hvdyB0aGUgdG9vbHRpcCB0ZXh0IHdoZW4geW91IG1vdXNlIG92ZXIgdGhlIHRvb2x0aXAgY29udGFpbmVyICovXFxuLmltLW1lc3MtLW11dGU6aG92ZXIgLm11dGVfdG9vbHRpcCB7XFxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmltLW1lc3MtLW11dGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIG9wYWNpdHk6IC41O1xcbiAgY29sb3I6IHZhcigtLXZrdWktLWNvbG9yX2ljb25fc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmltLW1lc3MtLW11dGU6aG92ZXIge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmltLW1lc3MtLWFjdGlvbnMge1xcbiAgbWFyZ2luLXJpZ2h0OiAtMzBweCAhaW1wb3J0YW50O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZG9tL2RvbS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsb0VBQW9FO0FBQ3BFO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm11dGVfdG9vbHRpcCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNTBweDtcXG4gIHRvcDogLTMzcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubXV0ZV90b29sdGlwOjphZnRlciB7XFxuICBsZWZ0OiA2MXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xcbi5pbS1tZXNzLS1tdXRlOmhvdmVyIC5tdXRlX3Rvb2x0aXAge1xcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pbS1tZXNzLS1tdXRlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBvcGFjaXR5OiAuNTtcXG4gIGNvbG9yOiB2YXIoLS12a3VpLS1jb2xvcl9pY29uX3NlY29uZGFyeSk7XFxufVxcblxcbi5pbS1tZXNzLS1tdXRlOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pbS1tZXNzLS1hY3Rpb25zIHtcXG4gIG1hcmdpbi1yaWdodDogLTMwcHggIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgXFxuICB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIFxcbiAgd2lkdGg9XFxcIjE2XFxcIiBcXG4gIGhlaWdodD1cXFwiMTZcXFwiIFxcbiAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiBcXG4gIHZpZXdCb3g9XFxcIjIgMSAxMyAxM1xcXCJcXG4+XFxuICA8cGF0aCBkPVxcXCJNNC42OSA1LjUgMTEgMTEuOHYxLjdjMCAuMy0uMjMuNDctLjQ5LjVsLTMuNjMtMy41SDRhMSAxIDAgMCAxLTEtMXYtM2ExIDEgMCAwIDEgMS0xaC42OVptLjc3LTIuODUgMi4yIDIuMTlMMTAuNSAyLjVjLjI3LjAyLjQ5LjIuNDkuNDh2NS4ybDIuNiAyLjZhLjc1Ljc1IDAgMCAxLTEuMDYgMS4wNkw0LjQgMy43MWEuNzUuNzUgMCAwIDEgMS4wNi0xLjA2WlxcXCI+PC9wYXRoPlxcbjwvc3ZnPlxcblwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kb20uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9kb20uY3NzJ1xuaW1wb3J0IHsgVXJsQ29udHJvbGxlciB9IGZyb20gJy4uL3V0aWxzL1VybCdcbmltcG9ydCB7IGNyZWF0ZVRyeVRvSW5pdEludGVydmFsLCBoaWRlRXhpc3RpbmdNZXNzYWdlcywgdHJ5VG9Jbml0Q29udHJvbHMgfSBmcm9tICcuL2NvbnRyb2xzJ1xuaW1wb3J0IHsgYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIsIHJldHVybk1lc3NhZ2VzRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vaGlkZV9lbGVtZW50J1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCB1cmwgPSBuZXcgVXJsQ29udHJvbGxlcigpXG4gIHVybC5vbkNoYW5nZSgoKSA9PiB7XG4gICAgaWYgKHRyeVRvSW5pdENvbnRyb2xzKCkpIHtcbiAgICAgIGNyZWF0ZVRyeVRvSW5pdEludGVydmFsKClcbiAgICAgIGFkZE5ld01lc3NhZ2VFdmVudExpc3RlbmVyKClcbiAgICAgIHJldHVybk1lc3NhZ2VzRXZlbnRMaXN0ZW5lcigpXG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaXNFeHRlbnNpb25PbicsIChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhLmlzRXh0ZW5zaW9uT24pXG4gICAgICAgICAgaGlkZUV4aXN0aW5nTWVzc2FnZXMoKVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59XG5cbmluaXQoKVxuIl0sIm5hbWVzIjpbImdldENoYXRCb2R5IiwibXV0ZVN2ZyIsIm11dGVCdG5IVE1MIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY29uY2F0IiwiaW5uZXJIVE1MIiwidHJ5VG9BZGRDb250cm9scyIsInRhcmdldCIsImNsYXNzTmFtZSIsIm1lc3NhZ2UiLCJwYXJlbnRFbGVtZW50IiwiYWRkQ29udHJvbEJ1dHRvbiIsImFkZE11dGVCdXR0b24iLCJhY3Rpb25BcmVhIiwic2VuZGVySWQiLCJtdXRlQnV0dG9uIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJhZGRBY3Rpb25BcmVhRXZlbnRzIiwiYWN0aW9uc0FyZWEiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2V0SWRUb0hpZGVIYW5kbGUiLCJjbGlja2VkSWQiLCJzdWJzdHJpbmciLCJjbGlja2VkTmFtZSIsImNoaWxkcmVuIiwidGV4dENvbnRlbnQiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsImdldCIsImRhdGEiLCJpZHNUb0hpZGUiLCJmaWx0ZXIiLCJ1c2VyIiwibGVuZ3RoIiwicHVzaCIsIm5hbWUiLCJzZXQiLCJpc0V4dGVuc2lvbk9uIiwiaGlkZUV4aXN0aW5nTWVzc2FnZXMiLCJjaGF0Qm9keSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJfbG9vcCIsIml0ZW0iLCJ2YWx1ZSIsImRhdGFzZXQiLCJwZWVyIiwiZGlzcGxheSIsInMiLCJuIiwiZG9uZSIsImVyciIsImUiLCJmIiwiY3JlYXRlVHJ5VG9Jbml0SW50ZXJ2YWwiLCJjb250cm9sc0ludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ0cnlUb0luaXRDb250cm9scyIsImNsZWFySW50ZXJ2YWwiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImxhc3RDaGlsZCIsIm11dGVCdG4iLCJzdGF0dXMiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiaW5jbHVkZXMiLCJtZXNzYWdlcyIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJhZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lciIsIm5ld01lc3NhZ2VIYW5kbGVyIiwicmV0dXJuTWVzc2FnZXNFdmVudExpc3RlbmVyIiwib25DaGFuZ2VkIiwiYWRkTGlzdGVuZXIiLCJjaGFuZ2VzIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsIklOVEVSVkFMX1RJTUUiLCJVcmxDb250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NoYW5nZUxpc3RlbmVycyIsIl9pbnRlcnZhbCIsIl91cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJvbkNoYW5nZSIsImNiIiwiX2NyZWF0ZUludGVydmFsIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9jbGVhckludGVydmFsIiwiX2ludGVydmFsVGljayIsImN1cnJlbnRVcmwiLCJ1cmwiLCJfYnJvYWRjYXN0Iiwib2xkVXJsIiwibmV3VXJsIiwiZm9yRWFjaCIsIl90aGlzIiwiaW50ZXJ2YWwiLCJpbml0Il0sInNvdXJjZVJvb3QiOiIifQ==