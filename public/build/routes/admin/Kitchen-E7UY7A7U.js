import {
  Link,
  Outlet
} from "/build/_shared/chunk-AR2N75KP.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/admin/Kitchen.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdminLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen flex bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", { className: "w-64 bg-gray-800 text-white flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4 text-2xl font-bold border-b border-gray-700", children: "Admin Panel" }, void 0, false, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "flex-1 p-4 space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/admin/dashboard",
            className: "block px-3 py-2 rounded hover:bg-gray-700",
            children: "Dashboard"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/Kitchen.jsx",
            lineNumber: 14,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/admin/users",
            className: "block px-3 py-2 rounded hover:bg-gray-700",
            children: "Users"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/Kitchen.jsx",
            lineNumber: 20,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/admin/settings",
            className: "block px-3 py-2 rounded hover:bg-gray-700",
            children: "Settings"
          },
          void 0,
          false,
          {
            fileName: "app/routes/admin/Kitchen.jsx",
            lineNumber: 26,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex-1 p-6 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 37,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/Kitchen.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
export {
  AdminLayout as default
};
//# sourceMappingURL=/build/routes/admin/Kitchen-E7UY7A7U.js.map
