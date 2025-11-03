import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-2IWZUQJZ.js";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => [
  { title: "My Remix App" },
  { name: "viewport", content: "width=device-width,initial-scale=1" }
];
var links = () => [];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: "Error" }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/root.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Something went wrong" }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error?.message }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
export {
  ErrorBoundary,
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-ELX37EVD.js.map
