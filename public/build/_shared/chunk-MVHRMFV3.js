import {
  getAssetURL
} from "/build/_shared/chunk-776WLWWM.js";
import {
  ALLERGENS_ENG,
  ALLERGENS_ENG_DK,
  DIETARY_PREFERENCES_DK,
  DIETARY_PREFERENCES_ENG,
  EMPTY_ALLERGENS_DK,
  EMPTY_ALLERGENS_ENG,
  SECTION_1_ID
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/components/banner/lunchContent.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LunchContent({
  copyText,
  language,
  isAdminUser,
  data,
  part,
  LocationId
}) {
  var _a;
  const isMenuPresent = ((_a = data == null ? void 0 : data.map(
    (e, i) => {
      var _a2, _b, _c;
      return ((_c = (_b = (_a2 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _a2[language === "da" ? "menu_info" : "menu_info_1"]) == null ? void 0 : _b.trim()) == null ? void 0 : _c.length) > 0 ? true : false;
    }
  )) == null ? void 0 : _a.includes(true)) ? true : false;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "banner-main-bg lunch-content",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "banner-bg text-white relative flex flex-col font-noto",
        children: [
          isMenuPresent && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "main-title flex justify-start w-full font-noto mb-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Today's Menu"
            }, void 0, false, {
              fileName: "app/components/banner/lunchContent.jsx",
              lineNumber: 37,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/banner/lunchContent.jsx",
            lineNumber: 36,
            columnNumber: 27
          }, this),
          data == null ? void 0 : data.map((e, i) => {
            var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H;
            const menu = language === "da" ? (_a2 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _a2.menu_info : (_b = e == null ? void 0 : e.recipe_id) == null ? void 0 : _b.menu_info_1;
            const stationImg = (_d = (_c = e == null ? void 0 : e.station_name) == null ? void 0 : _c.station_image_1) == null ? void 0 : _d.id;
            const titleCheck = (_f = (_e = e == null ? void 0 : e.station_name) == null ? void 0 : _e.station_name_translation) == null ? void 0 : _f.filter(
              (e2) => (e2 == null ? void 0 : e2.location_id) == LocationId
            );
            const StationName = ((_h = (_g = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _g.name) == null ? void 0 : _h.length) > 0 ? (_i = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _i.name : (_j = e == null ? void 0 : e.station_name) == null ? void 0 : _j.station_name;
            const isGoGreen = Number((_k = e == null ? void 0 : e.station_name) == null ? void 0 : _k.id) === Number(SECTION_1_ID) ? true : false;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.default.Fragment, {
              children: ((_l = menu == null ? void 0 : menu.trim()) == null ? void 0 : _l.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "banner-contents flex flex-col items-center w-full py-5 ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "menu-contents flex text-start	w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-full items-center text-left text-section",
                      children: [
                        ((_m = menu == null ? void 0 : menu.trim()) == null ? void 0 : _m.length) > 0 && (stationImg ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "station-image",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: getAssetURL(stationImg),
                            alt: "station image",
                            className: `pb-3 ${isGoGreen ? "max-w-[80px]" : "max-w-[120px]"}`
                          }, void 0, false, {
                            fileName: "app/components/banner/lunchContent.jsx",
                            lineNumber: 66,
                            columnNumber: 31
                          }, this)
                        }, void 0, false, {
                          fileName: "app/components/banner/lunchContent.jsx",
                          lineNumber: 65,
                          columnNumber: 27
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "station-name w-full font-medium text-start mb-2 text-lg uppercase",
                          children: StationName
                        }, void 0, false, {
                          fileName: "app/components/banner/lunchContent.jsx",
                          lineNumber: 73,
                          columnNumber: 25
                        }, this)),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "w-full text-md md:text-2xl pb-2 leading-none menu-title",
                          children: menu
                        }, void 0, false, {
                          fileName: "app/components/banner/lunchContent.jsx",
                          lineNumber: 77,
                          columnNumber: 23
                        }, this),
                        ((_n = menu == null ? void 0 : menu.trim()) == null ? void 0 : _n.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "w-full allergen md:text-lg",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: " font-bold",
                              children: [
                                language === "da" ? ALLERGENS_ENG_DK : ALLERGENS_ENG,
                                ":",
                                " "
                              ]
                            }, void 0, true, {
                              fileName: "app/components/banner/lunchContent.jsx",
                              lineNumber: 82,
                              columnNumber: 27
                            }, this),
                            ((_p = (_o = e == null ? void 0 : e.recipe_id) == null ? void 0 : _o.allergens_list) == null ? void 0 : _p.length) > 0 ? (_r = (_q = e == null ? void 0 : e.recipe_id) == null ? void 0 : _q.allergens_list) == null ? void 0 : _r.map(
                              (val, i2) => {
                                var _a3, _b2, _c2;
                                return `${(_a3 = val == null ? void 0 : val.Allergens_id) == null ? void 0 : _a3[language === "da" ? "name" : "translated_name"]}${i2 !== ((_c2 = (_b2 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _b2.allergens_list) == null ? void 0 : _c2.length) - 1 ? ", " : ""}`;
                              }
                            ) : language === "da" ? EMPTY_ALLERGENS_DK : EMPTY_ALLERGENS_ENG
                          ]
                        }, void 0, true, {
                          fileName: "app/components/banner/lunchContent.jsx",
                          lineNumber: 81,
                          columnNumber: 25
                        }, this),
                        ((_s = menu == null ? void 0 : menu.trim()) == null ? void 0 : _s.length) > 0 && ((_u = (_t = e == null ? void 0 : e.recipe_id) == null ? void 0 : _t.dietary_list) == null ? void 0 : _u.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "banner-dietary md:text-lg",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: " font-bold",
                              children: [
                                language === "da" ? DIETARY_PREFERENCES_DK : DIETARY_PREFERENCES_ENG,
                                ":",
                                " "
                              ]
                            }, void 0, true, {
                              fileName: "app/components/banner/lunchContent.jsx",
                              lineNumber: 112,
                              columnNumber: 29
                            }, this),
                            (_w = (_v = e == null ? void 0 : e.recipe_id) == null ? void 0 : _v.dietary_list) == null ? void 0 : _w.map(
                              (val, i2) => {
                                var _a3, _b2, _c2;
                                return `${(_a3 = val == null ? void 0 : val.Dietary_id) == null ? void 0 : _a3[language === "da" ? "name" : "translated_name"]}${i2 !== ((_c2 = (_b2 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _b2.dietary_list) == null ? void 0 : _c2.length) - 1 ? ", " : ""}`;
                              }
                            )
                          ]
                        }, void 0, true, {
                          fileName: "app/components/banner/lunchContent.jsx",
                          lineNumber: 111,
                          columnNumber: 27
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/banner/lunchContent.jsx",
                      lineNumber: 62,
                      columnNumber: 21
                    }, this),
                    ((_x = menu == null ? void 0 : menu.trim()) == null ? void 0 : _x.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid w-full gap-y-2 text-center co2-section",
                      children: [
                        ((_y = e == null ? void 0 : e.recipe_id) == null ? void 0 : _y.total_co2) != null && ((_A = Number((_z = e == null ? void 0 : e.recipe_id) == null ? void 0 : _z.total_co2)) == null ? void 0 : _A.toFixed(2)) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "circle h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full bg-[#485648] mr-2 md:mr-4 items-center justify-center flex flex-col",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  className: "font-semibold text-white text-[12px] value",
                                  children: (_C = Number((_B = e == null ? void 0 : e.recipe_id) == null ? void 0 : _B.total_co2)) == null ? void 0 : _C.toFixed(2)
                                }, void 0, false, {
                                  fileName: "app/components/banner/lunchContent.jsx",
                                  lineNumber: 141,
                                  columnNumber: 33
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  className: "text-[8px] md:text-[0.7rem] font-medium unit",
                                  children: "kg"
                                }, void 0, false, {
                                  fileName: "app/components/banner/lunchContent.jsx",
                                  lineNumber: 144,
                                  columnNumber: 33
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/components/banner/lunchContent.jsx",
                              lineNumber: 140,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: "text-[10px] md:text-[0.7rem] md:leading-[0.8rem] font-medium co2-text uppercase",
                              children: "co2"
                            }, void 0, false, {
                              fileName: "app/components/banner/lunchContent.jsx",
                              lineNumber: 148,
                              columnNumber: 31
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/components/banner/lunchContent.jsx",
                          lineNumber: 139,
                          columnNumber: 29
                        }, this),
                        ((_D = e == null ? void 0 : e.recipe_id) == null ? void 0 : _D.total_calories) != null && ((_F = Number((_E = e == null ? void 0 : e.recipe_id) == null ? void 0 : _E.total_calories)) == null ? void 0 : _F.toFixed(2)) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex items-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "circle h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full bg-[#485648] mr-2 md:mr-4 items-center justify-center flex flex-col",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  className: "font-semibold text-white text-[12px] value",
                                  children: (_H = Number(
                                    (_G = e == null ? void 0 : e.recipe_id) == null ? void 0 : _G.total_calories
                                  )) == null ? void 0 : _H.toFixed(2)
                                }, void 0, false, {
                                  fileName: "app/components/banner/lunchContent.jsx",
                                  lineNumber: 158,
                                  columnNumber: 33
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                  className: "text-[8px] md:text-[0.7rem] font-medium unit",
                                  children: "kcal"
                                }, void 0, false, {
                                  fileName: "app/components/banner/lunchContent.jsx",
                                  lineNumber: 163,
                                  columnNumber: 33
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/components/banner/lunchContent.jsx",
                              lineNumber: 157,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: "text-[10px] md:text-[0.7rem] md:leading-[0.8rem] font-medium co2-text",
                              children: language === "da" ? "Kalorier" : "Calories"
                            }, void 0, false, {
                              fileName: "app/components/banner/lunchContent.jsx",
                              lineNumber: 167,
                              columnNumber: 31
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/components/banner/lunchContent.jsx",
                          lineNumber: 156,
                          columnNumber: 29
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/banner/lunchContent.jsx",
                      lineNumber: 136,
                      columnNumber: 23
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/banner/lunchContent.jsx",
                  lineNumber: 61,
                  columnNumber: 19
                }, this)
              }, i, false, {
                fileName: "app/components/banner/lunchContent.jsx",
                lineNumber: 57,
                columnNumber: 17
              }, this)
            }, i, false, {
              fileName: "app/components/banner/lunchContent.jsx",
              lineNumber: 55,
              columnNumber: 13
            }, this);
          }),
          isMenuPresent && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "info-text border-t-2 block w-full italic text-white pt-4 text-left",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "font-bold",
                children: language === "da" ? "Information om allegene ingredienser " : "Food allergies and intolerances - "
              }, void 0, false, {
                fileName: "app/components/banner/lunchContent.jsx",
                lineNumber: 182,
                columnNumber: 13
              }, this),
              language === "da" ? "kan f\xE5s ved henvendelse til vores kokkenpersonale." : "please speak to our staff about your requirement"
            ]
          }, void 0, true, {
            fileName: "app/components/banner/lunchContent.jsx",
            lineNumber: 181,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/banner/lunchContent.jsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      isAdminUser && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute bottom-5 left-5 text-white bg-black p-2",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          onClick: () => copyText({ language, type: part }),
          children: [
            "Copy Link ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
              className: "ri-clipboard-line"
            }, void 0, false, {
              fileName: "app/components/banner/lunchContent.jsx",
              lineNumber: 196,
              columnNumber: 23
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/banner/lunchContent.jsx",
          lineNumber: 195,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/banner/lunchContent.jsx",
        lineNumber: 194,
        columnNumber: 9
      }, this)
    ]
  }, Math.random(), true, {
    fileName: "app/components/banner/lunchContent.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
var lunchContent_default = LunchContent;

export {
  lunchContent_default
};
//# sourceMappingURL=/build/_shared/chunk-MVHRMFV3.js.map
