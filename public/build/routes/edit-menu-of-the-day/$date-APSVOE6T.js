import {
  bannerPopup_default
} from "/build/_shared/chunk-NMO27HVV.js";
import {
  Loader
} from "/build/_shared/chunk-SYZM45ZP.js";
import {
  import_react_select_cjs_default
} from "/build/_shared/chunk-MOIBM2EW.js";
import {
  require_db
} from "/build/_shared/chunk-HHTSHZGZ.js";
import {
  Footer
} from "/build/_shared/chunk-NO54GCYG.js";
import {
  HeaderFile,
  require_lib,
  require_prop_types
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import {
  require_react_dom
} from "/build/_shared/chunk-I24TZKN2.js";
import "/build/_shared/chunk-TQXZOQST.js";
import "/build/_shared/chunk-DBNIQQP4.js";
import {
  Q,
  decode,
  encode,
  getAssetURL
} from "/build/_shared/chunk-776WLWWM.js";
import {
  ALLERGENS_ENG,
  ALLERGENS_ENG_DK,
  DIETARY_PREFERENCES_DK,
  DIETARY_PREFERENCES_ENG,
  EXPRESS_BASE_URL,
  FRONTEND_URL,
  GOOGLE_TRANSLATION_APIKEY,
  GOOGLE_TRANSLATOR_URL,
  PURGE_CACHE_URL,
  SCREENCLOUD_CACHE_CLEAR_API_URL,
  SECTION_6_1_ID,
  SECTION_6_2_ID,
  SECTION_6_3_ID,
  SECTION_6_ID,
  SECTION_7_1_ID,
  SECTION_7_2_ID,
  SECTION_7_3_ID,
  SECTION_7_ID,
  URL,
  directusLoaderLink
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  format
} from "/build/_shared/chunk-6W3RSCO2.js";
import {
  require_session
} from "/build/_shared/chunk-2FLU7E64.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// node_modules/react-highlight-words/dist/main.js
var require_main = __commonJS({
  "node_modules/react-highlight-words/dist/main.js"(exports, module) {
    module.exports = function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
          return installedModules[moduleId].exports;
        var module2 = installedModules[moduleId] = {
          exports: {},
          id: moduleId,
          loaded: false
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.loaded = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.p = "";
      return __webpack_require__(0);
    }([
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(1);
      },
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        var _Highlighter = __webpack_require__(2);
        var _Highlighter2 = _interopRequireDefault(_Highlighter);
        exports2["default"] = _Highlighter2["default"];
        module2.exports = exports2["default"];
      },
      function(module2, exports2, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports2, "__esModule", {
          value: true
        });
        var _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        exports2["default"] = Highlighter2;
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { "default": obj };
        }
        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0)
              continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i))
              continue;
            target[i] = obj[i];
          }
          return target;
        }
        var _highlightWordsCore = __webpack_require__(3);
        var _propTypes = __webpack_require__(4);
        var _propTypes2 = _interopRequireDefault(_propTypes);
        var _react = __webpack_require__(14);
        var _memoizeOne = __webpack_require__(15);
        var _memoizeOne2 = _interopRequireDefault(_memoizeOne);
        Highlighter2.propTypes = {
          activeClassName: _propTypes2["default"].string,
          activeIndex: _propTypes2["default"].number,
          activeStyle: _propTypes2["default"].object,
          autoEscape: _propTypes2["default"].bool,
          className: _propTypes2["default"].string,
          findChunks: _propTypes2["default"].func,
          highlightClassName: _propTypes2["default"].oneOfType([_propTypes2["default"].object, _propTypes2["default"].string]),
          highlightStyle: _propTypes2["default"].object,
          highlightTag: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func, _propTypes2["default"].string]),
          sanitize: _propTypes2["default"].func,
          searchWords: _propTypes2["default"].arrayOf(_propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].instanceOf(RegExp)])).isRequired,
          textToHighlight: _propTypes2["default"].string.isRequired,
          unhighlightTag: _propTypes2["default"].oneOfType([_propTypes2["default"].node, _propTypes2["default"].func, _propTypes2["default"].string]),
          unhighlightClassName: _propTypes2["default"].string,
          unhighlightStyle: _propTypes2["default"].object
        };
        function Highlighter2(_ref) {
          var _ref$activeClassName = _ref.activeClassName;
          var activeClassName = _ref$activeClassName === void 0 ? "" : _ref$activeClassName;
          var _ref$activeIndex = _ref.activeIndex;
          var activeIndex = _ref$activeIndex === void 0 ? -1 : _ref$activeIndex;
          var activeStyle = _ref.activeStyle;
          var autoEscape = _ref.autoEscape;
          var _ref$caseSensitive = _ref.caseSensitive;
          var caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive;
          var className = _ref.className;
          var findChunks = _ref.findChunks;
          var _ref$highlightClassName = _ref.highlightClassName;
          var highlightClassName = _ref$highlightClassName === void 0 ? "" : _ref$highlightClassName;
          var _ref$highlightStyle = _ref.highlightStyle;
          var highlightStyle = _ref$highlightStyle === void 0 ? {} : _ref$highlightStyle;
          var _ref$highlightTag = _ref.highlightTag;
          var highlightTag = _ref$highlightTag === void 0 ? "mark" : _ref$highlightTag;
          var sanitize = _ref.sanitize;
          var searchWords = _ref.searchWords;
          var textToHighlight = _ref.textToHighlight;
          var _ref$unhighlightTag = _ref.unhighlightTag;
          var unhighlightTag = _ref$unhighlightTag === void 0 ? "span" : _ref$unhighlightTag;
          var _ref$unhighlightClassName = _ref.unhighlightClassName;
          var unhighlightClassName = _ref$unhighlightClassName === void 0 ? "" : _ref$unhighlightClassName;
          var unhighlightStyle = _ref.unhighlightStyle;
          var rest = _objectWithoutProperties(_ref, ["activeClassName", "activeIndex", "activeStyle", "autoEscape", "caseSensitive", "className", "findChunks", "highlightClassName", "highlightStyle", "highlightTag", "sanitize", "searchWords", "textToHighlight", "unhighlightTag", "unhighlightClassName", "unhighlightStyle"]);
          var chunks = (0, _highlightWordsCore.findAll)({
            autoEscape,
            caseSensitive,
            findChunks,
            sanitize,
            searchWords,
            textToHighlight
          });
          var HighlightTag = highlightTag;
          var highlightIndex = -1;
          var highlightClassNames = "";
          var highlightStyles = void 0;
          var lowercaseProps = function lowercaseProps2(object) {
            var mapped = {};
            for (var key in object) {
              mapped[key.toLowerCase()] = object[key];
            }
            return mapped;
          };
          var memoizedLowercaseProps = (0, _memoizeOne2["default"])(lowercaseProps);
          return (0, _react.createElement)("span", _extends({
            className
          }, rest, {
            children: chunks.map(function(chunk, index) {
              var text = textToHighlight.substr(chunk.start, chunk.end - chunk.start);
              if (chunk.highlight) {
                highlightIndex++;
                var highlightClass = void 0;
                if (typeof highlightClassName === "object") {
                  if (!caseSensitive) {
                    highlightClassName = memoizedLowercaseProps(highlightClassName);
                    highlightClass = highlightClassName[text.toLowerCase()];
                  } else {
                    highlightClass = highlightClassName[text];
                  }
                } else {
                  highlightClass = highlightClassName;
                }
                var isActive = highlightIndex === +activeIndex;
                highlightClassNames = highlightClass + " " + (isActive ? activeClassName : "");
                highlightStyles = isActive === true && activeStyle != null ? Object.assign({}, highlightStyle, activeStyle) : highlightStyle;
                var props = {
                  children: text,
                  className: highlightClassNames,
                  key: index,
                  style: highlightStyles
                };
                if (typeof HighlightTag !== "string") {
                  props.highlightIndex = highlightIndex;
                }
                return (0, _react.createElement)(HighlightTag, props);
              } else {
                return (0, _react.createElement)(unhighlightTag, {
                  children: text,
                  className: unhighlightClassName,
                  key: index,
                  style: unhighlightStyle
                });
              }
            })
          }));
        }
        module2.exports = exports2["default"];
      },
      function(module2, exports2) {
        module2.exports = function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
              return installedModules[moduleId].exports;
            var module3 = installedModules[moduleId] = {
              exports: {},
              id: moduleId,
              loaded: false
            };
            modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
            module3.loaded = true;
            return module3.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.p = "";
          return __webpack_require__(0);
        }([
          function(module3, exports3, __webpack_require__) {
            module3.exports = __webpack_require__(1);
          },
          function(module3, exports3, __webpack_require__) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            var _utils = __webpack_require__(2);
            Object.defineProperty(exports3, "combineChunks", {
              enumerable: true,
              get: function get() {
                return _utils.combineChunks;
              }
            });
            Object.defineProperty(exports3, "fillInChunks", {
              enumerable: true,
              get: function get() {
                return _utils.fillInChunks;
              }
            });
            Object.defineProperty(exports3, "findAll", {
              enumerable: true,
              get: function get() {
                return _utils.findAll;
              }
            });
            Object.defineProperty(exports3, "findChunks", {
              enumerable: true,
              get: function get() {
                return _utils.findChunks;
              }
            });
          },
          function(module3, exports3) {
            "use strict";
            Object.defineProperty(exports3, "__esModule", {
              value: true
            });
            var findAll = exports3.findAll = function findAll2(_ref) {
              var autoEscape = _ref.autoEscape, _ref$caseSensitive = _ref.caseSensitive, caseSensitive = _ref$caseSensitive === void 0 ? false : _ref$caseSensitive, _ref$findChunks = _ref.findChunks, findChunks = _ref$findChunks === void 0 ? defaultFindChunks : _ref$findChunks, sanitize = _ref.sanitize, searchWords = _ref.searchWords, textToHighlight = _ref.textToHighlight;
              return fillInChunks({
                chunksToHighlight: combineChunks({
                  chunks: findChunks({
                    autoEscape,
                    caseSensitive,
                    sanitize,
                    searchWords,
                    textToHighlight
                  })
                }),
                totalLength: textToHighlight ? textToHighlight.length : 0
              });
            };
            var combineChunks = exports3.combineChunks = function combineChunks2(_ref2) {
              var chunks = _ref2.chunks;
              chunks = chunks.sort(function(first, second) {
                return first.start - second.start;
              }).reduce(function(processedChunks, nextChunk) {
                if (processedChunks.length === 0) {
                  return [nextChunk];
                } else {
                  var prevChunk = processedChunks.pop();
                  if (nextChunk.start <= prevChunk.end) {
                    var endIndex = Math.max(prevChunk.end, nextChunk.end);
                    processedChunks.push({ start: prevChunk.start, end: endIndex });
                  } else {
                    processedChunks.push(prevChunk, nextChunk);
                  }
                  return processedChunks;
                }
              }, []);
              return chunks;
            };
            var defaultFindChunks = function defaultFindChunks2(_ref3) {
              var autoEscape = _ref3.autoEscape, caseSensitive = _ref3.caseSensitive, _ref3$sanitize = _ref3.sanitize, sanitize = _ref3$sanitize === void 0 ? identity : _ref3$sanitize, searchWords = _ref3.searchWords, textToHighlight = _ref3.textToHighlight;
              textToHighlight = sanitize(textToHighlight);
              return searchWords.filter(function(searchWord) {
                return searchWord;
              }).reduce(function(chunks, searchWord) {
                searchWord = sanitize(searchWord);
                if (autoEscape) {
                  searchWord = escapeRegExpFn(searchWord);
                }
                var regex = new RegExp(searchWord, caseSensitive ? "g" : "gi");
                var match = void 0;
                while (match = regex.exec(textToHighlight)) {
                  var start = match.index;
                  var end = regex.lastIndex;
                  if (end > start) {
                    chunks.push({ start, end });
                  }
                  if (match.index == regex.lastIndex) {
                    regex.lastIndex++;
                  }
                }
                return chunks;
              }, []);
            };
            exports3.findChunks = defaultFindChunks;
            var fillInChunks = exports3.fillInChunks = function fillInChunks2(_ref4) {
              var chunksToHighlight = _ref4.chunksToHighlight, totalLength = _ref4.totalLength;
              var allChunks = [];
              var append = function append2(start, end, highlight) {
                if (end - start > 0) {
                  allChunks.push({
                    start,
                    end,
                    highlight
                  });
                }
              };
              if (chunksToHighlight.length === 0) {
                append(0, totalLength, false);
              } else {
                var lastIndex = 0;
                chunksToHighlight.forEach(function(chunk) {
                  append(lastIndex, chunk.start, false);
                  append(chunk.start, chunk.end, true);
                  lastIndex = chunk.end;
                });
                append(lastIndex, totalLength, false);
              }
              return allChunks;
            };
            function identity(value) {
              return value;
            }
            function escapeRegExpFn(str) {
              return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            }
          }
        ]);
      },
      function(module2, exports2, __webpack_require__) {
        (function(process) {
          if (process.env.NODE_ENV !== "production") {
            var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
            var isValidElement = function(object) {
              return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            };
            var throwOnDirectAccess = true;
            module2.exports = __webpack_require__(6)(isValidElement, throwOnDirectAccess);
          } else {
            module2.exports = __webpack_require__(13)();
          }
        }).call(exports2, __webpack_require__(5));
      },
      function(module2, exports2) {
        var process = module2.exports = {};
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }
        (function() {
          try {
            if (typeof setTimeout === "function") {
              cachedSetTimeout = setTimeout;
            } else {
              cachedSetTimeout = defaultSetTimout;
            }
          } catch (e) {
            cachedSetTimeout = defaultSetTimout;
          }
          try {
            if (typeof clearTimeout === "function") {
              cachedClearTimeout = clearTimeout;
            } else {
              cachedClearTimeout = defaultClearTimeout;
            }
          } catch (e) {
            cachedClearTimeout = defaultClearTimeout;
          }
        })();
        function runTimeout(fun) {
          if (cachedSetTimeout === setTimeout) {
            return setTimeout(fun, 0);
          }
          if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
            cachedSetTimeout = setTimeout;
            return setTimeout(fun, 0);
          }
          try {
            return cachedSetTimeout(fun, 0);
          } catch (e) {
            try {
              return cachedSetTimeout.call(null, fun, 0);
            } catch (e2) {
              return cachedSetTimeout.call(this, fun, 0);
            }
          }
        }
        function runClearTimeout(marker) {
          if (cachedClearTimeout === clearTimeout) {
            return clearTimeout(marker);
          }
          if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
            cachedClearTimeout = clearTimeout;
            return clearTimeout(marker);
          }
          try {
            return cachedClearTimeout(marker);
          } catch (e) {
            try {
              return cachedClearTimeout.call(null, marker);
            } catch (e2) {
              return cachedClearTimeout.call(this, marker);
            }
          }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
          if (!draining || !currentQueue) {
            return;
          }
          draining = false;
          if (currentQueue.length) {
            queue = currentQueue.concat(queue);
          } else {
            queueIndex = -1;
          }
          if (queue.length) {
            drainQueue();
          }
        }
        function drainQueue() {
          if (draining) {
            return;
          }
          var timeout = runTimeout(cleanUpNextTick);
          draining = true;
          var len = queue.length;
          while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
              if (currentQueue) {
                currentQueue[queueIndex].run();
              }
            }
            queueIndex = -1;
            len = queue.length;
          }
          currentQueue = null;
          draining = false;
          runClearTimeout(timeout);
        }
        process.nextTick = function(fun) {
          var args = new Array(arguments.length - 1);
          if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
              args[i - 1] = arguments[i];
            }
          }
          queue.push(new Item(fun, args));
          if (queue.length === 1 && !draining) {
            runTimeout(drainQueue);
          }
        };
        function Item(fun, array) {
          this.fun = fun;
          this.array = array;
        }
        Item.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        process.title = "browser";
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = "";
        process.versions = {};
        function noop() {
        }
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function(name) {
          return [];
        };
        process.binding = function(name) {
          throw new Error("process.binding is not supported");
        };
        process.cwd = function() {
          return "/";
        };
        process.chdir = function(dir) {
          throw new Error("process.chdir is not supported");
        };
        process.umask = function() {
          return 0;
        };
      },
      function(module2, exports2, __webpack_require__) {
        (function(process) {
          "use strict";
          var emptyFunction = __webpack_require__(7);
          var invariant = __webpack_require__(8);
          var warning = __webpack_require__(9);
          var assign = __webpack_require__(10);
          var ReactPropTypesSecret = __webpack_require__(11);
          var checkPropTypes = __webpack_require__(12);
          module2.exports = function(isValidElement, throwOnDirectAccess) {
            var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
            var FAUX_ITERATOR_SYMBOL = "@@iterator";
            function getIteratorFn(maybeIterable) {
              var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
              if (typeof iteratorFn === "function") {
                return iteratorFn;
              }
            }
            var ANONYMOUS = "<<anonymous>>";
            var ReactPropTypes = {
              array: createPrimitiveTypeChecker("array"),
              bool: createPrimitiveTypeChecker("boolean"),
              func: createPrimitiveTypeChecker("function"),
              number: createPrimitiveTypeChecker("number"),
              object: createPrimitiveTypeChecker("object"),
              string: createPrimitiveTypeChecker("string"),
              symbol: createPrimitiveTypeChecker("symbol"),
              any: createAnyTypeChecker(),
              arrayOf: createArrayOfTypeChecker,
              element: createElementTypeChecker(),
              instanceOf: createInstanceTypeChecker,
              node: createNodeChecker(),
              objectOf: createObjectOfTypeChecker,
              oneOf: createEnumTypeChecker,
              oneOfType: createUnionTypeChecker,
              shape: createShapeTypeChecker,
              exact: createStrictShapeTypeChecker
            };
            function is(x, y) {
              if (x === y) {
                return x !== 0 || 1 / x === 1 / y;
              } else {
                return x !== x && y !== y;
              }
            }
            function PropTypeError(message) {
              this.message = message;
              this.stack = "";
            }
            PropTypeError.prototype = Error.prototype;
            function createChainableTypeChecker(validate) {
              if (process.env.NODE_ENV !== "production") {
                var manualPropTypeCallCache = {};
                var manualPropTypeWarningCount = 0;
              }
              function checkType(isRequired, props, propName, componentName, location2, propFullName, secret) {
                componentName = componentName || ANONYMOUS;
                propFullName = propFullName || propName;
                if (secret !== ReactPropTypesSecret) {
                  if (throwOnDirectAccess) {
                    invariant(
                      false,
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                  } else if (process.env.NODE_ENV !== "production" && typeof console !== "undefined") {
                    var cacheKey = componentName + ":" + propName;
                    if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                      warning(
                        false,
                        "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                        propFullName,
                        componentName
                      );
                      manualPropTypeCallCache[cacheKey] = true;
                      manualPropTypeWarningCount++;
                    }
                  }
                }
                if (props[propName] == null) {
                  if (isRequired) {
                    if (props[propName] === null) {
                      return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                    }
                    return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
                  }
                  return null;
                } else {
                  return validate(props, propName, componentName, location2, propFullName);
                }
              }
              var chainedCheckType = checkType.bind(null, false);
              chainedCheckType.isRequired = checkType.bind(null, true);
              return chainedCheckType;
            }
            function createPrimitiveTypeChecker(expectedType) {
              function validate(props, propName, componentName, location2, propFullName, secret) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== expectedType) {
                  var preciseType = getPreciseType(propValue);
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createAnyTypeChecker() {
              return createChainableTypeChecker(emptyFunction.thatReturnsNull);
            }
            function createArrayOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location2, propFullName) {
                if (typeof typeChecker !== "function") {
                  return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
                }
                var propValue = props[propName];
                if (!Array.isArray(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
                }
                for (var i = 0; i < propValue.length; i++) {
                  var error = typeChecker(propValue, i, componentName, location2, propFullName + "[" + i + "]", ReactPropTypesSecret);
                  if (error instanceof Error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createElementTypeChecker() {
              function validate(props, propName, componentName, location2, propFullName) {
                var propValue = props[propName];
                if (!isValidElement(propValue)) {
                  var propType = getPropType(propValue);
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createInstanceTypeChecker(expectedClass) {
              function validate(props, propName, componentName, location2, propFullName) {
                if (!(props[propName] instanceof expectedClass)) {
                  var expectedClassName = expectedClass.name || ANONYMOUS;
                  var actualClassName = getClassName(props[propName]);
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createEnumTypeChecker(expectedValues) {
              if (!Array.isArray(expectedValues)) {
                process.env.NODE_ENV !== "production" ? warning(false, "Invalid argument supplied to oneOf, expected an instance of array.") : void 0;
                return emptyFunction.thatReturnsNull;
              }
              function validate(props, propName, componentName, location2, propFullName) {
                var propValue = props[propName];
                for (var i = 0; i < expectedValues.length; i++) {
                  if (is(propValue, expectedValues[i])) {
                    return null;
                  }
                }
                var valuesString = JSON.stringify(expectedValues);
                return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
              }
              return createChainableTypeChecker(validate);
            }
            function createObjectOfTypeChecker(typeChecker) {
              function validate(props, propName, componentName, location2, propFullName) {
                if (typeof typeChecker !== "function") {
                  return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
                }
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
                }
                for (var key in propValue) {
                  if (propValue.hasOwnProperty(key)) {
                    var error = typeChecker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
                    if (error instanceof Error) {
                      return error;
                    }
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createUnionTypeChecker(arrayOfTypeCheckers) {
              if (!Array.isArray(arrayOfTypeCheckers)) {
                process.env.NODE_ENV !== "production" ? warning(false, "Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
                return emptyFunction.thatReturnsNull;
              }
              for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
                var checker = arrayOfTypeCheckers[i];
                if (typeof checker !== "function") {
                  warning(
                    false,
                    "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                    getPostfixForTypeWarning(checker),
                    i
                  );
                  return emptyFunction.thatReturnsNull;
                }
              }
              function validate(props, propName, componentName, location2, propFullName) {
                for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
                  var checker2 = arrayOfTypeCheckers[i2];
                  if (checker2(props, propName, componentName, location2, propFullName, ReactPropTypesSecret) == null) {
                    return null;
                  }
                }
                return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
              }
              return createChainableTypeChecker(validate);
            }
            function createNodeChecker() {
              function validate(props, propName, componentName, location2, propFullName) {
                if (!isNode(props[propName])) {
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location2, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                }
                for (var key in shapeTypes) {
                  var checker = shapeTypes[key];
                  if (!checker) {
                    continue;
                  }
                  var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
                  if (error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function createStrictShapeTypeChecker(shapeTypes) {
              function validate(props, propName, componentName, location2, propFullName) {
                var propValue = props[propName];
                var propType = getPropType(propValue);
                if (propType !== "object") {
                  return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
                }
                var allKeys = assign({}, props[propName], shapeTypes);
                for (var key in allKeys) {
                  var checker = shapeTypes[key];
                  if (!checker) {
                    return new PropTypeError(
                      "Invalid " + location2 + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                    );
                  }
                  var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
                  if (error) {
                    return error;
                  }
                }
                return null;
              }
              return createChainableTypeChecker(validate);
            }
            function isNode(propValue) {
              switch (typeof propValue) {
                case "number":
                case "string":
                case "undefined":
                  return true;
                case "boolean":
                  return !propValue;
                case "object":
                  if (Array.isArray(propValue)) {
                    return propValue.every(isNode);
                  }
                  if (propValue === null || isValidElement(propValue)) {
                    return true;
                  }
                  var iteratorFn = getIteratorFn(propValue);
                  if (iteratorFn) {
                    var iterator = iteratorFn.call(propValue);
                    var step;
                    if (iteratorFn !== propValue.entries) {
                      while (!(step = iterator.next()).done) {
                        if (!isNode(step.value)) {
                          return false;
                        }
                      }
                    } else {
                      while (!(step = iterator.next()).done) {
                        var entry = step.value;
                        if (entry) {
                          if (!isNode(entry[1])) {
                            return false;
                          }
                        }
                      }
                    }
                  } else {
                    return false;
                  }
                  return true;
                default:
                  return false;
              }
            }
            function isSymbol(propType, propValue) {
              if (propType === "symbol") {
                return true;
              }
              if (propValue["@@toStringTag"] === "Symbol") {
                return true;
              }
              if (typeof Symbol === "function" && propValue instanceof Symbol) {
                return true;
              }
              return false;
            }
            function getPropType(propValue) {
              var propType = typeof propValue;
              if (Array.isArray(propValue)) {
                return "array";
              }
              if (propValue instanceof RegExp) {
                return "object";
              }
              if (isSymbol(propType, propValue)) {
                return "symbol";
              }
              return propType;
            }
            function getPreciseType(propValue) {
              if (typeof propValue === "undefined" || propValue === null) {
                return "" + propValue;
              }
              var propType = getPropType(propValue);
              if (propType === "object") {
                if (propValue instanceof Date) {
                  return "date";
                } else if (propValue instanceof RegExp) {
                  return "regexp";
                }
              }
              return propType;
            }
            function getPostfixForTypeWarning(value) {
              var type = getPreciseType(value);
              switch (type) {
                case "array":
                case "object":
                  return "an " + type;
                case "boolean":
                case "date":
                case "regexp":
                  return "a " + type;
                default:
                  return type;
              }
            }
            function getClassName(propValue) {
              if (!propValue.constructor || !propValue.constructor.name) {
                return ANONYMOUS;
              }
              return propValue.constructor.name;
            }
            ReactPropTypes.checkPropTypes = checkPropTypes;
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
          };
        }).call(exports2, __webpack_require__(5));
      },
      function(module2, exports2) {
        "use strict";
        function makeEmptyFunction(arg) {
          return function() {
            return arg;
          };
        }
        var emptyFunction = function emptyFunction2() {
        };
        emptyFunction.thatReturns = makeEmptyFunction;
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
        emptyFunction.thatReturnsNull = makeEmptyFunction(null);
        emptyFunction.thatReturnsThis = function() {
          return this;
        };
        emptyFunction.thatReturnsArgument = function(arg) {
          return arg;
        };
        module2.exports = emptyFunction;
      },
      function(module2, exports2, __webpack_require__) {
        (function(process) {
          "use strict";
          var validateFormat = function validateFormat2(format2) {
          };
          if (process.env.NODE_ENV !== "production") {
            validateFormat = function validateFormat2(format2) {
              if (format2 === void 0) {
                throw new Error("invariant requires an error message argument");
              }
            };
          }
          function invariant(condition, format2, a, b, c, d, e, f) {
            validateFormat(format2);
            if (!condition) {
              var error;
              if (format2 === void 0) {
                error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
              } else {
                var args = [a, b, c, d, e, f];
                var argIndex = 0;
                error = new Error(format2.replace(/%s/g, function() {
                  return args[argIndex++];
                }));
                error.name = "Invariant Violation";
              }
              error.framesToPop = 1;
              throw error;
            }
          }
          module2.exports = invariant;
        }).call(exports2, __webpack_require__(5));
      },
      function(module2, exports2, __webpack_require__) {
        (function(process) {
          "use strict";
          var emptyFunction = __webpack_require__(7);
          var warning = emptyFunction;
          if (process.env.NODE_ENV !== "production") {
            var printWarning = function printWarning2(format2) {
              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              var argIndex = 0;
              var message = "Warning: " + format2.replace(/%s/g, function() {
                return args[argIndex++];
              });
              if (typeof console !== "undefined") {
                console.error(message);
              }
              try {
                throw new Error(message);
              } catch (x) {
              }
            };
            warning = function warning2(condition, format2) {
              if (format2 === void 0) {
                throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
              }
              if (format2.indexOf("Failed Composite propType: ") === 0) {
                return;
              }
              if (!condition) {
                for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                  args[_key2 - 2] = arguments[_key2];
                }
                printWarning.apply(void 0, [format2].concat(args));
              }
            };
          }
          module2.exports = warning;
        }).call(exports2, __webpack_require__(5));
      },
      function(module2, exports2) {
        "use strict";
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var propIsEnumerable = Object.prototype.propertyIsEnumerable;
        function toObject(val) {
          if (val === null || val === void 0) {
            throw new TypeError("Object.assign cannot be called with null or undefined");
          }
          return Object(val);
        }
        function shouldUseNative() {
          try {
            if (!Object.assign) {
              return false;
            }
            var test1 = new String("abc");
            test1[5] = "de";
            if (Object.getOwnPropertyNames(test1)[0] === "5") {
              return false;
            }
            var test2 = {};
            for (var i = 0; i < 10; i++) {
              test2["_" + String.fromCharCode(i)] = i;
            }
            var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
              return test2[n];
            });
            if (order2.join("") !== "0123456789") {
              return false;
            }
            var test3 = {};
            "abcdefghijklmnopqrst".split("").forEach(function(letter) {
              test3[letter] = letter;
            });
            if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
              return false;
            }
            return true;
          } catch (err) {
            return false;
          }
        }
        module2.exports = shouldUseNative() ? Object.assign : function(target, source) {
          var from;
          var to = toObject(target);
          var symbols;
          for (var s = 1; s < arguments.length; s++) {
            from = Object(arguments[s]);
            for (var key in from) {
              if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
              }
            }
            if (getOwnPropertySymbols) {
              symbols = getOwnPropertySymbols(from);
              for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                  to[symbols[i]] = from[symbols[i]];
                }
              }
            }
          }
          return to;
        };
      },
      function(module2, exports2) {
        "use strict";
        var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        module2.exports = ReactPropTypesSecret;
      },
      function(module2, exports2, __webpack_require__) {
        (function(process) {
          "use strict";
          if (process.env.NODE_ENV !== "production") {
            var invariant = __webpack_require__(8);
            var warning = __webpack_require__(9);
            var ReactPropTypesSecret = __webpack_require__(11);
            var loggedTypeFailures = {};
          }
          function checkPropTypes(typeSpecs, values, location2, componentName, getStack) {
            if (process.env.NODE_ENV !== "production") {
              for (var typeSpecName in typeSpecs) {
                if (typeSpecs.hasOwnProperty(typeSpecName)) {
                  var error;
                  try {
                    invariant(typeof typeSpecs[typeSpecName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", componentName || "React class", location2, typeSpecName, typeof typeSpecs[typeSpecName]);
                    error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, ReactPropTypesSecret);
                  } catch (ex) {
                    error = ex;
                  }
                  warning(!error || error instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error);
                  if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                    loggedTypeFailures[error.message] = true;
                    var stack = getStack ? getStack() : "";
                    warning(false, "Failed %s type: %s%s", location2, error.message, stack != null ? stack : "");
                  }
                }
              }
            }
          }
          module2.exports = checkPropTypes;
        }).call(exports2, __webpack_require__(5));
      },
      function(module2, exports2, __webpack_require__) {
        "use strict";
        var emptyFunction = __webpack_require__(7);
        var invariant = __webpack_require__(8);
        var ReactPropTypesSecret = __webpack_require__(11);
        module2.exports = function() {
          function shim(props, propName, componentName, location2, propFullName, secret) {
            if (secret === ReactPropTypesSecret) {
              return;
            }
            invariant(
              false,
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
          }
          ;
          shim.isRequired = shim;
          function getShim() {
            return shim;
          }
          ;
          var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim
          };
          ReactPropTypes.checkPropTypes = emptyFunction;
          ReactPropTypes.PropTypes = ReactPropTypes;
          return ReactPropTypes;
        };
      },
      function(module2, exports2) {
        module2.exports = require_react();
      },
      function(module2, exports2) {
        "use strict";
        var simpleIsEqual = function simpleIsEqual2(a, b) {
          return a === b;
        };
        function index(resultFn) {
          var isEqual = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : simpleIsEqual;
          var lastThis = void 0;
          var lastArgs = [];
          var lastResult = void 0;
          var calledOnce = false;
          var isNewArgEqualToLast = function isNewArgEqualToLast2(newArg, index2) {
            return isEqual(newArg, lastArgs[index2]);
          };
          var result = function result2() {
            for (var _len = arguments.length, newArgs = Array(_len), _key = 0; _key < _len; _key++) {
              newArgs[_key] = arguments[_key];
            }
            if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
              return lastResult;
            }
            calledOnce = true;
            lastThis = this;
            lastArgs = newArgs;
            lastResult = resultFn.apply(this, newArgs);
            return lastResult;
          };
          return result;
        }
        module2.exports = index;
      }
    ]);
  }
});

// node_modules/dom-scroll-into-view/lib/util.js
var require_util = __commonJS({
  "node_modules/dom-scroll-into-view/lib/util.js"(exports, module) {
    var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
    function getClientPosition(elem) {
      var box, x, y;
      var doc = elem.ownerDocument;
      var body = doc.body;
      var docElem = doc && doc.documentElement;
      box = elem.getBoundingClientRect();
      x = box.left;
      y = box.top;
      x -= docElem.clientLeft || body.clientLeft || 0;
      y -= docElem.clientTop || body.clientTop || 0;
      return { left: x, top: y };
    }
    function getScroll(w, top) {
      var ret = w["page" + (top ? "Y" : "X") + "Offset"];
      var method = "scroll" + (top ? "Top" : "Left");
      if (typeof ret !== "number") {
        var d = w.document;
        ret = d.documentElement[method];
        if (typeof ret !== "number") {
          ret = d.body[method];
        }
      }
      return ret;
    }
    function getScrollLeft(w) {
      return getScroll(w);
    }
    function getScrollTop(w) {
      return getScroll(w, true);
    }
    function getOffset(el) {
      var pos = getClientPosition(el);
      var doc = el.ownerDocument;
      var w = doc.defaultView || doc.parentWindow;
      pos.left += getScrollLeft(w);
      pos.top += getScrollTop(w);
      return pos;
    }
    function _getComputedStyle(elem, name, computedStyle) {
      var val = "";
      var d = elem.ownerDocument;
      if (computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null)) {
        val = computedStyle.getPropertyValue(name) || computedStyle[name];
      }
      return val;
    }
    var _RE_NUM_NO_PX = new RegExp("^(" + RE_NUM + ")(?!px)[a-z%]+$", "i");
    var RE_POS = /^(top|right|bottom|left)$/;
    var CURRENT_STYLE = "currentStyle";
    var RUNTIME_STYLE = "runtimeStyle";
    var LEFT = "left";
    var PX = "px";
    function _getComputedStyleIE(elem, name) {
      var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
      if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
        var style = elem.style, left = style[LEFT], rsLeft = elem[RUNTIME_STYLE][LEFT];
        elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
        style[LEFT] = name === "fontSize" ? "1em" : ret || 0;
        ret = style.pixelLeft + PX;
        style[LEFT] = left;
        elem[RUNTIME_STYLE][LEFT] = rsLeft;
      }
      return ret === "" ? "auto" : ret;
    }
    var getComputedStyleX;
    if (typeof window !== "undefined") {
      getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
    }
    function setOffset(elem, offset) {
      if (css(elem, "position") === "static") {
        elem.style.position = "relative";
      }
      var old = getOffset(elem), ret = {}, current, key;
      for (key in offset) {
        current = parseFloat(css(elem, key)) || 0;
        ret[key] = current + offset[key] - old[key];
      }
      css(elem, ret);
    }
    function each(arr, fn) {
      for (var i = 0; i < arr.length; i++) {
        fn(arr[i]);
      }
    }
    function isBorderBoxFn(elem) {
      return getComputedStyleX(elem, "boxSizing") === "border-box";
    }
    var BOX_MODELS = ["margin", "border", "padding"];
    var CONTENT_INDEX = -1;
    var PADDING_INDEX = 2;
    var BORDER_INDEX = 1;
    var MARGIN_INDEX = 0;
    function swap(elem, options, callback) {
      var old = {}, style = elem.style, name;
      for (name in options) {
        old[name] = style[name];
        style[name] = options[name];
      }
      callback.call(elem);
      for (name in options) {
        style[name] = old[name];
      }
    }
    function getPBMWidth(elem, props, which) {
      var value = 0, prop, j, i;
      for (j = 0; j < props.length; j++) {
        prop = props[j];
        if (prop) {
          for (i = 0; i < which.length; i++) {
            var cssProp;
            if (prop === "border") {
              cssProp = prop + which[i] + "Width";
            } else {
              cssProp = prop + which[i];
            }
            value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
          }
        }
      }
      return value;
    }
    function isWindow(obj) {
      return obj != null && obj == obj.window;
    }
    var domUtils = {};
    each(["Width", "Height"], function(name) {
      domUtils["doc" + name] = function(refWin) {
        var d = refWin.document;
        return Math.max(
          d.documentElement["scroll" + name],
          d.body["scroll" + name],
          domUtils["viewport" + name](d)
        );
      };
      domUtils["viewport" + name] = function(win) {
        var prop = "client" + name, doc = win.document, body = doc.body, documentElement = doc.documentElement, documentElementProp = documentElement[prop];
        return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
      };
    });
    function getWH(elem, name, extra) {
      if (isWindow(elem)) {
        return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
      } else if (elem.nodeType === 9) {
        return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
      }
      var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"], borderBoxValue = name === "width" ? elem.offsetWidth : elem.offsetHeight;
      var computedStyle = getComputedStyleX(elem);
      var isBorderBox = isBorderBoxFn(elem, computedStyle);
      var cssBoxValue = 0;
      if (borderBoxValue == null || borderBoxValue <= 0) {
        borderBoxValue = void 0;
        cssBoxValue = getComputedStyleX(elem, name);
        if (cssBoxValue == null || Number(cssBoxValue) < 0) {
          cssBoxValue = elem.style[name] || 0;
        }
        cssBoxValue = parseFloat(cssBoxValue) || 0;
      }
      if (extra === void 0) {
        extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
      }
      var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
      var val = borderBoxValue || cssBoxValue;
      if (extra === CONTENT_INDEX) {
        if (borderBoxValueOrIsBorderBox) {
          return val - getPBMWidth(
            elem,
            ["border", "padding"],
            which,
            computedStyle
          );
        } else {
          return cssBoxValue;
        }
      } else if (borderBoxValueOrIsBorderBox) {
        return val + (extra === BORDER_INDEX ? 0 : extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which, computedStyle) : getPBMWidth(elem, ["margin"], which, computedStyle));
      } else {
        return cssBoxValue + getPBMWidth(
          elem,
          BOX_MODELS.slice(extra),
          which,
          computedStyle
        );
      }
    }
    var cssShow = { position: "absolute", visibility: "hidden", display: "block" };
    function getWHIgnoreDisplay(elem) {
      var val, args = arguments;
      if (elem.offsetWidth !== 0) {
        val = getWH.apply(void 0, args);
      } else {
        swap(elem, cssShow, function() {
          val = getWH.apply(void 0, args);
        });
      }
      return val;
    }
    each(["width", "height"], function(name) {
      var first = name.charAt(0).toUpperCase() + name.slice(1);
      domUtils["outer" + first] = function(el, includeMargin) {
        return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
      };
      var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
      domUtils[name] = function(elem, val) {
        if (val !== void 0) {
          if (elem) {
            var computedStyle = getComputedStyleX(elem);
            var isBorderBox = isBorderBoxFn(elem);
            if (isBorderBox) {
              val += getPBMWidth(elem, ["padding", "border"], which, computedStyle);
            }
            return css(elem, name, val);
          }
          return;
        }
        return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
      };
    });
    function css(el, name, value) {
      if (typeof name === "object") {
        for (var i in name) {
          css(el, i, name[i]);
        }
        return;
      }
      if (typeof value !== "undefined") {
        if (typeof value === "number") {
          value = value + "px";
        }
        el.style[name] = value;
      } else {
        return getComputedStyleX(el, name);
      }
    }
    function mix(to, from) {
      for (var i in from) {
        to[i] = from[i];
      }
      return to;
    }
    var utils = module.exports = {
      getWindow: function(node) {
        var doc = node.ownerDocument || node;
        return doc.defaultView || doc.parentWindow;
      },
      offset: function(el, value) {
        if (typeof value !== "undefined") {
          setOffset(el, value);
        } else {
          return getOffset(el);
        }
      },
      isWindow,
      each,
      css,
      clone: function(obj) {
        var ret = {};
        for (var i in obj) {
          ret[i] = obj[i];
        }
        var overflow = obj.overflow;
        if (overflow) {
          for (i in obj) {
            ret.overflow[i] = obj.overflow[i];
          }
        }
        return ret;
      },
      mix,
      scrollLeft: function(w, v) {
        if (isWindow(w)) {
          if (v === void 0) {
            return getScrollLeft(w);
          } else {
            window.scrollTo(v, getScrollTop(w));
          }
        } else {
          if (v === void 0) {
            return w.scrollLeft;
          } else {
            w.scrollLeft = v;
          }
        }
      },
      scrollTop: function(w, v) {
        if (isWindow(w)) {
          if (v === void 0) {
            return getScrollTop(w);
          } else {
            window.scrollTo(getScrollLeft(w), v);
          }
        } else {
          if (v === void 0) {
            return w.scrollTop;
          } else {
            w.scrollTop = v;
          }
        }
      },
      merge: function() {
        var ret = {};
        for (var i = 0; i < arguments.length; i++) {
          utils.mix(ret, arguments[i]);
        }
        return ret;
      },
      viewportWidth: 0,
      viewportHeight: 0
    };
    mix(utils, domUtils);
  }
});

// node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js
var require_dom_scroll_into_view = __commonJS({
  "node_modules/dom-scroll-into-view/lib/dom-scroll-into-view.js"(exports, module) {
    var util = require_util();
    function scrollIntoView(elem, container, config) {
      config = config || {};
      if (container.nodeType === 9) {
        container = util.getWindow(container);
      }
      var allowHorizontalScroll = config.allowHorizontalScroll;
      var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
      var alignWithTop = config.alignWithTop;
      var alignWithLeft = config.alignWithLeft;
      allowHorizontalScroll = allowHorizontalScroll === void 0 ? true : allowHorizontalScroll;
      var isWin = util.isWindow(container);
      var elemOffset = util.offset(elem);
      var eh = util.outerHeight(elem);
      var ew = util.outerWidth(elem);
      var containerOffset, ch, cw, containerScroll, diffTop, diffBottom, win, winScroll, ww, wh;
      if (isWin) {
        win = container;
        wh = util.height(win);
        ww = util.width(win);
        winScroll = {
          left: util.scrollLeft(win),
          top: util.scrollTop(win)
        };
        diffTop = {
          left: elemOffset.left - winScroll.left,
          top: elemOffset.top - winScroll.top
        };
        diffBottom = {
          left: elemOffset.left + ew - (winScroll.left + ww),
          top: elemOffset.top + eh - (winScroll.top + wh)
        };
        containerScroll = winScroll;
      } else {
        containerOffset = util.offset(container);
        ch = container.clientHeight;
        cw = container.clientWidth;
        containerScroll = {
          left: container.scrollLeft,
          top: container.scrollTop
        };
        diffTop = {
          left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, "borderLeftWidth")) || 0)),
          top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, "borderTopWidth")) || 0))
        };
        diffBottom = {
          left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, "borderRightWidth")) || 0)),
          top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, "borderBottomWidth")) || 0))
        };
      }
      if (diffTop.top < 0 || diffBottom.top > 0) {
        if (alignWithTop === true) {
          util.scrollTop(container, containerScroll.top + diffTop.top);
        } else if (alignWithTop === false) {
          util.scrollTop(container, containerScroll.top + diffBottom.top);
        } else {
          if (diffTop.top < 0) {
            util.scrollTop(container, containerScroll.top + diffTop.top);
          } else {
            util.scrollTop(container, containerScroll.top + diffBottom.top);
          }
        }
      } else {
        if (!onlyScrollIfNeeded) {
          alignWithTop = alignWithTop === void 0 ? true : !!alignWithTop;
          if (alignWithTop) {
            util.scrollTop(container, containerScroll.top + diffTop.top);
          } else {
            util.scrollTop(container, containerScroll.top + diffBottom.top);
          }
        }
      }
      if (allowHorizontalScroll) {
        if (diffTop.left < 0 || diffBottom.left > 0) {
          if (alignWithLeft === true) {
            util.scrollLeft(container, containerScroll.left + diffTop.left);
          } else if (alignWithLeft === false) {
            util.scrollLeft(container, containerScroll.left + diffBottom.left);
          } else {
            if (diffTop.left < 0) {
              util.scrollLeft(container, containerScroll.left + diffTop.left);
            } else {
              util.scrollLeft(container, containerScroll.left + diffBottom.left);
            }
          }
        } else {
          if (!onlyScrollIfNeeded) {
            alignWithLeft = alignWithLeft === void 0 ? true : !!alignWithLeft;
            if (alignWithLeft) {
              util.scrollLeft(container, containerScroll.left + diffTop.left);
            } else {
              util.scrollLeft(container, containerScroll.left + diffBottom.left);
            }
          }
        }
      }
    }
    module.exports = scrollIntoView;
  }
});

// node_modules/dom-scroll-into-view/index.js
var require_dom_scroll_into_view2 = __commonJS({
  "node_modules/dom-scroll-into-view/index.js"(exports, module) {
    module.exports = require_dom_scroll_into_view();
  }
});

// node_modules/react-autocomplete/build/lib/Autocomplete.js
var require_Autocomplete = __commonJS({
  "node_modules/react-autocomplete/build/lib/Autocomplete.js"(exports, module) {
    "use strict";
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _possibleConstructorReturn(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var React6 = require_react();
    var PropTypes = require_prop_types();
    var _require = require_react_dom();
    var findDOMNode = _require.findDOMNode;
    var scrollIntoView = require_dom_scroll_into_view2();
    var IMPERATIVE_API = ["blur", "checkValidity", "click", "focus", "select", "setCustomValidity", "setSelectionRange", "setRangeText"];
    function getScrollOffset() {
      return {
        x: window.pageXOffset !== void 0 ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
        y: window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
      };
    }
    var Autocomplete2 = function(_React$Component) {
      _inherits(Autocomplete3, _React$Component);
      function Autocomplete3(props) {
        _classCallCheck(this, Autocomplete3);
        var _this = _possibleConstructorReturn(this, (Autocomplete3.__proto__ || Object.getPrototypeOf(Autocomplete3)).call(this, props));
        _this.state = {
          isOpen: false,
          highlightedIndex: null
        };
        _this._debugStates = [];
        _this.ensureHighlightedIndex = _this.ensureHighlightedIndex.bind(_this);
        _this.exposeAPI = _this.exposeAPI.bind(_this);
        _this.handleInputFocus = _this.handleInputFocus.bind(_this);
        _this.handleInputBlur = _this.handleInputBlur.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleInputClick = _this.handleInputClick.bind(_this);
        _this.maybeAutoCompleteText = _this.maybeAutoCompleteText.bind(_this);
        return _this;
      }
      _createClass(Autocomplete3, [{
        key: "componentWillMount",
        value: function componentWillMount() {
          this.refs = {};
          this._ignoreBlur = false;
          this._ignoreFocus = false;
          this._scrollOffset = null;
          this._scrollTimer = null;
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearTimeout(this._scrollTimer);
          this._scrollTimer = null;
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          if (this.state.highlightedIndex !== null) {
            this.setState(this.ensureHighlightedIndex);
          }
          if (nextProps.autoHighlight && (this.props.value !== nextProps.value || this.state.highlightedIndex === null)) {
            this.setState(this.maybeAutoCompleteText);
          }
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.isOpen()) {
            this.setMenuPositions();
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          if (this.state.isOpen && !prevState.isOpen || "open" in this.props && this.props.open && !prevProps.open)
            this.setMenuPositions();
          this.maybeScrollItemIntoView();
          if (prevState.isOpen !== this.state.isOpen) {
            this.props.onMenuVisibilityChange(this.state.isOpen);
          }
        }
      }, {
        key: "exposeAPI",
        value: function exposeAPI(el) {
          var _this2 = this;
          this.refs.input = el;
          IMPERATIVE_API.forEach(function(ev) {
            return _this2[ev] = el && el[ev] && el[ev].bind(el);
          });
        }
      }, {
        key: "maybeScrollItemIntoView",
        value: function maybeScrollItemIntoView() {
          if (this.isOpen() && this.state.highlightedIndex !== null) {
            var itemNode = this.refs["item-" + this.state.highlightedIndex];
            var menuNode = this.refs.menu;
            scrollIntoView(findDOMNode(itemNode), findDOMNode(menuNode), { onlyScrollIfNeeded: true });
          }
        }
      }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
          if (Autocomplete3.keyDownHandlers[event.key])
            Autocomplete3.keyDownHandlers[event.key].call(this, event);
          else if (!this.isOpen()) {
            this.setState({
              isOpen: true
            });
          }
        }
      }, {
        key: "handleChange",
        value: function handleChange(event) {
          this.props.onChange(event, event.target.value);
        }
      }, {
        key: "getFilteredItems",
        value: function getFilteredItems(props) {
          var items = props.items;
          if (props.shouldItemRender) {
            items = items.filter(function(item) {
              return props.shouldItemRender(item, props.value);
            });
          }
          if (props.sortItems) {
            items.sort(function(a, b) {
              return props.sortItems(a, b, props.value);
            });
          }
          return items;
        }
      }, {
        key: "maybeAutoCompleteText",
        value: function maybeAutoCompleteText(state, props) {
          var highlightedIndex = state.highlightedIndex;
          var value = props.value, getItemValue = props.getItemValue;
          var index = highlightedIndex === null ? 0 : highlightedIndex;
          var items = this.getFilteredItems(props);
          for (var i = 0; i < items.length; i++) {
            if (props.isItemSelectable(items[index]))
              break;
            index = (index + 1) % items.length;
          }
          var matchedItem = items[index] && props.isItemSelectable(items[index]) ? items[index] : null;
          if (value !== "" && matchedItem) {
            var itemValue = getItemValue(matchedItem);
            var itemValueDoesMatch = itemValue.toLowerCase().indexOf(value.toLowerCase()) === 0;
            if (itemValueDoesMatch) {
              return { highlightedIndex: index };
            }
          }
          return { highlightedIndex: null };
        }
      }, {
        key: "ensureHighlightedIndex",
        value: function ensureHighlightedIndex(state, props) {
          if (state.highlightedIndex >= this.getFilteredItems(props).length) {
            return { highlightedIndex: null };
          }
        }
      }, {
        key: "setMenuPositions",
        value: function setMenuPositions() {
          var node = this.refs.input;
          var rect = node.getBoundingClientRect();
          var computedStyle = globalThis.window.getComputedStyle(node);
          var marginBottom = parseInt(computedStyle.marginBottom, 10) || 0;
          var marginLeft = parseInt(computedStyle.marginLeft, 10) || 0;
          var marginRight = parseInt(computedStyle.marginRight, 10) || 0;
          this.setState({
            menuTop: rect.bottom + marginBottom,
            menuLeft: rect.left + marginLeft,
            menuWidth: rect.width + marginLeft + marginRight
          });
        }
      }, {
        key: "highlightItemFromMouse",
        value: function highlightItemFromMouse(index) {
          this.setState({ highlightedIndex: index });
        }
      }, {
        key: "selectItemFromMouse",
        value: function selectItemFromMouse(item) {
          var _this3 = this;
          var value = this.props.getItemValue(item);
          this.setIgnoreBlur(false);
          this.setState({
            isOpen: false,
            highlightedIndex: null
          }, function() {
            _this3.props.onSelect(value, item);
          });
        }
      }, {
        key: "setIgnoreBlur",
        value: function setIgnoreBlur(ignore) {
          this._ignoreBlur = ignore;
        }
      }, {
        key: "renderMenu",
        value: function renderMenu() {
          var _this4 = this;
          var items = this.getFilteredItems(this.props).map(function(item, index) {
            var element = _this4.props.renderItem(item, _this4.state.highlightedIndex === index, { cursor: "default" });
            return React6.cloneElement(element, {
              onMouseEnter: _this4.props.isItemSelectable(item) ? function() {
                return _this4.highlightItemFromMouse(index);
              } : null,
              onClick: _this4.props.isItemSelectable(item) ? function() {
                return _this4.selectItemFromMouse(item);
              } : null,
              ref: function ref(e) {
                return _this4.refs["item-" + index] = e;
              }
            });
          });
          var style = {
            left: this.state.menuLeft,
            top: this.state.menuTop,
            minWidth: this.state.menuWidth
          };
          var menu = this.props.renderMenu(items, this.props.value, style);
          return React6.cloneElement(menu, {
            ref: function ref(e) {
              return _this4.refs.menu = e;
            },
            onTouchStart: function onTouchStart() {
              return _this4.setIgnoreBlur(true);
            },
            onMouseEnter: function onMouseEnter() {
              return _this4.setIgnoreBlur(true);
            },
            onMouseLeave: function onMouseLeave() {
              return _this4.setIgnoreBlur(false);
            }
          });
        }
      }, {
        key: "handleInputBlur",
        value: function handleInputBlur(event) {
          var _this5 = this;
          if (this._ignoreBlur) {
            this._ignoreFocus = true;
            this._scrollOffset = getScrollOffset();
            this.refs.input.focus();
            return;
          }
          var setStateCallback = void 0;
          var highlightedIndex = this.state.highlightedIndex;
          if (this.props.selectOnBlur && highlightedIndex !== null) {
            var items = this.getFilteredItems(this.props);
            var item = items[highlightedIndex];
            var value = this.props.getItemValue(item);
            setStateCallback = function setStateCallback2() {
              return _this5.props.onSelect(value, item);
            };
          }
          this.setState({
            isOpen: false,
            highlightedIndex: null
          }, setStateCallback);
          var onBlur = this.props.inputProps.onBlur;
          if (onBlur) {
            onBlur(event);
          }
        }
      }, {
        key: "handleInputFocus",
        value: function handleInputFocus(event) {
          var _this6 = this;
          if (this._ignoreFocus) {
            this._ignoreFocus = false;
            var _scrollOffset = this._scrollOffset, x = _scrollOffset.x, y = _scrollOffset.y;
            this._scrollOffset = null;
            window.scrollTo(x, y);
            clearTimeout(this._scrollTimer);
            this._scrollTimer = setTimeout(function() {
              _this6._scrollTimer = null;
              window.scrollTo(x, y);
            }, 0);
            return;
          }
          this.setState({ isOpen: true });
          var onFocus = this.props.inputProps.onFocus;
          if (onFocus) {
            onFocus(event);
          }
        }
      }, {
        key: "isInputFocused",
        value: function isInputFocused() {
          var el = this.refs.input;
          return el.ownerDocument && el === el.ownerDocument.activeElement;
        }
      }, {
        key: "handleInputClick",
        value: function handleInputClick() {
          if (this.isInputFocused() && !this.isOpen())
            this.setState({ isOpen: true });
        }
      }, {
        key: "composeEventHandlers",
        value: function composeEventHandlers(internal, external) {
          return external ? function(e) {
            internal(e);
            external(e);
          } : internal;
        }
      }, {
        key: "isOpen",
        value: function isOpen() {
          return "open" in this.props ? this.props.open : this.state.isOpen;
        }
      }, {
        key: "render",
        value: function render() {
          if (this.props.debug) {
            this._debugStates.push({
              id: this._debugStates.length,
              state: this.state
            });
          }
          var inputProps = this.props.inputProps;
          var open = this.isOpen();
          return React6.createElement(
            "div",
            _extends({ style: _extends({}, this.props.wrapperStyle) }, this.props.wrapperProps),
            this.props.renderInput(_extends({}, inputProps, {
              role: "combobox",
              "aria-autocomplete": "list",
              "aria-expanded": open,
              autoComplete: "off",
              ref: this.exposeAPI,
              onFocus: this.handleInputFocus,
              onBlur: this.handleInputBlur,
              onChange: this.handleChange,
              onKeyDown: this.composeEventHandlers(this.handleKeyDown, inputProps.onKeyDown),
              onClick: this.composeEventHandlers(this.handleInputClick, inputProps.onClick),
              value: this.props.value
            })),
            open && this.renderMenu(),
            this.props.debug && React6.createElement(
              "pre",
              { style: { marginLeft: 300 } },
              JSON.stringify(this._debugStates.slice(Math.max(0, this._debugStates.length - 5), this._debugStates.length), null, 2)
            )
          );
        }
      }]);
      return Autocomplete3;
    }(React6.Component);
    Autocomplete2.propTypes = {
      items: PropTypes.array.isRequired,
      value: PropTypes.any,
      onChange: PropTypes.func,
      onSelect: PropTypes.func,
      shouldItemRender: PropTypes.func,
      isItemSelectable: PropTypes.func,
      sortItems: PropTypes.func,
      getItemValue: PropTypes.func.isRequired,
      renderItem: PropTypes.func.isRequired,
      renderMenu: PropTypes.func,
      menuStyle: PropTypes.object,
      renderInput: PropTypes.func,
      inputProps: PropTypes.object,
      wrapperProps: PropTypes.object,
      wrapperStyle: PropTypes.object,
      autoHighlight: PropTypes.bool,
      selectOnBlur: PropTypes.bool,
      onMenuVisibilityChange: PropTypes.func,
      open: PropTypes.bool,
      debug: PropTypes.bool
    };
    Autocomplete2.defaultProps = {
      value: "",
      wrapperProps: {},
      wrapperStyle: {
        display: "inline-block"
      },
      inputProps: {},
      renderInput: function renderInput(props) {
        return React6.createElement("input", props);
      },
      onChange: function onChange() {
      },
      onSelect: function onSelect() {
      },
      isItemSelectable: function isItemSelectable() {
        return true;
      },
      renderMenu: function renderMenu(items, value, style) {
        return React6.createElement("div", { style: _extends({}, style, this.menuStyle), children: items });
      },
      menuStyle: {
        borderRadius: "3px",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
        background: "rgba(255, 255, 255, 0.9)",
        padding: "2px 0",
        fontSize: "90%",
        position: "fixed",
        overflow: "auto",
        maxHeight: "50%"
      },
      autoHighlight: true,
      selectOnBlur: false,
      onMenuVisibilityChange: function onMenuVisibilityChange() {
      }
    };
    Autocomplete2.keyDownHandlers = {
      ArrowDown: function ArrowDown(event) {
        event.preventDefault();
        var items = this.getFilteredItems(this.props);
        if (!items.length)
          return;
        var highlightedIndex = this.state.highlightedIndex;
        var index = highlightedIndex === null ? -1 : highlightedIndex;
        for (var i = 0; i < items.length; i++) {
          var p = (index + i + 1) % items.length;
          if (this.props.isItemSelectable(items[p])) {
            index = p;
            break;
          }
        }
        if (index > -1 && index !== highlightedIndex) {
          this.setState({
            highlightedIndex: index,
            isOpen: true
          });
        }
      },
      ArrowUp: function ArrowUp(event) {
        event.preventDefault();
        var items = this.getFilteredItems(this.props);
        if (!items.length)
          return;
        var highlightedIndex = this.state.highlightedIndex;
        var index = highlightedIndex === null ? items.length : highlightedIndex;
        for (var i = 0; i < items.length; i++) {
          var p = (index - (1 + i) + items.length) % items.length;
          if (this.props.isItemSelectable(items[p])) {
            index = p;
            break;
          }
        }
        if (index !== items.length) {
          this.setState({
            highlightedIndex: index,
            isOpen: true
          });
        }
      },
      Enter: function Enter(event) {
        var _this7 = this;
        if (event.keyCode !== 13)
          return;
        this.setIgnoreBlur(false);
        if (!this.isOpen()) {
          return;
        } else if (this.state.highlightedIndex == null) {
          this.setState({
            isOpen: false
          }, function() {
            _this7.refs.input.select();
          });
        } else {
          event.preventDefault();
          var item = this.getFilteredItems(this.props)[this.state.highlightedIndex];
          var value = this.props.getItemValue(item);
          this.setState({
            isOpen: false,
            highlightedIndex: null
          }, function() {
            _this7.refs.input.setSelectionRange(value.length, value.length);
            _this7.props.onSelect(value, item);
          });
        }
      },
      Escape: function Escape() {
        this.setIgnoreBlur(false);
        this.setState({
          highlightedIndex: null,
          isOpen: false
        });
      },
      Tab: function Tab() {
        this.setIgnoreBlur(false);
      }
    };
    module.exports = Autocomplete2;
  }
});

// app/routes/edit-menu-of-the-day/$date.jsx
var import_react5 = __toESM(require_react());

// app/components/edit/editMenuItem.jsx
var import_react4 = __toESM(require_react());

// app/components/edit/editMenuModel.jsx
var import_react3 = __toESM(require_react());
var import_react_modal = __toESM(require_lib());

// app/components/edit/todoIngredients.jsx
var import_react = __toESM(require_react());
var import_react_highlight_words = __toESM(require_main());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Todoingredients({ ingredient, setIngredient, setIngredientChanged }) {
  const [searchMenu, setSearchMenu] = (0, import_react.useState)([]);
  const [searchText, setSearchText] = (0, import_react.useState)("");
  const searchMenuRender = async ({ value }) => {
    const filterValue = (value == null ? void 0 : value.length) > 0 ? { name: { _icontains: value } } : { name: { _nempty: null } };
    await directusLoaderLink.items("new_ingredients_data").readByQuery({
      fields: ["*"],
      filter: filterValue,
      sort: ["-date_updated", "id"],
      limit: 150
    }).then((res) => {
      setSearchMenu(res == null ? void 0 : res.data);
    }).catch((err) => {
      console.log(err);
    });
  };
  import_react.default.useEffect(() => {
    searchMenuRender({ value: "" });
  }, []);
  import_react.default.useEffect(() => {
    const id = setTimeout(() => {
      searchMenuRender({ value: searchText });
    }, 700);
    return () => {
      clearTimeout(id);
    };
  }, [searchText]);
  const handleInputChange = (e, index) => {
    var _a;
    const { name, value, Item } = e;
    const list = [...ingredient];
    setIngredientChanged(true);
    list[index][name] = name == "name" ? (_a = e == null ? void 0 : e.value) == null ? void 0 : _a.name : value;
    list[index]["IndexId"] = index;
    name == "name" && (list[index]["Item1"] = value);
    setIngredient(list);
  };
  const handleRemoveClick = (index) => {
    setIngredientChanged(true);
    setIngredient((oldValues) => {
      return oldValues == null ? void 0 : oldValues.filter((_, i) => i !== index);
    });
  };
  const styles1 = {
    menuList: (base) => ({
      ...base,
      height: "110px",
      "::-webkit-scrollbar": {
        width: "6px"
      },
      "::-webkit-scrollbar-track": {
        background: "#2684FF"
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555"
      }
    }),
    control: (base, state) => ({
      ...base,
      border: "none",
      marginTop: "4px",
      borderColor: state.isFocused ? "grey" : "red"
    })
  };
  function formatOptionLabel({ name }, { inputValue }) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_highlight_words.default, {
      searchWords: [inputValue],
      textToHighlight: name,
      highlightClassName: "select-ingredient"
    }, void 0, false, {
      fileName: "app/components/edit/todoIngredients.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: ingredient == null ? void 0 : ingredient.map((x, i) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "pr-4 pl-0 data-list popauto my-2 flex flex-row justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_select_cjs_default._default, {
            id: "Ingredient",
            classNamePrefix: "cursor-pointer react-select",
            className: " react-select-container  border-gray-500 border-0 text-gray-900 text-sm w-1/3 min-h-[42px] flex",
            defaultMenuIsOpen: false,
            maxMenuHeight: 250,
            onChange: (e) => handleInputChange({ value: e, name: "name", item: {} }, i),
            components: {
              IndicatorSeparator: () => null
            },
            hideSelectedOptions: true,
            cacheOptions: false,
            value: ((_a = x == null ? void 0 : x.name) == null ? void 0 : _a.length) > 0 ? x : "",
            formatOptionLabel,
            options: searchMenu == null ? void 0 : searchMenu.map((e) => e),
            getOptionLabel: (option) => option.name,
            getOptionValue: (option) => option.id,
            onInputChange: (e) => setSearchText(e),
            placeholder: "S\xF8g efter ingrediens",
            styles: {
              styles1,
              control: (baseStyles) => ({
                ...baseStyles,
                border: "none",
                boxShadow: "none"
              })
            }
          }, void 0, false, {
            fileName: "app/components/edit/todoIngredients.jsx",
            lineNumber: 103,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "justify-end flex flex-row ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                name: "Value2",
                type: "number",
                onKeyDown: (evt) => evt.key === "e" && evt.preventDefault(),
                placeholder: "0",
                value: x == null ? void 0 : x.Value2,
                onChange: (e) => {
                  var _a2;
                  return handleInputChange({ value: (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value, name: "Value2" }, i);
                },
                onWheel: (e) => {
                  var _a2;
                  return (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.blur();
                },
                className: "border border-[#777] border-collapse rounded-l-md justify-end  my-1 block w-1/2 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium text-black sm:text-sm"
              }, void 0, false, {
                fileName: "app/components/edit/todoIngredients.jsx",
                lineNumber: 134,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "unit-section text-center border border-black rounded-r-md my-1 p-2 border-collapse	",
                children: "g"
              }, void 0, false, {
                fileName: "app/components/edit/todoIngredients.jsx",
                lineNumber: 146,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/edit/todoIngredients.jsx",
            lineNumber: 133,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "justify-end items-end flex-row m-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "button",
              title: "Delete Ingredient",
              className: "w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-full border border-transparent text-sm font-medium text-black shadow-sm focus:outline-none focus:ring-offset-2 sm:w-auto",
              onClick: () => handleRemoveClick(i),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "feather feather-trash w-5 h-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", {
                      points: "3 6 5 6 21 6"
                    }, void 0, false, {
                      fileName: "app/components/edit/todoIngredients.jsx",
                      lineNumber: 168,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                      d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                    }, void 0, false, {
                      fileName: "app/components/edit/todoIngredients.jsx",
                      lineNumber: 169,
                      columnNumber: 21
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/edit/todoIngredients.jsx",
                  lineNumber: 158,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: "app/components/edit/todoIngredients.jsx",
                lineNumber: 157,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: "app/components/edit/todoIngredients.jsx",
              lineNumber: 151,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/components/edit/todoIngredients.jsx",
            lineNumber: 150,
            columnNumber: 13
          }, this)
        ]
      }, i, true, {
        fileName: "app/components/edit/todoIngredients.jsx",
        lineNumber: 99,
        columnNumber: 11
      }, this);
    })
  }, void 0, false, {
    fileName: "app/components/edit/todoIngredients.jsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}
var todoIngredients_default = Todoingredients;

// app/components/edit/customInput.jsx
var import_react2 = __toESM(require_react());
var import_react_autocomplete = __toESM(require_Autocomplete());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CustomInput({
  lang,
  value,
  setValue,
  setAllergens,
  setDietary,
  setIngredient,
  valueEng,
  setValueEng,
  setBgRemovedImage
}) {
  const [items, setItems] = (0, import_react2.useState)([]);
  import_react2.default.useEffect(() => {
    if (value == null ? void 0 : value.includes("@")) {
      searchMenuRender({ value, type: lang });
    }
  }, [value == null ? void 0 : value.includes("@")]);
  const getMentionedUsers = () => {
    const startIndex = value == null ? void 0 : value.lastIndexOf("@");
    const mentionText = value == null ? void 0 : value.substring(startIndex + 1);
    if (startIndex !== -1) {
      const val = items == null ? void 0 : items.filter(
        (item) => {
          var _a, _b;
          return (_b = (_a = lang ? item == null ? void 0 : item.menu_info : item == null ? void 0 : item.menu_info_1) == null ? void 0 : _a.toLowerCase()) == null ? void 0 : _b.includes(mentionText == null ? void 0 : mentionText.toLowerCase());
        }
      );
      return val == null ? void 0 : val.slice(0, 10);
    } else {
      return [];
    }
  };
  const searchMenuRender = async (type) => {
    const menuInfo1 = type == null ? void 0 : type.value;
    const typeInput = (type == null ? void 0 : type.type) === "da" ? true : false;
    if ((menuInfo1 == null ? void 0 : menuInfo1.includes("@")) && menuInfo1.length <= 2) {
      var filterValue = {};
      if (menuInfo1.includes("@") && menuInfo1.length >= 1) {
        filterValue = typeInput ? { menu_info: { _nempty: null }, is_global: { _eq: true } } : { menu_info_1: { _nempty: null }, is_global: { _eq: true } };
      }
      await directusLoaderLink.items("recipe_book").readByQuery({
        fields: [
          "*",
          "allergens_list.id",
          "allergens_list.Allergens_id.*",
          "dietary_list.id",
          "dietary_list.Dietary_id.*",
          "ingredients_list.*",
          "ingredients_list.new_climate_db.*"
        ],
        filter: filterValue,
        sort: ["id"]
      }).then((res) => {
        setItems(res == null ? void 0 : res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
    return [];
  };
  const renderItem = (item, isHighlighted) => {
    var _a, _b, _c, _d;
    const menu = lang ? item == null ? void 0 : item.menu_info : item == null ? void 0 : item.menu_info_1;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "p-2 block overflow-hidden border border-b-[#c5c5c5]",
      style: { background: isHighlighted ? "lightgray" : "white" },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "float-left w-[80%] mr-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: menu
            }, void 0, false, {
              fileName: "app/components/edit/customInput.jsx",
              lineNumber: 87,
              columnNumber: 11
            }, this),
            ((_a = item == null ? void 0 : item.allergens_list) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: " font-bold",
                  children: [
                    lang ? ALLERGENS_ENG_DK : ALLERGENS_ENG,
                    ": "
                  ]
                }, void 0, true, {
                  fileName: "app/components/edit/customInput.jsx",
                  lineNumber: 90,
                  columnNumber: 15
                }, this),
                (_b = item == null ? void 0 : item.allergens_list) == null ? void 0 : _b.map(
                  (e, i) => {
                    var _a2, _b2;
                    return `${(_a2 = e == null ? void 0 : e.Allergens_id) == null ? void 0 : _a2[lang ? "name" : "translated_name"]}${i !== ((_b2 = item == null ? void 0 : item.allergens_list) == null ? void 0 : _b2.length) - 1 ? ", " : ""}`;
                  }
                )
              ]
            }, void 0, true, {
              fileName: "app/components/edit/customInput.jsx",
              lineNumber: 89,
              columnNumber: 13
            }, this),
            ((_c = item == null ? void 0 : item.dietary_list) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: " font-bold",
                  children: [
                    lang ? DIETARY_PREFERENCES_DK : DIETARY_PREFERENCES_ENG,
                    ": "
                  ]
                }, void 0, true, {
                  fileName: "app/components/edit/customInput.jsx",
                  lineNumber: 104,
                  columnNumber: 15
                }, this),
                (_d = item == null ? void 0 : item.dietary_list) == null ? void 0 : _d.map(
                  (e, i) => {
                    var _a2, _b2;
                    return `${(_a2 = e == null ? void 0 : e.Dietary_id) == null ? void 0 : _a2[lang ? "name" : "translated_name"]}${i !== ((_b2 = item == null ? void 0 : item.dietary_list) == null ? void 0 : _b2.length) - 1 ? ", " : ""}`;
                  }
                )
              ]
            }, void 0, true, {
              fileName: "app/components/edit/customInput.jsx",
              lineNumber: 103,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/edit/customInput.jsx",
          lineNumber: 86,
          columnNumber: 9
        }, this),
        (item == null ? void 0 : item.app_resultant_image) !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "float-right w-[75px] text-right",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: getAssetURL(item == null ? void 0 : item.app_resultant_image),
            alt: "dish",
            style: { width: "60px", height: "60px" }
          }, void 0, false, {
            fileName: "app/components/edit/customInput.jsx",
            lineNumber: 119,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/components/edit/customInput.jsx",
          lineNumber: 118,
          columnNumber: 11
        }, this)
      ]
    }, item == null ? void 0 : item.id, true, {
      fileName: "app/components/edit/customInput.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-full",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_autocomplete.default, {
      wrapperStyle: { width: "100%" },
      getItemValue: (item) => {
        return JSON.stringify(item);
      },
      items: getMentionedUsers(),
      renderItem,
      value,
      onChange: (e) => {
        var _a;
        return setValue((_a = e == null ? void 0 : e.target) == null ? void 0 : _a.value);
      },
      onSelect: (value2) => {
        var _a, _b, _c;
        const val = JSON.parse(value2);
        setAllergens((_a = val == null ? void 0 : val.allergens_list) == null ? void 0 : _a.map((e) => {
          var _a2;
          return (_a2 = e == null ? void 0 : e.Allergens_id) == null ? void 0 : _a2.id;
        }));
        setDietary((_b = val == null ? void 0 : val.dietary_list) == null ? void 0 : _b.map((e) => {
          var _a2;
          return (_a2 = e == null ? void 0 : e.Dietary_id) == null ? void 0 : _a2.id;
        }));
        setIngredient(
          (_c = val == null ? void 0 : val.ingredients_list) == null ? void 0 : _c.map((item, i) => {
            var _a2;
            return {
              name: (_a2 = item == null ? void 0 : item.new_climate_db) == null ? void 0 : _a2.name,
              Value2: item == null ? void 0 : item.unit,
              item,
              Item1: item == null ? void 0 : item.new_climate_db,
              IndexId: i,
              prev1: item == null ? void 0 : item.new_climate_db,
              prev2: item == null ? void 0 : item.unit
            };
          })
        );
        const menu = lang ? val == null ? void 0 : val.menu_info : val == null ? void 0 : val.menu_info_1;
        const startIndex = menu == null ? void 0 : menu.lastIndexOf("@");
        const newValue = (menu == null ? void 0 : menu.substring(0, startIndex + 1)) + (menu == null ? void 0 : menu.substring(startIndex + 1, menu == null ? void 0 : menu.length));
        setValue(newValue);
        const menu1 = !lang ? val == null ? void 0 : val.menu_info : val == null ? void 0 : val.menu_info_1;
        const startIndex1 = menu == null ? void 0 : menu.lastIndexOf("@");
        const newValue1 = (menu1 == null ? void 0 : menu1.substring(0, startIndex1 + 1)) + (menu1 == null ? void 0 : menu1.substring(startIndex1 + 1, menu1 == null ? void 0 : menu1.length));
        setValueEng(newValue1);
        (val == null ? void 0 : val.app_resultant_image) !== null && setBgRemovedImage({
          img: val == null ? void 0 : val.app_resultant_image,
          type: "id",
          update: true
        });
      },
      renderInput: (e) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
        ...e,
        onKeyDown: (e2) => {
        }
      }, void 0, false, {
        fileName: "app/components/edit/customInput.jsx",
        lineNumber: 176,
        columnNumber: 29
      }, this),
      menuStyle: {
        backgroundColor: "black",
        position: "absolute",
        top: "50px",
        left: "0",
        zIndex: 20,
        maxHeight: "300px",
        overflowY: "auto",
        width: "100%",
        display: `${(value == null ? void 0 : value.includes("@")) ? "block" : "none"}`
      },
      inputProps: {
        style: { width: "100%", height: "70px", resize: "unset" },
        placeholder: "Add meal..."
      }
    }, void 0, false, {
      fileName: "app/components/edit/customInput.jsx",
      lineNumber: 131,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/edit/customInput.jsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
}
var customInput_default = CustomInput;

// app/components/edit/editMenuModel.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EditMenuModel = import_react3.default.forwardRef((prop, _ref) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I;
  const {
    setIsOpenv,
    station,
    editContent,
    existingTableData,
    indexValue,
    stationColor,
    EnTitle,
    DkTitle,
    dkMenu,
    enMenu,
    allergensList,
    dietaryList,
    ingredientsList,
    setIngredientsList,
    portionsProducedValue,
    portionsSoldValue,
    totalCalorie,
    menuId,
    stationId,
    stationName
  } = prop;
  const user = {
    email: (_a = editContent == null ? void 0 : editContent.currentUser) == null ? void 0 : _a.email,
    password: (_b = editContent == null ? void 0 : editContent.currentUser) == null ? void 0 : _b.password_copy
  };
  const bgImg = (station == null ? void 0 : station.app_resultant_image) !== null ? { img: (_c = station == null ? void 0 : station.app_resultant_image) == null ? void 0 : _c.id, type: "id", update: true } : ((_e = (_d = station == null ? void 0 : station.recipe_id) == null ? void 0 : _d.app_resultant_image) == null ? void 0 : _e.id) !== void 0 ? {
    img: (_g = (_f = station == null ? void 0 : station.recipe_id) == null ? void 0 : _f.app_resultant_image) == null ? void 0 : _g.id,
    type: "id",
    update: true
  } : "";
  const [modalIsOpen, setIsOpen] = (0, import_react3.useState)(setIsOpenv ? true : false);
  const [bannerModal, setBannerModal] = (0, import_react3.useState)(false);
  const [ingredient, setIngredient] = (0, import_react3.useState)(ingredientsList);
  const [ingredientChanged, setIngredientChanged] = (0, import_react3.useState)(false);
  const [portionsProduced, setPortionsProduced] = (0, import_react3.useState)(portionsProducedValue);
  const [portionsSold, setPortionsSold] = (0, import_react3.useState)(portionsSoldValue);
  const [isError, setIsError] = (0, import_react3.useState)(false);
  const [menuInfo, setMenuInfo] = (0, import_react3.useState)(dkMenu);
  const [bgImage, setBgImage] = (0, import_react3.useState)("");
  const [bgImageRefreshError, setBgImageRefreshError] = (0, import_react3.useState)("");
  const [bgRemovedImage, setBgRemovedImage] = (0, import_react3.useState)(bgImg);
  const [saveType, setSaveType] = (0, import_react3.useState)("day");
  const [translatedMenuInfo, setTranslatedMenuInfo] = (0, import_react3.useState)(enMenu);
  const [table, showTable] = (0, import_react3.useState)("Ingredienslist");
  const allergensNames = ["sesame", "gluten", "soy", "mustard", "nuts", "egg", "fish", "celery", "mollusks", "milk", "crustacea", "lupine", "peanuts", "sulfur dioxide"];
  const MAX_LIMIT = 100;
  const MAXALERGENLIST = 14;
  const MAXDIETARYLIST = 8;
  let fromLang = "da";
  let toLang = "en";
  const MAX_SIZE = 5e6;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      width: "96%",
      maxHeight: "90vh"
    }
  };
  const [selectedMenuItems, setSelectedMenuItems] = (0, import_react3.useState)(allergensList);
  const [selectedDietaryItems, setSelectedDietaryItems] = (0, import_react3.useState)(dietaryList);
  const [preventDouble, setPreventDouble] = (0, import_react3.useState)(false);
  const [preventDoubleImage, setPreventDoubleImage] = (0, import_react3.useState)(false);
  const parentStationName = (_j = (_i = (_h = editContent == null ? void 0 : editContent.getAllStations) == null ? void 0 : _h.filter(
    (e) => (e == null ? void 0 : e.station_unique_id) === (stationId == null ? void 0 : stationId.uniqueId)
  )) == null ? void 0 : _i[0]) == null ? void 0 : _j.parent_id;
  const closeModal = () => {
    const newList = [];
    ingredientsList == null ? void 0 : ingredientsList.map(
      (e) => {
        var _a2;
        return newList.push({
          IndexId: e == null ? void 0 : e.IndexId,
          Item1: e == null ? void 0 : e.prev1,
          name: (_a2 = e == null ? void 0 : e.prev1) == null ? void 0 : _a2.name,
          Value2: e == null ? void 0 : e.prev2,
          item: e == null ? void 0 : e.item,
          prev1: e == null ? void 0 : e.prev1,
          prev2: e == null ? void 0 : e.prev2
        });
      }
    );
    setIngredientsList(newList);
    setIsOpenv(false);
    setIsOpen(false);
  };
  const firstUpdate = import_react3.default.useRef(true);
  async function GoogleTranslator(text) {
    try {
      let url = `${GOOGLE_TRANSLATOR_URL}/language/translate/v2?key=${GOOGLE_TRANSLATION_APIKEY}`;
      url += "&q=" + encode(text);
      url += `&source=${fromLang}`;
      url += `&target=${toLang}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      return res.json();
    } catch (err) {
      setIsError(true);
    }
  }
  (0, import_react3.useLayoutEffect)(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if ((menuInfo == null ? void 0 : menuInfo.length) > MAX_LIMIT) {
      setMenuInfo(menuInfo == null ? void 0 : menuInfo.substring(0, MAX_LIMIT));
    } else {
      const callSearchService = () => {
        GoogleTranslator(menuInfo).then(
          (results) => {
            var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
            return (results == null ? void 0 : results.data) ? setTranslatedMenuInfo(
              (_g2 = (_f2 = (_e2 = decode(
                (_d2 = (_c2 = (_b2 = (_a2 = results == null ? void 0 : results.data) == null ? void 0 : _a2.translations) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.translatedText) == null ? void 0 : _d2.replaceAll(
                  "%",
                  "%25"
                )
              )) == null ? void 0 : _e2.replaceAll("&#39;", "'")) == null ? void 0 : _f2.substring(0, MAX_LIMIT)) != null ? _g2 : ""
            ) : setIsError(true);
          }
        ).catch((err) => console.log(err));
      };
      let debouncer = setTimeout(() => {
        callSearchService();
      }, 1e3);
      return () => {
        clearTimeout(debouncer);
      };
    }
  }, [menuInfo.length]);
  (0, import_react3.useEffect)(() => {
    if ((translatedMenuInfo == null ? void 0 : translatedMenuInfo.length) > MAX_LIMIT) {
      setTranslatedMenuInfo(translatedMenuInfo == null ? void 0 : translatedMenuInfo.substring(0, MAX_LIMIT));
    }
  }, [translatedMenuInfo.length]);
  ((_k = bgImageRefreshError == null ? void 0 : bgImageRefreshError.trim()) == null ? void 0 : _k.length) > 0 && setTimeout(() => {
    setBgImageRefreshError("");
  }, 5e3);
  (0, import_react3.useEffect)(() => {
    ingredientChanged && autoAddAllergence();
  }, [ingredient]);
  let totalCalories = 0;
  let totalCO2 = 0;
  (ingredient == null ? void 0 : ingredient.length) > 0 && (ingredient == null ? void 0 : ingredient.map((e) => {
    var _a2, _b2, _c2, _d2, _e2;
    ((_a2 = e == null ? void 0 : e.Item1) == null ? void 0 : _a2.CO2e) != null && (totalCO2 = Number((_b2 = e == null ? void 0 : e.Item1) == null ? void 0 : _b2.CO2e) / 1e3 * Number(e == null ? void 0 : e.Value2) + totalCO2);
    ((_c2 = e == null ? void 0 : e.Item1) == null ? void 0 : _c2.energy) != null && ((_d2 = e == null ? void 0 : e.Item1) == null ? void 0 : _d2.energy) != void 0 && (totalCalories = Number((_e2 = e == null ? void 0 : e.Item1) == null ? void 0 : _e2.energy) / 100 * 0.239006 * Number(e == null ? void 0 : e.Value2) + totalCalories);
    return "";
  }));
  const handleAllergens = (id) => {
    if (selectedMenuItems.indexOf(id) == -1) {
      if ((selectedMenuItems == null ? void 0 : selectedMenuItems.length) < MAXALERGENLIST) {
        setSelectedMenuItems([...selectedMenuItems, id]);
      }
    } else {
      setSelectedMenuItems(selectedMenuItems.filter((e) => e != id));
    }
  };
  const autoAddAllergence = () => {
    const allergenIds = [];
    ingredient == null ? void 0 : ingredient.map((ingredient2) => {
      allergensNames == null ? void 0 : allergensNames.map((name) => {
        var _a2, _b2, _c2, _d2, _e2;
        if ((_b2 = ["ja", "spor af", "afledt af"]) == null ? void 0 : _b2.includes((_a2 = ingredient2 == null ? void 0 : ingredient2.Item1[name]) == null ? void 0 : _a2.toLowerCase())) {
          const allergen = (_e2 = (_d2 = (_c2 = editContent == null ? void 0 : editContent.getAllAllergens) == null ? void 0 : _c2.data) == null ? void 0 : _d2.filter((i) => {
            var _a3;
            return ((_a3 = i == null ? void 0 : i.translated_name) == null ? void 0 : _a3.toLowerCase()) === (name === "egg" ? "eggs" : name);
          })[0]) == null ? void 0 : _e2.id;
          !allergenIds.some((id) => id === allergen) && (allergenIds == null ? void 0 : allergenIds.push(allergen));
        }
      });
    });
    setSelectedMenuItems(allergenIds);
  };
  const handleDietary = (id) => {
    if (selectedDietaryItems.indexOf(id) == -1) {
      if ((selectedDietaryItems == null ? void 0 : selectedDietaryItems.length) < MAXDIETARYLIST) {
        setSelectedDietaryItems([...selectedDietaryItems, id]);
      }
    } else {
      setSelectedDietaryItems(selectedDietaryItems.filter((e) => e != id));
    }
  };
  const handleAddClick = () => {
    setIngredient([
      ...ingredient,
      { name: "", Value2: "", Item1: {}, IndexId: "" }
    ]);
  };
  const IngredientsTable = () => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "tab-section-data",
      children: [
        (ingredient == null ? void 0 : ingredient.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "tab-ingredients block text-sm text-[#777] py-2",
          children: "Ingredienser"
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(todoIngredients_default, {
          ingredient,
          setIngredient,
          autoAddAllergence,
          setIngredientChanged
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 248,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex gap-3 my-3",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            onClick: () => handleAddClick(),
            className: "w-20 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-start text-primary text-sm font-medium",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                viewBox: "0 0 24 24",
                width: "16",
                height: "16",
                stroke: "#023937",
                strokeWidth: "3",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "css-i6dzq1 mr-1",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
                    x1: "12",
                    y1: "5",
                    x2: "12",
                    y2: "19"
                  }, void 0, false, {
                    fileName: "app/components/edit/editMenuModel.jsx",
                    lineNumber: 270,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
                    x1: "5",
                    y1: "12",
                    x2: "19",
                    y2: "12"
                  }, void 0, false, {
                    fileName: "app/components/edit/editMenuModel.jsx",
                    lineNumber: 271,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/edit/editMenuModel.jsx",
                lineNumber: 259,
                columnNumber: 13
              }, this),
              "Add"
            ]
          }, void 0, true, {
            fileName: "app/components/edit/editMenuModel.jsx",
            lineNumber: 255,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 254,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/edit/editMenuModel.jsx",
      lineNumber: 242,
      columnNumber: 7
    }, this);
  };
  const AllergensTable = () => {
    var _a2, _b2;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "py-4",
      children: [
        (station == null ? void 0 : station.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
          className: "lists flex flex-wrap gap-2 grid-cols-8 sm:grid-cols-6 md:grid-cols-8 1xl:grid-cols-6 max-w-[70%]",
          children: (_b2 = (_a2 = editContent == null ? void 0 : editContent.getAllAllergens) == null ? void 0 : _a2.data) == null ? void 0 : _b2.map((allergen, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            onClick: () => handleAllergens(allergen == null ? void 0 : allergen.id),
            className: `list cursor-pointer text-center text-xs px-3 py-1 rounded-[24px] border ${(selectedMenuItems == null ? void 0 : selectedMenuItems.some((item) => item == (allergen == null ? void 0 : allergen.id))) ? "bg-primary text-white" : null} border-primary col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-2 1xl:col-span-1 font-normal`,
            children: allergen == null ? void 0 : allergen.name
          }, index, false, {
            fileName: "app/components/edit/editMenuModel.jsx",
            lineNumber: 305,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 303,
          columnNumber: 11
        }, this) : null,
        (selectedMenuItems == null ? void 0 : selectedMenuItems.length) >= MAXALERGENLIST && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-red-500 text-sm text-right",
          children: `*Maximum ${MAXALERGENLIST} allergener are allowed.`
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 320,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/edit/editMenuModel.jsx",
      lineNumber: 301,
      columnNumber: 7
    }, this);
  };
  const DietaryTable = () => {
    var _a2, _b2;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "py-4",
      children: [
        (station == null ? void 0 : station.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
          className: "lists flex flex-wrap gap-2 grid-cols-8 sm:grid-cols-6 md:grid-cols-8 1xl:grid-cols-6 max-w-[70%]",
          children: (_b2 = (_a2 = editContent == null ? void 0 : editContent.getAllDietary) == null ? void 0 : _a2.data) == null ? void 0 : _b2.map((dietary, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
            onClick: () => handleDietary(dietary == null ? void 0 : dietary.id),
            className: `list cursor-pointer text-center text-xs px-3 py-1 rounded-[24px] border ${(selectedDietaryItems == null ? void 0 : selectedDietaryItems.some((item) => item == (dietary == null ? void 0 : dietary.id))) ? "bg-primary text-white" : null} border-primary col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-2 1xl:col-span-1 font-normal`,
            children: dietary == null ? void 0 : dietary.name
          }, index, false, {
            fileName: "app/components/edit/editMenuModel.jsx",
            lineNumber: 333,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 331,
          columnNumber: 11
        }, this) : null,
        (selectedDietaryItems == null ? void 0 : selectedDietaryItems.length) >= MAXDIETARYLIST && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-red-500 text-sm text-right",
          children: `*Maximum ${MAXDIETARYLIST} kostpr\xE6ferencer are allowed.`
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 348,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/edit/editMenuModel.jsx",
      lineNumber: 329,
      columnNumber: 7
    }, this);
  };
  const ImageHandle = (e) => {
    var _a2;
    setPreventDoubleImage(true);
    const img = (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    let base64 = "";
    reader.onload = async () => {
      base64 = reader.result;
      setBgImage({ success: "Image is processing wait for few seconds." });
      (img == null ? void 0 : img.size) > MAX_SIZE ? setBgImage({ err: "Uploaded image file size should not exceeds 5MB" }) : await removeHandle({ img: reader.result, type: "base64" });
      setPreventDoubleImage(false);
    };
    e.target.value = null;
  };
  const removeHandle = async ({ img }) => {
    var data = new FormData();
    data.append("image", img);
    img && await fetch(`${EXPRESS_BASE_URL}/crop`, {
      method: "POST",
      body: data
    }).then((response) => {
      if (!response.ok) {
        return response.json();
      }
      return response.blob();
    }).then((res) => {
      if ((res == null ? void 0 : res.error) == true) {
        setBgImage({
          err: (res == null ? void 0 : res.code) == "unknown_foreground" ? "The captured image doesn't have a valid object after the image background removal process. Kindly retry with a different object." : (res == null ? void 0 : res.code) == "insufficient_credits" ? "Insufficient credits to remove the background for the captured Image. Please contact the system administrator for more details." : "Something went wrong. Please try again later"
        });
        return "";
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgRemovedImage({ img: reader.result, type: "base64" });
        setBgImage("");
        return reader.result;
      };
      reader.readAsDataURL(res);
    }).catch((e) => {
      console.log(e, "error");
      setBgImage({
        err: "Something went wrong, try again later"
      });
    });
  };
  const ImageRefreshCall = async () => {
    await directusLoaderLink.items("screen_display").readByQuery({
      fields: [
        "*",
        "app_resultant_image.*",
        "recipe_id.app_resultant_image.*"
      ],
      filter: {
        date: { _eq: editContent == null ? void 0 : editContent.date },
        location_id: { _eq: editContent == null ? void 0 : editContent.locationId },
        station_name: { station_unique_id: { _eq: stationId == null ? void 0 : stationId.uniqueId } }
      }
    }).then((e) => {
      var _a2, _b2, _c2, _d2;
      ((_b2 = (_a2 = e == null ? void 0 : e.data[0]) == null ? void 0 : _a2.app_resultant_image) == null ? void 0 : _b2.id) ? setBgRemovedImage({
        img: (_d2 = (_c2 = e == null ? void 0 : e.data[0]) == null ? void 0 : _c2.app_resultant_image) == null ? void 0 : _d2.id,
        type: "id",
        update: true
      }) : setBgImageRefreshError(
        "No updated image found in the station for the day."
      );
    }).catch((e) => console.log(e));
  };
  const bannerTable = () => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "py-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "upload-section !bg-[#E3E3AD33]",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "text-center absolute",
            children: (bgRemovedImage == null ? void 0 : bgRemovedImage.img) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: (bgRemovedImage == null ? void 0 : bgRemovedImage.type) == "id" ? getAssetURL(bgRemovedImage == null ? void 0 : bgRemovedImage.img) : bgRemovedImage == null ? void 0 : bgRemovedImage.img,
              alt: "uploaded",
              className: "w-[132px] h-[88px] z-20 object-contain"
            }, void 0, false, {
              fileName: "app/components/edit/editMenuModel.jsx",
              lineNumber: 447,
              columnNumber: 15
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
              className: "ri-add-fill color-primary mr-0"
            }, void 0, false, {
              fileName: "app/components/edit/editMenuModel.jsx",
              lineNumber: 457,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/components/edit/editMenuModel.jsx",
            lineNumber: 445,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 444,
          columnNumber: 9
        }, this),
        (bgImage == null ? void 0 : bgImage.err) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-red-600 flex text-sm",
          children: bgImage == null ? void 0 : bgImage.err
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 462,
          columnNumber: 11
        }, this),
        (bgImageRefreshError == null ? void 0 : bgImageRefreshError.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-red-600 flex text-sm",
          children: bgImageRefreshError
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 465,
          columnNumber: 11
        }, this),
        (bgImage == null ? void 0 : bgImage.success) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "text-primary flex text-sm",
          children: bgImage == null ? void 0 : bgImage.success
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 470,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "w-full text-primary text-xs mt-1",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
              htmlFor: "files",
              className: "btn cursor-pointer text-primary",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  className: "ri-add-fill color-primary mr-2"
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuModel.jsx",
                  lineNumber: 474,
                  columnNumber: 13
                }, this),
                "Upload Image"
              ]
            }, void 0, true, {
              fileName: "app/components/edit/editMenuModel.jsx",
              lineNumber: 473,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              id: "files",
              type: "file",
              style: { display: "none", visibility: "hidden" },
              accept: "image/*",
              className: "mt-1 border bg-white border-gray-300 px-4 py-1.5 h-9 flex text-black text-xs font-bold justify-center items-center w-full focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary",
              onChange: (e) => ImageHandle(e)
            }, void 0, false, {
              fileName: "app/components/edit/editMenuModel.jsx",
              lineNumber: 477,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 472,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "cursor-pointer text-primary text-xs mt-2",
          onClick: (e) => setBannerModal(!bannerModal),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
              className: "ri-eye-line"
            }, void 0, false, {
              fileName: "app/components/edit/editMenuModel.jsx",
              lineNumber: 504,
              columnNumber: 11
            }, this),
            " Preview"
          ]
        }, void 0, true, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 500,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "cursor-pointer text-primary text-xs mt-2 underline",
          onClick: () => ImageRefreshCall(),
          children: "Get updated image"
        }, void 0, false, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 506,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/edit/editMenuModel.jsx",
      lineNumber: 443,
      columnNumber: 7
    }, this);
  };
  const isPresent = async ({
    menuInfo: menuInfo2,
    translatedMenuInfo: translatedMenuInfo2,
    allergensList: allergensList2,
    dietaryList: dietaryList2,
    ingredientList,
    imageId,
    co2,
    calorie
  }) => {
    var _a2, _b2;
    const filterValue = {
      menu_info: { _eq: menuInfo2 == null ? void 0 : menuInfo2.trim() },
      is_global: { _eq: true }
    };
    const resId = ((_a2 = menuInfo2 == null ? void 0 : menuInfo2.trim()) == null ? void 0 : _a2.length) > 0 || ((_b2 = translatedMenuInfo2 == null ? void 0 : translatedMenuInfo2.trim()) == null ? void 0 : _b2.length) > 0 || (allergensList2 == null ? void 0 : allergensList2.length) > 0 || (dietaryList2 == null ? void 0 : dietaryList2.length) > 0 || (ingredientList == null ? void 0 : ingredientList.length) > 0 ? await directusLoaderLink.items("recipe_book").readByQuery({
      fields: [
        "*",
        "allergens_list.id",
        "allergens_list.Allergens_id.*",
        "dietary_list.id",
        "dietary_list.Dietary_id.*",
        "ingredients_list.*",
        "ingredients_list.new_climate_db.*"
      ],
      filter: filterValue,
      sort: ["id"]
    }).then(async (res) => {
      var _a3, _b3, _c2, _d2, _e2;
      const response = [];
      (_a3 = res == null ? void 0 : res.data) == null ? void 0 : _a3.map((e) => {
        var _a4, _b4, _c3, _d3;
        const menuSame = ((_a4 = e == null ? void 0 : e.menu_info) == null ? void 0 : _a4.trim()) === (menuInfo2 == null ? void 0 : menuInfo2.trim()) && ((_b4 = e == null ? void 0 : e.menu_info_1) == null ? void 0 : _b4.trim()) === (translatedMenuInfo2 == null ? void 0 : translatedMenuInfo2.trim());
        const allergenSame = (JSON == null ? void 0 : JSON.stringify(
          ((_c3 = e == null ? void 0 : e.allergens_list) == null ? void 0 : _c3.length) > 0 ? (_d3 = e == null ? void 0 : e.allergens_list) == null ? void 0 : _d3.map((l) => {
            var _a5;
            return (_a5 = l == null ? void 0 : l.Allergens_id) == null ? void 0 : _a5.id;
          }) : -1
        )) === JSON.stringify(
          (allergensList2 == null ? void 0 : allergensList2.length) > 0 ? allergensList2 : -1
        );
        response == null ? void 0 : response.push(
          menuSame ? "true" : "false"
        );
        return "";
      });
      const index = (response == null ? void 0 : response.includes("true")) ? response == null ? void 0 : response.findIndex((e) => e == "true") : -1;
      index !== -1 && saveType !== "day" && await IngredientUpdate({
        id: (_b3 = res == null ? void 0 : res.data[index]) == null ? void 0 : _b3.id,
        values: ingredientList
      });
      index !== -1 && (menuId == null ? void 0 : menuId.recipeId) !== ((_c2 = res == null ? void 0 : res.data[index]) == null ? void 0 : _c2.id) && await recipeUpdate({
        menuInfo: menuInfo2,
        translatedMenuInfo: translatedMenuInfo2,
        Id: (_d2 = res == null ? void 0 : res.data[index]) == null ? void 0 : _d2.id,
        allergensList: allergensList2,
        dietaryList: dietaryList2,
        imageId,
        co2,
        calorie
      });
      return index !== -1 ? (_e2 = res == null ? void 0 : res.data[index]) == null ? void 0 : _e2.id : -1;
    }).catch((err) => {
      console.log(err);
    }) : -1;
    return resId;
  };
  const recipeUpdate = async ({
    Id,
    allergensList: allergensList2,
    dietaryList: dietaryList2,
    imageId,
    co2,
    calorie
  }) => {
    var _a2, _b2, _c2;
    const body = {
      menu_info: menuInfo == null ? void 0 : menuInfo.trim(),
      menu_info_1: translatedMenuInfo == null ? void 0 : translatedMenuInfo.trim(),
      allergens_list: (_a2 = allergensList2 == null ? void 0 : allergensList2.filter((x) => x != void 0)) == null ? void 0 : _a2.map((al) => ({ Allergens_id: { id: al } })),
      dietary_list: (_b2 = dietaryList2 == null ? void 0 : dietaryList2.filter((x) => x != void 0)) == null ? void 0 : _b2.map((al) => ({ Dietary_id: { id: al } })),
      is_global: saveType === "day" ? false : true,
      total_co2: co2,
      total_calories: calorie
    };
    await ((_c2 = directusLoaderLink.items("recipe_book")) == null ? void 0 : _c2.updateOne(
      Id,
      imageId === null ? body : { ...body, app_resultant_image: imageId }
    ).then((re) => re == null ? void 0 : re.id));
  };
  const recipeCreate = async ({
    menuInfo: menuInfo2,
    translatedMenuInfo: translatedMenuInfo2,
    allergensList: allergensList2,
    dietaryList: dietaryList2,
    ingredientList,
    calorie,
    co2,
    imageId
  }) => {
    var _a2, _b2, _c2;
    const recipeIsPresent = saveType === "day" ? -1 : await isPresent({
      menuInfo: menuInfo2,
      translatedMenuInfo: translatedMenuInfo2,
      allergensList: allergensList2,
      dietaryList: dietaryList2,
      ingredientList,
      imageId,
      co2,
      calorie
    });
    if (recipeIsPresent !== -1) {
      return recipeIsPresent;
    } else {
      const body = {
        menu_info: menuInfo2 == null ? void 0 : menuInfo2.trim(),
        menu_info_1: translatedMenuInfo2 == null ? void 0 : translatedMenuInfo2.trim(),
        allergens_list: (_a2 = allergensList2 == null ? void 0 : allergensList2.filter((x) => x != void 0)) == null ? void 0 : _a2.map((al) => ({ Allergens_id: { id: al } })),
        dietary_list: (_b2 = dietaryList2 == null ? void 0 : dietaryList2.filter((x) => x != void 0)) == null ? void 0 : _b2.map((al) => ({ Dietary_id: { id: al } })),
        total_co2: co2,
        total_calories: calorie,
        is_global: saveType === "day" ? false : true
      };
      const recipeId = await ((_c2 = directusLoaderLink.items("recipe_book")) == null ? void 0 : _c2.createOne(
        imageId === null ? body : { ...body, app_resultant_image: imageId }
      ).then((re) => re == null ? void 0 : re.id).catch((e) => {
        console.log(e, "error");
      }));
      await IngredientUpdate({
        id: recipeId,
        values: ingredientList,
        create: true
      });
      return recipeId;
    }
  };
  const createHandle = async ({
    menuInfo: menuInfo2,
    translatedMenuInfo: translatedMenuInfo2,
    allergensList: allergensList2,
    dietaryList: dietaryList2,
    ingredientList,
    calorie,
    co2,
    imageId,
    portionsProduced: portionsProduced2,
    portionsSold: portionsSold2
  }) => {
    var _a2, _b2, _c2;
    const recipeId = await recipeCreate({
      menuInfo: menuInfo2,
      translatedMenuInfo: translatedMenuInfo2,
      allergensList: allergensList2,
      dietaryList: dietaryList2,
      ingredientList,
      calorie,
      co2,
      imageId
    });
    if (recipeId > 0) {
      await ((_c2 = directusLoaderLink.items("screen_display")) == null ? void 0 : _c2.createOne({
        date: editContent == null ? void 0 : editContent.date,
        location_id: (_b2 = (_a2 = editContent == null ? void 0 : editContent.currentUser) == null ? void 0 : _a2.selected_locations) == null ? void 0 : _b2.id,
        station_name: stationId == null ? void 0 : stationId.stationId,
        recipe_id: recipeId,
        portions_produced: portionsProduced2,
        portions_sold: portionsSold2
      }).then((re) => {
        localStorage.setItem(
          "MenuSave",
          `${saveType === "day" ? "create" : "edit"}`
        );
        location.reload();
      }).catch((e) => {
        console.log(e, "error");
      }));
    }
  };
  const recipeCount = async (prop2) => {
    const count = await directusLoaderLink.items("screen_display").readByQuery({
      fields: ["*"],
      filter: { recipe_id: { id: { _eq: prop2 } } },
      meta: ["filter_count"]
    }).then((res) => {
      var _a2;
      return ((_a2 = res == null ? void 0 : res.meta) == null ? void 0 : _a2.filter_count) > 1 ? true : false;
    });
    return count;
  };
  const updateHandle = async ({
    menuInfo: menuInfo2,
    translatedMenuInfo: translatedMenuInfo2,
    allergensList: allergensList2,
    dietaryList: dietaryList2,
    ingredientList,
    calorie,
    co2,
    imageId,
    portionsProduced: portionsProduced2,
    portionsSold: portionsSold2
  }) => {
    var _a2, _b2, _c2, _d2, _e2;
    if (saveType === "day") {
      const recipePresentCount = (menuId == null ? void 0 : menuId.recipeId) ? await recipeCount(menuId == null ? void 0 : menuId.recipeId) : true;
      if (recipePresentCount) {
        const recipeId = await recipeCreate({
          menuInfo: menuInfo2,
          translatedMenuInfo: translatedMenuInfo2,
          allergensList: allergensList2,
          dietaryList: dietaryList2,
          ingredientList,
          calorie,
          co2,
          imageId
        });
        if (recipeId > 0) {
          const body = {
            recipe_id: recipeId,
            portions_produced: portionsProduced2,
            portions_sold: portionsSold2
          };
          await ScreenDisplayUpdate({
            Ids: [menuId == null ? void 0 : menuId.menu],
            body: imageId === null ? body : { ...body, app_resultant_image: imageId }
          });
        }
      } else {
        await IngredientUpdate({
          id: menuId == null ? void 0 : menuId.recipeId,
          values: ingredientList
        });
        await recipeUpdate({
          menuInfo: menuInfo2,
          translatedMenuInfo: translatedMenuInfo2,
          Id: menuId == null ? void 0 : menuId.recipeId,
          allergensList: allergensList2,
          dietaryList: dietaryList2,
          imageId,
          co2,
          calorie
        });
        if (imageId !== null && (bgImg == null ? void 0 : bgImg.img) !== imageId) {
          await ScreenDisplayUpdate({
            Ids: [station == null ? void 0 : station.id],
            body: {
              app_resultant_image: imageId,
              portions_produced: portionsProduced2,
              portions_sold: portionsSold2
            }
          });
        } else {
          await ScreenDisplayUpdate({
            Ids: [station == null ? void 0 : station.id],
            body: {
              portions_produced: portionsProduced2,
              portions_sold: portionsSold2
            }
          });
        }
      }
    } else {
      const recipeIsPresent = await isPresent({
        menuInfo: menuInfo2,
        translatedMenuInfo: translatedMenuInfo2,
        allergensList: allergensList2,
        dietaryList: dietaryList2,
        ingredientList,
        imageId,
        co2,
        calorie
      });
      if (recipeIsPresent !== -1 && (menuId == null ? void 0 : menuId.recipeId) !== recipeIsPresent) {
        if ((menuId == null ? void 0 : menuId.recipeId) === void 0) {
          await ScreenDisplayUpdate({
            Ids: [menuId == null ? void 0 : menuId.menu],
            body: {
              recipe_id: recipeIsPresent,
              portions_produced: portionsProduced2,
              portions_sold: portionsSold2
            }
          });
        } else {
          const screenUpdateIds = await directusLoaderLink.items("screen_display").readByQuery({
            fields: ["id"],
            filter: {
              location_id: (_b2 = (_a2 = editContent == null ? void 0 : editContent.currentUser) == null ? void 0 : _a2.selected_locations) == null ? void 0 : _b2.id,
              recipe_id: { _eq: menuId == null ? void 0 : menuId.recipeId }
            }
          }).then((e) => {
            var _a3;
            return (_a3 = e == null ? void 0 : e.data) == null ? void 0 : _a3.map((e2) => e2 == null ? void 0 : e2.id);
          }).catch((e) => console.log(e));
          (screenUpdateIds == null ? void 0 : screenUpdateIds.length) > 0 && await ScreenDisplayUpdate({
            Ids: screenUpdateIds,
            body: {
              recipe_id: recipeIsPresent,
              portions_produced: portionsProduced2,
              portions_sold: portionsSold2
            }
          });
          imageId !== null && (bgImg == null ? void 0 : bgImg.img) !== imageId && await ScreenDisplayUpdate({
            Ids: [station == null ? void 0 : station.id],
            body: {
              app_resultant_image: imageId,
              portions_produced: portionsProduced2,
              portions_sold: portionsSold2
            }
          });
        }
      } else {
        const body = {
          menu_info: menuInfo2,
          menu_info_1: translatedMenuInfo2,
          allergens_list: (_c2 = allergensList2 == null ? void 0 : allergensList2.filter((x) => x != void 0)) == null ? void 0 : _c2.map((al) => ({ Allergens_id: { id: al } })),
          dietary_list: (_d2 = dietaryList2 == null ? void 0 : dietaryList2.filter((x) => x != void 0)) == null ? void 0 : _d2.map((al) => ({ Dietary_id: { id: al } })),
          total_co2: co2,
          total_calories: calorie,
          is_global: true
        };
        await ((_e2 = directusLoaderLink.items("recipe_book")) == null ? void 0 : _e2.updateOne(
          menuId == null ? void 0 : menuId.recipeId,
          imageId === null ? body : { ...body, app_resultant_image: imageId }
        ).then((re) => re == null ? void 0 : re.id).catch((e) => {
          console.log(e, "error");
        }));
        await IngredientUpdate({
          id: menuId == null ? void 0 : menuId.recipeId,
          values: ingredientList
        });
        if (imageId !== null && (bgImg == null ? void 0 : bgImg.img) !== imageId) {
          await ScreenDisplayUpdate({
            Ids: [station == null ? void 0 : station.id],
            body: { app_resultant_image: imageId, portions_produced: portionsProduced2, portions_sold: portionsSold2 }
          });
        } else {
          await ScreenDisplayUpdate({
            Ids: [station == null ? void 0 : station.id],
            body: { portions_produced: portionsProduced2, portions_sold: portionsSold2 }
          });
        }
      }
    }
    localStorage.setItem(
      "MenuSave",
      `${saveType === "day" ? "create" : "edit"}`
    );
    location.reload();
  };
  const ScreenDisplayUpdate = async ({ Ids, body }) => {
    var _a2;
    await ((_a2 = directusLoaderLink.items("screen_display")) == null ? void 0 : _a2.updateMany(Ids, body).then((re) => {
    }).catch((e) => {
      console.log(e);
    }));
  };
  const saveHandle = async (prop2) => {
    var _a2, _b2, _c2;
    setPreventDouble(true);
    if (!((_a2 = ingredient == null ? void 0 : ingredient.map((e) => {
      var _a3, _b3;
      return ((_b3 = (_a3 = e == null ? void 0 : e.name) == null ? void 0 : _a3.trim()) == null ? void 0 : _b3.length) > 0;
    })) == null ? void 0 : _a2.includes(false))) {
      if (!((_b2 = ingredient == null ? void 0 : ingredient.map((e) => {
        var _a3, _b3;
        return ((_b3 = (_a3 = e == null ? void 0 : e.Value2) == null ? void 0 : _a3.trim()) == null ? void 0 : _b3.length) > 0;
      })) == null ? void 0 : _b2.includes(false)) && !((_c2 = ingredient == null ? void 0 : ingredient.map((e) => {
        var _a3;
        return Number((_a3 = e == null ? void 0 : e.Value2) == null ? void 0 : _a3.trim()) > 0;
      })) == null ? void 0 : _c2.includes(false))) {
        const newList = [];
        ingredient == null ? void 0 : ingredient.map(
          (e) => {
            var _a3;
            return newList.push({
              IndexId: e == null ? void 0 : e.IndexId,
              Item1: e == null ? void 0 : e.Item1,
              name: (_a3 = e == null ? void 0 : e.Item1) == null ? void 0 : _a3.name,
              Value2: e == null ? void 0 : e.Value2,
              item: e == null ? void 0 : e.item,
              prev1: e == null ? void 0 : e.Item1,
              prev2: e == null ? void 0 : e.Value2
            });
          }
        );
        const token = await AuthToken();
        const imageId = (bgRemovedImage == null ? void 0 : bgRemovedImage.img) !== void 0 ? (bgRemovedImage == null ? void 0 : bgRemovedImage.update) !== true ? await ImageUploadToDirectus({
          token,
          img: bgRemovedImage == null ? void 0 : bgRemovedImage.img
        }) : { id: bgRemovedImage == null ? void 0 : bgRemovedImage.img } : null;
        if ((menuId == null ? void 0 : menuId.menu) !== void 0) {
          await updateHandle({
            menuInfo,
            translatedMenuInfo,
            allergensList: selectedMenuItems,
            dietaryList: selectedDietaryItems,
            ingredientList: newList,
            calorie: totalCalories,
            co2: totalCO2,
            imageId: imageId == null ? void 0 : imageId.id,
            portionsProduced,
            portionsSold
          });
        } else {
          await createHandle({
            menuInfo,
            translatedMenuInfo,
            allergensList: selectedMenuItems,
            dietaryList: selectedDietaryItems,
            ingredientList: newList,
            calorie: totalCalories,
            co2: totalCO2,
            imageId: imageId == null ? void 0 : imageId.id,
            portionsProduced,
            portionsSold
          });
        }
      } else {
        Q.error("Please enter a valid ingredient usage (in g).");
        setPreventDouble(false);
      }
    } else {
      Q.error("Please select a valid ingredient name");
      setPreventDouble(false);
    }
  };
  const ImageUploadToDirectus = async ({ token, img }) => {
    var requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        apiURL: `${URL}/files`,
        apiToken: token,
        base64data: `${img}`
      })
    };
    const imageId = await fetch(
      `${EXPRESS_BASE_URL}/image-convert`,
      requestOptions
    ).then((response) => response.json()).then((result) => {
      return result;
    }).catch((error) => {
      console.log("error", error);
      return error;
    });
    return (imageId == null ? void 0 : imageId.id) ? imageId : null;
  };
  const AuthToken = async () => {
    const token = await fetch(`${URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: user == null ? void 0 : user.email,
        password: user == null ? void 0 : user.password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => response.json()).then(async (e) => {
      var _a2;
      return (_a2 = e == null ? void 0 : e.data) == null ? void 0 : _a2.access_token;
    });
    return token;
  };
  const IngredientUpdate = async (prop2) => {
    const values = prop2 == null ? void 0 : prop2.values;
    var deleteData = [];
    await directusLoaderLink.items("ingredients_and_units").readByQuery({
      fields: ["*.*.*"],
      filter: {
        recipe_id: { _eq: prop2 == null ? void 0 : prop2.id }
      }
    }).then(async (res) => {
      var _a2, _b2, _c2;
      var deleteData2 = ((_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.length) > 0 && ((_c2 = (_b2 = res == null ? void 0 : res.data) == null ? void 0 : _b2.filter(
        (e) => !(values == null ? void 0 : values.find((ingredient2) => {
          var _a3;
          return ((_a3 = ingredient2 == null ? void 0 : ingredient2.item) == null ? void 0 : _a3.id) === (e == null ? void 0 : e.id);
        }))
      )) == null ? void 0 : _c2.map((res2) => res2));
      const deleteIds = (deleteData2 == null ? void 0 : deleteData2.length) > 0 && (deleteData2 == null ? void 0 : deleteData2.map((e) => e == null ? void 0 : e.id));
      (deleteIds == null ? void 0 : deleteIds.length) > 0 && await directusLoaderLink.items("ingredients_and_units").deleteMany(deleteIds);
    }).catch((e) => {
      console.log(e);
    });
    const missingValue = values == null ? void 0 : values.filter(
      (e) => !(deleteData == null ? void 0 : deleteData.find((a) => {
        var _a2, _b2;
        return ((_a2 = e == null ? void 0 : e.Item1) == null ? void 0 : _a2.id) === ((_b2 = a == null ? void 0 : a.new_climate_db) == null ? void 0 : _b2.id);
      }))
    );
    (missingValue == null ? void 0 : missingValue.length) > 0 && (missingValue == null ? void 0 : missingValue.map(async (e) => {
      var _a2, _b2, _c2;
      const [screenId, climateId, unit] = [prop2 == null ? void 0 : prop2.id, (_a2 = e == null ? void 0 : e.Item1) == null ? void 0 : _a2.id, e == null ? void 0 : e.Value2];
      if ((e == null ? void 0 : e.item) === void 0 || (prop2 == null ? void 0 : prop2.create) === true) {
        await ((_b2 = directusLoaderLink.items("ingredients_and_units")) == null ? void 0 : _b2.createOne({
          new_climate_db: climateId,
          recipe_id: screenId,
          unit
        }).then((re) => {
        }).catch((e2) => {
          console.log(e2, "error");
        }));
      } else {
        await directusLoaderLink.items("ingredients_and_units").updateOne((_c2 = e == null ? void 0 : e.item) == null ? void 0 : _c2.id, {
          new_climate_db: climateId,
          unit
        }).then((re) => {
        }).catch((e2) => {
          console.log(e2);
        });
      }
    }));
  };
  const allergensLists = (_n = (_m = (_l = editContent == null ? void 0 : editContent.getAllAllergens) == null ? void 0 : _l.data) == null ? void 0 : _m.filter((allergen) => selectedMenuItems == null ? void 0 : selectedMenuItems.some((e) => e == (allergen == null ? void 0 : allergen.id)))) == null ? void 0 : _n.map((e) => {
    return { Allergens_id: e };
  });
  const dietaryLists = (_q = (_p = (_o = editContent == null ? void 0 : editContent.getAllDietary) == null ? void 0 : _o.data) == null ? void 0 : _p.filter((dietary) => selectedDietaryItems == null ? void 0 : selectedDietaryItems.some((e) => e == (dietary == null ? void 0 : dietary.id)))) == null ? void 0 : _q.map((e) => {
    return { Dietary_id: e };
  });
  const titleCheck = (_r = parentStationName == null ? void 0 : parentStationName.station_name_translation) == null ? void 0 : _r.filter(
    (e) => {
      var _a2, _b2;
      return (e == null ? void 0 : e.location_id) == ((_b2 = (_a2 = editContent == null ? void 0 : editContent.currentUser) == null ? void 0 : _a2.selected_locations) == null ? void 0 : _b2.id);
    }
  );
  const ParentStationName = ((_t = (_s = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _s.name) == null ? void 0 : _t.length) > 0 ? (_u = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _u.name : parentStationName == null ? void 0 : parentStationName.station_name;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-100,h-100",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_modal.default, {
        isOpen: modalIsOpen,
        style: customStyles,
        ariaHideApp: false,
        contentLabel: "Banner Preview",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "px-12 py-12 w-full relative lg:px-9 station-preview bg-[#F8F8F8]",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "font-normal text-primary flex flex-col text-center pt-10",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-bold w-full",
                  children: "Build A Recipe"
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuModel.jsx",
                  lineNumber: 1160,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-normal w-full uppercase",
                  children: [
                    (ParentStationName == null ? void 0 : ParentStationName.length) > 0 ? (parentStationName == null ? void 0 : parentStationName.station_name) + " - " : "",
                    stationName
                  ]
                }, void 0, true, {
                  fileName: "app/components/edit/editMenuModel.jsx",
                  lineNumber: 1161,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/edit/editMenuModel.jsx",
              lineNumber: 1159,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "ml-10 font-normal text-primary",
              onClick: closeModal,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "left-0 font-normal text-sm cursor-pointer",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                    className: "ri-arrow-left-line mr-1 relative top-[2px]"
                  }, void 0, false, {
                    fileName: "app/components/edit/editMenuModel.jsx",
                    lineNumber: 1170,
                    columnNumber: 15
                  }, this),
                  " ",
                  "Back to Menu of The day"
                ]
              }, void 0, true, {
                fileName: "app/components/edit/editMenuModel.jsx",
                lineNumber: 1169,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/edit/editMenuModel.jsx",
              lineNumber: 1168,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "p-10",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "editmenuitem pb-[20px] mt-5 max-w-[70%]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "card w-full flex flex-row gap-5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "card col-span-12 md:col-span-12 lg:col-span-4 mb-4 w-full",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "mb-2",
                            children: DkTitle()
                          }, void 0, false, {
                            fileName: "app/components/edit/editMenuModel.jsx",
                            lineNumber: 1186,
                            columnNumber: 19
                          }, this),
                          ((_v = station == null ? void 0 : station.station_name) == null ? void 0 : _v.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: `border bg-white relative border-${(menuInfo == null ? void 0 : menuInfo.length) <= MAX_LIMIT ? "gray" : "red"}-300 border-l-8 border-l-[#B6D989] px-3 pl-2 py-2`,
                            style: {
                              borderLeftColor: (_x = stationColor[indexValue]) != null ? _x : (_w = stationColor == null ? void 0 : stationColor.slice(-1)) == null ? void 0 : _w[0],
                              borderLeftWidth: "6px"
                            },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(customInput_default, {
                                lang: true,
                                value: menuInfo,
                                setValue: setMenuInfo,
                                valueEng: translatedMenuInfo,
                                setValueEng: setTranslatedMenuInfo,
                                setAllergens: setSelectedMenuItems,
                                setDietary: setSelectedDietaryItems,
                                setIngredient,
                                setBgRemovedImage
                              }, void 0, false, {
                                fileName: "app/components/edit/editMenuModel.jsx",
                                lineNumber: 1199,
                                columnNumber: 23
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "block text-xs text-[#AAA8A8] font-medium",
                                children: [
                                  menuInfo == null ? void 0 : menuInfo.length,
                                  "/",
                                  MAX_LIMIT,
                                  "characters"
                                ]
                              }, void 0, true, {
                                fileName: "app/components/edit/editMenuModel.jsx",
                                lineNumber: 1211,
                                columnNumber: 23
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/components/edit/editMenuModel.jsx",
                            lineNumber: 1188,
                            columnNumber: 21
                          }, this) : null
                        ]
                      }, void 0, true, {
                        fileName: "app/components/edit/editMenuModel.jsx",
                        lineNumber: 1185,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "card col-span-12 md:col-span-12 lg:col-span-4 mb-4 w-full",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "mb-2",
                            children: EnTitle()
                          }, void 0, false, {
                            fileName: "app/components/edit/editMenuModel.jsx",
                            lineNumber: 1220,
                            columnNumber: 19
                          }, this),
                          ((_y = station == null ? void 0 : station.station_name) == null ? void 0 : _y.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: `border bg-white relative border-${(translatedMenuInfo == null ? void 0 : translatedMenuInfo.length) <= MAX_LIMIT ? "gray" : "red"}-300 border-l-8 border-l-[#B6D989] px-3 pl-2 py-2`,
                            style: {
                              borderLeftColor: (_A = stationColor[indexValue]) != null ? _A : (_z = stationColor == null ? void 0 : stationColor.slice(-1)) == null ? void 0 : _z[0],
                              borderLeftWidth: "6px"
                            },
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(customInput_default, {
                                lang: false,
                                value: translatedMenuInfo,
                                setValue: setTranslatedMenuInfo,
                                valueEng: menuInfo,
                                setValueEng: setMenuInfo,
                                setAllergens: setSelectedMenuItems,
                                setDietary: setSelectedDietaryItems,
                                setIngredient,
                                setBgRemovedImage
                              }, void 0, false, {
                                fileName: "app/components/edit/editMenuModel.jsx",
                                lineNumber: 1233,
                                columnNumber: 23
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "block text-xs text-[#AAA8A8] font-medium",
                                children: [
                                  translatedMenuInfo == null ? void 0 : translatedMenuInfo.length,
                                  "/",
                                  MAX_LIMIT,
                                  " characters"
                                ]
                              }, void 0, true, {
                                fileName: "app/components/edit/editMenuModel.jsx",
                                lineNumber: 1244,
                                columnNumber: 23
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/components/edit/editMenuModel.jsx",
                            lineNumber: 1222,
                            columnNumber: 21
                          }, this) : null
                        ]
                      }, void 0, true, {
                        fileName: "app/components/edit/editMenuModel.jsx",
                        lineNumber: 1219,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/edit/editMenuModel.jsx",
                    lineNumber: 1184,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuModel.jsx",
                  lineNumber: 1183,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "portions-tabs flex flex-row max-w-[70%]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "w-full flex flex-row gap-5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-[50%]",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "w-full flex flex-row items-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                              htmlFor: "portions_produced",
                              className: "mr-3",
                              children: "Portions Produced"
                            }, void 0, false, {
                              fileName: "app/components/edit/editMenuModel.jsx",
                              lineNumber: 1256,
                              columnNumber: 19
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                              name: "portions_produced",
                              type: "number",
                              onKeyDown: (evt) => evt.key === "e" && evt.preventDefault(),
                              placeholder: "0",
                              value: portionsProduced,
                              onChange: (e) => {
                                var _a2;
                                return setPortionsProduced((_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value);
                              },
                              onWheel: (e) => {
                                var _a2;
                                return (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.blur();
                              },
                              className: "border border-[#777] border-collapse rounded-md justify-end  my-1 block w-1/2 max-w-[100px] py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium text-black sm:text-sm"
                            }, void 0, false, {
                              fileName: "app/components/edit/editMenuModel.jsx",
                              lineNumber: 1257,
                              columnNumber: 19
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/components/edit/editMenuModel.jsx",
                          lineNumber: 1255,
                          columnNumber: 17
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/edit/editMenuModel.jsx",
                        lineNumber: 1254,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-[50%]",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "w-full flex flex-row items-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                              htmlFor: "portions_sold",
                              className: "mr-3",
                              children: "Portions Sold"
                            }, void 0, false, {
                              fileName: "app/components/edit/editMenuModel.jsx",
                              lineNumber: 1273,
                              columnNumber: 19
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                              name: "protions_sold",
                              type: "number",
                              onKeyDown: (evt) => evt.key === "e" && evt.preventDefault(),
                              placeholder: "0",
                              value: portionsSold,
                              onChange: (e) => {
                                var _a2;
                                return setPortionsSold((_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.value);
                              },
                              onWheel: (e) => {
                                var _a2;
                                return (_a2 = e == null ? void 0 : e.target) == null ? void 0 : _a2.blur();
                              },
                              className: "border border-[#777] border-collapse rounded-md justify-end  my-1 block w-1/2 max-w-[100px] py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium text-black sm:text-sm"
                            }, void 0, false, {
                              fileName: "app/components/edit/editMenuModel.jsx",
                              lineNumber: 1274,
                              columnNumber: 19
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/components/edit/editMenuModel.jsx",
                          lineNumber: 1272,
                          columnNumber: 17
                        }, this)
                      }, void 0, false, {
                        fileName: "app/components/edit/editMenuModel.jsx",
                        lineNumber: 1271,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/edit/editMenuModel.jsx",
                    lineNumber: 1253,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuModel.jsx",
                  lineNumber: 1252,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "ingredients-tabs pt-8 ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "tabs",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                        className: "inline-flex tabs-section",
                        children: (_B = [
                          "Ingredienslist",
                          "Allergener",
                          "Kostpr\xE6ferencer",
                          "Billede"
                        ]) == null ? void 0 : _B.map((e, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          onClick: () => showTable(e),
                          className: `${table == e && "active"} font-normal text-sm`,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            children: e
                          }, void 0, false, {
                            fileName: "app/components/edit/editMenuModel.jsx",
                            lineNumber: 1307,
                            columnNumber: 23
                          }, this)
                        }, i, false, {
                          fileName: "app/components/edit/editMenuModel.jsx",
                          lineNumber: 1300,
                          columnNumber: 21
                        }, this))
                      }, void 0, false, {
                        fileName: "app/components/edit/editMenuModel.jsx",
                        lineNumber: 1293,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/edit/editMenuModel.jsx",
                      lineNumber: 1292,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "tabs-section-content px-5 pt-[15px] pb-[25px] bg-white border border-[#C5C5C5]",
                      children: table == "Ingredienslist" ? IngredientsTable() : table == "Allergener" ? AllergensTable() : table == "Kostpr\xE6ferencer" ? DietaryTable() : bannerTable()
                    }, void 0, false, {
                      fileName: "app/components/edit/editMenuModel.jsx",
                      lineNumber: 1312,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/edit/editMenuModel.jsx",
                  lineNumber: 1291,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col justify-end mt-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-end text-black text-sm items-center mb-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "checkbox",
                          value: "global",
                          checked: saveType === "global" ? true : false,
                          onChange: () => setSaveType("global"),
                          className: "mr-2 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                        }, void 0, false, {
                          fileName: "app/components/edit/editMenuModel.jsx",
                          lineNumber: 1324,
                          columnNumber: 17
                        }, this),
                        "Apply changes to",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "font-bold ml-1",
                            children: "global recipe "
                          }, void 0, false, {
                            fileName: "app/components/edit/editMenuModel.jsx",
                            lineNumber: 1333,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/edit/editMenuModel.jsx",
                          lineNumber: 1332,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/edit/editMenuModel.jsx",
                      lineNumber: 1323,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-end text-black text-sm items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "checkbox",
                          value: "day",
                          checked: saveType === "day" ? true : false,
                          onChange: () => setSaveType("day"),
                          className: "mr-2 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                        }, void 0, false, {
                          fileName: "app/components/edit/editMenuModel.jsx",
                          lineNumber: 1337,
                          columnNumber: 17
                        }, this),
                        "Apply changes to",
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "font-bold ml-1",
                            children: "this day only "
                          }, void 0, false, {
                            fileName: "app/components/edit/editMenuModel.jsx",
                            lineNumber: 1346,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/edit/editMenuModel.jsx",
                          lineNumber: 1345,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/edit/editMenuModel.jsx",
                      lineNumber: 1336,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/edit/editMenuModel.jsx",
                  lineNumber: 1322,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-end mt-5",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    onClick: () => preventDouble || preventDoubleImage ? null : saveHandle(),
                    disabled: preventDouble,
                    className: "min-w-[176px] min-h-[30px] inline-flex items-center justify-center border border-transparent bg-primary text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto",
                    children: preventDouble ? "Saving..." : "Save"
                  }, void 0, false, {
                    fileName: "app/components/edit/editMenuModel.jsx",
                    lineNumber: 1351,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuModel.jsx",
                  lineNumber: 1350,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/edit/editMenuModel.jsx",
              lineNumber: 1174,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/edit/editMenuModel.jsx",
          lineNumber: 1158,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/edit/editMenuModel.jsx",
        lineNumber: 1152,
        columnNumber: 7
      }, this),
      bannerModal && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(bannerPopup_default, {
        modalIsOpenParent: bannerModal,
        setIsOpenParent: setBannerModal,
        data: {
          menuInfo,
          menuInfo1: translatedMenuInfo,
          allergens: allergensLists,
          dietary: dietaryLists,
          stationName,
          stationImage: (_D = (_C = station == null ? void 0 : station.station_name) == null ? void 0 : _C.station_image_1) == null ? void 0 : _D.id,
          plateImg: (bgRemovedImage == null ? void 0 : bgRemovedImage.img) !== void 0 ? {
            id: bgRemovedImage == null ? void 0 : bgRemovedImage.img,
            showType: ((_E = bgRemovedImage == null ? void 0 : bgRemovedImage.img) == null ? void 0 : _E.length) < 50 ? "id" : "base64"
          } : station == null ? void 0 : station.app_resultant_image,
          RecipePlateImg: (_G = (_F = station == null ? void 0 : station.recipe_id) == null ? void 0 : _F.app_resultant_image) == null ? void 0 : _G.id,
          stationId: stationId == null ? void 0 : stationId.stationId,
          locationId: (_I = (_H = editContent == null ? void 0 : editContent.currentUser) == null ? void 0 : _H.selected_locations) == null ? void 0 : _I.id,
          stationUniqueId: stationId == null ? void 0 : stationId.uniqueId
        },
        calorie: totalCalories,
        co2: totalCO2,
        isAdminUser: false
      }, void 0, false, {
        fileName: "app/components/edit/editMenuModel.jsx",
        lineNumber: 1365,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/edit/editMenuModel.jsx",
    lineNumber: 1151,
    columnNumber: 5
  }, this);
});
var editMenuModel_default = EditMenuModel;

// app/components/edit/editMenuItem.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var EditMenuItem = import_react4.default.forwardRef(
  ({
    station,
    stationId,
    editContent,
    existingTableData,
    indexValue,
    locationId,
    stationColor,
    bottomLine,
    preventDouble
  }, _ref) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
    const stationMenu = (existingTableData == null ? void 0 : existingTableData.some(
      (data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      }
    )) ? existingTableData == null ? void 0 : existingTableData.filter(
      (data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      }
    )[0] : {};
    const [selectedMenuItems, setSelectedMenuItems] = (0, import_react4.useState)(
      (existingTableData == null ? void 0 : existingTableData.some((data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      })) ? (_c = (_b = (_a = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _a.allergens_list) == null ? void 0 : _b.filter((e) => e.Allergens_id != null).map((item) => {
        var _a2;
        return (_a2 = item == null ? void 0 : item.Allergens_id) == null ? void 0 : _a2.id;
      })) != null ? _c : [] : []
    );
    const [selectedDietaryItems, setSelectedDietaryItems] = (0, import_react4.useState)(
      (existingTableData == null ? void 0 : existingTableData.some((data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      })) ? (_f = (_e = (_d = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _d.dietary_list) == null ? void 0 : _e.filter((e) => e.Dietary_id != null).map((item) => {
        var _a2;
        return (_a2 = item == null ? void 0 : item.Dietary_id) == null ? void 0 : _a2.id;
      })) != null ? _f : [] : []
    );
    const [isError, setIsError] = (0, import_react4.useState)(false);
    const [menuModalIsOpen, setMenuIsOpen] = (0, import_react4.useState)(false);
    const [menuInfo, setMenuInfo] = (0, import_react4.useState)(
      (existingTableData == null ? void 0 : existingTableData.some((data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      })) ? (_h = (_g = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _g.menu_info) != null ? _h : "" : ""
    );
    const [translatedMenuInfo, setTranslatedMenuInfo] = (0, import_react4.useState)(
      (existingTableData == null ? void 0 : existingTableData.some((data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      })) ? (_j = (_i = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _i.menu_info_1) != null ? _j : "" : ""
    );
    const [totalCalorie, setTotalCalorie] = (0, import_react4.useState)(
      existingTableData.some((data) => {
        var _a2;
        return ((_a2 = data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      }) ? {
        calories: ((_k = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _k.total_calories) != null ? (_m = Number((_l = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _l.total_calories)) == null ? void 0 : _m.toFixed(2) : null,
        co2: ((_n = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _n.total_calories) != null ? (_p = Number((_o = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _o.total_co2)) == null ? void 0 : _p.toFixed(2) : null
      } : {
        calories: null,
        co2: null
      }
    );
    const [selectedIngredientsItems, setSelectedIngredientsItems] = (0, import_react4.useState)(
      existingTableData.some((data) => {
        var _a2;
        return ((_a2 = data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      }) ? (_s = (_r = (_q = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _q.ingredients_list) == null ? void 0 : _r.filter((e) => (e == null ? void 0 : e.new_climate_db) != null).map((item, i) => {
        var _a2;
        return {
          name: (_a2 = item == null ? void 0 : item.new_climate_db) == null ? void 0 : _a2.name,
          Value2: item == null ? void 0 : item.unit,
          item,
          Item1: item == null ? void 0 : item.new_climate_db,
          IndexId: i,
          prev1: item == null ? void 0 : item.new_climate_db,
          prev2: item == null ? void 0 : item.unit
        };
      })) != null ? _s : [] : []
    );
    const [portionsProducedValue, setPortionsProducedValue] = (0, import_react4.useState)(
      (existingTableData == null ? void 0 : existingTableData.some((data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      })) ? (_t = stationMenu == null ? void 0 : stationMenu.portions_produced) != null ? _t : "" : ""
    );
    const [portionsSoldValue, setPortionsSoldValue] = (0, import_react4.useState)(
      (existingTableData == null ? void 0 : existingTableData.some((data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      })) ? (_u = stationMenu == null ? void 0 : stationMenu.portions_sold) != null ? _u : "" : ""
    );
    const MAX_LIMIT = 100;
    const MAX_ALERGEN_LIST = 14;
    const MAX_DIETARY_LIST = 8;
    (0, import_react4.useEffect)(() => {
      if ((translatedMenuInfo == null ? void 0 : translatedMenuInfo.length) > MAX_LIMIT) {
        setTranslatedMenuInfo(translatedMenuInfo == null ? void 0 : translatedMenuInfo.substring(0, MAX_LIMIT));
      }
    }, [translatedMenuInfo == null ? void 0 : translatedMenuInfo.length]);
    const handleAllergens = (id) => {
      if (selectedMenuItems.indexOf(id) == -1) {
        if ((selectedMenuItems == null ? void 0 : selectedMenuItems.length) < MAX_ALERGEN_LIST) {
          setSelectedMenuItems([...selectedMenuItems, id]);
        }
      } else {
        setSelectedMenuItems(selectedMenuItems == null ? void 0 : selectedMenuItems.filter((e) => e != id));
      }
    };
    const handleDietary = (id) => {
      if (selectedDietaryItems.indexOf(id) == -1) {
        if ((selectedDietaryItems == null ? void 0 : selectedDietaryItems.length) < MAX_DIETARY_LIST) {
          setSelectedDietaryItems([...selectedDietaryItems, id]);
        }
      } else {
        setSelectedDietaryItems(selectedDietaryItems == null ? void 0 : selectedDietaryItems.filter((e) => e != id));
      }
    };
    (0, import_react4.useImperativeHandle)(_ref, () => ({
      getSelectedMenuItems: () => {
        return selectedMenuItems;
      },
      getSelectedDietaryItems: () => {
        return selectedDietaryItems;
      },
      getMenuInfo: () => {
        return menuInfo == null ? void 0 : menuInfo.trim();
      },
      getTranslatedMenuInfo: () => {
        return translatedMenuInfo == null ? void 0 : translatedMenuInfo.trim();
      },
      getMenuId: () => {
        return stationMenu == null ? void 0 : stationMenu.id;
      },
      getTotalCount: () => {
        var _a2;
        return (_a2 = menuInfo == null ? void 0 : menuInfo.trim()) == null ? void 0 : _a2.length;
      },
      getTranslatedMenuInfoTotalCount: () => {
        var _a2;
        return (_a2 = translatedMenuInfo == null ? void 0 : translatedMenuInfo.trim()) == null ? void 0 : _a2.length;
      },
      getErrorStatus: () => {
        var _a2, _b2;
        return ((_a2 = menuInfo == null ? void 0 : menuInfo.trim()) == null ? void 0 : _a2.length) > 0 && ((_b2 = translatedMenuInfo == null ? void 0 : translatedMenuInfo.trim()) == null ? void 0 : _b2.length) === 0 ? true : isError;
      }
    }));
    const TitleCheck = (_v = station == null ? void 0 : station.station_name_translation) == null ? void 0 : _v.filter(
      (e) => (e == null ? void 0 : e.location_id) === locationId
    );
    const Title = ((_x = (_w = TitleCheck == null ? void 0 : TitleCheck[0]) == null ? void 0 : _w.name) == null ? void 0 : _x.length) ? (_y = TitleCheck == null ? void 0 : TitleCheck[0]) == null ? void 0 : _y.name : station == null ? void 0 : station.station_name;
    const TitleCheckStationMenu = (_A = (_z = stationMenu == null ? void 0 : stationMenu.station_name) == null ? void 0 : _z.station_name_translation) == null ? void 0 : _A.filter(
      (e) => (e == null ? void 0 : e.location_id) === locationId
    );
    const TitleStationMenu = ((_C = (_B = TitleCheckStationMenu == null ? void 0 : TitleCheckStationMenu[0]) == null ? void 0 : _B.name) == null ? void 0 : _C.length) ? (_D = TitleCheck == null ? void 0 : TitleCheck[0]) == null ? void 0 : _D.name : (_E = stationMenu == null ? void 0 : stationMenu.station_name) == null ? void 0 : _E.station_name;
    const ModelHandle = () => {
      preventDouble != true && setMenuIsOpen(true);
    };
    const DkTitle = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
      className: `text-black uppercase font-normal ${(station == null ? void 0 : station.is_not_main_station) === true && (station == null ? void 0 : station.is_dressings) == false ? "xs-subTitle text-[12px]" : ""} ${(station == null ? void 0 : station.is_dressings) == true ? "xs-subTitle text-[12px]" : ""}`,
      children: [
        existingTableData.some((data) => {
          var _a2;
          return ((_a2 = data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
        }) ? TitleStationMenu : Title,
        (station == null ? void 0 : station.is_not_main_station) === true ? " DK" : (station == null ? void 0 : station.is_parent_station) === true ? "" : " DK"
      ]
    }, void 0, true, {
      fileName: "app/components/edit/editMenuItem.jsx",
      lineNumber: 174,
      columnNumber: 7
    }, this);
    const EnTitle = (prop) => {
      return (prop == false ? (station == null ? void 0 : station.is_parent_station) === false : true) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
        className: `text-black uppercase font-normal ${(station == null ? void 0 : station.is_not_main_station) === true && (station == null ? void 0 : station.is_dressings) == false ? "xs-subTitle text-[12px]" : ""} ${(station == null ? void 0 : station.is_dressings) == true ? "xs-subTitle text-[12px]" : ""}`,
        children: [
          existingTableData.some(
            (data) => {
              var _a2;
              return ((_a2 = data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
            }
          ) ? TitleStationMenu : Title,
          (station == null ? void 0 : station.is_not_main_station) === true ? " EN" : (station == null ? void 0 : station.is_parent_station) === true ? "" : " EN"
        ]
      }, void 0, true, {
        fileName: "app/components/edit/editMenuItem.jsx",
        lineNumber: 195,
        columnNumber: 11
      }, this);
    };
    const stationName = (existingTableData == null ? void 0 : existingTableData.some(
      (data) => {
        var _a2;
        return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
      }
    )) ? TitleStationMenu : Title;
    const menuPresent = ((_F = menuInfo == null ? void 0 : menuInfo.trim()) == null ? void 0 : _F.length) > 0 || ((_G = translatedMenuInfo == null ? void 0 : translatedMenuInfo.trim()) == null ? void 0 : _G.length) > 0 ? true : false;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: `flex flex-row lg:gap-8 md:gap-5 ${bottomLine ? "border-b border-b-[#D0D0D0] mb-5 pb-6" : ""}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "card w-1/3 pointer-events-none",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "card col-span-12 md:col-span-12 lg:col-span-4 mb-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mb-2",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                        className: `text-black font-normal uppercase ${(station == null ? void 0 : station.is_not_main_station) === true && (station == null ? void 0 : station.is_dressings) == false ? "xs-subTitle text-[12px]" : ""} ${(station == null ? void 0 : station.is_dressings) == true ? "xs-subTitle text-[12px]" : ""}`,
                        children: [
                          stationName,
                          (station == null ? void 0 : station.is_not_main_station) === true ? " DK" : (station == null ? void 0 : station.is_parent_station) === true ? "" : " DK"
                        ]
                      }, void 0, true, {
                        fileName: "app/components/edit/editMenuItem.jsx",
                        lineNumber: 238,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/edit/editMenuItem.jsx",
                      lineNumber: 237,
                      columnNumber: 15
                    }, this),
                    (station == null ? void 0 : station.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: `border bg-white relative border-${(menuInfo == null ? void 0 : menuInfo.length) <= MAX_LIMIT ? "gray" : "red"}-300 border-l-8 border-l-[#B6D989] px-3 pl-2 py-2`,
                      style: {
                        borderLeftColor: (_I = stationColor[indexValue]) != null ? _I : (_H = stationColor == null ? void 0 : stationColor.slice(-1)) == null ? void 0 : _H[0],
                        borderLeftWidth: "6px"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(customInput_default, {
                          lang: true,
                          value: menuInfo,
                          setValue: setMenuInfo,
                          setAllergens: setSelectedMenuItems,
                          setDietary: setSelectedDietaryItems,
                          setIngredient: setSelectedIngredientsItems
                        }, void 0, false, {
                          fileName: "app/components/edit/editMenuItem.jsx",
                          lineNumber: 269,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "block text-xs text-[#AAA8A8] font-medium",
                          children: [
                            menuInfo == null ? void 0 : menuInfo.length,
                            "/",
                            MAX_LIMIT,
                            " characters"
                          ]
                        }, void 0, true, {
                          fileName: "app/components/edit/editMenuItem.jsx",
                          lineNumber: 278,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/edit/editMenuItem.jsx",
                      lineNumber: 259,
                      columnNumber: 17
                    }, this) : null
                  ]
                }, void 0, true, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 236,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "card col-span-12 md:col-span-12 lg:col-span-4 ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mb-2",
                      children: (station == null ? void 0 : station.is_parent_station) === false && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                        className: `text-black uppercase font-normal ${(station == null ? void 0 : station.is_not_main_station) === true && (station == null ? void 0 : station.is_dressings) == false ? "xs-subTitle text-[12px]" : ""} ${(station == null ? void 0 : station.is_dressings) == true ? "xs-subTitle text-[12px]" : ""}`,
                        children: [
                          (existingTableData == null ? void 0 : existingTableData.some(
                            (data) => {
                              var _a2;
                              return ((_a2 = data == null ? void 0 : data.station_name) == null ? void 0 : _a2.id) == (station == null ? void 0 : station.id);
                            }
                          )) ? TitleStationMenu : Title,
                          (station == null ? void 0 : station.is_not_main_station) === true ? " EN" : (station == null ? void 0 : station.is_parent_station) === true ? "" : " EN"
                        ]
                      }, void 0, true, {
                        fileName: "app/components/edit/editMenuItem.jsx",
                        lineNumber: 287,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/components/edit/editMenuItem.jsx",
                      lineNumber: 285,
                      columnNumber: 15
                    }, this),
                    (station == null ? void 0 : station.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: `border bg-white relative border-${(translatedMenuInfo == null ? void 0 : translatedMenuInfo.length) <= MAX_LIMIT ? "gray" : "red"}-300 border-l-8 border-l-[#B6D989] px-3 pl-2 py-2`,
                      style: {
                        borderLeftColor: (_K = stationColor[indexValue]) != null ? _K : (_J = stationColor == null ? void 0 : stationColor.slice(-1)) == null ? void 0 : _J[0],
                        borderLeftWidth: "6px"
                      },
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(customInput_default, {
                          lang: false,
                          value: translatedMenuInfo,
                          setValue: translatedMenuInfo,
                          setAllergens: setSelectedMenuItems,
                          setDietary: setSelectedDietaryItems,
                          setIngredient: setSelectedIngredientsItems
                        }, void 0, false, {
                          fileName: "app/components/edit/editMenuItem.jsx",
                          lineNumber: 323,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "block text-xs text-[#AAA8A8] font-medium",
                          children: [
                            translatedMenuInfo == null ? void 0 : translatedMenuInfo.length,
                            "/",
                            MAX_LIMIT,
                            " characters"
                          ]
                        }, void 0, true, {
                          fileName: "app/components/edit/editMenuItem.jsx",
                          lineNumber: 331,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/edit/editMenuItem.jsx",
                      lineNumber: 313,
                      columnNumber: 17
                    }, this) : null
                  ]
                }, void 0, true, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 284,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/edit/editMenuItem.jsx",
              lineNumber: 235,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "card w-1/3 lg:px-[15px] md:px-[5px] pointer-events-none relative",
              children: [
                (station == null ? void 0 : station.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mb-2",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                    className: "text-black capitalize font-semibold text-sm",
                    children: "Allergener"
                  }, void 0, false, {
                    fileName: "app/components/edit/editMenuItem.jsx",
                    lineNumber: 341,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 340,
                  columnNumber: 15
                }, this) : null,
                (station == null ? void 0 : station.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "list-items",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                    className: "lists flex flex-wrap gap-2 grid-cols-8 sm:grid-cols-6 md:grid-cols-8 1xl:grid-cols-6",
                    children: (_M = (_L = editContent == null ? void 0 : editContent.getAllAllergens) == null ? void 0 : _L.data) == null ? void 0 : _M.map(
                      (allergen, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                        onClick: () => handleAllergens(allergen == null ? void 0 : allergen.id),
                        className: `list cursor-pointer text-center text-xs px-3 py-1 rounded-[24px] border ${(selectedMenuItems == null ? void 0 : selectedMenuItems.some(
                          (item) => item == (allergen == null ? void 0 : allergen.id)
                        )) ? "bg-primary text-white" : null} border-primary col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-2 1xl:col-span-1 font-normal`,
                        children: allergen == null ? void 0 : allergen.name
                      }, index, false, {
                        fileName: "app/components/edit/editMenuItem.jsx",
                        lineNumber: 351,
                        columnNumber: 23
                      }, this)
                    )
                  }, void 0, false, {
                    fileName: "app/components/edit/editMenuItem.jsx",
                    lineNumber: 348,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 347,
                  columnNumber: 15
                }, this) : null,
                (totalCalorie == null ? void 0 : totalCalorie.calories) !== null && (totalCalorie == null ? void 0 : totalCalorie.calories) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "co2-section bg-[#E1EEDE] text-xs text-black rounded-[24px] py-1 px-4 inline-block mt-[0.75rem]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "calorie font-medium",
                    children: [
                      "Kalorier: ",
                      totalCalorie == null ? void 0 : totalCalorie.calories,
                      " kcal"
                    ]
                  }, void 0, true, {
                    fileName: "app/components/edit/editMenuItem.jsx",
                    lineNumber: 372,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 371,
                  columnNumber: 15
                }, this),
                (selectedMenuItems == null ? void 0 : selectedMenuItems.length) >= MAX_ALERGEN_LIST && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-red-500 text-sm text-left mt-2",
                  children: `*Maximum ${MAX_ALERGEN_LIST} allergener are allowed.`
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 378,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/edit/editMenuItem.jsx",
              lineNumber: 338,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "card w-1/3 lg:px-[15px] md:px-[5px] pointer-events-none relative",
              children: [
                (station == null ? void 0 : station.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mb-2",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                    className: "text-black capitalize font-semibold text-sm",
                    children: DIETARY_PREFERENCES_DK
                  }, void 0, false, {
                    fileName: "app/components/edit/editMenuItem.jsx",
                    lineNumber: 387,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 386,
                  columnNumber: 15
                }, this) : null,
                (station == null ? void 0 : station.is_parent_station) !== true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "list-items",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                    className: "lists flex flex-wrap gap-2 grid-cols-8 sm:grid-cols-6 md:grid-cols-8 1xl:grid-cols-6",
                    children: (_O = (_N = editContent == null ? void 0 : editContent.getAllDietary) == null ? void 0 : _N.data) == null ? void 0 : _O.map((dietary, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      onClick: () => handleDietary(dietary == null ? void 0 : dietary.id),
                      className: `list cursor-pointer text-center text-xs px-3 py-1 rounded-[24px] border ${(selectedDietaryItems == null ? void 0 : selectedDietaryItems.some(
                        (item) => item == (dietary == null ? void 0 : dietary.id)
                      )) ? "bg-primary text-white" : null} border-primary col-span-4 sm:col-span-2 md:col-span-1 lg:col-span-2 1xl:col-span-1 font-normal`,
                      children: dietary == null ? void 0 : dietary.name
                    }, index, false, {
                      fileName: "app/components/edit/editMenuItem.jsx",
                      lineNumber: 396,
                      columnNumber: 21
                    }, this))
                  }, void 0, false, {
                    fileName: "app/components/edit/editMenuItem.jsx",
                    lineNumber: 394,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 393,
                  columnNumber: 15
                }, this) : null,
                (totalCalorie == null ? void 0 : totalCalorie.co2) !== null && (totalCalorie == null ? void 0 : totalCalorie.co2) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "co2-section bg-[#E1EEDE] text-xs text-black rounded-[24px] py-1 px-4 inline-block mt-[0.75rem]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "calorie font-medium",
                    children: [
                      "CO2: ",
                      totalCalorie == null ? void 0 : totalCalorie.co2,
                      " kg"
                    ]
                  }, void 0, true, {
                    fileName: "app/components/edit/editMenuItem.jsx",
                    lineNumber: 415,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 414,
                  columnNumber: 15
                }, this),
                (selectedDietaryItems == null ? void 0 : selectedDietaryItems.length) >= MAX_DIETARY_LIST && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-red-500 text-sm text-left mt-2",
                  children: `*Maximum ${MAX_DIETARY_LIST} kostpr\xE6ferencer are allowed.`
                }, void 0, false, {
                  fileName: "app/components/edit/editMenuItem.jsx",
                  lineNumber: 421,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/edit/editMenuItem.jsx",
              lineNumber: 384,
              columnNumber: 11
            }, this),
            (station == null ? void 0 : station.is_parent_station) !== true && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: `w-[120px] self-start p-1 rounded-md text-primary text-sm font-medium cursor-pointer ${(stationMenu == null ? void 0 : stationMenu.id) ? " bg-[#F1F1F1]" : " bg-[#E3E3AD]"}`,
              onClick: () => (station == null ? void 0 : station.is_parent_station) !== true && ModelHandle(),
              children: (stationMenu == null ? void 0 : stationMenu.id) ? "Edit Recipe" : "Add Recipe"
            }, void 0, false, {
              fileName: "app/components/edit/editMenuItem.jsx",
              lineNumber: 427,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/edit/editMenuItem.jsx",
          lineNumber: 230,
          columnNumber: 9
        }, this),
        menuModalIsOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(editMenuModel_default, {
          ref: _ref,
          station: stationMenu,
          editContent,
          existingTableData,
          indexValue,
          stationColor,
          setIsOpenv: setMenuIsOpen,
          EnTitle,
          DkTitle,
          dkMenu: menuInfo,
          setDkMenu: setMenuInfo,
          enMenu: translatedMenuInfo,
          setEnMenu: setTranslatedMenuInfo,
          allergensList: selectedMenuItems,
          setAllergensList: setSelectedMenuItems,
          dietaryList: selectedDietaryItems,
          setDietaryList: setSelectedDietaryItems,
          ingredientsList: selectedIngredientsItems,
          setIngredientsList: setSelectedIngredientsItems,
          portionsProducedValue,
          setPortionsProducedValue,
          portionsSoldValue,
          setPortionsSoldValue,
          totalCalorie,
          setTotalCalorie,
          menuId: {
            menu: stationMenu == null ? void 0 : stationMenu.id,
            recipeId: (_P = stationMenu == null ? void 0 : stationMenu.recipe_id) == null ? void 0 : _P.id
          },
          stationId,
          stationName
        }, stationMenu == null ? void 0 : stationMenu.id, false, {
          fileName: "app/components/edit/editMenuItem.jsx",
          lineNumber: 440,
          columnNumber: 11
        }, this) : null
      ]
    }, void 0, true, {
      fileName: "app/components/edit/editMenuItem.jsx",
      lineNumber: 229,
      columnNumber: 7
    }, this);
  }
);
var editMenuItem_default = EditMenuItem;

// app/routes/edit-menu-of-the-day/$date.jsx
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Edit Menu of the day" };
}
function EditMenuOfTheDayPage({ params }) {
  var _a, _b;
  const editContent = useLoaderData();
  const stationColor = (_a = editContent == null ? void 0 : editContent.getAllStations) == null ? void 0 : _a.map((e) => e.tagColor);
  const [auth, setAuth] = (0, import_react5.useState)(true);
  const [open, setOpen] = (0, import_react5.useState)(true);
  const [open2, setOpen2] = (0, import_react5.useState)(true);
  const [preventDouble, setPreventDouble] = (0, import_react5.useState)(false);
  const [isLoading, setIsLoading] = (0, import_react5.useState)(true);
  const [modalIsOpen, setIsOpen] = (0, import_react5.useState)(false);
  const existingTableData = (_b = editContent == null ? void 0 : editContent.res) == null ? void 0 : _b.data;
  const editMenuItemRefs = (0, import_react5.useRef)([]);
  const buttonRef = (0, import_react5.useRef)(null);
  const dateFormat = "EEEE";
  const [stationMenuList, setStationMenuList] = (0, import_react5.useState)(
    editContent == null ? void 0 : editContent.getAllStations
  );
  const cloudFlareClean = async () => {
    const response = await directusLoaderLink.items("Locations").readByQuery({
      fields: ["screen_ids"],
      filter: { id: { _eq: editContent == null ? void 0 : editContent.locationId } }
    });
    setTimeout(async () => {
      var _a2, _b2, _c, _d, _e, _f;
      if (((_c = (_b2 = (_a2 = response == null ? void 0 : response.data) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.screen_ids) == null ? void 0 : _c.length) > 0) {
        const arrayOfScreenIds = (_f = (_e = (_d = response == null ? void 0 : response.data) == null ? void 0 : _d[0]) == null ? void 0 : _e.screen_ids) == null ? void 0 : _f.split(",");
        await fetch(SCREENCLOUD_CACHE_CLEAR_API_URL, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json"
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(arrayOfScreenIds)
        }).then((e) => {
        }).catch((e) => {
          console.log(e);
        });
      }
      await fetch(PURGE_CACHE_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({
          files: {
            files: [`${FRONTEND_URL}/`]
          }
        })
      }).then((e) => {
      }).catch((e) => {
        console.log(e);
      });
    }, 3e3);
  };
  const closeMenuOfDay = (date) => {
    localStorage.setItem("LastWacthedWeek", editContent.date);
  };
  (0, import_react5.useEffect)(() => {
    localStorage.setItem("LastWacthedWeek", editContent.date);
    const MenuSave = localStorage.getItem("MenuSave");
    if ((MenuSave == null ? void 0 : MenuSave.length) > 0) {
      MenuSave === "create" ? Q.success(`The record has been saved successfully`) : MenuSave === "edit" && Q.success(`The record has been updated successfully`);
      localStorage.removeItem("MenuSave");
      cloudFlareClean();
    }
    var isValue = false;
    const interval = setInterval(() => {
      var _a2, _b2, _c;
      for (let i = 0; i < (stationMenuList == null ? void 0 : stationMenuList.length); i++) {
        if (((_a2 = editMenuItemRefs == null ? void 0 : editMenuItemRefs.current[i]) == null ? void 0 : _a2.getTotalCount()) > 0) {
          isValue = true;
          if (((_b2 = editMenuItemRefs == null ? void 0 : editMenuItemRefs.current[i]) == null ? void 0 : _b2.getTranslatedMenuInfoTotalCount()) > 0) {
            clearInterval(interval);
            setIsLoading(false);
          } else {
            !isLoading && setIsLoading(true);
          }
        }
        if ((_c = editMenuItemRefs == null ? void 0 : editMenuItemRefs.current[i]) == null ? void 0 : _c.getErrorStatus()) {
          clearInterval(interval);
          setIsLoading(false);
          Q.error("Oops!!! Something went wrong in the google translation");
          break;
        }
      }
      if (!isValue) {
        clearInterval(interval);
        setIsLoading(false);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);
  let childArray = [];
  let childDataArray = [];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: setAuth,
        noLeftLogo: false
      }, void 0, false, {
        fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
        lineNumber: 258,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page__wrap justify-center items-center px-5 py-4 lg:px-10 p-10 pt-7 bg-[#F8F8F8]",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "head pt-9 pb-5 text-center text-primary",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-lg font-medium",
                  children: [
                    format(new Date(editContent.date), dateFormat),
                    " ",
                    format(new Date(editContent.date), "MM/dd/yyyy")
                  ]
                }, void 0, true, {
                  fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                  lineNumber: 262,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "mt-1 text-sm font-normal",
                  children: "Menu of the day"
                }, void 0, false, {
                  fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                  lineNumber: 266,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
              lineNumber: 261,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "relative w-full bg-black ",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "absolute flex bottom-0 left-0 mb-3",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    className: "flex-1 d-flex justify-items-end",
                    to: { pathname: "/", state: { id: "test" } },
                    onClick: () => closeMenuOfDay(),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "w-full min-w-[112px] py-1.5 flex justify-start items-center text-primary font-medium text-sm rounded  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                          className: "ri-arrow-left-line mr-1"
                        }, void 0, false, {
                          fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                          lineNumber: 279,
                          columnNumber: 19
                        }, this),
                        "  Go Back"
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                      lineNumber: 278,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                    lineNumber: 273,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                  lineNumber: 272,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                lineNumber: 271,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
              lineNumber: 270,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: " relative",
              children: [
                isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  style: {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh"
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, false, {
                    fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                    lineNumber: 296,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                  lineNumber: 288,
                  columnNumber: 15
                }, this) : null,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  style: {
                    display: isLoading ? "none" : "contents"
                  },
                  children: stationMenuList == null ? void 0 : stationMenuList.map((stationMenu, index) => {
                    var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
                    const allowedStations = (_c = (_b2 = (_a2 = editContent == null ? void 0 : editContent.currentUser) == null ? void 0 : _a2.selected_locations) == null ? void 0 : _b2.allowed_stations) == null ? void 0 : _c.map(
                      (e) => {
                        var _a3, _b3;
                        return ((_a3 = e == null ? void 0 : e.Stations_id) == null ? void 0 : _a3.is_not_main_station) !== true && ((_b3 = e == null ? void 0 : e.Stations_id) == null ? void 0 : _b3.station_unique_id);
                      }
                    );
                    const mainStation = allowedStations == null ? void 0 : allowedStations.filter(
                      (e) => e === (stationMenu == null ? void 0 : stationMenu.station_unique_id) && (e == null ? void 0 : e.is_not_main_station) !== true
                    );
                    const val = new Array(allowedStations)[0];
                    const subStation = (stationMenu == null ? void 0 : stationMenu.station_unique_id) === ((_d = SECTION_6_1_ID) == null ? void 0 : _d.toString()) && (val == null ? void 0 : val.includes((_e = SECTION_6_ID) == null ? void 0 : _e.toString())) || (stationMenu == null ? void 0 : stationMenu.station_unique_id) === ((_f = SECTION_6_2_ID) == null ? void 0 : _f.toString()) && (val == null ? void 0 : val.includes((_g = SECTION_6_ID) == null ? void 0 : _g.toString())) || (stationMenu == null ? void 0 : stationMenu.station_unique_id) === ((_h = SECTION_6_3_ID) == null ? void 0 : _h.toString()) && (val == null ? void 0 : val.includes((_i = SECTION_6_ID) == null ? void 0 : _i.toString())) || (stationMenu == null ? void 0 : stationMenu.station_unique_id) === ((_j = SECTION_7_1_ID) == null ? void 0 : _j.toString()) && (val == null ? void 0 : val.includes((_k = SECTION_7_ID) == null ? void 0 : _k.toString())) || (stationMenu == null ? void 0 : stationMenu.station_unique_id) === ((_l = SECTION_7_2_ID) == null ? void 0 : _l.toString()) && (val == null ? void 0 : val.includes((_m = SECTION_7_ID) == null ? void 0 : _m.toString())) || (stationMenu == null ? void 0 : stationMenu.station_unique_id) === ((_n = SECTION_7_3_ID) == null ? void 0 : _n.toString()) && (val == null ? void 0 : val.includes((_o = SECTION_7_ID) == null ? void 0 : _o.toString()));
                    if (subStation || mainStation[0]) {
                      (stationMenu == null ? void 0 : stationMenu.is_parent_station) === false;
                      if ((_p = stationMenu == null ? void 0 : stationMenu.child_list) == null ? void 0 : _p.length) {
                        childArray = [];
                        childDataArray = [];
                        (_q = stationMenu == null ? void 0 : stationMenu.child_list) == null ? void 0 : _q.map(
                          (e) => childArray.push(e == null ? void 0 : e.related_Stations_id)
                        );
                      }
                      (childArray == null ? void 0 : childArray.length) && (childDataArray == null ? void 0 : childDataArray.push({
                        stationMenu,
                        existingTableData,
                        stationColor,
                        index
                      }));
                      if ((stationMenu == null ? void 0 : stationMenu.is_not_main_station) == false && (stationMenu == null ? void 0 : stationMenu.is_parent_station) == false) {
                        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "editmenuitem bg-white rounded-[10px] border border-[#E2E2E2] shadow-sm px-5 py-10 lg:px-10 mb-5",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(editMenuItem_default, {
                            ref: (el) => editMenuItemRefs.current[index] = el,
                            station: stationMenu,
                            editContent,
                            existingTableData,
                            indexValue: index,
                            setOpen,
                            setOpen2,
                            locationId: editContent == null ? void 0 : editContent.locationId,
                            stationColor,
                            bottomLine: false,
                            preventDouble,
                            stationId: { stationId: stationMenu == null ? void 0 : stationMenu.id, uniqueId: stationMenu == null ? void 0 : stationMenu.station_unique_id }
                          }, void 0, false, {
                            fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                            lineNumber: 373,
                            columnNumber: 25
                          }, this)
                        }, index, false, {
                          fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                          lineNumber: 369,
                          columnNumber: 23
                        }, this);
                      }
                      if ((childArray == null ? void 0 : childArray.length) + 1 == (childDataArray == null ? void 0 : childDataArray.length)) {
                        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "editmenuitem bg-white rounded-[10px] border border-[#E2E2E2] shadow-sm px-5 py-10 lg:px-10 mb-5",
                          children: childDataArray == null ? void 0 : childDataArray.map((e, i) => {
                            var _a3, _b3, _c2, _d2;
                            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(editMenuItem_default, {
                              ref: (el) => editMenuItemRefs.current[e == null ? void 0 : e.index] = el,
                              stationId: { stationId: (_b3 = e == null ? void 0 : e.stationMenu) == null ? void 0 : _b3.id, uniqueId: (_c2 = e == null ? void 0 : e.stationMenu) == null ? void 0 : _c2.station_unique_id },
                              station: e == null ? void 0 : e.stationMenu,
                              editContent,
                              existingTableData: e == null ? void 0 : e.existingTableData,
                              indexValue: e == null ? void 0 : e.index,
                              setOpen,
                              setOpen2,
                              locationId: editContent == null ? void 0 : editContent.locationId,
                              stationColor: e == null ? void 0 : e.stationColor,
                              bottomLine: ((_d2 = e == null ? void 0 : e.stationMenu) == null ? void 0 : _d2.is_parent_station) !== true && i < (childDataArray == null ? void 0 : childDataArray.length) - 1 ? true : false,
                              preventDouble
                            }, (_a3 = e == null ? void 0 : e.stationMenu) == null ? void 0 : _a3.id, false, {
                              fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                              lineNumber: 398,
                              columnNumber: 29
                            }, this);
                          })
                        }, index, false, {
                          fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                          lineNumber: 392,
                          columnNumber: 23
                        }, this);
                      }
                    } else {
                      return null;
                    }
                  })
                }, void 0, false, {
                  fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
                  lineNumber: 299,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
              lineNumber: 285,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
          lineNumber: 260,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
        lineNumber: 259,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
        lineNumber: 434,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/edit-menu-of-the-day/$date.jsx",
    lineNumber: 257,
    columnNumber: 5
  }, this);
}
export {
  EditMenuOfTheDayPage as default,
  meta
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
//# sourceMappingURL=/build/routes/edit-menu-of-the-day/$date-APSVOE6T.js.map
