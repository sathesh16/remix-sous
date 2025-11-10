import {
  kitchen_foodwaste_default
} from "/build/_shared/chunk-5N5GPHJG.js";
import {
  ProductsTable
} from "/build/_shared/chunk-QBM7XDCD.js";
import "/build/_shared/chunk-6D43HBEY.js";
import "/build/_shared/chunk-37D2R22D.js";
import {
  AdminLayout
} from "/build/_shared/chunk-DM2BJK64.js";
import "/build/_shared/chunk-BUC66LPV.js";
import {
  useSearchParams
} from "/build/_shared/chunk-3PAGGNGK.js";
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
function links() {
  return [
    { rel: "stylesheet", href: "https://unpkg.com/react-spreadsheet@0.9.7/dist/react-spreadsheet.css" }
  ];
}
function Kitchen() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "cafe";
  const setTab = (tab) => setSearchParams({ tab });
  const tabBase = "px-4 py-2 rounded-md font-medium transition-colors border";
  const tabActive = "bg-[var(--primary-color)] text-white border-[var(--primary-color)]";
  const tabInactive = "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-semibold mb-4 text-[--primary-color]", children: "Kitchen" }, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 27,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "tablist", "aria-label": "Kitchen sections", className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          role: "tab",
          "aria-selected": activeTab === "cafe",
          className: `${tabBase} ${activeTab === "cafe" ? tabActive : tabInactive}`,
          onClick: () => setTab("cafe"),
          type: "button",
          children: "Cafe"
        },
        void 0,
        false,
        {
          fileName: "app/routes/admin/kitchen.jsx",
          lineNumber: 31,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          role: "tab",
          "aria-selected": activeTab === "foodwaste",
          className: `${tabBase} ${activeTab === "foodwaste" ? tabActive : tabInactive}`,
          onClick: () => setTab("foodwaste"),
          type: "button",
          children: "Food Waste"
        },
        void 0,
        false,
        {
          fileName: "app/routes/admin/kitchen.jsx",
          lineNumber: 41,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "tabpanel", hidden: activeTab !== "cafe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductsTable, {}, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 53,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "tabpanel", hidden: activeTab !== "foodwaste", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(kitchen_foodwaste_default, {}, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 57,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 56,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/kitchen.jsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/admin/kitchen.jsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}
var kitchen_default = Kitchen;
export {
  kitchen_default as default,
  links
};
//# sourceMappingURL=/build/routes/admin/kitchen-WW5M6TXY.js.map
