(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function _tryApplyUpdates() {
  _tryApplyUpdates = // This function reads code updates on the fly and hard
  // reloads the page when it has changed.
  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch(typeof __webpack_require__.j !== 'undefined' ? "".concat(hotUpdatePath).concat(curHash, ".").concat(__webpack_require__.j, ".hot-update.json") : "".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils).setupPing(assetPrefix, function () {
  return page;
});
(0, _fouc).displayContent();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response1 = window.Response;
var TextDecoder1 = window.TextDecoder;
var TextEncoder1 = window.TextEncoder;
var AbortController1 = window.AbortController;

if (AbortController1 == undefined) {
  AbortController1 = function AbortController1() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 128 >> shift && codePoint << shift <= 2047;
    }

    if (octetsCount === 2) {
      return codePoint >= 2048 >> shift && codePoint << shift <= 55295 || codePoint >= 57344 >> shift && codePoint << shift <= 65535;
    }

    if (octetsCount === 3) {
      return codePoint >= 65536 >> shift && codePoint << shift <= 1114111;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 65533;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 65535) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
        string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder1().decode(new TextEncoder1().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder1 == undefined || TextEncoder1 == undefined || !supportsStreamOption()) {
  TextDecoder1 = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 32);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers1 = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers1), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers2) {
  this._headers = headers2;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers2) {
  var controller = new AbortController1();
  var signal = controller.signal // see #120
  ;
  var textDecoder = new TextDecoder1();
  fetch(url, {
    headers: headers2,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget1() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget1;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget1.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget1.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget1.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event1(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event1;

function MessageEvent1(type, options) {
  Event1.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent1;
MessageEvent1.prototype = Object.create(Event1.prototype);

function ConnectionEvent(type, options) {
  Event1.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event1.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget1.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response1 != undefined && 'body' in Response1.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers2 = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers3, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent1(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event1('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers2 != undefined) {
      for (var name in headers2) {
        if (Object.prototype.hasOwnProperty.call(headers2, name)) {
          requestHeaders[name] = headers2[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget1.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget1");
$RefreshReg$(_c8, "Event1");
$RefreshReg$(_c9, "MessageEvent1");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.displayContent = displayContent;

function displayContent(callback) {
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource).getEventSourceWrapper({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(encodeURIComponent(currentPage)),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data); // don't attempt fetching the page if we're already showing
      // the dev overlay as this can cause the error to be triggered
      // repeatedly

      if (payload.invalid && !self.__NEXT_DATA__.err) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsbUJBQW1CO0FBQ3BEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7O0FBRWxCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQkFBZ0I7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQSxZQUFZO0FBQ1o7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixDQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvYW1wLWRldi5qcyIsIndlYnBhY2s6Ly9fTl9FL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly9fTl9FL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvZXZlbnQtc291cmNlLXBvbHlmaWxsLmpzIiwid2VicGFjazovL19OX0UvX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9mb3VjLmpzIiwid2VicGFjazovL19OX0UvX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9vbi1kZW1hbmQtZW50cmllcy11dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FL19OX0UvLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfZXZlbnRTb3VyY2VQb2x5ZmlsbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZXZlbnQtc291cmNlLXBvbHlmaWxsXCIpKTtcbnZhciBfZXZlbnRzb3VyY2UgPSByZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpO1xudmFyIF9vbkRlbWFuZEVudHJpZXNVdGlscyA9IHJlcXVpcmUoXCIuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzXCIpO1xudmFyIF9mb3VjID0gcmVxdWlyZShcIi4vZm91Y1wiKTtcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgICB9XG59XG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG4gICAgICAgICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5pZiAoIXdpbmRvdy5FdmVudFNvdXJjZSkge1xuICAgIHdpbmRvdy5FdmVudFNvdXJjZSA9IF9ldmVudFNvdXJjZVBvbHlmaWxsLmRlZmF1bHQ7XG59XG5jb25zdCBkYXRhID0gSlNPTi5wYXJzZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnX19ORVhUX0RBVEFfXycpLnRleHRDb250ZW50KTtcbmxldCB7IGFzc2V0UHJlZml4ICwgcGFnZSAgfSA9IGRhdGE7XG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnO1xubGV0IG1vc3RSZWNlbnRIYXNoID0gbnVsbDtcbi8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqLyBsZXQgY3VySGFzaCA9IF9fd2VicGFja19oYXNoX187XG5jb25zdCBob3RVcGRhdGVQYXRoID0gYXNzZXRQcmVmaXggKyAoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArICdfbmV4dC9zdGF0aWMvd2VicGFjay8nO1xuLy8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpIHtcbiAgICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxuICAgIC8vIEl0J3MgYSBnbG9iYWwgdmFyaWFibGUgaW5qZWN0ZWQgYnkgV2VicGFjay5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi8gcmV0dXJuIG1vc3RSZWNlbnRIYXNoICE9PSBfX3dlYnBhY2tfaGFzaF9fO1xufVxuLy8gV2VicGFjayBkaXNhbGxvd3MgdXBkYXRlcyBpbiBvdGhlciBzdGF0ZXMuXG5mdW5jdGlvbiBjYW5BcHBseVVwZGF0ZXMoKSB7XG4gICAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJztcbn1cbmZ1bmN0aW9uIF90cnlBcHBseVVwZGF0ZXMoKSB7XG4gICAgX3RyeUFwcGx5VXBkYXRlcyA9IC8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcbiAgICAvLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG4gICAgX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qKCkge1xuICAgICAgICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGZldGNoKHR5cGVvZiBfX3dlYnBhY2tfcnVudGltZV9pZF9fICE9PSAndW5kZWZpbmVkJyA/IGAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS4ke19fd2VicGFja19ydW50aW1lX2lkX199LmhvdC11cGRhdGUuanNvbmAgOiBgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uaG90LXVwZGF0ZS5qc29uYCk7XG4gICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IHlpZWxkIHJlcy5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2U7XG4gICAgICAgICAgICAvLyB3ZWJwYWNrIDUgdXNlcyBhbiBhcnJheSBpbnN0ZWFkXG4gICAgICAgICAgICBjb25zdCBwYWdlVXBkYXRlZCA9IChBcnJheS5pc0FycmF5KGpzb25EYXRhLmMpID8ganNvbkRhdGEuYyA6IE9iamVjdC5rZXlzKGpzb25EYXRhLmMpKS5zb21lKChtb2QpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZC5pbmRleE9mKGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWApICE9PSAtMSB8fCBtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpKSAhPT0gLTE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwYWdlVXBkYXRlZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VySGFzaCA9IG1vc3RSZWNlbnRIYXNoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGNoZWNraW5nIGZvciB1cGRhdGUnLCBlcnIpO1xuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF90cnlBcHBseVVwZGF0ZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbmZ1bmN0aW9uIHRyeUFwcGx5VXBkYXRlcygpIHtcbiAgICByZXR1cm4gX3RyeUFwcGx5VXBkYXRlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuKDAsIF9ldmVudHNvdXJjZSkuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCk9PntcbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgICBpZiAobWVzc2FnZS5hY3Rpb24gPT09ICdzeW5jJyB8fCBtZXNzYWdlLmFjdGlvbiA9PT0gJ2J1aWx0Jykge1xuICAgICAgICAgICAgaWYgKCFtZXNzYWdlLmhhc2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaDtcbiAgICAgICAgICAgIHRyeUFwcGx5VXBkYXRlcygpO1xuICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAncmVsb2FkUGFnZScpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJyArIGV2ZW50LmRhdGEgKyAnXFxuJyArIGV4KTtcbiAgICB9XG59KTtcbigwLCBfb25EZW1hbmRFbnRyaWVzVXRpbHMpLnNldHVwUGluZyhhc3NldFByZWZpeCwgKCk9PnBhZ2Vcbik7XG4oMCwgX2ZvdWMpLmRpc3BsYXlDb250ZW50KCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1kZXYuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFkZE1lc3NhZ2VMaXN0ZW5lciA9IGFkZE1lc3NhZ2VMaXN0ZW5lcjtcbmV4cG9ydHMuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyO1xuY29uc3QgZXZlbnRDYWxsYmFja3MgPSBbXTtcbmZ1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gICAgdmFyIHNvdXJjZTtcbiAgICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gW107XG4gICAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcbiAgICAgICAgb3B0aW9ucy50aW1lb3V0ID0gMjAgKiAxMDAwO1xuICAgIH1cbiAgICBpbml0KCk7XG4gICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChuZXcgRGF0ZSgpIC0gbGFzdEFjdGl2aXR5ID4gb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICAgICAgICBoYW5kbGVEaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKTtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBzb3VyY2UgPSBuZXcgd2luZG93LkV2ZW50U291cmNlKG9wdGlvbnMucGF0aCk7XG4gICAgICAgIHNvdXJjZS5vbm9wZW4gPSBoYW5kbGVPbmxpbmU7XG4gICAgICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdDtcbiAgICAgICAgc291cmNlLm9ubWVzc2FnZSA9IGhhbmRsZU1lc3NhZ2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJyk7XG4gICAgICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+e1xuICAgICAgICAgICAgaWYgKCFjYi51bmZpbHRlcmVkICYmIGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykgPT09IC0xKSByZXR1cm47XG4gICAgICAgICAgICBjYihldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVEaXNjb25uZWN0KCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgc291cmNlLmNsb3NlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoaW5pdCwgb3B0aW9ucy50aW1lb3V0KTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2xvc2U6ICgpPT57XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIHNvdXJjZS5jbG9zZSgpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChmbik7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGNiKSB7XG4gICAgZXZlbnRDYWxsYmFja3MucHVzaChjYik7XG59XG5mdW5jdGlvbiBnZXRFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICAgIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50c291cmNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuLyogZXNsaW50LWRpc2FibGUgKi8gLy8gSW1wcm92ZWQgdmVyc2lvbiBvZiBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0V2ZW50U291cmNlL1xuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXG4vLyBPbmx5IHRyaWVzIHRvIHN1cHBvcnQgSUUxMSBhbmQgbm90aGluZyBiZWxvd1xudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xudmFyIFJlc3BvbnNlMSA9IHdpbmRvdy5SZXNwb25zZTtcbnZhciBUZXh0RGVjb2RlcjEgPSB3aW5kb3cuVGV4dERlY29kZXI7XG52YXIgVGV4dEVuY29kZXIxID0gd2luZG93LlRleHRFbmNvZGVyO1xudmFyIEFib3J0Q29udHJvbGxlcjEgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyO1xuaWYgKEFib3J0Q29udHJvbGxlcjEgPT0gdW5kZWZpbmVkKSB7XG4gICAgQWJvcnRDb250cm9sbGVyMSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNpZ25hbCA9IG51bGw7XG4gICAgICAgIHRoaXMuYWJvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpIHtcbiAgICB0aGlzLmJpdHNOZWVkZWQgPSAwO1xuICAgIHRoaXMuY29kZVBvaW50ID0gMDtcbn1cblRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKG9jdGV0cykge1xuICAgIGZ1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCwgc2hpZnQsIG9jdGV0c0NvdW50KSB7XG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAxMjggPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDIwNDc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9jdGV0c0NvdW50ID09PSAyKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID49IDIwNDggPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDU1Mjk1IHx8IGNvZGVQb2ludCA+PSA1NzM0NCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gNjU1MzU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID49IDY1NTM2ID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAxMTE0MTExO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpIHtcbiAgICAgICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID4+IDYgPiAxNSA/IDMgOiBjb2RlUG9pbnQgPiAzMSA/IDIgOiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMikge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+IDE1ID8gMyA6IDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAzKSB7XG4gICAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgdmFyIFJFUExBQ0VSID0gNjU1MzM7XG4gICAgdmFyIHN0cmluZyA9ICcnO1xuICAgIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkO1xuICAgIHZhciBjb2RlUG9pbnQgPSB0aGlzLmNvZGVQb2ludDtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgb2N0ZXRzLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgdmFyIG9jdGV0ID0gb2N0ZXRzW2ldO1xuICAgICAgICBpZiAoYml0c05lZWRlZCAhPT0gMCkge1xuICAgICAgICAgICAgaWYgKG9jdGV0IDwgMTI4IHx8IG9jdGV0ID4gMTkxIHx8ICF2YWxpZChjb2RlUG9pbnQgPDwgNiB8IG9jdGV0ICYgNjMsIGJpdHNOZWVkZWQgLSA2LCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKSkge1xuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSAwO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSO1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSAwO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IG9jdGV0O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDYgKiAxO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMzE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDI7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiAxNTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMztcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSAwO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJpdHNOZWVkZWQgIT09IDAgJiYgIXZhbGlkKGNvZGVQb2ludCwgYml0c05lZWRlZCwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSkpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJpdHNOZWVkZWQgLT0gNjtcbiAgICAgICAgICAgIGNvZGVQb2ludCA9IGNvZGVQb2ludCA8PCA2IHwgb2N0ZXQgJiA2MztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKGNvZGVQb2ludCA8PSA2NTUzNSkge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU1Mjk2ICsgKGNvZGVQb2ludCAtIDY1NTM1IC0gMSA+PiAxMCkpO1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDU2MzIwICsgKGNvZGVQb2ludCAtIDY1NTM1IC0gMSAmIDEwMjMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkO1xuICAgIHRoaXMuY29kZVBvaW50ID0gY29kZVBvaW50O1xuICAgIHJldHVybiBzdHJpbmc7XG59O1xuLy8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIxKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcjEoKS5lbmNvZGUoJ3Rlc3QnKSwge1xuICAgICAgICAgICAgc3RyZWFtOiB0cnVlXG4gICAgICAgIH0pID09PSAndGVzdCc7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuLy8gSUUsIEVkZ2VcbmlmIChUZXh0RGVjb2RlcjEgPT0gdW5kZWZpbmVkIHx8IFRleHRFbmNvZGVyMSA9PSB1bmRlZmluZWQgfHwgIXN1cHBvcnRzU3RyZWFtT3B0aW9uKCkpIHtcbiAgICBUZXh0RGVjb2RlcjEgPSBUZXh0RGVjb2RlclBvbHlmaWxsO1xufVxudmFyIGsgPSBmdW5jdGlvbigpIHtcbn07XG5mdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xuICAgIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgdGhpcy5yZXNwb25zZVR5cGUgPSAnJztcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAwO1xuICAgIHRoaXMuc3RhdHVzID0gMDtcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnJztcbiAgICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnO1xuICAgIHRoaXMub25wcm9ncmVzcyA9IGs7XG4gICAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrO1xuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gJyc7XG4gICAgdGhpcy5feGhyID0geGhyO1xuICAgIHRoaXMuX3NlbmRUaW1lb3V0ID0gMDtcbiAgICB0aGlzLl9hYm9ydCA9IGs7XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24obWV0aG9kLCB1cmwpIHtcbiAgICB0aGlzLl9hYm9ydCh0cnVlKTtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHhociA9IHRoaXMuX3hocjtcbiAgICB2YXIgc3RhdGUgPSAxO1xuICAgIHZhciB0aW1lb3V0ID0gMDtcbiAgICB0aGlzLl9hYm9ydCA9IGZ1bmN0aW9uKHNpbGVudCkge1xuICAgICAgICBpZiAodGhhdC5fc2VuZFRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGF0Ll9zZW5kVGltZW91dCk7XG4gICAgICAgICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBzdGF0ZSA9IDQ7XG4gICAgICAgICAgICB4aHIub25sb2FkID0gaztcbiAgICAgICAgICAgIHhoci5vbmVycm9yID0gaztcbiAgICAgICAgICAgIHhoci5vbmFib3J0ID0gaztcbiAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gaztcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrO1xuICAgICAgICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgICAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDQ7XG4gICAgICAgICAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdGF0ZSA9IDA7XG4gICAgfTtcbiAgICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoc3RhdGUgPT09IDEpIHtcbiAgICAgICAgICAgIC8vIHN0YXRlID0gMjtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSAwO1xuICAgICAgICAgICAgdmFyIHN0YXR1c1RleHQgPSAnJztcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghKCdjb250ZW50VHlwZScgaW4geGhyKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbiAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmEgPCAxMSB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94IDwgMTQsIENocm9tZSA/LCBTYWZhcmkgP1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yOTY1OFxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMjAwO1xuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSAnT0snO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXR1cyAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyO1xuICAgICAgICAgICAgICAgIHRoYXQuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZTtcbiAgICAgICAgICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBvblN0YXJ0KCk7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgc3RhdGUgPSAzO1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9ICcnO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDM7XG4gICAgICAgICAgICB0aGF0LnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIHRoYXQub25wcm9ncmVzcygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuICAgICAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxuICAgICAgICBvblByb2dyZXNzKCk7XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgc3RhdGUgPSA0O1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0O1xuICAgICAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uUmVhZHlTdGF0ZUNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeGhyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gT3BlcmEgMTJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIG9uRmluaXNoKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgICAgIG9uU3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xuICAgICAgICB9LCA1MDApO1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3MoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbiAgICB4aHIub25sb2FkID0gb25GaW5pc2g7XG4gICAgeGhyLm9uZXJyb3IgPSBvbkZpbmlzaDtcbiAgICAvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4gICAgLy8gc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc2ODU5NlxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbiAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcbiAgICB4aHIub25hYm9ydCA9IG9uRmluaXNoO1xuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xuICAgIGlmICghKCdzZW5kQXNCaW5hcnknIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiYgISgnbW96QW5vbicgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSkge1xuICAgICAgICB4aHIub25wcm9ncmVzcyA9IG9uUHJvZ3Jlc3M7XG4gICAgfVxuICAgIC8vIElFIDggLSA5IChYTUxIVFRQUmVxdWVzdClcbiAgICAvLyBPcGVyYSA8IDEyXG4gICAgLy8gRmlyZWZveCA8IDMuNVxuICAgIC8vIEZpcmVmb3ggMy41IC0gMy42IC0gPyA8IDkuMFxuICAgIC8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4gICAgLy8gc2VlIGFsc28gIzY0XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG9uUmVhZHlTdGF0ZUNoYW5nZTtcbiAgICBpZiAoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpIHtcbiAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJztcbiAgICB9XG4gICAgeGhyLm9wZW4obWV0aG9kLCB1cmwsIHRydWUpO1xuICAgIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XG4gICAgICAgIC8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuICAgICAgICAvLyAjOTFcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxufTtcblhIUldyYXBwZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYWJvcnQoZmFsc2UpO1xufTtcblhIUldyYXBwZXIucHJvdG90eXBlLmdldFJlc3BvbnNlSGVhZGVyID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZTtcbn07XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgeGhyID0gdGhpcy5feGhyO1xuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4geGhyKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICB9XG59O1xuWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkID8gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIDogJyc7XG59O1xuWEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuICAgIGlmICghKCdvbnRpbWVvdXQnIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiYgZG9jdW1lbnQgIT0gdW5kZWZpbmVkICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDA7XG4gICAgICAgICAgICB0aGF0LnNlbmQoKTtcbiAgICAgICAgfSwgNCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHhociA9IHRoaXMuX3hocjtcbiAgICAvLyB3aXRoQ3JlZGVudGlhbHMgc2hvdWxkIGJlIHNldCBhZnRlciBcIm9wZW5cIiBmb3IgU2FmYXJpIGFuZCBDaHJvbWUgKDwgMTkgPylcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHM7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIHhoci5zZW5kKCk7IHRocm93cyBcIk5vdCBlbm91Z2ggYXJndW1lbnRzXCIgaW4gRmlyZWZveCAzLjBcbiAgICAgICAgeGhyLnNlbmQodW5kZWZpbmVkKTtcbiAgICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAgICAgLy8gU2FmYXJpIDUuMS43LCBPcGVyYSAxMlxuICAgICAgICB0aHJvdyBlcnJvcjE7XG4gICAgfVxufTtcbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLCBmdW5jdGlvbihjKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSArIDMyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIEhlYWRlcnNQb2x5ZmlsbChhbGwpIHtcbiAgICAvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxuICAgIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBhcnJheSA9IGFsbC5zcGxpdCgnXFxyXFxuJyk7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgdmFyIGxpbmUgPSBhcnJheVtpXTtcbiAgICAgICAgdmFyIHBhcnRzID0gbGluZS5zcGxpdCgnOiAnKTtcbiAgICAgICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpO1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6ICcpO1xuICAgICAgICBtYXBbdG9Mb3dlckNhc2UobmFtZSldID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMuX21hcCA9IG1hcDtcbn1cbkhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldO1xufTtcbmZ1bmN0aW9uIFhIUlRyYW5zcG9ydCgpIHtcbn1cblhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKHhociwgb25TdGFydENhbGxiYWNrLCBvblByb2dyZXNzQ2FsbGJhY2ssIG9uRmluaXNoQ2FsbGJhY2ssIHVybCwgd2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzKSB7XG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG4gICAgdmFyIG9mZnNldCA9IDA7XG4gICAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHZhciBjaHVuayA9IHJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoO1xuICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO1xuICAgIH07XG4gICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICAgICAgdmFyIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyczEgPSB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCk7XG4gICAgICAgICAgICBvblN0YXJ0Q2FsbGJhY2soc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgbmV3IEhlYWRlcnNQb2x5ZmlsbChoZWFkZXJzMSksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscztcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ3RleHQnO1xuICAgIGZvcih2YXIgbmFtZSBpbiBoZWFkZXJzKXtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgeGhyLnNlbmQoKTtcbn07XG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzMikge1xuICAgIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzMjtcbn1cbkhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpO1xufTtcbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge1xufVxuRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbih4aHIsIG9uU3RhcnRDYWxsYmFjaywgb25Qcm9ncmVzc0NhbGxiYWNrLCBvbkZpbmlzaENhbGxiYWNrLCB1cmwsIHdpdGhDcmVkZW50aWFscywgaGVhZGVyczIpIHtcbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIxKCk7XG4gICAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsIC8vIHNlZSAjMTIwXG4gICAgO1xuICAgIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcjEoKTtcbiAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgaGVhZGVyczogaGVhZGVyczIsXG4gICAgICAgIGNyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBzaWduYWw6IHNpZ25hbCxcbiAgICAgICAgY2FjaGU6ICduby1zdG9yZSdcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIHZhciByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgICBvblN0YXJ0Q2FsbGJhY2socmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0LCByZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksIG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgICAgICAgICByZWFkZXIuY2FuY2VsKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB2YXIgcmVhZE5leHRDaHVuayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkKCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNodW5rID0gdGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWFkTmV4dENodW5rKCk7XG4gICAgICAgIH0pO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gRXZlbnRUYXJnZXQxKCkge1xuICAgIHRoaXMuX2xpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5mdW5jdGlvbiB0aHJvd0Vycm9yKGUpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICB0aHJvdyBlO1xuICAgIH0sIDApO1xufVxuRXZlbnRUYXJnZXQxLnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQgPSB0aGlzO1xuICAgIHZhciB0eXBlTGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO1xuICAgIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGg7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXIgPSB0eXBlTGlzdGVuZXJzW2ldO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5FdmVudFRhcmdldDEucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xuICAgIHR5cGUgPSBTdHJpbmcodHlwZSk7XG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycztcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXTtcbiAgICBpZiAodHlwZUxpc3RlbmVycyA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdHlwZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzO1xuICAgIH1cbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG59O1xuRXZlbnRUYXJnZXQxLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICB0eXBlID0gU3RyaW5nKHR5cGUpO1xuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XG4gICAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV07XG4gICAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBmaWx0ZXJlZCA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSAhPT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKHR5cGVMaXN0ZW5lcnNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbdHlwZV0gPSBmaWx0ZXJlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5mdW5jdGlvbiBFdmVudDEodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBNZXNzYWdlRXZlbnQxKHR5cGUsIG9wdGlvbnMpIHtcbiAgICBFdmVudDEuY2FsbCh0aGlzLCB0eXBlKTtcbiAgICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgdGhpcy5sYXN0RXZlbnRJZCA9IG9wdGlvbnMubGFzdEV2ZW50SWQ7XG59XG5NZXNzYWdlRXZlbnQxLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQxLnByb3RvdHlwZSk7XG5mdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICAgIEV2ZW50MS5jYWxsKHRoaXMsIHR5cGUpO1xuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXM7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0O1xuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcbn1cbkNvbm5lY3Rpb25FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50MS5wcm90b3R5cGUpO1xudmFyIFdBSVRJTkcgPSAtMTtcbnZhciBDT05ORUNUSU5HID0gMDtcbnZhciBPUEVOID0gMTtcbnZhciBDTE9TRUQgPSAyO1xudmFyIEFGVEVSX0NSID0gLTE7XG52YXIgRklFTERfU1RBUlQgPSAwO1xudmFyIEZJRUxEID0gMTtcbnZhciBWQUxVRV9TVEFSVCA9IDI7XG52YXIgVkFMVUUgPSAzO1xudmFyIGNvbnRlbnRUeXBlUmVnRXhwID0gL150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaTtcbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMDtcbnZhciBNQVhJTVVNX0RVUkFUSU9OID0gMTgwMDAwMDA7XG52YXIgcGFyc2VEdXJhdGlvbiA9IGZ1bmN0aW9uKHZhbHVlLCBkZWYpIHtcbiAgICB2YXIgbiA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgaWYgKG4gIT09IG4pIHtcbiAgICAgICAgbiA9IGRlZjtcbiAgICB9XG4gICAgcmV0dXJuIGNsYW1wRHVyYXRpb24obik7XG59O1xudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbihuKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG4sIE1JTklNVU1fRFVSQVRJT04pLCBNQVhJTVVNX0RVUkFUSU9OKTtcbn07XG52YXIgZmlyZSA9IGZ1bmN0aW9uKHRoYXQsIGYsIGV2ZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBmLmNhbGwodGhhdCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvd0Vycm9yKGUpO1xuICAgIH1cbn07XG5mdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCwgb3B0aW9ucykge1xuICAgIEV2ZW50VGFyZ2V0MS5jYWxsKHRoaXMpO1xuICAgIHRoaXMub25vcGVuID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMub25lcnJvciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVybCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fY2xvc2UgPSB1bmRlZmluZWQ7XG4gICAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKTtcbn1cbnZhciBpc0ZldGNoU3VwcG9ydGVkID0gZmV0Y2ggIT0gdW5kZWZpbmVkICYmIFJlc3BvbnNlMSAhPSB1bmRlZmluZWQgJiYgJ2JvZHknIGluIFJlc3BvbnNlMS5wcm90b3R5cGU7XG5mdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XG4gICAgdXJsID0gU3RyaW5nKHVybCk7XG4gICAgdmFyIHdpdGhDcmVkZW50aWFscyA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIEJvb2xlYW4ob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpO1xuICAgIHZhciBpbml0aWFsUmV0cnkgPSBjbGFtcER1cmF0aW9uKDEwMDApO1xuICAgIHZhciBoZWFydGJlYXRUaW1lb3V0ID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0ICE9IHVuZGVmaW5lZCA/IHBhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LCA0NTAwMCkgOiBjbGFtcER1cmF0aW9uKDQ1MDAwKTtcbiAgICB2YXIgbGFzdEV2ZW50SWQgPSAnJztcbiAgICB2YXIgcmV0cnkgPSBpbml0aWFsUmV0cnk7XG4gICAgdmFyIHdhc0FjdGl2aXR5ID0gZmFsc2U7XG4gICAgdmFyIGhlYWRlcnMyID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFkZXJzICE9IHVuZGVmaW5lZCA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSkgOiB1bmRlZmluZWQ7XG4gICAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQgPyBvcHRpb25zLlRyYW5zcG9ydCA6IFhNTEh0dHBSZXF1ZXN0O1xuICAgIHZhciB4aHIgPSBpc0ZldGNoU3VwcG9ydGVkICYmICEob3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkKSA/IHVuZGVmaW5lZCA6IG5ldyBYSFJXcmFwcGVyKG5ldyBDdXJyZW50VHJhbnNwb3J0KCkpO1xuICAgIHZhciB0cmFuc3BvcnQgPSB4aHIgPT0gdW5kZWZpbmVkID8gbmV3IEZldGNoVHJhbnNwb3J0KCkgOiBuZXcgWEhSVHJhbnNwb3J0KCk7XG4gICAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgIHZhciB0aW1lb3V0ID0gMDtcbiAgICB2YXIgY3VycmVudFN0YXRlID0gV0FJVElORztcbiAgICB2YXIgZGF0YUJ1ZmZlciA9ICcnO1xuICAgIHZhciBsYXN0RXZlbnRJZEJ1ZmZlciA9ICcnO1xuICAgIHZhciBldmVudFR5cGVCdWZmZXIgPSAnJztcbiAgICB2YXIgdGV4dEJ1ZmZlciA9ICcnO1xuICAgIHZhciBzdGF0ZSA9IEZJRUxEX1NUQVJUO1xuICAgIHZhciBmaWVsZFN0YXJ0ID0gMDtcbiAgICB2YXIgdmFsdWVTdGFydCA9IDA7XG4gICAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbihzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBoZWFkZXJzMywgY2FuY2VsKSB7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gY2FuY2VsO1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwICYmIGNvbnRlbnRUeXBlICE9IHVuZGVmaW5lZCAmJiBjb250ZW50VHlwZVJlZ0V4cC50ZXN0KGNvbnRlbnRUeXBlKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IE9QRU47XG4gICAgICAgICAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5O1xuICAgICAgICAgICAgICAgIGVzLnJlYWR5U3RhdGUgPSBPUEVOO1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzM1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9ICcnO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiICsgc3RhdHVzICsgJyAnICsgc3RhdHVzVGV4dCArICcgdGhhdCBpcyBub3QgMjAwLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIgKyAoY29udGVudFR5cGUgPT0gdW5kZWZpbmVkID8gJy0nIDogY29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCAnICcpKSArICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ2Vycm9yJywge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyczNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24odGV4dENodW5rKSB7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgICAgICAgIHZhciBuID0gLTE7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKXtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgICAgIGlmIChjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGNodW5rID0gKG4gIT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZSgwLCBuICsgMSk7XG4gICAgICAgICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSk7XG4gICAgICAgICAgICBpZiAoY2h1bmsgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgY2h1bmsubGVuZ3RoOyBwb3NpdGlvbiArPSAxKXtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IGNodW5rLmNoYXJDb2RlQXQocG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IgJiYgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gY2h1bmsuc2xpY2UoZmllbGRTdGFydCwgdmFsdWVTdGFydCAtIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKHZhbHVlU3RhcnQgKyAodmFsdWVTdGFydCA8IHBvc2l0aW9uICYmIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApID8gMSA6IDApLCBwb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSAnXFxuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAncmV0cnknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdoZWFydGJlYXRUaW1lb3V0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhQnVmZmVyICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJ21lc3NhZ2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQxKGV2ZW50VHlwZUJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ1ZmZlci5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09ICdtZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJzonLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBWQUxVRV9TVEFSVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gVkFMVUU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOIHx8IGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gV0FJVElORztcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgICAgICB9LCByZXRyeSk7XG4gICAgICAgICAgICByZXRyeSA9IGNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5ICogMTYsIHJldHJ5ICogMikpO1xuICAgICAgICAgICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkc7XG4gICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQxKCdlcnJvcicpO1xuICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBjbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBDTE9TRUQ7XG4gICAgICAgIGlmIChjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZXMucmVhZHlTdGF0ZSA9IENMT1NFRDtcbiAgICB9O1xuICAgIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IDA7XG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgIT09IFdBSVRJTkcpIHtcbiAgICAgICAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcihuZXcgRXJyb3IoJ05vIGFjdGl2aXR5IHdpdGhpbiAnICsgaGVhcnRiZWF0VGltZW91dCArICcgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJykpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uKCk7XG4gICAgICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpO1xuICAgICAgICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2U7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpO1xuICAgICAgICBjdXJyZW50U3RhdGUgPSBDT05ORUNUSU5HO1xuICAgICAgICBkYXRhQnVmZmVyID0gJyc7XG4gICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnO1xuICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IGxhc3RFdmVudElkO1xuICAgICAgICB0ZXh0QnVmZmVyID0gJyc7XG4gICAgICAgIGZpZWxkU3RhcnQgPSAwO1xuICAgICAgICB2YWx1ZVN0YXJ0ID0gMDtcbiAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVDtcbiAgICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4gICAgICAgIC8vIFJlcXVlc3QgaGVhZGVyIGZpZWxkIExhc3QtRXZlbnQtSUQgaXMgbm90IGFsbG93ZWQgYnkgQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycy5cbiAgICAgICAgdmFyIHJlcXVlc3RVUkwgPSB1cmw7XG4gICAgICAgIGlmICh1cmwuc2xpY2UoMCwgNSkgIT09ICdkYXRhOicgJiYgdXJsLnNsaWNlKDAsIDUpICE9PSAnYmxvYjonKSB7XG4gICAgICAgICAgICBpZiAobGFzdEV2ZW50SWQgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdFVSTCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ2xhc3RFdmVudElkPScgKyBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddID0gJ3RleHQvZXZlbnQtc3RyZWFtJztcbiAgICAgICAgaWYgKGhlYWRlcnMyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yKHZhciBuYW1lIGluIGhlYWRlcnMyKXtcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMyLCBuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tuYW1lXSA9IGhlYWRlcnMyW25hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdHJhbnNwb3J0Lm9wZW4oeGhyLCBvblN0YXJ0LCBvblByb2dyZXNzLCBvbkZpbmlzaCwgcmVxdWVzdFVSTCwgd2l0aENyZWRlbnRpYWxzLCByZXF1ZXN0SGVhZGVycyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGVzLnVybCA9IHVybDtcbiAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElORztcbiAgICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XG4gICAgZXMuX2Nsb3NlID0gY2xvc2U7XG4gICAgb25UaW1lb3V0KCk7XG59XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnRUYXJnZXQxLnByb3RvdHlwZSk7XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DT05ORUNUSU5HID0gQ09OTkVDVElORztcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU4gPSBPUEVOO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEID0gQ0xPU0VEO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jbG9zZSgpO1xufTtcbkV2ZW50U291cmNlUG9seWZpbGwuQ09OTkVDVElORyA9IENPTk5FQ1RJTkc7XG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQgPSBDTE9TRUQ7XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG52YXIgX2RlZmF1bHQgPSBFdmVudFNvdXJjZVBvbHlmaWxsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGlzcGxheUNvbnRlbnQgPSBkaXNwbGF5Q29udGVudDtcbmZ1bmN0aW9uIGRpc3BsYXlDb250ZW50KGNhbGxiYWNrKSB7XG4gICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvcih2YXIgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLCBpID0geC5sZW5ndGg7IGktLTspe1xuICAgICAgICAgICAgeFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VjLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jbG9zZVBpbmcgPSBjbG9zZVBpbmc7XG5leHBvcnRzLnNldHVwUGluZyA9IHNldHVwUGluZztcbmV4cG9ydHMuY3VycmVudFBhZ2UgPSB2b2lkIDA7XG52YXIgX2V2ZW50c291cmNlID0gcmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTtcbmxldCBldnRTb3VyY2U7XG5sZXQgY3VycmVudFBhZ2U7XG5leHBvcnRzLmN1cnJlbnRQYWdlID0gY3VycmVudFBhZ2U7XG5mdW5jdGlvbiBjbG9zZVBpbmcoKSB7XG4gICAgaWYgKGV2dFNvdXJjZSkgZXZ0U291cmNlLmNsb3NlKCk7XG4gICAgZXZ0U291cmNlID0gbnVsbDtcbn1cbmZ1bmN0aW9uIHNldHVwUGluZyhhc3NldFByZWZpeCwgcGF0aG5hbWVGbiwgcmV0cnkpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhuYW1lRm4oKTtcbiAgICAvLyBNYWtlIHN1cmUgdG8gb25seSBjcmVhdGUgbmV3IEV2ZW50U291cmNlIHJlcXVlc3QgaWYgcGFnZSBoYXMgY2hhbmdlZFxuICAgIGlmIChwYXRobmFtZSA9PT0gY3VycmVudFBhZ2UgJiYgIXJldHJ5KSByZXR1cm47XG4gICAgZXhwb3J0cy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID0gcGF0aG5hbWU7XG4gICAgLy8gY2xvc2UgY3VycmVudCBFdmVudFNvdXJjZSBjb25uZWN0aW9uXG4gICAgY2xvc2VQaW5nKCk7XG4gICAgZXZ0U291cmNlID0gKDAsIF9ldmVudHNvdXJjZSkuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKHtcbiAgICAgICAgcGF0aDogYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtlbmNvZGVVUklDb21wb25lbnQoY3VycmVudFBhZ2UpfWAsXG4gICAgICAgIHRpbWVvdXQ6IDUwMDBcbiAgICB9KTtcbiAgICBldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCk9PntcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEuaW5kZXhPZigneycpID09PSAtMSkgcmV0dXJuO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICAgICAgICAvLyBkb24ndCBhdHRlbXB0IGZldGNoaW5nIHRoZSBwYWdlIGlmIHdlJ3JlIGFscmVhZHkgc2hvd2luZ1xuICAgICAgICAgICAgLy8gdGhlIGRldiBvdmVybGF5IGFzIHRoaXMgY2FuIGNhdXNlIHRoZSBlcnJvciB0byBiZSB0cmlnZ2VyZWRcbiAgICAgICAgICAgIC8vIHJlcGVhdGVkbHlcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmludmFsaWQgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5lcnIpIHtcbiAgICAgICAgICAgICAgICAvLyBQYXlsb2FkIGNhbiBiZSBpbnZhbGlkIGV2ZW4gaWYgdGhlIHBhZ2UgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgICAgICAgICB9KS50aGVuKChwYWdlUmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZVJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLCBlcnIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzLm1hcCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sIm5hbWVzIjpbIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfZXZlbnRzb3VyY2UiLCJfb25EZW1hbmRFbnRyaWVzVXRpbHMiLCJfZm91YyIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlc29sdmUiLCJyZWplY3QiLCJfbmV4dCIsIl90aHJvdyIsImtleSIsImFyZyIsImluZm8iLCJ2YWx1ZSIsImVycm9yIiwiZG9uZSIsIlByb21pc2UiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJvYmoiLCJfX2VzTW9kdWxlIiwid2luZG93IiwiRXZlbnRTb3VyY2UiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwiYXNzZXRQcmVmaXgiLCJwYWdlIiwibW9zdFJlY2VudEhhc2giLCJjdXJIYXNoIiwiX193ZWJwYWNrX2hhc2hfXyIsImhvdFVwZGF0ZVBhdGgiLCJlbmRzV2l0aCIsImlzVXBkYXRlQXZhaWxhYmxlIiwiY2FuQXBwbHlVcGRhdGVzIiwibW9kdWxlIiwiaG90Iiwic3RhdHVzIiwiX3RyeUFwcGx5VXBkYXRlcyIsImZldGNoIiwiX193ZWJwYWNrX3J1bnRpbWVfaWRfXyIsInJlcyIsImpzb24iLCJqc29uRGF0YSIsImN1clBhZ2UiLCJwYWdlVXBkYXRlZCIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJPYmplY3QiLCJrZXlzIiwic29tZSIsIm1vZCIsImluZGV4T2YiLCJzdWJzdHIiLCJyZXBsYWNlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJjb25zb2xlIiwidHJ5QXBwbHlVcGRhdGVzIiwiYWRkTWVzc2FnZUxpc3RlbmVyIiwiZXZlbnQiLCJtZXNzYWdlIiwiYWN0aW9uIiwiaGFzaCIsImV4Iiwid2FybiIsInNldHVwUGluZyIsImRpc3BsYXlDb250ZW50IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwiZXZlbnRDYWxsYmFja3MiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJvcHRpb25zIiwic291cmNlIiwibGFzdEFjdGl2aXR5IiwiRGF0ZSIsImxpc3RlbmVycyIsInRpbWVvdXQiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJwYXRoIiwib25vcGVuIiwiaGFuZGxlT25saW5lIiwib25lcnJvciIsIm9ubWVzc2FnZSIsImhhbmRsZU1lc3NhZ2UiLCJsb2ciLCJpIiwibGVuZ3RoIiwiZm9yRWFjaCIsImNiIiwidW5maWx0ZXJlZCIsImNsZWFySW50ZXJ2YWwiLCJjbG9zZSIsInNldFRpbWVvdXQiLCJwdXNoIiwiUmVzcG9uc2UxIiwiUmVzcG9uc2UiLCJUZXh0RGVjb2RlcjEiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyMSIsIlRleHRFbmNvZGVyIiwiQWJvcnRDb250cm9sbGVyMSIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsImFib3J0IiwiVGV4dERlY29kZXJQb2x5ZmlsbCIsImJpdHNOZWVkZWQiLCJjb2RlUG9pbnQiLCJwcm90b3R5cGUiLCJkZWNvZGUiLCJvY3RldHMiLCJ2YWxpZCIsInNoaWZ0Iiwib2N0ZXRzQ291bnQiLCJFcnJvciIsIlJFUExBQ0VSIiwic3RyaW5nIiwib2N0ZXQiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJzdXBwb3J0c1N0cmVhbU9wdGlvbiIsImVuY29kZSIsInN0cmVhbSIsImsiLCJYSFJXcmFwcGVyIiwieGhyIiwid2l0aENyZWRlbnRpYWxzIiwicmVzcG9uc2VUeXBlIiwicmVhZHlTdGF0ZSIsInN0YXR1c1RleHQiLCJyZXNwb25zZVRleHQiLCJvbnByb2dyZXNzIiwib25yZWFkeXN0YXRlY2hhbmdlIiwiX2NvbnRlbnRUeXBlIiwiX3hociIsIl9zZW5kVGltZW91dCIsIl9hYm9ydCIsIm9wZW4iLCJtZXRob2QiLCJ1cmwiLCJ0aGF0Iiwic3RhdGUiLCJzaWxlbnQiLCJjbGVhclRpbWVvdXQiLCJvbmxvYWQiLCJvbmFib3J0Iiwib25TdGFydCIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJvblByb2dyZXNzIiwib25GaW5pc2giLCJvblJlYWR5U3RhdGVDaGFuZ2UiLCJvblRpbWVvdXQiLCJYTUxIdHRwUmVxdWVzdCIsIm5hbWUiLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhlYWRlcnMxIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiSGVhZGVyc1dyYXBwZXIiLCJoZWFkZXJzMiIsIl9oZWFkZXJzIiwiRmV0Y2hUcmFuc3BvcnQiLCJjb250cm9sbGVyIiwidGV4dERlY29kZXIiLCJjcmVkZW50aWFscyIsImNhY2hlIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwicmVhZE5leHRDaHVuayIsInJlYWQiLCJyZXN1bHQiLCJFdmVudFRhcmdldDEiLCJfbGlzdGVuZXJzIiwidGhyb3dFcnJvciIsImUiLCJkaXNwYXRjaEV2ZW50IiwidGFyZ2V0IiwidHlwZUxpc3RlbmVycyIsInR5cGUiLCJsaXN0ZW5lciIsImhhbmRsZUV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZvdW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZpbHRlcmVkIiwiRXZlbnQxIiwiTWVzc2FnZUV2ZW50MSIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJfY2xvc2UiLCJzdGFydCIsImlzRmV0Y2hTdXBwb3J0ZWQiLCJlcyIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwicmV0cnkiLCJ3YXNBY3Rpdml0eSIsInN0cmluZ2lmeSIsIkN1cnJlbnRUcmFuc3BvcnQiLCJUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJjYW5jZWxGdW5jdGlvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFCdWZmZXIiLCJsYXN0RXZlbnRJZEJ1ZmZlciIsImV2ZW50VHlwZUJ1ZmZlciIsInRleHRCdWZmZXIiLCJmaWVsZFN0YXJ0IiwidmFsdWVTdGFydCIsImhlYWRlcnMzIiwidGVzdCIsInRleHRDaHVuayIsInBvc2l0aW9uIiwiZmllbGQiLCJyZXF1ZXN0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdEhlYWRlcnMiLCJfZGVmYXVsdCIsImNhbGxiYWNrIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjbG9zZVBpbmciLCJjdXJyZW50UGFnZSIsImV2dFNvdXJjZSIsInBhdGhuYW1lRm4iLCJwYXRobmFtZSIsInBheWxvYWQiLCJpbnZhbGlkIiwiX19ORVhUX0RBVEFfXyIsImhyZWYiLCJwYWdlUmVzIl0sInNvdXJjZVJvb3QiOiIifQ==