import {
  Link
} from "/build/_shared/chunk-7PVXQNNJ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/routes/admin/_layout.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdminLayout() {
  const [open, setOpen] = (0, import_react2.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "aside",
      {
        className: `bg-gray-800 text-white transition-all duration-300 ${open ? "w-64" : "w-16"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              onClick: () => setOpen(!open),
              className: "p-4 text-white focus:outline-none",
              children: open ? "\u2190" : "\u2192"
            },
            void 0,
            false,
            {
              fileName: "app/routes/admin/_layout.jsx",
              lineNumber: 16,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "p-2 space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/dashboard", className: "block px-3 py-2 hover:bg-gray-700", children: [
              "\u{1F3E0} ",
              open && "Dashboard"
            ] }, void 0, true, {
              fileName: "app/routes/admin/_layout.jsx",
              lineNumber: 24,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/users", className: "block px-3 py-2 hover:bg-gray-700", children: [
              "\u{1F465} ",
              open && "Users"
            ] }, void 0, true, {
              fileName: "app/routes/admin/_layout.jsx",
              lineNumber: 27,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin/_layout.jsx",
            lineNumber: 23,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/routes/admin/_layout.jsx",
        lineNumber: 12,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 p-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outl, {}, void 0, false, {
      fileName: "app/routes/admin/_layout.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/_layout.jsx",
      lineNumber: 34,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/_layout.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
export {
  AdminLayout as default
};
//# sourceMappingURL=/build/routes/admin/_layout-6CKAYDQG.js.map
