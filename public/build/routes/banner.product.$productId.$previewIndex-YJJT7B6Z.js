import "/build/_shared/chunk-SGIBCLGJ.js";
import {
  useLoaderData
} from "/build/_shared/chunk-EFHXRLPW.js";
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

// app/routes/banner.product.$productId.$previewIndex.jsx
var import_react2 = __toESM(require_react());
var import_banner = __toESM(require_banner());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BannerProductPreviewRoute() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "w-[1080px] h-[1920px] mx-auto bg-[var(--banner-bg-color)] svg-bg p-8 overflow-y-auto",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-white text-4xl font-semibold", children: data?.title }, void 0, false, {
          fileName: "app/routes/banner.product.$productId.$previewIndex.jsx",
          lineNumber: 20,
          columnNumber: 17
        }, this),
        data?.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: data.image,
            alt: data.title,
            className: "w-full rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/routes/banner.product.$productId.$previewIndex.jsx",
            lineNumber: 26,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-lg leading-relaxed", children: data?.description }, void 0, false, {
          fileName: "app/routes/banner.product.$productId.$previewIndex.jsx",
          lineNumber: 34,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/banner.product.$productId.$previewIndex.jsx",
        lineNumber: 17,
        columnNumber: 13
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/routes/banner.product.$productId.$previewIndex.jsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  );
}
export {
  BannerProductPreviewRoute as default
};
//# sourceMappingURL=/build/routes/banner.product.$productId.$previewIndex-YJJT7B6Z.js.map
