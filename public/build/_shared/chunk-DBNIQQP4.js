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
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/components/banner/tabContent.jsx
var import_react = __toESM(require_react());

// app/assets/images/foodplaceLogo.png
var foodplaceLogo_default = "/build/_assets/foodplaceLogo-KQVSCHNJ.png";

// app/components/banner/tabContent.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function TabContent({
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
  showType,
  stationImg,
  firstStation
}) {
  var _a, _b, _c, _d, _e, _f;
  const menu = language === "da" ? menuDk : menuEng;
  const TotalCo2 = co2 !== null && co2 !== void 0 ? (_a = Number(co2)) == null ? void 0 : _a.toFixed(2) : null;
  const TotalCalorie = calorie !== null && calorie !== void 0 ? (_b = Number(calorie)) == null ? void 0 : _b.toFixed(2) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `${firstStation ? "bg-velux" : "bg-velux"} tab-preview relative w-full min-h-[100vh] flex justify-start items-center`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "banner-right absolute top-0 right-0",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "banner-img flex items-center",
          style: {
            backgroundImage: `url(${plateImg != null && plateImg !== void 0 && plateImg !== "" ? showType == "id" || showType == void 0 ? getAssetURL(plateImg) : plateImg : null})`
          }
        }, void 0, false, {
          fileName: "app/components/banner/tabContent.jsx",
          lineNumber: 42,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/banner/tabContent.jsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "w-full text-white relative flex flex-col px-16 py-10 font-noto full-content content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "banner-left w-full self-center text-left",
          children: [
            ((_c = menu == null ? void 0 : menu.trim()) == null ? void 0 : _c.length) > 0 && (stationImg ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "station-image",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                src: getAssetURL(stationImg),
                alt: "station image",
                className: "pb-4 max-w-[180px] min-h-[100px]"
              }, void 0, false, {
                fileName: "app/components/banner/tabContent.jsx",
                lineNumber: 60,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/banner/tabContent.jsx",
              lineNumber: 59,
              columnNumber: 13
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "station-name pb-6 block text-left w-full font-noto font-normal uppercase",
              children: stationName
            }, void 0, false, {
              fileName: "app/components/banner/tabContent.jsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "banner-menu",
              children: menu
            }, void 0, false, {
              fileName: "app/components/banner/tabContent.jsx",
              lineNumber: 71,
              columnNumber: 12
            }, this),
            ((_d = menu == null ? void 0 : menu.trim()) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "banner-allergen font-normal",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-bold",
                  children: [
                    language === "da" ? ALLERGENS_ENG_DK : ALLERGENS_ENG,
                    ":",
                    " "
                  ]
                }, void 0, true, {
                  fileName: "app/components/banner/tabContent.jsx",
                  lineNumber: 74,
                  columnNumber: 15
                }, this),
                (Allergens == null ? void 0 : Allergens.length) > 0 ? Allergens == null ? void 0 : Allergens.map(
                  (e, i) => {
                    var _a2;
                    return `${(_a2 = e == null ? void 0 : e.Allergens_id) == null ? void 0 : _a2[language === "da" ? "name" : "translated_name"]}${i !== (Allergens == null ? void 0 : Allergens.length) - 1 ? ", " : ""}`;
                  }
                ) : language === "da" ? EMPTY_ALLERGENS_DK : EMPTY_ALLERGENS_ENG
              ]
            }, void 0, true, {
              fileName: "app/components/banner/tabContent.jsx",
              lineNumber: 73,
              columnNumber: 13
            }, this),
            ((_e = menu == null ? void 0 : menu.trim()) == null ? void 0 : _e.length) > 0 && (Dietary == null ? void 0 : Dietary.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
                  fileName: "app/components/banner/tabContent.jsx",
                  lineNumber: 93,
                  columnNumber: 15
                }, this),
                Dietary == null ? void 0 : Dietary.map(
                  (e, i) => {
                    var _a2;
                    return `${(_a2 = e == null ? void 0 : e.Dietary_id) == null ? void 0 : _a2[language === "da" ? "name" : "translated_name"]}${i !== (Dietary == null ? void 0 : Dietary.length) - 1 ? ", " : ""}`;
                  }
                )
              ]
            }, void 0, true, {
              fileName: "app/components/banner/tabContent.jsx",
              lineNumber: 92,
              columnNumber: 13
            }, this),
            ((_f = menu == null ? void 0 : menu.trim()) == null ? void 0 : _f.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "banner-calorie-co2 grid grid-cols-12 mt-16 mx-auto",
              children: [
                TotalCo2 !== null && TotalCo2 > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `flex ${firstStation ? "go-green" : "col-span-6"}  align-middle`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "value  min-w-[122px] min-h-[122px] max-w-[122px] max-h-[122px] bg-[#485648] rounded-full flex justify-center	items-center p-[20px] font-medium	text-3xl 3xl:text-4xl flex-col",
                      children: [
                        TotalCo2,
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "text-xl",
                          children: "kg"
                        }, void 0, false, {
                          fileName: "app/components/banner/tabContent.jsx",
                          lineNumber: 114,
                          columnNumber: 32
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/banner/tabContent.jsx",
                      lineNumber: 113,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "content flex justify-start items-center font-medium ml-[7%] text-2xl",
                      children: "CO2"
                    }, void 0, false, {
                      fileName: "app/components/banner/tabContent.jsx",
                      lineNumber: 116,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/banner/tabContent.jsx",
                  lineNumber: 112,
                  columnNumber: 17
                }, this),
                TotalCalorie !== null && TotalCalorie > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `flex  ${firstStation ? "go-green" : "col-span-6"} align-middle`,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "value min-w-[122px] min-h-[122px] max-w-[122px] max-h-[122px] bg-[#485648] rounded-full flex justify-center	items-center p-[20px] font-medium	text-3xl 3xl:text-4xl flex-col",
                      children: [
                        TotalCalorie,
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "text-xl",
                          children: "kcal"
                        }, void 0, false, {
                          fileName: "app/components/banner/tabContent.jsx",
                          lineNumber: 124,
                          columnNumber: 36
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/components/banner/tabContent.jsx",
                      lineNumber: 123,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "content flex justify-start items-center font-medium ml-[7%] text-2xl",
                      children: language === "da" ? "Kalorier" : "Calories"
                    }, void 0, false, {
                      fileName: "app/components/banner/tabContent.jsx",
                      lineNumber: 126,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/banner/tabContent.jsx",
                  lineNumber: 122,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/banner/tabContent.jsx",
              lineNumber: 110,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/banner/tabContent.jsx",
          lineNumber: 56,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/banner/tabContent.jsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "absolute bottom-10 right-5",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "footer-icon-img flex items-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: foodplaceLogo_default,
            alt: ""
          }, void 0, false, {
            fileName: "app/components/banner/tabContent.jsx",
            lineNumber: 138,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: "app/components/banner/tabContent.jsx",
          lineNumber: 136,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/banner/tabContent.jsx",
        lineNumber: 135,
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
              fileName: "app/components/banner/tabContent.jsx",
              lineNumber: 143,
              columnNumber: 23
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/banner/tabContent.jsx",
          lineNumber: 142,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/banner/tabContent.jsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ]
  }, Math.random(), true, {
    fileName: "app/components/banner/tabContent.jsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}
var tabContent_default = TabContent;

export {
  tabContent_default
};
//# sourceMappingURL=/build/_shared/chunk-DBNIQQP4.js.map
