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
  useLoaderData
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/banner/weekmenu/$locationId/print/$lang.jsx
var import_react = __toESM(require_react());

// app/assets/images/banner-logo.svg
var banner_logo_default = "/build/_assets/banner-logo-PZARPO3K.svg";

// app/stylesheet/print.css
var print_default = "/build/_assets/print-U4DOH3G7.css";

// app/routes/banner/weekmenu/$locationId/print/$lang.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [
    { rel: "stylesheet", href: print_default }
  ];
}
function PrintWeekBanner() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const datas = useLoaderData();
  const renderData = ({ language, data, title }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: data == null ? void 0 : data.map((e, i) => {
        var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F;
        const menu = language === "da" ? (_a2 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _a2.menu_info : (_b2 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _b2.menu_info_1;
        const titleCheck = (_d2 = (_c2 = e == null ? void 0 : e.station_name) == null ? void 0 : _c2.station_name_translation) == null ? void 0 : _d2.filter(
          (e2) => (e2 == null ? void 0 : e2.location_id) == (datas == null ? void 0 : datas.id)
        );
        const StationName = ((_f2 = (_e2 = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _e2.name) == null ? void 0 : _f2.length) > 0 ? (_g2 = titleCheck == null ? void 0 : titleCheck[0]) == null ? void 0 : _g2.name : (_h2 = e == null ? void 0 : e.station_name) == null ? void 0 : _h2.station_name;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "main-body",
          children: ((_i2 = menu == null ? void 0 : menu.trim()) == null ? void 0 : _i2.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "banner-contents flex flex-col items-center w-full px-4 py-3 slider-font",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex text-start	w-full gap-[15px]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "w-full flex flex-col items-baseline flex-[0_0_58%] station_details",
                  children: [
                    ((_j2 = menu == null ? void 0 : menu.trim()) == null ? void 0 : _j2.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "store_name w-full font-medium text-start mb-[5px] text-[12px] uppercase font-futura",
                      children: StationName
                    }, void 0, false, {
                      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                      lineNumber: 84,
                      columnNumber: 25
                    }, this),
                    ((_k2 = menu == null ? void 0 : menu.trim()) == null ? void 0 : _k2.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-full pb-[15px] leading-none menu-title font-futura font-medium",
                      children: menu
                    }, void 0, false, {
                      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                      lineNumber: 89,
                      columnNumber: 25
                    }, this),
                    ((_l2 = menu == null ? void 0 : menu.trim()) == null ? void 0 : _l2.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-full allergen font-medium font-futura",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: " font-bold",
                          children: [
                            language === "da" ? ALLERGENS_ENG_DK : ALLERGENS_ENG,
                            ":",
                            " "
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                          lineNumber: 95,
                          columnNumber: 27
                        }, this),
                        ((_n = (_m = e == null ? void 0 : e.recipe_id) == null ? void 0 : _m.allergens_list) == null ? void 0 : _n.length) > 0 ? (_p = (_o = e == null ? void 0 : e.recipe_id) == null ? void 0 : _o.allergens_list) == null ? void 0 : _p.map(
                          (val, i2) => {
                            var _a3, _b3, _c3;
                            return `${(_a3 = val == null ? void 0 : val.Allergens_id) == null ? void 0 : _a3[language === "da" ? "name" : "translated_name"]}${i2 !== ((_c3 = (_b3 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _b3.allergens_list) == null ? void 0 : _c3.length) - 1 ? ", " : ""}`;
                          }
                        ) : language === "da" ? EMPTY_ALLERGENS_DK : EMPTY_ALLERGENS_ENG
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                      lineNumber: 94,
                      columnNumber: 25
                    }, this),
                    ((_q = menu == null ? void 0 : menu.trim()) == null ? void 0 : _q.length) > 0 && ((_s = (_r = e == null ? void 0 : e.recipe_id) == null ? void 0 : _r.dietary_list) == null ? void 0 : _s.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "banner-dietary font-medium font-futura",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: " font-bold",
                          children: [
                            language === "da" ? DIETARY_PREFERENCES_DK : DIETARY_PREFERENCES_ENG,
                            ":",
                            " "
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                          lineNumber: 125,
                          columnNumber: 29
                        }, this),
                        (_u = (_t = e == null ? void 0 : e.recipe_id) == null ? void 0 : _t.dietary_list) == null ? void 0 : _u.map(
                          (val, i2) => {
                            var _a3, _b3, _c3;
                            return `${(_a3 = val == null ? void 0 : val.Dietary_id) == null ? void 0 : _a3[language === "da" ? "name" : "translated_name"]}${i2 !== ((_c3 = (_b3 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _b3.dietary_list) == null ? void 0 : _c3.length) - 1 ? ", " : ""}`;
                          }
                        )
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                      lineNumber: 124,
                      columnNumber: 27
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                  lineNumber: 82,
                  columnNumber: 21
                }, this),
                ((_v = menu == null ? void 0 : menu.trim()) == null ? void 0 : _v.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "w-full gap-y-2 text-center flex flex-col justify-center",
                  children: [
                    ((_w = e == null ? void 0 : e.recipe_id) == null ? void 0 : _w.total_co2) != null && ((_y = Number((_x = e == null ? void 0 : e.recipe_id) == null ? void 0 : _x.total_co2)) == null ? void 0 : _y.toFixed(2)) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "co2_section rounded-full bg-[#DEDFD2] mr-2 items-center justify-center flex font-ivymode flex-col",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: "main-value font-semibold text-primary",
                              children: (_A = Number((_z = e == null ? void 0 : e.recipe_id) == null ? void 0 : _z.total_co2)) == null ? void 0 : _A.toFixed(2)
                            }, void 0, false, {
                              fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                              lineNumber: 154,
                              columnNumber: 33
                            }, this),
                            " ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: "unit font-medium font-ivymode",
                              children: "kg"
                            }, void 0, false, {
                              fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                              lineNumber: 157,
                              columnNumber: 33
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                          lineNumber: 153,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "energy font-medium uppercase font-futura",
                          children: "co2"
                        }, void 0, false, {
                          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                          lineNumber: 161,
                          columnNumber: 31
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                      lineNumber: 152,
                      columnNumber: 29
                    }, this),
                    ((_B = e == null ? void 0 : e.recipe_id) == null ? void 0 : _B.total_calories) != null && ((_D = Number((_C = e == null ? void 0 : e.recipe_id) == null ? void 0 : _C.total_calories)) == null ? void 0 : _D.toFixed(2)) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center co2-content",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "co2_section rounded-full bg-[#DEDFD2] mr-2 items-center justify-center flex font-ivymode flex-col",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: "main-value font-semibold text-primary",
                              children: (_F = Number(
                                (_E = e == null ? void 0 : e.recipe_id) == null ? void 0 : _E.total_calories
                              )) == null ? void 0 : _F.toFixed(2)
                            }, void 0, false, {
                              fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                              lineNumber: 171,
                              columnNumber: 33
                            }, this),
                            " ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: "unit font-medium font-ivymode",
                              children: "kcal"
                            }, void 0, false, {
                              fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                              lineNumber: 176,
                              columnNumber: 33
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                          lineNumber: 170,
                          columnNumber: 31
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "energy font-medium font-futura",
                          children: [
                            language === "da" ? "Energi" : "Energy",
                            " pr. 100g"
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                          lineNumber: 180,
                          columnNumber: 31
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                      lineNumber: 169,
                      columnNumber: 29
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                  lineNumber: 149,
                  columnNumber: 23
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this)
          }, Math.random(), false, {
            fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
            lineNumber: 77,
            columnNumber: 17
          }, this)
        }, Math.random(), false, {
          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
          lineNumber: 75,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this);
  };
  const Print = () => {
    let printContents = document.getElementById("printContent").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: (datas == null ? void 0 : datas.LocationMatch) === false || (datas == null ? void 0 : datas.lang) !== "da" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
      lineNumber: 211,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "week-menu-print relative bg-[#DFCB9C] text-primary",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "print-btn flex justify-end font-bold cursor-pointer",
          onClick: Print,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
              className: "ri-printer-line"
            }, void 0, false, {
              fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
              lineNumber: 218,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
              className: "ml-2 uppercase ",
              children: "Print"
            }, void 0, false, {
              fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
              lineNumber: 219,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
          lineNumber: 214,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "main-container overflow-hidden  min-h-[100vh]",
          id: "printContent",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full flex flex-col items-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "menu-logo flex flex-col",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: banner_logo_default,
                  alt: "menu-logo",
                  className: "w-[10vw]"
                }, void 0, false, {
                  fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                  lineNumber: 227,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                lineNumber: 226,
                columnNumber: 15
              }, this),
              ((_e = (_d = (_c = (_b = (_a = datas == null ? void 0 : datas.data) == null ? void 0 : _a.data[0]) == null ? void 0 : _b.recipe_id) == null ? void 0 : _c[(datas == null ? void 0 : datas.lang) == "da" ? "menu_info" : "menu_info_1"]) == null ? void 0 : _d.trim()) == null ? void 0 : _e.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "banner-contents flex flex-col w-full px-5 items-end",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "heading uppercase text-[24px] py-20px font-ivymode font-medium text-[#003B38] flex w-full justify-center py-4",
                  children: (datas == null ? void 0 : datas.lang) === "en" ? "Today's Menu" : "DAGENS Menu"
                }, void 0, false, {
                  fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                  lineNumber: 236,
                  columnNumber: 19
                }, this)
              }, Math.random(), false, {
                fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                lineNumber: 232,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "print-body-section-content-1 justify-center text-center flex pb-4 md:min-w-[650px] max-w-[1000px]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "content-1 text-primary w-full",
                    children: renderData({
                      language: datas == null ? void 0 : datas.lang,
                      data: (_g = (_f = datas == null ? void 0 : datas.data) == null ? void 0 : _f.data) == null ? void 0 : _g.slice(0, 5),
                      tile: true
                    })
                  }, void 0, false, {
                    fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                    lineNumber: 242,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "content-2 text-primary w-full",
                    children: !!((_h = datas == null ? void 0 : datas.data) == null ? void 0 : _h.data) && ((_j = (_i = datas == null ? void 0 : datas.data) == null ? void 0 : _i.data) == null ? void 0 : _j.length) > 5 && renderData({
                      language: datas == null ? void 0 : datas.lang,
                      data: (_l = (_k = datas == null ? void 0 : datas.data) == null ? void 0 : _k.data) == null ? void 0 : _l.slice(5),
                      tile: false
                    })
                  }, void 0, false, {
                    fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                    lineNumber: 249,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
                lineNumber: 241,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
            lineNumber: 225,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
          lineNumber: 221,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
      lineNumber: 213,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/banner/weekmenu/$locationId/print/$lang.jsx",
    lineNumber: 207,
    columnNumber: 5
  }, this);
}
export {
  PrintWeekBanner as default,
  links
};
//# sourceMappingURL=/build/routes/banner/weekmenu/$locationId/print/$lang-YHBQGB3D.js.map
