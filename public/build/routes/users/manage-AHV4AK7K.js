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

// app/routes/users/manage.jsx
var import_react = __toESM(require_react());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Manage Users" };
}
function usersListPage() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const { data, currentPage, pagination, adminCount, response, location_id } = useLoaderData();
  const [selected, setSelected] = import_react.default.useState([]);
  const [allselect, setAllSelect] = import_react.default.useState(false);
  const [modalIsOpen, setIsOpen] = import_react.default.useState(false);
  const navigate = useNavigate();
  const limitTable = 10;
  const paginationCount = 10;
  const selectHandle = (props) => {
    return selected.includes(props) ? setSelected(selected.filter((word) => word !== props)) : setSelected([...selected, props]);
  };
  let usersListDetailsLeft = [];
  for (let i2 = 0; i2 < (data == null ? void 0 : data.length); i2++) {
    var locations = (_b = (_a = data[i2]) == null ? void 0 : _a.allowed_locations) == null ? void 0 : _b.map((e, index) => {
      var _a2, _b2, _c2;
      return index === ((_a2 = data[i2]) == null ? void 0 : _a2.allowed_locations.length) - 1 ? (_b2 = e == null ? void 0 : e.Locations_id) == null ? void 0 : _b2.name : ((_c2 = e == null ? void 0 : e.Locations_id) == null ? void 0 : _c2.name) + ",";
    });
    usersListDetailsLeft.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
        className: !selected.includes((_c = data[i2]) == null ? void 0 : _c.id) === true ? "cursor-pointer bg-gray-50" : "cursor-pointer bg-transparent hover:bg-gray-50",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
            className: " relative w-12 px-6 sm:w-16 sm:px-8",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
              type: "checkbox",
              title: "single-record",
              value: (_d = data[i2]) == null ? void 0 : _d.id,
              checked: !selected.includes((_e = data[i2]) == null ? void 0 : _e.id) === true ? false : true,
              onClick: () => {
                var _a2;
                return selectHandle((_a2 = data[i2]) == null ? void 0 : _a2.id);
              },
              onChange: (e) => {
              },
              name: "chk",
              className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary sm:left-6"
            }, void 0, false, {
              fileName: "app/routes/users/manage.jsx",
              lineNumber: 84,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/users/manage.jsx",
            lineNumber: 83,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
            className: `py-4 pr-3 text-sm font-medium ${!selected.includes((_f = data[i2]) == null ? void 0 : _f.id) === true ? "text-gray-900" : "text-primary"} `,
            onClick: () => {
              var _a2;
              return navigate(`/users/edit?id=${(_a2 = data[i2]) == null ? void 0 : _a2.id}`);
            },
            children: (_g = data[i2]) == null ? void 0 : _g.first_name
          }, void 0, false, {
            fileName: "app/routes/users/manage.jsx",
            lineNumber: 95,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
            className: `py-4 pr-3 text-sm font-medium ${!selected.includes((_h = data[i2]) == null ? void 0 : _h.id) === true ? "text-gray-500" : "text-primary"} `,
            onClick: () => {
              var _a2;
              return navigate(`/users/edit?id=${(_a2 = data[i2]) == null ? void 0 : _a2.id}`);
            },
            children: (_i = data[i2]) == null ? void 0 : _i.email
          }, void 0, false, {
            fileName: "app/routes/users/manage.jsx",
            lineNumber: 105,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
            className: `py-4 pr-3 text-sm font-medium ${!selected.includes((_j = data[i2]) == null ? void 0 : _j.id) === true ? "text-gray-500" : "text-primary"} `,
            onClick: () => {
              var _a2;
              return navigate(`/users/edit?id=${(_a2 = data[i2]) == null ? void 0 : _a2.id}`);
            },
            children: locations.length > 0 ? locations : null
          }, void 0, false, {
            fileName: "app/routes/users/manage.jsx",
            lineNumber: 115,
            columnNumber: 9
          }, this)
        ]
      }, i2, true, {
        fileName: "app/routes/users/manage.jsx",
        lineNumber: 75,
        columnNumber: 7
      }, this)
    );
  }
  const handleNavigation = (e) => {
    setSelected([]);
    navigate(`/users/manage?page=${parseInt(currentPage) + e}`);
    return setAllSelect(false);
  };
  const markall = () => {
    setAllSelect(!allselect);
    !allselect ? setSelected(data == null ? void 0 : data.map((e) => e == null ? void 0 : e.id)) : setSelected([]);
  };
  const deleteHandle = async () => {
    const directus = directusLoaderLink;
    if ((selected == null ? void 0 : selected.length) === 1) {
      await directus.users.deleteOne(selected[0]).then((res) => {
        setSelected([]);
        navigate(".", { replace: true });
        Q.success("Deleted successfully");
      }).catch((err) => {
        console.log(err);
        navigate(".", { replace: true });
        Q.error("Something went wrong");
      });
    } else {
      await directus.users.deleteMany(selected).then((res) => {
        setSelected([]);
        navigate(".", { replace: true });
        Q.success("Deleted successfully");
      }).catch((err) => {
        console.log(err);
        Q.error("Something went wrong");
      });
    }
  };
  const numPages = pagination % paginationCount === 0 ? pagination % paginationCount == 0 ? Math.floor(pagination / paginationCount) : pagination % paginationCount : Math.floor(pagination / paginationCount) + 1;
  var pagesCount = [];
  for (var i = 0; i < numPages; i++) {
    pagesCount.push(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        to: `/users/manage?page=${i + 1}`,
        "aria-current": "page",
        className: `relative rounded-md w-8 h-8 flex justify-center items-center font-semibold text-sm text-gray-500 focus:z-20 ${i + 1 === parseInt(currentPage) ? " bg-gray-200" : "hover:bg-gray-100"}`,
        children: i + 1
      }, i, false, {
        fileName: "app/routes/users/manage.jsx",
        lineNumber: 175,
        columnNumber: 7
      }, this)
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: true,
        noLeftLogo: ((_k = ISS_DENMARK_HQ) == null ? void 0 : _k.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/users/manage.jsx",
        lineNumber: 189,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page__wrap py-5 max-w-[1440px] px-4 mx-auto",
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
                            fileName: "app/routes/users/manage.jsx",
                            lineNumber: 203,
                            columnNumber: 19
                          }, this),
                          " /"
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/users/manage.jsx",
                        lineNumber: 202,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/users/manage.jsx",
                      lineNumber: 198,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                        className: "text-xl font-semibold text-primary",
                        children: "Users"
                      }, void 0, false, {
                        fileName: "app/routes/users/manage.jsx",
                        lineNumber: 207,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/users/manage.jsx",
                      lineNumber: 206,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/users/manage.jsx",
                  lineNumber: 197,
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
                        fileName: "app/routes/users/manage.jsx",
                        lineNumber: 213,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/users/manage.jsx",
                      lineNumber: 212,
                      columnNumber: 17
                    }, this) : null,
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      type: "button",
                      title: "Delete User",
                      onClick: (e) => allselect || (selected == null ? void 0 : selected.length) ? setIsOpen(true) : null,
                      className: `w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-full border border-transparent 
               ${allselect || (selected == null ? void 0 : selected.length) ? "bg-red-600  hover:bg-red-700  focus:ring-red-600" : "bg-gray-400 cursor-default"} focus:outline-none focus:ring-2 text-sm font-medium text-white shadow-sm 
                focus:ring-offset-2 sm:w-auto`,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
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
                                fileName: "app/routes/users/manage.jsx",
                                lineNumber: 241,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                              }, void 0, false, {
                                fileName: "app/routes/users/manage.jsx",
                                lineNumber: 242,
                                columnNumber: 21
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/users/manage.jsx",
                            lineNumber: 231,
                            columnNumber: 19
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/manage.jsx",
                          lineNumber: 230,
                          columnNumber: 17
                        }, this),
                        " "
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/users/manage.jsx",
                      lineNumber: 216,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/users/create",
                      title: "Add New User",
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
                            d: "M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                          }, void 0, false, {
                            fileName: "app/routes/users/manage.jsx",
                            lineNumber: 260,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/manage.jsx",
                          lineNumber: 252,
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/users/manage.jsx",
                        lineNumber: 251,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/users/manage.jsx",
                      lineNumber: 246,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/users/manage.jsx",
                  lineNumber: 210,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/users/manage.jsx",
              lineNumber: 196,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 flex flex-col",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "grid grid-cols-12 gap-5 overflow-x-auto xl:gap-24",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: `col-span-12 lg:col-span-12 `,
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
                                    onClick: () => markall(),
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                      type: "checkbox",
                                      title: "select-all-record",
                                      checked: allselect ? true : false,
                                      onChange: (e) => {
                                      },
                                      className: "absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary sm:left-6"
                                    }, void 0, false, {
                                      fileName: "app/routes/users/manage.jsx",
                                      lineNumber: 284,
                                      columnNumber: 29
                                    }, this)
                                  }, void 0, false, {
                                    fileName: "app/routes/users/manage.jsx",
                                    lineNumber: 279,
                                    columnNumber: 27
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                    scope: "col",
                                    className: "py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 xl:min-w-[12rem]",
                                    children: "Name"
                                  }, void 0, false, {
                                    fileName: "app/routes/users/manage.jsx",
                                    lineNumber: 292,
                                    columnNumber: 27
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                    scope: "col",
                                    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                    children: "Email Address"
                                  }, void 0, false, {
                                    fileName: "app/routes/users/manage.jsx",
                                    lineNumber: 298,
                                    columnNumber: 27
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                    scope: "col",
                                    className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                    children: "Location"
                                  }, void 0, false, {
                                    fileName: "app/routes/users/manage.jsx",
                                    lineNumber: 304,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/users/manage.jsx",
                                lineNumber: 278,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/users/manage.jsx",
                              lineNumber: 277,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                              className: "divide-y divide-gray-200 bg-white",
                              children: usersListDetailsLeft
                            }, void 0, false, {
                              fileName: "app/routes/users/manage.jsx",
                              lineNumber: 312,
                              columnNumber: 23
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/users/manage.jsx",
                          lineNumber: 276,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/users/manage.jsx",
                        lineNumber: 275,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/users/manage.jsx",
                      lineNumber: 274,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/users/manage.jsx",
                    lineNumber: 273,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/users/manage.jsx",
                  lineNumber: 271,
                  columnNumber: 13
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
                            fileName: "app/routes/users/manage.jsx",
                            lineNumber: 337,
                            columnNumber: 21
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
                              fileName: "app/routes/users/manage.jsx",
                              lineNumber: 346,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/users/manage.jsx",
                            lineNumber: 338,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/users/manage.jsx",
                        lineNumber: 327,
                        columnNumber: 19
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
                            fileName: "app/routes/users/manage.jsx",
                            lineNumber: 366,
                            columnNumber: 21
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
                              fileName: "app/routes/users/manage.jsx",
                              lineNumber: 375,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/users/manage.jsx",
                            lineNumber: 367,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/users/manage.jsx",
                        lineNumber: 354,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/users/manage.jsx",
                    lineNumber: 323,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/users/manage.jsx",
                  lineNumber: 322,
                  columnNumber: 15
                }, this) : null
              ]
            }, void 0, true, {
              fileName: "app/routes/users/manage.jsx",
              lineNumber: 270,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/users/manage.jsx",
          lineNumber: 195,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/users/manage.jsx",
        lineNumber: 194,
        columnNumber: 7
      }, this),
      modalIsOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteModel, {
        open: setIsOpen,
        deleteHandle
      }, void 0, false, {
        fileName: "app/routes/users/manage.jsx",
        lineNumber: 389,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/users/manage.jsx",
        lineNumber: 391,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/users/manage.jsx",
    lineNumber: 188,
    columnNumber: 5
  }, this);
}
export {
  usersListPage as default,
  meta
};
//# sourceMappingURL=/build/routes/users/manage-AHV4AK7K.js.map
