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
  const hasError = previewData.some((item) => item.error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "w-[1080px] h-[1920px] mx-auto bg-[var(--banner-bg-color)] svg-bg p-8 overflow-hidden",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: hasError ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 40,
        columnNumber: 34
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, false, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 42,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/banner.product.$productId.$screen.jsx",
      lineNumber: 35,
      columnNumber: 9
    },
    this
  );
}
export {
  BannerProductPreviewRoute as default
};
//# sourceMappingURL=/build/routes/banner.product.$productId.$screen-5A5DL5EZ.js.map
