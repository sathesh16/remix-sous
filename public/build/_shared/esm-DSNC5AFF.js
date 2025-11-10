import {
  BooleanEmpty,
  BooleanIndeterminate,
  ClickOutsideContainer,
  CompactSelection,
  GridCellKind,
  GridColumnIcon,
  GridColumnMenuIcon,
  InnerGridCellKind,
  ThemeContext,
  assert,
  assertNever,
  blend,
  blendCache,
  booleanCellIsEditable,
  deepEqual,
  getDataEditorTheme,
  getLuminance,
  interpolateColors,
  isEditableGridCell,
  isInnerOnlyCell,
  isObjectEditorCallbackResult,
  isReadWriteCell,
  isRectangleEqual,
  isSizedGridColumn,
  isTextEditableGridCell,
  makeCSSStyle,
  maybe,
  mergeAndRealizeTheme,
  parseToRgba,
  require_ListCache,
  require_Map,
  require_MapCache,
  require_Symbol,
  require_baseGetTag,
  require_castPath,
  require_eq,
  require_freeGlobal,
  require_getNative,
  require_hasPath,
  require_isArguments,
  require_isArray,
  require_isFunction,
  require_isIndex,
  require_isKey,
  require_isLength,
  require_isObject,
  require_isObjectLike,
  require_isSymbol,
  require_root,
  require_toKey,
  require_toSource,
  resolveCellsThunk,
  useTheme,
  withAlpha
} from "/build/_shared/chunk-73RB4IKS.js";
import {
  styled_default
} from "/build/_shared/chunk-H7YKWEUP.js";
import {
  __commonJS,
  __publicField,
  __toESM,
  require_react
} from "/build/_shared/chunk-RGH7DKGJ.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment5 = REACT_FRAGMENT_TYPE;
        var Lazy2 = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense3 = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment5;
        exports.Lazy = Lazy2;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense3;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
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
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
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
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x2) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
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
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x2, y2) {
        if (x2 === y2) {
          return x2 !== 0 || 1 / x2 === 1 / y2;
        } else {
          return x2 !== x2 && y2 !== y2;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
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
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
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
        if (!propValue) {
          return false;
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
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-easy-swipe/lib/react-swipe.js
var require_react_swipe = __commonJS({
  "node_modules/react-easy-swipe/lib/react-swipe.js"(exports) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define(["exports", "react", "prop-types"], factory);
      } else if (typeof exports !== "undefined") {
        factory(exports, require_react(), require_prop_types());
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, global.react, global.propTypes);
        global.reactSwipe = mod.exports;
      }
    })(exports, function(exports2, _react, _propTypes) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.setHasSupportToCaptureOption = setHasSupportToCaptureOption;
      var _react2 = _interopRequireDefault(_react);
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
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
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
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
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var supportsCaptureOption = false;
      function setHasSupportToCaptureOption(hasSupport) {
        supportsCaptureOption = hasSupport;
      }
      try {
        addEventListener("test", null, Object.defineProperty({}, "capture", { get: function get() {
          setHasSupportToCaptureOption(true);
        } }));
      } catch (e) {
      }
      function getSafeEventHandlerOpts() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : { capture: true };
        return supportsCaptureOption ? options : options.capture;
      }
      function getPosition(event) {
        if ("touches" in event) {
          var _event$touches$ = event.touches[0], pageX = _event$touches$.pageX, pageY = _event$touches$.pageY;
          return { x: pageX, y: pageY };
        }
        var screenX = event.screenX, screenY = event.screenY;
        return { x: screenX, y: screenY };
      }
      var ReactSwipe = function(_Component) {
        _inherits(ReactSwipe2, _Component);
        function ReactSwipe2() {
          var _ref;
          _classCallCheck(this, ReactSwipe2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe2.__proto__ || Object.getPrototypeOf(ReactSwipe2)).call.apply(_ref, [this].concat(args)));
          _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
          _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
          _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);
          _this._onMouseDown = _this._onMouseDown.bind(_this);
          _this._onMouseMove = _this._onMouseMove.bind(_this);
          _this._onMouseUp = _this._onMouseUp.bind(_this);
          _this._setSwiperRef = _this._setSwiperRef.bind(_this);
          return _this;
        }
        _createClass(ReactSwipe2, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            if (this.swiper) {
              this.swiper.addEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            if (this.swiper) {
              this.swiper.removeEventListener("touchmove", this._handleSwipeMove, getSafeEventHandlerOpts({
                capture: true,
                passive: false
              }));
            }
          }
        }, {
          key: "_onMouseDown",
          value: function _onMouseDown(event) {
            if (!this.props.allowMouseEvents) {
              return;
            }
            this.mouseDown = true;
            document.addEventListener("mouseup", this._onMouseUp);
            document.addEventListener("mousemove", this._onMouseMove);
            this._handleSwipeStart(event);
          }
        }, {
          key: "_onMouseMove",
          value: function _onMouseMove(event) {
            if (!this.mouseDown) {
              return;
            }
            this._handleSwipeMove(event);
          }
        }, {
          key: "_onMouseUp",
          value: function _onMouseUp(event) {
            this.mouseDown = false;
            document.removeEventListener("mouseup", this._onMouseUp);
            document.removeEventListener("mousemove", this._onMouseMove);
            this._handleSwipeEnd(event);
          }
        }, {
          key: "_handleSwipeStart",
          value: function _handleSwipeStart(event) {
            var _getPosition = getPosition(event), x2 = _getPosition.x, y2 = _getPosition.y;
            this.moveStart = { x: x2, y: y2 };
            this.props.onSwipeStart(event);
          }
        }, {
          key: "_handleSwipeMove",
          value: function _handleSwipeMove(event) {
            if (!this.moveStart) {
              return;
            }
            var _getPosition2 = getPosition(event), x2 = _getPosition2.x, y2 = _getPosition2.y;
            var deltaX = x2 - this.moveStart.x;
            var deltaY = y2 - this.moveStart.y;
            this.moving = true;
            var shouldPreventDefault = this.props.onSwipeMove({
              x: deltaX,
              y: deltaY
            }, event);
            if (shouldPreventDefault && event.cancelable) {
              event.preventDefault();
            }
            this.movePosition = { deltaX, deltaY };
          }
        }, {
          key: "_handleSwipeEnd",
          value: function _handleSwipeEnd(event) {
            this.props.onSwipeEnd(event);
            var tolerance = this.props.tolerance;
            if (this.moving && this.movePosition) {
              if (this.movePosition.deltaX < -tolerance) {
                this.props.onSwipeLeft(1, event);
              } else if (this.movePosition.deltaX > tolerance) {
                this.props.onSwipeRight(1, event);
              }
              if (this.movePosition.deltaY < -tolerance) {
                this.props.onSwipeUp(1, event);
              } else if (this.movePosition.deltaY > tolerance) {
                this.props.onSwipeDown(1, event);
              }
            }
            this.moveStart = null;
            this.moving = false;
            this.movePosition = null;
          }
        }, {
          key: "_setSwiperRef",
          value: function _setSwiperRef(node) {
            this.swiper = node;
            this.props.innerRef(node);
          }
        }, {
          key: "render",
          value: function render() {
            var _props = this.props, tagName = _props.tagName, className = _props.className, style = _props.style, children = _props.children, allowMouseEvents = _props.allowMouseEvents, onSwipeUp = _props.onSwipeUp, onSwipeDown = _props.onSwipeDown, onSwipeLeft = _props.onSwipeLeft, onSwipeRight = _props.onSwipeRight, onSwipeStart = _props.onSwipeStart, onSwipeMove = _props.onSwipeMove, onSwipeEnd = _props.onSwipeEnd, innerRef = _props.innerRef, tolerance = _props.tolerance, props = _objectWithoutProperties(_props, ["tagName", "className", "style", "children", "allowMouseEvents", "onSwipeUp", "onSwipeDown", "onSwipeLeft", "onSwipeRight", "onSwipeStart", "onSwipeMove", "onSwipeEnd", "innerRef", "tolerance"]);
            return _react2.default.createElement(
              this.props.tagName,
              _extends({
                ref: this._setSwiperRef,
                onMouseDown: this._onMouseDown,
                onTouchStart: this._handleSwipeStart,
                onTouchEnd: this._handleSwipeEnd,
                className,
                style
              }, props),
              children
            );
          }
        }]);
        return ReactSwipe2;
      }(_react.Component);
      ReactSwipe.displayName = "ReactSwipe";
      ReactSwipe.propTypes = {
        tagName: _propTypes2.default.string,
        className: _propTypes2.default.string,
        style: _propTypes2.default.object,
        children: _propTypes2.default.node,
        allowMouseEvents: _propTypes2.default.bool,
        onSwipeUp: _propTypes2.default.func,
        onSwipeDown: _propTypes2.default.func,
        onSwipeLeft: _propTypes2.default.func,
        onSwipeRight: _propTypes2.default.func,
        onSwipeStart: _propTypes2.default.func,
        onSwipeMove: _propTypes2.default.func,
        onSwipeEnd: _propTypes2.default.func,
        innerRef: _propTypes2.default.func,
        tolerance: _propTypes2.default.number.isRequired
      };
      ReactSwipe.defaultProps = {
        tagName: "div",
        allowMouseEvents: false,
        onSwipeUp: function onSwipeUp() {
        },
        onSwipeDown: function onSwipeDown() {
        },
        onSwipeLeft: function onSwipeLeft() {
        },
        onSwipeRight: function onSwipeRight() {
        },
        onSwipeStart: function onSwipeStart() {
        },
        onSwipeMove: function onSwipeMove() {
        },
        onSwipeEnd: function onSwipeEnd() {
        },
        innerRef: function innerRef() {
        },
        tolerance: 0
      };
      exports2.default = ReactSwipe;
    });
  }
});

// node_modules/react-easy-swipe/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-easy-swipe/lib/index.js"(exports) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define(["exports", "./react-swipe"], factory);
      } else if (typeof exports !== "undefined") {
        factory(exports, require_react_swipe());
      } else {
        var mod = {
          exports: {}
        };
        factory(mod.exports, global.reactSwipe);
        global.index = mod.exports;
      }
    })(exports, function(exports2, _reactSwipe) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      var _reactSwipe2 = _interopRequireDefault(_reactSwipe);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      exports2.default = _reactSwipe2.default;
    });
  }
});

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames;
        });
      } else {
        window.classNames = classNames;
      }
    })();
  }
});

// node_modules/react-responsive-carousel/lib/js/cssClasses.js
var require_cssClasses = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/cssClasses.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _classnames = _interopRequireDefault(require_classnames());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var _default = {
      ROOT: function ROOT(customClassName) {
        return (0, _classnames.default)(_defineProperty({
          "carousel-root": true
        }, customClassName || "", !!customClassName));
      },
      CAROUSEL: function CAROUSEL(isSlider) {
        return (0, _classnames.default)({
          carousel: true,
          "carousel-slider": isSlider
        });
      },
      WRAPPER: function WRAPPER(isSlider, axis) {
        return (0, _classnames.default)({
          "thumbs-wrapper": !isSlider,
          "slider-wrapper": isSlider,
          "axis-horizontal": axis === "horizontal",
          "axis-vertical": axis !== "horizontal"
        });
      },
      SLIDER: function SLIDER(isSlider, isSwiping) {
        return (0, _classnames.default)({
          thumbs: !isSlider,
          slider: isSlider,
          animated: !isSwiping
        });
      },
      ITEM: function ITEM(isSlider, selected, previous) {
        return (0, _classnames.default)({
          thumb: !isSlider,
          slide: isSlider,
          selected,
          previous
        });
      },
      ARROW_PREV: function ARROW_PREV(disabled) {
        return (0, _classnames.default)({
          "control-arrow control-prev": true,
          "control-disabled": disabled
        });
      },
      ARROW_NEXT: function ARROW_NEXT(disabled) {
        return (0, _classnames.default)({
          "control-arrow control-next": true,
          "control-disabled": disabled
        });
      },
      DOT: function DOT(selected) {
        return (0, _classnames.default)({
          dot: true,
          selected
        });
      }
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/dimensions.js
var require_dimensions = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/dimensions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.outerWidth = void 0;
    var outerWidth = function outerWidth2(el) {
      var width = el.offsetWidth;
      var style = getComputedStyle(el);
      width += parseInt(style.marginLeft) + parseInt(style.marginRight);
      return width;
    };
    exports.outerWidth = outerWidth;
  }
});

// node_modules/react-responsive-carousel/lib/js/CSSTranslate.js
var require_CSSTranslate = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/CSSTranslate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2(position, metric, axis) {
      var positionPercent = position === 0 ? position : position + metric;
      var positionCss = axis === "horizontal" ? [positionPercent, 0, 0] : [0, positionPercent, 0];
      var transitionProp = "translate3d";
      var translatedPosition = "(" + positionCss.join(",") + ")";
      return transitionProp + translatedPosition;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/shims/window.js
var require_window = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/shims/window.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2() {
      return window;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Thumbs.js
var require_Thumbs = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Thumbs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _cssClasses = _interopRequireDefault(require_cssClasses());
    var _dimensions = require_dimensions();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    var _reactEasySwipe = _interopRequireDefault(require_lib());
    var _window = _interopRequireDefault(require_window());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
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
      return _extends.apply(this, arguments);
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p2) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf(o, p2);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var isKeyboardEvent = function isKeyboardEvent2(e) {
      return e.hasOwnProperty("key");
    };
    var Thumbs = /* @__PURE__ */ function(_Component) {
      _inherits(Thumbs2, _Component);
      var _super = _createSuper(Thumbs2);
      function Thumbs2(_props) {
        var _this;
        _classCallCheck(this, Thumbs2);
        _this = _super.call(this, _props);
        _defineProperty(_assertThisInitialized(_this), "itemsWrapperRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "itemsListRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "setItemsWrapperRef", function(node) {
          _this.itemsWrapperRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setItemsListRef", function(node) {
          _this.itemsListRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function(node, index) {
          if (!_this.thumbsRef) {
            _this.thumbsRef = [];
          }
          _this.thumbsRef[index] = node;
        });
        _defineProperty(_assertThisInitialized(_this), "updateSizes", function() {
          if (!_this.props.children || !_this.itemsWrapperRef || !_this.thumbsRef) {
            return;
          }
          var total = _react.Children.count(_this.props.children);
          var wrapperSize = _this.itemsWrapperRef.clientWidth;
          var itemSize = _this.props.thumbWidth ? _this.props.thumbWidth : (0, _dimensions.outerWidth)(_this.thumbsRef[0]);
          var visibleItems = Math.floor(wrapperSize / itemSize);
          var showArrows = visibleItems < total;
          var lastPosition = showArrows ? total - visibleItems : 0;
          _this.setState(function(_state, props) {
            return {
              itemSize,
              visibleItems,
              firstItem: showArrows ? _this.getFirstItem(props.selectedItem) : 0,
              lastPosition,
              showArrows
            };
          });
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickItem", function(index, item, e) {
          if (!isKeyboardEvent(e) || e.key === "Enter") {
            var handler = _this.props.onSelectItem;
            if (typeof handler === "function") {
              handler(index, item);
            }
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function() {
          _this.setState({
            swiping: true
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function() {
          _this.setState({
            swiping: false
          });
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function(delta) {
          var deltaX = delta.x;
          if (!_this.state.itemSize || !_this.itemsWrapperRef || !_this.state.visibleItems) {
            return false;
          }
          var leftBoundary = 0;
          var childrenLength = _react.Children.count(_this.props.children);
          var currentPosition = -(_this.state.firstItem * 100) / _this.state.visibleItems;
          var lastLeftItem = Math.max(childrenLength - _this.state.visibleItems, 0);
          var lastLeftBoundary = -lastLeftItem * 100 / _this.state.visibleItems;
          if (currentPosition === leftBoundary && deltaX > 0) {
            deltaX = 0;
          }
          if (currentPosition === lastLeftBoundary && deltaX < 0) {
            deltaX = 0;
          }
          var wrapperSize = _this.itemsWrapperRef.clientWidth;
          var position = currentPosition + 100 / (wrapperSize / deltaX);
          if (_this.itemsListRef) {
            ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
              _this.itemsListRef.style[prop] = (0, _CSSTranslate.default)(position, "%", _this.props.axis);
            });
          }
          return true;
        });
        _defineProperty(_assertThisInitialized(_this), "slideRight", function(positions) {
          _this.moveTo(_this.state.firstItem - (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "slideLeft", function(positions) {
          _this.moveTo(_this.state.firstItem + (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "moveTo", function(position) {
          position = position < 0 ? 0 : position;
          position = position >= _this.state.lastPosition ? _this.state.lastPosition : position;
          _this.setState({
            firstItem: position
          });
        });
        _this.state = {
          selectedItem: _props.selectedItem,
          swiping: false,
          showArrows: false,
          firstItem: 0,
          visibleItems: 0,
          lastPosition: 0
        };
        return _this;
      }
      _createClass(Thumbs2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.setupThumbs();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (this.props.selectedItem !== this.state.selectedItem) {
            this.setState({
              selectedItem: this.props.selectedItem,
              firstItem: this.getFirstItem(this.props.selectedItem)
            });
          }
          if (this.props.children === prevProps.children) {
            return;
          }
          this.updateSizes();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.destroyThumbs();
        }
      }, {
        key: "setupThumbs",
        value: function setupThumbs() {
          (0, _window.default)().addEventListener("resize", this.updateSizes);
          (0, _window.default)().addEventListener("DOMContentLoaded", this.updateSizes);
          this.updateSizes();
        }
      }, {
        key: "destroyThumbs",
        value: function destroyThumbs() {
          (0, _window.default)().removeEventListener("resize", this.updateSizes);
          (0, _window.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
        }
      }, {
        key: "getFirstItem",
        value: function getFirstItem(selectedItem) {
          var firstItem = selectedItem;
          if (selectedItem >= this.state.lastPosition) {
            firstItem = this.state.lastPosition;
          }
          if (selectedItem < this.state.firstItem + this.state.visibleItems) {
            firstItem = this.state.firstItem;
          }
          if (selectedItem < this.state.firstItem) {
            firstItem = selectedItem;
          }
          return firstItem;
        }
      }, {
        key: "renderItems",
        value: function renderItems() {
          var _this2 = this;
          return this.props.children.map(function(img, index) {
            var itemClass = _cssClasses.default.ITEM(false, index === _this2.state.selectedItem);
            var thumbProps = {
              key: index,
              ref: function ref(e) {
                return _this2.setThumbsRef(e, index);
              },
              className: itemClass,
              onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
              onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
              "aria-label": "".concat(_this2.props.labels.item, " ").concat(index + 1),
              style: {
                width: _this2.props.thumbWidth
              }
            };
            return /* @__PURE__ */ _react.default.createElement("li", _extends({}, thumbProps, {
              role: "button",
              tabIndex: 0
            }), img);
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          if (!this.props.children) {
            return null;
          }
          var isSwipeable = _react.Children.count(this.props.children) > 1;
          var hasPrev = this.state.showArrows && this.state.firstItem > 0;
          var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition;
          var itemListStyles = {};
          var currentPosition = -this.state.firstItem * (this.state.itemSize || 0);
          var transformProp = (0, _CSSTranslate.default)(currentPosition, "px", this.props.axis);
          var transitionTime = this.props.transitionTime + "ms";
          itemListStyles = {
            WebkitTransform: transformProp,
            MozTransform: transformProp,
            MsTransform: transformProp,
            OTransform: transformProp,
            transform: transformProp,
            msTransform: transformProp,
            WebkitTransitionDuration: transitionTime,
            MozTransitionDuration: transitionTime,
            MsTransitionDuration: transitionTime,
            OTransitionDuration: transitionTime,
            transitionDuration: transitionTime,
            msTransitionDuration: transitionTime
          };
          return /* @__PURE__ */ _react.default.createElement("div", {
            className: _cssClasses.default.CAROUSEL(false)
          }, /* @__PURE__ */ _react.default.createElement("div", {
            className: _cssClasses.default.WRAPPER(false),
            ref: this.setItemsWrapperRef
          }, /* @__PURE__ */ _react.default.createElement("button", {
            type: "button",
            className: _cssClasses.default.ARROW_PREV(!hasPrev),
            onClick: function onClick() {
              return _this3.slideRight();
            },
            "aria-label": this.props.labels.leftArrow
          }), isSwipeable ? /* @__PURE__ */ _react.default.createElement(_reactEasySwipe.default, {
            tagName: "ul",
            className: _cssClasses.default.SLIDER(false, this.state.swiping),
            onSwipeLeft: this.slideLeft,
            onSwipeRight: this.slideRight,
            onSwipeMove: this.onSwipeMove,
            onSwipeStart: this.onSwipeStart,
            onSwipeEnd: this.onSwipeEnd,
            style: itemListStyles,
            innerRef: this.setItemsListRef,
            allowMouseEvents: this.props.emulateTouch
          }, this.renderItems()) : /* @__PURE__ */ _react.default.createElement("ul", {
            className: _cssClasses.default.SLIDER(false, this.state.swiping),
            ref: function ref(node) {
              return _this3.setItemsListRef(node);
            },
            style: itemListStyles
          }, this.renderItems()), /* @__PURE__ */ _react.default.createElement("button", {
            type: "button",
            className: _cssClasses.default.ARROW_NEXT(!hasNext),
            onClick: function onClick() {
              return _this3.slideLeft();
            },
            "aria-label": this.props.labels.rightArrow
          })));
        }
      }]);
      return Thumbs2;
    }(_react.Component);
    exports.default = Thumbs;
    _defineProperty(Thumbs, "displayName", "Thumbs");
    _defineProperty(Thumbs, "defaultProps", {
      axis: "horizontal",
      labels: {
        leftArrow: "previous slide / item",
        rightArrow: "next slide / item",
        item: "slide item"
      },
      selectedItem: 0,
      thumbWidth: 80,
      transitionTime: 350
    });
  }
});

// node_modules/react-responsive-carousel/lib/js/shims/document.js
var require_document = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/shims/document.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _default = function _default2() {
      return document;
    };
    exports.default = _default;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js
var require_utils = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.setPosition = exports.getPosition = exports.isKeyboardEvent = exports.defaultStatusFormatter = exports.noop = void 0;
    var _react = require_react();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var noop = function noop2() {
    };
    exports.noop = noop;
    var defaultStatusFormatter = function defaultStatusFormatter2(current, total) {
      return "".concat(current, " of ").concat(total);
    };
    exports.defaultStatusFormatter = defaultStatusFormatter;
    var isKeyboardEvent = function isKeyboardEvent2(e) {
      return e ? e.hasOwnProperty("key") : false;
    };
    exports.isKeyboardEvent = isKeyboardEvent;
    var getPosition = function getPosition2(index, props) {
      if (props.infiniteLoop) {
        ++index;
      }
      if (index === 0) {
        return 0;
      }
      var childrenLength = _react.Children.count(props.children);
      if (props.centerMode && props.axis === "horizontal") {
        var currentPosition = -index * props.centerSlidePercentage;
        var lastPosition = childrenLength - 1;
        if (index && (index !== lastPosition || props.infiniteLoop)) {
          currentPosition += (100 - props.centerSlidePercentage) / 2;
        } else if (index === lastPosition) {
          currentPosition += 100 - props.centerSlidePercentage;
        }
        return currentPosition;
      }
      return -index * 100;
    };
    exports.getPosition = getPosition;
    var setPosition = function setPosition2(position, axis) {
      var style = {};
      ["WebkitTransform", "MozTransform", "MsTransform", "OTransform", "transform", "msTransform"].forEach(function(prop) {
        style[prop] = (0, _CSSTranslate.default)(position, "%", axis);
      });
      return style;
    };
    exports.setPosition = setPosition;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js
var require_animations = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/animations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.fadeAnimationHandler = exports.slideStopSwipingHandler = exports.slideSwipeAnimationHandler = exports.slideAnimationHandler = void 0;
    var _react = require_react();
    var _CSSTranslate = _interopRequireDefault(require_CSSTranslate());
    var _utils = require_utils();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var slideAnimationHandler = function slideAnimationHandler2(props, state) {
      var returnStyles = {};
      var selectedItem = state.selectedItem;
      var previousItem = selectedItem;
      var lastPosition = _react.Children.count(props.children) - 1;
      var needClonedSlide = props.infiniteLoop && (selectedItem < 0 || selectedItem > lastPosition);
      if (needClonedSlide) {
        if (previousItem < 0) {
          if (props.centerMode && props.centerSlidePercentage && props.axis === "horizontal") {
            returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * props.centerSlidePercentage - (100 - props.centerSlidePercentage) / 2, props.axis);
          } else {
            returnStyles.itemListStyle = (0, _utils.setPosition)(-(lastPosition + 2) * 100, props.axis);
          }
        } else if (previousItem > lastPosition) {
          returnStyles.itemListStyle = (0, _utils.setPosition)(0, props.axis);
        }
        return returnStyles;
      }
      var currentPosition = (0, _utils.getPosition)(selectedItem, props);
      var transformProp = (0, _CSSTranslate.default)(currentPosition, "%", props.axis);
      var transitionTime = props.transitionTime + "ms";
      returnStyles.itemListStyle = {
        WebkitTransform: transformProp,
        msTransform: transformProp,
        OTransform: transformProp,
        transform: transformProp
      };
      if (!state.swiping) {
        returnStyles.itemListStyle = _objectSpread(_objectSpread({}, returnStyles.itemListStyle), {}, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }
      return returnStyles;
    };
    exports.slideAnimationHandler = slideAnimationHandler;
    var slideSwipeAnimationHandler = function slideSwipeAnimationHandler2(delta, props, state, setState) {
      var returnStyles = {};
      var isHorizontal = props.axis === "horizontal";
      var childrenLength = _react.Children.count(props.children);
      var initialBoundry = 0;
      var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
      var finalBoundry = props.infiniteLoop ? (0, _utils.getPosition)(childrenLength - 1, props) - 100 : (0, _utils.getPosition)(childrenLength - 1, props);
      var axisDelta = isHorizontal ? delta.x : delta.y;
      var handledDelta = axisDelta;
      if (currentPosition === initialBoundry && axisDelta > 0) {
        handledDelta = 0;
      }
      if (currentPosition === finalBoundry && axisDelta < 0) {
        handledDelta = 0;
      }
      var position = currentPosition + 100 / (state.itemSize / handledDelta);
      var hasMoved = Math.abs(axisDelta) > props.swipeScrollTolerance;
      if (props.infiniteLoop && hasMoved) {
        if (state.selectedItem === 0 && position > -100) {
          position -= childrenLength * 100;
        } else if (state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
          position += childrenLength * 100;
        }
      }
      if (!props.preventMovementUntilSwipeScrollTolerance || hasMoved || state.swipeMovementStarted) {
        if (!state.swipeMovementStarted) {
          setState({
            swipeMovementStarted: true
          });
        }
        returnStyles.itemListStyle = (0, _utils.setPosition)(position, props.axis);
      }
      if (hasMoved && !state.cancelClick) {
        setState({
          cancelClick: true
        });
      }
      return returnStyles;
    };
    exports.slideSwipeAnimationHandler = slideSwipeAnimationHandler;
    var slideStopSwipingHandler = function slideStopSwipingHandler2(props, state) {
      var currentPosition = (0, _utils.getPosition)(state.selectedItem, props);
      var itemListStyle = (0, _utils.setPosition)(currentPosition, props.axis);
      return {
        itemListStyle
      };
    };
    exports.slideStopSwipingHandler = slideStopSwipingHandler;
    var fadeAnimationHandler = function fadeAnimationHandler2(props, state) {
      var transitionTime = props.transitionTime + "ms";
      var transitionTimingFunction = "ease-in-out";
      var slideStyle = {
        position: "absolute",
        display: "block",
        zIndex: -2,
        minHeight: "100%",
        opacity: 0,
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        transitionTimingFunction,
        msTransitionTimingFunction: transitionTimingFunction,
        MozTransitionTimingFunction: transitionTimingFunction,
        WebkitTransitionTimingFunction: transitionTimingFunction,
        OTransitionTimingFunction: transitionTimingFunction
      };
      if (!state.swiping) {
        slideStyle = _objectSpread(_objectSpread({}, slideStyle), {}, {
          WebkitTransitionDuration: transitionTime,
          MozTransitionDuration: transitionTime,
          OTransitionDuration: transitionTime,
          transitionDuration: transitionTime,
          msTransitionDuration: transitionTime
        });
      }
      return {
        slideStyle,
        selectedStyle: _objectSpread(_objectSpread({}, slideStyle), {}, {
          opacity: 1,
          position: "relative"
        }),
        prevStyle: _objectSpread({}, slideStyle)
      };
    };
    exports.fadeAnimationHandler = fadeAnimationHandler;
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js
var require_Carousel = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _reactEasySwipe = _interopRequireDefault(require_lib());
    var _cssClasses = _interopRequireDefault(require_cssClasses());
    var _Thumbs = _interopRequireDefault(require_Thumbs());
    var _document = _interopRequireDefault(require_document());
    var _window = _interopRequireDefault(require_window());
    var _utils = require_utils();
    var _animations = require_animations();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache() {
      if (typeof WeakMap !== "function")
        return null;
      var cache = /* @__PURE__ */ new WeakMap();
      _getRequireWildcardCache = function _getRequireWildcardCache2() {
        return cache;
      };
      return cache;
    }
    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache();
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _typeof(obj) {
      "@babel/helpers - typeof";
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    function _extends() {
      _extends = Object.assign || function(target) {
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
      return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
          ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
          });
        }
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p2) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
        o2.__proto__ = p3;
        return o2;
      };
      return _setPrototypeOf(o, p2);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var Carousel2 = /* @__PURE__ */ function(_React$Component) {
      _inherits(Carousel3, _React$Component);
      var _super = _createSuper(Carousel3);
      function Carousel3(props) {
        var _this;
        _classCallCheck(this, Carousel3);
        _this = _super.call(this, props);
        _defineProperty(_assertThisInitialized(_this), "thumbsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "carouselWrapperRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "listRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "itemsRef", void 0);
        _defineProperty(_assertThisInitialized(_this), "timer", void 0);
        _defineProperty(_assertThisInitialized(_this), "animationHandler", void 0);
        _defineProperty(_assertThisInitialized(_this), "setThumbsRef", function(node) {
          _this.thumbsRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setCarouselWrapperRef", function(node) {
          _this.carouselWrapperRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setListRef", function(node) {
          _this.listRef = node;
        });
        _defineProperty(_assertThisInitialized(_this), "setItemsRef", function(node, index) {
          if (!_this.itemsRef) {
            _this.itemsRef = [];
          }
          _this.itemsRef[index] = node;
        });
        _defineProperty(_assertThisInitialized(_this), "autoPlay", function() {
          if (_react.Children.count(_this.props.children) <= 1) {
            return;
          }
          _this.clearAutoPlay();
          if (!_this.props.autoPlay) {
            return;
          }
          _this.timer = setTimeout(function() {
            _this.increment();
          }, _this.props.interval);
        });
        _defineProperty(_assertThisInitialized(_this), "clearAutoPlay", function() {
          if (_this.timer)
            clearTimeout(_this.timer);
        });
        _defineProperty(_assertThisInitialized(_this), "resetAutoPlay", function() {
          _this.clearAutoPlay();
          _this.autoPlay();
        });
        _defineProperty(_assertThisInitialized(_this), "stopOnHover", function() {
          _this.setState({
            isMouseEntered: true
          }, _this.clearAutoPlay);
        });
        _defineProperty(_assertThisInitialized(_this), "startOnLeave", function() {
          _this.setState({
            isMouseEntered: false
          }, _this.autoPlay);
        });
        _defineProperty(_assertThisInitialized(_this), "isFocusWithinTheCarousel", function() {
          if (!_this.carouselWrapperRef) {
            return false;
          }
          if ((0, _document.default)().activeElement === _this.carouselWrapperRef || _this.carouselWrapperRef.contains((0, _document.default)().activeElement)) {
            return true;
          }
          return false;
        });
        _defineProperty(_assertThisInitialized(_this), "navigateWithKeyboard", function(e) {
          if (!_this.isFocusWithinTheCarousel()) {
            return;
          }
          var axis = _this.props.axis;
          var isHorizontal = axis === "horizontal";
          var keyNames = {
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37
          };
          var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
          var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;
          if (nextKey === e.keyCode) {
            _this.increment();
          } else if (prevKey === e.keyCode) {
            _this.decrement();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "updateSizes", function() {
          if (!_this.state.initialized || !_this.itemsRef || _this.itemsRef.length === 0) {
            return;
          }
          var isHorizontal = _this.props.axis === "horizontal";
          var firstItem = _this.itemsRef[0];
          if (!firstItem) {
            return;
          }
          var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;
          _this.setState({
            itemSize
          });
          if (_this.thumbsRef) {
            _this.thumbsRef.updateSizes();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "setMountState", function() {
          _this.setState({
            hasMount: true
          });
          _this.updateSizes();
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickItem", function(index, item) {
          if (_react.Children.count(_this.props.children) === 0) {
            return;
          }
          if (_this.state.cancelClick) {
            _this.setState({
              cancelClick: false
            });
            return;
          }
          _this.props.onClickItem(index, item);
          if (index !== _this.state.selectedItem) {
            _this.setState({
              selectedItem: index
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "handleOnChange", function(index, item) {
          if (_react.Children.count(_this.props.children) <= 1) {
            return;
          }
          _this.props.onChange(index, item);
        });
        _defineProperty(_assertThisInitialized(_this), "handleClickThumb", function(index, item) {
          _this.props.onClickThumb(index, item);
          _this.moveTo(index);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeStart", function(event) {
          _this.setState({
            swiping: true
          });
          _this.props.onSwipeStart(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeEnd", function(event) {
          _this.setState({
            swiping: false,
            cancelClick: false,
            swipeMovementStarted: false
          });
          _this.props.onSwipeEnd(event);
          _this.clearAutoPlay();
          if (_this.state.autoPlay) {
            _this.autoPlay();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeMove", function(delta, event) {
          _this.props.onSwipeMove(event);
          var animationHandlerResponse = _this.props.swipeAnimationHandler(delta, _this.props, _this.state, _this.setState.bind(_assertThisInitialized(_this)));
          _this.setState(_objectSpread({}, animationHandlerResponse));
          return !!Object.keys(animationHandlerResponse).length;
        });
        _defineProperty(_assertThisInitialized(_this), "decrement", function() {
          var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          _this.moveTo(_this.state.selectedItem - (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "increment", function() {
          var positions = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          _this.moveTo(_this.state.selectedItem + (typeof positions === "number" ? positions : 1));
        });
        _defineProperty(_assertThisInitialized(_this), "moveTo", function(position) {
          if (typeof position !== "number") {
            return;
          }
          var lastPosition = _react.Children.count(_this.props.children) - 1;
          if (position < 0) {
            position = _this.props.infiniteLoop ? lastPosition : 0;
          }
          if (position > lastPosition) {
            position = _this.props.infiniteLoop ? 0 : lastPosition;
          }
          _this.selectItem({
            selectedItem: position
          });
          if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
            _this.resetAutoPlay();
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onClickNext", function() {
          _this.increment(1);
        });
        _defineProperty(_assertThisInitialized(_this), "onClickPrev", function() {
          _this.decrement(1);
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeForward", function() {
          _this.increment(1);
          if (_this.props.emulateTouch) {
            _this.setState({
              cancelClick: true
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "onSwipeBackwards", function() {
          _this.decrement(1);
          if (_this.props.emulateTouch) {
            _this.setState({
              cancelClick: true
            });
          }
        });
        _defineProperty(_assertThisInitialized(_this), "changeItem", function(newIndex) {
          return function(e) {
            if (!(0, _utils.isKeyboardEvent)(e) || e.key === "Enter") {
              _this.moveTo(newIndex);
            }
          };
        });
        _defineProperty(_assertThisInitialized(_this), "selectItem", function(state) {
          _this.setState(_objectSpread({
            previousItem: _this.state.selectedItem
          }, state), function() {
            _this.setState(_this.animationHandler(_this.props, _this.state));
          });
          _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
        });
        _defineProperty(_assertThisInitialized(_this), "getInitialImage", function() {
          var selectedItem = _this.props.selectedItem;
          var item = _this.itemsRef && _this.itemsRef[selectedItem];
          var images = item && item.getElementsByTagName("img") || [];
          return images[0];
        });
        _defineProperty(_assertThisInitialized(_this), "getVariableItemHeight", function(position) {
          var item = _this.itemsRef && _this.itemsRef[position];
          if (_this.state.hasMount && item && item.children.length) {
            var slideImages = item.children[0].getElementsByTagName("img") || [];
            if (slideImages.length > 0) {
              var image = slideImages[0];
              if (!image.complete) {
                var onImageLoad = function onImageLoad2() {
                  _this.forceUpdate();
                  image.removeEventListener("load", onImageLoad2);
                };
                image.addEventListener("load", onImageLoad);
              }
            }
            var displayItem = slideImages[0] || item.children[0];
            var height = displayItem.clientHeight;
            return height > 0 ? height : null;
          }
          return null;
        });
        var initState = {
          initialized: false,
          previousItem: props.selectedItem,
          selectedItem: props.selectedItem,
          hasMount: false,
          isMouseEntered: false,
          autoPlay: props.autoPlay,
          swiping: false,
          swipeMovementStarted: false,
          cancelClick: false,
          itemSize: 1,
          itemListStyle: {},
          slideStyle: {},
          selectedStyle: {},
          prevStyle: {}
        };
        _this.animationHandler = typeof props.animationHandler === "function" && props.animationHandler || props.animationHandler === "fade" && _animations.fadeAnimationHandler || _animations.slideAnimationHandler;
        _this.state = _objectSpread(_objectSpread({}, initState), _this.animationHandler(props, initState));
        return _this;
      }
      _createClass(Carousel3, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!this.props.children) {
            return;
          }
          this.setupCarousel();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          if (!prevProps.children && this.props.children && !this.state.initialized) {
            this.setupCarousel();
          }
          if (!prevProps.autoFocus && this.props.autoFocus) {
            this.forceFocus();
          }
          if (prevState.swiping && !this.state.swiping) {
            this.setState(_objectSpread({}, this.props.stopSwipingHandler(this.props, this.state)));
          }
          if (prevProps.selectedItem !== this.props.selectedItem || prevProps.centerMode !== this.props.centerMode) {
            this.updateSizes();
            this.moveTo(this.props.selectedItem);
          }
          if (prevProps.autoPlay !== this.props.autoPlay) {
            if (this.props.autoPlay) {
              this.setupAutoPlay();
            } else {
              this.destroyAutoPlay();
            }
            this.setState({
              autoPlay: this.props.autoPlay
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.destroyCarousel();
        }
      }, {
        key: "setupCarousel",
        value: function setupCarousel() {
          var _this2 = this;
          this.bindEvents();
          if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
            this.setupAutoPlay();
          }
          if (this.props.autoFocus) {
            this.forceFocus();
          }
          this.setState({
            initialized: true
          }, function() {
            var initialImage = _this2.getInitialImage();
            if (initialImage && !initialImage.complete) {
              initialImage.addEventListener("load", _this2.setMountState);
            } else {
              _this2.setMountState();
            }
          });
        }
      }, {
        key: "destroyCarousel",
        value: function destroyCarousel() {
          if (this.state.initialized) {
            this.unbindEvents();
            this.destroyAutoPlay();
          }
        }
      }, {
        key: "setupAutoPlay",
        value: function setupAutoPlay() {
          this.autoPlay();
          var carouselWrapper = this.carouselWrapperRef;
          if (this.props.stopOnHover && carouselWrapper) {
            carouselWrapper.addEventListener("mouseenter", this.stopOnHover);
            carouselWrapper.addEventListener("mouseleave", this.startOnLeave);
          }
        }
      }, {
        key: "destroyAutoPlay",
        value: function destroyAutoPlay() {
          this.clearAutoPlay();
          var carouselWrapper = this.carouselWrapperRef;
          if (this.props.stopOnHover && carouselWrapper) {
            carouselWrapper.removeEventListener("mouseenter", this.stopOnHover);
            carouselWrapper.removeEventListener("mouseleave", this.startOnLeave);
          }
        }
      }, {
        key: "bindEvents",
        value: function bindEvents() {
          (0, _window.default)().addEventListener("resize", this.updateSizes);
          (0, _window.default)().addEventListener("DOMContentLoaded", this.updateSizes);
          if (this.props.useKeyboardArrows) {
            (0, _document.default)().addEventListener("keydown", this.navigateWithKeyboard);
          }
        }
      }, {
        key: "unbindEvents",
        value: function unbindEvents() {
          (0, _window.default)().removeEventListener("resize", this.updateSizes);
          (0, _window.default)().removeEventListener("DOMContentLoaded", this.updateSizes);
          var initialImage = this.getInitialImage();
          if (initialImage) {
            initialImage.removeEventListener("load", this.setMountState);
          }
          if (this.props.useKeyboardArrows) {
            (0, _document.default)().removeEventListener("keydown", this.navigateWithKeyboard);
          }
        }
      }, {
        key: "forceFocus",
        value: function forceFocus() {
          var _this$carouselWrapper;
          (_this$carouselWrapper = this.carouselWrapperRef) === null || _this$carouselWrapper === void 0 ? void 0 : _this$carouselWrapper.focus();
        }
      }, {
        key: "renderItems",
        value: function renderItems(isClone) {
          var _this3 = this;
          if (!this.props.children) {
            return [];
          }
          return _react.Children.map(this.props.children, function(item, index) {
            var isSelected = index === _this3.state.selectedItem;
            var isPrevious = index === _this3.state.previousItem;
            var style = isSelected && _this3.state.selectedStyle || isPrevious && _this3.state.prevStyle || _this3.state.slideStyle || {};
            if (_this3.props.centerMode && _this3.props.axis === "horizontal") {
              style = _objectSpread(_objectSpread({}, style), {}, {
                minWidth: _this3.props.centerSlidePercentage + "%"
              });
            }
            if (_this3.state.swiping && _this3.state.swipeMovementStarted) {
              style = _objectSpread(_objectSpread({}, style), {}, {
                pointerEvents: "none"
              });
            }
            var slideProps = {
              ref: function ref(e) {
                return _this3.setItemsRef(e, index);
              },
              key: "itemKey" + index + (isClone ? "clone" : ""),
              className: _cssClasses.default.ITEM(true, index === _this3.state.selectedItem, index === _this3.state.previousItem),
              onClick: _this3.handleClickItem.bind(_this3, index, item),
              style
            };
            return /* @__PURE__ */ _react.default.createElement("li", slideProps, _this3.props.renderItem(item, {
              isSelected: index === _this3.state.selectedItem,
              isPrevious: index === _this3.state.previousItem
            }));
          });
        }
      }, {
        key: "renderControls",
        value: function renderControls() {
          var _this4 = this;
          var _this$props = this.props, showIndicators = _this$props.showIndicators, labels = _this$props.labels, renderIndicator = _this$props.renderIndicator, children = _this$props.children;
          if (!showIndicators) {
            return null;
          }
          return /* @__PURE__ */ _react.default.createElement("ul", {
            className: "control-dots"
          }, _react.Children.map(children, function(_3, index) {
            return renderIndicator && renderIndicator(_this4.changeItem(index), index === _this4.state.selectedItem, index, labels.item);
          }));
        }
      }, {
        key: "renderStatus",
        value: function renderStatus() {
          if (!this.props.showStatus) {
            return null;
          }
          return /* @__PURE__ */ _react.default.createElement("p", {
            className: "carousel-status"
          }, this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children)));
        }
      }, {
        key: "renderThumbs",
        value: function renderThumbs() {
          if (!this.props.showThumbs || !this.props.children || _react.Children.count(this.props.children) === 0) {
            return null;
          }
          return /* @__PURE__ */ _react.default.createElement(_Thumbs.default, {
            ref: this.setThumbsRef,
            onSelectItem: this.handleClickThumb,
            selectedItem: this.state.selectedItem,
            transitionTime: this.props.transitionTime,
            thumbWidth: this.props.thumbWidth,
            labels: this.props.labels,
            emulateTouch: this.props.emulateTouch
          }, this.props.renderThumbs(this.props.children));
        }
      }, {
        key: "render",
        value: function render() {
          var _this5 = this;
          if (!this.props.children || _react.Children.count(this.props.children) === 0) {
            return null;
          }
          var isSwipeable = this.props.swipeable && _react.Children.count(this.props.children) > 1;
          var isHorizontal = this.props.axis === "horizontal";
          var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1;
          var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop) || false;
          var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop) || false;
          var itemsClone = this.renderItems(true);
          var firstClone = itemsClone.shift();
          var lastClone = itemsClone.pop();
          var swiperProps = {
            className: _cssClasses.default.SLIDER(true, this.state.swiping),
            onSwipeMove: this.onSwipeMove,
            onSwipeStart: this.onSwipeStart,
            onSwipeEnd: this.onSwipeEnd,
            style: this.state.itemListStyle,
            tolerance: this.props.swipeScrollTolerance
          };
          var containerStyles = {};
          if (isHorizontal) {
            swiperProps.onSwipeLeft = this.onSwipeForward;
            swiperProps.onSwipeRight = this.onSwipeBackwards;
            if (this.props.dynamicHeight) {
              var itemHeight = this.getVariableItemHeight(this.state.selectedItem);
              containerStyles.height = itemHeight || "auto";
            }
          } else {
            swiperProps.onSwipeUp = this.props.verticalSwipe === "natural" ? this.onSwipeBackwards : this.onSwipeForward;
            swiperProps.onSwipeDown = this.props.verticalSwipe === "natural" ? this.onSwipeForward : this.onSwipeBackwards;
            swiperProps.style = _objectSpread(_objectSpread({}, swiperProps.style), {}, {
              height: this.state.itemSize
            });
            containerStyles.height = this.state.itemSize;
          }
          return /* @__PURE__ */ _react.default.createElement("div", {
            "aria-label": this.props.ariaLabel,
            className: _cssClasses.default.ROOT(this.props.className),
            ref: this.setCarouselWrapperRef,
            tabIndex: this.props.useKeyboardArrows ? 0 : void 0
          }, /* @__PURE__ */ _react.default.createElement("div", {
            className: _cssClasses.default.CAROUSEL(true),
            style: {
              width: this.props.width
            }
          }, this.renderControls(), this.props.renderArrowPrev(this.onClickPrev, hasPrev, this.props.labels.leftArrow), /* @__PURE__ */ _react.default.createElement("div", {
            className: _cssClasses.default.WRAPPER(true, this.props.axis),
            style: containerStyles
          }, isSwipeable ? /* @__PURE__ */ _react.default.createElement(_reactEasySwipe.default, _extends({
            tagName: "ul",
            innerRef: this.setListRef
          }, swiperProps, {
            allowMouseEvents: this.props.emulateTouch
          }), this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone) : /* @__PURE__ */ _react.default.createElement("ul", {
            className: _cssClasses.default.SLIDER(true, this.state.swiping),
            ref: function ref(node) {
              return _this5.setListRef(node);
            },
            style: this.state.itemListStyle || {}
          }, this.props.infiniteLoop && lastClone, this.renderItems(), this.props.infiniteLoop && firstClone)), this.props.renderArrowNext(this.onClickNext, hasNext, this.props.labels.rightArrow), this.renderStatus()), this.renderThumbs());
        }
      }]);
      return Carousel3;
    }(_react.default.Component);
    exports.default = Carousel2;
    _defineProperty(Carousel2, "displayName", "Carousel");
    _defineProperty(Carousel2, "defaultProps", {
      ariaLabel: void 0,
      axis: "horizontal",
      centerSlidePercentage: 80,
      interval: 3e3,
      labels: {
        leftArrow: "previous slide / item",
        rightArrow: "next slide / item",
        item: "slide item"
      },
      onClickItem: _utils.noop,
      onClickThumb: _utils.noop,
      onChange: _utils.noop,
      onSwipeStart: function onSwipeStart() {
      },
      onSwipeEnd: function onSwipeEnd() {
      },
      onSwipeMove: function onSwipeMove() {
        return false;
      },
      preventMovementUntilSwipeScrollTolerance: false,
      renderArrowPrev: function renderArrowPrev(onClickHandler, hasPrev, label) {
        return /* @__PURE__ */ _react.default.createElement("button", {
          type: "button",
          "aria-label": label,
          className: _cssClasses.default.ARROW_PREV(!hasPrev),
          onClick: onClickHandler
        });
      },
      renderArrowNext: function renderArrowNext(onClickHandler, hasNext, label) {
        return /* @__PURE__ */ _react.default.createElement("button", {
          type: "button",
          "aria-label": label,
          className: _cssClasses.default.ARROW_NEXT(!hasNext),
          onClick: onClickHandler
        });
      },
      renderIndicator: function renderIndicator(onClickHandler, isSelected, index, label) {
        return /* @__PURE__ */ _react.default.createElement("li", {
          className: _cssClasses.default.DOT(isSelected),
          onClick: onClickHandler,
          onKeyDown: onClickHandler,
          value: index,
          key: index,
          role: "button",
          tabIndex: 0,
          "aria-label": "".concat(label, " ").concat(index + 1)
        });
      },
      renderItem: function renderItem(item) {
        return item;
      },
      renderThumbs: function renderThumbs(children) {
        var images = _react.Children.map(children, function(item) {
          var img = item;
          if (item.type !== "img") {
            img = _react.Children.toArray(item.props.children).find(function(children2) {
              return children2.type === "img";
            });
          }
          if (!img) {
            return void 0;
          }
          return img;
        });
        if (images.filter(function(image) {
          return image;
        }).length === 0) {
          console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md");
          return [];
        }
        return images;
      },
      statusFormatter: _utils.defaultStatusFormatter,
      selectedItem: 0,
      showArrows: true,
      showIndicators: true,
      showStatus: true,
      showThumbs: true,
      stopOnHover: true,
      swipeScrollTolerance: 5,
      swipeable: true,
      transitionTime: 350,
      verticalSwipe: "standard",
      width: "100%",
      animationHandler: "slide",
      swipeAnimationHandler: _animations.slideSwipeAnimationHandler,
      stopSwipingHandler: _animations.slideStopSwipingHandler
    });
  }
});

// node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js
var require_types = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/components/Carousel/types.js"() {
    "use strict";
  }
});

// node_modules/react-responsive-carousel/lib/js/index.js
var require_js = __commonJS({
  "node_modules/react-responsive-carousel/lib/js/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Carousel", {
      enumerable: true,
      get: function get() {
        return _Carousel.default;
      }
    });
    Object.defineProperty(exports, "CarouselProps", {
      enumerable: true,
      get: function get() {
        return _types.CarouselProps;
      }
    });
    Object.defineProperty(exports, "Thumbs", {
      enumerable: true,
      get: function get() {
        return _Thumbs.default;
      }
    });
    var _Carousel = _interopRequireDefault(require_Carousel());
    var _types = require_types();
    var _Thumbs = _interopRequireDefault(require_Thumbs());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/lodash/now.js
var require_now = __commonJS({
  "node_modules/lodash/now.js"(exports, module) {
    var root = require_root();
    var now = function() {
      return root.Date.now();
    };
    module.exports = now;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/debounce.js
var require_debounce = __commonJS({
  "node_modules/lodash/debounce.js"(exports, module) {
    var isObject = require_isObject();
    var now = require_now();
    var toNumber = require_toNumber();
    var FUNC_ERROR_TEXT = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce3(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    module.exports = debounce3;
  }
});

// node_modules/lodash/_baseClamp.js
var require_baseClamp = __commonJS({
  "node_modules/lodash/_baseClamp.js"(exports, module) {
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== void 0) {
          number = number <= upper ? number : upper;
        }
        if (lower !== void 0) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }
    module.exports = baseClamp;
  }
});

// node_modules/lodash/clamp.js
var require_clamp = __commonJS({
  "node_modules/lodash/clamp.js"(exports, module) {
    var baseClamp = require_baseClamp();
    var toNumber = require_toNumber();
    function clamp5(number, lower, upper) {
      if (upper === void 0) {
        upper = lower;
        lower = void 0;
      }
      if (upper !== void 0) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== void 0) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }
    module.exports = clamp5;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_arrayIncludesWith.js
var require_arrayIncludesWith = __commonJS({
  "node_modules/lodash/_arrayIncludesWith.js"(exports, module) {
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    module.exports = arrayIncludesWith;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_createSet.js
var require_createSet = __commonJS({
  "node_modules/lodash/_createSet.js"(exports, module) {
    var Set2 = require_Set();
    var noop = require_noop();
    var setToArray = require_setToArray();
    var INFINITY = 1 / 0;
    var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values) {
      return new Set2(values);
    };
    module.exports = createSet;
  }
});

// node_modules/lodash/_baseUniq.js
var require_baseUniq = __commonJS({
  "node_modules/lodash/_baseUniq.js"(exports, module) {
    var SetCache = require_SetCache();
    var arrayIncludes = require_arrayIncludes();
    var arrayIncludesWith = require_arrayIncludesWith();
    var cacheHas = require_cacheHas();
    var createSet = require_createSet();
    var setToArray = require_setToArray();
    var LARGE_ARRAY_SIZE = 200;
    function baseUniq(array, iteratee, comparator) {
      var index = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
      if (comparator) {
        isCommon = false;
        includes = arrayIncludesWith;
      } else if (length >= LARGE_ARRAY_SIZE) {
        var set = iteratee ? null : createSet(array);
        if (set) {
          return setToArray(set);
        }
        isCommon = false;
        includes = cacheHas;
        seen = new SetCache();
      } else {
        seen = iteratee ? [] : result;
      }
      outer:
        while (++index < length) {
          var value = array[index], computed = iteratee ? iteratee(value) : value;
          value = comparator || value !== 0 ? value : 0;
          if (isCommon && computed === computed) {
            var seenIndex = seen.length;
            while (seenIndex--) {
              if (seen[seenIndex] === computed) {
                continue outer;
              }
            }
            if (iteratee) {
              seen.push(computed);
            }
            result.push(value);
          } else if (!includes(seen, computed, comparator)) {
            if (seen !== result) {
              seen.push(computed);
            }
            result.push(value);
          }
        }
      return result;
    }
    module.exports = baseUniq;
  }
});

// node_modules/lodash/uniq.js
var require_uniq = __commonJS({
  "node_modules/lodash/uniq.js"(exports, module) {
    var baseUniq = require_baseUniq();
    function uniq2(array) {
      return array && array.length ? baseUniq(array) : [];
    }
    module.exports = uniq2;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten2(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten2;
  }
});

// node_modules/lodash/_baseRange.js
var require_baseRange = __commonJS({
  "node_modules/lodash/_baseRange.js"(exports, module) {
    var nativeCeil = Math.ceil;
    var nativeMax = Math.max;
    function baseRange(start, end, step, fromRight) {
      var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
      while (length--) {
        result[fromRight ? length : ++index] = start;
        start += step;
      }
      return result;
    }
    module.exports = baseRange;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/_createRange.js
var require_createRange = __commonJS({
  "node_modules/lodash/_createRange.js"(exports, module) {
    var baseRange = require_baseRange();
    var isIterateeCall = require_isIterateeCall();
    var toFinite = require_toFinite();
    function createRange(fromRight) {
      return function(start, end, step) {
        if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
          end = step = void 0;
        }
        start = toFinite(start);
        if (end === void 0) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        step = step === void 0 ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step, fromRight);
      };
    }
    module.exports = createRange;
  }
});

// node_modules/lodash/range.js
var require_range = __commonJS({
  "node_modules/lodash/range.js"(exports, module) {
    var createRange = require_createRange();
    var range2 = createRange();
    module.exports = range2;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_arrayAggregator.js
var require_arrayAggregator = __commonJS({
  "node_modules/lodash/_arrayAggregator.js"(exports, module) {
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    module.exports = arrayAggregator;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_baseForOwn.js
var require_baseForOwn = __commonJS({
  "node_modules/lodash/_baseForOwn.js"(exports, module) {
    var baseFor = require_baseFor();
    var keys = require_keys();
    function baseForOwn(object, iteratee) {
      return object && baseFor(object, iteratee, keys);
    }
    module.exports = baseForOwn;
  }
});

// node_modules/lodash/_createBaseEach.js
var require_createBaseEach = __commonJS({
  "node_modules/lodash/_createBaseEach.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    function createBaseEach(eachFunc, fromRight) {
      return function(collection, iteratee) {
        if (collection == null) {
          return collection;
        }
        if (!isArrayLike(collection)) {
          return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while (fromRight ? index-- : ++index < length) {
          if (iteratee(iterable[index], index, iterable) === false) {
            break;
          }
        }
        return collection;
      };
    }
    module.exports = createBaseEach;
  }
});

// node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  "node_modules/lodash/_baseEach.js"(exports, module) {
    var baseForOwn = require_baseForOwn();
    var createBaseEach = require_createBaseEach();
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// node_modules/lodash/_baseAggregator.js
var require_baseAggregator = __commonJS({
  "node_modules/lodash/_baseAggregator.js"(exports, module) {
    var baseEach = require_baseEach();
    function baseAggregator(collection, setter, iteratee, accumulator) {
      baseEach(collection, function(value, key, collection2) {
        setter(accumulator, value, iteratee(value), collection2);
      });
      return accumulator;
    }
    module.exports = baseAggregator;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array = root.Uint8Array;
    module.exports = Uint8Array;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap2 = getNative(root, "WeakMap");
    module.exports = WeakMap2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap2 = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap2);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/_createAggregator.js
var require_createAggregator = __commonJS({
  "node_modules/lodash/_createAggregator.js"(exports, module) {
    var arrayAggregator = require_arrayAggregator();
    var baseAggregator = require_baseAggregator();
    var baseIteratee = require_baseIteratee();
    var isArray = require_isArray();
    function createAggregator(setter, initializer) {
      return function(collection, iteratee) {
        var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
        return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
      };
    }
    module.exports = createAggregator;
  }
});

// node_modules/lodash/groupBy.js
var require_groupBy = __commonJS({
  "node_modules/lodash/groupBy.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var createAggregator = require_createAggregator();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var groupBy2 = createAggregator(function(result, value, key) {
      if (hasOwnProperty.call(result, key)) {
        result[key].push(value);
      } else {
        baseAssignValue(result, key, [value]);
      }
    });
    module.exports = groupBy2;
  }
});

// node_modules/lodash/throttle.js
var require_throttle = __commonJS({
  "node_modules/lodash/throttle.js"(exports, module) {
    var debounce3 = require_debounce();
    var isObject = require_isObject();
    var FUNC_ERROR_TEXT = "Expected a function";
    function throttle2(func, wait, options) {
      var leading = true, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      return debounce3(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
      });
    }
    module.exports = throttle2;
  }
});

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/image-overlay-editor.js
var React2 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/image-overlay-editor-style.js
var ImageOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "ImageOverlayEditorStyle",
  class: "gdg-i2iowwq",
  propsAsIs: false
});

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/image-overlay-editor.js
var import_react_responsive_carousel = __toESM(require_js(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/common/utils.js
var React = __toESM(require_react(), 1);
var import_debounce = __toESM(require_debounce(), 1);
function useEventListener(eventName, handler, element, passive, capture = false) {
  const savedHandler = React.useRef();
  savedHandler.current = handler;
  React.useEffect(
    () => {
      if (element === null || element.addEventListener === void 0)
        return;
      const el = element;
      const eventListener = (event) => {
        savedHandler.current?.call(el, event);
      };
      el.addEventListener(eventName, eventListener, { passive, capture });
      return () => {
        el.removeEventListener(eventName, eventListener, { capture });
      };
    },
    [eventName, element, passive, capture]
  );
}
function whenDefined(obj, result) {
  return obj === void 0 ? void 0 : result;
}
var PI = Math.PI;
function degreesToRadians(degrees) {
  return degrees * PI / 180;
}
var getSquareBB = (posX, posY, squareSideLength) => ({
  x1: posX - squareSideLength / 2,
  y1: posY - squareSideLength / 2,
  x2: posX + squareSideLength / 2,
  y2: posY + squareSideLength / 2
});
var getSquareXPosFromAlign = (alignment, containerX, containerWidth, horizontalPadding, squareWidth) => {
  switch (alignment) {
    case "left":
      return Math.floor(containerX) + horizontalPadding + squareWidth / 2;
    case "center":
      return Math.floor(containerX + containerWidth / 2);
    case "right":
      return Math.floor(containerX + containerWidth) - horizontalPadding - squareWidth / 2;
  }
};
var getSquareWidth = (maxSize, containerHeight, verticalPadding) => Math.min(maxSize, containerHeight - verticalPadding * 2);
var pointIsWithinBB = (x2, y2, bb) => bb.x1 <= x2 && x2 <= bb.x2 && bb.y1 <= y2 && y2 <= bb.y2;
var EditPencil = (props) => {
  const fg = props.fgColor ?? "currentColor";
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M12.7073 7.05029C7.87391 11.8837 10.4544 9.30322 6.03024 13.7273C5.77392 13.9836 5.58981 14.3071 5.50189 14.6587L4.52521 18.5655C4.38789 19.1148 4.88543 19.6123 5.43472 19.475L9.34146 18.4983C9.69313 18.4104 10.0143 18.2286 10.2706 17.9722L16.9499 11.2929", stroke: fg, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" }),
    React.createElement("path", { d: "M20.4854 4.92901L19.0712 3.5148C18.2901 2.73375 17.0238 2.73375 16.2428 3.5148L14.475 5.28257C15.5326 7.71912 16.4736 8.6278 18.7176 9.52521L20.4854 7.75744C21.2665 6.97639 21.2665 5.71006 20.4854 4.92901Z", stroke: fg, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" })
  );
};
var Checkmark = (props) => {
  const fg = props.fgColor ?? "currentColor";
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    React.createElement("path", { d: "M19 6L10.3802 17L5.34071 11.8758", vectorEffect: "non-scaling-stroke", stroke: fg, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  );
};
function useDebouncedMemo(factory, deps, time) {
  const [state, setState] = React.useState(factory);
  const mountedRef = React.useRef(true);
  React.useEffect(() => () => {
    mountedRef.current = false;
  }, []);
  const debouncedSetState = React.useRef((0, import_debounce.default)((x2) => {
    if (mountedRef.current) {
      setState(x2);
    }
  }, time));
  React.useLayoutEffect(() => {
    if (mountedRef.current) {
      debouncedSetState.current(() => factory());
    }
  }, deps);
  return state;
}
var rtlRange = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
var ltrRange = "A-Za-z\xC0-\xD6\xD8-\xF6\xF8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
var rtl = new RegExp("^[^" + ltrRange + "]*[" + rtlRange + "]");
function direction(value) {
  return rtl.test(value) ? "rtl" : "not-rtl";
}
var scrollbarWidthCache = void 0;
function getScrollBarWidth() {
  if (typeof document === "undefined")
    return 0;
  if (scrollbarWidthCache !== void 0)
    return scrollbarWidthCache;
  const inner = document.createElement("p");
  inner.style.width = "100%";
  inner.style.height = "200px";
  const outer = document.createElement("div");
  outer.id = "testScrollbar";
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.append(inner);
  document.body.append(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = "scroll";
  let w22 = inner.offsetWidth;
  if (w1 === w22) {
    w22 = outer.clientWidth;
  }
  outer.remove();
  scrollbarWidthCache = w1 - w22;
  return scrollbarWidthCache;
}
var empty = Symbol();
function useStateWithReactiveInput(inputState) {
  const inputStateRef = React.useRef([empty, inputState]);
  if (inputStateRef.current[1] !== inputState) {
    inputStateRef.current[0] = inputState;
  }
  inputStateRef.current[1] = inputState;
  const [state, setState] = React.useState(inputState);
  const [, forceRender] = React.useState();
  const setStateOuter = React.useCallback((nv) => {
    const s = inputStateRef.current[0];
    if (s !== empty) {
      nv = typeof nv === "function" ? nv(s) : nv;
      if (nv === s)
        return;
    }
    if (s !== empty)
      forceRender({});
    setState((pv) => {
      if (typeof nv === "function") {
        return nv(s === empty ? pv : s);
      }
      return nv;
    });
    inputStateRef.current[0] = empty;
  }, []);
  const onEmpty = React.useCallback(() => {
    inputStateRef.current[0] = empty;
    forceRender({});
  }, []);
  return [inputStateRef.current[0] === empty ? state : inputStateRef.current[0], setStateOuter, onEmpty];
}
function makeAccessibilityStringForArray(arr) {
  if (arr.length === 0) {
    return "";
  }
  let index = 0;
  let count = 0;
  for (const str of arr) {
    count += str.length;
    if (count > 1e4)
      break;
    index++;
  }
  return arr.slice(0, index).join(", ");
}
function useDeepMemo(value) {
  const ref = React.useRef(value);
  if (!deepEqual(value, ref.current)) {
    ref.current = value;
  }
  return ref.current;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/image-overlay-editor.js
var ImageOverlayEditor = (p2) => {
  const { urls, canWrite, onEditClick, renderImage } = p2;
  const filtered = urls.filter((u) => u !== "");
  if (filtered.length === 0) {
    return null;
  }
  const allowMove = filtered.length > 1;
  return React2.createElement(
    ImageOverlayEditorStyle,
    { "data-testid": "GDG-default-image-overlay-editor" },
    React2.createElement(import_react_responsive_carousel.Carousel, { showArrows: allowMove, showThumbs: false, swipeable: allowMove, emulateTouch: allowMove, infiniteLoop: allowMove }, filtered.map((url) => {
      const innerContent = renderImage?.(url) ?? React2.createElement("img", { draggable: false, src: url });
      return React2.createElement("div", { className: "gdg-centering-container", key: url }, innerContent);
    })),
    canWrite && onEditClick && React2.createElement(
      "button",
      { className: "gdg-edit-icon", onClick: onEditClick },
      React2.createElement(EditPencil, null)
    )
  );
};

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/markdown-div/markdown-div.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/marked/lib/marked.esm.js
function L() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var T = L();
function G(l3) {
  T = l3;
}
var C = { exec: () => null };
function k(l3, e = "") {
  let t = typeof l3 == "string" ? l3 : l3.source, n = { replace: (r, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(m.caret, "$1"), t = t.replace(r, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var xe = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return false;
  }
})();
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}#`), htmlBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}<(?:[a-z].*>|!--)`, "i") };
var be = /^(?:[ \t]*(?:\n|$))+/;
var Re = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Te = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var E = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var Oe = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var F = /(?:[*+-]|\d{1,9}[.)])/;
var se = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var ie = k(se).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var we = k(se).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var ye = /^[^\n]+/;
var Q = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var Pe = k(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var Se = k(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, F).getRegex();
var v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var $e = k("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var oe = k(j).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var _e = k(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", oe).getRegex();
var K = { blockquote: _e, code: Re, def: Pe, fences: Te, heading: Oe, hr: E, html: $e, lheading: ie, list: Se, newline: be, paragraph: oe, table: C, text: ye };
var ne = k("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var Le = { ...K, lheading: we, table: ne, paragraph: k(j).replace("hr", E).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ne).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex() };
var Me = { ...K, html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: C, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: k(j).replace("hr", E).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ie).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var ze = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var Ae = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var ae = /^( {2,}|\\)\n(?!\s*$)/;
var Ce = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var D = /[\p{P}\p{S}]/u;
var W = /[\s\p{P}\p{S}]/u;
var le = /[^\s\p{P}\p{S}]/u;
var Ee = k(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, W).getRegex();
var ue = /(?!~)[\p{P}\p{S}]/u;
var Ie = /(?!~)[\s\p{P}\p{S}]/u;
var Be = /(?:[^\s\p{P}\p{S}]|~)/u;
var qe = k(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", xe ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var pe = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var ve = k(pe, "u").replace(/punct/g, D).getRegex();
var De = k(pe, "u").replace(/punct/g, ue).getRegex();
var ce = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var He = k(ce, "gu").replace(/notPunctSpace/g, le).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Ze = k(ce, "gu").replace(/notPunctSpace/g, Be).replace(/punctSpace/g, Ie).replace(/punct/g, ue).getRegex();
var Ge = k("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, le).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Ne = k(/\\(punct)/, "gu").replace(/punct/g, D).getRegex();
var Fe = k(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var je = k(U).replace("(?:-->|$)", "-->").getRegex();
var Qe = k("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", je).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/;
var Ue = k(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var he = k(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex();
var ke = k(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex();
var Ke = k("reflink|nolink(?!\\()", "g").replace("reflink", he).replace("nolink", ke).getRegex();
var re = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var X = { _backpedal: C, anyPunctuation: Ne, autolink: Fe, blockSkip: qe, br: ae, code: Ae, del: C, emStrongLDelim: ve, emStrongRDelimAst: He, emStrongRDelimUnd: Ge, escape: ze, link: Ue, nolink: ke, punctuation: Ee, reflink: he, reflinkSearch: Ke, tag: Qe, text: Ce, url: C };
var We = { ...X, link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(), reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex() };
var N = { ...X, emStrongRDelimAst: Ze, emStrongLDelim: De, url: k(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", re).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: k(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", re).getRegex() };
var Xe = { ...N, br: k(ae).replace("{2,}", "*").getRegex(), text: k(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var I = { normal: K, gfm: Le, pedantic: Me };
var M = { normal: X, gfm: N, breaks: Xe, pedantic: We };
var Je = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var de = (l3) => Je[l3];
function w(l3, e) {
  if (e) {
    if (m.escapeTest.test(l3))
      return l3.replace(m.escapeReplace, de);
  } else if (m.escapeTestNoEncode.test(l3))
    return l3.replace(m.escapeReplaceNoEncode, de);
  return l3;
}
function J(l3) {
  try {
    l3 = encodeURI(l3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function V(l3, e) {
  let t = l3.replace(m.findPipe, (i, s, a) => {
    let o = false, u = s;
    for (; --u >= 0 && a[u] === "\\"; )
      o = !o;
    return o ? "|" : " |";
  }), n = t.split(m.splitPipe), r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e)
    if (n.length > e)
      n.splice(e);
    else
      for (; n.length < e; )
        n.push("");
  for (; r < n.length; r++)
    n[r] = n[r].trim().replace(m.slashPipe, "|");
  return n;
}
function z(l3, e, t) {
  let n = l3.length;
  if (n === 0)
    return "";
  let r = 0;
  for (; r < n; ) {
    let i = l3.charAt(n - r - 1);
    if (i === e && !t)
      r++;
    else if (i !== e && t)
      r++;
    else
      break;
  }
  return l3.slice(0, n - r);
}
function ge(l3, e) {
  if (l3.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let n = 0; n < l3.length; n++)
    if (l3[n] === "\\")
      n++;
    else if (l3[n] === e[0])
      t++;
    else if (l3[n] === e[1] && (t--, t < 0))
      return n;
  return t > 0 ? -2 : -1;
}
function fe(l3, e, t, n, r) {
  let i = e.href, s = e.title || null, a = l3[1].replace(r.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let o = { type: l3[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: a, tokens: n.inlineTokens(a) };
  return n.state.inLink = false, o;
}
function Ve(l3, e, t) {
  let n = l3.match(t.other.indentCodeCompensation);
  if (n === null)
    return e;
  let r = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(t.other.beginningSpace);
    if (s === null)
      return i;
    let [a] = s;
    return a.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
var y = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : z(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Ve(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = z(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t)
      return { type: "hr", raw: z(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = z(t[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; n.length > 0; ) {
        let a = false, o = [], u;
        for (u = 0; u < n.length; u++)
          if (this.rules.other.blockquoteStart.test(n[u]))
            o.push(n[u]), a = true;
          else if (!a)
            o.push(n[u]);
          else
            break;
        n = n.slice(u);
        let p2 = o.join(`
`), c = p2.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${p2}` : p2, i = i ? `${i}
${c}` : c;
        let g = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, s, true), this.lexer.state.top = g, n.length === 0)
          break;
        let h = s.at(-1);
        if (h?.type === "code")
          break;
        if (h?.type === "blockquote") {
          let R2 = h, f = R2.raw + `
` + n.join(`
`), O = this.blockquote(f);
          s[s.length - 1] = O, r = r.substring(0, r.length - R2.raw.length) + O.raw, i = i.substring(0, i.length - R2.text.length) + O.text;
          break;
        } else if (h?.type === "list") {
          let R2 = h, f = R2.raw + `
` + n.join(`
`), O = this.list(f);
          s[s.length - 1] = O, r = r.substring(0, r.length - h.raw.length) + O.raw, i = i.substring(0, i.length - R2.raw.length) + O.raw, n = f.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: s, text: i };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), r = n.length > 1, i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let s = this.rules.other.listItemRegex(n), a = false;
      for (; e; ) {
        let u = false, p2 = "", c = "";
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e))
          break;
        p2 = t[0], e = e.substring(p2.length);
        let g = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (H) => " ".repeat(3 * H.length)), h = e.split(`
`, 1)[0], R2 = !g.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, c = g.trimStart()) : R2 ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, c = g.slice(f), f += t[1].length), R2 && this.rules.other.blankLine.test(h) && (p2 += h + `
`, e = e.substring(h.length + 1), u = true), !u) {
          let H = this.rules.other.nextBulletRegex(f), Y = this.rules.other.hrRegex(f), ee = this.rules.other.fencesBeginRegex(f), te = this.rules.other.headingBeginRegex(f), me = this.rules.other.htmlBeginRegex(f);
          for (; e; ) {
            let Z = e.split(`
`, 1)[0], A;
            if (h = Z, this.options.pedantic ? (h = h.replace(this.rules.other.listReplaceNesting, "  "), A = h) : A = h.replace(this.rules.other.tabCharGlobal, "    "), ee.test(h) || te.test(h) || me.test(h) || H.test(h) || Y.test(h))
              break;
            if (A.search(this.rules.other.nonSpaceChar) >= f || !h.trim())
              c += `
` + A.slice(f);
            else {
              if (R2 || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || ee.test(g) || te.test(g) || Y.test(g))
                break;
              c += `
` + h;
            }
            !R2 && !h.trim() && (R2 = true), p2 += Z + `
`, e = e.substring(Z.length + 1), g = A.slice(f);
          }
        }
        i.loose || (a ? i.loose = true : this.rules.other.doubleBlankLine.test(p2) && (a = true));
        let O = null;
        this.options.gfm && (O = this.rules.other.listIsTask.exec(c), O && (c = c.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: p2, task: !!O, loose: false, text: c, tokens: [] }), i.raw += p2;
      }
      let o = i.items.at(-1);
      if (o)
        o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else
        return;
      i.raw = i.raw.trimEnd();
      for (let u of i.items) {
        if (this.lexer.state.top = false, u.tokens = this.lexer.blockTokens(u.text, []), u.task) {
          let p2 = this.rules.other.listTaskCheckbox.exec(u.raw);
          if (p2) {
            let c = { type: "checkbox", raw: p2[0] + " ", checked: p2[0] !== "[ ]" };
            u.checked = c.checked, i.loose ? u.tokens[0] && ["paragraph", "text"].includes(u.tokens[0].type) && "tokens" in u.tokens[0] && u.tokens[0].tokens ? (u.tokens[0].raw = c.raw + u.tokens[0].raw, u.tokens[0].text = c.raw + u.tokens[0].text, u.tokens[0].tokens.unshift(c)) : u.tokens.unshift({ type: "paragraph", raw: c.raw, text: c.raw, tokens: [c] }) : u.tokens.unshift(c);
          }
        }
        if (!i.loose) {
          let p2 = u.tokens.filter((g) => g.type === "space"), c = p2.length > 0 && p2.some((g) => this.rules.other.anyLine.test(g.raw));
          i.loose = c;
        }
      }
      if (i.loose)
        for (let u of i.items) {
          u.loose = true;
          for (let p2 of u.tokens)
            p2.type === "text" && (p2.type = "paragraph");
        }
      return i;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t)
      return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: r, title: i };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2]))
      return;
    let n = V(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let a of r)
        this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < n.length; a++)
        s.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: true, align: s.align[a] });
      for (let a of i)
        s.rows.push(V(a, s.header.length).map((o, u) => ({ text: o, tokens: this.lexer.inline(o), header: false, align: s.align[u] })));
      return s;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t)
      return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t)
      return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t)
      return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n))
          return;
        let s = z(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0)
          return;
      } else {
        let s = ge(t[2], "()");
        if (s === -2)
          return;
        if (s > -1) {
          let o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else
        i = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), fe(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        let s = n[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return fe(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric))
      return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let s = [...r[0]].length - 1, a, o, u = s, p2 = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = c.exec(t)) != null; ) {
        if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a)
          continue;
        if (o = [...a].length, r[3] || r[4]) {
          u += o;
          continue;
        } else if ((r[5] || r[6]) && s % 3 && !((s + o) % 3)) {
          p2 += o;
          continue;
        }
        if (u -= o, u > 0)
          continue;
        o = Math.min(o, o + u + p2);
        let g = [...r[0]][0].length, h = e.slice(0, s + r.index + g + o);
        if (Math.min(s, o) % 2) {
          let f = h.slice(1, -1);
          return { type: "em", raw: h, text: f, tokens: this.lexer.inlineTokens(f) };
        }
        let R2 = h.slice(2, -2);
        return { type: "strong", raw: h, text: R2, tokens: this.lexer.inlineTokens(R2) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t)
      return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t)
      return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@")
        n = t[0], r = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (i !== t[0]);
        n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
};
var x = class l {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { other: m, block: I.normal, inline: M.normal };
    this.options.pedantic ? (t.block = I.pedantic, t.inline = M.pedantic) : this.options.gfm && (t.block = I.gfm, this.options.breaks ? t.inline = M.breaks : t.inline = M.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: I, inline: M };
  }
  static lex(e, t) {
    return new l(t).lex(e);
  }
  static lexInline(e, t) {
    return new l(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false))
        continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, a = e.slice(1), o;
        this.options.extensions.startBlock.forEach((u) => {
          o = u.call({ lexer: this }, a), typeof o == "number" && o >= 0 && (s = Math.min(s, o));
        }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let s = t.at(-1);
        n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (e) {
        let s = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else
          throw new Error(s);
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, r = null;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      if (o.length > 0)
        for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; )
          o.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; )
      n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i;
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; )
      i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let s = false, a = "";
    for (; e; ) {
      s || (a = ""), s = false;
      let o;
      if (this.options.extensions?.inline?.some((p2) => (o = p2.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), true) : false))
        continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let p2 = t.at(-1);
        o.type === "text" && p2?.type === "text" ? (p2.raw += o.raw, p2.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, a)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let u = e;
      if (this.options.extensions?.startInline) {
        let p2 = 1 / 0, c = e.slice(1), g;
        this.options.extensions.startInline.forEach((h) => {
          g = h.call({ lexer: this }, c), typeof g == "number" && g >= 0 && (p2 = Math.min(p2, g));
        }), p2 < 1 / 0 && p2 >= 0 && (u = e.substring(0, p2 + 1));
      }
      if (o = this.tokenizer.inlineText(u)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = o.raw.slice(-1)), s = true;
        let p2 = t.at(-1);
        p2?.type === "text" ? (p2.raw += o.raw, p2.text += o.text) : t.push(o);
        continue;
      }
      if (e) {
        let p2 = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(p2);
          break;
        } else
          throw new Error(p2);
      }
    }
    return t;
  }
};
var P = class {
  options;
  parser;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + w(r) + '">' + (n ? i : w(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : w(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, r = "";
    for (let a = 0; a < e.items.length; a++) {
      let o = e.items[a];
      r += this.listitem(o);
    }
    let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    return `<li>${this.parser.parse(e.tokens)}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++)
      n += this.tablecell(e.header[i]);
    t += this.tablerow({ text: n });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      let s = e.rows[i];
      n = "";
      for (let a = 0; a < s.length; a++)
        n += this.tablecell(s[a]);
      r += this.tablerow({ text: n });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${w(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let r = this.parser.parseInline(n), i = J(e);
    if (i === null)
      return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + w(t) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    let i = J(e);
    if (i === null)
      return w(n);
    e = i;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${w(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : w(e.text);
  }
};
var $ = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
  checkbox({ raw: e }) {
    return e;
  }
};
var b = class l2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
  }
  static parse(e, t) {
    return new l2(t).parse(e);
  }
  static parseInline(e, t) {
    return new l2(t).parseInline(e);
  }
  parse(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (this.options.extensions?.renderers?.[r.type]) {
        let s = r, a = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(s.type)) {
          t += a || "";
          continue;
        }
      }
      let i = r;
      switch (i.type) {
        case "space": {
          t += this.renderer.space(i);
          break;
        }
        case "hr": {
          t += this.renderer.hr(i);
          break;
        }
        case "heading": {
          t += this.renderer.heading(i);
          break;
        }
        case "code": {
          t += this.renderer.code(i);
          break;
        }
        case "table": {
          t += this.renderer.table(i);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(i);
          break;
        }
        case "list": {
          t += this.renderer.list(i);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(i);
          break;
        }
        case "html": {
          t += this.renderer.html(i);
          break;
        }
        case "def": {
          t += this.renderer.def(i);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(i);
          break;
        }
        case "text": {
          t += this.renderer.text(i);
          break;
        }
        default: {
          let s = 'Token with "' + i.type + '" type was not found.';
          if (this.options.silent)
            return console.error(s), "";
          throw new Error(s);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (a !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += a || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "escape": {
          n += t.text(s);
          break;
        }
        case "html": {
          n += t.html(s);
          break;
        }
        case "link": {
          n += t.link(s);
          break;
        }
        case "image": {
          n += t.image(s);
          break;
        }
        case "checkbox": {
          n += t.checkbox(s);
          break;
        }
        case "strong": {
          n += t.strong(s);
          break;
        }
        case "em": {
          n += t.em(s);
          break;
        }
        case "codespan": {
          n += t.codespan(s);
          break;
        }
        case "br": {
          n += t.br(s);
          break;
        }
        case "del": {
          n += t.del(s);
          break;
        }
        case "text": {
          n += t.text(s);
          break;
        }
        default: {
          let a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
};
var _a;
var S = (_a = class {
  options;
  block;
  constructor(e) {
    this.options = e || T;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer() {
    return this.block ? x.lex : x.lexInline;
  }
  provideParser() {
    return this.block ? b.parse : b.parseInline;
  }
}, __publicField(_a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), __publicField(_a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), _a);
var B = class {
  defaults = L();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = b;
  Renderer = P;
  TextRenderer = $;
  Lexer = x;
  Tokenizer = y;
  Hooks = S;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let r of e)
      switch (n = n.concat(t.call(this, r)), r.type) {
        case "table": {
          let i = r;
          for (let s of i.header)
            n = n.concat(this.walkTokens(s.tokens, t));
          for (let s of i.rows)
            for (let a of s)
              n = n.concat(this.walkTokens(a.tokens, t));
          break;
        }
        case "list": {
          let i = r;
          n = n.concat(this.walkTokens(i.items, t));
          break;
        }
        default: {
          let i = r;
          this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
            let a = i[s].flat(1 / 0);
            n = n.concat(this.walkTokens(a, t));
          }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
        }
      }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let r = { ...n };
      if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name)
          throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t.renderers[i.name];
          s ? t.renderers[i.name] = function(...a) {
            let o = i.renderer.apply(this, a);
            return o === false && (o = s.apply(this, a)), o;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          let s = t[i.level];
          s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), r.extensions = t), n.renderer) {
        let i = this.defaults.renderer || new P(this.defaults);
        for (let s in n.renderer) {
          if (!(s in i))
            throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s))
            continue;
          let a = s, o = n.renderer[a], u = i[a];
          i[a] = (...p2) => {
            let c = o.apply(i, p2);
            return c === false && (c = u.apply(i, p2)), c || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new y(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in i))
            throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s))
            continue;
          let a = s, o = n.tokenizer[a], u = i[a];
          i[a] = (...p2) => {
            let c = o.apply(i, p2);
            return c === false && (c = u.apply(i, p2)), c;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new S();
        for (let s in n.hooks) {
          if (!(s in i))
            throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s))
            continue;
          let a = s, o = n.hooks[a], u = i[a];
          S.passThroughHooks.has(s) ? i[a] = (p2) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(s))
              return (async () => {
                let g = await o.call(i, p2);
                return u.call(i, g);
              })();
            let c = o.call(i, p2);
            return u.call(i, c);
          } : i[a] = (...p2) => {
            if (this.defaults.async)
              return (async () => {
                let g = await o.apply(i, p2);
                return g === false && (g = await u.apply(i, p2)), g;
              })();
            let c = o.apply(i, p2);
            return c === false && (c = u.apply(i, p2)), c;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, s = n.walkTokens;
        r.walkTokens = function(a) {
          let o = [];
          return o.push(s.call(this, a)), i && (o = o.concat(i.call(this, a))), o;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return x.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return b.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, r) => {
      let i = { ...r }, s = { ...this.defaults, ...i }, a = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && i.async === false)
        return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null)
        return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string")
        return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async)
        return (async () => {
          let o = s.hooks ? await s.hooks.preprocess(n) : n, p2 = await (s.hooks ? await s.hooks.provideLexer() : e ? x.lex : x.lexInline)(o, s), c = s.hooks ? await s.hooks.processAllTokens(p2) : p2;
          s.walkTokens && await Promise.all(this.walkTokens(c, s.walkTokens));
          let h = await (s.hooks ? await s.hooks.provideParser() : e ? b.parse : b.parseInline)(c, s);
          return s.hooks ? await s.hooks.postprocess(h) : h;
        })().catch(a);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let u = (s.hooks ? s.hooks.provideLexer() : e ? x.lex : x.lexInline)(n, s);
        s.hooks && (u = s.hooks.processAllTokens(u)), s.walkTokens && this.walkTokens(u, s.walkTokens);
        let c = (s.hooks ? s.hooks.provideParser() : e ? b.parse : b.parseInline)(u, s);
        return s.hooks && (c = s.hooks.postprocess(c)), c;
      } catch (o) {
        return a(o);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let r = "<p>An error occurred:</p><pre>" + w(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t)
        return Promise.reject(n);
      throw n;
    };
  }
};
var _ = new B();
function d(l3, e) {
  return _.parse(l3, e);
}
d.options = d.setOptions = function(l3) {
  return _.setOptions(l3), d.defaults = _.defaults, G(d.defaults), d;
};
d.getDefaults = L;
d.defaults = T;
d.use = function(...l3) {
  return _.use(...l3), d.defaults = _.defaults, G(d.defaults), d;
};
d.walkTokens = function(l3, e) {
  return _.walkTokens(l3, e);
};
d.parseInline = _.parseInline;
d.Parser = b;
d.parser = b.parse;
d.Renderer = P;
d.TextRenderer = $;
d.Lexer = x;
d.lexer = x.lex;
d.Tokenizer = y;
d.Hooks = S;
d.parse = d;
var Ht = d.options;
var Zt = d.setOptions;
var Gt = d.use;
var Nt = d.walkTokens;
var Ft = d.parseInline;
var Qt = b.parse;
var Ut = x.lex;

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/markdown-div/private/markdown-container.js
var MarkdownContainer = /* @__PURE__ */ styled_default("div")({
  name: "MarkdownContainer",
  class: "gdg-mnuv029",
  propsAsIs: false
});

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/markdown-div/markdown-div.js
var MarkdownDiv = class extends import_react3.default.PureComponent {
  targetElement = null;
  renderMarkdownIntoDiv() {
    const { targetElement, props } = this;
    if (targetElement === null)
      return;
    const { contents, createNode } = props;
    const innerHTML = d(contents);
    const childRange = document.createRange();
    childRange.selectNodeContents(targetElement);
    childRange.deleteContents();
    let newChild = createNode?.(innerHTML);
    if (newChild === void 0) {
      const childDoc = document.createElement("template");
      childDoc.innerHTML = innerHTML;
      newChild = childDoc.content;
    }
    targetElement.append(newChild);
    const tags = targetElement.getElementsByTagName("a");
    for (const tag of tags) {
      tag.target = "_blank";
      tag.rel = "noreferrer noopener";
    }
  }
  containerRefHook = (element) => {
    this.targetElement = element;
    this.renderMarkdownIntoDiv();
  };
  render() {
    this.renderMarkdownIntoDiv();
    return import_react3.default.createElement(MarkdownContainer, { ref: this.containerRefHook });
  }
};

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry.js
var React4 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry-style.js
var InputBox = /* @__PURE__ */ styled_default("textarea")({
  name: "InputBox",
  class: "gdg-izpuzkl",
  propsAsIs: false
});
var ShadowBox = /* @__PURE__ */ styled_default("div")({
  name: "ShadowBox",
  class: "gdg-s69h75o",
  propsAsIs: false
});
var GrowingEntryStyle = /* @__PURE__ */ styled_default("div")({
  name: "GrowingEntryStyle",
  class: "gdg-g1y0xocz",
  propsAsIs: false
});

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/growing-entry/growing-entry.js
var globalInputID = 0;
var GrowingEntry = (props) => {
  const { placeholder, value, onKeyDown, highlight, altNewline, validatedSelection, ...rest } = props;
  const { onChange, className } = rest;
  const inputRef = React4.useRef(null);
  const useText = value ?? "";
  assert(onChange !== void 0, "GrowingEntry must be a controlled input area");
  const [inputID] = React4.useState(() => "input-box-" + (globalInputID = (globalInputID + 1) % 1e7));
  React4.useEffect(() => {
    const ta = inputRef.current;
    if (ta === null)
      return;
    if (ta.disabled)
      return;
    const length = useText.toString().length;
    ta.focus();
    ta.setSelectionRange(highlight ? 0 : length, length);
  }, []);
  React4.useLayoutEffect(() => {
    if (validatedSelection !== void 0) {
      const range2 = typeof validatedSelection === "number" ? [validatedSelection, null] : validatedSelection;
      inputRef.current?.setSelectionRange(range2[0], range2[1]);
    }
  }, [validatedSelection]);
  const onKeyDownInner = React4.useCallback((e) => {
    if (e.key === "Enter" && e.shiftKey && altNewline === true) {
      return;
    }
    onKeyDown?.(e);
  }, [altNewline, onKeyDown]);
  return React4.createElement(
    GrowingEntryStyle,
    { className: "gdg-growing-entry" },
    React4.createElement(ShadowBox, { className }, useText + "\n"),
    React4.createElement(InputBox, { ...rest, className: (className ?? "") + " gdg-input", id: inputID, ref: inputRef, onKeyDown: onKeyDownInner, value: useText, placeholder, dir: "auto" })
  );
};

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/canvas-hypertxt/dist/js/index.js
var d2 = /* @__PURE__ */ new Map();
var b2 = /* @__PURE__ */ new Map();
var z2 = /* @__PURE__ */ new Map();
function v2() {
  d2.clear(), z2.clear(), b2.clear();
}
function w2(l3, s, e, c, t) {
  var n, r, o;
  let f = 0, a = {};
  for (let i of l3)
    f += (n = e.get(i)) != null ? n : t, a[i] = ((r = a[i]) != null ? r : 0) + 1;
  let g = s - f;
  for (let i of Object.keys(a)) {
    let m2 = a[i], u = (o = e.get(i)) != null ? o : t, h = u * m2 / f, M2 = g * h * c / m2, C2 = u + M2;
    e.set(i, C2);
  }
}
function R(l3, s) {
  var n;
  let e = /* @__PURE__ */ new Map(), c = 0;
  for (let r of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-+=?") {
    let o = l3.measureText(r).width;
    e.set(r, o), c += o;
  }
  let t = c / e.size, f = 3, a = (s / t + f) / (f + 1), g = e.keys();
  for (let r of g)
    e.set(r, ((n = e.get(r)) != null ? n : t) * a);
  return e;
}
function p(l3, s, e, c) {
  var g, n;
  let t = b2.get(e);
  if (c && t !== void 0 && t.count > 2e4) {
    let r = z2.get(e);
    if (r === void 0 && (r = R(l3, t.size), z2.set(e, r)), t.count > 5e5) {
      let i = 0;
      for (let m2 of s)
        i += (g = r.get(m2)) != null ? g : t.size;
      return i * 1.01;
    }
    let o = l3.measureText(s);
    return w2(s, o.width, r, Math.max(0.05, 1 - t.count / 2e5), t.size), b2.set(e, { count: t.count + s.length, size: t.size }), o.width;
  }
  let f = l3.measureText(s), a = f.width / s.length;
  if (((n = t == null ? void 0 : t.count) != null ? n : 0) > 2e4)
    return f.width;
  if (t === void 0)
    b2.set(e, { count: s.length, size: a });
  else {
    let r = a - t.size, o = s.length / (t.count + s.length), i = t.size + r * o;
    b2.set(e, { count: t.count + s.length, size: i });
  }
  return f.width;
}
function T2(l3, s, e, c, t, f, a, g) {
  if (s.length <= 1)
    return s.length;
  if (t < e)
    return -1;
  let n = Math.floor(e / t * f), r = p(l3, s.slice(0, Math.max(0, n)), c, a), o = g == null ? void 0 : g(s);
  if (r !== e)
    if (r < e) {
      for (; r < e; )
        n++, r = p(l3, s.slice(0, Math.max(0, n)), c, a);
      n--;
    } else
      for (; r > e; ) {
        let i = o !== void 0 ? 0 : s.lastIndexOf(" ", n - 1);
        i > 0 ? n = i : n--, r = p(l3, s.slice(0, Math.max(0, n)), c, a);
      }
  if (s[n] !== " ") {
    let i = 0;
    if (o === void 0)
      i = s.lastIndexOf(" ", n);
    else
      for (let m2 of o) {
        if (m2 > n)
          break;
        i = m2;
      }
    i > 0 && (n = i);
  }
  return n;
}
function _2(l3, s, e, c, t, f) {
  let a = `${s}_${e}_${c}px`, g = d2.get(a);
  if (g !== void 0)
    return g;
  if (c <= 0)
    return [];
  let n = [], r = s.split(`
`), o = b2.get(e), i = o === void 0 ? s.length : c / o.size * 1.5, m2 = t && o !== void 0 && o.count > 2e4;
  for (let u of r) {
    let h = p(l3, u.slice(0, Math.max(0, i)), e, m2), M2 = Math.min(u.length, i);
    if (h <= c)
      n.push(u);
    else {
      for (; h > c; ) {
        let C2 = T2(l3, u, c, e, h, M2, m2, f), k2 = u.slice(0, Math.max(0, C2));
        u = u.slice(k2.length), n.push(k2), h = p(l3, u.slice(0, Math.max(0, i)), e, m2), M2 = Math.min(u.length, i);
      }
      h > 0 && n.push(u);
    }
  }
  return n = n.map((u, h) => h === 0 ? u.trimEnd() : u.trim()), d2.set(a, n), d2.size > 500 && d2.delete(d2.keys().next().value), n;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-lib.js
function useMappedColumns(columns, freezeColumns) {
  return import_react5.default.useMemo(() => columns.map((c, i) => ({
    group: c.group,
    grow: c.grow,
    hasMenu: c.hasMenu,
    icon: c.icon,
    id: c.id,
    menuIcon: c.menuIcon,
    overlayIcon: c.overlayIcon,
    sourceIndex: i,
    sticky: i < freezeColumns,
    style: c.style,
    themeOverride: c.themeOverride,
    title: c.title,
    trailingRowOptions: c.trailingRowOptions,
    width: c.width,
    growOffset: c.growOffset,
    rowMarker: c.rowMarker,
    rowMarkerChecked: c.rowMarkerChecked
  })), [columns, freezeColumns]);
}
function gridSelectionHasItem(sel, item) {
  const [col, row] = item;
  if (sel.columns.hasIndex(col) || sel.rows.hasIndex(row))
    return true;
  if (sel.current !== void 0) {
    if (itemsAreEqual(sel.current.cell, item))
      return true;
    const toCheck = [sel.current.range, ...sel.current.rangeStack];
    for (const r of toCheck) {
      if (col >= r.x && col < r.x + r.width && row >= r.y && row < r.y + r.height)
        return true;
    }
  }
  return false;
}
function isGroupEqual(left, right) {
  return (left ?? "") === (right ?? "");
}
function cellIsSelected(location, cell, selection) {
  if (selection.current === void 0)
    return false;
  if (location[1] !== selection.current.cell[1])
    return false;
  if (cell.span === void 0) {
    return selection.current.cell[0] === location[0];
  }
  return selection.current.cell[0] >= cell.span[0] && selection.current.cell[0] <= cell.span[1];
}
function itemIsInRect(location, rect) {
  const [x2, y2] = location;
  return x2 >= rect.x && x2 < rect.x + rect.width && y2 >= rect.y && y2 < rect.y + rect.height;
}
function itemsAreEqual(a, b3) {
  return a?.[0] === b3?.[0] && a?.[1] === b3?.[1];
}
function rectBottomRight(rect) {
  return [rect.x + rect.width - 1, rect.y + rect.height - 1];
}
function cellIsInRect(location, cell, rect) {
  const startX = rect.x;
  const endX = rect.x + rect.width - 1;
  const startY = rect.y;
  const endY = rect.y + rect.height - 1;
  const [cellCol, cellRow] = location;
  if (cellRow < startY || cellRow > endY)
    return false;
  if (cell.span === void 0) {
    return cellCol >= startX && cellCol <= endX;
  }
  const [spanStart, spanEnd] = cell.span;
  return spanStart >= startX && spanStart <= endX || spanEnd >= startX && spanStart <= endX || spanStart < startX && spanEnd > endX;
}
function cellIsInRange(location, cell, selection, includeSingleSelection) {
  let result = 0;
  if (selection.current === void 0)
    return result;
  const range2 = selection.current.range;
  if ((includeSingleSelection || range2.height * range2.width > 1) && cellIsInRect(location, cell, range2)) {
    result++;
  }
  for (const r of selection.current.rangeStack) {
    if (cellIsInRect(location, cell, r)) {
      result++;
    }
  }
  return result;
}
function remapForDnDState(columns, dndState) {
  let mappedCols = columns;
  if (dndState !== void 0) {
    let writable = [...columns];
    const temp = mappedCols[dndState.src];
    if (dndState.src > dndState.dest) {
      writable.splice(dndState.src, 1);
      writable.splice(dndState.dest, 0, temp);
    } else {
      writable.splice(dndState.dest + 1, 0, temp);
      writable.splice(dndState.src, 1);
    }
    writable = writable.map((c, i) => ({
      ...c,
      sticky: columns[i].sticky
    }));
    mappedCols = writable;
  }
  return mappedCols;
}
function getStickyWidth(columns, dndState) {
  let result = 0;
  const remapped = remapForDnDState(columns, dndState);
  for (let i = 0; i < remapped.length; i++) {
    const c = remapped[i];
    if (c.sticky)
      result += c.width;
    else
      break;
  }
  return result;
}
function getFreezeTrailingHeight(rows, freezeTrailingRows, getRowHeight) {
  if (typeof getRowHeight === "number") {
    return freezeTrailingRows * getRowHeight;
  } else {
    let result = 0;
    for (let i = rows - freezeTrailingRows; i < rows; i++) {
      result += getRowHeight(i);
    }
    return result;
  }
}
function getEffectiveColumns(columns, cellXOffset, width, dndState, tx) {
  const mappedCols = remapForDnDState(columns, dndState);
  const sticky = [];
  for (const c of mappedCols) {
    if (c.sticky) {
      sticky.push(c);
    } else {
      break;
    }
  }
  if (sticky.length > 0) {
    for (const c of sticky) {
      width -= c.width;
    }
  }
  let endIndex = cellXOffset;
  let curX = tx ?? 0;
  while (curX <= width && endIndex < mappedCols.length) {
    curX += mappedCols[endIndex].width;
    endIndex++;
  }
  for (let i = cellXOffset; i < endIndex; i++) {
    const c = mappedCols[i];
    if (!c.sticky) {
      sticky.push(c);
    }
  }
  return sticky;
}
function getColumnIndexForX(targetX, effectiveColumns, translateX) {
  let x2 = 0;
  for (const c of effectiveColumns) {
    const cx = c.sticky ? x2 : x2 + (translateX ?? 0);
    if (targetX <= cx + c.width) {
      return c.sourceIndex;
    }
    x2 += c.width;
  }
  return -1;
}
function getRowIndexForY(targetY, height, hasGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, freezeTrailingRows) {
  const totalHeaderHeight = headerHeight + groupHeaderHeight;
  if (hasGroups && targetY <= groupHeaderHeight)
    return -2;
  if (targetY <= totalHeaderHeight)
    return -1;
  let y2 = height;
  for (let fr = 0; fr < freezeTrailingRows; fr++) {
    const row = rows - 1 - fr;
    const rh = typeof rowHeight === "number" ? rowHeight : rowHeight(row);
    y2 -= rh;
    if (targetY >= y2) {
      return row;
    }
  }
  const effectiveRows = rows - freezeTrailingRows;
  const ty = targetY - (translateY ?? 0);
  if (typeof rowHeight === "number") {
    const target = Math.floor((ty - totalHeaderHeight) / rowHeight) + cellYOffset;
    if (target >= effectiveRows)
      return void 0;
    return target;
  } else {
    let curY = totalHeaderHeight;
    for (let i = cellYOffset; i < effectiveRows; i++) {
      const rh = rowHeight(i);
      if (ty <= curY + rh)
        return i;
      curY += rh;
    }
    return void 0;
  }
}
var metricsSize = 0;
var metricsCache = {};
var isSSR = typeof window === "undefined";
async function clearCacheOnLoad() {
  if (isSSR || document?.fonts?.ready === void 0)
    return;
  await document.fonts.ready;
  metricsSize = 0;
  metricsCache = {};
  v2();
}
void clearCacheOnLoad();
function makeCacheKey(s, ctx, baseline, font) {
  return `${s}_${font ?? ctx?.font}_${baseline}`;
}
function measureTextCached(s, ctx, font, baseline = "middle") {
  const key = makeCacheKey(s, ctx, baseline, font);
  let metrics = metricsCache[key];
  if (metrics === void 0) {
    metrics = ctx.measureText(s);
    metricsCache[key] = metrics;
    metricsSize++;
  }
  if (metricsSize > 1e4) {
    metricsCache = {};
    metricsSize = 0;
  }
  return metrics;
}
function getMeasuredTextCache(s, font) {
  const key = makeCacheKey(s, void 0, "middle", font);
  return metricsCache[key];
}
function getMiddleCenterBias(ctx, font) {
  if (typeof font !== "string") {
    font = font.baseFontFull;
  }
  return getMiddleCenterBiasInner(ctx, font);
}
function loadMetric(ctx, baseline) {
  const sample = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  ctx.save();
  ctx.textBaseline = baseline;
  const result = ctx.measureText(sample);
  ctx.restore();
  return result;
}
var biasCache = [];
function getMiddleCenterBiasInner(ctx, font) {
  for (const x2 of biasCache) {
    if (x2.key === font)
      return x2.val;
  }
  const alphabeticMetrics = loadMetric(ctx, "alphabetic");
  const middleMetrics = loadMetric(ctx, "middle");
  const bias = -(middleMetrics.actualBoundingBoxDescent - alphabeticMetrics.actualBoundingBoxDescent) + alphabeticMetrics.actualBoundingBoxAscent / 2;
  biasCache.push({
    key: font,
    val: bias
  });
  return bias;
}
function drawLastUpdateUnderlay(args, lastUpdate, frameTime, lastPrep, isLastCol, isLastRow) {
  const { ctx, rect, theme } = args;
  let progress = Number.MAX_SAFE_INTEGER;
  const animTime = 500;
  if (lastUpdate !== void 0) {
    progress = frameTime - lastUpdate;
    if (progress < animTime) {
      const fade = 1 - progress / animTime;
      ctx.globalAlpha = fade;
      ctx.fillStyle = theme.bgSearchResult;
      ctx.fillRect(rect.x + 1, rect.y + 1, rect.width - (isLastCol ? 2 : 1), rect.height - (isLastRow ? 2 : 1));
      ctx.globalAlpha = 1;
      if (lastPrep !== void 0) {
        lastPrep.fillStyle = theme.bgSearchResult;
      }
    }
  }
  return progress < animTime;
}
function prepTextCell(args, lastPrep, overrideColor) {
  const { ctx, theme } = args;
  const result = lastPrep ?? {};
  const newFill = overrideColor ?? theme.textDark;
  if (newFill !== result.fillStyle) {
    ctx.fillStyle = newFill;
    result.fillStyle = newFill;
  }
  return result;
}
function drawTextCellExternal(args, data, contentAlign) {
  const { rect, ctx, theme } = args;
  ctx.fillStyle = theme.textDark;
  drawTextCell({
    ctx,
    rect,
    theme
  }, data, contentAlign);
}
function drawSingleTextLine(ctx, data, x2, y2, w3, h, bias, theme, contentAlign) {
  if (contentAlign === "right") {
    ctx.fillText(data, x2 + w3 - (theme.cellHorizontalPadding + 0.5), y2 + h / 2 + bias);
  } else if (contentAlign === "center") {
    ctx.fillText(data, x2 + w3 / 2, y2 + h / 2 + bias);
  } else {
    ctx.fillText(data, x2 + theme.cellHorizontalPadding + 0.5, y2 + h / 2 + bias);
  }
}
function getEmHeight(ctx, fontStyle) {
  const textMetrics = measureTextCached("ABCi09jgqpy", ctx, fontStyle);
  return textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;
}
function truncateString(data, w3) {
  if (data.includes("\n")) {
    data = data.split(/\r?\n/, 1)[0];
  }
  const max = w3 / 4;
  if (data.length > max) {
    data = data.slice(0, max);
  }
  return data;
}
function drawMultiLineText(ctx, data, x2, y2, w3, h, bias, theme, contentAlign, hyperWrapping) {
  const fontStyle = theme.baseFontFull;
  const split = _2(ctx, data, fontStyle, w3 - theme.cellHorizontalPadding * 2, hyperWrapping ?? false);
  const emHeight = getEmHeight(ctx, fontStyle);
  const lineHeight = theme.lineHeight * emHeight;
  const actualHeight = emHeight + lineHeight * (split.length - 1);
  const mustClip = actualHeight + theme.cellVerticalPadding > h;
  if (mustClip) {
    ctx.save();
    ctx.rect(x2, y2, w3, h);
    ctx.clip();
  }
  const optimalY = y2 + h / 2 - actualHeight / 2;
  let drawY = Math.max(y2 + theme.cellVerticalPadding, optimalY);
  for (const line of split) {
    drawSingleTextLine(ctx, line, x2, drawY, w3, emHeight, bias, theme, contentAlign);
    drawY += lineHeight;
    if (drawY > y2 + h)
      break;
  }
  if (mustClip) {
    ctx.restore();
  }
}
function drawTextCell(args, data, contentAlign, allowWrapping, hyperWrapping) {
  const { ctx, rect, theme } = args;
  const { x: x2, y: y2, width: w3, height: h } = rect;
  allowWrapping = allowWrapping ?? false;
  if (!allowWrapping) {
    data = truncateString(data, w3);
  }
  const bias = getMiddleCenterBias(ctx, theme);
  const isRtl = direction(data) === "rtl";
  if (contentAlign === void 0 && isRtl) {
    contentAlign = "right";
  }
  if (isRtl) {
    ctx.direction = "rtl";
  }
  if (data.length > 0) {
    let changed = false;
    if (contentAlign === "right") {
      ctx.textAlign = "right";
      changed = true;
    } else if (contentAlign !== void 0 && contentAlign !== "left") {
      ctx.textAlign = contentAlign;
      changed = true;
    }
    if (!allowWrapping) {
      drawSingleTextLine(ctx, data, x2, y2, w3, h, bias, theme, contentAlign);
    } else {
      drawMultiLineText(ctx, data, x2, y2, w3, h, bias, theme, contentAlign, hyperWrapping);
    }
    if (changed) {
      ctx.textAlign = "start";
    }
    if (isRtl) {
      ctx.direction = "inherit";
    }
  }
}
function roundedRect(ctx, x2, y2, width, height, radius) {
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  }
  radius = {
    tl: Math.max(0, Math.min(radius.tl, height / 2, width / 2)),
    tr: Math.max(0, Math.min(radius.tr, height / 2, width / 2)),
    bl: Math.max(0, Math.min(radius.bl, height / 2, width / 2)),
    br: Math.max(0, Math.min(radius.br, height / 2, width / 2))
  };
  ctx.moveTo(x2 + radius.tl, y2);
  ctx.arcTo(x2 + width, y2, x2 + width, y2 + radius.tr, radius.tr);
  ctx.arcTo(x2 + width, y2 + height, x2 + width - radius.br, y2 + height, radius.br);
  ctx.arcTo(x2, y2 + height, x2, y2 + height - radius.bl, radius.bl);
  ctx.arcTo(x2, y2, x2 + radius.tl, y2, radius.tl);
}
function drawMenuDots(ctx, dotsX, dotsY) {
  const radius = 1.25;
  ctx.arc(dotsX, dotsY - radius * 3.5, radius, 0, 2 * Math.PI, false);
  ctx.arc(dotsX, dotsY, radius, 0, 2 * Math.PI, false);
  ctx.arc(dotsX, dotsY + radius * 3.5, radius, 0, 2 * Math.PI, false);
}
function roundedPoly(ctx, points, radiusAll) {
  const asVec = function(p2, pp) {
    const vx = pp.x - p2.x;
    const vy = pp.y - p2.y;
    const vlen = Math.sqrt(vx * vx + vy * vy);
    const vnx = vx / vlen;
    const vny = vy / vlen;
    return {
      x: vx,
      y: pp.y - p2.y,
      len: vlen,
      nx: vnx,
      ny: vny,
      ang: Math.atan2(vny, vnx)
    };
  };
  let radius;
  const len = points.length;
  let p1 = points[len - 1];
  for (let i = 0; i < len; i++) {
    let p2 = points[i % len];
    const p3 = points[(i + 1) % len];
    const v1 = asVec(p2, p1);
    const v22 = asVec(p2, p3);
    const sinA = v1.nx * v22.ny - v1.ny * v22.nx;
    const sinA90 = v1.nx * v22.nx - v1.ny * -v22.ny;
    let angle = Math.asin(sinA < -1 ? -1 : sinA > 1 ? 1 : sinA);
    let radDirection = 1;
    let drawDirection = false;
    if (sinA90 < 0) {
      if (angle < 0) {
        angle = Math.PI + angle;
      } else {
        angle = Math.PI - angle;
        radDirection = -1;
        drawDirection = true;
      }
    } else {
      if (angle > 0) {
        radDirection = -1;
        drawDirection = true;
      }
    }
    radius = p2.radius !== void 0 ? p2.radius : radiusAll;
    const halfAngle = angle / 2;
    let lenOut = Math.abs(Math.cos(halfAngle) * radius / Math.sin(halfAngle));
    let cRadius;
    if (lenOut > Math.min(v1.len / 2, v22.len / 2)) {
      lenOut = Math.min(v1.len / 2, v22.len / 2);
      cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle));
    } else {
      cRadius = radius;
    }
    let x2 = p2.x + v22.nx * lenOut;
    let y2 = p2.y + v22.ny * lenOut;
    x2 += -v22.ny * cRadius * radDirection;
    y2 += v22.nx * cRadius * radDirection;
    ctx.arc(x2, y2, cRadius, v1.ang + Math.PI / 2 * radDirection, v22.ang - Math.PI / 2 * radDirection, drawDirection);
    p1 = p2;
    p2 = p3;
  }
  ctx.closePath();
}
function computeBounds(col, row, width, height, groupHeaderHeight, totalHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, freezeTrailingRows, mappedColumns, rowHeight) {
  const result = {
    x: 0,
    y: totalHeaderHeight + translateY,
    width: 0,
    height: 0
  };
  if (col >= mappedColumns.length || row >= rows || row < -2 || col < 0) {
    return result;
  }
  const headerHeight = totalHeaderHeight - groupHeaderHeight;
  if (col >= freezeColumns) {
    const dir = cellXOffset > col ? -1 : 1;
    const freezeWidth = getStickyWidth(mappedColumns);
    result.x += freezeWidth + translateX;
    for (let i = cellXOffset; i !== col; i += dir) {
      result.x += mappedColumns[dir === 1 ? i : i - 1].width * dir;
    }
  } else {
    for (let i = 0; i < col; i++) {
      result.x += mappedColumns[i].width;
    }
  }
  result.width = mappedColumns[col].width + 1;
  if (row === -1) {
    result.y = groupHeaderHeight;
    result.height = headerHeight;
  } else if (row === -2) {
    result.y = 0;
    result.height = groupHeaderHeight;
    let start = col;
    const group = mappedColumns[col].group;
    const sticky = mappedColumns[col].sticky;
    while (start > 0 && isGroupEqual(mappedColumns[start - 1].group, group) && mappedColumns[start - 1].sticky === sticky) {
      const c = mappedColumns[start - 1];
      result.x -= c.width;
      result.width += c.width;
      start--;
    }
    let end = col;
    while (end + 1 < mappedColumns.length && isGroupEqual(mappedColumns[end + 1].group, group) && mappedColumns[end + 1].sticky === sticky) {
      const c = mappedColumns[end + 1];
      result.width += c.width;
      end++;
    }
    if (!sticky) {
      const freezeWidth = getStickyWidth(mappedColumns);
      const clip = result.x - freezeWidth;
      if (clip < 0) {
        result.x -= clip;
        result.width += clip;
      }
      if (result.x + result.width > width) {
        result.width = width - result.x;
      }
    }
  } else if (row >= rows - freezeTrailingRows) {
    let dy = rows - row;
    result.y = height;
    while (dy > 0) {
      const r = row + dy - 1;
      result.height = typeof rowHeight === "number" ? rowHeight : rowHeight(r);
      result.y -= result.height;
      dy--;
    }
    result.height += 1;
  } else {
    const dir = cellYOffset > row ? -1 : 1;
    if (typeof rowHeight === "number") {
      const delta = row - cellYOffset;
      result.y += delta * rowHeight;
    } else {
      for (let r = cellYOffset; r !== row; r += dir) {
        result.y += rowHeight(r) * dir;
      }
    }
    result.height = (typeof rowHeight === "number" ? rowHeight : rowHeight(row)) + 1;
  }
  return result;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/common/render-state-provider.js
var rowShift = 1 << 21;
function packColRowToNumber(col, row) {
  return (row + 2) * rowShift + col;
}
function unpackCol(packed) {
  return packed % rowShift;
}
function unpackRow(packed) {
  return Math.floor(packed / rowShift) - 2;
}
function unpackNumberToColRow(packed) {
  const col = unpackCol(packed);
  const row = unpackRow(packed);
  return [col, row];
}
var WindowingTrackerBase = class {
  visibleWindow = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  freezeCols = 0;
  freezeRows = [];
  isInWindow = (packed) => {
    const col = unpackCol(packed);
    const row = unpackRow(packed);
    const w3 = this.visibleWindow;
    const colInWindow = col >= w3.x && col <= w3.x + w3.width || col < this.freezeCols;
    const rowInWindow = row >= w3.y && row <= w3.y + w3.height || this.freezeRows.includes(row);
    return colInWindow && rowInWindow;
  };
  setWindow(newWindow, freezeCols, freezeRows) {
    if (this.visibleWindow.x === newWindow.x && this.visibleWindow.y === newWindow.y && this.visibleWindow.width === newWindow.width && this.visibleWindow.height === newWindow.height && this.freezeCols === freezeCols && deepEqual(this.freezeRows, freezeRows))
      return;
    this.visibleWindow = newWindow;
    this.freezeCols = freezeCols;
    this.freezeRows = freezeRows;
    this.clearOutOfWindow();
  }
};
var RenderStateProvider = class extends WindowingTrackerBase {
  cache = /* @__PURE__ */ new Map();
  setValue = (location, state) => {
    this.cache.set(packColRowToNumber(location[0], location[1]), state);
  };
  getValue = (location) => {
    return this.cache.get(packColRowToNumber(location[0], location[1]));
  };
  clearOutOfWindow = () => {
    for (const [key] of this.cache.entries()) {
      if (!this.isInWindow(key)) {
        this.cache.delete(key);
      }
    }
  };
};

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/cell-set.js
var CellSet = class {
  cells;
  constructor(items = []) {
    this.cells = new Set(items.map((x2) => packColRowToNumber(x2[0], x2[1])));
  }
  add(cell) {
    this.cells.add(packColRowToNumber(cell[0], cell[1]));
  }
  has(cell) {
    if (cell === void 0)
      return false;
    return this.cells.has(packColRowToNumber(cell[0], cell[1]));
  }
  remove(cell) {
    this.cells.delete(packColRowToNumber(cell[0], cell[1]));
  }
  clear() {
    this.cells.clear();
  }
  get size() {
    return this.cells.size;
  }
  hasHeader() {
    for (const cellNumber of this.cells) {
      const row = unpackRow(cellNumber);
      if (row < 0)
        return true;
    }
    return false;
  }
  hasItemInRectangle(rect) {
    for (let row = rect.y; row < rect.y + rect.height; row++) {
      for (let col = rect.x; col < rect.x + rect.width; col++) {
        if (this.cells.has(packColRowToNumber(col, row))) {
          return true;
        }
      }
    }
    return false;
  }
  hasItemInRegion(rect) {
    for (const r of rect) {
      if (this.hasItemInRectangle(r)) {
        return true;
      }
    }
    return false;
  }
  *values() {
    for (const cellNumber of this.cells) {
      yield unpackNumberToColRow(cellNumber);
    }
  }
};

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-column-sizer.js
var React6 = __toESM(require_react(), 1);
var defaultSize = 150;
function measureCell(ctx, cell, theme, getCellRenderer) {
  const r = getCellRenderer(cell);
  return r?.measure?.(ctx, cell, theme) ?? defaultSize;
}
function measureColumn(ctx, theme, c, colIndex, selectedData, minColumnWidth, maxColumnWidth, removeOutliers, getCellRenderer) {
  let max = 0;
  const sizes = selectedData === void 0 ? [] : selectedData.map((row) => {
    const r = measureCell(ctx, row[colIndex], theme, getCellRenderer);
    max = Math.max(max, r);
    return r;
  });
  if (sizes.length > 5 && removeOutliers) {
    max = 0;
    let sum = 0;
    for (const size of sizes) {
      sum += size;
    }
    const average = sum / sizes.length;
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[i] >= average * 2) {
        sizes[i] = 0;
      } else {
        max = Math.max(max, sizes[i]);
      }
    }
  }
  max = Math.max(max, ctx.measureText(c.title).width + 16 + (c.icon === void 0 ? 0 : 28));
  const final = Math.max(Math.ceil(minColumnWidth), Math.min(Math.floor(maxColumnWidth), Math.ceil(max)));
  return {
    ...c,
    width: final
  };
}
function useColumnSizer(columns, rows, getCellsForSelection, clientWidth, minColumnWidth, maxColumnWidth, theme, getCellRenderer, abortController) {
  const rowsRef = React6.useRef(rows);
  const getCellsForSelectionRef = React6.useRef(getCellsForSelection);
  const themeRef = React6.useRef(theme);
  rowsRef.current = rows;
  getCellsForSelectionRef.current = getCellsForSelection;
  themeRef.current = theme;
  const [canvas, ctx] = React6.useMemo(() => {
    if (typeof window === "undefined")
      return [null, null];
    const offscreen = document.createElement("canvas");
    offscreen.style["display"] = "none";
    offscreen.style["opacity"] = "0";
    offscreen.style["position"] = "fixed";
    return [offscreen, offscreen.getContext("2d", { alpha: false })];
  }, []);
  React6.useLayoutEffect(() => {
    if (canvas)
      document.documentElement.append(canvas);
    return () => {
      canvas?.remove();
    };
  }, [canvas]);
  const memoMap = React6.useRef({});
  const lastColumns = React6.useRef();
  const [selectedData, setSelectionData] = React6.useState();
  React6.useLayoutEffect(() => {
    const getCells = getCellsForSelectionRef.current;
    if (getCells === void 0 || columns.every(isSizedGridColumn))
      return;
    let computeRows = Math.max(1, 10 - Math.floor(columns.length / 1e4));
    let tailRows = 0;
    if (computeRows < rowsRef.current && computeRows > 1) {
      computeRows--;
      tailRows = 1;
    }
    const computeArea = {
      x: 0,
      y: 0,
      width: columns.length,
      height: Math.min(rowsRef.current, computeRows)
    };
    const tailComputeArea = {
      x: 0,
      y: rowsRef.current - 1,
      width: columns.length,
      height: 1
    };
    const fn = async () => {
      const getResult = getCells(computeArea, abortController.signal);
      const tailGetResult = tailRows > 0 ? getCells(tailComputeArea, abortController.signal) : void 0;
      let toSet;
      if (typeof getResult === "object") {
        toSet = getResult;
      } else {
        toSet = await resolveCellsThunk(getResult);
      }
      if (tailGetResult !== void 0) {
        if (typeof tailGetResult === "object") {
          toSet = [...toSet, ...tailGetResult];
        } else {
          toSet = [...toSet, ...await resolveCellsThunk(tailGetResult)];
        }
      }
      lastColumns.current = columns;
      setSelectionData(toSet);
    };
    void fn();
  }, [abortController.signal, columns]);
  return React6.useMemo(() => {
    const getRaw = () => {
      if (columns.every(isSizedGridColumn)) {
        return columns;
      }
      if (ctx === null) {
        return columns.map((c) => {
          if (isSizedGridColumn(c))
            return c;
          return {
            ...c,
            width: defaultSize
          };
        });
      }
      ctx.font = themeRef.current.baseFontFull;
      return columns.map((c, colIndex) => {
        if (isSizedGridColumn(c))
          return c;
        if (memoMap.current[c.id] !== void 0) {
          return {
            ...c,
            width: memoMap.current[c.id]
          };
        }
        if (selectedData === void 0 || lastColumns.current !== columns || c.id === void 0) {
          return {
            ...c,
            width: defaultSize
          };
        }
        const r = measureColumn(ctx, theme, c, colIndex, selectedData, minColumnWidth, maxColumnWidth, true, getCellRenderer);
        memoMap.current[c.id] = r.width;
        return r;
      });
    };
    let result = getRaw();
    let totalWidth = 0;
    let totalGrow = 0;
    const distribute = [];
    for (const [i, c] of result.entries()) {
      totalWidth += c.width;
      if (c.grow !== void 0 && c.grow > 0) {
        totalGrow += c.grow;
        distribute.push(i);
      }
    }
    if (totalWidth < clientWidth && distribute.length > 0) {
      const writeable = [...result];
      const extra = clientWidth - totalWidth;
      let remaining = extra;
      for (let di = 0; di < distribute.length; di++) {
        const i = distribute[di];
        const weighted = (result[i].grow ?? 0) / totalGrow;
        const toAdd = di === distribute.length - 1 ? remaining : Math.min(remaining, Math.floor(extra * weighted));
        writeable[i] = {
          ...result[i],
          growOffset: toAdd,
          width: result[i].width + toAdd
        };
        remaining -= toAdd;
      }
      result = writeable;
    }
    return {
      sizedColumns: result,
      nonGrowWidth: totalWidth
    };
  }, [clientWidth, columns, ctx, selectedData, theme, minColumnWidth, maxColumnWidth, getCellRenderer]);
}

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor-all.js
var React33 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor.js
var React20 = __toESM(require_react(), 1);
var import_clamp4 = __toESM(require_clamp(), 1);
var import_uniq = __toESM(require_uniq(), 1);
var import_flatten = __toESM(require_flatten(), 1);
var import_range2 = __toESM(require_range(), 1);
var import_debounce2 = __toESM(require_debounce(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-search/data-grid-search.js
var React12 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/scrolling-data-grid.js
var React11 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-dnd/data-grid-dnd.js
var import_clamp3 = __toESM(require_clamp(), 1);
var React9 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid.js
var React8 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/sprites.js
var iconHead = `<svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">`;
var headerRowID = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}<rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/><path d="M15.75 4h-1.5a.25.25 0 0 0-.177.074L9.308 8.838a3.75 3.75 0 1 0 1.854 1.854l1.155-1.157.967.322a.5.5 0 0 0 .65-.55l-.18-1.208.363-.363.727.331a.5.5 0 0 0 .69-.59l-.254-.904.647-.647A.25.25 0 0 0 16 5.75v-1.5a.25.25 0 0 0-.25-.25zM7.5 13.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" fill="${fg}"/></svg>`;
};
var headerCode = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}<rect x="2" y="2" width="16" height="16" rx="4" fill="${bg}"/><path d="m12.223 13.314 3.052-2.826a.65.65 0 0 0 0-.984l-3.052-2.822c-.27-.25-.634-.242-.865.022-.232.263-.206.636.056.882l2.601 2.41-2.601 2.41c-.262.245-.288.619-.056.882.231.263.595.277.865.026Zm-4.444.005c.266.25.634.241.866-.027.231-.263.206-.636-.06-.882L5.983 10l2.602-2.405c.266-.25.291-.62.06-.887-.232-.263-.596-.272-.866-.022L4.723 9.51a.653.653 0 0 0 0 .983l3.056 2.827Z" fill="${fg}"/></svg>`;
};
var headerNumber = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M6.52 12.78H5.51V8.74l-1.33.47v-.87l2.29-.83h.05v5.27zm5.2 0H8.15v-.69l1.7-1.83a6.38 6.38 0 0 0 .34-.4c.09-.11.16-.22.22-.32s.1-.19.12-.27a.9.9 0 0 0 0-.56.63.63 0 0 0-.15-.23.58.58 0 0 0-.22-.15.75.75 0 0 0-.29-.05c-.27 0-.48.08-.62.23a.95.95 0 0 0-.2.65H8.03c0-.24.04-.46.13-.67a1.67 1.67 0 0 1 .97-.91c.23-.1.49-.14.77-.14.26 0 .5.04.7.11.21.08.38.18.52.32.14.13.25.3.32.48a1.74 1.74 0 0 1 .03 1.13 2.05 2.05 0 0 1-.24.47 4.16 4.16 0 0 1-.35.47l-.47.5-1 1.05h2.32v.8zm1.8-3.08h.55c.28 0 .48-.06.61-.2a.76.76 0 0 0 .2-.55.8.8 0 0 0-.05-.28.56.56 0 0 0-.13-.22.6.6 0 0 0-.23-.15.93.93 0 0 0-.32-.05.92.92 0 0 0-.29.05.72.72 0 0 0-.23.12.57.57 0 0 0-.21.46H12.4a1.3 1.3 0 0 1 .5-1.04c.15-.13.33-.23.54-.3a2.48 2.48 0 0 1 1.4 0c.2.06.4.15.55.28.15.13.27.28.36.47.08.19.13.4.13.65a1.15 1.15 0 0 1-.2.65 1.36 1.36 0 0 1-.58.49c.15.05.28.12.38.2a1.14 1.14 0 0 1 .43.62c.03.13.05.26.05.4 0 .25-.05.47-.14.66a1.42 1.42 0 0 1-.4.49c-.16.13-.35.23-.58.3a2.51 2.51 0 0 1-.73.1c-.22 0-.44-.03-.65-.09a1.8 1.8 0 0 1-.57-.28 1.43 1.43 0 0 1-.4-.47 1.41 1.41 0 0 1-.15-.66h1a.66.66 0 0 0 .22.5.87.87 0 0 0 .58.2c.25 0 .45-.07.6-.2a.71.71 0 0 0 .21-.56.97.97 0 0 0-.06-.36.61.61 0 0 0-.18-.25.74.74 0 0 0-.28-.15 1.33 1.33 0 0 0-.37-.04h-.55V9.7z" fill="${fg}"/>
  </svg>`;
};
var headerString = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M8.182 12.4h3.636l.655 1.6H14l-3.454-8H9.455L6 14h1.527l.655-1.6zM10 7.44l1.36 3.651H8.64L10 7.441z" fill="${fg}"/>
</svg>`;
};
var headerBoolean = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
    <path
        d="M16.2222 2H3.77778C2.8 2 2 2.8 2 3.77778V16.2222C2 17.2 2.8 18 3.77778 18H16.2222C17.2 18 17.9911 17.2 17.9911 16.2222L18 3.77778C18 2.8 17.2 2 16.2222 2Z"
        fill="${bg}"
    />
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.66667 6.66669C5.73368 6.66669 4.16667 8.15907 4.16667 10C4.16667 11.841 5.73368 13.3334 7.66667 13.3334H12.3333C14.2663 13.3334 15.8333 11.841 15.8333 10C15.8333 8.15907 14.2663 6.66669 12.3333 6.66669H7.66667ZM12.5 12.5C13.8807 12.5 15 11.3807 15 10C15 8.61931 13.8807 7.50002 12.5 7.50002C11.1193 7.50002 10 8.61931 10 10C10 11.3807 11.1193 12.5 12.5 12.5Z"
        fill="${fg}"
    />
</svg>`;
};
var headerUri = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
<path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.29 4.947a3.368 3.368 0 014.723.04 3.375 3.375 0 01.041 4.729l-.009.009-1.596 1.597a3.367 3.367 0 01-5.081-.364.71.71 0 011.136-.85 1.95 1.95 0 002.942.21l1.591-1.593a1.954 1.954 0 00-.027-2.733 1.95 1.95 0 00-2.732-.027l-.91.907a.709.709 0 11-1.001-1.007l.915-.911.007-.007z" fill="${fg}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.55 8.678a3.368 3.368 0 015.082.364.71.71 0 01-1.136.85 1.95 1.95 0 00-2.942-.21l-1.591 1.593a1.954 1.954 0 00.027 2.733 1.95 1.95 0 002.73.028l.906-.906a.709.709 0 111.003 1.004l-.91.91-.008.01a3.368 3.368 0 01-4.724-.042 3.375 3.375 0 01-.041-4.728l.009-.009L6.55 8.678z" fill="${fg}"/>
</svg>
  `;
};
var renameIcon = (props) => {
  const bg = props.bgColor;
  return `${iconHead}
    <path stroke="${bg}" stroke-width="2" d="M12 3v14"/>
    <path stroke="${bg}" stroke-width="2" stroke-linecap="round" d="M10 4h4m-4 12h4"/>
    <path d="M11 14h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4v2h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4v2ZM9.5 8H5a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4.5v2H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h4.5v2Z" fill="${bg}"/>
  </svg>
`;
};
var headerAudioUri = headerUri;
var headerVideoUri = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 13.138a.5.5 0 00.748.434l5.492-3.138a.5.5 0 000-.868L7.748 6.427A.5.5 0 007 6.862v6.276z" fill="${fg}"/>
</svg>`;
};
var headerEmoji = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path d="M10 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 9.17A4.17 4.17 0 0 1 5.83 10 4.17 4.17 0 0 1 10 5.83 4.17 4.17 0 0 1 14.17 10 4.17 4.17 0 0 1 10 14.17z" fill="${fg}"/>
    <path d="M8.33 8.21a.83.83 0 1 0-.03 1.67.83.83 0 0 0 .03-1.67zm3.34 0a.83.83 0 1 0-.04 1.67.83.83 0 0 0 .04-1.67z" fill="${fg}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.53 13.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${fg}"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 11a5 5 0 1 1 .01-10.01A5 5 0 0 1 10 15z" fill="${fg}"/>
    <path d="M8 7.86a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2zm4 0a1 1 0 1 0-.04 2 1 1 0 0 0 .04-2z" fill="${fg}"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.53 11.9a2.82 2.82 0 0 1-5.06 0l.77-.38a1.97 1.97 0 0 0 3.52 0l.77.39z" fill="${fg}"/>
  </svg>`;
};
var headerImage = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path opacity=".5" fill-rule="evenodd" clip-rule="evenodd" d="M12.499 10.801a.5.5 0 01.835 0l2.698 4.098a.5.5 0 01-.418.775H10.22a.5.5 0 01-.417-.775l2.697-4.098z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07 8.934a.5.5 0 01.824 0l4.08 5.958a.5.5 0 01-.412.782h-8.16a.5.5 0 01-.413-.782l4.08-5.958zM13.75 8.333a2.083 2.083 0 100-4.166 2.083 2.083 0 000 4.166z" fill="${fg}"/>
</svg>`;
};
var headerPhone = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path fill="${fg}" d="M3 3h14v14H3z"/>
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2zm-7.24 9.78h1.23c.15 0 .27.06.36.18l.98 1.28a.43.43 0 0 1-.05.58l-1.2 1.21a.45.45 0 0 1-.6.04A6.72 6.72 0 0 1 7.33 10c0-.61.1-1.2.25-1.78a6.68 6.68 0 0 1 2.12-3.3.44.44 0 0 1 .6.04l1.2 1.2c.16.17.18.42.05.59l-.98 1.29a.43.43 0 0 1-.36.17H8.98A5.38 5.38 0 0 0 8.67 10c0 .62.11 1.23.3 1.79z" fill="${bg}"/>
  </svg>`;
};
var headerMarkdown = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="m13.49 13.15-2.32-3.27h1.4V7h1.86v2.88h1.4l-2.34 3.27zM11 13H9v-3l-1.5 1.92L6 10v3H4V7h2l1.5 2L9 7h2v6z" fill="${fg}"/>
  </svg>`;
};
var headerDate = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M14.8 4.182h-.6V3H13v1.182H7V3H5.8v1.182h-.6c-.66 0-1.2.532-1.2 1.182v9.454C4 15.468 4.54 16 5.2 16h9.6c.66 0 1.2-.532 1.2-1.182V5.364c0-.65-.54-1.182-1.2-1.182zm0 10.636H5.2V7.136h9.6v7.682z" fill="${fg}"/>
</svg>`;
};
var headerTime = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 4a6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6 6 6 0 0 0-6-6zm0 10.8A4.8 4.8 0 0 1 5.2 10a4.8 4.8 0 1 1 4.8 4.8z" fill="${fg}"/>
    <path d="M10 7H9v3.93L12.5 13l.5-.8-3-1.76V7z" fill="${fg}"/>
  </svg>`;
};
var headerEmail = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.643a1.357 1.357 0 100 2.714 1.357 1.357 0 000-2.714zM7.357 10a2.643 2.643 0 115.286 0 2.643 2.643 0 01-5.286 0z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.589 4.898A5.643 5.643 0 0115.643 10v.5a2.143 2.143 0 01-4.286 0V8a.643.643 0 011.286 0v2.5a.857.857 0 001.714 0V10a4.357 4.357 0 10-1.708 3.46.643.643 0 01.782 1.02 5.643 5.643 0 11-5.842-9.582z" fill="${fg}"/>
</svg>`;
};
var headerReference = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <rect x="2" y="8" width="10" height="8" rx="2" fill="${bg}"/>
    <rect x="8" y="4" width="10" height="8" rx="2" fill="${bg}"/>
    <path d="M10.68 7.73V6l2.97 3.02-2.97 3.02v-1.77c-2.13 0-3.62.7-4.68 2.2.43-2.15 1.7-4.31 4.68-4.74z" fill="${fg}"/>
  </svg>`;
};
var headerIfThenElse = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path fill="${fg}" d="M4 3h12v14H4z"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2A1.6 1.6 0 002 3.6v12.8A1.6 1.6 0 003.6 18h12.8a1.6 1.6 0 001.6-1.6V3.6A1.6 1.6 0 0016.4 2H3.6zm11.3 10.8a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7h-1.4a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.6-.693.117.117 0 00.1-.115V10.35a.117.117 0 00-.117-.116h-2.8a.117.117 0 00-.117.116v2.333c0 .064.053.117.117.117h.117a.7.7 0 01.7.7v1.4a.7.7 0 01-.7.7H9.3a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.117a.117.117 0 00.117-.117V10.35a.117.117 0 00-.117-.117h-2.8a.117.117 0 00-.117.117v2.342c0 .058.042.106.1.115a.7.7 0 01.6.693v1.4a.7.7 0 01-.7.7H5.1a.7.7 0 01-.7-.7v-1.4a.7.7 0 01.7-.7h.35a.116.116 0 00.116-.117v-2.45c0-.515.418-.933.934-.933h2.917a.117.117 0 00.117-.117V6.85a.117.117 0 00-.117-.116h-2.45a.7.7 0 01-.7-.7V5.1a.7.7 0 01.7-.7h6.067a.7.7 0 01.7.7v.934a.7.7 0 01-.7.7h-2.45a.117.117 0 00-.118.116v2.333c0 .064.053.117.117.117H13.5c.516 0 .934.418.934.934v2.45c0 .063.052.116.116.116h.35z" fill="${bg}"/>
</svg>`;
};
var headerSingleValue = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M9.98 13.33c.45 0 .74-.3.73-.75l-.01-.1-.16-1.67 1.45 1.05a.81.81 0 0 0 .5.18c.37 0 .72-.32.72-.76 0-.3-.17-.54-.49-.68l-1.63-.77 1.63-.77c.32-.14.49-.37.49-.67 0-.45-.34-.76-.71-.76a.81.81 0 0 0-.5.18l-1.47 1.03.16-1.74.01-.08c.01-.46-.27-.76-.72-.76-.46 0-.76.32-.75.76l.01.08.16 1.74-1.47-1.03a.77.77 0 0 0-.5-.18.74.74 0 0 0-.72.76c0 .3.17.53.49.67l1.63.77-1.62.77c-.32.14-.5.37-.5.68 0 .44.35.75.72.75a.78.78 0 0 0 .5-.17L9.4 10.8l-.16 1.68v.09c-.02.44.28.75.74.75z" fill="${fg}"/>
  </svg>`;
};
var headerLookup = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M8 5.83H5.83a.83.83 0 0 0 0 1.67h1.69A4.55 4.55 0 0 1 8 5.83zm-.33 3.34H5.83a.83.83 0 0 0 0 1.66h2.72a4.57 4.57 0 0 1-.88-1.66zM5.83 12.5a.83.83 0 0 0 0 1.67h7.5a.83.83 0 1 0 0-1.67h-7.5zm8.8-2.9a3.02 3.02 0 0 0 .46-1.6c0-1.66-1.32-3-2.94-3C10.52 5 9.2 6.34 9.2 8s1.31 3 2.93 3c.58 0 1.11-.17 1.56-.47l2.04 2.08.93-.94-2.04-2.08zm-2.48.07c-.9 0-1.63-.75-1.63-1.67s.73-1.67 1.63-1.67c.9 0 1.63.75 1.63 1.67s-.73 1.67-1.63 1.67z" fill="${fg}"/>
  </svg>`;
};
var headerTextTemplate = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path d="M7.676 4.726V3l2.976 3.021-2.976 3.022v-1.77c-2.125 0-3.613.69-4.676 2.201.425-2.158 1.7-4.316 4.676-4.748zM10.182 14.4h3.636l.655 1.6H16l-3.454-8h-1.091L8 16h1.527l.655-1.6zM12 9.44l1.36 3.65h-2.72L12 9.44z" fill="${fg}"/>
</svg>`;
};
var headerMath = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.167 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666H4.167z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.083 4.167a.833.833 0 10-1.666 0v4.166a.833.833 0 101.666 0V4.167zM11.667 5.417a.833.833 0 100 1.666h4.166a.833.833 0 100-1.666h-4.166zM5.367 11.688a.833.833 0 00-1.179 1.179l2.947 2.946a.833.833 0 001.178-1.178l-2.946-2.947z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.313 12.867a.833.833 0 10-1.178-1.179l-2.947 2.947a.833.833 0 101.179 1.178l2.946-2.946z" fill="${fg}"/>
  <path d="M10.833 12.5c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833zM10.833 15c0-.46.373-.833.834-.833h4.166a.833.833 0 110 1.666h-4.166a.833.833 0 01-.834-.833z" fill="${fg}"/>
</svg>`;
};
var headerRollup = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <path d="M16.22 2H3.78C2.8 2 2 2.8 2 3.78v12.44C2 17.2 2.8 18 3.78 18h12.44c.98 0 1.77-.8 1.77-1.78L18 3.78C18 2.8 17.2 2 16.22 2z" fill="${bg}"/>
    <path d="M10 8.84a1.16 1.16 0 1 0 0 2.32 1.16 1.16 0 0 0 0-2.32zm3.02 3.61a3.92 3.92 0 0 0 .78-3.28.49.49 0 1 0-.95.2c.19.87-.02 1.78-.58 2.47a2.92 2.92 0 1 1-4.13-4.08 2.94 2.94 0 0 1 2.43-.62.49.49 0 1 0 .17-.96 3.89 3.89 0 1 0 2.28 6.27zM10 4.17a5.84 5.84 0 0 0-5.44 7.93.49.49 0 1 0 .9-.35 4.86 4.86 0 1 1 2.5 2.67.49.49 0 1 0-.4.88c.76.35 1.6.54 2.44.53a5.83 5.83 0 0 0 0-11.66zm3.02 3.5a.7.7 0 1 0-1.4 0 .7.7 0 0 0 1.4 0zm-6.97 5.35a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4z" fill="${fg}"/>
  </svg>`;
};
var headerJoinStrings = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path d="M12.4 13.565c1.865-.545 3.645-2.083 3.645-4.396 0-1.514-.787-2.604-2.071-2.604C12.69 6.565 12 7.63 12 8.939c1.114.072 1.865.726 1.865 1.683 0 .933-.8 1.647-1.84 2.023l.375.92zM4 5h6v2H4zM4 9h5v2H4zM4 13h4v2H4z" fill="${fg}"/>
</svg>`;
};
var headerSplitString = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    ${iconHead}
    <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
    <path d="M12.4 13.56c1.86-.54 3.65-2.08 3.65-4.4 0-1.5-.8-2.6-2.08-2.6S12 7.64 12 8.95c1.11.07 1.86.73 1.86 1.68 0 .94-.8 1.65-1.83 2.03l.37.91zM4 5h6v2H4zm0 4h5v2H4zm0 4h4v2H4z" fill="${fg}"/>
  </svg>`;
};
var headerGeoDistance = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <path d="M16.222 2H3.778C2.8 2 2 2.8 2 3.778v12.444C2 17.2 2.8 18 3.778 18h12.444c.978 0 1.77-.8 1.77-1.778L18 3.778C18 2.8 17.2 2 16.222 2z" fill="${bg}"/>
  <path d="M10 7a1 1 0 100-2v2zm0 6a1 1 0 100 2v-2zm0-8H7v2h3V5zm-3 6h5V9H7v2zm5 2h-2v2h2v-2zm1-1a1 1 0 01-1 1v2a3 3 0 003-3h-2zm-1-1a1 1 0 011 1h2a3 3 0 00-3-3v2zM4 8a3 3 0 003 3V9a1 1 0 01-1-1H4zm3-3a3 3 0 00-3 3h2a1 1 0 011-1V5z" fill="${fg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.856 12.014a.5.5 0 00-.712.702L5.409 14l-1.265 1.284a.5.5 0 00.712.702l1.255-1.274 1.255 1.274a.5.5 0 00.712-.702L6.813 14l1.265-1.284a.5.5 0 00-.712-.702L6.11 13.288l-1.255-1.274zM12.856 4.014a.5.5 0 00-.712.702L13.409 6l-1.265 1.284a.5.5 0 10.712.702l1.255-1.274 1.255 1.274a.5.5 0 10.712-.702L14.813 6l1.265-1.284a.5.5 0 00-.712-.702L14.11 5.288l-1.255-1.274z" fill="${fg}"/>
</svg>`;
};
var headerArray = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `${iconHead}
  <rect x="2" y="2" width="16" height="16" rx="2" fill="${bg}"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.25 7.25a.75.75 0 000-1.5h-6.5a.75.75 0 100 1.5h6.5zM15 10a.75.75 0 01-.75.75h-6.5a.75.75 0 010-1.5h6.5A.75.75 0 0115 10zm-.75 4.25a.75.75 0 000-1.5h-6.5a.75.75 0 000 1.5h6.5zm-8.987-7a.75.75 0 100-1.5.75.75 0 000 1.5zm.75 2.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 4.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill="${fg}"/>
</svg>`;
};
var rowOwnerOverlay = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 15v1h14v-2.5c0-.87-.44-1.55-.98-2.04a6.19 6.19 0 0 0-1.9-1.14 12.1 12.1 0 0 0-2.48-.67A4 4 0 1 0 5 6a4 4 0 0 0 2.36 3.65c-.82.13-1.7.36-2.48.67-.69.28-1.37.65-1.9 1.13A2.8 2.8 0 0 0 2 13.5V15z" fill="${bg}" stroke="${fg}" stroke-width="2"/>
  </svg>`;
};
var protectedColumnOverlay = (props) => {
  const fg = props.fgColor;
  const bg = props.bgColor;
  return `
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.43 6.04v-.18a3.86 3.86 0 0 0-7.72 0v.18A2.15 2.15 0 0 0 3 8.14v5.72C3 15.04 3.96 16 5.14 16H12c1.18 0 2.14-.96 2.14-2.14V8.14c0-1.03-.73-1.9-1.71-2.1zM7.86 6v-.14a.71.71 0 1 1 1.43 0V6H7.86z" fill="${bg}" stroke="${fg}" stroke-width="2"/>
  </svg>
`;
};
var sprites = {
  headerRowID,
  headerNumber,
  headerCode,
  headerString,
  headerBoolean,
  headerAudioUri,
  headerVideoUri,
  headerEmoji,
  headerImage,
  headerUri,
  headerPhone,
  headerMarkdown,
  headerDate,
  headerTime,
  headerEmail,
  headerReference,
  headerIfThenElse,
  headerSingleValue,
  headerLookup,
  headerTextTemplate,
  headerMath,
  headerRollup,
  headerJoinStrings,
  headerSplitString,
  headerGeoDistance,
  headerArray,
  rowOwnerOverlay,
  protectedColumnOverlay,
  renameIcon
};

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid-sprites.js
function getColors(variant, theme) {
  if (variant === "normal") {
    return [theme.bgIconHeader, theme.fgIconHeader];
  } else if (variant === "selected") {
    return ["white", theme.accentColor];
  } else {
    return [theme.accentColor, theme.bgHeader];
  }
}
var SpriteManager = class {
  onSettled;
  spriteMap = /* @__PURE__ */ new Map();
  headerIcons;
  inFlight = 0;
  constructor(headerIcons, onSettled) {
    this.onSettled = onSettled;
    this.headerIcons = headerIcons ?? {};
  }
  drawSprite(sprite, variant, ctx, x2, y2, size, theme, alpha = 1) {
    const [bgColor, fgColor] = getColors(variant, theme);
    const rSize = size * Math.ceil(window.devicePixelRatio);
    const key = `${bgColor}_${fgColor}_${rSize}_${sprite}`;
    let spriteCanvas = this.spriteMap.get(key);
    if (spriteCanvas === void 0) {
      const spriteCb = this.headerIcons[sprite];
      if (spriteCb === void 0)
        return;
      spriteCanvas = document.createElement("canvas");
      const spriteCtx = spriteCanvas.getContext("2d");
      if (spriteCtx === null)
        return;
      const imgSource = new Image();
      imgSource.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(spriteCb({ fgColor, bgColor }))}`;
      this.spriteMap.set(key, spriteCanvas);
      const promise = imgSource.decode();
      if (promise === void 0)
        return;
      this.inFlight++;
      promise.then(() => {
        spriteCtx.drawImage(imgSource, 0, 0, rSize, rSize);
      }).finally(() => {
        this.inFlight--;
        if (this.inFlight === 0) {
          this.onSettled();
        }
      });
    } else {
      if (alpha < 1) {
        ctx.globalAlpha = alpha;
      }
      ctx.drawImage(spriteCanvas, 0, 0, rSize, rSize, x2, y2, size, size);
      if (alpha < 1) {
        ctx.globalAlpha = 1;
      }
    }
  }
};

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid.js
var import_clamp2 = __toESM(require_clamp(), 1);
var import_range = __toESM(require_range(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.walk.js
function getSkipPoint(drawRegions) {
  if (drawRegions.length === 0)
    return void 0;
  let drawRegionsLowestY;
  for (const dr of drawRegions) {
    drawRegionsLowestY = Math.min(drawRegionsLowestY ?? dr.y, dr.y);
  }
}
function walkRowsInCol(startRow, drawY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, skipToY, cb) {
  skipToY = skipToY ?? drawY;
  let y2 = drawY;
  let row = startRow;
  const rowEnd = rows - freezeTrailingRows;
  let didBreak = false;
  while (y2 < height && row < rowEnd) {
    const rh = getRowHeight(row);
    if (y2 + rh > skipToY && cb(y2, row, rh, false, hasAppendRow && row === rows - 1) === true) {
      didBreak = true;
      break;
    }
    y2 += rh;
    row++;
  }
  if (didBreak)
    return;
  y2 = height;
  for (let fr = 0; fr < freezeTrailingRows; fr++) {
    row = rows - 1 - fr;
    const rh = getRowHeight(row);
    y2 -= rh;
    cb(y2, row, rh, true, hasAppendRow && row === rows - 1);
  }
}
function walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, cb) {
  let x2 = 0;
  let clipX = 0;
  const drawY = totalHeaderHeight + translateY;
  for (const c of effectiveCols) {
    const drawX = c.sticky ? clipX : x2 + translateX;
    if (cb(c, drawX, drawY, c.sticky ? 0 : clipX, cellYOffset) === true) {
      break;
    }
    x2 += c.width;
    clipX += c.sticky ? c.width : 0;
  }
}
function walkGroups(effectiveCols, width, translateX, groupHeaderHeight, cb) {
  let x2 = 0;
  let clipX = 0;
  for (let index = 0; index < effectiveCols.length; index++) {
    const startCol = effectiveCols[index];
    let end = index + 1;
    let boxWidth = startCol.width;
    if (startCol.sticky) {
      clipX += boxWidth;
    }
    while (end < effectiveCols.length && isGroupEqual(effectiveCols[end].group, startCol.group) && effectiveCols[end].sticky === effectiveCols[index].sticky) {
      const endCol = effectiveCols[end];
      boxWidth += endCol.width;
      end++;
      index++;
      if (endCol.sticky) {
        clipX += endCol.width;
      }
    }
    const t = startCol.sticky ? 0 : translateX;
    const localX = x2 + t;
    const delta = startCol.sticky ? 0 : Math.max(0, clipX - localX);
    const w3 = Math.min(boxWidth - delta, width - (localX + delta));
    cb([startCol.sourceIndex, effectiveCols[end - 1].sourceIndex], startCol.group ?? "", localX + delta, 0, w3, groupHeaderHeight);
    x2 += boxWidth;
  }
}
function getSpanBounds(span, cellX, cellY, cellW, cellH, column, allColumns) {
  const [startCol, endCol] = span;
  let frozenRect;
  let contentRect;
  const firstNonSticky = allColumns.find((x2) => !x2.sticky)?.sourceIndex ?? 0;
  if (endCol > firstNonSticky) {
    const renderFromCol = Math.max(startCol, firstNonSticky);
    let tempX = cellX;
    let tempW = cellW;
    for (let x2 = column.sourceIndex - 1; x2 >= renderFromCol; x2--) {
      tempX -= allColumns[x2].width;
      tempW += allColumns[x2].width;
    }
    for (let x2 = column.sourceIndex + 1; x2 <= endCol; x2++) {
      tempW += allColumns[x2].width;
    }
    contentRect = {
      x: tempX,
      y: cellY,
      width: tempW,
      height: cellH
    };
  }
  if (firstNonSticky > startCol) {
    const renderToCol = Math.min(endCol, firstNonSticky - 1);
    let tempX = cellX;
    let tempW = cellW;
    for (let x2 = column.sourceIndex - 1; x2 >= startCol; x2--) {
      tempX -= allColumns[x2].width;
      tempW += allColumns[x2].width;
    }
    for (let x2 = column.sourceIndex + 1; x2 <= renderToCol; x2++) {
      tempW += allColumns[x2].width;
    }
    frozenRect = {
      x: tempX,
      y: cellY,
      width: tempW,
      height: cellH
    };
  }
  return [frozenRect, contentRect];
}

// node_modules/@glideapps/glide-data-grid/dist/esm/common/math.js
function getClosestRect(rect, px, py, allowedDirections) {
  if (allowedDirections === "any")
    return combineRects(rect, { x: px, y: py, width: 1, height: 1 });
  if (allowedDirections === "vertical")
    px = rect.x;
  if (allowedDirections === "horizontal")
    py = rect.y;
  if (itemIsInRect([px, py], rect)) {
    return void 0;
  }
  const distanceToLeft = px - rect.x;
  const distanceToRight = rect.x + rect.width - px;
  const distanceToTop = py - rect.y + 1;
  const distanceToBottom = rect.y + rect.height - py;
  const minDistance = Math.min(allowedDirections === "vertical" ? Number.MAX_SAFE_INTEGER : distanceToLeft, allowedDirections === "vertical" ? Number.MAX_SAFE_INTEGER : distanceToRight, allowedDirections === "horizontal" ? Number.MAX_SAFE_INTEGER : distanceToTop, allowedDirections === "horizontal" ? Number.MAX_SAFE_INTEGER : distanceToBottom);
  if (minDistance === distanceToBottom) {
    return { x: rect.x, y: rect.y + rect.height, width: rect.width, height: py - rect.y - rect.height + 1 };
  } else if (minDistance === distanceToTop) {
    return { x: rect.x, y: py, width: rect.width, height: rect.y - py };
  } else if (minDistance === distanceToRight) {
    return { x: rect.x + rect.width, y: rect.y, width: px - rect.x - rect.width + 1, height: rect.height };
  } else {
    return { x: px, y: rect.y, width: rect.x - px, height: rect.height };
  }
}
function intersectRect(x1, y1, w1, h1, x2, y2, w22, h2) {
  return x1 <= x2 + w22 && x2 <= x1 + w1 && y1 <= y2 + h2 && y2 <= y1 + h1;
}
function pointInRect(rect, x2, y2) {
  return x2 >= rect.x && x2 <= rect.x + rect.width && y2 >= rect.y && y2 <= rect.y + rect.height;
}
function combineRects(a, b3) {
  const x2 = Math.min(a.x, b3.x);
  const y2 = Math.min(a.y, b3.y);
  const width = Math.max(a.x + a.width, b3.x + b3.width) - x2;
  const height = Math.max(a.y + a.height, b3.y + b3.height) - y2;
  return { x: x2, y: y2, width, height };
}
function rectContains(a, b3) {
  return a.x <= b3.x && a.y <= b3.y && a.x + a.width >= b3.x + b3.width && a.y + a.height >= b3.y + b3.height;
}
function hugRectToTarget(rect, width, height, mod) {
  if (rect.x > width || rect.y > height || rect.x < 0 && rect.y < 0 && rect.x + rect.width > width && rect.y + rect.height > height) {
    return void 0;
  }
  if (rect.x >= 0 && rect.y >= 0 && rect.x + rect.width <= width && rect.y + rect.height <= height) {
    return rect;
  }
  const leftMax = -4;
  const topMax = -4;
  const rightMax = width + 4;
  const bottomMax = height + 4;
  const leftOverflow = leftMax - rect.x;
  const rightOverflow = rect.x + rect.width - rightMax;
  const topOverflow = topMax - rect.y;
  const bottomOverflow = rect.y + rect.height - bottomMax;
  const left = leftOverflow > 0 ? rect.x + Math.floor(leftOverflow / mod) * mod : rect.x;
  const right = rightOverflow > 0 ? rect.x + rect.width - Math.floor(rightOverflow / mod) * mod : rect.x + rect.width;
  const top = topOverflow > 0 ? rect.y + Math.floor(topOverflow / mod) * mod : rect.y;
  const bottom = bottomOverflow > 0 ? rect.y + rect.height - Math.floor(bottomOverflow / mod) * mod : rect.y + rect.height;
  return { x: left, y: top, width: right - left, height: bottom - top };
}
function splitRectIntoRegions(rect, splitIndicies, width, height, splitLocations) {
  const [lSplit, tSplit, rSplit, bSplit] = splitIndicies;
  const [lClip, tClip, rClip, bClip] = splitLocations;
  const { x: inX, y: inY, width: inW, height: inH } = rect;
  const result = [];
  if (inW <= 0 || inH <= 0)
    return result;
  const inRight = inX + inW;
  const inBottom = inY + inH;
  const isOverLeft = inX < lSplit;
  const isOverTop = inY < tSplit;
  const isOverRight = inX + inW > rSplit;
  const isOverBottom = inY + inH > bSplit;
  const isOverCenterVert = inX >= lSplit && inX < rSplit || inRight > lSplit && inRight <= rSplit || inX < lSplit && inRight > rSplit;
  const isOverCenterHoriz = inY >= tSplit && inY < bSplit || inBottom > tSplit && inBottom <= bSplit || inY < tSplit && inBottom > bSplit;
  const isOverCenter = isOverCenterVert && isOverCenterHoriz;
  if (isOverCenter) {
    const x2 = Math.max(inX, lSplit);
    const y2 = Math.max(inY, tSplit);
    const right = Math.min(inRight, rSplit);
    const bottom = Math.min(inBottom, bSplit);
    result.push({
      rect: { x: x2, y: y2, width: right - x2, height: bottom - y2 },
      clip: {
        x: lClip,
        y: tClip,
        width: rClip - lClip + 1,
        height: bClip - tClip + 1
      }
    });
  }
  if (isOverLeft && isOverTop) {
    const x2 = inX;
    const y2 = inY;
    const right = Math.min(inRight, lSplit);
    const bottom = Math.min(inBottom, tSplit);
    result.push({
      rect: {
        x: x2,
        y: y2,
        width: right - x2,
        height: bottom - y2
      },
      clip: {
        x: 0,
        y: 0,
        width: lClip + 1,
        height: tClip + 1
      }
    });
  }
  if (isOverTop && isOverCenterVert) {
    const x2 = Math.max(inX, lSplit);
    const y2 = inY;
    const right = Math.min(inRight, rSplit);
    const bottom = Math.min(inBottom, tSplit);
    result.push({
      rect: {
        x: x2,
        y: y2,
        width: right - x2,
        height: bottom - y2
      },
      clip: {
        x: lClip,
        y: 0,
        width: rClip - lClip + 1,
        height: tClip + 1
      }
    });
  }
  if (isOverTop && isOverRight) {
    const x2 = Math.max(inX, rSplit);
    const y2 = inY;
    const right = inRight;
    const bottom = Math.min(inBottom, tSplit);
    result.push({
      rect: {
        x: x2,
        y: y2,
        width: right - x2,
        height: bottom - y2
      },
      clip: {
        x: rClip,
        y: 0,
        width: width - rClip + 1,
        height: tClip + 1
      }
    });
  }
  if (isOverLeft && isOverCenterHoriz) {
    const x2 = inX;
    const y2 = Math.max(inY, tSplit);
    const right = Math.min(inRight, lSplit);
    const bottom = Math.min(inBottom, bSplit);
    result.push({
      rect: {
        x: x2,
        y: y2,
        width: right - x2,
        height: bottom - y2
      },
      clip: {
        x: 0,
        y: tClip,
        width: lClip + 1,
        height: bClip - tClip + 1
      }
    });
  }
  if (isOverRight && isOverCenterHoriz) {
    const x2 = Math.max(inX, rSplit);
    const y2 = Math.max(inY, tSplit);
    const right = inRight;
    const bottom = Math.min(inBottom, bSplit);
    result.push({
      rect: {
        x: x2,
        y: y2,
        width: right - x2,
        height: bottom - y2
      },
      clip: {
        x: rClip,
        y: tClip,
        width: width - rClip + 1,
        height: bClip - tClip + 1
      }
    });
  }
  if (isOverLeft && isOverBottom) {
    const x2 = inX;
    const y2 = Math.max(inY, bSplit);
    const right = Math.min(inRight, lSplit);
    const bottom = inBottom;
    result.push({
      rect: {
        x: x2,
        y: y2,
        width: right - x2,
        height: bottom - y2
      },
      clip: {
        x: 0,
        y: bClip,
        width: lClip + 1,
        height: height - bClip + 1
      }
    });
  }
  if (isOverBottom && isOverCenterVert) {
    const x2 = Math.max(inX, lSplit);
    const y2 = Math.max(inY, bSplit);
    const right = Math.min(inRight, rSplit);
    const bottom = inBottom;
    result.push({
      rect: {
        x: x2,
        y: y2,
        width: right - x2,
        height: bottom - y2
      },
      clip: {
        x: lClip,
        y: bClip,
        width: rClip - lClip + 1,
        height: height - bClip + 1
      }
    });
  }
  if (isOverRight && isOverBottom) {
    const x2 = Math.max(inX, rSplit);
    const y2 = Math.max(inY, bSplit);
    const right = inRight;
    const bottom = inBottom;
    result.push({
      rect: {
        x: x2,
        y: y2,
        width: right - x2,
        height: bottom - y2
      },
      clip: {
        x: rClip,
        y: bClip,
        width: width - rClip + 1,
        height: height - bClip + 1
      }
    });
  }
  return result;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.cells.js
var loadingCell = {
  kind: GridCellKind.Loading,
  allowOverlay: false
};
function drawCells(ctx, effectiveColumns, allColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, freezeTrailingRows, hasAppendRow, drawRegions, damage, selection, prelightCells, highlightRegions, imageLoader, spriteManager, hoverValues, hoverInfo, drawCellCallback, hyperWrapping, outerTheme, enqueue, renderStateProvider, getCellRenderer, overrideCursor, minimumCellWidth) {
  let toDraw = damage?.size ?? Number.MAX_SAFE_INTEGER;
  const frameTime = performance.now();
  let font = outerTheme.baseFontFull;
  ctx.font = font;
  const deprepArg = { ctx };
  const cellIndex = [0, 0];
  const freezeTrailingRowsHeight = freezeTrailingRows > 0 ? getFreezeTrailingHeight(rows, freezeTrailingRows, getRowHeight) : 0;
  let result;
  let handledSpans = void 0;
  const skipPoint = getSkipPoint(drawRegions);
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawStartY, clipX, startRow) => {
    const diff = Math.max(0, clipX - drawX);
    const colDrawX = drawX + diff;
    const colDrawY = totalHeaderHeight + 1;
    const colWidth = c.width - diff;
    const colHeight = height - totalHeaderHeight - 1;
    if (drawRegions.length > 0) {
      let found = false;
      for (let i = 0; i < drawRegions.length; i++) {
        const dr = drawRegions[i];
        if (intersectRect(colDrawX, colDrawY, colWidth, colHeight, dr.x, dr.y, dr.width, dr.height)) {
          found = true;
          break;
        }
      }
      if (!found)
        return;
    }
    const reclip = () => {
      ctx.save();
      ctx.beginPath();
      ctx.rect(colDrawX, colDrawY, colWidth, colHeight);
      ctx.clip();
    };
    const colSelected = selection.columns.hasIndex(c.sourceIndex);
    const groupTheme = getGroupDetails(c.group ?? "").overrideTheme;
    const colTheme = c.themeOverride === void 0 && groupTheme === void 0 ? outerTheme : mergeAndRealizeTheme(outerTheme, groupTheme, c.themeOverride);
    const colFont = colTheme.baseFontFull;
    if (colFont !== font) {
      font = colFont;
      ctx.font = colFont;
    }
    reclip();
    let prepResult = void 0;
    walkRowsInCol(startRow, colDrawStartY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, skipPoint, (drawY, row, rh, isSticky, isTrailingRow) => {
      if (row < 0)
        return;
      cellIndex[0] = c.sourceIndex;
      cellIndex[1] = row;
      if (damage !== void 0 && !damage.has(cellIndex)) {
        return;
      }
      if (drawRegions.length > 0) {
        let found = false;
        for (let i = 0; i < drawRegions.length; i++) {
          const dr = drawRegions[i];
          if (intersectRect(drawX, drawY, c.width, rh, dr.x, dr.y, dr.width, dr.height)) {
            found = true;
            break;
          }
        }
        if (!found)
          return;
      }
      const rowSelected = selection.rows.hasIndex(row);
      const rowDisabled = disabledRows.hasIndex(row);
      const cell = row < rows ? getCellContent(cellIndex) : loadingCell;
      let cellX = drawX;
      let cellWidth = c.width;
      let drawingSpan = false;
      let skipContents = false;
      if (cell.span !== void 0) {
        const [startCol, endCol] = cell.span;
        const spanKey = `${row},${startCol},${endCol},${c.sticky}`;
        if (handledSpans === void 0)
          handledSpans = /* @__PURE__ */ new Set();
        if (!handledSpans.has(spanKey)) {
          const areas = getSpanBounds(cell.span, drawX, drawY, c.width, rh, c, allColumns);
          const area = c.sticky ? areas[0] : areas[1];
          if (!c.sticky && areas[0] !== void 0) {
            skipContents = true;
          }
          if (area !== void 0) {
            cellX = area.x;
            cellWidth = area.width;
            handledSpans.add(spanKey);
            ctx.restore();
            prepResult = void 0;
            ctx.save();
            ctx.beginPath();
            const d3 = Math.max(0, clipX - area.x);
            ctx.rect(area.x + d3, drawY, area.width - d3, rh);
            if (result === void 0) {
              result = [];
            }
            result.push({
              x: area.x + d3,
              y: drawY,
              width: area.width - d3,
              height: rh
            });
            ctx.clip();
            drawingSpan = true;
          }
        } else {
          toDraw--;
          return;
        }
      }
      const rowTheme = getRowThemeOverride?.(row);
      const trailingTheme = isTrailingRow && c.trailingRowOptions?.themeOverride !== void 0 ? c.trailingRowOptions?.themeOverride : void 0;
      const theme = cell.themeOverride === void 0 && rowTheme === void 0 && trailingTheme === void 0 ? colTheme : mergeAndRealizeTheme(colTheme, rowTheme, trailingTheme, cell.themeOverride);
      ctx.beginPath();
      const isSelected = cellIsSelected(cellIndex, cell, selection);
      let accentCount = cellIsInRange(cellIndex, cell, selection, drawFocus);
      const spanIsHighlighted = cell.span !== void 0 && selection.columns.some(
        (index) => cell.span !== void 0 && index >= cell.span[0] && index <= cell.span[1]
      );
      if (isSelected && !isFocused && drawFocus) {
        accentCount = 0;
      } else if (isSelected && drawFocus) {
        accentCount = Math.max(accentCount, 1);
      }
      if (spanIsHighlighted) {
        accentCount++;
      }
      if (!isSelected) {
        if (rowSelected)
          accentCount++;
        if (colSelected && !isTrailingRow)
          accentCount++;
      }
      const bgCell = cell.kind === GridCellKind.Protected ? theme.bgCellMedium : theme.bgCell;
      let fill;
      if (isSticky || bgCell !== outerTheme.bgCell) {
        fill = blend(bgCell, fill);
      }
      if (accentCount > 0 || rowDisabled) {
        if (rowDisabled) {
          fill = blend(theme.bgHeader, fill);
        }
        for (let i = 0; i < accentCount; i++) {
          fill = blend(theme.accentLight, fill);
        }
      } else if (prelightCells !== void 0) {
        for (const pre of prelightCells) {
          if (pre[0] === c.sourceIndex && pre[1] === row) {
            fill = blend(theme.bgSearchResult, fill);
            break;
          }
        }
      }
      if (highlightRegions !== void 0) {
        for (let i = 0; i < highlightRegions.length; i++) {
          const region = highlightRegions[i];
          const r = region.range;
          if (region.style !== "solid-outline" && r.x <= c.sourceIndex && c.sourceIndex < r.x + r.width && r.y <= row && row < r.y + r.height) {
            fill = blend(region.color, fill);
          }
        }
      }
      let didDamageClip = false;
      if (damage !== void 0) {
        const top = drawY + 1;
        const bottom = isSticky ? top + rh - 1 : Math.min(top + rh - 1, height - freezeTrailingRowsHeight);
        const h = bottom - top;
        if (h !== rh - 1 || cellX + 1 <= clipX) {
          didDamageClip = true;
          ctx.save();
          ctx.beginPath();
          ctx.rect(cellX + 1, top, cellWidth - 1, h);
          ctx.clip();
        }
        fill = fill === void 0 ? theme.bgCell : blend(fill, theme.bgCell);
      }
      const isLastColumn = c.sourceIndex === allColumns.length - 1;
      const isLastRow = row === rows - 1;
      if (fill !== void 0) {
        ctx.fillStyle = fill;
        if (prepResult !== void 0) {
          prepResult.fillStyle = fill;
        }
        if (damage !== void 0) {
          ctx.fillRect(cellX + 1, drawY + 1, cellWidth - (isLastColumn ? 2 : 1), rh - (isLastRow ? 2 : 1));
        } else {
          ctx.fillRect(cellX, drawY, cellWidth, rh);
        }
      }
      if (cell.style === "faded") {
        ctx.globalAlpha = 0.6;
      }
      let hoverValue;
      for (let i = 0; i < hoverValues.length; i++) {
        const hv = hoverValues[i];
        if (hv.item[0] === c.sourceIndex && hv.item[1] === row) {
          hoverValue = hv;
          break;
        }
      }
      if (cellWidth > minimumCellWidth && !skipContents) {
        const cellFont = theme.baseFontFull;
        if (cellFont !== font) {
          ctx.font = cellFont;
          font = cellFont;
        }
        prepResult = drawCell(ctx, cell, c.sourceIndex, row, isLastColumn, isLastRow, cellX, drawY, cellWidth, rh, accentCount > 0, theme, fill ?? theme.bgCell, imageLoader, spriteManager, hoverValue?.hoverAmount ?? 0, hoverInfo, hyperWrapping, frameTime, drawCellCallback, prepResult, enqueue, renderStateProvider, getCellRenderer, overrideCursor);
      }
      if (didDamageClip) {
        ctx.restore();
      }
      if (cell.style === "faded") {
        ctx.globalAlpha = 1;
      }
      toDraw--;
      if (drawingSpan) {
        ctx.restore();
        prepResult?.deprep?.(deprepArg);
        prepResult = void 0;
        reclip();
        font = colFont;
        ctx.font = colFont;
      }
      return toDraw <= 0;
    });
    ctx.restore();
    return toDraw <= 0;
  });
  return result;
}
var allocatedItem = [0, 0];
var reusableRect = { x: 0, y: 0, width: 0, height: 0 };
var drawState = [void 0, () => void 0];
var animationFrameRequested = false;
function animRequest() {
  animationFrameRequested = true;
}
function drawCell(ctx, cell, col, row, isLastCol, isLastRow, x2, y2, w3, h, highlighted, theme, finalCellFillColor, imageLoader, spriteManager, hoverAmount, hoverInfo, hyperWrapping, frameTime, drawCellCallback, lastPrep, enqueue, renderStateProvider, getCellRenderer, overrideCursor) {
  let hoverX;
  let hoverY;
  if (hoverInfo !== void 0 && hoverInfo[0][0] === col && hoverInfo[0][1] === row) {
    hoverX = hoverInfo[1][0];
    hoverY = hoverInfo[1][1];
  }
  let result = void 0;
  allocatedItem[0] = col;
  allocatedItem[1] = row;
  reusableRect.x = x2;
  reusableRect.y = y2;
  reusableRect.width = w3;
  reusableRect.height = h;
  drawState[0] = renderStateProvider.getValue(allocatedItem);
  drawState[1] = (val) => renderStateProvider.setValue(allocatedItem, val);
  animationFrameRequested = false;
  const args = {
    ctx,
    theme,
    col,
    row,
    cell,
    rect: reusableRect,
    highlighted,
    cellFillColor: finalCellFillColor,
    hoverAmount,
    frameTime,
    hoverX,
    drawState,
    hoverY,
    imageLoader,
    spriteManager,
    hyperWrapping,
    overrideCursor: hoverX !== void 0 ? overrideCursor : void 0,
    requestAnimationFrame: animRequest
  };
  const needsAnim = drawLastUpdateUnderlay(args, cell.lastUpdated, frameTime, lastPrep, isLastCol, isLastRow);
  const r = getCellRenderer(cell);
  if (r !== void 0) {
    if (lastPrep?.renderer !== r) {
      lastPrep?.deprep?.(args);
      lastPrep = void 0;
    }
    const partialPrepResult = r.drawPrep?.(args, lastPrep);
    if (drawCellCallback !== void 0 && !isInnerOnlyCell(args.cell)) {
      drawCellCallback(args, () => r.draw(args, cell));
    } else {
      r.draw(args, cell);
    }
    result = partialPrepResult === void 0 ? void 0 : {
      deprep: partialPrepResult?.deprep,
      fillStyle: partialPrepResult?.fillStyle,
      font: partialPrepResult?.font,
      renderer: r
    };
  }
  if (needsAnim || animationFrameRequested)
    enqueue?.(allocatedItem);
  return result;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/draw-checkbox.js
function drawCheckbox(ctx, theme, checked, x2, y2, width, height, highlighted, hoverX = -20, hoverY = -20, maxSize = 32, alignment = "center", style = "square") {
  const centerY = Math.floor(y2 + height / 2);
  const rectBordRadius = style === "circle" ? 1e4 : theme.roundingRadius ?? 4;
  let checkBoxWidth = getSquareWidth(maxSize, height, theme.cellVerticalPadding);
  let checkBoxHalfWidth = checkBoxWidth / 2;
  const posX = getSquareXPosFromAlign(alignment, x2, width, theme.cellHorizontalPadding, checkBoxWidth);
  const bb = getSquareBB(posX, centerY, checkBoxWidth);
  const hovered = pointIsWithinBB(x2 + hoverX, y2 + hoverY, bb);
  switch (checked) {
    case true: {
      ctx.beginPath();
      roundedRect(ctx, posX - checkBoxWidth / 2, centerY - checkBoxWidth / 2, checkBoxWidth, checkBoxWidth, rectBordRadius);
      if (style === "circle") {
        checkBoxHalfWidth *= 0.8;
        checkBoxWidth *= 0.8;
      }
      ctx.fillStyle = highlighted ? theme.accentColor : theme.textMedium;
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(posX - checkBoxHalfWidth + checkBoxWidth / 4.23, centerY - checkBoxHalfWidth + checkBoxWidth / 1.97);
      ctx.lineTo(posX - checkBoxHalfWidth + checkBoxWidth / 2.42, centerY - checkBoxHalfWidth + checkBoxWidth / 1.44);
      ctx.lineTo(posX - checkBoxHalfWidth + checkBoxWidth / 1.29, centerY - checkBoxHalfWidth + checkBoxWidth / 3.25);
      ctx.strokeStyle = theme.bgCell;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 1.9;
      ctx.stroke();
      break;
    }
    case BooleanEmpty:
    case false: {
      ctx.beginPath();
      roundedRect(ctx, posX - checkBoxWidth / 2 + 0.5, centerY - checkBoxWidth / 2 + 0.5, checkBoxWidth - 1, checkBoxWidth - 1, rectBordRadius);
      ctx.lineWidth = 1;
      ctx.strokeStyle = hovered ? theme.textDark : theme.textMedium;
      ctx.stroke();
      break;
    }
    case BooleanIndeterminate: {
      ctx.beginPath();
      roundedRect(ctx, posX - checkBoxWidth / 2, centerY - checkBoxWidth / 2, checkBoxWidth, checkBoxWidth, rectBordRadius);
      ctx.fillStyle = hovered ? theme.textMedium : theme.textLight;
      ctx.fill();
      if (style === "circle") {
        checkBoxHalfWidth *= 0.8;
        checkBoxWidth *= 0.8;
      }
      ctx.beginPath();
      ctx.moveTo(posX - checkBoxWidth / 3, centerY);
      ctx.lineTo(posX + checkBoxWidth / 3, centerY);
      ctx.strokeStyle = theme.bgCell;
      ctx.lineCap = "round";
      ctx.lineWidth = 1.9;
      ctx.stroke();
      break;
    }
    default:
      assertNever(checked);
  }
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.header.js
function drawGridHeaders(ctx, effectiveCols, enableGroups, hovered, width, translateX, headerHeight, groupHeaderHeight, dragAndDropState, isResizing, selection, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback, touchMode) {
  const totalHeaderHeight = headerHeight + groupHeaderHeight;
  if (totalHeaderHeight <= 0)
    return;
  ctx.fillStyle = outerTheme.bgHeader;
  ctx.fillRect(0, 0, width, totalHeaderHeight);
  const [hCol, hRow] = hovered?.[0] ?? [];
  const font = outerTheme.headerFontFull;
  ctx.font = font;
  walkColumns(effectiveCols, 0, translateX, 0, totalHeaderHeight, (c, x2, _y, clipX) => {
    if (damage !== void 0 && !damage.has([c.sourceIndex, -1]))
      return;
    const diff = Math.max(0, clipX - x2);
    ctx.save();
    ctx.beginPath();
    ctx.rect(x2 + diff, groupHeaderHeight, c.width - diff, headerHeight);
    ctx.clip();
    const groupTheme = getGroupDetails(c.group ?? "").overrideTheme;
    const theme = c.themeOverride === void 0 && groupTheme === void 0 ? outerTheme : mergeAndRealizeTheme(outerTheme, groupTheme, c.themeOverride);
    if (theme.bgHeader !== outerTheme.bgHeader) {
      ctx.fillStyle = theme.bgHeader;
      ctx.fill();
    }
    if (theme !== outerTheme) {
      ctx.font = theme.baseFontFull;
    }
    const selected = selection.columns.hasIndex(c.sourceIndex);
    const noHover = dragAndDropState !== void 0 || isResizing;
    const hoveredBoolean = !noHover && hRow === -1 && hCol === c.sourceIndex;
    const hover = noHover ? 0 : hoverValues.find((s) => s.item[0] === c.sourceIndex && s.item[1] === -1)?.hoverAmount ?? 0;
    const hasSelectedCell = selection?.current !== void 0 && selection.current.cell[0] === c.sourceIndex;
    const bgFillStyle = selected ? theme.accentColor : hasSelectedCell ? theme.bgHeaderHasFocus : theme.bgHeader;
    const y2 = enableGroups ? groupHeaderHeight : 0;
    const xOffset = c.sourceIndex === 0 ? 0 : 1;
    if (selected) {
      ctx.fillStyle = bgFillStyle;
      ctx.fillRect(x2 + xOffset, y2, c.width - xOffset, headerHeight);
    } else if (hasSelectedCell || hover > 0) {
      ctx.beginPath();
      ctx.rect(x2 + xOffset, y2, c.width - xOffset, headerHeight);
      if (hasSelectedCell) {
        ctx.fillStyle = theme.bgHeaderHasFocus;
        ctx.fill();
      }
      if (hover > 0) {
        ctx.globalAlpha = hover;
        ctx.fillStyle = theme.bgHeaderHovered;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }
    drawHeader(ctx, x2, y2, c.width, headerHeight, c, selected, theme, hoveredBoolean, hasSelectedCell, hover, spriteManager, drawHeaderCallback, touchMode);
    ctx.restore();
  });
  if (enableGroups) {
    drawGroups(ctx, effectiveCols, width, translateX, groupHeaderHeight, hovered, outerTheme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage);
  }
}
function drawGroups(ctx, effectiveCols, width, translateX, groupHeaderHeight, hovered, theme, spriteManager, _hoverValues, verticalBorder, getGroupDetails, damage) {
  const xPad = 8;
  const [hCol, hRow] = hovered?.[0] ?? [];
  let finalX = 0;
  walkGroups(effectiveCols, width, translateX, groupHeaderHeight, (span, groupName, x2, y2, w3, h) => {
    if (damage !== void 0 && !damage.hasItemInRectangle({
      x: span[0],
      y: -2,
      width: span[1] - span[0] + 1,
      height: 1
    }))
      return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x2, y2, w3, h);
    ctx.clip();
    const group = getGroupDetails(groupName);
    const groupTheme = group?.overrideTheme === void 0 ? theme : mergeAndRealizeTheme(theme, group.overrideTheme);
    const isHovered = hRow === -2 && hCol !== void 0 && hCol >= span[0] && hCol <= span[1];
    const fillColor = isHovered ? groupTheme.bgHeaderHovered : groupTheme.bgHeader;
    if (fillColor !== theme.bgHeader) {
      ctx.fillStyle = fillColor;
      ctx.fill();
    }
    ctx.fillStyle = groupTheme.textGroupHeader ?? groupTheme.textHeader;
    if (group !== void 0) {
      let drawX = x2;
      if (group.icon !== void 0) {
        spriteManager.drawSprite(group.icon, "normal", ctx, drawX + xPad, (groupHeaderHeight - 20) / 2, 20, groupTheme);
        drawX += 26;
      }
      ctx.fillText(group.name, drawX + xPad, groupHeaderHeight / 2 + getMiddleCenterBias(ctx, theme.headerFontFull));
      if (group.actions !== void 0 && isHovered) {
        const actionBoxes = getActionBoundsForGroup({ x: x2, y: y2, width: w3, height: h }, group.actions);
        ctx.beginPath();
        const fadeStartX = actionBoxes[0].x - 10;
        const fadeWidth = x2 + w3 - fadeStartX;
        ctx.rect(fadeStartX, 0, fadeWidth, groupHeaderHeight);
        const grad = ctx.createLinearGradient(fadeStartX, 0, fadeStartX + fadeWidth, 0);
        const trans = withAlpha(fillColor, 0);
        grad.addColorStop(0, trans);
        grad.addColorStop(10 / fadeWidth, fillColor);
        grad.addColorStop(1, fillColor);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.globalAlpha = 0.6;
        const [mouseX, mouseY] = hovered?.[1] ?? [-1, -1];
        for (let i = 0; i < group.actions.length; i++) {
          const action = group.actions[i];
          const box = actionBoxes[i];
          const actionHovered = pointInRect(box, mouseX + x2, mouseY);
          if (actionHovered) {
            ctx.globalAlpha = 1;
          }
          spriteManager.drawSprite(action.icon, "normal", ctx, box.x + box.width / 2 - 10, box.y + box.height / 2 - 10, 20, groupTheme);
          if (actionHovered) {
            ctx.globalAlpha = 0.6;
          }
        }
        ctx.globalAlpha = 1;
      }
    }
    if (x2 !== 0 && verticalBorder(span[0])) {
      ctx.beginPath();
      ctx.moveTo(x2 + 0.5, 0);
      ctx.lineTo(x2 + 0.5, groupHeaderHeight);
      ctx.strokeStyle = theme.borderColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.restore();
    finalX = x2 + w3;
  });
  ctx.beginPath();
  ctx.moveTo(finalX + 0.5, 0);
  ctx.lineTo(finalX + 0.5, groupHeaderHeight);
  ctx.moveTo(0, groupHeaderHeight + 0.5);
  ctx.lineTo(width, groupHeaderHeight + 0.5);
  ctx.strokeStyle = theme.borderColor;
  ctx.lineWidth = 1;
  ctx.stroke();
}
var menuButtonSize = 30;
function getHeaderMenuBounds(x2, y2, width, height, isRtl) {
  if (isRtl)
    return { x: x2, y: y2, width: menuButtonSize, height: Math.min(menuButtonSize, height) };
  return {
    x: x2 + width - menuButtonSize,
    y: Math.max(y2, y2 + height / 2 - menuButtonSize / 2),
    width: menuButtonSize,
    height: Math.min(menuButtonSize, height)
  };
}
function getActionBoundsForGroup(box, actions) {
  const result = [];
  let x2 = box.x + box.width - 26 * actions.length;
  const y2 = box.y + box.height / 2 - 13;
  const height = 26;
  const width = 26;
  for (let i = 0; i < actions.length; i++) {
    result.push({
      x: x2,
      y: y2,
      width,
      height
    });
    x2 += 26;
  }
  return result;
}
function drawHeaderInner(ctx, x2, y2, width, height, c, selected, theme, isHovered, hoverAmount, spriteManager, touchMode, isRtl, menuBounds) {
  if (c.rowMarker !== void 0) {
    const checked = c.rowMarkerChecked;
    if (checked !== true) {
      ctx.globalAlpha = hoverAmount;
    }
    drawCheckbox(ctx, theme, checked, x2, y2, width, height, false, void 0, void 0, 18, "center", c.rowMarker);
    if (checked !== true) {
      ctx.globalAlpha = 1;
    }
    return;
  }
  const xPad = theme.cellHorizontalPadding;
  const fillStyle = selected ? theme.textHeaderSelected : theme.textHeader;
  const shouldDrawMenu = c.hasMenu === true && (isHovered || touchMode && selected);
  const dirScalar = isRtl ? -1 : 1;
  let drawX = isRtl ? x2 + width - xPad : x2 + xPad;
  if (c.icon !== void 0) {
    let variant = selected ? "selected" : "normal";
    if (c.style === "highlight") {
      variant = selected ? "selected" : "special";
    }
    const headerSize = theme.headerIconSize;
    spriteManager.drawSprite(c.icon, variant, ctx, isRtl ? drawX - headerSize : drawX, y2 + (height - headerSize) / 2, headerSize, theme);
    if (c.overlayIcon !== void 0) {
      spriteManager.drawSprite(c.overlayIcon, selected ? "selected" : "special", ctx, isRtl ? drawX - headerSize + 9 : drawX + 9, y2 + ((height - 18) / 2 + 6), 18, theme);
    }
    drawX += Math.ceil(headerSize * 1.3) * dirScalar;
  }
  if (shouldDrawMenu && c.hasMenu === true && width > 35) {
    const fadeWidth = 35;
    const fadeStart = isRtl ? fadeWidth : width - fadeWidth;
    const fadeEnd = isRtl ? fadeWidth * 0.7 : width - fadeWidth * 0.7;
    const fadeStartPercent = fadeStart / width;
    const fadeEndPercent = fadeEnd / width;
    const grad = ctx.createLinearGradient(x2, 0, x2 + width, 0);
    const trans = withAlpha(fillStyle, 0);
    grad.addColorStop(isRtl ? 1 : 0, fillStyle);
    grad.addColorStop(fadeStartPercent, fillStyle);
    grad.addColorStop(fadeEndPercent, trans);
    grad.addColorStop(isRtl ? 0 : 1, trans);
    ctx.fillStyle = grad;
  } else {
    ctx.fillStyle = fillStyle;
  }
  if (isRtl) {
    ctx.textAlign = "right";
  }
  ctx.fillText(c.title, drawX, y2 + height / 2 + getMiddleCenterBias(ctx, theme.headerFontFull));
  if (isRtl) {
    ctx.textAlign = "left";
  }
  if (shouldDrawMenu && c.hasMenu === true) {
    if (c.menuIcon === void 0 || c.menuIcon === GridColumnMenuIcon.Triangle) {
      ctx.beginPath();
      const triangleX = menuBounds.x + menuBounds.width / 2 - 5.5;
      const triangleY = menuBounds.y + menuBounds.height / 2 - 3;
      roundedPoly(ctx, [
        {
          x: triangleX,
          y: triangleY
        },
        {
          x: triangleX + 11,
          y: triangleY
        },
        {
          x: triangleX + 5.5,
          y: triangleY + 6
        }
      ], 1);
      ctx.fillStyle = fillStyle;
      ctx.fill();
    } else if (c.menuIcon === GridColumnMenuIcon.Dots) {
      ctx.beginPath();
      const dotsX = menuBounds.x + menuBounds.width / 2;
      const dotsY = menuBounds.y + menuBounds.height / 2;
      drawMenuDots(ctx, dotsX, dotsY);
      ctx.fillStyle = fillStyle;
      ctx.fill();
    } else {
      const iconX = menuBounds.x + (menuBounds.width - theme.headerIconSize) / 2;
      const iconY = menuBounds.y + (menuBounds.height - theme.headerIconSize) / 2;
      spriteManager.drawSprite(c.menuIcon, "normal", ctx, iconX, iconY, theme.headerIconSize, theme);
    }
  }
}
function drawHeader(ctx, x2, y2, width, height, c, selected, theme, isHovered, hasSelectedCell, hoverAmount, spriteManager, drawHeaderCallback, touchMode) {
  const isRtl = direction(c.title) === "rtl";
  const menuBounds = getHeaderMenuBounds(x2, y2, width, height, isRtl);
  if (drawHeaderCallback !== void 0) {
    drawHeaderCallback({
      ctx,
      theme,
      rect: { x: x2, y: y2, width, height },
      column: c,
      columnIndex: c.sourceIndex,
      isSelected: selected,
      hoverAmount,
      isHovered,
      hasSelectedCell,
      spriteManager,
      menuBounds
    }, () => drawHeaderInner(ctx, x2, y2, width, height, c, selected, theme, isHovered, hoverAmount, spriteManager, touchMode, isRtl, menuBounds));
  } else {
    drawHeaderInner(ctx, x2, y2, width, height, c, selected, theme, isHovered, hoverAmount, spriteManager, touchMode, isRtl, menuBounds);
  }
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.lines.js
var import_groupBy = __toESM(require_groupBy(), 1);
function drawBlanks(ctx, effectiveColumns, allColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getRowTheme, selectedRows, disabledRows, freezeTrailingRows, hasAppendRow, drawRegions, damage, theme) {
  if (damage !== void 0 || effectiveColumns[effectiveColumns.length - 1] !== allColumns[effectiveColumns.length - 1])
    return;
  const skipPoint = getSkipPoint(drawRegions);
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, colDrawY, clipX, startRow) => {
    if (c !== effectiveColumns[effectiveColumns.length - 1])
      return;
    drawX += c.width;
    const x2 = Math.max(drawX, clipX);
    if (x2 > width)
      return;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x2, totalHeaderHeight + 1, 1e4, height - totalHeaderHeight - 1);
    ctx.clip();
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, skipPoint, (drawY, row, rh, isSticky) => {
      if (!isSticky && drawRegions.length > 0 && !drawRegions.some((dr) => intersectRect(drawX, drawY, 1e4, rh, dr.x, dr.y, dr.width, dr.height))) {
        return;
      }
      const rowSelected = selectedRows.hasIndex(row);
      const rowDisabled = disabledRows.hasIndex(row);
      ctx.beginPath();
      const rowTheme = getRowTheme?.(row);
      const blankTheme = rowTheme === void 0 ? theme : mergeAndRealizeTheme(theme, rowTheme);
      if (blankTheme.bgCell !== theme.bgCell) {
        ctx.fillStyle = blankTheme.bgCell;
        ctx.fillRect(drawX, drawY, 1e4, rh);
      }
      if (rowDisabled) {
        ctx.fillStyle = blankTheme.bgHeader;
        ctx.fillRect(drawX, drawY, 1e4, rh);
      }
      if (rowSelected) {
        ctx.fillStyle = blankTheme.accentLight;
        ctx.fillRect(drawX, drawY, 1e4, rh);
      }
    });
    ctx.restore();
  });
}
function overdrawStickyBoundaries(ctx, effectiveCols, width, height, freezeTrailingRows, rows, verticalBorder, getRowHeight, theme) {
  let drawFreezeBorder = false;
  for (const c of effectiveCols) {
    if (c.sticky)
      continue;
    drawFreezeBorder = verticalBorder(c.sourceIndex);
    break;
  }
  const hColor = theme.horizontalBorderColor ?? theme.borderColor;
  const vColor = theme.borderColor;
  const drawX = drawFreezeBorder ? getStickyWidth(effectiveCols) : 0;
  let vStroke;
  if (drawX !== 0) {
    vStroke = blendCache(vColor, theme.bgCell);
    ctx.beginPath();
    ctx.moveTo(drawX + 0.5, 0);
    ctx.lineTo(drawX + 0.5, height);
    ctx.strokeStyle = vStroke;
    ctx.stroke();
  }
  if (freezeTrailingRows > 0) {
    const hStroke = vColor === hColor && vStroke !== void 0 ? vStroke : blendCache(hColor, theme.bgCell);
    const h = getFreezeTrailingHeight(rows, freezeTrailingRows, getRowHeight);
    ctx.beginPath();
    ctx.moveTo(0, height - h + 0.5);
    ctx.lineTo(width, height - h + 0.5);
    ctx.strokeStyle = hStroke;
    ctx.stroke();
  }
}
var getMinMaxXY = (drawRegions, width, height) => {
  let minX = 0;
  let maxX = width;
  let minY = 0;
  let maxY = height;
  if (drawRegions !== void 0 && drawRegions.length > 0) {
    minX = Number.MAX_SAFE_INTEGER;
    minY = Number.MAX_SAFE_INTEGER;
    maxX = Number.MIN_SAFE_INTEGER;
    maxY = Number.MIN_SAFE_INTEGER;
    for (const r of drawRegions) {
      minX = Math.min(minX, r.x - 1);
      maxX = Math.max(maxX, r.x + r.width + 1);
      minY = Math.min(minY, r.y - 1);
      maxY = Math.max(maxY, r.y + r.height + 1);
    }
  }
  return { minX, maxX, minY, maxY };
};
function drawExtraRowThemes(ctx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme) {
  const bgCell = theme.bgCell;
  const { minX, maxX, minY, maxY } = getMinMaxXY(drawRegions, width, height);
  const toDraw = [];
  const freezeY = height - getFreezeTrailingHeight(rows, freezeTrailingRows, getRowHeight);
  let y2 = totalHeaderHeight;
  let row = cellYOffset;
  let extraRowsStartY = 0;
  while (y2 + translateY < freezeY) {
    const ty = y2 + translateY;
    const rh = getRowHeight(row);
    if (ty >= minY && ty <= maxY - 1) {
      const rowTheme = getRowThemeOverride?.(row);
      const rowThemeBgCell = rowTheme?.bgCell;
      const needDraw = rowThemeBgCell !== void 0 && rowThemeBgCell !== bgCell && row >= rows - freezeTrailingRows;
      if (needDraw) {
        toDraw.push({
          x: minX,
          y: ty,
          w: maxX - minX,
          h: rh,
          color: rowThemeBgCell
        });
      }
    }
    y2 += rh;
    if (row < rows - freezeTrailingRows)
      extraRowsStartY = y2;
    row++;
  }
  let x2 = 0;
  const h = Math.min(freezeY, maxY) - extraRowsStartY;
  if (h > 0) {
    for (let index = 0; index < effectiveCols.length; index++) {
      const c = effectiveCols[index];
      if (c.width === 0)
        continue;
      const tx = c.sticky ? x2 : x2 + translateX;
      const colThemeBgCell = c.themeOverride?.bgCell;
      if (colThemeBgCell !== void 0 && colThemeBgCell !== bgCell && tx >= minX && tx <= maxX && verticalBorder(index + 1)) {
        toDraw.push({
          x: tx,
          y: extraRowsStartY,
          w: c.width,
          h,
          color: colThemeBgCell
        });
      }
      x2 += c.width;
    }
  }
  if (toDraw.length === 0)
    return;
  let color;
  ctx.beginPath();
  for (let i = toDraw.length - 1; i >= 0; i--) {
    const r = toDraw[i];
    if (color === void 0) {
      color = r.color;
    } else if (r.color !== color) {
      ctx.fillStyle = color;
      ctx.fill();
      ctx.beginPath();
      color = r.color;
    }
    ctx.rect(r.x, r.y, r.w, r.h);
  }
  if (color !== void 0) {
    ctx.fillStyle = color;
    ctx.fill();
  }
  ctx.beginPath();
}
function drawGridLines(ctx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, spans, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme, verticalOnly = false) {
  if (spans !== void 0) {
    ctx.beginPath();
    ctx.save();
    ctx.rect(0, 0, width, height);
    for (const span of spans) {
      ctx.rect(span.x + 1, span.y + 1, span.width - 1, span.height - 1);
    }
    ctx.clip("evenodd");
  }
  const hColor = theme.horizontalBorderColor ?? theme.borderColor;
  const vColor = theme.borderColor;
  const { minX, maxX, minY, maxY } = getMinMaxXY(drawRegions, width, height);
  const toDraw = [];
  ctx.beginPath();
  let x2 = 0.5;
  for (let index = 0; index < effectiveCols.length; index++) {
    const c = effectiveCols[index];
    if (c.width === 0)
      continue;
    x2 += c.width;
    const tx = c.sticky ? x2 : x2 + translateX;
    if (tx >= minX && tx <= maxX && verticalBorder(index + 1)) {
      toDraw.push({
        x1: tx,
        y1: Math.max(groupHeaderHeight, minY),
        x2: tx,
        y2: Math.min(height, maxY),
        color: vColor
      });
    }
  }
  let freezeY = height + 0.5;
  for (let i = rows - freezeTrailingRows; i < rows; i++) {
    const rh = getRowHeight(i);
    freezeY -= rh;
    toDraw.push({ x1: minX, y1: freezeY, x2: maxX, y2: freezeY, color: hColor });
  }
  if (verticalOnly !== true) {
    let y2 = totalHeaderHeight + 0.5;
    let row = cellYOffset;
    const target = freezeY;
    while (y2 + translateY < target) {
      const ty = y2 + translateY;
      if (ty >= minY && ty <= maxY - 1) {
        const rowTheme = getRowThemeOverride?.(row);
        toDraw.push({
          x1: minX,
          y1: ty,
          x2: maxX,
          y2: ty,
          color: rowTheme?.horizontalBorderColor ?? rowTheme?.borderColor ?? hColor
        });
      }
      y2 += getRowHeight(row);
      row++;
    }
  }
  const groups = (0, import_groupBy.default)(toDraw, (line) => line.color);
  for (const g of Object.keys(groups)) {
    ctx.strokeStyle = g;
    for (const line of groups[g]) {
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
    }
    ctx.stroke();
    ctx.beginPath();
  }
  if (spans !== void 0) {
    ctx.restore();
  }
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.blit.js
function blitLastFrame(ctx, blitSource, blitSourceScroll, targetScroll, last, cellXOffset, cellYOffset, translateX, translateY, freezeTrailingRows, width, height, rows, totalHeaderHeight, dpr, mappedColumns, effectiveCols, getRowHeight, doubleBuffer) {
  const drawRegions = [];
  ctx.imageSmoothingEnabled = false;
  const minY = Math.min(last.cellYOffset, cellYOffset);
  const maxY = Math.max(last.cellYOffset, cellYOffset);
  let deltaY = 0;
  if (typeof getRowHeight === "number") {
    deltaY += (maxY - minY) * getRowHeight;
  } else {
    for (let i = minY; i < maxY; i++) {
      deltaY += getRowHeight(i);
    }
  }
  if (cellYOffset > last.cellYOffset) {
    deltaY = -deltaY;
  }
  deltaY += translateY - last.translateY;
  const minX = Math.min(last.cellXOffset, cellXOffset);
  const maxX = Math.max(last.cellXOffset, cellXOffset);
  let deltaX = 0;
  for (let i = minX; i < maxX; i++) {
    deltaX += mappedColumns[i].width;
  }
  if (cellXOffset > last.cellXOffset) {
    deltaX = -deltaX;
  }
  deltaX += translateX - last.translateX;
  const stickyWidth = getStickyWidth(effectiveCols);
  if (deltaX !== 0 && deltaY !== 0) {
    return {
      regions: []
    };
  }
  const freezeTrailingRowsHeight = freezeTrailingRows > 0 ? getFreezeTrailingHeight(rows, freezeTrailingRows, getRowHeight) : 0;
  const blitWidth = width - stickyWidth - Math.abs(deltaX);
  const blitHeight = height - totalHeaderHeight - freezeTrailingRowsHeight - Math.abs(deltaY) - 1;
  if (blitWidth > 150 && blitHeight > 150) {
    const args = {
      sx: 0,
      sy: 0,
      sw: width * dpr,
      sh: height * dpr,
      dx: 0,
      dy: 0,
      dw: width * dpr,
      dh: height * dpr
    };
    if (deltaY > 0) {
      args.sy = (totalHeaderHeight + 1) * dpr;
      args.sh = blitHeight * dpr;
      args.dy = (deltaY + totalHeaderHeight + 1) * dpr;
      args.dh = blitHeight * dpr;
      drawRegions.push({
        x: 0,
        y: totalHeaderHeight,
        width,
        height: deltaY + 1
      });
    } else if (deltaY < 0) {
      args.sy = (-deltaY + totalHeaderHeight + 1) * dpr;
      args.sh = blitHeight * dpr;
      args.dy = (totalHeaderHeight + 1) * dpr;
      args.dh = blitHeight * dpr;
      drawRegions.push({
        x: 0,
        y: height + deltaY - freezeTrailingRowsHeight,
        width,
        height: -deltaY + freezeTrailingRowsHeight
      });
    }
    if (deltaX > 0) {
      args.sx = stickyWidth * dpr;
      args.sw = blitWidth * dpr;
      args.dx = (deltaX + stickyWidth) * dpr;
      args.dw = blitWidth * dpr;
      drawRegions.push({
        x: stickyWidth - 1,
        y: 0,
        width: deltaX + 2,
        height
      });
    } else if (deltaX < 0) {
      args.sx = (stickyWidth - deltaX) * dpr;
      args.sw = blitWidth * dpr;
      args.dx = stickyWidth * dpr;
      args.dw = blitWidth * dpr;
      drawRegions.push({
        x: width + deltaX,
        y: 0,
        width: -deltaX,
        height
      });
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (doubleBuffer) {
      if (stickyWidth > 0 && deltaX !== 0 && deltaY === 0 && (targetScroll === void 0 || blitSourceScroll?.[1] !== false)) {
        const w3 = stickyWidth * dpr;
        const h = height * dpr;
        ctx.drawImage(blitSource, 0, 0, w3, h, 0, 0, w3, h);
      }
      if (freezeTrailingRowsHeight > 0 && deltaX === 0 && deltaY !== 0 && (targetScroll === void 0 || blitSourceScroll?.[0] !== false)) {
        const y2 = (height - freezeTrailingRowsHeight) * dpr;
        const w3 = width * dpr;
        const h = freezeTrailingRowsHeight * dpr;
        ctx.drawImage(blitSource, 0, y2, w3, h, 0, y2, w3, h);
      }
    }
    ctx.drawImage(blitSource, args.sx, args.sy, args.sw, args.sh, args.dx, args.dy, args.dw, args.dh);
    ctx.scale(dpr, dpr);
  }
  ctx.imageSmoothingEnabled = true;
  return {
    regions: drawRegions
  };
}
function blitResizedCol(last, cellXOffset, cellYOffset, translateX, translateY, width, height, totalHeaderHeight, effectiveCols, resizedIndex) {
  const drawRegions = [];
  if (cellXOffset !== last.cellXOffset || cellYOffset !== last.cellYOffset || translateX !== last.translateX || translateY !== last.translateY) {
    return drawRegions;
  }
  walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, _drawY, clipX) => {
    if (c.sourceIndex === resizedIndex) {
      const x2 = Math.max(drawX, clipX) + 1;
      drawRegions.push({
        x: x2,
        y: 0,
        width: width - x2,
        height
      });
      return true;
    }
  });
  return drawRegions;
}
function computeCanBlit(current, last) {
  if (last === void 0)
    return false;
  if (current.width !== last.width || current.height !== last.height || current.theme !== last.theme || current.headerHeight !== last.headerHeight || current.rowHeight !== last.rowHeight || current.rows !== last.rows || current.freezeColumns !== last.freezeColumns || current.getRowThemeOverride !== last.getRowThemeOverride || current.isFocused !== last.isFocused || current.isResizing !== last.isResizing || current.verticalBorder !== last.verticalBorder || current.getCellContent !== last.getCellContent || current.highlightRegions !== last.highlightRegions || current.selection !== last.selection || current.dragAndDropState !== last.dragAndDropState || current.prelightCells !== last.prelightCells || current.touchMode !== last.touchMode || current.maxScaleFactor !== last.maxScaleFactor) {
    return false;
  }
  if (current.mappedColumns !== last.mappedColumns) {
    if (current.mappedColumns.length > 100 || current.mappedColumns.length !== last.mappedColumns.length) {
      return false;
    }
    let resized;
    for (let i = 0; i < current.mappedColumns.length; i++) {
      const curCol = current.mappedColumns[i];
      const lastCol = last.mappedColumns[i];
      if (deepEqual(curCol, lastCol))
        continue;
      if (resized !== void 0)
        return false;
      if (curCol.width === lastCol.width)
        return false;
      const { width, ...curRest } = curCol;
      const { width: lastWidth, ...lastRest } = lastCol;
      if (!deepEqual(curRest, lastRest))
        return false;
      resized = i;
    }
    if (resized === void 0) {
      return true;
    }
    return resized;
  }
  return true;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid.render.rings.js
function drawHighlightRings(ctx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, freezeTrailingRows, rows, allHighlightRegions, theme) {
  const highlightRegions = allHighlightRegions?.filter((x2) => x2.style !== "no-outline");
  if (highlightRegions === void 0 || highlightRegions.length === 0)
    return void 0;
  const freezeLeft = getStickyWidth(mappedColumns);
  const freezeBottom = getFreezeTrailingHeight(rows, freezeTrailingRows, rowHeight);
  const splitIndicies = [freezeColumns, 0, mappedColumns.length, rows - freezeTrailingRows];
  const splitLocations = [freezeLeft, 0, width, height - freezeBottom];
  const drawRects = highlightRegions.map((h) => {
    const r = h.range;
    const style = h.style ?? "dashed";
    return splitRectIntoRegions(r, splitIndicies, width, height, splitLocations).map((arg) => {
      const rect = arg.rect;
      const topLeftBounds = computeBounds(rect.x, rect.y, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, freezeTrailingRows, mappedColumns, rowHeight);
      const bottomRightBounds = rect.width === 1 && rect.height === 1 ? topLeftBounds : computeBounds(rect.x + rect.width - 1, rect.y + rect.height - 1, width, height, groupHeaderHeight, headerHeight + groupHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, freezeTrailingRows, mappedColumns, rowHeight);
      if (rect.x + rect.width >= mappedColumns.length) {
        bottomRightBounds.width -= 1;
      }
      if (rect.y + rect.height >= rows) {
        bottomRightBounds.height -= 1;
      }
      return {
        color: h.color,
        style,
        clip: arg.clip,
        rect: hugRectToTarget({
          x: topLeftBounds.x,
          y: topLeftBounds.y,
          width: bottomRightBounds.x + bottomRightBounds.width - topLeftBounds.x,
          height: bottomRightBounds.y + bottomRightBounds.height - topLeftBounds.y
        }, width, height, 8)
      };
    });
  });
  const drawCb = () => {
    ctx.lineWidth = 1;
    let dashed = false;
    for (const dr of drawRects) {
      for (const s of dr) {
        if (s?.rect !== void 0 && intersectRect(0, 0, width, height, s.rect.x, s.rect.y, s.rect.width, s.rect.height)) {
          const wasDashed = dashed;
          const needsClip = !rectContains(s.clip, s.rect);
          if (needsClip) {
            ctx.save();
            ctx.rect(s.clip.x, s.clip.y, s.clip.width, s.clip.height);
            ctx.clip();
          }
          if (s.style === "dashed" && !dashed) {
            ctx.setLineDash([5, 3]);
            dashed = true;
          } else if ((s.style === "solid" || s.style === "solid-outline") && dashed) {
            ctx.setLineDash([]);
            dashed = false;
          }
          ctx.strokeStyle = s.style === "solid-outline" ? blend(blend(s.color, theme.borderColor), theme.bgCell) : withAlpha(s.color, 1);
          ctx.strokeRect(s.rect.x + 0.5, s.rect.y + 0.5, s.rect.width - 1, s.rect.height - 1);
          if (needsClip) {
            ctx.restore();
            dashed = wasDashed;
          }
        }
      }
    }
    if (dashed) {
      ctx.setLineDash([]);
    }
  };
  drawCb();
  return drawCb;
}
function drawColumnResizeOutline(ctx, yOffset, xOffset, height, style) {
  ctx.beginPath();
  ctx.moveTo(yOffset, xOffset);
  ctx.lineTo(yOffset, height);
  ctx.lineWidth = 2;
  ctx.strokeStyle = style;
  ctx.stroke();
  ctx.globalAlpha = 1;
}
function drawFillHandle(ctx, width, height, cellYOffset, translateX, translateY, effectiveCols, allColumns, theme, totalHeaderHeight, selectedCell, getRowHeight, getCellContent, freezeTrailingRows, hasAppendRow, fillHandle, rows) {
  if (selectedCell.current === void 0)
    return void 0;
  const range2 = selectedCell.current.range;
  const currentItem = selectedCell.current.cell;
  const fillHandleTarget = [range2.x + range2.width - 1, range2.y + range2.height - 1];
  if (currentItem[1] >= rows && fillHandleTarget[1] >= rows)
    return void 0;
  const mustDraw = effectiveCols.some((c) => c.sourceIndex === currentItem[0] || c.sourceIndex === fillHandleTarget[0]);
  if (!mustDraw)
    return void 0;
  const [targetCol, targetRow] = selectedCell.current.cell;
  const cell = getCellContent(selectedCell.current.cell);
  const targetColSpan = cell.span ?? [targetCol, targetCol];
  const isStickyRow = targetRow >= rows - freezeTrailingRows;
  const stickRowHeight = freezeTrailingRows > 0 && !isStickyRow ? getFreezeTrailingHeight(rows, freezeTrailingRows, getRowHeight) - 1 : 0;
  const fillHandleRow = fillHandleTarget[1];
  let drawHandleCb = void 0;
  walkColumns(effectiveCols, cellYOffset, translateX, translateY, totalHeaderHeight, (col, drawX, colDrawY, clipX, startRow) => {
    clipX;
    if (col.sticky && targetCol > col.sourceIndex)
      return;
    const isBeforeTarget = col.sourceIndex < targetColSpan[0];
    const isAfterTarget = col.sourceIndex > targetColSpan[1];
    const isFillHandleCol = col.sourceIndex === fillHandleTarget[0];
    if (!isFillHandleCol && (isBeforeTarget || isAfterTarget)) {
      return;
    }
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, void 0, (drawY, row, rh) => {
      if (row !== targetRow && row !== fillHandleRow)
        return;
      let cellX = drawX;
      let cellWidth = col.width;
      if (cell.span !== void 0) {
        const areas = getSpanBounds(cell.span, drawX, drawY, col.width, rh, col, allColumns);
        const area = col.sticky ? areas[0] : areas[1];
        if (area !== void 0) {
          cellX = area.x;
          cellWidth = area.width;
        }
      }
      const doHandle = row === fillHandleRow && isFillHandleCol && fillHandle;
      if (doHandle) {
        drawHandleCb = () => {
          if (clipX > cellX && !col.sticky) {
            ctx.beginPath();
            ctx.rect(clipX, 0, width - clipX, height);
            ctx.clip();
          }
          ctx.beginPath();
          ctx.rect(cellX + cellWidth - 4, drawY + rh - 4, 4, 4);
          ctx.fillStyle = col.themeOverride?.accentColor ?? theme.accentColor;
          ctx.fill();
        };
      }
      return drawHandleCb !== void 0;
    });
    return drawHandleCb !== void 0;
  });
  if (drawHandleCb === void 0)
    return void 0;
  const result = () => {
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, totalHeaderHeight, width, height - totalHeaderHeight - stickRowHeight);
    ctx.clip();
    drawHandleCb?.();
    ctx.restore();
  };
  result();
  return result;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/render/data-grid-render.js
function clipHeaderDamage(ctx, effectiveColumns, width, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, damage) {
  if (damage === void 0 || damage.size === 0)
    return;
  ctx.beginPath();
  walkGroups(effectiveColumns, width, translateX, groupHeaderHeight, (span, _group, x2, y2, w3, h) => {
    const hasItemInSpan = damage.hasItemInRectangle({
      x: span[0],
      y: -2,
      width: span[1] - span[0] + 1,
      height: 1
    });
    if (hasItemInSpan) {
      ctx.rect(x2, y2, w3, h);
    }
  });
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (c, drawX, _colDrawY, clipX) => {
    const diff = Math.max(0, clipX - drawX);
    const finalX = drawX + diff + 1;
    const finalWidth = c.width - diff - 1;
    if (damage.has([c.sourceIndex, -1])) {
      ctx.rect(finalX, groupHeaderHeight, finalWidth, totalHeaderHeight - groupHeaderHeight);
    }
  });
  ctx.clip();
}
function getLastRow(effectiveColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, freezeTrailingRows, hasAppendRow) {
  let result = 0;
  walkColumns(effectiveColumns, cellYOffset, translateX, translateY, totalHeaderHeight, (_c, __drawX, colDrawY, _clipX, startRow) => {
    walkRowsInCol(startRow, colDrawY, height, rows, getRowHeight, freezeTrailingRows, hasAppendRow, void 0, (_drawY, row, _rh, isSticky) => {
      if (!isSticky) {
        result = Math.max(row, result);
      }
    });
    return true;
  });
  return result;
}
function drawGrid(arg, lastArg) {
  const { canvasCtx, headerCanvasCtx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, enableGroups, freezeColumns, dragAndDropState, theme, drawFocus, headerHeight, groupHeaderHeight, disabledRows, rowHeight, verticalBorder, overrideCursor, isResizing, selection, fillHandle, freezeTrailingRows, rows, getCellContent, getGroupDetails, getRowThemeOverride, isFocused, drawHeaderCallback, prelightCells, drawCellCallback, highlightRegions, resizeCol, imageLoader, lastBlitData, hoverValues, hyperWrapping, hoverInfo, spriteManager, maxScaleFactor, hasAppendRow, touchMode, enqueue, renderStateProvider, getCellRenderer, renderStrategy, bufferACtx, bufferBCtx, damage, minimumCellWidth } = arg;
  if (width === 0 || height === 0)
    return;
  const doubleBuffer = renderStrategy === "double-buffer";
  const dpr = Math.min(maxScaleFactor, Math.ceil(window.devicePixelRatio ?? 1));
  const canBlit = renderStrategy !== "direct" && computeCanBlit(arg, lastArg);
  const canvas = canvasCtx.canvas;
  if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
  }
  const overlayCanvas = headerCanvasCtx.canvas;
  const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;
  const overlayHeight = totalHeaderHeight + 1;
  if (overlayCanvas.width !== width * dpr || overlayCanvas.height !== overlayHeight * dpr) {
    overlayCanvas.width = width * dpr;
    overlayCanvas.height = overlayHeight * dpr;
    overlayCanvas.style.width = width + "px";
    overlayCanvas.style.height = overlayHeight + "px";
  }
  const bufferA = bufferACtx.canvas;
  const bufferB = bufferBCtx.canvas;
  if (doubleBuffer && (bufferA.width !== width * dpr || bufferA.height !== height * dpr)) {
    bufferA.width = width * dpr;
    bufferA.height = height * dpr;
    if (lastBlitData.current !== void 0)
      lastBlitData.current.aBufferScroll = void 0;
  }
  if (doubleBuffer && (bufferB.width !== width * dpr || bufferB.height !== height * dpr)) {
    bufferB.width = width * dpr;
    bufferB.height = height * dpr;
    if (lastBlitData.current !== void 0)
      lastBlitData.current.bBufferScroll = void 0;
  }
  const last = lastBlitData.current;
  if (canBlit === true && cellXOffset === last?.cellXOffset && cellYOffset === last?.cellYOffset && translateX === last?.translateX && translateY === last?.translateY)
    return;
  let mainCtx = null;
  if (doubleBuffer) {
    mainCtx = canvasCtx;
  }
  const overlayCtx = headerCanvasCtx;
  let targetCtx;
  if (!doubleBuffer) {
    targetCtx = canvasCtx;
  } else if (damage !== void 0) {
    targetCtx = last?.lastBuffer === "b" ? bufferBCtx : bufferACtx;
  } else {
    targetCtx = last?.lastBuffer === "b" ? bufferACtx : bufferBCtx;
  }
  const targetBuffer = targetCtx.canvas;
  const blitSource = doubleBuffer ? targetBuffer === bufferA ? bufferB : bufferA : canvas;
  const getRowHeight = typeof rowHeight === "number" ? () => rowHeight : rowHeight;
  overlayCtx.save();
  targetCtx.save();
  overlayCtx.beginPath();
  targetCtx.beginPath();
  overlayCtx.textBaseline = "middle";
  targetCtx.textBaseline = "middle";
  if (dpr !== 1) {
    overlayCtx.scale(dpr, dpr);
    targetCtx.scale(dpr, dpr);
  }
  const effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, dragAndDropState, translateX);
  let drawRegions = [];
  const mustDrawFocusOnHeader = drawFocus && selection.current?.cell[1] === cellYOffset && translateY === 0;
  let mustDrawHighlightRingsOnHeader = false;
  if (highlightRegions !== void 0) {
    for (const r of highlightRegions) {
      if (r.style !== "no-outline" && r.range.y === cellYOffset && translateY === 0) {
        mustDrawHighlightRingsOnHeader = true;
        break;
      }
    }
  }
  const drawHeaderTexture = () => {
    drawGridHeaders(overlayCtx, effectiveCols, enableGroups, hoverInfo, width, translateX, headerHeight, groupHeaderHeight, dragAndDropState, isResizing, selection, theme, spriteManager, hoverValues, verticalBorder, getGroupDetails, damage, drawHeaderCallback, touchMode);
    drawGridLines(overlayCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, void 0, void 0, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme, true);
    overlayCtx.beginPath();
    overlayCtx.moveTo(0, overlayHeight - 0.5);
    overlayCtx.lineTo(width, overlayHeight - 0.5);
    overlayCtx.strokeStyle = blend(theme.headerBottomBorderColor ?? theme.horizontalBorderColor ?? theme.borderColor, theme.bgHeader);
    overlayCtx.stroke();
    if (mustDrawHighlightRingsOnHeader) {
      drawHighlightRings(overlayCtx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, freezeTrailingRows, rows, highlightRegions, theme);
    }
    if (mustDrawFocusOnHeader) {
      drawFillHandle(overlayCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, freezeTrailingRows, hasAppendRow, fillHandle, rows);
    }
  };
  if (damage !== void 0) {
    const viewRegionWidth = effectiveCols[effectiveCols.length - 1].sourceIndex + 1;
    const damageInView = damage.hasItemInRegion([
      {
        x: cellXOffset,
        y: -2,
        width: viewRegionWidth,
        height: 2
      },
      {
        x: cellXOffset,
        y: cellYOffset,
        width: viewRegionWidth,
        height: 300
      },
      {
        x: 0,
        y: cellYOffset,
        width: freezeColumns,
        height: 300
      },
      {
        x: 0,
        y: -2,
        width: freezeColumns,
        height: 2
      },
      {
        x: cellXOffset,
        y: rows - freezeTrailingRows,
        width: viewRegionWidth,
        height: freezeTrailingRows,
        when: freezeTrailingRows > 0
      }
    ]);
    const doDamage = (ctx) => {
      drawCells(ctx, effectiveCols, mappedColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, freezeTrailingRows, hasAppendRow, drawRegions, damage, selection, prelightCells, highlightRegions, imageLoader, spriteManager, hoverValues, hoverInfo, drawCellCallback, hyperWrapping, theme, enqueue, renderStateProvider, getCellRenderer, overrideCursor, minimumCellWidth);
      const selectionCurrent = selection.current;
      if (fillHandle && drawFocus && selectionCurrent !== void 0 && damage.has(rectBottomRight(selectionCurrent.range))) {
        drawFillHandle(ctx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, freezeTrailingRows, hasAppendRow, fillHandle, rows);
      }
    };
    if (damageInView) {
      doDamage(targetCtx);
      if (mainCtx !== null) {
        mainCtx.save();
        mainCtx.scale(dpr, dpr);
        mainCtx.textBaseline = "middle";
        doDamage(mainCtx);
        mainCtx.restore();
      }
      const doHeaders = damage.hasHeader();
      if (doHeaders) {
        clipHeaderDamage(overlayCtx, effectiveCols, width, groupHeaderHeight, totalHeaderHeight, translateX, translateY, cellYOffset, damage);
        drawHeaderTexture();
      }
    }
    targetCtx.restore();
    overlayCtx.restore();
    return;
  }
  if (canBlit !== true || cellXOffset !== last?.cellXOffset || translateX !== last?.translateX || mustDrawFocusOnHeader !== last?.mustDrawFocusOnHeader || mustDrawHighlightRingsOnHeader !== last?.mustDrawHighlightRingsOnHeader) {
    drawHeaderTexture();
  }
  if (canBlit === true) {
    assert(blitSource !== void 0 && last !== void 0);
    const { regions } = blitLastFrame(targetCtx, blitSource, blitSource === bufferA ? last.aBufferScroll : last.bBufferScroll, blitSource === bufferA ? last.bBufferScroll : last.aBufferScroll, last, cellXOffset, cellYOffset, translateX, translateY, freezeTrailingRows, width, height, rows, totalHeaderHeight, dpr, mappedColumns, effectiveCols, rowHeight, doubleBuffer);
    drawRegions = regions;
  } else if (canBlit !== false) {
    assert(last !== void 0);
    const resizedCol = canBlit;
    drawRegions = blitResizedCol(last, cellXOffset, cellYOffset, translateX, translateY, width, height, totalHeaderHeight, effectiveCols, resizedCol);
  }
  overdrawStickyBoundaries(targetCtx, effectiveCols, width, height, freezeTrailingRows, rows, verticalBorder, getRowHeight, theme);
  const highlightRedraw = drawHighlightRings(targetCtx, width, height, cellXOffset, cellYOffset, translateX, translateY, mappedColumns, freezeColumns, headerHeight, groupHeaderHeight, rowHeight, freezeTrailingRows, rows, highlightRegions, theme);
  const focusRedraw = drawFocus ? drawFillHandle(targetCtx, width, height, cellYOffset, translateX, translateY, effectiveCols, mappedColumns, theme, totalHeaderHeight, selection, getRowHeight, getCellContent, freezeTrailingRows, hasAppendRow, fillHandle, rows) : void 0;
  targetCtx.fillStyle = theme.bgCell;
  if (drawRegions.length > 0) {
    targetCtx.beginPath();
    for (const r of drawRegions) {
      targetCtx.rect(r.x, r.y, r.width, r.height);
    }
    targetCtx.clip();
    targetCtx.fill();
    targetCtx.beginPath();
  } else {
    targetCtx.fillRect(0, 0, width, height);
  }
  const spans = drawCells(targetCtx, effectiveCols, mappedColumns, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getCellContent, getGroupDetails, getRowThemeOverride, disabledRows, isFocused, drawFocus, freezeTrailingRows, hasAppendRow, drawRegions, damage, selection, prelightCells, highlightRegions, imageLoader, spriteManager, hoverValues, hoverInfo, drawCellCallback, hyperWrapping, theme, enqueue, renderStateProvider, getCellRenderer, overrideCursor, minimumCellWidth);
  drawBlanks(targetCtx, effectiveCols, mappedColumns, width, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, getRowThemeOverride, selection.rows, disabledRows, freezeTrailingRows, hasAppendRow, drawRegions, damage, theme);
  drawExtraRowThemes(targetCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme);
  drawGridLines(targetCtx, effectiveCols, cellYOffset, translateX, translateY, width, height, drawRegions, spans, groupHeaderHeight, totalHeaderHeight, getRowHeight, getRowThemeOverride, verticalBorder, freezeTrailingRows, rows, theme);
  highlightRedraw?.();
  focusRedraw?.();
  if (isResizing) {
    walkColumns(effectiveCols, 0, translateX, 0, totalHeaderHeight, (c, x2) => {
      if (c.sourceIndex === resizeCol) {
        drawColumnResizeOutline(overlayCtx, x2 + c.width, 0, totalHeaderHeight + 1, blend(theme.resizeIndicatorColor ?? theme.accentLight, theme.bgHeader));
        drawColumnResizeOutline(targetCtx, x2 + c.width, totalHeaderHeight, height, blend(theme.resizeIndicatorColor ?? theme.accentLight, theme.bgCell));
        return true;
      }
      return false;
    });
  }
  if (mainCtx !== null) {
    mainCtx.fillStyle = theme.bgCell;
    mainCtx.fillRect(0, 0, width, height);
    mainCtx.drawImage(targetCtx.canvas, 0, 0);
  }
  const lastRowDrawn = getLastRow(effectiveCols, height, totalHeaderHeight, translateX, translateY, cellYOffset, rows, getRowHeight, freezeTrailingRows, hasAppendRow);
  imageLoader?.setWindow({
    x: cellXOffset,
    y: cellYOffset,
    width: effectiveCols.length,
    height: lastRowDrawn - cellYOffset
  }, freezeColumns, Array.from({ length: freezeTrailingRows }, (_3, i) => rows - 1 - i));
  const scrollX = last !== void 0 && (cellXOffset !== last.cellXOffset || translateX !== last.translateX);
  const scrollY = last !== void 0 && (cellYOffset !== last.cellYOffset || translateY !== last.translateY);
  lastBlitData.current = {
    cellXOffset,
    cellYOffset,
    translateX,
    translateY,
    mustDrawFocusOnHeader,
    mustDrawHighlightRingsOnHeader,
    lastBuffer: doubleBuffer ? targetBuffer === bufferA ? "a" : "b" : void 0,
    aBufferScroll: targetBuffer === bufferA ? [scrollX, scrollY] : last?.aBufferScroll,
    bBufferScroll: targetBuffer === bufferB ? [scrollX, scrollY] : last?.bBufferScroll
  };
  targetCtx.restore();
  overlayCtx.restore();
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/animation-manager.js
var import_clamp = __toESM(require_clamp(), 1);
var hoverTime = 80;
function easeOutCubic(x2) {
  const x1 = x2 - 1;
  return x1 * x1 * x1 + 1;
}
var AnimationManager = class {
  callback;
  constructor(callback) {
    this.callback = callback;
  }
  currentHoveredItem = void 0;
  leavingItems = [];
  lastAnimationTime;
  addToLeavingItems = (item) => {
    const isAlreadyLeaving = this.leavingItems.some((i) => itemsAreEqual(i.item, item.item));
    if (isAlreadyLeaving) {
      return;
    }
    this.leavingItems.push(item);
  };
  removeFromLeavingItems = (item) => {
    const leavingItem = this.leavingItems.find((e) => itemsAreEqual(e.item, item));
    this.leavingItems = this.leavingItems.filter((i) => i !== leavingItem);
    return leavingItem?.hoverAmount ?? 0;
  };
  cleanUpLeavingElements = () => {
    this.leavingItems = this.leavingItems.filter((i) => i.hoverAmount > 0);
  };
  shouldStep = () => {
    const hasLeavingItems = this.leavingItems.length > 0;
    const currentHoveredIsAnimating = this.currentHoveredItem !== void 0 && this.currentHoveredItem.hoverAmount < 1;
    return hasLeavingItems || currentHoveredIsAnimating;
  };
  getAnimatingItems = () => {
    if (this.currentHoveredItem !== void 0) {
      return [...this.leavingItems, this.currentHoveredItem];
    }
    return this.leavingItems.map((x2) => ({ ...x2, hoverAmount: easeOutCubic(x2.hoverAmount) }));
  };
  step = (timestamp) => {
    if (this.lastAnimationTime === void 0) {
      this.lastAnimationTime = timestamp;
    } else {
      const step = timestamp - this.lastAnimationTime;
      const delta = step / hoverTime;
      for (const item of this.leavingItems) {
        item.hoverAmount = (0, import_clamp.default)(item.hoverAmount - delta, 0, 1);
      }
      if (this.currentHoveredItem !== void 0) {
        this.currentHoveredItem.hoverAmount = (0, import_clamp.default)(this.currentHoveredItem.hoverAmount + delta, 0, 1);
      }
      const animating = this.getAnimatingItems();
      this.callback(animating);
      this.cleanUpLeavingElements();
    }
    if (this.shouldStep()) {
      this.lastAnimationTime = timestamp;
      window.requestAnimationFrame(this.step);
    } else {
      this.lastAnimationTime = void 0;
    }
  };
  setHovered = (item) => {
    if (itemsAreEqual(this.currentHoveredItem?.item, item)) {
      return;
    }
    if (this.currentHoveredItem !== void 0) {
      this.addToLeavingItems(this.currentHoveredItem);
    }
    if (item !== void 0) {
      const hoverAmount = this.removeFromLeavingItems(item);
      this.currentHoveredItem = {
        item,
        hoverAmount
      };
    } else {
      this.currentHoveredItem = void 0;
    }
    if (this.lastAnimationTime === void 0) {
      window.requestAnimationFrame(this.step);
    }
  };
};

// node_modules/@glideapps/glide-data-grid/dist/esm/common/browser-detect.js
var Lazy = class {
  fn;
  val;
  constructor(fn) {
    this.fn = fn;
  }
  get value() {
    return this.val ?? (this.val = this.fn());
  }
};
function lazy(fn) {
  return new Lazy(fn);
}
var browserIsFirefox = lazy(() => window.navigator.userAgent.includes("Firefox"));
var browserIsSafari = lazy(() => window.navigator.userAgent.includes("Mac OS") && window.navigator.userAgent.includes("Safari") && !window.navigator.userAgent.includes("Chrome"));
var browserIsOSX = lazy(() => window.navigator.platform.toLowerCase().startsWith("mac"));

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/use-animation-queue.js
var React7 = __toESM(require_react(), 1);
function useAnimationQueue(draw) {
  const queue = React7.useRef([]);
  const seq = React7.useRef(0);
  const drawRef = React7.useRef(draw);
  drawRef.current = draw;
  const loop = React7.useCallback(() => {
    const requeue = () => window.requestAnimationFrame(fn);
    const fn = () => {
      const toDraw = queue.current.map(unpackNumberToColRow);
      queue.current = [];
      drawRef.current(new CellSet(toDraw));
      if (queue.current.length > 0) {
        seq.current++;
      } else {
        seq.current = 0;
      }
    };
    window.requestAnimationFrame(seq.current > 600 ? requeue : fn);
  }, []);
  return React7.useCallback((item) => {
    if (queue.current.length === 0)
      loop();
    const packed = packColRowToNumber(item[0], item[1]);
    if (queue.current.includes(packed))
      return;
    queue.current.push(packed);
  }, [loop]);
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/event-args.js
var headerKind = "header";
var groupHeaderKind = "group-header";
var outOfBoundsKind = "out-of-bounds";
var OutOfBoundsRegionAxis;
(function(OutOfBoundsRegionAxis2) {
  OutOfBoundsRegionAxis2[OutOfBoundsRegionAxis2["Start"] = -2] = "Start";
  OutOfBoundsRegionAxis2[OutOfBoundsRegionAxis2["StartPadding"] = -1] = "StartPadding";
  OutOfBoundsRegionAxis2[OutOfBoundsRegionAxis2["Center"] = 0] = "Center";
  OutOfBoundsRegionAxis2[OutOfBoundsRegionAxis2["EndPadding"] = 1] = "EndPadding";
  OutOfBoundsRegionAxis2[OutOfBoundsRegionAxis2["End"] = 2] = "End";
})(OutOfBoundsRegionAxis || (OutOfBoundsRegionAxis = {}));
function mouseEventArgsAreEqual(args, other) {
  if (args === other)
    return true;
  if (args?.kind === "out-of-bounds") {
    return args?.kind === other?.kind && args?.location[0] === other?.location[0] && args?.location[1] === other?.location[1] && args?.region[0] === other?.region[0] && args?.region[1] === other?.region[1];
  }
  return args?.kind === other?.kind && args?.location[0] === other?.location[0] && args?.location[1] === other?.location[1];
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/data-grid.js
var fillHandleClickSize = 6;
var getRowData = (cell, getCellRenderer) => {
  if (cell.kind === GridCellKind.Custom)
    return cell.copyData;
  const r = getCellRenderer?.(cell);
  return r?.getAccessibilityString(cell) ?? "";
};
var DataGrid = (p2, forwardedRef) => {
  const { width, height, accessibilityHeight, columns, cellXOffset: cellXOffsetReal, cellYOffset, headerHeight, fillHandle = false, groupHeaderHeight, rowHeight, rows, getCellContent, getRowThemeOverride, onHeaderMenuClick, enableGroups, isFilling, onCanvasFocused, onCanvasBlur, isFocused, selection, freezeColumns, onContextMenu, freezeTrailingRows, fixedShadowX = true, fixedShadowY = true, drawFocusRing, onMouseDown, onMouseUp, onMouseMoveRaw, onMouseMove, onItemHovered, dragAndDropState, firstColAccessible, onKeyDown, onKeyUp, highlightRegions, canvasRef, onDragStart, onDragEnd, eventTargetRef, isResizing, resizeColumn: resizeCol, isDragging, isDraggable = false, allowResize, disabledRows, hasAppendRow, getGroupDetails, theme, prelightCells, headerIcons, verticalBorder, drawCell: drawCellCallback, drawHeader: drawHeaderCallback, onCellFocused, onDragOverCell, onDrop, onDragLeave, imageWindowLoader, smoothScrollX = false, smoothScrollY = false, experimental, getCellRenderer } = p2;
  const translateX = p2.translateX ?? 0;
  const translateY = p2.translateY ?? 0;
  const cellXOffset = Math.max(freezeColumns, Math.min(columns.length - 1, cellXOffsetReal));
  const ref = React8.useRef(null);
  const imageLoader = imageWindowLoader;
  const damageRegion = React8.useRef();
  const [scrolling, setScrolling] = React8.useState(false);
  const hoverValues = React8.useRef([]);
  const lastBlitData = React8.useRef();
  const [hoveredItemInfo, setHoveredItemInfo] = React8.useState();
  const [hoveredOnEdge, setHoveredOnEdge] = React8.useState();
  const overlayRef = React8.useRef(null);
  const [drawCursorOverride, setDrawCursorOverride] = React8.useState();
  const [lastWasTouch, setLastWasTouch] = React8.useState(false);
  const lastWasTouchRef = React8.useRef(lastWasTouch);
  lastWasTouchRef.current = lastWasTouch;
  const spriteManager = React8.useMemo(() => new SpriteManager(headerIcons, () => {
    lastArgsRef.current = void 0;
    lastDrawRef.current();
  }), [headerIcons]);
  const totalHeaderHeight = enableGroups ? groupHeaderHeight + headerHeight : headerHeight;
  const scrollingStopRef = React8.useRef(-1);
  const enableFirefoxRescaling = (experimental?.enableFirefoxRescaling ?? false) && browserIsFirefox.value;
  const enableSafariRescaling = (experimental?.enableSafariRescaling ?? false) && browserIsSafari.value;
  React8.useLayoutEffect(() => {
    if (window.devicePixelRatio === 1 || !enableFirefoxRescaling && !enableSafariRescaling)
      return;
    if (scrollingStopRef.current !== -1) {
      setScrolling(true);
    }
    window.clearTimeout(scrollingStopRef.current);
    scrollingStopRef.current = window.setTimeout(() => {
      setScrolling(false);
      scrollingStopRef.current = -1;
    }, 200);
  }, [cellYOffset, cellXOffset, translateX, translateY, enableFirefoxRescaling, enableSafariRescaling]);
  const mappedColumns = useMappedColumns(columns, freezeColumns);
  const stickyX = fixedShadowX ? getStickyWidth(mappedColumns, dragAndDropState) : 0;
  const getBoundsForItem = React8.useCallback((canvas, col, row) => {
    const rect = canvas.getBoundingClientRect();
    if (col >= mappedColumns.length || row >= rows) {
      return void 0;
    }
    const scale = rect.width / width;
    const result = computeBounds(col, row, width, height, groupHeaderHeight, totalHeaderHeight, cellXOffset, cellYOffset, translateX, translateY, rows, freezeColumns, freezeTrailingRows, mappedColumns, rowHeight);
    if (scale !== 1) {
      result.x *= scale;
      result.y *= scale;
      result.width *= scale;
      result.height *= scale;
    }
    result.x += rect.x;
    result.y += rect.y;
    return result;
  }, [
    width,
    height,
    groupHeaderHeight,
    totalHeaderHeight,
    cellXOffset,
    cellYOffset,
    translateX,
    translateY,
    rows,
    freezeColumns,
    freezeTrailingRows,
    mappedColumns,
    rowHeight
  ]);
  const getMouseArgsForPosition = React8.useCallback((canvas, posX, posY, ev) => {
    const rect = canvas.getBoundingClientRect();
    const scale = rect.width / width;
    const x2 = (posX - rect.left) / scale;
    const y2 = (posY - rect.top) / scale;
    const edgeDetectionBuffer = 5;
    const effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, void 0, translateX);
    let button = 0;
    let buttons = 0;
    if (ev instanceof MouseEvent) {
      button = ev.button;
      buttons = ev.buttons;
    }
    const col = getColumnIndexForX(x2, effectiveCols, translateX);
    const row = getRowIndexForY(y2, height, enableGroups, headerHeight, groupHeaderHeight, rows, rowHeight, cellYOffset, translateY, freezeTrailingRows);
    const shiftKey = ev?.shiftKey === true;
    const ctrlKey = ev?.ctrlKey === true;
    const metaKey = ev?.metaKey === true;
    const isTouch = ev !== void 0 && !(ev instanceof MouseEvent) || ev?.pointerType === "touch";
    const scrollEdge = [
      x2 < 0 ? -1 : width < x2 ? 1 : 0,
      y2 < totalHeaderHeight ? -1 : height < y2 ? 1 : 0
    ];
    let result;
    if (col === -1 || y2 < 0 || x2 < 0 || row === void 0 || x2 > width || y2 > height) {
      const horizontal = x2 > width ? 1 : x2 < 0 ? -1 : 0;
      const vertical = y2 > height ? 1 : y2 < 0 ? -1 : 0;
      let innerHorizontal = horizontal * 2;
      let innerVertical = vertical * 2;
      if (horizontal === 0)
        innerHorizontal = col === -1 ? OutOfBoundsRegionAxis.EndPadding : OutOfBoundsRegionAxis.Center;
      if (vertical === 0)
        innerVertical = row === void 0 ? OutOfBoundsRegionAxis.EndPadding : OutOfBoundsRegionAxis.Center;
      let isEdge = false;
      if (col === -1 && row === -1) {
        const b3 = getBoundsForItem(canvas, mappedColumns.length - 1, -1);
        assert(b3 !== void 0);
        isEdge = posX < b3.x + b3.width + edgeDetectionBuffer;
      }
      const isMaybeScrollbar = x2 > width && x2 < width + getScrollBarWidth() || y2 > height && y2 < height + getScrollBarWidth();
      result = {
        kind: outOfBoundsKind,
        location: [col !== -1 ? col : x2 < 0 ? 0 : mappedColumns.length - 1, row ?? rows - 1],
        region: [innerHorizontal, innerVertical],
        shiftKey,
        ctrlKey,
        metaKey,
        isEdge,
        isTouch,
        button,
        buttons,
        scrollEdge,
        isMaybeScrollbar
      };
    } else if (row <= -1) {
      let bounds = getBoundsForItem(canvas, col, row);
      assert(bounds !== void 0);
      let isEdge = bounds !== void 0 && bounds.x + bounds.width - posX <= edgeDetectionBuffer;
      const previousCol = col - 1;
      if (posX - bounds.x <= edgeDetectionBuffer && previousCol >= 0) {
        isEdge = true;
        bounds = getBoundsForItem(canvas, previousCol, row);
        assert(bounds !== void 0);
        result = {
          kind: enableGroups && row === -2 ? groupHeaderKind : headerKind,
          location: [previousCol, row],
          bounds,
          group: mappedColumns[previousCol].group ?? "",
          isEdge,
          shiftKey,
          ctrlKey,
          metaKey,
          isTouch,
          localEventX: posX - bounds.x,
          localEventY: posY - bounds.y,
          button,
          buttons,
          scrollEdge
        };
      } else {
        result = {
          kind: enableGroups && row === -2 ? groupHeaderKind : headerKind,
          group: mappedColumns[col].group ?? "",
          location: [col, row],
          bounds,
          isEdge,
          shiftKey,
          ctrlKey,
          metaKey,
          isTouch,
          localEventX: posX - bounds.x,
          localEventY: posY - bounds.y,
          button,
          buttons,
          scrollEdge
        };
      }
    } else {
      const bounds = getBoundsForItem(canvas, col, row);
      assert(bounds !== void 0);
      const isEdge = bounds !== void 0 && bounds.x + bounds.width - posX < edgeDetectionBuffer;
      let isFillHandle = false;
      if (fillHandle && selection.current !== void 0) {
        const fillHandleLocation = rectBottomRight(selection.current.range);
        const fillHandleCellBounds = getBoundsForItem(canvas, fillHandleLocation[0], fillHandleLocation[1]);
        if (fillHandleCellBounds !== void 0) {
          const handleLogicalCenterX = fillHandleCellBounds.x + fillHandleCellBounds.width - 2;
          const handleLogicalCenterY = fillHandleCellBounds.y + fillHandleCellBounds.height - 2;
          isFillHandle = Math.abs(handleLogicalCenterX - posX) < fillHandleClickSize && Math.abs(handleLogicalCenterY - posY) < fillHandleClickSize;
        }
      }
      result = {
        kind: "cell",
        location: [col, row],
        bounds,
        isEdge,
        shiftKey,
        ctrlKey,
        isFillHandle,
        metaKey,
        isTouch,
        localEventX: posX - bounds.x,
        localEventY: posY - bounds.y,
        button,
        buttons,
        scrollEdge
      };
    }
    return result;
  }, [
    width,
    mappedColumns,
    cellXOffset,
    translateX,
    height,
    enableGroups,
    headerHeight,
    groupHeaderHeight,
    rows,
    rowHeight,
    cellYOffset,
    translateY,
    freezeTrailingRows,
    getBoundsForItem,
    fillHandle,
    selection,
    totalHeaderHeight
  ]);
  const [hoveredItem] = hoveredItemInfo ?? [];
  const enqueueRef = React8.useRef(() => {
  });
  const hoverInfoRef = React8.useRef(hoveredItemInfo);
  hoverInfoRef.current = hoveredItemInfo;
  const [bufferACtx, bufferBCtx] = React8.useMemo(() => {
    const a = document.createElement("canvas");
    const b3 = document.createElement("canvas");
    a.style["display"] = "none";
    a.style["opacity"] = "0";
    a.style["position"] = "fixed";
    b3.style["display"] = "none";
    b3.style["opacity"] = "0";
    b3.style["position"] = "fixed";
    return [a.getContext("2d", { alpha: false }), b3.getContext("2d", { alpha: false })];
  }, []);
  React8.useLayoutEffect(() => {
    if (bufferACtx === null || bufferBCtx === null)
      return;
    document.documentElement.append(bufferACtx.canvas);
    document.documentElement.append(bufferBCtx.canvas);
    return () => {
      bufferACtx.canvas.remove();
      bufferBCtx.canvas.remove();
    };
  }, [bufferACtx, bufferBCtx]);
  const renderStateProvider = React8.useMemo(() => new RenderStateProvider(), []);
  const maxDPR = enableFirefoxRescaling && scrolling ? 1 : enableSafariRescaling && scrolling ? 2 : 5;
  const minimumCellWidth = experimental?.disableMinimumCellWidth === true ? 1 : 10;
  const lastArgsRef = React8.useRef();
  const canvasCtx = React8.useRef(null);
  const overlayCtx = React8.useRef(null);
  const draw = React8.useCallback(() => {
    const canvas = ref.current;
    const overlay = overlayRef.current;
    if (canvas === null || overlay === null)
      return;
    if (canvasCtx.current === null) {
      canvasCtx.current = canvas.getContext("2d", { alpha: false });
      canvas.width = 0;
      canvas.height = 0;
    }
    if (overlayCtx.current === null) {
      overlayCtx.current = overlay.getContext("2d", { alpha: false });
      overlay.width = 0;
      overlay.height = 0;
    }
    if (canvasCtx.current === null || overlayCtx.current === null || bufferACtx === null || bufferBCtx === null) {
      return;
    }
    let didOverride = false;
    const overrideCursor = (cursor2) => {
      didOverride = true;
      setDrawCursorOverride(cursor2);
    };
    const last = lastArgsRef.current;
    const current = {
      headerCanvasCtx: overlayCtx.current,
      canvasCtx: canvasCtx.current,
      bufferACtx,
      bufferBCtx,
      width,
      height,
      cellXOffset,
      cellYOffset,
      translateX: Math.round(translateX),
      translateY: Math.round(translateY),
      mappedColumns,
      enableGroups,
      freezeColumns,
      dragAndDropState,
      theme,
      headerHeight,
      groupHeaderHeight,
      disabledRows: disabledRows ?? CompactSelection.empty(),
      rowHeight,
      verticalBorder,
      isResizing,
      resizeCol,
      isFocused,
      selection,
      fillHandle,
      drawCellCallback,
      hasAppendRow,
      overrideCursor,
      maxScaleFactor: maxDPR,
      freezeTrailingRows,
      rows,
      drawFocus: drawFocusRing,
      getCellContent,
      getGroupDetails: getGroupDetails ?? ((name) => ({ name })),
      getRowThemeOverride,
      drawHeaderCallback,
      prelightCells,
      highlightRegions,
      imageLoader,
      lastBlitData,
      damage: damageRegion.current,
      hoverValues: hoverValues.current,
      hoverInfo: hoverInfoRef.current,
      spriteManager,
      scrolling,
      hyperWrapping: experimental?.hyperWrapping ?? false,
      touchMode: lastWasTouch,
      enqueue: enqueueRef.current,
      renderStateProvider,
      renderStrategy: experimental?.renderStrategy ?? (browserIsSafari.value ? "double-buffer" : "single-buffer"),
      getCellRenderer,
      minimumCellWidth
    };
    if (current.damage === void 0) {
      lastArgsRef.current = current;
      drawGrid(current, last);
    } else {
      drawGrid(current, void 0);
    }
    if (!didOverride && (current.damage === void 0 || current.damage.has(hoverInfoRef?.current?.[0]))) {
      setDrawCursorOverride(void 0);
    }
  }, [
    bufferACtx,
    bufferBCtx,
    width,
    height,
    cellXOffset,
    cellYOffset,
    translateX,
    translateY,
    mappedColumns,
    enableGroups,
    freezeColumns,
    dragAndDropState,
    theme,
    headerHeight,
    groupHeaderHeight,
    disabledRows,
    rowHeight,
    verticalBorder,
    isResizing,
    hasAppendRow,
    resizeCol,
    isFocused,
    selection,
    fillHandle,
    freezeTrailingRows,
    rows,
    drawFocusRing,
    maxDPR,
    getCellContent,
    getGroupDetails,
    getRowThemeOverride,
    drawCellCallback,
    drawHeaderCallback,
    prelightCells,
    highlightRegions,
    imageLoader,
    spriteManager,
    scrolling,
    experimental?.hyperWrapping,
    experimental?.renderStrategy,
    lastWasTouch,
    renderStateProvider,
    getCellRenderer,
    minimumCellWidth
  ]);
  const lastDrawRef = React8.useRef(draw);
  React8.useLayoutEffect(() => {
    draw();
    lastDrawRef.current = draw;
  }, [draw]);
  React8.useLayoutEffect(() => {
    const fn = async () => {
      if (document?.fonts?.ready === void 0)
        return;
      await document.fonts.ready;
      lastArgsRef.current = void 0;
      lastDrawRef.current();
    };
    void fn();
  }, []);
  const damageInternal = React8.useCallback((locations) => {
    damageRegion.current = locations;
    lastDrawRef.current();
    damageRegion.current = void 0;
  }, []);
  const enqueue = useAnimationQueue(damageInternal);
  enqueueRef.current = enqueue;
  const damage = React8.useCallback((cells) => {
    damageInternal(new CellSet(cells.map((x2) => x2.cell)));
  }, [damageInternal]);
  imageLoader.setCallback(damageInternal);
  const [overFill, setOverFill] = React8.useState(false);
  const [hCol, hRow] = hoveredItem ?? [];
  const headerHovered = hCol !== void 0 && hRow === -1;
  const groupHeaderHovered = hCol !== void 0 && hRow === -2;
  let clickableInnerCellHovered = false;
  let editableBoolHovered = false;
  let cursorOverride = drawCursorOverride;
  if (cursorOverride === void 0 && hCol !== void 0 && hRow !== void 0 && hRow > -1 && hRow < rows) {
    const cell = getCellContent([hCol, hRow], true);
    clickableInnerCellHovered = cell.kind === InnerGridCellKind.NewRow || cell.kind === InnerGridCellKind.Marker && cell.markerKind !== "number";
    editableBoolHovered = cell.kind === GridCellKind.Boolean && booleanCellIsEditable(cell);
    cursorOverride = cell.cursor;
  }
  const canDrag = hoveredOnEdge ?? false;
  const cursor = isDragging ? "grabbing" : canDrag || isResizing ? "col-resize" : overFill || isFilling ? "crosshair" : cursorOverride !== void 0 ? cursorOverride : headerHovered || clickableInnerCellHovered || editableBoolHovered || groupHeaderHovered ? "pointer" : "default";
  const style = React8.useMemo(() => ({
    contain: "strict",
    display: "block",
    cursor
  }), [cursor]);
  const lastSetCursor = React8.useRef("default");
  const target = eventTargetRef?.current;
  if (target !== null && target !== void 0 && lastSetCursor.current !== style.cursor) {
    target.style.cursor = lastSetCursor.current = style.cursor;
  }
  const groupHeaderActionForEvent = React8.useCallback((group, bounds, localEventX, localEventY) => {
    if (getGroupDetails === void 0)
      return void 0;
    const groupDesc = getGroupDetails(group);
    if (groupDesc.actions !== void 0) {
      const boxes = getActionBoundsForGroup(bounds, groupDesc.actions);
      for (const [i, box] of boxes.entries()) {
        if (pointInRect(box, localEventX + bounds.x, localEventY + box.y)) {
          return groupDesc.actions[i];
        }
      }
    }
    return void 0;
  }, [getGroupDetails]);
  const isOverHeaderMenu = React8.useCallback((canvas, col, clientX, clientY) => {
    const header = columns[col];
    if (!isDragging && !isResizing && header.hasMenu === true && !(hoveredOnEdge ?? false)) {
      const headerBounds = getBoundsForItem(canvas, col, -1);
      assert(headerBounds !== void 0);
      const menuBounds = getHeaderMenuBounds(headerBounds.x, headerBounds.y, headerBounds.width, headerBounds.height, direction(header.title) === "rtl");
      if (clientX > menuBounds.x && clientX < menuBounds.x + menuBounds.width && clientY > menuBounds.y && clientY < menuBounds.y + menuBounds.height) {
        return headerBounds;
      }
    }
    return void 0;
  }, [columns, getBoundsForItem, hoveredOnEdge, isDragging, isResizing]);
  const downTime = React8.useRef(0);
  const downPosition = React8.useRef();
  const mouseDown = React8.useRef(false);
  const onMouseDownImpl = React8.useCallback((ev) => {
    const canvas = ref.current;
    const eventTarget = eventTargetRef?.current;
    if (canvas === null || ev.target !== canvas && ev.target !== eventTarget)
      return;
    mouseDown.current = true;
    let clientX;
    let clientY;
    if (ev instanceof MouseEvent) {
      clientX = ev.clientX;
      clientY = ev.clientY;
    } else {
      clientX = ev.touches[0].clientX;
      clientY = ev.touches[0].clientY;
    }
    if (ev.target === eventTarget && eventTarget !== null) {
      const bounds = eventTarget.getBoundingClientRect();
      if (clientX > bounds.right || clientY > bounds.bottom)
        return;
    }
    const args = getMouseArgsForPosition(canvas, clientX, clientY, ev);
    downPosition.current = args.location;
    if (args.isTouch) {
      downTime.current = Date.now();
    }
    if (lastWasTouchRef.current !== args.isTouch) {
      setLastWasTouch(args.isTouch);
    }
    if (args.kind === headerKind && isOverHeaderMenu(canvas, args.location[0], clientX, clientY) !== void 0) {
      return;
    } else if (args.kind === groupHeaderKind) {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);
      if (action !== void 0) {
        return;
      }
    }
    onMouseDown?.(args);
    if (!args.isTouch && isDraggable !== true && isDraggable !== args.kind && args.button < 3 && args.button !== 1) {
      ev.preventDefault();
    }
  }, [eventTargetRef, isDraggable, getMouseArgsForPosition, groupHeaderActionForEvent, isOverHeaderMenu, onMouseDown]);
  useEventListener("touchstart", onMouseDownImpl, window, false);
  useEventListener("mousedown", onMouseDownImpl, window, false);
  const lastUpTime = React8.useRef(0);
  const onMouseUpImpl = React8.useCallback((ev) => {
    const lastUpTimeValue = lastUpTime.current;
    lastUpTime.current = Date.now();
    const canvas = ref.current;
    mouseDown.current = false;
    if (onMouseUp === void 0 || canvas === null)
      return;
    const eventTarget = eventTargetRef?.current;
    const isOutside = ev.target !== canvas && ev.target !== eventTarget;
    let clientX;
    let clientY;
    let canCancel = true;
    if (ev instanceof MouseEvent) {
      clientX = ev.clientX;
      clientY = ev.clientY;
      canCancel = ev.button < 3;
      if (ev.pointerType === "touch") {
        return;
      }
    } else {
      clientX = ev.changedTouches[0].clientX;
      clientY = ev.changedTouches[0].clientY;
    }
    let args = getMouseArgsForPosition(canvas, clientX, clientY, ev);
    if (args.isTouch && downTime.current !== 0 && Date.now() - downTime.current > 500) {
      args = {
        ...args,
        isLongTouch: true
      };
    }
    if (lastUpTimeValue !== 0 && Date.now() - lastUpTimeValue < (args.isTouch ? 1e3 : 500)) {
      args = {
        ...args,
        isDoubleClick: true
      };
    }
    if (lastWasTouchRef.current !== args.isTouch) {
      setLastWasTouch(args.isTouch);
    }
    if (!isOutside && ev.cancelable && canCancel) {
      ev.preventDefault();
    }
    const [col] = args.location;
    const headerBounds = isOverHeaderMenu(canvas, col, clientX, clientY);
    if (args.kind === headerKind && headerBounds !== void 0) {
      if (args.button !== 0 || downPosition.current?.[0] !== col || downPosition.current?.[1] !== -1) {
        onMouseUp(args, true);
      }
      return;
    } else if (args.kind === groupHeaderKind) {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);
      if (action !== void 0) {
        if (args.button === 0) {
          action.onClick(args);
        }
        return;
      }
    }
    onMouseUp(args, isOutside);
  }, [onMouseUp, eventTargetRef, getMouseArgsForPosition, isOverHeaderMenu, groupHeaderActionForEvent]);
  useEventListener("mouseup", onMouseUpImpl, window, false);
  useEventListener("touchend", onMouseUpImpl, window, false);
  const onClickImpl = React8.useCallback((ev) => {
    const canvas = ref.current;
    if (canvas === null)
      return;
    const eventTarget = eventTargetRef?.current;
    const isOutside = ev.target !== canvas && ev.target !== eventTarget;
    let clientX;
    let clientY;
    let canCancel = true;
    if (ev instanceof MouseEvent) {
      clientX = ev.clientX;
      clientY = ev.clientY;
      canCancel = ev.button < 3;
    } else {
      clientX = ev.changedTouches[0].clientX;
      clientY = ev.changedTouches[0].clientY;
    }
    const args = getMouseArgsForPosition(canvas, clientX, clientY, ev);
    if (lastWasTouchRef.current !== args.isTouch) {
      setLastWasTouch(args.isTouch);
    }
    if (!isOutside && ev.cancelable && canCancel) {
      ev.preventDefault();
    }
    const [col] = args.location;
    const headerBounds = isOverHeaderMenu(canvas, col, clientX, clientY);
    if (args.kind === headerKind && headerBounds !== void 0) {
      if (args.button === 0 && downPosition.current?.[0] === col && downPosition.current?.[1] === -1) {
        onHeaderMenuClick?.(col, headerBounds);
      }
    } else if (args.kind === groupHeaderKind) {
      const action = groupHeaderActionForEvent(args.group, args.bounds, args.localEventX, args.localEventY);
      if (action !== void 0 && args.button === 0) {
        action.onClick(args);
      }
    }
  }, [eventTargetRef, getMouseArgsForPosition, isOverHeaderMenu, onHeaderMenuClick, groupHeaderActionForEvent]);
  useEventListener("click", onClickImpl, window, false);
  const onContextMenuImpl = React8.useCallback((ev) => {
    const canvas = ref.current;
    const eventTarget = eventTargetRef?.current;
    if (canvas === null || ev.target !== canvas && ev.target !== eventTarget || onContextMenu === void 0)
      return;
    const args = getMouseArgsForPosition(canvas, ev.clientX, ev.clientY, ev);
    onContextMenu(args, () => {
      if (ev.cancelable)
        ev.preventDefault();
    });
  }, [eventTargetRef, getMouseArgsForPosition, onContextMenu]);
  useEventListener("contextmenu", onContextMenuImpl, eventTargetRef?.current ?? null, false);
  const onAnimationFrame = React8.useCallback((values) => {
    damageRegion.current = new CellSet(values.map((x2) => x2.item));
    hoverValues.current = values;
    lastDrawRef.current();
    damageRegion.current = void 0;
  }, []);
  const animManagerValue = React8.useMemo(() => new AnimationManager(onAnimationFrame), [onAnimationFrame]);
  const animationManager = React8.useRef(animManagerValue);
  animationManager.current = animManagerValue;
  React8.useLayoutEffect(() => {
    const am = animationManager.current;
    if (hoveredItem === void 0 || hoveredItem[1] < 0) {
      am.setHovered(hoveredItem);
      return;
    }
    const cell = getCellContent(hoveredItem, true);
    const r = getCellRenderer(cell);
    const cellNeedsHover = r === void 0 && cell.kind === GridCellKind.Custom || r?.needsHover !== void 0 && (typeof r.needsHover === "boolean" ? r.needsHover : r.needsHover(cell));
    am.setHovered(cellNeedsHover ? hoveredItem : void 0);
  }, [getCellContent, getCellRenderer, hoveredItem]);
  const hoveredRef = React8.useRef();
  const onMouseMoveImpl = React8.useCallback((ev) => {
    const canvas = ref.current;
    if (canvas === null)
      return;
    const eventTarget = eventTargetRef?.current;
    const isIndirect = ev.target !== canvas && ev.target !== eventTarget;
    const args = getMouseArgsForPosition(canvas, ev.clientX, ev.clientY, ev);
    if (args.kind !== "out-of-bounds" && isIndirect && !mouseDown.current && !args.isTouch) {
      return;
    }
    const maybeSetHoveredInfo = (newVal, needPosition) => {
      setHoveredItemInfo((cv) => {
        if (cv === newVal)
          return cv;
        if (cv?.[0][0] === newVal?.[0][0] && cv?.[0][1] === newVal?.[0][1] && (cv?.[1][0] === newVal?.[1][0] && cv?.[1][1] === newVal?.[1][1] || !needPosition)) {
          return cv;
        }
        return newVal;
      });
    };
    if (!mouseEventArgsAreEqual(args, hoveredRef.current)) {
      setDrawCursorOverride(void 0);
      onItemHovered?.(args);
      maybeSetHoveredInfo(args.kind === outOfBoundsKind ? void 0 : [args.location, [args.localEventX, args.localEventY]], true);
      hoveredRef.current = args;
    } else if (args.kind === "cell" || args.kind === headerKind || args.kind === groupHeaderKind) {
      let needsDamageCell = false;
      let needsHoverPosition = true;
      if (args.kind === "cell") {
        const toCheck = getCellContent(args.location);
        const rendererNeeds = getCellRenderer(toCheck)?.needsHoverPosition;
        needsHoverPosition = rendererNeeds ?? toCheck.kind === GridCellKind.Custom;
        needsDamageCell = needsHoverPosition;
      } else if (args.kind === groupHeaderKind) {
        needsDamageCell = true;
      }
      const newInfo = [args.location, [args.localEventX, args.localEventY]];
      maybeSetHoveredInfo(newInfo, needsHoverPosition);
      hoverInfoRef.current = newInfo;
      if (needsDamageCell) {
        damageInternal(new CellSet([args.location]));
      }
    }
    const notRowMarkerCol = args.location[0] >= (firstColAccessible ? 0 : 1);
    setHoveredOnEdge(args.kind === headerKind && args.isEdge && notRowMarkerCol && allowResize === true);
    setOverFill(args.kind === "cell" && args.isFillHandle);
    onMouseMoveRaw?.(ev);
    onMouseMove(args);
  }, [
    eventTargetRef,
    getMouseArgsForPosition,
    firstColAccessible,
    allowResize,
    onMouseMoveRaw,
    onMouseMove,
    onItemHovered,
    getCellContent,
    getCellRenderer,
    damageInternal
  ]);
  useEventListener("mousemove", onMouseMoveImpl, window, true);
  const onKeyDownImpl = React8.useCallback((event) => {
    const canvas = ref.current;
    if (canvas === null)
      return;
    let bounds;
    let location = void 0;
    if (selection.current !== void 0) {
      bounds = getBoundsForItem(canvas, selection.current.cell[0], selection.current.cell[1]);
      location = selection.current.cell;
    }
    onKeyDown?.({
      bounds,
      stopPropagation: () => event.stopPropagation(),
      preventDefault: () => event.preventDefault(),
      cancel: () => void 0,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      altKey: event.altKey,
      key: event.key,
      keyCode: event.keyCode,
      rawEvent: event,
      location
    });
  }, [onKeyDown, selection, getBoundsForItem]);
  const onKeyUpImpl = React8.useCallback((event) => {
    const canvas = ref.current;
    if (canvas === null)
      return;
    let bounds;
    let location = void 0;
    if (selection.current !== void 0) {
      bounds = getBoundsForItem(canvas, selection.current.cell[0], selection.current.cell[1]);
      location = selection.current.cell;
    }
    onKeyUp?.({
      bounds,
      stopPropagation: () => event.stopPropagation(),
      preventDefault: () => event.preventDefault(),
      cancel: () => void 0,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      altKey: event.altKey,
      key: event.key,
      keyCode: event.keyCode,
      rawEvent: event,
      location
    });
  }, [onKeyUp, selection, getBoundsForItem]);
  const refImpl = React8.useCallback((instance) => {
    ref.current = instance;
    if (canvasRef !== void 0) {
      canvasRef.current = instance;
    }
  }, [canvasRef]);
  const onDragStartImpl = React8.useCallback((event) => {
    const canvas = ref.current;
    if (canvas === null || isDraggable === false || isResizing) {
      event.preventDefault();
      return;
    }
    let dragMime;
    let dragData;
    const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
    if (isDraggable !== true && args.kind !== isDraggable) {
      event.preventDefault();
      return;
    }
    const setData = (mime, payload) => {
      dragMime = mime;
      dragData = payload;
    };
    let dragImage;
    let dragImageX;
    let dragImageY;
    const setDragImage = (image, x2, y2) => {
      dragImage = image;
      dragImageX = x2;
      dragImageY = y2;
    };
    let prevented = false;
    onDragStart?.({
      ...args,
      setData,
      setDragImage,
      preventDefault: () => prevented = true,
      defaultPrevented: () => prevented
    });
    if (!prevented && dragMime !== void 0 && dragData !== void 0 && event.dataTransfer !== null) {
      event.dataTransfer.setData(dragMime, dragData);
      event.dataTransfer.effectAllowed = "copyLink";
      if (dragImage !== void 0 && dragImageX !== void 0 && dragImageY !== void 0) {
        event.dataTransfer.setDragImage(dragImage, dragImageX, dragImageY);
      } else {
        const [col, row] = args.location;
        if (row !== void 0) {
          const offscreen = document.createElement("canvas");
          const boundsForDragTarget = getBoundsForItem(canvas, col, row);
          assert(boundsForDragTarget !== void 0);
          const dpr = Math.ceil(window.devicePixelRatio ?? 1);
          offscreen.width = boundsForDragTarget.width * dpr;
          offscreen.height = boundsForDragTarget.height * dpr;
          const ctx = offscreen.getContext("2d");
          if (ctx !== null) {
            ctx.scale(dpr, dpr);
            ctx.textBaseline = "middle";
            if (row === -1) {
              ctx.font = theme.headerFontFull;
              ctx.fillStyle = theme.bgHeader;
              ctx.fillRect(0, 0, offscreen.width, offscreen.height);
              drawHeader(ctx, 0, 0, boundsForDragTarget.width, boundsForDragTarget.height, mappedColumns[col], false, theme, false, false, 0, spriteManager, drawHeaderCallback, false);
            } else {
              ctx.font = theme.baseFontFull;
              ctx.fillStyle = theme.bgCell;
              ctx.fillRect(0, 0, offscreen.width, offscreen.height);
              drawCell(ctx, getCellContent([col, row]), 0, row, false, false, 0, 0, boundsForDragTarget.width, boundsForDragTarget.height, false, theme, theme.bgCell, imageLoader, spriteManager, 1, void 0, false, 0, void 0, void 0, void 0, renderStateProvider, getCellRenderer, () => void 0);
            }
          }
          offscreen.style.left = "-100%";
          offscreen.style.position = "absolute";
          offscreen.style.width = `${boundsForDragTarget.width}px`;
          offscreen.style.height = `${boundsForDragTarget.height}px`;
          document.body.append(offscreen);
          event.dataTransfer.setDragImage(offscreen, boundsForDragTarget.width / 2, boundsForDragTarget.height / 2);
          window.setTimeout(() => {
            offscreen.remove();
          }, 0);
        }
      }
    } else {
      event.preventDefault();
    }
  }, [
    isDraggable,
    isResizing,
    getMouseArgsForPosition,
    onDragStart,
    getBoundsForItem,
    theme,
    mappedColumns,
    spriteManager,
    drawHeaderCallback,
    getCellContent,
    imageLoader,
    renderStateProvider,
    getCellRenderer
  ]);
  useEventListener("dragstart", onDragStartImpl, eventTargetRef?.current ?? null, false, false);
  const activeDropTarget = React8.useRef();
  const onDragOverImpl = React8.useCallback((event) => {
    const canvas = ref.current;
    if (onDrop !== void 0) {
      event.preventDefault();
    }
    if (canvas === null || onDragOverCell === void 0) {
      return;
    }
    const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
    const [rawCol, row] = args.location;
    const col = rawCol - (firstColAccessible ? 0 : 1);
    const [activeCol, activeRow] = activeDropTarget.current ?? [];
    if (activeCol !== col || activeRow !== row) {
      activeDropTarget.current = [col, row];
      onDragOverCell([col, row], event.dataTransfer);
    }
  }, [firstColAccessible, getMouseArgsForPosition, onDragOverCell, onDrop]);
  useEventListener("dragover", onDragOverImpl, eventTargetRef?.current ?? null, false, false);
  const onDragEndImpl = React8.useCallback(() => {
    activeDropTarget.current = void 0;
    onDragEnd?.();
  }, [onDragEnd]);
  useEventListener("dragend", onDragEndImpl, eventTargetRef?.current ?? null, false, false);
  const onDropImpl = React8.useCallback((event) => {
    const canvas = ref.current;
    if (canvas === null || onDrop === void 0) {
      return;
    }
    event.preventDefault();
    const args = getMouseArgsForPosition(canvas, event.clientX, event.clientY);
    const [rawCol, row] = args.location;
    const col = rawCol - (firstColAccessible ? 0 : 1);
    onDrop([col, row], event.dataTransfer);
  }, [firstColAccessible, getMouseArgsForPosition, onDrop]);
  useEventListener("drop", onDropImpl, eventTargetRef?.current ?? null, false, false);
  const onDragLeaveImpl = React8.useCallback(() => {
    onDragLeave?.();
  }, [onDragLeave]);
  useEventListener("dragleave", onDragLeaveImpl, eventTargetRef?.current ?? null, false, false);
  const selectionRef = React8.useRef(selection);
  selectionRef.current = selection;
  const focusRef = React8.useRef(null);
  const focusElement = React8.useCallback((el) => {
    if (ref.current === null || !ref.current.contains(document.activeElement))
      return;
    if (el === null && selectionRef.current.current !== void 0) {
      canvasRef?.current?.focus({
        preventScroll: true
      });
    } else if (el !== null) {
      el.focus({
        preventScroll: true
      });
    }
    focusRef.current = el;
  }, [canvasRef]);
  React8.useImperativeHandle(forwardedRef, () => ({
    focus: () => {
      const el = focusRef.current;
      if (el === null || !document.contains(el)) {
        canvasRef?.current?.focus({
          preventScroll: true
        });
      } else {
        el.focus({
          preventScroll: true
        });
      }
    },
    getBounds: (col, row) => {
      if (canvasRef === void 0 || canvasRef.current === null) {
        return void 0;
      }
      return getBoundsForItem(canvasRef.current, col ?? 0, row ?? -1);
    },
    damage
  }), [canvasRef, damage, getBoundsForItem]);
  const lastFocusedSubdomNode = React8.useRef();
  const accessibilityTree = useDebouncedMemo(() => {
    if (width < 50 || experimental?.disableAccessibilityTree === true)
      return null;
    let effectiveCols = getEffectiveColumns(mappedColumns, cellXOffset, width, dragAndDropState, translateX);
    const colOffset = firstColAccessible ? 0 : -1;
    if (!firstColAccessible && effectiveCols[0]?.sourceIndex === 0) {
      effectiveCols = effectiveCols.slice(1);
    }
    const [fCol, fRow] = selection.current?.cell ?? [];
    const range2 = selection.current?.range;
    const visibleCols = effectiveCols.map((c) => c.sourceIndex);
    const visibleRows = (0, import_range.default)(cellYOffset, Math.min(rows, cellYOffset + accessibilityHeight));
    if (fCol !== void 0 && fRow !== void 0 && !(visibleCols.includes(fCol) && visibleRows.includes(fRow))) {
      focusElement(null);
    }
    return React8.createElement(
      "table",
      { key: "access-tree", role: "grid", "aria-rowcount": rows + 1, "aria-multiselectable": "true", "aria-colcount": mappedColumns.length + colOffset },
      React8.createElement(
        "thead",
        { role: "rowgroup" },
        React8.createElement("tr", { role: "row", "aria-rowindex": 1 }, effectiveCols.map((c) => React8.createElement("th", { role: "columnheader", "aria-selected": selection.columns.hasIndex(c.sourceIndex), "aria-colindex": c.sourceIndex + 1 + colOffset, tabIndex: -1, onFocus: (e) => {
          if (e.target === focusRef.current)
            return;
          return onCellFocused?.([c.sourceIndex, -1]);
        }, key: c.sourceIndex }, c.title)))
      ),
      React8.createElement("tbody", { role: "rowgroup" }, visibleRows.map((row) => React8.createElement("tr", { role: "row", "aria-selected": selection.rows.hasIndex(row), key: row, "aria-rowindex": row + 2 }, effectiveCols.map((c) => {
        const col = c.sourceIndex;
        const key = packColRowToNumber(col, row);
        const focused = fCol === col && fRow === row;
        const selected = range2 !== void 0 && col >= range2.x && col < range2.x + range2.width && row >= range2.y && row < range2.y + range2.height;
        const id = `glide-cell-${col}-${row}`;
        const location = [col, row];
        const cellContent = getCellContent(location, true);
        return React8.createElement("td", { key, role: "gridcell", "aria-colindex": col + 1 + colOffset, "aria-selected": selected, "aria-readonly": isInnerOnlyCell(cellContent) || !isReadWriteCell(cellContent), id, "data-testid": id, onClick: () => {
          const canvas = canvasRef?.current;
          if (canvas === null || canvas === void 0)
            return;
          return onKeyDown?.({
            bounds: getBoundsForItem(canvas, col, row),
            cancel: () => void 0,
            preventDefault: () => void 0,
            stopPropagation: () => void 0,
            ctrlKey: false,
            key: "Enter",
            keyCode: 13,
            metaKey: false,
            shiftKey: false,
            altKey: false,
            rawEvent: void 0,
            location
          });
        }, onFocusCapture: (e) => {
          if (e.target === focusRef.current || lastFocusedSubdomNode.current?.[0] === col && lastFocusedSubdomNode.current?.[1] === row)
            return;
          lastFocusedSubdomNode.current = location;
          return onCellFocused?.(location);
        }, ref: focused ? focusElement : void 0, tabIndex: -1 }, getRowData(cellContent, getCellRenderer));
      }))))
    );
  }, [
    width,
    mappedColumns,
    cellXOffset,
    dragAndDropState,
    translateX,
    rows,
    cellYOffset,
    accessibilityHeight,
    selection,
    focusElement,
    getCellContent,
    canvasRef,
    onKeyDown,
    getBoundsForItem,
    onCellFocused
  ], 200);
  const opacityX = freezeColumns === 0 || !fixedShadowX ? 0 : cellXOffset > freezeColumns ? 1 : (0, import_clamp2.default)(-translateX / 100, 0, 1);
  const absoluteOffsetY = -cellYOffset * 32 + translateY;
  const opacityY = !fixedShadowY ? 0 : (0, import_clamp2.default)(-absoluteOffsetY / 100, 0, 1);
  const stickyShadow = React8.useMemo(() => {
    if (!opacityX && !opacityY) {
      return null;
    }
    const styleX = {
      position: "absolute",
      top: 0,
      left: stickyX,
      width: width - stickyX,
      height,
      opacity: opacityX,
      pointerEvents: "none",
      transition: !smoothScrollX ? "opacity 0.2s" : void 0,
      boxShadow: "inset 13px 0 10px -13px rgba(0, 0, 0, 0.2)"
    };
    const styleY = {
      position: "absolute",
      top: totalHeaderHeight,
      left: 0,
      width,
      height,
      opacity: opacityY,
      pointerEvents: "none",
      transition: !smoothScrollY ? "opacity 0.2s" : void 0,
      boxShadow: "inset 0 13px 10px -13px rgba(0, 0, 0, 0.2)"
    };
    return React8.createElement(
      React8.Fragment,
      null,
      opacityX > 0 && React8.createElement("div", { id: "shadow-x", style: styleX }),
      opacityY > 0 && React8.createElement("div", { id: "shadow-y", style: styleY })
    );
  }, [opacityX, opacityY, stickyX, width, smoothScrollX, totalHeaderHeight, height, smoothScrollY]);
  const overlayStyle = React8.useMemo(() => ({
    position: "absolute",
    top: 0,
    left: 0
  }), []);
  return React8.createElement(
    React8.Fragment,
    null,
    React8.createElement("canvas", { "data-testid": "data-grid-canvas", tabIndex: 0, onKeyDown: onKeyDownImpl, onKeyUp: onKeyUpImpl, onFocus: onCanvasFocused, onBlur: onCanvasBlur, ref: refImpl, style }, accessibilityTree),
    React8.createElement("canvas", { ref: overlayRef, style: overlayStyle }),
    stickyShadow
  );
};
var data_grid_default = React8.memo(React8.forwardRef(DataGrid));

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-dnd/data-grid-dnd.js
function offsetColumnSize(column, width, min, max) {
  return (0, import_clamp3.default)(Math.round(width - (column.growOffset ?? 0)), Math.ceil(min), Math.floor(max));
}
var DataGridDnd = (p2) => {
  const [resizeColStartX, setResizeColStartX] = React9.useState();
  const [resizeCol, setResizeCol] = React9.useState();
  const [dragCol, setDragCol] = React9.useState();
  const [dropCol, setDropCol] = React9.useState();
  const [dragColActive, setDragColActive] = React9.useState(false);
  const [dragStartX, setDragStartX] = React9.useState();
  const [dragRow, setDragRow] = React9.useState();
  const [dropRow, setDropRow] = React9.useState();
  const [dragRowActive, setDragRowActive] = React9.useState(false);
  const [dragStartY, setDragStartY] = React9.useState();
  const { onHeaderMenuClick, getCellContent, onColumnMoved, onColumnResize, onColumnResizeStart, onColumnResizeEnd, gridRef, maxColumnWidth, minColumnWidth, onRowMoved, lockColumns, onColumnProposeMove, onMouseDown, onMouseUp, onItemHovered, onDragStart, canvasRef } = p2;
  const canResize = (onColumnResize ?? onColumnResizeEnd ?? onColumnResizeStart) !== void 0;
  const { columns, selection } = p2;
  const selectedColumns = selection.columns;
  const onItemHoveredImpl = React9.useCallback((args) => {
    const [col, row] = args.location;
    if (dragCol !== void 0 && dropCol !== col && col >= lockColumns) {
      setDragColActive(true);
      setDropCol(col);
    } else if (dragRow !== void 0 && row !== void 0) {
      setDragRowActive(true);
      setDropRow(Math.max(0, row));
    } else if (resizeCol === void 0 && !dragColActive && !dragRowActive) {
      onItemHovered?.(args);
    }
  }, [dragCol, dragRow, dropCol, onItemHovered, lockColumns, resizeCol, dragColActive, dragRowActive]);
  const canDragCol = onColumnMoved !== void 0;
  const onMouseDownImpl = React9.useCallback((args) => {
    if (args.button === 0) {
      const [col, row] = args.location;
      if (args.kind === "out-of-bounds" && args.isEdge && canResize) {
        const bounds = gridRef?.current?.getBounds(columns.length - 1, -1);
        if (bounds !== void 0) {
          setResizeColStartX(bounds.x);
          setResizeCol(columns.length - 1);
        }
      } else if (args.kind === "header" && col >= lockColumns) {
        const canvas = canvasRef?.current;
        if (args.isEdge && canResize && canvas) {
          setResizeColStartX(args.bounds.x);
          setResizeCol(col);
          const rect = canvas.getBoundingClientRect();
          const scale = rect.width / canvas.offsetWidth;
          const width = args.bounds.width / scale;
          onColumnResizeStart?.(columns[col], width, col, width + (columns[col].growOffset ?? 0));
        } else if (args.kind === "header" && canDragCol) {
          setDragStartX(args.bounds.x);
          setDragCol(col);
        }
      } else if (args.kind === "cell" && lockColumns > 0 && col === 0 && row !== void 0 && onRowMoved !== void 0) {
        setDragStartY(args.bounds.y);
        setDragRow(row);
      }
    }
    onMouseDown?.(args);
  }, [onMouseDown, canResize, lockColumns, onRowMoved, gridRef, columns, canDragCol, onColumnResizeStart, canvasRef]);
  const onHeaderMenuClickMangled = React9.useCallback((col, screenPosition) => {
    if (dragColActive || dragRowActive)
      return;
    onHeaderMenuClick?.(col, screenPosition);
  }, [dragColActive, dragRowActive, onHeaderMenuClick]);
  const lastResizeWidthRef = React9.useRef(-1);
  const clearAll = React9.useCallback(() => {
    lastResizeWidthRef.current = -1;
    setDragRow(void 0);
    setDropRow(void 0);
    setDragStartY(void 0);
    setDragRowActive(false);
    setDragCol(void 0);
    setDropCol(void 0);
    setDragStartX(void 0);
    setDragColActive(false);
    setResizeCol(void 0);
    setResizeColStartX(void 0);
  }, []);
  const onMouseUpImpl = React9.useCallback((args, isOutside) => {
    if (args.button === 0) {
      if (resizeCol !== void 0) {
        if (selectedColumns?.hasIndex(resizeCol) === true) {
          for (const c of selectedColumns) {
            if (c === resizeCol)
              continue;
            const col = columns[c];
            const newSize = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
            onColumnResize?.(col, newSize, c, newSize + (col.growOffset ?? 0));
          }
        }
        const ns = offsetColumnSize(columns[resizeCol], lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
        onColumnResizeEnd?.(columns[resizeCol], ns, resizeCol, ns + (columns[resizeCol].growOffset ?? 0));
        if (selectedColumns.hasIndex(resizeCol)) {
          for (const c of selectedColumns) {
            if (c === resizeCol)
              continue;
            const col = columns[c];
            const s = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
            onColumnResizeEnd?.(col, s, c, s + (col.growOffset ?? 0));
          }
        }
      }
      clearAll();
      if (dragCol !== void 0 && dropCol !== void 0) {
        onColumnMoved?.(dragCol, dropCol);
      }
      if (dragRow !== void 0 && dropRow !== void 0) {
        onRowMoved?.(dragRow, dropRow);
      }
    }
    onMouseUp?.(args, isOutside);
  }, [
    onMouseUp,
    resizeCol,
    dragCol,
    dropCol,
    dragRow,
    dropRow,
    selectedColumns,
    onColumnResizeEnd,
    columns,
    minColumnWidth,
    maxColumnWidth,
    onColumnResize,
    onColumnMoved,
    onRowMoved,
    clearAll
  ]);
  const dragOffset = React9.useMemo(() => {
    if (dragCol === void 0 || dropCol === void 0)
      return void 0;
    if (dragCol === dropCol)
      return void 0;
    if (onColumnProposeMove?.(dragCol, dropCol) === false)
      return void 0;
    return {
      src: dragCol,
      dest: dropCol
    };
  }, [dragCol, dropCol, onColumnProposeMove]);
  const onMouseMove = React9.useCallback((event) => {
    const canvas = canvasRef?.current;
    if (dragCol !== void 0 && dragStartX !== void 0) {
      const diff = Math.abs(event.clientX - dragStartX);
      if (diff > 20) {
        setDragColActive(true);
      }
    } else if (dragRow !== void 0 && dragStartY !== void 0) {
      const diff = Math.abs(event.clientY - dragStartY);
      if (diff > 20) {
        setDragRowActive(true);
      }
    } else if (resizeCol !== void 0 && resizeColStartX !== void 0 && canvas) {
      const rect = canvas.getBoundingClientRect();
      const scale = rect.width / canvas.offsetWidth;
      const newWidth = (event.clientX - resizeColStartX) / scale;
      const column = columns[resizeCol];
      const ns = offsetColumnSize(column, newWidth, minColumnWidth, maxColumnWidth);
      onColumnResize?.(column, ns, resizeCol, ns + (column.growOffset ?? 0));
      lastResizeWidthRef.current = newWidth;
      if (selectedColumns?.first() === resizeCol) {
        for (const c of selectedColumns) {
          if (c === resizeCol)
            continue;
          const col = columns[c];
          const s = offsetColumnSize(col, lastResizeWidthRef.current, minColumnWidth, maxColumnWidth);
          onColumnResize?.(col, s, c, s + (col.growOffset ?? 0));
        }
      }
    }
  }, [
    dragCol,
    dragStartX,
    dragRow,
    dragStartY,
    resizeCol,
    resizeColStartX,
    columns,
    minColumnWidth,
    maxColumnWidth,
    onColumnResize,
    selectedColumns,
    canvasRef
  ]);
  const getMangledCellContent = React9.useCallback((cell, forceStrict) => {
    if (dragRow === void 0 || dropRow === void 0)
      return getCellContent(cell, forceStrict);
    let [col, row] = cell;
    if (row === dropRow) {
      row = dragRow;
    } else {
      if (row > dropRow)
        row -= 1;
      if (row >= dragRow)
        row += 1;
    }
    return getCellContent([col, row], forceStrict);
  }, [dragRow, dropRow, getCellContent]);
  const onDragStartImpl = React9.useCallback((args) => {
    onDragStart?.(args);
    if (!args.defaultPrevented()) {
      clearAll();
    }
  }, [clearAll, onDragStart]);
  return React9.createElement(data_grid_default, { accessibilityHeight: p2.accessibilityHeight, canvasRef: p2.canvasRef, cellXOffset: p2.cellXOffset, cellYOffset: p2.cellYOffset, columns: p2.columns, disabledRows: p2.disabledRows, drawFocusRing: p2.drawFocusRing, drawHeader: p2.drawHeader, drawCell: p2.drawCell, enableGroups: p2.enableGroups, eventTargetRef: p2.eventTargetRef, experimental: p2.experimental, fillHandle: p2.fillHandle, firstColAccessible: p2.firstColAccessible, fixedShadowX: p2.fixedShadowX, fixedShadowY: p2.fixedShadowY, freezeColumns: p2.freezeColumns, getCellRenderer: p2.getCellRenderer, getGroupDetails: p2.getGroupDetails, getRowThemeOverride: p2.getRowThemeOverride, groupHeaderHeight: p2.groupHeaderHeight, headerHeight: p2.headerHeight, headerIcons: p2.headerIcons, height: p2.height, highlightRegions: p2.highlightRegions, imageWindowLoader: p2.imageWindowLoader, resizeColumn: resizeCol, isDraggable: p2.isDraggable, isFilling: p2.isFilling, isFocused: p2.isFocused, onCanvasBlur: p2.onCanvasBlur, onCanvasFocused: p2.onCanvasFocused, onCellFocused: p2.onCellFocused, onContextMenu: p2.onContextMenu, onDragEnd: p2.onDragEnd, onDragLeave: p2.onDragLeave, onDragOverCell: p2.onDragOverCell, onDrop: p2.onDrop, onKeyDown: p2.onKeyDown, onKeyUp: p2.onKeyUp, onMouseMove: p2.onMouseMove, prelightCells: p2.prelightCells, rowHeight: p2.rowHeight, rows: p2.rows, selection: p2.selection, smoothScrollX: p2.smoothScrollX, smoothScrollY: p2.smoothScrollY, theme: p2.theme, freezeTrailingRows: p2.freezeTrailingRows, hasAppendRow: p2.hasAppendRow, translateX: p2.translateX, translateY: p2.translateY, verticalBorder: p2.verticalBorder, width: p2.width, getCellContent: getMangledCellContent, isResizing: resizeCol !== void 0, onHeaderMenuClick: onHeaderMenuClickMangled, isDragging: dragColActive, onItemHovered: onItemHoveredImpl, onDragStart: onDragStartImpl, onMouseDown: onMouseDownImpl, allowResize: canResize, onMouseUp: onMouseUpImpl, dragAndDropState: dragOffset, onMouseMoveRaw: onMouseMove, ref: gridRef });
};
var data_grid_dnd_default = DataGridDnd;

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/infinite-scroller.js
var React10 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/common/resize-detector.js
var import_react6 = __toESM(require_react(), 1);
function useResizeDetector(initialSize) {
  const ref = (0, import_react6.useRef)(null);
  const [size, setSize] = (0, import_react6.useState)({
    width: initialSize?.[0],
    height: initialSize?.[1]
  });
  (0, import_react6.useLayoutEffect)(() => {
    const resizeCallback = (entries) => {
      for (const entry of entries) {
        const { width, height } = entry && entry.contentRect || {};
        setSize((cv) => cv.width === width && cv.height === height ? cv : { width, height });
      }
    };
    const resizeObserver = new window.ResizeObserver(resizeCallback);
    if (ref.current) {
      resizeObserver.observe(ref.current, void 0);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [ref.current]);
  return { ref, ...size };
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/use-kinetic-scroll.js
var import_react7 = __toESM(require_react(), 1);
var useKineticScroll = (isEnabled, callback, targetScroller) => {
  const rafId = (0, import_react7.useRef)(null);
  const isTouching = (0, import_react7.useRef)(null);
  const lastScrollPosition = (0, import_react7.useRef)(null);
  const sameCount = (0, import_react7.useRef)(0);
  const callbackRef = (0, import_react7.useRef)(callback);
  callbackRef.current = callback;
  const scrollEl = targetScroller.current;
  (0, import_react7.useEffect)(() => {
    const handleScroll = () => {
      if (isTouching.current === false && scrollEl !== null) {
        const currentScrollPosition = [scrollEl.scrollLeft, scrollEl.scrollTop];
        if (lastScrollPosition.current?.[0] === currentScrollPosition[0] && lastScrollPosition.current?.[1] === currentScrollPosition[1]) {
          if (sameCount.current > 10) {
            lastScrollPosition.current = null;
            isTouching.current = null;
            return;
          } else {
            sameCount.current++;
          }
        } else {
          sameCount.current = 0;
          callbackRef.current(currentScrollPosition[0], currentScrollPosition[1]);
          lastScrollPosition.current = currentScrollPosition;
        }
        rafId.current = window.setTimeout(handleScroll, 1e3 / 120);
      }
    };
    const startTouch = () => {
      isTouching.current = true;
      lastScrollPosition.current = null;
      if (rafId.current !== null) {
        window.clearTimeout(rafId.current);
        rafId.current = null;
      }
    };
    const endTouch = (event) => {
      if (event.touches.length === 0) {
        isTouching.current = false;
        sameCount.current = 0;
        rafId.current = window.setTimeout(handleScroll, 1e3 / 120);
      }
    };
    if (isEnabled && scrollEl !== null) {
      const element = scrollEl;
      element.addEventListener("touchstart", startTouch);
      element.addEventListener("touchend", endTouch);
      return () => {
        element.removeEventListener("touchstart", startTouch);
        element.removeEventListener("touchend", endTouch);
        if (rafId.current !== null) {
          window.clearTimeout(rafId.current);
        }
      };
    }
  }, [isEnabled, scrollEl]);
};
var use_kinetic_scroll_default = useKineticScroll;

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/infinite-scroller.js
var _exp = () => (p2) => p2.isSafari ? "scroll" : "auto";
var ScrollRegionStyle = /* @__PURE__ */ styled_default("div")({
  name: "ScrollRegionStyle",
  class: "gdg-s1dgczr6",
  propsAsIs: false,
  vars: {
    "s1dgczr6-0": [_exp()]
  }
});
function useTouchUpDelayed(delay) {
  const [hasTouches, setHasTouches] = React10.useState(false);
  const safeWindow = typeof window === "undefined" ? null : window;
  const cbTimer = React10.useRef(0);
  useEventListener("touchstart", React10.useCallback(() => {
    window.clearTimeout(cbTimer.current);
    setHasTouches(true);
  }, []), safeWindow, true, false);
  useEventListener("touchend", React10.useCallback((e) => {
    if (e.touches.length === 0) {
      cbTimer.current = window.setTimeout(() => setHasTouches(false), delay);
    }
  }, [delay]), safeWindow, true, false);
  return hasTouches;
}
var InfiniteScroller = (p2) => {
  const {
    children,
    clientHeight,
    scrollHeight,
    scrollWidth,
    update,
    draggable,
    className,
    preventDiagonalScrolling = false,
    paddingBottom = 0,
    paddingRight = 0,
    rightElement,
    rightElementProps,
    kineticScrollPerfHack = false,
    scrollRef,
    initialSize
  } = p2;
  const padders = [];
  const rightElementSticky = rightElementProps?.sticky ?? false;
  const rightElementFill = rightElementProps?.fill ?? false;
  const offsetY = React10.useRef(0);
  const lastScrollY = React10.useRef(0);
  const scroller = React10.useRef(null);
  const dpr = typeof window === "undefined" ? 1 : window.devicePixelRatio;
  const lastScrollPosition = React10.useRef({
    scrollLeft: 0,
    scrollTop: 0,
    lockDirection: void 0
  });
  const rightWrapRef = React10.useRef(null);
  const hasTouches = useTouchUpDelayed(200);
  const [isIdle, setIsIdle] = React10.useState(true);
  const idleTimer = React10.useRef(0);
  React10.useLayoutEffect(() => {
    if (!isIdle || hasTouches || lastScrollPosition.current.lockDirection === void 0)
      return;
    const el = scroller.current;
    if (el === null)
      return;
    const [lx, ly] = lastScrollPosition.current.lockDirection;
    if (lx !== void 0) {
      el.scrollLeft = lx;
    } else if (ly !== void 0) {
      el.scrollTop = ly;
    }
    lastScrollPosition.current.lockDirection = void 0;
  }, [hasTouches, isIdle]);
  const onScroll = React10.useCallback((scrollLeft, scrollTop) => {
    const el = scroller.current;
    if (el === null)
      return;
    scrollTop = scrollTop ?? el.scrollTop;
    scrollLeft = scrollLeft ?? el.scrollLeft;
    const lastScrollTop = lastScrollPosition.current.scrollTop;
    const lastScrollLeft = lastScrollPosition.current.scrollLeft;
    const dx = scrollLeft - lastScrollLeft;
    const dy = scrollTop - lastScrollTop;
    if (hasTouches && dx !== 0 && dy !== 0 && (Math.abs(dx) > 3 || Math.abs(dy) > 3) && preventDiagonalScrolling && lastScrollPosition.current.lockDirection === void 0) {
      lastScrollPosition.current.lockDirection = Math.abs(dx) < Math.abs(dy) ? [lastScrollLeft, void 0] : [void 0, lastScrollTop];
    }
    const lock = lastScrollPosition.current.lockDirection;
    scrollLeft = lock?.[0] ?? scrollLeft;
    scrollTop = lock?.[1] ?? scrollTop;
    lastScrollPosition.current.scrollLeft = scrollLeft;
    lastScrollPosition.current.scrollTop = scrollTop;
    const cWidth = el.clientWidth;
    const cHeight = el.clientHeight;
    const newY = scrollTop;
    const delta = lastScrollY.current - newY;
    const scrollableHeight = el.scrollHeight - cHeight;
    lastScrollY.current = newY;
    if (scrollableHeight > 0 && (Math.abs(delta) > 2e3 || newY === 0 || newY === scrollableHeight) && scrollHeight > el.scrollHeight + 5) {
      const prog = newY / scrollableHeight;
      const recomputed = (scrollHeight - cHeight) * prog;
      offsetY.current = recomputed - newY;
    }
    if (lock !== void 0) {
      window.clearTimeout(idleTimer.current);
      setIsIdle(false);
      idleTimer.current = window.setTimeout(() => setIsIdle(true), 200);
    }
    update({
      x: scrollLeft,
      y: newY + offsetY.current,
      width: cWidth - paddingRight,
      height: cHeight - paddingBottom,
      paddingRight: rightWrapRef.current?.clientWidth ?? 0
    });
  }, [paddingBottom, paddingRight, scrollHeight, update, preventDiagonalScrolling, hasTouches]);
  use_kinetic_scroll_default(kineticScrollPerfHack && browserIsSafari.value, onScroll, scroller);
  const onScrollRef = React10.useRef(onScroll);
  onScrollRef.current = onScroll;
  const lastProps = React10.useRef();
  const didFirstScroll = React10.useRef(false);
  React10.useLayoutEffect(() => {
    if (didFirstScroll.current)
      onScroll();
    else
      didFirstScroll.current = true;
  }, [onScroll, paddingBottom, paddingRight]);
  const setRefs = React10.useCallback((instance) => {
    scroller.current = instance;
    if (scrollRef !== void 0) {
      scrollRef.current = instance;
    }
  }, [scrollRef]);
  let key = 0;
  let h = 0;
  padders.push(React10.createElement("div", {
    key: key++,
    style: {
      width: scrollWidth,
      height: 0
    }
  }));
  while (h < scrollHeight) {
    const toAdd = Math.min(5e6, scrollHeight - h);
    padders.push(React10.createElement("div", {
      key: key++,
      style: {
        width: 0,
        height: toAdd
      }
    }));
    h += toAdd;
  }
  const {
    ref,
    width,
    height
  } = useResizeDetector(initialSize);
  if (typeof window !== "undefined" && (lastProps.current?.height !== height || lastProps.current?.width !== width)) {
    window.setTimeout(() => onScrollRef.current(), 0);
    lastProps.current = {
      width,
      height
    };
  }
  if ((width ?? 0) === 0 || (height ?? 0) === 0)
    return React10.createElement("div", {
      ref
    });
  return React10.createElement("div", {
    ref
  }, React10.createElement(ScrollRegionStyle, {
    isSafari: browserIsSafari.value
  }, React10.createElement("div", {
    className: "dvn-underlay"
  }, children), React10.createElement("div", {
    ref: setRefs,
    style: lastProps.current,
    draggable,
    onDragStart: (e) => {
      if (!draggable) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
    className: "dvn-scroller " + (className ?? ""),
    onScroll: () => onScroll()
  }, React10.createElement("div", {
    className: "dvn-scroll-inner" + (rightElement === void 0 ? " dvn-hidden" : "")
  }, React10.createElement("div", {
    className: "dvn-stack"
  }, padders), rightElement !== void 0 && React10.createElement(React10.Fragment, null, !rightElementFill && React10.createElement("div", {
    className: "dvn-spacer"
  }), React10.createElement("div", {
    ref: rightWrapRef,
    style: {
      height,
      maxHeight: clientHeight - Math.ceil(dpr % 1),
      position: "sticky",
      top: 0,
      paddingLeft: 1,
      marginBottom: -40,
      marginRight: paddingRight,
      flexGrow: rightElementFill ? 1 : void 0,
      right: rightElementSticky ? paddingRight ?? 0 : void 0,
      pointerEvents: "auto"
    }
  }, rightElement))))));
};

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/scrolling-data-grid/scrolling-data-grid.js
var GridScroller = (p2) => {
  const { columns, rows, rowHeight, headerHeight, groupHeaderHeight, enableGroups, freezeColumns, experimental, nonGrowWidth, clientSize, className, onVisibleRegionChanged, scrollRef, preventDiagonalScrolling, rightElement, rightElementProps, overscrollX, overscrollY, initialSize, smoothScrollX = false, smoothScrollY = false, isDraggable } = p2;
  const { paddingRight, paddingBottom } = experimental ?? {};
  const [clientWidth, clientHeight] = clientSize;
  const last = React11.useRef();
  const lastX = React11.useRef();
  const lastY = React11.useRef();
  const lastSize = React11.useRef();
  const width = nonGrowWidth + Math.max(0, overscrollX ?? 0);
  let height = enableGroups ? headerHeight + groupHeaderHeight : headerHeight;
  if (typeof rowHeight === "number") {
    height += rows * rowHeight;
  } else {
    for (let r = 0; r < rows; r++) {
      height += rowHeight(r);
    }
  }
  if (overscrollY !== void 0) {
    height += overscrollY;
  }
  const lastArgs = React11.useRef();
  const processArgs = React11.useCallback(() => {
    if (lastArgs.current === void 0)
      return;
    const args = { ...lastArgs.current };
    let x2 = 0;
    let tx = args.x < 0 ? -args.x : 0;
    let cellRight = 0;
    let cellX = 0;
    args.x = args.x < 0 ? 0 : args.x;
    let stickyColWidth = 0;
    for (let i = 0; i < freezeColumns; i++) {
      stickyColWidth += columns[i].width;
    }
    for (const c of columns) {
      const cx = x2 - stickyColWidth;
      if (args.x >= cx + c.width) {
        x2 += c.width;
        cellX++;
        cellRight++;
      } else if (args.x > cx) {
        x2 += c.width;
        if (smoothScrollX) {
          tx += cx - args.x;
        } else {
          cellX++;
        }
        cellRight++;
      } else if (args.x + args.width > cx) {
        x2 += c.width;
        cellRight++;
      } else {
        break;
      }
    }
    let ty = 0;
    let cellY = 0;
    let cellBottom = 0;
    if (typeof rowHeight === "number") {
      if (smoothScrollY) {
        cellY = Math.floor(args.y / rowHeight);
        ty = cellY * rowHeight - args.y;
      } else {
        cellY = Math.ceil(args.y / rowHeight);
      }
      cellBottom = Math.ceil(args.height / rowHeight) + cellY;
      if (ty < 0)
        cellBottom++;
    } else {
      let y2 = 0;
      for (let row = 0; row < rows; row++) {
        const rh = rowHeight(row);
        const cy = y2 + (smoothScrollY ? 0 : rh / 2);
        if (args.y >= y2 + rh) {
          y2 += rh;
          cellY++;
          cellBottom++;
        } else if (args.y > cy) {
          y2 += rh;
          if (smoothScrollY) {
            ty += cy - args.y;
          } else {
            cellY++;
          }
          cellBottom++;
        } else if (args.y + args.height > rh / 2 + y2) {
          y2 += rh;
          cellBottom++;
        } else {
          break;
        }
      }
    }
    const rect = {
      x: cellX,
      y: cellY,
      width: cellRight - cellX,
      height: cellBottom - cellY
    };
    const oldRect = last.current;
    if (oldRect === void 0 || oldRect.y !== rect.y || oldRect.x !== rect.x || oldRect.height !== rect.height || oldRect.width !== rect.width || lastX.current !== tx || lastY.current !== ty || args.width !== lastSize.current?.[0] || args.height !== lastSize.current?.[1]) {
      onVisibleRegionChanged?.({
        x: cellX,
        y: cellY,
        width: cellRight - cellX,
        height: cellBottom - cellY
      }, args.width, args.height, args.paddingRight ?? 0, tx, ty);
      last.current = rect;
      lastX.current = tx;
      lastY.current = ty;
      lastSize.current = [args.width, args.height];
    }
  }, [columns, rowHeight, rows, onVisibleRegionChanged, freezeColumns, smoothScrollX, smoothScrollY]);
  const onScrollUpdate = React11.useCallback((args) => {
    lastArgs.current = args;
    processArgs();
  }, [processArgs]);
  React11.useEffect(() => {
    processArgs();
  }, [processArgs]);
  return React11.createElement(
    InfiniteScroller,
    { scrollRef, className, kineticScrollPerfHack: experimental?.kineticScrollPerfHack, preventDiagonalScrolling, draggable: isDraggable === true || typeof isDraggable === "string", scrollWidth: width + (paddingRight ?? 0), scrollHeight: height + (paddingBottom ?? 0), clientHeight, rightElement, paddingBottom, paddingRight, rightElementProps, update: onScrollUpdate, initialSize },
    React11.createElement(data_grid_dnd_default, { eventTargetRef: scrollRef, width: clientWidth, height: clientHeight, accessibilityHeight: p2.accessibilityHeight, canvasRef: p2.canvasRef, cellXOffset: p2.cellXOffset, cellYOffset: p2.cellYOffset, columns: p2.columns, disabledRows: p2.disabledRows, enableGroups: p2.enableGroups, fillHandle: p2.fillHandle, firstColAccessible: p2.firstColAccessible, fixedShadowX: p2.fixedShadowX, fixedShadowY: p2.fixedShadowY, freezeColumns: p2.freezeColumns, getCellContent: p2.getCellContent, getCellRenderer: p2.getCellRenderer, getGroupDetails: p2.getGroupDetails, getRowThemeOverride: p2.getRowThemeOverride, groupHeaderHeight: p2.groupHeaderHeight, headerHeight: p2.headerHeight, highlightRegions: p2.highlightRegions, imageWindowLoader: p2.imageWindowLoader, isFilling: p2.isFilling, isFocused: p2.isFocused, lockColumns: p2.lockColumns, maxColumnWidth: p2.maxColumnWidth, minColumnWidth: p2.minColumnWidth, onHeaderMenuClick: p2.onHeaderMenuClick, onMouseMove: p2.onMouseMove, prelightCells: p2.prelightCells, rowHeight: p2.rowHeight, rows: p2.rows, selection: p2.selection, theme: p2.theme, freezeTrailingRows: p2.freezeTrailingRows, hasAppendRow: p2.hasAppendRow, translateX: p2.translateX, translateY: p2.translateY, onColumnProposeMove: p2.onColumnProposeMove, verticalBorder: p2.verticalBorder, drawFocusRing: p2.drawFocusRing, drawHeader: p2.drawHeader, drawCell: p2.drawCell, experimental: p2.experimental, gridRef: p2.gridRef, headerIcons: p2.headerIcons, isDraggable: p2.isDraggable, onCanvasBlur: p2.onCanvasBlur, onCanvasFocused: p2.onCanvasFocused, onCellFocused: p2.onCellFocused, onColumnMoved: p2.onColumnMoved, onColumnResize: p2.onColumnResize, onColumnResizeEnd: p2.onColumnResizeEnd, onColumnResizeStart: p2.onColumnResizeStart, onContextMenu: p2.onContextMenu, onDragEnd: p2.onDragEnd, onDragLeave: p2.onDragLeave, onDragOverCell: p2.onDragOverCell, onDragStart: p2.onDragStart, onDrop: p2.onDrop, onItemHovered: p2.onItemHovered, onKeyDown: p2.onKeyDown, onKeyUp: p2.onKeyUp, onMouseDown: p2.onMouseDown, onMouseUp: p2.onMouseUp, onRowMoved: p2.onRowMoved, smoothScrollX: p2.smoothScrollX, smoothScrollY: p2.smoothScrollY })
  );
};
var scrolling_data_grid_default = GridScroller;

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-search/data-grid-search-style.js
var SearchWrapper = /* @__PURE__ */ styled_default("div")({
  name: "SearchWrapper",
  class: "gdg-seveqep",
  propsAsIs: false
});

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-search/data-grid-search.js
var upArrow = React12.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  React12.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 244l144-144 144 144M256 120v292" })
);
var downArrow = React12.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  React12.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "48", d: "M112 268l144 144 144-144M256 392V100" })
);
var closeX = React12.createElement(
  "svg",
  { className: "button-icon", viewBox: "0 0 512 512" },
  React12.createElement("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32", d: "M368 368L144 144M368 144L144 368" })
);
var targetSearchTimeMS = 10;
var DataGridSearch = (p2) => {
  const { canvasRef, cellYOffset, rows, columns, searchInputRef, searchValue, searchResults: searchResultsIn, onSearchValueChange, getCellsForSelection, onSearchResultsChanged, showSearch = false, onSearchClose } = p2;
  const [searchID] = React12.useState(() => "search-box-" + Math.round(Math.random() * 1e3));
  const [searchStringInner, setSearchStringInner] = React12.useState("");
  const searchString = searchValue ?? searchStringInner;
  const setSearchString = React12.useCallback((newVal) => {
    setSearchStringInner(newVal);
    onSearchValueChange?.(newVal);
  }, [onSearchValueChange]);
  const [searchStatus, setSearchStatus] = React12.useState();
  const searchStatusRef = React12.useRef(searchStatus);
  searchStatusRef.current = searchStatus;
  React12.useEffect(() => {
    if (searchResultsIn === void 0)
      return;
    if (searchResultsIn.length > 0) {
      setSearchStatus((cv) => ({
        rowsSearched: rows,
        results: searchResultsIn.length,
        selectedIndex: cv?.selectedIndex ?? -1
      }));
    } else {
      setSearchStatus(void 0);
    }
  }, [rows, searchResultsIn]);
  const abortControllerRef = React12.useRef();
  if (abortControllerRef.current === void 0)
    abortControllerRef.current = new AbortController();
  const searchHandle = React12.useRef();
  const [searchResultsInner, setSearchResultsInner] = React12.useState([]);
  const searchResults = searchResultsIn ?? searchResultsInner;
  const cancelSearch = React12.useCallback(() => {
    if (searchHandle.current !== void 0) {
      window.cancelAnimationFrame(searchHandle.current);
      searchHandle.current = void 0;
      abortControllerRef.current.abort();
    }
  }, []);
  const cellYOffsetRef = React12.useRef(cellYOffset);
  cellYOffsetRef.current = cellYOffset;
  const beginSearch = React12.useCallback((str) => {
    const regex = new RegExp(str.replace(/([$()*+.?[\\\]^{|}-])/g, "\\$1"), "i");
    let startY = cellYOffsetRef.current;
    let searchStride = Math.min(10, rows);
    let rowsSearched = 0;
    setSearchStatus(void 0);
    setSearchResultsInner([]);
    const runningResult = [];
    const tick = async () => {
      if (getCellsForSelection === void 0)
        return;
      const tStart = performance.now();
      const rowsLeft = rows - rowsSearched;
      let data = getCellsForSelection({
        x: 0,
        y: startY,
        width: columns.length,
        height: Math.min(searchStride, rowsLeft, rows - startY)
      }, abortControllerRef.current.signal);
      if (typeof data === "function") {
        data = await data();
      }
      let added = false;
      for (const [row, d3] of data.entries()) {
        for (const [col, cell] of d3.entries()) {
          let testString;
          switch (cell.kind) {
            case GridCellKind.Text:
            case GridCellKind.Number:
              testString = cell.displayData;
              break;
            case GridCellKind.Uri:
            case GridCellKind.Markdown:
              testString = cell.data;
              break;
            case GridCellKind.Boolean:
              testString = typeof cell.data === "boolean" ? cell.data.toString() : void 0;
              break;
            case GridCellKind.Image:
            case GridCellKind.Bubble:
              testString = cell.data.join("\u{1F433}");
              break;
            case GridCellKind.Custom:
              testString = cell.copyData;
              break;
          }
          if (testString !== void 0 && regex.test(testString)) {
            runningResult.push([col, row + startY]);
            added = true;
          }
        }
      }
      const tEnd = performance.now();
      if (added) {
        setSearchResultsInner([...runningResult]);
      }
      rowsSearched += data.length;
      assert(rowsSearched <= rows);
      const selectedIndex = searchStatusRef.current?.selectedIndex ?? -1;
      setSearchStatus({
        results: runningResult.length,
        rowsSearched,
        selectedIndex
      });
      onSearchResultsChanged?.(runningResult, selectedIndex);
      if (startY + searchStride >= rows) {
        startY = 0;
      } else {
        startY += searchStride;
      }
      const tElapsed = tEnd - tStart;
      const rounded = Math.max(tElapsed, 1);
      const scalar = targetSearchTimeMS / rounded;
      searchStride = Math.ceil(searchStride * scalar);
      if (rowsSearched < rows && runningResult.length < 1e3) {
        searchHandle.current = window.requestAnimationFrame(tick);
      }
    };
    cancelSearch();
    searchHandle.current = window.requestAnimationFrame(tick);
  }, [cancelSearch, columns.length, getCellsForSelection, onSearchResultsChanged, rows]);
  const onClose = React12.useCallback(() => {
    onSearchClose?.();
    setSearchStatus(void 0);
    setSearchResultsInner([]);
    onSearchResultsChanged?.([], -1);
    cancelSearch();
    canvasRef?.current?.focus();
  }, [cancelSearch, canvasRef, onSearchClose, onSearchResultsChanged]);
  const onSearchChange = React12.useCallback((event) => {
    setSearchString(event.target.value);
    if (searchResultsIn !== void 0)
      return;
    if (event.target.value === "") {
      setSearchStatus(void 0);
      setSearchResultsInner([]);
      cancelSearch();
    } else {
      beginSearch(event.target.value);
    }
  }, [beginSearch, cancelSearch, setSearchString, searchResultsIn]);
  React12.useEffect(() => {
    if (showSearch && searchInputRef.current !== null) {
      setSearchString("");
      searchInputRef.current.focus({ preventScroll: true });
    }
  }, [showSearch, searchInputRef, setSearchString]);
  const onNext = React12.useCallback((ev) => {
    ev?.stopPropagation?.();
    if (searchStatus === void 0)
      return;
    const newIndex = (searchStatus.selectedIndex + 1) % searchStatus.results;
    setSearchStatus({
      ...searchStatus,
      selectedIndex: newIndex
    });
    onSearchResultsChanged?.(searchResults, newIndex);
  }, [searchStatus, onSearchResultsChanged, searchResults]);
  const onPrev = React12.useCallback((ev) => {
    ev?.stopPropagation?.();
    if (searchStatus === void 0)
      return;
    let newIndex = (searchStatus.selectedIndex - 1) % searchStatus.results;
    if (newIndex < 0)
      newIndex += searchStatus.results;
    setSearchStatus({
      ...searchStatus,
      selectedIndex: newIndex
    });
    onSearchResultsChanged?.(searchResults, newIndex);
  }, [onSearchResultsChanged, searchResults, searchStatus]);
  const onSearchKeyDown = React12.useCallback((event) => {
    if ((event.ctrlKey || event.metaKey) && event.nativeEvent.code === "KeyF" || event.key === "Escape") {
      onClose();
      event.stopPropagation();
      event.preventDefault();
    } else if (event.key === "Enter") {
      if (event.shiftKey) {
        onPrev();
      } else {
        onNext();
      }
    }
  }, [onClose, onNext, onPrev]);
  React12.useEffect(() => {
    return () => {
      cancelSearch();
    };
  }, [cancelSearch]);
  const [isAnimatingOut, setIsAnimatingOut] = React12.useState(false);
  React12.useEffect(() => {
    if (showSearch) {
      setIsAnimatingOut(true);
    } else {
      const timeoutId = setTimeout(() => setIsAnimatingOut(false), 150);
      return () => clearTimeout(timeoutId);
    }
  }, [showSearch]);
  const searchbox = React12.useMemo(() => {
    if (!showSearch && !isAnimatingOut) {
      return null;
    }
    let resultString;
    if (searchStatus !== void 0) {
      resultString = searchStatus.results >= 1e3 ? `over 1000` : `${searchStatus.results} result${searchStatus.results !== 1 ? "s" : ""}`;
      if (searchStatus.selectedIndex >= 0) {
        resultString = `${searchStatus.selectedIndex + 1} of ${resultString}`;
      }
    }
    const cancelEvent = (ev) => {
      ev.stopPropagation();
    };
    const rowsSearchedProgress = Math.floor((searchStatus?.rowsSearched ?? 0) / rows * 100);
    const progressStyle = {
      width: `${rowsSearchedProgress}%`
    };
    return React12.createElement(
      SearchWrapper,
      { className: showSearch ? "" : "out", onMouseDown: cancelEvent, onMouseMove: cancelEvent, onMouseUp: cancelEvent, onClick: cancelEvent },
      React12.createElement(
        "div",
        { className: "gdg-search-bar-inner" },
        React12.createElement("input", { id: searchID, "aria-hidden": !showSearch, "data-testid": "search-input", ref: searchInputRef, onChange: onSearchChange, value: searchString, tabIndex: showSearch ? void 0 : -1, onKeyDownCapture: onSearchKeyDown }),
        React12.createElement("button", { "aria-label": "Previous Result", "aria-hidden": !showSearch, tabIndex: showSearch ? void 0 : -1, onClick: onPrev, disabled: (searchStatus?.results ?? 0) === 0 }, upArrow),
        React12.createElement("button", { "aria-label": "Next Result", "aria-hidden": !showSearch, tabIndex: showSearch ? void 0 : -1, onClick: onNext, disabled: (searchStatus?.results ?? 0) === 0 }, downArrow),
        onSearchClose !== void 0 && React12.createElement("button", { "aria-label": "Close Search", "aria-hidden": !showSearch, "data-testid": "search-close-button", tabIndex: showSearch ? void 0 : -1, onClick: onClose }, closeX)
      ),
      searchStatus !== void 0 ? React12.createElement(
        React12.Fragment,
        null,
        React12.createElement(
          "div",
          { className: "gdg-search-status" },
          React12.createElement("div", { "data-testid": "search-result-area" }, resultString)
        ),
        React12.createElement("div", { className: "gdg-search-progress", style: progressStyle })
      ) : React12.createElement(
        "div",
        { className: "gdg-search-status" },
        React12.createElement("label", { htmlFor: searchID }, "Type to search")
      )
    );
  }, [
    showSearch,
    isAnimatingOut,
    searchStatus,
    rows,
    searchID,
    searchInputRef,
    onSearchChange,
    searchString,
    onSearchKeyDown,
    onPrev,
    onNext,
    onSearchClose,
    onClose
  ]);
  return React12.createElement(
    React12.Fragment,
    null,
    React12.createElement(scrolling_data_grid_default, { prelightCells: searchResults, accessibilityHeight: p2.accessibilityHeight, canvasRef: p2.canvasRef, cellXOffset: p2.cellXOffset, cellYOffset: p2.cellYOffset, className: p2.className, clientSize: p2.clientSize, columns: p2.columns, disabledRows: p2.disabledRows, enableGroups: p2.enableGroups, fillHandle: p2.fillHandle, firstColAccessible: p2.firstColAccessible, nonGrowWidth: p2.nonGrowWidth, fixedShadowX: p2.fixedShadowX, fixedShadowY: p2.fixedShadowY, freezeColumns: p2.freezeColumns, getCellContent: p2.getCellContent, getCellRenderer: p2.getCellRenderer, getGroupDetails: p2.getGroupDetails, getRowThemeOverride: p2.getRowThemeOverride, groupHeaderHeight: p2.groupHeaderHeight, headerHeight: p2.headerHeight, highlightRegions: p2.highlightRegions, imageWindowLoader: p2.imageWindowLoader, initialSize: p2.initialSize, isFilling: p2.isFilling, isFocused: p2.isFocused, lockColumns: p2.lockColumns, maxColumnWidth: p2.maxColumnWidth, minColumnWidth: p2.minColumnWidth, onHeaderMenuClick: p2.onHeaderMenuClick, onMouseMove: p2.onMouseMove, onVisibleRegionChanged: p2.onVisibleRegionChanged, overscrollX: p2.overscrollX, overscrollY: p2.overscrollY, preventDiagonalScrolling: p2.preventDiagonalScrolling, rightElement: p2.rightElement, rightElementProps: p2.rightElementProps, rowHeight: p2.rowHeight, rows: p2.rows, scrollRef: p2.scrollRef, selection: p2.selection, theme: p2.theme, freezeTrailingRows: p2.freezeTrailingRows, hasAppendRow: p2.hasAppendRow, translateX: p2.translateX, translateY: p2.translateY, verticalBorder: p2.verticalBorder, onColumnProposeMove: p2.onColumnProposeMove, drawFocusRing: p2.drawFocusRing, drawCell: p2.drawCell, drawHeader: p2.drawHeader, experimental: p2.experimental, gridRef: p2.gridRef, headerIcons: p2.headerIcons, isDraggable: p2.isDraggable, onCanvasBlur: p2.onCanvasBlur, onCanvasFocused: p2.onCanvasFocused, onCellFocused: p2.onCellFocused, onColumnMoved: p2.onColumnMoved, onColumnResize: p2.onColumnResize, onColumnResizeEnd: p2.onColumnResizeEnd, onColumnResizeStart: p2.onColumnResizeStart, onContextMenu: p2.onContextMenu, onDragEnd: p2.onDragEnd, onDragLeave: p2.onDragLeave, onDragOverCell: p2.onDragOverCell, onDragStart: p2.onDragStart, onDrop: p2.onDrop, onItemHovered: p2.onItemHovered, onKeyDown: p2.onKeyDown, onKeyUp: p2.onKeyUp, onMouseDown: p2.onMouseDown, onMouseUp: p2.onMouseUp, onRowMoved: p2.onRowMoved, smoothScrollX: p2.smoothScrollX, smoothScrollY: p2.smoothScrollY }),
    searchbox
  );
};
var data_grid_search_default = DataGridSearch;

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/group-rename.js
var import_react10 = __toESM(require_react(), 1);
var _exp2 = () => (p2) => Math.max(16, p2.targetHeight - 10);
var RenameInput = /* @__PURE__ */ styled_default("input")({
  name: "RenameInput",
  class: "gdg-r17m35ur",
  propsAsIs: false,
  vars: {
    "r17m35ur-0": [_exp2(), "px"]
  }
});
var GroupRename = (p2) => {
  const {
    bounds,
    group,
    onClose,
    canvasBounds,
    onFinish
  } = p2;
  const [value, setValue] = import_react10.default.useState(group);
  return import_react10.default.createElement(ClickOutsideContainer, {
    style: {
      position: "absolute",
      left: bounds.x - canvasBounds.left + 1,
      top: bounds.y - canvasBounds.top,
      width: bounds.width - 2,
      height: bounds.height
    },
    className: "gdg-c1tqibwd",
    onClickOutside: onClose
  }, import_react10.default.createElement(RenameInput, {
    targetHeight: bounds.height,
    "data-testid": "group-rename-input",
    value,
    onBlur: onClose,
    onFocus: (e) => e.target.setSelectionRange(0, value.length),
    onChange: (e) => setValue(e.target.value),
    onKeyDown: (e) => {
      if (e.key === "Enter") {
        onFinish(value);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    autoFocus: true
  }));
};

// node_modules/@glideapps/glide-data-grid/dist/esm/common/is-hotkey.js
function checkKey(key, args) {
  if (key === void 0)
    return false;
  if (key.length > 1 && key.startsWith("_")) {
    const keycode = Number.parseInt(key.slice(1));
    return keycode === args.keyCode;
  }
  if (key.length === 1 && key >= "a" && key <= "z") {
    return key.toUpperCase().codePointAt(0) === args.keyCode;
  }
  return key === args.key;
}
function isHotkey(hotkey, args, details) {
  const result = isHotkeyInner(hotkey, args);
  if (result)
    details.didMatch = true;
  return result;
}
function isHotkeyInner(hotkey, args) {
  if (hotkey.length === 0)
    return false;
  if (hotkey.includes("|")) {
    const parts = hotkey.split("|");
    for (const part of parts) {
      if (isHotkeyInner(part, args))
        return true;
    }
    return false;
  }
  let wantCtrl = false;
  let wantShift = false;
  let wantAlt = false;
  let wantMeta = false;
  const split = hotkey.split("+");
  const key = split.pop();
  if (!checkKey(key, args))
    return false;
  if (split[0] === "any")
    return true;
  for (const accel of split) {
    switch (accel) {
      case "ctrl":
        wantCtrl = true;
        break;
      case "shift":
        wantShift = true;
        break;
      case "alt":
        wantAlt = true;
        break;
      case "meta":
        wantMeta = true;
        break;
      case "primary":
        if (browserIsOSX.value) {
          wantMeta = true;
        } else {
          wantCtrl = true;
        }
        break;
    }
  }
  return args.altKey === wantAlt && args.ctrlKey === wantCtrl && args.shiftKey === wantShift && args.metaKey === wantMeta;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid/use-selection-behavior.js
var import_react12 = __toESM(require_react(), 1);
function useSelectionBehavior(gridSelection, setGridSelection, rangeBehavior, columnBehavior, rowBehavior, rangeSelect) {
  const setCurrent = import_react12.default.useCallback((value, expand, append, trigger) => {
    if ((rangeSelect === "cell" || rangeSelect === "multi-cell") && value !== void 0) {
      value = {
        ...value,
        range: {
          x: value.cell[0],
          y: value.cell[1],
          width: 1,
          height: 1
        }
      };
    }
    const rangeMixable = rangeBehavior === "mixed" && (append || trigger === "drag");
    const allowColumnCoSelect = columnBehavior === "mixed" && rangeMixable;
    const allowRowCoSelect = rowBehavior === "mixed" && rangeMixable;
    let newVal = {
      current: value === void 0 ? void 0 : {
        ...value,
        rangeStack: trigger === "drag" ? gridSelection.current?.rangeStack ?? [] : []
      },
      columns: allowColumnCoSelect ? gridSelection.columns : CompactSelection.empty(),
      rows: allowRowCoSelect ? gridSelection.rows : CompactSelection.empty()
    };
    const addLastRange = append && (rangeSelect === "multi-rect" || rangeSelect === "multi-cell");
    if (addLastRange && newVal.current !== void 0 && gridSelection.current !== void 0) {
      newVal = {
        ...newVal,
        current: {
          ...newVal.current,
          rangeStack: [...gridSelection.current.rangeStack, gridSelection.current.range]
        }
      };
    }
    setGridSelection(newVal, expand);
  }, [columnBehavior, gridSelection, rangeBehavior, rangeSelect, rowBehavior, setGridSelection]);
  const setSelectedRows = import_react12.default.useCallback((newRows, append, allowMixed) => {
    newRows = newRows ?? gridSelection.rows;
    if (append !== void 0) {
      newRows = newRows.add(append);
    }
    let newVal;
    if (rowBehavior === "exclusive" && newRows.length > 0) {
      newVal = {
        current: void 0,
        columns: CompactSelection.empty(),
        rows: newRows
      };
    } else {
      const rangeMixed = allowMixed && rangeBehavior === "mixed";
      const columnMixed = allowMixed && columnBehavior === "mixed";
      const current = !rangeMixed ? void 0 : gridSelection.current;
      newVal = {
        current,
        columns: columnMixed ? gridSelection.columns : CompactSelection.empty(),
        rows: newRows
      };
    }
    setGridSelection(newVal, false);
  }, [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]);
  const setSelectedColumns = import_react12.default.useCallback((newCols, append, allowMixed) => {
    newCols = newCols ?? gridSelection.columns;
    if (append !== void 0) {
      newCols = newCols.add(append);
    }
    let newVal;
    if (columnBehavior === "exclusive" && newCols.length > 0) {
      newVal = {
        current: void 0,
        rows: CompactSelection.empty(),
        columns: newCols
      };
    } else {
      const rangeMixed = allowMixed && rangeBehavior === "mixed";
      const rowMixed = allowMixed && rowBehavior === "mixed";
      const current = !rangeMixed ? void 0 : gridSelection.current;
      newVal = {
        current,
        rows: rowMixed ? gridSelection.rows : CompactSelection.empty(),
        columns: newCols
      };
    }
    setGridSelection(newVal, false);
  }, [columnBehavior, gridSelection, rangeBehavior, rowBehavior, setGridSelection]);
  return [setCurrent, setSelectedRows, setSelectedColumns];
}

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-cells-for-selection.js
var React15 = __toESM(require_react(), 1);
function useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortController, rows) {
  const getCellsForSelectionDirectWhenValid = React15.useCallback((rect) => {
    if (getCellsForSelectionIn === true) {
      const result = [];
      for (let y2 = rect.y; y2 < rect.y + rect.height; y2++) {
        const row = [];
        for (let x2 = rect.x; x2 < rect.x + rect.width; x2++) {
          if (x2 < 0 || y2 >= rows) {
            row.push({
              kind: GridCellKind.Loading,
              allowOverlay: false
            });
          } else {
            row.push(getCellContent([x2, y2]));
          }
        }
        result.push(row);
      }
      return result;
    }
    return getCellsForSelectionIn?.(rect, abortController.signal) ?? [];
  }, [abortController.signal, getCellContent, getCellsForSelectionIn, rows]);
  const getCellsForSelectionDirect = getCellsForSelectionIn !== void 0 ? getCellsForSelectionDirectWhenValid : void 0;
  const getCellsForSelectionMangled = React15.useCallback((rect) => {
    if (getCellsForSelectionDirect === void 0)
      return [];
    const newRect = {
      ...rect,
      x: rect.x - rowMarkerOffset
    };
    if (newRect.x < 0) {
      newRect.x = 0;
      newRect.width--;
      const r = getCellsForSelectionDirect(newRect, abortController.signal);
      if (typeof r === "function") {
        return async () => (await r()).map((row) => [
          { kind: GridCellKind.Loading, allowOverlay: false },
          ...row
        ]);
      }
      return r.map((row) => [{ kind: GridCellKind.Loading, allowOverlay: false }, ...row]);
    }
    return getCellsForSelectionDirect(newRect, abortController.signal);
  }, [abortController.signal, getCellsForSelectionDirect, rowMarkerOffset]);
  const getCellsForSelection = getCellsForSelectionIn !== void 0 ? getCellsForSelectionMangled : void 0;
  return [getCellsForSelection, getCellsForSelectionDirect];
}

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/copy-paste.js
function convertCellToBuffer(cell) {
  if (cell.copyData !== void 0) {
    return {
      formatted: cell.copyData,
      rawValue: cell.copyData,
      format: "string"
    };
  }
  switch (cell.kind) {
    case GridCellKind.Boolean:
      return {
        formatted: cell.data === true ? "TRUE" : cell.data === false ? "FALSE" : cell.data === BooleanIndeterminate ? "INDETERMINATE" : "",
        rawValue: cell.data,
        format: "boolean"
      };
    case GridCellKind.Custom:
      return {
        formatted: cell.copyData,
        rawValue: cell.copyData,
        format: "string"
      };
    case GridCellKind.Image:
    case GridCellKind.Bubble:
      return {
        formatted: cell.data,
        rawValue: cell.data,
        format: "string-array"
      };
    case GridCellKind.Drilldown:
      return {
        formatted: cell.data.map((x2) => x2.text),
        rawValue: cell.data.map((x2) => x2.text),
        format: "string-array"
      };
    case GridCellKind.Text:
      return {
        formatted: cell.displayData ?? cell.data,
        rawValue: cell.data,
        format: "string"
      };
    case GridCellKind.Uri:
      return {
        formatted: cell.displayData ?? cell.data,
        rawValue: cell.data,
        format: "url"
      };
    case GridCellKind.Markdown:
    case GridCellKind.RowID:
      return {
        formatted: cell.data,
        rawValue: cell.data,
        format: "string"
      };
    case GridCellKind.Number:
      return {
        formatted: cell.displayData,
        rawValue: cell.data,
        format: "number"
      };
    case GridCellKind.Loading:
      return {
        formatted: "#LOADING",
        rawValue: "",
        format: "string"
      };
    case GridCellKind.Protected:
      return {
        formatted: "************",
        rawValue: "",
        format: "string"
      };
    default:
      assertNever(cell);
  }
}
function createBufferFromGridCells(cells, columnIndexes) {
  const copyBuffer = cells.map((row, index) => {
    const mappedIndex = columnIndexes[index];
    return row.map((cell) => {
      if (cell.span !== void 0 && cell.span[0] !== mappedIndex)
        return {
          formatted: "",
          rawValue: "",
          format: "string"
        };
      return convertCellToBuffer(cell);
    });
  });
  return copyBuffer;
}
function escapeIfNeeded(str, withComma) {
  if ((withComma ? /[\t\n",]/ : /[\t\n"]/).test(str)) {
    str = `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}
function createTextBuffer(copyBuffer) {
  const lines = [];
  for (const row of copyBuffer) {
    const line = [];
    for (const cell of row) {
      if (cell.format === "url") {
        line.push(cell.rawValue?.toString() ?? "");
      } else if (cell.format === "string-array") {
        line.push(cell.formatted.map((x2) => escapeIfNeeded(x2, true)).join(","));
      } else {
        line.push(escapeIfNeeded(cell.formatted, false));
      }
    }
    lines.push(line.join("	"));
  }
  return lines.join("\n");
}
function formatHtmlTextContent(text) {
  return text.replace(/\t/g, "    ").replace(/ {2,}/g, (match) => "<span> </span>".repeat(match.length));
}
function formatHtmlAttributeContent(attrText) {
  return '"' + attrText.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") + '"';
}
function restoreHtmlEntities(str) {
  return str.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
}
function createHtmlBuffer(copyBuffer) {
  const lines = [];
  lines.push(`<style type="text/css"><!--br {mso-data-placement:same-cell;}--></style>`, "<table><tbody>");
  for (const row of copyBuffer) {
    lines.push("<tr>");
    for (const cell of row) {
      const formatStr = `gdg-format="${cell.format}"`;
      if (cell.format === "url") {
        lines.push(`<td ${formatStr}><a href="${cell.rawValue}">${formatHtmlTextContent(cell.formatted)}</a></td>`);
      } else {
        if (cell.format === "string-array") {
          lines.push(`<td ${formatStr}><ol>${cell.formatted.map((x2, ind) => `<li gdg-raw-value=${formatHtmlAttributeContent(cell.rawValue[ind])}>` + formatHtmlTextContent(x2) + "</li>").join("")}</ol></td>`);
        } else {
          lines.push(`<td gdg-raw-value=${formatHtmlAttributeContent(cell.rawValue?.toString() ?? "")} ${formatStr}>${formatHtmlTextContent(cell.formatted)}</td>`);
        }
      }
    }
    lines.push("</tr>");
  }
  lines.push("</tbody></table>");
  return lines.join("");
}
function getCopyBufferContents(cells, columnIndexes) {
  const copyBuffer = createBufferFromGridCells(cells, columnIndexes);
  const textPlain = createTextBuffer(copyBuffer);
  const textHtml = createHtmlBuffer(copyBuffer);
  return {
    textPlain,
    textHtml
  };
}
function decodeHTML(html) {
  const fragment = document.createElement("html");
  fragment.innerHTML = html.replace(/&nbsp;/g, " ");
  const tableEl = fragment.querySelector("table");
  if (tableEl === null)
    return void 0;
  const walkEl = [tableEl];
  const result = [];
  let current;
  while (walkEl.length > 0) {
    const el = walkEl.pop();
    if (el === void 0)
      break;
    if (el instanceof HTMLTableElement || el.nodeName === "TBODY") {
      walkEl.push(...[...el.children].reverse());
    } else if (el instanceof HTMLTableRowElement) {
      if (current !== void 0) {
        result.push(current);
      }
      current = [];
      walkEl.push(...[...el.children].reverse());
    } else if (el instanceof HTMLTableCellElement) {
      const clone = el.cloneNode(true);
      const firstTagIsPara = clone.children.length === 1 && clone.children[0].nodeName === "P";
      const para = firstTagIsPara ? clone.children[0] : null;
      const isAppleNumbers = para?.children.length === 1 && para.children[0].nodeName === "FONT";
      const brs = clone.querySelectorAll("br");
      for (const br of brs) {
        br.replaceWith("\n");
      }
      const attributeValue = clone.getAttribute("gdg-raw-value");
      const formatValue = clone.getAttribute("gdg-format") ?? "string";
      if (clone.querySelector("a") !== null) {
        current?.push({
          rawValue: clone.querySelector("a")?.getAttribute("href") ?? "",
          formatted: clone.textContent ?? "",
          format: formatValue
        });
      } else if (clone.querySelector("ol") !== null) {
        const rawValues = clone.querySelectorAll("li");
        current?.push({
          rawValue: [...rawValues].map((x2) => x2.getAttribute("gdg-raw-value") ?? ""),
          formatted: [...rawValues].map((x2) => x2.textContent ?? ""),
          format: "string-array"
        });
      } else if (attributeValue !== null) {
        current?.push({
          rawValue: restoreHtmlEntities(attributeValue),
          formatted: clone.textContent ?? "",
          format: formatValue
        });
      } else {
        let textContent = clone.textContent ?? "";
        if (isAppleNumbers) {
          textContent = textContent.replace(/\n(?!\n)/g, "");
        }
        current?.push({
          rawValue: textContent ?? "",
          formatted: textContent ?? "",
          format: formatValue
        });
      }
    }
  }
  if (current !== void 0) {
    result.push(current);
  }
  return result;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor-fns.js
function expandSelection(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortController) {
  const origVal = newVal;
  if (spanRangeBehavior === "allowPartial" || newVal.current === void 0 || getCellsForSelection === void 0)
    return newVal;
  let isFilled = false;
  do {
    if (newVal?.current === void 0)
      break;
    const r = newVal.current?.range;
    const cells = [];
    if (r.width > 2) {
      const leftCells = getCellsForSelection({
        x: r.x,
        y: r.y,
        width: 1,
        height: r.height
      }, abortController.signal);
      if (typeof leftCells === "function") {
        return origVal;
      }
      cells.push(...leftCells);
      const rightCells = getCellsForSelection({
        x: r.x + r.width - 1,
        y: r.y,
        width: 1,
        height: r.height
      }, abortController.signal);
      if (typeof rightCells === "function") {
        return origVal;
      }
      cells.push(...rightCells);
    } else {
      const rCells = getCellsForSelection({
        x: r.x,
        y: r.y,
        width: r.width,
        height: r.height
      }, abortController.signal);
      if (typeof rCells === "function") {
        return origVal;
      }
      cells.push(...rCells);
    }
    let left = r.x - rowMarkerOffset;
    let right = r.x + r.width - 1 - rowMarkerOffset;
    for (const row of cells) {
      for (const cell of row) {
        if (cell.span === void 0)
          continue;
        left = Math.min(cell.span[0], left);
        right = Math.max(cell.span[1], right);
      }
    }
    if (left === r.x - rowMarkerOffset && right === r.x + r.width - 1 - rowMarkerOffset) {
      isFilled = true;
    } else {
      newVal = {
        current: {
          cell: newVal.current.cell ?? [0, 0],
          range: {
            x: left + rowMarkerOffset,
            y: r.y,
            width: right - left + 1,
            height: r.height
          },
          rangeStack: newVal.current.rangeStack
        },
        columns: newVal.columns,
        rows: newVal.rows
      };
    }
  } while (!isFilled);
  return newVal;
}
function descape(s) {
  if (s.startsWith('"') && s.endsWith('"')) {
    s = s.slice(1, -1).replace(/""/g, '"');
  }
  return s;
}
function unquote(str) {
  let State;
  (function(State2) {
    State2[State2["None"] = 0] = "None";
    State2[State2["inString"] = 1] = "inString";
    State2[State2["inStringPostQuote"] = 2] = "inStringPostQuote";
  })(State || (State = {}));
  const result = [];
  let current = [];
  let start = 0;
  let state = State.None;
  str = str.replace(/\r\n/g, "\n");
  let index = 0;
  for (const char of str) {
    switch (state) {
      case State.None:
        if (char === "	" || char === "\n") {
          current.push(str.slice(start, index));
          start = index + 1;
          if (char === "\n") {
            result.push(current);
            current = [];
          }
        } else if (char === `"`) {
          state = State.inString;
        }
        break;
      case State.inString:
        if (char === `"`) {
          state = State.inStringPostQuote;
        }
        break;
      case State.inStringPostQuote:
        if (char === '"') {
          state = State.inString;
        } else if (char === "	" || char === "\n") {
          current.push(descape(str.slice(start, index)));
          start = index + 1;
          if (char === "\n") {
            result.push(current);
            current = [];
          }
          state = State.None;
        } else {
          state = State.None;
        }
        break;
    }
    index++;
  }
  if (start < str.length) {
    current.push(descape(str.slice(start, str.length)));
  }
  result.push(current);
  return result.map((r) => r.map((c) => ({ rawValue: c, formatted: c, format: "string" })));
}
function copyToClipboard(cells, columnIndexes, e) {
  const copyBuffer = getCopyBufferContents(cells, columnIndexes);
  const copyWithWriteText = (s) => {
    void window.navigator.clipboard?.writeText(s);
  };
  const copyWithWrite = (s, html) => {
    if (window.navigator.clipboard?.write === void 0)
      return false;
    void window.navigator.clipboard.write([
      new ClipboardItem({
        "text/plain": new Blob([s], { type: "text/plain" }),
        "text/html": new Blob([html], {
          type: "text/html"
        })
      })
    ]);
    return true;
  };
  const copyWithClipboardData = (s, html) => {
    try {
      if (e === void 0 || e.clipboardData === null)
        throw new Error("No clipboard data");
      e?.clipboardData?.setData("text/plain", s);
      e?.clipboardData?.setData("text/html", html);
    } catch {
      if (!copyWithWrite(s, html)) {
        copyWithWriteText(s);
      }
    }
  };
  if (window.navigator.clipboard?.write !== void 0 || e?.clipboardData !== void 0) {
    void copyWithClipboardData(copyBuffer.textPlain, copyBuffer.textHtml);
  } else {
    void copyWithWriteText(copyBuffer.textPlain);
  }
  e?.preventDefault();
}
function toggleBoolean(data) {
  return data !== true;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-editor-container/data-grid-container.js
var React16 = __toESM(require_react(), 1);
function toCss(x2) {
  if (typeof x2 === "string")
    return x2;
  return `${x2}px`;
}
var _exp3 = () => (p2) => p2.innerWidth;
var _exp22 = () => (p2) => p2.innerHeight;
var Wrapper = /* @__PURE__ */ styled_default("div")({
  name: "Wrapper",
  class: "gdg-wmyidgi",
  propsAsIs: false,
  vars: {
    "wmyidgi-0": [_exp3()],
    "wmyidgi-1": [_exp22()]
  }
});
var DataEditorContainer = (p2) => {
  const {
    inWidth,
    inHeight,
    children,
    ...rest
  } = p2;
  return React16.createElement(Wrapper, {
    innerHeight: toCss(inHeight),
    innerWidth: toCss(inWidth),
    ...rest
  }, children);
};

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-autoscroll.js
var import_react14 = __toESM(require_react(), 1);
var maxPxPerMs = 2;
var msToFullSpeed = 1300;
function useAutoscroll(scrollDirection, scrollRef, onScroll) {
  const speedScalar = import_react14.default.useRef(0);
  const [xDir, yDir] = scrollDirection ?? [0, 0];
  import_react14.default.useEffect(() => {
    if (xDir === 0 && yDir === 0) {
      speedScalar.current = 0;
      return;
    }
    let cancelled = false;
    let lastTime = 0;
    const scrollFn = (curTime) => {
      if (cancelled)
        return;
      if (lastTime === 0) {
        lastTime = curTime;
      } else {
        const step = curTime - lastTime;
        speedScalar.current = Math.min(1, speedScalar.current + step / msToFullSpeed);
        const motion = speedScalar.current ** 1.618 * step * maxPxPerMs;
        scrollRef.current?.scrollBy(xDir * motion, yDir * motion);
        lastTime = curTime;
        onScroll?.();
      }
      window.requestAnimationFrame(scrollFn);
    };
    window.requestAnimationFrame(scrollFn);
    return () => {
      cancelled = true;
    };
  }, [scrollRef, xDir, yDir, onScroll]);
}

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/use-rem-adjuster.js
var import_react15 = __toESM(require_react(), 1);
function useRemAdjuster({ rowHeight: rowHeightIn, headerHeight: headerHeightIn, groupHeaderHeight: groupHeaderHeightIn, theme: themeIn, overscrollX: overscrollXIn, overscrollY: overscrollYIn, scaleToRem, remSize }) {
  const [rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY] = import_react15.default.useMemo(() => {
    if (!scaleToRem || remSize === 16)
      return [rowHeightIn, headerHeightIn, groupHeaderHeightIn, themeIn, overscrollXIn, overscrollYIn];
    const scaler = remSize / 16;
    const rh = rowHeightIn;
    const bt = getDataEditorTheme();
    return [
      typeof rh === "number" ? rh * scaler : (n) => Math.ceil(rh(n) * scaler),
      Math.ceil(headerHeightIn * scaler),
      Math.ceil(groupHeaderHeightIn * scaler),
      {
        ...themeIn,
        headerIconSize: (themeIn?.headerIconSize ?? bt.headerIconSize) * scaler,
        cellHorizontalPadding: (themeIn?.cellHorizontalPadding ?? bt.cellHorizontalPadding) * scaler,
        cellVerticalPadding: (themeIn?.cellVerticalPadding ?? bt.cellVerticalPadding) * scaler
      },
      Math.ceil((overscrollXIn ?? 0) * scaler),
      Math.ceil((overscrollYIn ?? 0) * scaler)
    ];
  }, [groupHeaderHeightIn, headerHeightIn, overscrollXIn, overscrollYIn, remSize, rowHeightIn, scaleToRem, themeIn]);
  return { rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY };
}

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor-keybindings.js
var import_react16 = __toESM(require_react(), 1);
var keybindingDefaults = {
  downFill: false,
  rightFill: false,
  clear: true,
  closeOverlay: true,
  acceptOverlayDown: true,
  acceptOverlayUp: true,
  acceptOverlayLeft: true,
  acceptOverlayRight: true,
  copy: true,
  paste: true,
  cut: true,
  search: false,
  delete: true,
  activateCell: true,
  scrollToSelectedCell: true,
  goToFirstCell: true,
  goToFirstColumn: true,
  goToFirstRow: true,
  goToLastCell: true,
  goToLastColumn: true,
  goToLastRow: true,
  goToNextPage: true,
  goToPreviousPage: true,
  selectToFirstCell: true,
  selectToFirstColumn: true,
  selectToFirstRow: true,
  selectToLastCell: true,
  selectToLastColumn: true,
  selectToLastRow: true,
  selectAll: true,
  selectRow: true,
  selectColumn: true,
  goUpCell: true,
  goRightCell: true,
  goDownCell: true,
  goLeftCell: true,
  goUpCellRetainSelection: true,
  goRightCellRetainSelection: true,
  goDownCellRetainSelection: true,
  goLeftCellRetainSelection: true,
  selectGrowUp: true,
  selectGrowRight: true,
  selectGrowDown: true,
  selectGrowLeft: true
};
function realizeKeybind(keybind, defaultVal) {
  if (keybind === true)
    return defaultVal;
  if (keybind === false)
    return "";
  return keybind;
}
function realizeKeybinds(keybinds) {
  const isOSX = browserIsOSX.value;
  return {
    activateCell: realizeKeybind(keybinds.activateCell, " |Enter|shift+Enter"),
    clear: realizeKeybind(keybinds.clear, "any+Escape"),
    closeOverlay: realizeKeybind(keybinds.closeOverlay, "any+Escape"),
    acceptOverlayDown: realizeKeybind(keybinds.acceptOverlayDown, "Enter"),
    acceptOverlayUp: realizeKeybind(keybinds.acceptOverlayUp, "shift+Enter"),
    acceptOverlayLeft: realizeKeybind(keybinds.acceptOverlayLeft, "shift+Tab"),
    acceptOverlayRight: realizeKeybind(keybinds.acceptOverlayRight, "Tab"),
    copy: keybinds.copy,
    cut: keybinds.cut,
    delete: realizeKeybind(keybinds.delete, isOSX ? "Backspace|Delete" : "Delete"),
    downFill: realizeKeybind(keybinds.downFill, "primary+_68"),
    scrollToSelectedCell: realizeKeybind(keybinds.scrollToSelectedCell, "primary+Enter"),
    goDownCell: realizeKeybind(keybinds.goDownCell, "ArrowDown"),
    goDownCellRetainSelection: realizeKeybind(keybinds.goDownCellRetainSelection, "alt+ArrowDown"),
    goLeftCell: realizeKeybind(keybinds.goLeftCell, "ArrowLeft|shift+Tab"),
    goLeftCellRetainSelection: realizeKeybind(keybinds.goLeftCellRetainSelection, "alt+ArrowLeft"),
    goRightCell: realizeKeybind(keybinds.goRightCell, "ArrowRight|Tab"),
    goRightCellRetainSelection: realizeKeybind(keybinds.goRightCellRetainSelection, "alt+ArrowRight"),
    goUpCell: realizeKeybind(keybinds.goUpCell, "ArrowUp"),
    goUpCellRetainSelection: realizeKeybind(keybinds.goUpCellRetainSelection, "alt+ArrowUp"),
    goToFirstCell: realizeKeybind(keybinds.goToFirstCell, "primary+Home"),
    goToFirstColumn: realizeKeybind(keybinds.goToFirstColumn, "Home|primary+ArrowLeft"),
    goToFirstRow: realizeKeybind(keybinds.goToFirstRow, "primary+ArrowUp"),
    goToLastCell: realizeKeybind(keybinds.goToLastCell, "primary+End"),
    goToLastColumn: realizeKeybind(keybinds.goToLastColumn, "End|primary+ArrowRight"),
    goToLastRow: realizeKeybind(keybinds.goToLastRow, "primary+ArrowDown"),
    goToNextPage: realizeKeybind(keybinds.goToNextPage, "PageDown"),
    goToPreviousPage: realizeKeybind(keybinds.goToPreviousPage, "PageUp"),
    paste: keybinds.paste,
    rightFill: realizeKeybind(keybinds.rightFill, "primary+_82"),
    search: realizeKeybind(keybinds.search, "primary+f"),
    selectAll: realizeKeybind(keybinds.selectAll, "primary+a"),
    selectColumn: realizeKeybind(keybinds.selectColumn, "ctrl+ "),
    selectGrowDown: realizeKeybind(keybinds.selectGrowDown, "shift+ArrowDown"),
    selectGrowLeft: realizeKeybind(keybinds.selectGrowLeft, "shift+ArrowLeft"),
    selectGrowRight: realizeKeybind(keybinds.selectGrowRight, "shift+ArrowRight"),
    selectGrowUp: realizeKeybind(keybinds.selectGrowUp, "shift+ArrowUp"),
    selectRow: realizeKeybind(keybinds.selectRow, "shift+ "),
    selectToFirstCell: realizeKeybind(keybinds.selectToFirstCell, "primary+shift+Home"),
    selectToFirstColumn: realizeKeybind(keybinds.selectToFirstColumn, "primary+shift+ArrowLeft"),
    selectToFirstRow: realizeKeybind(keybinds.selectToFirstRow, "primary+shift+ArrowUp"),
    selectToLastCell: realizeKeybind(keybinds.selectToLastCell, "primary+shift+End"),
    selectToLastColumn: realizeKeybind(keybinds.selectToLastColumn, "primary+shift+ArrowRight"),
    selectToLastRow: realizeKeybind(keybinds.selectToLastRow, "primary+shift+ArrowDown")
  };
}
function useKeybindingsWithDefaults(keybindingsIn) {
  const keys = useDeepMemo(keybindingsIn);
  return import_react16.default.useMemo(() => {
    if (keys === void 0)
      return realizeKeybinds(keybindingDefaults);
    const withBackCompatApplied = {
      ...keys,
      goToNextPage: keys?.goToNextPage ?? keys?.pageDown ?? keybindingDefaults.goToNextPage,
      goToPreviousPage: keys?.goToPreviousPage ?? keys?.pageUp ?? keybindingDefaults.goToPreviousPage,
      goToFirstCell: keys?.goToFirstCell ?? keys?.first ?? keybindingDefaults.goToFirstCell,
      goToLastCell: keys?.goToLastCell ?? keys?.last ?? keybindingDefaults.goToLastCell,
      selectToFirstCell: keys?.selectToFirstCell ?? keys?.first ?? keybindingDefaults.selectToFirstCell,
      selectToLastCell: keys?.selectToLastCell ?? keys?.last ?? keybindingDefaults.selectToLastCell
    };
    return realizeKeybinds({
      ...keybindingDefaults,
      ...withBackCompatApplied
    });
  }, [keys]);
}

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor/data-editor.js
var DataGridOverlayEditor = React20.lazy(async () => await import("/build/_shared/data-grid-overlay-editor-5Z6SBDIY.js"));
var idCounter = 0;
function getSpanStops(cells) {
  return (0, import_uniq.default)((0, import_flatten.default)((0, import_flatten.default)(cells).filter((c) => c.span !== void 0).map((c) => (0, import_range2.default)((c.span?.[0] ?? 0) + 1, (c.span?.[1] ?? 0) + 1))));
}
function shiftSelection(input, offset) {
  if (input === void 0 || offset === 0 || input.columns.length === 0 && input.current === void 0)
    return input;
  return {
    current: input.current === void 0 ? void 0 : {
      cell: [input.current.cell[0] + offset, input.current.cell[1]],
      range: {
        ...input.current.range,
        x: input.current.range.x + offset
      },
      rangeStack: input.current.rangeStack.map((r) => ({
        ...r,
        x: r.x + offset
      }))
    },
    rows: input.rows,
    columns: input.columns.offset(offset)
  };
}
var loadingCell2 = {
  kind: GridCellKind.Loading,
  allowOverlay: false
};
var emptyGridSelection = {
  columns: CompactSelection.empty(),
  rows: CompactSelection.empty(),
  current: void 0
};
var DataEditorImpl = (p2, forwardedRef) => {
  const [gridSelectionInner, setGridSelectionInner] = React20.useState(emptyGridSelection);
  const [overlay, setOverlay] = React20.useState();
  const searchInputRef = React20.useRef(null);
  const canvasRef = React20.useRef(null);
  const [mouseState, setMouseState] = React20.useState();
  const scrollRef = React20.useRef(null);
  const lastSent = React20.useRef();
  const safeWindow = typeof window === "undefined" ? null : window;
  const { imageEditorOverride, getRowThemeOverride, markdownDivCreateNode, width, height, columns: columnsIn, rows, getCellContent, onCellClicked, onCellActivated, onFillPattern, onFinishedEditing, coercePasteValue, drawHeader: drawHeaderIn, drawCell: drawCellIn, editorBloom, onHeaderClicked, onColumnProposeMove, spanRangeBehavior = "default", onGroupHeaderClicked, onCellContextMenu, className, onHeaderContextMenu, getCellsForSelection: getCellsForSelectionIn, onGroupHeaderContextMenu, onGroupHeaderRenamed, onCellEdited, onCellsEdited, onSearchResultsChanged: onSearchResultsChangedIn, searchResults, onSearchValueChange, searchValue, onKeyDown: onKeyDownIn, onKeyUp: onKeyUpIn, keybindings: keybindingsIn, editOnType = true, onRowAppended, onColumnMoved, validateCell: validateCellIn, highlightRegions: highlightRegionsIn, rangeSelect = "rect", columnSelect = "multi", rowSelect = "multi", rangeSelectionBlending = "exclusive", columnSelectionBlending = "exclusive", rowSelectionBlending = "exclusive", onDelete: onDeleteIn, onDragStart, onMouseMove, onPaste, copyHeaders = false, freezeColumns = 0, cellActivationBehavior = "second-click", rowSelectionMode = "auto", onHeaderMenuClick, getGroupDetails, onSearchClose: onSearchCloseIn, onItemHovered, onSelectionCleared, showSearch: showSearchIn, onVisibleRegionChanged, gridSelection: gridSelectionOuter, onGridSelectionChange, minColumnWidth: minColumnWidthIn = 50, maxColumnWidth: maxColumnWidthIn = 500, maxColumnAutoWidth: maxColumnAutoWidthIn, provideEditor, trailingRowOptions, freezeTrailingRows = 0, allowedFillDirections = "orthogonal", scrollOffsetX, scrollOffsetY, verticalBorder, onDragOverCell, onDrop, onColumnResize: onColumnResizeIn, onColumnResizeEnd: onColumnResizeEndIn, onColumnResizeStart: onColumnResizeStartIn, customRenderers: additionalRenderers, fillHandle, drawFocusRing = true, experimental, fixedShadowX, fixedShadowY, headerIcons, imageWindowLoader, initialSize, isDraggable, onDragLeave, onRowMoved, overscrollX: overscrollXIn, overscrollY: overscrollYIn, preventDiagonalScrolling, rightElement, rightElementProps, trapFocus = false, smoothScrollX, smoothScrollY, scaleToRem = false, rowHeight: rowHeightIn = 34, headerHeight: headerHeightIn = 36, groupHeaderHeight: groupHeaderHeightIn = headerHeightIn, theme: themeIn, isOutsideClick, renderers } = p2;
  const rowMarkersObj = typeof p2.rowMarkers === "string" ? void 0 : p2.rowMarkers;
  const rowMarkers = rowMarkersObj?.kind ?? p2.rowMarkers ?? "none";
  const rowMarkerWidthRaw = rowMarkersObj?.width ?? p2.rowMarkerWidth;
  const rowMarkerStartIndex = rowMarkersObj?.startIndex ?? p2.rowMarkerStartIndex ?? 1;
  const rowMarkerTheme = rowMarkersObj?.theme ?? p2.rowMarkerTheme;
  const rowMarkerCheckboxStyle = rowMarkersObj?.checkboxStyle ?? "square";
  const minColumnWidth = Math.max(minColumnWidthIn, 20);
  const maxColumnWidth = Math.max(maxColumnWidthIn, minColumnWidth);
  const maxColumnAutoWidth = Math.max(maxColumnAutoWidthIn ?? maxColumnWidth, minColumnWidth);
  const docStyle = React20.useMemo(() => {
    if (typeof window === "undefined")
      return { fontSize: "16px" };
    return window.getComputedStyle(document.documentElement);
  }, []);
  const remSize = React20.useMemo(() => Number.parseFloat(docStyle.fontSize), [docStyle]);
  const { rowHeight, headerHeight, groupHeaderHeight, theme, overscrollX, overscrollY } = useRemAdjuster({
    groupHeaderHeight: groupHeaderHeightIn,
    headerHeight: headerHeightIn,
    overscrollX: overscrollXIn,
    overscrollY: overscrollYIn,
    remSize,
    rowHeight: rowHeightIn,
    scaleToRem,
    theme: themeIn
  });
  const keybindings = useKeybindingsWithDefaults(keybindingsIn);
  const rowMarkerWidth = rowMarkerWidthRaw ?? (rows > 1e4 ? 48 : rows > 1e3 ? 44 : rows > 100 ? 36 : 32);
  const hasRowMarkers = rowMarkers !== "none";
  const rowMarkerOffset = hasRowMarkers ? 1 : 0;
  const showTrailingBlankRow = onRowAppended !== void 0;
  const lastRowSticky = trailingRowOptions?.sticky === true;
  const [showSearchInner, setShowSearchInner] = React20.useState(false);
  const showSearch = showSearchIn ?? showSearchInner;
  const onSearchClose = React20.useCallback(() => {
    if (onSearchCloseIn !== void 0) {
      onSearchCloseIn();
    } else {
      setShowSearchInner(false);
    }
  }, [onSearchCloseIn]);
  const gridSelectionOuterMangled = React20.useMemo(() => {
    return gridSelectionOuter === void 0 ? void 0 : shiftSelection(gridSelectionOuter, rowMarkerOffset);
  }, [gridSelectionOuter, rowMarkerOffset]);
  const gridSelection = gridSelectionOuterMangled ?? gridSelectionInner;
  const abortControllerRef = React20.useRef();
  if (abortControllerRef.current === void 0)
    abortControllerRef.current = new AbortController();
  React20.useEffect(() => () => abortControllerRef?.current.abort(), []);
  const [getCellsForSelection, getCellsForSeletionDirect] = useCellsForSelection(getCellsForSelectionIn, getCellContent, rowMarkerOffset, abortControllerRef.current, rows);
  const validateCell = React20.useCallback((cell, newValue, prevValue) => {
    if (validateCellIn === void 0)
      return true;
    const item = [cell[0] - rowMarkerOffset, cell[1]];
    return validateCellIn?.(item, newValue, prevValue);
  }, [rowMarkerOffset, validateCellIn]);
  const expectedExternalGridSelection = React20.useRef(gridSelectionOuter);
  const setGridSelection = React20.useCallback((newVal, expand) => {
    if (expand) {
      newVal = expandSelection(newVal, getCellsForSelection, rowMarkerOffset, spanRangeBehavior, abortControllerRef.current);
    }
    if (onGridSelectionChange !== void 0) {
      expectedExternalGridSelection.current = shiftSelection(newVal, -rowMarkerOffset);
      onGridSelectionChange(expectedExternalGridSelection.current);
    } else {
      setGridSelectionInner(newVal);
    }
  }, [onGridSelectionChange, getCellsForSelection, rowMarkerOffset, spanRangeBehavior]);
  const onColumnResize = whenDefined(onColumnResizeIn, React20.useCallback((_3, w3, ind, wg) => {
    onColumnResizeIn?.(columnsIn[ind - rowMarkerOffset], w3, ind - rowMarkerOffset, wg);
  }, [onColumnResizeIn, rowMarkerOffset, columnsIn]));
  const onColumnResizeEnd = whenDefined(onColumnResizeEndIn, React20.useCallback((_3, w3, ind, wg) => {
    onColumnResizeEndIn?.(columnsIn[ind - rowMarkerOffset], w3, ind - rowMarkerOffset, wg);
  }, [onColumnResizeEndIn, rowMarkerOffset, columnsIn]));
  const onColumnResizeStart = whenDefined(onColumnResizeStartIn, React20.useCallback((_3, w3, ind, wg) => {
    onColumnResizeStartIn?.(columnsIn[ind - rowMarkerOffset], w3, ind - rowMarkerOffset, wg);
  }, [onColumnResizeStartIn, rowMarkerOffset, columnsIn]));
  const drawHeader2 = whenDefined(drawHeaderIn, React20.useCallback((args, draw) => {
    return drawHeaderIn?.({ ...args, columnIndex: args.columnIndex - rowMarkerOffset }, draw) ?? false;
  }, [drawHeaderIn, rowMarkerOffset]));
  const drawCell2 = whenDefined(drawCellIn, React20.useCallback((args, draw) => {
    return drawCellIn?.({ ...args, col: args.col - rowMarkerOffset }, draw) ?? false;
  }, [drawCellIn, rowMarkerOffset]));
  const onDelete = React20.useCallback((sel) => {
    if (onDeleteIn !== void 0) {
      const result = onDeleteIn(shiftSelection(sel, -rowMarkerOffset));
      if (typeof result === "boolean") {
        return result;
      }
      return shiftSelection(result, rowMarkerOffset);
    }
    return true;
  }, [onDeleteIn, rowMarkerOffset]);
  const [setCurrent, setSelectedRows, setSelectedColumns] = useSelectionBehavior(gridSelection, setGridSelection, rangeSelectionBlending, columnSelectionBlending, rowSelectionBlending, rangeSelect);
  const mergedTheme = React20.useMemo(() => {
    return mergeAndRealizeTheme(getDataEditorTheme(), theme);
  }, [theme]);
  const [clientSize, setClientSize] = React20.useState([0, 0, 0]);
  const rendererMap = React20.useMemo(() => {
    if (renderers === void 0)
      return {};
    const result = {};
    for (const r of renderers) {
      result[r.kind] = r;
    }
    return result;
  }, [renderers]);
  const getCellRenderer = React20.useCallback((cell) => {
    if (cell.kind !== GridCellKind.Custom) {
      return rendererMap[cell.kind];
    }
    return additionalRenderers?.find((x2) => x2.isMatch(cell));
  }, [additionalRenderers, rendererMap]);
  let { sizedColumns: columns, nonGrowWidth } = useColumnSizer(columnsIn, rows, getCellsForSeletionDirect, clientSize[0] - (rowMarkerOffset === 0 ? 0 : rowMarkerWidth) - clientSize[2], minColumnWidth, maxColumnAutoWidth, mergedTheme, getCellRenderer, abortControllerRef.current);
  if (rowMarkers !== "none")
    nonGrowWidth += rowMarkerWidth;
  const enableGroups = React20.useMemo(() => {
    return columns.some((c) => c.group !== void 0);
  }, [columns]);
  const totalHeaderHeight = enableGroups ? headerHeight + groupHeaderHeight : headerHeight;
  const numSelectedRows = gridSelection.rows.length;
  const rowMarkerChecked = rowMarkers === "none" ? void 0 : numSelectedRows === 0 ? false : numSelectedRows === rows ? true : void 0;
  const mangledCols = React20.useMemo(() => {
    if (rowMarkers === "none")
      return columns;
    return [
      {
        title: "",
        width: rowMarkerWidth,
        icon: void 0,
        hasMenu: false,
        style: "normal",
        themeOverride: rowMarkerTheme,
        rowMarker: rowMarkerCheckboxStyle,
        rowMarkerChecked
      },
      ...columns
    ];
  }, [rowMarkers, columns, rowMarkerWidth, rowMarkerTheme, rowMarkerCheckboxStyle, rowMarkerChecked]);
  const [visibleRegionY, visibleRegionTy] = React20.useMemo(() => {
    return [
      scrollOffsetY !== void 0 && typeof rowHeight === "number" ? Math.floor(scrollOffsetY / rowHeight) : 0,
      scrollOffsetY !== void 0 && typeof rowHeight === "number" ? -(scrollOffsetY % rowHeight) : 0
    ];
  }, [scrollOffsetY, rowHeight]);
  const visibleRegionRef = React20.useRef({
    height: 1,
    width: 1,
    x: 0,
    y: 0
  });
  const visibleRegionInput = React20.useMemo(() => ({
    x: visibleRegionRef.current.x,
    y: visibleRegionY,
    width: visibleRegionRef.current.width ?? 1,
    height: visibleRegionRef.current.height ?? 1,
    ty: visibleRegionTy
  }), [visibleRegionTy, visibleRegionY]);
  const hasJustScrolled = React20.useRef(false);
  const [visibleRegion, setVisibleRegion, empty2] = useStateWithReactiveInput(visibleRegionInput);
  visibleRegionRef.current = visibleRegion;
  const vScrollReady = (visibleRegion.height ?? 1) > 1;
  React20.useLayoutEffect(() => {
    if (scrollOffsetY !== void 0 && scrollRef.current !== null && vScrollReady) {
      if (scrollRef.current.scrollTop === scrollOffsetY)
        return;
      scrollRef.current.scrollTop = scrollOffsetY;
      if (scrollRef.current.scrollTop !== scrollOffsetY) {
        empty2();
      }
      hasJustScrolled.current = true;
    }
  }, [scrollOffsetY, vScrollReady, empty2]);
  const hScrollReady = (visibleRegion.width ?? 1) > 1;
  React20.useLayoutEffect(() => {
    if (scrollOffsetX !== void 0 && scrollRef.current !== null && hScrollReady) {
      if (scrollRef.current.scrollLeft === scrollOffsetX)
        return;
      scrollRef.current.scrollLeft = scrollOffsetX;
      if (scrollRef.current.scrollLeft !== scrollOffsetX) {
        empty2();
      }
      hasJustScrolled.current = true;
    }
  }, [scrollOffsetX, hScrollReady, empty2]);
  const cellXOffset = visibleRegion.x + rowMarkerOffset;
  const cellYOffset = visibleRegion.y;
  const gridRef = React20.useRef(null);
  const focus = React20.useCallback((immediate) => {
    if (immediate === true) {
      gridRef.current?.focus();
    } else {
      window.requestAnimationFrame(() => {
        gridRef.current?.focus();
      });
    }
  }, []);
  const mangledRows = showTrailingBlankRow ? rows + 1 : rows;
  const mangledOnCellsEdited = React20.useCallback((items) => {
    const mangledItems = rowMarkerOffset === 0 ? items : items.map((x2) => ({
      ...x2,
      location: [x2.location[0] - rowMarkerOffset, x2.location[1]]
    }));
    const r = onCellsEdited?.(mangledItems);
    if (r !== true) {
      for (const i of mangledItems)
        onCellEdited?.(i.location, i.value);
    }
    return r;
  }, [onCellEdited, onCellsEdited, rowMarkerOffset]);
  const [fillHighlightRegion, setFillHighlightRegion] = React20.useState();
  const highlightRange = gridSelection.current !== void 0 && gridSelection.current.range.width * gridSelection.current.range.height > 1 ? gridSelection.current.range : void 0;
  const highlightFocus = drawFocusRing ? gridSelection.current?.cell : void 0;
  const highlightFocusCol = highlightFocus?.[0];
  const highlightFocusRow = highlightFocus?.[1];
  const highlightRegions = React20.useMemo(() => {
    if ((highlightRegionsIn === void 0 || highlightRegionsIn.length === 0) && (highlightRange ?? highlightFocusCol ?? highlightFocusRow ?? fillHighlightRegion) === void 0)
      return void 0;
    const regions = [];
    if (highlightRegionsIn !== void 0) {
      for (const r of highlightRegionsIn) {
        const maxWidth = mangledCols.length - r.range.x - rowMarkerOffset;
        if (maxWidth > 0) {
          regions.push({
            color: r.color,
            range: {
              ...r.range,
              x: r.range.x + rowMarkerOffset,
              width: Math.min(maxWidth, r.range.width)
            },
            style: r.style
          });
        }
      }
    }
    if (fillHighlightRegion !== void 0) {
      regions.push({
        color: withAlpha(mergedTheme.accentColor, 0),
        range: fillHighlightRegion,
        style: "dashed"
      });
    }
    if (highlightRange !== void 0) {
      regions.push({
        color: withAlpha(mergedTheme.accentColor, 0.5),
        range: highlightRange,
        style: "solid-outline"
      });
    }
    if (highlightFocusCol !== void 0 && highlightFocusRow !== void 0) {
      regions.push({
        color: mergedTheme.accentColor,
        range: {
          x: highlightFocusCol,
          y: highlightFocusRow,
          width: 1,
          height: 1
        },
        style: "solid-outline"
      });
    }
    return regions.length > 0 ? regions : void 0;
  }, [
    fillHighlightRegion,
    highlightRange,
    highlightFocusCol,
    highlightFocusRow,
    highlightRegionsIn,
    mangledCols.length,
    mergedTheme.accentColor,
    rowMarkerOffset
  ]);
  const mangledColsRef = React20.useRef(mangledCols);
  mangledColsRef.current = mangledCols;
  const getMangledCellContent = React20.useCallback(([col, row], forceStrict = false) => {
    const isTrailing = showTrailingBlankRow && row === mangledRows - 1;
    const isRowMarkerCol = col === 0 && hasRowMarkers;
    if (isRowMarkerCol) {
      if (isTrailing) {
        return loadingCell2;
      }
      return {
        kind: InnerGridCellKind.Marker,
        allowOverlay: false,
        checkboxStyle: rowMarkerCheckboxStyle,
        checked: gridSelection?.rows.hasIndex(row) === true,
        markerKind: rowMarkers === "clickable-number" ? "number" : rowMarkers,
        row: rowMarkerStartIndex + row,
        drawHandle: onRowMoved !== void 0,
        cursor: rowMarkers === "clickable-number" ? "pointer" : void 0
      };
    } else if (isTrailing) {
      const isFirst = col === rowMarkerOffset;
      const maybeFirstColumnHint = isFirst ? trailingRowOptions?.hint ?? "" : "";
      const c = mangledColsRef.current[col];
      if (c?.trailingRowOptions?.disabled === true) {
        return loadingCell2;
      } else {
        const hint = c?.trailingRowOptions?.hint ?? maybeFirstColumnHint;
        const icon = c?.trailingRowOptions?.addIcon ?? trailingRowOptions?.addIcon;
        return {
          kind: InnerGridCellKind.NewRow,
          hint,
          allowOverlay: false,
          icon
        };
      }
    } else {
      const outerCol = col - rowMarkerOffset;
      if (forceStrict || experimental?.strict === true) {
        const vr = visibleRegionRef.current;
        const isOutsideMainArea = vr.x > outerCol || outerCol > vr.x + vr.width || vr.y > row || row > vr.y + vr.height || row >= rowsRef.current;
        const isSelected = outerCol === vr.extras?.selected?.[0] && row === vr.extras?.selected[1];
        let isInFreezeArea = false;
        if (vr.extras?.freezeRegions !== void 0) {
          for (const fr of vr.extras.freezeRegions) {
            if (pointInRect(fr, outerCol, row)) {
              isInFreezeArea = true;
              break;
            }
          }
        }
        if (isOutsideMainArea && !isSelected && !isInFreezeArea) {
          return loadingCell2;
        }
      }
      let result = getCellContent([outerCol, row]);
      if (rowMarkerOffset !== 0 && result.span !== void 0) {
        result = {
          ...result,
          span: [result.span[0] + rowMarkerOffset, result.span[1] + rowMarkerOffset]
        };
      }
      return result;
    }
  }, [
    showTrailingBlankRow,
    mangledRows,
    hasRowMarkers,
    rowMarkerCheckboxStyle,
    gridSelection?.rows,
    rowMarkers,
    rowMarkerStartIndex,
    onRowMoved,
    rowMarkerOffset,
    trailingRowOptions?.hint,
    trailingRowOptions?.addIcon,
    experimental?.strict,
    getCellContent
  ]);
  const mangledGetGroupDetails = React20.useCallback((group) => {
    let result = getGroupDetails?.(group) ?? { name: group };
    if (onGroupHeaderRenamed !== void 0 && group !== "") {
      result = {
        icon: result.icon,
        name: result.name,
        overrideTheme: result.overrideTheme,
        actions: [
          ...result.actions ?? [],
          {
            title: "Rename",
            icon: "renameIcon",
            onClick: (e) => setRenameGroup({
              group: result.name,
              bounds: e.bounds
            })
          }
        ]
      };
    }
    return result;
  }, [getGroupDetails, onGroupHeaderRenamed]);
  const setOverlaySimple = React20.useCallback((val) => {
    const [col, row] = val.cell;
    const column = mangledCols[col];
    const groupTheme = column?.group !== void 0 ? mangledGetGroupDetails(column.group)?.overrideTheme : void 0;
    const colTheme = column?.themeOverride;
    const rowTheme = getRowThemeOverride?.(row);
    setOverlay({
      ...val,
      theme: mergeAndRealizeTheme(mergedTheme, groupTheme, colTheme, rowTheme, val.content.themeOverride)
    });
  }, [getRowThemeOverride, mangledCols, mangledGetGroupDetails, mergedTheme]);
  const reselect = React20.useCallback((bounds, fromKeyboard, initialValue) => {
    if (gridSelection.current === void 0)
      return;
    const [col, row] = gridSelection.current.cell;
    const c = getMangledCellContent([col, row]);
    if (c.kind !== GridCellKind.Boolean && c.allowOverlay) {
      let content = c;
      if (initialValue !== void 0) {
        switch (content.kind) {
          case GridCellKind.Number: {
            const d3 = maybe(() => initialValue === "-" ? -0 : Number.parseFloat(initialValue), 0);
            content = {
              ...content,
              data: Number.isNaN(d3) ? 0 : d3
            };
            break;
          }
          case GridCellKind.Text:
          case GridCellKind.Markdown:
          case GridCellKind.Uri:
            content = {
              ...content,
              data: initialValue
            };
            break;
        }
      }
      setOverlaySimple({
        target: bounds,
        content,
        initialValue,
        cell: [col, row],
        highlight: initialValue === void 0,
        forceEditMode: initialValue !== void 0
      });
    } else if (c.kind === GridCellKind.Boolean && fromKeyboard && c.readonly !== true) {
      mangledOnCellsEdited([
        {
          location: gridSelection.current.cell,
          value: {
            ...c,
            data: toggleBoolean(c.data)
          }
        }
      ]);
      gridRef.current?.damage([{ cell: gridSelection.current.cell }]);
    }
  }, [getMangledCellContent, gridSelection, mangledOnCellsEdited, setOverlaySimple]);
  const focusOnRowFromTrailingBlankRow = React20.useCallback((col, row) => {
    const bounds = gridRef.current?.getBounds(col, row);
    if (bounds === void 0 || scrollRef.current === null) {
      return;
    }
    const content = getMangledCellContent([col, row]);
    if (!content.allowOverlay) {
      return;
    }
    setOverlaySimple({
      target: bounds,
      content,
      initialValue: void 0,
      highlight: true,
      cell: [col, row],
      forceEditMode: true
    });
  }, [getMangledCellContent, setOverlaySimple]);
  const scrollTo = React20.useCallback((col, row, dir = "both", paddingX = 0, paddingY = 0, options = void 0) => {
    if (scrollRef.current !== null) {
      const grid = gridRef.current;
      const canvas = canvasRef.current;
      const trueCol = typeof col !== "number" ? col.unit === "cell" ? col.amount : void 0 : col;
      const trueRow = typeof row !== "number" ? row.unit === "cell" ? row.amount : void 0 : row;
      const desiredX = typeof col !== "number" && col.unit === "px" ? col.amount : void 0;
      const desiredY = typeof row !== "number" && row.unit === "px" ? row.amount : void 0;
      if (grid !== null && canvas !== null) {
        let targetRect = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        let scrollX = 0;
        let scrollY = 0;
        if (trueCol !== void 0 || trueRow !== void 0) {
          targetRect = grid.getBounds((trueCol ?? 0) + rowMarkerOffset, trueRow ?? 0) ?? targetRect;
          if (targetRect.width === 0 || targetRect.height === 0)
            return;
        }
        const scrollBounds = canvas.getBoundingClientRect();
        const scale = scrollBounds.width / canvas.offsetWidth;
        if (desiredX !== void 0) {
          targetRect = {
            ...targetRect,
            x: desiredX - scrollBounds.left - scrollRef.current.scrollLeft,
            width: 1
          };
        }
        if (desiredY !== void 0) {
          targetRect = {
            ...targetRect,
            y: desiredY + scrollBounds.top - scrollRef.current.scrollTop,
            height: 1
          };
        }
        if (targetRect !== void 0) {
          const bounds = {
            x: targetRect.x - paddingX,
            y: targetRect.y - paddingY,
            width: targetRect.width + 2 * paddingX,
            height: targetRect.height + 2 * paddingY
          };
          let frozenWidth = 0;
          for (let i = 0; i < freezeColumns; i++) {
            frozenWidth += columns[i].width;
          }
          let trailingRowHeight = 0;
          const freezeTrailingRowsEffective = freezeTrailingRows + (lastRowSticky ? 1 : 0);
          if (freezeTrailingRowsEffective > 0) {
            trailingRowHeight = getFreezeTrailingHeight(mangledRows, freezeTrailingRowsEffective, rowHeight);
          }
          let sLeft = frozenWidth * scale + scrollBounds.left + rowMarkerOffset * rowMarkerWidth * scale;
          let sRight = scrollBounds.right;
          let sTop = scrollBounds.top + totalHeaderHeight * scale;
          let sBottom = scrollBounds.bottom - trailingRowHeight * scale;
          const minx = targetRect.width + paddingX * 2;
          switch (options?.hAlign) {
            case "start":
              sRight = sLeft + minx;
              break;
            case "end":
              sLeft = sRight - minx;
              break;
            case "center":
              sLeft = Math.floor((sLeft + sRight) / 2) - minx / 2;
              sRight = sLeft + minx;
              break;
          }
          const miny = targetRect.height + paddingY * 2;
          switch (options?.vAlign) {
            case "start":
              sBottom = sTop + miny;
              break;
            case "end":
              sTop = sBottom - miny;
              break;
            case "center":
              sTop = Math.floor((sTop + sBottom) / 2) - miny / 2;
              sBottom = sTop + miny;
              break;
          }
          if (sLeft > bounds.x) {
            scrollX = bounds.x - sLeft;
          } else if (sRight < bounds.x + bounds.width) {
            scrollX = bounds.x + bounds.width - sRight;
          }
          if (sTop > bounds.y) {
            scrollY = bounds.y - sTop;
          } else if (sBottom < bounds.y + bounds.height) {
            scrollY = bounds.y + bounds.height - sBottom;
          }
          if (dir === "vertical" || typeof col === "number" && col < freezeColumns) {
            scrollX = 0;
          } else if (dir === "horizontal" || typeof row === "number" && row >= mangledRows - freezeTrailingRowsEffective) {
            scrollY = 0;
          }
          if (scrollX !== 0 || scrollY !== 0) {
            if (scale !== 1) {
              scrollX /= scale;
              scrollY /= scale;
            }
            scrollRef.current.scrollTo(scrollX + scrollRef.current.scrollLeft, scrollY + scrollRef.current.scrollTop);
          }
        }
      }
    }
  }, [
    rowMarkerOffset,
    freezeTrailingRows,
    rowMarkerWidth,
    totalHeaderHeight,
    freezeColumns,
    columns,
    mangledRows,
    lastRowSticky,
    rowHeight
  ]);
  const focusCallback = React20.useRef(focusOnRowFromTrailingBlankRow);
  const getCellContentRef = React20.useRef(getCellContent);
  const rowsRef = React20.useRef(rows);
  focusCallback.current = focusOnRowFromTrailingBlankRow;
  getCellContentRef.current = getCellContent;
  rowsRef.current = rows;
  const appendRow = React20.useCallback(async (col, openOverlay = true) => {
    const c = mangledCols[col];
    if (c?.trailingRowOptions?.disabled === true) {
      return;
    }
    const appendResult = onRowAppended?.();
    let r = void 0;
    let bottom = true;
    if (appendResult !== void 0) {
      r = await appendResult;
      if (r === "top")
        bottom = false;
      if (typeof r === "number")
        bottom = false;
    }
    let backoff = 0;
    const doFocus = () => {
      if (rowsRef.current <= rows) {
        if (backoff < 500) {
          window.setTimeout(doFocus, backoff);
        }
        backoff = 50 + backoff * 2;
        return;
      }
      const row = typeof r === "number" ? r : bottom ? rows : 0;
      scrollToRef.current(col - rowMarkerOffset, row);
      setCurrent({
        cell: [col, row],
        range: {
          x: col,
          y: row,
          width: 1,
          height: 1
        }
      }, false, false, "edit");
      const cell = getCellContentRef.current([col - rowMarkerOffset, row]);
      if (cell.allowOverlay && isReadWriteCell(cell) && cell.readonly !== true && openOverlay) {
        window.setTimeout(() => {
          focusCallback.current(col, row);
        }, 0);
      }
    };
    doFocus();
  }, [mangledCols, onRowAppended, rowMarkerOffset, rows, setCurrent]);
  const getCustomNewRowTargetColumn = React20.useCallback((col) => {
    const customTargetColumn = columns[col]?.trailingRowOptions?.targetColumn ?? trailingRowOptions?.targetColumn;
    if (typeof customTargetColumn === "number") {
      const customTargetOffset = hasRowMarkers ? 1 : 0;
      return customTargetColumn + customTargetOffset;
    }
    if (typeof customTargetColumn === "object") {
      const maybeIndex = columnsIn.indexOf(customTargetColumn);
      if (maybeIndex >= 0) {
        const customTargetOffset = hasRowMarkers ? 1 : 0;
        return maybeIndex + customTargetOffset;
      }
    }
    return void 0;
  }, [columns, columnsIn, hasRowMarkers, trailingRowOptions?.targetColumn]);
  const lastSelectedRowRef = React20.useRef();
  const lastSelectedColRef = React20.useRef();
  const themeForCell = React20.useCallback((cell, pos) => {
    const [col, row] = pos;
    return mergeAndRealizeTheme(mergedTheme, mangledCols[col]?.themeOverride, getRowThemeOverride?.(row), cell.themeOverride);
  }, [getRowThemeOverride, mangledCols, mergedTheme]);
  const handleSelect = React20.useCallback((args) => {
    const isMultiKey = browserIsOSX.value ? args.metaKey : args.ctrlKey;
    const isMultiRow = isMultiKey && rowSelect === "multi";
    const isMultiCol = isMultiKey && columnSelect === "multi";
    const [col, row] = args.location;
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const [cellCol, cellRow] = gridSelection.current?.cell ?? [];
    if (args.kind === "cell") {
      lastSelectedColRef.current = void 0;
      lastMouseSelectLocation.current = [col, row];
      if (col === 0 && hasRowMarkers) {
        if (showTrailingBlankRow === true && row === rows || rowMarkers === "number" || rowSelect === "none")
          return;
        const markerCell = getMangledCellContent(args.location);
        if (markerCell.kind !== InnerGridCellKind.Marker) {
          return;
        }
        if (onRowMoved !== void 0) {
          const renderer = getCellRenderer(markerCell);
          assert(renderer?.kind === InnerGridCellKind.Marker);
          const postClick = renderer?.onClick?.({
            ...args,
            cell: markerCell,
            posX: args.localEventX,
            posY: args.localEventY,
            bounds: args.bounds,
            theme: themeForCell(markerCell, args.location),
            preventDefault: () => void 0
          });
          if (postClick === void 0 || postClick.checked === markerCell.checked)
            return;
        }
        setOverlay(void 0);
        focus();
        const isSelected = selectedRows.hasIndex(row);
        const lastHighlighted = lastSelectedRowRef.current;
        if (rowSelect === "multi" && (args.shiftKey || args.isLongTouch === true) && lastHighlighted !== void 0 && selectedRows.hasIndex(lastHighlighted)) {
          const newSlice = [Math.min(lastHighlighted, row), Math.max(lastHighlighted, row) + 1];
          if (isMultiRow || rowSelectionMode === "multi") {
            setSelectedRows(void 0, newSlice, true);
          } else {
            setSelectedRows(CompactSelection.fromSingleSelection(newSlice), void 0, isMultiRow);
          }
        } else if (isMultiRow || args.isTouch || rowSelectionMode === "multi") {
          if (isSelected) {
            setSelectedRows(selectedRows.remove(row), void 0, true);
          } else {
            setSelectedRows(void 0, row, true);
            lastSelectedRowRef.current = row;
          }
        } else if (isSelected && selectedRows.length === 1) {
          setSelectedRows(CompactSelection.empty(), void 0, isMultiKey);
        } else {
          setSelectedRows(CompactSelection.fromSingleSelection(row), void 0, isMultiKey);
          lastSelectedRowRef.current = row;
        }
      } else if (col >= rowMarkerOffset && showTrailingBlankRow && row === rows) {
        const customTargetColumn = getCustomNewRowTargetColumn(col);
        void appendRow(customTargetColumn ?? col);
      } else {
        if (cellCol !== col || cellRow !== row) {
          const cell = getMangledCellContent(args.location);
          const renderer = getCellRenderer(cell);
          if (renderer?.onSelect !== void 0) {
            let prevented = false;
            renderer.onSelect({
              ...args,
              cell,
              posX: args.localEventX,
              posY: args.localEventY,
              bounds: args.bounds,
              preventDefault: () => prevented = true,
              theme: themeForCell(cell, args.location)
            });
            if (prevented) {
              return;
            }
          }
          const isLastStickyRow = lastRowSticky && row === rows;
          const startedFromLastSticky = lastRowSticky && gridSelection !== void 0 && gridSelection.current?.cell[1] === rows;
          if ((args.shiftKey || args.isLongTouch === true) && cellCol !== void 0 && cellRow !== void 0 && gridSelection.current !== void 0 && !startedFromLastSticky) {
            if (isLastStickyRow) {
              return;
            }
            const left = Math.min(col, cellCol);
            const right = Math.max(col, cellCol);
            const top = Math.min(row, cellRow);
            const bottom = Math.max(row, cellRow);
            setCurrent({
              ...gridSelection.current,
              range: {
                x: left,
                y: top,
                width: right - left + 1,
                height: bottom - top + 1
              }
            }, true, isMultiKey, "click");
            lastSelectedRowRef.current = void 0;
            focus();
          } else {
            setCurrent({
              cell: [col, row],
              range: { x: col, y: row, width: 1, height: 1 }
            }, true, isMultiKey, "click");
            lastSelectedRowRef.current = void 0;
            setOverlay(void 0);
            focus();
          }
        }
      }
    } else if (args.kind === "header") {
      lastMouseSelectLocation.current = [col, row];
      setOverlay(void 0);
      if (hasRowMarkers && col === 0) {
        lastSelectedRowRef.current = void 0;
        lastSelectedColRef.current = void 0;
        if (rowSelect === "multi") {
          if (selectedRows.length !== rows) {
            setSelectedRows(CompactSelection.fromSingleSelection([0, rows]), void 0, isMultiKey);
          } else {
            setSelectedRows(CompactSelection.empty(), void 0, isMultiKey);
          }
          focus();
        }
      } else {
        const lastCol = lastSelectedColRef.current;
        if (columnSelect === "multi" && (args.shiftKey || args.isLongTouch === true) && lastCol !== void 0 && selectedColumns.hasIndex(lastCol)) {
          const newSlice = [Math.min(lastCol, col), Math.max(lastCol, col) + 1];
          if (isMultiCol) {
            setSelectedColumns(void 0, newSlice, isMultiKey);
          } else {
            setSelectedColumns(CompactSelection.fromSingleSelection(newSlice), void 0, isMultiKey);
          }
        } else if (isMultiCol) {
          if (selectedColumns.hasIndex(col)) {
            setSelectedColumns(selectedColumns.remove(col), void 0, isMultiKey);
          } else {
            setSelectedColumns(void 0, col, isMultiKey);
          }
          lastSelectedColRef.current = col;
        } else if (columnSelect !== "none") {
          setSelectedColumns(CompactSelection.fromSingleSelection(col), void 0, isMultiKey);
          lastSelectedColRef.current = col;
        }
        lastSelectedRowRef.current = void 0;
        focus();
      }
    } else if (args.kind === groupHeaderKind) {
      lastMouseSelectLocation.current = [col, row];
    } else if (args.kind === outOfBoundsKind && !args.isMaybeScrollbar) {
      setGridSelection(emptyGridSelection, false);
      setOverlay(void 0);
      focus();
      onSelectionCleared?.();
      lastSelectedRowRef.current = void 0;
      lastSelectedColRef.current = void 0;
    }
  }, [
    appendRow,
    columnSelect,
    focus,
    getCellRenderer,
    getCustomNewRowTargetColumn,
    getMangledCellContent,
    gridSelection,
    hasRowMarkers,
    lastRowSticky,
    onSelectionCleared,
    onRowMoved,
    rowMarkerOffset,
    rowMarkers,
    rowSelect,
    rowSelectionMode,
    rows,
    setCurrent,
    setGridSelection,
    setSelectedColumns,
    setSelectedRows,
    showTrailingBlankRow,
    themeForCell
  ]);
  const isActivelyDraggingHeader = React20.useRef(false);
  const lastMouseSelectLocation = React20.useRef();
  const touchDownArgs = React20.useRef(visibleRegion);
  const mouseDownData = React20.useRef();
  const onMouseDown = React20.useCallback((args) => {
    isPrevented.current = false;
    touchDownArgs.current = visibleRegionRef.current;
    if (args.button !== 0 && args.button !== 1) {
      mouseDownData.current = void 0;
      return;
    }
    const time = performance.now();
    mouseDownData.current = {
      button: args.button,
      time,
      location: args.location
    };
    if (args?.kind === "header") {
      isActivelyDraggingHeader.current = true;
    }
    const fh = args.kind === "cell" && args.isFillHandle;
    if (!fh && args.kind !== "cell" && args.isEdge)
      return;
    setMouseState({
      previousSelection: gridSelection,
      fillHandle: fh
    });
    lastMouseSelectLocation.current = void 0;
    if (!args.isTouch && args.button === 0 && !fh) {
      handleSelect(args);
    } else if (!args.isTouch && args.button === 1) {
      lastMouseSelectLocation.current = args.location;
    }
  }, [gridSelection, handleSelect]);
  const [renameGroup, setRenameGroup] = React20.useState();
  const handleGroupHeaderSelection = React20.useCallback((args) => {
    if (args.kind !== groupHeaderKind || columnSelect !== "multi") {
      return;
    }
    const isMultiKey = browserIsOSX.value ? args.metaKey : args.ctrlKey;
    const [col] = args.location;
    const selectedColumns = gridSelection.columns;
    if (col < rowMarkerOffset)
      return;
    const needle = mangledCols[col];
    let start = col;
    let end = col;
    for (let i = col - 1; i >= rowMarkerOffset; i--) {
      if (!isGroupEqual(needle.group, mangledCols[i].group))
        break;
      start--;
    }
    for (let i = col + 1; i < mangledCols.length; i++) {
      if (!isGroupEqual(needle.group, mangledCols[i].group))
        break;
      end++;
    }
    focus();
    if (isMultiKey) {
      if (selectedColumns.hasAll([start, end + 1])) {
        let newVal = selectedColumns;
        for (let index = start; index <= end; index++) {
          newVal = newVal.remove(index);
        }
        setSelectedColumns(newVal, void 0, isMultiKey);
      } else {
        setSelectedColumns(void 0, [start, end + 1], isMultiKey);
      }
    } else {
      setSelectedColumns(CompactSelection.fromSingleSelection([start, end + 1]), void 0, isMultiKey);
    }
  }, [columnSelect, focus, gridSelection.columns, mangledCols, rowMarkerOffset, setSelectedColumns]);
  const isPrevented = React20.useRef(false);
  const normalSizeColumn = React20.useCallback(async (col) => {
    if (getCellsForSelection !== void 0 && onColumnResize !== void 0) {
      const start = visibleRegionRef.current.y;
      const end = visibleRegionRef.current.height;
      let cells = getCellsForSelection({
        x: col,
        y: start,
        width: 1,
        height: Math.min(end, rows - start)
      }, abortControllerRef.current.signal);
      if (typeof cells !== "object") {
        cells = await cells();
      }
      const inputCol = columns[col - rowMarkerOffset];
      const offscreen = document.createElement("canvas");
      const ctx = offscreen.getContext("2d", { alpha: false });
      if (ctx !== null) {
        ctx.font = mergedTheme.baseFontFull;
        const newCol = measureColumn(ctx, mergedTheme, inputCol, 0, cells, minColumnWidth, maxColumnWidth, false, getCellRenderer);
        onColumnResize?.(inputCol, newCol.width, col, newCol.width);
      }
    }
  }, [
    columns,
    getCellsForSelection,
    maxColumnWidth,
    mergedTheme,
    minColumnWidth,
    onColumnResize,
    rowMarkerOffset,
    rows,
    getCellRenderer
  ]);
  const [scrollDir, setScrollDir] = React20.useState();
  const fillPattern = React20.useCallback(async (previousSelection, currentSelection) => {
    const patternRange = previousSelection.current?.range;
    if (patternRange === void 0 || getCellsForSelection === void 0 || currentSelection.current === void 0) {
      return;
    }
    const currentRange = currentSelection.current.range;
    if (onFillPattern !== void 0) {
      let canceled = false;
      onFillPattern({
        fillDestination: { ...currentRange, x: currentRange.x - rowMarkerOffset },
        patternSource: { ...patternRange, x: patternRange.x - rowMarkerOffset },
        preventDefault: () => canceled = true
      });
      if (canceled)
        return;
    }
    let cells = getCellsForSelection(patternRange, abortControllerRef.current.signal);
    if (typeof cells !== "object")
      cells = await cells();
    const pattern = cells;
    const editItemList = [];
    for (let x2 = 0; x2 < currentRange.width; x2++) {
      for (let y2 = 0; y2 < currentRange.height; y2++) {
        const cell = [currentRange.x + x2, currentRange.y + y2];
        if (itemIsInRect(cell, patternRange))
          continue;
        const patternCell = pattern[y2 % patternRange.height][x2 % patternRange.width];
        if (isInnerOnlyCell(patternCell) || !isReadWriteCell(patternCell))
          continue;
        editItemList.push({
          location: cell,
          value: { ...patternCell }
        });
      }
    }
    mangledOnCellsEdited(editItemList);
    gridRef.current?.damage(editItemList.map((c) => ({
      cell: c.location
    })));
  }, [getCellsForSelection, mangledOnCellsEdited, onFillPattern, rowMarkerOffset]);
  const fillRight = React20.useCallback(() => {
    if (gridSelection.current === void 0 || gridSelection.current.range.width <= 1)
      return;
    const firstColSelection = {
      ...gridSelection,
      current: {
        ...gridSelection.current,
        range: {
          ...gridSelection.current.range,
          width: 1
        }
      }
    };
    void fillPattern(firstColSelection, gridSelection);
  }, [fillPattern, gridSelection]);
  const fillDown = React20.useCallback(() => {
    if (gridSelection.current === void 0 || gridSelection.current.range.height <= 1)
      return;
    const firstRowSelection = {
      ...gridSelection,
      current: {
        ...gridSelection.current,
        range: {
          ...gridSelection.current.range,
          height: 1
        }
      }
    };
    void fillPattern(firstRowSelection, gridSelection);
  }, [fillPattern, gridSelection]);
  const onMouseUp = React20.useCallback((args, isOutside) => {
    const mouse = mouseState;
    setMouseState(void 0);
    setFillHighlightRegion(void 0);
    setScrollDir(void 0);
    isActivelyDraggingHeader.current = false;
    if (isOutside)
      return;
    if (mouse?.fillHandle === true && gridSelection.current !== void 0 && mouse.previousSelection?.current !== void 0) {
      if (fillHighlightRegion === void 0)
        return;
      const newRange = {
        ...gridSelection,
        current: {
          ...gridSelection.current,
          range: combineRects(mouse.previousSelection.current.range, fillHighlightRegion)
        }
      };
      void fillPattern(mouse.previousSelection, newRange);
      setGridSelection(newRange, true);
      return;
    }
    const [col, row] = args.location;
    const [lastMouseDownCol, lastMouseDownRow] = lastMouseSelectLocation.current ?? [];
    const preventDefault = () => {
      isPrevented.current = true;
    };
    const handleMaybeClick = (a) => {
      const isValidClick = a.isTouch || lastMouseDownCol === col && lastMouseDownRow === row;
      if (isValidClick) {
        onCellClicked?.([col - rowMarkerOffset, row], {
          ...a,
          preventDefault
        });
      }
      if (a.button === 1)
        return !isPrevented.current;
      if (!isPrevented.current) {
        const c = getMangledCellContent(args.location);
        const r = getCellRenderer(c);
        if (r !== void 0 && r.onClick !== void 0 && isValidClick) {
          const newVal = r.onClick({
            ...a,
            cell: c,
            posX: a.localEventX,
            posY: a.localEventY,
            bounds: a.bounds,
            theme: themeForCell(c, args.location),
            preventDefault
          });
          if (newVal !== void 0 && !isInnerOnlyCell(newVal) && isEditableGridCell(newVal)) {
            mangledOnCellsEdited([{ location: a.location, value: newVal }]);
            gridRef.current?.damage([
              {
                cell: a.location
              }
            ]);
          }
        }
        if (isPrevented.current || gridSelection.current === void 0)
          return false;
        let shouldActivate = false;
        switch (c.activationBehaviorOverride ?? cellActivationBehavior) {
          case "double-click":
          case "second-click": {
            if (mouse?.previousSelection?.current?.cell === void 0)
              break;
            const [selectedCol, selectedRow] = gridSelection.current.cell;
            const [prevCol, prevRow] = mouse.previousSelection.current.cell;
            const isClickOnSelected = col === selectedCol && col === prevCol && row === selectedRow && row === prevRow;
            shouldActivate = isClickOnSelected && (a.isDoubleClick === true || cellActivationBehavior === "second-click");
            break;
          }
          case "single-click": {
            shouldActivate = true;
            break;
          }
        }
        if (shouldActivate) {
          onCellActivated?.([col - rowMarkerOffset, row]);
          reselect(a.bounds, false);
          return true;
        }
      }
      return false;
    };
    const clickLocation = args.location[0] - rowMarkerOffset;
    if (args.isTouch) {
      const vr = visibleRegionRef.current;
      const touchVr = touchDownArgs.current;
      if (vr.x !== touchVr.x || vr.y !== touchVr.y) {
        return;
      }
      if (args.isLongTouch === true) {
        if (args.kind === "cell" && itemsAreEqual(gridSelection.current?.cell, args.location)) {
          onCellContextMenu?.([clickLocation, args.location[1]], {
            ...args,
            preventDefault
          });
          return;
        } else if (args.kind === "header" && gridSelection.columns.hasIndex(col)) {
          onHeaderContextMenu?.(clickLocation, { ...args, preventDefault });
          return;
        } else if (args.kind === groupHeaderKind) {
          if (clickLocation < 0) {
            return;
          }
          onGroupHeaderContextMenu?.(clickLocation, { ...args, preventDefault });
          return;
        }
      }
      if (args.kind === "cell") {
        if (!handleMaybeClick(args)) {
          handleSelect(args);
        }
      } else if (args.kind === groupHeaderKind) {
        onGroupHeaderClicked?.(clickLocation, { ...args, preventDefault });
      } else {
        if (args.kind === headerKind) {
          onHeaderClicked?.(clickLocation, {
            ...args,
            preventDefault
          });
        }
        handleSelect(args);
      }
      return;
    }
    if (args.kind === "header") {
      if (clickLocation < 0) {
        return;
      }
      if (args.isEdge) {
        if (args.isDoubleClick === true) {
          void normalSizeColumn(col);
        }
      } else if (args.button === 0 && col === lastMouseDownCol && row === lastMouseDownRow) {
        onHeaderClicked?.(clickLocation, { ...args, preventDefault });
      }
    }
    if (args.kind === groupHeaderKind) {
      if (clickLocation < 0) {
        return;
      }
      if (args.button === 0 && col === lastMouseDownCol && row === lastMouseDownRow) {
        onGroupHeaderClicked?.(clickLocation, { ...args, preventDefault });
        if (!isPrevented.current) {
          handleGroupHeaderSelection(args);
        }
      }
    }
    if (args.kind === "cell" && (args.button === 0 || args.button === 1)) {
      handleMaybeClick(args);
    }
    lastMouseSelectLocation.current = void 0;
  }, [
    mouseState,
    gridSelection,
    rowMarkerOffset,
    fillHighlightRegion,
    fillPattern,
    setGridSelection,
    onCellClicked,
    getMangledCellContent,
    getCellRenderer,
    cellActivationBehavior,
    themeForCell,
    mangledOnCellsEdited,
    onCellActivated,
    reselect,
    onCellContextMenu,
    onHeaderContextMenu,
    onGroupHeaderContextMenu,
    handleSelect,
    onGroupHeaderClicked,
    onHeaderClicked,
    normalSizeColumn,
    handleGroupHeaderSelection
  ]);
  const onMouseMoveImpl = React20.useCallback((args) => {
    const a = {
      ...args,
      location: [args.location[0] - rowMarkerOffset, args.location[1]]
    };
    onMouseMove?.(a);
    if (mouseState !== void 0 && args.buttons === 0) {
      setMouseState(void 0);
      setFillHighlightRegion(void 0);
      setScrollDir(void 0);
      isActivelyDraggingHeader.current = false;
    }
    setScrollDir((cv) => {
      if (isActivelyDraggingHeader.current)
        return [args.scrollEdge[0], 0];
      if (args.scrollEdge[0] === cv?.[0] && args.scrollEdge[1] === cv[1])
        return cv;
      return mouseState === void 0 || (mouseDownData.current?.location[0] ?? 0) < rowMarkerOffset ? void 0 : args.scrollEdge;
    });
  }, [mouseState, onMouseMove, rowMarkerOffset]);
  const onHeaderMenuClickInner = React20.useCallback((col, screenPosition) => {
    onHeaderMenuClick?.(col - rowMarkerOffset, screenPosition);
  }, [onHeaderMenuClick, rowMarkerOffset]);
  const currentCell = gridSelection?.current?.cell;
  const onVisibleRegionChangedImpl = React20.useCallback((region, clientWidth, clientHeight, rightElWidth, tx, ty) => {
    hasJustScrolled.current = false;
    let selected = currentCell;
    if (selected !== void 0) {
      selected = [selected[0] - rowMarkerOffset, selected[1]];
    }
    const freezeRegion = freezeColumns === 0 ? void 0 : {
      x: 0,
      y: region.y,
      width: freezeColumns,
      height: region.height
    };
    const freezeRegions = [];
    if (freezeRegion !== void 0)
      freezeRegions.push(freezeRegion);
    if (freezeTrailingRows > 0) {
      freezeRegions.push({
        x: region.x - rowMarkerOffset,
        y: rows - freezeTrailingRows,
        width: region.width,
        height: freezeTrailingRows
      });
      if (freezeColumns > 0) {
        freezeRegions.push({
          x: 0,
          y: rows - freezeTrailingRows,
          width: freezeColumns,
          height: freezeTrailingRows
        });
      }
    }
    const newRegion = {
      x: region.x - rowMarkerOffset,
      y: region.y,
      width: region.width,
      height: showTrailingBlankRow && region.y + region.height >= rows ? region.height - 1 : region.height,
      tx,
      ty,
      extras: {
        selected,
        freezeRegion,
        freezeRegions
      }
    };
    visibleRegionRef.current = newRegion;
    setVisibleRegion(newRegion);
    setClientSize([clientWidth, clientHeight, rightElWidth]);
    onVisibleRegionChanged?.(newRegion, newRegion.tx, newRegion.ty, newRegion.extras);
  }, [
    currentCell,
    rowMarkerOffset,
    showTrailingBlankRow,
    rows,
    freezeColumns,
    freezeTrailingRows,
    setVisibleRegion,
    onVisibleRegionChanged
  ]);
  const onColumnMovedImpl = whenDefined(onColumnMoved, React20.useCallback((startIndex, endIndex) => {
    onColumnMoved?.(startIndex - rowMarkerOffset, endIndex - rowMarkerOffset);
    if (columnSelect !== "none") {
      setSelectedColumns(CompactSelection.fromSingleSelection(endIndex), void 0, true);
    }
  }, [columnSelect, onColumnMoved, rowMarkerOffset, setSelectedColumns]));
  const isActivelyDragging = React20.useRef(false);
  const onDragStartImpl = React20.useCallback((args) => {
    if (args.location[0] === 0 && rowMarkerOffset > 0) {
      args.preventDefault();
      return;
    }
    onDragStart?.({
      ...args,
      location: [args.location[0] - rowMarkerOffset, args.location[1]]
    });
    if (!args.defaultPrevented()) {
      isActivelyDragging.current = true;
    }
    setMouseState(void 0);
  }, [onDragStart, rowMarkerOffset]);
  const onDragEnd = React20.useCallback(() => {
    isActivelyDragging.current = false;
  }, []);
  const hoveredRef = React20.useRef();
  const onItemHoveredImpl = React20.useCallback((args) => {
    if (mouseEventArgsAreEqual(args, hoveredRef.current))
      return;
    hoveredRef.current = args;
    if (mouseDownData?.current?.button !== void 0 && mouseDownData.current.button >= 1)
      return;
    if (args.buttons !== 0 && mouseState !== void 0 && mouseDownData.current?.location[0] === 0 && args.location[0] === 0 && rowMarkerOffset === 1 && rowSelect === "multi" && mouseState.previousSelection && !mouseState.previousSelection.rows.hasIndex(mouseDownData.current.location[1]) && gridSelection.rows.hasIndex(mouseDownData.current.location[1])) {
      const start = Math.min(mouseDownData.current.location[1], args.location[1]);
      const end = Math.max(mouseDownData.current.location[1], args.location[1]) + 1;
      setSelectedRows(CompactSelection.fromSingleSelection([start, end]), void 0, false);
    }
    if (args.buttons !== 0 && mouseState !== void 0 && gridSelection.current !== void 0 && !isActivelyDragging.current && !isActivelyDraggingHeader.current && (rangeSelect === "rect" || rangeSelect === "multi-rect")) {
      const [selectedCol, selectedRow] = gridSelection.current.cell;
      let [col, row] = args.location;
      if (row < 0) {
        row = visibleRegionRef.current.y;
      }
      if (mouseState.fillHandle === true && mouseState.previousSelection?.current !== void 0) {
        const prevRange = mouseState.previousSelection.current.range;
        row = Math.min(row, showTrailingBlankRow ? rows - 1 : rows);
        const rect = getClosestRect(prevRange, col, row, allowedFillDirections);
        setFillHighlightRegion(rect);
      } else {
        const startedFromLastStickyRow = showTrailingBlankRow && selectedRow === rows;
        if (startedFromLastStickyRow)
          return;
        const landedOnLastStickyRow = showTrailingBlankRow && row === rows;
        if (landedOnLastStickyRow) {
          if (args.kind === outOfBoundsKind)
            row--;
          else
            return;
        }
        col = Math.max(col, rowMarkerOffset);
        const deltaX = col - selectedCol;
        const deltaY = row - selectedRow;
        const newRange = {
          x: deltaX >= 0 ? selectedCol : col,
          y: deltaY >= 0 ? selectedRow : row,
          width: Math.abs(deltaX) + 1,
          height: Math.abs(deltaY) + 1
        };
        setCurrent({
          ...gridSelection.current,
          range: newRange
        }, true, false, "drag");
      }
    }
    onItemHovered?.({ ...args, location: [args.location[0] - rowMarkerOffset, args.location[1]] });
  }, [
    allowedFillDirections,
    mouseState,
    rowMarkerOffset,
    rowSelect,
    gridSelection,
    rangeSelect,
    onItemHovered,
    setSelectedRows,
    showTrailingBlankRow,
    rows,
    setCurrent
  ]);
  const adjustSelectionOnScroll = React20.useCallback(() => {
    const args = hoveredRef.current;
    if (args === void 0)
      return;
    const [xDir, yDir] = args.scrollEdge;
    let [col, row] = args.location;
    const visible = visibleRegionRef.current;
    if (xDir === -1) {
      col = visible.extras?.freezeRegion?.x ?? visible.x;
    } else if (xDir === 1) {
      col = visible.x + visible.width;
    }
    if (yDir === -1) {
      row = Math.max(0, visible.y);
    } else if (yDir === 1) {
      row = Math.min(rows - 1, visible.y + visible.height);
    }
    col = (0, import_clamp4.default)(col, 0, mangledCols.length - 1);
    row = (0, import_clamp4.default)(row, 0, rows - 1);
    onItemHoveredImpl({
      ...args,
      location: [col, row]
    });
  }, [mangledCols.length, onItemHoveredImpl, rows]);
  useAutoscroll(scrollDir, scrollRef, adjustSelectionOnScroll);
  const adjustSelection = React20.useCallback((direction2) => {
    if (gridSelection.current === void 0)
      return;
    const [x2, y2] = direction2;
    const [col, row] = gridSelection.current.cell;
    const old = gridSelection.current.range;
    let left = old.x;
    let right = old.x + old.width;
    let top = old.y;
    let bottom = old.y + old.height;
    if (y2 !== 0) {
      switch (y2) {
        case 2: {
          bottom = rows;
          top = row;
          scrollTo(0, bottom, "vertical");
          break;
        }
        case -2: {
          top = 0;
          bottom = row + 1;
          scrollTo(0, top, "vertical");
          break;
        }
        case 1: {
          if (top < row) {
            top++;
            scrollTo(0, top, "vertical");
          } else {
            bottom = Math.min(rows, bottom + 1);
            scrollTo(0, bottom, "vertical");
          }
          break;
        }
        case -1: {
          if (bottom > row + 1) {
            bottom--;
            scrollTo(0, bottom, "vertical");
          } else {
            top = Math.max(0, top - 1);
            scrollTo(0, top, "vertical");
          }
          break;
        }
        default: {
          assertNever(y2);
        }
      }
    }
    if (x2 !== 0) {
      if (x2 === 2) {
        right = mangledCols.length;
        left = col;
        scrollTo(right - 1 - rowMarkerOffset, 0, "horizontal");
      } else if (x2 === -2) {
        left = rowMarkerOffset;
        right = col + 1;
        scrollTo(left - rowMarkerOffset, 0, "horizontal");
      } else {
        let disallowed = [];
        if (getCellsForSelection !== void 0) {
          const cells = getCellsForSelection({
            x: left,
            y: top,
            width: right - left - rowMarkerOffset,
            height: bottom - top
          }, abortControllerRef.current.signal);
          if (typeof cells === "object") {
            disallowed = getSpanStops(cells);
          }
        }
        if (x2 === 1) {
          let done = false;
          if (left < col) {
            if (disallowed.length > 0) {
              const target = (0, import_range2.default)(left + 1, col + 1).find((n) => !disallowed.includes(n - rowMarkerOffset));
              if (target !== void 0) {
                left = target;
                done = true;
              }
            } else {
              left++;
              done = true;
            }
            if (done)
              scrollTo(left, 0, "horizontal");
          }
          if (!done) {
            right = Math.min(mangledCols.length, right + 1);
            scrollTo(right - 1 - rowMarkerOffset, 0, "horizontal");
          }
        } else if (x2 === -1) {
          let done = false;
          if (right > col + 1) {
            if (disallowed.length > 0) {
              const target = (0, import_range2.default)(right - 1, col, -1).find((n) => !disallowed.includes(n - rowMarkerOffset));
              if (target !== void 0) {
                right = target;
                done = true;
              }
            } else {
              right--;
              done = true;
            }
            if (done)
              scrollTo(right - rowMarkerOffset, 0, "horizontal");
          }
          if (!done) {
            left = Math.max(rowMarkerOffset, left - 1);
            scrollTo(left - rowMarkerOffset, 0, "horizontal");
          }
        } else {
          assertNever(x2);
        }
      }
    }
    setCurrent({
      cell: gridSelection.current.cell,
      range: {
        x: left,
        y: top,
        width: right - left,
        height: bottom - top
      }
    }, true, false, "keyboard-select");
  }, [getCellsForSelection, gridSelection, mangledCols.length, rowMarkerOffset, rows, scrollTo, setCurrent]);
  const updateSelectedCell = React20.useCallback((col, row, fromEditingTrailingRow, freeMove) => {
    const rowMax = mangledRows - (fromEditingTrailingRow ? 0 : 1);
    col = (0, import_clamp4.default)(col, rowMarkerOffset, columns.length - 1 + rowMarkerOffset);
    row = (0, import_clamp4.default)(row, 0, rowMax);
    if (col === currentCell?.[0] && row === currentCell?.[1])
      return false;
    if (freeMove && gridSelection.current !== void 0) {
      const newStack = [...gridSelection.current.rangeStack];
      if (gridSelection.current.range.width > 1 || gridSelection.current.range.height > 1) {
        newStack.push(gridSelection.current.range);
      }
      setGridSelection({
        ...gridSelection,
        current: {
          cell: [col, row],
          range: { x: col, y: row, width: 1, height: 1 },
          rangeStack: newStack
        }
      }, true);
    } else {
      setCurrent({
        cell: [col, row],
        range: { x: col, y: row, width: 1, height: 1 }
      }, true, false, "keyboard-nav");
    }
    if (lastSent.current !== void 0 && lastSent.current[0] === col && lastSent.current[1] === row) {
      lastSent.current = void 0;
    }
    scrollTo(col - rowMarkerOffset, row);
    return true;
  }, [
    mangledRows,
    rowMarkerOffset,
    columns.length,
    currentCell,
    gridSelection,
    scrollTo,
    setGridSelection,
    setCurrent
  ]);
  const onFinishEditing = React20.useCallback((newValue, movement) => {
    if (overlay?.cell !== void 0 && newValue !== void 0 && isEditableGridCell(newValue)) {
      mangledOnCellsEdited([{ location: overlay.cell, value: newValue }]);
      window.requestAnimationFrame(() => {
        gridRef.current?.damage([
          {
            cell: overlay.cell
          }
        ]);
      });
    }
    focus(true);
    setOverlay(void 0);
    const [movX, movY] = movement;
    if (gridSelection.current !== void 0 && (movX !== 0 || movY !== 0)) {
      const isEditingTrailingRow = gridSelection.current.cell[1] === mangledRows - 1 && newValue !== void 0;
      updateSelectedCell((0, import_clamp4.default)(gridSelection.current.cell[0] + movX, 0, mangledCols.length - 1), (0, import_clamp4.default)(gridSelection.current.cell[1] + movY, 0, mangledRows - 1), isEditingTrailingRow, false);
    }
    onFinishedEditing?.(newValue, movement);
  }, [
    overlay?.cell,
    focus,
    gridSelection,
    onFinishedEditing,
    mangledOnCellsEdited,
    mangledRows,
    updateSelectedCell,
    mangledCols.length
  ]);
  const overlayID = React20.useMemo(() => {
    return `gdg-overlay-${idCounter++}`;
  }, []);
  const deleteRange = React20.useCallback((r) => {
    focus();
    const editList = [];
    for (let x2 = r.x; x2 < r.x + r.width; x2++) {
      for (let y2 = r.y; y2 < r.y + r.height; y2++) {
        const cellValue = getCellContent([x2 - rowMarkerOffset, y2]);
        if (!cellValue.allowOverlay && cellValue.kind !== GridCellKind.Boolean)
          continue;
        let newVal = void 0;
        if (cellValue.kind === GridCellKind.Custom) {
          const toDelete = getCellRenderer(cellValue);
          const editor = toDelete?.provideEditor?.(cellValue);
          if (toDelete?.onDelete !== void 0) {
            newVal = toDelete.onDelete(cellValue);
          } else if (isObjectEditorCallbackResult(editor)) {
            newVal = editor?.deletedValue?.(cellValue);
          }
        } else if (isEditableGridCell(cellValue) && cellValue.allowOverlay || cellValue.kind === GridCellKind.Boolean) {
          const toDelete = getCellRenderer(cellValue);
          newVal = toDelete?.onDelete?.(cellValue);
        }
        if (newVal !== void 0 && !isInnerOnlyCell(newVal) && isEditableGridCell(newVal)) {
          editList.push({ location: [x2, y2], value: newVal });
        }
      }
    }
    mangledOnCellsEdited(editList);
    gridRef.current?.damage(editList.map((x2) => ({ cell: x2.location })));
  }, [focus, getCellContent, getCellRenderer, mangledOnCellsEdited, rowMarkerOffset]);
  const overlayOpen = overlay !== void 0;
  const handleFixedKeybindings = React20.useCallback((event) => {
    const cancel = () => {
      event.stopPropagation();
      event.preventDefault();
    };
    const details = {
      didMatch: false
    };
    const { bounds } = event;
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const keys = keybindings;
    if (!overlayOpen && isHotkey(keys.clear, event, details)) {
      setGridSelection(emptyGridSelection, false);
      onSelectionCleared?.();
    } else if (!overlayOpen && isHotkey(keys.selectAll, event, details)) {
      setGridSelection({
        columns: CompactSelection.empty(),
        rows: CompactSelection.empty(),
        current: {
          cell: gridSelection.current?.cell ?? [rowMarkerOffset, 0],
          range: {
            x: rowMarkerOffset,
            y: 0,
            width: columnsIn.length,
            height: rows
          },
          rangeStack: []
        }
      }, false);
    } else if (isHotkey(keys.search, event, details)) {
      searchInputRef?.current?.focus({ preventScroll: true });
      setShowSearchInner(true);
    } else if (isHotkey(keys.delete, event, details)) {
      const callbackResult = onDelete?.(gridSelection) ?? true;
      if (callbackResult !== false) {
        const toDelete = callbackResult === true ? gridSelection : callbackResult;
        if (toDelete.current !== void 0) {
          deleteRange(toDelete.current.range);
          for (const r of toDelete.current.rangeStack) {
            deleteRange(r);
          }
        }
        for (const r of toDelete.rows) {
          deleteRange({
            x: rowMarkerOffset,
            y: r,
            width: columnsIn.length,
            height: 1
          });
        }
        for (const col2 of toDelete.columns) {
          deleteRange({
            x: col2,
            y: 0,
            width: 1,
            height: rows
          });
        }
      }
    }
    if (details.didMatch) {
      cancel();
      return true;
    }
    if (gridSelection.current === void 0)
      return false;
    let [col, row] = gridSelection.current.cell;
    let freeMove = false;
    let cancelOnlyOnMove = false;
    if (isHotkey(keys.scrollToSelectedCell, event, details)) {
      scrollToRef.current(col - rowMarkerOffset, row);
    } else if (columnSelect !== "none" && isHotkey(keys.selectColumn, event, details)) {
      if (selectedColumns.hasIndex(col)) {
        setSelectedColumns(selectedColumns.remove(col), void 0, true);
      } else {
        if (columnSelect === "single") {
          setSelectedColumns(CompactSelection.fromSingleSelection(col), void 0, true);
        } else {
          setSelectedColumns(void 0, col, true);
        }
      }
    } else if (rowSelect !== "none" && isHotkey(keys.selectRow, event, details)) {
      if (selectedRows.hasIndex(row)) {
        setSelectedRows(selectedRows.remove(row), void 0, true);
      } else {
        if (rowSelect === "single") {
          setSelectedRows(CompactSelection.fromSingleSelection(row), void 0, true);
        } else {
          setSelectedRows(void 0, row, true);
        }
      }
    } else if (!overlayOpen && bounds !== void 0 && isHotkey(keys.activateCell, event, details)) {
      if (row === rows && showTrailingBlankRow) {
        window.setTimeout(() => {
          const customTargetColumn = getCustomNewRowTargetColumn(col);
          void appendRow(customTargetColumn ?? col);
        }, 0);
      } else {
        onCellActivated?.([col - rowMarkerOffset, row]);
        reselect(bounds, true);
      }
    } else if (gridSelection.current.range.height > 1 && isHotkey(keys.downFill, event, details)) {
      fillDown();
    } else if (gridSelection.current.range.width > 1 && isHotkey(keys.rightFill, event, details)) {
      fillRight();
    } else if (isHotkey(keys.goToNextPage, event, details)) {
      row += Math.max(1, visibleRegionRef.current.height - 4);
    } else if (isHotkey(keys.goToPreviousPage, event, details)) {
      row -= Math.max(1, visibleRegionRef.current.height - 4);
    } else if (isHotkey(keys.goToFirstCell, event, details)) {
      setOverlay(void 0);
      row = 0;
      col = 0;
    } else if (isHotkey(keys.goToLastCell, event, details)) {
      setOverlay(void 0);
      row = Number.MAX_SAFE_INTEGER;
      col = Number.MAX_SAFE_INTEGER;
    } else if (isHotkey(keys.selectToFirstCell, event, details)) {
      setOverlay(void 0);
      adjustSelection([-2, -2]);
    } else if (isHotkey(keys.selectToLastCell, event, details)) {
      setOverlay(void 0);
      adjustSelection([2, 2]);
    } else if (!overlayOpen) {
      if (isHotkey(keys.goDownCell, event, details)) {
        row += 1;
      } else if (isHotkey(keys.goUpCell, event, details)) {
        row -= 1;
      } else if (isHotkey(keys.goRightCell, event, details)) {
        col += 1;
      } else if (isHotkey(keys.goLeftCell, event, details)) {
        col -= 1;
      } else if (isHotkey(keys.goDownCellRetainSelection, event, details)) {
        row += 1;
        freeMove = true;
      } else if (isHotkey(keys.goUpCellRetainSelection, event, details)) {
        row -= 1;
        freeMove = true;
      } else if (isHotkey(keys.goRightCellRetainSelection, event, details)) {
        col += 1;
        freeMove = true;
      } else if (isHotkey(keys.goLeftCellRetainSelection, event, details)) {
        col -= 1;
        freeMove = true;
      } else if (isHotkey(keys.goToLastRow, event, details)) {
        row = rows - 1;
      } else if (isHotkey(keys.goToFirstRow, event, details)) {
        row = Number.MIN_SAFE_INTEGER;
      } else if (isHotkey(keys.goToLastColumn, event, details)) {
        col = Number.MAX_SAFE_INTEGER;
      } else if (isHotkey(keys.goToFirstColumn, event, details)) {
        col = Number.MIN_SAFE_INTEGER;
      } else if (rangeSelect === "rect" || rangeSelect === "multi-rect") {
        if (isHotkey(keys.selectGrowDown, event, details)) {
          adjustSelection([0, 1]);
        } else if (isHotkey(keys.selectGrowUp, event, details)) {
          adjustSelection([0, -1]);
        } else if (isHotkey(keys.selectGrowRight, event, details)) {
          adjustSelection([1, 0]);
        } else if (isHotkey(keys.selectGrowLeft, event, details)) {
          adjustSelection([-1, 0]);
        } else if (isHotkey(keys.selectToLastRow, event, details)) {
          adjustSelection([0, 2]);
        } else if (isHotkey(keys.selectToFirstRow, event, details)) {
          adjustSelection([0, -2]);
        } else if (isHotkey(keys.selectToLastColumn, event, details)) {
          adjustSelection([2, 0]);
        } else if (isHotkey(keys.selectToFirstColumn, event, details)) {
          adjustSelection([-2, 0]);
        }
      }
      cancelOnlyOnMove = details.didMatch;
    } else {
      if (isHotkey(keys.closeOverlay, event, details)) {
        setOverlay(void 0);
      }
      if (isHotkey(keys.acceptOverlayDown, event, details)) {
        setOverlay(void 0);
        row++;
      }
      if (isHotkey(keys.acceptOverlayUp, event, details)) {
        setOverlay(void 0);
        row--;
      }
      if (isHotkey(keys.acceptOverlayLeft, event, details)) {
        setOverlay(void 0);
        col--;
      }
      if (isHotkey(keys.acceptOverlayRight, event, details)) {
        setOverlay(void 0);
        col++;
      }
    }
    const moved = updateSelectedCell(col, row, false, freeMove);
    const didMatch = details.didMatch;
    if (didMatch && (moved || !cancelOnlyOnMove || trapFocus)) {
      cancel();
    }
    return didMatch;
  }, [
    overlayOpen,
    gridSelection,
    keybindings,
    columnSelect,
    rowSelect,
    rangeSelect,
    rowMarkerOffset,
    rows,
    updateSelectedCell,
    setGridSelection,
    onSelectionCleared,
    columnsIn.length,
    onDelete,
    trapFocus,
    deleteRange,
    setSelectedColumns,
    setSelectedRows,
    showTrailingBlankRow,
    getCustomNewRowTargetColumn,
    appendRow,
    onCellActivated,
    reselect,
    fillDown,
    fillRight,
    adjustSelection
  ]);
  const onKeyDown = React20.useCallback((event) => {
    let cancelled = false;
    if (onKeyDownIn !== void 0) {
      onKeyDownIn({
        ...event,
        cancel: () => {
          cancelled = true;
        }
      });
    }
    if (cancelled)
      return;
    if (handleFixedKeybindings(event))
      return;
    if (gridSelection.current === void 0)
      return;
    const [col, row] = gridSelection.current.cell;
    const vr = visibleRegionRef.current;
    if (editOnType && !event.metaKey && !event.ctrlKey && gridSelection.current !== void 0 && event.key.length === 1 && /[ -~]/g.test(event.key) && event.bounds !== void 0 && isReadWriteCell(getCellContent([col - rowMarkerOffset, Math.max(0, Math.min(row, rows - 1))]))) {
      if ((!showTrailingBlankRow || row !== rows) && (vr.y > row || row > vr.y + vr.height || vr.x > col || col > vr.x + vr.width)) {
        return;
      }
      reselect(event.bounds, true, event.key);
      event.stopPropagation();
      event.preventDefault();
    }
  }, [
    editOnType,
    onKeyDownIn,
    handleFixedKeybindings,
    gridSelection,
    getCellContent,
    rowMarkerOffset,
    rows,
    showTrailingBlankRow,
    reselect
  ]);
  const onContextMenu = React20.useCallback((args, preventDefault) => {
    const adjustedCol = args.location[0] - rowMarkerOffset;
    if (args.kind === "header") {
      onHeaderContextMenu?.(adjustedCol, { ...args, preventDefault });
    }
    if (args.kind === groupHeaderKind) {
      if (adjustedCol < 0) {
        return;
      }
      onGroupHeaderContextMenu?.(adjustedCol, { ...args, preventDefault });
    }
    if (args.kind === "cell") {
      const [col, row] = args.location;
      onCellContextMenu?.([adjustedCol, row], {
        ...args,
        preventDefault
      });
      if (!gridSelectionHasItem(gridSelection, args.location)) {
        updateSelectedCell(col, row, false, false);
      }
    }
  }, [
    gridSelection,
    onCellContextMenu,
    onGroupHeaderContextMenu,
    onHeaderContextMenu,
    rowMarkerOffset,
    updateSelectedCell
  ]);
  const onPasteInternal = React20.useCallback(async (e) => {
    if (!keybindings.paste)
      return;
    function pasteToCell(inner, target2, rawValue, formatted) {
      const stringifiedRawValue = typeof rawValue === "object" ? rawValue?.join("\n") ?? "" : rawValue?.toString() ?? "";
      if (!isInnerOnlyCell(inner) && isReadWriteCell(inner) && inner.readonly !== true) {
        const coerced = coercePasteValue?.(stringifiedRawValue, inner);
        if (coerced !== void 0 && isEditableGridCell(coerced)) {
          if (coerced.kind !== inner.kind) {
            console.warn("Coercion should not change cell kind.");
          }
          return {
            location: target2,
            value: coerced
          };
        }
        const r = getCellRenderer(inner);
        if (r === void 0)
          return void 0;
        if (r.kind === GridCellKind.Custom) {
          assert(inner.kind === GridCellKind.Custom);
          const newVal = r.onPaste?.(stringifiedRawValue, inner.data);
          if (newVal === void 0)
            return void 0;
          return {
            location: target2,
            value: {
              ...inner,
              data: newVal
            }
          };
        } else {
          const newVal = r.onPaste?.(stringifiedRawValue, inner, {
            formatted,
            formattedString: typeof formatted === "string" ? formatted : formatted?.join("\n"),
            rawValue
          });
          if (newVal === void 0)
            return void 0;
          assert(newVal.kind === inner.kind);
          return {
            location: target2,
            value: newVal
          };
        }
      }
      return void 0;
    }
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const focused = scrollRef.current?.contains(document.activeElement) === true || canvasRef.current?.contains(document.activeElement) === true;
    let target;
    if (gridSelection.current !== void 0) {
      target = [gridSelection.current.range.x, gridSelection.current.range.y];
    } else if (selectedColumns.length === 1) {
      target = [selectedColumns.first() ?? 0, 0];
    } else if (selectedRows.length === 1) {
      target = [rowMarkerOffset, selectedRows.first() ?? 0];
    }
    if (focused && target !== void 0) {
      let data;
      let text;
      const textPlain = "text/plain";
      const textHtml = "text/html";
      if (navigator.clipboard.read !== void 0) {
        const clipboardContent = await navigator.clipboard.read();
        for (const item of clipboardContent) {
          if (item.types.includes(textHtml)) {
            const htmlBlob = await item.getType(textHtml);
            const html = await htmlBlob.text();
            const decoded = decodeHTML(html);
            if (decoded !== void 0) {
              data = decoded;
              break;
            }
          }
          if (item.types.includes(textPlain)) {
            text = await (await item.getType(textPlain)).text();
          }
        }
      } else if (navigator.clipboard.readText !== void 0) {
        text = await navigator.clipboard.readText();
      } else if (e !== void 0 && e?.clipboardData !== null) {
        if (e.clipboardData.types.includes(textHtml)) {
          const html = e.clipboardData.getData(textHtml);
          data = decodeHTML(html);
        }
        if (data === void 0 && e.clipboardData.types.includes(textPlain)) {
          text = e.clipboardData.getData(textPlain);
        }
      } else {
        return;
      }
      const [targetCol, targetRow] = target;
      const editList = [];
      do {
        if (onPaste === void 0) {
          const cellData = getMangledCellContent(target);
          const rawValue = text ?? data?.map((r) => r.map((cb) => cb.rawValue).join("	")).join("	") ?? "";
          const newVal = pasteToCell(cellData, target, rawValue, void 0);
          if (newVal !== void 0) {
            editList.push(newVal);
          }
          break;
        }
        if (data === void 0) {
          if (text === void 0)
            return;
          data = unquote(text);
        }
        if (onPaste === false || typeof onPaste === "function" && onPaste?.([target[0] - rowMarkerOffset, target[1]], data.map((r) => r.map((cb) => cb.rawValue?.toString() ?? ""))) !== true) {
          return;
        }
        for (const [row, dataRow] of data.entries()) {
          if (row + targetRow >= rows)
            break;
          for (const [col, dataItem] of dataRow.entries()) {
            const index = [col + targetCol, row + targetRow];
            const [writeCol, writeRow] = index;
            if (writeCol >= mangledCols.length)
              continue;
            if (writeRow >= mangledRows)
              continue;
            const cellData = getMangledCellContent(index);
            const newVal = pasteToCell(cellData, index, dataItem.rawValue, dataItem.formatted);
            if (newVal !== void 0) {
              editList.push(newVal);
            }
          }
        }
      } while (false);
      mangledOnCellsEdited(editList);
      gridRef.current?.damage(editList.map((c) => ({
        cell: c.location
      })));
    }
  }, [
    coercePasteValue,
    getCellRenderer,
    getMangledCellContent,
    gridSelection,
    keybindings.paste,
    mangledCols.length,
    mangledOnCellsEdited,
    mangledRows,
    onPaste,
    rowMarkerOffset,
    rows
  ]);
  useEventListener("paste", onPasteInternal, safeWindow, false, true);
  const onCopy = React20.useCallback(async (e, ignoreFocus) => {
    if (!keybindings.copy)
      return;
    const focused = ignoreFocus === true || scrollRef.current?.contains(document.activeElement) === true || canvasRef.current?.contains(document.activeElement) === true;
    const selectedColumns = gridSelection.columns;
    const selectedRows = gridSelection.rows;
    const copyToClipboardWithHeaders = (cells, columnIndexes) => {
      if (!copyHeaders) {
        copyToClipboard(cells, columnIndexes, e);
      } else {
        const headers = columnIndexes.map((index) => ({
          kind: GridCellKind.Text,
          data: columnsIn[index].title,
          displayData: columnsIn[index].title,
          allowOverlay: false
        }));
        copyToClipboard([headers, ...cells], columnIndexes, e);
      }
    };
    if (focused && getCellsForSelection !== void 0) {
      if (gridSelection.current !== void 0) {
        let thunk = getCellsForSelection(gridSelection.current.range, abortControllerRef.current.signal);
        if (typeof thunk !== "object") {
          thunk = await thunk();
        }
        copyToClipboardWithHeaders(thunk, (0, import_range2.default)(gridSelection.current.range.x - rowMarkerOffset, gridSelection.current.range.x + gridSelection.current.range.width - rowMarkerOffset));
      } else if (selectedRows !== void 0 && selectedRows.length > 0) {
        const toCopy = [...selectedRows];
        const cells = toCopy.map((rowIndex) => {
          const thunk = getCellsForSelection({
            x: rowMarkerOffset,
            y: rowIndex,
            width: columnsIn.length,
            height: 1
          }, abortControllerRef.current.signal);
          if (typeof thunk === "object") {
            return thunk[0];
          }
          return thunk().then((v3) => v3[0]);
        });
        if (cells.some((x2) => x2 instanceof Promise)) {
          const settled = await Promise.all(cells);
          copyToClipboardWithHeaders(settled, (0, import_range2.default)(columnsIn.length));
        } else {
          copyToClipboardWithHeaders(cells, (0, import_range2.default)(columnsIn.length));
        }
      } else if (selectedColumns.length > 0) {
        const results = [];
        const cols = [];
        for (const col of selectedColumns) {
          let thunk = getCellsForSelection({
            x: col,
            y: 0,
            width: 1,
            height: rows
          }, abortControllerRef.current.signal);
          if (typeof thunk !== "object") {
            thunk = await thunk();
          }
          results.push(thunk);
          cols.push(col - rowMarkerOffset);
        }
        if (results.length === 1) {
          copyToClipboardWithHeaders(results[0], cols);
        } else {
          const toCopy = results.reduce((pv, cv) => pv.map((row, index) => [...row, ...cv[index]]));
          copyToClipboardWithHeaders(toCopy, cols);
        }
      }
    }
  }, [columnsIn, getCellsForSelection, gridSelection, keybindings.copy, rowMarkerOffset, rows, copyHeaders]);
  useEventListener("copy", onCopy, safeWindow, false, false);
  const onCut = React20.useCallback(async (e) => {
    if (!keybindings.cut)
      return;
    const focused = scrollRef.current?.contains(document.activeElement) === true || canvasRef.current?.contains(document.activeElement) === true;
    if (!focused)
      return;
    await onCopy(e);
    if (gridSelection.current !== void 0) {
      let effectiveSelection = {
        current: {
          cell: gridSelection.current.cell,
          range: gridSelection.current.range,
          rangeStack: []
        },
        rows: CompactSelection.empty(),
        columns: CompactSelection.empty()
      };
      const onDeleteResult = onDelete?.(effectiveSelection);
      if (onDeleteResult === false)
        return;
      effectiveSelection = onDeleteResult === true ? effectiveSelection : onDeleteResult;
      if (effectiveSelection.current === void 0)
        return;
      deleteRange(effectiveSelection.current.range);
    }
  }, [deleteRange, gridSelection, keybindings.cut, onCopy, onDelete]);
  useEventListener("cut", onCut, safeWindow, false, false);
  const onSearchResultsChanged = React20.useCallback((results, navIndex) => {
    if (onSearchResultsChangedIn !== void 0) {
      if (rowMarkerOffset !== 0) {
        results = results.map((item) => [item[0] - rowMarkerOffset, item[1]]);
      }
      onSearchResultsChangedIn(results, navIndex);
      return;
    }
    if (results.length === 0 || navIndex === -1)
      return;
    const [col, row] = results[navIndex];
    if (lastSent.current !== void 0 && lastSent.current[0] === col && lastSent.current[1] === row) {
      return;
    }
    lastSent.current = [col, row];
    updateSelectedCell(col, row, false, false);
  }, [onSearchResultsChangedIn, rowMarkerOffset, updateSelectedCell]);
  const [outCol, outRow] = gridSelectionOuter?.current?.cell ?? [];
  const scrollToRef = React20.useRef(scrollTo);
  scrollToRef.current = scrollTo;
  React20.useLayoutEffect(() => {
    if (!hasJustScrolled.current && outCol !== void 0 && outRow !== void 0 && (outCol !== expectedExternalGridSelection.current?.current?.cell[0] || outRow !== expectedExternalGridSelection.current?.current?.cell[1])) {
      scrollToRef.current(outCol, outRow);
    }
    hasJustScrolled.current = false;
  }, [outCol, outRow]);
  const selectionOutOfBounds = gridSelection.current !== void 0 && (gridSelection.current.cell[0] >= mangledCols.length || gridSelection.current.cell[1] >= mangledRows);
  React20.useLayoutEffect(() => {
    if (selectionOutOfBounds) {
      setGridSelection(emptyGridSelection, false);
    }
  }, [selectionOutOfBounds, setGridSelection]);
  const disabledRows = React20.useMemo(() => {
    if (showTrailingBlankRow === true && trailingRowOptions?.tint === true) {
      return CompactSelection.fromSingleSelection(mangledRows - 1);
    }
    return CompactSelection.empty();
  }, [mangledRows, showTrailingBlankRow, trailingRowOptions?.tint]);
  const mangledVerticalBorder = React20.useCallback((col) => {
    return typeof verticalBorder === "boolean" ? verticalBorder : verticalBorder?.(col - rowMarkerOffset) ?? true;
  }, [rowMarkerOffset, verticalBorder]);
  const renameGroupNode = React20.useMemo(() => {
    if (renameGroup === void 0 || canvasRef.current === null)
      return null;
    const { bounds, group } = renameGroup;
    const canvasBounds = canvasRef.current.getBoundingClientRect();
    return React20.createElement(GroupRename, { bounds, group, canvasBounds, onClose: () => setRenameGroup(void 0), onFinish: (newVal) => {
      setRenameGroup(void 0);
      onGroupHeaderRenamed?.(group, newVal);
    } });
  }, [onGroupHeaderRenamed, renameGroup]);
  const mangledFreezeColumns = Math.min(mangledCols.length, freezeColumns + (hasRowMarkers ? 1 : 0));
  React20.useImperativeHandle(forwardedRef, () => ({
    appendRow: (col, openOverlay) => appendRow(col + rowMarkerOffset, openOverlay),
    updateCells: (damageList) => {
      if (rowMarkerOffset !== 0) {
        damageList = damageList.map((x2) => ({ cell: [x2.cell[0] + rowMarkerOffset, x2.cell[1]] }));
      }
      return gridRef.current?.damage(damageList);
    },
    getBounds: (col, row) => {
      if (canvasRef?.current === null || scrollRef?.current === null) {
        return void 0;
      }
      if (col === void 0 && row === void 0) {
        const rect = canvasRef.current.getBoundingClientRect();
        const scale = rect.width / scrollRef.current.clientWidth;
        return {
          x: rect.x - scrollRef.current.scrollLeft * scale,
          y: rect.y - scrollRef.current.scrollTop * scale,
          width: scrollRef.current.scrollWidth * scale,
          height: scrollRef.current.scrollHeight * scale
        };
      }
      return gridRef.current?.getBounds((col ?? 0) + rowMarkerOffset, row);
    },
    focus: () => gridRef.current?.focus(),
    emit: async (e) => {
      switch (e) {
        case "delete":
          onKeyDown({
            bounds: void 0,
            cancel: () => void 0,
            stopPropagation: () => void 0,
            preventDefault: () => void 0,
            ctrlKey: false,
            key: "Delete",
            keyCode: 46,
            metaKey: false,
            shiftKey: false,
            altKey: false,
            rawEvent: void 0,
            location: void 0
          });
          break;
        case "fill-right":
          onKeyDown({
            bounds: void 0,
            cancel: () => void 0,
            stopPropagation: () => void 0,
            preventDefault: () => void 0,
            ctrlKey: true,
            key: "r",
            keyCode: 82,
            metaKey: false,
            shiftKey: false,
            altKey: false,
            rawEvent: void 0,
            location: void 0
          });
          break;
        case "fill-down":
          onKeyDown({
            bounds: void 0,
            cancel: () => void 0,
            stopPropagation: () => void 0,
            preventDefault: () => void 0,
            ctrlKey: true,
            key: "d",
            keyCode: 68,
            metaKey: false,
            shiftKey: false,
            altKey: false,
            rawEvent: void 0,
            location: void 0
          });
          break;
        case "copy":
          await onCopy(void 0, true);
          break;
        case "paste":
          await onPasteInternal();
          break;
      }
    },
    scrollTo,
    remeasureColumns: (cols) => {
      for (const col of cols) {
        void normalSizeColumn(col + rowMarkerOffset);
      }
    }
  }), [appendRow, normalSizeColumn, onCopy, onKeyDown, onPasteInternal, rowMarkerOffset, scrollTo]);
  const [selCol, selRow] = currentCell ?? [];
  const onCellFocused = React20.useCallback((cell) => {
    const [col, row] = cell;
    if (row === -1) {
      if (columnSelect !== "none") {
        setSelectedColumns(CompactSelection.fromSingleSelection(col), void 0, false);
        focus();
      }
      return;
    }
    if (selCol === col && selRow === row)
      return;
    setCurrent({
      cell,
      range: { x: col, y: row, width: 1, height: 1 }
    }, true, false, "keyboard-nav");
    scrollTo(col, row);
  }, [columnSelect, focus, scrollTo, selCol, selRow, setCurrent, setSelectedColumns]);
  const [isFocused, setIsFocused] = React20.useState(false);
  const setIsFocusedDebounced = React20.useRef((0, import_debounce2.default)((val) => {
    setIsFocused(val);
  }, 5));
  const onCanvasFocused = React20.useCallback(() => {
    setIsFocusedDebounced.current(true);
    if (gridSelection.current === void 0 && gridSelection.columns.length === 0 && gridSelection.rows.length === 0 && mouseState === void 0) {
      setCurrent({
        cell: [rowMarkerOffset, cellYOffset],
        range: {
          x: rowMarkerOffset,
          y: cellYOffset,
          width: 1,
          height: 1
        }
      }, true, false, "keyboard-select");
    }
  }, [cellYOffset, gridSelection, mouseState, rowMarkerOffset, setCurrent]);
  const onFocusOut = React20.useCallback(() => {
    setIsFocusedDebounced.current(false);
  }, []);
  const [idealWidth, idealHeight] = React20.useMemo(() => {
    let h;
    const scrollbarWidth = experimental?.scrollbarWidthOverride ?? getScrollBarWidth();
    const rowsCountWithTrailingRow = rows + (showTrailingBlankRow ? 1 : 0);
    if (typeof rowHeight === "number") {
      h = totalHeaderHeight + rowsCountWithTrailingRow * rowHeight;
    } else {
      let avg = 0;
      const toAverage = Math.min(rowsCountWithTrailingRow, 10);
      for (let i = 0; i < toAverage; i++) {
        avg += rowHeight(i);
      }
      avg = Math.floor(avg / toAverage);
      h = totalHeaderHeight + rowsCountWithTrailingRow * avg;
    }
    h += scrollbarWidth;
    const w3 = mangledCols.reduce((acc, x2) => x2.width + acc, 0) + scrollbarWidth;
    return [`${Math.min(1e5, w3)}px`, `${Math.min(1e5, h)}px`];
  }, [mangledCols, experimental?.scrollbarWidthOverride, rowHeight, rows, showTrailingBlankRow, totalHeaderHeight]);
  const cssStyle = React20.useMemo(() => {
    return makeCSSStyle(mergedTheme);
  }, [mergedTheme]);
  return React20.createElement(
    ThemeContext.Provider,
    { value: mergedTheme },
    React20.createElement(
      DataEditorContainer,
      { style: cssStyle, className, inWidth: width ?? idealWidth, inHeight: height ?? idealHeight },
      React20.createElement(data_grid_search_default, { fillHandle, drawFocusRing, experimental, fixedShadowX, fixedShadowY, getRowThemeOverride, headerIcons, imageWindowLoader, initialSize, isDraggable, onDragLeave, onRowMoved, overscrollX, overscrollY, preventDiagonalScrolling, rightElement, rightElementProps, smoothScrollX, smoothScrollY, className, enableGroups, onCanvasFocused, onCanvasBlur: onFocusOut, canvasRef, onContextMenu, theme: mergedTheme, cellXOffset, cellYOffset, accessibilityHeight: visibleRegion.height, onDragEnd, columns: mangledCols, nonGrowWidth, drawHeader: drawHeader2, onColumnProposeMove, drawCell: drawCell2, disabledRows, freezeColumns: mangledFreezeColumns, lockColumns: rowMarkerOffset, firstColAccessible: rowMarkerOffset === 0, getCellContent: getMangledCellContent, minColumnWidth, maxColumnWidth, searchInputRef, showSearch, onSearchClose, highlightRegions, getCellsForSelection, getGroupDetails: mangledGetGroupDetails, headerHeight, isFocused, groupHeaderHeight: enableGroups ? groupHeaderHeight : 0, freezeTrailingRows: freezeTrailingRows + (showTrailingBlankRow && trailingRowOptions?.sticky === true ? 1 : 0), hasAppendRow: showTrailingBlankRow, onColumnResize, onColumnResizeEnd, onColumnResizeStart, onCellFocused, onColumnMoved: onColumnMovedImpl, onDragStart: onDragStartImpl, onHeaderMenuClick: onHeaderMenuClickInner, onItemHovered: onItemHoveredImpl, isFilling: mouseState?.fillHandle === true, onMouseMove: onMouseMoveImpl, onKeyDown, onKeyUp: onKeyUpIn, onMouseDown, onMouseUp, onDragOverCell, onDrop, onSearchResultsChanged, onVisibleRegionChanged: onVisibleRegionChangedImpl, clientSize, rowHeight, searchResults, searchValue, onSearchValueChange, rows: mangledRows, scrollRef, selection: gridSelection, translateX: visibleRegion.tx, translateY: visibleRegion.ty, verticalBorder: mangledVerticalBorder, gridRef, getCellRenderer }),
      renameGroupNode,
      overlay !== void 0 && React20.createElement(
        React20.Suspense,
        { fallback: null },
        React20.createElement(DataGridOverlayEditor, { ...overlay, validateCell, bloom: editorBloom, id: overlayID, getCellRenderer, className: experimental?.isSubGrid === true ? "click-outside-ignore" : void 0, provideEditor, imageEditorOverride, onFinishEditing, markdownDivCreateNode, isOutsideClick })
      )
    )
  );
};
var DataEditor = React20.forwardRef(DataEditorImpl);

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/boolean-cell.js
var defaultCellMaxSize = 20;
var booleanCellRenderer = {
  getAccessibilityString: (c) => c.data?.toString() ?? "false",
  kind: GridCellKind.Boolean,
  needsHover: true,
  useLabel: false,
  needsHoverPosition: true,
  measure: () => 50,
  draw: (a) => drawBoolean(a, a.cell.data, booleanCellIsEditable(a.cell), a.cell.maxSize ?? defaultCellMaxSize),
  onDelete: (c) => ({
    ...c,
    data: false
  }),
  onClick: (e) => {
    const { cell, posX: pointerX, posY: pointerY, bounds, theme } = e;
    const { width, height, x: cellX, y: cellY } = bounds;
    const maxWidth = cell.maxSize ?? defaultCellMaxSize;
    const cellCenterY = Math.floor(bounds.y + height / 2);
    const checkBoxWidth = getSquareWidth(maxWidth, height, theme.cellVerticalPadding);
    const posX = getSquareXPosFromAlign(cell.contentAlign ?? "center", cellX, width, theme.cellHorizontalPadding, checkBoxWidth);
    const bb = getSquareBB(posX, cellCenterY, checkBoxWidth);
    const checkBoxClicked = pointIsWithinBB(cellX + pointerX, cellY + pointerY, bb);
    if (booleanCellIsEditable(cell) && checkBoxClicked) {
      return {
        ...cell,
        data: toggleBoolean(cell.data)
      };
    }
    return void 0;
  },
  onPaste: (toPaste, cell) => {
    let newVal = BooleanEmpty;
    if (toPaste.toLowerCase() === "true") {
      newVal = true;
    } else if (toPaste.toLowerCase() === "false") {
      newVal = false;
    } else if (toPaste.toLowerCase() === "indeterminate") {
      newVal = BooleanIndeterminate;
    }
    return newVal === cell.data ? void 0 : {
      ...cell,
      data: newVal
    };
  }
};
function drawBoolean(args, data, canEdit, maxSize) {
  if (!canEdit && data === BooleanEmpty) {
    return;
  }
  const { ctx, hoverAmount, theme, rect, highlighted, hoverX, hoverY, cell: { contentAlign } } = args;
  const { x: x2, y: y2, width: w3, height: h } = rect;
  const hoverEffect = 0.35;
  let alpha = canEdit ? 1 - hoverEffect + hoverEffect * hoverAmount : 0.4;
  if (data === BooleanEmpty) {
    alpha *= hoverAmount;
  }
  if (alpha === 0) {
    return;
  }
  ctx.globalAlpha = alpha;
  drawCheckbox(ctx, theme, data, x2, y2, w3, h, highlighted, hoverX, hoverY, maxSize, contentAlign);
  ctx.globalAlpha = 1;
}

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/bubble-cell.js
var React22 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/bubbles-overlay-editor.js
var React21 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/bubbles-overlay-editor-style.js
var BubblesOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "BubblesOverlayEditorStyle",
  class: "gdg-b1ygi5by",
  propsAsIs: false
});

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/bubbles-overlay-editor.js
var BubblesOverlayEditor = (p2) => {
  const { bubbles } = p2;
  return React21.createElement(
    BubblesOverlayEditorStyle,
    null,
    bubbles.map((b3, i) => React21.createElement("div", { key: i, className: "boe-bubble" }, b3)),
    React21.createElement("textarea", { className: "gdg-input", autoFocus: true })
  );
};
var bubbles_overlay_editor_default = BubblesOverlayEditor;

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/bubble-cell.js
var bubbleCellRenderer = {
  getAccessibilityString: (c) => makeAccessibilityStringForArray(c.data),
  kind: GridCellKind.Bubble,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  measure: (ctx, cell, t) => cell.data.reduce((acc, data) => ctx.measureText(data).width + acc + 20, 0) + 2 * t.cellHorizontalPadding - 4,
  draw: (a) => drawBubbles(a, a.cell.data),
  provideEditor: () => (p2) => {
    const { value } = p2;
    return React22.createElement(bubbles_overlay_editor_default, { bubbles: value.data });
  },
  onPaste: () => void 0
};
var itemMargin = 4;
function drawBubbles(args, data) {
  const { rect, theme, ctx, highlighted } = args;
  const { x: x2, y: y2, width: w3, height: h } = rect;
  const bubbleHeight = 20;
  const bubblePad = 8;
  const bubbleMargin = itemMargin;
  let renderX = x2 + theme.cellHorizontalPadding;
  const renderBoxes = [];
  for (const s of data) {
    if (renderX > x2 + w3)
      break;
    const textWidth = measureTextCached(s, ctx, theme.baseFontFull).width;
    renderBoxes.push({
      x: renderX,
      width: textWidth
    });
    renderX += textWidth + bubblePad * 2 + bubbleMargin;
  }
  ctx.beginPath();
  for (const rectInfo of renderBoxes) {
    roundedRect(ctx, rectInfo.x, y2 + (h - bubbleHeight) / 2, rectInfo.width + bubblePad * 2, bubbleHeight, theme.roundingRadius ?? bubbleHeight / 2);
  }
  ctx.fillStyle = highlighted ? theme.bgBubbleSelected : theme.bgBubble;
  ctx.fill();
  for (const [i, rectInfo] of renderBoxes.entries()) {
    ctx.beginPath();
    ctx.fillStyle = theme.textBubble;
    ctx.fillText(data[i], rectInfo.x + bubblePad, y2 + h / 2 + getMiddleCenterBias(ctx, theme));
  }
}

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/drilldown-cell.js
var React24 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/drilldown-overlay-editor.js
var React23 = __toESM(require_react(), 1);
var DrilldownOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "DrilldownOverlayEditorStyle",
  class: "gdg-d4zsq0x",
  propsAsIs: false
});
var DrilldownOverlayEditor = (p2) => {
  const {
    drilldowns
  } = p2;
  return React23.createElement(DrilldownOverlayEditorStyle, null, drilldowns.map((d3, i) => React23.createElement("div", {
    key: i,
    className: "doe-bubble"
  }, d3.img !== void 0 && React23.createElement("img", {
    src: d3.img
  }), React23.createElement("div", null, d3.text))));
};
var drilldown_overlay_editor_default = DrilldownOverlayEditor;

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/drilldown-cell.js
var drilldownCellRenderer = {
  getAccessibilityString: (c) => makeAccessibilityStringForArray(c.data.map((d3) => d3.text)),
  kind: GridCellKind.Drilldown,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  measure: (ctx, cell, t) => cell.data.reduce((acc, data) => ctx.measureText(data.text).width + acc + 20 + (data.img !== void 0 ? 18 : 0), 0) + 2 * t.cellHorizontalPadding - 4,
  draw: (a) => drawDrilldownCell(a, a.cell.data),
  provideEditor: () => (p2) => {
    const { value } = p2;
    return React24.createElement(drilldown_overlay_editor_default, { drilldowns: value.data });
  },
  onPaste: () => void 0
};
var itemMargin2 = 4;
var drilldownCache = {};
function getAndCacheDrilldownBorder(bgCell, border, height, rounding) {
  const dpr = Math.ceil(window.devicePixelRatio);
  const shadowBlur = 5;
  const targetHeight = height - shadowBlur * 2;
  const middleWidth = 4;
  const innerHeight = height * dpr;
  const sideWidth = rounding + shadowBlur;
  const targetWidth = rounding * 3;
  const innerWidth = (targetWidth + shadowBlur * 2) * dpr;
  const key = `${bgCell},${border},${dpr},${height}`;
  if (drilldownCache[key] !== void 0) {
    return {
      el: drilldownCache[key],
      height: innerHeight,
      width: innerWidth,
      middleWidth: middleWidth * dpr,
      sideWidth: sideWidth * dpr,
      padding: shadowBlur * dpr,
      dpr
    };
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (ctx === null)
    return null;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  ctx.scale(dpr, dpr);
  drilldownCache[key] = canvas;
  ctx.beginPath();
  roundedRect(ctx, shadowBlur, shadowBlur, targetWidth, targetHeight, rounding);
  ctx.shadowColor = "rgba(24, 25, 34, 0.4)";
  ctx.shadowBlur = 1;
  ctx.fillStyle = bgCell;
  ctx.fill();
  ctx.shadowColor = "rgba(24, 25, 34, 0.3)";
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 5;
  ctx.fillStyle = bgCell;
  ctx.fill();
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.shadowBlur = 0;
  ctx.beginPath();
  roundedRect(ctx, shadowBlur + 0.5, shadowBlur + 0.5, targetWidth, targetHeight, rounding);
  ctx.strokeStyle = border;
  ctx.lineWidth = 1;
  ctx.stroke();
  return {
    el: canvas,
    height: innerHeight,
    width: innerWidth,
    sideWidth: sideWidth * dpr,
    middleWidth: rounding * dpr,
    padding: shadowBlur * dpr,
    dpr
  };
}
function drawDrilldownCell(args, data) {
  const { rect, theme, ctx, imageLoader, col, row } = args;
  const { x: x2, width: w3 } = rect;
  const font = theme.baseFontFull;
  const emHeight = getEmHeight(ctx, font);
  const h = Math.min(rect.height, Math.max(16, Math.ceil(emHeight * theme.lineHeight) * 2));
  const y2 = Math.floor(rect.y + (rect.height - h) / 2);
  const bubbleHeight = h - 10;
  const bubblePad = 8;
  const bubbleMargin = itemMargin2;
  let renderX = x2 + theme.cellHorizontalPadding;
  const rounding = theme.roundingRadius ?? 6;
  const tileMap = getAndCacheDrilldownBorder(theme.bgCell, theme.drilldownBorder, h, rounding);
  const renderBoxes = [];
  for (const el of data) {
    if (renderX > x2 + w3)
      break;
    const textMetrics = measureTextCached(el.text, ctx, font);
    const textWidth = textMetrics.width;
    let imgWidth = 0;
    if (el.img !== void 0) {
      const img = imageLoader.loadOrGetImage(el.img, col, row);
      if (img !== void 0) {
        imgWidth = bubbleHeight - 8 + 4;
      }
    }
    const renderWidth = textWidth + imgWidth + bubblePad * 2;
    renderBoxes.push({
      x: renderX,
      width: renderWidth
    });
    renderX += renderWidth + bubbleMargin;
  }
  if (tileMap !== null) {
    const { el, height, middleWidth, sideWidth, width, dpr, padding } = tileMap;
    const outerSideWidth = sideWidth / dpr;
    const outerPadding = padding / dpr;
    for (const rectInfo of renderBoxes) {
      const rx = Math.floor(rectInfo.x);
      const rw = Math.floor(rectInfo.width);
      const outerMiddleWidth = rw - (outerSideWidth - outerPadding) * 2;
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(el, 0, 0, sideWidth, height, rx - outerPadding, y2, outerSideWidth, h);
      if (outerMiddleWidth > 0)
        ctx.drawImage(el, sideWidth, 0, middleWidth, height, rx + (outerSideWidth - outerPadding), y2, outerMiddleWidth, h);
      ctx.drawImage(el, width - sideWidth, 0, sideWidth, height, rx + rw - (outerSideWidth - outerPadding), y2, outerSideWidth, h);
      ctx.imageSmoothingEnabled = true;
    }
  }
  ctx.beginPath();
  for (const [i, rectInfo] of renderBoxes.entries()) {
    const d3 = data[i];
    let drawX = rectInfo.x + bubblePad;
    if (d3.img !== void 0) {
      const img = imageLoader.loadOrGetImage(d3.img, col, row);
      if (img !== void 0) {
        const imgSize = bubbleHeight - 8;
        let srcX = 0;
        let srcY = 0;
        let srcWidth = img.width;
        let srcHeight = img.height;
        if (srcWidth > srcHeight) {
          srcX += (srcWidth - srcHeight) / 2;
          srcWidth = srcHeight;
        } else if (srcHeight > srcWidth) {
          srcY += (srcHeight - srcWidth) / 2;
          srcHeight = srcWidth;
        }
        ctx.beginPath();
        roundedRect(ctx, drawX, y2 + h / 2 - imgSize / 2, imgSize, imgSize, theme.roundingRadius ?? 3);
        ctx.save();
        ctx.clip();
        ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, drawX, y2 + h / 2 - imgSize / 2, imgSize, imgSize);
        ctx.restore();
        drawX += imgSize + 4;
      }
    }
    ctx.beginPath();
    ctx.fillStyle = theme.textBubble;
    ctx.fillText(d3.text, drawX, y2 + h / 2 + getMiddleCenterBias(ctx, theme));
  }
}

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/image-cell.js
var React25 = __toESM(require_react(), 1);
var imageCellRenderer = {
  getAccessibilityString: (c) => c.data.join(", "),
  kind: GridCellKind.Image,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  draw: (a) => drawImage(a, a.cell.displayData ?? a.cell.data, a.cell.rounding ?? a.theme.roundingRadius ?? 4, a.cell.contentAlign),
  measure: (_ctx, cell) => cell.data.length * 50,
  onDelete: (c) => ({
    ...c,
    data: []
  }),
  provideEditor: () => (p2) => {
    const { value, onFinishedEditing, imageEditorOverride } = p2;
    const ImageEditor = imageEditorOverride ?? ImageOverlayEditor;
    return React25.createElement(ImageEditor, { urls: value.data, canWrite: value.readonly !== false, onCancel: onFinishedEditing, onChange: (newImage) => {
      onFinishedEditing({
        ...value,
        data: [newImage]
      });
    } });
  },
  onPaste: (toPaste, cell) => {
    toPaste = toPaste.trim();
    const fragments = toPaste.split(",");
    const uris = fragments.map((f) => {
      try {
        new URL(f);
        return f;
      } catch {
        return void 0;
      }
    }).filter((x2) => x2 !== void 0);
    if (uris.length === cell.data.length && uris.every((u, i) => u === cell.data[i]))
      return void 0;
    return {
      ...cell,
      data: uris
    };
  }
};
var itemMargin3 = 4;
function drawImage(args, data, rounding, contentAlign) {
  const { rect, col, row, theme, ctx, imageLoader } = args;
  const { x: x2, y: y2, height: h, width: w3 } = rect;
  const imgHeight = h - theme.cellVerticalPadding * 2;
  const images = [];
  let totalWidth = 0;
  for (let index = 0; index < data.length; index++) {
    const i = data[index];
    if (i.length === 0)
      continue;
    const img = imageLoader.loadOrGetImage(i, col, row);
    if (img !== void 0) {
      images[index] = img;
      const imgWidth = img.width * (imgHeight / img.height);
      totalWidth += imgWidth + itemMargin3;
    }
  }
  if (totalWidth === 0)
    return;
  totalWidth -= itemMargin3;
  let drawX = x2 + theme.cellHorizontalPadding;
  if (contentAlign === "right")
    drawX = Math.floor(x2 + w3 - theme.cellHorizontalPadding - totalWidth);
  else if (contentAlign === "center")
    drawX = Math.floor(x2 + w3 / 2 - totalWidth / 2);
  for (const img of images) {
    if (img === void 0)
      continue;
    const imgWidth = img.width * (imgHeight / img.height);
    if (rounding > 0) {
      ctx.beginPath();
      roundedRect(ctx, drawX, y2 + theme.cellVerticalPadding, imgWidth, imgHeight, rounding);
      ctx.save();
      ctx.clip();
    }
    ctx.drawImage(img, drawX, y2 + theme.cellVerticalPadding, imgWidth, imgHeight);
    if (rounding > 0) {
      ctx.restore();
    }
    drawX += imgWidth + itemMargin3;
  }
}

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/loading-cell.js
function getRandomNumber(x2, y2) {
  let seed = x2 * 49632 + y2 * 325176;
  seed ^= seed << 13;
  seed ^= seed >> 17;
  seed ^= seed << 5;
  return seed / 4294967295 * 2;
}
var loadingCellRenderer = {
  getAccessibilityString: () => "",
  kind: GridCellKind.Loading,
  needsHover: false,
  useLabel: false,
  needsHoverPosition: false,
  measure: () => 120,
  draw: (a) => {
    const { cell, col, row, ctx, rect, theme } = a;
    if (cell.skeletonWidth === void 0 || cell.skeletonWidth === 0) {
      return;
    }
    let width = cell.skeletonWidth;
    if (cell.skeletonWidthVariability !== void 0 && cell.skeletonWidthVariability > 0) {
      width += Math.round(getRandomNumber(col, row) * cell.skeletonWidthVariability);
    }
    const hpad = theme.cellHorizontalPadding;
    const rectHeight = cell.skeletonHeight ?? Math.min(18, rect.height - 2 * theme.cellVerticalPadding);
    roundedRect(ctx, rect.x + hpad, rect.y + (rect.height - rectHeight) / 2, width, rectHeight, theme.roundingRadius ?? 3);
    ctx.fillStyle = withAlpha(theme.textDark, 0.1);
    ctx.fill();
  },
  onPaste: () => void 0
};

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/markdown-cell.js
var React27 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/markdown-overlay-editor.js
var React26 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/markdown-overlay-editor-style.js
var _exp4 = () => (p2) => p2.targetWidth;
var MarkdownOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "MarkdownOverlayEditorStyle",
  class: "gdg-m1pnx84e",
  propsAsIs: false,
  vars: {
    "m1pnx84e-0": [_exp4(), "px"]
  }
});

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/markdown-overlay-editor.js
var MarkdownOverlayEditor = (p2) => {
  const { value, onChange, forceEditMode, createNode, targetRect, onFinish, validatedSelection } = p2;
  const markdown = value.data;
  const readonly = value.readonly === true;
  const [editMode, setEditMode] = React26.useState(markdown === "" || forceEditMode);
  const onEditClick = React26.useCallback(() => {
    setEditMode((e) => !e);
  }, []);
  const addLeftPad = markdown ? "gdg-ml-6" : "";
  if (editMode) {
    return React26.createElement(
      MarkdownOverlayEditorStyle,
      { targetWidth: targetRect.width - 20 },
      React26.createElement(GrowingEntry, { autoFocus: true, highlight: false, validatedSelection, value: markdown, onKeyDown: (e) => {
        if (e.key === "Enter")
          e.stopPropagation();
      }, onChange }),
      React26.createElement(
        "div",
        { className: `gdg-edit-icon gdg-checkmark-hover ${addLeftPad}`, onClick: () => onFinish(value) },
        React26.createElement(Checkmark, null)
      )
    );
  }
  return React26.createElement(
    MarkdownOverlayEditorStyle,
    { targetWidth: targetRect.width },
    React26.createElement(MarkdownDiv, { contents: markdown, createNode }),
    !readonly && React26.createElement(
      React26.Fragment,
      null,
      React26.createElement("div", { className: "spacer" }),
      React26.createElement(
        "div",
        { className: `gdg-edit-icon gdg-edit-hover ${addLeftPad}`, onClick: onEditClick },
        React26.createElement(EditPencil, null)
      )
    ),
    React26.createElement("textarea", { className: "gdg-md-edit-textarea gdg-input", autoFocus: true })
  );
};

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/markdown-cell.js
var markdownCellRenderer = {
  getAccessibilityString: (c) => c.data?.toString() ?? "",
  kind: GridCellKind.Markdown,
  needsHover: false,
  needsHoverPosition: false,
  drawPrep: prepTextCell,
  measure: (ctx, cell, t) => {
    const firstLine = cell.data.split("\n")[0];
    return ctx.measureText(firstLine).width + 2 * t.cellHorizontalPadding;
  },
  draw: (a) => drawTextCell(a, a.cell.data, a.cell.contentAlign),
  onDelete: (c) => ({
    ...c,
    data: ""
  }),
  provideEditor: () => (p2) => {
    const { onChange, value, target, onFinishedEditing, markdownDivCreateNode, forceEditMode, validatedSelection } = p2;
    return React27.createElement(MarkdownOverlayEditor, { onFinish: onFinishedEditing, targetRect: target, value, validatedSelection, onChange: (e) => onChange({
      ...value,
      data: e.target.value
    }), forceEditMode, createNode: markdownDivCreateNode });
  },
  onPaste: (toPaste, cell) => toPaste === cell.data ? void 0 : { ...cell, data: toPaste }
};

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/marker-cell.js
var markerCellRenderer = {
  getAccessibilityString: (c) => c.row.toString(),
  kind: InnerGridCellKind.Marker,
  needsHover: true,
  needsHoverPosition: false,
  drawPrep: prepMarkerRowCell,
  measure: () => 44,
  draw: (a) => drawMarkerRowCell(a, a.cell.row, a.cell.checked, a.cell.markerKind, a.cell.drawHandle, a.cell.checkboxStyle),
  onClick: (e) => {
    const { bounds, cell, posX: x2, posY: y2 } = e;
    const { width, height } = bounds;
    const centerX = cell.drawHandle ? 7 + (width - 7) / 2 : width / 2;
    const centerY = height / 2;
    if (Math.abs(x2 - centerX) <= 10 && Math.abs(y2 - centerY) <= 10) {
      return {
        ...cell,
        checked: !cell.checked
      };
    }
    return void 0;
  },
  onPaste: () => void 0
};
function prepMarkerRowCell(args, lastPrep) {
  const { ctx, theme } = args;
  const newFont = theme.markerFontFull;
  const result = lastPrep ?? {};
  if (result?.font !== newFont) {
    ctx.font = newFont;
    result.font = newFont;
  }
  result.deprep = deprepMarkerRowCell;
  ctx.textAlign = "center";
  return result;
}
function deprepMarkerRowCell(args) {
  const { ctx } = args;
  ctx.textAlign = "start";
}
function drawMarkerRowCell(args, index, checked, markerKind, drawHandle, style) {
  const { ctx, rect, hoverAmount, theme } = args;
  const { x: x2, y: y2, width, height } = rect;
  const checkedboxAlpha = checked ? 1 : markerKind === "checkbox-visible" ? 0.6 + 0.4 * hoverAmount : hoverAmount;
  if (markerKind !== "number" && checkedboxAlpha > 0) {
    ctx.globalAlpha = checkedboxAlpha;
    const offsetAmount = 7 * (checked ? hoverAmount : 1);
    drawCheckbox(ctx, theme, checked, drawHandle ? x2 + offsetAmount : x2, y2, drawHandle ? width - offsetAmount : width, height, true, void 0, void 0, 18, "center", style);
    if (drawHandle) {
      ctx.globalAlpha = hoverAmount;
      ctx.beginPath();
      for (const xOffset of [3, 6]) {
        for (const yOffset of [-5, -1, 3]) {
          ctx.rect(x2 + xOffset, y2 + height / 2 + yOffset, 2, 2);
        }
      }
      ctx.fillStyle = theme.textLight;
      ctx.fill();
      ctx.beginPath();
    }
    ctx.globalAlpha = 1;
  }
  if (markerKind === "number" || markerKind === "both" && !checked) {
    const text = index.toString();
    const fontStyle = theme.markerFontFull;
    const start = x2 + width / 2;
    if (markerKind === "both" && hoverAmount !== 0) {
      ctx.globalAlpha = 1 - hoverAmount;
    }
    ctx.fillStyle = theme.textLight;
    ctx.font = fontStyle;
    ctx.fillText(text, start, y2 + height / 2 + getMiddleCenterBias(ctx, fontStyle));
    if (hoverAmount !== 0) {
      ctx.globalAlpha = 1;
    }
  }
}

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/new-row-cell.js
var newRowCellRenderer = {
  getAccessibilityString: () => "",
  kind: InnerGridCellKind.NewRow,
  needsHover: true,
  needsHoverPosition: false,
  measure: () => 200,
  draw: (a) => drawNewRowCell(a, a.cell.hint, a.cell.icon),
  onPaste: () => void 0
};
function drawNewRowCell(args, data, icon) {
  const { ctx, rect, hoverAmount, theme, spriteManager } = args;
  const { x: x2, y: y2, width: w3, height: h } = rect;
  ctx.beginPath();
  ctx.globalAlpha = hoverAmount;
  ctx.rect(x2 + 1, y2 + 1, w3, h - 2);
  ctx.fillStyle = theme.bgHeaderHovered;
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.beginPath();
  const alwaysShowIcon = data !== "";
  let textX = 0;
  if (icon !== void 0) {
    const padding = 8;
    const size = h - padding;
    const px = x2 + padding / 2;
    const py = y2 + padding / 2;
    spriteManager.drawSprite(icon, "normal", ctx, px, py, size, theme, alwaysShowIcon ? 1 : hoverAmount);
    textX = size;
  } else {
    textX = 24;
    const finalLineSize = 12;
    const lineSize = alwaysShowIcon ? finalLineSize : hoverAmount * finalLineSize;
    const xTranslate = alwaysShowIcon ? 0 : (1 - hoverAmount) * finalLineSize * 0.5;
    const padPlus = theme.cellHorizontalPadding + 4;
    if (lineSize > 0) {
      ctx.moveTo(x2 + padPlus + xTranslate, y2 + h / 2);
      ctx.lineTo(x2 + padPlus + xTranslate + lineSize, y2 + h / 2);
      ctx.moveTo(x2 + padPlus + xTranslate + lineSize * 0.5, y2 + h / 2 - lineSize * 0.5);
      ctx.lineTo(x2 + padPlus + xTranslate + lineSize * 0.5, y2 + h / 2 + lineSize * 0.5);
      ctx.lineWidth = 2;
      ctx.strokeStyle = theme.bgIconHeader;
      ctx.lineCap = "round";
      ctx.stroke();
    }
  }
  ctx.fillStyle = theme.textMedium;
  ctx.fillText(data, textX + x2 + theme.cellHorizontalPadding + 0.5, y2 + h / 2 + getMiddleCenterBias(ctx, theme));
  ctx.beginPath();
}

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/number-cell.js
var React28 = __toESM(require_react(), 1);
var NumberOverlayEditor = React28.lazy(async () => await import("/build/_shared/number-overlay-editor-OJVL25NJ.js"));
var numberCellRenderer = {
  getAccessibilityString: (c) => c.data?.toString() ?? "",
  kind: GridCellKind.Number,
  needsHover: false,
  needsHoverPosition: false,
  useLabel: true,
  drawPrep: prepTextCell,
  draw: (a) => drawTextCell(a, a.cell.displayData, a.cell.contentAlign),
  measure: (ctx, cell, theme) => ctx.measureText(cell.displayData).width + theme.cellHorizontalPadding * 2,
  onDelete: (c) => ({
    ...c,
    data: void 0
  }),
  provideEditor: () => (p2) => {
    const { isHighlighted, onChange, value, validatedSelection } = p2;
    return React28.createElement(
      React28.Suspense,
      { fallback: null },
      React28.createElement(NumberOverlayEditor, { highlight: isHighlighted, disabled: value.readonly === true, value: value.data, fixedDecimals: value.fixedDecimals, allowNegative: value.allowNegative, thousandSeparator: value.thousandSeparator, decimalSeparator: value.decimalSeparator, validatedSelection, onChange: (x2) => onChange({
        ...value,
        data: Number.isNaN(x2.floatValue ?? 0) ? 0 : x2.floatValue
      }) })
    );
  },
  onPaste: (toPaste, cell, details) => {
    const newNumber = typeof details.rawValue === "number" ? details.rawValue : Number.parseFloat(typeof details.rawValue === "string" ? details.rawValue : toPaste);
    if (Number.isNaN(newNumber) || cell.data === newNumber)
      return void 0;
    return { ...cell, data: newNumber, displayData: details.formattedString ?? cell.displayData };
  }
};

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/protected-cell.js
var protectedCellRenderer = {
  getAccessibilityString: () => "",
  measure: () => 108,
  kind: GridCellKind.Protected,
  needsHover: false,
  needsHoverPosition: false,
  draw: drawProtectedCell,
  onPaste: () => void 0
};
function drawProtectedCell(args) {
  const { ctx, theme, rect } = args;
  const { x: x2, y: y2, height: h } = rect;
  ctx.beginPath();
  const radius = 2.5;
  let xStart = x2 + theme.cellHorizontalPadding + radius;
  const center = y2 + h / 2;
  const p2 = Math.cos(degreesToRadians(30)) * radius;
  const q2 = Math.sin(degreesToRadians(30)) * radius;
  for (let i = 0; i < 12; i++) {
    ctx.moveTo(xStart, center - radius);
    ctx.lineTo(xStart, center + radius);
    ctx.moveTo(xStart + p2, center - q2);
    ctx.lineTo(xStart - p2, center + q2);
    ctx.moveTo(xStart - p2, center - q2);
    ctx.lineTo(xStart + p2, center + q2);
    xStart += 8;
  }
  ctx.lineWidth = 1.1;
  ctx.lineCap = "square";
  ctx.strokeStyle = theme.textLight;
  ctx.stroke();
}

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/row-id-cell.js
var import_react20 = __toESM(require_react(), 1);
var rowIDCellRenderer = {
  getAccessibilityString: (c) => c.data?.toString() ?? "",
  kind: GridCellKind.RowID,
  needsHover: false,
  needsHoverPosition: false,
  drawPrep: (a, b3) => prepTextCell(a, b3, a.theme.textLight),
  draw: (a) => drawTextCell(a, a.cell.data, a.cell.contentAlign),
  measure: (ctx, cell, theme) => ctx.measureText(cell.data).width + theme.cellHorizontalPadding * 2,
  provideEditor: () => (p2) => {
    const { isHighlighted, onChange, value, validatedSelection } = p2;
    return import_react20.default.createElement(GrowingEntry, { highlight: isHighlighted, autoFocus: value.readonly !== true, disabled: value.readonly !== false, value: value.data, validatedSelection, onChange: (e) => onChange({
      ...value,
      data: e.target.value
    }) });
  },
  onPaste: () => void 0
};

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/text-cell.js
var React30 = __toESM(require_react(), 1);
var textCellRenderer = {
  getAccessibilityString: (c) => c.data?.toString() ?? "",
  kind: GridCellKind.Text,
  needsHover: (textCell) => textCell.hoverEffect === true,
  needsHoverPosition: false,
  drawPrep: prepTextCell,
  useLabel: true,
  draw: (a) => {
    const { cell, hoverAmount, hyperWrapping, ctx, rect, theme, overrideCursor } = a;
    const { displayData, contentAlign, hoverEffect, allowWrapping } = cell;
    if (hoverEffect === true && hoverAmount > 0) {
      ctx.textBaseline = "alphabetic";
      const padX = theme.cellHorizontalPadding;
      const padY = theme.cellVerticalPadding;
      const m2 = measureTextCached(displayData, ctx, theme.baseFontFull, "alphabetic");
      const maxH = rect.height - padY;
      const h = Math.min(maxH, m2.actualBoundingBoxAscent * 2.5);
      ctx.beginPath();
      roundedRect(ctx, rect.x + padX / 2, rect.y + (rect.height - h) / 2 + 1, m2.width + padX * 3, h - 1, theme.roundingRadius ?? 4);
      ctx.globalAlpha = hoverAmount;
      ctx.fillStyle = withAlpha(theme.textDark, 0.1);
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.fillStyle = theme.textDark;
      ctx.textBaseline = "middle";
      overrideCursor?.("text");
    }
    drawTextCell(a, displayData, contentAlign, allowWrapping, hyperWrapping);
  },
  measure: (ctx, cell, t) => {
    const lines = cell.displayData.split("\n", cell.allowWrapping === true ? void 0 : 1);
    let maxLineWidth = 0;
    for (const line of lines) {
      maxLineWidth = Math.max(maxLineWidth, ctx.measureText(line).width);
    }
    return maxLineWidth + 2 * t.cellHorizontalPadding;
  },
  onDelete: (c) => ({
    ...c,
    data: ""
  }),
  provideEditor: (cell) => ({
    disablePadding: cell.allowWrapping === true,
    editor: (p2) => {
      const { isHighlighted, onChange, value, validatedSelection } = p2;
      return React30.createElement(GrowingEntry, { style: cell.allowWrapping === true ? { padding: "3px 8.5px" } : void 0, highlight: isHighlighted, autoFocus: value.readonly !== true, disabled: value.readonly === true, altNewline: true, value: value.data, validatedSelection, onChange: (e) => onChange({
        ...value,
        data: e.target.value
      }) });
    }
  }),
  onPaste: (toPaste, cell, details) => toPaste === cell.data ? void 0 : { ...cell, data: toPaste, displayData: details.formattedString ?? cell.displayData }
};

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/uri-cell.js
var React32 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/uri-overlay-editor.js
var React31 = __toESM(require_react(), 1);

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/uri-overlay-editor-style.js
var UriOverlayEditorStyle = /* @__PURE__ */ styled_default("div")({
  name: "UriOverlayEditorStyle",
  class: "gdg-u1rrojo",
  propsAsIs: false
});

// node_modules/@glideapps/glide-data-grid/dist/esm/internal/data-grid-overlay-editor/private/uri-overlay-editor.js
var UriOverlayEditor = (p2) => {
  const { uri, onChange, forceEditMode, readonly, validatedSelection, preview } = p2;
  const [editMode, setEditMode] = React31.useState(!readonly && (uri === "" || forceEditMode));
  const onEditClick = React31.useCallback(() => {
    setEditMode(true);
  }, []);
  if (editMode) {
    return React31.createElement(GrowingEntry, { validatedSelection, highlight: true, autoFocus: true, value: uri, onChange });
  }
  return React31.createElement(
    UriOverlayEditorStyle,
    null,
    React31.createElement("a", { className: "gdg-link-area", href: uri, target: "_blank", rel: "noopener noreferrer" }, preview),
    !readonly && React31.createElement(
      "div",
      { className: "gdg-edit-icon", onClick: onEditClick },
      React31.createElement(EditPencil, null)
    ),
    React31.createElement("textarea", { className: "gdg-input", autoFocus: true })
  );
};
var uri_overlay_editor_default = UriOverlayEditor;

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/uri-cell.js
function getTextRect(metrics, rect, theme, contentAlign) {
  let x2 = theme.cellHorizontalPadding;
  const y2 = rect.height / 2 - metrics.actualBoundingBoxAscent / 2;
  const width = metrics.width;
  const height = metrics.actualBoundingBoxAscent;
  if (contentAlign === "right") {
    x2 = rect.width - width - theme.cellHorizontalPadding;
  } else if (contentAlign === "center") {
    x2 = rect.width / 2 - width / 2;
  }
  return { x: x2, y: y2, width, height };
}
var uriCellRenderer = {
  getAccessibilityString: (c) => c.data?.toString() ?? "",
  kind: GridCellKind.Uri,
  needsHover: (uriCell) => uriCell.hoverEffect === true,
  needsHoverPosition: true,
  useLabel: true,
  drawPrep: prepTextCell,
  draw: (a) => {
    const { cell, theme, overrideCursor, hoverX, hoverY, rect, ctx } = a;
    const txt = cell.displayData ?? cell.data;
    const isLinky = cell.hoverEffect === true;
    if (overrideCursor !== void 0 && isLinky && hoverX !== void 0 && hoverY !== void 0) {
      const m2 = measureTextCached(txt, ctx, theme.baseFontFull);
      const textRect = getTextRect(m2, rect, theme, cell.contentAlign);
      const { x: x2, y: y2, width: w3, height: h } = textRect;
      if (hoverX >= x2 - 4 && hoverX <= x2 - 4 + w3 + 8 && hoverY >= y2 - 4 && hoverY <= y2 - 4 + h + 8) {
        const middleCenterBias = getMiddleCenterBias(ctx, theme.baseFontFull);
        overrideCursor("pointer");
        const underlineOffset = 5;
        const drawY = y2 - middleCenterBias;
        ctx.beginPath();
        ctx.moveTo(rect.x + x2, Math.floor(rect.y + drawY + h + underlineOffset) + 0.5);
        ctx.lineTo(rect.x + x2 + w3, Math.floor(rect.y + drawY + h + underlineOffset) + 0.5);
        ctx.strokeStyle = theme.linkColor;
        ctx.stroke();
        ctx.save();
        ctx.fillStyle = a.cellFillColor;
        drawTextCell({ ...a, rect: { ...rect, x: rect.x - 1 } }, txt, cell.contentAlign);
        drawTextCell({ ...a, rect: { ...rect, x: rect.x - 2 } }, txt, cell.contentAlign);
        drawTextCell({ ...a, rect: { ...rect, x: rect.x + 1 } }, txt, cell.contentAlign);
        drawTextCell({ ...a, rect: { ...rect, x: rect.x + 2 } }, txt, cell.contentAlign);
        ctx.restore();
      }
    }
    ctx.fillStyle = isLinky ? theme.linkColor : theme.textDark;
    drawTextCell(a, txt, cell.contentAlign);
  },
  onClick: (a) => {
    const { cell, bounds, posX, posY, theme } = a;
    const txt = cell.displayData ?? cell.data;
    if (cell.hoverEffect !== true || cell.onClickUri === void 0)
      return;
    const m2 = getMeasuredTextCache(txt, theme.baseFontFull);
    if (m2 === void 0)
      return;
    const textRect = getTextRect(m2, bounds, theme, cell.contentAlign);
    const didClick = pointInRect({
      x: textRect.x - 4,
      y: textRect.y - 4,
      width: textRect.width + 8,
      height: textRect.height + 8
    }, posX, posY);
    if (didClick) {
      cell.onClickUri(a);
    }
    return void 0;
  },
  measure: (ctx, cell, theme) => ctx.measureText(cell.displayData ?? cell.data).width + theme.cellHorizontalPadding * 2,
  onDelete: (c) => ({
    ...c,
    data: ""
  }),
  provideEditor: (cell) => (p2) => {
    const { onChange, value, forceEditMode, validatedSelection } = p2;
    return React32.createElement(uri_overlay_editor_default, { forceEditMode: value.readonly !== true && (forceEditMode || cell.hoverEffect === true && cell.onClickUri !== void 0), uri: value.data, preview: value.displayData ?? value.data, validatedSelection, readonly: value.readonly === true, onChange: (e) => onChange({
      ...value,
      data: e.target.value
    }) });
  },
  onPaste: (toPaste, cell, details) => toPaste === cell.data ? void 0 : { ...cell, data: toPaste, displayData: details.formattedString ?? cell.displayData }
};

// node_modules/@glideapps/glide-data-grid/dist/esm/cells/index.js
var AllCellRenderers = [
  markerCellRenderer,
  newRowCellRenderer,
  booleanCellRenderer,
  bubbleCellRenderer,
  drilldownCellRenderer,
  imageCellRenderer,
  loadingCellRenderer,
  markdownCellRenderer,
  numberCellRenderer,
  protectedCellRenderer,
  rowIDCellRenderer,
  textCellRenderer,
  uriCellRenderer
];

// node_modules/@glideapps/glide-data-grid/dist/esm/common/image-window-loader.js
var import_throttle = __toESM(require_throttle(), 1);
var imgPool = [];
var ImageWindowLoaderImpl = class extends WindowingTrackerBase {
  imageLoaded = () => void 0;
  loadedLocations = [];
  cache = {};
  setCallback(imageLoaded) {
    this.imageLoaded = imageLoaded;
  }
  sendLoaded = (0, import_throttle.default)(() => {
    this.imageLoaded(new CellSet(this.loadedLocations));
    this.loadedLocations = [];
  }, 20);
  clearOutOfWindow = () => {
    const keys = Object.keys(this.cache);
    for (const key of keys) {
      const obj = this.cache[key];
      let keep = false;
      for (let j2 = 0; j2 < obj.cells.length; j2++) {
        const packed = obj.cells[j2];
        if (this.isInWindow(packed)) {
          keep = true;
          break;
        }
      }
      if (keep) {
        obj.cells = obj.cells.filter(this.isInWindow);
      } else {
        obj.cancel();
        delete this.cache[key];
      }
    }
  };
  loadImage(url, col, row, key) {
    let loaded = false;
    const img = imgPool.pop() ?? new Image();
    let canceled = false;
    const result = {
      img: void 0,
      cells: [packColRowToNumber(col, row)],
      url,
      cancel: () => {
        if (canceled)
          return;
        canceled = true;
        if (imgPool.length < 12) {
          imgPool.unshift(img);
        } else if (!loaded) {
          img.src = "";
        }
      }
    };
    const loadPromise = new Promise((r) => img.addEventListener("load", () => r(null)));
    requestAnimationFrame(async () => {
      try {
        img.src = url;
        await loadPromise;
        await img.decode();
        const toWrite = this.cache[key];
        if (toWrite !== void 0 && !canceled) {
          toWrite.img = img;
          for (const packed of toWrite.cells) {
            this.loadedLocations.push(unpackNumberToColRow(packed));
          }
          loaded = true;
          this.sendLoaded();
        }
      } catch {
        result.cancel();
      }
    });
    this.cache[key] = result;
  }
  loadOrGetImage(url, col, row) {
    const key = url;
    const current = this.cache[key];
    if (current !== void 0) {
      const packed = packColRowToNumber(col, row);
      if (!current.cells.includes(packed)) {
        current.cells.push(packed);
      }
      return current.img;
    } else {
      this.loadImage(url, col, row, key);
    }
    return void 0;
  }
};
var image_window_loader_default = ImageWindowLoaderImpl;

// node_modules/@glideapps/glide-data-grid/dist/esm/data-editor-all.js
var DataEditorAllImpl = (p2, ref) => {
  const allSprites = React33.useMemo(() => {
    return { ...sprites, ...p2.headerIcons };
  }, [p2.headerIcons]);
  const imageWindowLoader = React33.useMemo(() => {
    return p2.imageWindowLoader ?? new image_window_loader_default();
  }, [p2.imageWindowLoader]);
  return React33.createElement(DataEditor, { ...p2, renderers: AllCellRenderers, headerIcons: allSprites, ref, imageWindowLoader });
};
var DataEditorAll = React33.forwardRef(DataEditorAllImpl);
export {
  AllCellRenderers,
  BooleanEmpty,
  BooleanIndeterminate,
  CellSet,
  CompactSelection,
  DataEditorAll as DataEditor,
  DataEditor as DataEditorCore,
  GridCellKind,
  GridColumnIcon,
  GridColumnMenuIcon,
  ImageOverlayEditor,
  image_window_loader_default as ImageWindowLoaderImpl,
  InnerGridCellKind,
  MarkdownDiv,
  GrowingEntry as TextCellEntry,
  blend,
  booleanCellIsEditable,
  booleanCellRenderer,
  bubbleCellRenderer,
  decodeHTML,
  DataEditorAll as default,
  drawTextCellExternal as drawTextCell,
  drilldownCellRenderer,
  getCopyBufferContents,
  getDataEditorTheme as getDefaultTheme,
  getLuminance,
  getMiddleCenterBias,
  imageCellRenderer,
  interpolateColors,
  isEditableGridCell,
  isInnerOnlyCell,
  isObjectEditorCallbackResult,
  isReadWriteCell,
  isRectangleEqual,
  isSizedGridColumn,
  isTextEditableGridCell,
  loadingCellRenderer,
  markdownCellRenderer,
  markerCellRenderer,
  measureTextCached,
  newRowCellRenderer,
  numberCellRenderer,
  parseToRgba,
  protectedCellRenderer,
  resolveCellsThunk,
  roundedPoly,
  roundedRect,
  rowIDCellRenderer,
  sprites,
  textCellRenderer,
  uriCellRenderer,
  useColumnSizer,
  useTheme,
  withAlpha
};
//# sourceMappingURL=/build/_shared/esm-DSNC5AFF.js.map
