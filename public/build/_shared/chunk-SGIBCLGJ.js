import {
  Link
} from "/build/_shared/chunk-EFHXRLPW.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/components/PreviewModal.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function PreviewModal({ open, onClose, data, screen, setScreen, screenNumber }) {
  if (!open)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 regular-text",
      onClick: onClose,
      onKeyDown: (e) => {
        if (e.key === "Escape")
          onClose();
      },
      tabIndex: 0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "w-[1080px] p-8 max-h-[80vh] overflow-y-auto svg-bg bg-[var(--banner-bg-color)]",
          onClick: (e) => e.stopPropagation(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 mt-6 justify-end", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setScreen("screen1"), children: "Screen 1" }, void 0, false, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 22,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setScreen("screen2"), children: "Screen 2" }, void 0, false, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 23,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 21,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl bold-text mb-2", children: "THE BRICK" }, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 25,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h6", { className: "text-2xl regular-text mb-6", children: "Lounge & Bar" }, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 29,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "columns-2 gap-x-10 w-full", children: data.map(({ category, products }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "category mb-6 break-inside-avoid", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "bold-text text-lg pb-1 mb-2", children: category }, void 0, false, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 34,
                columnNumber: 33
              }, this),
              products.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center py-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: prod.name }, void 0, false, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 38,
                  columnNumber: 41
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: prod.price }, void 0, false, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 39,
                  columnNumber: 41
                }, this)
              ] }, prod.id, true, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 37,
                columnNumber: 37
              }, this))
            ] }, category, true, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 33,
              columnNumber: 29
            }, this)) }, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 31,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Link,
              {
                to: `/banner/product/1/${screenNumber}`,
                className: "text-blue-600 underline text-sm",
                children: "Open in full preview page \u2192"
              },
              void 0,
              false,
              {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 46,
                columnNumber: 25
              },
              this
            ) }, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 45,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/PreviewModal.jsx",
            lineNumber: 20,
            columnNumber: 17
          }, this)
        },
        void 0,
        false,
        {
          fileName: "app/components/PreviewModal.jsx",
          lineNumber: 17,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/PreviewModal.jsx",
      lineNumber: 10,
      columnNumber: 9
    },
    this
  );
}

export {
  PreviewModal
};
//# sourceMappingURL=/build/_shared/chunk-SGIBCLGJ.js.map
