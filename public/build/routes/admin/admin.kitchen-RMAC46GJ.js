import "/build/_shared/chunk-SRM2YHNG.js";
import "/build/_shared/chunk-37D2R22D.js";
import {
  AdminLayout
} from "/build/_shared/chunk-SSOYZW74.js";
import "/build/_shared/chunk-NNKHU6BE.js";
import "/build/_shared/chunk-TOP7EFOP.js";
import {
  NavLink,
  Outlet
} from "/build/_shared/chunk-BMAPT62A.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/admin/admin.kitchen.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Kitchen() {
  const base = "px-4 py-2 rounded-md font-medium";
  const active = "!bg-[var(--primary-color)] text-white";
  const inactive = "bg-gray-200 text-gray-700 hover:bg-gray-300";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-6 text-[--primary-color]", children: "Kitchen" }, void 0, false, {
      fileName: "app/routes/admin/admin.kitchen.jsx",
      lineNumber: 55,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "cafe", className: ({ isActive }) => `${base} ${isActive ? active : inactive}`, children: "Cafe" }, void 0, false, {
        fileName: "app/routes/admin/admin.kitchen.jsx",
        lineNumber: 58,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: "foodwaste", className: ({ isActive }) => `${base} ${isActive ? active : inactive}`, children: "Food Waste" }, void 0, false, {
        fileName: "app/routes/admin/admin.kitchen.jsx",
        lineNumber: 62,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/admin.kitchen.jsx",
      lineNumber: 57,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/admin/admin.kitchen.jsx",
      lineNumber: 67,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/admin.kitchen.jsx",
    lineNumber: 54,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/admin/admin.kitchen.jsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}
var admin_kitchen_default = Kitchen;
export {
  admin_kitchen_default as default
};
//# sourceMappingURL=/build/routes/admin/admin.kitchen-RMAC46GJ.js.map
