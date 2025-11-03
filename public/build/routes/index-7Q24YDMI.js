import {
  Link,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-2IWZUQJZ.js";

// app/routes/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => {
  return {
    title: "Welcome | My Remix App",
    description: "A fresh Remix app ready to build on.",
    viewport: "width=device-width,initial-scale=1"
  };
};
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "main",
    {
      style: {
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.5",
        padding: "2rem",
        textAlign: "center"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "\u{1F680} Welcome to Remix!" }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 21,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your app is up and running." }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 22,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { marginTop: "2rem" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/about",
            style: {
              color: "white",
              background: "black",
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              textDecoration: "none"
            },
            children: "Go to About Page"
          },
          void 0,
          false,
          {
            fileName: "app/routes/index.jsx",
            lineNumber: 25,
            columnNumber: 9
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/index.jsx",
          lineNumber: 24,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/routes/index.jsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  );
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-7Q24YDMI.js.map
