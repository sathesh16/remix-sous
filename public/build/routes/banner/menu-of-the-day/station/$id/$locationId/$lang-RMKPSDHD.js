import {
  banner_logo_default
} from "/build/_shared/chunk-ZPUNGY4N.js";
import {
  getAssetURL
} from "/build/_shared/chunk-776WLWWM.js";
import {
  ALLERGENS_ENG,
  ALLERGENS_ENG_DK,
  DIETARY_PREFERENCES_DK,
  DIETARY_PREFERENCES_ENG,
  EMPTY_ALLERGENS_DK,
  EMPTY_ALLERGENS_ENG
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

// app/routes/banner/menu-of-the-day/station/$id/$locationId/$lang.jsx
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());

// app/components/banner/bannerContent.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function BannerContent({
  menuDk,
  menuEng,
  Allergens,
  Dietary,
  stationName,
  plateImg,
  copyText,
  language,
  isAdminUser,
  calorie,
  co2,
  showType
}) {
  var _a, _b, _c, _d, _e;
  const menu = language === "da" ? menuDk : menuEng;
  const TotalCo2 = co2 !== null && co2 !== void 0 ? (_a = Number(co2)) == null ? void 0 : _a.toFixed(2) : null;
  const TotalCalorie = calorie !== null && calorie !== void 0 ? (_b = Number(calorie)) == null ? void 0 : _b.toFixed(2) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "banner-main-bg preview",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "banner-bg text-primary relative flex flex-col pr-0 p-20",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "menu-logo flex justify-center w-full pr-24",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "banner-img h-[13vw] w-[26vw] flex items-center",
              style: { backgroundImage: `url(${banner_logo_default})` }
            }, void 0, false, {
              fileName: "app/components/banner/bannerContent.jsx",
              lineNumber: 38,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/banner/bannerContent.jsx",
            lineNumber: 37,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "banner-contents p-slides flex justify-between w-full pt-4 ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "banner-left w-full self-center text-left",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "banner-menu",
                    children: menu
                  }, void 0, false, {
                    fileName: "app/components/banner/bannerContent.jsx",
                    lineNumber: 45,
                    columnNumber: 14
                  }, this),
                  ((_c = menu == null ? void 0 : menu.trim()) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "banner-allergen font-noto font-normal",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-bold",
                        children: [
                          language === "da" ? ALLERGENS_ENG_DK : ALLERGENS_ENG,
                          ":",
                          " "
                        ]
                      }, void 0, true, {
                        fileName: "app/components/banner/bannerContent.jsx",
                        lineNumber: 48,
                        columnNumber: 17
                      }, this),
                      (Allergens == null ? void 0 : Allergens.length) > 0 ? Allergens == null ? void 0 : Allergens.map(
                        (e, i) => {
                          var _a2;
                          return `${(_a2 = e == null ? void 0 : e.Allergens_id) == null ? void 0 : _a2[language === "da" ? "name" : "translated_name"]}${i !== (Allergens == null ? void 0 : Allergens.length) - 1 ? ", " : ""}`;
                        }
                      ) : language === "da" ? EMPTY_ALLERGENS_DK : EMPTY_ALLERGENS_ENG
                    ]
                  }, void 0, true, {
                    fileName: "app/components/banner/bannerContent.jsx",
                    lineNumber: 47,
                    columnNumber: 15
                  }, this),
                  ((_d = menu == null ? void 0 : menu.trim()) == null ? void 0 : _d.length) > 0 && (Dietary == null ? void 0 : Dietary.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "banner-dietary font-normal",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "font-bold",
                        children: [
                          language === "da" ? DIETARY_PREFERENCES_DK : DIETARY_PREFERENCES_ENG,
                          ":",
                          " "
                        ]
                      }, void 0, true, {
                        fileName: "app/components/banner/bannerContent.jsx",
                        lineNumber: 67,
                        columnNumber: 17
                      }, this),
                      Dietary == null ? void 0 : Dietary.map(
                        (e, i) => {
                          var _a2;
                          return `${(_a2 = e == null ? void 0 : e.Dietary_id) == null ? void 0 : _a2[language === "da" ? "name" : "translated_name"]}${i !== (Dietary == null ? void 0 : Dietary.length) - 1 ? ", " : ""}`;
                        }
                      )
                    ]
                  }, void 0, true, {
                    fileName: "app/components/banner/bannerContent.jsx",
                    lineNumber: 66,
                    columnNumber: 15
                  }, this),
                  ((_e = menu == null ? void 0 : menu.trim()) == null ? void 0 : _e.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "banner-calorie-co2 grid grid-cols-12 mt-20 mx-auto",
                    children: [
                      TotalCo2 !== null && TotalCo2 > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex col-span-6  align-middle",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "value slider-ivymode-font min-w-[8vw] min-h-[8vw] max-w-[8vw] max-h-[8vw] bg-[#dedfd2] rounded-full flex justify-center	items-center p-[20px] font-semibold	text-[24px] flex-col",
                            children: [
                              TotalCo2,
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "text-[18px]",
                                children: "kg"
                              }, void 0, false, {
                                fileName: "app/components/banner/bannerContent.jsx",
                                lineNumber: 88,
                                columnNumber: 34
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/components/banner/bannerContent.jsx",
                            lineNumber: 87,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "content slider-font flex justify-start items-center font-medium ml-[7%] text-2xl",
                            children: "CO2"
                          }, void 0, false, {
                            fileName: "app/components/banner/bannerContent.jsx",
                            lineNumber: 90,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/components/banner/bannerContent.jsx",
                        lineNumber: 86,
                        columnNumber: 19
                      }, this),
                      TotalCalorie !== null && TotalCalorie > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex col-span-6  align-middle",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "value slider-ivymode-font min-w-[8vw] min-h-[8vw] max-w-[8vw] max-h-[8vw] bg-[#dedfd2] rounded-full flex justify-center	items-center p-[20px] font-semibold	text-[24px] flex-col",
                            children: [
                              TotalCalorie,
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "text-[18px]",
                                children: "kcal"
                              }, void 0, false, {
                                fileName: "app/components/banner/bannerContent.jsx",
                                lineNumber: 98,
                                columnNumber: 38
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/components/banner/bannerContent.jsx",
                            lineNumber: 97,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "content slider-font flex justify-start items-center font-medium ml-[7%] text-2xl",
                            children: [
                              language === "da" ? "Energi" : "Energy",
                              " pr. 100g"
                            ]
                          }, void 0, true, {
                            fileName: "app/components/banner/bannerContent.jsx",
                            lineNumber: 100,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/components/banner/bannerContent.jsx",
                        lineNumber: 96,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/banner/bannerContent.jsx",
                    lineNumber: 84,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/banner/bannerContent.jsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "banner-right w-full relative flex items-center justify-end",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "banner-img flex items-center",
                  style: {
                    backgroundImage: `url(${plateImg != null && plateImg !== void 0 && plateImg !== "" ? showType == "id" || showType == void 0 ? getAssetURL(plateImg) : plateImg : null})`
                  }
                }, void 0, false, {
                  fileName: "app/components/banner/bannerContent.jsx",
                  lineNumber: 109,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/components/banner/bannerContent.jsx",
                lineNumber: 108,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "bottom-station-name absolute bottom-5 right-0 px-24 pb-12 block text-right w-full text-[2vw] slider-font font-normal uppercase",
                children: stationName
              }, void 0, false, {
                fileName: "app/components/banner/bannerContent.jsx",
                lineNumber: 122,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/banner/bannerContent.jsx",
            lineNumber: 43,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/banner/bannerContent.jsx",
        lineNumber: 36,
        columnNumber: 7
      }, this),
      isAdminUser && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute bottom-5 left-5 text-white bg-black p-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          onClick: () => copyText({ language, type: 1 }),
          children: [
            "Copy Link ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
              className: "ri-clipboard-line"
            }, void 0, false, {
              fileName: "app/components/banner/bannerContent.jsx",
              lineNumber: 130,
              columnNumber: 23
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/banner/bannerContent.jsx",
          lineNumber: 129,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/banner/bannerContent.jsx",
        lineNumber: 128,
        columnNumber: 9
      }, this)
    ]
  }, Math.random(), true, {
    fileName: "app/components/banner/bannerContent.jsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}
var bannerContent_default = BannerContent;

// app/routes/banner/menu-of-the-day/station/$id/$locationId/$lang.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SingleBanner() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const data = useLoaderData();
  const stationData = (_a = data == null ? void 0 : data.screenData) == null ? void 0 : _a.recipe_id;
  const [
    menuDk,
    menuEng,
    Allergens,
    Dietary,
    plateImg,
    calorie,
    co2,
    RecipePlateImg
  ] = [
    stationData == null ? void 0 : stationData.menu_info,
    stationData == null ? void 0 : stationData.menu_info_1,
    stationData == null ? void 0 : stationData.allergens_list,
    stationData == null ? void 0 : stationData.dietary_list,
    (_c = (_b = data == null ? void 0 : data.screenData) == null ? void 0 : _b.app_resultant_image) == null ? void 0 : _c.id,
    stationData == null ? void 0 : stationData.total_calories,
    stationData == null ? void 0 : stationData.total_co2,
    stationData == null ? void 0 : stationData.app_resultant_image
  ];
  const titleCheck = (_e = (_d = data == null ? void 0 : data.station_name) == null ? void 0 : _d.station_name_translation) == null ? void 0 : _e.filter(
    (e) => (e == null ? void 0 : e.location_id) == (data == null ? void 0 : data.locationId)
  );
  const stationName = ((_g = (_f = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _f.name) == null ? void 0 : _g.length) > 0 ? (_h = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _h.name : (_i = data == null ? void 0 : data.station_name) == null ? void 0 : _i.station_name;
  const renderSingleItem = ({ language }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(bannerContent_default, {
      menuDk,
      menuEng,
      Allergens,
      Dietary,
      stationName,
      plateImg: plateImg !== null && plateImg !== void 0 && plateImg !== "" ? plateImg : RecipePlateImg,
      showType: "id",
      copyText: "",
      language,
      isAdminUser: false,
      calorie,
      co2,
      stationId: data == null ? void 0 : data.id
    }, void 0, false, {
      fileName: "app/routes/banner/menu-of-the-day/station/$id/$locationId/$lang.jsx",
      lineNumber: 111,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      " ",
      (data == null ? void 0 : data.LocationMatch) === false || (data == null ? void 0 : data.id) !== "0" && (data == null ? void 0 : data.station) === false || ((_j = data == null ? void 0 : data.station_name) == null ? void 0 : _j.is_parent_station) === true || (data == null ? void 0 : data.lang) !== "en" && (data == null ? void 0 : data.lang) !== "da" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
        fileName: "app/routes/banner/menu-of-the-day/station/$id/$locationId/$lang.jsx",
        lineNumber: 139,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "page-preview station-preview",
        children: renderSingleItem({ language: data == null ? void 0 : data.lang })
      }, void 0, false, {
        fileName: "app/routes/banner/menu-of-the-day/station/$id/$locationId/$lang.jsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/banner/menu-of-the-day/station/$id/$locationId/$lang.jsx",
    lineNumber: 133,
    columnNumber: 5
  }, this);
}
var lang_default = SingleBanner;
export {
  lang_default as default
};
//# sourceMappingURL=/build/routes/banner/menu-of-the-day/station/$id/$locationId/$lang-RMKPSDHD.js.map
