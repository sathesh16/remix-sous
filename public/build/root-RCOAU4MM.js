import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-YYK4W7FF.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/styles/app.css
var app_default = "/build/_assets/app-2EDBTSUT.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [{ rel: "stylesheet", href: app_default }];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Error" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Something went wrong" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error?.message }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  App as default,
  links
};
//# sourceMappingURL=/build/root-RCOAU4MM.js.map
