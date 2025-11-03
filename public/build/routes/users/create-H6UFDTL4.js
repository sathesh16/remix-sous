import {
  require_dist
} from "/build/_shared/chunk-PHEGSDT5.js";
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
  USER_ROLE,
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

// app/routes/users/create.jsx
var import_react2 = __toESM(require_react());
var import_db = __toESM(require_db());
var import_multiselect_react_dropdown = __toESM(require_dist());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Create Users" };
}
function manageUser() {
  var _a;
  const { data, location_id } = useLoaderData();
  const [isVisible, setVisible] = import_react2.default.useState(false);
  const [isConfirmVisible, setConfirmVisible] = import_react2.default.useState(false);
  const [emaildata, setEmaildata] = import_react2.default.useState();
  const [namedata, setNamedata] = import_react2.default.useState();
  const [password, setPassword] = import_react2.default.useState();
  const [selectedLocation, setSelectedLocation] = import_react2.default.useState();
  const [preventDouble, setPreventDouble] = import_react2.default.useState(false);
  const navigate = useNavigate();
  const createHandle = async (e) => {
    var _a2;
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emaildata)) {
      if (data == null ? void 0 : data.length) {
        setPreventDouble(true);
        const directus = directusLoaderLink;
        await directus.users.createOne({
          first_name: namedata,
          email: emaildata,
          password,
          allowed_locations: [{ Locations_id: (_a2 = data == null ? void 0 : data[0]) == null ? void 0 : _a2.id }],
          selected_locations: (data == null ? void 0 : data.length) > 0 ? data == null ? void 0 : data[0] : null,
          role: USER_ROLE,
          is_admin: false,
          password_copy: password
        }).then((res) => {
          navigate("/users/manage");
          Q.success("Created successfully");
        }).catch((err) => {
          console.log(err == null ? void 0 : err.message);
          navigate(".", { replace: true });
          Q.error(err == null ? void 0 : err.message);
        });
      } else {
        Q.error("Location field is required");
      }
    } else {
      Q.error("Please enter a vaild Email address");
    }
    setPreventDouble(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: true,
        noLeftLogo: ((_a = ISS_DENMARK_HQ) == null ? void 0 : _a.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/users/create.jsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page__wrap w-full flex justify-center items-center mh-145",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "border p-6 rounded-md border-gray-300 form-area",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
              className: "max-w-[400px] w-full px-5",
              onSubmit: (e) => createHandle(e),
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
                                  fileName: "app/routes/users/create.jsx",
                                  lineNumber: 112,
                                  columnNumber: 27
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/users/create.jsx",
                                lineNumber: 104,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/users/create.jsx",
                              lineNumber: 103,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/users/create.jsx",
                            lineNumber: 97,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/create.jsx",
                          lineNumber: 96,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                            className: "text-xl font-semibold text-primary",
                            children: "Create a new user"
                          }, void 0, false, {
                            fileName: "app/routes/users/create.jsx",
                            lineNumber: 122,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/create.jsx",
                          lineNumber: 121,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/users/create.jsx",
                      lineNumber: 95,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-between items-center gap-5",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        type: "submit",
                        title: "Save",
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
                              fileName: "app/routes/users/create.jsx",
                              lineNumber: 143,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/users/create.jsx",
                            lineNumber: 135,
                            columnNumber: 23
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/create.jsx",
                          lineNumber: 134,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/users/create.jsx",
                        lineNumber: 128,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/users/create.jsx",
                      lineNumber: 127,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/users/create.jsx",
                  lineNumber: 94,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 block",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "space-y-6 bg-white py-6",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "grid grid-cols-6 gap-6",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "user-name",
                                className: "block text-sm font-medium text-gray-700",
                                children: [
                                  "Name",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/users/create.jsx",
                                    lineNumber: 161,
                                    columnNumber: 29
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/users/create.jsx",
                                lineNumber: 157,
                                columnNumber: 23
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "text",
                                name: "user-name",
                                id: "user-name",
                                placeholder: "User Name",
                                required: true,
                                value: namedata || "",
                                onChange: (e) => setNamedata(e.target.value),
                                autoComplete: "given-name",
                                className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                              }, void 0, false, {
                                fileName: "app/routes/users/create.jsx",
                                lineNumber: 163,
                                columnNumber: 23
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/users/create.jsx",
                            lineNumber: 156,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "email-address",
                                className: "block text-sm font-medium text-gray-700",
                                children: [
                                  "Email address",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/users/create.jsx",
                                    lineNumber: 181,
                                    columnNumber: 25
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/users/create.jsx",
                                lineNumber: 176,
                                columnNumber: 23
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "email",
                                name: "email-address",
                                id: "email-address",
                                placeholder: "User Email",
                                required: true,
                                autoComplete: "email",
                                value: emaildata || "",
                                onChange: (e) => setEmaildata(e.target.value),
                                className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                              }, void 0, false, {
                                fileName: "app/routes/users/create.jsx",
                                lineNumber: 183,
                                columnNumber: 23
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/users/create.jsx",
                            lineNumber: 175,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6 relative",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "user-paaword",
                                className: "block text-sm font-medium text-gray-700",
                                children: [
                                  "Password",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/users/create.jsx",
                                    lineNumber: 201,
                                    columnNumber: 25
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/users/create.jsx",
                                lineNumber: 196,
                                columnNumber: 23
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: !isVisible ? "password" : "text",
                                name: "user-password",
                                id: "user-password",
                                placeholder: "User Password",
                                required: true,
                                value: password || "",
                                onChange: (e) => setPassword(e.target.value),
                                autoComplete: "new-password",
                                className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                              }, void 0, false, {
                                fileName: "app/routes/users/create.jsx",
                                lineNumber: 203,
                                columnNumber: 23
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                type: "button",
                                onClick: () => {
                                  setVisible(!isVisible);
                                },
                                title: !isVisible === true ? "Show Password" : "Hide Password",
                                className: "absolute z-20 right-5 bottom-[11px] cursor-pointer text-gray-300",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    id: "eye-off",
                                    className: isVisible === true ? "hidden" : "block",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: "feather feather-eye-off w-4 h-4 text-black",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                          d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                                        }, void 0, false, {
                                          fileName: "app/routes/users/create.jsx",
                                          lineNumber: 241,
                                          columnNumber: 29
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
                                          x1: "1",
                                          y1: "1",
                                          x2: "23",
                                          y2: "23"
                                        }, void 0, false, {
                                          fileName: "app/routes/users/create.jsx",
                                          lineNumber: 242,
                                          columnNumber: 29
                                        }, this)
                                      ]
                                    }, void 0, true, {
                                      fileName: "app/routes/users/create.jsx",
                                      lineNumber: 231,
                                      columnNumber: 27
                                    }, this)
                                  }, void 0, false, {
                                    fileName: "app/routes/users/create.jsx",
                                    lineNumber: 227,
                                    columnNumber: 25
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    id: "eye-on",
                                    className: isVisible === false ? "hidden" : "block",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      viewBox: "0 0 24 24",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      className: "feather feather-eye w-4 h-4 text-black",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                          d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                        }, void 0, false, {
                                          fileName: "app/routes/users/create.jsx",
                                          lineNumber: 259,
                                          columnNumber: 29
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
                                          cx: "12",
                                          cy: "12",
                                          r: "3"
                                        }, void 0, false, {
                                          fileName: "app/routes/users/create.jsx",
                                          lineNumber: 260,
                                          columnNumber: 29
                                        }, this)
                                      ]
                                    }, void 0, true, {
                                      fileName: "app/routes/users/create.jsx",
                                      lineNumber: 249,
                                      columnNumber: 27
                                    }, this)
                                  }, void 0, false, {
                                    fileName: "app/routes/users/create.jsx",
                                    lineNumber: 245,
                                    columnNumber: 25
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/users/create.jsx",
                                lineNumber: 215,
                                columnNumber: 23
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/users/create.jsx",
                            lineNumber: 195,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/users/create.jsx",
                        lineNumber: 155,
                        columnNumber: 19
                      }, this),
                      " "
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/users/create.jsx",
                    lineNumber: 154,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/users/create.jsx",
                  lineNumber: 153,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/users/create.jsx",
              lineNumber: 90,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/users/create.jsx",
            lineNumber: 89,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/users/create.jsx",
          lineNumber: 88,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/users/create.jsx",
        lineNumber: 87,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/users/create.jsx",
        lineNumber: 293,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/users/create.jsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
export {
  manageUser as default,
  meta
};
//# sourceMappingURL=/build/routes/users/create-H6UFDTL4.js.map
