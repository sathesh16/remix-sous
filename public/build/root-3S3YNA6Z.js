import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-WO46FJ2D.js";

// app/styles/app.css
var app_default = "/build/_assets/app-FQAJIF2C.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [{ rel: "stylesheet", href: app_default }];
var meta = () => [
  { charset: "utf-8" },
  { title: "My Remix App" },
  { name: "viewport", content: "width=device-width, initial-scale=1" }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Error" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Something went wrong" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 45,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error?.message }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-3S3YNA6Z.js.map
