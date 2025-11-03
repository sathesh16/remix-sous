import {
  Custom404Page
} from "/build/_shared/chunk-5ZR5TTKP.js";
import {
  format
} from "/build/_shared/chunk-6W3RSCO2.js";
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

// app/routes/banner/spa/$location/screen/$screen_name/index.jsx
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());

// app/assets/images/spa_banner_activity.png
var spa_banner_activity_default = "/build/_assets/spa_banner_activity-GPOTUGRU.png";

// app/components/banner/spaThreeColbanner.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SpaThreeColBanner({ data }) {
  const treatmentData = [];
  const drinksData = [];
  const snacksData = [];
  !!data && (data == null ? void 0 : data.map((e) => {
    (e == null ? void 0 : e.activity_type) === "drinks" ? drinksData == null ? void 0 : drinksData.push(e) : (e == null ? void 0 : e.activity_type) === "snacks" ? snacksData == null ? void 0 : snacksData.push(e) : treatmentData == null ? void 0 : treatmentData.push(e);
  }));
  const Body = ({ treatment, description, price }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "d-lists",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "title font-normal",
          children: treatment
        }, void 0, false, {
          fileName: "app/components/banner/spaThreeColbanner.jsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        !!treatment && !!description && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "desc p-[10px]",
          children: description
        }, void 0, false, {
          fileName: "app/components/banner/spaThreeColbanner.jsx",
          lineNumber: 19,
          columnNumber: 42
        }, this),
        !!treatment && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "price p-[5px]",
          children: !!price ? price + " kr" : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "spa-free font-bold",
                children: "Free "
              }, void 0, false, {
                fileName: "app/components/banner/spaThreeColbanner.jsx",
                lineNumber: 26,
                columnNumber: 17
              }, this),
              "(unlimited spots)"
            ]
          }, void 0, true, {
            fileName: "app/components/banner/spaThreeColbanner.jsx",
            lineNumber: 25,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: "app/components/banner/spaThreeColbanner.jsx",
          lineNumber: 21,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/banner/spaThreeColbanner.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this);
  };
  const renderItem = ({ data: data2 }) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-[680px] bg-[#EBDBB4] px-[40px] py-[35px]",
      children: (data2 == null ? void 0 : data2.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "spa-banners-list",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "m-title uppercase pb-[20px]",
            children: (_a = data2 == null ? void 0 : data2[0]) == null ? void 0 : _a.activity_type
          }, void 0, false, {
            fileName: "app/components/banner/spaThreeColbanner.jsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          data2 == null ? void 0 : data2.map((e) => {
            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "details",
              children: [
                Body({
                  treatment: e == null ? void 0 : e.treatment,
                  description: e == null ? void 0 : e.description,
                  price: e == null ? void 0 : e.price
                }),
                Body({
                  treatment: e == null ? void 0 : e.treatment_1,
                  description: e == null ? void 0 : e.description_1,
                  price: e == null ? void 0 : e.price_1
                }),
                Body({
                  treatment: e == null ? void 0 : e.treatment_2,
                  description: e == null ? void 0 : e.description_2,
                  price: e == null ? void 0 : e.price_2
                })
              ]
            }, e == null ? void 0 : e.id, true, {
              fileName: "app/components/banner/spaThreeColbanner.jsx",
              lineNumber: 43,
              columnNumber: 17
            }, this);
          })
        ]
      }, void 0, true, {
        fileName: "app/components/banner/spaThreeColbanner.jsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: "app/components/banner/spaThreeColbanner.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex text-center text-primary items-center justify-center gap-5 font-futura w-full",
    children: [
      (treatmentData == null ? void 0 : treatmentData.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "spa-banners",
        children: renderItem({ data: treatmentData })
      }, void 0, false, {
        fileName: "app/components/banner/spaThreeColbanner.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      (drinksData == null ? void 0 : drinksData.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "spa-banners",
        children: renderItem({ data: drinksData })
      }, void 0, false, {
        fileName: "app/components/banner/spaThreeColbanner.jsx",
        lineNumber: 72,
        columnNumber: 34
      }, this),
      (snacksData == null ? void 0 : snacksData.length) > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "spa-banners",
        children: renderItem({ data: snacksData })
      }, void 0, false, {
        fileName: "app/components/banner/spaThreeColbanner.jsx",
        lineNumber: 73,
        columnNumber: 34
      }, this),
      (treatmentData == null ? void 0 : treatmentData.length) === 0 && (snacksData == null ? void 0 : snacksData.length) === 0 && (treatmentData == null ? void 0 : treatmentData.length) === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "spa-banners",
        children: renderItem({ data: "" })
      }, void 0, false, {
        fileName: "app/components/banner/spaThreeColbanner.jsx",
        lineNumber: 77,
        columnNumber: 11
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/banner/spaThreeColbanner.jsx",
    lineNumber: 68,
    columnNumber: 5
  }, this);
}
var spaThreeColbanner_default = SpaThreeColBanner;

// app/assets/images/spa_three_col_banner.png
var spa_three_col_banner_default = "/build/_assets/spa_three_col_banner-7EFCWUIY.png";

// app/assets/images/logo_white.png
var logo_white_default = "/build/_assets/logo_white-HDCE7I3K.png";

// app/routes/banner/spa/$location/screen/$screen_name/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function RenderSpaActivites(props) {
  var _a;
  const { data } = props;
  const spa_activities = data;
  const activity_pricing = [];
  (_a = spa_activities == null ? void 0 : spa_activities.data) == null ? void 0 : _a.map((activity) => {
    (activity == null ? void 0 : activity.treatment) && (activity == null ? void 0 : activity.time) ? activity_pricing.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
        className: "mb-10 border-s border-primary",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "font-futura",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "act_time absolute -start-20 mb-1 text-xl font-normal leading-none",
              children: format(
                new Date((activity == null ? void 0 : activity.date) + "T" + (activity == null ? void 0 : activity.time)),
                "HH:mm"
              )
            }, void 0, false, {
              fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
              lineNumber: 72,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "act_details relative -top-[4px]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "act_title pl-5 text-lg font-semibold",
                  children: activity == null ? void 0 : activity.treatment
                }, void 0, false, {
                  fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
                  lineNumber: 79,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "act_desc pl-5 mt-2 font-normal",
                  children: activity == null ? void 0 : activity.description
                }, void 0, false, {
                  fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
                  lineNumber: 82,
                  columnNumber: 17
                }, this),
                (activity == null ? void 0 : activity.price) == "0" || (activity == null ? void 0 : activity.price) === void 0 || (activity == null ? void 0 : activity.price) === null ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "act_spots pl-4 mt-4 font-normal flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("b", {
                      className: "font-medium",
                      children: "Free"
                    }, void 0, false, {
                      fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
                      lineNumber: 87,
                      columnNumber: 21
                    }, this),
                    " (unlimited spots)"
                  ]
                }, void 0, true, {
                  fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
                  lineNumber: 86,
                  columnNumber: 19
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "act_price pl-5 mt-4 text-lg font-normal",
                  children: [
                    activity == null ? void 0 : activity.price,
                    " kr"
                  ]
                }, void 0, true, {
                  fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
                  lineNumber: 91,
                  columnNumber: 19
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
              lineNumber: 78,
              columnNumber: 15
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
          lineNumber: 71,
          columnNumber: 13
        }, this)
      }, activity == null ? void 0 : activity.id, false, {
        fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
        lineNumber: 67,
        columnNumber: 11
      }, this)
    ) : "";
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex text-primary items-center justify-center mx-auto min-h-screen lg:py-0 bg-[#ebdbb4] spa_banner_preview",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "img_section",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: spa_banner_activity_default,
            alt: "",
            className: "h-full w-full"
          }, void 0, false, {
            fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
            lineNumber: 106,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
          lineNumber: 105,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "content_section flex flex-col w-full items-center justify-center",
          children: spa_activities.data.length != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "px-[60px] py-[40px] w-full flex flex-col items-center justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-2xl mb-10 font-ivymode main_title",
                children: "Today's Spa Activities"
              }, void 0, false, {
                fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
                lineNumber: 111,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
                className: "relative w-[440px]",
                children: activity_pricing
              }, void 0, false, {
                fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
                lineNumber: 112,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "mb-6 text-lg font-medium absolute bottom-0 text-center font-futura",
                children: "To book, please visit the spa reception!"
              }, void 0, false, {
                fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
                lineNumber: 113,
                columnNumber: 15
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
            lineNumber: 110,
            columnNumber: 13
          }, this) : ""
        }, void 0, false, {
          fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
          lineNumber: 108,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
    lineNumber: 103,
    columnNumber: 5
  }, this);
}
function index() {
  const { data, screen_name, location } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: location == true ? screen_name == "a" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RenderSpaActivites, {
      data
    }, void 0, false, {
      fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
      lineNumber: 131,
      columnNumber: 11
    }, this) : screen_name == "b" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "page-preview-atthespa flex text-primary items-center justify-between px-20  mx-auto min-h-screen lg:py-0",
      style: { backgroundImage: `url(${spa_three_col_banner_default})` },
      children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex justify-between flex-col items-center w-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "title pb-[40px] text-white text-center font-ivymode",
              children: "At the Spa"
            }, void 0, false, {
              fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
              lineNumber: 139,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(spaThreeColbanner_default, {
              data: data == null ? void 0 : data.data
            }, void 0, false, {
              fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
              lineNumber: 140,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              className: "pt-10 relative top-1",
              width: "160px",
              height: "160px",
              alt: "company logo",
              src: logo_white_default
            }, void 0, false, {
              fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
              lineNumber: 141,
              columnNumber: 15
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
          lineNumber: 138,
          columnNumber: 13
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
      lineNumber: 133,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
      lineNumber: 151,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
      lineNumber: 154,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/banner/spa/$location/screen/$screen_name/index.jsx",
    lineNumber: 128,
    columnNumber: 5
  }, this);
}
export {
  index as default
};
//# sourceMappingURL=/build/routes/banner/spa/$location/screen/$screen_name/index-ZPDNARKM.js.map
