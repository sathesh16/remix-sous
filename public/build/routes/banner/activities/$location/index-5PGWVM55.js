import {
  marienlyst_logo_default
} from "/build/_shared/chunk-TQXZOQST.js";
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
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/banner/activities/$location/index.jsx
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function RenderActivityTimeLine(props) {
  var _a;
  const activity_track = [];
  (_a = props == null ? void 0 : props.activities) == null ? void 0 : _a.map((activity) => {
    (activity == null ? void 0 : activity.activity_name) && (activity == null ? void 0 : activity.time) ? activity_track.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
        className: "pb-[50px] ms-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "absolute -ml-[125px] mb-1 text-sm font-normal leading-none activity_time",
              children: format(
                new Date((props == null ? void 0 : props.today_date) + "T" + (activity == null ? void 0 : activity.time)),
                "h:mm a"
              )
            }, void 0, false, {
              fileName: "app/routes/banner/activities/$location/index.jsx",
              lineNumber: 75,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "absolute w-[15px] h-[15px] bg-primary rounded-full border-primary circle-icon"
            }, void 0, false, {
              fileName: "app/routes/banner/activities/$location/index.jsx",
              lineNumber: 81,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "activities_list",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "pl-5 font-normal activity_name",
                  children: activity == null ? void 0 : activity.activity_name
                }, void 0, false, {
                  fileName: "app/routes/banner/activities/$location/index.jsx",
                  lineNumber: 83,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "pl-5 activity_description",
                  children: activity == null ? void 0 : activity.activity_description
                }, void 0, false, {
                  fileName: "app/routes/banner/activities/$location/index.jsx",
                  lineNumber: 86,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/banner/activities/$location/index.jsx",
              lineNumber: 82,
              columnNumber: 15
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/activities/$location/index.jsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      }, activity == null ? void 0 : activity.id, false, {
        fileName: "app/routes/banner/activities/$location/index.jsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ) : "";
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "activity_track w-full pl-[150px] max-w-[834px] pt-[40px]",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
        className: "relative border-s border-primary w-full font-futura",
        children: activity_track
      }, void 0, false, {
        fileName: "app/routes/banner/activities/$location/index.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/routes/banner/activities/$location/index.jsx",
      lineNumber: 98,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/banner/activities/$location/index.jsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
function index() {
  const { logo, today, data, is_allowed_day, location, today_date } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: is_allowed_day && location ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "activity-preview room-banner flex flex-col text-primary items-center justify-start min-h-[100vh] px-6 py-32 mx-auto bg-[#ebdbb4]",
      children: (data == null ? void 0 : data.length) != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            className: "my-[72px] min-w-[175px]",
            alt: "company logo",
            src: marienlyst_logo_default
          }, void 0, false, {
            fileName: "app/routes/banner/activities/$location/index.jsx",
            lineNumber: 117,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "pb-[25px] font-ivymode title",
            children: "What's on"
          }, void 0, false, {
            fileName: "app/routes/banner/activities/$location/index.jsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "pb-[50px] font-ivymode date",
            children: today
          }, void 0, false, {
            fileName: "app/routes/banner/activities/$location/index.jsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          data.length != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RenderActivityTimeLine, {
            activities: data,
            today_date
          }, void 0, false, {
            fileName: "app/routes/banner/activities/$location/index.jsx",
            lineNumber: 125,
            columnNumber: 17
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "text-xl mt-10",
            children: "No activites for the day."
          }, void 0, false, {
            fileName: "app/routes/banner/activities/$location/index.jsx",
            lineNumber: 130,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/banner/activities/$location/index.jsx",
        lineNumber: 116,
        columnNumber: 13
      }, this) : ""
    }, void 0, false, {
      fileName: "app/routes/banner/activities/$location/index.jsx",
      lineNumber: 114,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/banner/activities/$location/index.jsx",
      lineNumber: 138,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/banner/activities/$location/index.jsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
export {
  index as default
};
//# sourceMappingURL=/build/routes/banner/activities/$location/index-5PGWVM55.js.map
