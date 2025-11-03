import {
  useHydrated
} from "/build/_shared/chunk-KATHKNLH.js";
import {
  import_react_select_cjs_default
} from "/build/_shared/chunk-MOIBM2EW.js";
import {
  require_lib,
  require_prop_types,
  require_warning
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import {
  Q
} from "/build/_shared/chunk-776WLWWM.js";
import {
  directusLoaderLink
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  addDays,
  addYears,
  endOfYear,
  format,
  getDay,
  getWeek,
  startOfISOWeek,
  startOfWeek
} from "/build/_shared/chunk-6W3RSCO2.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// node_modules/react-tapper/lib/event-support.js
var require_event_support = __commonJS({
  "node_modules/react-tapper/lib/event-support.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var TAGNAMES = {
      "select": "input",
      "change": "input",
      "submit": "form",
      "reset": "form",
      "error": "img",
      "load": "img",
      "abort": "img"
    };
    var eventSupport = function eventSupport2(eventName) {
      if (typeof window === "undefined" || typeof document === "undefined")
        return false;
      var el = document.createElement(TAGNAMES[eventName] || "div");
      eventName = "on" + eventName;
      var isSupported = eventName in el;
      if (!isSupported) {
        el.setAttribute(eventName, "return;");
        isSupported = typeof el[eventName] == "function";
      }
      el = null;
      return isSupported;
    };
    var _default2 = eventSupport;
    exports["default"] = _default2;
  }
});

// node_modules/react-tapper/lib/touch-support.js
var require_touch_support = __commonJS({
  "node_modules/react-tapper/lib/touch-support.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _eventSupport = _interopRequireDefault(require_event_support());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var __TouchSupported;
    var touchSupport = function touchSupport2() {
      if (typeof __TouchSupported === "boolean")
        return __TouchSupported;
      __TouchSupported = (0, _eventSupport["default"])("touchstart");
      return __TouchSupported;
    };
    var _default2 = touchSupport;
    exports["default"] = _default2;
  }
});

// node_modules/react-tapper/lib/touch-styles.js
var require_touch_styles = __commonJS({
  "node_modules/react-tapper/lib/touch-styles.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var touchStyles = {
      WebkitTapHighlightColor: "rgba(0,0,0,0)",
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };
    var _default2 = touchStyles;
    exports["default"] = _default2;
  }
});

// node_modules/react-tapper/lib/tappable.js
var require_tappable = __commonJS({
  "node_modules/react-tapper/lib/tappable.js"(exports) {
    "use strict";
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
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _touchSupport = _interopRequireDefault(require_touch_support());
    var _touchStyles = _interopRequireDefault(require_touch_styles());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj["default"] = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
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
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
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
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
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
    var Tappable = /* @__PURE__ */ function(_Component) {
      _inherits(Tappable2, _Component);
      var _super = _createSuper(Tappable2);
      function Tappable2(props, context) {
        var _this;
        _classCallCheck(this, Tappable2);
        _this = _super.call(this, props, context);
        _this.state = _this.getInitialState();
        _this.touchable = (0, _touchSupport["default"])();
        return _this;
      }
      _createClass(Tappable2, [{
        key: "getInitialState",
        value: function getInitialState() {
          return {
            x: null,
            y: null,
            swiping: false,
            start: 0
          };
        }
      }, {
        key: "render",
        value: function render() {
          var props = this.props, style = {};
          _extends(style, _touchStyles["default"], props.style);
          var newComponentProps = _extends({}, props, {
            style,
            className: props.className,
            disabled: props.disabled
          }, this.handlers());
          delete newComponentProps.onTap;
          delete newComponentProps.onPress;
          delete newComponentProps.onPinchStart;
          delete newComponentProps.onPinchMove;
          delete newComponentProps.onPinchEnd;
          delete newComponentProps.moveThreshold;
          delete newComponentProps.pressDelay;
          delete newComponentProps.pressMoveThreshold;
          delete newComponentProps.preventDefault;
          delete newComponentProps.stopPropagation;
          delete newComponentProps.component;
          delete newComponentProps.flickThreshold;
          delete newComponentProps.delta;
          return /* @__PURE__ */ (0, _react.createElement)(props.component, newComponentProps, props.children);
        }
      }, {
        key: "calculatePos",
        value: function calculatePos(e) {
          var x = e.changedTouches[0].clientX;
          var y = e.changedTouches[0].clientY;
          var xd = this.state.x - x;
          var yd = this.state.y - y;
          var axd = Math.abs(xd);
          var ayd = Math.abs(yd);
          return {
            deltaX: xd,
            deltaY: yd,
            absX: axd,
            absY: ayd
          };
        }
      }, {
        key: "touchStart",
        value: function touchStart(e) {
          if (e.touches.length > 1) {
            return;
          }
          if (!this.touchable) {
            console.debug("Damn! You are using a non-touchable browser simulating touch events!");
            this.touchable = true;
          }
          this.setState({
            start: Date.now(),
            x: e.touches[0].clientX,
            y: e.touches[0].clientY,
            swiping: false
          });
        }
      }, {
        key: "touchMove",
        value: function touchMove(e) {
          if (!this.state.x || !this.state.y || e.touches.length > 1) {
            return;
          }
          var cancelPageSwipe = false;
          var pos = this.calculatePos(e);
          if (pos.absX < this.props.delta && pos.absY < this.props.delta) {
            return;
          }
          if (pos.absX > pos.absY) {
            if (pos.deltaX > 0) {
              if (this.props.onSwipingLeft) {
                this.props.onSwipingLeft(e, pos.absX);
                cancelPageSwipe = true;
              }
            } else {
              if (this.props.onSwipingRight) {
                this.props.onSwipingRight(e, pos.absX);
                cancelPageSwipe = true;
              }
            }
          } else {
            if (pos.deltaY > 0) {
              if (this.props.onSwipingUp) {
                this.props.onSwipingUp(e, pos.absY);
                cancelPageSwipe = true;
              }
            } else {
              if (this.props.onSwipingDown) {
                this.props.onSwipingDown(e, pos.absY);
                cancelPageSwipe = true;
              }
            }
          }
          this.setState({
            swiping: true
          });
          if (cancelPageSwipe) {
            e.preventDefault();
          }
        }
      }, {
        key: "touchEnd",
        value: function touchEnd(ev) {
          if (this.state.swiping) {
            var pos = this.calculatePos(ev);
            var time = Date.now() - this.state.start;
            var velocity = Math.sqrt(pos.absX * pos.absX + pos.absY * pos.absY) / time;
            var isFlick = velocity > this.props.flickThreshold;
            this.props.onSwiped && this.props.onSwiped(ev, pos.deltaX, pos.deltaY, isFlick);
            if (pos.absX > pos.absY) {
              if (pos.deltaX > 0) {
                this.props.onSwipedLeft && this.props.onSwipedLeft(ev, pos.deltaX);
              } else {
                this.props.onSwipedRight && this.props.onSwipedRight(ev, pos.deltaX);
              }
            } else {
              if (pos.deltaY > 0) {
                this.props.onSwipedUp && this.props.onSwipedUp(ev, pos.deltaY);
              } else {
                this.props.onSwipedDown && this.props.onSwipedDown(ev, pos.deltaY);
              }
            }
          } else {
            this._handleTap(ev);
          }
          this.setState(this.getInitialState());
        }
      }, {
        key: "touchCancel",
        value: function touchCancel(ev) {
          this.setState(this.getInitialState());
        }
      }, {
        key: "_handleClick",
        value: function _handleClick(ev) {
          var _this2 = this;
          if (this.state.start === 0) {
            this._handleTap(ev);
          } else {
            setTimeout(function() {
              _this2.state.start === 0 && _this2._handleTap(ev);
            }, 300);
          }
        }
      }, {
        key: "_handleTap",
        value: function _handleTap(ev) {
          this.props.onTap && this.props.onTap(ev);
        }
      }, {
        key: "handlers",
        value: function handlers() {
          return {
            onTouchStart: this.touchStart.bind(this),
            onTouchMove: this.touchMove.bind(this),
            onTouchEnd: this.touchEnd.bind(this),
            onTouchCancel: this.touchCancel.bind(this),
            onClick: this._handleClick.bind(this)
          };
        }
      }]);
      return Tappable2;
    }(_react.Component);
    exports["default"] = Tappable;
    _defineProperty(Tappable, "propTypes", {
      component: _propTypes["default"].any,
      onTap: _propTypes["default"].func,
      onSwiped: _propTypes["default"].func,
      onSwipingUp: _propTypes["default"].func,
      onSwipingRight: _propTypes["default"].func,
      onSwipingDown: _propTypes["default"].func,
      onSwipingLeft: _propTypes["default"].func,
      onSwipedUp: _propTypes["default"].func,
      onSwipedRight: _propTypes["default"].func,
      onSwipedDown: _propTypes["default"].func,
      onSwipedLeft: _propTypes["default"].func,
      flickThreshold: _propTypes["default"].number,
      delta: _propTypes["default"].number
    });
    _defineProperty(Tappable, "defaultProps", {
      component: "div",
      flickThreshold: 0.6,
      delta: 10
    });
  }
});

// node_modules/react-month-picker/lib/month-picker.js
var require_month_picker = __commonJS({
  "node_modules/react-month-picker/lib/month-picker.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
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
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _reactTapper = require_tappable();
    var _reactTapper2 = _interopRequireDefault(_reactTapper);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
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
    var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
    var __MIN_VALID_YEAR = 1e3;
    var _RANGE_KEYS = ["from", "to"];
    var __YEAR = new Date().getFullYear();
    function mapToArray(num, callback) {
      var arr = [];
      for (var i = 0; i < num; i++) {
        arr.push(callback(i));
      }
      return arr;
    }
    function getYearMon(year, min, max) {
      var ym = (typeof year === "undefined" ? "undefined" : _typeof(year)) === "object" && year.year ? { year: year.year, month: year.month } : typeof year === "number" ? { year } : { __YEAR };
      ym.min = min || 1;
      ym.max = max || 12;
      return ym;
    }
    function getYearsByNum(n, minYear) {
      var maxYear = __YEAR;
      if (n && n > 0 && n < 100) {
        minYear = minYear || maxYear - n + 1;
      } else {
        if (n && n >= __MIN_VALID_YEAR)
          maxYear = n;
        if (minYear) {
          n = maxYear - minYear + 1;
        } else {
          n = 5;
          minYear = maxYear - n + 1;
        }
      }
      return mapToArray(n, function(i) {
        return getYearMon(minYear + i);
      });
    }
    function getYearArray(years) {
      if (Array.isArray(years)) {
        return years.map(function(y, i) {
          return getYearMon(y);
        }).sort(function(a, b) {
          return a.year - b.year;
        });
      }
      if ((typeof years === "undefined" ? "undefined" : _typeof(years)) === "object") {
        var n = 0, min = 0;
        var ymin = getYearMon(years.min), ymax = getYearMon(years.max);
        if (ymin.year > __MIN_VALID_YEAR)
          min = ymin.year;
        if (ymax.year >= min)
          n = ymax.year;
        var arr = getYearsByNum(n, min);
        var last = arr.length - 1;
        if (last >= 0) {
          arr[0].min = ymin.month || arr[0].min;
          arr[last].max = ymax.month || arr[last].max;
        }
        return arr;
      } else if (typeof years === "number" && years > 0)
        return getYearsByNum(years);
      else
        return getYearsByNum(5);
    }
    function validate(d, years, idx, yearIndexes) {
      var ym = void 0;
      if (d && typeof d.year === "number" && d.year > __MIN_VALID_YEAR && typeof d.month === "number" && d.month >= 1 && d.month <= 12) {
        ym = d;
      }
      var foundThisYear = void 0;
      for (var i = 0; i < years.length; i++) {
        if (ym && years[i].year === ym.year) {
          yearIndexes[idx] = i;
          return ym;
        } else if (years[i].year === __YEAR) {
          foundThisYear = i;
        }
      }
      if (typeof foundThisYear === "number") {
        yearIndexes[idx] = foundThisYear;
        return { year: __YEAR };
      }
      var last = yearIndexes[idx] = years.length - 1;
      return { year: years[last].year };
    }
    function validValue(value, years, yearIndexes) {
      value = value || {};
      if (value.year && value.month) {
        var _validate = validate(value, years, 0, yearIndexes), year = _validate.year, month = _validate.month;
        return { type: "single", pads: 1, year, month };
      } else if (Array.isArray(value) && value.length > 0) {
        return {
          type: "multiple",
          pads: 1,
          choices: value.map(function(v, i) {
            return validate(v, years, 0, i === 0 ? yearIndexes : [0]);
          })
        };
      } else if (value.from && value.to) {
        var from = validate(value.from, years, 0, yearIndexes), to = validate(value.to, years, 1, yearIndexes);
        if (from.year > to.year || from.year === to.year && from.month > to.month) {
          from.year = to.year;
          from.month = to.month;
          if (from.month < 1) {
            from.year--;
            from.month += 12;
          }
        }
        return { type: "range", pads: 2, from, to };
      }
      return { pads: 0 };
    }
    var TypeYM = _propTypes2.default.shape({
      year: _propTypes2.default.number,
      month: _propTypes2.default.number
    });
    var MonthPicker = function(_Component) {
      _inherits(MonthPicker2, _Component);
      function MonthPicker2(props, context) {
        _classCallCheck(this, MonthPicker2);
        if (props.range) {
          console.warn('Property "range" is deprecated, and use property "value" instead');
        }
        var _this = _possibleConstructorReturn(this, (MonthPicker2.__proto__ || Object.getPrototypeOf(MonthPicker2)).call(this, props, context));
        _initialiseProps.call(_this);
        var yearArr = getYearArray(_this.props.years);
        var yearIndexes = [0];
        var rawValue = validValue(_this.props.value, yearArr, yearIndexes);
        if (!rawValue.type) {
          throw new Error('invalid value of property "value" in month-picker');
        }
        _this.state = {
          age: _this.props.age,
          years: yearArr,
          rawValue,
          labelYears: [false, false],
          showed: false,
          closeable: false,
          yearIndexes
        };
        return _this;
      }
      _createClass(MonthPicker2, [{
        key: "value",
        value: function value() {
          var _state$rawValue = this.state.rawValue, year = _state$rawValue.year, month = _state$rawValue.month, choices = _state$rawValue.choices, from = _state$rawValue.from, to = _state$rawValue.to;
          if (from && to)
            return { from, to };
          else if (choices && choices.length > 0)
            return choices;
          else if (year && month)
            return { year, month };
          return null;
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (isBrowser) {
            document.addEventListener("keydown", this._keyDown);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (isBrowser) {
            document.removeEventListener("keydown", this._keyDown);
          }
        }
      }, {
        key: "optionPad",
        value: function optionPad(padIndex) {
          var _this2 = this;
          var ymArr = this.state.years;
          var ymRange = [ymArr[0], ymArr[ymArr.length - 1]];
          var labelYears = this.state.labelYears;
          var labelYear = labelYears[padIndex];
          var rawValue = this.state.rawValue;
          var values = [];
          var isRange2 = false;
          if (rawValue.type === "single") {
            if (!labelYear) {
              labelYear = labelYears[padIndex] = rawValue.year;
            }
            if (rawValue.year === labelYear) {
              rawValue.month && values.push(rawValue.month);
            }
          } else if (rawValue.type === "multiple") {
            var choices = rawValue.choices;
            if (!labelYear) {
              labelYear = labelYears[padIndex] = choices.length > 0 ? choices[0].year : ymRange[padIndex].year;
            }
            choices.forEach(function(c) {
              if (labelYear === c.year) {
                c.month && values.push(c.month);
              }
            });
          } else if (rawValue.type === "range") {
            isRange2 = true;
            if (!labelYear) {
              labelYear = labelYears[padIndex] = rawValue[_RANGE_KEYS[padIndex]].year;
            }
            var from = rawValue.from, to = rawValue.to;
            var startM = labelYear === from.year ? from.month : 1;
            var endM = labelYear === to.year ? to.month : 12;
            for (var i = startM; i <= endM; i++) {
              values.push(i);
            }
          }
          var lang = this.props.lang || [];
          var months = Array.isArray(lang) ? lang : Array.isArray(lang.months) ? lang.months : [];
          var prevCss = "", nextCss = "";
          var yearMaxIdx = ymArr.length - 1;
          var yearIdx = this.state.yearIndexes[padIndex];
          var atMinYear = labelYear === ymArr[0].year;
          var atMaxYear = labelYear === ymArr[yearMaxIdx].year;
          var otherValue = { year: 0, month: 0 }, labelPreText = void 0;
          if (isRange2) {
            otherValue = rawValue[_RANGE_KEYS[1 - padIndex]];
            labelPreText = _react2.default.createElement(
              "b",
              null,
              this.props.lang[_RANGE_KEYS[padIndex]]
            );
          }
          if (yearIdx === 0 || padIndex === 1 && otherValue.year === labelYear)
            prevCss = "disable";
          if (yearIdx === yearMaxIdx || padIndex === 0 && otherValue.year === labelYear)
            nextCss = "disable";
          var prevHandler = prevCss === "disable" ? void 0 : this._goPrevYear;
          var nextHandler = nextCss === "disable" ? void 0 : this._goNextYear;
          var valOffset = 0;
          return _react2.default.createElement(
            "div",
            { className: "rmp-pad", key: padIndex },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "label",
                null,
                labelPreText,
                labelYear
              ),
              _react2.default.createElement(
                "i",
                { className: ["rmp-tab", "rmp-btn", "prev", prevCss].join(" "), "data-id": padIndex, onClick: prevHandler },
                "<"
              ),
              _react2.default.createElement(
                "i",
                { className: ["rmp-tab", "rmp-btn", "next", nextCss].join(" "), "data-id": padIndex, onClick: nextHandler },
                ">"
              )
            ),
            _react2.default.createElement(
              "ul",
              null,
              mapToArray(12, function(i2) {
                var m = i2 + 1;
                var css = "";
                if (atMinYear && m < ymArr[0].min) {
                  css = "disable";
                } else if (atMaxYear && m > ymArr[yearMaxIdx].max) {
                  css = "disable";
                } else {
                  var _from = rawValue.from, _to = rawValue.to;
                  for (var _i = valOffset, last = values.length - 1; _i <= last; _i++) {
                    var v = values[_i];
                    if (v === m) {
                      valOffset++;
                      if (!isRange2 || _from.year === labelYear && padIndex === 0 && _i === 0 || _to.year === labelYear && padIndex === 1 && _i === last) {
                        css = "active";
                      } else if (labelYear >= _from.year && labelYear <= _to.year) {
                        css = "select";
                      }
                    }
                  }
                  var otherM = otherValue.month;
                  if (otherM) {
                    if (padIndex === 0 && nextCss === "disable" && m > otherM || padIndex === 1 && prevCss === "disable" && m < otherM) {
                      css = "disable";
                    }
                  }
                }
                var clickHandler = css !== "disable" ? _this2._handleClickMonth : void 0;
                return _react2.default.createElement(
                  "li",
                  {
                    key: i2,
                    className: ["rmp-btn", rawValue.type, css].join(" "),
                    "data-id": padIndex + ":" + (i2 + 1),
                    onClick: clickHandler
                  },
                  months.length > i2 ? months[i2] : i2
                );
              })
            )
          );
        }
      }, {
        key: "render",
        value: function render() {
          var pads = [];
          var popupClass = "";
          if (this.state.rawValue.type === "range") {
            pads.push(this.optionPad(0), this.optionPad(1));
            popupClass = "range";
          } else {
            pads.push(this.optionPad(0));
          }
          return _react2.default.createElement(
            "div",
            { className: ["month-picker", this.props.className].join(" ") },
            this.props.children,
            _react2.default.createElement(
              "div",
              { className: ["rmp-container", "rmp-table", this.props.className, this.state.showed ? "show" : ""].join(" ") },
              _react2.default.createElement(_reactTapper2.default, { className: "rmp-overlay", onTap: this._handleOverlayTouchTap }),
              _react2.default.createElement(
                "div",
                { className: "rmp-cell" },
                _react2.default.createElement(
                  "div",
                  { className: ["rmp-popup", popupClass, this.props.theme, this.state.showed ? "show" : ""].join(" ") },
                  pads
                )
              )
            )
          );
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          if (this.state.closeable) {
            this._onDismiss();
          }
        }
      }, {
        key: "show",
        value: function show() {
          this._onShow();
        }
      }, {
        key: "_onShow",
        value: function _onShow() {
          var _this3 = this;
          setTimeout(function() {
            _this3.state.closeable = true;
          }, 250);
          this.setState({ showed: true });
          this.props.onShow && this.props.onShow();
        }
      }, {
        key: "_onDismiss",
        value: function _onDismiss(s) {
          this.setState(Object.assign({ showed: false, loading: false }, s));
          this.props.onDismiss && this.props.onDismiss(this.value());
        }
      }, {
        key: "setYear",
        value: function setYear(idx, step) {
          var yearIndex = this.state.yearIndexes[idx] += step;
          var labelYears = this.state.labelYears;
          var theYear = this.state.years[yearIndex].year;
          labelYears[idx] = theYear;
          this.setState({ labelYears });
          this.props.onYearChange && this.props.onYearChange(theYear);
        }
      }, {
        key: "getDID",
        value: function getDID(e) {
          var el = e.target;
          return el.dataset ? el.dataset.id : el.getAttribute("data-id");
        }
      }, {
        key: "_reset",
        value: function _reset() {
          var rawValue = validValue(this.props.value, this.state.years, this.state.yearIndexes);
          return { rawValue };
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
          if (props.age > state.age) {
            var yearArr = getYearArray(props.years);
            var yearIndexes = [0];
            var rawValue = validValue(props.value, yearArr, yearIndexes);
            return {
              age: props.age,
              years: yearArr,
              rawValue,
              labelYears: [false, false],
              yearIndexes
            };
          }
          return null;
        }
      }]);
      return MonthPicker2;
    }(_react.Component);
    MonthPicker.propTypes = {
      age: _propTypes2.default.number,
      years: _propTypes2.default.oneOfType([
        _propTypes2.default.number,
        _propTypes2.default.arrayOf(_propTypes2.default.number),
        _propTypes2.default.shape({
          min: _propTypes2.default.oneOfType([_propTypes2.default.number, TypeYM]),
          max: _propTypes2.default.oneOfType([_propTypes2.default.number, TypeYM])
        })
      ]),
      value: _propTypes2.default.oneOfType([TypeYM, _propTypes2.default.arrayOf(TypeYM), _propTypes2.default.shape({
        from: TypeYM,
        to: TypeYM
      })]),
      lang: _propTypes2.default.oneOfType([
        _propTypes2.default.arrayOf(_propTypes2.default.string),
        _propTypes2.default.shape({
          months: _propTypes2.default.arrayOf(_propTypes2.default.string),
          from: _propTypes2.default.string,
          to: _propTypes2.default.string
        })
      ]),
      onChange: _propTypes2.default.func,
      onYearChange: _propTypes2.default.func,
      onShow: _propTypes2.default.func,
      onDismiss: _propTypes2.default.func,
      onClickAway: _propTypes2.default.func,
      theme: _propTypes2.default.string
    };
    MonthPicker.defaultProps = {
      age: 0,
      years: getYearsByNum(5),
      onChange: function onChange(year, month, idx) {
      },
      theme: "light"
    };
    var _initialiseProps = function _initialiseProps2() {
      var _this4 = this;
      this._handleOverlayTouchTap = function(e) {
        if (_this4.state.closeable) {
          _this4._onDismiss();
          _this4.props.onClickAway && _this4.props.onClickAway(e);
        }
      };
      this._handleClickMonth = function(e) {
        if (_this4.state.showed) {
          var refid = _this4.getDID(e).split(":");
          var idx = parseInt(refid[0], 10);
          var month = parseInt(refid[1], 10);
          var year = _this4.state.labelYears[idx];
          var rawValue = _this4.state.rawValue;
          if (rawValue.type === "single") {
            Object.assign(rawValue, { year, month });
          } else if (rawValue.type === "multiple") {
            var existIndex = rawValue.choices.findIndex(function(c) {
              return c.year === year && c.month === month;
            });
            if (existIndex < 0) {
              rawValue.choices.push({ year, month });
              rawValue.choices.sort(function(a, b) {
                return a.year === b.year ? a.month - b.month : a.year - b.year;
              });
            } else {
              rawValue.choices.splice(existIndex, 1);
            }
          } else if (rawValue.type === "range") {
            var keys = _RANGE_KEYS;
            rawValue[keys[idx]] = { year, month };
          }
          _this4.setState({ rawValue });
          _this4.props.onChange(year, month, idx);
        }
      };
      this._goPrevYear = function(e) {
        var idx = parseInt(_this4.getDID(e), 10);
        if (_this4.state.yearIndexes[idx] > 0) {
          _this4.setYear(idx, -1);
        }
      };
      this._goNextYear = function(e) {
        var idx = parseInt(_this4.getDID(e), 10);
        if (_this4.state.yearIndexes[idx] < _this4.state.years.length - 1) {
          _this4.setYear(idx, 1);
        }
      };
      this._keyDown = function(e) {
        if (!_this4.state.showed)
          return;
        var _state$rawValue2 = _this4.state.rawValue, type = _state$rawValue2.type, pads = _state$rawValue2.pads, year = _state$rawValue2.year, month = _state$rawValue2.month, choices = _state$rawValue2.choices;
        if (e.key === "Escape") {
          _this4._onDismiss(_this4._reset());
          e.stopPropagation();
        } else if (e.key === "Enter") {
          _this4._onDismiss();
          e.stopPropagation();
        } else if (pads === 1) {
        }
      };
    };
    exports.default = MonthPicker;
  }
});

// node_modules/mimic-fn/index.js
var require_mimic_fn = __commonJS({
  "node_modules/mimic-fn/index.js"(exports, module) {
    "use strict";
    var copyProperty = (to, from, property, ignoreNonConfigurable) => {
      if (property === "length" || property === "prototype") {
        return;
      }
      if (property === "arguments" || property === "caller") {
        return;
      }
      const toDescriptor = Object.getOwnPropertyDescriptor(to, property);
      const fromDescriptor = Object.getOwnPropertyDescriptor(from, property);
      if (!canCopyProperty(toDescriptor, fromDescriptor) && ignoreNonConfigurable) {
        return;
      }
      Object.defineProperty(to, property, fromDescriptor);
    };
    var canCopyProperty = function(toDescriptor, fromDescriptor) {
      return toDescriptor === void 0 || toDescriptor.configurable || toDescriptor.writable === fromDescriptor.writable && toDescriptor.enumerable === fromDescriptor.enumerable && toDescriptor.configurable === fromDescriptor.configurable && (toDescriptor.writable || toDescriptor.value === fromDescriptor.value);
    };
    var changePrototype = (to, from) => {
      const fromPrototype = Object.getPrototypeOf(from);
      if (fromPrototype === Object.getPrototypeOf(to)) {
        return;
      }
      Object.setPrototypeOf(to, fromPrototype);
    };
    var wrappedToString = (withName, fromBody) => `/* Wrapped ${withName}*/
${fromBody}`;
    var toStringDescriptor = Object.getOwnPropertyDescriptor(Function.prototype, "toString");
    var toStringName = Object.getOwnPropertyDescriptor(Function.prototype.toString, "name");
    var changeToString = (to, from, name) => {
      const withName = name === "" ? "" : `with ${name.trim()}() `;
      const newToString = wrappedToString.bind(null, withName, from.toString());
      Object.defineProperty(newToString, "name", toStringName);
      Object.defineProperty(to, "toString", { ...toStringDescriptor, value: newToString });
    };
    var mimicFn = (to, from, { ignoreNonConfigurable = false } = {}) => {
      const { name } = to;
      for (const property of Reflect.ownKeys(from)) {
        copyProperty(to, from, property, ignoreNonConfigurable);
      }
      changePrototype(to, from);
      changeToString(to, from, name);
      return to;
    };
    module.exports = mimicFn;
  }
});

// node_modules/p-defer/index.js
var require_p_defer = __commonJS({
  "node_modules/p-defer/index.js"(exports, module) {
    "use strict";
    module.exports = () => {
      const ret = {};
      ret.promise = new Promise((resolve, reject) => {
        ret.resolve = resolve;
        ret.reject = reject;
      });
      return ret;
    };
  }
});

// node_modules/map-age-cleaner/dist/index.js
var require_dist = __commonJS({
  "node_modules/map-age-cleaner/dist/index.js"(exports, module) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve2) {
            resolve2(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var p_defer_1 = __importDefault(require_p_defer());
    function mapAgeCleaner(map, property = "maxAge") {
      let processingKey;
      let processingTimer;
      let processingDeferred;
      const cleanup = () => __awaiter(this, void 0, void 0, function* () {
        if (processingKey !== void 0) {
          return;
        }
        const setupTimer = (item) => __awaiter(this, void 0, void 0, function* () {
          processingDeferred = p_defer_1.default();
          const delay = item[1][property] - Date.now();
          if (delay <= 0) {
            map.delete(item[0]);
            processingDeferred.resolve();
            return;
          }
          processingKey = item[0];
          processingTimer = setTimeout(() => {
            map.delete(item[0]);
            if (processingDeferred) {
              processingDeferred.resolve();
            }
          }, delay);
          if (typeof processingTimer.unref === "function") {
            processingTimer.unref();
          }
          return processingDeferred.promise;
        });
        try {
          for (const entry of map) {
            yield setupTimer(entry);
          }
        } catch (_a3) {
        }
        processingKey = void 0;
      });
      const reset = () => {
        processingKey = void 0;
        if (processingTimer !== void 0) {
          clearTimeout(processingTimer);
          processingTimer = void 0;
        }
        if (processingDeferred !== void 0) {
          processingDeferred.reject(void 0);
          processingDeferred = void 0;
        }
      };
      const originalSet = map.set.bind(map);
      map.set = (key, value) => {
        if (map.has(key)) {
          map.delete(key);
        }
        const result = originalSet(key, value);
        if (processingKey && processingKey === key) {
          reset();
        }
        cleanup();
        return result;
      };
      cleanup();
      return map;
    }
    exports.default = mapAgeCleaner;
    module.exports = mapAgeCleaner;
    module.exports.default = mapAgeCleaner;
  }
});

// node_modules/mem/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/mem/dist/index.js"(exports, module) {
    "use strict";
    var mimicFn = require_mimic_fn();
    var mapAgeCleaner = require_dist();
    var decoratorInstanceMap = /* @__PURE__ */ new WeakMap();
    var cacheStore = /* @__PURE__ */ new WeakMap();
    var mem2 = (fn, { cacheKey, cache = /* @__PURE__ */ new Map(), maxAge } = {}) => {
      if (typeof maxAge === "number") {
        mapAgeCleaner(cache);
      }
      const memoized = function(...arguments_) {
        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];
        const cacheItem = cache.get(key);
        if (cacheItem) {
          return cacheItem.data;
        }
        const result = fn.apply(this, arguments_);
        cache.set(key, {
          data: result,
          maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY
        });
        return result;
      };
      mimicFn(memoized, fn, {
        ignoreNonConfigurable: true
      });
      cacheStore.set(memoized, cache);
      return memoized;
    };
    mem2.decorator = (options = {}) => (target, propertyKey, descriptor) => {
      const input = target[propertyKey];
      if (typeof input !== "function") {
        throw new TypeError("The decorated value must be a function");
      }
      delete descriptor.value;
      delete descriptor.writable;
      descriptor.get = function() {
        if (!decoratorInstanceMap.has(this)) {
          const value = mem2(input, options);
          decoratorInstanceMap.set(this, value);
          return value;
        }
        return decoratorInstanceMap.get(this);
      };
    };
    mem2.clear = (fn) => {
      const cache = cacheStore.get(fn);
      if (!cache) {
        throw new TypeError("Can't clear a function that was not memoized!");
      }
      if (typeof cache.clear !== "function") {
        throw new TypeError("The cache Map can't be cleared!");
      }
      cache.clear();
    };
    module.exports = mem2;
  }
});

// app/components/datePicker/clickOutsideDiv.jsx
var import_react23 = __toESM(require_react());

// app/components/datePicker/datePicker.jsx
var import_react21 = __toESM(require_react());

// node_modules/react-calendar/dist/esm/Calendar.js
var import_react20 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e)
    n += e;
  else if ("object" == typeof e)
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else
      for (f in e)
        e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++)
    (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/react-calendar/dist/esm/Calendar/Navigation.js
var import_react = __toESM(require_react(), 1);

// node_modules/get-user-locale/dist/esm/index.js
var import_mem = __toESM(require_dist2(), 1);
function isString(el) {
  return typeof el === "string";
}
function isUnique(el, index, arr) {
  return arr.indexOf(el) === index;
}
function isAllLowerCase(el) {
  return el.toLowerCase() === el;
}
function fixCommas(el) {
  return el.indexOf(",") === -1 ? el : el.split(",");
}
function normalizeLocale(locale) {
  if (!locale) {
    return locale;
  }
  if (locale === "C" || locale === "posix" || locale === "POSIX") {
    return "en-US";
  }
  if (locale.indexOf(".") !== -1) {
    var _a3 = locale.split(".")[0], actualLocale = _a3 === void 0 ? "" : _a3;
    return normalizeLocale(actualLocale);
  }
  if (locale.indexOf("@") !== -1) {
    var _b = locale.split("@")[0], actualLocale = _b === void 0 ? "" : _b;
    return normalizeLocale(actualLocale);
  }
  if (locale.indexOf("-") === -1 || !isAllLowerCase(locale)) {
    return locale;
  }
  var _c = locale.split("-"), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? "" : _d;
  return "".concat(splitEl1, "-").concat(splitEl2.toUpperCase());
}
function getUserLocalesInternal(_a3) {
  var _b = _a3 === void 0 ? {} : _a3, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? "en-US" : _d;
  var languageList = [];
  if (typeof navigator !== "undefined") {
    var rawLanguages = navigator.languages || [];
    var languages = [];
    for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {
      var rawLanguagesItem = rawLanguages_1[_i];
      languages = languages.concat(fixCommas(rawLanguagesItem));
    }
    var rawLanguage = navigator.language;
    var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;
    languageList = languageList.concat(languages, language);
  }
  if (useFallbackLocale) {
    languageList.push(fallbackLocale);
  }
  return languageList.filter(isString).map(normalizeLocale).filter(isUnique);
}
var getUserLocales = (0, import_mem.default)(getUserLocalesInternal, { cacheKey: JSON.stringify });
function getUserLocaleInternal(options) {
  return getUserLocales(options)[0] || null;
}
var getUserLocale = (0, import_mem.default)(getUserLocaleInternal, { cacheKey: JSON.stringify });
var esm_default = getUserLocale;

// node_modules/@wojtekmaj/date-utils/dist/esm/index.js
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}
function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}
function makeGetRange(getStart, getEnd2) {
  return function makeGetRangeInternal(date) {
    return [getStart(date), getEnd2(date)];
  };
}
function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }
  if (typeof date === "number") {
    return date;
  }
  var year = parseInt(date, 10);
  if (typeof date === "string" && !isNaN(year)) {
    return year;
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }
  throw new Error("Failed to get month from date: ".concat(date, "."));
}
function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }
  throw new Error("Failed to get year from date: ".concat(date, "."));
}
function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}
var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
var getCenturyRange = makeGetRange(getCenturyStart, getCenturyEnd);
function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}
var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
var getDecadeRange = makeGetRange(getDecadeStart, getDecadeEnd);
function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}
var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
var getYearEnd = makeGetEnd(getNextYearStart);
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
var getYearRange = makeGetRange(getYearStart, getYearEnd);
function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}
var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
var getMonthEnd = makeGetEnd(getNextMonthStart);
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
var getMonthRange = makeGetRange(getMonthStart, getMonthEnd);
function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date, offset) {
    if (offset === void 0) {
      offset = defaultOffset;
    }
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}
function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}
var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
var getDayEnd = makeGetEnd(getNextDayStart);
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
var getDayRange = makeGetRange(getDayStart, getDayEnd);
function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

// node_modules/react-calendar/dist/esm/shared/const.js
var _a;
var CALENDAR_TYPES = {
  GREGORY: "gregory",
  HEBREW: "hebrew",
  ISLAMIC: "islamic",
  ISO_8601: "iso8601"
};
var DEPRECATED_CALENDAR_TYPES = {
  ARABIC: "Arabic",
  HEBREW: "Hebrew",
  ISO_8601: "ISO 8601",
  US: "US"
};
var CALENDAR_TYPE_LOCALES = (_a = {}, _a[CALENDAR_TYPES.GREGORY] = [
  "en-CA",
  "en-US",
  "es-AR",
  "es-BO",
  "es-CL",
  "es-CO",
  "es-CR",
  "es-DO",
  "es-EC",
  "es-GT",
  "es-HN",
  "es-MX",
  "es-NI",
  "es-PA",
  "es-PE",
  "es-PR",
  "es-SV",
  "es-VE",
  "pt-BR"
], _a[CALENDAR_TYPES.HEBREW] = ["he", "he-IL"], _a[CALENDAR_TYPES.ISLAMIC] = [
  "ar",
  "ar-AE",
  "ar-BH",
  "ar-DZ",
  "ar-EG",
  "ar-IQ",
  "ar-JO",
  "ar-KW",
  "ar-LY",
  "ar-OM",
  "ar-QA",
  "ar-SA",
  "ar-SD",
  "ar-SY",
  "ar-YE",
  "dv",
  "dv-MV",
  "ps",
  "ps-AR"
], _a);
var WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];

// node_modules/react-calendar/dist/esm/shared/dateFormatter.js
var formatterCache = /* @__PURE__ */ new Map();
function getFormatter(options) {
  return function formatter(locale, date) {
    var localeWithDefault = locale || esm_default();
    if (!formatterCache.has(localeWithDefault)) {
      formatterCache.set(localeWithDefault, /* @__PURE__ */ new Map());
    }
    var formatterCacheLocale = formatterCache.get(localeWithDefault);
    if (!formatterCacheLocale.has(options)) {
      formatterCacheLocale.set(options, new Intl.DateTimeFormat(localeWithDefault || void 0, options).format);
    }
    return formatterCacheLocale.get(options)(date);
  };
}
function toSafeHour(date) {
  var safeDate = new Date(date);
  return new Date(safeDate.setHours(12));
}
function getSafeFormatter(options) {
  return function(locale, date) {
    return getFormatter(options)(locale, toSafeHour(date));
  };
}
var formatDateOptions = {
  day: "numeric",
  month: "numeric",
  year: "numeric"
};
var formatDayOptions = { day: "numeric" };
var formatLongDateOptions = {
  day: "numeric",
  month: "long",
  year: "numeric"
};
var formatMonthOptions = { month: "long" };
var formatMonthYearOptions = {
  month: "long",
  year: "numeric"
};
var formatShortWeekdayOptions = { weekday: "short" };
var formatWeekdayOptions = { weekday: "long" };
var formatYearOptions = { year: "numeric" };
var formatDate = getSafeFormatter(formatDateOptions);
var formatDay = getSafeFormatter(formatDayOptions);
var formatLongDate = getSafeFormatter(formatLongDateOptions);
var formatMonth = getSafeFormatter(formatMonthOptions);
var formatMonthYear = getSafeFormatter(formatMonthYearOptions);
var formatShortWeekday = getSafeFormatter(formatShortWeekdayOptions);
var formatWeekday = getSafeFormatter(formatWeekdayOptions);
var formatYear = getSafeFormatter(formatYearOptions);

// node_modules/react-calendar/dist/esm/shared/dates.js
var SUNDAY = WEEKDAYS[0];
var FRIDAY = WEEKDAYS[5];
var SATURDAY = WEEKDAYS[6];
function getDayOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISO_8601:
      return (weekday + 6) % 7;
    case CALENDAR_TYPES.ISLAMIC:
      return (weekday + 1) % 7;
    case CALENDAR_TYPES.HEBREW:
    case CALENDAR_TYPES.GREGORY:
      return weekday;
    default:
      throw new Error("Unsupported calendar type.");
  }
}
function getBeginOfCenturyYear(date) {
  var beginOfCentury = getCenturyStart(date);
  return getYear(beginOfCentury);
}
function getBeginOfDecadeYear(date) {
  var beginOfDecade = getDecadeStart(date);
  return getYear(beginOfDecade);
}
function getBeginOfWeek(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var year = getYear(date);
  var monthIndex = getMonth(date);
  var day = date.getDate() - getDayOfWeek(date, calendarType);
  return new Date(year, monthIndex, day);
}
function getWeekNumber(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var calendarTypeForWeekNumber = calendarType === CALENDAR_TYPES.GREGORY ? CALENDAR_TYPES.GREGORY : CALENDAR_TYPES.ISO_8601;
  var beginOfWeek = getBeginOfWeek(date, calendarType);
  var year = getYear(date) + 1;
  var dayInWeekOne;
  var beginOfFirstWeek;
  do {
    dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === CALENDAR_TYPES.ISO_8601 ? 4 : 1);
    beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarType);
    year -= 1;
  } while (date < beginOfFirstWeek);
  return Math.round((beginOfWeek.getTime() - beginOfFirstWeek.getTime()) / (864e5 * 7)) + 1;
}
function getBegin(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyStart(date);
    case "decade":
      return getDecadeStart(date);
    case "year":
      return getYearStart(date);
    case "month":
      return getMonthStart(date);
    case "day":
      return getDayStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyStart(date);
    case "decade":
      return getPreviousDecadeStart(date);
    case "year":
      return getPreviousYearStart(date);
    case "month":
      return getPreviousMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getNextCenturyStart(date);
    case "decade":
      return getNextDecadeStart(date);
    case "year":
      return getNextYearStart(date);
    case "month":
      return getNextMonthStart(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeStart(date, -100);
    case "year":
      return getPreviousYearStart(date, -10);
    case "month":
      return getPreviousMonthStart(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getBeginNext2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getNextDecadeStart(date, 100);
    case "year":
      return getNextYearStart(date, 10);
    case "month":
      return getNextMonthStart(date, 12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEnd(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyEnd(date);
    case "decade":
      return getDecadeEnd(date);
    case "year":
      return getYearEnd(date);
    case "month":
      return getMonthEnd(date);
    case "day":
      return getDayEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getPreviousCenturyEnd(date);
    case "decade":
      return getPreviousDecadeEnd(date);
    case "year":
      return getPreviousYearEnd(date);
    case "month":
      return getPreviousMonthEnd(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getEndPrevious2(rangeType, date) {
  switch (rangeType) {
    case "decade":
      return getPreviousDecadeEnd(date, -100);
    case "year":
      return getPreviousYearEnd(date, -10);
    case "month":
      return getPreviousMonthEnd(date, -12);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getRange(rangeType, date) {
  switch (rangeType) {
    case "century":
      return getCenturyRange(date);
    case "decade":
      return getDecadeRange(date);
    case "year":
      return getYearRange(date);
    case "month":
      return getMonthRange(date);
    case "day":
      return getDayRange(date);
    default:
      throw new Error("Invalid rangeType: ".concat(rangeType));
  }
}
function getValueRange(rangeType, date1, date2) {
  var rawNextValue = [date1, date2].sort(function(a, b) {
    return a.getTime() - b.getTime();
  });
  return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
}
function toYearLabel(locale, formatYear2, dates) {
  if (formatYear2 === void 0) {
    formatYear2 = formatYear;
  }
  return dates.map(function(date) {
    return formatYear2(locale, date);
  }).join(" \u2013 ");
}
function getCenturyLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getCenturyRange(date));
}
function getDecadeLabel(locale, formatYear2, date) {
  return toYearLabel(locale, formatYear2, getDecadeRange(date));
}
function isCurrentDayOfWeek(date) {
  return date.getDay() === new Date().getDay();
}
function isWeekend(date, calendarType) {
  if (calendarType === void 0) {
    calendarType = CALENDAR_TYPES.ISO_8601;
  }
  var weekday = date.getDay();
  switch (calendarType) {
    case CALENDAR_TYPES.ISLAMIC:
    case CALENDAR_TYPES.HEBREW:
      return weekday === FRIDAY || weekday === SATURDAY;
    case CALENDAR_TYPES.ISO_8601:
    case CALENDAR_TYPES.GREGORY:
      return weekday === SATURDAY || weekday === SUNDAY;
    default:
      throw new Error("Unsupported calendar type.");
  }
}

// node_modules/react-calendar/dist/esm/Calendar/Navigation.js
"use client";
var className = "react-calendar__navigation";
function Navigation(_a3) {
  var activeStartDate = _a3.activeStartDate, drillUp = _a3.drillUp, _b = _a3.formatMonthYear, formatMonthYear2 = _b === void 0 ? formatMonthYear : _b, _c = _a3.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, locale = _a3.locale, maxDate = _a3.maxDate, minDate = _a3.minDate, _d = _a3.navigationAriaLabel, navigationAriaLabel = _d === void 0 ? "" : _d, navigationAriaLive = _a3.navigationAriaLive, navigationLabel = _a3.navigationLabel, _e = _a3.next2AriaLabel, next2AriaLabel = _e === void 0 ? "" : _e, _f = _a3.next2Label, next2Label = _f === void 0 ? "\xBB" : _f, _g = _a3.nextAriaLabel, nextAriaLabel = _g === void 0 ? "" : _g, _h = _a3.nextLabel, nextLabel = _h === void 0 ? "\u203A" : _h, _j = _a3.prev2AriaLabel, prev2AriaLabel = _j === void 0 ? "" : _j, _k = _a3.prev2Label, prev2Label = _k === void 0 ? "\xAB" : _k, _l = _a3.prevAriaLabel, prevAriaLabel = _l === void 0 ? "" : _l, _m = _a3.prevLabel, prevLabel = _m === void 0 ? "\u2039" : _m, setActiveStartDate = _a3.setActiveStartDate, showDoubleView = _a3.showDoubleView, view = _a3.view, views = _a3.views;
  var drillUpAvailable = views.indexOf(view) > 0;
  var shouldShowPrevNext2Buttons = view !== "century";
  var previousActiveStartDate = getBeginPrevious(view, activeStartDate);
  var previousActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginPrevious2(view, activeStartDate) : void 0;
  var nextActiveStartDate = getBeginNext(view, activeStartDate);
  var nextActiveStartDate2 = shouldShowPrevNext2Buttons ? getBeginNext2(view, activeStartDate) : void 0;
  var prevButtonDisabled = function() {
    if (previousActiveStartDate.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var prev2ButtonDisabled = shouldShowPrevNext2Buttons && function() {
    if (previousActiveStartDate2.getFullYear() < 0) {
      return true;
    }
    var previousActiveEndDate = getEndPrevious2(view, activeStartDate);
    return minDate && minDate >= previousActiveEndDate;
  }();
  var nextButtonDisabled = maxDate && maxDate < nextActiveStartDate;
  var next2ButtonDisabled = shouldShowPrevNext2Buttons && maxDate && maxDate < nextActiveStartDate2;
  function onClickPrevious() {
    setActiveStartDate(previousActiveStartDate, "prev");
  }
  function onClickPrevious2() {
    setActiveStartDate(previousActiveStartDate2, "prev2");
  }
  function onClickNext() {
    setActiveStartDate(nextActiveStartDate, "next");
  }
  function onClickNext2() {
    setActiveStartDate(nextActiveStartDate2, "next2");
  }
  function renderLabel(date) {
    var label = function() {
      switch (view) {
        case "century":
          return getCenturyLabel(locale, formatYear2, date);
        case "decade":
          return getDecadeLabel(locale, formatYear2, date);
        case "year":
          return formatYear2(locale, date);
        case "month":
          return formatMonthYear2(locale, date);
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    return navigationLabel ? navigationLabel({
      date,
      label,
      locale: locale || getUserLocale() || void 0,
      view
    }) : label;
  }
  function renderButton() {
    var labelClassName = "".concat(className, "__label");
    return import_react.default.createElement(
      "button",
      { "aria-label": navigationAriaLabel, "aria-live": navigationAriaLive, className: labelClassName, disabled: !drillUpAvailable, onClick: drillUp, style: { flexGrow: 1 }, type: "button" },
      import_react.default.createElement("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--from") }, renderLabel(activeStartDate)),
      showDoubleView ? import_react.default.createElement(
        import_react.default.Fragment,
        null,
        import_react.default.createElement("span", { className: "".concat(labelClassName, "__divider") }, " \u2013 "),
        import_react.default.createElement("span", { className: "".concat(labelClassName, "__labelText ").concat(labelClassName, "__labelText--to") }, renderLabel(nextActiveStartDate))
      ) : null
    );
  }
  return import_react.default.createElement(
    "div",
    { className },
    prev2Label !== null && shouldShowPrevNext2Buttons ? import_react.default.createElement("button", { "aria-label": prev2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev2-button"), disabled: prev2ButtonDisabled, onClick: onClickPrevious2, type: "button" }, prev2Label) : null,
    prevLabel !== null && import_react.default.createElement("button", { "aria-label": prevAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__prev-button"), disabled: prevButtonDisabled, onClick: onClickPrevious, type: "button" }, prevLabel),
    renderButton(),
    nextLabel !== null && import_react.default.createElement("button", { "aria-label": nextAriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next-button"), disabled: nextButtonDisabled, onClick: onClickNext, type: "button" }, nextLabel),
    next2Label !== null && shouldShowPrevNext2Buttons ? import_react.default.createElement("button", { "aria-label": next2AriaLabel, className: "".concat(className, "__arrow ").concat(className, "__next2-button"), disabled: next2ButtonDisabled, onClick: onClickNext2, type: "button" }, next2Label) : null
  );
}

// node_modules/react-calendar/dist/esm/CenturyView.js
var import_react7 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// node_modules/react-calendar/dist/esm/CenturyView/Decades.js
var import_react6 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/TileGroup.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/Flex.js
var import_react2 = __toESM(require_react(), 1);
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function toPercent(num) {
  return "".concat(num, "%");
}
function Flex(_a3) {
  var children = _a3.children, className8 = _a3.className, count = _a3.count, direction = _a3.direction, offset = _a3.offset, style = _a3.style, wrap = _a3.wrap, otherProps = __rest(_a3, ["children", "className", "count", "direction", "offset", "style", "wrap"]);
  return import_react2.default.createElement("div", __assign({ className: className8, style: __assign({ display: "flex", flexDirection: direction, flexWrap: wrap ? "wrap" : "nowrap" }, style) }, otherProps), import_react2.default.Children.map(children, function(child, index) {
    var marginInlineStart = offset && index === 0 ? toPercent(100 * offset / count) : null;
    return import_react2.default.cloneElement(child, __assign(__assign({}, child.props), { style: {
      flexBasis: toPercent(100 / count),
      flexShrink: 0,
      flexGrow: 0,
      overflow: "hidden",
      marginLeft: marginInlineStart,
      marginInlineStart,
      marginInlineEnd: 0
    } }));
  }));
}

// node_modules/react-calendar/dist/esm/shared/utils.js
var import_warning = __toESM(require_warning(), 1);
var _a2;
function between(value, min, max) {
  if (min && min > value) {
    return min;
  }
  if (max && max < value) {
    return max;
  }
  return value;
}
function isValueWithinRange(value, range) {
  return range[0] <= value && range[1] >= value;
}
function isRangeWithinRange(greaterRange, smallerRange) {
  return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
}
function doRangesOverlap(range1, range2) {
  return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
}
function getRangeClassNames(valueRange, dateRange, baseClassName2) {
  var isRange2 = doRangesOverlap(dateRange, valueRange);
  var classes = [];
  if (isRange2) {
    classes.push(baseClassName2);
    var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
    var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
    if (isRangeStart) {
      classes.push("".concat(baseClassName2, "Start"));
    }
    if (isRangeEnd) {
      classes.push("".concat(baseClassName2, "End"));
    }
    if (isRangeStart && isRangeEnd) {
      classes.push("".concat(baseClassName2, "BothEnds"));
    }
  }
  return classes;
}
function isCompleteValue(value) {
  if (Array.isArray(value)) {
    return value[0] !== null && value[1] !== null;
  }
  return value !== null;
}
function getTileClasses(args) {
  if (!args) {
    throw new Error("args is required");
  }
  var value = args.value, date = args.date, hover = args.hover;
  var className8 = "react-calendar__tile";
  var classes = [className8];
  if (!date) {
    return classes;
  }
  var now = new Date();
  var dateRange = function() {
    if (Array.isArray(date)) {
      return date;
    }
    var dateType = args.dateType;
    if (!dateType) {
      throw new Error("dateType is required when date is not an array of two dates");
    }
    return getRange(dateType, date);
  }();
  if (isValueWithinRange(now, dateRange)) {
    classes.push("".concat(className8, "--now"));
  }
  if (!value || !isCompleteValue(value)) {
    return classes;
  }
  var valueRange = function() {
    if (Array.isArray(value)) {
      return value;
    }
    var valueType = args.valueType;
    if (!valueType) {
      throw new Error("valueType is required when value is not an array of two dates");
    }
    return getRange(valueType, value);
  }();
  if (isRangeWithinRange(valueRange, dateRange)) {
    classes.push("".concat(className8, "--active"));
  } else if (doRangesOverlap(valueRange, dateRange)) {
    classes.push("".concat(className8, "--hasActive"));
  }
  var valueRangeClassNames = getRangeClassNames(valueRange, dateRange, "".concat(className8, "--range"));
  classes.push.apply(classes, valueRangeClassNames);
  var valueArray = Array.isArray(value) ? value : [value];
  if (hover && valueArray.length === 1) {
    var hoverRange = hover > valueRange[0] ? [valueRange[0], hover] : [hover, valueRange[0]];
    var hoverRangeClassNames = getRangeClassNames(hoverRange, dateRange, "".concat(className8, "--hover"));
    classes.push.apply(classes, hoverRangeClassNames);
  }
  return classes;
}
var calendarTypeMap = (_a2 = {}, _a2[DEPRECATED_CALENDAR_TYPES.ARABIC] = CALENDAR_TYPES.ISLAMIC, _a2[DEPRECATED_CALENDAR_TYPES.HEBREW] = CALENDAR_TYPES.HEBREW, _a2[DEPRECATED_CALENDAR_TYPES.ISO_8601] = CALENDAR_TYPES.ISO_8601, _a2[DEPRECATED_CALENDAR_TYPES.US] = CALENDAR_TYPES.GREGORY, _a2);
function isDeprecatedCalendarType(calendarType) {
  return calendarType !== void 0 && calendarType in DEPRECATED_CALENDAR_TYPES;
}
var warned = false;
function mapCalendarType(calendarTypeOrDeprecatedCalendarType) {
  if (isDeprecatedCalendarType(calendarTypeOrDeprecatedCalendarType)) {
    var calendarType = calendarTypeMap[calendarTypeOrDeprecatedCalendarType];
    (0, import_warning.default)(warned, 'Specifying calendarType="'.concat(calendarTypeOrDeprecatedCalendarType, '" is deprecated. Use calendarType="').concat(calendarType, '" instead.'));
    warned = true;
    return calendarType;
  }
  return calendarTypeOrDeprecatedCalendarType;
}

// node_modules/react-calendar/dist/esm/TileGroup.js
function TileGroup(_a3) {
  var className8 = _a3.className, _b = _a3.count, count = _b === void 0 ? 3 : _b, dateTransform = _a3.dateTransform, dateType = _a3.dateType, end = _a3.end, hover = _a3.hover, offset = _a3.offset, renderTile = _a3.renderTile, start = _a3.start, _c = _a3.step, step = _c === void 0 ? 1 : _c, value = _a3.value, valueType = _a3.valueType;
  var tiles = [];
  for (var point = start; point <= end; point += step) {
    var date = dateTransform(point);
    tiles.push(renderTile({
      classes: getTileClasses({
        date,
        dateType,
        hover,
        value,
        valueType
      }),
      date
    }));
  }
  return import_react3.default.createElement(Flex, { className: className8, count, offset, wrap: true }, tiles);
}

// node_modules/react-calendar/dist/esm/CenturyView/Decade.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/Tile.js
var import_react4 = __toESM(require_react(), 1);
function Tile(props) {
  var activeStartDate = props.activeStartDate, children = props.children, classes = props.classes, date = props.date, formatAbbr = props.formatAbbr, locale = props.locale, maxDate = props.maxDate, maxDateTransform = props.maxDateTransform, minDate = props.minDate, minDateTransform = props.minDateTransform, onClick = props.onClick, onMouseOver = props.onMouseOver, style = props.style, tileClassNameProps = props.tileClassName, tileContentProps = props.tileContent, tileDisabled = props.tileDisabled, view = props.view;
  var tileClassName = (0, import_react4.useMemo)(function() {
    var args = { activeStartDate, date, view };
    return typeof tileClassNameProps === "function" ? tileClassNameProps(args) : tileClassNameProps;
  }, [activeStartDate, date, tileClassNameProps, view]);
  var tileContent = (0, import_react4.useMemo)(function() {
    var args = { activeStartDate, date, view };
    return typeof tileContentProps === "function" ? tileContentProps(args) : tileContentProps;
  }, [activeStartDate, date, tileContentProps, view]);
  return import_react4.default.createElement(
    "button",
    { className: clsx_default(classes, tileClassName), disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({ activeStartDate, date, view }), onClick: onClick ? function(event) {
      return onClick(date, event);
    } : void 0, onFocus: onMouseOver ? function() {
      return onMouseOver(date);
    } : void 0, onMouseOver: onMouseOver ? function() {
      return onMouseOver(date);
    } : void 0, style, type: "button" },
    formatAbbr ? import_react4.default.createElement("abbr", { "aria-label": formatAbbr(locale, date) }, children) : children,
    tileContent
  );
}

// node_modules/react-calendar/dist/esm/CenturyView/Decade.js
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
var __rest2 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className2 = "react-calendar__century-view__decades__decade";
function Decade(_a3) {
  var _b = _a3.classes, classes = _b === void 0 ? [] : _b, currentCentury = _a3.currentCentury, _c = _a3.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, otherProps = __rest2(_a3, ["classes", "currentCentury", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className2) {
    classesProps.push(className2);
  }
  if (getCenturyStart(date).getFullYear() !== currentCentury) {
    classesProps.push("".concat(className2, "--neighboringCentury"));
  }
  return import_react5.default.createElement(Tile, __assign2({}, otherProps, { classes: classesProps, maxDateTransform: getDecadeEnd, minDateTransform: getDecadeStart, view: "century" }), getDecadeLabel(locale, formatYear2, date));
}

// node_modules/react-calendar/dist/esm/CenturyView/Decades.js
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
var __rest3 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Decades(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringCentury = props.showNeighboringCentury, value = props.value, valueType = props.valueType, otherProps = __rest3(props, ["activeStartDate", "hover", "showNeighboringCentury", "value", "valueType"]);
  var start = getBeginOfCenturyYear(activeStartDate);
  var end = start + (showNeighboringCentury ? 119 : 99);
  return import_react6.default.createElement(TileGroup, { className: "react-calendar__century-view__decades", dateTransform: getDecadeStart, dateType: "decade", end, hover, renderTile: function(_a3) {
    var date = _a3.date, otherTileProps = __rest3(_a3, ["date"]);
    return import_react6.default.createElement(Decade, __assign3({ key: date.getTime() }, otherProps, otherTileProps, { activeStartDate, currentCentury: start, date }));
  }, start, step: 10, value, valueType });
}

// node_modules/react-calendar/dist/esm/shared/propTypes.js
var import_prop_types = __toESM(require_prop_types(), 1);
var __spreadArray = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var calendarTypes = Object.values(CALENDAR_TYPES);
var deprecatedCalendarTypes = Object.values(DEPRECATED_CALENDAR_TYPES);
var allViews = ["century", "decade", "year", "month"];
var isCalendarType = import_prop_types.default.oneOf(__spreadArray(__spreadArray([], calendarTypes, true), deprecatedCalendarTypes, true));
var isClassName = import_prop_types.default.oneOfType([
  import_prop_types.default.string,
  import_prop_types.default.arrayOf(import_prop_types.default.string)
]);
var isMinDate = function isMinDate2(props, propName, componentName) {
  var _a3 = props, _b = propName, minDate = _a3[_b];
  if (!minDate) {
    return null;
  }
  if (!(minDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var maxDate = props.maxDate;
  if (maxDate && minDate > maxDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof minDate, "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
  }
  return null;
};
var isMaxDate = function isMaxDate2(props, propName, componentName) {
  var _a3 = props, _b = propName, maxDate = _a3[_b];
  if (!maxDate) {
    return null;
  }
  if (!(maxDate instanceof Date)) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
  }
  var minDate = props.minDate;
  if (minDate && maxDate < minDate) {
    return new Error("Invalid prop `".concat(propName, "` of type `").concat(typeof maxDate, "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
  }
  return null;
};
var isRef = import_prop_types.default.oneOfType([
  import_prop_types.default.func,
  import_prop_types.default.exact({
    current: import_prop_types.default.any
  })
]);
var isRange = import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.instanceOf(Date), import_prop_types.default.oneOf([null])]).isRequired);
var isValue = import_prop_types.default.oneOfType([
  import_prop_types.default.instanceOf(Date),
  import_prop_types.default.oneOf([null]),
  isRange
]);
var isViews = import_prop_types.default.arrayOf(import_prop_types.default.oneOf(allViews));
var isView = function isView2(props, propName, componentName) {
  var _a3 = props, _b = propName, view = _a3[_b];
  if (view !== void 0 && (typeof view !== "string" || allViews.indexOf(view) === -1)) {
    return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(allViews.map(function(a) {
      return '"'.concat(a, '"');
    }).join(", "), "]."));
  }
  return null;
};
isView.isRequired = function isViewIsRequired(props, propName, componentName, location, propFullName) {
  var _a3 = props, _b = propName, view = _a3[_b];
  if (!view) {
    return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
  }
  return isView(props, propName, componentName, location, propFullName);
};
var rangeOf = function(type) {
  return import_prop_types.default.arrayOf(type);
};
var tileGroupProps = {
  activeStartDate: import_prop_types.default.instanceOf(Date).isRequired,
  hover: import_prop_types.default.instanceOf(Date),
  locale: import_prop_types.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: import_prop_types.default.func,
  onMouseOver: import_prop_types.default.func,
  tileClassName: import_prop_types.default.oneOfType([import_prop_types.default.func, isClassName]),
  tileContent: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node]),
  value: isValue,
  valueType: import_prop_types.default.oneOf(["century", "decade", "year", "month", "day"]).isRequired
};
var tileProps = {
  activeStartDate: import_prop_types.default.instanceOf(Date).isRequired,
  classes: import_prop_types.default.arrayOf(import_prop_types.default.string.isRequired).isRequired,
  date: import_prop_types.default.instanceOf(Date).isRequired,
  locale: import_prop_types.default.string,
  maxDate: isMaxDate,
  minDate: isMinDate,
  onClick: import_prop_types.default.func,
  onMouseOver: import_prop_types.default.func,
  style: import_prop_types.default.objectOf(import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])),
  tileClassName: import_prop_types.default.oneOfType([import_prop_types.default.func, isClassName]),
  tileContent: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.node]),
  tileDisabled: import_prop_types.default.func
};

// node_modules/react-calendar/dist/esm/CenturyView.js
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
var CenturyView = function CenturyView2(props) {
  function renderDecades() {
    return import_react7.default.createElement(Decades, __assign4({}, props));
  }
  return import_react7.default.createElement("div", { className: "react-calendar__century-view" }, renderDecades());
};
CenturyView.propTypes = __assign4(__assign4({}, tileGroupProps), { showNeighboringCentury: import_prop_types2.default.bool });
var CenturyView_default = CenturyView;

// node_modules/react-calendar/dist/esm/DecadeView.js
var import_react10 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/react-calendar/dist/esm/DecadeView/Years.js
var import_react9 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/DecadeView/Year.js
var import_react8 = __toESM(require_react(), 1);
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
var __rest4 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className3 = "react-calendar__decade-view__years__year";
function Year(_a3) {
  var _b = _a3.classes, classes = _b === void 0 ? [] : _b, currentDecade = _a3.currentDecade, _c = _a3.formatYear, formatYear2 = _c === void 0 ? formatYear : _c, otherProps = __rest4(_a3, ["classes", "currentDecade", "formatYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className3) {
    classesProps.push(className3);
  }
  if (getDecadeStart(date).getFullYear() !== currentDecade) {
    classesProps.push("".concat(className3, "--neighboringDecade"));
  }
  return import_react8.default.createElement(Tile, __assign5({}, otherProps, { classes: classesProps, maxDateTransform: getYearEnd, minDateTransform: getYearStart, view: "decade" }), formatYear2(locale, date));
}

// node_modules/react-calendar/dist/esm/DecadeView/Years.js
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
var __rest5 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Years(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, showNeighboringDecade = props.showNeighboringDecade, value = props.value, valueType = props.valueType, otherProps = __rest5(props, ["activeStartDate", "hover", "showNeighboringDecade", "value", "valueType"]);
  var start = getBeginOfDecadeYear(activeStartDate);
  var end = start + (showNeighboringDecade ? 11 : 9);
  return import_react9.default.createElement(TileGroup, { className: "react-calendar__decade-view__years", dateTransform: getYearStart, dateType: "year", end, hover, renderTile: function(_a3) {
    var date = _a3.date, otherTileProps = __rest5(_a3, ["date"]);
    return import_react9.default.createElement(Year, __assign6({ key: date.getTime() }, otherProps, otherTileProps, { activeStartDate, currentDecade: start, date }));
  }, start, value, valueType });
}

// node_modules/react-calendar/dist/esm/DecadeView.js
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
var DecadeView = function DecadeView2(props) {
  function renderYears() {
    return import_react10.default.createElement(Years, __assign7({}, props));
  }
  return import_react10.default.createElement("div", { className: "react-calendar__decade-view" }, renderYears());
};
DecadeView.propTypes = __assign7(__assign7({}, tileGroupProps), { showNeighboringDecade: import_prop_types3.default.bool });
var DecadeView_default = DecadeView;

// node_modules/react-calendar/dist/esm/YearView.js
var import_react13 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/YearView/Months.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/YearView/Month.js
var import_react11 = __toESM(require_react(), 1);
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
var __rest6 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var __spreadArray2 = function(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
};
var className4 = "react-calendar__year-view__months__month";
function Month(_a3) {
  var _b = _a3.classes, classes = _b === void 0 ? [] : _b, _c = _a3.formatMonth, formatMonth2 = _c === void 0 ? formatMonth : _c, _d = _a3.formatMonthYear, formatMonthYear2 = _d === void 0 ? formatMonthYear : _d, otherProps = __rest6(_a3, ["classes", "formatMonth", "formatMonthYear"]);
  var date = otherProps.date, locale = otherProps.locale;
  return import_react11.default.createElement(Tile, __assign8({}, otherProps, { classes: __spreadArray2(__spreadArray2([], classes, true), [className4], false), formatAbbr: formatMonthYear2, maxDateTransform: getMonthEnd, minDateTransform: getMonthStart, view: "year" }), formatMonth2(locale, date));
}

// node_modules/react-calendar/dist/esm/YearView/Months.js
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
var __rest7 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Months(props) {
  var activeStartDate = props.activeStartDate, hover = props.hover, value = props.value, valueType = props.valueType, otherProps = __rest7(props, ["activeStartDate", "hover", "value", "valueType"]);
  var start = 0;
  var end = 11;
  var year = getYear(activeStartDate);
  return import_react12.default.createElement(TileGroup, { className: "react-calendar__year-view__months", dateTransform: function(monthIndex) {
    var date = new Date();
    date.setFullYear(year, monthIndex, 1);
    return getMonthStart(date);
  }, dateType: "month", end, hover, renderTile: function(_a3) {
    var date = _a3.date, otherTileProps = __rest7(_a3, ["date"]);
    return import_react12.default.createElement(Month, __assign9({ key: date.getTime() }, otherProps, otherTileProps, { activeStartDate, date }));
  }, start, value, valueType });
}

// node_modules/react-calendar/dist/esm/YearView.js
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
var YearView = function YearView2(props) {
  function renderMonths() {
    return import_react13.default.createElement(Months, __assign10({}, props));
  }
  return import_react13.default.createElement("div", { className: "react-calendar__year-view" }, renderMonths());
};
YearView.propTypes = __assign10({}, tileGroupProps);
var YearView_default = YearView;

// node_modules/react-calendar/dist/esm/MonthView.js
var import_react19 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/react-calendar/dist/esm/MonthView/Days.js
var import_react15 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/MonthView/Day.js
var import_react14 = __toESM(require_react(), 1);
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
var __rest8 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className5 = "react-calendar__month-view__days__day";
function Day(_a3) {
  var calendarTypeOrDeprecatedCalendarType = _a3.calendarType, _b = _a3.classes, classes = _b === void 0 ? [] : _b, currentMonthIndex = _a3.currentMonthIndex, _c = _a3.formatDay, formatDay2 = _c === void 0 ? formatDay : _c, _d = _a3.formatLongDate, formatLongDate2 = _d === void 0 ? formatLongDate : _d, otherProps = __rest8(_a3, ["calendarType", "classes", "currentMonthIndex", "formatDay", "formatLongDate"]);
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var date = otherProps.date, locale = otherProps.locale;
  var classesProps = [];
  if (classes) {
    classesProps.push.apply(classesProps, classes);
  }
  if (className5) {
    classesProps.push(className5);
  }
  if (isWeekend(date, calendarType)) {
    classesProps.push("".concat(className5, "--weekend"));
  }
  if (date.getMonth() !== currentMonthIndex) {
    classesProps.push("".concat(className5, "--neighboringMonth"));
  }
  return import_react14.default.createElement(Tile, __assign11({}, otherProps, { classes: classesProps, formatAbbr: formatLongDate2, maxDateTransform: getDayEnd, minDateTransform: getDayStart, view: "month" }), formatDay2(locale, date));
}

// node_modules/react-calendar/dist/esm/MonthView/Days.js
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
var __rest9 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Days(props) {
  var activeStartDate = props.activeStartDate, calendarTypeOrDeprecatedCalendarType = props.calendarType, hover = props.hover, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, showNeighboringMonth = props.showNeighboringMonth, value = props.value, valueType = props.valueType, otherProps = __rest9(props, ["activeStartDate", "calendarType", "hover", "showFixedNumberOfWeeks", "showNeighboringMonth", "value", "valueType"]);
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var year = getYear(activeStartDate);
  var monthIndex = getMonth(activeStartDate);
  var hasFixedNumberOfWeeks = showFixedNumberOfWeeks || showNeighboringMonth;
  var dayOfWeek = getDayOfWeek(activeStartDate, calendarType);
  var offset = hasFixedNumberOfWeeks ? 0 : dayOfWeek;
  var start = (hasFixedNumberOfWeeks ? -dayOfWeek : 0) + 1;
  var end = function() {
    if (showFixedNumberOfWeeks) {
      return start + 6 * 7 - 1;
    }
    var daysInMonth = getDaysInMonth(activeStartDate);
    if (showNeighboringMonth) {
      var activeEndDate = new Date();
      activeEndDate.setFullYear(year, monthIndex, daysInMonth);
      activeEndDate.setHours(0, 0, 0, 0);
      var daysUntilEndOfTheWeek = 7 - getDayOfWeek(activeEndDate, calendarType) - 1;
      return daysInMonth + daysUntilEndOfTheWeek;
    }
    return daysInMonth;
  }();
  return import_react15.default.createElement(TileGroup, { className: "react-calendar__month-view__days", count: 7, dateTransform: function(day) {
    var date = new Date();
    date.setFullYear(year, monthIndex, day);
    return getDayStart(date);
  }, dateType: "day", hover, end, renderTile: function(_a3) {
    var date = _a3.date, otherTileProps = __rest9(_a3, ["date"]);
    return import_react15.default.createElement(Day, __assign12({ key: date.getTime() }, otherProps, otherTileProps, { activeStartDate, calendarType: calendarTypeOrDeprecatedCalendarType, currentMonthIndex: monthIndex, date }));
  }, offset, start, value, valueType });
}

// node_modules/react-calendar/dist/esm/MonthView/Weekdays.js
var import_react16 = __toESM(require_react(), 1);
var className6 = "react-calendar__month-view__weekdays";
var weekdayClassName = "".concat(className6, "__weekday");
function Weekdays(props) {
  var calendarTypeOrDeprecatedCalendarType = props.calendarType, _a3 = props.formatShortWeekday, formatShortWeekday2 = _a3 === void 0 ? formatShortWeekday : _a3, _b = props.formatWeekday, formatWeekday2 = _b === void 0 ? formatWeekday : _b, locale = props.locale, onMouseLeave = props.onMouseLeave;
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var anyDate = new Date();
  var beginOfMonth = getMonthStart(anyDate);
  var year = getYear(beginOfMonth);
  var monthIndex = getMonth(beginOfMonth);
  var weekdays = [];
  for (var weekday = 1; weekday <= 7; weekday += 1) {
    var weekdayDate = new Date(year, monthIndex, weekday - getDayOfWeek(beginOfMonth, calendarType));
    var abbr = formatWeekday2(locale, weekdayDate);
    weekdays.push(import_react16.default.createElement(
      "div",
      { key: weekday, className: clsx_default(weekdayClassName, isCurrentDayOfWeek(weekdayDate) && "".concat(weekdayClassName, "--current"), isWeekend(weekdayDate, calendarType) && "".concat(weekdayClassName, "--weekend")) },
      import_react16.default.createElement("abbr", { "aria-label": abbr, title: abbr }, formatShortWeekday2(locale, weekdayDate).replace(".", ""))
    ));
  }
  return import_react16.default.createElement(Flex, { className: className6, count: 7, onFocus: onMouseLeave, onMouseOver: onMouseLeave }, weekdays);
}

// node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js
var import_react18 = __toESM(require_react(), 1);

// node_modules/react-calendar/dist/esm/MonthView/WeekNumber.js
var import_react17 = __toESM(require_react(), 1);
var __assign13 = function() {
  __assign13 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign13.apply(this, arguments);
};
var __rest10 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var className7 = "react-calendar__tile";
function WeekNumber(props) {
  var onClickWeekNumber = props.onClickWeekNumber, weekNumber = props.weekNumber;
  var children = import_react17.default.createElement("span", null, weekNumber);
  if (onClickWeekNumber) {
    var date_1 = props.date, onClickWeekNumber_1 = props.onClickWeekNumber, weekNumber_1 = props.weekNumber, otherProps = __rest10(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return import_react17.default.createElement("button", __assign13({}, otherProps, { className: className7, onClick: function(event) {
      return onClickWeekNumber_1(weekNumber_1, date_1, event);
    }, type: "button" }), children);
  } else {
    var date = props.date, onClickWeekNumber_2 = props.onClickWeekNumber, weekNumber_2 = props.weekNumber, otherProps = __rest10(props, ["date", "onClickWeekNumber", "weekNumber"]);
    return import_react17.default.createElement("div", __assign13({}, otherProps, { className: className7 }), children);
  }
}

// node_modules/react-calendar/dist/esm/MonthView/WeekNumbers.js
function WeekNumbers(props) {
  var activeStartDate = props.activeStartDate, calendarTypeOrDeprecatedCalendarType = props.calendarType, onClickWeekNumber = props.onClickWeekNumber, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var calendarType = mapCalendarType(calendarTypeOrDeprecatedCalendarType);
  var numberOfWeeks = function() {
    if (showFixedNumberOfWeeks) {
      return 6;
    }
    var numberOfDays = getDaysInMonth(activeStartDate);
    var startWeekday = getDayOfWeek(activeStartDate, calendarType);
    var days = numberOfDays - (7 - startWeekday);
    return 1 + Math.ceil(days / 7);
  }();
  var dates = function() {
    var year = getYear(activeStartDate);
    var monthIndex = getMonth(activeStartDate);
    var day = getDate(activeStartDate);
    var result = [];
    for (var index = 0; index < numberOfWeeks; index += 1) {
      result.push(getBeginOfWeek(new Date(year, monthIndex, day + index * 7), calendarType));
    }
    return result;
  }();
  var weekNumbers = dates.map(function(date) {
    return getWeekNumber(date, calendarType);
  });
  return import_react18.default.createElement(Flex, { className: "react-calendar__month-view__weekNumbers", count: numberOfWeeks, direction: "column", onFocus: onMouseLeave, onMouseOver: onMouseLeave, style: { flexBasis: "calc(100% * (1 / 8)", flexShrink: 0 } }, weekNumbers.map(function(weekNumber, weekIndex) {
    var date = dates[weekIndex];
    if (!date) {
      throw new Error("date is not defined");
    }
    return import_react18.default.createElement(WeekNumber, { key: weekNumber, date, onClickWeekNumber, weekNumber });
  }));
}

// node_modules/react-calendar/dist/esm/MonthView.js
var __assign14 = function() {
  __assign14 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign14.apply(this, arguments);
};
var __rest11 = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function getCalendarTypeFromLocale(locale) {
  if (locale) {
    for (var _i = 0, _a3 = Object.entries(CALENDAR_TYPE_LOCALES); _i < _a3.length; _i++) {
      var _b = _a3[_i], calendarType = _b[0], locales = _b[1];
      if (locales.includes(locale)) {
        return calendarType;
      }
    }
  }
  return CALENDAR_TYPES.ISO_8601;
}
var MonthView = function MonthView2(props) {
  var activeStartDate = props.activeStartDate, locale = props.locale, onMouseLeave = props.onMouseLeave, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks;
  var _a3 = props.calendarType, calendarType = _a3 === void 0 ? getCalendarTypeFromLocale(locale) : _a3, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, onClickWeekNumber = props.onClickWeekNumber, showWeekNumbers = props.showWeekNumbers, childProps = __rest11(props, ["calendarType", "formatShortWeekday", "formatWeekday", "onClickWeekNumber", "showWeekNumbers"]);
  function renderWeekdays() {
    return import_react19.default.createElement(Weekdays, { calendarType, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, locale, onMouseLeave });
  }
  function renderWeekNumbers() {
    if (!showWeekNumbers) {
      return null;
    }
    return import_react19.default.createElement(WeekNumbers, { activeStartDate, calendarType, onClickWeekNumber, onMouseLeave, showFixedNumberOfWeeks });
  }
  function renderDays() {
    return import_react19.default.createElement(Days, __assign14({ calendarType }, childProps));
  }
  var className8 = "react-calendar__month-view";
  return import_react19.default.createElement(
    "div",
    { className: clsx_default(className8, showWeekNumbers ? "".concat(className8, "--weekNumbers") : "") },
    import_react19.default.createElement(
      "div",
      { style: {
        display: "flex",
        alignItems: "flex-end"
      } },
      renderWeekNumbers(),
      import_react19.default.createElement(
        "div",
        { style: {
          flexGrow: 1,
          width: "100%"
        } },
        renderWeekdays(),
        renderDays()
      )
    )
  );
};
MonthView.propTypes = __assign14(__assign14({}, tileGroupProps), { calendarType: isCalendarType, formatDay: import_prop_types4.default.func, formatLongDate: import_prop_types4.default.func, formatShortWeekday: import_prop_types4.default.func, formatWeekday: import_prop_types4.default.func, onClickWeekNumber: import_prop_types4.default.func, onMouseLeave: import_prop_types4.default.func, showFixedNumberOfWeeks: import_prop_types4.default.bool, showNeighboringMonth: import_prop_types4.default.bool, showWeekNumbers: import_prop_types4.default.bool });
var MonthView_default = MonthView;

// node_modules/react-calendar/dist/esm/Calendar.js
"use client";
var __assign15 = function() {
  __assign15 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign15.apply(this, arguments);
};
var baseClassName = "react-calendar";
var allViews2 = ["century", "decade", "year", "month"];
var allValueTypes = ["decade", "year", "month", "day"];
var defaultMinDate = new Date();
defaultMinDate.setFullYear(1, 0, 1);
defaultMinDate.setHours(0, 0, 0, 0);
var defaultMaxDate = new Date(864e13);
function toDate(value) {
  if (value instanceof Date) {
    return value;
  }
  return new Date(value);
}
function getLimitedViews(minDetail, maxDetail) {
  return allViews2.slice(allViews2.indexOf(minDetail), allViews2.indexOf(maxDetail) + 1);
}
function isViewAllowed(view, minDetail, maxDetail) {
  var views = getLimitedViews(minDetail, maxDetail);
  return views.indexOf(view) !== -1;
}
function getView(view, minDetail, maxDetail) {
  if (!view) {
    return maxDetail;
  }
  if (isViewAllowed(view, minDetail, maxDetail)) {
    return view;
  }
  return maxDetail;
}
function getValueType(view) {
  var index = allViews2.indexOf(view);
  return allValueTypes[index];
}
function getValue(value, index) {
  var rawValue = Array.isArray(value) ? value[index] : value;
  if (!rawValue) {
    return null;
  }
  var valueDate = toDate(rawValue);
  if (isNaN(valueDate.getTime())) {
    throw new Error("Invalid date: ".concat(value));
  }
  return valueDate;
}
function getDetailValue(_a3, index) {
  var value = _a3.value, minDate = _a3.minDate, maxDate = _a3.maxDate, maxDetail = _a3.maxDetail;
  var valuePiece = getValue(value, index);
  if (!valuePiece) {
    return null;
  }
  var valueType = getValueType(maxDetail);
  var detailValueFrom = function() {
    switch (index) {
      case 0:
        return getBegin(valueType, valuePiece);
      case 1:
        return getEnd(valueType, valuePiece);
      default:
        throw new Error("Invalid index value: ".concat(index));
    }
  }();
  return between(detailValueFrom, minDate, maxDate);
}
var getDetailValueFrom = function(args) {
  return getDetailValue(args, 0);
};
var getDetailValueTo = function(args) {
  return getDetailValue(args, 1);
};
var getDetailValueArray = function(args) {
  return [getDetailValueFrom, getDetailValueTo].map(function(fn) {
    return fn(args);
  });
};
function getActiveStartDate(_a3) {
  var maxDate = _a3.maxDate, maxDetail = _a3.maxDetail, minDate = _a3.minDate, minDetail = _a3.minDetail, value = _a3.value, view = _a3.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = getDetailValueFrom({
    value,
    minDate,
    maxDate,
    maxDetail
  }) || new Date();
  return getBegin(rangeType, valueFrom);
}
function getInitialActiveStartDate(_a3) {
  var activeStartDate = _a3.activeStartDate, defaultActiveStartDate = _a3.defaultActiveStartDate, defaultValue = _a3.defaultValue, defaultView = _a3.defaultView, maxDate = _a3.maxDate, maxDetail = _a3.maxDetail, minDate = _a3.minDate, minDetail = _a3.minDetail, value = _a3.value, view = _a3.view;
  var rangeType = getView(view, minDetail, maxDetail);
  var valueFrom = activeStartDate || defaultActiveStartDate;
  if (valueFrom) {
    return getBegin(rangeType, valueFrom);
  }
  return getActiveStartDate({
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    value: value || defaultValue,
    view: view || defaultView
  });
}
function getIsSingleValue(value) {
  return value && (!Array.isArray(value) || value.length === 1);
}
function areDatesEqual(date1, date2) {
  return date1 instanceof Date && date2 instanceof Date && date1.getTime() === date2.getTime();
}
var Calendar = (0, import_react20.forwardRef)(function Calendar2(props, ref) {
  var activeStartDateProps = props.activeStartDate, allowPartialRange = props.allowPartialRange, calendarType = props.calendarType, className8 = props.className, defaultActiveStartDate = props.defaultActiveStartDate, defaultValue = props.defaultValue, defaultView = props.defaultView, formatDay2 = props.formatDay, formatLongDate2 = props.formatLongDate, formatMonth2 = props.formatMonth, formatMonthYear2 = props.formatMonthYear, formatShortWeekday2 = props.formatShortWeekday, formatWeekday2 = props.formatWeekday, formatYear2 = props.formatYear, _a3 = props.goToRangeStartOnSelect, goToRangeStartOnSelect = _a3 === void 0 ? true : _a3, inputRef = props.inputRef, locale = props.locale, _b = props.maxDate, maxDate = _b === void 0 ? defaultMaxDate : _b, _c = props.maxDetail, maxDetail = _c === void 0 ? "month" : _c, _d = props.minDate, minDate = _d === void 0 ? defaultMinDate : _d, _e = props.minDetail, minDetail = _e === void 0 ? "century" : _e, navigationAriaLabel = props.navigationAriaLabel, navigationAriaLive = props.navigationAriaLive, navigationLabel = props.navigationLabel, next2AriaLabel = props.next2AriaLabel, next2Label = props.next2Label, nextAriaLabel = props.nextAriaLabel, nextLabel = props.nextLabel, onActiveStartDateChange = props.onActiveStartDateChange, onChangeProps = props.onChange, onClickDay = props.onClickDay, onClickDecade = props.onClickDecade, onClickMonth = props.onClickMonth, onClickWeekNumber = props.onClickWeekNumber, onClickYear = props.onClickYear, onDrillDown = props.onDrillDown, onDrillUp = props.onDrillUp, onViewChange = props.onViewChange, prev2AriaLabel = props.prev2AriaLabel, prev2Label = props.prev2Label, prevAriaLabel = props.prevAriaLabel, prevLabel = props.prevLabel, _f = props.returnValue, returnValue = _f === void 0 ? "start" : _f, selectRange = props.selectRange, showDoubleView = props.showDoubleView, showFixedNumberOfWeeks = props.showFixedNumberOfWeeks, _g = props.showNavigation, showNavigation = _g === void 0 ? true : _g, showNeighboringCentury = props.showNeighboringCentury, showNeighboringDecade = props.showNeighboringDecade, _h = props.showNeighboringMonth, showNeighboringMonth = _h === void 0 ? true : _h, showWeekNumbers = props.showWeekNumbers, tileClassName = props.tileClassName, tileContent = props.tileContent, tileDisabled = props.tileDisabled, valueProps = props.value, viewProps = props.view;
  var _j = (0, import_react20.useState)(defaultActiveStartDate), activeStartDateState = _j[0], setActiveStartDateState = _j[1];
  var _k = (0, import_react20.useState)(null), hoverState = _k[0], setHoverState = _k[1];
  var _l = (0, import_react20.useState)(Array.isArray(defaultValue) ? defaultValue.map(function(el) {
    return el !== null ? toDate(el) : null;
  }) : defaultValue !== null && defaultValue !== void 0 ? toDate(defaultValue) : null), valueState = _l[0], setValueState = _l[1];
  var _m = (0, import_react20.useState)(defaultView), viewState = _m[0], setViewState = _m[1];
  var activeStartDate = activeStartDateProps || activeStartDateState || getInitialActiveStartDate({
    activeStartDate: activeStartDateProps,
    defaultActiveStartDate,
    defaultValue,
    defaultView,
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    value: valueProps,
    view: viewProps
  });
  var value = function() {
    var rawValue = function() {
      if (selectRange && getIsSingleValue(valueState)) {
        return valueState;
      }
      return valueProps !== void 0 ? valueProps : valueState;
    }();
    if (!rawValue) {
      return null;
    }
    return Array.isArray(rawValue) ? rawValue.map(function(el) {
      return el !== null ? toDate(el) : null;
    }) : rawValue !== null ? toDate(rawValue) : null;
  }();
  var valueType = getValueType(maxDetail);
  var view = getView(viewProps || viewState, minDetail, maxDetail);
  var views = getLimitedViews(minDetail, maxDetail);
  var hover = selectRange ? hoverState : null;
  var drillDownAvailable = views.indexOf(view) < views.length - 1;
  var drillUpAvailable = views.indexOf(view) > 0;
  var getProcessedValue = (0, import_react20.useCallback)(function(value2) {
    var processFunction = function() {
      switch (returnValue) {
        case "start":
          return getDetailValueFrom;
        case "end":
          return getDetailValueTo;
        case "range":
          return getDetailValueArray;
        default:
          throw new Error("Invalid returnValue.");
      }
    }();
    return processFunction({
      maxDate,
      maxDetail,
      minDate,
      value: value2
    });
  }, [maxDate, maxDetail, minDate, returnValue]);
  var setActiveStartDate = (0, import_react20.useCallback)(function(nextActiveStartDate, action) {
    setActiveStartDateState(nextActiveStartDate);
    var args = {
      action,
      activeStartDate: nextActiveStartDate,
      value,
      view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
  }, [activeStartDate, onActiveStartDateChange, value, view]);
  var onClickTile = (0, import_react20.useCallback)(function(value2, event) {
    var callback = function() {
      switch (view) {
        case "century":
          return onClickDecade;
        case "decade":
          return onClickYear;
        case "year":
          return onClickMonth;
        case "month":
          return onClickDay;
        default:
          throw new Error("Invalid view: ".concat(view, "."));
      }
    }();
    if (callback)
      callback(value2, event);
  }, [onClickDay, onClickDecade, onClickMonth, onClickYear, view]);
  var drillDown = (0, import_react20.useCallback)(function(nextActiveStartDate, event) {
    if (!drillDownAvailable) {
      return;
    }
    onClickTile(nextActiveStartDate, event);
    var nextView = views[views.indexOf(view) + 1];
    if (!nextView) {
      throw new Error("Attempted to drill down from the lowest view.");
    }
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: "drillDown",
      activeStartDate: nextActiveStartDate,
      value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillDown) {
      onDrillDown(args);
    }
  }, [
    activeStartDate,
    drillDownAvailable,
    onActiveStartDateChange,
    onClickTile,
    onDrillDown,
    onViewChange,
    value,
    view,
    views
  ]);
  var drillUp = (0, import_react20.useCallback)(function() {
    if (!drillUpAvailable) {
      return;
    }
    var nextView = views[views.indexOf(view) - 1];
    if (!nextView) {
      throw new Error("Attempted to drill up from the highest view.");
    }
    var nextActiveStartDate = getBegin(nextView, activeStartDate);
    setActiveStartDateState(nextActiveStartDate);
    setViewState(nextView);
    var args = {
      action: "drillUp",
      activeStartDate: nextActiveStartDate,
      value,
      view: nextView
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onViewChange && view !== nextView) {
      onViewChange(args);
    }
    if (onDrillUp) {
      onDrillUp(args);
    }
  }, [
    activeStartDate,
    drillUpAvailable,
    onActiveStartDateChange,
    onDrillUp,
    onViewChange,
    value,
    view,
    views
  ]);
  var onChange = (0, import_react20.useCallback)(function(rawNextValue, event) {
    var previousValue = value;
    onClickTile(rawNextValue, event);
    var isFirstValueInRange = selectRange && !getIsSingleValue(previousValue);
    var nextValue;
    if (selectRange) {
      if (isFirstValueInRange) {
        nextValue = getBegin(valueType, rawNextValue);
      } else {
        if (!previousValue) {
          throw new Error("previousValue is required");
        }
        if (Array.isArray(previousValue)) {
          throw new Error("previousValue must not be an array");
        }
        nextValue = getValueRange(valueType, previousValue, rawNextValue);
      }
    } else {
      nextValue = getProcessedValue(rawNextValue);
    }
    var nextActiveStartDate = !selectRange || isFirstValueInRange || goToRangeStartOnSelect ? getActiveStartDate({
      maxDate,
      maxDetail,
      minDate,
      minDetail,
      value: nextValue,
      view
    }) : null;
    event.persist();
    setActiveStartDateState(nextActiveStartDate);
    setValueState(nextValue);
    var args = {
      action: "onChange",
      activeStartDate: nextActiveStartDate,
      value: nextValue,
      view
    };
    if (onActiveStartDateChange && !areDatesEqual(activeStartDate, nextActiveStartDate)) {
      onActiveStartDateChange(args);
    }
    if (onChangeProps) {
      if (selectRange) {
        var isSingleValue = getIsSingleValue(nextValue);
        if (!isSingleValue) {
          onChangeProps(nextValue || null, event);
        } else if (allowPartialRange) {
          if (Array.isArray(nextValue)) {
            throw new Error("value must not be an array");
          }
          onChangeProps([nextValue || null, null], event);
        }
      } else {
        onChangeProps(nextValue || null, event);
      }
    }
  }, [
    activeStartDate,
    allowPartialRange,
    getProcessedValue,
    goToRangeStartOnSelect,
    maxDate,
    maxDetail,
    minDate,
    minDetail,
    onActiveStartDateChange,
    onChangeProps,
    onClickTile,
    selectRange,
    value,
    valueType,
    view
  ]);
  function onMouseOver(nextHover) {
    setHoverState(nextHover);
  }
  function onMouseLeave() {
    setHoverState(null);
  }
  (0, import_react20.useImperativeHandle)(ref, function() {
    return {
      activeStartDate,
      drillDown,
      drillUp,
      onChange,
      setActiveStartDate,
      value,
      view
    };
  }, [activeStartDate, drillDown, drillUp, onChange, setActiveStartDate, value, view]);
  function renderContent(next) {
    var currentActiveStartDate = next ? getBeginNext(view, activeStartDate) : getBegin(view, activeStartDate);
    var onClick = drillDownAvailable ? drillDown : onChange;
    var commonProps = {
      activeStartDate: currentActiveStartDate,
      hover,
      locale,
      maxDate,
      minDate,
      onClick,
      onMouseOver: selectRange ? onMouseOver : void 0,
      tileClassName,
      tileContent,
      tileDisabled,
      value,
      valueType
    };
    switch (view) {
      case "century": {
        return import_react20.default.createElement(CenturyView_default, __assign15({ formatYear: formatYear2, showNeighboringCentury }, commonProps));
      }
      case "decade": {
        return import_react20.default.createElement(DecadeView_default, __assign15({ formatYear: formatYear2, showNeighboringDecade }, commonProps));
      }
      case "year": {
        return import_react20.default.createElement(YearView_default, __assign15({ formatMonth: formatMonth2, formatMonthYear: formatMonthYear2 }, commonProps));
      }
      case "month": {
        return import_react20.default.createElement(MonthView_default, __assign15({ calendarType, formatDay: formatDay2, formatLongDate: formatLongDate2, formatShortWeekday: formatShortWeekday2, formatWeekday: formatWeekday2, onClickWeekNumber, onMouseLeave: selectRange ? onMouseLeave : void 0, showFixedNumberOfWeeks: typeof showFixedNumberOfWeeks !== "undefined" ? showFixedNumberOfWeeks : showDoubleView, showNeighboringMonth, showWeekNumbers }, commonProps));
      }
      default:
        throw new Error("Invalid view: ".concat(view, "."));
    }
  }
  function renderNavigation() {
    if (!showNavigation) {
      return null;
    }
    return import_react20.default.createElement(Navigation, { activeStartDate, drillUp, formatMonthYear: formatMonthYear2, formatYear: formatYear2, locale, maxDate, minDate, navigationAriaLabel, navigationAriaLive, navigationLabel, next2AriaLabel, next2Label, nextAriaLabel, nextLabel, prev2AriaLabel, prev2Label, prevAriaLabel, prevLabel, setActiveStartDate, showDoubleView, view, views });
  }
  var valueArray = Array.isArray(value) ? value : [value];
  return import_react20.default.createElement(
    "div",
    { className: clsx_default(baseClassName, selectRange && valueArray.length === 1 && "".concat(baseClassName, "--selectRange"), showDoubleView && "".concat(baseClassName, "--doubleView"), className8), ref: inputRef },
    renderNavigation(),
    import_react20.default.createElement(
      "div",
      { className: "".concat(baseClassName, "__viewContainer"), onBlur: selectRange ? onMouseLeave : void 0, onMouseLeave: selectRange ? onMouseLeave : void 0 },
      renderContent(),
      showDoubleView ? renderContent(true) : null
    )
  );
});
var isActiveStartDate = import_prop_types5.default.instanceOf(Date);
var isValue2 = import_prop_types5.default.oneOfType([import_prop_types5.default.string, import_prop_types5.default.instanceOf(Date)]);
var isValueOrValueArray = import_prop_types5.default.oneOfType([isValue2, rangeOf(isValue2)]);
Calendar.propTypes = {
  activeStartDate: isActiveStartDate,
  allowPartialRange: import_prop_types5.default.bool,
  calendarType: isCalendarType,
  className: isClassName,
  defaultActiveStartDate: isActiveStartDate,
  defaultValue: isValueOrValueArray,
  defaultView: isView,
  formatDay: import_prop_types5.default.func,
  formatLongDate: import_prop_types5.default.func,
  formatMonth: import_prop_types5.default.func,
  formatMonthYear: import_prop_types5.default.func,
  formatShortWeekday: import_prop_types5.default.func,
  formatWeekday: import_prop_types5.default.func,
  formatYear: import_prop_types5.default.func,
  goToRangeStartOnSelect: import_prop_types5.default.bool,
  inputRef: isRef,
  locale: import_prop_types5.default.string,
  maxDate: isMaxDate,
  maxDetail: import_prop_types5.default.oneOf(allViews2),
  minDate: isMinDate,
  minDetail: import_prop_types5.default.oneOf(allViews2),
  navigationAriaLabel: import_prop_types5.default.string,
  navigationAriaLive: import_prop_types5.default.oneOf(["off", "polite", "assertive"]),
  navigationLabel: import_prop_types5.default.func,
  next2AriaLabel: import_prop_types5.default.string,
  next2Label: import_prop_types5.default.node,
  nextAriaLabel: import_prop_types5.default.string,
  nextLabel: import_prop_types5.default.node,
  onActiveStartDateChange: import_prop_types5.default.func,
  onChange: import_prop_types5.default.func,
  onClickDay: import_prop_types5.default.func,
  onClickDecade: import_prop_types5.default.func,
  onClickMonth: import_prop_types5.default.func,
  onClickWeekNumber: import_prop_types5.default.func,
  onClickYear: import_prop_types5.default.func,
  onDrillDown: import_prop_types5.default.func,
  onDrillUp: import_prop_types5.default.func,
  onViewChange: import_prop_types5.default.func,
  prev2AriaLabel: import_prop_types5.default.string,
  prev2Label: import_prop_types5.default.node,
  prevAriaLabel: import_prop_types5.default.string,
  prevLabel: import_prop_types5.default.node,
  returnValue: import_prop_types5.default.oneOf(["start", "end", "range"]),
  selectRange: import_prop_types5.default.bool,
  showDoubleView: import_prop_types5.default.bool,
  showFixedNumberOfWeeks: import_prop_types5.default.bool,
  showNavigation: import_prop_types5.default.bool,
  showNeighboringCentury: import_prop_types5.default.bool,
  showNeighboringDecade: import_prop_types5.default.bool,
  showNeighboringMonth: import_prop_types5.default.bool,
  showWeekNumbers: import_prop_types5.default.bool,
  tileClassName: import_prop_types5.default.oneOfType([import_prop_types5.default.func, isClassName]),
  tileContent: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.node]),
  tileDisabled: import_prop_types5.default.func,
  value: isValueOrValueArray,
  view: isView
};
var Calendar_default = Calendar;

// node_modules/react-calendar/dist/esm/index.js
var esm_default2 = Calendar_default;

// app/components/datePicker/datePicker.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DatePicker({ show, id, setDate, date, minDate, dateDisable }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    id,
    className: "absolute z-10 r-calendar",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(esm_default2, {
      locale: "en-US",
      onChange: setDate,
      value: date,
      calendarType: "iso8601",
      onClickDay: (e) => {
        show(false);
      },
      tileDisabled: dateDisable ? ({ date: date2 }) => [1, 2, 3, 4].includes(date2.getDay()) : null,
      minDate
    }, void 0, false, {
      fileName: "app/components/datePicker/datePicker.jsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/datePicker/datePicker.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var datePicker_default = DatePicker;

// app/components/Modal/confirmationModal.jsx
var import_react22 = __toESM(require_react());
var import_react_modal = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ConfirmationModal(prop) {
  const [modalIsOpen, setIsOpen] = (0, import_react22.useState)(
    (prop == null ? void 0 : prop.modalIsOpen) === true ? true : false
  );
  const [preventDouble, setPreventDouble] = import_react22.default.useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "300px",
      zIndex: 20
    },
    overlay: {
      zIndex: 20
    }
  };
  const Handle = async () => {
    setPreventDouble(true);
    await (prop == null ? void 0 : prop.callFunction());
    prop == null ? void 0 : prop.setIsOpen(false);
    setIsOpen(false);
    setPreventDouble(false);
  };
  const closeHandle = () => {
    setIsOpen(false);
    (prop == null ? void 0 : prop.cancelHandle) != void 0 && (prop == null ? void 0 : prop.cancelHandle());
    (prop == null ? void 0 : prop.CopyMealClickIndex) !== void 0 && (prop == null ? void 0 : prop.CopyMealClickIndex(""));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_modal.default, {
    isOpen: modalIsOpen,
    onRequestClose: () => (prop == null ? void 0 : prop.Loader) !== void 0 ? "" : closeHandle(),
    style: customStyles,
    contentLabel: "Logout Modal",
    ariaHideApp: false,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "p-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-black block text-center",
          children: [
            " ",
            prop == null ? void 0 : prop.content
          ]
        }, void 0, true, {
          fileName: "app/components/Modal/confirmationModal.jsx",
          lineNumber: 46,
          columnNumber: 9
        }, this),
        (prop == null ? void 0 : prop.Loader) !== void 0 && preventDouble ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex justify-center my-6",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            type: "button",
            className: "bg-primary flex items-center gap-1 p-4 text-white font-medium ",
            disabled: true,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                  }, void 0, false, {
                    fileName: "app/components/Modal/confirmationModal.jsx",
                    lineNumber: 60,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  }, void 0, false, {
                    fileName: "app/components/Modal/confirmationModal.jsx",
                    lineNumber: 68,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/Modal/confirmationModal.jsx",
                lineNumber: 54,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-medium leading-none",
                children: "Processing..."
              }, void 0, false, {
                fileName: "app/components/Modal/confirmationModal.jsx",
                lineNumber: 74,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Modal/confirmationModal.jsx",
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/components/Modal/confirmationModal.jsx",
          lineNumber: 48,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-row flex mt-6 justify-center gap-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "button",
              className: "inline-flex  items-center justify-center h-[40px] text-[18px] rounded border bg-transparent border-primary px-4 py-2 text-sm font-bold text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              onClick: () => closeHandle(),
              children: "Cancel"
            }, void 0, false, {
              fileName: "app/components/Modal/confirmationModal.jsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "button",
              onClick: () => preventDouble === false && Handle(),
              className: "inline-flex  items-center justify-center h-[40px] text-[18px] rounded border bg-primary border-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              children: "Ok"
            }, void 0, false, {
              fileName: "app/components/Modal/confirmationModal.jsx",
              lineNumber: 86,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/Modal/confirmationModal.jsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        (prop == null ? void 0 : prop.Loader) !== void 0 && (prop == null ? void 0 : prop.Loader) && preventDouble && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-row flex justify-center gap-3",
          children: "Menu data is updating. Please wait for a few seconds. Do not refresh the current page during this process."
        }, void 0, false, {
          fileName: "app/components/Modal/confirmationModal.jsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Modal/confirmationModal.jsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/Modal/confirmationModal.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
var confirmationModal_default = ConfirmationModal;

// app/components/datePicker/clickOutsideDiv.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ClickOutsideDiv = ({
  Id,
  startDate,
  setRefresh,
  refresh,
  locationId,
  type
}) => {
  const DateFormat = "yyyy-MM-dd";
  const options = [
    { name: "Do not repeat", id: 0 },
    { name: "Weekly", id: 1 },
    { name: "Monthly", id: 2 },
    { name: "Annually", id: 3 },
    { name: "Custom", id: 4 }
  ];
  const days = [
    { name: "Monday", id: 1 },
    { name: "Tuesday", id: 2 },
    { name: "Wednesday", id: 3 },
    { name: "Thursday", id: 4 },
    { name: "Friday", id: 5 },
    { name: "Saturday", id: 6 },
    { name: "Sunday", id: 0 }
  ];
  const [isDivVisible, setDivVisible] = (0, import_react23.useState)(false);
  const divRef = (0, import_react23.useRef)(null);
  const isHydrated = useHydrated();
  const [calenderShow, setCalenderShow] = (0, import_react23.useState)(false);
  const [calenderShow1, setCalenderShow1] = (0, import_react23.useState)(false);
  const [calenderShow2, setCalenderShow2] = (0, import_react23.useState)(false);
  const [week, setWeek] = (0, import_react23.useState)("");
  const [calStartDate, setCalStartDate] = (0, import_react23.useState)("");
  const [calEndDate, setCalEndDate] = (0, import_react23.useState)("");
  const [daysCopy, setDaysCopy] = (0, import_react23.useState)(options[0]);
  const [Occurrence, setOccurrence] = (0, import_react23.useState)(false);
  const [daysSelect, setDaysSelect] = (0, import_react23.useState)([]);
  const [modalIsOpen, setIsOpen] = (0, import_react23.useState)(false);
  const [customTrue, setCustomTrue] = (0, import_react23.useState)(false);
  const [screenId, setScreenId] = (0, import_react23.useState)("");
  const [presentData, setPresentData] = (0, import_react23.useState)("");
  const [modalLoader, setModalLoader] = (0, import_react23.useState)(false);
  const [doneLoader, setDoneLoader] = (0, import_react23.useState)(false);
  (0, import_react23.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setDivVisible(false);
        setCalenderShow(false);
        setOccurrence(false);
        cancelHandle();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleDiv = () => {
    setDivVisible(!isDivVisible);
    setCalenderShow(false);
    setCalenderShow1(false);
    setCalenderShow2(false);
    setDaysCopy(options[0]);
  };
  const RepeatSelection = (prop) => {
    const onChangeHandle = (e) => {
      prop == false && setCustomTrue(false);
      setOccurrence(prop ? true : (e == null ? void 0 : e.id) === 4);
      setDaysCopy((e == null ? void 0 : e.id) === 4 ? options[1] : e);
      return "";
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_select_cjs_default._default, {
      id: Id,
      instanceId: Id,
      classNamePrefix: "cursor-pointer react-select",
      className: " react-select-container font-normal text-sm w-full",
      maxMenuHeight: 250,
      onChange: (e) => onChangeHandle(e),
      isSearchable: false,
      components: { IndicatorSeparator: () => null },
      value: customTrue === true && prop === false ? options[4] : daysCopy,
      options: prop ? options.slice(1, 4) : options,
      getOptionLabel: (option) => option.name,
      getOptionValue: (option) => option.id,
      styles: {
        control: (baseStyles) => ({
          ...baseStyles,
          border: "none",
          boxShadow: "none"
        })
      }
    }, void 0, false, {
      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
      lineNumber: 94,
      columnNumber: 7
    }, this);
  };
  const DatePickerComponent = ({ show, setShow, date, setDate, minDate }) => {
    return show && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "day-calendar absolute",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(datePicker_default, {
        id: Id,
        show: setShow,
        setDate,
        date: date !== "" ? date : startDate,
        minDate,
        dateDisable: type === "activity" ? true : false
      }, void 0, false, {
        fileName: "app/components/datePicker/clickOutsideDiv.jsx",
        lineNumber: 121,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
      lineNumber: 120,
      columnNumber: 9
    }, this);
  };
  const daysHandle = (e) => {
    var _a3, _b;
    if (!daysSelect.includes(e == null ? void 0 : e.id)) {
      setDaysSelect(
        (daysSelect == null ? void 0 : daysSelect.length) ? (_a3 = [...daysSelect, e == null ? void 0 : e.id]) == null ? void 0 : _a3.sort() : [e == null ? void 0 : e.id]
      );
    } else {
      setDaysSelect((_b = daysSelect.filter((l) => l !== (e == null ? void 0 : e.id))) == null ? void 0 : _b.sort());
    }
  };
  const DaysSelection = () => {
    return days.map((e, i) => {
      var _a3;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        onClick: () => type === "activity" && i < 4 ? "" : daysHandle(e),
        className: ` ${daysSelect.includes(e == null ? void 0 : e.id) ? "bg-primary text-white" : "bg-transparent border border-primary text-black"} text-center capitalize w-[28px] h-[28px] flex items-center justify-center rounded-[4px]
        ${type === "activity" && i < 4 ? " bg-slate-400 border-slate-600 text-black cursor-default" : "cursor-pointer"} 
        `,
        children: (_a3 = e == null ? void 0 : e.name) == null ? void 0 : _a3.charAt(0)
      }, i, false, {
        fileName: "app/components/datePicker/clickOutsideDiv.jsx",
        lineNumber: 145,
        columnNumber: 7
      }, this);
    });
  };
  const cancelHandle = () => {
    setIsOpen(false);
    setOccurrence(false);
    setDaysCopy(options[0]);
    setCalStartDate("");
    setCalEndDate("");
    setDaysSelect([]);
    setWeek("");
  };
  const UrlDate = (prop) => {
    const date = format(prop, DateFormat);
    return date;
  };
  const closeCheck = (daysCopy == null ? void 0 : daysCopy.id) == 0 ? calStartDate === "" || (calStartDate !== "" ? UrlDate(calStartDate) == UrlDate(startDate) : false) ? false : true : true;
  const ScreenIdGet = async () => {
    setDoneLoader(true);
    const getAllStations = await directusLoaderLink.items("Stations").readByQuery({
      fields: ["*.*.*", "id", "station_name"],
      filter: {
        is_parent_station: { _neq: true }
      }
    }).then((e) => e == null ? void 0 : e.data);
    const updateStationIds = [];
    const createStationIds = [];
    const ScreenDisplayRecipeId = await directusLoaderLink.items("screen_display").readByQuery({
      fields: ["*.*.*"],
      filter: {
        date: UrlDate(startDate),
        location_id: locationId
      }
    }).then((e) => {
      return e == null ? void 0 : e.data;
    }).catch((e) => console.log(e));
    getAllStations == null ? void 0 : getAllStations.map((e) => {
      var _a3, _b, _c, _d, _e;
      const val = ScreenDisplayRecipeId == null ? void 0 : ScreenDisplayRecipeId.filter(
        (val2) => {
          var _a4;
          return ((_a4 = val2 == null ? void 0 : val2.station_name) == null ? void 0 : _a4.station_unique_id) === (e == null ? void 0 : e.station_unique_id);
        }
      );
      ((_a3 = val == null ? void 0 : val[0]) == null ? void 0 : _a3.id) > 0 ? updateStationIds == null ? void 0 : updateStationIds.push({
        stationId: (_c = (_b = val == null ? void 0 : val[0]) == null ? void 0 : _b.station_name) == null ? void 0 : _c.id,
        recipeId: (_e = (_d = val == null ? void 0 : val[0]) == null ? void 0 : _d.recipe_id) == null ? void 0 : _e.id
      }) : createStationIds == null ? void 0 : createStationIds.push({ stationId: e == null ? void 0 : e.id });
      return "";
    });
    setScreenId({ updateStationIds, createStationIds });
    setDoneLoader(false);
    return updateStationIds == null ? void 0 : updateStationIds.length;
  };
  const screenIds = async (props) => {
    const updateBody = [];
    await directusLoaderLink.items("screen_display").readByQuery({
      fields: ["*.*.*"],
      filter: {
        date: { _in: props == null ? void 0 : props.dates },
        location_id: locationId
      }
    }).then((e) => {
      var _a3;
      (_a3 = e == null ? void 0 : e.data) == null ? void 0 : _a3.map((res) => {
        var _a4, _b;
        updateBody == null ? void 0 : updateBody.push({
          date: res == null ? void 0 : res.date,
          stationId: (_a4 = res == null ? void 0 : res.station_name) == null ? void 0 : _a4.id,
          screen_display_id: res == null ? void 0 : res.id,
          plateImg: (_b = res == null ? void 0 : res.app_resultant_image) == null ? void 0 : _b.id
        });
      });
      return e == null ? void 0 : e.data;
    }).catch((e) => console.log(e));
    return updateBody;
  };
  const recipeBookHandle = async ({ prop, updatedArr }) => {
    var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
    if (((_b = (_a3 = prop == null ? void 0 : prop.screenId) == null ? void 0 : _a3.updateStationIds) == null ? void 0 : _b.length) > 0 || ((_d = (_c = prop == null ? void 0 : prop.screenId) == null ? void 0 : _c.createStationIds) == null ? void 0 : _d.length) > 0) {
      const CreateBody = [];
      let CreateUpdateBody = "";
      const CreateBodyIds = [];
      let updateBody = "";
      const updateBodyIds = [];
      const updateCreateBody = [];
      const values = await screenIds({
        dates: updatedArr,
        screenId: prop == null ? void 0 : prop.screenId
      });
      const imageData = await screenIds({
        dates: [format(new Date(prop == null ? void 0 : prop.copyDate), DateFormat)],
        screenId: prop == null ? void 0 : prop.screenId
      });
      const recipeId = await ((_g = directusLoaderLink.items("recipe_book")) == null ? void 0 : _g.createMany(
        (_f = (_e = prop == null ? void 0 : prop.screenId) == null ? void 0 : _e.createStationIds) == null ? void 0 : _f.map((e) => {
          return {
            menu_info: "",
            menu_info_1: ""
          };
        })
      ).then((re) => {
        var _a4, _b2;
        const resultIds = (_b2 = (_a4 = re == null ? void 0 : re.raw) == null ? void 0 : _a4.data) == null ? void 0 : _b2.map((e) => e == null ? void 0 : e.id);
        re == null ? void 0 : re.data;
        return resultIds;
      }).catch((e) => {
        errorFlag = true;
        console.log(e, "error");
      }));
      for (let k = 0; k < (updatedArr == null ? void 0 : updatedArr.length); k++) {
        for (let f = 0; f < ((_i = (_h = prop == null ? void 0 : prop.screenId) == null ? void 0 : _h.createStationIds) == null ? void 0 : _i.length); f++) {
          const data = values == null ? void 0 : values.find(
            (day) => {
              var _a4, _b2;
              return (day == null ? void 0 : day.date) === updatedArr[k] && (day == null ? void 0 : day.stationId) === ((_b2 = (_a4 = prop == null ? void 0 : prop.screenId) == null ? void 0 : _a4.createStationIds[f]) == null ? void 0 : _b2.stationId);
            }
          );
          const ImageId = imageData == null ? void 0 : imageData.find(
            (day) => {
              var _a4, _b2;
              return (day == null ? void 0 : day.stationId) === ((_b2 = (_a4 = prop == null ? void 0 : prop.screenId) == null ? void 0 : _a4.createStationIds[f]) == null ? void 0 : _b2.stationId);
            }
          );
          const updateBody2 = {
            date: updatedArr[k],
            recipe_id: recipeId[f],
            location_id: locationId,
            station_name: (_k = (_j = prop == null ? void 0 : prop.screenId) == null ? void 0 : _j.createStationIds[f]) == null ? void 0 : _k.stationId,
            app_resultant_image: ImageId == null ? void 0 : ImageId.plateImg
          };
          if ((data == null ? void 0 : data.screen_display_id) > 0) {
            const objIndex = CreateBodyIds == null ? void 0 : CreateBodyIds.findIndex(
              (obj) => {
                var _a4, _b2;
                return (obj == null ? void 0 : obj.stationId) === ((_b2 = (_a4 = prop == null ? void 0 : prop.screenId) == null ? void 0 : _a4.createStationIds[f]) == null ? void 0 : _b2.stationId);
              }
            );
            objIndex !== -1 ? (_m = (_l = CreateBodyIds[objIndex]) == null ? void 0 : _l.Ids) == null ? void 0 : _m.push(data == null ? void 0 : data.screen_display_id) : CreateBodyIds == null ? void 0 : CreateBodyIds.push({
              Ids: [data == null ? void 0 : data.screen_display_id],
              body: {
                recipe_id: recipeId[f],
                app_resultant_image: ImageId == null ? void 0 : ImageId.plateImg
              },
              stationId: (_o = (_n = prop == null ? void 0 : prop.screenId) == null ? void 0 : _n.createStationIds[f]) == null ? void 0 : _o.stationId
            });
          } else {
            const objIndex = CreateBody == null ? void 0 : CreateBody.findIndex(
              (obj) => {
                var _a4, _b2;
                return (obj == null ? void 0 : obj.stationId) === ((_b2 = (_a4 = prop == null ? void 0 : prop.screenId) == null ? void 0 : _a4.createStationIds[f]) == null ? void 0 : _b2.stationId);
              }
            );
            objIndex !== -1 ? (_q = (_p = CreateBody[objIndex]) == null ? void 0 : _p.body) == null ? void 0 : _q.push(updateBody2) : CreateBody == null ? void 0 : CreateBody.push({
              body: [updateBody2],
              stationId: (_s = (_r = prop == null ? void 0 : prop.screenId) == null ? void 0 : _r.createStationIds[f]) == null ? void 0 : _s.stationId
            });
          }
        }
        (_u = (_t = prop == null ? void 0 : prop.screenId) == null ? void 0 : _t.updateStationIds) == null ? void 0 : _u.map((e) => {
          var _a4, _b2, _c2, _d2;
          const ImageId = imageData == null ? void 0 : imageData.find(
            (day) => (day == null ? void 0 : day.stationId) === (e == null ? void 0 : e.stationId)
          );
          const updateBody2 = {
            date: updatedArr[k],
            recipe_id: e == null ? void 0 : e.recipeId,
            location_id: locationId,
            station_name: e == null ? void 0 : e.stationId,
            app_resultant_image: ImageId == null ? void 0 : ImageId.plateImg
          };
          const data = values == null ? void 0 : values.find(
            (day) => (day == null ? void 0 : day.date) === updatedArr[k] && (day == null ? void 0 : day.stationId) === (e == null ? void 0 : e.stationId)
          );
          if ((data == null ? void 0 : data.screen_display_id) > 0) {
            const objIndex = updateBodyIds == null ? void 0 : updateBodyIds.findIndex(
              (obj) => (obj == null ? void 0 : obj.stationId) === (e == null ? void 0 : e.stationId)
            );
            objIndex !== -1 ? (_b2 = (_a4 = updateBodyIds[objIndex]) == null ? void 0 : _a4.Ids) == null ? void 0 : _b2.push(data == null ? void 0 : data.screen_display_id) : updateBodyIds == null ? void 0 : updateBodyIds.push({
              Ids: [data == null ? void 0 : data.screen_display_id],
              body: {
                recipe_id: e == null ? void 0 : e.recipeId,
                app_resultant_image: ImageId == null ? void 0 : ImageId.plateImg
              },
              stationId: e == null ? void 0 : e.stationId
            });
          } else {
            const objIndex = updateCreateBody == null ? void 0 : updateCreateBody.findIndex(
              (obj) => (obj == null ? void 0 : obj.stationId) === (e == null ? void 0 : e.stationId)
            );
            objIndex !== -1 ? (_d2 = (_c2 = updateCreateBody[objIndex]) == null ? void 0 : _c2.body) == null ? void 0 : _d2.push(updateBody2) : updateCreateBody == null ? void 0 : updateCreateBody.push({
              body: [updateBody2],
              stationId: e == null ? void 0 : e.stationId
            });
          }
        });
      }
      (CreateBodyIds == null ? void 0 : CreateBodyIds.length) > 0 && await screenDisplayUpdate({
        type: true,
        Ids: CreateBodyIds,
        body: CreateUpdateBody
      });
      (updateBodyIds == null ? void 0 : updateBodyIds.length) > 0 && await screenDisplayUpdate({
        type: true,
        Ids: updateBodyIds,
        body: updateBody
      });
      (updateCreateBody == null ? void 0 : updateCreateBody.length) > 0 && await screenDisplayUpdate({
        type: false,
        Ids: "",
        body: updateCreateBody
      });
      (CreateBody == null ? void 0 : CreateBody.length) > 0 && await screenDisplayUpdate({ type: false, Ids: "", body: CreateBody });
      localStorage.setItem(
        "LastWacthedWeek",
        format(new Date(prop == null ? void 0 : prop.copyDate), DateFormat)
      );
    } else {
      Q.error("Please choose a different date.");
    }
  };
  const copyMenuDone = async (prop) => {
    var _a3, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
    const date = prop == null ? void 0 : prop.startDate;
    const YearEnd = endOfYear(date);
    const EndWeekOfYear = 52;
    const startWeek = getWeek(date);
    const startYear = date == null ? void 0 : date.getFullYear();
    const startMonth = (date == null ? void 0 : date.getMonth()) + 1;
    const startDay = date == null ? void 0 : date.getDate();
    const uptoDateYear = (prop == null ? void 0 : prop.uptoDate) !== "" && ((_a3 = prop == null ? void 0 : prop.uptoDate) == null ? void 0 : _a3.getFullYear());
    const uptoDateMonth = (prop == null ? void 0 : prop.uptoDate) !== "" && ((_b = prop == null ? void 0 : prop.uptoDate) == null ? void 0 : _b.getMonth()) + 1;
    const uptoDateDay = (prop == null ? void 0 : prop.uptoDate) !== "" && ((_c = prop == null ? void 0 : prop.uptoDate) == null ? void 0 : _c.getDate());
    const yearDiff = (prop == null ? void 0 : prop.custom) == true && (prop == null ? void 0 : prop.uptoDate) !== "" && uptoDateYear - startYear;
    ((_d = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _d.id) == 0;
    const Days2 = [];
    const loop = (prop == null ? void 0 : prop.custom) == true ? ((_e = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _e.id) == 1 ? {
      start: startWeek,
      end: (prop == null ? void 0 : prop.uptoDate) !== "" ? getWeek(addDays(prop == null ? void 0 : prop.uptoDate, -1)) : EndWeekOfYear,
      fullEnd: 52,
      InitialStart: 1
    } : ((_f = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _f.id) == 2 ? {
      start: startMonth,
      end: (prop == null ? void 0 : prop.uptoDate) !== "" ? uptoDateDay >= startDay ? uptoDateMonth : (_g = prop == null ? void 0 : prop.uptoDate) == null ? void 0 : _g.getMonth() : (YearEnd == null ? void 0 : YearEnd.getMonth()) + 1,
      fullEnd: 12,
      InitialStart: 1
    } : ((_h = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _h.id) == 3 ? {
      start: startYear,
      end: (prop == null ? void 0 : prop.uptoDate) !== "" ? uptoDateYear >= startYear && uptoDateMonth >= startMonth && uptoDateDay >= startDay ? uptoDateYear : uptoDateYear - 1 : startYear + 5,
      fullEnd: 1,
      InitialStart: startYear
    } : "" : ((_i = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _i.id) == 1 ? { start: startWeek, end: EndWeekOfYear } : ((_j = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _j.id) == 2 ? { start: startMonth, end: (YearEnd == null ? void 0 : YearEnd.getMonth()) + 1 } : ((_k = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _k.id) == 3 ? { start: startYear, end: startYear + 5 } : { start: 0, end: 0 };
    var everySplit = 0;
    if ((prop == null ? void 0 : prop.custom) == true) {
      if ((prop == null ? void 0 : prop.uptoDate) !== "" ? format(prop == null ? void 0 : prop.startDate, DateFormat) >= format(prop == null ? void 0 : prop.uptoDate, DateFormat) : false) {
        (_l = Q) == null ? void 0 : _l.error(
          "Please choose the end date greater than the start date to perform further actions."
        );
      } else {
        for (let f = 0; f <= yearDiff; f++) {
          const endL = yearDiff > 0 ? f == yearDiff ? loop == null ? void 0 : loop.end : loop == null ? void 0 : loop.fullEnd : loop == null ? void 0 : loop.end;
          const startL = yearDiff > 0 ? f == 0 ? loop == null ? void 0 : loop.start : loop == null ? void 0 : loop.InitialStart : loop == null ? void 0 : loop.start;
          for (let i = startL, j = 0; i <= endL; i++, j++) {
            ((_m = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _m.id) == 2 && Days2.push(
              format(
                addYears(
                  new Date(
                    `${startYear}-${i < 10 ? `0${i}` : i}-${startDay < 10 ? `0${startDay}` : startDay}`
                  ),
                  f
                ),
                DateFormat
              )
            );
            ((_n = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _n.id) == 3 && Days2.push(
              `${i}-${startMonth < 10 ? `0${startMonth}` : startMonth}-${startDay < 10 ? `0${startDay}` : startDay} `
            );
            const addedDay = addDays(date, j * 7);
            if (((_o = prop == null ? void 0 : prop.everyDays) == null ? void 0 : _o.length) > 0 && ((_p = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _p.id) == 1) {
              (prop == null ? void 0 : prop.everyDays) && ((_q = prop == null ? void 0 : prop.everyDays) == null ? void 0 : _q.map((day, y) => {
                const newAddedDay = new Date(addedDay);
                if (j === 0 && day >= getDay(date)) {
                  if (addDays(
                    startOfISOWeek(new Date(newAddedDay)),
                    day > 0 ? day - 1 : -1
                  ) <= new Date(prop == null ? void 0 : prop.uptoDate)) {
                    Days2.push(
                      format(
                        addDays(
                          startOfISOWeek(new Date(newAddedDay)),
                          day > 0 ? day - 1 : -1
                        ),
                        DateFormat
                      )
                    );
                  }
                  return everySplit = everySplit + 1;
                }
                if (j !== 0) {
                  if (addDays(
                    startOfISOWeek(new Date(newAddedDay)),
                    day > 0 ? day - 1 : -1
                  ) <= new Date(prop == null ? void 0 : prop.uptoDate)) {
                    Days2.push(
                      format(
                        addDays(
                          startOfISOWeek(new Date(newAddedDay)),
                          day > 0 ? day - 1 : -1
                        ),
                        DateFormat
                      )
                    );
                  }
                  return Days2;
                }
              }));
            } else {
              ((_r = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _r.id) == 1 && Days2.push(
                format(
                  startOfWeek(addDays(date, j * 7), {
                    weekStartsOn: getDay(date)
                  }),
                  DateFormat
                )
              );
            }
          }
        }
      }
    } else {
      for (let i = loop == null ? void 0 : loop.start, j = 0; i <= (loop == null ? void 0 : loop.end); i++, j++) {
        ((_s = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _s.id) == 2 && Days2.push(
          `${startYear}-${i < 10 ? `0${i}` : i}-${startDay < 10 ? `0${startDay}` : startDay}`
        );
        ((_t = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _t.id) == 3 && Days2.push(
          `${i}-${startMonth < 10 ? `0${startMonth}` : startMonth}-${startDay < 10 ? `0${startDay}` : startDay}`
        );
        ((_u = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _u.id) == 1 && Days2.push(
          format(
            startOfWeek(addDays(date, j * 7), { weekStartsOn: getDay(date) }),
            DateFormat
          )
        );
        ((_v = prop == null ? void 0 : prop.Occurrence) == null ? void 0 : _v.id) == 0 && (prop == null ? void 0 : prop.copyDate) !== date && Days2.push(format(date, DateFormat));
      }
    }
    const occurrenceArray = [];
    if ((prop == null ? void 0 : prop.occurrenceCount) > 0) {
      if (((_w = prop == null ? void 0 : prop.everyDays) == null ? void 0 : _w.length) > 0) {
        const resultArray = [];
        const firstSplit = ((_x = prop == null ? void 0 : prop.everyDays) == null ? void 0 : _x.length) - ((_y = prop == null ? void 0 : prop.everyDays) == null ? void 0 : _y.indexOf(getDay(new Date(Days2[0]))));
        for (let i = 0; i < (Days2 == null ? void 0 : Days2.length); i == 0 ? i += firstSplit : i += (_z = prop == null ? void 0 : prop.everyDays) == null ? void 0 : _z.length) {
          const weekSplit = Days2 == null ? void 0 : Days2.slice(
            i,
            i == 0 ? firstSplit : i + ((_A = prop == null ? void 0 : prop.everyDays) == null ? void 0 : _A.length)
          );
          resultArray.push(weekSplit);
        }
        resultArray == null ? void 0 : resultArray.map((e, i) => {
          (prop == null ? void 0 : prop.occurrenceCount) === 1 ? i % 2 == 0 && (occurrenceArray == null ? void 0 : occurrenceArray.push(...e)) : i % ((prop == null ? void 0 : prop.occurrenceCount) + 1) == 0 && (occurrenceArray == null ? void 0 : occurrenceArray.push(...e));
        });
      } else {
        Days2 == null ? void 0 : Days2.map((e, i) => {
          (prop == null ? void 0 : prop.occurrenceCount) === 1 ? i % 2 == 0 && (occurrenceArray == null ? void 0 : occurrenceArray.push(e)) : i % ((prop == null ? void 0 : prop.occurrenceCount) + 1) == 0 && (occurrenceArray == null ? void 0 : occurrenceArray.push(e));
        });
      }
    }
    !(Days2 == null ? void 0 : Days2.includes(format(new Date(prop == null ? void 0 : prop.copyDate), DateFormat))) && Days2.push(format(new Date(prop == null ? void 0 : prop.copyDate), DateFormat));
    const updatedArr = (prop == null ? void 0 : prop.occurrenceCount) > 0 ? occurrenceArray : Days2;
    !(updatedArr == null ? void 0 : updatedArr.includes(format(new Date(date), DateFormat))) && updatedArr.push(format(new Date(date), DateFormat));
    type === "station" ? await recipeBookHandle({ prop, updatedArr }) : await spaActivityAndConferenceHandle({
      prop,
      updatedArr
    });
    setModalLoader(false);
  };
  const screenDisplayUpdate = async (props) => {
    var _a3, _b, _c, _d, _e;
    if (props == null ? void 0 : props.type) {
      const array = props == null ? void 0 : props.Ids;
      for (let i = 0; i < (array == null ? void 0 : array.length); i++) {
        await ((_c = directusLoaderLink.items("screen_display")) == null ? void 0 : _c.updateMany((_a3 = array == null ? void 0 : array[i]) == null ? void 0 : _a3.Ids, (_b = array == null ? void 0 : array[i]) == null ? void 0 : _b.body).then((re) => {
        }).catch((e) => {
          console.log(e);
        }));
      }
    } else {
      const array = props == null ? void 0 : props.body;
      for (let i = 0; i < (array == null ? void 0 : array.length); i++) {
        await ((_e = directusLoaderLink.items("screen_display")) == null ? void 0 : _e.createMany((_d = array == null ? void 0 : array[i]) == null ? void 0 : _d.body).then((re) => {
        }).catch((e) => {
          console.log(e);
        }));
      }
    }
  };
  const DoneHandle = async () => {
    var _a3, _b, _c, _d;
    setModalLoader(true);
    const updateProps = (daysSelect == null ? void 0 : daysSelect.length) > 0 || (week == null ? void 0 : week.trim()) || calEndDate !== "" ? {
      copyDate: startDate,
      uptoDate: calEndDate === "" ? (daysCopy == null ? void 0 : daysCopy.id) == 3 ? (week == null ? void 0 : week.trim()) ? new Date(`${(startDate == null ? void 0 : startDate.getFullYear()) + 5}-12-31`) : calEndDate : (daysSelect == null ? void 0 : daysSelect.length) > 0 || (week == null ? void 0 : week.trim()) ? new Date(`${startDate == null ? void 0 : startDate.getFullYear()}-12-31`) : "" : calEndDate,
      occurrenceCount: (week == null ? void 0 : week.trim()) ? Number(week) : 0,
      Occurrence: daysCopy,
      everyDays: daysSelect,
      custom: true,
      startDate: calStartDate ? calStartDate : startDate,
      screenId
    } : {
      copyDate: startDate,
      Occurrence: daysCopy,
      updateTo: daysCopy == null ? void 0 : daysCopy.name,
      custom: false,
      startDate: calStartDate ? calStartDate : startDate,
      screenId
    };
    if (closeCheck) {
      const IsIdsPresent = type === "station" ? ((_a3 = screenId == null ? void 0 : screenId.updateStationIds) == null ? void 0 : _a3.length) > 0 || ((_b = screenId == null ? void 0 : screenId.createStationIds) == null ? void 0 : _b.length) > 0 : (presentData == null ? void 0 : presentData.length) > 0;
      if (IsIdsPresent) {
        await copyMenuDone(updateProps);
        cancelHandle();
        toggleDiv();
      } else {
        (_c = Q) == null ? void 0 : _c.error(
          "The selected copy date doesn't have valid menu information. Kindly check and choose a valid copy date to perform the copy menu of the Day action."
        );
      }
    } else {
      (_d = Q) == null ? void 0 : _d.error(
        "Please choose a valid starting date for updating the menu information."
      );
    }
    setModalLoader(false);
    setRefresh(!refresh);
  };
  const current = (daysCopy == null ? void 0 : daysCopy.id) === 1 ? "weeks" : (daysCopy == null ? void 0 : daysCopy.id) === 2 ? "Months" : "years";
  const OccursText = () => {
    let daysText = "";
    daysSelect.length > 0 ? daysSelect == null ? void 0 : daysSelect.map((e, i) => {
      var _a3, _b, _c;
      return daysText += (daysSelect == null ? void 0 : daysSelect.length) > 1 && i == (daysSelect == null ? void 0 : daysSelect.length) - 1 ? `and ${(_a3 = days == null ? void 0 : days.find((day) => (day == null ? void 0 : day.id) == e)) == null ? void 0 : _a3.name}` : (daysSelect == null ? void 0 : daysSelect.length) > 1 ? `${(_b = days == null ? void 0 : days.find((day) => (day == null ? void 0 : day.id) == e)) == null ? void 0 : _b.name}, ` : (_c = days == null ? void 0 : days.find((day) => (day == null ? void 0 : day.id) == e)) == null ? void 0 : _c.name;
    }) : "";
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      children: [
        "Occurs",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "font-bold",
          children: [
            (daysText == null ? void 0 : daysText.trim()) ? " every " : "",
            (week == null ? void 0 : week.trim()) && week != "0" ? ` ${week} ${current} on ` : "",
            daysText
          ]
        }, void 0, true, {
          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
          lineNumber: 747,
          columnNumber: 9
        }, this),
        " starting",
        calStartDate ? ` ${format(calStartDate, DateFormat)}` : ` ${format(startDate, DateFormat)}`,
        calEndDate ? ` until ${format(calEndDate, DateFormat)}` : ""
      ]
    }, void 0, true, {
      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
      lineNumber: 745,
      columnNumber: 7
    }, this);
  };
  const copyDateDetailsGet = async ({ collectionName, body }) => {
    const response = await directusLoaderLink.items(collectionName).readByQuery(body == null ? void 0 : body[0]).then((e) => {
      return e == null ? void 0 : e.data;
    }).catch((e) => console.log(e));
    return response;
  };
  const dataDetailsDelete = async ({ collectionName, body }) => {
    const response = await directusLoaderLink.items(collectionName).deleteMany(body);
    return response;
  };
  const PresentDetailsIdGet = async () => {
    var _a3;
    const CopyDetails = await copyDateDetailsGet({
      collectionName: type === "activity" ? "activities" : type === "conference" ? "conference" : "spa",
      body: [
        {
          fields: ["*.*.*"],
          filter: {
            date: UrlDate(startDate),
            location_id: locationId
          }
        }
      ]
    });
    setPresentData(CopyDetails);
    return !!((_a3 = CopyDetails == null ? void 0 : CopyDetails[0]) == null ? void 0 : _a3.id) ? true : false;
  };
  const spaActivityAndConferenceHandle = async ({ prop, updatedArr }) => {
    var _a3, _b, _c, _d, _e;
    if ((presentData == null ? void 0 : presentData.length) > 0) {
      const dateArray = updatedArr;
      const DeleteIds = await copyDateDetailsGet({
        collectionName: type === "activity" ? "activities" : type === "conference" ? "conference" : "spa",
        body: [
          {
            fields: ["id"],
            filter: {
              date: {
                _in: dateArray
              },
              location_id: locationId
            }
          }
        ]
      });
      for (let i = 0; i < (dateArray == null ? void 0 : dateArray.length); i++) {
        const date = dateArray[i];
        for (let j = 0; j < (presentData == null ? void 0 : presentData.length); j++) {
          if (type === "activity") {
            const { activity_description, activity_name, time } = presentData[j];
            const body = {
              date,
              activity_name,
              activity_description,
              time,
              location_id: locationId
            };
            const dayPresents = [0, , 5, 6];
            (dayPresents == null ? void 0 : dayPresents.includes(getDay(new Date(date)))) && await ((_a3 = directusLoaderLink.items("activities")) == null ? void 0 : _a3.createOne(body));
          } else if (type === "conference") {
            const { company_name, room_id } = presentData[j];
            const body = {
              date,
              company_name,
              room_id: room_id == null ? void 0 : room_id.id,
              location_id: locationId
            };
            await ((_b = directusLoaderLink.items("conference")) == null ? void 0 : _b.createOne(body));
          } else if (type === "spa") {
            const {
              activity_type,
              treatment,
              time,
              price,
              description,
              treatment_1,
              price_1,
              description_1,
              treatment_2,
              price_2,
              description_2
            } = presentData[j];
            const body = {
              activity_type,
              date: new Date(date),
              time: activity_type === "activities" ? time : null,
              location_id: locationId,
              treatment: !!treatment ? treatment : null,
              price: !!price ? price : null,
              description: !!description ? description == null ? void 0 : description.trim() : null,
              treatment_1: !!treatment_1 ? treatment_1 : null,
              price_1: !!price_1 ? price_1 : null,
              description_1: !!description_1 ? description_1 == null ? void 0 : description_1.trim() : null,
              treatment_2: !!treatment_2 ? treatment_2 : null,
              price_2: !!price_2 ? price_2 : null,
              description_2: !!description_2 ? description_2 == null ? void 0 : description_2.trim() : null
            };
            await ((_c = directusLoaderLink.items("spa")) == null ? void 0 : _c.createOne(body));
          }
        }
      }
      !!DeleteIds && ((_d = DeleteIds == null ? void 0 : DeleteIds[0]) == null ? void 0 : _d.id) && await dataDetailsDelete({
        collectionName: type === "activity" ? "activities" : type === "conference" ? "conference" : "spa",
        body: DeleteIds == null ? void 0 : DeleteIds.map((e) => e == null ? void 0 : e.id)
      });
      localStorage.setItem(
        type === "activity" ? "ActivityWacthedWeek" : type === "conference" ? "ConferenceWacthedWeek" : "SpaWacthedWeek",
        ((_e = new Date(prop == null ? void 0 : prop.copyDate)) == null ? void 0 : _e.getDay()) == 0 ? format(addDays(new Date(prop == null ? void 0 : prop.copyDate), -2), "yyyy-MM-dd") : format(new Date(prop == null ? void 0 : prop.copyDate), DateFormat)
      );
    } else {
      Q.error("Please choose a different date.");
    }
  };
  const ModelOpenHandle = async () => {
    var _a3, _b;
    if (closeCheck) {
      const relationId = type === "station" ? await ScreenIdGet() : await PresentDetailsIdGet();
      if (relationId) {
        setIsOpen(true);
        setDivVisible(false);
      } else {
        (_a3 = Q) == null ? void 0 : _a3.error(
          "The selected copy date doesn't have valid menu information. Kindly check and choose a valid copy date to perform the copy menu of the Day action."
        );
      }
    } else {
      (_b = Q) == null ? void 0 : _b.error(
        "Please choose a valid starting date for updating the menu information."
      );
    }
  };
  const modalSaveHandle = () => {
    var _a3;
    if (calEndDate !== "" ? UrlDate(calStartDate !== "" ? calStartDate : startDate) >= UrlDate(calEndDate) : false) {
      (_a3 = Q) == null ? void 0 : _a3.error(
        "Please choose the end date greater than the start date to perform further actions."
      );
    } else {
      setOccurrence(false);
    }
    if ((daysSelect == null ? void 0 : daysSelect.length) > 0 || (week == null ? void 0 : week.trim()) || calEndDate !== "") {
      setCustomTrue(true);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
        onClick: toggleDiv,
        className: "cursor-pointer ri-more-2-fill"
      }, void 0, false, {
        fileName: "app/components/datePicker/clickOutsideDiv.jsx",
        lineNumber: 943,
        columnNumber: 7
      }, this),
      isDivVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `div-block ${type === "station" ? "" : type} `,
        ref: divRef,
        id: Id,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: `choose_day
              text-black flex flex-col p-4 font-normal absolute min-w-[240px] min-h-[140px] bg-white border-2 right-0 z-10 gap-3`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "font-normal text-left text-sm pb-[15px] normal-case",
              children: [
                'Copy "',
                format(startDate, "EEEE"),
                '"',
                " ",
                type === "station" ? "menu of the day" : type,
                " to..."
              ]
            }, void 0, true, {
              fileName: "app/components/datePicker/clickOutsideDiv.jsx",
              lineNumber: 955,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: `flex text-sm normal-case justify-between ${Occurrence && "pointer-events-none"}`,
              onClick: () => setCalenderShow(!calenderShow),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: calStartDate !== "" ? "show-date text-primary" : "placeholder",
                  children: calStartDate !== "" ? format(calStartDate, DateFormat) : "Choose a day"
                }, void 0, false, {
                  fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                  lineNumber: 965,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                    className: "cursor-pointer ri-arrow-down-s-line"
                  }, void 0, false, {
                    fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                    lineNumber: 975,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                  lineNumber: 974,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/datePicker/clickOutsideDiv.jsx",
              lineNumber: 959,
              columnNumber: 13
            }, this),
            DatePickerComponent({
              show: calenderShow,
              setShow: setCalenderShow,
              date: calStartDate,
              setDate: setCalStartDate,
              minDate: startDate
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex normal-case justify-between relative copy-menu",
              children: [
                isHydrated && RepeatSelection(false),
                Occurrence && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: " flex flex-col p-4 font-normal absolute min-w-[240px] min-h-[140px] bg-white border-2 left-0 top-[26px] z-10 gap-3 custom-date",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex gap-4 py-[5px] items-center justify-start",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "Start"
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 991,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "date-input border-b border-[#C2C2C2]",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                              type: "text",
                              readOnly: true,
                              className: "pointer-events-none ",
                              onChange: (e) => console.log(e),
                              value: calStartDate !== "" ? format(calStartDate, DateFormat) : "",
                              placeholder: "yyyy-mm-dd"
                            }, void 0, false, {
                              fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                              lineNumber: 993,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                              onClick: () => setCalenderShow1(!calenderShow1),
                              className: "ri-calendar-2-line cursor-pointer"
                            }, void 0, false, {
                              fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                              lineNumber: 1005,
                              columnNumber: 23
                            }, this),
                            DatePickerComponent({
                              show: calenderShow1,
                              setShow: setCalenderShow1,
                              date: calStartDate,
                              setDate: setCalStartDate,
                              minDate: startDate
                            })
                          ]
                        }, void 0, true, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 992,
                          columnNumber: 21
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                      lineNumber: 990,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex gap-4 py-[5px] repeat-select items-center justify-start",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "Repeat"
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1019,
                          columnNumber: 21
                        }, this),
                        RepeatSelection(true)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                      lineNumber: 1018,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex gap-4 py-[5px] items-center justify-start",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "Every"
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1023,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          type: "number",
                          onKeyDown: (evt) => evt.key === "e" && evt.preventDefault(),
                          value: week,
                          min: "0",
                          onChange: (e) => setWeek(e.target.value),
                          placeholder: "0",
                          className: "w-[30%] border-b border-[#C2C2C2]"
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1024,
                          columnNumber: 21
                        }, this),
                        week > 1 ? current : (daysCopy == null ? void 0 : daysCopy.id) === 1 ? "week" : (daysCopy == null ? void 0 : daysCopy.id) === 2 ? "Month" : "year"
                      ]
                    }, void 0, true, {
                      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                      lineNumber: 1022,
                      columnNumber: 19
                    }, this),
                    (daysCopy == null ? void 0 : daysCopy.id) === 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex gap-4 items-center justify-start",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "On"
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1045,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex gap-2",
                          children: DaysSelection()
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1046,
                          columnNumber: 23
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                      lineNumber: 1044,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex gap-4 py-[5px] items-center justify-start",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: "End"
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1050,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "date-input border-b border-[#C2C2C2]",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                              type: "text",
                              readOnly: true,
                              className: "pointer-events-none",
                              onChange: (e) => console.log(e),
                              value: calEndDate !== "" ? format(calEndDate, DateFormat) : "",
                              placeholder: "yyyy-mm-dd"
                            }, void 0, false, {
                              fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                              lineNumber: 1052,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                              onClick: () => setCalenderShow2(!calenderShow2),
                              className: "ri-calendar-2-line cursor-pointer"
                            }, void 0, false, {
                              fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                              lineNumber: 1064,
                              columnNumber: 23
                            }, this),
                            DatePickerComponent({
                              show: calenderShow2,
                              setShow: setCalenderShow2,
                              date: calEndDate,
                              setDate: setCalEndDate,
                              minDate: startDate
                            })
                          ]
                        }, void 0, true, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1051,
                          columnNumber: 21
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                      lineNumber: 1049,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-left block pt-2",
                      children: OccursText()
                    }, void 0, false, {
                      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                      lineNumber: 1077,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: " flex gap-4 justify-end py-[5px]",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          className: "py-1 px-2 border border-primary bg-transparent text-primary text-sm font-medium rounded-md",
                          onClick: (e) => cancelHandle(),
                          children: "Cancel"
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1080,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          className: "py-1 px-2 border border-primary bg-primary text-white text-sm font-medium rounded-md",
                          onClick: () => modalSaveHandle(),
                          children: "Save"
                        }, void 0, false, {
                          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                          lineNumber: 1086,
                          columnNumber: 21
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                      lineNumber: 1079,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                  lineNumber: 989,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/datePicker/clickOutsideDiv.jsx",
              lineNumber: 985,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-end mt-[15px]",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: `py-1 px-2 border text-white border-primary bg-primary text-sm font-medium rounded-[5px] 
                ${doneLoader ? " bg-[#02393760] border-[#02393760] cursor-default" : ""}  `,
                onClick: () => doneLoader ? null : ModelOpenHandle(),
                children: doneLoader ? "Loading..." : "Done"
              }, void 0, false, {
                fileName: "app/components/datePicker/clickOutsideDiv.jsx",
                lineNumber: 1097,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/datePicker/clickOutsideDiv.jsx",
              lineNumber: 1096,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/datePicker/clickOutsideDiv.jsx",
          lineNumber: 950,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/datePicker/clickOutsideDiv.jsx",
        lineNumber: 945,
        columnNumber: 9
      }, this),
      modalIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(confirmationModal_default, {
        modalIsOpen,
        setIsOpen,
        content: "Are you sure to paste menu data?",
        callFunction: DoneHandle,
        cancelHandle,
        Loader: modalLoader
      }, void 0, false, {
        fileName: "app/components/datePicker/clickOutsideDiv.jsx",
        lineNumber: 1113,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/datePicker/clickOutsideDiv.jsx",
    lineNumber: 942,
    columnNumber: 5
  }, this);
};
var clickOutsideDiv_default = ClickOutsideDiv;

export {
  require_month_picker,
  confirmationModal_default,
  clickOutsideDiv_default
};
//!this.touchable && this._handleTap(ev)
//# sourceMappingURL=/build/_shared/chunk-GNOU3FC5.js.map
