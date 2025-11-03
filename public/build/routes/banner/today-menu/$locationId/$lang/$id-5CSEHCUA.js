import {
  lunchContent_default
} from "/build/_shared/chunk-MVHRMFV3.js";
import "/build/_shared/chunk-ZPUNGY4N.js";
import "/build/_shared/chunk-776WLWWM.js";
import "/build/_shared/chunk-YBWC7QFI.js";
import {
  Custom404Page
} from "/build/_shared/chunk-5ZR5TTKP.js";
import "/build/_shared/chunk-6W3RSCO2.js";
import {
  require_session
} from "/build/_shared/chunk-2FLU7E64.js";
import {
  useLoaderData
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/banner/today-menu/$locationId/$lang/$id.jsx
var import_react = __toESM(require_react());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TodayMenuBanner() {
  var _a, _b, _c, _d, _e, _f;
  const data = useLoaderData();
  const MenuData = (_b = (_a = data == null ? void 0 : data.response) == null ? void 0 : _a.data) == null ? void 0 : _b.slice(
    (data == null ? void 0 : data.id) === "1" ? 0 : (Number(data == null ? void 0 : data.id) - 1) * 5,
    Number(data == null ? void 0 : data.id) * 5
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page-preview",
    children: (data == null ? void 0 : data.LocationMatch) === false || Number(data == null ? void 0 : data.id) > (((_d = (_c = data == null ? void 0 : data.response) == null ? void 0 : _c.data) == null ? void 0 : _d.length) <= 5 ? 2 : Math.ceil(((_f = (_e = data == null ? void 0 : data.response) == null ? void 0 : _e.data) == null ? void 0 : _f.length) / 5)) || (data == null ? void 0 : data.station) === false || (data == null ? void 0 : data.lang) !== "en" && (data == null ? void 0 : data.lang) !== "da" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/banner/today-menu/$locationId/$lang/$id.jsx",
      lineNumber: 94,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(lunchContent_default, {
      copyText: "",
      language: data == null ? void 0 : data.lang,
      isAdminUser: false,
      data: MenuData,
      part: "",
      LocationId: data == null ? void 0 : data.locationId
    }, void 0, false, {
      fileName: "app/routes/banner/today-menu/$locationId/$lang/$id.jsx",
      lineNumber: 96,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/banner/today-menu/$locationId/$lang/$id.jsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
var id_default = TodayMenuBanner;
export {
  id_default as default
};
//# sourceMappingURL=/build/routes/banner/today-menu/$locationId/$lang/$id-5CSEHCUA.js.map
