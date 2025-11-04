import "/build/_shared/chunk-TOP7EFOP.js";
import {
  Link
} from "/build/_shared/chunk-AR2N75KP.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/admin/Kitchen.jsx
var import_react3 = __toESM(require_react());

// app/components/AdminLayout.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdminLayout({ children }) {
  const [open, setOpen] = (0, import_react2.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "aside",
      {
        className: `bg-gray-800 absolute top-0 h-full text-white transition-all duration-300 ${open ? "w-64" : "w-64"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/iss_logo.webp", alt: "", className: "logo" }, void 0, false, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 16,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 15,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: () => setOpen(!open),
              className: "p-4 text-white focus:outline-none",
              children: "\u2190"
            },
            void 0,
            false,
            {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 20,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "p-2 space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin", className: "block px-3 py-2 hover:bg-gray-700" }, void 0, false, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 29,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/kitchen", className: "block px-3 py-2 hover:bg-gray-700", children: "Kitchen" }, void 0, false, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 32,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 28,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/AdminLayout.jsx",
        lineNumber: 10,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 p-6 overflow-y-auto", children }, void 0, false, {
      fileName: "app/components/AdminLayout.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AdminLayout.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

// app/routes/admin/Kitchen.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Kitchen() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "This is kitchen" }, void 0, false, {
    fileName: "app/routes/admin/Kitchen.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/admin/Kitchen.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var Kitchen_default = Kitchen;
export {
  Kitchen_default as default
};
//# sourceMappingURL=/build/routes/admin/Kitchen-XKRFYM25.js.map
