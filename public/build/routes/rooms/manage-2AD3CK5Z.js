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
  Link,
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

// app/routes/rooms/manage.jsx
var import_react = __toESM(require_react());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Manage Rooms" };
}
function RoomsManage() {
  var _a;
  const limitTable = 10;
  const paginationCount = 20;
  var pagesCount = [];
  const { data, currentPage, pagination, location_id } = useLoaderData();
  const [selected, setSelected] = import_react.default.useState([]);
  const [allselect, setAllSelect] = import_react.default.useState(false);
  const [modalIsOpen, setIsOpen] = import_react.default.useState(false);
  const navigate = useNavigate();
  const numPages = (pagination == null ? void 0 : pagination.total_count) % paginationCount === 0 ? (pagination == null ? void 0 : pagination.total_count) % paginationCount == 0 ? Math.floor((pagination == null ? void 0 : pagination.total_count) / paginationCount) : (pagination == null ? void 0 : pagination.total_count) % paginationCount : Math.floor((pagination == null ? void 0 : pagination.total_count) / paginationCount) + 1;
  for (let i = 1; i <= numPages; i++) {
    pagesCount.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: `/rooms/manage?page=${i}`,
        "aria-current": "page",
        className: `relative rounded-md w-8 h-8 flex justify-center items-center font-semibold text-sm text-gray-500 focus:z-20 ${i === parseInt(currentPage) ? " bg-gray-200" : "hover:bg-gray-100"}`,
        children: i
      }, i, false, {
        fileName: "app/routes/rooms/manage.jsx",
        lineNumber: 62,
        columnNumber: 7
      }, this)
    );
  }
  let RoomDetailsLeft = [];
  let RoomDetailsRight = [];
  const selectHandle = (props) => {
    return selected.includes(props) ? setSelected(selected.filter((word) => word !== props)) : setSelected([...selected, props]);
  };
  const markall = () => {
    setAllSelect(!allselect);
    !allselect ? setSelected(data == null ? void 0 : data.map((e) => e == null ? void 0 : e.id)) : setSelected([]);
  };
  const handleNavigation = (e) => {
    setSelected([]);
    navigate(`/rooms/manage?page=${parseInt(currentPage) + e}`);
    return setAllSelect(false);
  };
  const deleteHandle = async () => {
    const directus = directusLoaderLink;
    if ((selected == null ? void 0 : selected.length) === 1) {
      await directus.items("Rooms").deleteOne(selected[0]).then((res) => {
        navigate(".", { replace: true });
        setSelected([]);
        Q.success("Deleted successfully");
        window.location.reload();
      }).catch((err) => {
        console.log(err);
        navigate(".", { replace: true });
        Q.error("Something went wrong");
      });
    } else {
      await directus.items("Rooms").deleteMany(selected).then((res) => {
        Q.success("Deleted successfully");
        navigate(".", { replace: true });
        setSelected([]);
        window.location.reload();
      }).catch((err) => {
        console.log(err);
        Q.error("Something went wrong");
        navigate(".", { replace: true });
      });
    }
  };
  data == null ? void 0 : data.map((e, i) => {
    var _a2, _b, _c, _d, _e, _f, _g, _h;
    if (i < limitTable) {
      RoomDetailsLeft.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
          className: !selected.includes(e == null ? void 0 : e.id) === true ? "bg-gray-50" : "bg-transparent hover:bg-gray-50",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
              className: " relative w-12 px-6 sm:w-16 sm:px-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "checkbox",
                title: "single-record",
                value: e == null ? void 0 : e.name,
                onChange: (e2) => {
                },
                checked: !selected.includes(e == null ? void 0 : e.id) === true ? false : true,
                onClick: () => selectHandle(e == null ? void 0 : e.id),
                className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary sm:left-6"
              }, void 0, false, {
                fileName: "app/routes/rooms/manage.jsx",
                lineNumber: 141,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 140,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
              className: `cursor-pointer py-4 pr-3 text-sm font-medium ${!selected.includes(e == null ? void 0 : e.id) === true ? "text-gray-900" : "text-primary"} `,
              onClick: () => navigate(`/rooms/edit?id=${e == null ? void 0 : e.id}`),
              children: e.name
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 151,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
              className: `cursor-pointer py-4 px-2 text-center text-sm font-medium ${!selected.includes(e == null ? void 0 : e.id) === true ? "text-gray-900" : "text-primary"} `,
              onClick: () => navigate(`/rooms/edit?id=${e == null ? void 0 : e.id}`),
              children: (e == null ? void 0 : e.screen_a) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: `ri-arrow-${(_b = (_a2 = e == null ? void 0 : e.screen_a) == null ? void 0 : _a2.trim()) == null ? void 0 : _b.toLowerCase()}-line`
              }, void 0, false, {
                fileName: "app/routes/rooms/manage.jsx",
                lineNumber: 170,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 161,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
              className: `cursor-pointer py-4 px-2 text-center text-sm font-medium ${!selected.includes(e == null ? void 0 : e.id) === true ? "text-gray-900" : "text-primary"} `,
              onClick: () => navigate(`/rooms/edit?id=${e == null ? void 0 : e.id}`),
              children: (e == null ? void 0 : e.screen_b) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: `ri-arrow-${(_d = (_c = e == null ? void 0 : e.screen_b) == null ? void 0 : _c.trim()) == null ? void 0 : _d.toLowerCase()}-line`
              }, void 0, false, {
                fileName: "app/routes/rooms/manage.jsx",
                lineNumber: 186,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 177,
              columnNumber: 11
            }, this)
          ]
        }, e == null ? void 0 : e.id, true, {
          fileName: "app/routes/rooms/manage.jsx",
          lineNumber: 132,
          columnNumber: 9
        }, this)
      );
    } else
      RoomDetailsRight.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
          className: !selected.includes(e.id) === true ? "bg-gray-50" : "bg-transparent hover:bg-gray-50",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
              className: " relative w-12 px-6 sm:w-16 sm:px-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "checkbox",
                title: "single-record",
                value: e == null ? void 0 : e.name,
                onChange: (e2) => {
                },
                checked: !selected.includes(e == null ? void 0 : e.id) === true ? false : true,
                onClick: () => selectHandle(e == null ? void 0 : e.id),
                className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary sm:left-6"
              }, void 0, false, {
                fileName: "app/routes/rooms/manage.jsx",
                lineNumber: 206,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 205,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
              className: `py-4 pr-3 text-sm font-medium ${!selected.includes(e == null ? void 0 : e.id) === true ? "text-gray-900" : "text-primary"} `,
              onClick: () => navigate(`/rooms/edit?id=${e == null ? void 0 : e.id}`),
              children: e.name
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 216,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
              className: `py-4 pr-3 text-sm font-medium ${!selected.includes(e == null ? void 0 : e.id) === true ? "text-gray-900" : "text-primary"} `,
              onClick: () => navigate(`/rooms/edit?id=${e == null ? void 0 : e.id}`),
              children: (e == null ? void 0 : e.screen_a) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: `ri-arrow-${(_f = (_e = e == null ? void 0 : e.screen_a) == null ? void 0 : _e.trim()) == null ? void 0 : _f.toLowerCase()}-line`
              }, void 0, false, {
                fileName: "app/routes/rooms/manage.jsx",
                lineNumber: 235,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 226,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
              className: `py-4 pr-3 text-sm font-medium ${!selected.includes(e == null ? void 0 : e.id) === true ? "text-gray-900" : "text-primary"} `,
              onClick: () => navigate(`/rooms/edit?id=${e == null ? void 0 : e.id}`),
              children: (e == null ? void 0 : e.screen_b) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: `ri-arrow-${(_h = (_g = e == null ? void 0 : e.screen_b) == null ? void 0 : _g.trim()) == null ? void 0 : _h.toLowerCase()}-line`
              }, void 0, false, {
                fileName: "app/routes/rooms/manage.jsx",
                lineNumber: 251,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 242,
              columnNumber: 11
            }, this)
          ]
        }, e.id, true, {
          fileName: "app/routes/rooms/manage.jsx",
          lineNumber: 197,
          columnNumber: 9
        }, this)
      );
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page-content",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        logout: true,
        title: true,
        noLeftLogo: ((_a = ISS_DENMARK_HQ) == null ? void 0 : _a.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/rooms/manage.jsx",
        lineNumber: 264,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page__wrap py-5 max-w-[1440px] px-4 mx-auto ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-between items-center gap-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-start items-center gap-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "cursor-pointer text-xl",
                      onClick: () => navigate("/"),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            className: "ri-home-4-line"
                          }, void 0, false, {
                            fileName: "app/routes/rooms/manage.jsx",
                            lineNumber: 278,
                            columnNumber: 19
                          }, this),
                          " /"
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 277,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/manage.jsx",
                      lineNumber: 273,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                        className: "text-xl font-semibold text-primary",
                        children: "Rooms"
                      }, void 0, false, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 282,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/manage.jsx",
                      lineNumber: 281,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/rooms/manage.jsx",
                  lineNumber: 272,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between items-center gap-5",
                  children: [
                    (selected == null ? void 0 : selected.length) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        children: [
                          "Selected ",
                          selected.length
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 288,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/manage.jsx",
                      lineNumber: 287,
                      columnNumber: 17
                    }, this) : null,
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      type: "button",
                      title: "Delete Room",
                      onClick: (e) => allselect || (selected == null ? void 0 : selected.length) ? setIsOpen(true) : null,
                      className: `w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-full border border-transparent
                                ${allselect || (selected == null ? void 0 : selected.length) ? "bg-red-600  hover:bg-red-700  focus:ring-red-600" : "bg-gray-400 cursor-default"} focus:outline-none focus:ring-2 text-sm font-medium text-white shadow-sm
                                 focus:ring-offset-2 sm:w-auto`,
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
                              fileName: "app/routes/rooms/manage.jsx",
                              lineNumber: 317,
                              columnNumber: 21
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                              d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                            }, void 0, false, {
                              fileName: "app/routes/rooms/manage.jsx",
                              lineNumber: 318,
                              columnNumber: 21
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/rooms/manage.jsx",
                          lineNumber: 307,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 306,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/manage.jsx",
                      lineNumber: 292,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/rooms/create",
                      title: "Add New Room",
                      className: "w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-full border border-transparent bg-primary text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          fill: "none",
                          viewBox: "0 0 24 24",
                          strokeWidth: "2",
                          stroke: "currentColor",
                          className: "w-6 h-6",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M12 4.5v15m7.5-7.5h-15"
                          }, void 0, false, {
                            fileName: "app/routes/rooms/manage.jsx",
                            lineNumber: 336,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/rooms/manage.jsx",
                          lineNumber: 328,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 327,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/manage.jsx",
                      lineNumber: 322,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/rooms/manage.jsx",
                  lineNumber: 285,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 271,
              columnNumber: 11
            }, this),
            !!RoomDetailsLeft && (RoomDetailsLeft == null ? void 0 : RoomDetailsLeft.length) <= 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-center items-center self-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "text-center bg-slate-200 p-2 rounded-md ",
                children: "No data found"
              }, void 0, false, {
                fileName: "app/routes/rooms/manage.jsx",
                lineNumber: 348,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 347,
              columnNumber: 13
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 flex flex-col",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "grid grid-cols-12 gap-5 overflow-x-auto xl:gap-24",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-12 md:col-span-6",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "inline-block min-w-full align-middle",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "relative border rounded-md border-gray-200 overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                            className: "min-w-full divide-y  divide-gray-300",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                                className: "bg-gray-50",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                      scope: "col",
                                      className: "relative w-12 px-6 sm:w-16 sm:px-8",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                        type: "checkbox",
                                        title: "select-all-record",
                                        onClick: () => markall(),
                                        onChange: (e) => {
                                        },
                                        checked: allselect ? true : false,
                                        className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary sm:left-6"
                                      }, void 0, false, {
                                        fileName: "app/routes/rooms/manage.jsx",
                                        lineNumber: 366,
                                        columnNumber: 31
                                      }, this)
                                    }, void 0, false, {
                                      fileName: "app/routes/rooms/manage.jsx",
                                      lineNumber: 362,
                                      columnNumber: 29
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                      scope: "col",
                                      className: "py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 xl:min-w-[12rem]",
                                      children: "Room Name"
                                    }, void 0, false, {
                                      fileName: "app/routes/rooms/manage.jsx",
                                      lineNumber: 375,
                                      columnNumber: 29
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                      scope: "col",
                                      className: "py-3.5 px-2 text-center text-sm font-semibold text-gray-900 xl:min-w-[12rem]",
                                      children: "Screen A Directions"
                                    }, void 0, false, {
                                      fileName: "app/routes/rooms/manage.jsx",
                                      lineNumber: 381,
                                      columnNumber: 29
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                      scope: "col",
                                      className: "py-3.5 px-2 text-center text-sm font-semibold text-gray-900 xl:min-w-[12rem]",
                                      children: "Screen B Directions"
                                    }, void 0, false, {
                                      fileName: "app/routes/rooms/manage.jsx",
                                      lineNumber: 387,
                                      columnNumber: 29
                                    }, this)
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/rooms/manage.jsx",
                                  lineNumber: 361,
                                  columnNumber: 27
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/rooms/manage.jsx",
                                lineNumber: 360,
                                columnNumber: 25
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                                className: "divide-y divide-gray-200 bg-white",
                                children: RoomDetailsLeft
                              }, void 0, false, {
                                fileName: "app/routes/rooms/manage.jsx",
                                lineNumber: 395,
                                columnNumber: 25
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/rooms/manage.jsx",
                            lineNumber: 359,
                            columnNumber: 23
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/rooms/manage.jsx",
                          lineNumber: 358,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 357,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/manage.jsx",
                      lineNumber: 356,
                      columnNumber: 17
                    }, this),
                    (data == null ? void 0 : data.length) > limitTable ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "col-span-12 md:col-span-6",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "inline-block min-w-full align-middle",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "relative border rounded-md border-gray-200 overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 md:rounded-lg",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                            className: "min-w-full divide-y  divide-gray-300",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                                className: "bg-gray-50",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                      scope: "col",
                                      className: "relative w-12 px-6 sm:w-16 sm:px-8",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                        type: "checkbox",
                                        title: "select-all-record",
                                        onClick: () => markall(),
                                        onChange: (e) => {
                                        },
                                        checked: allselect ? true : false,
                                        className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary sm:left-6"
                                      }, void 0, false, {
                                        fileName: "app/routes/rooms/manage.jsx",
                                        lineNumber: 415,
                                        columnNumber: 33
                                      }, this)
                                    }, void 0, false, {
                                      fileName: "app/routes/rooms/manage.jsx",
                                      lineNumber: 411,
                                      columnNumber: 31
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                      scope: "col",
                                      className: "py-3.5 px-2 text-left text-sm font-semibold text-gray-900 xl:min-w-[12rem]",
                                      children: "Room Name"
                                    }, void 0, false, {
                                      fileName: "app/routes/rooms/manage.jsx",
                                      lineNumber: 424,
                                      columnNumber: 31
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                      scope: "col",
                                      className: "py-3.5 px-2 text-left text-sm font-semibold text-gray-900 xl:min-w-[12rem]",
                                      children: "Screen A Directions"
                                    }, void 0, false, {
                                      fileName: "app/routes/rooms/manage.jsx",
                                      lineNumber: 430,
                                      columnNumber: 31
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                      scope: "col",
                                      className: "py-3.5 px-2 text-left text-sm font-semibold text-gray-900 xl:min-w-[12rem]",
                                      children: "Screen B Directions"
                                    }, void 0, false, {
                                      fileName: "app/routes/rooms/manage.jsx",
                                      lineNumber: 436,
                                      columnNumber: 31
                                    }, this)
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/rooms/manage.jsx",
                                  lineNumber: 410,
                                  columnNumber: 29
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/rooms/manage.jsx",
                                lineNumber: 409,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                                className: "divide-y divide-gray-200 bg-white",
                                children: RoomDetailsRight
                              }, void 0, false, {
                                fileName: "app/routes/rooms/manage.jsx",
                                lineNumber: 444,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/rooms/manage.jsx",
                            lineNumber: 408,
                            columnNumber: 25
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/rooms/manage.jsx",
                          lineNumber: 407,
                          columnNumber: 23
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 406,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/rooms/manage.jsx",
                      lineNumber: 405,
                      columnNumber: 19
                    }, this) : null
                  ]
                }, void 0, true, {
                  fileName: "app/routes/rooms/manage.jsx",
                  lineNumber: 354,
                  columnNumber: 15
                }, this),
                numPages > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-8 mx-auto ",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
                    className: "isolate inline-flex space-x-1 rounded-md",
                    "aria-label": "Pagination",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        onClick: data && !data.length && currentPage <= 1 ? null : () => handleNavigation(-1),
                        disabled: currentPage <= 1,
                        "data-nav-operation": "previous",
                        className: "relative rounded-md  bg-gray-50 w-8 h-8 flex justify-center items-center font-semibold text-sm text-gray-400 hover:bg-gray-100 focus:z-20",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "sr-only",
                            children: "Previous"
                          }, void 0, false, {
                            fileName: "app/routes/rooms/manage.jsx",
                            lineNumber: 470,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                            className: "h-5 w-5",
                            strokeWidth: "2",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                              fillRule: "evenodd",
                              d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z",
                              clipRule: "evenodd"
                            }, void 0, false, {
                              fileName: "app/routes/rooms/manage.jsx",
                              lineNumber: 479,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/rooms/manage.jsx",
                            lineNumber: 471,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 460,
                        columnNumber: 21
                      }, this),
                      pagesCount,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        onClick: data && currentPage > numPages - 1 ? null : () => handleNavigation(1),
                        disabled: data && !data.length && currentPage > numPages - 1,
                        "data-nav-operation": "next",
                        className: "relative rounded-r-md bg-gray-50 rounded-md w-8 h-8 flex justify-center items-center font-semibold text-sm text-gray-500 hover:bg-gray-100 focus:z-20",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "sr-only",
                            children: "Next"
                          }, void 0, false, {
                            fileName: "app/routes/rooms/manage.jsx",
                            lineNumber: 499,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                            className: "h-5 w-5",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 20 20",
                            strokeWidth: "2",
                            fill: "currentColor",
                            "aria-hidden": "true",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                              fillRule: "evenodd",
                              d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
                              clipRule: "evenodd"
                            }, void 0, false, {
                              fileName: "app/routes/rooms/manage.jsx",
                              lineNumber: 508,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/rooms/manage.jsx",
                            lineNumber: 500,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/rooms/manage.jsx",
                        lineNumber: 487,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/rooms/manage.jsx",
                    lineNumber: 456,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/rooms/manage.jsx",
                  lineNumber: 455,
                  columnNumber: 17
                }, this) : null
              ]
            }, void 0, true, {
              fileName: "app/routes/rooms/manage.jsx",
              lineNumber: 353,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/rooms/manage.jsx",
          lineNumber: 270,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/rooms/manage.jsx",
        lineNumber: 269,
        columnNumber: 7
      }, this),
      modalIsOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteModel, {
        open: setIsOpen,
        deleteHandle,
        note: true
      }, void 0, false, {
        fileName: "app/routes/rooms/manage.jsx",
        lineNumber: 523,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/rooms/manage.jsx",
        lineNumber: 525,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/rooms/manage.jsx",
    lineNumber: 263,
    columnNumber: 5
  }, this);
}
export {
  RoomsManage as default,
  meta
};
//# sourceMappingURL=/build/routes/rooms/manage-2AD3CK5Z.js.map
