import {
  tabContent_default
} from "/build/_shared/chunk-DBNIQQP4.js";
import "/build/_shared/chunk-776WLWWM.js";
import {
  SECTION_1_ID
} from "/build/_shared/chunk-YBWC7QFI.js";
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

// app/routes/banner/tablet-screen/$id/$locationId/$lang.jsx
var import_react = __toESM(require_react());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TabletBannerPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
  const data = useLoaderData();
  const stationData = (_a = data == null ? void 0 : data.screenData) == null ? void 0 : _a.recipe_id;
  console.log("--sds", data == null ? void 0 : data.screenData);
  const [menuDk, menuEng, Allergens, Dietary, plateImg, calorie, co2, RecipePlateImg] = [
    stationData == null ? void 0 : stationData.menu_info,
    stationData == null ? void 0 : stationData.menu_info_1,
    stationData == null ? void 0 : stationData.allergens_list,
    stationData == null ? void 0 : stationData.dietary_list,
    (_c = (_b = data == null ? void 0 : data.screenData) == null ? void 0 : _b.app_resultant_image) == null ? void 0 : _c.id,
    stationData == null ? void 0 : stationData.total_calories,
    stationData == null ? void 0 : stationData.total_co2,
    stationData == null ? void 0 : stationData.app_resultant_image
  ];
  const titleCheck = (_e = (_d = data == null ? void 0 : data.station_name) == null ? void 0 : _d.station_name_translation) == null ? void 0 : _e.filter((e) => (e == null ? void 0 : e.location_id) == (data == null ? void 0 : data.locationId));
  const stationName = ((_g = (_f = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _f.name) == null ? void 0 : _g.length) > 0 ? (_h = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _h.name : (_i = data == null ? void 0 : data.station_name) == null ? void 0 : _i.station_name;
  const stationImg = (_l = (_k = (_j = data == null ? void 0 : data.screenData) == null ? void 0 : _j.station_name) == null ? void 0 : _k.station_image_1) == null ? void 0 : _l.id;
  const firstStation = Number(SECTION_1_ID) === Number((_n = (_m = data == null ? void 0 : data.screenData) == null ? void 0 : _m.station_name) == null ? void 0 : _n.station_unique_id) ? true : false;
  const renderSingleItem = ({ language }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(tabContent_default, {
      menuDk,
      menuEng,
      Allergens,
      Dietary,
      stationName,
      stationImg,
      plateImg: plateImg !== null && plateImg !== void 0 && plateImg !== "" ? plateImg : RecipePlateImg,
      showType: "id",
      copyText: "",
      language,
      isAdminUser: false,
      calorie,
      co2,
      firstStation
    }, void 0, false, {
      fileName: "app/routes/banner/tablet-screen/$id/$locationId/$lang.jsx",
      lineNumber: 98,
      columnNumber: 9
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      " ",
      (data == null ? void 0 : data.LocationMatch) === false || (data == null ? void 0 : data.id) !== "0" && (data == null ? void 0 : data.station) === false || (data == null ? void 0 : data.lang) !== "en" && (data == null ? void 0 : data.lang) !== "da" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
        fileName: "app/routes/banner/tablet-screen/$id/$locationId/$lang.jsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-preview tablet",
        children: renderSingleItem({ language: data == null ? void 0 : data.lang })
      }, void 0, false, {
        fileName: "app/routes/banner/tablet-screen/$id/$locationId/$lang.jsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/banner/tablet-screen/$id/$locationId/$lang.jsx",
    lineNumber: 117,
    columnNumber: 7
  }, this);
}
export {
  TabletBannerPage as default
};
//# sourceMappingURL=/build/routes/banner/tablet-screen/$id/$locationId/$lang-NK5UYDQ3.js.map
