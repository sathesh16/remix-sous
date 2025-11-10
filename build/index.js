var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-H2ICRZE3.css";

// app/styles/style.css
var style_default = "/build/_assets/style-U2NQEYYJ.css";

// app/root.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }, { rel: "stylesheet", href: style_default }], meta = () => ({
  charset: "utf-8",
  title: "Sous chef",
  viewport: "width=device-width, initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "font-dm9pt", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Something went wrong" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error == null ? void 0 : error.message }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)();
  return caught.status === 404 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-4xl font-bold", children: "404" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-lg", children: "Page Not Found" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: [
    "Error: ",
    caught.status
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
}

// app/routes/banner.product.$productId.$screen.jsx
var banner_product_productId_screen_exports = {};
__export(banner_product_productId_screen_exports, {
  default: () => BannerProductPreviewRoute,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_react4 = require("react");

// app/utils/constants.js
var API_BASE_URL = "http://192.168.1.51:8056";

// app/models/banner.server.js
async function fetchCategoriesAndProducts() {
  let [catRes, prodRes] = await Promise.all([
    fetch(`${API_BASE_URL}/items/Products`).then((res) => res.json()),
    fetch(`${API_BASE_URL}/items/Product_list`).then((res) => res.json())
  ]);
  return {
    categories: catRes.data || [],
    products: prodRes.data || []
  };
}
async function getPreviewData(screen) {
  let { categories, products } = await fetchCategoriesAndProducts(), filtered = categories.map((cat) => {
    let filteredProducts = products.filter(
      (p) => cat.product_list.includes(p.id) && (screen === "1" ? p.display_on_screen_1 : p.display_on_screen_2)
    );
    return filteredProducts.length === 0 ? null : {
      category: cat.name,
      products: filteredProducts
    };
  }).filter(Boolean);
  return filtered.length === 0 ? [
    {
      error: !0,
      message: "No products found for this screen.",
      category: null,
      products: []
    }
  ] : filtered;
}

// app/routes/banner.product.$productId.$screen.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
async function loader({ params }) {
  let previewData = await getPreviewData(params.screen), { productId, screen } = params;
  if (productId !== "1")
    throw new Response("Not Found", { status: 404 });
  if (!["1", "2"].includes(screen))
    throw new Response("Not Found", { status: 404 });
  return {
    productId,
    screen,
    previewData
  };
}
function BannerProductPreviewRoute() {
  let { productId, screen, previewData } = (0, import_react3.useLoaderData)(), hasError = previewData.some((item) => item.error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      className: "w-[1080px] h-[1920px] mx-auto bg-[var(--banner-bg-color)] svg-bg p-8 overflow-hidden",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "p-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: hasError ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, !1, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 40,
        columnNumber: 34
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-4xl bold-text mb-2", children: "THE BRICK" }, void 0, !1, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 43,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "text-2xl regular-text mb-6", children: "Lounge & Bar" }, void 0, !1, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 47,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "columns-2 gap-x-10 w-full", children: previewData.map(({ category, products, error, message }) => error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center text-red-400 py-10", children: message }, void 0, !1, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 52,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "category mb-6 break-inside-avoid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "bold-text text-lg pb-1 mb-2", children: category }, void 0, !1, {
            fileName: "app/routes/banner.product.$productId.$screen.jsx",
            lineNumber: 55,
            columnNumber: 45
          }, this),
          products.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center py-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: prod.name }, void 0, !1, {
              fileName: "app/routes/banner.product.$productId.$screen.jsx",
              lineNumber: 58,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: prod.price }, void 0, !1, {
              fileName: "app/routes/banner.product.$productId.$screen.jsx",
              lineNumber: 59,
              columnNumber: 53
            }, this)
          ] }, prod.id, !0, {
            fileName: "app/routes/banner.product.$productId.$screen.jsx",
            lineNumber: 57,
            columnNumber: 49
          }, this))
        ] }, category, !0, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 54,
          columnNumber: 41
        }, this)) }, void 0, !1, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 49,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 42,
        columnNumber: 28
      }, this) }, void 0, !1, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 39,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/banner.product.$productId.$screen.jsx",
        lineNumber: 38,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/banner.product.$productId.$screen.jsx",
      lineNumber: 35,
      columnNumber: 9
    },
    this
  );
}

// app/routes/admin/kitchen.foodwaste.jsx
var kitchen_foodwaste_exports = {};
__export(kitchen_foodwaste_exports, {
  default: () => kitchen_foodwaste_default,
  links: () => links2
});
var import_react7 = require("react");

// app/hooks/useFoodWasteTable.js
var import_dayjs = __toESM(require("dayjs"));

// app/lib/foodWaste.js
async function fetchFoodWaste() {
  let response = await fetch(`${API_BASE_URL}/items/Food_waste_information`);
  if (!response.ok)
    throw new Error("Failed to fetch food waste data.");
  let result = await response.json();
  return result.data || result;
}
async function patchFoodWaste(payload) {
  let response = await fetch(`${API_BASE_URL}/items/Food_waste_information`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok)
    throw new Error("Failed to update food waste.");
  return response.json();
}
async function createFoodWaste(items) {
  let response = await fetch(`${API_BASE_URL}/items/Food_waste_information`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(items)
  });
  if (!response.ok)
    throw new Error("Failed to create food waste.");
  return response.json();
}

// app/hooks/useFoodWasteTable.js
var import_weekday = __toESM(require("dayjs/plugin/weekday")), import_weekOfYear = __toESM(require("dayjs/plugin/weekOfYear")), import_react5 = require("react");
import_dayjs.default.extend(import_weekday.default);
import_dayjs.default.extend(import_weekOfYear.default);
function useFoodWasteTable() {
  let [records, setRecords] = (0, import_react5.useState)([]), [updates, setUpdates] = (0, import_react5.useState)({}), [week, setWeek] = (0, import_react5.useState)((0, import_dayjs.default)().week()), [loading, setLoading] = (0, import_react5.useState)(!1), [isSaving, setIsSaving] = (0, import_react5.useState)(!1), [toast, setToast] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
    async function load() {
      setLoading(!0);
      try {
        let data = await fetchFoodWaste();
        setRecords(data);
      } finally {
        setLoading(!1);
      }
    }
    load();
  }, []);
  let filteredRecords = (0, import_react5.useMemo)(() => records.filter((r) => (0, import_dayjs.default)(r.date).week() === Number(week)), [records, week]), showToast = (0, import_react5.useCallback)((message, type = "success") => {
    setToast({ message, type });
  }, []), dismissToast = (0, import_react5.useCallback)(() => setToast(null), []), handleUpdate = (0, import_react5.useCallback)((id, updatedFields) => {
    setRecords(
      (prev) => prev.map((rec) => rec.id === id ? { ...rec, ...updatedFields } : rec)
    ), setUpdates((prev) => ({
      ...prev,
      [id]: { ...prev[id] || {}, ...updatedFields }
    }));
  }, []), getPendingValue = (0, import_react5.useCallback)(
    (id, field, fallback) => {
      let pending = updates[id];
      return pending && Object.prototype.hasOwnProperty.call(pending, field) ? pending[field] : fallback;
    },
    [updates]
  ), saveUpdates = (0, import_react5.useCallback)(async () => {
    if (!Object.keys(updates).length)
      return;
    let toUpdate = [], toCreate = [];
    Object.entries(updates).forEach(([key, data]) => {
      Number(key) ? toUpdate.push({ id: Number(key), ...data }) : toCreate.push(data);
    }), setIsSaving(!0);
    try {
      toUpdate.length > 0 && await patchFoodWaste(toUpdate), toCreate.length > 0 && await createFoodWaste(toCreate), showToast("\u2705 Saved successfully!"), setUpdates({});
    } catch (err) {
      console.error(err), showToast("\u274C Failed to save.", "error");
    } finally {
      setIsSaving(!1);
    }
  }, [updates, showToast]);
  return {
    week,
    setWeek,
    filteredRecords,
    handleUpdate,
    getPendingValue,
    saveUpdates,
    loading,
    isSaving,
    hasPendingUpdates: Object.keys(updates).length > 0,
    toast,
    dismissToast
  };
}

// app/utils/date.js
function getOrdinal(n) {
  let s = ["th", "st", "nd", "rd"], v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}
function getWeekDateRange(weekNumber, year = new Date().getFullYear()) {
  let firstDayOfYear = new Date(year, 0, 1), daysOffset = (weekNumber - 1) * 7, startDate = new Date(firstDayOfYear.getTime() + daysOffset * 864e5), day = startDate.getDay(), diff = (day === 0 ? -6 : 1) - day;
  startDate.setDate(startDate.getDate() + diff);
  let endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 4);
  let startDay = getOrdinal(startDate.getDate()), endDay = getOrdinal(endDate.getDate()), startMonth = startDate.toLocaleString("en-GB", { month: "short" }), endMonth = endDate.toLocaleString("en-GB", { month: "short" });
  return {
    start: `${startDay} ${startMonth}`,
    end: `${endDay} ${endMonth}`
  };
}

// app/components/Toast.jsx
var import_react6 = require("react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Toast({ message, type = "success", onClose }) {
  return (0, import_react6.useEffect)(() => {
    let timer = setTimeout(onClose, 3e3);
    return () => clearTimeout(timer);
  }, [onClose]), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `
      fixed top-4 right-4 px-4 py-3 rounded shadow-lg text-white text-sm animate-fade-in
      ${type === "success" ? "bg-green-600" : type === "warning" ? "bg-orange-500" : "bg-red-600"}

    `, children: message }, void 0, !1, {
    fileName: "app/components/Toast.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/components/Button.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  let styles = `px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring transition ${{
    primary: "bg-[#000022] text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
  }[variant]} ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type, className: styles, ...props, children }, void 0, !1, {
    fileName: "app/components/Button.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/routes/admin/kitchen.foodwaste.jsx
var import_dayjs2 = __toESM(require("dayjs")), import_weekday2 = __toESM(require("dayjs/plugin/weekday")), import_weekOfYear2 = __toESM(require("dayjs/plugin/weekOfYear")), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
import_dayjs2.default.extend(import_weekday2.default);
import_dayjs2.default.extend(import_weekOfYear2.default);
var WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], NUMERIC_FIELD_KEYS = ["number_of_users", "food_waste", "total_waste"];
function links2() {
  return [
    { rel: "stylesheet", href: "https://unpkg.com/react-spreadsheet@0.9.7/dist/react-spreadsheet.css" }
  ];
}
function coerceDisplayValue(value) {
  return value ?? "";
}
function FoodWaste() {
  let {
    week,
    setWeek,
    filteredRecords,
    handleUpdate,
    getPendingValue,
    saveUpdates,
    loading,
    isSaving,
    hasPendingUpdates,
    toast,
    dismissToast
  } = useFoodWasteTable(), [isClient, setIsClient] = (0, import_react7.useState)(!1), [Spreadsheet, setSpreadsheet] = (0, import_react7.useState)(null), [sheetData, setSheetData] = (0, import_react7.useState)([]);
  (0, import_react7.useEffect)(() => {
    setIsClient(!0);
  }, []), (0, import_react7.useEffect)(() => {
    let mounted = !0;
    return import("react-spreadsheet").then((mod) => {
      !mounted || setSpreadsheet(() => mod.default || null);
    }).catch(() => {
    }), () => {
      mounted = !1;
    };
  }, []);
  let { start, end } = getWeekDateRange(week), recordsByDate = (0, import_react7.useMemo)(() => {
    let map = /* @__PURE__ */ new Map();
    return filteredRecords.forEach((item) => {
      let iso = (0, import_dayjs2.default)(item.date).format("YYYY-MM-DD");
      map.set(iso, item);
    }), map;
  }, [filteredRecords]), mondayOfWeek = (0, import_react7.useMemo)(() => (0, import_dayjs2.default)().week(Number(week)).weekday(1), [week]), rowModels = (0, import_react7.useMemo)(() => WEEKDAYS.map((_, idx) => {
    let dateIso = mondayOfWeek.add(idx, "day").format("YYYY-MM-DD"), record = recordsByDate.get(dateIso), key = (record == null ? void 0 : record.id) ?? dateIso;
    return {
      key,
      date: dateIso,
      number_of_users: coerceDisplayValue(getPendingValue(key, "number_of_users", (record == null ? void 0 : record.number_of_users) ?? "")),
      food_waste: coerceDisplayValue(getPendingValue(key, "food_waste", (record == null ? void 0 : record.food_waste) ?? "")),
      total_waste: coerceDisplayValue(getPendingValue(key, "total_waste", (record == null ? void 0 : record.total_waste) ?? ""))
    };
  }), [week, mondayOfWeek, recordsByDate, getPendingValue]);
  (0, import_react7.useEffect)(() => {
    let next = rowModels.map((r) => [
      { value: r.number_of_users },
      { value: r.food_waste },
      { value: r.total_waste }
    ]);
    setSheetData(next);
  }, [rowModels]);
  let columnLabels = (0, import_react7.useMemo)(() => ["Users", "Food Waste (g)", "Total Waste (g)"], []), rowLabels = (0, import_react7.useMemo)(() => WEEKDAYS, []), handleSheetChange = (0, import_react7.useCallback)((newData) => {
    var _a, _b;
    let maxRows = Math.min(newData.length, rowModels.length);
    for (let r = 0; r < maxRows; r++) {
      let prevRow = sheetData[r] || [], nextRow = newData[r] || [], model = rowModels[r];
      for (let c = 0; c < NUMERIC_FIELD_KEYS.length; c++) {
        let prevVal = ((_a = prevRow[c]) == null ? void 0 : _a.value) ?? "", nextVal = ((_b = nextRow[c]) == null ? void 0 : _b.value) ?? "";
        if (prevVal !== nextVal) {
          let field = NUMERIC_FIELD_KEYS[c], parsed = Number(nextVal), normalized = nextVal === "" || nextVal === null || nextVal === void 0 || Number.isNaN(parsed) ? null : parsed;
          handleUpdate(model.key, { date: model.date, [field]: normalized });
        }
      }
    }
    setSheetData(newData);
  }, [sheetData, rowModels, handleUpdate]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between gap-4 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "font-semibold", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-[var(--primary-color)] text-2xl", children: [
            "Week ",
            week,
            " /"
          ] }, void 0, !0, {
            fileName: "app/routes/admin/kitchen.foodwaste.jsx",
            lineNumber: 128,
            columnNumber: 25
          }, this),
          " ",
          start,
          " - ",
          end
        ] }, void 0, !0, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 127,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "button",
            {
              onClick: () => setWeek((prev) => Math.max(prev - 1, 1)),
              className: "px-3 py-1 border rounded hover:bg-gray-100",
              children: "\u2190"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/kitchen.foodwaste.jsx",
              lineNumber: 131,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "button",
            {
              onClick: () => setWeek((prev) => prev + 1),
              className: "px-3 py-1 border rounded hover:bg-gray-100",
              children: "\u2192"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/kitchen.foodwaste.jsx",
              lineNumber: 138,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 130,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 126,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-end items-center mb-6 pos-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mr-4", children: "Remember to update before leaving" }, void 0, !1, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 149,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Button, { onClick: saveUpdates, variant: "primary", disabled: isSaving || !hasPendingUpdates, children: "Update" }, void 0, !1, {
          fileName: "app/routes/admin/kitchen.foodwaste.jsx",
          lineNumber: 150,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 148,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 125,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: dismissToast
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 157,
        columnNumber: 17
      },
      this
    ),
    loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Loading\u2026" }, void 0, !1, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 165,
      columnNumber: 17
    }, this) : isClient && Spreadsheet ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "border border-gray-300 rounded overflow-hidden w-full", style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      Spreadsheet,
      {
        data: sheetData,
        onChange: handleSheetChange,
        columnLabels,
        rowLabels,
        className: "w-full",
        style: { width: "100%" }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/kitchen.foodwaste.jsx",
        lineNumber: 168,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin/kitchen.foodwaste.jsx",
      lineNumber: 167,
      columnNumber: 17
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/routes/admin/kitchen.foodwaste.jsx",
    lineNumber: 124,
    columnNumber: 9
  }, this);
}
var kitchen_foodwaste_default = FoodWaste;

// app/routes/admin/kitchen.cafe.jsx
var kitchen_cafe_exports = {};
__export(kitchen_cafe_exports, {
  default: () => kitchen_cafe_default
});
var import_react15 = require("react");

// app/components/ProductGrid.jsx
var import_react14 = require("react");

// app/components/Toggle.jsx
var import_react8 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Toggle({ apiOn = !1, onToggle }) {
  let [on, setOn] = (0, import_react8.useState)(apiOn);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    "button",
    {
      onClick: () => {
        setOn(!on), onToggle && onToggle(!on);
      },
      className: `w-20 h-8 rounded-full flex items-center px-1 relative transition-all duration-200 ${on ? "bg-[var(--primary-color)]" : "bg-gray-300"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "span",
          {
            className: `absolute left-2 text-sm font-medium transition-all duration-200 ${on ? "text-white" : "text-gray-500"}`,
            children: "On"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Toggle.jsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "span",
          {
            className: `absolute right-2 text-sm font-medium transition-all duration-200 ${on ? "text-[transparent]" : "text-gray-600"}`,
            children: "Off"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Toggle.jsx",
            lineNumber: 23,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "div",
          {
            className: `w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-200 ${on ? "translate-x-12" : "translate-x-0"}`
          },
          void 0,
          !1,
          {
            fileName: "app/components/Toggle.jsx",
            lineNumber: 31,
            columnNumber: 13
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Toggle.jsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  );
}
var Toggle_default = Toggle;

// app/components/PreviewModal.jsx
var import_react11 = require("@remix-run/react"), import_react12 = require("react");

// app/components/CopyLinkButton.jsx
var import_react10 = require("react");

// app/hooks/useClipboard.js
var import_react9 = require("react"), DEFAULT_RESET_DELAY = 2e3;
function useClipboard({ resetDelay = DEFAULT_RESET_DELAY } = {}) {
  let [status, setStatus] = (0, import_react9.useState)("idle"), [error, setError] = (0, import_react9.useState)(null), reset = (0, import_react9.useCallback)(() => {
    setStatus("idle"), setError(null);
  }, []);
  return {
    copy: (0, import_react9.useCallback)(
      async (text) => {
        if (!!text)
          try {
            await navigator.clipboard.writeText(text), setStatus("success"), setError(null);
          } catch (err) {
            console.error("Failed to copy text:", err), setStatus("error"), setError(err instanceof Error ? err.message : "Unknown error");
          } finally {
            resetDelay > 0 && window.setTimeout(reset, resetDelay);
          }
      },
      [reset, resetDelay]
    ),
    status,
    error,
    reset,
    isSuccess: status === "success",
    isError: status === "error"
  };
}
var useClipboard_default = useClipboard;

// app/utils/url.js
function buildAbsoluteUrl(relativePath, baseUrl) {
  if (!relativePath)
    throw new Error("relativePath is required to build an absolute URL");
  if (!baseUrl)
    throw new Error("baseUrl is required to build an absolute URL");
  return new URL(relativePath, baseUrl).href;
}

// app/components/CopyLinkButton.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function CopyLinkButton({ screenNumber }) {
  let clipboard = useClipboard_default({ resetDelay: 2e3 }), linkToCopy = (0, import_react10.useMemo)(() => {
    let { origin } = window.location;
    return buildAbsoluteUrl(`/banner/product/1/${screenNumber}`, origin);
  }, [screenNumber]), label = clipboard.status === "success" ? "Copied!" : clipboard.status === "error" ? "Failed to copy" : "Copy Link";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "button",
    {
      onClick: () => clipboard.copy(linkToCopy),
      className: "bg-[var(--banner-text-color)] text-[var(--banner-bg-color)] text-sm p-2",
      disabled: clipboard.status === "success",
      children: label
    },
    void 0,
    !1,
    {
      fileName: "app/components/CopyLinkButton.jsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
}
var CopyLinkButton_default = CopyLinkButton;

// app/components/PreviewModal.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function PreviewModal({ open, onClose, data, screen, setScreen, screenNumber }) {
  if (!open)
    return null;
  let hasError = data.some((item) => item.error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 regular-text",
      onClick: onClose,
      onKeyDown: (e) => {
        e.key === "Escape" && onClose();
      },
      tabIndex: 0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        "div",
        {
          className: "w-[1080px] p-8 max-h-[80vh] min-h-[70vh] overflow-y-auto svg-bg bg-[var(--banner-bg-color)]",
          onClick: (e) => e.stopPropagation(),
          children: [
            hasError ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, {}, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 23,
              columnNumber: 33
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex gap-3 mt-6 justify-end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => setScreen("screen1") }, void 0, !1, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 26,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => setScreen("screen2"), children: "next" }, void 0, !1, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 27,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 25,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-4xl bold-text mb-2", children: "THE BRICK" }, void 0, !1, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 29,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h6", { className: "text-2xl regular-text mb-6", children: "Lounge & Bar" }, void 0, !1, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 33,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "columns-2 gap-x-10 w-full", children: data.map(({ category, products }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "category mb-6 break-inside-avoid", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "bold-text text-lg pb-1 mb-2", children: category }, void 0, !1, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 38,
                  columnNumber: 41
                }, this),
                products.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-between items-center py-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: prod.name }, void 0, !1, {
                    fileName: "app/components/PreviewModal.jsx",
                    lineNumber: 42,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: prod.price }, void 0, !1, {
                    fileName: "app/components/PreviewModal.jsx",
                    lineNumber: 43,
                    columnNumber: 49
                  }, this)
                ] }, prod.id, !0, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 41,
                  columnNumber: 45
                }, this))
              ] }, category, !0, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 37,
                columnNumber: 37
              }, this)) }, void 0, !1, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 35,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 24,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 23,
              columnNumber: 43
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "menu-wrapper p-6 pt-32 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(CopyLinkButton_default, { screenNumber }, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 78,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 77,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 52,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/PreviewModal.jsx",
          lineNumber: 19,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/PreviewModal.jsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/hooks/useProductsTable.js
var import_react13 = require("react");

// app/lib/products.js
async function fetchCategoriesAndProducts2() {
  let [categoriesResponse, productsResponse] = await Promise.all([
    fetch(`${API_BASE_URL}/items/Products`),
    fetch(`${API_BASE_URL}/items/Product_list`)
  ]);
  if (!categoriesResponse.ok || !productsResponse.ok)
    throw new Error("Failed to fetch product data.");
  let [categories, products] = await Promise.all([
    categoriesResponse.json(),
    productsResponse.json()
  ]), categoriesData = (categories.data || []).slice().sort(
    (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
  ), productsData = (products.data || []).slice().sort(
    (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
  );
  return {
    categories: categoriesData,
    products: productsData
  };
}
async function patchProducts(payload) {
  let response = await fetch(`${API_BASE_URL}/items/Product_list`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    let error = await response.text();
    throw new Error(error || "Failed to save products.");
  }
  return response.json();
}

// app/utils/preview.js
function buildPreviewData(categories = [], products = [], screen = "screen1") {
  if (!Array.isArray(categories) || !Array.isArray(products))
    return [
      {
        error: !0,
        message: "Invalid data supplied.",
        category: null,
        products: []
      }
    ];
  let screenKey = screen === "screen2" ? "display_on_screen_2" : "display_on_screen_1", filtered = categories.map((category) => {
    let categoryProductIds = new Set((category == null ? void 0 : category.product_list) || []), filteredProducts = products.filter(
      (product) => categoryProductIds.has(product.id) && Boolean(product == null ? void 0 : product[screenKey])
    );
    return filteredProducts.length === 0 ? null : {
      category: category.name,
      products: filteredProducts
    };
  }).filter(Boolean);
  return filtered.length === 0 ? [
    {
      error: !0,
      message: "No products found for this screen.",
      category: null,
      products: []
    }
  ] : filtered;
}

// app/hooks/useProductsTable.js
function useProductsTable() {
  let [categories, setCategories] = (0, import_react13.useState)([]), [products, setProducts] = (0, import_react13.useState)([]), [updates, setUpdates] = (0, import_react13.useState)({}), [toast, setToast] = (0, import_react13.useState)(null), [loading, setLoading] = (0, import_react13.useState)(!1), [error, setError] = (0, import_react13.useState)(null), [isSaving, setIsSaving] = (0, import_react13.useState)(!1);
  (0, import_react13.useEffect)(() => {
    let isMounted = !0;
    async function loadData() {
      setLoading(!0);
      try {
        let data = await fetchCategoriesAndProducts2();
        if (!isMounted)
          return;
        setCategories(data.categories), setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err), isMounted && setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        isMounted && setLoading(!1);
      }
    }
    return loadData(), () => {
      isMounted = !1;
    };
  }, []);
  let showToast = (0, import_react13.useCallback)((message, type = "success") => {
    setToast({ message, type });
  }, []), dismissToast = (0, import_react13.useCallback)(() => setToast(null), []), handleProductUpdate = (0, import_react13.useCallback)((productId, updatedFields) => {
    setProducts(
      (prev) => prev.map(
        (product) => product.id === productId ? { ...product, ...updatedFields } : product
      )
    ), setUpdates((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId] || {},
        ...updatedFields
      }
    }));
  }, []), saveAllUpdates = (0, import_react13.useCallback)(async () => {
    let payload = Object.entries(updates).map(([id, data]) => ({
      id,
      ...data
    }));
    if (payload.length === 0) {
      showToast("Kindly change any value to update", "warning");
      return;
    }
    setIsSaving(!0);
    try {
      await patchProducts(payload), showToast("\u2705 Changes saved successfully!"), setUpdates({});
    } catch (err) {
      console.error("Failed to save products:", err), showToast("\u274C Failed to save changes.", "error");
    } finally {
      setIsSaving(!1);
    }
  }, [showToast, updates]), getProductsForCategory = (0, import_react13.useCallback)(
    (category) => {
      if (!category)
        return [];
      let productIds = new Set(category.product_list || []);
      return products.filter((product) => productIds.has(product.id));
    },
    [products]
  ), previewDataForScreen = (0, import_react13.useCallback)(
    (screen) => buildPreviewData(categories, products, screen),
    [categories, products]
  ), hasPendingUpdates = (0, import_react13.useMemo)(() => Object.keys(updates).length > 0, [updates]);
  return {
    categories,
    products,
    getProductsForCategory,
    handleProductUpdate,
    saveAllUpdates,
    toast,
    showToast,
    dismissToast,
    loading,
    error,
    isSaving,
    hasPendingUpdates,
    previewDataForScreen
  };
}
var useProductsTable_default = useProductsTable;

// app/components/ProductGrid.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ProductsTable() {
  let {
    categories,
    getProductsForCategory,
    handleProductUpdate,
    saveAllUpdates,
    toast,
    dismissToast,
    loading,
    error,
    isSaving,
    previewDataForScreen
  } = useProductsTable_default(), [showPreviewModal, setShowPreviewModal] = (0, import_react14.useState)(!1), [previewScreen, setPreviewScreen] = (0, import_react14.useState)("screen1"), previewData = (0, import_react14.useMemo)(
    () => previewDataForScreen(previewScreen),
    [previewDataForScreen, previewScreen]
  );
  return loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "p-6", children: "Loading products\u2026" }, void 0, !1, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 31,
    columnNumber: 16
  }, this) : error ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "p-6 text-red-600", children: error }, void 0, !1, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 35,
    columnNumber: 16
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "p-6 bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-end items-center mb-6 pos-top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mr-4", children: "Remember to update before leaving" }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { onClick: saveAllUpdates, variant: "primary", disabled: isSaving, children: isSaving ? "Saving..." : "Update" }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex justify-end items-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      Button,
      {
        variant: "secondary",
        onClick: () => {
          setPreviewScreen("screen1"), setShowPreviewModal(!0);
        },
        children: "Preview"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 48,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden border border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("table", { className: "min-w-full border-collapse text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("thead", { className: "bg-gray-900 text-white font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "th",
          {
            className: "p-3 border border-gray-300 text-left",
            children: [
              "Category",
              " "
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 64,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "th",
          {
            className: "p-3 border border-gray-300 text-left",
            children: [
              "Product Name",
              " "
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 69,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Description" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 75,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Price" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 76,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Display Screen 1" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 77,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Display Screen 2" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 78,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 63,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 62,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: categories.map((category) => {
        let categoryProducts = getProductsForCategory(category);
        return categoryProducts.map((product, index) => {
          var _a, _b;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("tr", { className: "border-b hover:bg-gray-50", children: [
            index === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              "td",
              {
                rowSpan: categoryProducts.length,
                className: "font-semibold text-gray-900 border-r p-3 align-top",
                children: category.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 92,
                columnNumber: 41
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-3 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col gap-y-4 w-[300px] h-[150px] justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "textarea",
                {
                  value: product.name || "",
                  maxLength: 250,
                  onChange: (e) => handleProductUpdate(product.id, {
                    name: e.target.value
                  }),
                  className: "w-full border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar h-[100px]"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProductGrid.jsx",
                  lineNumber: 103,
                  columnNumber: 45
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-gray-600", children: [
                "Upto ",
                ((_a = product.name) == null ? void 0 : _a.length) || 0,
                " / 250 characters"
              ] }, void 0, !0, {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 113,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 102,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 101,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col gap-y-4 w-[300px] h-[150px] justify-between", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "textarea",
                {
                  value: product.description || "",
                  maxLength: 250,
                  onChange: (e) => handleProductUpdate(product.id, {
                    description: e.target.value
                  }),
                  className: "w-full border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar h-[100px]"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProductGrid.jsx",
                  lineNumber: 120,
                  columnNumber: 45
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-gray-600", children: [
                "Upto ",
                ((_b = product.description) == null ? void 0 : _b.length) || 0,
                " /     250 characters"
              ] }, void 0, !0, {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 130,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 119,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 118,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-3 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex flex-col gap-y-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "input",
                {
                  type: "text",
                  value: product.price ?? "",
                  onChange: (e) => {
                    let cleaned = e.target.value.replace(/[^0-9,\-]/g, "");
                    handleProductUpdate(product.id, { price: cleaned });
                  },
                  className: "w-24 border-none px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProductGrid.jsx",
                  lineNumber: 138,
                  columnNumber: 45
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "text-gray-600", children: 'Only numbers, "," and "-" are allowed' }, void 0, !1, {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 147,
                columnNumber: 45
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 137,
              columnNumber: 41
            }, this) }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 136,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              Toggle_default,
              {
                apiOn: product.display_on_screen_1,
                onToggle: (newVal) => handleProductUpdate(product.id, { display_on_screen_1: newVal })
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 153,
                columnNumber: 41
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 152,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
              Toggle_default,
              {
                apiOn: product.display_on_screen_2,
                onToggle: (newVal) => handleProductUpdate(product.id, { display_on_screen_2: newVal })
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 163,
                columnNumber: 41
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 162,
              columnNumber: 37
            }, this)
          ] }, product.id, !0, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 88,
            columnNumber: 33
          }, this);
        });
      }) }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 83,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: dismissToast
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 178,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      PreviewModal,
      {
        open: showPreviewModal,
        onClose: () => setShowPreviewModal(!1),
        data: previewData,
        screen: previewScreen,
        setScreen: setPreviewScreen,
        screenNumber: previewScreen === "screen1" ? 1 : 2
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 193,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

// app/routes/admin/kitchen.cafe.jsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Cafe() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ProductsTable, {}, void 0, !1, {
    fileName: "app/routes/admin/kitchen.cafe.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
var kitchen_cafe_default = Cafe;

// app/routes/dashboard/index.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react16 = require("@remix-run/react");

// app/sessions.server.js
var import_node2 = require("@remix-run/node"), sessionSecret = process.env.SESSION_SECRET || "supersecret", storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    maxAge: 60 * 60 * 24
  }
});
async function getSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function commitSession(session) {
  return storage.commitSession(session);
}
async function destroySession(session) {
  return storage.destroySession(session);
}
async function requireUserSession(request) {
  let user = (await getSession(request)).get("user");
  if (!user)
    throw (0, import_node2.redirect)("/login");
  return user;
}

// app/routes/dashboard/index.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
async function loader2({ request }) {
  let user = await requireUserSession(request);
  return (0, import_node3.json)({ user });
}
function Dashboard() {
  let { user } = (0, import_react16.useLoaderData)(), action4 = (0, import_react16.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-2xl font-bold", children: [
      "Welcome, ",
      user.email || "User",
      " \u{1F44B}"
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react16.Form, { method: "post", action: "/logout", reloadDocument: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { type: "submit", variant: "danger", children: "Logout" }, void 0, !1, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 22,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/index.jsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/routes/admin/settings.jsx
var settings_exports = {};
__export(settings_exports, {
  default: () => settings_default
});
var import_react21 = require("react");

// app/components/AdminLayout.jsx
var import_react19 = require("@remix-run/react"), import_react20 = require("react");

// app/components/AdminPanelLink.jsx
var import_react17 = require("@remix-run/react"), import_lucide_react = require("lucide-react"), import_react18 = require("react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AdminPanelLink({
  to,
  icon: Icon = import_lucide_react.Settings,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_react17.Link,
    {
      to,
      className: "flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, { className: "w-5 h-5 text-gray-300" }, void 0, !1, {
          fileName: "app/components/AdminPanelLink.jsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: "text-white", children }, void 0, !1, {
          fileName: "app/components/AdminPanelLink.jsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/AdminPanelLink.jsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/components/AdminLayout.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AdminLayout({ children }) {
  let [open, setOpen] = (0, import_react20.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "min-h-screen flex bg-gray-100 relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "aside",
      {
        className: "bg-[var(--primary-color)] sticky p-4 top-0 h-[100vh] flex flex-col text-white transition-all duration-300 w-64",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: "/images/iss_logo.webp", alt: "iss logo", width: "50px", className: "logo" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 17,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react19.Link, { to: "/logout", className: "block px-3 py-2 hover:bg-gray-700", children: "Logout" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 19,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 16,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("nav", { className: "p-2 space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react19.Link, { to: "/admin", className: "block px-3 py-2 hover:bg-gray-700" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 33,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react19.Link, { to: "/admin/kitchen", className: "block px-3 py-2 hover:bg-gray-700 sub-menu", children: "Kitchen" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AdminPanelLink, { to: "/admin/settings", children: "Settings " }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 44,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 32,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex mt-auto justify-between pt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: "/images/sous-chef-white.svg", alt: "sous-chef logo", width: "70px", className: "logo" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 49,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: "Need support?" }, void 0, !1, {
                fileName: "app/components/AdminLayout.jsx",
                lineNumber: 51,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "#", className: "font-bold", children: "Click here" }, void 0, !1, {
                fileName: "app/components/AdminLayout.jsx",
                lineNumber: 52,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 50,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 48,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AdminLayout.jsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "flex-1 p-6 overflow-y-auto max-w-none mt-[0]", children }, void 0, !1, {
      fileName: "app/components/AdminLayout.jsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdminLayout.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/routes/admin/settings.jsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Settings2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: "This is setting" }, void 0, !1, {
    fileName: "app/routes/admin/settings.jsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/settings.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
var settings_default = Settings2;

// app/routes/admin/kitchen.jsx
var kitchen_exports = {};
__export(kitchen_exports, {
  default: () => kitchen_default
});
var import_react22 = require("react");
var import_react23 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Kitchen() {
  let [searchParams, setSearchParams] = (0, import_react23.useSearchParams)(), activeTab = searchParams.get("tab") || "cafe", setTab = (tab) => setSearchParams({ tab }), tabBase = "px-4 py-2 rounded-md font-medium transition-colors border", tabActive = "bg-[var(--primary-color)] text-white border-[var(--primary-color)]", tabInactive = "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-2xl font-semibold mb-4 text-[--primary-color]", children: "Kitchen" }, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 27,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 26,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { role: "tablist", "aria-label": "Kitchen sections", className: "flex gap-2 mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
        !1,
        {
          fileName: "app/routes/admin/kitchen.jsx",
          lineNumber: 31,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
        !1,
        {
          fileName: "app/routes/admin/kitchen.jsx",
          lineNumber: 41,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 30,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { role: "tabpanel", hidden: activeTab !== "cafe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ProductsTable, {}, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 53,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 52,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { role: "tabpanel", hidden: activeTab !== "foodwaste", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(kitchen_foodwaste_default, {}, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 57,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 56,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/kitchen.jsx",
    lineNumber: 25,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/kitchen.jsx",
    lineNumber: 24,
    columnNumber: 9
  }, this);
}
var kitchen_default = Kitchen;

// app/routes/logout/index.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  default: () => logout_default,
  loader: () => loader3
});
var import_react24 = require("react");
var import_node4 = require("@remix-run/node"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
async function action({ request }) {
  let session = await getSession(request);
  return (0, import_node4.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}
async function loader3() {
  return (0, import_node4.redirect)("/dashboard");
}
function Logout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: "You have been logged out" }, void 0, !1, {
    fileName: "app/routes/logout/index.jsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}
var logout_default = Logout;

// app/routes/signup/index.jsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action2,
  default: () => signup_default
});
var import_react28 = require("react");

// app/components/Input.jsx
var import_react25 = require("react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function Input({ children, type = "text", className = "", ...props }) {
  let styles = `w-full pr-10 pl-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { type, className: styles, ...props }, void 0, !1, {
    fileName: "app/components/Input.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var Input_default = Input;

// app/hooks/useImageUpload.js
var import_react26 = require("react"), DEFAULT_MAX_SIZE = 2 * 1024 * 1024;
function useImageUpload({ maxSize = DEFAULT_MAX_SIZE } = {}) {
  let [images, setImages] = (0, import_react26.useState)([]), [error, setError] = (0, import_react26.useState)(""), [isDragging, setIsDragging] = (0, import_react26.useState)(!1), resetError = (0, import_react26.useCallback)(() => setError(""), []), addFiles = (0, import_react26.useCallback)(
    (fileList) => {
      if (!fileList || fileList.length === 0)
        return;
      let files = Array.from(fileList), validFiles = [], rejectedMessages = [];
      files.forEach((file) => {
        if (file.size > maxSize) {
          rejectedMessages.push(`${file.name} is larger than ${Math.round(maxSize / (1024 * 1024))} MB`);
          return;
        }
        validFiles.push({
          file,
          preview: URL.createObjectURL(file)
        });
      }), rejectedMessages.length > 0 ? setError(rejectedMessages.join(`
`)) : resetError(), validFiles.length > 0 && setImages((prev) => [...prev, ...validFiles]);
    },
    [maxSize, resetError]
  ), handleInputChange = (0, import_react26.useCallback)(
    (event) => {
      addFiles(event.target.files), event.target.value = "";
    },
    [addFiles]
  ), handleDrop = (0, import_react26.useCallback)(
    (event) => {
      event.preventDefault(), event.stopPropagation(), setIsDragging(!1), addFiles(event.dataTransfer.files);
    },
    [addFiles]
  ), handleDragOver = (0, import_react26.useCallback)((event) => {
    event.preventDefault(), event.stopPropagation(), setIsDragging(!0);
  }, []), handleDragLeave = (0, import_react26.useCallback)((event) => {
    event.preventDefault(), event.stopPropagation(), setIsDragging(!1);
  }, []), removeImage = (0, import_react26.useCallback)((index) => {
    setImages((prev) => {
      let next = [...prev], [removed] = next.splice(index, 1);
      return removed && URL.revokeObjectURL(removed.preview), next;
    });
  }, []);
  return (0, import_react26.useEffect)(() => () => {
    images.forEach((img) => URL.revokeObjectURL(img.preview));
  }, [images]), {
    images,
    error,
    isDragging,
    addFiles,
    handleInputChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removeImage,
    resetError
  };
}
var useImageUpload_default = useImageUpload;

// app/components/ImagesUpload.jsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function ImagesUpload({ name = "default-name", maxSize }) {
  let {
    images,
    error,
    isDragging,
    handleInputChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removeImage
  } = useImageUpload_default({ maxSize });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "div",
      {
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        style: {
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: isDragging ? "2px dashed red" : "1px solid #000",
          margin: "10px auto",
          maxWidth: "500px"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-gray-600", children: [
          "Drag & Drop your images here or",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("label", { className: "text-blue-600 cursor-pointer underline", children: [
            "click to browse",
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
              "input",
              {
                type: "file",
                name,
                multiple: !0,
                accept: ".jpg, .png",
                onChange: handleInputChange,
                className: "hidden"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ImagesUpload.jsx",
                lineNumber: 36,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/ImagesUpload.jsx",
            lineNumber: 34,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ImagesUpload.jsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ImagesUpload.jsx",
        lineNumber: 18,
        columnNumber: 13
      },
      this
    ),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-red-500 mt-2", children: error }, void 0, !1, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 49,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      "div",
      {
        className: "relative",
        style: { display: "flex", gap: "20px", flexDirection: "column" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            "img",
            {
              src: img.preview,
              alt: `preview ${index}`,
              style: { width: "100px", height: "100px", objectFit: "cover" }
            },
            void 0,
            !1,
            {
              fileName: "app/components/ImagesUpload.jsx",
              lineNumber: 59,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: () => removeImage(index),
              children: "Remove"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ImagesUpload.jsx",
              lineNumber: 64,
              columnNumber: 25
            },
            this
          )
        ]
      },
      index,
      !0,
      {
        fileName: "app/components/ImagesUpload.jsx",
        lineNumber: 54,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ImagesUpload.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/routes/signup/index.jsx
var import_react29 = require("@remix-run/react");

// app/components/PasswordInput.jsx
var import_react27 = require("react");
var import_lucide_react2 = require("lucide-react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function PasswordInput({ ...props }) {
  let [showPassword, setShowPassword] = (0, import_react27.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      Input_default,
      {
        type: showPassword ? "text" : "password",
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/PasswordInput.jsx",
        lineNumber: 9,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute inset-y-0 right-2 flex items-center text-gray-500",
        children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react2.EyeOff, { size: 20 }, void 0, !1, {
          fileName: "app/components/PasswordInput.jsx",
          lineNumber: 18,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react2.Eye, { size: 20 }, void 0, !1, {
          fileName: "app/components/PasswordInput.jsx",
          lineNumber: 18,
          columnNumber: 56
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/PasswordInput.jsx",
        lineNumber: 13,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PasswordInput.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var PasswordInput_default = PasswordInput;

// app/routes/signup/index.jsx
var import_node5 = require("@remix-run/node");
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
async function action2({ request }) {
  var _a, _b;
  let contentType = request.headers.get("content-type");
  if (console.log("Received Content-Type:", contentType), !contentType || !contentType.includes("multipart/form-data"))
    return (0, import_node5.json)({ error: "Bad content-type", contentType }, { status: 400 });
  let formData = await request.formData(), first_name = formData.get("first-name"), last_name = formData.get("last-name"), email = formData.get("email"), password = formData.get("password"), confirmPassword = formData.get("confirm-password");
  if (password !== confirmPassword)
    return (0, import_node5.json)({ error: "Passwords do not match" }, { status: 400 });
  let checkEmailJson = await (await fetch(
    `${API_BASE_URL}/users?filter[email][_eq]=${encodeURIComponent(email)}`
  )).json();
  if (((_a = checkEmailJson == null ? void 0 : checkEmailJson.data) == null ? void 0 : _a.length) > 0)
    return (0, import_node5.json)({ error: "Email already registered" }, { status: 400 });
  let images = formData.getAll("avatar"), uploadedImageIds = [];
  for (let image of images)
    if (image && typeof image != "string" && image.size > 0) {
      let uploadData = new FormData();
      uploadData.append("file", image, image.name);
      try {
        let uploadRes = await fetch(`${API_BASE_URL}/files`, {
          method: "POST",
          body: uploadData
        });
        if (!uploadRes.ok) {
          console.error("File upload failed:", await uploadRes.text());
          continue;
        }
        let uploadJson = await uploadRes.json();
        (_b = uploadJson == null ? void 0 : uploadJson.data) != null && _b.id && uploadedImageIds.push(uploadJson.data.id);
      } catch (error) {
        console.error("Error uploading avatar:", error);
      }
    }
  let avatarId = uploadedImageIds.length > 0 ? uploadedImageIds[0] : null, userRes = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      avatar: avatarId,
      status: "active"
    })
  });
  if (!userRes.ok) {
    let err = await userRes.text();
    return (0, import_node5.json)({ error: err }, { status: 400 });
  }
  return (0, import_node5.redirect)("/login");
}
function SignUp() {
  let actionData = (0, import_react29.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "SignUp",
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 104,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-red-500 text-sm", children: actionData.error }, void 0, !1, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 108,
      columnNumber: 17
    }, this),
    (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-red-500 text-sm", children: "okay" }, void 0, !1, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react29.Form, { method: "post", encType: "multipart/form-data", onSubmit: () => console.log("Form submitted"), className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Input_default, { type: "name", name: "first-name", required: !0, placeholder: "Enter your first name" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Input_default, { type: "name", name: "last-name", required: !0, placeholder: "Enter your last name" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 119,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Input_default, { type: "email", required: !0, name: "email", placeholder: "Email" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: "Upload your image" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 123,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(ImagesUpload, { name: "avatar" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 125,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", required: !0, name: "password" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 127,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(PasswordInput_default, { placeholder: "Confirm password", required: !0, name: "confirm-password" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 129,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Button, { type: "submit", children: "Sign up" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 131,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 115,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup/index.jsx",
    lineNumber: 100,
    columnNumber: 9
  }, this);
}
var signup_default = SignUp;

// app/routes/admin/index.jsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin_default
});
var import_react30 = require("react");
var import_react31 = require("@remix-run/react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Admin() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react31.Outlet, {}, void 0, !1, {
    fileName: "app/routes/admin/index.jsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/index.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var admin_default = Admin;

// app/routes/login/index.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => LoginPage,
  loader: () => loader4
});
var import_node6 = require("@remix-run/node"), import_react32 = require("@remix-run/react");
var import_lucide_react3 = require("lucide-react");
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  return (await getSession(request)).get("user") ? (0, import_node6.redirect)("/dashboard") : null;
}
async function loginToExternalApi({ email, password }) {
  let response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) {
    let err = await response.text();
    throw new Error(`Login failed: ${err}`);
  }
  return await response.json();
}
async function action3({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (!email || !password)
    return (0, import_node6.json)({ error: "Email and password required" }, { status: 400 });
  try {
    let result = await loginToExternalApi({ email, password }), session = await getSession(request);
    return session.set("user", result.user || { email }), (0, import_node6.redirect)("/dashboard?login=success", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } catch (error) {
    return console.error("\u274C Login error:", error), (0, import_node6.json)({ error: "Invalid email or password" }, { status: 401 });
  }
}
function LoginPage() {
  let actionData = (0, import_react32.useActionData)(), transition = (0, import_react32.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "Login",
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react32.Form, { method: "post", className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Input_default, { type: "email", required: !0, name: "email", placeholder: "Email" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", name: "password" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("a", { href: "#", children: "Forgot Password?" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 89,
        columnNumber: 45
      }, this) }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 89,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Button, { type: "submit", disabled: transition.state === "submitting", children: transition.state === "submitting" ? "Logging in..." : "Login" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 76,
    columnNumber: 9
  }, this);
}

// app/routes/admin/test.jsx
var test_exports = {};
__export(test_exports, {
  default: () => RenderComponent
});
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function RenderComponent() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { style: { height: 300, width: "100%" } }, void 0, !1, {
    fileName: "app/routes/admin/test.jsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react33 = require("@remix-run/react");
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_jsx_dev_runtime25.Fragment, { children: "Hello" }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "aef0d07e", entry: { module: "/build/entry.client-YEULPGFS.js", imports: ["/build/_shared/chunk-WRGLUQ3K.js", "/build/_shared/chunk-3PAGGNGK.js", "/build/_shared/chunk-3MN2X4JC.js", "/build/_shared/chunk-L572RSQW.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BQO75ELU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/admin/index": { id: "routes/admin/index", parentId: "root", path: "admin", index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-OHMGAX72.js", imports: ["/build/_shared/chunk-DM2BJK64.js", "/build/_shared/chunk-BUC66LPV.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/kitchen": { id: "routes/admin/kitchen", parentId: "root", path: "admin/kitchen", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/kitchen-5ORO2WWH.js", imports: ["/build/_shared/chunk-5N5GPHJG.js", "/build/_shared/chunk-QBM7XDCD.js", "/build/_shared/chunk-6D43HBEY.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-DM2BJK64.js", "/build/_shared/chunk-BUC66LPV.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/kitchen.cafe": { id: "routes/admin/kitchen.cafe", parentId: "root", path: "admin/kitchen/cafe", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/kitchen.cafe-HM7AED7V.js", imports: ["/build/_shared/chunk-QBM7XDCD.js", "/build/_shared/chunk-6D43HBEY.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/kitchen.foodwaste": { id: "routes/admin/kitchen.foodwaste", parentId: "root", path: "admin/kitchen/foodwaste", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/kitchen.foodwaste-AAM7CMFI.js", imports: ["/build/_shared/chunk-5N5GPHJG.js", "/build/_shared/chunk-6D43HBEY.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/settings": { id: "routes/admin/settings", parentId: "root", path: "admin/settings", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/settings-P6INWX43.js", imports: ["/build/_shared/chunk-DM2BJK64.js", "/build/_shared/chunk-BUC66LPV.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/test": { id: "routes/admin/test", parentId: "root", path: "admin/test", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/test-5NTADUFD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/banner.product.$productId.$screen": { id: "routes/banner.product.$productId.$screen", parentId: "root", path: "banner/product/:productId/:screen", index: void 0, caseSensitive: void 0, module: "/build/routes/banner.product.$productId.$screen-D5Q6C2QG.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "root", path: "dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-2ZZ7GKU2.js", imports: ["/build/_shared/chunk-MV6XCUMJ.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-I7TPUT74.js", imports: ["/build/_shared/chunk-FDG73SMC.js", "/build/_shared/chunk-EBZYX6BQ.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-BUC66LPV.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "root", path: "login", index: !0, caseSensitive: void 0, module: "/build/routes/login/index-RWJVU63H.js", imports: ["/build/_shared/chunk-FDG73SMC.js", "/build/_shared/chunk-EBZYX6BQ.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-BUC66LPV.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout/index": { id: "routes/logout/index", parentId: "root", path: "logout", index: !0, caseSensitive: void 0, module: "/build/routes/logout/index-QDYY2BKU.js", imports: ["/build/_shared/chunk-MV6XCUMJ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup/index": { id: "routes/signup/index", parentId: "root", path: "signup", index: !0, caseSensitive: void 0, module: "/build/routes/signup/index-GIH4M6EB.js", imports: ["/build/_shared/chunk-EBZYX6BQ.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-BUC66LPV.js", "/build/_shared/chunk-KDSGW5EK.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-AEF0D07E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/banner.product.$productId.$screen": {
    id: "routes/banner.product.$productId.$screen",
    parentId: "root",
    path: "banner/product/:productId/:screen",
    index: void 0,
    caseSensitive: void 0,
    module: banner_product_productId_screen_exports
  },
  "routes/admin/kitchen.foodwaste": {
    id: "routes/admin/kitchen.foodwaste",
    parentId: "root",
    path: "admin/kitchen/foodwaste",
    index: void 0,
    caseSensitive: void 0,
    module: kitchen_foodwaste_exports
  },
  "routes/admin/kitchen.cafe": {
    id: "routes/admin/kitchen.cafe",
    parentId: "root",
    path: "admin/kitchen/cafe",
    index: void 0,
    caseSensitive: void 0,
    module: kitchen_cafe_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "root",
    path: "dashboard",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/admin/settings": {
    id: "routes/admin/settings",
    parentId: "root",
    path: "admin/settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/admin/kitchen": {
    id: "routes/admin/kitchen",
    parentId: "root",
    path: "admin/kitchen",
    index: void 0,
    caseSensitive: void 0,
    module: kitchen_exports
  },
  "routes/logout/index": {
    id: "routes/logout/index",
    parentId: "root",
    path: "logout",
    index: !0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup/index": {
    id: "routes/signup/index",
    parentId: "root",
    path: "signup",
    index: !0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "root",
    path: "admin",
    index: !0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: !0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/admin/test": {
    id: "routes/admin/test",
    parentId: "root",
    path: "admin/test",
    index: void 0,
    caseSensitive: void 0,
    module: test_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
