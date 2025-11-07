import {
  useLoaderData
} from "/build/_shared/chunk-DAA5O7KX.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// empty-module:../models/banner.server
var require_banner = __commonJS({
  "empty-module:../models/banner.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/banner.product.$productId.$screen.jsx
var import_react2 = __toESM(require_react());
var import_banner = __toESM(require_banner());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BannerProductPreviewRoute() {
  const { productId, screen, previewData } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "w-[1080px] h-[1920px] mx-auto bg-[var(--banner-bg-color)] svg-bg p-8 overflow-hidden",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl bold-text mb-2", children: "THE BRICK" }, void 0, false, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "text-2xl regular-text mb-6", children: "Lounge & Bar" }, void 0, false, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "columns-2 gap-x-10 w-full", children: previewData.map(({ category, products, error, message }) => error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center text-red-400 py-10", children: message }, void 0, false, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 48,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "category mb-6 break-inside-avoid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "bold-text text-lg pb-1 mb-2", children: category }, void 0, false, {
            fileName: "app/routes/banner.product.$productId.$screen.jsx",
            lineNumber: 51,
            columnNumber: 37
          }, this),
          products.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center py-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: prod.name }, void 0, false, {
              fileName: "app/routes/banner.product.$productId.$screen.jsx",
              lineNumber: 54,
              columnNumber: 45
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: prod.price }, void 0, false, {
              fileName: "app/routes/banner.product.$productId.$screen.jsx",
              lineNumber: 55,
              columnNumber: 45
            }, this)
          ] }, prod.id, true, {
            fileName: "app/routes/banner.product.$productId.$screen.jsx",
            lineNumber: 53,
            columnNumber: 41
          }, this))
        ] }, category, true, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 50,
          columnNumber: 33
        }, this)) }, void 0, false, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 45,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 38,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 37,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/banner.product.$productId.$screen.jsx",
      lineNumber: 34,
      columnNumber: 9
    },
    this
  );
}
export {
  BannerProductPreviewRoute as default
};
//# sourceMappingURL=/build/routes/banner.product.$productId.$screen-PS25XRRP.js.map
