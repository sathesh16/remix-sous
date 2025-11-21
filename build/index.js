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
var app_default = "/build/_assets/app-KCU7DPQG.css";

// app/styles/style.css
var style_default = "/build/_assets/style-62GU4SJC.css";

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
function ErrorBoundary({ error: error2 }) {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error2 == null ? void 0 : error2.message }, void 0, !1, {
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

// app/lib/products.js
async function fetchCategoriesAndProducts() {
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
  ), productsData = (products.data || []).filter((prod) => !!prod.name && String(prod.name).trim().length > 0).slice().sort(
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
    let error2 = await response.text();
    throw new Error(error2 || "Failed to save products.");
  }
  return response.json();
}

// app/models/banner.server.js
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "columns-2 gap-x-10 w-full", children: previewData.map(({ category, products, error: error2, message }) => error2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-center text-red-400 py-10", children: message }, void 0, !1, {
          fileName: "app/routes/banner.product.$productId.$screen.jsx",
          lineNumber: 52,
          columnNumber: 41
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "category mb-6 break-inside-avoid", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "bold-text text-lg", children: category }, void 0, !1, {
            fileName: "app/routes/banner.product.$productId.$screen.jsx",
            lineNumber: 55,
            columnNumber: 45
          }, this),
          products.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-[20px] justify-between items-center py-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: prod.name }, void 0, !1, {
                fileName: "app/routes/banner.product.$productId.$screen.jsx",
                lineNumber: 59,
                columnNumber: 57
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: prod.description }, void 0, !1, {
                fileName: "app/routes/banner.product.$productId.$screen.jsx",
                lineNumber: 60,
                columnNumber: 57
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/banner.product.$productId.$screen.jsx",
              lineNumber: 58,
              columnNumber: 53
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: prod.price }, void 0, !1, {
              fileName: "app/routes/banner.product.$productId.$screen.jsx",
              lineNumber: 63,
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

// app/routes/banner.foodwaste.$locationId.jsx
var banner_foodwaste_locationId_exports = {};
__export(banner_foodwaste_locationId_exports, {
  default: () => FoodWasteBanner,
  loader: () => loader2
});
var import_react6 = require("@remix-run/react"), import_react7 = require("react");

// app/lib/foodWaste.js
async function fetchFoodWaste(locationId) {
  let url = `${API_BASE_URL}/items/Food_waste_information` + (locationId ? `?filter[location_id][_eq]=${locationId}` : ""), response = await fetch(url);
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

// app/routes/banner.foodwaste.$locationId.jsx
var import_clsx = __toESM(require("clsx")), import_node2 = require("@remix-run/node");

// app/components/ApexChart.jsx
var import_react5 = __toESM(require("react")), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function ClientApexChart({ data = [], color = "#CBD5E1", width = 180, height = 44 }) {
  let [chartModule, setChartModule] = (0, import_react5.useState)(null);
  (0, import_react5.useEffect)(() => {
    let mounted = !0;
    return (async () => {
      try {
        await import("apexcharts");
        let mod = await import("react-apexcharts");
        mounted && setChartModule(mod);
      } catch (err) {
        console.error("Failed loading apexcharts modules", err), mounted && setChartModule({ __error: err });
      }
    })(), () => {
      mounted = !1;
    };
  }, []);
  let ResolvedComponent = (0, import_react5.useMemo)(() => {
    if (!chartModule || chartModule.__error)
      return null;
    let extract = (m) => {
      if (!m || typeof m == "function")
        return m;
      if (m.default && typeof m.default == "function")
        return m.default;
      if (m.ReactApexChart && typeof m.ReactApexChart == "function")
        return m.ReactApexChart;
      if (m.ApexChart && typeof m.ApexChart == "function")
        return m.ApexChart;
      if (m.default && typeof m.default == "object")
        return extract(m.default);
      if (typeof m == "object") {
        for (let key of ["reactApexCharts", "ReactApexCharts", "ReactApexChart", "ApexChart", "default"])
          if (m[key]) {
            let candidate = extract(m[key]);
            if (candidate)
              return candidate;
          }
      }
      return null;
    };
    return extract(chartModule);
  }, [chartModule]);
  if (!ResolvedComponent)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { width, height }, children: "Loading chart\u2026" }, void 0, !1, {
      fileName: "app/components/ApexChart.jsx",
      lineNumber: 47,
      columnNumber: 16
    }, this);
  let options = {
    chart: {
      type: "line",
      sparkline: { enabled: !0 },
      toolbar: { show: !1 },
      animations: { enabled: !1 }
    },
    stroke: { curve: "smooth", width: 2 },
    colors: [color],
    tooltip: { enabled: !1 },
    grid: { show: !1 },
    xaxis: { labels: { show: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } },
    yaxis: { show: !1 }
  }, series = [{ data }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: { width, height }, children: import_react5.default.createElement(ResolvedComponent, {
    options,
    series,
    type: "line",
    height,
    width
  }) }, void 0, !1, {
    fileName: "app/components/ApexChart.jsx",
    lineNumber: 68,
    columnNumber: 9
  }, this);
}

// app/lib/locations.js
async function fetchLocations() {
  let response = await fetch(`${API_BASE_URL}/items/Locations/`);
  if (!response.ok)
    throw new Error("Failed to fetch locations.");
  let result = await response.json();
  return result.data || result;
}
async function getLocationIsVertical(id) {
  let response = await fetch(`${API_BASE_URL}/items/Locations/${id}`);
  if (!response.ok)
    throw new Error("Failed to fetch locations.");
  return (await response.json()).data.is_vertical_foodwaste;
}
async function updateLocationIsVertical(id, isVertical) {
  let payload = {
    is_vertical_foodwaste: isVertical
  }, response = await fetch(`${API_BASE_URL}/items/Locations/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok)
    throw new Error("Failed to update location.");
  return response.json();
}

// app/routes/banner.foodwaste.$locationId.jsx
var import_dayjs = __toESM(require("dayjs")), import_weekday = __toESM(require("dayjs/plugin/weekday")), import_weekOfYear = __toESM(require("dayjs/plugin/weekOfYear"));

// app/components/WeeklyAreaChart.jsx
var import_recharts = require("recharts"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function WeeklyAreaChart({ series, color = "#CBD5E1" }) {
  let chartData = series.map((value, index) => ({
    name: `W${index + 1}`,
    value
  }));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { style: { width: 300, height: 300 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_recharts.ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_recharts.AreaChart, { data: chartData, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_recharts.XAxis,
      {
        dataKey: "name",
        axisLine: !0,
        tickLine: !1,
        tick: !1,
        stroke: "#ccc"
      },
      void 0,
      !1,
      {
        fileName: "app/components/WeeklyAreaChart.jsx",
        lineNumber: 16,
        columnNumber: 21
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_recharts.YAxis,
      {
        axisLine: !0,
        tickLine: !1,
        tick: !1,
        stroke: "#ccc"
      },
      void 0,
      !1,
      {
        fileName: "app/components/WeeklyAreaChart.jsx",
        lineNumber: 25,
        columnNumber: 21
      },
      this
    ),
    chartData.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      import_recharts.Area,
      {
        type: "monotone",
        dataKey: "value",
        stroke: color,
        fill: color,
        fillOpacity: 0.4
      },
      void 0,
      !1,
      {
        fileName: "app/components/WeeklyAreaChart.jsx",
        lineNumber: 33,
        columnNumber: 25
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/WeeklyAreaChart.jsx",
    lineNumber: 13,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/WeeklyAreaChart.jsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/WeeklyAreaChart.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/routes/banner.foodwaste.$locationId.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
import_dayjs.default.extend(import_weekday.default);
import_dayjs.default.extend(import_weekOfYear.default);
async function loader2({ params }) {
  let { locationId } = params, location = (await fetchLocations()).find((l) => Number(l.id) === Number(locationId));
  if (!location)
    throw new Response("Location not found", { status: 404 });
  let allRecords = await fetchFoodWaste(locationId);
  return (0, import_node2.json)({
    allRecords,
    orientation: location.is_vertical_foodwaste ? "portrait" : "landscape"
  });
}
function FoodWasteBanner() {
  let { allRecords, orientation } = (0, import_react6.useLoaderData)();
  function buildPreviewData2(allRecords2, week) {
    let currentWeekNum = Number(week), lastWeekNum = currentWeekNum - 1, isWeek = (r, wn) => (0, import_dayjs.default)(r.date).week() === wn;
    function weeklyPerGuestAverages(weekNum) {
      let days = allRecords2.filter((r) => isWeek(r, weekNum)), plate = [], total = [];
      days.forEach((d) => {
        let users = Number(d.number_of_users) || 0;
        users > 0 && (d.food_waste != null && plate.push(Number(d.food_waste) / users), d.total_waste != null && total.push(Number(d.total_waste) / users));
      });
      let avg2 = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
      return { plateAvg: avg2(plate), totalAvg: avg2(total) };
    }
    let currentWeek = weeklyPerGuestAverages(currentWeekNum), lastWeek = weeklyPerGuestAverages(lastWeekNum), isIncreasePlate2 = currentWeek.plateAvg > lastWeek.plateAvg, isIncreaseTotal2 = currentWeek.totalAvg > lastWeek.totalAvg, plateSeries2 = [], totalSeries2 = [];
    for (let i = 12; i >= 1; i--) {
      let wn = currentWeekNum - i, { plateAvg, totalAvg } = weeklyPerGuestAverages(wn);
      plateSeries2.push(Math.round(plateAvg)), totalSeries2.push(Math.round(totalAvg));
    }
    let avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    return {
      currentWeek: currentWeekNum,
      plateWasteCurrentWeek: currentWeek.plateAvg,
      totalWasteCurrentWeek: currentWeek.totalAvg,
      isIncreasePlate: isIncreasePlate2,
      isIncreaseTotal: isIncreaseTotal2,
      plateWasteWeeklyAvg: avg(plateSeries2),
      totalWasteWeeklyAvg: avg(totalSeries2),
      plateSeries: plateSeries2,
      totalSeries: totalSeries2
    };
  }
  let previewData = (0, import_react7.useMemo)(() => buildPreviewData2(allRecords, (0, import_dayjs.default)().week()), [allRecords]);
  if (!previewData)
    return null;
  let {
    plateWasteCurrentWeek,
    totalWasteCurrentWeek,
    plateWasteWeeklyAvg,
    totalWasteWeeklyAvg,
    plateSeries,
    totalSeries,
    isIncreasePlate,
    isIncreaseTotal
  } = previewData, textColorPlate = isIncreasePlate ? "text-[#8B4513]" : "text-[#24361F]", arrowIconPlate = isIncreasePlate ? "/images/arrow-up.svg" : "/images/arrow-down.svg", textColorTotal = isIncreaseTotal ? "text-[#8B4513]" : "text-[#24361F]", arrowIconTotal = isIncreaseTotal ? "/images/arrow-up.svg" : "/images/arrow-down.svg";
  return console.log(orientation + "Our orientation"), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    "div",
    {
      className: (0, import_clsx.default)(
        "flex items-center justify-center mx-auto regular-text"
      ),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "div",
        {
          className: (0, import_clsx.default)(
            "bg-[#E6EFE6] py-8 px-12 rounded-md mx-auto flex items-center",
            orientation === "landscape" ? "food-waste-hr-bg w-[1920px] h-[1080px]" : "food-waste-vr-bg w-[1080px] h-[1920px]"
          ),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "h1",
              {
                className: (0, import_clsx.default)(
                  "mb-10 font-semibold  bold-text",
                  orientation === "landscape" ? "text-[#24361F] text-6xl" : "text-black text-5xl"
                ),
                children: "Food Waste"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                lineNumber: 144,
                columnNumber: 21
              },
              this
            ),
            plateWasteCurrentWeek === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {}, void 0, !1, {
              fileName: "app/routes/banner.foodwaste.$locationId.jsx",
              lineNumber: 154,
              columnNumber: 25
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid gap-24", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "section",
                {
                  className: (0, import_clsx.default)(
                    "flex",
                    orientation === "landscape" ? "gap-24 items-center" : "flex-col items-start gap-12"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "div",
                      {
                        className: (0, import_clsx.default)(
                          orientation === "landscape" ? "basis-[200px] text-[#24361F]" : "basis-auto text-black"
                        ),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-xl font-semibold mb-1", children: "Plate Waste" }, void 0, !1, {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 172,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl font-semibold opacity-80 mb-4", children: "pr. Guest / Day" }, void 0, !1, {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 173,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl opacity-80 mb-4", children: "Good food thrown in the trash" }, void 0, !1, {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 176,
                            columnNumber: 33
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                        lineNumber: 165,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center gap-24", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "div",
                          {
                            className: (0, import_clsx.default)(
                              "mb-2 text-lg font-semibold",
                              orientation === "landscape" ? "text-[#24361F]" : "text-black"
                            ),
                            children: "Last Week"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 183,
                            columnNumber: 37
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "div",
                          {
                            className: `w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold ${textColorPlate}`,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-2", children: [
                                Math.round(plateWasteCurrentWeek),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: arrowIconPlate, width: "20", height: "20" }, void 0, !1, {
                                  fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                                  lineNumber: 196,
                                  columnNumber: 45
                                }, this)
                              ] }, void 0, !0, {
                                fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                                lineNumber: 194,
                                columnNumber: 41
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-2 text-lg opacity-80", children: "grams" }, void 0, !1, {
                                fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                                lineNumber: 198,
                                columnNumber: 41
                              }, this)
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 191,
                            columnNumber: 37
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                        lineNumber: 182,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "div",
                          {
                            className: (0, import_clsx.default)(
                              "mb-2 text-lg font-semibold",
                              orientation === "landscape" ? "text-[#24361F]" : "text-black"
                            ),
                            children: "Weekly Average*"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 203,
                            columnNumber: 37
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold text-white", children: [
                          Math.round(plateWasteWeeklyAvg),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-2 text-lg text-white opacity-80", children: "grams" }, void 0, !1, {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 213,
                            columnNumber: 41
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                          lineNumber: 211,
                          columnNumber: 37
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                        lineNumber: 202,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "div",
                        {
                          className: (0, import_clsx.default)(
                            "flex flex-col gap-2 basis-[300px]",
                            orientation === "landscape" ? "text-[#24361F]" : "text-black"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(WeeklyAreaChart, { series: plateSeries, color: "#CBD5E1" }, void 0, !1, {
                              fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                              lineNumber: 223,
                              columnNumber: 37
                            }, this),
                            "Weekly Average *",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                              lineNumber: 225,
                              columnNumber: 37
                            }, this),
                            "(Based on last three months *)"
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                          lineNumber: 217,
                          columnNumber: 33
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                      lineNumber: 181,
                      columnNumber: 29
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                  lineNumber: 157,
                  columnNumber: 25
                },
                this
              ),
              totalWasteCurrentWeek === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", {}, void 0, !1, {
                fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                lineNumber: 232,
                columnNumber: 57
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                "section",
                {
                  className: (0, import_clsx.default)(
                    "flex",
                    orientation === "landscape" ? "gap-24 items-center" : "flex-col items-start gap-12"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      "div",
                      {
                        className: (0, import_clsx.default)(
                          orientation === "landscape" ? "basis-[200px] text-[#24361F]" : "basis-auto text-black"
                        ),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h3", { className: "text-xl font-semibold mb-1", children: "Total Waste" }, void 0, !1, {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 247,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl font-semibold opacity-80 mb-4", children: "pr. Guest / Day" }, void 0, !1, {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 248,
                            columnNumber: 33
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-xl opacity-80 mb-4", children: "Plate Waste + Production Waste + Buffet Waste" }, void 0, !1, {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 251,
                            columnNumber: 33
                          }, this)
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                        lineNumber: 240,
                        columnNumber: 29
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center gap-24", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "div",
                          {
                            className: (0, import_clsx.default)(
                              "mb-2 text-lg font-semibold",
                              orientation === "landscape" ? "text-[#24361F]" : "text-black"
                            ),
                            children: "Last Week"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 258,
                            columnNumber: 37
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "div",
                          {
                            className: `w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold ${textColorTotal}`,
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex gap-2", children: [
                                Math.round(totalWasteCurrentWeek),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: arrowIconTotal, width: "20", height: "20" }, void 0, !1, {
                                  fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                                  lineNumber: 271,
                                  columnNumber: 45
                                }, this)
                              ] }, void 0, !0, {
                                fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                                lineNumber: 269,
                                columnNumber: 41
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-2 text-lg opacity-80", children: "grams" }, void 0, !1, {
                                fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                                lineNumber: 273,
                                columnNumber: 41
                              }, this)
                            ]
                          },
                          void 0,
                          !0,
                          {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 266,
                            columnNumber: 37
                          },
                          this
                        )
                      ] }, void 0, !0, {
                        fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                        lineNumber: 257,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "text-center", children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                          "div",
                          {
                            className: (0, import_clsx.default)(
                              "mb-2 text-lg font-semibold",
                              orientation === "landscape" ? "text-[#24361F]" : "text-black"
                            ),
                            children: "Weekly Average*"
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 278,
                            columnNumber: 37
                          },
                          this
                        ),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold text-white", children: [
                          Math.round(totalWasteWeeklyAvg),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-2 text-lg text-white opacity-80", children: "grams" }, void 0, !1, {
                            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                            lineNumber: 288,
                            columnNumber: 41
                          }, this)
                        ] }, void 0, !0, {
                          fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                          lineNumber: 286,
                          columnNumber: 37
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                        lineNumber: 277,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                        "div",
                        {
                          className: (0, import_clsx.default)(
                            "flex flex-col gap-2 basis-[300px]",
                            orientation === "landscape" ? "text-[#24361F]" : "text-black"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(WeeklyAreaChart, { series: totalSeries, color: "#CBD5E1" }, void 0, !1, {
                              fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                              lineNumber: 298,
                              columnNumber: 37
                            }, this),
                            "Weekly Average *",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                              lineNumber: 300,
                              columnNumber: 37
                            }, this),
                            "(Based on last three months *)"
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                          lineNumber: 292,
                          columnNumber: 33
                        },
                        this
                      )
                    ] }, void 0, !0, {
                      fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                      lineNumber: 256,
                      columnNumber: 29
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/banner.foodwaste.$locationId.jsx",
                  lineNumber: 232,
                  columnNumber: 73
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/banner.foodwaste.$locationId.jsx",
              lineNumber: 155,
              columnNumber: 26
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/banner.foodwaste.$locationId.jsx",
            lineNumber: 143,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/banner.foodwaste.$locationId.jsx",
          lineNumber: 135,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/routes/banner.foodwaste.$locationId.jsx",
      lineNumber: 130,
      columnNumber: 9
    },
    this
  );
}

// app/routes/example/chart/AreaChart.jsx
var AreaChart_exports = {};
__export(AreaChart_exports, {
  default: () => AreaChartExample
});
var import_recharts2 = require("recharts"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function AreaChartExample() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { style: { width: "100%", height: 300 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_recharts2.ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_recharts2.AreaChart, { data: [
    { name: "Mon", value: 30 },
    { name: "Tue", value: 45 },
    { name: "Wed", value: 35 },
    { name: "Thu", value: 50 },
    { name: "Fri", value: 55 },
    { name: "Sat", value: 40 },
    { name: "Sun", value: 60 }
  ], margin: { top: 10, right: 30, left: 0, bottom: 0 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_recharts2.XAxis, { dataKey: "name", stroke: "#aaa" }, void 0, !1, {
      fileName: "app/routes/example/chart/AreaChart.jsx",
      lineNumber: 19,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_recharts2.YAxis, { stroke: "#aaa" }, void 0, !1, {
      fileName: "app/routes/example/chart/AreaChart.jsx",
      lineNumber: 20,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_recharts2.Tooltip, {}, void 0, !1, {
      fileName: "app/routes/example/chart/AreaChart.jsx",
      lineNumber: 21,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_recharts2.Area,
      {
        type: "monotone",
        dataKey: "value",
        stroke: "#8884d8",
        fill: "#8884d8",
        fillOpacity: 0.5
      },
      void 0,
      !1,
      {
        fileName: "app/routes/example/chart/AreaChart.jsx",
        lineNumber: 23,
        columnNumber: 21
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/example/chart/AreaChart.jsx",
    lineNumber: 18,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/example/chart/AreaChart.jsx",
    lineNumber: 17,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/example/chart/AreaChart.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/routes/api.update-location.js
var api_update_location_exports = {};
__export(api_update_location_exports, {
  action: () => action
});
var import_node4 = require("@remix-run/node");

// app/sessionHandler.server.js
var import_node3 = require("@remix-run/node");
var import_meta = {}, sessionSecret = process.env.SESSION_SECRET || "supersecret";
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node3.createCookieSessionStorage)({
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
console.log("SESSION FILE LOADED");
console.log({ getSession });
console.log("SESSIONS FILE PATH:", import_meta.url);
async function requireAccessToken(request) {
  let token = (await getSession(request)).get("token");
  if (!token)
    throw (0, import_node3.redirect)("/login");
  return token;
}
async function getCurrentUser(request) {
  let token = await requireAccessToken(request), session = await getSession(request), response = await fetch(`${API_BASE_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (!response.ok)
    throw session.unset("token"), (0, import_node3.redirect)("/login", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  let result = await response.json();
  return session.set("user", result.data), {
    user: result.data,
    token
  };
}

// app/routes/api.update-location.js
async function action({ request }) {
  let body = await request.json(), { location } = body, session = await getSession(request), user = session.get("user");
  return user ? (user.selected_location = location, session.set("user", user), (0, import_node4.json)(
    { success: !0 },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  )) : (0, import_node4.json)({ success: !1, message: "No user in session" }, { status: 401 });
}

// app/routes/dashboard/index.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react17 = require("@remix-run/react");

// app/components/Button.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  let styles = `px-7 py-2 rounded-lg font-medium focus:outline-none focus:ring transition ${{
    primary: "bg-[#000022] text-white",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
  }[variant]} ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("button", { type, className: styles, ...props, children }, void 0, !1, {
    fileName: "app/components/Button.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/components/CurrentUserCard.jsx
var import_react8 = require("react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function CurrentUserCard({ user }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "p-4 border rounded-lg shadow", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "text-xl font-bold mb-2", children: "Current User" }, void 0, !1, {
      fileName: "app/components/CurrentUserCard.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("strong", { children: "ID:" }, void 0, !1, {
        fileName: "app/components/CurrentUserCard.jsx",
        lineNumber: 9,
        columnNumber: 16
      }, this),
      " ",
      user.id
    ] }, void 0, !0, {
      fileName: "app/components/CurrentUserCard.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("strong", { children: "Name:" }, void 0, !1, {
        fileName: "app/components/CurrentUserCard.jsx",
        lineNumber: 10,
        columnNumber: 16
      }, this),
      " ",
      user.first_name,
      " ",
      user.last_name
    ] }, void 0, !0, {
      fileName: "app/components/CurrentUserCard.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("strong", { children: "Email:" }, void 0, !1, {
        fileName: "app/components/CurrentUserCard.jsx",
        lineNumber: 11,
        columnNumber: 16
      }, this),
      " ",
      user.email
    ] }, void 0, !0, {
      fileName: "app/components/CurrentUserCard.jsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("strong", { children: "Status:" }, void 0, !1, {
        fileName: "app/components/CurrentUserCard.jsx",
        lineNumber: 12,
        columnNumber: 16
      }, this),
      " ",
      user.status
    ] }, void 0, !0, {
      fileName: "app/components/CurrentUserCard.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("strong", { children: "Last Access:" }, void 0, !1, {
        fileName: "app/components/CurrentUserCard.jsx",
        lineNumber: 13,
        columnNumber: 16
      }, this),
      " ",
      user.last_access
    ] }, void 0, !0, {
      fileName: "app/components/CurrentUserCard.jsx",
      lineNumber: 13,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      "Needed one: ",
      user.selected_locations
    ] }, void 0, !0, {
      fileName: "app/components/CurrentUserCard.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CurrentUserCard.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/UpdateCurrentUser.jsx
var import_react9 = require("react");

// app/lib/users.js
async function updateCurrentUser(payload, token) {
  var _a, _b;
  let response = await fetch(`${API_BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ data: payload })
  }), json8 = await response.json();
  if (!response.ok)
    throw new Error(((_b = (_a = json8 == null ? void 0 : json8.errors) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) || "Failed to update user");
  return console.log("Updated user data:", json8), json8.data;
}
async function getUserAllowedLocations(id) {
  var _a, _b;
  let allowedLocationIds = ((_b = (_a = (await (await fetch(`${API_BASE_URL}/users/${id}?fields[]=*.*`)).json()).data) == null ? void 0 : _a.allowed_locations) == null ? void 0 : _b.map(
    (item) => item.Locations_id
  )) || [];
  return console.log(allowedLocationIds), allowedLocationIds;
}

// app/components/UpdateCurrentUser.jsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function UpdateLocation() {
  let [status, setStatus] = (0, import_react9.useState)("");
  async function handleUpdate() {
    try {
      await updateCurrentUser({ first_name: "sa16" }, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc0YzlkNDdjLWE2NmYtNDQ4ZC1hNWY5LTJiODExODRiZmViMyIsInJvbGUiOm51bGwsImFwcF9hY2Nlc3MiOm51bGwsImFkbWluX2FjY2VzcyI6bnVsbCwiaWF0IjoxNzYzMTIwOTc0LCJleHAiOjE3NjMxMjE4NzQsImlzcyI6ImRpcmVjdHVzIn0.7rbr-RuzIxVLNWrn_Q4Q1JxQBFrGC8QDieTfFEc8ve4"), setStatus("Updated successfully!");
    } catch (err) {
      setStatus(err.message);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      "button",
      {
        onClick: handleUpdate,
        className: "px-4 py-2 bg-black text-white rounded",
        children: "Update Selected Location"
      },
      void 0,
      !1,
      {
        fileName: "app/components/UpdateCurrentUser.jsx",
        lineNumber: 19,
        columnNumber: 13
      },
      this
    ),
    status && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "mt-2", children: status }, void 0, !1, {
      fileName: "app/components/UpdateCurrentUser.jsx",
      lineNumber: 26,
      columnNumber: 24
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/UpdateCurrentUser.jsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/components/AdminLayout.jsx
var import_react15 = require("@remix-run/react"), import_react16 = require("react");

// app/components/AdminPanelLink.jsx
var import_react10 = require("@remix-run/react"), import_lucide_react = require("lucide-react"), import_clsx2 = __toESM(require("clsx")), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function AdminPanelLink({
  to,
  icon: Icon = import_lucide_react.Settings,
  children,
  className,
  ...props
}) {
  let { pathname } = (0, import_react10.useLocation)(), isActive = pathname === to, showIcon = Icon !== "none";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_react10.Link,
    {
      to,
      className: (0, import_clsx2.default)(
        "flex items-center gap-3 px-6 py-4 transition-colors duration-200",
        isActive ? "border-l border-gray-300 text-white" : "text-gray-300 hover:bg-gray-700",
        className
      ),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Icon, { className: "w-5 h-5" }, void 0, !1, {
          fileName: "app/components/AdminPanelLink.jsx",
          lineNumber: 29,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("span", { children }, void 0, !1, {
          fileName: "app/components/AdminPanelLink.jsx",
          lineNumber: 30,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/AdminPanelLink.jsx",
      lineNumber: 20,
      columnNumber: 9
    },
    this
  );
}

// app/components/AdminLayout.jsx
var import_lucide_react2 = require("lucide-react");

// app/components/LocationSelector.jsx
var import_react12 = require("react"), import_react13 = require("react");

// app/components/Toast.jsx
var import_react11 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Toast({ message, type = "success", onClose }) {
  return (0, import_react11.useEffect)(() => {
    let timer = setTimeout(onClose, 3e3);
    return () => clearTimeout(timer);
  }, [onClose]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: `
      fixed top-4 right-4 px-4 py-3 rounded shadow-lg z-[10] text-white text-sm animate-fade-in
      ${type === "success" ? "bg-green-600" : type === "warning" ? "bg-orange-500" : "bg-red-600"}

    `, children: message }, void 0, !1, {
    fileName: "app/components/Toast.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/components/LocationSelector.jsx
var import_react14 = require("@headlessui/react"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function LocationSelector({ user, token, selectedLocation: selectedLocation2, setSelectedLocation, variant = "default" }) {
  var _a;
  let [locations, setLocations] = (0, import_react13.useState)([]), [userId] = (0, import_react13.useState)((user == null ? void 0 : user.id) || null), [toast, setToast] = (0, import_react13.useState)(null), dismissToast = () => setToast(null), isBlack = variant === "black", textColor = isBlack ? "text-[#777]" : "text-white", bgColor = isBlack ? "bg-white" : "bg-gray-700", optionActiveBg = isBlack ? "bg-gray-200" : "bg-gray-600", dropdownPosition = isBlack ? "" : "absolute";
  (0, import_react13.useEffect)(() => {
    async function loadData() {
      try {
        let locs = await fetchLocations(), allowedLocs1 = await getUserAllowedLocations(user.id);
        console.log(allowedLocs1);
        let allowedLocs = allowedLocs1.length ? locs.filter(
          (loc) => allowedLocs1.includes(loc.id)
        ) : [];
        if (setLocations(allowedLocs), user != null && user.selected_locations) {
          let exists = allowedLocs.some(
            (loc) => loc.id === user.selected_locations
          );
          setSelectedLocation(exists ? user.selected_locations : "");
        } else
          setSelectedLocation("");
      } catch (err) {
        console.error("Error loading locations:", err);
      }
    }
    loadData();
  }, []);
  async function handleLocationChange(value) {
    setSelectedLocation(value);
    let selectedLocObject = locations.find((l) => l.id === value);
    selectedLocObject && window.dispatchEvent(new CustomEvent("locationChanged", { detail: selectedLocObject }));
    try {
      await updateCurrentUser({ selected_locations: value }, token), setToast({
        message: "Location updated successfully!",
        type: "success"
      });
    } catch (err) {
      console.error(err), setToast({
        message: err.message || "Failed to update location.",
        type: "error"
      });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react14.Listbox, { value: selectedLocation2, onChange: (value) => handleLocationChange(value), children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react14.ListboxButton,
        {
          className: `w-full border border-gray-300 px-4 py-2 rounded text-left flex justify-between ${textColor}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { children: selectedLocation2 ? (_a = locations.find((l) => l.id === selectedLocation2)) == null ? void 0 : _a.name : "Allowed Locations" }, void 0, !1, {
              fileName: "app/components/LocationSelector.jsx",
              lineNumber: 93,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("span", { className: textColor, children: "\u25BC" }, void 0, !1, {
              fileName: "app/components/LocationSelector.jsx",
              lineNumber: 98,
              columnNumber: 25
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/LocationSelector.jsx",
          lineNumber: 90,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react14.ListboxOptions,
        {
          className: `${bgColor} mt-1 rounded shadow-lg text-left w-full ${dropdownPosition}`,
          children: locations.map((loc) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
            import_react14.ListboxOption,
            {
              value: loc.id,
              className: ({ active }) => `px-4 py-2 cursor-pointer ${active ? optionActiveBg : ""} ${textColor}`,
              children: loc.name
            },
            loc.id,
            !1,
            {
              fileName: "app/components/LocationSelector.jsx",
              lineNumber: 105,
              columnNumber: 29
            },
            this
          ))
        },
        void 0,
        !1,
        {
          fileName: "app/components/LocationSelector.jsx",
          lineNumber: 101,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/LocationSelector.jsx",
      lineNumber: 89,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/LocationSelector.jsx",
      lineNumber: 88,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: dismissToast
      },
      void 0,
      !1,
      {
        fileName: "app/components/LocationSelector.jsx",
        lineNumber: 120,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/LocationSelector.jsx",
    lineNumber: 87,
    columnNumber: 9
  }, this);
}
var LocationSelector_default = LocationSelector;

// app/components/AdminLayout.jsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), SelectedLocationContext = (0, import_react16.createContext)(null);
function AdminLayout({ children, user, token }) {
  let [logoUrl, setLogoUrl] = (0, import_react16.useState)(null), [open, setOpen] = (0, import_react16.useState)(!0), [selectedLocation2, setSelectedLocation] = (0, import_react16.useState)((user == null ? void 0 : user.selected_locations) || "");
  return (0, import_react16.useEffect)(() => {
    function updateLogo(e) {
      let loc = e.detail;
      if (!(loc != null && loc.logo)) {
        setLogoUrl(null);
        return;
      }
      setLogoUrl(`${API_BASE_URL}/assets/${loc.logo}`);
    }
    return window.addEventListener("locationChanged", updateLogo), () => window.removeEventListener("locationChanged", updateLogo);
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SelectedLocationContext.Provider, { value: { selectedLocation: selectedLocation2, setSelectedLocation }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "min-h-screen flex relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      "aside",
      {
        className: "bg-[var(--primary-color)] sticky top-0 h-[100vh] flex flex-col text-white transition-all duration-300 w-64",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex justify-between p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: logoUrl || "/images/iss_logo.webp", alt: "iss logo", width: "50px", className: "logo" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 42,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Link, { to: "/logout", className: "block px-3 py-2 hover:bg-gray-700", children: "Logout" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 44,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 41,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-5 mx-4 mb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
            LocationSelector_default,
            {
              user,
              token,
              selectedLocation: selectedLocation2,
              setSelectedLocation
            },
            void 0,
            !1,
            {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 59,
              columnNumber: 25
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 58,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("nav", { className: "space-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AdminPanelLink, { to: "/admin", className: "mb-2", children: "Live Stage" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 70,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AdminPanelLink, { to: "/admin/#", icon: import_lucide_react2.HandPlatter, children: "Kitchen" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 74,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "sub-menu", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AdminPanelLink, { to: "/admin/kitchen/cafe", icon: "none", className: "pl-16", children: "Cafe & Food Waste" }, void 0, !1, {
                fileName: "app/components/AdminLayout.jsx",
                lineNumber: 79,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AdminPanelLink, { to: "#", icon: "none", className: "pl-16", children: "Signs" }, void 0, !1, {
                fileName: "app/components/AdminLayout.jsx",
                lineNumber: 83,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 78,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(AdminPanelLink, { to: "/admin/settings", children: "Settings" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 88,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 68,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex mt-auto justify-between pt-4 p-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("img", { src: "/images/sous-chef-white.svg", alt: "sous-chef logo", width: "70px", className: "logo" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 94,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: "Need support?" }, void 0, !1, {
                fileName: "app/components/AdminLayout.jsx",
                lineNumber: 96,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("a", { href: "#", className: "font-bold", children: "Click here" }, void 0, !1, {
                fileName: "app/components/AdminLayout.jsx",
                lineNumber: 97,
                columnNumber: 29
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 95,
              columnNumber: 25
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 93,
            columnNumber: 21
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AdminLayout.jsx",
        lineNumber: 36,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "flex-1 p-6 overflow-y-auto max-w-none mt-[0]", children }, void 0, !1, {
      fileName: "app/components/AdminLayout.jsx",
      lineNumber: 102,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdminLayout.jsx",
    lineNumber: 35,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/AdminLayout.jsx",
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/index.jsx
var import_react18 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  let user = await getCurrentUser(request);
  return (0, import_node5.json)({ user });
}
function Dashboard() {
  let { user, token, refresh_token, expires_in } = (0, import_react17.useLoaderData)(), { selectedLocation: selectedLocation2 } = (0, import_react18.useContext)(SelectedLocationContext);
  return console.log("\u{1F510} CLIENT \u2014 USER:", user), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "text-2xl font-bold", children: [
      "Welcome, ",
      user.email || "User",
      " \u{1F44B}"
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "text-2xl font-bold", children: [
      "Your current location: ",
      selectedLocation2.selectedLocation,
      "    "
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mb-4 p-3 rounded bg-gray-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Access Token:" }, void 0, !1, {
          fileName: "app/routes/dashboard/index.jsx",
          lineNumber: 32,
          columnNumber: 20
        }, this),
        " ",
        token
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/index.jsx",
        lineNumber: 32,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Refresh Token:" }, void 0, !1, {
          fileName: "app/routes/dashboard/index.jsx",
          lineNumber: 33,
          columnNumber: 20
        }, this),
        " ",
        refresh_token
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/index.jsx",
        lineNumber: 33,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("strong", { children: "Expires In:" }, void 0, !1, {
          fileName: "app/routes/dashboard/index.jsx",
          lineNumber: 34,
          columnNumber: 20
        }, this),
        " ",
        expires_in
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard/index.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 31,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(CurrentUserCard, { user }, void 0, !1, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(UpdateLocation, { user }, void 0, !1, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 38,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react17.Form, { method: "post", action: "/logout", reloadDocument: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Button, { type: "submit", variant: "danger", children: "Logout" }, void 0, !1, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 41,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/index.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/routes/admin/settings.jsx
var settings_exports = {};
__export(settings_exports, {
  default: () => settings_default
});
var import_react19 = require("react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Settings2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: "This is setting" }, void 0, !1, {
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
  default: () => kitchen_default,
  loader: () => loader4
});
var import_react31 = require("react");

// app/components/ProductGrid.jsx
var import_react26 = require("react");

// app/components/Toggle.jsx
var import_react20 = require("react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function Toggle({ apiOn = !1, onToggle }) {
  let [on, setOn] = (0, import_react20.useState)(apiOn);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    "button",
    {
      onClick: () => {
        setOn(!on), onToggle && onToggle(!on);
      },
      className: `w-20 h-8 rounded-full flex items-center px-1 relative transition-all duration-200 ${on ? "bg-[var(--primary-color)]" : "bg-gray-300"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
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
var import_react23 = require("@remix-run/react"), import_react24 = require("react");

// app/components/CopyLinkButton.jsx
var import_react22 = require("react");

// app/hooks/useClipboard.js
var import_react21 = require("react"), DEFAULT_RESET_DELAY = 2e3;
function useClipboard({ resetDelay = DEFAULT_RESET_DELAY } = {}) {
  let [status, setStatus] = (0, import_react21.useState)("idle"), [error2, setError] = (0, import_react21.useState)(null), reset = (0, import_react21.useCallback)(() => {
    setStatus("idle"), setError(null);
  }, []);
  return {
    copy: (0, import_react21.useCallback)(
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
    error: error2,
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
var url_default = buildAbsoluteUrl;

// app/components/CopyLinkButton.jsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function CopyLinkButton({ screenNumber }) {
  let clipboard = useClipboard_default({ resetDelay: 2e3 }), linkToCopy = (0, import_react22.useMemo)(() => {
    let { origin } = window.location;
    return buildAbsoluteUrl(`/banner/product/1/${screenNumber}`, origin);
  }, [screenNumber]), label = clipboard.status === "success" ? "Copied!" : clipboard.status === "error" ? "Failed to copy" : "Copy Link";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
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
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function PreviewModal({ open, onClose, data, screen, setScreen, screenNumber }) {
  if (!open)
    return null;
  let hasError = data.some((item) => item.error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 regular-text",
      onClick: onClose,
      onKeyDown: (e) => {
        e.key === "Escape" && onClose();
      },
      tabIndex: 0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "div",
        {
          className: "w-[1080px] p-8 max-h-[80vh] min-h-[70vh] overflow-y-auto svg-bg bg-[var(--banner-bg-color)]",
          onClick: (e) => e.stopPropagation(),
          children: [
            hasError ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, {}, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 23,
              columnNumber: 33
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex gap-3 mt-6 justify-end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: () => setScreen("screen1") }, void 0, !1, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 26,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { onClick: () => setScreen("screen2"), children: "next" }, void 0, !1, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 27,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 25,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-4xl bold-text mb-2", children: "THE BRICK" }, void 0, !1, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 29,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h6", { className: "text-2xl regular-text mb-6", children: "Lounge & Bar" }, void 0, !1, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 33,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "columns-2 gap-x-10 w-full", children: data.map(({ category, products }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "category mb-6 break-inside-avoid", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h3", { className: "bold-text text-lg", children: category }, void 0, !1, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 38,
                  columnNumber: 41
                }, this),
                products.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex gap-[20px] justify-between items-center py-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: prod.name }, void 0, !1, {
                      fileName: "app/components/PreviewModal.jsx",
                      lineNumber: 43,
                      columnNumber: 53
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: prod.description }, void 0, !1, {
                      fileName: "app/components/PreviewModal.jsx",
                      lineNumber: 44,
                      columnNumber: 53
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/PreviewModal.jsx",
                    lineNumber: 42,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: prod.price }, void 0, !1, {
                    fileName: "app/components/PreviewModal.jsx",
                    lineNumber: 47,
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "menu-wrapper p-6 pt-32 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex justify-start mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(CopyLinkButton_default, { screenNumber }, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 58,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 57,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 56,
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
var import_react25 = require("react");

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
    let categoryProductIds = new Set((category == null ? void 0 : category.product_list) || []), filteredProducts = products.filter((product) => {
      let hasId = categoryProductIds.has(product.id), hasScreenKey = Boolean(product == null ? void 0 : product[screenKey]), hasValidName = (product == null ? void 0 : product.name) && typeof product.name == "string" && product.name.trim().length > 0;
      return hasId && hasScreenKey && hasValidName;
    });
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
  let [categories, setCategories] = (0, import_react25.useState)([]), [products, setProducts] = (0, import_react25.useState)([]), [updates, setUpdates] = (0, import_react25.useState)({}), [toast, setToast] = (0, import_react25.useState)(null), [loading, setLoading] = (0, import_react25.useState)(!1), [error2, setError] = (0, import_react25.useState)(null), [isSaving, setIsSaving] = (0, import_react25.useState)(!1);
  (0, import_react25.useEffect)(() => {
    let isMounted = !0;
    async function loadData() {
      setLoading(!0);
      try {
        let data = await fetchCategoriesAndProducts();
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
  let showToast = (0, import_react25.useCallback)((message, type = "success") => {
    setToast({ message, type });
  }, []), dismissToast = (0, import_react25.useCallback)(() => setToast(null), []), handleProductUpdate = (0, import_react25.useCallback)((productId, updatedFields) => {
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
  }, []), saveAllUpdates = (0, import_react25.useCallback)(async () => {
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
  }, [showToast, updates]), getProductsForCategory = (0, import_react25.useCallback)(
    (category) => {
      if (!category)
        return [];
      let productIds = new Set(category.product_list || []);
      return products.filter((product) => productIds.has(product.id));
    },
    [products]
  ), previewDataForScreen = (0, import_react25.useCallback)(
    (screen) => buildPreviewData(categories, products, screen),
    [categories, products]
  ), hasPendingUpdates = (0, import_react25.useMemo)(() => Object.keys(updates).length > 0, [updates]);
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
    error: error2,
    isSaving,
    hasPendingUpdates,
    previewDataForScreen
  };
}
var useProductsTable_default = useProductsTable;

// app/components/ProductGrid.jsx
var import_lucide_react3 = require("lucide-react"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function ProductsTable() {
  let {
    categories,
    getProductsForCategory,
    handleProductUpdate,
    saveAllUpdates,
    toast,
    dismissToast,
    loading,
    error: error2,
    isSaving,
    previewDataForScreen
  } = useProductsTable_default(), [showPreviewModal, setShowPreviewModal] = (0, import_react26.useState)(!1), [previewScreen, setPreviewScreen] = (0, import_react26.useState)("screen1"), previewData = (0, import_react26.useMemo)(
    () => previewDataForScreen(previewScreen),
    [previewDataForScreen, previewScreen]
  );
  return loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-6", children: "Loading products\u2026" }, void 0, !1, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 32,
    columnNumber: 16
  }, this) : error2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-6 text-red-600", children: error2 }, void 0, !1, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 36,
    columnNumber: 16
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "p-6 px-0 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex justify-end items-center mb-6 pos-top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "mr-4", children: "Remember to update before leaving" }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Button, { onClick: saveAllUpdates, variant: "primary", disabled: isSaving, children: isSaving ? "Saving..." : "Update" }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 43,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex justify-end items-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      Button,
      {
        variant: "secondary",
        onClick: () => {
          setPreviewScreen("screen1"), setShowPreviewModal(!0);
        },
        className: "flex gap-[10px] items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_lucide_react3.Eye, { size: 20 }, void 0, !1, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 57,
            columnNumber: 21
          }, this),
          " Preview"
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 49,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("table", { className: "min-w-full border-collapse text-sm border border-gray-400", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("thead", { className: "bg-[var(--primary-color)] text-white font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "th",
          {
            className: "p-3 border border-gray-400 text-left",
            children: [
              "Category",
              " "
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 66,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "th",
          {
            className: "p-3 border border-gray-400 text-left",
            children: [
              "Name",
              " "
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 71,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("th", { className: "p-3 border border-gray-400 text-left", children: "Description" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 77,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("th", { className: "p-3 border border-gray-400 text-left", children: "Price" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 78,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("th", { className: "p-3 border border-gray-400 text-left text-nowrap", children: "Display Screen 1" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 79,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("th", { className: "p-3 border border-gray-400 text-left text-nowrap", children: "Display Screen 2" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 80,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 65,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 64,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: categories.map((category) => {
        let categoryProducts = getProductsForCategory(category);
        return categoryProducts.map((product, index) => {
          var _a, _b;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("tr", { className: "border border-gray-400", children: [
            index === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "td",
              {
                rowSpan: categoryProducts.length,
                className: "font-semibold text-[var(--primary-color)] border border-gray-400 p-3 align-top",
                children: category.name
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 94,
                columnNumber: 41
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "td",
              {
                className: "p-3 font-medium border border-gray-400 cursor-pointer",
                onClick: (e) => {
                  let textarea = e.currentTarget.querySelector("textarea");
                  textarea == null || textarea.focus();
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col gap-y-4 w-[250px] h-[150px] justify-between", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                    "textarea",
                    {
                      value: product.name || "",
                      maxLength: 250,
                      onChange: (e) => handleProductUpdate(product.id, {
                        name: e.target.value
                      }),
                      className: "w-full text-[var(--primary-color)] border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar h-[100px]"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/ProductGrid.jsx",
                      lineNumber: 111,
                      columnNumber: 45
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-gray-600", children: [
                    "Upto ",
                    ((_a = product.name) == null ? void 0 : _a.length) || 0,
                    " / 250 characters"
                  ] }, void 0, !0, {
                    fileName: "app/components/ProductGrid.jsx",
                    lineNumber: 121,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/ProductGrid.jsx",
                  lineNumber: 110,
                  columnNumber: 41
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 103,
                columnNumber: 37
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "td",
              {
                className: "p-3 border border-gray-400 cursor-pointer",
                onClick: (e) => {
                  let textarea = e.currentTarget.querySelector("textarea");
                  textarea == null || textarea.focus();
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col gap-y-4 w-[250px] h-[150px] justify-between", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                    "textarea",
                    {
                      value: product.description || "",
                      maxLength: 250,
                      onChange: (e) => handleProductUpdate(product.id, {
                        description: e.target.value
                      }),
                      className: "w-full text-[var(--primary-color)] border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar h-[100px]"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/ProductGrid.jsx",
                      lineNumber: 134,
                      columnNumber: 45
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "text-gray-600", children: [
                    "Upto ",
                    ((_b = product.description) == null ? void 0 : _b.length) || 0,
                    " /     250 characters"
                  ] }, void 0, !0, {
                    fileName: "app/components/ProductGrid.jsx",
                    lineNumber: 144,
                    columnNumber: 45
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/ProductGrid.jsx",
                  lineNumber: 133,
                  columnNumber: 41
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 126,
                columnNumber: 37
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              "td",
              {
                className: "p-3 font-medium border border-gray-400 cursor-pointer",
                onClick: (e) => {
                  let input = e.currentTarget.querySelector("input");
                  input == null || input.focus();
                },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col gap-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                  "input",
                  {
                    type: "text",
                    value: product.price ?? "",
                    onChange: (e) => {
                      let cleaned = e.target.value.replace(/[^0-9,\-]/g, "");
                      handleProductUpdate(product.id, { price: cleaned });
                    },
                    className: "w-24 text-[var(--primary-color)] border-none px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/ProductGrid.jsx",
                    lineNumber: 158,
                    columnNumber: 45
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/ProductGrid.jsx",
                  lineNumber: 157,
                  columnNumber: 41
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 150,
                columnNumber: 37
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "p-3 border border-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              Toggle_default,
              {
                apiOn: product.display_on_screen_1,
                onToggle: (newVal) => handleProductUpdate(product.id, { display_on_screen_1: newVal })
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 172,
                columnNumber: 41
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 171,
              columnNumber: 37
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("td", { className: "p-3 border border-gray-400", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              Toggle_default,
              {
                apiOn: product.display_on_screen_2,
                onToggle: (newVal) => handleProductUpdate(product.id, { display_on_screen_2: newVal })
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 182,
                columnNumber: 41
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 181,
              columnNumber: 37
            }, this)
          ] }, product.id, !0, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 90,
            columnNumber: 33
          }, this);
        });
      }) }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 85,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 62,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
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
        lineNumber: 197,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
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
        lineNumber: 212,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

// app/routes/admin/kitchen/foodwaste.jsx
var foodwaste_exports = {};
__export(foodwaste_exports, {
  default: () => foodwaste_default,
  links: () => links2
});
var import_react30 = require("react");

// app/hooks/useFoodWasteTable.js
var import_dayjs2 = __toESM(require("dayjs"));
var import_weekday2 = __toESM(require("dayjs/plugin/weekday")), import_weekOfYear2 = __toESM(require("dayjs/plugin/weekOfYear")), import_react27 = require("react");
import_dayjs2.default.extend(import_weekday2.default);
import_dayjs2.default.extend(import_weekOfYear2.default);
function useFoodWasteTable(selectedLocationId) {
  let [records, setRecords] = (0, import_react27.useState)([]), [updates, setUpdates] = (0, import_react27.useState)({}), [week, setWeek] = (0, import_react27.useState)((0, import_dayjs2.default)().week()), [loading, setLoading] = (0, import_react27.useState)(!1), [isSaving, setIsSaving] = (0, import_react27.useState)(!1), [toast, setToast] = (0, import_react27.useState)(null), [orientation, setOrientation] = (0, import_react27.useState)("landscape");
  (0, import_react27.useEffect)(() => {
    async function load() {
      setLoading(!0);
      try {
        let data = await fetchFoodWaste(selectedLocationId), isVertical = await getLocationIsVertical(selectedLocationId);
        setOrientation(isVertical ? "portrait" : "landscape"), setRecords(data);
      } finally {
        setLoading(!1);
      }
    }
    selectedLocationId && load();
  }, [selectedLocationId]);
  let filteredRecords = (0, import_react27.useMemo)(() => records.filter((r) => (0, import_dayjs2.default)(r.date).week() === Number(week)), [records, week]), showToast = (0, import_react27.useCallback)((message, type = "success") => {
    setToast({ message, type });
  }, []), dismissToast = (0, import_react27.useCallback)(() => setToast(null), []), handleUpdate = (0, import_react27.useCallback)((id, updatedFields) => {
    setRecords(
      (prev) => prev.map((rec) => rec.id === id ? { ...rec, ...updatedFields } : rec)
    ), setUpdates((prev) => ({
      ...prev,
      [id]: { ...prev[id] || {}, ...updatedFields }
    }));
  }, []), getPendingValue = (0, import_react27.useCallback)(
    (id, field, fallback) => {
      let pending = updates[id];
      return pending && Object.prototype.hasOwnProperty.call(pending, field) ? pending[field] : fallback;
    },
    [updates]
  ), saveUpdates = (0, import_react27.useCallback)(async () => {
    if (!Object.keys(updates).length)
      return;
    let toUpdate = [], toCreate = [];
    Object.entries(updates).forEach(([key, data]) => {
      Number(key) ? toUpdate.push({ id: Number(key), ...data }) : toCreate.push({
        ...data,
        location_id: selectedLocation
      });
    }), setIsSaving(!0);
    try {
      toUpdate.length > 0 && await patchFoodWaste(toUpdate), toCreate.length > 0 && (console.log("entered data to pass" + toCreate), await createFoodWaste(toCreate)), showToast("\u2705 Saved successfully!"), setUpdates({});
    } catch (err) {
      console.error(err), showToast("\u274C Failed to save.", "error");
    } finally {
      setIsSaving(!1);
    }
  }, [updates, showToast]);
  return {
    week,
    setWeek,
    allRecords: records,
    filteredRecords,
    handleUpdate,
    getPendingValue,
    saveUpdates,
    loading,
    isSaving,
    hasPendingUpdates: Object.keys(updates).length > 0,
    toast,
    dismissToast,
    orientation,
    setOrientation
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

// app/routes/admin/kitchen/foodwaste.jsx
var import_dayjs3 = __toESM(require("dayjs")), import_weekday3 = __toESM(require("dayjs/plugin/weekday")), import_weekOfYear3 = __toESM(require("dayjs/plugin/weekOfYear"));

// app/components/FoodWastePreview.jsx
var import_react28 = require("react");
var import_lucide_react4 = require("lucide-react"), import_clsx3 = __toESM(require("clsx"));
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function FoodWastePreview({
  currentWeek,
  orientation,
  plateWasteCurrentWeek,
  plateWasteWeeklyAvg,
  totalWasteCurrentWeek,
  totalWasteWeeklyAvg,
  plateSeries = [],
  totalSeries = [],
  isIncreasePlate,
  isIncreaseTotal,
  selectedLocation: selectedLocation2
}) {
  let textColorPlate = isIncreasePlate ? "text-[#8B4513]" : "text-[#24361F]", arrowIconPlate = isIncreasePlate ? "/images/arrow-up.svg" : "/images/arrow-down.svg", textColorAvg = isIncreaseTotal ? "text-[#8B4513]" : "text-[#24361F]", arrowIconAvg = isIncreaseTotal ? "/images/arrow-up.svg" : "/images/arrow-down.svg", clipboard = useClipboard_default({ resetDelay: 2e3 }), linkToCopy = (0, import_react28.useMemo)(() => {
    if (!selectedLocation2)
      return "";
    let { origin } = window.location;
    return url_default(`/banner/foodwaste/${selectedLocation2}`, origin);
  }, [selectedLocation2]), label = clipboard.status === "success" ? "Copied!" : clipboard.status === "error" ? "Failed to copy" : "Copy Link", handleCopy = () => clipboard.copy(linkToCopy);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)("bg-[#E6EFE6] py-8 px-12 rounded-md h-full overflow-y-auto", orientation === "landscape" ? "food-waste-hr-bg" : "food-waste-vr-bg"), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: (0, import_clsx3.default)("mb-10 font-semibold text-3xl", orientation === "landscape" ? "text-[#24361F]" : "text-black"), children: "Food Waste" }, void 0, !1, {
      fileName: "app/components/FoodWastePreview.jsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    plateWasteCurrentWeek === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/components/FoodWastePreview.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "grid gap-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { className: (0, import_clsx3.default)("flex", orientation === "landscape" ? "gap-12 items-center" : "flex-col items-start gap-4"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)(orientation === "landscape" ? "basis-[200px] text-[#24361F]" : "basis-auto text-black"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "text-xl font-semibold mb-1", children: "Plate Waste" }, void 0, !1, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 64,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-sm font-semibold opacity-80 mb-4", children: "pr. Guest / Day" }, void 0, !1, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 67,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-sm opacity-80 mb-4", children: "Good food thrown in the trash" }, void 0, !1, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 70,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FoodWastePreview.jsx",
          lineNumber: 63,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center gap-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)("mb-4 text-xs font-semibold", orientation === "landscape" ? "text-[#24361F]" : "text-black"), children: "Last Week" }, void 0, !1, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 77,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: `w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold ${textColorPlate}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex gap-2", children: [
                Math.round(plateWasteCurrentWeek),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: arrowIconPlate, width: "20px", height: "20px" }, void 0, !1, {
                  fileName: "app/components/FoodWastePreview.jsx",
                  lineNumber: 83,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/FoodWastePreview.jsx",
                lineNumber: 81,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 text-xs opacity-80", children: "grams" }, void 0, !1, {
                fileName: "app/components/FoodWastePreview.jsx",
                lineNumber: 86,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 80,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 76,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)("mb-4 text-xs font-semibold", orientation === "landscape" ? "text-[#24361F]" : "text-black"), children: "Weekly Average*" }, void 0, !1, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 90,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold text-white", children: [
              Math.round(plateWasteWeeklyAvg),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 text-xs text-white opacity-80", children: "grams" }, void 0, !1, {
                fileName: "app/components/FoodWastePreview.jsx",
                lineNumber: 97,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 93,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 89,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)("flex flex-col gap-2", orientation === "landscape" ? "text-[#24361F]" : "text-black"), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(WeeklyAreaChart, { series: plateSeries, color: "#CBD5E1" }, void 0, !1, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 103,
              columnNumber: 29
            }, this),
            "Weekly Average *",
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 105,
              columnNumber: 29
            }, this),
            "(Based on last three months *)"
          ] }, void 0, !0, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 101,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FoodWastePreview.jsx",
          lineNumber: 75,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/FoodWastePreview.jsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      totalWasteCurrentWeek === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", {}, void 0, !1, {
        fileName: "app/components/FoodWastePreview.jsx",
        lineNumber: 113,
        columnNumber: 49
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { className: (0, import_clsx3.default)("flex", orientation === "landscape" ? "gap-12 items-center" : "flex-col items-start gap-4"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)(orientation === "landscape" ? "basis-[200px] text-[#24361F]" : "basis-auto text-black"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "text-xl font-semibold mb-1", children: "Total Waste" }, void 0, !1, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 115,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-sm  font-semibold opacity-80 mb-4", children: "pr. Guest / Day" }, void 0, !1, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 118,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-sm opacity-80 mb-4", children: "Plate Waste + Production Waste + Buffet waste" }, void 0, !1, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 121,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FoodWastePreview.jsx",
          lineNumber: 114,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex items-center gap-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)("mb-4 text-xs font-semibold", orientation === "landscape" ? "text-[#24361F]" : "text-black"), children: "Last Week" }, void 0, !1, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 128,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: `w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold ${textColorAvg}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex gap-2", children: [
                Math.round(totalWasteCurrentWeek),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: arrowIconAvg, width: "20px", height: "20px" }, void 0, !1, {
                  fileName: "app/components/FoodWastePreview.jsx",
                  lineNumber: 134,
                  columnNumber: 37
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/FoodWastePreview.jsx",
                lineNumber: 132,
                columnNumber: 33
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 text-xs opacity-80", children: "grams" }, void 0, !1, {
                fileName: "app/components/FoodWastePreview.jsx",
                lineNumber: 136,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 131,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 127,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)("mb-4 text-xs font-semibold", orientation === "landscape" ? "text-[#24361F]" : "text-black"), children: "Weekly Average*" }, void 0, !1, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 140,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "w-28 h-28 rounded-full border border-white/60 flex flex-col items-center justify-center text-3xl font-semibold text-white", children: [
              Math.round(totalWasteWeeklyAvg),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-2 text-xs text-white opacity-80", children: "grams" }, void 0, !1, {
                fileName: "app/components/FoodWastePreview.jsx",
                lineNumber: 145,
                columnNumber: 33
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 143,
              columnNumber: 29
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 139,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: (0, import_clsx3.default)("flex flex-col gap-2 ", orientation === "landscape" ? "text-[#24361F]" : "text-black"), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(WeeklyAreaChart, { series: totalSeries, color: "#CBD5E1" }, void 0, !1, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 151,
              columnNumber: 29
            }, this),
            "Weekly Average *",
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/components/FoodWastePreview.jsx",
              lineNumber: 153,
              columnNumber: 29
            }, this),
            "(Based on last three months *)"
          ] }, void 0, !0, {
            fileName: "app/components/FoodWastePreview.jsx",
            lineNumber: 149,
            columnNumber: 25
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/FoodWastePreview.jsx",
          lineNumber: 126,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/FoodWastePreview.jsx",
        lineNumber: 113,
        columnNumber: 65
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/FoodWastePreview.jsx",
      lineNumber: 61,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex justify-start mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      "button",
      {
        onClick: handleCopy,
        disabled: clipboard.status === "success",
        className: (0, import_clsx3.default)(
          "px-4 py-2 text-sm rounded-md transition-colors duration-200",
          "border border-[#24361F]",
          orientation === "landscape" ? "text-[#24361F] hover:bg-[#24361F] hover:text-white" : "text-black hover:bg-black hover:text-white"
        ),
        children: label
      },
      void 0,
      !1,
      {
        fileName: "app/components/FoodWastePreview.jsx",
        lineNumber: 165,
        columnNumber: 17
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/FoodWastePreview.jsx",
      lineNumber: 164,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/FoodWastePreview.jsx",
    lineNumber: 57,
    columnNumber: 9
  }, this);
}

// app/routes/admin/kitchen/foodwaste.jsx
var import_lucide_react6 = require("lucide-react");

// app/components/OrientationToggle.jsx
var import_react29 = require("react"), import_lucide_react5 = require("lucide-react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function OrientationToggle({ value, onChange }) {
  let orientation = value, handleClick = (val) => {
    onChange && onChange(val);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex items-center bg-gray-100 rounded-xl p-1 w-fit", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "button",
      {
        onClick: () => handleClick("portrait"),
        className: `flex items-center gap-2 px-4 py-2 rounded-bl rounded-tl transition-all ${orientation === "portrait" ? "bg-gray-600  text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-200"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_lucide_react5.Smartphone, { size: 18 }, void 0, !1, {
          fileName: "app/components/OrientationToggle.jsx",
          lineNumber: 21,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/OrientationToggle.jsx",
        lineNumber: 14,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "button",
      {
        onClick: () => handleClick("landscape"),
        className: `flex items-center gap-2 px-4 py-2 rounded-br rounded-tr transition-all ${orientation === "landscape" ? "bg-gray-600 text-white" : "bg-bg-gray-200 text-gray-700 hover:bg-gray-200"}`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_lucide_react5.Tv2, { size: 18 }, void 0, !1, {
          fileName: "app/components/OrientationToggle.jsx",
          lineNumber: 31,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/OrientationToggle.jsx",
        lineNumber: 24,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/OrientationToggle.jsx",
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

// app/routes/admin/kitchen/foodwaste.jsx
var import_node6 = require("@remix-run/node"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
import_dayjs3.default.extend(import_weekday3.default);
import_dayjs3.default.extend(import_weekOfYear3.default);
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
  let selectedLocation2 = (0, import_react30.useContext)(SelectedLocationContext), {
    week,
    setWeek,
    allRecords,
    filteredRecords,
    handleUpdate,
    getPendingValue,
    saveUpdates,
    loading,
    isSaving,
    hasPendingUpdates,
    toast,
    dismissToast,
    orientation,
    setOrientation
  } = useFoodWasteTable(selectedLocation2.selectedLocation), [isClient, setIsClient] = (0, import_react30.useState)(!1), [Spreadsheet, setSpreadsheet] = (0, import_react30.useState)(null), [sheetData, setSheetData] = (0, import_react30.useState)([]), [showPreview, setShowPreview] = (0, import_react30.useState)(!1), [previewData, setPreviewData] = (0, import_react30.useState)(null);
  (0, import_react30.useEffect)(() => {
    setIsClient(!0);
  }, []), (0, import_react30.useEffect)(() => {
    let mounted = !0;
    return import("react-spreadsheet").then((mod) => {
      !mounted || setSpreadsheet(() => mod.default || null);
    }).catch(() => {
    }), () => {
      mounted = !1;
    };
  }, []);
  let { start, end } = getWeekDateRange(week), recordsByDate = (0, import_react30.useMemo)(() => {
    let map = /* @__PURE__ */ new Map();
    return filteredRecords.forEach((item) => {
      let iso = (0, import_dayjs3.default)(item.date).format("YYYY-MM-DD");
      map.set(iso, item);
    }), map;
  }, [filteredRecords]), mondayOfWeek = (0, import_react30.useMemo)(() => (0, import_dayjs3.default)().week(Number(week)).weekday(1), [week]), rowModels = (0, import_react30.useMemo)(() => WEEKDAYS.map((_, idx) => {
    let dateIso = mondayOfWeek.add(idx, "day").format("YYYY-MM-DD"), record = recordsByDate.get(dateIso), key = (record == null ? void 0 : record.id) ?? dateIso;
    return {
      key,
      date: dateIso,
      number_of_users: coerceDisplayValue(getPendingValue(key, "number_of_users", (record == null ? void 0 : record.number_of_users) ?? "")),
      food_waste: coerceDisplayValue(getPendingValue(key, "food_waste", (record == null ? void 0 : record.food_waste) ?? "")),
      total_waste: coerceDisplayValue(getPendingValue(key, "total_waste", (record == null ? void 0 : record.total_waste) ?? ""))
    };
  }), [week, mondayOfWeek, recordsByDate, getPendingValue]);
  (0, import_react30.useEffect)(() => {
    let next = rowModels.map((r) => [
      { value: r.number_of_users },
      { value: r.food_waste },
      { value: r.total_waste }
    ]);
    setSheetData(next);
  }, [rowModels]);
  let columnLabels = (0, import_react30.useMemo)(() => ["No of Users this Day", "Plate Waste", "Total Waste"], []), rowLabels = (0, import_react30.useMemo)(() => WEEKDAYS.map((d, idx) => `${d} ${mondayOfWeek.add(idx, "day").format("DD/MM/YYYY")}`), [mondayOfWeek]), handleSheetChange = (0, import_react30.useCallback)((newData) => {
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
  }, [sheetData, rowModels, handleUpdate]), buildPreviewData2 = (0, import_react30.useCallback)(() => {
    let currentWeekNum = Number(week), lastWeekNum = currentWeekNum - 1, isWeek = (r, wn) => (0, import_dayjs3.default)(r.date).week() === wn;
    function weeklyPerGuestAverages(weekNum) {
      let days = allRecords.filter((r) => isWeek(r, weekNum)), plate = [], total = [];
      days.forEach((d) => {
        let users = Number(d.number_of_users) || 0;
        users > 0 && (d.food_waste != null && plate.push(Number(d.food_waste) / users), d.total_waste != null && total.push(Number(d.total_waste) / users));
      });
      let avg2 = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
      return { plateAvg: avg2(plate), totalAvg: avg2(total) };
    }
    let currentWeek = weeklyPerGuestAverages(currentWeekNum), lastWeek = weeklyPerGuestAverages(lastWeekNum), isIncreasePlate = currentWeek.plateAvg > lastWeek.plateAvg, isIncreaseTotal = currentWeek.totalAvg > lastWeek.totalAvg, plateSeries = [], totalSeries = [];
    for (let i = 12; i >= 1; i--) {
      let wn = currentWeekNum - i, { plateAvg, totalAvg } = weeklyPerGuestAverages(wn);
      plateSeries.push(Math.round(plateAvg)), totalSeries.push(Math.round(totalAvg));
    }
    let avg = (arr) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
    return {
      currentWeek: currentWeekNum,
      plateWasteCurrentWeek: currentWeek.plateAvg,
      totalWasteCurrentWeek: currentWeek.totalAvg,
      isIncreasePlate,
      isIncreaseTotal,
      plateWasteWeeklyAvg: avg(plateSeries),
      totalWasteWeeklyAvg: avg(totalSeries),
      plateSeries,
      totalSeries
    };
  }, [allRecords, week]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "pt-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-between gap-4 mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex gap-4 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("h3", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "text-[var(--primary-color)] text-2xl", children: [
            "Week ",
            week,
            " /"
          ] }, void 0, !0, {
            fileName: "app/routes/admin/kitchen/foodwaste.jsx",
            lineNumber: 200,
            columnNumber: 25
          }, this),
          " ",
          start,
          " - ",
          end
        ] }, void 0, !0, {
          fileName: "app/routes/admin/kitchen/foodwaste.jsx",
          lineNumber: 199,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            "button",
            {
              onClick: () => setWeek((prev) => Math.max(prev - 1, 1)),
              className: "px-3 py-1 border rounded hover:bg-gray-100",
              children: "\u2190"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/kitchen/foodwaste.jsx",
              lineNumber: 203,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
            "button",
            {
              onClick: () => setWeek((prev) => prev + 1),
              className: "px-3 py-1 border rounded hover:bg-gray-100",
              children: "\u2192"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/admin/kitchen/foodwaste.jsx",
              lineNumber: 210,
              columnNumber: 25
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/admin/kitchen/foodwaste.jsx",
          lineNumber: 202,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/kitchen/foodwaste.jsx",
        lineNumber: 198,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          OrientationToggle,
          {
            value: orientation,
            onChange: (value) => {
              setOrientation(value), updateLocationIsVertical(
                selectedLocation2.selectedLocation,
                value === "portrait"
              ).then(() => console.log("Orientation updated")).catch((err) => console.error(err));
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/admin/kitchen/foodwaste.jsx",
            lineNumber: 220,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
          Button,
          {
            variant: "secondary",
            onClick: () => {
              let data = buildPreviewData2();
              setPreviewData(data), setShowPreview(!0);
            },
            className: "flex gap-[10px] items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_lucide_react6.Eye, { size: 20 }, void 0, !1, {
                fileName: "app/routes/admin/kitchen/foodwaste.jsx",
                lineNumber: 242,
                columnNumber: 25
              }, this),
              " Preview"
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/admin/kitchen/foodwaste.jsx",
            lineNumber: 233,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/admin/kitchen/foodwaste.jsx",
        lineNumber: 219,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-end items-center mb-6 pos-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { className: "mr-4", children: "Remember to update before leaving" }, void 0, !1, {
          fileName: "app/routes/admin/kitchen/foodwaste.jsx",
          lineNumber: 248,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Button, { onClick: saveUpdates, variant: "primary", disabled: isSaving || !hasPendingUpdates, children: "Update" }, void 0, !1, {
          fileName: "app/routes/admin/kitchen/foodwaste.jsx",
          lineNumber: 249,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/admin/kitchen/foodwaste.jsx",
        lineNumber: 247,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/kitchen/foodwaste.jsx",
      lineNumber: 197,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: dismissToast
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/kitchen/foodwaste.jsx",
        lineNumber: 256,
        columnNumber: 17
      },
      this
    ),
    loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("p", { children: "Loading\u2026" }, void 0, !1, {
      fileName: "app/routes/admin/kitchen/foodwaste.jsx",
      lineNumber: 264,
      columnNumber: 17
    }, this) : isClient && Spreadsheet ? /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "rounded overflow-hidden w-full", style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      Spreadsheet,
      {
        data: sheetData,
        onChange: handleSheetChange,
        columnLabels,
        rowLabels,
        className: "w-full foodwaste-sheet",
        style: { width: "100%" }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/kitchen/foodwaste.jsx",
        lineNumber: 267,
        columnNumber: 21
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin/kitchen/foodwaste.jsx",
      lineNumber: 266,
      columnNumber: 17
    }, this) : null,
    showPreview && previewData && /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50", onClick: () => setShowPreview(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "bg-white rounded-md w-[90vw] h-[90vh]", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
      FoodWastePreview,
      {
        currentWeek: previewData.currentWeek,
        orientation,
        plateWasteCurrentWeek: previewData.plateWasteCurrentWeek,
        plateWasteWeeklyAvg: previewData.plateWasteWeeklyAvg,
        totalWasteCurrentWeek: previewData.totalWasteCurrentWeek,
        totalWasteWeeklyAvg: previewData.totalWasteWeeklyAvg,
        plateSeries: previewData.plateSeries,
        totalSeries: previewData.totalSeries,
        isIncreasePlate: previewData.isIncreasePlate,
        isIncreaseTotal: previewData.isIncreaseTotal,
        selectedLocation: selectedLocation2.selectedLocation
      },
      void 0,
      !1,
      {
        fileName: "app/routes/admin/kitchen/foodwaste.jsx",
        lineNumber: 280,
        columnNumber: 25
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/admin/kitchen/foodwaste.jsx",
      lineNumber: 279,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/kitchen/foodwaste.jsx",
      lineNumber: 278,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/kitchen/foodwaste.jsx",
    lineNumber: 196,
    columnNumber: 9
  }, this);
}
var foodwaste_default = FoodWaste;

// app/routes/admin/kitchen.jsx
var import_react32 = require("@remix-run/react"), import_node7 = require("@remix-run/node");
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
async function loader4({ request }) {
  let { user, token } = await getCurrentUser(request);
  return (0, import_node7.json)({ user, token });
}
function Kitchen() {
  let { user, token } = (0, import_react32.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react32.useSearchParams)(), activeTab = searchParams.get("tab") || "cafe", setTab = (tab) => setSearchParams({ tab }), tabBase = "px-6 py-4 pl-0 font-medium transition-colors", tabActive = "text-[var(--primary-color)] border-b-2 border-b-[var(--primary-color)]", tabInactive = "text-gray-700";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(AdminLayout, { user, token, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h1", { className: "text-2xl font-semibold mb-4 text-[--primary-color]", children: "Kitchen" }, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 36,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 35,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "flex gap-6 mb-4 border-b border-gray-200", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        import_react32.NavLink,
        {
          to: "cafe",
          className: ({ isActive }) => `${tabBase} ${isActive ? tabActive : tabInactive}`,
          children: "Cafe"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/kitchen.jsx",
          lineNumber: 41,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        import_react32.NavLink,
        {
          to: "foodwaste",
          className: ({ isActive }) => `${tabBase} ${isActive ? tabActive : tabInactive}`,
          children: "Food Waste"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/admin/kitchen.jsx",
          lineNumber: 50,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 39,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react32.Outlet, {}, void 0, !1, {
      fileName: "app/routes/admin/kitchen.jsx",
      lineNumber: 62,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/kitchen.jsx",
    lineNumber: 34,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/kitchen.jsx",
    lineNumber: 33,
    columnNumber: 9
  }, this);
}
var kitchen_default = Kitchen;

// app/routes/admin/kitchen/cafe.jsx
var cafe_exports = {};
__export(cafe_exports, {
  default: () => cafe_default
});
var import_react33 = require("react");
var import_node8 = require("@remix-run/node"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function Cafe() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(ProductsTable, {}, void 0, !1, {
    fileName: "app/routes/admin/kitchen/cafe.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
var cafe_default = Cafe;

// app/routes/logout/index.jsx
var logout_exports = {};
__export(logout_exports, {
  default: () => Logout,
  loader: () => loader5
});
var import_react34 = require("react"), import_node9 = require("@remix-run/node");
async function loader5({ request }) {
  let session = await getSession(request);
  return (0, import_node9.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}
function Logout() {
  return null;
}

// app/routes/signup/index.jsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action2,
  default: () => signup_default,
  loader: () => loader6
});
var import_react40 = require("react");

// app/components/Input.jsx
var import_react35 = require("react"), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function Input({ children, type = "text", className = "", ...props }) {
  let styles = `w-full pr-10 pl-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("input", { type, className: styles, ...props }, void 0, !1, {
    fileName: "app/components/Input.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var Input_default = Input;

// app/hooks/useImageUpload.js
var import_react36 = require("react"), DEFAULT_MAX_SIZE = 2 * 1024 * 1024;
function useImageUpload({ maxSize = DEFAULT_MAX_SIZE } = {}) {
  let [images, setImages] = (0, import_react36.useState)([]), [error2, setError] = (0, import_react36.useState)(""), [isDragging, setIsDragging] = (0, import_react36.useState)(!1), resetError = (0, import_react36.useCallback)(() => setError(""), []), addFiles = (0, import_react36.useCallback)(
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
  ), handleInputChange = (0, import_react36.useCallback)(
    (event) => {
      addFiles(event.target.files), event.target.value = "";
    },
    [addFiles]
  ), handleDrop = (0, import_react36.useCallback)(
    (event) => {
      event.preventDefault(), event.stopPropagation(), setIsDragging(!1), addFiles(event.dataTransfer.files);
    },
    [addFiles]
  ), handleDragOver = (0, import_react36.useCallback)((event) => {
    event.preventDefault(), event.stopPropagation(), setIsDragging(!0);
  }, []), handleDragLeave = (0, import_react36.useCallback)((event) => {
    event.preventDefault(), event.stopPropagation(), setIsDragging(!1);
  }, []), removeImage = (0, import_react36.useCallback)((index) => {
    setImages((prev) => {
      let next = [...prev], [removed] = next.splice(index, 1);
      return removed && URL.revokeObjectURL(removed.preview), next;
    });
  }, []);
  return (0, import_react36.useEffect)(() => () => {
    images.forEach((img) => URL.revokeObjectURL(img.preview));
  }, [images]), {
    images,
    error: error2,
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
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function ImagesUpload({ name = "default-name", maxSize }) {
  let {
    images,
    error: error2,
    isDragging,
    handleInputChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removeImage
  } = useImageUpload_default({ maxSize });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-gray-600", children: [
          "Drag & Drop your images here or",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("label", { className: "text-blue-600 cursor-pointer underline", children: [
            "click to browse",
            /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
    error2 && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "text-red-500 mt-2", children: error2 }, void 0, !1, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 49,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      "div",
      {
        className: "relative",
        style: { display: "flex", gap: "20px", flexDirection: "column" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
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
var import_react41 = require("@remix-run/react");

// app/components/PasswordInput.jsx
var import_react37 = require("react");
var import_lucide_react7 = require("lucide-react"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function PasswordInput({ ...props }) {
  let [showPassword, setShowPassword] = (0, import_react37.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute inset-y-0 right-2 flex items-center text-gray-500",
        children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_lucide_react7.EyeOff, { size: 20 }, void 0, !1, {
          fileName: "app/components/PasswordInput.jsx",
          lineNumber: 18,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_lucide_react7.Eye, { size: 20 }, void 0, !1, {
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
var import_node10 = require("@remix-run/node");

// app/components/MultiselectLocation.jsx
var import_react38 = require("@headlessui/react"), import_react39 = require("react");
var import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function MultiselectLocation({ selectedLocations, setSelectedLocations, variant = "default" }) {
  let [locations, setLocations] = (0, import_react39.useState)([]), [toast, setToast] = (0, import_react39.useState)(null), isBlack = variant === "black", textColor = isBlack ? "text-[#777]" : "text-white", bgColor = isBlack ? "bg-white" : "bg-gray-700", optionActiveBg = isBlack ? "bg-gray-200" : "bg-gray-600", dropdownPosition = isBlack ? "" : "absolute";
  (0, import_react39.useEffect)(() => {
    async function loadData() {
      try {
        let locs = await fetchLocations();
        setLocations(locs);
      } catch (err) {
        console.error("Error loading locations:", err);
      }
    }
    loadData();
  }, []);
  async function handleLocationChange(value) {
    setSelectedLocations(value);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react38.Listbox, { multiple: !0, value: selectedLocations, onChange: handleLocationChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      import_react38.ListboxButton,
      {
        className: `w-full border border-gray-300 px-4 py-2 rounded text-left flex justify-between ${textColor}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: selectedLocations.length > 0 ? selectedLocations.map((id) => {
            var _a;
            return (_a = locations.find((l) => l.id === id)) == null ? void 0 : _a.name;
          }).join(", ") : "Select Locations" }, void 0, !1, {
            fileName: "app/components/MultiselectLocation.jsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { className: textColor, children: "\u25BC" }, void 0, !1, {
            fileName: "app/components/MultiselectLocation.jsx",
            lineNumber: 52,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/MultiselectLocation.jsx",
        lineNumber: 42,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      import_react38.ListboxOptions,
      {
        className: `${bgColor} mt-1 rounded shadow-lg text-left w-full ${dropdownPosition}`,
        children: locations.map((loc) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          import_react38.ListboxOption,
          {
            value: loc.id,
            className: ({ active, selected }) => `px-4 py-2 cursor-pointer flex justify-between ${active ? optionActiveBg : ""} ${textColor}`,
            children: ({ selected }) => /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_jsx_dev_runtime29.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: loc.name }, void 0, !1, {
                fileName: "app/components/MultiselectLocation.jsx",
                lineNumber: 69,
                columnNumber: 21
              }, this),
              selected && /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: "\u2713" }, void 0, !1, {
                fileName: "app/components/MultiselectLocation.jsx",
                lineNumber: 70,
                columnNumber: 34
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/MultiselectLocation.jsx",
              lineNumber: 68,
              columnNumber: 19
            }, this)
          },
          loc.id,
          !1,
          {
            fileName: "app/components/MultiselectLocation.jsx",
            lineNumber: 59,
            columnNumber: 15
          },
          this
        ))
      },
      void 0,
      !1,
      {
        fileName: "app/components/MultiselectLocation.jsx",
        lineNumber: 55,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/MultiselectLocation.jsx",
    lineNumber: 40,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/MultiselectLocation.jsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/MultiselectLocation.jsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}
var MultiselectLocation_default = MultiselectLocation;

// app/utils/directus.server.js
var import_sdk = require("@directus/sdk");
var client = (0, import_sdk.createDirectus)(API_BASE_URL).with((0, import_sdk.rest)()).with((0, import_sdk.authentication)());

// app/routes/signup/index.jsx
var import_sdk2 = require("@directus/sdk");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
async function loader6({ request }) {
  if ((await getSession(request)).get("user"))
    throw (0, import_node10.redirect)("/admin/kitchen/cafe");
  let locs = await fetchLocations();
  return console.log("API data " + locs[0].logo), `${API_BASE_URL}/assets/${locs[0].logo}`;
}
async function action2({ request }) {
  var _a;
  let contentType = request.headers.get("content-type");
  if (console.log("Received Content-Type:", contentType), !contentType || !contentType.includes("multipart/form-data"))
    return (0, import_node10.json)({ error: "Bad content-type", contentType }, { status: 400 });
  let formData = await request.formData(), first_name = formData.get("first-name"), last_name = formData.get("last-name"), email = formData.get("email"), password = formData.get("password"), confirmPassword = formData.get("confirm-password"), selectLocations = formData.getAll("selected-locations[]").map(Number);
  if (selectLocations.sort(), password !== confirmPassword)
    return (0, import_node10.json)({
      toast: {
        type: "error",
        message: error.message || "Password mismatch"
      }
    });
  let query_object = {
    filter: {
      email: {
        _eq: email
      }
    }
  };
  if ((await client.request((0, import_sdk2.readUsers)(query_object))).length > 0)
    return (0, import_node10.json)({
      toast: {
        type: "error",
        message: "Email already registered"
      }
    });
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
        (_a = uploadJson == null ? void 0 : uploadJson.data) != null && _a.id && uploadedImageIds.push(uploadJson.data.id);
      } catch (error2) {
        console.error("Error uploading avatar:", error2);
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
      status: "active",
      allowed_locations: selectLocations
    })
  });
  if (!userRes.ok) {
    let err = await userRes.text();
    return (0, import_node10.json)(
      {
        toast: {
          type: "error",
          message: err.message || "There is a problem in saving user"
        }
      }
    );
  }
  return (0, import_node10.json)({
    toast: {
      type: "success",
      message: "User saved successfully"
    },
    redirectTo: "/login"
  });
}
function SignUp() {
  let [selectedLocations, setSelectedLocations] = (0, import_react40.useState)([]), [toast, setToast] = (0, import_react40.useState)(null), navigate = (0, import_react41.useNavigate)(), actionData = (0, import_react41.useActionData)(), logoURL = (0, import_react41.useLoaderData)();
  return (0, import_react40.useEffect)(() => {
    actionData != null && actionData.toast && (setToast(actionData.toast), actionData.redirectTo && setTimeout(() => {
      navigate(actionData.redirectTo);
    }, 1e3));
  }, [actionData, navigate]), /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "SignUp",
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("img", { src: logoURL || "/images/iss_logo.webp", alt: "location_logo", width: "50px" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 174,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 172,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_react41.Form, { method: "post", encType: "multipart/form-data", onSubmit: () => console.log("Form submitted"), className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Input_default, { type: "name", name: "first-name", required: !0, placeholder: "Enter your first name" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 179,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Input_default, { type: "name", name: "last-name", required: !0, placeholder: "Enter your last name" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 181,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Input_default, { type: "email", required: !0, name: "email", placeholder: "Email" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 183,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: "Upload your image" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 185,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ImagesUpload, { name: "avatar" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 187,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", required: !0, name: "password" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 189,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(PasswordInput_default, { placeholder: "Confirm password", required: !0, name: "confirm-password" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 191,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
        MultiselectLocation_default,
        {
          selectedLocations,
          setSelectedLocations,
          variant: "black"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/signup/index.jsx",
          lineNumber: 193,
          columnNumber: 17
        },
        this
      ),
      selectedLocations.map((id) => /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "hidden", name: "selected-locations[]", value: id }, id, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 200,
        columnNumber: 21
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Button, { type: "submit", children: "Sign up" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 203,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 177,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: () => setToast(null)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 209,
        columnNumber: 17
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/signup/index.jsx",
    lineNumber: 170,
    columnNumber: 9
  }, this);
}
var signup_default = SignUp;

// app/routes/admin/index.jsx
var admin_exports = {};
__export(admin_exports, {
  default: () => Admin,
  loader: () => loader7
});
var import_react42 = require("react");
var import_react43 = require("@remix-run/react"), import_node11 = require("@remix-run/node");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
async function loader7({ request }) {
  let { user, token } = await getCurrentUser(request);
  return (0, import_node11.json)({ user, token });
}
function Admin() {
  let { user, token } = (0, import_react43.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(AdminLayout, { user, token, children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react43.Outlet, {}, void 0, !1, {
    fileName: "app/routes/admin/index.jsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/index.jsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/login/index.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => LoginPage,
  loader: () => loader8
});
var import_node12 = require("@remix-run/node"), import_react44 = require("@remix-run/react");
var import_lucide_react8 = require("lucide-react");
var import_sdk3 = require("@directus/sdk");
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
async function loader8({ request }) {
  if ((await getSession(request)).get("user"))
    return (0, import_node12.redirect)("/admin/kitchen/cafe");
  let locs = await fetchLocations();
  return console.log("API data " + locs[0].logo), `${API_BASE_URL}/assets/${locs[0].logo}`;
}
async function action3({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), redirectTo = "/admin/kitchen/cafe";
  try {
    let data = await client.login({ email, password }), session = await getSession(request);
    return session.set("token", data.access_token), session.set("refresh_token", data.refresh_token), session.set("expires_in", data.expires), session.set("user", data.user || { email }), (0, import_node12.redirect)(redirectTo, {
      headers: { "Set-Cookie": await commitSession(session) }
    });
  } catch (error2) {
    return console.error("\u274C Login error:", error2), (0, import_node12.json)({ error: "Invalid email or password" }, { status: 401 });
  }
}
function LoginPage() {
  let actionData = (0, import_react44.useActionData)(), logoURL = (0, import_react44.useLoaderData)(), transition = (0, import_react44.useTransition)(), [searchParams] = (0, import_react44.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "Login",
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("img", { src: logoURL || "/images/iss_logo.webp", alt: "location_logo", width: "50px" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 88,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 86,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react44.Form, { method: "post", className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("input", { type: "hidden", name: "redirectTo", value: searchParams.get("redirectTo") || "/admin/kitchen/cafe" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 92,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Input_default, { type: "email", required: !0, name: "email", placeholder: "Email" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 94,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", name: "password" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 96,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("a", { href: "#", children: "Forgot Password?" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 98,
        columnNumber: 45
      }, this) }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { type: "submit", disabled: transition.state === "submitting", children: transition.state === "submitting" ? "Logging in..." : "Login" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 100,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 91,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react44.Form, { method: "post", action: "/signup", reloadDocument: !0, className: "flex max-w-[400px] justify-between w-full items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: "Don't have an account," }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 105,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Button, { type: "submit", children: "Sign Up" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 106,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 104,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 84,
    columnNumber: 9
  }, this);
}

// app/routes/admin/test.jsx
var test_exports = {};
__export(test_exports, {
  default: () => test_default
});
var import_react45 = require("react");
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function Test() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("h1", { children: "My ApexChart Example" }, void 0, !1, {
      fileName: "app/routes/admin/test.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(ClientApexChart, {}, void 0, !1, {
      fileName: "app/routes/admin/test.jsx",
      lineNumber: 12,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/test.jsx",
    lineNumber: 9,
    columnNumber: 9
  }, this);
}
var test_default = Test;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader9
});
var import_react46 = require("@remix-run/react");
var import_node13 = require("@remix-run/node"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function loader9() {
  return (0, import_node13.redirect)("/login");
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_jsx_dev_runtime34.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(LoginPage, {}, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "046d0cbb", entry: { module: "/build/entry.client-T7Z7HZQN.js", imports: ["/build/_shared/chunk-ZET52ZWX.js", "/build/_shared/chunk-HPOQQBQV.js", "/build/_shared/chunk-CWKW5RDC.js", "/build/_shared/chunk-UP37MDVE.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-H2QA3DY6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/admin/index": { id: "routes/admin/index", parentId: "root", path: "admin", index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-GKE6LTLO.js", imports: ["/build/_shared/chunk-V2FERAFP.js", "/build/_shared/chunk-RZZN7F5A.js", "/build/_shared/chunk-YZEFGZSM.js", "/build/_shared/chunk-DPZWG5ON.js", "/build/_shared/chunk-T5AHSTUC.js", "/build/_shared/chunk-UMTRTZVR.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-XIXI6E2O.js", "/build/_shared/chunk-AWAWJRMS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/kitchen": { id: "routes/admin/kitchen", parentId: "root", path: "admin/kitchen", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/kitchen-LVU3FKZZ.js", imports: ["/build/_shared/chunk-2DD3TBJV.js", "/build/_shared/chunk-37TQUAEP.js", "/build/_shared/chunk-4DT52QEE.js", "/build/_shared/chunk-KEQE3GLU.js", "/build/_shared/chunk-7H3TDLW4.js", "/build/_shared/chunk-V6LQV4ZH.js", "/build/_shared/chunk-4UKVBTC2.js", "/build/_shared/chunk-UPMHR3XY.js", "/build/_shared/chunk-V2FERAFP.js", "/build/_shared/chunk-RZZN7F5A.js", "/build/_shared/chunk-YZEFGZSM.js", "/build/_shared/chunk-DPZWG5ON.js", "/build/_shared/chunk-T5AHSTUC.js", "/build/_shared/chunk-UMTRTZVR.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-XIXI6E2O.js", "/build/_shared/chunk-AWAWJRMS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/kitchen/cafe": { id: "routes/admin/kitchen/cafe", parentId: "routes/admin/kitchen", path: "cafe", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/kitchen/cafe-VHV2RT6T.js", imports: ["/build/_shared/chunk-7RCL2I6E.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/kitchen/foodwaste": { id: "routes/admin/kitchen/foodwaste", parentId: "routes/admin/kitchen", path: "foodwaste", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/kitchen/foodwaste-U4GJY4JA.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/settings": { id: "routes/admin/settings", parentId: "root", path: "admin/settings", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/settings-2WSZRAFO.js", imports: ["/build/_shared/chunk-RZZN7F5A.js", "/build/_shared/chunk-YZEFGZSM.js", "/build/_shared/chunk-DPZWG5ON.js", "/build/_shared/chunk-T5AHSTUC.js", "/build/_shared/chunk-UMTRTZVR.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-XIXI6E2O.js", "/build/_shared/chunk-AWAWJRMS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/test": { id: "routes/admin/test", parentId: "root", path: "admin/test", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/test-XBAW3OHD.js", imports: ["/build/_shared/chunk-V6LQV4ZH.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.update-location": { id: "routes/api.update-location", parentId: "root", path: "api/update-location", index: void 0, caseSensitive: void 0, module: "/build/routes/api.update-location-RQXZMDZZ.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/banner.foodwaste.$locationId": { id: "routes/banner.foodwaste.$locationId", parentId: "root", path: "banner/foodwaste/:locationId", index: void 0, caseSensitive: void 0, module: "/build/routes/banner.foodwaste.$locationId-ONRFSEAV.js", imports: ["/build/_shared/chunk-7H3TDLW4.js", "/build/_shared/chunk-V6LQV4ZH.js", "/build/_shared/chunk-4UKVBTC2.js", "/build/_shared/chunk-UPMHR3XY.js", "/build/_shared/chunk-UMTRTZVR.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-XIXI6E2O.js", "/build/_shared/chunk-AWAWJRMS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/banner.product.$productId.$screen": { id: "routes/banner.product.$productId.$screen", parentId: "root", path: "banner/product/:productId/:screen", index: void 0, caseSensitive: void 0, module: "/build/routes/banner.product.$productId.$screen-FTNXA4DE.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "root", path: "dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-POB4YGPR.js", imports: ["/build/_shared/chunk-V2FERAFP.js", "/build/_shared/chunk-RZZN7F5A.js", "/build/_shared/chunk-YZEFGZSM.js", "/build/_shared/chunk-DPZWG5ON.js", "/build/_shared/chunk-T5AHSTUC.js", "/build/_shared/chunk-UMTRTZVR.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-XIXI6E2O.js", "/build/_shared/chunk-AWAWJRMS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/example/chart/AreaChart": { id: "routes/example/chart/AreaChart", parentId: "root", path: "example/chart/AreaChart", index: void 0, caseSensitive: void 0, module: "/build/routes/example/chart/AreaChart-XLEMYURJ.js", imports: ["/build/_shared/chunk-4UKVBTC2.js", "/build/_shared/chunk-UPMHR3XY.js", "/build/_shared/chunk-XIXI6E2O.js", "/build/_shared/chunk-AWAWJRMS.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-SY33GG4B.js", imports: ["/build/_shared/chunk-2DD3TBJV.js", "/build/_shared/chunk-37TQUAEP.js", "/build/_shared/chunk-7RCL2I6E.js", "/build/_shared/chunk-4DT52QEE.js", "/build/_shared/chunk-KEQE3GLU.js", "/build/_shared/chunk-QI5OLCAQ.js", "/build/_shared/chunk-C3Y754S4.js", "/build/_shared/chunk-7H3TDLW4.js", "/build/_shared/chunk-V6LQV4ZH.js", "/build/_shared/chunk-4UKVBTC2.js", "/build/_shared/chunk-UPMHR3XY.js", "/build/_shared/chunk-V2FERAFP.js", "/build/_shared/chunk-RZZN7F5A.js", "/build/_shared/chunk-YZEFGZSM.js", "/build/_shared/chunk-DPZWG5ON.js", "/build/_shared/chunk-T5AHSTUC.js", "/build/_shared/chunk-UMTRTZVR.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-XIXI6E2O.js", "/build/_shared/chunk-AWAWJRMS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "root", path: "login", index: !0, caseSensitive: void 0, module: "/build/routes/login/index-Y4RMYCZL.js", imports: ["/build/_shared/chunk-QI5OLCAQ.js", "/build/_shared/chunk-C3Y754S4.js", "/build/_shared/chunk-T5AHSTUC.js", "/build/_shared/chunk-UMTRTZVR.js", "/build/_shared/chunk-37D2R22D.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout/index": { id: "routes/logout/index", parentId: "root", path: "logout", index: !0, caseSensitive: void 0, module: "/build/routes/logout/index-373ICHOP.js", imports: ["/build/_shared/chunk-V2FERAFP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup/index": { id: "routes/signup/index", parentId: "root", path: "signup", index: !0, caseSensitive: void 0, module: "/build/routes/signup/index-UYV7FWTU.js", imports: ["/build/_shared/chunk-C3Y754S4.js", "/build/_shared/chunk-V2FERAFP.js", "/build/_shared/chunk-YZEFGZSM.js", "/build/_shared/chunk-DPZWG5ON.js", "/build/_shared/chunk-T5AHSTUC.js", "/build/_shared/chunk-UMTRTZVR.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-AWAWJRMS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-046D0CBB.js" };

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
  "routes/banner.foodwaste.$locationId": {
    id: "routes/banner.foodwaste.$locationId",
    parentId: "root",
    path: "banner/foodwaste/:locationId",
    index: void 0,
    caseSensitive: void 0,
    module: banner_foodwaste_locationId_exports
  },
  "routes/example/chart/AreaChart": {
    id: "routes/example/chart/AreaChart",
    parentId: "root",
    path: "example/chart/AreaChart",
    index: void 0,
    caseSensitive: void 0,
    module: AreaChart_exports
  },
  "routes/api.update-location": {
    id: "routes/api.update-location",
    parentId: "root",
    path: "api/update-location",
    index: void 0,
    caseSensitive: void 0,
    module: api_update_location_exports
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
  "routes/admin/kitchen/foodwaste": {
    id: "routes/admin/kitchen/foodwaste",
    parentId: "routes/admin/kitchen",
    path: "foodwaste",
    index: void 0,
    caseSensitive: void 0,
    module: foodwaste_exports
  },
  "routes/admin/kitchen/cafe": {
    id: "routes/admin/kitchen/cafe",
    parentId: "routes/admin/kitchen",
    path: "cafe",
    index: void 0,
    caseSensitive: void 0,
    module: cafe_exports
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
