import {
  require_react_dom
} from "/build/_shared/chunk-VKRUHKJ5.js";
import {
  Toast
} from "/build/_shared/chunk-VVZSABDI.js";
import {
  API_BASE_URL
} from "/build/_shared/chunk-37D2R22D.js";
import {
  Button
} from "/build/_shared/chunk-TOP7EFOP.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r2 = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r3 = String(t2);
        return !r3 || r3.length >= e2 ? t2 : "" + Array(e2 + 1 - r3.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r3 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r3, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r3 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r3, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r3 + (s2 ? -1 : 1), c);
        return +(-(r3 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r2, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r3) {
        var i2;
        if (!e2)
          return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1)
            return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r3 && i2 && (g = i2), i2 || !r3 && g;
      }, O = function(t2, e2) {
        if (S(t2))
          return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2)
              return new Date(NaN);
            if (b.u(e2))
              return new Date();
            if (e2 instanceof Date)
              return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r3 = e2.match($);
              if (r3) {
                var i2 = r3[2] - 1 || 0, s2 = (r3[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2)) : new Date(r3[1], i2, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r3 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r3 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r3 ? l2(1, 0) : l2(31, 11);
            case c:
              return r3 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r3 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r2] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else
            l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r3, f2) {
          var d2, l2 = this;
          r3 = Number(r3);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r3)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r3);
          if ($2 === h)
            return this.set(h, this.$y + r3);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r3 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r3 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r3)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r4 = t3 < 12 ? "AM" : "PM";
            return n3 ? r4.toLowerCase() : r4;
          };
          return r3.replace(y, function(t3, r4) {
            return r4 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r3, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r3), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2)
            return this.$L;
          var n2 = this.clone(), r3 = w(t2, e2, true);
          return r3 && (n2.$L = r3), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r2], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// node_modules/dayjs/plugin/weekday.js
var require_weekday = __commonJS({
  "node_modules/dayjs/plugin/weekday.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekday = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.weekday = function(e2) {
          var t2 = this.$locale().weekStart || 0, i = this.$W, n = (i < t2 ? i + 7 : i) - t2;
          return this.$utils().u(e2) ? n : this.subtract(n, "day").add(e2, "day");
        };
      };
    });
  }
});

// node_modules/dayjs/plugin/weekOfYear.js
var require_weekOfYear = __commonJS({
  "node_modules/dayjs/plugin/weekOfYear.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t();
    }(exports, function() {
      "use strict";
      var e = "week", t = "year";
      return function(i, n, r2) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2)
            return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r2(this).startOf(t).add(1, t).date(n2), s = r2(this).endOf(e);
            if (f2.isBefore(s))
              return 1;
          }
          var a = r2(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r2(this).startOf("week").week() : Math.ceil(o);
        }, f.weeks = function(e2) {
          return void 0 === e2 && (e2 = null), this.week(e2);
        };
      };
    });
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React2 = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component) {
          var prototype = Component.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self2) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV2(type, config, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self2);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV2(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx2 = jsxWithValidationDynamic;
        var jsxs2 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx2;
        exports.jsxs = jsxs2;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// app/routes/admin/kitchen.foodwaste.jsx
var import_react3 = __toESM(require_react());

// node_modules/react-data-grid/lib/styles.css
var styles_default = "/build/_assets/styles-4LRZBHE3.css";

// app/hooks/useFoodWasteTable.js
var import_dayjs = __toESM(require_dayjs_min());

// app/lib/foodWaste.js
async function fetchFoodWaste() {
  const response = await fetch(`${API_BASE_URL}/items/Food_waste_information`);
  if (!response.ok)
    throw new Error("Failed to fetch food waste data.");
  const result = await response.json();
  return result.data || result;
}
async function patchFoodWaste(payload) {
  const response = await fetch(`${API_BASE_URL}/items/Food_waste_information`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok)
    throw new Error("Failed to update food waste.");
  return response.json();
}
async function createFoodWaste(items) {
  const response = await fetch(`${API_BASE_URL}/items/Food_waste_information`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(items)
  });
  if (!response.ok)
    throw new Error("Failed to create food waste.");
  return response.json();
}

// app/hooks/useFoodWasteTable.js
var import_weekday = __toESM(require_weekday());
var import_weekOfYear = __toESM(require_weekOfYear());
var import_react = __toESM(require_react());
import_dayjs.default.extend(import_weekday.default);
import_dayjs.default.extend(import_weekOfYear.default);
function useFoodWasteTable() {
  const [records, setRecords] = (0, import_react.useState)([]);
  const [updates, setUpdates] = (0, import_react.useState)({});
  const [week, setWeek] = (0, import_react.useState)((0, import_dayjs.default)().week());
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [isSaving, setIsSaving] = (0, import_react.useState)(false);
  const [toast, setToast] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    async function load() {
      setLoading(true);
      try {
        const data = await fetchFoodWaste();
        setRecords(data);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);
  const filteredRecords = (0, import_react.useMemo)(() => {
    return records.filter((r2) => (0, import_dayjs.default)(r2.date).week() === Number(week));
  }, [records, week]);
  const showToast = (0, import_react.useCallback)((message, type = "success") => {
    setToast({ message, type });
  }, []);
  const dismissToast = (0, import_react.useCallback)(() => setToast(null), []);
  const handleUpdate = (0, import_react.useCallback)((id, updatedFields) => {
    setRecords(
      (prev) => prev.map((rec) => rec.id === id ? { ...rec, ...updatedFields } : rec)
    );
    setUpdates((prev) => ({
      ...prev,
      [id]: { ...prev[id] || {}, ...updatedFields }
    }));
  }, []);
  const getPendingValue = (0, import_react.useCallback)(
    (id, field, fallback) => {
      const pending = updates[id];
      if (pending && Object.prototype.hasOwnProperty.call(pending, field)) {
        return pending[field];
      }
      return fallback;
    },
    [updates]
  );
  const saveUpdates = (0, import_react.useCallback)(async () => {
    if (!Object.keys(updates).length)
      return;
    const toUpdate = [];
    const toCreate = [];
    Object.entries(updates).forEach(([key, data]) => {
      if (Number(key)) {
        toUpdate.push({ id: Number(key), ...data });
      } else {
        toCreate.push(data);
      }
    });
    setIsSaving(true);
    try {
      if (toUpdate.length > 0)
        await patchFoodWaste(toUpdate);
      if (toCreate.length > 0)
        await createFoodWaste(toCreate);
      showToast("\u2705 Saved successfully!");
      setUpdates({});
    } catch (err) {
      console.error(err);
      showToast("\u274C Failed to save.", "error");
    } finally {
      setIsSaving(false);
    }
  }, [updates, showToast]);
  return {
    week,
    setWeek,
    filteredRecords,
    handleUpdate,
    getPendingValue,
    saveUpdates,
    loading,
    isSaving,
    hasPendingUpdates: Object.keys(updates).length > 0,
    toast,
    dismissToast
  };
}

// app/utils/date.js
function getOrdinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
function getWeekDateRange(weekNumber, year = new Date().getFullYear()) {
  const firstDayOfYear = new Date(year, 0, 1);
  const daysOffset = (weekNumber - 1) * 7;
  const startDate = new Date(firstDayOfYear.getTime() + daysOffset * 864e5);
  const day = startDate.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  startDate.setDate(startDate.getDate() + diff);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 4);
  const startDay = getOrdinal(startDate.getDate());
  const endDay = getOrdinal(endDate.getDate());
  const startMonth = startDate.toLocaleString("en-GB", { month: "short" });
  const endMonth = endDate.toLocaleString("en-GB", { month: "short" });
  return {
    start: `${startDay} ${startMonth}`,
    end: `${endDay} ${endMonth}`
  };
}

// node_modules/react-data-grid/lib/index.js
var import_react2 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

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

// node_modules/react-data-grid/lib/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
function getColSpan(column, lastFrozenColumnIndex, args) {
  const colSpan = typeof column.colSpan === "function" ? column.colSpan(args) : 1;
  if (Number.isInteger(colSpan) && colSpan > 1 && (!column.frozen || column.idx + colSpan - 1 <= lastFrozenColumnIndex))
    return colSpan;
  return void 0;
}
function stopPropagation(event) {
  event.stopPropagation();
}
function scrollIntoView(element, behavior = "instant") {
  element?.scrollIntoView({
    inline: "nearest",
    block: "nearest",
    behavior
  });
}
function createCellEvent(event) {
  let defaultPrevented = false;
  const cellEvent = {
    ...event,
    preventGridDefault() {
      defaultPrevented = true;
    },
    isGridDefaultPrevented() {
      return defaultPrevented;
    }
  };
  Object.setPrototypeOf(cellEvent, Object.getPrototypeOf(event));
  return cellEvent;
}
var nonInputKeys = /* @__PURE__ */ new Set([
  "Unidentified",
  "Alt",
  "AltGraph",
  "CapsLock",
  "Control",
  "Fn",
  "FnLock",
  "Meta",
  "NumLock",
  "ScrollLock",
  "Shift",
  "Tab",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  "Insert",
  "ContextMenu",
  "Escape",
  "Pause",
  "Play",
  "PrintScreen",
  "F1",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12"
]);
function isCtrlKeyHeldDown(e) {
  return (e.ctrlKey || e.metaKey) && e.key !== "Control";
}
var vKey = 86;
function isDefaultCellInput(event, isUserHandlingPaste) {
  if (isCtrlKeyHeldDown(event) && (event.keyCode !== vKey || isUserHandlingPaste))
    return false;
  return !nonInputKeys.has(event.key);
}
function onEditorNavigation({ key, target }) {
  if (key === "Tab" && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement))
    return target.closest(".rdg-editor-container")?.querySelectorAll("input, textarea, select").length === 1;
  return false;
}
function getLeftRightKey(direction) {
  const isRtl = direction === "rtl";
  return {
    leftKey: isRtl ? "ArrowRight" : "ArrowLeft",
    rightKey: isRtl ? "ArrowLeft" : "ArrowRight"
  };
}
var measuringCellClassname = "mlln6zg7-0-0-beta-56";
function renderMeasuringCells(viewportColumns) {
  return viewportColumns.map(({ key, idx, minWidth, maxWidth }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: measuringCellClassname,
    style: {
      gridColumnStart: idx + 1,
      minWidth,
      maxWidth
    },
    "data-measuring-cell-key": key
  }, key));
}
function isSelectedCellEditable({ selectedPosition, columns, rows }) {
  const column = columns[selectedPosition.idx];
  const row$1 = rows[selectedPosition.rowIdx];
  return isCellEditableUtil(column, row$1);
}
function isCellEditableUtil(column, row$1) {
  return column.renderEditCell != null && (typeof column.editable === "function" ? column.editable(row$1) : column.editable) !== false;
}
function getSelectedCellColSpan({ rows, topSummaryRows, bottomSummaryRows, rowIdx, mainHeaderRowIdx, lastFrozenColumnIndex, column }) {
  const topSummaryRowsCount = topSummaryRows?.length ?? 0;
  if (rowIdx === mainHeaderRowIdx)
    return getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" });
  if (topSummaryRows && rowIdx > mainHeaderRowIdx && rowIdx <= topSummaryRowsCount + mainHeaderRowIdx)
    return getColSpan(column, lastFrozenColumnIndex, {
      type: "SUMMARY",
      row: topSummaryRows[rowIdx + topSummaryRowsCount]
    });
  if (rowIdx >= 0 && rowIdx < rows.length) {
    const row$1 = rows[rowIdx];
    return getColSpan(column, lastFrozenColumnIndex, {
      type: "ROW",
      row: row$1
    });
  }
  if (bottomSummaryRows)
    return getColSpan(column, lastFrozenColumnIndex, {
      type: "SUMMARY",
      row: bottomSummaryRows[rowIdx - rows.length]
    });
  return void 0;
}
function getNextSelectedCellPosition({ moveUp, moveNext, cellNavigationMode, columns, colSpanColumns, rows, topSummaryRows, bottomSummaryRows, minRowIdx, mainHeaderRowIdx, maxRowIdx, currentPosition: { idx: currentIdx, rowIdx: currentRowIdx }, nextPosition, lastFrozenColumnIndex, isCellWithinBounds }) {
  let { idx: nextIdx, rowIdx: nextRowIdx } = nextPosition;
  const columnsCount = columns.length;
  const setColSpan = (moveNext$1) => {
    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx > nextIdx)
        break;
      const colSpan = getSelectedCellColSpan({
        rows,
        topSummaryRows,
        bottomSummaryRows,
        rowIdx: nextRowIdx,
        mainHeaderRowIdx,
        lastFrozenColumnIndex,
        column
      });
      if (colSpan && nextIdx > colIdx && nextIdx < colSpan + colIdx) {
        nextIdx = colIdx + (moveNext$1 ? colSpan : 0);
        break;
      }
    }
  };
  const getParentRowIdx = (parent) => {
    return parent.level + mainHeaderRowIdx;
  };
  const setHeaderGroupColAndRowSpan = () => {
    if (moveNext) {
      const nextColumn = columns[nextIdx];
      let parent = nextColumn.parent;
      while (parent !== void 0) {
        const parentRowIdx = getParentRowIdx(parent);
        if (nextRowIdx === parentRowIdx) {
          nextIdx = parent.idx + parent.colSpan;
          break;
        }
        parent = parent.parent;
      }
    } else if (moveUp) {
      const nextColumn = columns[nextIdx];
      let parent = nextColumn.parent;
      let found = false;
      while (parent !== void 0) {
        const parentRowIdx = getParentRowIdx(parent);
        if (nextRowIdx >= parentRowIdx) {
          nextIdx = parent.idx;
          nextRowIdx = parentRowIdx;
          found = true;
          break;
        }
        parent = parent.parent;
      }
      if (!found) {
        nextIdx = currentIdx;
        nextRowIdx = currentRowIdx;
      }
    }
  };
  if (isCellWithinBounds(nextPosition)) {
    setColSpan(moveNext);
    if (nextRowIdx < mainHeaderRowIdx)
      setHeaderGroupColAndRowSpan();
  }
  if (cellNavigationMode === "CHANGE_ROW") {
    const isAfterLastColumn = nextIdx === columnsCount;
    const isBeforeFirstColumn = nextIdx === -1;
    if (isAfterLastColumn) {
      const isLastRow = nextRowIdx === maxRowIdx;
      if (!isLastRow) {
        nextIdx = 0;
        nextRowIdx += 1;
      }
    } else if (isBeforeFirstColumn) {
      const isFirstRow = nextRowIdx === minRowIdx;
      if (!isFirstRow) {
        nextRowIdx -= 1;
        nextIdx = columnsCount - 1;
      }
      setColSpan(false);
    }
  }
  if (nextRowIdx < mainHeaderRowIdx && nextIdx > -1 && nextIdx < columnsCount) {
    const nextColumn = columns[nextIdx];
    let parent = nextColumn.parent;
    const nextParentRowIdx = nextRowIdx;
    nextRowIdx = mainHeaderRowIdx;
    while (parent !== void 0) {
      const parentRowIdx = getParentRowIdx(parent);
      if (parentRowIdx >= nextParentRowIdx) {
        nextRowIdx = parentRowIdx;
        nextIdx = parent.idx;
      }
      parent = parent.parent;
    }
  }
  return {
    idx: nextIdx,
    rowIdx: nextRowIdx
  };
}
function canExitGrid({ maxColIdx, minRowIdx, maxRowIdx, selectedPosition: { rowIdx, idx }, shiftKey }) {
  const atLastCellInRow = idx === maxColIdx;
  const atFirstCellInRow = idx === 0;
  const atLastRow = rowIdx === maxRowIdx;
  const atFirstRow = rowIdx === minRowIdx;
  return shiftKey ? atFirstCellInRow && atFirstRow : atLastCellInRow && atLastRow;
}
var cell = "cj343x07-0-0-beta-56";
var cellClassname = `rdg-cell ${cell}`;
var cellFrozen = "csofj7r7-0-0-beta-56";
var cellFrozenClassname = `rdg-cell-frozen ${cellFrozen}`;
var cellDragHandle = "ch2wcw87-0-0-beta-56";
var cellDragHandleFrozenClassname = "c1wvphzh7-0-0-beta-56";
var cellDragHandleClassname = `rdg-cell-drag-handle ${cellDragHandle}`;
function getRowStyle(rowIdx) {
  return { "--rdg-grid-row-start": rowIdx };
}
function getHeaderCellStyle(column, rowIdx, rowSpan) {
  const gridRowEnd = rowIdx + 1;
  const paddingBlockStart = `calc(${rowSpan - 1} * var(--rdg-header-row-height))`;
  if (column.parent === void 0)
    return {
      insetBlockStart: 0,
      gridRowStart: 1,
      gridRowEnd,
      paddingBlockStart
    };
  return {
    insetBlockStart: `calc(${rowIdx - rowSpan} * var(--rdg-header-row-height))`,
    gridRowStart: gridRowEnd - rowSpan,
    gridRowEnd,
    paddingBlockStart
  };
}
function getCellStyle(column, colSpan = 1) {
  const index = column.idx + 1;
  return {
    gridColumnStart: index,
    gridColumnEnd: index + colSpan,
    insetInlineStart: column.frozen ? `var(--rdg-frozen-left-${column.idx})` : void 0
  };
}
function getCellClassname(column, ...extraClasses) {
  return clsx_default(cellClassname, { [cellFrozenClassname]: column.frozen }, ...extraClasses);
}
var { min, max, floor, sign, abs } = Math;
function assertIsValidKeyGetter(keyGetter) {
  if (typeof keyGetter !== "function")
    throw new Error("Please specify the rowKeyGetter prop to use selection");
}
function clampColumnWidth(width, { minWidth, maxWidth }) {
  width = max(width, minWidth);
  if (typeof maxWidth === "number" && maxWidth >= minWidth)
    return min(width, maxWidth);
  return width;
}
function getHeaderCellRowSpan(column, rowIdx) {
  return column.parent === void 0 ? rowIdx : column.level - column.parent.level;
}
var checkbox = "c1bn88vv7-0-0-beta-56";
var checkboxClassname = `rdg-checkbox-input ${checkbox}`;
function renderCheckbox({ onChange, indeterminate, ...props }) {
  function handleChange(e) {
    onChange(e.target.checked, e.nativeEvent.shiftKey);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
    ref: (el) => {
      if (el)
        el.indeterminate = indeterminate === true;
    },
    type: "checkbox",
    className: checkboxClassname,
    onChange: handleChange,
    ...props
  });
}
var groupCellContent = "g1s9ylgp7-0-0-beta-56";
var groupCellContentClassname = `rdg-group-cell-content ${groupCellContent}`;
var caret = "cz54e4y7-0-0-beta-56";
var caretClassname = `rdg-caret ${caret}`;
function renderValue(props) {
  try {
    return props.row[props.column.key];
  } catch {
    return null;
  }
}
var DataGridDefaultRenderersContext = (0, import_react2.createContext)(void 0);
function useDefaultRenderers() {
  return (0, import_react2.useContext)(DataGridDefaultRenderersContext);
}
var RowSelectionContext = (0, import_react2.createContext)(void 0);
var RowSelectionChangeContext = (0, import_react2.createContext)(void 0);
var HeaderRowSelectionContext = (0, import_react2.createContext)(void 0);
var HeaderRowSelectionChangeContext = (0, import_react2.createContext)(void 0);
var SELECT_COLUMN_KEY = "rdg-select-column";
var headerSortCellClassname = "h44jtk67-0-0-beta-56";
var headerSortName = "hcgkhxz7-0-0-beta-56";
var headerSortNameClassname = `rdg-header-sort-name ${headerSortName}`;
function renderHeaderCell({ column, sortDirection, priority }) {
  if (!column.sortable)
    return column.name;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SortableHeaderCell, {
    sortDirection,
    priority,
    children: column.name
  });
}
function SortableHeaderCell({ sortDirection, priority, children }) {
  const renderSortStatus$1 = useDefaultRenderers().renderSortStatus;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
    className: headerSortCellClassname,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      className: headerSortNameClassname,
      children
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: renderSortStatus$1({
      sortDirection,
      priority
    }) })]
  });
}
var DEFAULT_COLUMN_WIDTH = "auto";
var DEFAULT_COLUMN_MIN_WIDTH = 50;
function useCalculatedColumns({ rawColumns, defaultColumnOptions, getColumnWidth, viewportWidth, scrollLeft, enableVirtualization }) {
  const defaultWidth = defaultColumnOptions?.width ?? DEFAULT_COLUMN_WIDTH;
  const defaultMinWidth = defaultColumnOptions?.minWidth ?? DEFAULT_COLUMN_MIN_WIDTH;
  const defaultMaxWidth = defaultColumnOptions?.maxWidth ?? void 0;
  const defaultRenderCell$1 = defaultColumnOptions?.renderCell ?? renderValue;
  const defaultRenderHeaderCell = defaultColumnOptions?.renderHeaderCell ?? renderHeaderCell;
  const defaultSortable = defaultColumnOptions?.sortable ?? false;
  const defaultResizable = defaultColumnOptions?.resizable ?? false;
  const defaultDraggable = defaultColumnOptions?.draggable ?? false;
  const { columns, colSpanColumns, lastFrozenColumnIndex, headerRowsCount } = (0, import_react2.useMemo)(() => {
    let lastFrozenColumnIndex$1 = -1;
    let headerRowsCount$1 = 1;
    const columns$1 = [];
    collectColumns(rawColumns, 1);
    function collectColumns(rawColumns$1, level, parent) {
      for (const rawColumn of rawColumns$1) {
        if ("children" in rawColumn) {
          const calculatedColumnParent = {
            name: rawColumn.name,
            parent,
            idx: -1,
            colSpan: 0,
            level: 0,
            headerCellClass: rawColumn.headerCellClass
          };
          collectColumns(rawColumn.children, level + 1, calculatedColumnParent);
          continue;
        }
        const frozen = rawColumn.frozen ?? false;
        const column = {
          ...rawColumn,
          parent,
          idx: 0,
          level: 0,
          frozen,
          width: rawColumn.width ?? defaultWidth,
          minWidth: rawColumn.minWidth ?? defaultMinWidth,
          maxWidth: rawColumn.maxWidth ?? defaultMaxWidth,
          sortable: rawColumn.sortable ?? defaultSortable,
          resizable: rawColumn.resizable ?? defaultResizable,
          draggable: rawColumn.draggable ?? defaultDraggable,
          renderCell: rawColumn.renderCell ?? defaultRenderCell$1,
          renderHeaderCell: rawColumn.renderHeaderCell ?? defaultRenderHeaderCell
        };
        columns$1.push(column);
        if (frozen)
          lastFrozenColumnIndex$1++;
        if (level > headerRowsCount$1)
          headerRowsCount$1 = level;
      }
    }
    columns$1.sort(({ key: aKey, frozen: frozenA }, { key: bKey, frozen: frozenB }) => {
      if (aKey === SELECT_COLUMN_KEY)
        return -1;
      if (bKey === SELECT_COLUMN_KEY)
        return 1;
      if (frozenA) {
        if (frozenB)
          return 0;
        return -1;
      }
      if (frozenB)
        return 1;
      return 0;
    });
    const colSpanColumns$1 = [];
    columns$1.forEach((column, idx) => {
      column.idx = idx;
      updateColumnParent(column, idx, 0);
      if (column.colSpan != null)
        colSpanColumns$1.push(column);
    });
    return {
      columns: columns$1,
      colSpanColumns: colSpanColumns$1,
      lastFrozenColumnIndex: lastFrozenColumnIndex$1,
      headerRowsCount: headerRowsCount$1
    };
  }, [
    rawColumns,
    defaultWidth,
    defaultMinWidth,
    defaultMaxWidth,
    defaultRenderCell$1,
    defaultRenderHeaderCell,
    defaultResizable,
    defaultSortable,
    defaultDraggable
  ]);
  const { templateColumns, layoutCssVars, totalFrozenColumnWidth, columnMetrics } = (0, import_react2.useMemo)(() => {
    const columnMetrics$1 = /* @__PURE__ */ new Map();
    let left = 0;
    let totalFrozenColumnWidth$1 = 0;
    const templateColumns$1 = [];
    for (const column of columns) {
      let width = getColumnWidth(column);
      if (typeof width === "number")
        width = clampColumnWidth(width, column);
      else
        width = column.minWidth;
      templateColumns$1.push(`${width}px`);
      columnMetrics$1.set(column, {
        width,
        left
      });
      left += width;
    }
    if (lastFrozenColumnIndex !== -1) {
      const columnMetric = columnMetrics$1.get(columns[lastFrozenColumnIndex]);
      totalFrozenColumnWidth$1 = columnMetric.left + columnMetric.width;
    }
    const layoutCssVars$1 = {};
    for (let i = 0; i <= lastFrozenColumnIndex; i++) {
      const column = columns[i];
      layoutCssVars$1[`--rdg-frozen-left-${column.idx}`] = `${columnMetrics$1.get(column).left}px`;
    }
    return {
      templateColumns: templateColumns$1,
      layoutCssVars: layoutCssVars$1,
      totalFrozenColumnWidth: totalFrozenColumnWidth$1,
      columnMetrics: columnMetrics$1
    };
  }, [
    getColumnWidth,
    columns,
    lastFrozenColumnIndex
  ]);
  const [colOverscanStartIdx, colOverscanEndIdx] = (0, import_react2.useMemo)(() => {
    if (!enableVirtualization)
      return [0, columns.length - 1];
    const viewportLeft = scrollLeft + totalFrozenColumnWidth;
    const viewportRight = scrollLeft + viewportWidth;
    const lastColIdx = columns.length - 1;
    const firstUnfrozenColumnIdx = min(lastFrozenColumnIndex + 1, lastColIdx);
    if (viewportLeft >= viewportRight)
      return [firstUnfrozenColumnIdx, firstUnfrozenColumnIdx];
    let colVisibleStartIdx = firstUnfrozenColumnIdx;
    while (colVisibleStartIdx < lastColIdx) {
      const { left, width } = columnMetrics.get(columns[colVisibleStartIdx]);
      if (left + width > viewportLeft)
        break;
      colVisibleStartIdx++;
    }
    let colVisibleEndIdx = colVisibleStartIdx;
    while (colVisibleEndIdx < lastColIdx) {
      const { left, width } = columnMetrics.get(columns[colVisibleEndIdx]);
      if (left + width >= viewportRight)
        break;
      colVisibleEndIdx++;
    }
    const colOverscanStartIdx$1 = max(firstUnfrozenColumnIdx, colVisibleStartIdx - 1);
    const colOverscanEndIdx$1 = min(lastColIdx, colVisibleEndIdx + 1);
    return [colOverscanStartIdx$1, colOverscanEndIdx$1];
  }, [
    columnMetrics,
    columns,
    lastFrozenColumnIndex,
    scrollLeft,
    totalFrozenColumnWidth,
    viewportWidth,
    enableVirtualization
  ]);
  return {
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    templateColumns,
    layoutCssVars,
    headerRowsCount,
    lastFrozenColumnIndex,
    totalFrozenColumnWidth
  };
}
function updateColumnParent(column, index, level) {
  if (level < column.level)
    column.level = level;
  if (column.parent !== void 0) {
    const { parent } = column;
    if (parent.idx === -1)
      parent.idx = index;
    parent.colSpan += 1;
    updateColumnParent(parent, index, level - 1);
  }
}
function useColumnWidths(columns, viewportColumns, templateColumns, gridRef, gridWidth, columnWidths, onColumnWidthsChange, onColumnResize, setColumnResizing) {
  const [columnToAutoResize, setColumnToAutoResize] = (0, import_react2.useState)(null);
  const [columnsToMeasureOnResize, setColumnsToMeasureOnResize] = (0, import_react2.useState)(null);
  const [prevGridWidth, setPreviousGridWidth] = (0, import_react2.useState)(gridWidth);
  const columnsCanFlex = columns.length === viewportColumns.length;
  const ignorePreviouslyMeasuredColumnsOnGridWidthChange = columnsCanFlex && gridWidth !== prevGridWidth;
  const newTemplateColumns = [...templateColumns];
  const columnsToMeasure = [];
  for (const { key, idx, width } of viewportColumns) {
    const columnWidth = columnWidths.get(key);
    if (key === columnToAutoResize?.key) {
      newTemplateColumns[idx] = columnToAutoResize.width === "max-content" ? columnToAutoResize.width : `${columnToAutoResize.width}px`;
      columnsToMeasure.push(key);
    } else if (typeof width === "string" && columnWidth?.type !== "resized" && (ignorePreviouslyMeasuredColumnsOnGridWidthChange || columnsToMeasureOnResize?.has(key) === true || columnWidth === void 0)) {
      newTemplateColumns[idx] = width;
      columnsToMeasure.push(key);
    }
  }
  const gridTemplateColumns = newTemplateColumns.join(" ");
  (0, import_react2.useLayoutEffect)(updateMeasuredAndResizedWidths);
  function updateMeasuredAndResizedWidths() {
    setPreviousGridWidth(gridWidth);
    if (columnsToMeasure.length === 0)
      return;
    const newColumnWidths = new Map(columnWidths);
    let hasChanges = false;
    for (const key of columnsToMeasure) {
      const measuredWidth = measureColumnWidth(gridRef, key);
      hasChanges ||= measuredWidth !== columnWidths.get(key)?.width;
      if (measuredWidth === void 0)
        newColumnWidths.delete(key);
      else
        newColumnWidths.set(key, {
          type: "measured",
          width: measuredWidth
        });
    }
    if (columnToAutoResize !== null) {
      const resizingKey = columnToAutoResize.key;
      const oldWidth = columnWidths.get(resizingKey)?.width;
      const newWidth = measureColumnWidth(gridRef, resizingKey);
      if (newWidth !== void 0 && oldWidth !== newWidth) {
        hasChanges = true;
        newColumnWidths.set(resizingKey, {
          type: "resized",
          width: newWidth
        });
      }
      setColumnToAutoResize(null);
    }
    if (hasChanges)
      onColumnWidthsChange(newColumnWidths);
  }
  function handleColumnResize(column, nextWidth) {
    const { key: resizingKey } = column;
    (0, import_react_dom.flushSync)(() => {
      if (columnsCanFlex) {
        const columnsToRemeasure = /* @__PURE__ */ new Set();
        for (const { key, width } of viewportColumns)
          if (resizingKey !== key && typeof width === "string" && columnWidths.get(key)?.type !== "resized")
            columnsToRemeasure.add(key);
        setColumnsToMeasureOnResize(columnsToRemeasure);
      }
      setColumnToAutoResize({
        key: resizingKey,
        width: nextWidth
      });
      setColumnResizing(typeof nextWidth === "number");
    });
    setColumnsToMeasureOnResize(null);
    if (onColumnResize) {
      const previousWidth = columnWidths.get(resizingKey)?.width;
      const newWidth = typeof nextWidth === "number" ? nextWidth : measureColumnWidth(gridRef, resizingKey);
      if (newWidth !== void 0 && newWidth !== previousWidth)
        onColumnResize(column, newWidth);
    }
  }
  return {
    gridTemplateColumns,
    handleColumnResize
  };
}
function measureColumnWidth(gridRef, key) {
  const selector = `[data-measuring-cell-key="${CSS.escape(key)}"]`;
  const measuringCell = gridRef.current?.querySelector(selector);
  return measuringCell?.getBoundingClientRect().width;
}
function useGridDimensions() {
  const gridRef = (0, import_react2.useRef)(null);
  const [inlineSize, setInlineSize] = (0, import_react2.useState)(1);
  const [blockSize, setBlockSize] = (0, import_react2.useState)(1);
  const [horizontalScrollbarHeight, setHorizontalScrollbarHeight] = (0, import_react2.useState)(0);
  (0, import_react2.useLayoutEffect)(() => {
    const { ResizeObserver } = window;
    if (ResizeObserver == null)
      return;
    const { clientWidth, clientHeight, offsetWidth, offsetHeight } = gridRef.current;
    const { width, height } = gridRef.current.getBoundingClientRect();
    const initialHorizontalScrollbarHeight = offsetHeight - clientHeight;
    const initialWidth = width - offsetWidth + clientWidth;
    const initialHeight = height - initialHorizontalScrollbarHeight;
    setInlineSize(initialWidth);
    setBlockSize(initialHeight);
    setHorizontalScrollbarHeight(initialHorizontalScrollbarHeight);
    const resizeObserver = new ResizeObserver((entries) => {
      const size = entries[0].contentBoxSize[0];
      const { clientHeight: clientHeight$1, offsetHeight: offsetHeight$1 } = gridRef.current;
      (0, import_react_dom.flushSync)(() => {
        setInlineSize(size.inlineSize);
        setBlockSize(size.blockSize);
        setHorizontalScrollbarHeight(offsetHeight$1 - clientHeight$1);
      });
    });
    resizeObserver.observe(gridRef.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);
  return [
    gridRef,
    inlineSize,
    blockSize,
    horizontalScrollbarHeight
  ];
}
function useLatestFunc(fn) {
  const ref = (0, import_react2.useRef)(fn);
  (0, import_react2.useLayoutEffect)(() => {
    ref.current = fn;
  });
  const callbackFn = (0, import_react2.useCallback)((...args) => {
    ref.current(...args);
  }, []);
  return fn ? callbackFn : fn;
}
function useRovingTabIndex(isSelected) {
  const [isChildFocused, setIsChildFocused] = (0, import_react2.useState)(false);
  if (isChildFocused && !isSelected)
    setIsChildFocused(false);
  function onFocus(event) {
    const elementToFocus = event.currentTarget.querySelector('[tabindex="0"]');
    if (elementToFocus !== null) {
      elementToFocus.focus({ preventScroll: true });
      setIsChildFocused(true);
    }
  }
  const isFocusable = isSelected && !isChildFocused;
  return {
    tabIndex: isFocusable ? 0 : -1,
    childTabIndex: isSelected ? 0 : -1,
    onFocus: isSelected ? onFocus : void 0
  };
}
function useViewportColumns({ columns, colSpanColumns, rows, topSummaryRows, bottomSummaryRows, colOverscanStartIdx, colOverscanEndIdx, lastFrozenColumnIndex, rowOverscanStartIdx, rowOverscanEndIdx }) {
  const startIdx = (0, import_react2.useMemo)(() => {
    if (colOverscanStartIdx === 0)
      return 0;
    let startIdx$1 = colOverscanStartIdx;
    const updateStartIdx = (colIdx, colSpan) => {
      if (colSpan !== void 0 && colIdx + colSpan > colOverscanStartIdx) {
        startIdx$1 = colIdx;
        return true;
      }
      return false;
    };
    for (const column of colSpanColumns) {
      const colIdx = column.idx;
      if (colIdx >= startIdx$1)
        break;
      if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" })))
        break;
      for (let rowIdx = rowOverscanStartIdx; rowIdx <= rowOverscanEndIdx; rowIdx++) {
        const row$1 = rows[rowIdx];
        if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
          type: "ROW",
          row: row$1
        })))
          break;
      }
      if (topSummaryRows != null) {
        for (const row$1 of topSummaryRows)
          if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
            type: "SUMMARY",
            row: row$1
          })))
            break;
      }
      if (bottomSummaryRows != null) {
        for (const row$1 of bottomSummaryRows)
          if (updateStartIdx(colIdx, getColSpan(column, lastFrozenColumnIndex, {
            type: "SUMMARY",
            row: row$1
          })))
            break;
      }
    }
    return startIdx$1;
  }, [
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    topSummaryRows,
    bottomSummaryRows,
    colOverscanStartIdx,
    lastFrozenColumnIndex,
    colSpanColumns
  ]);
  return (0, import_react2.useMemo)(() => {
    const viewportColumns = [];
    for (let colIdx = 0; colIdx <= colOverscanEndIdx; colIdx++) {
      const column = columns[colIdx];
      if (colIdx < startIdx && !column.frozen)
        continue;
      viewportColumns.push(column);
    }
    return viewportColumns;
  }, [
    startIdx,
    colOverscanEndIdx,
    columns
  ]);
}
function useViewportRows({ rows, rowHeight, clientHeight, scrollTop, enableVirtualization }) {
  const { totalRowHeight, gridTemplateRows, getRowTop, getRowHeight, findRowIdx } = (0, import_react2.useMemo)(() => {
    if (typeof rowHeight === "number")
      return {
        totalRowHeight: rowHeight * rows.length,
        gridTemplateRows: ` repeat(${rows.length}, ${rowHeight}px)`,
        getRowTop: (rowIdx) => rowIdx * rowHeight,
        getRowHeight: () => rowHeight,
        findRowIdx: (offset) => floor(offset / rowHeight)
      };
    let totalRowHeight$1 = 0;
    let gridTemplateRows$1 = " ";
    const rowPositions = rows.map((row$1) => {
      const currentRowHeight = rowHeight(row$1);
      const position = {
        top: totalRowHeight$1,
        height: currentRowHeight
      };
      gridTemplateRows$1 += `${currentRowHeight}px `;
      totalRowHeight$1 += currentRowHeight;
      return position;
    });
    const validateRowIdx = (rowIdx) => {
      return max(0, min(rows.length - 1, rowIdx));
    };
    return {
      totalRowHeight: totalRowHeight$1,
      gridTemplateRows: gridTemplateRows$1,
      getRowTop: (rowIdx) => rowPositions[validateRowIdx(rowIdx)].top,
      getRowHeight: (rowIdx) => rowPositions[validateRowIdx(rowIdx)].height,
      findRowIdx(offset) {
        let start = 0;
        let end = rowPositions.length - 1;
        while (start <= end) {
          const middle = start + floor((end - start) / 2);
          const currentOffset = rowPositions[middle].top;
          if (currentOffset === offset)
            return middle;
          if (currentOffset < offset)
            start = middle + 1;
          else if (currentOffset > offset)
            end = middle - 1;
          if (start > end)
            return end;
        }
        return 0;
      }
    };
  }, [rowHeight, rows]);
  let rowOverscanStartIdx = 0;
  let rowOverscanEndIdx = rows.length - 1;
  if (enableVirtualization) {
    const overscanThreshold = 4;
    const rowVisibleStartIdx = findRowIdx(scrollTop);
    const rowVisibleEndIdx = findRowIdx(scrollTop + clientHeight);
    rowOverscanStartIdx = max(0, rowVisibleStartIdx - overscanThreshold);
    rowOverscanEndIdx = min(rows.length - 1, rowVisibleEndIdx + overscanThreshold);
  }
  return {
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    totalRowHeight,
    gridTemplateRows,
    getRowTop,
    getRowHeight,
    findRowIdx
  };
}
var cellDraggedOver = "c6ra8a37-0-0-beta-56";
var cellDraggedOverClassname = `rdg-cell-dragged-over ${cellDraggedOver}`;
function Cell({ column, colSpan, isCellSelected, isDraggedOver, row: row$1, rowIdx, className, onMouseDown, onCellMouseDown, onClick, onCellClick, onDoubleClick, onCellDoubleClick, onContextMenu, onCellContextMenu, onRowChange, selectCell, style, ...props }) {
  const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  const { cellClass } = column;
  className = getCellClassname(column, { [cellDraggedOverClassname]: isDraggedOver }, typeof cellClass === "function" ? cellClass(row$1) : cellClass, className);
  const isEditable = isCellEditableUtil(column, row$1);
  function selectCellWrapper(enableEditor) {
    selectCell({
      rowIdx,
      idx: column.idx
    }, { enableEditor });
  }
  function handleMouseEvent(event, eventHandler) {
    let eventHandled = false;
    if (eventHandler) {
      const cellEvent = createCellEvent(event);
      eventHandler({
        rowIdx,
        row: row$1,
        column,
        selectCell: selectCellWrapper
      }, cellEvent);
      eventHandled = cellEvent.isGridDefaultPrevented();
    }
    return eventHandled;
  }
  function handleMouseDown(event) {
    onMouseDown?.(event);
    if (!handleMouseEvent(event, onCellMouseDown))
      selectCellWrapper();
  }
  function handleClick(event) {
    onClick?.(event);
    handleMouseEvent(event, onCellClick);
  }
  function handleDoubleClick(event) {
    onDoubleClick?.(event);
    if (!handleMouseEvent(event, onCellDoubleClick))
      selectCellWrapper(true);
  }
  function handleContextMenu(event) {
    onContextMenu?.(event);
    handleMouseEvent(event, onCellContextMenu);
  }
  function handleRowChange(newRow) {
    onRowChange(column, newRow);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": isCellSelected,
    "aria-readonly": !isEditable || void 0,
    tabIndex,
    className,
    style: {
      ...getCellStyle(column, colSpan),
      ...style
    },
    onClick: handleClick,
    onMouseDown: handleMouseDown,
    onDoubleClick: handleDoubleClick,
    onContextMenu: handleContextMenu,
    onFocus,
    ...props,
    children: column.renderCell({
      column,
      row: row$1,
      rowIdx,
      isCellEditable: isEditable,
      tabIndex: childTabIndex,
      onRowChange: handleRowChange
    })
  });
}
var CellComponent = (0, import_react2.memo)(Cell);
function defaultRenderCell(key, props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CellComponent, { ...props }, key);
}
var canUsePostTask = typeof scheduler === "object" && typeof scheduler.postTask === "function";
var cellEditing = "cis5rrm7-0-0-beta-56";
function EditCell({ column, colSpan, row: row$1, rowIdx, onRowChange, closeEditor, onKeyDown, navigate }) {
  const captureEventRef = (0, import_react2.useRef)(void 0);
  const abortControllerRef = (0, import_react2.useRef)(void 0);
  const frameRequestRef = (0, import_react2.useRef)(void 0);
  const commitOnOutsideClick = column.editorOptions?.commitOnOutsideClick ?? true;
  const commitOnOutsideMouseDown = useLatestFunc(() => {
    onClose(true, false);
  });
  (0, import_react2.useLayoutEffect)(() => {
    if (!commitOnOutsideClick)
      return;
    function onWindowCaptureMouseDown(event) {
      captureEventRef.current = event;
      if (canUsePostTask) {
        const abortController = new AbortController();
        const { signal } = abortController;
        abortControllerRef.current = abortController;
        scheduler.postTask(commitOnOutsideMouseDown, {
          priority: "user-blocking",
          signal
        }).catch(() => {
        });
      } else
        frameRequestRef.current = requestAnimationFrame(commitOnOutsideMouseDown);
    }
    function onWindowMouseDown(event) {
      if (captureEventRef.current === event)
        commitOnOutsideMouseDown();
    }
    addEventListener("mousedown", onWindowCaptureMouseDown, { capture: true });
    addEventListener("mousedown", onWindowMouseDown);
    return () => {
      removeEventListener("mousedown", onWindowCaptureMouseDown, { capture: true });
      removeEventListener("mousedown", onWindowMouseDown);
      cancelTask();
    };
  }, [commitOnOutsideClick, commitOnOutsideMouseDown]);
  function cancelTask() {
    captureEventRef.current = void 0;
    if (abortControllerRef.current !== void 0) {
      abortControllerRef.current.abort();
      abortControllerRef.current = void 0;
    }
    if (frameRequestRef.current !== void 0) {
      cancelAnimationFrame(frameRequestRef.current);
      frameRequestRef.current = void 0;
    }
  }
  function handleKeyDown(event) {
    if (onKeyDown) {
      const cellEvent = createCellEvent(event);
      onKeyDown({
        mode: "EDIT",
        row: row$1,
        column,
        rowIdx,
        navigate() {
          navigate(event);
        },
        onClose
      }, cellEvent);
      if (cellEvent.isGridDefaultPrevented())
        return;
    }
    if (event.key === "Escape")
      onClose();
    else if (event.key === "Enter")
      onClose(true);
    else if (onEditorNavigation(event))
      navigate(event);
  }
  function onClose(commitChanges = false, shouldFocusCell = true) {
    if (commitChanges)
      onRowChange(row$1, true, shouldFocusCell);
    else
      closeEditor(shouldFocusCell);
  }
  function onEditorRowChange(row$2, commitChangesAndFocus = false) {
    onRowChange(row$2, commitChangesAndFocus, commitChangesAndFocus);
  }
  const { cellClass } = column;
  const className = getCellClassname(column, "rdg-editor-container", !column.editorOptions?.displayCellContent && cellEditing, typeof cellClass === "function" ? cellClass(row$1) : cellClass);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": true,
    className,
    style: getCellStyle(column, colSpan),
    onKeyDown: handleKeyDown,
    onMouseDownCapture: cancelTask,
    children: column.renderEditCell != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [column.renderEditCell({
      column,
      row: row$1,
      rowIdx,
      onRowChange: onEditorRowChange,
      onClose
    }), column.editorOptions?.displayCellContent && column.renderCell({
      column,
      row: row$1,
      rowIdx,
      isCellEditable: true,
      tabIndex: -1,
      onRowChange: onEditorRowChange
    })] })
  });
}
function GroupedColumnHeaderCell({ column, rowIdx, isCellSelected, selectCell }) {
  const { tabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  const { colSpan } = column;
  const rowSpan = getHeaderCellRowSpan(column, rowIdx);
  const index = column.idx + 1;
  function onMouseDown() {
    selectCell({
      idx: column.idx,
      rowIdx
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    role: "columnheader",
    "aria-colindex": index,
    "aria-colspan": colSpan,
    "aria-rowspan": rowSpan,
    "aria-selected": isCellSelected,
    tabIndex,
    className: clsx_default(cellClassname, column.headerCellClass),
    style: {
      ...getHeaderCellStyle(column, rowIdx, rowSpan),
      gridColumnStart: index,
      gridColumnEnd: index + colSpan
    },
    onFocus,
    onMouseDown,
    children: column.name
  });
}
var cellSortableClassname = "c6l2wv17-0-0-beta-56";
var cellResizable = "c1kqdw7y7-0-0-beta-56";
var cellResizableClassname = `rdg-cell-resizable ${cellResizable}`;
var resizeHandleClassname = "r1y6ywlx7-0-0-beta-56";
var cellDraggableClassname = "rdg-cell-draggable";
var cellDragging = "c1bezg5o7-0-0-beta-56";
var cellDraggingClassname = `rdg-cell-dragging ${cellDragging}`;
var cellOver = "c1vc96037-0-0-beta-56";
var cellOverClassname = `rdg-cell-drag-over ${cellOver}`;
var dragImageClassname = "d8rwc9w7-0-0-beta-56";
function HeaderCell({ column, colSpan, rowIdx, isCellSelected, onColumnResize, onColumnResizeEnd, onColumnsReorder, sortColumns, onSortColumnsChange, selectCell, direction, draggedColumnKey, setDraggedColumnKey }) {
  const [isOver, setIsOver] = (0, import_react2.useState)(false);
  const dragImageRef = (0, import_react2.useRef)(null);
  const isDragging = draggedColumnKey === column.key;
  const rowSpan = getHeaderCellRowSpan(column, rowIdx);
  const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  const sortIndex = sortColumns?.findIndex((sort) => sort.columnKey === column.key);
  const sortColumn = sortIndex !== void 0 && sortIndex > -1 ? sortColumns[sortIndex] : void 0;
  const sortDirection = sortColumn?.direction;
  const priority = sortColumn !== void 0 && sortColumns.length > 1 ? sortIndex + 1 : void 0;
  const ariaSort = sortDirection && !priority ? sortDirection === "ASC" ? "ascending" : "descending" : void 0;
  const { sortable, resizable, draggable } = column;
  const className = getCellClassname(column, column.headerCellClass, {
    [cellSortableClassname]: sortable,
    [cellResizableClassname]: resizable,
    [cellDraggableClassname]: draggable,
    [cellDraggingClassname]: isDragging,
    [cellOverClassname]: isOver
  });
  function onSort(ctrlClick) {
    if (onSortColumnsChange == null)
      return;
    const { sortDescendingFirst } = column;
    if (sortColumn === void 0) {
      const nextSort = {
        columnKey: column.key,
        direction: sortDescendingFirst ? "DESC" : "ASC"
      };
      onSortColumnsChange(sortColumns && ctrlClick ? [...sortColumns, nextSort] : [nextSort]);
    } else {
      let nextSortColumn;
      if (sortDescendingFirst === true && sortDirection === "DESC" || sortDescendingFirst !== true && sortDirection === "ASC")
        nextSortColumn = {
          columnKey: column.key,
          direction: sortDirection === "ASC" ? "DESC" : "ASC"
        };
      if (ctrlClick) {
        const nextSortColumns = [...sortColumns];
        if (nextSortColumn)
          nextSortColumns[sortIndex] = nextSortColumn;
        else
          nextSortColumns.splice(sortIndex, 1);
        onSortColumnsChange(nextSortColumns);
      } else
        onSortColumnsChange(nextSortColumn ? [nextSortColumn] : []);
    }
  }
  function onMouseDown() {
    selectCell({
      idx: column.idx,
      rowIdx
    });
  }
  function onClick(event) {
    if (sortable)
      onSort(event.ctrlKey || event.metaKey);
  }
  function onKeyDown(event) {
    const { key } = event;
    if (sortable && (key === " " || key === "Enter")) {
      event.preventDefault();
      onSort(event.ctrlKey || event.metaKey);
    } else if (resizable && isCtrlKeyHeldDown(event) && (key === "ArrowLeft" || key === "ArrowRight")) {
      event.stopPropagation();
      const { width } = event.currentTarget.getBoundingClientRect();
      const { leftKey } = getLeftRightKey(direction);
      const offset = key === leftKey ? -10 : 10;
      const newWidth = clampColumnWidth(width + offset, column);
      if (newWidth !== width)
        onColumnResize(column, newWidth);
    }
  }
  function onDragStart(event) {
    (0, import_react_dom.flushSync)(() => {
      setDraggedColumnKey(column.key);
    });
    event.dataTransfer.setDragImage(dragImageRef.current, 0, 0);
    event.dataTransfer.dropEffect = "move";
  }
  function onDragEnd() {
    setDraggedColumnKey(void 0);
  }
  function onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }
  function onDrop(event) {
    setIsOver(false);
    event.preventDefault();
    onColumnsReorder?.(draggedColumnKey, column.key);
  }
  function onDragEnter(event) {
    if (isEventPertinent(event))
      setIsOver(true);
  }
  function onDragLeave(event) {
    if (isEventPertinent(event))
      setIsOver(false);
  }
  let dragTargetProps;
  let dropTargetProps;
  if (draggable) {
    dragTargetProps = {
      draggable: true,
      onDragStart,
      onDragEnd
    };
    if (draggedColumnKey !== void 0 && draggedColumnKey !== column.key)
      dropTargetProps = {
        onDragOver,
        onDragEnter,
        onDragLeave,
        onDrop
      };
  }
  const style = {
    ...getHeaderCellStyle(column, rowIdx, rowSpan),
    ...getCellStyle(column, colSpan)
  };
  const content = column.renderHeaderCell({
    column,
    sortDirection,
    priority,
    tabIndex: childTabIndex
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [isDragging && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref: dragImageRef,
    style,
    className: getCellClassname(column, column.headerCellClass, dragImageClassname),
    children: content
  }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    role: "columnheader",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-rowspan": rowSpan,
    "aria-selected": isCellSelected,
    "aria-sort": ariaSort,
    tabIndex,
    className,
    style,
    onMouseDown,
    onFocus,
    onClick,
    onKeyDown,
    ...dragTargetProps,
    ...dropTargetProps,
    children: [content, resizable && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResizeHandle, {
      direction,
      column,
      onColumnResize,
      onColumnResizeEnd
    })]
  })] });
}
function ResizeHandle({ direction, column, onColumnResize, onColumnResizeEnd }) {
  const resizingOffsetRef = (0, import_react2.useRef)(void 0);
  const isRtl = direction === "rtl";
  function onPointerDown(event) {
    if (event.pointerType === "mouse" && event.buttons !== 1)
      return;
    event.preventDefault();
    const { currentTarget, pointerId } = event;
    currentTarget.setPointerCapture(pointerId);
    const headerCell = currentTarget.parentElement;
    const { right, left } = headerCell.getBoundingClientRect();
    resizingOffsetRef.current = isRtl ? event.clientX - left : right - event.clientX;
  }
  function onPointerMove(event) {
    const offset = resizingOffsetRef.current;
    if (offset === void 0)
      return;
    const { width, right, left } = event.currentTarget.parentElement.getBoundingClientRect();
    let newWidth = isRtl ? right + offset - event.clientX : event.clientX + offset - left;
    newWidth = clampColumnWidth(newWidth, column);
    if (width > 0 && newWidth !== width)
      onColumnResize(column, newWidth);
  }
  function onLostPointerCapture() {
    onColumnResizeEnd();
    resizingOffsetRef.current = void 0;
  }
  function onDoubleClick() {
    onColumnResize(column, "max-content");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: resizeHandleClassname,
    onClick: stopPropagation,
    onPointerDown,
    onPointerMove,
    onLostPointerCapture,
    onDoubleClick
  });
}
function isEventPertinent(event) {
  const relatedTarget = event.relatedTarget;
  return !event.currentTarget.contains(relatedTarget);
}
var row = "r1upfr807-0-0-beta-56";
var rowClassname = `rdg-row ${row}`;
var rowSelected = "r190mhd37-0-0-beta-56";
var rowSelectedClassname = "rdg-row-selected";
var rowSelectedWithFrozenCell = "r139qu9m7-0-0-beta-56";
var topSummaryRowClassname = "rdg-top-summary-row";
var bottomSummaryRowClassname = "rdg-bottom-summary-row";
var headerRow = "h10tskcx7-0-0-beta-56";
var headerRowClassname = `rdg-header-row ${headerRow}`;
function HeaderRow({ headerRowClass, rowIdx, columns, onColumnResize, onColumnResizeEnd, onColumnsReorder, sortColumns, onSortColumnsChange, lastFrozenColumnIndex, selectedCellIdx, selectCell, direction }) {
  const [draggedColumnKey, setDraggedColumnKey] = (0, import_react2.useState)();
  const cells = [];
  for (let index = 0; index < columns.length; index++) {
    const column = columns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, { type: "HEADER" });
    if (colSpan !== void 0)
      index += colSpan - 1;
    cells.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderCell, {
      column,
      colSpan,
      rowIdx,
      isCellSelected: selectedCellIdx === column.idx,
      onColumnResize,
      onColumnResizeEnd,
      onColumnsReorder,
      onSortColumnsChange,
      sortColumns,
      selectCell,
      direction,
      draggedColumnKey,
      setDraggedColumnKey
    }, column.key));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    role: "row",
    "aria-rowindex": rowIdx,
    className: clsx_default(headerRowClassname, { [rowSelectedClassname]: selectedCellIdx === -1 }, headerRowClass),
    children: cells
  });
}
var HeaderRow_default = (0, import_react2.memo)(HeaderRow);
function GroupedColumnHeaderRow({ rowIdx, level, columns, selectedCellIdx, selectCell }) {
  const cells = [];
  const renderedParents = /* @__PURE__ */ new Set();
  for (const column of columns) {
    let { parent } = column;
    if (parent === void 0)
      continue;
    while (parent.level > level) {
      if (parent.parent === void 0)
        break;
      parent = parent.parent;
    }
    if (parent.level === level && !renderedParents.has(parent)) {
      renderedParents.add(parent);
      const { idx } = parent;
      cells.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupedColumnHeaderCell, {
        column: parent,
        rowIdx,
        isCellSelected: selectedCellIdx === idx,
        selectCell
      }, idx));
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    role: "row",
    "aria-rowindex": rowIdx,
    className: headerRowClassname,
    children: cells
  });
}
var GroupedColumnHeaderRow_default = (0, import_react2.memo)(GroupedColumnHeaderRow);
function Row({ className, rowIdx, gridRowStart, selectedCellIdx, isRowSelectionDisabled, isRowSelected, draggedOverCellIdx, lastFrozenColumnIndex, row: row$1, viewportColumns, selectedCellEditor, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, rowClass, onRowChange, selectCell, style, ...props }) {
  const renderCell = useDefaultRenderers().renderCell;
  const handleRowChange = useLatestFunc((column, newRow) => {
    onRowChange(column, rowIdx, newRow);
  });
  className = clsx_default(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, { [rowSelectedClassname]: selectedCellIdx === -1 }, rowClass?.(row$1, rowIdx), className);
  const cells = [];
  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const { idx } = column;
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: "ROW",
      row: row$1
    });
    if (colSpan !== void 0)
      index += colSpan - 1;
    const isCellSelected = selectedCellIdx === idx;
    if (isCellSelected && selectedCellEditor)
      cells.push(selectedCellEditor);
    else
      cells.push(renderCell(column.key, {
        column,
        colSpan,
        row: row$1,
        rowIdx,
        isDraggedOver: draggedOverCellIdx === idx,
        isCellSelected,
        onCellMouseDown,
        onCellClick,
        onCellDoubleClick,
        onCellContextMenu,
        onRowChange: handleRowChange,
        selectCell
      }));
  }
  const selectionValue = (0, import_react2.useMemo)(() => ({
    isRowSelected,
    isRowSelectionDisabled
  }), [isRowSelectionDisabled, isRowSelected]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowSelectionContext, {
    value: selectionValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      role: "row",
      className,
      style: {
        ...getRowStyle(gridRowStart),
        ...style
      },
      ...props,
      children: cells
    })
  });
}
var RowComponent = (0, import_react2.memo)(Row);
function defaultRenderRow(key, props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowComponent, { ...props }, key);
}
function ScrollToCell({ scrollToPosition: { idx, rowIdx }, gridRef, setScrollToCellPosition }) {
  const ref = (0, import_react2.useRef)(null);
  (0, import_react2.useLayoutEffect)(() => {
    scrollIntoView(ref.current, "auto");
  });
  (0, import_react2.useLayoutEffect)(() => {
    function removeScrollToCell() {
      setScrollToCellPosition(null);
    }
    const observer = new IntersectionObserver(removeScrollToCell, {
      root: gridRef.current,
      threshold: 1
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [gridRef, setScrollToCellPosition]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    style: {
      gridColumn: idx === void 0 ? "1/-1" : idx + 1,
      gridRow: rowIdx === void 0 ? "1/-1" : rowIdx + 2
    }
  });
}
var arrow = "a3ejtar7-0-0-beta-56";
var arrowClassname = `rdg-sort-arrow ${arrow}`;
function renderSortStatus({ sortDirection, priority }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [renderSortIcon({ sortDirection }), renderSortPriority({ priority })] });
}
function renderSortIcon({ sortDirection }) {
  if (sortDirection === void 0)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    viewBox: "0 0 12 8",
    width: "12",
    height: "8",
    className: arrowClassname,
    "aria-hidden": true,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: sortDirection === "ASC" ? "M0 8 6 0 12 8" : "M0 0 6 8 12 0" })
  });
}
function renderSortPriority({ priority }) {
  return priority;
}
var root = "rnvodz57-0-0-beta-56";
var rootClassname = `rdg ${root}`;
var viewportDragging = "vlqv91k7-0-0-beta-56";
var viewportDraggingClassname = `rdg-viewport-dragging ${viewportDragging}`;
var focusSinkClassname = "f1lsfrzw7-0-0-beta-56";
var focusSinkHeaderAndSummaryClassname = "f1cte0lg7-0-0-beta-56";
var summaryCellClassname = "s8wc6fl7-0-0-beta-56";
function SummaryCell({ column, colSpan, row: row$1, rowIdx, isCellSelected, selectCell }) {
  const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  const { summaryCellClass } = column;
  const className = getCellClassname(column, summaryCellClassname, typeof summaryCellClass === "function" ? summaryCellClass(row$1) : summaryCellClass);
  function onMouseDown() {
    selectCell({
      rowIdx,
      idx: column.idx
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-colspan": colSpan,
    "aria-selected": isCellSelected,
    tabIndex,
    className,
    style: getCellStyle(column, colSpan),
    onMouseDown,
    onFocus,
    children: column.renderSummaryCell?.({
      column,
      row: row$1,
      tabIndex: childTabIndex
    })
  });
}
var SummaryCell_default = (0, import_react2.memo)(SummaryCell);
var summaryRow = "skuhp557-0-0-beta-56";
var topSummaryRow = "tf8l5ub7-0-0-beta-56";
var summaryRowClassname = `rdg-summary-row ${summaryRow}`;
function SummaryRow({ rowIdx, gridRowStart, row: row$1, viewportColumns, top, bottom, lastFrozenColumnIndex, selectedCellIdx, isTop, selectCell, "aria-rowindex": ariaRowIndex }) {
  const cells = [];
  for (let index = 0; index < viewportColumns.length; index++) {
    const column = viewportColumns[index];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: "SUMMARY",
      row: row$1
    });
    if (colSpan !== void 0)
      index += colSpan - 1;
    const isCellSelected = selectedCellIdx === column.idx;
    cells.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryCell_default, {
      column,
      colSpan,
      row: row$1,
      rowIdx,
      isCellSelected,
      selectCell
    }, column.key));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    role: "row",
    "aria-rowindex": ariaRowIndex,
    className: clsx_default(rowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, summaryRowClassname, {
      [rowSelectedClassname]: selectedCellIdx === -1,
      [`${topSummaryRowClassname} ${topSummaryRow}`]: isTop,
      [bottomSummaryRowClassname]: !isTop
    }),
    style: {
      ...getRowStyle(gridRowStart),
      "--rdg-summary-row-top": top !== void 0 ? `${top}px` : void 0,
      "--rdg-summary-row-bottom": bottom !== void 0 ? `${bottom}px` : void 0
    },
    children: cells
  });
}
var SummaryRow_default = (0, import_react2.memo)(SummaryRow);
function DataGrid(props) {
  const { ref, columns: rawColumns, rows, topSummaryRows, bottomSummaryRows, rowKeyGetter, onRowsChange, rowHeight: rawRowHeight, headerRowHeight: rawHeaderRowHeight, summaryRowHeight: rawSummaryRowHeight, columnWidths: columnWidthsRaw, onColumnWidthsChange: onColumnWidthsChangeRaw, selectedRows, isRowSelectionDisabled, onSelectedRowsChange, sortColumns, onSortColumnsChange, defaultColumnOptions, onCellMouseDown, onCellClick, onCellDoubleClick, onCellContextMenu, onCellKeyDown, onSelectedCellChange, onScroll, onColumnResize, onColumnsReorder, onFill, onCellCopy, onCellPaste, enableVirtualization: rawEnableVirtualization, renderers, className, style, rowClass, headerRowClass, direction: rawDirection, role: rawRole, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-description": ariaDescription, "aria-describedby": ariaDescribedBy, "aria-rowcount": rawAriaRowCount, "data-testid": testId, "data-cy": dataCy } = props;
  const defaultRenderers = useDefaultRenderers();
  const role = rawRole ?? "grid";
  const rowHeight = rawRowHeight ?? 35;
  const headerRowHeight = rawHeaderRowHeight ?? (typeof rowHeight === "number" ? rowHeight : 35);
  const summaryRowHeight = rawSummaryRowHeight ?? (typeof rowHeight === "number" ? rowHeight : 35);
  const renderRow = renderers?.renderRow ?? defaultRenderers?.renderRow ?? defaultRenderRow;
  const renderCell = renderers?.renderCell ?? defaultRenderers?.renderCell ?? defaultRenderCell;
  const renderSortStatus$1 = renderers?.renderSortStatus ?? defaultRenderers?.renderSortStatus ?? renderSortStatus;
  const renderCheckbox$1 = renderers?.renderCheckbox ?? defaultRenderers?.renderCheckbox ?? renderCheckbox;
  const noRowsFallback = renderers?.noRowsFallback ?? defaultRenderers?.noRowsFallback;
  const enableVirtualization = rawEnableVirtualization ?? true;
  const direction = rawDirection ?? "ltr";
  const [scrollTop, setScrollTop] = (0, import_react2.useState)(0);
  const [scrollLeft, setScrollLeft] = (0, import_react2.useState)(0);
  const [columnWidthsInternal, setColumnWidthsInternal] = (0, import_react2.useState)(() => columnWidthsRaw ?? /* @__PURE__ */ new Map());
  const [isColumnResizing, setColumnResizing] = (0, import_react2.useState)(false);
  const [isDragging, setDragging] = (0, import_react2.useState)(false);
  const [draggedOverRowIdx, setDraggedOverRowIdx] = (0, import_react2.useState)(void 0);
  const [scrollToPosition, setScrollToPosition] = (0, import_react2.useState)(null);
  const [shouldFocusCell, setShouldFocusCell] = (0, import_react2.useState)(false);
  const [previousRowIdx, setPreviousRowIdx] = (0, import_react2.useState)(-1);
  const isColumnWidthsControlled = columnWidthsRaw != null && onColumnWidthsChangeRaw != null && !isColumnResizing;
  const columnWidths = isColumnWidthsControlled ? columnWidthsRaw : columnWidthsInternal;
  const onColumnWidthsChange = isColumnWidthsControlled ? (columnWidths$1) => {
    setColumnWidthsInternal(columnWidths$1);
    onColumnWidthsChangeRaw(columnWidths$1);
  } : setColumnWidthsInternal;
  const getColumnWidth = (0, import_react2.useCallback)((column) => {
    return columnWidths.get(column.key)?.width ?? column.width;
  }, [columnWidths]);
  const [gridRef, gridWidth, gridHeight, horizontalScrollbarHeight] = useGridDimensions();
  const { columns, colSpanColumns, lastFrozenColumnIndex, headerRowsCount, colOverscanStartIdx, colOverscanEndIdx, templateColumns, layoutCssVars, totalFrozenColumnWidth } = useCalculatedColumns({
    rawColumns,
    defaultColumnOptions,
    getColumnWidth,
    scrollLeft,
    viewportWidth: gridWidth,
    enableVirtualization
  });
  const topSummaryRowsCount = topSummaryRows?.length ?? 0;
  const bottomSummaryRowsCount = bottomSummaryRows?.length ?? 0;
  const summaryRowsCount = topSummaryRowsCount + bottomSummaryRowsCount;
  const headerAndTopSummaryRowsCount = headerRowsCount + topSummaryRowsCount;
  const groupedColumnHeaderRowsCount = headerRowsCount - 1;
  const minRowIdx = -headerAndTopSummaryRowsCount;
  const mainHeaderRowIdx = minRowIdx + groupedColumnHeaderRowsCount;
  const maxRowIdx = rows.length + bottomSummaryRowsCount - 1;
  const [selectedPosition, setSelectedPosition] = (0, import_react2.useState)(() => ({
    idx: -1,
    rowIdx: minRowIdx - 1,
    mode: "SELECT"
  }));
  const focusSinkRef = (0, import_react2.useRef)(null);
  const isTreeGrid = role === "treegrid";
  const headerRowsHeight = headerRowsCount * headerRowHeight;
  const summaryRowsHeight = summaryRowsCount * summaryRowHeight;
  const clientHeight = gridHeight - headerRowsHeight - summaryRowsHeight;
  const isSelectable = selectedRows != null && onSelectedRowsChange != null;
  const { leftKey, rightKey } = getLeftRightKey(direction);
  const ariaRowCount = rawAriaRowCount ?? headerRowsCount + rows.length + summaryRowsCount;
  const defaultGridComponents = (0, import_react2.useMemo)(() => ({
    renderCheckbox: renderCheckbox$1,
    renderSortStatus: renderSortStatus$1,
    renderCell
  }), [
    renderCheckbox$1,
    renderSortStatus$1,
    renderCell
  ]);
  const headerSelectionValue = (0, import_react2.useMemo)(() => {
    let hasSelectedRow = false;
    let hasUnselectedRow = false;
    if (rowKeyGetter != null && selectedRows != null && selectedRows.size > 0)
      for (const row$1 of rows) {
        if (selectedRows.has(rowKeyGetter(row$1)))
          hasSelectedRow = true;
        else
          hasUnselectedRow = true;
        if (hasSelectedRow && hasUnselectedRow)
          break;
      }
    return {
      isRowSelected: hasSelectedRow && !hasUnselectedRow,
      isIndeterminate: hasSelectedRow && hasUnselectedRow
    };
  }, [
    rows,
    selectedRows,
    rowKeyGetter
  ]);
  const { rowOverscanStartIdx, rowOverscanEndIdx, totalRowHeight, gridTemplateRows, getRowTop, getRowHeight, findRowIdx } = useViewportRows({
    rows,
    rowHeight,
    clientHeight,
    scrollTop,
    enableVirtualization
  });
  const viewportColumns = useViewportColumns({
    columns,
    colSpanColumns,
    colOverscanStartIdx,
    colOverscanEndIdx,
    lastFrozenColumnIndex,
    rowOverscanStartIdx,
    rowOverscanEndIdx,
    rows,
    topSummaryRows,
    bottomSummaryRows
  });
  const { gridTemplateColumns, handleColumnResize } = useColumnWidths(columns, viewportColumns, templateColumns, gridRef, gridWidth, columnWidths, onColumnWidthsChange, onColumnResize, setColumnResizing);
  const minColIdx = isTreeGrid ? -1 : 0;
  const maxColIdx = columns.length - 1;
  const selectedCellIsWithinSelectionBounds = isCellWithinSelectionBounds(selectedPosition);
  const selectedCellIsWithinViewportBounds = isCellWithinViewportBounds(selectedPosition);
  const scrollHeight = headerRowHeight + totalRowHeight + summaryRowsHeight + horizontalScrollbarHeight;
  const shouldFocusGrid = !selectedCellIsWithinSelectionBounds;
  const handleColumnResizeLatest = useLatestFunc(handleColumnResize);
  const handleColumnResizeEndLatest = useLatestFunc(handleColumnResizeEnd);
  const onColumnsReorderLastest = useLatestFunc(onColumnsReorder);
  const onSortColumnsChangeLatest = useLatestFunc(onSortColumnsChange);
  const onCellMouseDownLatest = useLatestFunc(onCellMouseDown);
  const onCellClickLatest = useLatestFunc(onCellClick);
  const onCellDoubleClickLatest = useLatestFunc(onCellDoubleClick);
  const onCellContextMenuLatest = useLatestFunc(onCellContextMenu);
  const selectHeaderRowLatest = useLatestFunc(selectHeaderRow);
  const selectRowLatest = useLatestFunc(selectRow);
  const handleFormatterRowChangeLatest = useLatestFunc(updateRow);
  const selectCellLatest = useLatestFunc(selectCell);
  const selectHeaderCellLatest = useLatestFunc(selectHeaderCell);
  const focusCell = (0, import_react2.useCallback)((shouldScroll = true) => {
    const cell$1 = getCellToScroll(gridRef.current);
    if (cell$1 === null)
      return;
    if (shouldScroll)
      scrollIntoView(cell$1);
    cell$1.focus({ preventScroll: true });
  }, [gridRef]);
  (0, import_react2.useLayoutEffect)(() => {
    if (shouldFocusCell) {
      if (focusSinkRef.current !== null && selectedPosition.idx === -1) {
        focusSinkRef.current.focus({ preventScroll: true });
        scrollIntoView(focusSinkRef.current);
      } else
        focusCell();
      setShouldFocusCell(false);
    }
  }, [
    shouldFocusCell,
    focusCell,
    selectedPosition.idx
  ]);
  (0, import_react2.useImperativeHandle)(ref, () => ({
    element: gridRef.current,
    scrollToCell({ idx, rowIdx }) {
      const scrollToIdx = idx !== void 0 && idx > lastFrozenColumnIndex && idx < columns.length ? idx : void 0;
      const scrollToRowIdx = rowIdx !== void 0 && isRowIdxWithinViewportBounds(rowIdx) ? rowIdx : void 0;
      if (scrollToIdx !== void 0 || scrollToRowIdx !== void 0)
        setScrollToPosition({
          idx: scrollToIdx,
          rowIdx: scrollToRowIdx
        });
    },
    selectCell
  }));
  function selectHeaderRow(args) {
    if (!onSelectedRowsChange)
      return;
    assertIsValidKeyGetter(rowKeyGetter);
    const newSelectedRows = new Set(selectedRows);
    for (const row$1 of rows) {
      if (isRowSelectionDisabled?.(row$1) === true)
        continue;
      const rowKey = rowKeyGetter(row$1);
      if (args.checked)
        newSelectedRows.add(rowKey);
      else
        newSelectedRows.delete(rowKey);
    }
    onSelectedRowsChange(newSelectedRows);
  }
  function selectRow(args) {
    if (!onSelectedRowsChange)
      return;
    assertIsValidKeyGetter(rowKeyGetter);
    const { row: row$1, checked, isShiftClick } = args;
    if (isRowSelectionDisabled?.(row$1) === true)
      return;
    const newSelectedRows = new Set(selectedRows);
    const rowKey = rowKeyGetter(row$1);
    const rowIdx = rows.indexOf(row$1);
    setPreviousRowIdx(rowIdx);
    if (checked)
      newSelectedRows.add(rowKey);
    else
      newSelectedRows.delete(rowKey);
    if (isShiftClick && previousRowIdx !== -1 && previousRowIdx !== rowIdx && previousRowIdx < rows.length) {
      const step = sign(rowIdx - previousRowIdx);
      for (let i = previousRowIdx + step; i !== rowIdx; i += step) {
        const row$2 = rows[i];
        if (isRowSelectionDisabled?.(row$2) === true)
          continue;
        if (checked)
          newSelectedRows.add(rowKeyGetter(row$2));
        else
          newSelectedRows.delete(rowKeyGetter(row$2));
      }
    }
    onSelectedRowsChange(newSelectedRows);
  }
  function handleKeyDown(event) {
    const { idx, rowIdx, mode } = selectedPosition;
    if (mode === "EDIT")
      return;
    if (onCellKeyDown && isRowIdxWithinViewportBounds(rowIdx)) {
      const row$1 = rows[rowIdx];
      const cellEvent = createCellEvent(event);
      onCellKeyDown({
        mode: "SELECT",
        row: row$1,
        column: columns[idx],
        rowIdx,
        selectCell
      }, cellEvent);
      if (cellEvent.isGridDefaultPrevented())
        return;
    }
    if (!(event.target instanceof Element))
      return;
    const isCellEvent = event.target.closest(".rdg-cell") !== null;
    const isRowEvent = isTreeGrid && event.target === focusSinkRef.current;
    if (!isCellEvent && !isRowEvent)
      return;
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
      case "ArrowLeft":
      case "ArrowRight":
      case "Tab":
      case "Home":
      case "End":
      case "PageUp":
      case "PageDown":
        navigate(event);
        break;
      default:
        handleCellInput(event);
        break;
    }
  }
  function handleFocus(event) {
    if (event.target === event.currentTarget)
      selectHeaderCell({
        idx: minColIdx,
        rowIdx: headerRowsCount
      }, { shouldFocusCell: true });
  }
  function handleScroll(event) {
    const { scrollTop: scrollTop$1, scrollLeft: scrollLeft$1 } = event.currentTarget;
    (0, import_react_dom.flushSync)(() => {
      setScrollTop(scrollTop$1);
      setScrollLeft(abs(scrollLeft$1));
    });
    onScroll?.(event);
  }
  function updateRow(column, rowIdx, row$1) {
    if (typeof onRowsChange !== "function")
      return;
    if (row$1 === rows[rowIdx])
      return;
    const updatedRows = rows.with(rowIdx, row$1);
    onRowsChange(updatedRows, {
      indexes: [rowIdx],
      column
    });
  }
  function commitEditorChanges() {
    if (selectedPosition.mode !== "EDIT")
      return;
    updateRow(columns[selectedPosition.idx], selectedPosition.rowIdx, selectedPosition.row);
  }
  function handleCellCopy(event) {
    if (!selectedCellIsWithinViewportBounds)
      return;
    const { idx, rowIdx } = selectedPosition;
    onCellCopy?.({
      row: rows[rowIdx],
      column: columns[idx]
    }, event);
  }
  function handleCellPaste(event) {
    if (!onCellPaste || !onRowsChange || !isCellEditable(selectedPosition))
      return;
    const { idx, rowIdx } = selectedPosition;
    const column = columns[idx];
    const updatedRow = onCellPaste({
      row: rows[rowIdx],
      column
    }, event);
    updateRow(column, rowIdx, updatedRow);
  }
  function handleCellInput(event) {
    if (!selectedCellIsWithinViewportBounds)
      return;
    const row$1 = rows[selectedPosition.rowIdx];
    const { key, shiftKey } = event;
    if (isSelectable && shiftKey && key === " ") {
      assertIsValidKeyGetter(rowKeyGetter);
      const rowKey = rowKeyGetter(row$1);
      selectRow({
        row: row$1,
        checked: !selectedRows.has(rowKey),
        isShiftClick: false
      });
      event.preventDefault();
      return;
    }
    if (isCellEditable(selectedPosition) && isDefaultCellInput(event, onCellPaste != null))
      setSelectedPosition(({ idx, rowIdx }) => ({
        idx,
        rowIdx,
        mode: "EDIT",
        row: row$1,
        originalRow: row$1
      }));
  }
  function handleColumnResizeEnd() {
    if (isColumnResizing) {
      onColumnWidthsChangeRaw?.(columnWidths);
      setColumnResizing(false);
    }
  }
  function handleDragHandlePointerDown(event) {
    event.preventDefault();
    if (event.pointerType === "mouse" && event.buttons !== 1)
      return;
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }
  function handleDragHandlePointerMove(event) {
    const gridEl = gridRef.current;
    const headerAndTopSummaryRowsHeight = headerRowsHeight + topSummaryRowsCount * summaryRowHeight;
    const offset = scrollTop - headerAndTopSummaryRowsHeight + event.clientY - gridEl.getBoundingClientRect().top;
    const overRowIdx = findRowIdx(offset);
    setDraggedOverRowIdx(overRowIdx);
    const ariaRowIndex = headerAndTopSummaryRowsCount + overRowIdx + 1;
    const el = gridEl.querySelector(`:scope > [aria-rowindex="${ariaRowIndex}"] > [aria-colindex="${selectedPosition.idx + 1}"]`);
    scrollIntoView(el);
  }
  function handleDragHandleLostPointerCapture() {
    setDragging(false);
    if (draggedOverRowIdx === void 0)
      return;
    const { rowIdx } = selectedPosition;
    const [startRowIndex, endRowIndex] = rowIdx < draggedOverRowIdx ? [rowIdx + 1, draggedOverRowIdx + 1] : [draggedOverRowIdx, rowIdx];
    updateRows(startRowIndex, endRowIndex);
    setDraggedOverRowIdx(void 0);
  }
  function handleDragHandleClick() {
    focusCell(false);
  }
  function handleDragHandleDoubleClick(event) {
    event.stopPropagation();
    updateRows(selectedPosition.rowIdx + 1, rows.length);
  }
  function updateRows(startRowIdx, endRowIdx) {
    if (onRowsChange == null)
      return;
    const { rowIdx, idx } = selectedPosition;
    const column = columns[idx];
    const sourceRow = rows[rowIdx];
    const updatedRows = [...rows];
    const indexes = [];
    for (let i = startRowIdx; i < endRowIdx; i++)
      if (isCellEditable({
        rowIdx: i,
        idx
      })) {
        const updatedRow = onFill({
          columnKey: column.key,
          sourceRow,
          targetRow: rows[i]
        });
        if (updatedRow !== rows[i]) {
          updatedRows[i] = updatedRow;
          indexes.push(i);
        }
      }
    if (indexes.length > 0)
      onRowsChange(updatedRows, {
        indexes,
        column
      });
  }
  function isColIdxWithinSelectionBounds(idx) {
    return idx >= minColIdx && idx <= maxColIdx;
  }
  function isRowIdxWithinViewportBounds(rowIdx) {
    return rowIdx >= 0 && rowIdx < rows.length;
  }
  function isCellWithinSelectionBounds({ idx, rowIdx }) {
    return rowIdx >= minRowIdx && rowIdx <= maxRowIdx && isColIdxWithinSelectionBounds(idx);
  }
  function isCellWithinEditBounds({ idx, rowIdx }) {
    return isRowIdxWithinViewportBounds(rowIdx) && idx >= 0 && idx <= maxColIdx;
  }
  function isCellWithinViewportBounds({ idx, rowIdx }) {
    return isRowIdxWithinViewportBounds(rowIdx) && isColIdxWithinSelectionBounds(idx);
  }
  function isCellEditable(position) {
    return isCellWithinEditBounds(position) && isSelectedCellEditable({
      columns,
      rows,
      selectedPosition: position
    });
  }
  function selectCell(position, options) {
    if (!isCellWithinSelectionBounds(position))
      return;
    commitEditorChanges();
    const samePosition = isSamePosition(selectedPosition, position);
    if (options?.enableEditor && isCellEditable(position)) {
      const row$1 = rows[position.rowIdx];
      setSelectedPosition({
        ...position,
        mode: "EDIT",
        row: row$1,
        originalRow: row$1
      });
    } else if (samePosition)
      scrollIntoView(getCellToScroll(gridRef.current));
    else {
      setShouldFocusCell(options?.shouldFocusCell === true);
      setSelectedPosition({
        ...position,
        mode: "SELECT"
      });
    }
    if (onSelectedCellChange && !samePosition)
      onSelectedCellChange({
        rowIdx: position.rowIdx,
        row: isRowIdxWithinViewportBounds(position.rowIdx) ? rows[position.rowIdx] : void 0,
        column: columns[position.idx]
      });
  }
  function selectHeaderCell({ idx, rowIdx }, options) {
    selectCell({
      rowIdx: minRowIdx + rowIdx - 1,
      idx
    }, options);
  }
  function getNextPosition(key, ctrlKey, shiftKey) {
    const { idx, rowIdx } = selectedPosition;
    const isRowSelected = selectedCellIsWithinSelectionBounds && idx === -1;
    switch (key) {
      case "ArrowUp":
        return {
          idx,
          rowIdx: rowIdx - 1
        };
      case "ArrowDown":
        return {
          idx,
          rowIdx: rowIdx + 1
        };
      case leftKey:
        return {
          idx: idx - 1,
          rowIdx
        };
      case rightKey:
        return {
          idx: idx + 1,
          rowIdx
        };
      case "Tab":
        return {
          idx: idx + (shiftKey ? -1 : 1),
          rowIdx
        };
      case "Home":
        if (isRowSelected)
          return {
            idx,
            rowIdx: minRowIdx
          };
        return {
          idx: 0,
          rowIdx: ctrlKey ? minRowIdx : rowIdx
        };
      case "End":
        if (isRowSelected)
          return {
            idx,
            rowIdx: maxRowIdx
          };
        return {
          idx: maxColIdx,
          rowIdx: ctrlKey ? maxRowIdx : rowIdx
        };
      case "PageUp": {
        if (selectedPosition.rowIdx === minRowIdx)
          return selectedPosition;
        const nextRowY = getRowTop(rowIdx) + getRowHeight(rowIdx) - clientHeight;
        return {
          idx,
          rowIdx: nextRowY > 0 ? findRowIdx(nextRowY) : 0
        };
      }
      case "PageDown": {
        if (selectedPosition.rowIdx >= rows.length)
          return selectedPosition;
        const nextRowY = getRowTop(rowIdx) + clientHeight;
        return {
          idx,
          rowIdx: nextRowY < totalRowHeight ? findRowIdx(nextRowY) : rows.length - 1
        };
      }
      default:
        return selectedPosition;
    }
  }
  function navigate(event) {
    const { key, shiftKey } = event;
    let cellNavigationMode = "NONE";
    if (key === "Tab") {
      if (canExitGrid({
        shiftKey,
        maxColIdx,
        minRowIdx,
        maxRowIdx,
        selectedPosition
      })) {
        commitEditorChanges();
        return;
      }
      cellNavigationMode = "CHANGE_ROW";
    }
    event.preventDefault();
    const ctrlKey = isCtrlKeyHeldDown(event);
    const nextPosition = getNextPosition(key, ctrlKey, shiftKey);
    if (isSamePosition(selectedPosition, nextPosition))
      return;
    const nextSelectedCellPosition = getNextSelectedCellPosition({
      moveUp: key === "ArrowUp",
      moveNext: key === rightKey || key === "Tab" && !shiftKey,
      columns,
      colSpanColumns,
      rows,
      topSummaryRows,
      bottomSummaryRows,
      minRowIdx,
      mainHeaderRowIdx,
      maxRowIdx,
      lastFrozenColumnIndex,
      cellNavigationMode,
      currentPosition: selectedPosition,
      nextPosition,
      isCellWithinBounds: isCellWithinSelectionBounds
    });
    selectCell(nextSelectedCellPosition, { shouldFocusCell: true });
  }
  function getDraggedOverCellIdx(currentRowIdx) {
    if (draggedOverRowIdx === void 0)
      return;
    const { rowIdx } = selectedPosition;
    const isDraggedOver = rowIdx < draggedOverRowIdx ? rowIdx < currentRowIdx && currentRowIdx <= draggedOverRowIdx : rowIdx > currentRowIdx && currentRowIdx >= draggedOverRowIdx;
    return isDraggedOver ? selectedPosition.idx : void 0;
  }
  function getDragHandle() {
    if (onFill == null || selectedPosition.mode === "EDIT" || !isCellWithinViewportBounds(selectedPosition))
      return;
    const { idx, rowIdx } = selectedPosition;
    const column = columns[idx];
    if (column.renderEditCell == null || column.editable === false)
      return;
    const isLastRow = rowIdx === maxRowIdx;
    const columnWidth = getColumnWidth(column);
    const colSpan = column.colSpan?.({
      type: "ROW",
      row: rows[rowIdx]
    }) ?? 1;
    const { insetInlineStart, ...style$1 } = getCellStyle(column, colSpan);
    const marginEnd = "calc(var(--rdg-drag-handle-size) * -0.5 + 1px)";
    const isLastColumn = column.idx + colSpan - 1 === maxColIdx;
    const dragHandleStyle = {
      ...style$1,
      gridRowStart: headerAndTopSummaryRowsCount + rowIdx + 1,
      marginInlineEnd: isLastColumn ? void 0 : marginEnd,
      marginBlockEnd: isLastRow ? void 0 : marginEnd,
      insetInlineStart: insetInlineStart ? `calc(${insetInlineStart} + ${columnWidth}px + var(--rdg-drag-handle-size) * -0.5 - 1px)` : void 0
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      style: dragHandleStyle,
      className: clsx_default(cellDragHandleClassname, column.frozen && cellDragHandleFrozenClassname),
      onPointerDown: handleDragHandlePointerDown,
      onPointerMove: isDragging ? handleDragHandlePointerMove : void 0,
      onLostPointerCapture: isDragging ? handleDragHandleLostPointerCapture : void 0,
      onClick: handleDragHandleClick,
      onDoubleClick: handleDragHandleDoubleClick
    });
  }
  function getCellEditor(rowIdx) {
    if (selectedPosition.rowIdx !== rowIdx || selectedPosition.mode === "SELECT")
      return;
    const { idx, row: row$1 } = selectedPosition;
    const column = columns[idx];
    const colSpan = getColSpan(column, lastFrozenColumnIndex, {
      type: "ROW",
      row: row$1
    });
    const closeOnExternalRowChange = column.editorOptions?.closeOnExternalRowChange ?? true;
    const closeEditor = (shouldFocusCell$1) => {
      setShouldFocusCell(shouldFocusCell$1);
      setSelectedPosition(({ idx: idx$1, rowIdx: rowIdx$1 }) => ({
        idx: idx$1,
        rowIdx: rowIdx$1,
        mode: "SELECT"
      }));
    };
    const onRowChange = (row$2, commitChanges, shouldFocusCell$1) => {
      if (commitChanges)
        (0, import_react_dom.flushSync)(() => {
          updateRow(column, selectedPosition.rowIdx, row$2);
          closeEditor(shouldFocusCell$1);
        });
      else
        setSelectedPosition((position) => ({
          ...position,
          row: row$2
        }));
    };
    if (closeOnExternalRowChange && rows[selectedPosition.rowIdx] !== selectedPosition.originalRow)
      closeEditor(false);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditCell, {
      column,
      colSpan,
      row: row$1,
      rowIdx,
      onRowChange,
      closeEditor,
      onKeyDown: onCellKeyDown,
      navigate
    }, column.key);
  }
  function getRowViewportColumns(rowIdx) {
    const selectedColumn = selectedPosition.idx === -1 ? void 0 : columns[selectedPosition.idx];
    if (selectedColumn !== void 0 && selectedPosition.rowIdx === rowIdx && !viewportColumns.includes(selectedColumn))
      return selectedPosition.idx > colOverscanEndIdx ? [...viewportColumns, selectedColumn] : [
        ...viewportColumns.slice(0, lastFrozenColumnIndex + 1),
        selectedColumn,
        ...viewportColumns.slice(lastFrozenColumnIndex + 1)
      ];
    return viewportColumns;
  }
  function getViewportRows() {
    const rowElements = [];
    const { idx: selectedIdx, rowIdx: selectedRowIdx } = selectedPosition;
    const startRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx < rowOverscanStartIdx ? rowOverscanStartIdx - 1 : rowOverscanStartIdx;
    const endRowIdx = selectedCellIsWithinViewportBounds && selectedRowIdx > rowOverscanEndIdx ? rowOverscanEndIdx + 1 : rowOverscanEndIdx;
    for (let viewportRowIdx = startRowIdx; viewportRowIdx <= endRowIdx; viewportRowIdx++) {
      const isRowOutsideViewport = viewportRowIdx === rowOverscanStartIdx - 1 || viewportRowIdx === rowOverscanEndIdx + 1;
      const rowIdx = isRowOutsideViewport ? selectedRowIdx : viewportRowIdx;
      let rowColumns = viewportColumns;
      const selectedColumn = selectedIdx === -1 ? void 0 : columns[selectedIdx];
      if (selectedColumn !== void 0)
        if (isRowOutsideViewport)
          rowColumns = [selectedColumn];
        else
          rowColumns = getRowViewportColumns(rowIdx);
      const row$1 = rows[rowIdx];
      const gridRowStart = headerAndTopSummaryRowsCount + rowIdx + 1;
      let key = rowIdx;
      let isRowSelected = false;
      if (typeof rowKeyGetter === "function") {
        key = rowKeyGetter(row$1);
        isRowSelected = selectedRows?.has(key) ?? false;
      }
      rowElements.push(renderRow(key, {
        "aria-rowindex": headerAndTopSummaryRowsCount + rowIdx + 1,
        "aria-selected": isSelectable ? isRowSelected : void 0,
        rowIdx,
        row: row$1,
        viewportColumns: rowColumns,
        isRowSelectionDisabled: isRowSelectionDisabled?.(row$1) ?? false,
        isRowSelected,
        onCellMouseDown: onCellMouseDownLatest,
        onCellClick: onCellClickLatest,
        onCellDoubleClick: onCellDoubleClickLatest,
        onCellContextMenu: onCellContextMenuLatest,
        rowClass,
        gridRowStart,
        selectedCellIdx: selectedRowIdx === rowIdx ? selectedIdx : void 0,
        draggedOverCellIdx: getDraggedOverCellIdx(rowIdx),
        lastFrozenColumnIndex,
        onRowChange: handleFormatterRowChangeLatest,
        selectCell: selectCellLatest,
        selectedCellEditor: getCellEditor(rowIdx)
      }));
    }
    return rowElements;
  }
  if (selectedPosition.idx > maxColIdx || selectedPosition.rowIdx > maxRowIdx) {
    setSelectedPosition({
      idx: -1,
      rowIdx: minRowIdx - 1,
      mode: "SELECT"
    });
    setDraggedOverRowIdx(void 0);
  }
  if (isColumnWidthsControlled && columnWidthsInternal !== columnWidthsRaw)
    setColumnWidthsInternal(columnWidthsRaw);
  let templateRows = `repeat(${headerRowsCount}, ${headerRowHeight}px)`;
  if (topSummaryRowsCount > 0)
    templateRows += ` repeat(${topSummaryRowsCount}, ${summaryRowHeight}px)`;
  if (rows.length > 0)
    templateRows += gridTemplateRows;
  if (bottomSummaryRowsCount > 0)
    templateRows += ` repeat(${bottomSummaryRowsCount}, ${summaryRowHeight}px)`;
  const isGroupRowFocused = selectedPosition.idx === -1 && selectedPosition.rowIdx !== minRowIdx - 1;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    role,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-description": ariaDescription,
    "aria-describedby": ariaDescribedBy,
    "aria-multiselectable": isSelectable ? true : void 0,
    "aria-colcount": columns.length,
    "aria-rowcount": ariaRowCount,
    tabIndex: shouldFocusGrid ? 0 : -1,
    className: clsx_default(rootClassname, { [viewportDraggingClassname]: isDragging }, className),
    style: {
      ...style,
      scrollPaddingInlineStart: selectedPosition.idx > lastFrozenColumnIndex || scrollToPosition?.idx !== void 0 ? `${totalFrozenColumnWidth}px` : void 0,
      scrollPaddingBlock: isRowIdxWithinViewportBounds(selectedPosition.rowIdx) || scrollToPosition?.rowIdx !== void 0 ? `${headerRowsHeight + topSummaryRowsCount * summaryRowHeight}px ${bottomSummaryRowsCount * summaryRowHeight}px` : void 0,
      gridTemplateColumns,
      gridTemplateRows: templateRows,
      "--rdg-header-row-height": `${headerRowHeight}px`,
      "--rdg-scroll-height": `${scrollHeight}px`,
      ...layoutCssVars
    },
    dir: direction,
    ref: gridRef,
    onFocus: shouldFocusGrid ? handleFocus : void 0,
    onScroll: handleScroll,
    onKeyDown: handleKeyDown,
    onCopy: handleCellCopy,
    onPaste: handleCellPaste,
    "data-testid": testId,
    "data-cy": dataCy,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DataGridDefaultRenderersContext, {
        value: defaultGridComponents,
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderRowSelectionChangeContext, {
          value: selectHeaderRowLatest,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HeaderRowSelectionContext, {
            value: headerSelectionValue,
            children: [Array.from({ length: groupedColumnHeaderRowsCount }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupedColumnHeaderRow_default, {
              rowIdx: index + 1,
              level: -groupedColumnHeaderRowsCount + index,
              columns: getRowViewportColumns(minRowIdx + index),
              selectedCellIdx: selectedPosition.rowIdx === minRowIdx + index ? selectedPosition.idx : void 0,
              selectCell: selectHeaderCellLatest
            }, index)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderRow_default, {
              headerRowClass,
              rowIdx: headerRowsCount,
              columns: getRowViewportColumns(mainHeaderRowIdx),
              onColumnResize: handleColumnResizeLatest,
              onColumnResizeEnd: handleColumnResizeEndLatest,
              onColumnsReorder: onColumnsReorderLastest,
              sortColumns,
              onSortColumnsChange: onSortColumnsChangeLatest,
              lastFrozenColumnIndex,
              selectedCellIdx: selectedPosition.rowIdx === mainHeaderRowIdx ? selectedPosition.idx : void 0,
              selectCell: selectHeaderCellLatest,
              direction
            })]
          })
        }), rows.length === 0 && noRowsFallback ? noRowsFallback : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          topSummaryRows?.map((row$1, rowIdx) => {
            const gridRowStart = headerRowsCount + 1 + rowIdx;
            const summaryRowIdx = mainHeaderRowIdx + 1 + rowIdx;
            const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
            const top = headerRowsHeight + summaryRowHeight * rowIdx;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow_default, {
              "aria-rowindex": gridRowStart,
              rowIdx: summaryRowIdx,
              gridRowStart,
              row: row$1,
              top,
              bottom: void 0,
              viewportColumns: getRowViewportColumns(summaryRowIdx),
              lastFrozenColumnIndex,
              selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : void 0,
              isTop: true,
              selectCell: selectCellLatest
            }, rowIdx);
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowSelectionChangeContext, {
            value: selectRowLatest,
            children: getViewportRows()
          }),
          bottomSummaryRows?.map((row$1, rowIdx) => {
            const gridRowStart = headerAndTopSummaryRowsCount + rows.length + rowIdx + 1;
            const summaryRowIdx = rows.length + rowIdx;
            const isSummaryRowSelected = selectedPosition.rowIdx === summaryRowIdx;
            const top = clientHeight > totalRowHeight ? gridHeight - summaryRowHeight * (bottomSummaryRows.length - rowIdx) : void 0;
            const bottom = top === void 0 ? summaryRowHeight * (bottomSummaryRows.length - 1 - rowIdx) : void 0;
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SummaryRow_default, {
              "aria-rowindex": ariaRowCount - bottomSummaryRowsCount + rowIdx + 1,
              rowIdx: summaryRowIdx,
              gridRowStart,
              row: row$1,
              top,
              bottom,
              viewportColumns: getRowViewportColumns(summaryRowIdx),
              lastFrozenColumnIndex,
              selectedCellIdx: isSummaryRowSelected ? selectedPosition.idx : void 0,
              isTop: false,
              selectCell: selectCellLatest
            }, rowIdx);
          })
        ] })]
      }),
      getDragHandle(),
      renderMeasuringCells(viewportColumns),
      isTreeGrid && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        ref: focusSinkRef,
        tabIndex: isGroupRowFocused ? 0 : -1,
        className: clsx_default(focusSinkClassname, {
          [focusSinkHeaderAndSummaryClassname]: !isRowIdxWithinViewportBounds(selectedPosition.rowIdx),
          [rowSelected]: isGroupRowFocused,
          [rowSelectedWithFrozenCell]: isGroupRowFocused && lastFrozenColumnIndex !== -1
        }),
        style: { gridRowStart: selectedPosition.rowIdx + headerAndTopSummaryRowsCount + 1 }
      }),
      scrollToPosition !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollToCell, {
        scrollToPosition,
        setScrollToCellPosition: setScrollToPosition,
        gridRef
      })
    ]
  });
}
function getCellToScroll(gridEl) {
  return gridEl.querySelector(':scope > [role="row"] > [tabindex="0"]');
}
function isSamePosition(p1, p2) {
  return p1.idx === p2.idx && p1.rowIdx === p2.rowIdx;
}
function GroupCell({ id, groupKey, childRows, isExpanded, isCellSelected, column, row: row$1, groupColumnIndex, isGroupByColumn, toggleGroup: toggleGroupWrapper }) {
  const { tabIndex, childTabIndex, onFocus } = useRovingTabIndex(isCellSelected);
  function toggleGroup() {
    toggleGroupWrapper(id);
  }
  const isLevelMatching = isGroupByColumn && groupColumnIndex === column.idx;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    role: "gridcell",
    "aria-colindex": column.idx + 1,
    "aria-selected": isCellSelected,
    tabIndex,
    className: getCellClassname(column),
    style: {
      ...getCellStyle(column),
      cursor: isLevelMatching ? "pointer" : "default"
    },
    onMouseDown: (event) => {
      event.preventDefault();
    },
    onClick: isLevelMatching ? toggleGroup : void 0,
    onFocus,
    children: (!isGroupByColumn || isLevelMatching) && column.renderGroupCell?.({
      groupKey,
      childRows,
      column,
      row: row$1,
      isExpanded,
      tabIndex: childTabIndex,
      toggleGroup
    })
  }, column.key);
}
var GroupCell_default = (0, import_react2.memo)(GroupCell);
var groupRow = "g1yxluv37-0-0-beta-56";
var groupRowClassname = `rdg-group-row ${groupRow}`;
function GroupedRow({ className, row: row$1, rowIdx, viewportColumns, selectedCellIdx, isRowSelected, selectCell, gridRowStart, groupBy, toggleGroup, isRowSelectionDisabled, ...props }) {
  const idx = viewportColumns[0].key === SELECT_COLUMN_KEY ? row$1.level + 1 : row$1.level;
  function handleSelectGroup() {
    selectCell({
      rowIdx,
      idx: -1
    }, { shouldFocusCell: true });
  }
  const selectionValue = (0, import_react2.useMemo)(() => ({
    isRowSelectionDisabled: false,
    isRowSelected
  }), [isRowSelected]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowSelectionContext, {
    value: selectionValue,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      role: "row",
      "aria-level": row$1.level + 1,
      "aria-setsize": row$1.setSize,
      "aria-posinset": row$1.posInSet + 1,
      "aria-expanded": row$1.isExpanded,
      className: clsx_default(rowClassname, groupRowClassname, `rdg-row-${rowIdx % 2 === 0 ? "even" : "odd"}`, selectedCellIdx === -1 && rowSelectedClassname, className),
      onMouseDown: handleSelectGroup,
      style: getRowStyle(gridRowStart),
      ...props,
      children: viewportColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupCell_default, {
        id: row$1.id,
        groupKey: row$1.groupKey,
        childRows: row$1.childRows,
        isExpanded: row$1.isExpanded,
        isCellSelected: selectedCellIdx === column.idx,
        column,
        row: row$1,
        groupColumnIndex: idx,
        toggleGroup,
        isGroupByColumn: groupBy.includes(column.key)
      }, column.key))
    })
  });
}
var GroupRow_default = (0, import_react2.memo)(GroupedRow);
var textEditorInternalClassname = "t7vyx3i7-0-0-beta-56";
var textEditorClassname = `rdg-text-editor ${textEditorInternalClassname}`;

// app/routes/admin/kitchen.foodwaste.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var NUMERIC_FIELD_KEYS = /* @__PURE__ */ new Set(["number_of_users", "food_waste", "total_waste"]);
function links() {
  return [{ rel: "stylesheet", href: styles_default }];
}
function toIsoDateString(date) {
  return date.toISOString().slice(0, 10);
}
function parseDateFromRecord(dateValue) {
  if (!dateValue)
    return null;
  if (typeof dateValue === "string" && dateValue.length >= 10) {
    return dateValue.slice(0, 10);
  }
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime()))
    return null;
  return toIsoDateString(parsed);
}
function getIsoDateForWeekday(weekNumber, weekdayOffsetFromMonday, year) {
  const firstDayOfYear = new Date(year, 0, 1);
  const daysOffset = (weekNumber - 1) * 7;
  const startDate = new Date(firstDayOfYear.getTime() + daysOffset * 864e5);
  const day = startDate.getDay();
  const diff = (day === 0 ? -6 : 1) - day;
  startDate.setDate(startDate.getDate() + diff + weekdayOffsetFromMonday);
  return toIsoDateString(startDate);
}
function formatWeekdayLabel(dateIso) {
  return new Date(dateIso).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
}
function coerceDisplayValue(value) {
  return value === null || value === void 0 ? "" : value;
}
function FoodWaste() {
  const {
    week,
    setWeek,
    filteredRecords,
    handleUpdate,
    getPendingValue,
    saveUpdates,
    loading,
    isSaving,
    hasPendingUpdates,
    toast,
    dismissToast
  } = useFoodWasteTable();
  const [isClient, setIsClient] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    setIsClient(true);
  }, []);
  const { start, end } = getWeekDateRange(week);
  const referenceYear = (0, import_react3.useMemo)(() => {
    if (filteredRecords.length > 0) {
      const iso = parseDateFromRecord(filteredRecords[0].date);
      if (iso) {
        const parsed = new Date(iso);
        if (!Number.isNaN(parsed.getTime())) {
          return parsed.getFullYear();
        }
      }
    }
    return new Date().getFullYear();
  }, [filteredRecords]);
  const recordsByDate = (0, import_react3.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    filteredRecords.forEach((item) => {
      const iso = parseDateFromRecord(item.date);
      if (iso) {
        map.set(iso, item);
      }
    });
    return map;
  }, [filteredRecords]);
  const gridRows = (0, import_react3.useMemo)(() => {
    return WEEKDAYS.map((_, idx) => {
      const dateIso = getIsoDateForWeekday(Number(week), idx, referenceYear);
      const record = recordsByDate.get(dateIso);
      const key = record?.id ?? dateIso;
      const numberUsers = coerceDisplayValue(
        getPendingValue(key, "number_of_users", record?.number_of_users ?? "")
      );
      const foodWaste = coerceDisplayValue(
        getPendingValue(key, "food_waste", record?.food_waste ?? "")
      );
      const totalWaste = coerceDisplayValue(
        getPendingValue(key, "total_waste", record?.total_waste ?? "")
      );
      return {
        key,
        date: dateIso,
        weekDay: formatWeekdayLabel(dateIso),
        number_of_users: numberUsers,
        food_waste: foodWaste,
        total_waste: totalWaste
      };
    });
  }, [week, referenceYear, recordsByDate, getPendingValue]);
  const columns = (0, import_react3.useMemo)(
    () => [
      { key: "weekDay", name: "Week Day", width: 220, resizable: true },
      { key: "number_of_users", name: "Users", editable: true },
      { key: "food_waste", name: "Food Waste (g)", editable: true },
      { key: "total_waste", name: "Total Waste (g)", editable: true }
    ],
    []
  );
  const handleRowsChange = (0, import_react3.useCallback)(
    (newRows, data) => {
      if (!data?.indexes || !data?.column)
        return;
      data.indexes.forEach((rowIndex) => {
        const updatedRow = newRows[rowIndex];
        if (!updatedRow)
          return;
        const columnKey = data.column.key;
        if (!NUMERIC_FIELD_KEYS.has(columnKey))
          return;
        const rawValue = updatedRow[columnKey];
        const parsedValue = Number(rawValue);
        const normalizedValue = rawValue === "" || rawValue === null || rawValue === void 0 || Number.isNaN(parsedValue) ? null : parsedValue;
        handleUpdate(updatedRow.key, {
          date: updatedRow.date,
          [columnKey]: normalizedValue
        });
      });
    },
    [handleUpdate]
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between gap-4 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-[var(--primary-color)] text-2xl", children: [
            "Week ",
            week,
            " /"
          ] }, void 0, true, {
            fileName: "app/routes/admin/kitchen.foodwaste.jsx",
            lineNumber: 170,
            columnNumber: 25
          }, this),
          " ",
          start,
          " - ",
          end
        ] }, void 0, true, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 169,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: () => setWeek((prev) => Math.max(prev - 1, 1)),
              className: "px-3 py-1 border rounded hover:bg-gray-100",
              children: "\u2190"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/kitchen.foodwaste.jsx",
              lineNumber: 173,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: () => setWeek((prev) => prev + 1),
              className: "px-3 py-1 border rounded hover:bg-gray-100",
              children: "\u2192"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/kitchen.foodwaste.jsx",
              lineNumber: 180,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 172,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 168,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end items-center mb-6 pos-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mr-4", children: "Remember to update before leaving" }, void 0, false, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 191,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { onClick: saveUpdates, variant: "primary", disabled: isSaving || !hasPendingUpdates, children: "Update" }, void 0, false, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 192,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 190,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 167,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: dismissToast
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 199,
        columnNumber: 17
      },
      this
    ),
    loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading\u2026" }, void 0, false, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 207,
      columnNumber: 17
    }, this) : isClient ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border border-gray-300 rounded overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      DataGrid,
      {
        rows: gridRows,
        columns,
        onRowsChange: handleRowsChange,
        rowKeyGetter: (row2) => row2.key,
        defaultColumnOptions: { resizable: true, sortable: false, editorOptions: { editOnClick: true } },
        className: "rdg-light",
        style: { blockSize: "320px" }
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 210,
        columnNumber: 21
      },
      this
    ) }, void 0, false, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 209,
      columnNumber: 17
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/admin/kitchen.foodwaste.jsx",
    lineNumber: 166,
    columnNumber: 9
  }, this);
}
var kitchen_foodwaste_default = FoodWaste;

export {
  require_jsx_runtime,
  links,
  kitchen_foodwaste_default
};
//# sourceMappingURL=/build/_shared/chunk-5GTOZD35.js.map
