import {
  AdminLayout
} from "/build/_shared/chunk-IUMU33OC.js";
import "/build/_shared/chunk-BUC66LPV.js";
import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-EHQZD6O5.js";
import "/build/_shared/chunk-KDSGW5EK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3MN2X4JC.js";
import {
  __toESM,
  require_react
} from "/build/_shared/chunk-L572RSQW.js";

// app/routes/admin/kitchen.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Kitchen() {
  const tabBase = "px-4 py-2 rounded-md font-medium transition-colors border";
  const tabActive = "bg-[var(--primary-color)] text-white border-[var(--primary-color)]";
  const tabInactive = "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-4 text-[--primary-color]", children: "Kitchen" }, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 20,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 19,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "tablist", "aria-label": "Kitchen sections", className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          to: "cafe",
          prefetch: "intent",
          className: ({ isActive }) => `${tabBase} ${isActive ? tabActive : tabInactive}`,
          role: "tab",
          children: "Cafe"
        },
        void 0,
        false,
        {
          fileName: "app/routes/admin/kitchen.jsx",
          lineNumber: 24,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        NavLink,
        {
          to: "foodwaste",
          prefetch: "intent",
          className: ({ isActive }) => `${tabBase} ${isActive ? tabActive : tabInactive}`,
          role: "tab",
          children: "Food Waste"
        },
        void 0,
        false,
        {
          fileName: "app/routes/admin/kitchen.jsx",
          lineNumber: 33,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 23,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 43,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/kitchen.jsx",
    lineNumber: 18,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/admin/kitchen.jsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
var kitchen_default = Kitchen;
export {
  kitchen_default as default
};
//# sourceMappingURL=/build/routes/admin/kitchen-GWQEKW6Z.js.map
