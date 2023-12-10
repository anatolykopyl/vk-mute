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
  element.innerHTML = _mute_svg__WEBPACK_IMPORTED_MODULE_1__["default"] + '<div class="mute_tooltip tt_w tt_black tt_down"><div class="tt_text">Заглушить</div></div>';
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
  muteButton.style.visibility = "hidden";
  return muteButton;
}

/**
 * Add event listeners to the actionArea
 * @param actionsArea {HTMLElement}
 */
function addActionAreaEvents(actionsArea) {
  actionsArea.parentElement.addEventListener("mouseenter", function (event) {
    event.target.getElementsByClassName("im-mess--mute")[0].style.visibility = "visible";
  });
  actionsArea.parentElement.addEventListener("mouseleave", function (event) {
    event.target.getElementsByClassName("im-mess--mute")[0].style.visibility = "hidden";
  });
}

/**
 *
 * @this {HTMLElement}
 */
function setIdToHideHandle() {
  var clickedId = this.id.substring(4);
  var clickedName = this.parentElement.parentElement.parentElement.parentElement;
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
}

// Try to add controls until successful. Needed for page refresh.
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
    if (actionsArea && actionsArea.lastChild.className !== "im-mess--mute") {
      var senderId = message.parentElement.parentElement.parentElement["dataset"].peer;
      var muteBtn = addMuteButton(actionsArea, senderId);
      addActionAreaEvents(actionsArea);
      muteBtn.addEventListener("click", setIdToHideHandle);
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
    var chatBody = (0,_utils_getChatBody__WEBPACK_IMPORTED_MODULE_0__.getChatBody)();
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
        (0,_controls__WEBPACK_IMPORTED_MODULE_1__.hideExistingMessages)();
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChatBody": () => (/* binding */ getChatBody)
/* harmony export */ });
function getChatBody() {
  return document.getElementsByClassName("_im_peer_history im-page-chat-contain")[0];
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
___CSS_LOADER_EXPORT___.push([module.id, ".mute_tooltip {\n    position: absolute;\n    left: -50px;\n    top: -33px;\n    display: none;\n}\n\n.mute_tooltip::after {\n    left: 61px !important;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.im-mess--mute:hover .mute_tooltip {\n    display: block !important;\n    opacity: 1;\n}\n\n.im-mess--mute {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n    opacity: .5;\n    color: var(--vkui--color_icon_secondary);\n}\n\n.im-mess--mute:hover {\n    opacity: 1;\n}\n\n.im-mess--actions {\n    margin-right: -30px !important;\n}", "",{"version":3,"sources":["webpack://./src/dom/dom.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA,oEAAoE;AACpE;IACI,yBAAyB;IACzB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,WAAW;IACX,wCAAwC;AAC5C;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,8BAA8B;AAClC","sourcesContent":[".mute_tooltip {\n    position: absolute;\n    left: -50px;\n    top: -33px;\n    display: none;\n}\n\n.mute_tooltip::after {\n    left: 61px !important;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.im-mess--mute:hover .mute_tooltip {\n    display: block !important;\n    opacity: 1;\n}\n\n.im-mess--mute {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n    opacity: .5;\n    color: var(--vkui--color_icon_secondary);\n}\n\n.im-mess--mute:hover {\n    opacity: 1;\n}\n\n.im-mess--actions {\n    margin-right: -30px !important;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/dom/controls.js");
/* harmony import */ var _utils_Url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Url */ "./src/utils/Url.js");
/* harmony import */ var _hide_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hide_element */ "./src/dom/hide_element.js");




function init() {
  var url = new _utils_Url__WEBPACK_IMPORTED_MODULE_2__.UrlController();
  url.onChange(function () {
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_1__.tryToInitControls)()) {
      (0,_controls__WEBPACK_IMPORTED_MODULE_1__.createTryToInitInterval)();
      (0,_hide_element__WEBPACK_IMPORTED_MODULE_3__.addNewMessageEventListener)();
      (0,_hide_element__WEBPACK_IMPORTED_MODULE_3__.returnMessagesEventListener)();
      chrome.storage.sync.get('isExtensionOn', function (data) {
        if (data.isExtensionOn) {
          (0,_controls__WEBPACK_IMPORTED_MODULE_1__.hideExistingMessages)();
        }
      });
    }
  });
}
init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO01BQzVCRSwwRUFBMkIsQ0FBQyxDQUFDO01BQzdCaEQsTUFBTSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFTQyxJQUFJLEVBQUU7UUFDcEQsSUFBSUEsSUFBSSxDQUFDUSxhQUFhLEVBQUU7VUFDcEJDLCtEQUFvQixDQUFDLENBQUM7UUFDMUI7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKLENBQUMsQ0FBQztBQUNOO0FBRUFrRSxJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vaGlkZV9lbGVtZW50LmpzIiwid2VicGFjazovL3ZrLW11dGUvLi9zcmMvdXRpbHMvVXJsLmpzIiwid2VicGFjazovL3ZrLW11dGUvLi9zcmMvdXRpbHMvZ2V0Q2hhdEJvZHkuanMiLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vZG9tLmNzcyIsIndlYnBhY2s6Ly92ay1tdXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92ay1tdXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vbXV0ZS5zdmciLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vZG9tLmNzcz85YjZhIiwid2VicGFjazovL3ZrLW11dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdmstbXV0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92ay1tdXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZrLW11dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZrLW11dGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92ay1tdXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmstbXV0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdmstbXV0ZS8uL3NyYy9kb20vbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldENoYXRCb2R5fSBmcm9tIFwiLi4vdXRpbHMvZ2V0Q2hhdEJvZHlcIjtcbmltcG9ydCBtdXRlU3ZnIGZyb20gXCIuL211dGUuc3ZnXCI7XG5cbi8qKlxuICpcbiAqIEBwYXJhbSBpZCB7U3RyaW5nfVxuICogQHJldHVybiB7SFRNTFNwYW5FbGVtZW50fVxuICovXG5mdW5jdGlvbiBtdXRlQnRuSFRNTChpZCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ltLW1lc3MtLW11dGUnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCBgbXV0ZSR7aWR9YCk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xhYmVsJywgJ9CX0LDQs9C70YPRiNC40YLRjCcpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gbXV0ZVN2ZyArICc8ZGl2IGNsYXNzPVwibXV0ZV90b29sdGlwIHR0X3cgdHRfYmxhY2sgdHRfZG93blwiPjxkaXYgY2xhc3M9XCJ0dF90ZXh0XCI+0JfQsNCz0LvRg9GI0LjRgtGMPC9kaXY+PC9kaXY+JztcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuLyoqXG4gKiBcbiAqIEBwYXJhbSB0YXJnZXQge0hUTUxFbGVuZW10fVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJ5VG9BZGRDb250cm9scyh0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2ltLW1lc3MtLWNoZWNrIGZsX2wnKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgYWRkQ29udHJvbEJ1dHRvbihtZXNzYWdlKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ3JlYXRlIG11dGUgYnV0dG9uIGFuZCBpbnNldCBpdCB0byB0aGUgYWN0aW9uQXJlYVxuICogQHBhcmFtIGFjdGlvbkFyZWEge0hUTUxFbGVtZW50fVxuICogQHBhcmFtIHNlbmRlcklkIHtTdHJpbmd9XG4gKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gYWRkTXV0ZUJ1dHRvbihhY3Rpb25BcmVhLCBzZW5kZXJJZCkge1xuICAgIGNvbnN0IG11dGVCdXR0b24gPSBtdXRlQnRuSFRNTChzZW5kZXJJZCk7XG4gICAgYWN0aW9uQXJlYS5hcHBlbmRDaGlsZChtdXRlQnV0dG9uKTtcbiAgICBtdXRlQnV0dG9uLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHJldHVybiBtdXRlQnV0dG9uO1xufVxuXG4vKipcbiAqIEFkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGFjdGlvbkFyZWFcbiAqIEBwYXJhbSBhY3Rpb25zQXJlYSB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGFkZEFjdGlvbkFyZWFFdmVudHMoYWN0aW9uc0FyZWEpIHtcbiAgICBhY3Rpb25zQXJlYS5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC50YXJnZXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImltLW1lc3MtLW11dGVcIilbMF0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgIH0pO1xuXG4gICAgYWN0aW9uc0FyZWEucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbS1tZXNzLS1tdXRlXCIpWzBdLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIH0pO1xufVxuXG4vKipcbiAqXG4gKiBAdGhpcyB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIHNldElkVG9IaWRlSGFuZGxlKCkge1xuICAgIGNvbnN0IGNsaWNrZWRJZCA9IHRoaXMuaWQuc3Vic3RyaW5nKDQpO1xuICAgIGxldCBjbGlja2VkTmFtZSA9IHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjbGlja2VkTmFtZSA9IGNsaWNrZWROYW1lLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcblxuICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KCdpZHNUb0hpZGUnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBpZHNUb0hpZGUgPSBkYXRhLmlkc1RvSGlkZSB8fCBbXTtcbiAgICAgICAgaWYgKGlkc1RvSGlkZS5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09IGNsaWNrZWRJZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZHNUb0hpZGUucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGNsaWNrZWRJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBjbGlja2VkTmFtZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7aWRzVG9IaWRlOiBpZHNUb0hpZGV9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lzRXh0ZW5zaW9uT24nLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzRXh0ZW5zaW9uT24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlRXhpc3RpbmdNZXNzYWdlcygpIHtcbiAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaWRzVG9IaWRlJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmlkc1RvSGlkZS5maWx0ZXIodXNlciA9PiB1c2VyLmlkID09IGl0ZW0uZGF0YXNldC5wZWVyKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vLyBUcnkgdG8gYWRkIGNvbnRyb2xzIHVudGlsIHN1Y2Nlc3NmdWwuIE5lZWRlZCBmb3IgcGFnZSByZWZyZXNoLlxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyeVRvSW5pdEludGVydmFsKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCF0cnlUb0luaXRDb250cm9scyhjb250cm9sc0ludGVydmFsKSl7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGNvbnRyb2xzSW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgfSwgMjAwKVxuICAgIHJldHVybiBjb250cm9sc0ludGVydmFsO1xufVxuXG4vKipcbiAqXG4gKiBAcGFyYW0gbWVzc2FnZSB7SFRNTEVsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGFkZENvbnRyb2xCdXR0b24obWVzc2FnZSkge1xuICAgIC8vIENoZWNrIGlmIG1lc3NhZ2UgaXMgbm90IGFuIG91dGdvaW5nIG9uZVxuICAgIGlmICghbWVzc2FnZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ltLW1lc3Nfb3V0JykpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uc0FyZWEgPSBtZXNzYWdlLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpbS1tZXNzLS1hY3Rpb25zXCIpWzBdO1xuICAgICAgICBpZiAoYWN0aW9uc0FyZWEgJiYgYWN0aW9uc0FyZWEubGFzdENoaWxkLmNsYXNzTmFtZSAhPT0gXCJpbS1tZXNzLS1tdXRlXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbmRlcklkID0gbWVzc2FnZS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFtcImRhdGFzZXRcIl0ucGVlcjtcbiAgICAgICAgICAgIGNvbnN0IG11dGVCdG4gPSBhZGRNdXRlQnV0dG9uKGFjdGlvbnNBcmVhLCBzZW5kZXJJZCk7XG4gICAgICAgICAgICBhZGRBY3Rpb25BcmVhRXZlbnRzKGFjdGlvbnNBcmVhKTtcbiAgICAgICAgICAgIG11dGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNldElkVG9IaWRlSGFuZGxlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ5VG9Jbml0Q29udHJvbHMoKSB7XG4gICAgbGV0IHN0YXR1cyA9IHRydWU7XG4gICAgY29uc3QgY2hhdEJvZHkgPSBnZXRDaGF0Qm9keSgpO1xuICAgIGlmKCFjaGF0Qm9keSkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGl0ZW0uY2xhc3NOYW1lLmluY2x1ZGVzKCdpbS1tZXNzLXN0YWNrIF9pbV9tZXNzX3N0YWNrJykpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlcyA9IGl0ZW0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW0tbWVzcyBfaW1fbWVzcycpO1xuICAgICAgICAgICAgZm9yIChsZXQgbWVzc2FnZSBvZiBtZXNzYWdlcykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGFkZENvbnRyb2xCdXR0b24obWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXR1cztcbn1cbiIsImltcG9ydCB7Z2V0Q2hhdEJvZHl9IGZyb20gXCIuLi91dGlscy9nZXRDaGF0Qm9keVwiO1xuaW1wb3J0IHt0cnlUb0FkZENvbnRyb2xzLCBoaWRlRXhpc3RpbmdNZXNzYWdlc30gZnJvbSBcIi4vY29udHJvbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZE5ld01lc3NhZ2VFdmVudExpc3RlbmVyKCkge1xuICAgIGNvbnN0IGNoYXRCb2R5ID0gZ2V0Q2hhdEJvZHkoKTtcbiAgICBjaGF0Qm9keS5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBuZXdNZXNzYWdlSGFuZGxlcihldmVudC50YXJnZXQpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG5ld01lc3NhZ2VIYW5kbGVyKG1lc3NhZ2UpIHtcbiAgICB0cnlUb0FkZENvbnRyb2xzKG1lc3NhZ2UpO1xuICAgIGlmIChtZXNzYWdlLmNsYXNzTmFtZSA9PT0gJ2ltLW1lc3Mtc3RhY2sgX2ltX21lc3Nfc3RhY2sgJykge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaXNFeHRlbnNpb25PbicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmlzRXh0ZW5zaW9uT24pIHtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaWRzVG9IaWRlJywgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZHNUb0hpZGUuZmlsdGVyKHVzZXIgPT4gdXNlci5pZCA9PSBtZXNzYWdlLmRhdGFzZXQucGVlcikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmV0dXJuTWVzc2FnZXNFdmVudExpc3RlbmVyKCkge1xuICAgIGNocm9tZS5zdG9yYWdlLm9uQ2hhbmdlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbihjaGFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IGlzRXh0ZW5zaW9uT24gPSBjaGFuZ2VzLmlzRXh0ZW5zaW9uT247XG4gICAgICAgIGNvbnN0IGlkc1RvSGlkZSA9IGNoYW5nZXMuaWRzVG9IaWRlO1xuICAgICAgICBjb25zdCBjaGF0Qm9keSA9IGdldENoYXRCb2R5KCk7XG4gICAgICAgIGlmIChpc0V4dGVuc2lvbk9uKSB7XG4gICAgICAgICAgICBpZiAoaXNFeHRlbnNpb25Pbi5uZXdWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGNoYXRCb2R5LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlkc1RvSGlkZSkge1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoJ2lzRXh0ZW5zaW9uT24nLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXNFeHRlbnNpb25Pbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaWRzVG9IaWRlLm5ld1ZhbHVlLmxlbmd0aCA8IGlkc1RvSGlkZS5vbGRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGl0ZW0gb2YgY2hhdEJvZHkuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoaWRlRXhpc3RpbmdNZXNzYWdlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBjaGF0Qm9keS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHNUb0hpZGUubmV3VmFsdWUuZmlsdGVyKHVzZXIgPT4gdXNlci5pZCA9PSBpdGVtLmRhdGFzZXQucGVlcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufSIsImNvbnN0IElOVEVSVkFMX1RJTUUgPSAxMDA7XG5cbmV4cG9ydCBjbGFzcyBVcmxDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICB0aGlzLl91cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShjYikge1xuICAgICAgICB0aGlzLl9jaGFuZ2VMaXN0ZW5lcnMucHVzaChjYik7XG4gICAgICAgIGlmICh0aGlzLl9pbnRlcnZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlSW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoY2IpIHtcbiAgICAgICAgdGhpcy5fY2hhbmdlTGlzdGVuZXJzID0gdGhpcy5fY2hhbmdlTGlzdGVuZXJzLmZpbHRlcihpdGVtPT5pdGVtICE9PSBjYik7XG4gICAgICAgIGlmKHRoaXMuX2NoYW5nZUxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2NsZWFySW50ZXJ2YWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9pbnRlcnZhbFRpY2soKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgaWYgKGN1cnJlbnRVcmwgIT09IHRoaXMudXJsKSB7XG4gICAgICAgICAgICB0aGlzLl9icm9hZGNhc3QodGhpcy51cmwsIGN1cnJlbnRVcmwpO1xuICAgICAgICAgICAgdGhpcy51cmwgPSBjdXJyZW50VXJsO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBfYnJvYWRjYXN0KG9sZFVybCwgbmV3VXJsKSB7XG4gICAgICAgIHRoaXMuX2NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGNiID0+IGNiKG9sZFVybCwgbmV3VXJsKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUludGVydmFsKCkge1xuICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5faW50ZXJ2YWxUaWNrKCksIElOVEVSVkFMX1RJTUUpXG4gICAgfVxuXG4gICAgX2NsZWFySW50ZXJ2YWwoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbClcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IG51bGxcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q2hhdEJvZHkoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJfaW1fcGVlcl9oaXN0b3J5IGltLXBhZ2UtY2hhdC1jb250YWluXCIpWzBdO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubXV0ZV90b29sdGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm11dGVfdG9vbHRpcDo6YWZ0ZXIge1xcbiAgICBsZWZ0OiA2MXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xcbi5pbS1tZXNzLS1tdXRlOmhvdmVyIC5tdXRlX3Rvb2x0aXAge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW0tbWVzcy0tbXV0ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgY29sb3I6IHZhcigtLXZrdWktLWNvbG9yX2ljb25fc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmltLW1lc3MtLW11dGU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW0tbWVzcy0tYWN0aW9ucyB7XFxuICAgIG1hcmdpbi1yaWdodDogLTMwcHggIWltcG9ydGFudDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2RvbS9kb20uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSxvRUFBb0U7QUFDcEU7SUFDSSx5QkFBeUI7SUFDekIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubXV0ZV90b29sdGlwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtNTBweDtcXG4gICAgdG9wOiAtMzNweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm11dGVfdG9vbHRpcDo6YWZ0ZXIge1xcbiAgICBsZWZ0OiA2MXB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xcbi5pbS1tZXNzLS1tdXRlOmhvdmVyIC5tdXRlX3Rvb2x0aXAge1xcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW0tbWVzcy0tbXV0ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gICAgY29sb3I6IHZhcigtLXZrdWktLWNvbG9yX2ljb25fc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmltLW1lc3MtLW11dGU6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW0tbWVzcy0tYWN0aW9ucyB7XFxuICAgIG1hcmdpbi1yaWdodDogLTMwcHggIWltcG9ydGFudDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBcIjxzdmcgXFxuICB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIFxcbiAgd2lkdGg9XFxcIjE2XFxcIiBcXG4gIGhlaWdodD1cXFwiMTZcXFwiIFxcbiAgZmlsbD1cXFwiY3VycmVudENvbG9yXFxcIiBcXG4gIHZpZXdCb3g9XFxcIjIgMSAxMyAxM1xcXCJcXG4+XFxuICA8cGF0aCBkPVxcXCJNNC42OSA1LjUgMTEgMTEuOHYxLjdjMCAuMy0uMjMuNDctLjQ5LjVsLTMuNjMtMy41SDRhMSAxIDAgMCAxLTEtMXYtM2ExIDEgMCAwIDEgMS0xaC42OVptLjc3LTIuODUgMi4yIDIuMTlMMTAuNSAyLjVjLjI3LjAyLjQ5LjIuNDkuNDh2NS4ybDIuNiAyLjZhLjc1Ljc1IDAgMCAxLTEuMDYgMS4wNkw0LjQgMy43MWEuNzUuNzUgMCAwIDEgMS4wNi0xLjA2WlxcXCI+PC9wYXRoPlxcbjwvc3ZnPlxcblwiOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kb20uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9kb20uY3NzJ1xuaW1wb3J0IHtjcmVhdGVUcnlUb0luaXRJbnRlcnZhbCwgaGlkZUV4aXN0aW5nTWVzc2FnZXMsIHRyeVRvSW5pdENvbnRyb2xzfSBmcm9tIFwiLi9jb250cm9sc1wiO1xuaW1wb3J0IHtVcmxDb250cm9sbGVyfSBmcm9tIFwiLi4vdXRpbHMvVXJsXCI7XG5pbXBvcnQge2FkZE5ld01lc3NhZ2VFdmVudExpc3RlbmVyLCByZXR1cm5NZXNzYWdlc0V2ZW50TGlzdGVuZXJ9IGZyb20gXCIuL2hpZGVfZWxlbWVudFwiO1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVcmxDb250cm9sbGVyKCk7XG4gICAgdXJsLm9uQ2hhbmdlKCgpID0+IHtcbiAgICAgICAgaWYgKHRyeVRvSW5pdENvbnRyb2xzKCkpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyeVRvSW5pdEludGVydmFsKCk7XG4gICAgICAgICAgICBhZGROZXdNZXNzYWdlRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgcmV0dXJuTWVzc2FnZXNFdmVudExpc3RlbmVyKCk7XG4gICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCgnaXNFeHRlbnNpb25PbicsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pc0V4dGVuc2lvbk9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZGVFeGlzdGluZ01lc3NhZ2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5pbml0KCk7Il0sIm5hbWVzIjpbImdldENoYXRCb2R5IiwibXV0ZVN2ZyIsIm11dGVCdG5IVE1MIiwiaWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY29uY2F0IiwiaW5uZXJIVE1MIiwidHJ5VG9BZGRDb250cm9scyIsInRhcmdldCIsImNsYXNzTmFtZSIsIm1lc3NhZ2UiLCJwYXJlbnRFbGVtZW50IiwiYWRkQ29udHJvbEJ1dHRvbiIsImFkZE11dGVCdXR0b24iLCJhY3Rpb25BcmVhIiwic2VuZGVySWQiLCJtdXRlQnV0dG9uIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInZpc2liaWxpdHkiLCJhZGRBY3Rpb25BcmVhRXZlbnRzIiwiYWN0aW9uc0FyZWEiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2V0SWRUb0hpZGVIYW5kbGUiLCJjbGlja2VkSWQiLCJzdWJzdHJpbmciLCJjbGlja2VkTmFtZSIsImNoaWxkcmVuIiwiaW5uZXJUZXh0IiwiY2hyb21lIiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJkYXRhIiwiaWRzVG9IaWRlIiwiZmlsdGVyIiwidXNlciIsImxlbmd0aCIsInB1c2giLCJuYW1lIiwic2V0IiwiaXNFeHRlbnNpb25PbiIsImhpZGVFeGlzdGluZ01lc3NhZ2VzIiwiY2hhdEJvZHkiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwiX2xvb3AiLCJpdGVtIiwidmFsdWUiLCJkYXRhc2V0IiwicGVlciIsImRpc3BsYXkiLCJzIiwibiIsImRvbmUiLCJlcnIiLCJlIiwiZiIsImNyZWF0ZVRyeVRvSW5pdEludGVydmFsIiwiY29udHJvbHNJbnRlcnZhbCIsInNldEludGVydmFsIiwidHJ5VG9Jbml0Q29udHJvbHMiLCJjbGVhckludGVydmFsIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJsYXN0Q2hpbGQiLCJtdXRlQnRuIiwic3RhdHVzIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsImluY2x1ZGVzIiwibWVzc2FnZXMiLCJfaXRlcmF0b3IzIiwiX3N0ZXAzIiwiYWRkTmV3TWVzc2FnZUV2ZW50TGlzdGVuZXIiLCJuZXdNZXNzYWdlSGFuZGxlciIsInJldHVybk1lc3NhZ2VzRXZlbnRMaXN0ZW5lciIsIm9uQ2hhbmdlZCIsImFkZExpc3RlbmVyIiwiY2hhbmdlcyIsIm5ld1ZhbHVlIiwib2xkVmFsdWUiLCJJTlRFUlZBTF9USU1FIiwiVXJsQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jaGFuZ2VMaXN0ZW5lcnMiLCJfaW50ZXJ2YWwiLCJfdXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiX2NyZWF0ZUNsYXNzIiwia2V5Iiwib25DaGFuZ2UiLCJjYiIsIl9jcmVhdGVJbnRlcnZhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfY2xlYXJJbnRlcnZhbCIsIl9pbnRlcnZhbFRpY2siLCJjdXJyZW50VXJsIiwidXJsIiwiX2Jyb2FkY2FzdCIsIm9sZFVybCIsIm5ld1VybCIsImZvckVhY2giLCJfdGhpcyIsImludGVydmFsIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=