import {
  API_BASE_URL
} from "/build/_shared/chunk-37D2R22D.js";
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
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date())
          return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
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
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
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
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
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
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
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
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
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
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c)
            return this.set(c, this.$M + r2);
          if ($2 === h)
            return this.set(h, this.$y + r2);
          if ($2 === a)
            return y2(1);
          if ($2 === o)
            return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid())
            return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
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
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
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
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
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
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
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
      return function(i, n, r) {
        var f = n.prototype;
        f.week = function(i2) {
          if (void 0 === i2 && (i2 = null), null !== i2)
            return this.add(7 * (i2 - this.week()), "day");
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this).startOf(t).add(1, t).date(n2), s = r(this).endOf(e);
            if (f2.isBefore(s))
              return 1;
          }
          var a = r(this).startOf(t).date(n2).startOf(e).subtract(1, "millisecond"), o = this.diff(a, e, true);
          return o < 0 ? r(this).startOf("week").week() : Math.ceil(o);
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
        var jsx4 = jsxWithValidationDynamic;
        var jsxs2 = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx4;
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
var import_react6 = __toESM(require_react());

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
    return records.filter((r) => (0, import_dayjs.default)(r.date).week() === Number(week));
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
  const saveUpdates = (0, import_react.useCallback)(async () => {
    const payload = Object.entries(updates).map(([id, data]) => ({
      id,
      ...data
    }));
    if (payload.length === 0)
      return;
    setIsSaving(true);
    try {
      await patchFoodWaste(payload);
      showToast("\u2705 Updated successfully!", "success");
      setUpdates({});
    } catch (err) {
      console.error(err);
      showToast("\u274C Failed to update.", "error");
    } finally {
      setIsSaving(false);
    }
  }, [updates, showToast]);
  return {
    week,
    setWeek,
    filteredRecords,
    handleUpdate,
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

// node_modules/flowbite-react/dist/helpers/get.js
function get(input, path) {
  const keys = path.split(".");
  let result = input;
  for (const key of keys) {
    if (typeof result === "boolean" || typeof result === "string") {
      return result;
    }
    if (result == null || typeof result !== "object") {
      return void 0;
    }
    result = result[key];
  }
  return result;
}

// node_modules/flowbite-react/dist/helpers/without-theming-props.js
function withoutThemingProps(props) {
  const { theme, clearTheme, applyTheme, ...rest } = props;
  return rest;
}

// node_modules/flowbite-react/dist/helpers/resolve-props.js
function resolveProps(props, providerProps) {
  let mergedProps = withoutThemingProps(props);
  if (providerProps) {
    mergedProps = {
      ...providerProps,
      ...props
    };
  }
  return mergedProps;
}

// node_modules/deepmerge-ts/dist/index.mjs
var actions = {
  defaultMerge: Symbol("deepmerge-ts: default merge"),
  skip: Symbol("deepmerge-ts: skip")
};
var actionsInto = {
  defaultMerge: actions.defaultMerge
};
function defaultMetaDataUpdater(previousMeta, metaMeta) {
  return metaMeta;
}
function defaultFilterValues(values, meta) {
  return values.filter((value) => value !== void 0);
}
var ObjectType;
(function(ObjectType2) {
  ObjectType2[ObjectType2["NOT"] = 0] = "NOT";
  ObjectType2[ObjectType2["RECORD"] = 1] = "RECORD";
  ObjectType2[ObjectType2["ARRAY"] = 2] = "ARRAY";
  ObjectType2[ObjectType2["SET"] = 3] = "SET";
  ObjectType2[ObjectType2["MAP"] = 4] = "MAP";
  ObjectType2[ObjectType2["OTHER"] = 5] = "OTHER";
})(ObjectType || (ObjectType = {}));
function getObjectType(object) {
  if (typeof object !== "object" || object === null) {
    return 0;
  }
  if (Array.isArray(object)) {
    return 2;
  }
  if (isRecord(object)) {
    return 1;
  }
  if (object instanceof Set) {
    return 3;
  }
  if (object instanceof Map) {
    return 4;
  }
  return 5;
}
function getKeys(objects) {
  const keys = /* @__PURE__ */ new Set();
  for (const object of objects) {
    for (const key of [...Object.keys(object), ...Object.getOwnPropertySymbols(object)]) {
      keys.add(key);
    }
  }
  return keys;
}
function objectHasProperty(object, property) {
  return typeof object === "object" && Object.prototype.propertyIsEnumerable.call(object, property);
}
function getIterableOfIterables(iterables) {
  let mut_iterablesIndex = 0;
  let mut_iterator = iterables[0]?.[Symbol.iterator]();
  return {
    [Symbol.iterator]() {
      return {
        next() {
          do {
            if (mut_iterator === void 0) {
              return { done: true, value: void 0 };
            }
            const result = mut_iterator.next();
            if (result.done === true) {
              mut_iterablesIndex += 1;
              mut_iterator = iterables[mut_iterablesIndex]?.[Symbol.iterator]();
              continue;
            }
            return {
              done: false,
              value: result.value
            };
          } while (true);
        }
      };
    }
  };
}
var validRecordToStringValues = ["[object Object]", "[object Module]"];
function isRecord(value) {
  if (!validRecordToStringValues.includes(Object.prototype.toString.call(value))) {
    return false;
  }
  const { constructor } = value;
  if (constructor === void 0) {
    return true;
  }
  const prototype = constructor.prototype;
  if (prototype === null || typeof prototype !== "object" || !validRecordToStringValues.includes(Object.prototype.toString.call(prototype))) {
    return false;
  }
  if (!prototype.hasOwnProperty("isPrototypeOf")) {
    return false;
  }
  return true;
}
function mergeRecords$1(values, utils, meta) {
  const result = {};
  for (const key of getKeys(values)) {
    const propValues = [];
    for (const value of values) {
      if (objectHasProperty(value, key)) {
        propValues.push(value[key]);
      }
    }
    if (propValues.length === 0) {
      continue;
    }
    const updatedMeta = utils.metaDataUpdater(meta, {
      key,
      parents: values
    });
    const propertyResult = mergeUnknowns(propValues, utils, updatedMeta);
    if (propertyResult === actions.skip) {
      continue;
    }
    if (key === "__proto__") {
      Object.defineProperty(result, key, {
        value: propertyResult,
        configurable: true,
        enumerable: true,
        writable: true
      });
    } else {
      result[key] = propertyResult;
    }
  }
  return result;
}
function mergeArrays$1(values) {
  return values.flat();
}
function mergeSets$1(values) {
  return new Set(getIterableOfIterables(values));
}
function mergeMaps$1(values) {
  return new Map(getIterableOfIterables(values));
}
function mergeOthers$1(values) {
  return values.at(-1);
}
var mergeFunctions = {
  mergeRecords: mergeRecords$1,
  mergeArrays: mergeArrays$1,
  mergeSets: mergeSets$1,
  mergeMaps: mergeMaps$1,
  mergeOthers: mergeOthers$1
};
function deepmerge(...objects) {
  return deepmergeCustom({})(...objects);
}
function deepmergeCustom(options, rootMetaData) {
  const utils = getUtils(options, customizedDeepmerge);
  function customizedDeepmerge(...objects) {
    return mergeUnknowns(objects, utils, rootMetaData);
  }
  return customizedDeepmerge;
}
function getUtils(options, customizedDeepmerge) {
  return {
    defaultMergeFunctions: mergeFunctions,
    mergeFunctions: {
      ...mergeFunctions,
      ...Object.fromEntries(Object.entries(options).filter(([key, option]) => Object.hasOwn(mergeFunctions, key)).map(([key, option]) => option === false ? [key, mergeFunctions.mergeOthers] : [key, option]))
    },
    metaDataUpdater: options.metaDataUpdater ?? defaultMetaDataUpdater,
    deepmerge: customizedDeepmerge,
    useImplicitDefaultMerging: options.enableImplicitDefaultMerging ?? false,
    filterValues: options.filterValues === false ? void 0 : options.filterValues ?? defaultFilterValues,
    actions
  };
}
function mergeUnknowns(values, utils, meta) {
  const filteredValues = utils.filterValues?.(values, meta) ?? values;
  if (filteredValues.length === 0) {
    return void 0;
  }
  if (filteredValues.length === 1) {
    return mergeOthers(filteredValues, utils, meta);
  }
  const type = getObjectType(filteredValues[0]);
  if (type !== 0 && type !== 5) {
    for (let mut_index = 1; mut_index < filteredValues.length; mut_index++) {
      if (getObjectType(filteredValues[mut_index]) === type) {
        continue;
      }
      return mergeOthers(filteredValues, utils, meta);
    }
  }
  switch (type) {
    case 1: {
      return mergeRecords(filteredValues, utils, meta);
    }
    case 2: {
      return mergeArrays(filteredValues, utils, meta);
    }
    case 3: {
      return mergeSets(filteredValues, utils, meta);
    }
    case 4: {
      return mergeMaps(filteredValues, utils, meta);
    }
    default: {
      return mergeOthers(filteredValues, utils, meta);
    }
  }
}
function mergeRecords(values, utils, meta) {
  const result = utils.mergeFunctions.mergeRecords(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeRecords !== utils.defaultMergeFunctions.mergeRecords) {
    return utils.defaultMergeFunctions.mergeRecords(values, utils, meta);
  }
  return result;
}
function mergeArrays(values, utils, meta) {
  const result = utils.mergeFunctions.mergeArrays(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeArrays !== utils.defaultMergeFunctions.mergeArrays) {
    return utils.defaultMergeFunctions.mergeArrays(values);
  }
  return result;
}
function mergeSets(values, utils, meta) {
  const result = utils.mergeFunctions.mergeSets(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeSets !== utils.defaultMergeFunctions.mergeSets) {
    return utils.defaultMergeFunctions.mergeSets(values);
  }
  return result;
}
function mergeMaps(values, utils, meta) {
  const result = utils.mergeFunctions.mergeMaps(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeMaps !== utils.defaultMergeFunctions.mergeMaps) {
    return utils.defaultMergeFunctions.mergeMaps(values);
  }
  return result;
}
function mergeOthers(values, utils, meta) {
  const result = utils.mergeFunctions.mergeOthers(values, utils, meta);
  if (result === actions.defaultMerge || utils.useImplicitDefaultMerging && result === void 0 && utils.mergeFunctions.mergeOthers !== utils.defaultMergeFunctions.mergeOthers) {
    return utils.defaultMergeFunctions.mergeOthers(values);
  }
  return result;
}

// node_modules/klona/json/index.mjs
function klona(val) {
  var k, out, tmp;
  if (Array.isArray(val)) {
    out = Array(k = val.length);
    while (k--)
      out[k] = (tmp = val[k]) && typeof tmp === "object" ? klona(tmp) : tmp;
    return out;
  }
  if (Object.prototype.toString.call(val) === "[object Object]") {
    out = {};
    for (k in val) {
      if (k === "__proto__") {
        Object.defineProperty(out, k, {
          value: klona(val[k]),
          configurable: true,
          enumerable: true,
          writable: true
        });
      } else {
        out[k] = (tmp = val[k]) && typeof tmp === "object" ? klona(tmp) : tmp;
      }
    }
    return out;
  }
  return val;
}

// node_modules/flowbite-react/dist/helpers/resolve-theme.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/store/index.js
var store = {
  dark: void 0,
  mode: void 0,
  prefix: void 0,
  version: void 0
};
function getDark() {
  return store.dark;
}
function getPrefix() {
  return store.prefix;
}
function getVersion() {
  return store.version;
}

// node_modules/flowbite-react/dist/helpers/apply-prefix.js
var cache = /* @__PURE__ */ new Map();
function applyPrefix(classNames, prefix) {
  if (!classNames.trim().length || !prefix.trim().length) {
    return classNames;
  }
  classNames = classNames.trim();
  prefix = prefix.trim();
  const cacheKey = `${classNames}.${prefix}`;
  const cacheValue = cache.get(cacheKey);
  if (cacheValue) {
    return cacheValue;
  }
  const result = classNames.split(/\s+/).map((className) => {
    className = className.trim();
    if (!className.length || className.startsWith(prefix)) {
      return className;
    }
    return `${prefix}:${className}`;
  }).join(" ");
  cache.set(cacheKey, result);
  return result;
}

// node_modules/flowbite-react/dist/helpers/apply-prefix-v3.js
var cache2 = /* @__PURE__ */ new Map();
function applyPrefixV3(classNames, prefix, separator = ":") {
  if (!classNames.trim().length || !prefix.trim().length) {
    return classNames;
  }
  classNames = classNames.trim();
  prefix = prefix.trim();
  separator = separator.trim();
  const cacheKey = `${classNames}.${prefix}.${separator}`;
  const cacheValue = cache2.get(cacheKey);
  if (cacheValue) {
    return cacheValue;
  }
  const result = classNames.split(/\s+/).map((className) => {
    className = className.trim();
    if (!className.length) {
      return className;
    }
    if (className.startsWith("[") && className.endsWith("]")) {
      return className;
    }
    const parts = className.split(separator);
    const baseClass = parts.pop() ?? "";
    let prefixedBaseClass = baseClass;
    let modifiers = "";
    if (prefixedBaseClass[0] === "!") {
      modifiers = "!";
      prefixedBaseClass = prefixedBaseClass.slice(1);
    }
    if (prefixedBaseClass[0] === "-") {
      modifiers += "-";
      prefixedBaseClass = prefixedBaseClass.slice(1);
    }
    if (prefixedBaseClass.startsWith(prefix)) {
      return className;
    }
    prefixedBaseClass = modifiers + prefix + prefixedBaseClass;
    if (!parts.length) {
      return prefixedBaseClass;
    }
    return `${parts.join(separator)}${separator}${prefixedBaseClass}`;
  }).join(" ");
  cache2.set(cacheKey, result);
  return result;
}

// node_modules/flowbite-react/dist/helpers/convert-utilities-to-v4.js
var cache3 = /* @__PURE__ */ new Map();
function convertUtilitiesToV4(classNames) {
  if (!classNames.trim().length) {
    return classNames;
  }
  const cacheKey = classNames;
  const cacheValue = cache3.get(cacheKey);
  if (cacheValue) {
    return cacheValue;
  }
  const parts = classNames.split(/(\s+)/);
  const result = parts.map((part) => {
    if (/^\s+$/.test(part)) {
      return part;
    }
    const processed = part;
    const modifierMatch = processed.match(/^([^:]+:)?(.+)$/);
    if (modifierMatch) {
      const [, modifier = "", baseClass] = modifierMatch;
      for (const [regex, replacement] of regexMap) {
        if (regex.test(baseClass)) {
          return modifier + baseClass.replace(regex, replacement);
        }
      }
    }
    return processed;
  }).join("");
  cache3.set(cacheKey, result);
  return result;
}
var regexMap = [
  [/^shadow-sm$/, "shadow-xs"],
  [/^shadow$/, "shadow-sm"],
  [/^drop-shadow-sm$/, "drop-shadow-xs"],
  [/^drop-shadow$/, "drop-shadow-sm"],
  [/^blur-sm$/, "blur-xs"],
  [/^blur$/, "blur-sm"],
  [/^rounded-sm$/, "rounded-xs"],
  [/^rounded$/, "rounded-sm"],
  [/^ring$/, "ring-3"]
];

// node_modules/flowbite-react/dist/helpers/deep-merge.js
function deepMergeStrings(merge) {
  return deepmergeCustom({
    mergeOthers: (values, utils) => {
      if (values.some((value) => typeof value === "string")) {
        const strings = values.filter((value) => typeof value === "string");
        const stringMap = /* @__PURE__ */ new Set();
        const uniqueStrings = [];
        for (const string of strings) {
          const parts = [...new Set(string.split(/\s+/))];
          uniqueStrings.push(parts.filter((part) => !stringMap.has(part)).join(" "));
          for (const part of parts) {
            stringMap.add(part);
          }
        }
        return merge(uniqueStrings);
      }
      return utils.actions.defaultMerge;
    }
  });
}

// node_modules/flowbite-react/dist/helpers/is-equal.js
function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (Array.isArray(a)) {
      if (a.length !== b.length) {
        return false;
      }
      return a.every((item, index) => isEqual(item, b[index]));
    }
    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }
    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }
    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }
    const aKeys = Object.keys(a);
    if (aKeys.length !== Object.keys(b).length) {
      return false;
    }
    return aKeys.every((key) => Object.prototype.hasOwnProperty.call(b, key) && isEqual(a[key], b[key]));
  }
  return a !== a && b !== b;
}

// node_modules/flowbite-react/dist/helpers/strip-dark.js
var cache4 = /* @__PURE__ */ new Map();
function stripDark(classNames) {
  if (classNames === void 0 || classNames === null) {
    return classNames;
  }
  if (!classNames.trim().length) {
    return classNames;
  }
  classNames = classNames.trim();
  const cacheKey = classNames;
  const cacheValue = cache4.get(cacheKey);
  if (cacheValue) {
    return cacheValue;
  }
  const result = classNames.split(/\s+/).filter((className) => !className.includes("dark:")).join(" ");
  cache4.set(cacheKey, result);
  return result;
}

// node_modules/tailwind-merge-v2/dist/bundle-mjs.mjs
var CLASS_PART_SEPARATOR = "-";
var createClassGroupUtils = (config) => {
  const classMap = createClassMap(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
var getGroupRecursive = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
var arbitraryPropertyRegex = /^\[(.+)\]$/;
var getGroupIdForArbitraryProperty = (className) => {
  if (arbitraryPropertyRegex.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
var createClassMap = (config) => {
  const {
    theme,
    prefix
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(([classGroupId, classGroup]) => {
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
};
var processClassesRecursively = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively(classGroup2, getPart(classPartObject, key), classGroupId, theme);
    });
  });
};
var getPart = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
var isThemeGetter = (func) => func.isThemeGetter;
var getPrefixedClassGroupEntries = (classGroupEntries, prefix) => {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(([classGroupId, classGroup]) => {
    const prefixedClassGroup = classGroup.map((classDefinition) => {
      if (typeof classDefinition === "string") {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === "object") {
        return Object.fromEntries(Object.entries(classDefinition).map(([key, value]) => [prefix + key, value]));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
};
var createLruCache = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache6 = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache6.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache6;
      cache6 = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache6.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache6.has(key)) {
        cache6.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
var IMPORTANT_MODIFIER = "!";
var createParseClassName = (config) => {
  const {
    separator,
    experimentalParseClassName
  } = config;
  const isSeparatorSingleCharacter = separator.length === 1;
  const firstSeparatorCharacter = separator[0];
  const separatorLength = separator.length;
  const parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (experimentalParseClassName) {
    return (className) => experimentalParseClassName({
      className,
      parseClassName
    });
  }
  return parseClassName;
};
var sortModifiers = (modifiers) => {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  const sortedModifiers = [];
  let unsortedModifiers = [];
  modifiers.forEach((modifier) => {
    const isArbitraryVariant = modifier[0] === "[";
    if (isArbitraryVariant) {
      sortedModifiers.push(...unsortedModifiers.sort(), modifier);
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push(...unsortedModifiers.sort());
  return sortedModifiers;
};
var createConfigUtils = (config) => ({
  cache: createLruCache(config.cacheSize),
  parseClassName: createParseClassName(config),
  ...createClassGroupUtils(config)
});
var SPLIT_CLASSES_REGEX = /\s+/;
var mergeClassList = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
var toValue = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}
var fromTheme = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /* @__PURE__ */ new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
var shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isLength = (value) => isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
var isArbitraryLength = (value) => getIsArbitraryValue(value, "length", isLengthOnly);
var isNumber = (value) => Boolean(value) && !Number.isNaN(Number(value));
var isArbitraryNumber = (value) => getIsArbitraryValue(value, "number", isNumber);
var isInteger = (value) => Boolean(value) && Number.isInteger(Number(value));
var isPercent = (value) => value.endsWith("%") && isNumber(value.slice(0, -1));
var isArbitraryValue = (value) => arbitraryValueRegex.test(value);
var isTshirtSize = (value) => tshirtUnitRegex.test(value);
var sizeLabels = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
var isArbitrarySize = (value) => getIsArbitraryValue(value, sizeLabels, isNever);
var isArbitraryPosition = (value) => getIsArbitraryValue(value, "position", isNever);
var imageLabels = /* @__PURE__ */ new Set(["image", "url"]);
var isArbitraryImage = (value) => getIsArbitraryValue(value, imageLabels, isImage);
var isArbitraryShadow = (value) => getIsArbitraryValue(value, "", isShadow);
var isAny = () => true;
var getIsArbitraryValue = (value, label, testValue) => {
  const result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return typeof label === "string" ? result[1] === label : label.has(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var isLengthOnly = (value) => lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
var isNever = () => false;
var isShadow = (value) => shadowRegex.test(value);
var isImage = (value) => imageRegex.test(value);
var getDefaultConfig = () => {
  const colors = fromTheme("colors");
  const spacing = fromTheme("spacing");
  const blur = fromTheme("blur");
  const brightness = fromTheme("brightness");
  const borderColor = fromTheme("borderColor");
  const borderRadius = fromTheme("borderRadius");
  const borderSpacing = fromTheme("borderSpacing");
  const borderWidth = fromTheme("borderWidth");
  const contrast = fromTheme("contrast");
  const grayscale = fromTheme("grayscale");
  const hueRotate = fromTheme("hueRotate");
  const invert = fromTheme("invert");
  const gap = fromTheme("gap");
  const gradientColorStops = fromTheme("gradientColorStops");
  const gradientColorStopPositions = fromTheme("gradientColorStopPositions");
  const inset = fromTheme("inset");
  const margin = fromTheme("margin");
  const opacity = fromTheme("opacity");
  const padding = fromTheme("padding");
  const saturate = fromTheme("saturate");
  const scale = fromTheme("scale");
  const sepia = fromTheme("sepia");
  const skew = fromTheme("skew");
  const space = fromTheme("space");
  const translate = fromTheme("translate");
  const getOverscroll = () => ["auto", "contain", "none"];
  const getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, spacing];
  const getSpacingWithArbitrary = () => [isArbitraryValue, spacing];
  const getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength];
  const getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue];
  const getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"];
  const getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  const getZeroAndEmpty = () => ["", "0", isArbitraryValue];
  const getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [isAny],
      spacing: [isLength, isArbitraryLength],
      blur: ["none", "", isTshirtSize, isArbitraryValue],
      brightness: getNumberAndArbitrary(),
      borderColor: [colors],
      borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmptyAndArbitrary(),
      contrast: getNumberAndArbitrary(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumberAndArbitrary(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumberAndArbitrary(),
      scale: getNumberAndArbitrary(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", isArbitraryValue]
      }],
      container: ["container"],
      columns: [{
        columns: [isTshirtSize]
      }],
      "break-after": [{
        "break-after": getBreaks()
      }],
      "break-before": [{
        "break-before": getBreaks()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: [...getPositions(), isArbitraryValue]
      }],
      overflow: [{
        overflow: getOverflow()
      }],
      "overflow-x": [{
        "overflow-x": getOverflow()
      }],
      "overflow-y": [{
        "overflow-y": getOverflow()
      }],
      overscroll: [{
        overscroll: getOverscroll()
      }],
      "overscroll-x": [{
        "overscroll-x": getOverscroll()
      }],
      "overscroll-y": [{
        "overscroll-y": getOverscroll()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: [inset]
      }],
      "inset-x": [{
        "inset-x": [inset]
      }],
      "inset-y": [{
        "inset-y": [inset]
      }],
      start: [{
        start: [inset]
      }],
      end: [{
        end: [inset]
      }],
      top: [{
        top: [inset]
      }],
      right: [{
        right: [inset]
      }],
      bottom: [{
        bottom: [inset]
      }],
      left: [{
        left: [inset]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: ["auto", isInteger, isArbitraryValue]
      }],
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      flex: [{
        flex: ["1", "auto", "initial", "none", isArbitraryValue]
      }],
      grow: [{
        grow: getZeroAndEmpty()
      }],
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      order: [{
        order: ["first", "last", "none", isInteger, isArbitraryValue]
      }],
      "grid-cols": [{
        "grid-cols": [isAny]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: ["full", isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      "col-start": [{
        "col-start": getNumberWithAutoAndArbitrary()
      }],
      "col-end": [{
        "col-end": getNumberWithAutoAndArbitrary()
      }],
      "grid-rows": [{
        "grid-rows": [isAny]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [isInteger, isArbitraryValue]
        }, isArbitraryValue]
      }],
      "row-start": [{
        "row-start": getNumberWithAutoAndArbitrary()
      }],
      "row-end": [{
        "row-end": getNumberWithAutoAndArbitrary()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
      }],
      gap: [{
        gap: [gap]
      }],
      "gap-x": [{
        "gap-x": [gap]
      }],
      "gap-y": [{
        "gap-y": [gap]
      }],
      "justify-content": [{
        justify: ["normal", ...getAlign()]
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: ["normal", ...getAlign(), "baseline"]
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [...getAlign(), "baseline"]
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [padding]
      }],
      px: [{
        px: [padding]
      }],
      py: [{
        py: [padding]
      }],
      ps: [{
        ps: [padding]
      }],
      pe: [{
        pe: [padding]
      }],
      pt: [{
        pt: [padding]
      }],
      pr: [{
        pr: [padding]
      }],
      pb: [{
        pb: [padding]
      }],
      pl: [{
        pl: [padding]
      }],
      m: [{
        m: [margin]
      }],
      mx: [{
        mx: [margin]
      }],
      my: [{
        my: [margin]
      }],
      ms: [{
        ms: [margin]
      }],
      me: [{
        me: [margin]
      }],
      mt: [{
        mt: [margin]
      }],
      mr: [{
        mr: [margin]
      }],
      mb: [{
        mb: [margin]
      }],
      ml: [{
        ml: [margin]
      }],
      "space-x": [{
        "space-x": [space]
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": [space]
      }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", isArbitraryValue, spacing]
      }],
      "min-w": [{
        "min-w": [isArbitraryValue, spacing, "min", "max", "fit"]
      }],
      "max-w": [{
        "max-w": [isArbitraryValue, spacing, "none", "full", "min", "max", "fit", "prose", {
          screen: [isTshirtSize]
        }, isTshirtSize]
      }],
      h: [{
        h: [isArbitraryValue, spacing, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "min-h": [{
        "min-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "max-h": [{
        "max-h": [isArbitraryValue, spacing, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      size: [{
        size: [isArbitraryValue, spacing, "auto", "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", isTshirtSize, isArbitraryLength]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
      }],
      "font-family": [{
        font: [isAny]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
      }],
      "line-clamp": [{
        "line-clamp": ["none", isNumber, isArbitraryNumber]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
      }],
      "list-image": [{
        "list-image": ["none", isArbitraryValue]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", isArbitraryValue]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [colors]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [opacity]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [colors]
      }],
      "text-opacity": [{
        "text-opacity": [opacity]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...getLineStyles(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", isLength, isArbitraryLength]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", isLength, isArbitraryValue]
      }],
      "text-decoration-color": [{
        decoration: [colors]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", isArbitraryValue]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [opacity]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [...getPositions(), isArbitraryPosition]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitrarySize]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, isArbitraryImage]
      }],
      "bg-color": [{
        bg: [colors]
      }],
      "gradient-from-pos": [{
        from: [gradientColorStopPositions]
      }],
      "gradient-via-pos": [{
        via: [gradientColorStopPositions]
      }],
      "gradient-to-pos": [{
        to: [gradientColorStopPositions]
      }],
      "gradient-from": [{
        from: [gradientColorStops]
      }],
      "gradient-via": [{
        via: [gradientColorStops]
      }],
      "gradient-to": [{
        to: [gradientColorStops]
      }],
      rounded: [{
        rounded: [borderRadius]
      }],
      "rounded-s": [{
        "rounded-s": [borderRadius]
      }],
      "rounded-e": [{
        "rounded-e": [borderRadius]
      }],
      "rounded-t": [{
        "rounded-t": [borderRadius]
      }],
      "rounded-r": [{
        "rounded-r": [borderRadius]
      }],
      "rounded-b": [{
        "rounded-b": [borderRadius]
      }],
      "rounded-l": [{
        "rounded-l": [borderRadius]
      }],
      "rounded-ss": [{
        "rounded-ss": [borderRadius]
      }],
      "rounded-se": [{
        "rounded-se": [borderRadius]
      }],
      "rounded-ee": [{
        "rounded-ee": [borderRadius]
      }],
      "rounded-es": [{
        "rounded-es": [borderRadius]
      }],
      "rounded-tl": [{
        "rounded-tl": [borderRadius]
      }],
      "rounded-tr": [{
        "rounded-tr": [borderRadius]
      }],
      "rounded-br": [{
        "rounded-br": [borderRadius]
      }],
      "rounded-bl": [{
        "rounded-bl": [borderRadius]
      }],
      "border-w": [{
        border: [borderWidth]
      }],
      "border-w-x": [{
        "border-x": [borderWidth]
      }],
      "border-w-y": [{
        "border-y": [borderWidth]
      }],
      "border-w-s": [{
        "border-s": [borderWidth]
      }],
      "border-w-e": [{
        "border-e": [borderWidth]
      }],
      "border-w-t": [{
        "border-t": [borderWidth]
      }],
      "border-w-r": [{
        "border-r": [borderWidth]
      }],
      "border-w-b": [{
        "border-b": [borderWidth]
      }],
      "border-w-l": [{
        "border-l": [borderWidth]
      }],
      "border-opacity": [{
        "border-opacity": [opacity]
      }],
      "border-style": [{
        border: [...getLineStyles(), "hidden"]
      }],
      "divide-x": [{
        "divide-x": [borderWidth]
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": [borderWidth]
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{
        "divide-opacity": [opacity]
      }],
      "divide-style": [{
        divide: getLineStyles()
      }],
      "border-color": [{
        border: [borderColor]
      }],
      "border-color-x": [{
        "border-x": [borderColor]
      }],
      "border-color-y": [{
        "border-y": [borderColor]
      }],
      "border-color-s": [{
        "border-s": [borderColor]
      }],
      "border-color-e": [{
        "border-e": [borderColor]
      }],
      "border-color-t": [{
        "border-t": [borderColor]
      }],
      "border-color-r": [{
        "border-r": [borderColor]
      }],
      "border-color-b": [{
        "border-b": [borderColor]
      }],
      "border-color-l": [{
        "border-l": [borderColor]
      }],
      "divide-color": [{
        divide: [borderColor]
      }],
      "outline-style": [{
        outline: ["", ...getLineStyles()]
      }],
      "outline-offset": [{
        "outline-offset": [isLength, isArbitraryValue]
      }],
      "outline-w": [{
        outline: [isLength, isArbitraryLength]
      }],
      "outline-color": [{
        outline: [colors]
      }],
      "ring-w": [{
        ring: getLengthWithEmptyAndArbitrary()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [colors]
      }],
      "ring-opacity": [{
        "ring-opacity": [opacity]
      }],
      "ring-offset-w": [{
        "ring-offset": [isLength, isArbitraryLength]
      }],
      "ring-offset-color": [{
        "ring-offset": [colors]
      }],
      shadow: [{
        shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
      }],
      "shadow-color": [{
        shadow: [isAny]
      }],
      opacity: [{
        opacity: [opacity]
      }],
      "mix-blend": [{
        "mix-blend": [...getBlendModes(), "plus-lighter", "plus-darker"]
      }],
      "bg-blend": [{
        "bg-blend": getBlendModes()
      }],
      filter: [{
        filter: ["", "none"]
      }],
      blur: [{
        blur: [blur]
      }],
      brightness: [{
        brightness: [brightness]
      }],
      contrast: [{
        contrast: [contrast]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
      }],
      grayscale: [{
        grayscale: [grayscale]
      }],
      "hue-rotate": [{
        "hue-rotate": [hueRotate]
      }],
      invert: [{
        invert: [invert]
      }],
      saturate: [{
        saturate: [saturate]
      }],
      sepia: [{
        sepia: [sepia]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      "backdrop-blur": [{
        "backdrop-blur": [blur]
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [brightness]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [contrast]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [grayscale]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [hueRotate]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [invert]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [opacity]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [saturate]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": [sepia]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": [borderSpacing]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [borderSpacing]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [borderSpacing]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
      }],
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", isArbitraryValue]
      }],
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [scale]
      }],
      "scale-x": [{
        "scale-x": [scale]
      }],
      "scale-y": [{
        "scale-y": [scale]
      }],
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      "translate-x": [{
        "translate-x": [translate]
      }],
      "translate-y": [{
        "translate-y": [translate]
      }],
      "skew-x": [{
        "skew-x": [skew]
      }],
      "skew-y": [{
        "skew-y": [skew]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
      }],
      accent: [{
        accent: ["auto", colors]
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
      }],
      "caret-color": [{
        caret: [colors]
      }],
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": getSpacingWithArbitrary()
      }],
      "scroll-mx": [{
        "scroll-mx": getSpacingWithArbitrary()
      }],
      "scroll-my": [{
        "scroll-my": getSpacingWithArbitrary()
      }],
      "scroll-ms": [{
        "scroll-ms": getSpacingWithArbitrary()
      }],
      "scroll-me": [{
        "scroll-me": getSpacingWithArbitrary()
      }],
      "scroll-mt": [{
        "scroll-mt": getSpacingWithArbitrary()
      }],
      "scroll-mr": [{
        "scroll-mr": getSpacingWithArbitrary()
      }],
      "scroll-mb": [{
        "scroll-mb": getSpacingWithArbitrary()
      }],
      "scroll-ml": [{
        "scroll-ml": getSpacingWithArbitrary()
      }],
      "scroll-p": [{
        "scroll-p": getSpacingWithArbitrary()
      }],
      "scroll-px": [{
        "scroll-px": getSpacingWithArbitrary()
      }],
      "scroll-py": [{
        "scroll-py": getSpacingWithArbitrary()
      }],
      "scroll-ps": [{
        "scroll-ps": getSpacingWithArbitrary()
      }],
      "scroll-pe": [{
        "scroll-pe": getSpacingWithArbitrary()
      }],
      "scroll-pt": [{
        "scroll-pt": getSpacingWithArbitrary()
      }],
      "scroll-pr": [{
        "scroll-pr": getSpacingWithArbitrary()
      }],
      "scroll-pb": [{
        "scroll-pb": getSpacingWithArbitrary()
      }],
      "scroll-pl": [{
        "scroll-pl": getSpacingWithArbitrary()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
      }],
      fill: [{
        fill: [colors, "none"]
      }],
      "stroke-w": [{
        stroke: [isLength, isArbitraryLength, isArbitraryNumber]
      }],
      stroke: [{
        stroke: [colors, "none"]
      }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
};
var mergeConfigs = (baseConfig, {
  cacheSize,
  prefix,
  separator,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => {
  overrideProperty(baseConfig, "cacheSize", cacheSize);
  overrideProperty(baseConfig, "prefix", prefix);
  overrideProperty(baseConfig, "separator", separator);
  overrideProperty(baseConfig, "experimentalParseClassName", experimentalParseClassName);
  for (const configKey in override) {
    overrideConfigProperties(baseConfig[configKey], override[configKey]);
  }
  for (const key in extend) {
    mergeConfigProperties(baseConfig[key], extend[key]);
  }
  return baseConfig;
};
var overrideProperty = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== void 0) {
    baseObject[overrideKey] = overrideValue;
  }
};
var overrideConfigProperties = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty(baseObject, key, overrideObject[key]);
    }
  }
};
var mergeConfigProperties = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      const mergeValue = mergeObject[key];
      if (mergeValue !== void 0) {
        baseObject[key] = (baseObject[key] || []).concat(mergeValue);
      }
    }
  }
};
var extendTailwindMerge = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(() => mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);

// node_modules/tailwind-merge-v3/dist/bundle-mjs.mjs
var CLASS_PART_SEPARATOR2 = "-";
var createClassGroupUtils2 = (config) => {
  const classMap = createClassMap2(config);
  const {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = config;
  const getClassGroupId = (className) => {
    const classParts = className.split(CLASS_PART_SEPARATOR2);
    if (classParts[0] === "" && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive2(classParts, classMap) || getGroupIdForArbitraryProperty2(className);
  };
  const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier) => {
    const conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [...conflicts, ...conflictingClassGroupModifiers[classGroupId]];
    }
    return conflicts;
  };
  return {
    getClassGroupId,
    getConflictingClassGroupIds
  };
};
var getGroupRecursive2 = (classParts, classPartObject) => {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  const currentClassPart = classParts[0];
  const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive2(classParts.slice(1), nextClassPartObject) : void 0;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return void 0;
  }
  const classRest = classParts.join(CLASS_PART_SEPARATOR2);
  return classPartObject.validators.find(({
    validator
  }) => validator(classRest))?.classGroupId;
};
var arbitraryPropertyRegex2 = /^\[(.+)\]$/;
var getGroupIdForArbitraryProperty2 = (className) => {
  if (arbitraryPropertyRegex2.test(className)) {
    const arbitraryPropertyClassName = arbitraryPropertyRegex2.exec(className)[1];
    const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
    if (property) {
      return "arbitrary.." + property;
    }
  }
};
var createClassMap2 = (config) => {
  const {
    theme,
    classGroups
  } = config;
  const classMap = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const classGroupId in classGroups) {
    processClassesRecursively2(classGroups[classGroupId], classMap, classGroupId, theme);
  }
  return classMap;
};
var processClassesRecursively2 = (classGroup, classPartObject, classGroupId, theme) => {
  classGroup.forEach((classDefinition) => {
    if (typeof classDefinition === "string") {
      const classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart2(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === "function") {
      if (isThemeGetter2(classDefinition)) {
        processClassesRecursively2(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(([key, classGroup2]) => {
      processClassesRecursively2(classGroup2, getPart2(classPartObject, key), classGroupId, theme);
    });
  });
};
var getPart2 = (classPartObject, path) => {
  let currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR2).forEach((pathPart) => {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: /* @__PURE__ */ new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
};
var isThemeGetter2 = (func) => func.isThemeGetter;
var createLruCache2 = (maxCacheSize) => {
  if (maxCacheSize < 1) {
    return {
      get: () => void 0,
      set: () => {
      }
    };
  }
  let cacheSize = 0;
  let cache6 = /* @__PURE__ */ new Map();
  let previousCache = /* @__PURE__ */ new Map();
  const update = (key, value) => {
    cache6.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache6;
      cache6 = /* @__PURE__ */ new Map();
    }
  };
  return {
    get(key) {
      let value = cache6.get(key);
      if (value !== void 0) {
        return value;
      }
      if ((value = previousCache.get(key)) !== void 0) {
        update(key, value);
        return value;
      }
    },
    set(key, value) {
      if (cache6.has(key)) {
        cache6.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
};
var IMPORTANT_MODIFIER2 = "!";
var MODIFIER_SEPARATOR = ":";
var MODIFIER_SEPARATOR_LENGTH = MODIFIER_SEPARATOR.length;
var createParseClassName2 = (config) => {
  const {
    prefix,
    experimentalParseClassName
  } = config;
  let parseClassName = (className) => {
    const modifiers = [];
    let bracketDepth = 0;
    let parenDepth = 0;
    let modifierStart = 0;
    let postfixModifierPosition;
    for (let index = 0; index < className.length; index++) {
      let currentCharacter = className[index];
      if (bracketDepth === 0 && parenDepth === 0) {
        if (currentCharacter === MODIFIER_SEPARATOR) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + MODIFIER_SEPARATOR_LENGTH;
          continue;
        }
        if (currentCharacter === "/") {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === "[") {
        bracketDepth++;
      } else if (currentCharacter === "]") {
        bracketDepth--;
      } else if (currentCharacter === "(") {
        parenDepth++;
      } else if (currentCharacter === ")") {
        parenDepth--;
      }
    }
    const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    const baseClassName = stripImportantModifier(baseClassNameWithImportantModifier);
    const hasImportantModifier = baseClassName !== baseClassNameWithImportantModifier;
    const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : void 0;
    return {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    };
  };
  if (prefix) {
    const fullPrefix = prefix + MODIFIER_SEPARATOR;
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => className.startsWith(fullPrefix) ? parseClassNameOriginal(className.substring(fullPrefix.length)) : {
      isExternal: true,
      modifiers: [],
      hasImportantModifier: false,
      baseClassName: className,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    const parseClassNameOriginal = parseClassName;
    parseClassName = (className) => experimentalParseClassName({
      className,
      parseClassName: parseClassNameOriginal
    });
  }
  return parseClassName;
};
var stripImportantModifier = (baseClassName) => {
  if (baseClassName.endsWith(IMPORTANT_MODIFIER2)) {
    return baseClassName.substring(0, baseClassName.length - 1);
  }
  if (baseClassName.startsWith(IMPORTANT_MODIFIER2)) {
    return baseClassName.substring(1);
  }
  return baseClassName;
};
var createSortModifiers = (config) => {
  const orderSensitiveModifiers = Object.fromEntries(config.orderSensitiveModifiers.map((modifier) => [modifier, true]));
  const sortModifiers2 = (modifiers) => {
    if (modifiers.length <= 1) {
      return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier) => {
      const isPositionSensitive = modifier[0] === "[" || orderSensitiveModifiers[modifier];
      if (isPositionSensitive) {
        sortedModifiers.push(...unsortedModifiers.sort(), modifier);
        unsortedModifiers = [];
      } else {
        unsortedModifiers.push(modifier);
      }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
  };
  return sortModifiers2;
};
var createConfigUtils2 = (config) => ({
  cache: createLruCache2(config.cacheSize),
  parseClassName: createParseClassName2(config),
  sortModifiers: createSortModifiers(config),
  ...createClassGroupUtils2(config)
});
var SPLIT_CLASSES_REGEX2 = /\s+/;
var mergeClassList2 = (classList, configUtils) => {
  const {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers: sortModifiers2
  } = configUtils;
  const classGroupsInConflict = [];
  const classNames = classList.trim().split(SPLIT_CLASSES_REGEX2);
  let result = "";
  for (let index = classNames.length - 1; index >= 0; index -= 1) {
    const originalClassName = classNames[index];
    const {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(originalClassName);
    if (isExternal) {
      result = originalClassName + (result.length > 0 ? " " + result : result);
      continue;
    }
    let hasPostfixModifier = !!maybePostfixModifierPosition;
    let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!classGroupId) {
      if (!hasPostfixModifier) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        result = originalClassName + (result.length > 0 ? " " + result : result);
        continue;
      }
      hasPostfixModifier = false;
    }
    const variantModifier = sortModifiers2(modifiers).join(":");
    const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER2 : variantModifier;
    const classId = modifierId + classGroupId;
    if (classGroupsInConflict.includes(classId)) {
      continue;
    }
    classGroupsInConflict.push(classId);
    const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
    for (let i = 0; i < conflictGroups.length; ++i) {
      const group = conflictGroups[i];
      classGroupsInConflict.push(modifierId + group);
    }
    result = originalClassName + (result.length > 0 ? " " + result : result);
  }
  return result;
};
function twJoin2() {
  let index = 0;
  let argument;
  let resolvedValue;
  let string = "";
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue2(argument)) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
}
var toValue2 = (mix) => {
  if (typeof mix === "string") {
    return mix;
  }
  let resolvedValue;
  let string = "";
  for (let k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue2(mix[k])) {
        string && (string += " ");
        string += resolvedValue;
      }
    }
  }
  return string;
};
function createTailwindMerge2(createConfigFirst, ...createConfigRest) {
  let configUtils;
  let cacheGet;
  let cacheSet;
  let functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    const config = createConfigRest.reduce((previousConfig, createConfigCurrent) => createConfigCurrent(previousConfig), createConfigFirst());
    configUtils = createConfigUtils2(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    const cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    const result = mergeClassList2(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin2.apply(null, arguments));
  };
}
var fromTheme2 = (key) => {
  const themeGetter = (theme) => theme[key] || [];
  themeGetter.isThemeGetter = true;
  return themeGetter;
};
var arbitraryValueRegex2 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
var arbitraryVariableRegex = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
var fractionRegex2 = /^\d+\/\d+$/;
var tshirtUnitRegex2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
var colorFunctionRegex2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
var shadowRegex2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
var imageRegex2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
var isFraction = (value) => fractionRegex2.test(value);
var isNumber2 = (value) => Boolean(value) && !Number.isNaN(Number(value));
var isInteger2 = (value) => Boolean(value) && Number.isInteger(Number(value));
var isPercent2 = (value) => value.endsWith("%") && isNumber2(value.slice(0, -1));
var isTshirtSize2 = (value) => tshirtUnitRegex2.test(value);
var isAny2 = () => true;
var isLengthOnly2 = (value) => lengthUnitRegex2.test(value) && !colorFunctionRegex2.test(value);
var isNever2 = () => false;
var isShadow2 = (value) => shadowRegex2.test(value);
var isImage2 = (value) => imageRegex2.test(value);
var isAnyNonArbitrary = (value) => !isArbitraryValue2(value) && !isArbitraryVariable(value);
var isArbitrarySize2 = (value) => getIsArbitraryValue2(value, isLabelSize, isNever2);
var isArbitraryValue2 = (value) => arbitraryValueRegex2.test(value);
var isArbitraryLength2 = (value) => getIsArbitraryValue2(value, isLabelLength, isLengthOnly2);
var isArbitraryNumber2 = (value) => getIsArbitraryValue2(value, isLabelNumber, isNumber2);
var isArbitraryPosition2 = (value) => getIsArbitraryValue2(value, isLabelPosition, isNever2);
var isArbitraryImage2 = (value) => getIsArbitraryValue2(value, isLabelImage, isImage2);
var isArbitraryShadow2 = (value) => getIsArbitraryValue2(value, isNever2, isShadow2);
var isArbitraryVariable = (value) => arbitraryVariableRegex.test(value);
var isArbitraryVariableLength = (value) => getIsArbitraryVariable(value, isLabelLength);
var isArbitraryVariableFamilyName = (value) => getIsArbitraryVariable(value, isLabelFamilyName);
var isArbitraryVariablePosition = (value) => getIsArbitraryVariable(value, isLabelPosition);
var isArbitraryVariableSize = (value) => getIsArbitraryVariable(value, isLabelSize);
var isArbitraryVariableImage = (value) => getIsArbitraryVariable(value, isLabelImage);
var isArbitraryVariableShadow = (value) => getIsArbitraryVariable(value, isLabelShadow, true);
var getIsArbitraryValue2 = (value, testLabel, testValue) => {
  const result = arbitraryValueRegex2.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return testValue(result[2]);
  }
  return false;
};
var getIsArbitraryVariable = (value, testLabel, shouldMatchNoLabel = false) => {
  const result = arbitraryVariableRegex.exec(value);
  if (result) {
    if (result[1]) {
      return testLabel(result[1]);
    }
    return shouldMatchNoLabel;
  }
  return false;
};
var isLabelPosition = (label) => label === "position";
var imageLabels2 = /* @__PURE__ */ new Set(["image", "url"]);
var isLabelImage = (label) => imageLabels2.has(label);
var sizeLabels2 = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
var isLabelSize = (label) => sizeLabels2.has(label);
var isLabelLength = (label) => label === "length";
var isLabelNumber = (label) => label === "number";
var isLabelFamilyName = (label) => label === "family-name";
var isLabelShadow = (label) => label === "shadow";
var getDefaultConfig2 = () => {
  const themeColor = fromTheme2("color");
  const themeFont = fromTheme2("font");
  const themeText = fromTheme2("text");
  const themeFontWeight = fromTheme2("font-weight");
  const themeTracking = fromTheme2("tracking");
  const themeLeading = fromTheme2("leading");
  const themeBreakpoint = fromTheme2("breakpoint");
  const themeContainer = fromTheme2("container");
  const themeSpacing = fromTheme2("spacing");
  const themeRadius = fromTheme2("radius");
  const themeShadow = fromTheme2("shadow");
  const themeInsetShadow = fromTheme2("inset-shadow");
  const themeDropShadow = fromTheme2("drop-shadow");
  const themeBlur = fromTheme2("blur");
  const themePerspective = fromTheme2("perspective");
  const themeAspect = fromTheme2("aspect");
  const themeEase = fromTheme2("ease");
  const themeAnimate = fromTheme2("animate");
  const scaleBreak = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  const scalePosition = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  const scaleOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"];
  const scaleOverscroll = () => ["auto", "contain", "none"];
  const scaleInset = () => [isFraction, "px", "full", "auto", isArbitraryVariable, isArbitraryValue2, themeSpacing];
  const scaleGridTemplateColsRows = () => [isInteger2, "none", "subgrid", isArbitraryVariable, isArbitraryValue2];
  const scaleGridColRowStartAndEnd = () => ["auto", {
    span: ["full", isInteger2, isArbitraryVariable, isArbitraryValue2]
  }, isArbitraryVariable, isArbitraryValue2];
  const scaleGridColRowStartOrEnd = () => [isInteger2, "auto", isArbitraryVariable, isArbitraryValue2];
  const scaleGridAutoColsRows = () => ["auto", "min", "max", "fr", isArbitraryVariable, isArbitraryValue2];
  const scaleGap = () => [isArbitraryVariable, isArbitraryValue2, themeSpacing];
  const scaleAlignPrimaryAxis = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline"];
  const scaleAlignSecondaryAxis = () => ["start", "end", "center", "stretch"];
  const scaleUnambiguousSpacing = () => [isArbitraryVariable, isArbitraryValue2, themeSpacing];
  const scalePadding = () => ["px", ...scaleUnambiguousSpacing()];
  const scaleMargin = () => ["px", "auto", ...scaleUnambiguousSpacing()];
  const scaleSizing = () => [isFraction, "auto", "px", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", isArbitraryVariable, isArbitraryValue2, themeSpacing];
  const scaleColor = () => [themeColor, isArbitraryVariable, isArbitraryValue2];
  const scaleGradientStopPosition = () => [isPercent2, isArbitraryLength2];
  const scaleRadius = () => [
    "",
    "none",
    "full",
    themeRadius,
    isArbitraryVariable,
    isArbitraryValue2
  ];
  const scaleBorderWidth = () => ["", isNumber2, isArbitraryVariableLength, isArbitraryLength2];
  const scaleLineStyle = () => ["solid", "dashed", "dotted", "double"];
  const scaleBlendMode = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const scaleBlur = () => [
    "",
    "none",
    themeBlur,
    isArbitraryVariable,
    isArbitraryValue2
  ];
  const scaleOrigin = () => ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryVariable, isArbitraryValue2];
  const scaleRotate = () => ["none", isNumber2, isArbitraryVariable, isArbitraryValue2];
  const scaleScale = () => ["none", isNumber2, isArbitraryVariable, isArbitraryValue2];
  const scaleSkew = () => [isNumber2, isArbitraryVariable, isArbitraryValue2];
  const scaleTranslate = () => [isFraction, "full", "px", isArbitraryVariable, isArbitraryValue2, themeSpacing];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [isTshirtSize2],
      breakpoint: [isTshirtSize2],
      color: [isAny2],
      container: [isTshirtSize2],
      "drop-shadow": [isTshirtSize2],
      ease: ["in", "out", "in-out"],
      font: [isAnyNonArbitrary],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [isTshirtSize2],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [isTshirtSize2],
      shadow: [isTshirtSize2],
      spacing: [isNumber2],
      text: [isTshirtSize2],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", isFraction, isArbitraryValue2, isArbitraryVariable, themeAspect]
      }],
      container: ["container"],
      columns: [{
        columns: [isNumber2, isArbitraryValue2, isArbitraryVariable, themeContainer]
      }],
      "break-after": [{
        "break-after": scaleBreak()
      }],
      "break-before": [{
        "break-before": scaleBreak()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      sr: ["sr-only", "not-sr-only"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: [...scalePosition(), isArbitraryValue2, isArbitraryVariable]
      }],
      overflow: [{
        overflow: scaleOverflow()
      }],
      "overflow-x": [{
        "overflow-x": scaleOverflow()
      }],
      "overflow-y": [{
        "overflow-y": scaleOverflow()
      }],
      overscroll: [{
        overscroll: scaleOverscroll()
      }],
      "overscroll-x": [{
        "overscroll-x": scaleOverscroll()
      }],
      "overscroll-y": [{
        "overscroll-y": scaleOverscroll()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: scaleInset()
      }],
      "inset-x": [{
        "inset-x": scaleInset()
      }],
      "inset-y": [{
        "inset-y": scaleInset()
      }],
      start: [{
        start: scaleInset()
      }],
      end: [{
        end: scaleInset()
      }],
      top: [{
        top: scaleInset()
      }],
      right: [{
        right: scaleInset()
      }],
      bottom: [{
        bottom: scaleInset()
      }],
      left: [{
        left: scaleInset()
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: [isInteger2, "auto", isArbitraryVariable, isArbitraryValue2]
      }],
      basis: [{
        basis: [isFraction, "full", "auto", isArbitraryVariable, isArbitraryValue2, themeContainer, themeSpacing]
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      flex: [{
        flex: [isNumber2, isFraction, "auto", "initial", "none", isArbitraryValue2]
      }],
      grow: [{
        grow: ["", isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      shrink: [{
        shrink: ["", isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      order: [{
        order: [isInteger2, "first", "last", "none", isArbitraryVariable, isArbitraryValue2]
      }],
      "grid-cols": [{
        "grid-cols": scaleGridTemplateColsRows()
      }],
      "col-start-end": [{
        col: scaleGridColRowStartAndEnd()
      }],
      "col-start": [{
        "col-start": scaleGridColRowStartOrEnd()
      }],
      "col-end": [{
        "col-end": scaleGridColRowStartOrEnd()
      }],
      "grid-rows": [{
        "grid-rows": scaleGridTemplateColsRows()
      }],
      "row-start-end": [{
        row: scaleGridColRowStartAndEnd()
      }],
      "row-start": [{
        "row-start": scaleGridColRowStartOrEnd()
      }],
      "row-end": [{
        "row-end": scaleGridColRowStartOrEnd()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": scaleGridAutoColsRows()
      }],
      "auto-rows": [{
        "auto-rows": scaleGridAutoColsRows()
      }],
      gap: [{
        gap: scaleGap()
      }],
      "gap-x": [{
        "gap-x": scaleGap()
      }],
      "gap-y": [{
        "gap-y": scaleGap()
      }],
      "justify-content": [{
        justify: [...scaleAlignPrimaryAxis(), "normal"]
      }],
      "justify-items": [{
        "justify-items": [...scaleAlignSecondaryAxis(), "normal"]
      }],
      "justify-self": [{
        "justify-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      "align-content": [{
        content: ["normal", ...scaleAlignPrimaryAxis()]
      }],
      "align-items": [{
        items: [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      "align-self": [{
        self: ["auto", ...scaleAlignSecondaryAxis(), "baseline"]
      }],
      "place-content": [{
        "place-content": scaleAlignPrimaryAxis()
      }],
      "place-items": [{
        "place-items": [...scaleAlignSecondaryAxis(), "baseline"]
      }],
      "place-self": [{
        "place-self": ["auto", ...scaleAlignSecondaryAxis()]
      }],
      p: [{
        p: scalePadding()
      }],
      px: [{
        px: scalePadding()
      }],
      py: [{
        py: scalePadding()
      }],
      ps: [{
        ps: scalePadding()
      }],
      pe: [{
        pe: scalePadding()
      }],
      pt: [{
        pt: scalePadding()
      }],
      pr: [{
        pr: scalePadding()
      }],
      pb: [{
        pb: scalePadding()
      }],
      pl: [{
        pl: scalePadding()
      }],
      m: [{
        m: scaleMargin()
      }],
      mx: [{
        mx: scaleMargin()
      }],
      my: [{
        my: scaleMargin()
      }],
      ms: [{
        ms: scaleMargin()
      }],
      me: [{
        me: scaleMargin()
      }],
      mt: [{
        mt: scaleMargin()
      }],
      mr: [{
        mr: scaleMargin()
      }],
      mb: [{
        mb: scaleMargin()
      }],
      ml: [{
        ml: scaleMargin()
      }],
      "space-x": [{
        "space-x": scaleUnambiguousSpacing()
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": scaleUnambiguousSpacing()
      }],
      "space-y-reverse": ["space-y-reverse"],
      size: [{
        size: scaleSizing()
      }],
      w: [{
        w: [themeContainer, "screen", ...scaleSizing()]
      }],
      "min-w": [{
        "min-w": [
          themeContainer,
          "screen",
          "none",
          ...scaleSizing()
        ]
      }],
      "max-w": [{
        "max-w": [
          themeContainer,
          "screen",
          "none",
          "prose",
          {
            screen: [themeBreakpoint]
          },
          ...scaleSizing()
        ]
      }],
      h: [{
        h: ["screen", ...scaleSizing()]
      }],
      "min-h": [{
        "min-h": ["screen", "none", ...scaleSizing()]
      }],
      "max-h": [{
        "max-h": ["screen", ...scaleSizing()]
      }],
      "font-size": [{
        text: ["base", themeText, isArbitraryVariableLength, isArbitraryLength2]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: [themeFontWeight, isArbitraryVariable, isArbitraryNumber2]
      }],
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", isPercent2, isArbitraryValue2]
      }],
      "font-family": [{
        font: [isArbitraryVariableFamilyName, isArbitraryValue2, themeFont]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      tracking: [{
        tracking: [themeTracking, isArbitraryVariable, isArbitraryValue2]
      }],
      "line-clamp": [{
        "line-clamp": [isNumber2, "none", isArbitraryVariable, isArbitraryNumber2]
      }],
      leading: [{
        leading: [
          isArbitraryVariable,
          isArbitraryValue2,
          themeLeading,
          themeSpacing
        ]
      }],
      "list-image": [{
        "list-image": ["none", isArbitraryVariable, isArbitraryValue2]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "list-style-type": [{
        list: ["disc", "decimal", "none", isArbitraryVariable, isArbitraryValue2]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "placeholder-color": [{
        placeholder: scaleColor()
      }],
      "text-color": [{
        text: scaleColor()
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...scaleLineStyle(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: [isNumber2, "from-font", "auto", isArbitraryVariable, isArbitraryLength2]
      }],
      "text-decoration-color": [{
        decoration: scaleColor()
      }],
      "underline-offset": [{
        "underline-offset": [isNumber2, "auto", isArbitraryVariable, isArbitraryValue2]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: ["px", ...scaleUnambiguousSpacing()]
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryVariable, isArbitraryValue2]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", isArbitraryVariable, isArbitraryValue2]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [...scalePosition(), isArbitraryVariablePosition, isArbitraryPosition2]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "space", "round"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", isArbitraryVariableSize, isArbitrarySize2]
      }],
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, isInteger2, isArbitraryVariable, isArbitraryValue2],
          radial: ["", isArbitraryVariable, isArbitraryValue2],
          conic: [isInteger2, isArbitraryVariable, isArbitraryValue2]
        }, isArbitraryVariableImage, isArbitraryImage2]
      }],
      "bg-color": [{
        bg: scaleColor()
      }],
      "gradient-from-pos": [{
        from: scaleGradientStopPosition()
      }],
      "gradient-via-pos": [{
        via: scaleGradientStopPosition()
      }],
      "gradient-to-pos": [{
        to: scaleGradientStopPosition()
      }],
      "gradient-from": [{
        from: scaleColor()
      }],
      "gradient-via": [{
        via: scaleColor()
      }],
      "gradient-to": [{
        to: scaleColor()
      }],
      rounded: [{
        rounded: scaleRadius()
      }],
      "rounded-s": [{
        "rounded-s": scaleRadius()
      }],
      "rounded-e": [{
        "rounded-e": scaleRadius()
      }],
      "rounded-t": [{
        "rounded-t": scaleRadius()
      }],
      "rounded-r": [{
        "rounded-r": scaleRadius()
      }],
      "rounded-b": [{
        "rounded-b": scaleRadius()
      }],
      "rounded-l": [{
        "rounded-l": scaleRadius()
      }],
      "rounded-ss": [{
        "rounded-ss": scaleRadius()
      }],
      "rounded-se": [{
        "rounded-se": scaleRadius()
      }],
      "rounded-ee": [{
        "rounded-ee": scaleRadius()
      }],
      "rounded-es": [{
        "rounded-es": scaleRadius()
      }],
      "rounded-tl": [{
        "rounded-tl": scaleRadius()
      }],
      "rounded-tr": [{
        "rounded-tr": scaleRadius()
      }],
      "rounded-br": [{
        "rounded-br": scaleRadius()
      }],
      "rounded-bl": [{
        "rounded-bl": scaleRadius()
      }],
      "border-w": [{
        border: scaleBorderWidth()
      }],
      "border-w-x": [{
        "border-x": scaleBorderWidth()
      }],
      "border-w-y": [{
        "border-y": scaleBorderWidth()
      }],
      "border-w-s": [{
        "border-s": scaleBorderWidth()
      }],
      "border-w-e": [{
        "border-e": scaleBorderWidth()
      }],
      "border-w-t": [{
        "border-t": scaleBorderWidth()
      }],
      "border-w-r": [{
        "border-r": scaleBorderWidth()
      }],
      "border-w-b": [{
        "border-b": scaleBorderWidth()
      }],
      "border-w-l": [{
        "border-l": scaleBorderWidth()
      }],
      "divide-x": [{
        "divide-x": scaleBorderWidth()
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": scaleBorderWidth()
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "border-style": [{
        border: [...scaleLineStyle(), "hidden", "none"]
      }],
      "divide-style": [{
        divide: [...scaleLineStyle(), "hidden", "none"]
      }],
      "border-color": [{
        border: scaleColor()
      }],
      "border-color-x": [{
        "border-x": scaleColor()
      }],
      "border-color-y": [{
        "border-y": scaleColor()
      }],
      "border-color-s": [{
        "border-s": scaleColor()
      }],
      "border-color-e": [{
        "border-e": scaleColor()
      }],
      "border-color-t": [{
        "border-t": scaleColor()
      }],
      "border-color-r": [{
        "border-r": scaleColor()
      }],
      "border-color-b": [{
        "border-b": scaleColor()
      }],
      "border-color-l": [{
        "border-l": scaleColor()
      }],
      "divide-color": [{
        divide: scaleColor()
      }],
      "outline-style": [{
        outline: [...scaleLineStyle(), "none", "hidden"]
      }],
      "outline-offset": [{
        "outline-offset": [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "outline-w": [{
        outline: ["", isNumber2, isArbitraryVariableLength, isArbitraryLength2]
      }],
      "outline-color": [{
        outline: [themeColor]
      }],
      shadow: [{
        shadow: [
          "",
          "none",
          themeShadow,
          isArbitraryVariableShadow,
          isArbitraryShadow2
        ]
      }],
      "shadow-color": [{
        shadow: scaleColor()
      }],
      "inset-shadow": [{
        "inset-shadow": ["none", isArbitraryVariable, isArbitraryValue2, themeInsetShadow]
      }],
      "inset-shadow-color": [{
        "inset-shadow": scaleColor()
      }],
      "ring-w": [{
        ring: scaleBorderWidth()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: scaleColor()
      }],
      "ring-offset-w": [{
        "ring-offset": [isNumber2, isArbitraryLength2]
      }],
      "ring-offset-color": [{
        "ring-offset": scaleColor()
      }],
      "inset-ring-w": [{
        "inset-ring": scaleBorderWidth()
      }],
      "inset-ring-color": [{
        "inset-ring": scaleColor()
      }],
      opacity: [{
        opacity: [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "mix-blend": [{
        "mix-blend": [...scaleBlendMode(), "plus-darker", "plus-lighter"]
      }],
      "bg-blend": [{
        "bg-blend": scaleBlendMode()
      }],
      filter: [{
        filter: [
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue2
        ]
      }],
      blur: [{
        blur: scaleBlur()
      }],
      brightness: [{
        brightness: [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      contrast: [{
        contrast: [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "drop-shadow": [{
        "drop-shadow": [
          "",
          "none",
          themeDropShadow,
          isArbitraryVariable,
          isArbitraryValue2
        ]
      }],
      grayscale: [{
        grayscale: ["", isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "hue-rotate": [{
        "hue-rotate": [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      invert: [{
        invert: ["", isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      saturate: [{
        saturate: [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      sepia: [{
        sepia: ["", isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "backdrop-filter": [{
        "backdrop-filter": [
          "",
          "none",
          isArbitraryVariable,
          isArbitraryValue2
        ]
      }],
      "backdrop-blur": [{
        "backdrop-blur": scaleBlur()
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "backdrop-invert": [{
        "backdrop-invert": ["", isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": ["", isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": scaleUnambiguousSpacing()
      }],
      "border-spacing-x": [{
        "border-spacing-x": scaleUnambiguousSpacing()
      }],
      "border-spacing-y": [{
        "border-spacing-y": scaleUnambiguousSpacing()
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", isArbitraryVariable, isArbitraryValue2]
      }],
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      duration: [{
        duration: [isNumber2, "initial", isArbitraryVariable, isArbitraryValue2]
      }],
      ease: [{
        ease: ["linear", "initial", themeEase, isArbitraryVariable, isArbitraryValue2]
      }],
      delay: [{
        delay: [isNumber2, isArbitraryVariable, isArbitraryValue2]
      }],
      animate: [{
        animate: ["none", themeAnimate, isArbitraryVariable, isArbitraryValue2]
      }],
      backface: [{
        backface: ["hidden", "visible"]
      }],
      perspective: [{
        perspective: [themePerspective, isArbitraryVariable, isArbitraryValue2]
      }],
      "perspective-origin": [{
        "perspective-origin": scaleOrigin()
      }],
      rotate: [{
        rotate: scaleRotate()
      }],
      "rotate-x": [{
        "rotate-x": scaleRotate()
      }],
      "rotate-y": [{
        "rotate-y": scaleRotate()
      }],
      "rotate-z": [{
        "rotate-z": scaleRotate()
      }],
      scale: [{
        scale: scaleScale()
      }],
      "scale-x": [{
        "scale-x": scaleScale()
      }],
      "scale-y": [{
        "scale-y": scaleScale()
      }],
      "scale-z": [{
        "scale-z": scaleScale()
      }],
      "scale-3d": ["scale-3d"],
      skew: [{
        skew: scaleSkew()
      }],
      "skew-x": [{
        "skew-x": scaleSkew()
      }],
      "skew-y": [{
        "skew-y": scaleSkew()
      }],
      transform: [{
        transform: [isArbitraryVariable, isArbitraryValue2, "", "none", "gpu", "cpu"]
      }],
      "transform-origin": [{
        origin: scaleOrigin()
      }],
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      translate: [{
        translate: scaleTranslate()
      }],
      "translate-x": [{
        "translate-x": scaleTranslate()
      }],
      "translate-y": [{
        "translate-y": scaleTranslate()
      }],
      "translate-z": [{
        "translate-z": scaleTranslate()
      }],
      "translate-none": ["translate-none"],
      accent: [{
        accent: scaleColor()
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      "caret-color": [{
        caret: scaleColor()
      }],
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryVariable, isArbitraryValue2]
      }],
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": scaleUnambiguousSpacing()
      }],
      "scroll-mx": [{
        "scroll-mx": scaleUnambiguousSpacing()
      }],
      "scroll-my": [{
        "scroll-my": scaleUnambiguousSpacing()
      }],
      "scroll-ms": [{
        "scroll-ms": scaleUnambiguousSpacing()
      }],
      "scroll-me": [{
        "scroll-me": scaleUnambiguousSpacing()
      }],
      "scroll-mt": [{
        "scroll-mt": scaleUnambiguousSpacing()
      }],
      "scroll-mr": [{
        "scroll-mr": scaleUnambiguousSpacing()
      }],
      "scroll-mb": [{
        "scroll-mb": scaleUnambiguousSpacing()
      }],
      "scroll-ml": [{
        "scroll-ml": scaleUnambiguousSpacing()
      }],
      "scroll-p": [{
        "scroll-p": scaleUnambiguousSpacing()
      }],
      "scroll-px": [{
        "scroll-px": scaleUnambiguousSpacing()
      }],
      "scroll-py": [{
        "scroll-py": scaleUnambiguousSpacing()
      }],
      "scroll-ps": [{
        "scroll-ps": scaleUnambiguousSpacing()
      }],
      "scroll-pe": [{
        "scroll-pe": scaleUnambiguousSpacing()
      }],
      "scroll-pt": [{
        "scroll-pt": scaleUnambiguousSpacing()
      }],
      "scroll-pr": [{
        "scroll-pr": scaleUnambiguousSpacing()
      }],
      "scroll-pb": [{
        "scroll-pb": scaleUnambiguousSpacing()
      }],
      "scroll-pl": [{
        "scroll-pl": scaleUnambiguousSpacing()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", isArbitraryVariable, isArbitraryValue2]
      }],
      fill: [{
        fill: ["none", ...scaleColor()]
      }],
      "stroke-w": [{
        stroke: [isNumber2, isArbitraryVariableLength, isArbitraryLength2, isArbitraryNumber2]
      }],
      stroke: [{
        stroke: ["none", ...scaleColor()]
      }],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["before", "after", "placeholder", "file", "marker", "selection", "first-line", "first-letter", "backdrop", "*", "**"]
  };
};
var mergeConfigs2 = (baseConfig, {
  cacheSize,
  prefix,
  experimentalParseClassName,
  extend = {},
  override = {}
}) => {
  overrideProperty2(baseConfig, "cacheSize", cacheSize);
  overrideProperty2(baseConfig, "prefix", prefix);
  overrideProperty2(baseConfig, "experimentalParseClassName", experimentalParseClassName);
  overrideConfigProperties2(baseConfig.theme, override.theme);
  overrideConfigProperties2(baseConfig.classGroups, override.classGroups);
  overrideConfigProperties2(baseConfig.conflictingClassGroups, override.conflictingClassGroups);
  overrideConfigProperties2(baseConfig.conflictingClassGroupModifiers, override.conflictingClassGroupModifiers);
  overrideProperty2(baseConfig, "orderSensitiveModifiers", override.orderSensitiveModifiers);
  mergeConfigProperties2(baseConfig.theme, extend.theme);
  mergeConfigProperties2(baseConfig.classGroups, extend.classGroups);
  mergeConfigProperties2(baseConfig.conflictingClassGroups, extend.conflictingClassGroups);
  mergeConfigProperties2(baseConfig.conflictingClassGroupModifiers, extend.conflictingClassGroupModifiers);
  mergeArrayProperties(baseConfig, extend, "orderSensitiveModifiers");
  return baseConfig;
};
var overrideProperty2 = (baseObject, overrideKey, overrideValue) => {
  if (overrideValue !== void 0) {
    baseObject[overrideKey] = overrideValue;
  }
};
var overrideConfigProperties2 = (baseObject, overrideObject) => {
  if (overrideObject) {
    for (const key in overrideObject) {
      overrideProperty2(baseObject, key, overrideObject[key]);
    }
  }
};
var mergeConfigProperties2 = (baseObject, mergeObject) => {
  if (mergeObject) {
    for (const key in mergeObject) {
      mergeArrayProperties(baseObject, mergeObject, key);
    }
  }
};
var mergeArrayProperties = (baseObject, mergeObject, key) => {
  const mergeValue = mergeObject[key];
  if (mergeValue !== void 0) {
    baseObject[key] = baseObject[key] ? baseObject[key].concat(mergeValue) : mergeValue;
  }
};
var extendTailwindMerge2 = (configExtension, ...createConfig) => typeof configExtension === "function" ? createTailwindMerge2(getDefaultConfig2, configExtension, ...createConfig) : createTailwindMerge2(() => mergeConfigs2(getDefaultConfig2(), configExtension), ...createConfig);

// node_modules/flowbite-react/dist/helpers/tailwind-merge.js
var cache5 = /* @__PURE__ */ new Map();
function twMerge(...classLists) {
  const prefix = getPrefix();
  const version = getVersion();
  const cacheKey = `${prefix}.${version}`;
  const cacheValue = cache5.get(cacheKey);
  if (cacheValue) {
    return cacheValue(...classLists);
  }
  const twMergeFn = (version === 3 ? extendTailwindMerge : extendTailwindMerge2)({
    extend: {
      classGroups: {
        "bg-image": ["bg-arrow-down-icon", "bg-check-icon", "bg-dash-icon", "bg-dot-icon"],
        shadow: ["shadow-sm-light"]
      }
    },
    prefix
  });
  cache5.set(cacheKey, twMergeFn);
  return twMergeFn(...classLists);
}

// node_modules/flowbite-react/dist/helpers/resolve-theme.js
function useResolveTheme(...input) {
  return useStableMemo(() => resolveTheme(...input), input);
}
function useStableMemo(factory, dependencies) {
  const prevDepsRef = (0, import_react2.useRef)();
  const prevResultRef = (0, import_react2.useRef)();
  const hasChanged = !prevDepsRef.current || !isEqual(prevDepsRef.current, dependencies);
  if (hasChanged) {
    prevDepsRef.current = dependencies;
    prevResultRef.current = factory();
  }
  return prevResultRef.current;
}
function resolveTheme([base, ...custom], clearThemeList, applyThemeList) {
  const dark = getDark();
  const prefix = getPrefix();
  const version = getVersion();
  const _custom = custom?.length ? custom?.filter((value) => value !== void 0) : void 0;
  const _clearThemeList = clearThemeList?.length ? clearThemeList?.filter((value) => value !== void 0) : void 0;
  const _applyThemeList = applyThemeList?.length ? applyThemeList?.filter((value) => value !== void 0) : void 0;
  const baseTheme = _clearThemeList?.length || dark === false || version === 4 || prefix ? klona(base) : base;
  if (_clearThemeList?.length) {
    const finalClearTheme = cloneWithValue(baseTheme, false);
    let run = false;
    for (const clearTheme of _clearThemeList) {
      if (clearTheme) {
        run = true;
      }
      patchClearTheme(finalClearTheme, clearTheme);
    }
    if (run) {
      runClearTheme(baseTheme, finalClearTheme);
    }
  }
  if (dark === false || version === 4 || prefix) {
    stringIterator(baseTheme, (value) => {
      if (dark === false) {
        value = stripDark(value);
      }
      if (version === 4) {
        value = convertUtilitiesToV4(value);
      }
      if (prefix) {
        if (version === 3) {
          value = applyPrefixV3(value, prefix);
        }
        if (version === 4) {
          value = applyPrefix(value, prefix);
        }
      }
      return value;
    });
  }
  let theme = baseTheme;
  if (_custom?.length) {
    theme = deepMergeStrings(twMerge)(baseTheme, ..._custom);
  }
  if (_applyThemeList?.length && _custom?.length) {
    const finalApplyTheme = cloneWithValue(baseTheme, "merge");
    let run = false;
    for (const applyTheme of _applyThemeList) {
      if (applyTheme !== "merge") {
        run = true;
      }
      patchApplyTheme(finalApplyTheme, applyTheme);
    }
    if (run) {
      runApplyTheme(theme, deepmerge(baseTheme, ...custom), finalApplyTheme);
    }
  }
  return theme;
}
function patchClearTheme(base, clearTheme) {
  function iterate(base2, clearTheme2) {
    if (typeof clearTheme2 === "boolean") {
      if (typeof base2 === "object" && base2 !== null) {
        for (const key in base2) {
          base2[key] = iterate(base2[key], clearTheme2);
        }
      } else {
        return clearTheme2;
      }
    }
    if (typeof clearTheme2 === "object" && clearTheme2 !== null) {
      for (const key in clearTheme2) {
        base2[key] = iterate(base2[key], clearTheme2[key]);
      }
    }
    return base2;
  }
  iterate(base, clearTheme);
}
function patchApplyTheme(base, applyTheme) {
  function iterate(base2, applyTheme2) {
    if (typeof applyTheme2 === "string") {
      if (typeof base2 === "object" && base2 !== null) {
        for (const key in base2) {
          base2[key] = iterate(base2[key], applyTheme2);
        }
      } else {
        return applyTheme2;
      }
    }
    if (typeof applyTheme2 === "object" && applyTheme2 !== null) {
      for (const key in applyTheme2) {
        base2[key] = iterate(base2[key], applyTheme2[key]);
      }
    }
    return base2;
  }
  iterate(base, applyTheme);
}
function runClearTheme(base, clearTheme) {
  function iterate(base2, clearTheme2) {
    if (clearTheme2 === true) {
      if (typeof base2 === "object" && base2 !== null) {
        for (const key in base2) {
          base2[key] = iterate(base2[key], clearTheme2);
        }
      } else {
        return "";
      }
    }
    if (typeof clearTheme2 === "object" && clearTheme2 !== null) {
      for (const key in clearTheme2) {
        base2[key] = iterate(base2[key], clearTheme2[key]);
      }
    }
    return base2;
  }
  iterate(base, clearTheme);
}
function runApplyTheme(base, target, applyTheme) {
  function iterate(base2, target2, applyTheme2) {
    if (applyTheme2 === "replace") {
      if (typeof base2 === "object" && base2 !== null) {
        for (const key in base2) {
          base2[key] = iterate(base2[key], target2[key], applyTheme2);
        }
      } else {
        return target2;
      }
    }
    if (typeof applyTheme2 === "object" && applyTheme2 !== null) {
      for (const key in applyTheme2) {
        base2[key] = iterate(base2[key], target2[key], applyTheme2[key]);
      }
    }
    return base2;
  }
  iterate(base, target, applyTheme);
}
function stringIterator(input, callback) {
  function iterate(input2) {
    if (typeof input2 === "string") {
      return callback(input2);
    } else if (Array.isArray(input2)) {
      for (let i = 0; i < input2.length; i++) {
        input2[i] = iterate(input2[i]);
      }
    } else if (typeof input2 === "object" && input2 !== null) {
      for (const key in input2) {
        input2[key] = iterate(input2[key]);
      }
    }
    return input2;
  }
  iterate(input);
}
function cloneWithValue(input, value) {
  if (input === null || typeof input !== "object") {
    return value;
  }
  const clone = {};
  for (const key in input) {
    clone[key] = cloneWithValue(input[key], value);
  }
  return clone;
}

// node_modules/flowbite-react/dist/theme/provider.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var import_react3 = __toESM(require_react(), 1);
"use client";
var ThemeProviderContext = (0, import_react3.createContext)(void 0);
function ThemeProvider({ children, root, props, theme, clearTheme, applyTheme }) {
  const parentProvider = (0, import_react3.useContext)(ThemeProviderContext);
  const value = (0, import_react3.useMemo)(
    () => ({
      props: !root && parentProvider?.props ? deepmerge(parentProvider?.props, props) : props,
      theme: !root && parentProvider?.theme ? deepMergeStrings(twMerge)(parentProvider.theme, theme) : theme,
      clearTheme: !root && parentProvider?.clearTheme ? deepmerge(parentProvider.clearTheme, clearTheme) : clearTheme,
      applyTheme: !root && parentProvider?.applyTheme ? deepmerge(parentProvider?.applyTheme, applyTheme) : applyTheme
    }),
    [
      root,
      props,
      theme,
      clearTheme,
      applyTheme,
      parentProvider?.props,
      parentProvider?.theme,
      parentProvider?.clearTheme,
      parentProvider?.applyTheme
    ]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProviderContext.Provider, { value, children });
}
ThemeProvider.displayName = "ThemeProvider";
function useThemeProvider() {
  return (0, import_react3.useContext)(ThemeProviderContext) ?? {};
}

// node_modules/flowbite-react/dist/helpers/create-theme.js
function createTheme(input) {
  return input;
}

// node_modules/flowbite-react/dist/components/Tabs/TabItem.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var import_react4 = __toESM(require_react(), 1);
"use client";
var TabItem = (0, import_react4.forwardRef)((props, ref) => {
  const provider = useThemeProvider();
  const { title: _, ...restProps } = resolveProps(props, provider.props?.tabItem);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref, ...restProps });
});
TabItem.displayName = "TabItem";

// node_modules/flowbite-react/dist/components/Tabs/Tabs.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react5 = __toESM(require_react(), 1);

// node_modules/flowbite-react/dist/components/Tabs/theme.js
var tabsTheme = createTheme({
  base: "flex flex-col gap-2",
  tablist: {
    base: "flex text-center",
    variant: {
      default: "flex-wrap border-b border-gray-200 dark:border-gray-700",
      underline: "-mb-px flex-wrap border-b border-gray-200 dark:border-gray-700",
      pills: "flex-wrap space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400",
      fullWidth: "grid w-full grid-flow-col divide-x divide-gray-200 rounded-none text-sm font-medium shadow dark:divide-gray-700 dark:text-gray-400"
    },
    tabitem: {
      base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
      variant: {
        default: {
          base: "rounded-t-lg",
          active: {
            on: "bg-gray-100 text-primary-600 dark:bg-gray-800 dark:text-primary-500",
            off: "text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
          }
        },
        underline: {
          base: "rounded-t-lg",
          active: {
            on: "rounded-t-lg border-b-2 border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500",
            off: "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
          }
        },
        pills: {
          base: "",
          active: {
            on: "rounded-lg bg-primary-600 text-white",
            off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
          }
        },
        fullWidth: {
          base: "ml-0 flex w-full rounded-none first:ml-0",
          active: {
            on: "rounded-none bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white",
            off: "rounded-none bg-white hover:bg-gray-50 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          }
        }
      },
      icon: "mr-2 h-5 w-5"
    }
  },
  tabitemcontainer: {
    base: "",
    variant: {
      default: "",
      underline: "",
      pills: "",
      fullWidth: ""
    }
  },
  tabpanel: "py-3"
});

// node_modules/flowbite-react/dist/components/Tabs/Tabs.js
"use client";
var Tabs = (0, import_react5.forwardRef)((props, ref) => {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [tabsTheme, provider.theme?.tabs, props.theme],
    [get(provider.clearTheme, "tabs"), props.clearTheme],
    [get(provider.applyTheme, "tabs"), props.applyTheme]
  );
  const {
    children,
    className,
    onActiveTabChange,
    variant = "default",
    ...restProps
  } = resolveProps(props, provider.props?.tabs);
  const id = (0, import_react5.useId)();
  const tabs = (0, import_react5.useMemo)(
    () => import_react5.Children.map(import_react5.Children.toArray(children), ({ props: props2 }) => props2),
    [children]
  );
  const tabRefs = (0, import_react5.useRef)([]);
  const [activeTab, setActiveTab] = (0, import_react5.useState)(
    Math.max(
      0,
      tabs.findIndex((tab) => tab.active)
    )
  );
  const [focusedTab, setFocusedTab] = (0, import_react5.useState)(-1);
  function setActiveTabWithCallback(activeTab2) {
    setActiveTab(activeTab2);
    if (onActiveTabChange)
      onActiveTabChange(activeTab2);
  }
  function handleClick({ target }) {
    setActiveTabWithCallback(target);
    setFocusedTab(target);
  }
  function handleKeyboard({ event, target }) {
    if (event.key === "ArrowLeft") {
      setFocusedTab(Math.max(0, focusedTab - 1));
    }
    if (event.key === "ArrowRight") {
      setFocusedTab(Math.min(tabs.length - 1, focusedTab + 1));
    }
    if (event.key === "Enter") {
      setActiveTabWithCallback(target);
      setFocusedTab(target);
    }
  }
  const tabItemStyle = theme.tablist.tabitem.variant[variant];
  const tabItemContainerStyle = theme.tabitemcontainer.variant[variant];
  (0, import_react5.useEffect)(() => {
    tabRefs.current[focusedTab]?.focus();
  }, [focusedTab]);
  (0, import_react5.useImperativeHandle)(ref, () => ({
    setActiveTab: setActiveTabWithCallback
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: twMerge(theme.base, className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        "aria-label": "Tabs",
        role: "tablist",
        className: twMerge(theme.tablist.base, theme.tablist.variant[variant], className),
        ...restProps,
        children: tabs.map((tab, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "button",
          {
            type: "button",
            "aria-controls": `${id}-tabpanel-${index}`,
            "aria-selected": index === activeTab,
            className: twMerge(
              theme.tablist.tabitem.base,
              tabItemStyle.base,
              index === activeTab && tabItemStyle.active.on,
              index !== activeTab && !tab.disabled && tabItemStyle.active.off
            ),
            disabled: tab.disabled,
            id: `${id}-tab-${index}`,
            onClick: () => handleClick({ target: index }),
            onKeyDown: (event) => handleKeyboard({ event, target: index }),
            ref: (element) => {
              tabRefs.current[index] = element;
            },
            role: "tab",
            tabIndex: index === focusedTab ? 0 : -1,
            style: { zIndex: index === focusedTab ? 2 : 1 },
            children: [
              tab.icon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(tab.icon, { className: theme.tablist.tabitem.icon }),
              tab.title
            ]
          },
          index
        ))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: twMerge(theme.tabitemcontainer.base, tabItemContainerStyle), children: tabs.map((tab, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        "aria-labelledby": `${id}-tab-${index}`,
        className: theme.tabpanel,
        hidden: index !== activeTab,
        id: `${id}-tabpanel-${index}`,
        role: "tabpanel",
        tabIndex: 0,
        children: tab.children
      },
      index
    )) })
  ] });
});
Tabs.displayName = "Tabs";

// app/routes/admin/kitchen.foodwaste.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FoodWaste() {
  const {
    week,
    setWeek,
    filteredRecords,
    handleUpdate,
    saveUpdates,
    loading,
    isSaving,
    hasPendingUpdates,
    toast,
    dismissToast
  } = useFoodWasteTable();
  const [isClient, setIsClient] = (0, import_react6.useState)(false);
  (0, import_react6.useEffect)(() => {
    setIsClient(true);
  }, []);
  const rows = filteredRecords.map((item) => ({
    id: item.id,
    weekDay: new Date(item.date).toLocaleDateString("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }),
    numberOfUsers: item.number_of_users,
    plateWaste: item.food_waste,
    totalWaste: item.total_waste
  }));
  const columns = [
    { key: "weekDay", name: "Week Day" },
    { key: "numberOfUsers", name: "Users", editable: true },
    { key: "plateWaste", name: "Plate Waste", editable: true },
    { key: "totalWaste", name: "Total Waste", editable: true }
  ];
  const { start, end } = getWeekDateRange(week);
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
            lineNumber: 57,
            columnNumber: 25
          }, this),
          " ",
          start,
          " - ",
          end
        ] }, void 0, true, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 56,
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
              lineNumber: 60,
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
              lineNumber: 67,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 59,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 55,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          onClick: saveUpdates,
          disabled: !hasPendingUpdates || isSaving,
          className: "px-4 py-1 bg-black text-white rounded",
          children: isSaving ? "Saving..." : "Update"
        },
        void 0,
        false,
        {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 79,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 54,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Toa,
      {
        message: toast.message,
        type: toast.type,
        onClose: dismissToast
      },
      void 0,
      false,
      {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 89,
        columnNumber: 17
      },
      this
    ),
    loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Loading\u2026" }, void 0, false, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 97,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full border-collapse border border-gray-300 text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-100", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border p-2 text-left", children: "Week Day" }, void 0, false, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 102,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border p-2 text-left", children: "Users" }, void 0, false, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 103,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border p-2 text-left", children: "Plate Waste (g)" }, void 0, false, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 104,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "border p-2 text-left", children: "Total Waste (g)" }, void 0, false, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 105,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 101,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 100,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => {
        const record = rows.find((r) => r.weekDay.startsWith(day));
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border p-2", children: day }, void 0, false, {
            fileName: "app/routes/admin/kitchen.foodwaste.jsx",
            lineNumber: 114,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "number",
              value: record?.numberOfUsers || "",
              onChange: (e) => handleUpdate(record?.id, {
                number_of_users: Number(e.target.value)
              }),
              className: "w-full border px-1 py-1 rounded"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/kitchen.foodwaste.jsx",
              lineNumber: 117,
              columnNumber: 41
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/kitchen.foodwaste.jsx",
            lineNumber: 116,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "number",
              value: record?.plateWaste || "",
              onChange: (e) => handleUpdate(record?.id, {
                food_waste: Number(e.target.value)
              }),
              className: "w-full border px-1 py-1 rounded"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/kitchen.foodwaste.jsx",
              lineNumber: 130,
              columnNumber: 41
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/kitchen.foodwaste.jsx",
            lineNumber: 129,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "border p-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              type: "number",
              value: record?.totalWaste || "",
              onChange: (e) => handleUpdate(record?.id, {
                total_waste: Number(e.target.value)
              }),
              className: "w-full border px-1 py-1 rounded"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/kitchen.foodwaste.jsx",
              lineNumber: 143,
              columnNumber: 41
            },
            this
          ) }, void 0, false, {
            fileName: "app/routes/admin/kitchen.foodwaste.jsx",
            lineNumber: 142,
            columnNumber: 37
          }, this)
        ] }, day, true, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 113,
          columnNumber: 33
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 109,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 99,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/kitchen.foodwaste.jsx",
    lineNumber: 53,
    columnNumber: 9
  }, this);
}
var kitchen_foodwaste_default = FoodWaste;

export {
  TabItem,
  Tabs,
  kitchen_foodwaste_default
};
//# sourceMappingURL=/build/_shared/chunk-VVPXTE26.js.map
