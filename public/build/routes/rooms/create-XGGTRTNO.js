import {
  useHydrated
} from "/build/_shared/chunk-KATHKNLH.js";
import {
  import_react_select_cjs_default
} from "/build/_shared/chunk-MOIBM2EW.js";
import {
  require_db
} from "/build/_shared/chunk-HHTSHZGZ.js";
import {
  Footer
} from "/build/_shared/chunk-NO54GCYG.js";
import {
  HeaderFile
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import "/build/_shared/chunk-I24TZKN2.js";
import "/build/_shared/chunk-TQXZOQST.js";
import {
  Q
} from "/build/_shared/chunk-776WLWWM.js";
import {
  ISS_DENMARK_HQ,
  directusLoaderLink
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  require_session
} from "/build/_shared/chunk-2FLU7E64.js";
import {
  Form,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/rooms/create.jsx
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Create Rooms" };
}
function RoomsCreate() {
  var _a;
  const { location_id } = useLoaderData();
  const [auth, setAuth] = (0, import_react2.useState)(true);
  const navigate = useNavigate();
  const [room, setRoom] = (0, import_react2.useState)("");
  const [screenA, setScreenA] = (0, import_react2.useState)();
  const [screenB, setScreenB] = (0, import_react2.useState)();
  const [buttonTrigger, setButtonTrigger] = import_react2.default.useState(false);
  const roomRef = import_react2.default.useRef(null);
  const isHydrated = useHydrated();
  import_react2.default.useEffect(() => {
    const element = document.getElementById("submitId");
    element.addEventListener("click", function() {
      if (!buttonTrigger) {
        if (!!(room == null ? void 0 : room.trim()) && !!screenA && !!screenB) {
          if (document.activeElement !== roomRef.current) {
            element.style.pointerEvents = "none";
            setButtonTrigger(true);
          }
        }
      }
    });
    return () => {
      element.removeEventListener("click", function() {
        setButtonTrigger(false);
      });
    };
  }, [room, screenA, screenB]);
  const createHandle = async (e) => {
    var _a2;
    const directus = directusLoaderLink;
    if (((_a2 = room == null ? void 0 : room.trim()) == null ? void 0 : _a2.length) > 0) {
      if (screenA) {
        if (screenB) {
          await directus.items("Rooms").createOne({
            name: room,
            screen_a: screenA == null ? void 0 : screenA.direction,
            screen_b: screenB == null ? void 0 : screenB.direction
          }).then((res) => {
            navigate("/rooms/manage");
            Q.success(" Created successfully");
          }).catch((err) => {
            navigate(".", { replace: true });
            console.log(err);
            Q.error(err);
          });
        } else {
          Q.error("Select Screen-B direction");
        }
      } else {
        Q.error("Select Screen-A direction");
      }
    } else {
      Q.error("Room name is required");
    }
  };
  const directionData = [
    { name: "North", id: 1, direction: "Up" },
    { name: "South", id: 2, direction: "Down" },
    { name: "West", id: 3, direction: "Left" },
    { name: "East", id: 4, direction: "Right" }
  ];
  const RepeatSelection = (prop) => {
    const onChangeHandle = (e) => {
      prop === false ? setScreenA(e) : setScreenB(e);
      return "";
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: isHydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_select_cjs_default._default, {
        id: "rooms",
        instanceId: prop === false ? 1 : 2,
        classNamePrefix: "cursor-pointer react-select",
        className: "screen-direction-create react-select-container mt-1 block w-full rounded-md border border-gray-300 py-2 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary focus:outline-none focus:ring-primary sm:text-sm",
        maxMenuHeight: 250,
        onChange: (e) => onChangeHandle(e),
        isSearchable: false,
        components: { IndicatorSeparator: () => null },
        value: prop === false ? screenA : screenB,
        options: directionData,
        getOptionLabel: (option) => {
          var _a2, _b;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
            className: `ri-arrow-${(_b = (_a2 = option == null ? void 0 : option.direction) == null ? void 0 : _a2.trim()) == null ? void 0 : _b.toLowerCase()}-line`
          }, void 0, false, {
            fileName: "app/routes/rooms/create.jsx",
            lineNumber: 118,
            columnNumber: 15
          }, this);
        },
        getOptionValue: (option) => option,
        styles: {
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            boxShadow: "none"
          })
        }
      }, void 0, false, {
        fileName: "app/routes/rooms/create.jsx",
        lineNumber: 106,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: "app/routes/rooms/create.jsx",
      lineNumber: 104,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page-content",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: setAuth,
        noLeftLogo: ((_a = ISS_DENMARK_HQ) == null ? void 0 : _a.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/rooms/create.jsx",
        lineNumber: 139,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page__wrap w-full flex justify-center items-center mh-145",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "border p-6 rounded-md border-gray-300 form-area c-allergens",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
              onSubmit: (e) => createHandle(e),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "max-w-[400px] w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between items-center gap-5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex justify-start items-center gap-3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                              type: "button",
                              title: "Backward",
                              onClick: () => navigate(-1),
                              className: "w-10 h-10 min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-full border border-gray-100 bg-white  text-sm font-medium text-primary shadow-md hover:bg-gray-50 focus:outline-none focus:shadow-md sm:w-auto",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  strokeWidth: "3",
                                  stroke: "currentColor",
                                  className: "w-5 h-5",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    d: "M15.75 19.5L8.25 12l7.5-7.5"
                                  }, void 0, false, {
                                    fileName: "app/routes/rooms/create.jsx",
                                    lineNumber: 167,
                                    columnNumber: 29
                                  }, this)
                                }, void 0, false, {
                                  fileName: "app/routes/rooms/create.jsx",
                                  lineNumber: 159,
                                  columnNumber: 27
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/rooms/create.jsx",
                                lineNumber: 158,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/rooms/create.jsx",
                              lineNumber: 152,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/rooms/create.jsx",
                            lineNumber: 151,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                              className: "text-xl font-semibold text-primary",
                              children: "Create a Room"
                            }, void 0, false, {
                              fileName: "app/routes/rooms/create.jsx",
                              lineNumber: 177,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/rooms/create.jsx",
                            lineNumber: 176,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/rooms/create.jsx",
                        lineNumber: 150,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex justify-between items-center gap-5",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          type: "submit",
                          id: "submitId",
                          title: "Save",
                          className: "w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-full border border-transparent bg-primary text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              strokeWidth: "2",
                              stroke: "currentColor",
                              className: "w-5 h-5",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                d: "M4.5 12.75l6 6 9-13.5"
                              }, void 0, false, {
                                fileName: "app/routes/rooms/create.jsx",
                                lineNumber: 198,
                                columnNumber: 27
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/rooms/create.jsx",
                              lineNumber: 190,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/rooms/create.jsx",
                            lineNumber: 189,
                            columnNumber: 23
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/rooms/create.jsx",
                          lineNumber: 183,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/rooms/create.jsx",
                        lineNumber: 182,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/rooms/create.jsx",
                    lineNumber: 149,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mt-6 block",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "space-y-6 bg-white py-6",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "grid grid-cols-6 gap-6",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "room-name",
                                className: "block text-sm font-medium text-gray-700",
                                children: [
                                  "Name",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/rooms/create.jsx",
                                    lineNumber: 216,
                                    columnNumber: 31
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/rooms/create.jsx",
                                lineNumber: 212,
                                columnNumber: 25
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "text",
                                name: "room-name",
                                id: "user-name",
                                placeholder: "Room Name",
                                required: true,
                                ref: roomRef,
                                value: room,
                                onChange: (e) => setRoom(e.target.value),
                                autoComplete: "given-name",
                                className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                              }, void 0, false, {
                                fileName: "app/routes/rooms/create.jsx",
                                lineNumber: 218,
                                columnNumber: 25
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/rooms/create.jsx",
                            lineNumber: 211,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "direction-name",
                                className: "block text-sm font-medium text-gray-700",
                                children: [
                                  "Screen A Direction",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/rooms/create.jsx",
                                    lineNumber: 237,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/rooms/create.jsx",
                                lineNumber: 232,
                                columnNumber: 25
                              }, this),
                              RepeatSelection(false)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/rooms/create.jsx",
                            lineNumber: 231,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "direction-name",
                                className: "block text-sm font-medium text-gray-700",
                                children: [
                                  "Screen B Direction",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/rooms/create.jsx",
                                    lineNumber: 247,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/rooms/create.jsx",
                                lineNumber: 242,
                                columnNumber: 25
                              }, this),
                              RepeatSelection(true)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/rooms/create.jsx",
                            lineNumber: 241,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/rooms/create.jsx",
                        lineNumber: 210,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/create.jsx",
                      lineNumber: 209,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/rooms/create.jsx",
                    lineNumber: 208,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/rooms/create.jsx",
                lineNumber: 148,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/rooms/create.jsx",
              lineNumber: 147,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/rooms/create.jsx",
            lineNumber: 146,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/rooms/create.jsx",
          lineNumber: 145,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/rooms/create.jsx",
        lineNumber: 144,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/rooms/create.jsx",
        lineNumber: 259,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/rooms/create.jsx",
    lineNumber: 138,
    columnNumber: 5
  }, this);
}
export {
  RoomsCreate as default,
  meta
};
//# sourceMappingURL=/build/routes/rooms/create-XGGTRTNO.js.map
