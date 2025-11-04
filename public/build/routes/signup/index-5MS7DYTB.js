import {
  Input_default,
  PasswordInput_default
} from "/build/_shared/chunk-IW4PJBV3.js";
import {
  Button
} from "/build/_shared/chunk-TOP7EFOP.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-TTVFAFS7.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// node_modules/next/dist/server/web/spec-extension/adapters/reflect.js
var require_reflect = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/reflect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ReflectAdapter", {
      enumerable: true,
      get: function() {
        return ReflectAdapter;
      }
    });
    var ReflectAdapter = class {
      static get(target, prop, receiver) {
        const value = Reflect.get(target, prop, receiver);
        if (typeof value === "function") {
          return value.bind(target);
        }
        return value;
      }
      static set(target, prop, value, receiver) {
        return Reflect.set(target, prop, value, receiver);
      }
      static has(target, prop) {
        return Reflect.has(target, prop);
      }
      static deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop);
      }
    };
  }
});

// node_modules/next/dist/server/web/spec-extension/adapters/headers.js
var require_headers = __commonJS({
  "node_modules/next/dist/server/web/spec-extension/adapters/headers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      ReadonlyHeadersError: function() {
        return ReadonlyHeadersError;
      },
      HeadersAdapter: function() {
        return HeadersAdapter;
      }
    });
    var _reflect = require_reflect();
    var ReadonlyHeadersError = class extends Error {
      constructor() {
        super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers");
      }
      static callable() {
        throw new ReadonlyHeadersError();
      }
    };
    var HeadersAdapter = class extends Headers {
      constructor(headers) {
        super();
        this.headers = new Proxy(headers, {
          get(target, prop, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined")
              return;
            return _reflect.ReflectAdapter.get(target, original, receiver);
          },
          set(target, prop, value, receiver) {
            if (typeof prop === "symbol") {
              return _reflect.ReflectAdapter.set(target, prop, value, receiver);
            }
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            return _reflect.ReflectAdapter.set(target, original ?? prop, value, receiver);
          },
          has(target, prop) {
            if (typeof prop === "symbol")
              return _reflect.ReflectAdapter.has(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined")
              return false;
            return _reflect.ReflectAdapter.has(target, original);
          },
          deleteProperty(target, prop) {
            if (typeof prop === "symbol")
              return _reflect.ReflectAdapter.deleteProperty(target, prop);
            const lowercased = prop.toLowerCase();
            const original = Object.keys(headers).find((o) => o.toLowerCase() === lowercased);
            if (typeof original === "undefined")
              return true;
            return _reflect.ReflectAdapter.deleteProperty(target, original);
          }
        });
      }
      static seal(headers) {
        return new Proxy(headers, {
          get(target, prop, receiver) {
            switch (prop) {
              case "append":
              case "delete":
              case "set":
                return ReadonlyHeadersError.callable;
              default:
                return _reflect.ReflectAdapter.get(target, prop, receiver);
            }
          }
        });
      }
      merge(value) {
        if (Array.isArray(value))
          return value.join(", ");
        return value;
      }
      static from(headers) {
        if (headers instanceof Headers)
          return headers;
        return new HeadersAdapter(headers);
      }
      append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === "string") {
          this.headers[name] = [
            existing,
            value
          ];
        } else if (Array.isArray(existing)) {
          existing.push(value);
        } else {
          this.headers[name] = value;
        }
      }
      delete(name) {
        delete this.headers[name];
      }
      get(name) {
        const value = this.headers[name];
        if (typeof value !== "undefined")
          return this.merge(value);
        return null;
      }
      has(name) {
        return typeof this.headers[name] !== "undefined";
      }
      set(name, value) {
        this.headers[name] = value;
      }
      forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()) {
          callbackfn.call(thisArg, value, name, this);
        }
      }
      *entries() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          const value = this.get(name);
          yield [
            name,
            value
          ];
        }
      }
      *keys() {
        for (const key of Object.keys(this.headers)) {
          const name = key.toLowerCase();
          yield name;
        }
      }
      *values() {
        for (const key of Object.keys(this.headers)) {
          const value = this.get(key);
          yield value;
        }
      }
      [Symbol.iterator]() {
        return this.entries();
      }
    };
  }
});

// node_modules/next/dist/lib/constants.js
var require_constants = __commonJS({
  "node_modules/next/dist/lib/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      NEXT_QUERY_PARAM_PREFIX: function() {
        return NEXT_QUERY_PARAM_PREFIX;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return PRERENDER_REVALIDATE_HEADER;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return NEXT_CACHE_TAGS_HEADER;
      },
      NEXT_CACHE_SOFT_TAGS_HEADER: function() {
        return NEXT_CACHE_SOFT_TAGS_HEADER;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_TAG_MAX_LENGTH;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return NEXT_CACHE_IMPLICIT_TAG_ID;
      },
      CACHE_ONE_YEAR: function() {
        return CACHE_ONE_YEAR;
      },
      MIDDLEWARE_FILENAME: function() {
        return MIDDLEWARE_FILENAME;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return MIDDLEWARE_LOCATION_REGEXP;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return INSTRUMENTATION_HOOK_FILENAME;
      },
      PAGES_DIR_ALIAS: function() {
        return PAGES_DIR_ALIAS;
      },
      DOT_NEXT_ALIAS: function() {
        return DOT_NEXT_ALIAS;
      },
      ROOT_DIR_ALIAS: function() {
        return ROOT_DIR_ALIAS;
      },
      APP_DIR_ALIAS: function() {
        return APP_DIR_ALIAS;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return RSC_MOD_REF_PROXY_ALIAS;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return RSC_ACTION_VALIDATE_ALIAS;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return RSC_ACTION_PROXY_ALIAS;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return SSG_GET_INITIAL_PROPS_CONFLICT;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return SERVER_PROPS_SSG_CONFLICT;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return SERVER_PROPS_EXPORT_ERROR;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return GSP_NO_RETURNED_VALUE;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return GSSP_NO_RETURNED_VALUE;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return UNSTABLE_REVALIDATE_RENAME_ERROR;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return GSSP_COMPONENT_MEMBER_ERROR;
      },
      NON_STANDARD_NODE_ENV: function() {
        return NON_STANDARD_NODE_ENV;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return SSG_FALLBACK_EXPORT_ERROR;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return ESLINT_DEFAULT_DIRS;
      },
      ESLINT_PROMPT_VALUES: function() {
        return ESLINT_PROMPT_VALUES;
      },
      SERVER_RUNTIME: function() {
        return SERVER_RUNTIME;
      },
      WEBPACK_LAYERS: function() {
        return WEBPACK_LAYERS;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return WEBPACK_RESOURCE_QUERIES;
      }
    });
    var NEXT_QUERY_PARAM_PREFIX = "nxtP";
    var PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
    var PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
    var NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
    var NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
    var NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
    var NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
    var NEXT_CACHE_TAG_MAX_LENGTH = 256;
    var NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
    var NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
    var CACHE_ONE_YEAR = 31536e3;
    var MIDDLEWARE_FILENAME = "middleware";
    var MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
    var INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
    var PAGES_DIR_ALIAS = "private-next-pages";
    var DOT_NEXT_ALIAS = "private-dot-next";
    var ROOT_DIR_ALIAS = "private-next-root-dir";
    var APP_DIR_ALIAS = "private-next-app-dir";
    var RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
    var RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
    var RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
    var RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
    var PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
    var SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
    var SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
    var SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
    var STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
    var SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
    var GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
    var GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
    var UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.";
    var GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
    var NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
    var SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
    var ESLINT_DEFAULT_DIRS = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ];
    var ESLINT_PROMPT_VALUES = [
      {
        title: "Strict",
        recommended: true,
        config: {
          extends: "next/core-web-vitals"
        }
      },
      {
        title: "Base",
        config: {
          extends: "next"
        }
      },
      {
        title: "Cancel",
        config: null
      }
    ];
    var SERVER_RUNTIME = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    };
    var WEBPACK_LAYERS_NAMES = {
      shared: "shared",
      reactServerComponents: "rsc",
      serverSideRendering: "ssr",
      actionBrowser: "action-browser",
      api: "api",
      middleware: "middleware",
      edgeAsset: "edge-asset",
      appPagesBrowser: "app-pages-browser",
      appMetadataRoute: "app-metadata-route",
      appRouteHandler: "app-route-handler"
    };
    var WEBPACK_LAYERS = {
      ...WEBPACK_LAYERS_NAMES,
      GROUP: {
        server: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.appMetadataRoute,
          WEBPACK_LAYERS_NAMES.appRouteHandler
        ],
        nonClientServerTarget: [
          WEBPACK_LAYERS_NAMES.middleware,
          WEBPACK_LAYERS_NAMES.api
        ],
        app: [
          WEBPACK_LAYERS_NAMES.reactServerComponents,
          WEBPACK_LAYERS_NAMES.actionBrowser,
          WEBPACK_LAYERS_NAMES.appMetadataRoute,
          WEBPACK_LAYERS_NAMES.appRouteHandler,
          WEBPACK_LAYERS_NAMES.serverSideRendering,
          WEBPACK_LAYERS_NAMES.appPagesBrowser
        ]
      }
    };
    var WEBPACK_RESOURCE_QUERIES = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  }
});

// node_modules/next/dist/compiled/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/next/dist/compiled/cookie/index.js"(exports, module) {
    (() => {
      "use strict";
      if (typeof __nccwpck_require__ !== "undefined")
        __nccwpck_require__.ab = __dirname + "/";
      var e = {};
      (() => {
        var r = e;
        r.parse = parse;
        r.serialize = serialize;
        var i = decodeURIComponent;
        var t = encodeURIComponent;
        var a = /; */;
        var n = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
        function parse(e2, r2) {
          if (typeof e2 !== "string") {
            throw new TypeError("argument str must be a string");
          }
          var t2 = {};
          var n2 = r2 || {};
          var o = e2.split(a);
          var s = n2.decode || i;
          for (var p = 0; p < o.length; p++) {
            var f = o[p];
            var u = f.indexOf("=");
            if (u < 0) {
              continue;
            }
            var v = f.substr(0, u).trim();
            var c = f.substr(++u, f.length).trim();
            if ('"' == c[0]) {
              c = c.slice(1, -1);
            }
            if (void 0 == t2[v]) {
              t2[v] = tryDecode(c, s);
            }
          }
          return t2;
        }
        function serialize(e2, r2, i2) {
          var a2 = i2 || {};
          var o = a2.encode || t;
          if (typeof o !== "function") {
            throw new TypeError("option encode is invalid");
          }
          if (!n.test(e2)) {
            throw new TypeError("argument name is invalid");
          }
          var s = o(r2);
          if (s && !n.test(s)) {
            throw new TypeError("argument val is invalid");
          }
          var p = e2 + "=" + s;
          if (null != a2.maxAge) {
            var f = a2.maxAge - 0;
            if (isNaN(f) || !isFinite(f)) {
              throw new TypeError("option maxAge is invalid");
            }
            p += "; Max-Age=" + Math.floor(f);
          }
          if (a2.domain) {
            if (!n.test(a2.domain)) {
              throw new TypeError("option domain is invalid");
            }
            p += "; Domain=" + a2.domain;
          }
          if (a2.path) {
            if (!n.test(a2.path)) {
              throw new TypeError("option path is invalid");
            }
            p += "; Path=" + a2.path;
          }
          if (a2.expires) {
            if (typeof a2.expires.toUTCString !== "function") {
              throw new TypeError("option expires is invalid");
            }
            p += "; Expires=" + a2.expires.toUTCString();
          }
          if (a2.httpOnly) {
            p += "; HttpOnly";
          }
          if (a2.secure) {
            p += "; Secure";
          }
          if (a2.sameSite) {
            var u = typeof a2.sameSite === "string" ? a2.sameSite.toLowerCase() : a2.sameSite;
            switch (u) {
              case true:
                p += "; SameSite=Strict";
                break;
              case "lax":
                p += "; SameSite=Lax";
                break;
              case "strict":
                p += "; SameSite=Strict";
                break;
              case "none":
                p += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return p;
        }
        function tryDecode(e2, r2) {
          try {
            return r2(e2);
          } catch (r3) {
            return e2;
          }
        }
      })();
      module.exports = e;
    })();
  }
});

// node_modules/next/dist/server/api-utils/index.js
var require_api_utils = __commonJS({
  "node_modules/next/dist/server/api-utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: all[name]
        });
    }
    _export(exports, {
      sendStatusCode: function() {
        return sendStatusCode;
      },
      redirect: function() {
        return redirect2;
      },
      checkIsOnDemandRevalidate: function() {
        return checkIsOnDemandRevalidate;
      },
      COOKIE_NAME_PRERENDER_BYPASS: function() {
        return COOKIE_NAME_PRERENDER_BYPASS;
      },
      COOKIE_NAME_PRERENDER_DATA: function() {
        return COOKIE_NAME_PRERENDER_DATA;
      },
      RESPONSE_LIMIT_DEFAULT: function() {
        return RESPONSE_LIMIT_DEFAULT;
      },
      SYMBOL_PREVIEW_DATA: function() {
        return SYMBOL_PREVIEW_DATA;
      },
      SYMBOL_CLEARED_COOKIES: function() {
        return SYMBOL_CLEARED_COOKIES;
      },
      clearPreviewData: function() {
        return clearPreviewData;
      },
      ApiError: function() {
        return ApiError;
      },
      sendError: function() {
        return sendError;
      },
      setLazyProp: function() {
        return setLazyProp;
      }
    });
    var _headers = require_headers();
    var _constants = require_constants();
    function sendStatusCode(res, statusCode) {
      res.statusCode = statusCode;
      return res;
    }
    function redirect2(res, statusOrUrl, url) {
      if (typeof statusOrUrl === "string") {
        url = statusOrUrl;
        statusOrUrl = 307;
      }
      if (typeof statusOrUrl !== "number" || typeof url !== "string") {
        throw new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`);
      }
      res.writeHead(statusOrUrl, {
        Location: url
      });
      res.write(url);
      res.end();
      return res;
    }
    function checkIsOnDemandRevalidate(req, previewProps) {
      const headers = _headers.HeadersAdapter.from(req.headers);
      const previewModeId = headers.get(_constants.PRERENDER_REVALIDATE_HEADER);
      const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
      const revalidateOnlyGenerated = headers.has(_constants.PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER);
      return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
      };
    }
    var COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
    var COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
    var RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
    var SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
    var SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
    function clearPreviewData(res, options = {}) {
      if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
      }
      const { serialize } = require_cookie();
      const previous = res.getHeader("Set-Cookie");
      res.setHeader(`Set-Cookie`, [
        ...typeof previous === "string" ? [
          previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, "", {
          expires: new Date(0),
          httpOnly: true,
          sameSite: false ? "none" : "lax",
          secure: false,
          path: "/",
          ...options.path !== void 0 ? {
            path: options.path
          } : void 0
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, "", {
          expires: new Date(0),
          httpOnly: true,
          sameSite: false ? "none" : "lax",
          secure: false,
          path: "/",
          ...options.path !== void 0 ? {
            path: options.path
          } : void 0
        })
      ]);
      Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
      });
      return res;
    }
    var ApiError = class extends Error {
      constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
      }
    };
    function sendError(res, statusCode, message) {
      res.statusCode = statusCode;
      res.statusMessage = message;
      res.end(message);
    }
    function setLazyProp({ req }, prop, getter) {
      const opts = {
        configurable: true,
        enumerable: true
      };
      const optsReset = {
        ...opts,
        writable: true
      };
      Object.defineProperty(req, prop, {
        ...opts,
        get: () => {
          const value = getter();
          Object.defineProperty(req, prop, {
            ...optsReset,
            value
          });
          return value;
        },
        set: (value) => {
          Object.defineProperty(req, prop, {
            ...optsReset,
            value
          });
        }
      });
    }
  }
});

// app/routes/signup/index.jsx
var import_react2 = __toESM(require_react());

// app/components/ImagesUpload.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ImagesUpload({ name = "default-name" }) {
  const [images, setImages] = (0, import_react.useState)([]);
  const [error, setError] = (0, import_react.useState)("");
  const [isDragging, setIsDragging] = (0, import_react.useState)(false);
  const maxSize = 2 * 1024 * 1024;
  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const validFiles = fileArray.filter((file) => {
      if (file.size > maxSize) {
        setError(`${file.name} is larger than 2 MB`);
        return false;
      }
      return true;
    });
    const newImages = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages((prev) => [...prev, ...newImages]);
  };
  const handleImageChange = (e) => {
    handleFiles(e.target.files);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  (0, import_react.useEffect)(() => {
    return () => images.forEach((img) => URL.revokeObjectURL(img.preview));
  }, [images]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        style: {
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: isDragging ? "2px dashed red" : "1px solid #000",
          margin: "10px auto",
          maxWidth: "500px"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
          "Drag & Drop your images here or",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-blue-600 cursor-pointer underline", children: [
            "click to browse",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "file",
                name,
                multiple: true,
                accept: ".jpg, .png",
                onChange: handleImageChange,
                className: "hidden"
              },
              void 0,
              false,
              {
                fileName: "app/components/ImagesUpload.jsx",
                lineNumber: 78,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/ImagesUpload.jsx",
            lineNumber: 76,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ImagesUpload.jsx",
          lineNumber: 74,
          columnNumber: 17
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ImagesUpload.jsx",
        lineNumber: 60,
        columnNumber: 13
      },
      this
    ),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 mt-2", children: error }, void 0, false, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 91,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "relative",
        style: { display: "flex", gap: "20px", flexDirection: "column" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: img.preview,
              alt: `preview ${index}`,
              style: { width: "100px", height: "100px", objectFit: "cover" }
            },
            void 0,
            false,
            {
              fileName: "app/components/ImagesUpload.jsx",
              lineNumber: 101,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: () => setImages(images.filter((_, i) => i !== index)),
              children: "Remove"
            },
            void 0,
            false,
            {
              fileName: "app/components/ImagesUpload.jsx",
              lineNumber: 106,
              columnNumber: 25
            },
            this
          )
        ]
      },
      index,
      true,
      {
        fileName: "app/components/ImagesUpload.jsx",
        lineNumber: 96,
        columnNumber: 21
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 94,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ImagesUpload.jsx",
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

// app/routes/signup/index.jsx
var import_api_utils = __toESM(require_api_utils());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SignUp() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "SignUp",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 104,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-red-500 text-sm", children: actionData.error }, void 0, false, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 108,
      columnNumber: 17
    }, this),
    actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-red-500 text-sm", children: "okay" }, void 0, false, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", onSubmit: () => console.log("Form submitted"), className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input_default, { type: "name", name: "first-name", required: true, placeholder: "Enter your first name" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input_default, { type: "name", name: "last-name", required: true, placeholder: "Enter your last name" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 119,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input_default, { type: "email", required: true, name: "email", placeholder: "Email" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Upload your image" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 123,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImagesUpload, { name: "avatar" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 125,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", required: true, name: "password" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 127,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PasswordInput_default, { placeholder: "Confirm password", required: true, name: "confirm-password" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 129,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", children: "Sign up" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 131,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 115,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup/index.jsx",
    lineNumber: 100,
    columnNumber: 9
  }, this);
}
var signup_default = SignUp;
export {
  signup_default as default
};
//# sourceMappingURL=/build/routes/signup/index-5MS7DYTB.js.map
