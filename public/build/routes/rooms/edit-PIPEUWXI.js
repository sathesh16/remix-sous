import {
  useHydrated
} from "/build/_shared/chunk-KATHKNLH.js";
import {
  import_react_select_cjs_default
} from "/build/_shared/chunk-MOIBM2EW.js";
import {
  DeleteModel
} from "/build/_shared/chunk-C4IBOHCH.js";
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

// app/routes/rooms/edit.jsx
var import_react = __toESM(require_react());
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Edit Rooms" };
}
function RoomsEdit() {
  var _a, _b, _c;
  const { data, uId, location_id } = useLoaderData();
  const [modalIsOpen, setIsOpen] = (0, import_react.useState)(false);
  const [nameData, setNameData] = (0, import_react.useState)((_a = data[0]) == null ? void 0 : _a.name);
  const [preventDouble, setPreventDouble] = (0, import_react.useState)(false);
  const navigate = useNavigate();
  const isHydrated = useHydrated();
  const directionData = [
    { name: "North", id: 1, direction: "Up" },
    { name: "South", id: 2, direction: "Down" },
    { name: "West", id: 3, direction: "Left" },
    { name: "East", id: 4, direction: "Right" }
  ];
  const [screenA, setScreenA] = (0, import_react.useState)(
    directionData == null ? void 0 : directionData.find((e) => {
      var _a2;
      return (e == null ? void 0 : e.direction) == ((_a2 = data[0]) == null ? void 0 : _a2.screen_a);
    })
  );
  const [screenB, setScreenB] = (0, import_react.useState)(
    directionData == null ? void 0 : directionData.find((e) => {
      var _a2;
      return (e == null ? void 0 : e.direction) == ((_a2 = data[0]) == null ? void 0 : _a2.screen_b);
    })
  );
  const updateHandle = async (e) => {
    var _a2, _b2, _c2;
    if (((_a2 = nameData == null ? void 0 : nameData.trim()) == null ? void 0 : _a2.length) > 0) {
      if (screenA) {
        if (screenB) {
          setPreventDouble(true);
          const directus = directusLoaderLink;
          await directus.items("Rooms").updateOne(uId, {
            name: nameData !== ((_b2 = data[0]) == null ? void 0 : _b2.name) ? nameData : (_c2 = data[0]) == null ? void 0 : _c2.name,
            screen_a: screenA == null ? void 0 : screenA.direction,
            screen_b: screenB == null ? void 0 : screenB.direction
          }).then((res) => {
            navigate("/rooms/manage");
            Q.success("Updated successfully");
          }).catch((err) => {
            navigate(".", { replace: true });
            console.log(err);
            Q.error("Something went wrong");
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
  const deleteHandle = async () => {
    const directus = directusLoaderLink;
    await directus.items("Rooms").deleteOne(uId).then((res) => {
      navigate("/rooms/manage");
      Q.success("Deleted successfully");
    }).catch((err) => {
      navigate(".", { replace: true });
      console.log(err);
      Q.error("Something went wrong");
    });
  };
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
        className: "screen-direction react-select-container mt-1 block w-full rounded-md border border-gray-300 py-2 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm",
        maxMenuHeight: 250,
        onChange: (e) => onChangeHandle(e),
        isSearchable: false,
        components: { IndicatorSeparator: () => null },
        value: prop === false ? screenA : screenB,
        options: directionData,
        getOptionLabel: (option) => {
          var _a2, _b2;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
            className: `px-3 ri-arrow-${(_b2 = (_a2 = option == null ? void 0 : option.direction) == null ? void 0 : _a2.trim()) == null ? void 0 : _b2.toLowerCase()}-line`
          }, void 0, false, {
            fileName: "app/routes/rooms/edit.jsx",
            lineNumber: 134,
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
        fileName: "app/routes/rooms/edit.jsx",
        lineNumber: 122,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: "app/routes/rooms/edit.jsx",
      lineNumber: 120,
      columnNumber: 7
    }, this);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page-content",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: true,
        noLeftLogo: ((_b = ISS_DENMARK_HQ) == null ? void 0 : _b.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/rooms/edit.jsx",
        lineNumber: 155,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page__wrap w-full flex justify-center items-center mh-145",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "border p-6 rounded-md border-gray-300 form-area e-allergens",
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
                                  fileName: "app/routes/rooms/edit.jsx",
                                  lineNumber: 182,
                                  columnNumber: 27
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/rooms/edit.jsx",
                                lineNumber: 174,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/rooms/edit.jsx",
                              lineNumber: 173,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/rooms/edit.jsx",
                            lineNumber: 167,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/rooms/edit.jsx",
                          lineNumber: 166,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                            className: "text-xl font-semibold text-primary",
                            children: (_c = data[0]) == null ? void 0 : _c.name
                          }, void 0, false, {
                            fileName: "app/routes/rooms/edit.jsx",
                            lineNumber: 192,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/rooms/edit.jsx",
                          lineNumber: 191,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/rooms/edit.jsx",
                      lineNumber: 165,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-between items-center gap-5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          type: "button",
                          title: "Delete Rooms",
                          onClick: (e) => setIsOpen(true),
                          className: "w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-full border border-transparent bg-red-600 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 sm:w-auto",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className: "feather feather-trash w-5 h-5",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", {
                                  points: "3 6 5 6 21 6"
                                }, void 0, false, {
                                  fileName: "app/routes/rooms/edit.jsx",
                                  lineNumber: 215,
                                  columnNumber: 25
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                }, void 0, false, {
                                  fileName: "app/routes/rooms/edit.jsx",
                                  lineNumber: 216,
                                  columnNumber: 25
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/rooms/edit.jsx",
                              lineNumber: 205,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/rooms/edit.jsx",
                            lineNumber: 204,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/rooms/edit.jsx",
                          lineNumber: 198,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          title: "Update Rooms",
                          onClick: (e) => preventDouble ? null : updateHandle(e),
                          disabled: preventDouble,
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
                                fileName: "app/routes/rooms/edit.jsx",
                                lineNumber: 235,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/rooms/edit.jsx",
                              lineNumber: 227,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/rooms/edit.jsx",
                            lineNumber: 226,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/rooms/edit.jsx",
                          lineNumber: 220,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/rooms/edit.jsx",
                      lineNumber: 197,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/rooms/edit.jsx",
                  lineNumber: 164,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 block max-w-[580px]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
                    action: "#",
                    method: "POST",
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
                                  "Room Name",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/rooms/edit.jsx",
                                    lineNumber: 255,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/rooms/edit.jsx",
                                lineNumber: 250,
                                columnNumber: 25
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "text",
                                name: "room-name",
                                id: "room-name",
                                placeholder: "Room Name",
                                required: true,
                                value: nameData,
                                onChange: (e) => setNameData(e.target.value),
                                autoComplete: "given-name",
                                className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                              }, void 0, false, {
                                fileName: "app/routes/rooms/edit.jsx",
                                lineNumber: 257,
                                columnNumber: 25
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/rooms/edit.jsx",
                            lineNumber: 249,
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
                                    fileName: "app/routes/rooms/edit.jsx",
                                    lineNumber: 275,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/rooms/edit.jsx",
                                lineNumber: 270,
                                columnNumber: 25
                              }, this),
                              RepeatSelection(false)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/rooms/edit.jsx",
                            lineNumber: 269,
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
                                    fileName: "app/routes/rooms/edit.jsx",
                                    lineNumber: 285,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/rooms/edit.jsx",
                                lineNumber: 280,
                                columnNumber: 25
                              }, this),
                              RepeatSelection(true)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/rooms/edit.jsx",
                            lineNumber: 279,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/rooms/edit.jsx",
                        lineNumber: 248,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/edit.jsx",
                      lineNumber: 247,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/rooms/edit.jsx",
                    lineNumber: 246,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/rooms/edit.jsx",
                  lineNumber: 245,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/rooms/edit.jsx",
              lineNumber: 163,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/rooms/edit.jsx",
            lineNumber: 162,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/rooms/edit.jsx",
          lineNumber: 161,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/rooms/edit.jsx",
        lineNumber: 160,
        columnNumber: 7
      }, this),
      modalIsOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteModel, {
        open: setIsOpen,
        deleteHandle,
        note: true
      }, void 0, false, {
        fileName: "app/routes/rooms/edit.jsx",
        lineNumber: 298,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/rooms/edit.jsx",
        lineNumber: 300,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/rooms/edit.jsx",
    lineNumber: 154,
    columnNumber: 5
  }, this);
}
export {
  RoomsEdit as default,
  meta
};
//# sourceMappingURL=/build/routes/rooms/edit-PIPEUWXI.js.map
