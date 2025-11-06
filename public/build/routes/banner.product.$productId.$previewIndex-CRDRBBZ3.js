import {
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-EFHXRLPW.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/banner.product.$productId.$previewIndex.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BannerProductPreviewRoute() {
  const data = useLoaderData();
  const navigate = useNavigate();
  (0, import_react2.useEffect)(() => {
    const handler = (e) => {
      if (e.key === "Escape")
        navigate(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50",
      onClick: () => navigate(-1),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "w-[1080px] p-8 max-h-[80vh] overflow-y-auto svg-bg bg-[var(--banner-bg-color)]",
          onClick: (e) => e.stopPropagation(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviewModal, { data }, void 0, false, {
            fileName: "app/routes/banner.product.$productId.$previewIndex.jsx",
            lineNumber: 41,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/routes/banner.product.$productId.$previewIndex.jsx",
          lineNumber: 36,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/routes/banner.product.$productId.$previewIndex.jsx",
      lineNumber: 32,
      columnNumber: 9
    },
    this
  );
}
export {
  BannerProductPreviewRoute as default
};
//# sourceMappingURL=/build/routes/banner.product.$productId.$previewIndex-CRDRBBZ3.js.map
