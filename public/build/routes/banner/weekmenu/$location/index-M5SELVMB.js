import {
  getAssetURL
} from "/build/_shared/chunk-776WLWWM.js";
import {
  DIETARY_PREFERENCES_DK,
  DIETARY_PREFERENCES_ENG,
  EMPTYALLERGENSDATA_DK,
  EMPTYALLERGENSDATA_ENG,
  SECTION_1_ID,
  SECTION_2_ID,
  SECTION_3_ID,
  SECTION_4_ID
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  Custom404Page
} from "/build/_shared/chunk-5ZR5TTKP.js";
import {
  addDays,
  format,
  getWeek,
  lastDayOfWeek,
  startOfWeek
} from "/build/_shared/chunk-6W3RSCO2.js";
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

// app/routes/banner/weekmenu/$location/index.js
var import_react = __toESM(require_react());

// app/assets/images/foodplaceLogo1.png
var foodplaceLogo1_default = "/build/_assets/foodplaceLogo1-YOBNM3V5.png";

// app/assets/images/intranet-page-bg.png
var intranet_page_bg_default = "/build/_assets/intranet-page-bg-4WKT7FTF.png";

// app/routes/banner/weekmenu/$location/index.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function index() {
  const datas = useLoaderData();
  const englishCon = import_react.default.useRef(null);
  const danishCon = import_react.default.useRef(null);
  const { logoID, data, LocationMatch, presentWeek } = datas;
  var startDate = addDays(startOfWeek(new Date(), { weekStartsOn: 1 }), presentWeek);
  var endDate = addDays(lastDayOfWeek(new Date(), { weekStartsOn: 6 }), presentWeek);
  const titleFilteration = ({ id, dateData, language, isChild }) => {
    var _a, _b;
    const data2 = (_a = dateData == null ? void 0 : dateData.filter((item) => {
      var _a2;
      return Number((_a2 = item == null ? void 0 : item.station_name) == null ? void 0 : _a2.station_unique_id) === Number(id);
    })[0]) == null ? void 0 : _a.station_name;
    return isChild ? (_b = data2 == null ? void 0 : data2.parent_id) == null ? void 0 : _b.station_name : data2 == null ? void 0 : data2.station_name;
  };
  const titleImage = ({ id, dateData, language, isChild }) => {
    var _a, _b;
    const data2 = (_a = dateData == null ? void 0 : dateData.filter((item) => {
      var _a2;
      return Number((_a2 = item == null ? void 0 : item.station_name) == null ? void 0 : _a2.station_unique_id) === Number(id);
    })[0]) == null ? void 0 : _a.station_name;
    return isChild ? (_b = data2 == null ? void 0 : data2.parent_id) == null ? void 0 : _b.station_image_2 : data2 == null ? void 0 : data2.station_image_2;
  };
  const contentFilteration = ({ id, dateData, language }) => {
    var _a, _b, _c, _d;
    const data2 = dateData == null ? void 0 : dateData.filter((item) => {
      var _a2;
      return Number((_a2 = item == null ? void 0 : item.station_name) == null ? void 0 : _a2.station_unique_id) === Number(id);
    })[0];
    return language === "da" ? (_b = (_a = data2 == null ? void 0 : data2.recipe_id) == null ? void 0 : _a.menu_info) == null ? void 0 : _b.trim() : (_d = (_c = data2 == null ? void 0 : data2.recipe_id) == null ? void 0 : _c.menu_info_1) == null ? void 0 : _d.trim();
  };
  const allergensFilteration = ({ id, dateData, language }) => {
    var _a, _b;
    const data2 = dateData == null ? void 0 : dateData.filter((item) => {
      var _a2;
      return Number((_a2 = item == null ? void 0 : item.station_name) == null ? void 0 : _a2.station_unique_id) === Number(id);
    })[0];
    const list = (_b = (_a = data2 == null ? void 0 : data2.recipe_id) == null ? void 0 : _a.allergens_list) == null ? void 0 : _b.map((e, i) => {
      const values = e == null ? void 0 : e.Allergens_id;
      return language === "da" ? i !== 0 ? `, ${values == null ? void 0 : values.name}` : values == null ? void 0 : values.name : i !== 0 ? `, ${values == null ? void 0 : values.translated_name}` : values == null ? void 0 : values.translated_name;
    });
    return list;
  };
  const dietaryFilteration = ({ id, dateData, language }) => {
    var _a, _b;
    const data2 = dateData == null ? void 0 : dateData.filter((item) => {
      var _a2;
      return Number((_a2 = item == null ? void 0 : item.station_name) == null ? void 0 : _a2.station_unique_id) === Number(id);
    })[0];
    const list = (_b = (_a = data2 == null ? void 0 : data2.recipe_id) == null ? void 0 : _a.dietary_list) == null ? void 0 : _b.map((e, i) => {
      const values = e == null ? void 0 : e.Dietary_id;
      return language === "da" ? i !== 0 ? `, ${values == null ? void 0 : values.name}` : values == null ? void 0 : values.name : i !== 0 ? `, ${values == null ? void 0 : values.translated_name}` : values == null ? void 0 : values.translated_name;
    });
    return list;
  };
  const isDataPresent = ({ id, dateData, language }) => {
    var _a, _b, _c, _d, _e, _f;
    var flag = false;
    const content = dateData == null ? void 0 : dateData.filter((item) => {
      var _a2;
      return Number((_a2 = item == null ? void 0 : item.station_name) == null ? void 0 : _a2.station_unique_id) === Number(id);
    })[0];
    flag = language === "da" ? ((_c = (_b = (_a = content == null ? void 0 : content.recipe_id) == null ? void 0 : _a.menu_info) == null ? void 0 : _b.trim()) == null ? void 0 : _c.length) ? true : false : ((_f = (_e = (_d = content == null ? void 0 : content.recipe_id) == null ? void 0 : _d.menu_info_1) == null ? void 0 : _e.trim()) == null ? void 0 : _f.length) ? true : false;
    return flag;
  };
  const isAllergenDataPresent = ({ id, dateData, language }) => {
    var _a, _b;
    var flag = false;
    const allergensData = dateData == null ? void 0 : dateData.filter((item) => {
      var _a2;
      return Number((_a2 = item == null ? void 0 : item.station_name) == null ? void 0 : _a2.station_unique_id) === Number(id);
    })[0];
    flag = ((_b = (_a = allergensData == null ? void 0 : allergensData.recipe_id) == null ? void 0 : _a.allergens_list) == null ? void 0 : _b.length) ? true : false;
    return flag ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "font-bold",
          children: [
            language === "da" ? "Allergener" : "Allergens",
            ": "
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 131,
          columnNumber: 21
        }, this),
        allergensFilteration({ dateData, id, language })
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/weekmenu/$location/index.js",
      lineNumber: 131,
      columnNumber: 19
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "font-bold",
          children: [
            language === "da" ? "Allergener" : "Allergens",
            ": "
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 133,
          columnNumber: 9
        }, this),
        language === "da" ? EMPTYALLERGENSDATA_DK : EMPTYALLERGENSDATA_ENG
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/weekmenu/$location/index.js",
      lineNumber: 133,
      columnNumber: 7
    }, this);
  };
  const isDietaryDataPresent = ({ id, dateData, language }) => {
    var _a, _b;
    var flag = false;
    const allergensData = dateData == null ? void 0 : dateData.filter((item) => {
      var _a2;
      return Number((_a2 = item == null ? void 0 : item.station_name) == null ? void 0 : _a2.station_unique_id) === Number(id);
    })[0];
    flag = ((_b = (_a = allergensData == null ? void 0 : allergensData.recipe_id) == null ? void 0 : _a.dietary_list) == null ? void 0 : _b.length) ? true : false;
    return flag ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "font-bold",
          children: [
            language === "da" ? DIETARY_PREFERENCES_DK : DIETARY_PREFERENCES_ENG,
            ": "
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 143,
          columnNumber: 22
        }, this),
        dietaryFilteration({ dateData, id, language }),
        " "
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/weekmenu/$location/index.js",
      lineNumber: 143,
      columnNumber: 19
    }, this) : null;
  };
  const stationBody = ({ data: data2, lang, id, styleChange }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: `content pt-2 ${styleChange ? "pt-6 lg:pt-9" : "pb-3"}`,
          children: contentFilteration({ dateData: data2, id, language: lang })
        }, void 0, false, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 149,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "leading-normal allergen",
          children: isAllergenDataPresent({ dateData: data2, id, language: lang })
        }, void 0, false, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 150,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "leading-normal dietary",
          children: isDietaryDataPresent({ dateData: data2, id, language: lang })
        }, void 0, false, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 151,
          columnNumber: 7
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/weekmenu/$location/index.js",
      lineNumber: 148,
      columnNumber: 12
    }, this);
  };
  const renderSingleStation = ({ data: data2, lang, id }) => {
    return isDataPresent({ dateData: data2, id, language: lang }) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "col-span-12 md:col-span-4 f-16 p-2 text-velux_green",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "font-bold md:min-h-[60px] pb-2 md:pb-0 uppercase inline-flex items-end station-title",
          children: titleImage({ dateData: data2, id, language: lang, isChild: false }) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: getAssetURL(titleImage({ dateData: data2, id, language: lang, isChild: false })),
            width: id === 1 || id === 12 ? "70px" : id === 5 ? "120px" : "90px",
            height: id === 1 || id === 12 ? "70px" : "80px"
          }, void 0, false, {
            fileName: "app/routes/banner/weekmenu/$location/index.js",
            lineNumber: 158,
            columnNumber: 11
          }, this) : titleFilteration({ dateData: data2, id, language: lang, isChild: false })
        }, void 0, false, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 156,
          columnNumber: 7
        }, this),
        stationBody({ data: data2, lang, id, styleChange: false })
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/weekmenu/$location/index.js",
      lineNumber: 155,
      columnNumber: 73
    }, this);
  };
  const dayMenu = (props) => {
    var _a, _b, _c;
    const pickerLang = {
      DaysEng: [
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY	",
        "FRIDAY"
      ],
      DaysDa: [
        "MANDAG",
        "TIRSDAG",
        "ONSDAG",
        "TORSDAG",
        "FREDAG"
      ],
      from: "From",
      to: "To"
    };
    const DayMenu = [];
    const DayFlag = [];
    while (startDate <= endDate) {
      var dateData = (_a = data == null ? void 0 : data.data) == null ? void 0 : _a.filter((info) => {
        return (info == null ? void 0 : info.date) == format(startDate, "yyyy-MM-dd");
      });
      if ((dateData == null ? void 0 : dateData.length) > 0) {
        var flagValue = false;
        dateData == null ? void 0 : dateData.map((e) => {
          var _a2, _b2, _c2, _d;
          if (props === "da") {
            flagValue = flagValue === false ? ((_b2 = (_a2 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _a2.menu_info) == null ? void 0 : _b2.length) ? true : false : true;
          } else {
            flagValue = flagValue === false ? ((_d = (_c2 = e == null ? void 0 : e.recipe_id) == null ? void 0 : _c2.menu_info_1) == null ? void 0 : _d.length) ? true : false : true;
          }
        });
        DayFlag.push(flagValue);
        const IsdataPresent = (_b = [SECTION_1_ID, SECTION_2_ID, SECTION_3_ID, SECTION_4_ID]) == null ? void 0 : _b.map((e) => isDataPresent({ dateData, id: e, language: props }));
        DayMenu.push(
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: flagValue && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "content-section xs:px-[15px] md:p-6 lg:p-10",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "block days py-[25px]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "block title text-velux_green font-bold uppercase text-2xl tracking-[0.6px] text-center p-4",
                    children: props === "da" ? pickerLang.DaysDa[startDate.getDay() - 1] : pickerLang.DaysEng[startDate.getDay() - 1]
                  }, void 0, false, {
                    fileName: "app/routes/banner/weekmenu/$location/index.js",
                    lineNumber: 211,
                    columnNumber: 19
                  }, this),
                  (IsdataPresent == null ? void 0 : IsdataPresent.includes(true)) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "grid grid-cols-12 gap-4 gap-y-[30px] md:gap-y-[60px] py-4 md:py-8",
                      children: (_c = [SECTION_1_ID, SECTION_2_ID, SECTION_3_ID, SECTION_4_ID]) == null ? void 0 : _c.map((e) => renderSingleStation({ data: dateData, lang: props, id: e }))
                    }, void 0, false, {
                      fileName: "app/routes/banner/weekmenu/$location/index.js",
                      lineNumber: 215,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/banner/weekmenu/$location/index.js",
                    lineNumber: 214,
                    columnNumber: 21
                  }, this)
                ]
              }, pickerLang.DaysDa[startDate.getDay() - 1], true, {
                fileName: "app/routes/banner/weekmenu/$location/index.js",
                lineNumber: 210,
                columnNumber: 17
              }, this)
            }, pickerLang.DaysDa[startDate.getDay() - 1], false, {
              fileName: "app/routes/banner/weekmenu/$location/index.js",
              lineNumber: 209,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/routes/banner/weekmenu/$location/index.js",
            lineNumber: 206,
            columnNumber: 11
          }, this)
        );
      }
      startDate = addDays(startDate, 1);
    }
    startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
    return { DayMenu, flagValue: DayFlag };
  };
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const Body = (props) => {
    var _a, _b, _c, _d, _e;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        ((_b = (_a = dayMenu(props)) == null ? void 0 : _a.flagValue) == null ? void 0 : _b.includes(true)) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "main-title flex items-center justify-between leading-normal relative",
          ref: props === "en" ? englishCon : danishCon,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "intranet-banner-image",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                src: intranet_page_bg_default,
                alt: "intranet banner",
                className: "min-h-[100px]"
              }, void 0, false, {
                fileName: "app/routes/banner/weekmenu/$location/index.js",
                lineNumber: 242,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/banner/weekmenu/$location/index.js",
              lineNumber: 241,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "overlay-images absolute top-0 flex justify-between items-center w-full h-full px-4 md:px-10 py-[10px]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex max-w-[65px] sm:max-w-[80px] lg:max-w-[100px]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: foodplaceLogo1_default,
                    alt: "food-place-logo",
                    className: "max-w-full"
                  }, void 0, false, {
                    fileName: "app/routes/banner/weekmenu/$location/index.js",
                    lineNumber: 246,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/banner/weekmenu/$location/index.js",
                  lineNumber: 245,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex flex-col title text-white text-center leading-normal my-1 ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "text-base md:text-lg font-normal",
                      children: [
                        props === "da" ? "UGE" : "Week",
                        " ",
                        getWeek(addDays(new Date(), presentWeek)),
                        " "
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/banner/weekmenu/$location/index.js",
                      lineNumber: 250,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "font-bold text-[20px] md:text-[24px]",
                      children: props === "da" ? "Ugens menu" : "Menu of the week"
                    }, void 0, false, {
                      fileName: "app/routes/banner/weekmenu/$location/index.js",
                      lineNumber: 251,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/banner/weekmenu/$location/index.js",
                  lineNumber: 249,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: `lang f-18 tracking-[0.6px] px-1 md:px-2 leading-[16px] text-white cursor-pointer ${props === "da" ? " font-bold" : ""}`,
                      onClick: () => handleScroll(danishCon),
                      children: "DK"
                    }, void 0, false, {
                      fileName: "app/routes/banner/weekmenu/$location/index.js",
                      lineNumber: 254,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "px-1 md:px-2 relative",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "v-line"
                      }, void 0, false, {
                        fileName: "app/routes/banner/weekmenu/$location/index.js",
                        lineNumber: 257,
                        columnNumber: 54
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/banner/weekmenu/$location/index.js",
                      lineNumber: 257,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: `lang f-18 tracking-[0.6px] px-1 md:px-2 leading-[16px] text-white cursor-pointer ${props === "en" ? " font-bold" : ""}`,
                      onClick: () => handleScroll(englishCon),
                      children: "EN"
                    }, void 0, false, {
                      fileName: "app/routes/banner/weekmenu/$location/index.js",
                      lineNumber: 258,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/banner/weekmenu/$location/index.js",
                  lineNumber: 253,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/banner/weekmenu/$location/index.js",
              lineNumber: 244,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 238,
          columnNumber: 55
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "weekdays",
          children: ((_d = (_c = dayMenu(props)) == null ? void 0 : _c.flagValue) == null ? void 0 : _d.includes(true)) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "",
            children: (_e = dayMenu(props)) == null ? void 0 : _e.DayMenu
          }, void 0, false, {
            fileName: "app/routes/banner/weekmenu/$location/index.js",
            lineNumber: 265,
            columnNumber: 57
          }, this)
        }, void 0, false, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 264,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/weekmenu/$location/index.js",
      lineNumber: 237,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      " ",
      LocationMatch === false ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
        fileName: "app/routes/banner/weekmenu/$location/index.js",
        lineNumber: 274,
        columnNumber: 35
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "menu-of-the-week font-noto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "container-width m-auto",
            children: [
              Body("da"),
              Body("en")
            ]
          }, void 0, true, {
            fileName: "app/routes/banner/weekmenu/$location/index.js",
            lineNumber: 276,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/routes/banner/weekmenu/$location/index.js",
          lineNumber: 275,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: "app/routes/banner/weekmenu/$location/index.js",
        lineNumber: 274,
        columnNumber: 55
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/banner/weekmenu/$location/index.js",
    lineNumber: 274,
    columnNumber: 5
  }, this);
}
export {
  index as default
};
//# sourceMappingURL=/build/routes/banner/weekmenu/$location/index-M5SELVMB.js.map
