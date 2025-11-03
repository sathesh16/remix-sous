import {
  marienlyst_logo_default
} from "/build/_shared/chunk-TQXZOQST.js";
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

// app/routes/banner/conference/$location/screen/$screen_name/index.jsx
var import_react = __toESM(require_react());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function RenderConferenceTable(props) {
  const table_rows = [];
  var current_direction = "";
  const setDirection = (row) => {
    var _a, _b;
    current_direction = props.screen_name == "a" ? (_a = row == null ? void 0 : row.room_id) == null ? void 0 : _a.screen_a : (_b = row == null ? void 0 : row.room_id) == null ? void 0 : _b.screen_b;
  };
  props.table_data.map((row) => {
    var _a;
    table_rows.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
        className: "font-futura",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
            className: "room-data pr-10 text-left w-[45%]",
            children: [
              " ",
              row == null ? void 0 : row.company_name
            ]
          }, void 0, true, {
            fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
            className: "room-data px-4 text-left w-[40%]",
            children: [
              " ",
              (_a = row == null ? void 0 : row.room_id) == null ? void 0 : _a.name
            ]
          }, void 0, true, {
            fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
            lineNumber: 75,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
            className: "room-data pl-2 text-center w-[15%]",
            children: [
              setDirection(row),
              current_direction == "Up" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: "ri-arrow-up-line"
              }, void 0, false, {
                fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
                lineNumber: 79,
                columnNumber: 13
              }, this) : current_direction == "Down" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: "ri-arrow-down-line"
              }, void 0, false, {
                fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
                lineNumber: 81,
                columnNumber: 13
              }, this) : current_direction == "Right" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: "ri-arrow-right-line"
              }, void 0, false, {
                fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
                lineNumber: 83,
                columnNumber: 13
              }, this) : current_direction == "Left" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: "ri-arrow-left-line"
              }, void 0, false, {
                fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
                lineNumber: 85,
                columnNumber: 13
              }, this) : ""
            ]
          }, void 0, true, {
            fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ]
      }, row == null ? void 0 : row.id, true, {
        fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
        lineNumber: 73,
        columnNumber: 7
      }, this)
    );
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
      className: "border-spacing-5 mt-[50px] w-[80%] rooms-table",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            className: "border-b border-b-black font-ivymode",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                className: "py-[20px] pr-10 text-left w-[45%]",
                children: "COMPANY"
              }, void 0, false, {
                fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
                lineNumber: 99,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                className: "py-[20px] px-4 text-left w-[40%]",
                children: "ROOM"
              }, void 0, false, {
                fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
                lineNumber: 100,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                className: "py-[20px] pl-2 text-right w-[15%]",
                children: "DIRECTION"
              }, void 0, false, {
                fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
                lineNumber: 101,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
            lineNumber: 98,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
          lineNumber: 97,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
          children: table_rows
        }, void 0, false, {
          fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
          lineNumber: 104,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
      lineNumber: 96,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
    lineNumber: 95,
    columnNumber: 5
  }, this);
}
function index() {
  const { logo, today, data, screen_name, location } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: screen_name == "a" || screen_name == "b" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: location == true ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "room-banner flex flex-col text-primary items-center justify-start min-h-[100vh] px-6 py-32 mx-auto bg-[#ebdbb4]",
        children: (data == null ? void 0 : data.data.length) != 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              className: "my-[72px] min-w-[175px]",
              alt: "company logo",
              src: marienlyst_logo_default
            }, void 0, false, {
              fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
              lineNumber: 121,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              className: "pb-[25px] font-ivymode title",
              children: "Conference"
            }, void 0, false, {
              fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
              lineNumber: 126,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              className: "pb-[50px] font-ivymode date",
              children: today
            }, void 0, false, {
              fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
              lineNumber: 127,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RenderConferenceTable, {
              screen_name,
              table_data: data == null ? void 0 : data.data
            }, void 0, false, {
              fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
              lineNumber: 128,
              columnNumber: 19
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
          lineNumber: 120,
          columnNumber: 17
        }, this) : ""
      }, void 0, false, {
        fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
        lineNumber: 118,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
        fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
        lineNumber: 138,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
      lineNumber: 116,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
      lineNumber: 142,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/routes/banner/conference/$location/screen/$screen_name/index.jsx",
    lineNumber: 114,
    columnNumber: 5
  }, this);
}
export {
  index as default
};
//# sourceMappingURL=/build/routes/banner/conference/$location/screen/$screen_name/index-J2QZVYCN.js.map
