import {
  require_dist
} from "/build/_shared/chunk-PHEGSDT5.js";
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

// app/routes/users/edit.jsx
var import_react = __toESM(require_react());
var import_db = __toESM(require_db());
var import_multiselect_react_dropdown = __toESM(require_dist());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Edit Users" };
}
function userUpdate() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const { data, uId, Locations, currentUser } = useLoaderData();
  const [emaildata, setEmaildata] = import_react.default.useState(
    ((_a = data[0]) == null ? void 0 : _a.email) ? (_b = data[0]) == null ? void 0 : _b.email : ""
  );
  const [namedata, setNamedata] = import_react.default.useState((_c = data[0]) == null ? void 0 : _c.first_name);
  const [isVisible, setVisible] = import_react.default.useState(false);
  const [password, setPassword] = import_react.default.useState("");
  const [preventDouble, setPreventDouble] = import_react.default.useState(false);
  const [modalIsOpen, setIsOpen] = import_react.default.useState(false);
  const preSelected = (_e = (_d = data[0]) == null ? void 0 : _d.allowed_locations) == null ? void 0 : _e.map((e) => {
    return e == null ? void 0 : e.Locations_id;
  });
  const [selectedLocation, setSelectedLocation] = import_react.default.useState(preSelected);
  const navigate = useNavigate();
  const updateHandle = async (e) => {
    var _a2, _b2, _c2, _d2, _e2;
    e.preventDefault();
    if (((_a2 = namedata == null ? void 0 : namedata.trim()) == null ? void 0 : _a2.length) > 0) {
      if (((_b2 = emaildata == null ? void 0 : emaildata.trim()) == null ? void 0 : _b2.length) > 0) {
        if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emaildata)) {
          setPreventDouble(true);
          const directus = directusLoaderLink;
          const bodyValues = ((_c2 = password == null ? void 0 : password.trim()) == null ? void 0 : _c2.length) ? {
            first_name: namedata,
            email: emaildata,
            password: password !== ((_d2 = data[0]) == null ? void 0 : _d2.password) ? password : (_e2 = data[0]) == null ? void 0 : _e2.password,
            password_copy: password,
            allowed_locations: selectedLocation ? selectedLocation.map((i) => ({ Locations_id: i == null ? void 0 : i.id })) : null,
            selected_locations: selectedLocation ? selectedLocation == null ? void 0 : selectedLocation[0] : null
          } : {
            first_name: namedata,
            email: emaildata,
            selected_locations: selectedLocation ? selectedLocation == null ? void 0 : selectedLocation[0] : null,
            allowed_locations: selectedLocation ? selectedLocation.map((i) => ({ Locations_id: i == null ? void 0 : i.id })) : null
          };
          (selectedLocation == null ? void 0 : selectedLocation.length) ? await directus.users.updateOne(uId, bodyValues).then((res) => {
            navigate("/users/manage");
            Q.success("Updated successfully");
          }).catch((err) => {
            console.log(err);
            navigate(".", { replace: true });
            Q.error("Something went wrong");
          }) : Q.error("Location is required");
        } else {
          Q.error("Please enter a vaild Email address");
        }
      } else {
        Q.error("Email is required");
      }
    } else {
      Q.error("Name is required");
    }
  };
  const deleteHandle = async () => {
    const directus = directusLoaderLink;
    await directus.users.deleteOne(uId).then((res) => {
      navigate("/users/manage");
      Q.success("Deleted successfully");
    }).catch((err) => {
      console.log(err);
      navigate(".", { replace: true });
      Q.error("Something went wrong");
    });
  };
  const onSelecthandle = (e) => {
    setSelectedLocation(e);
  };
  const onRemovehandle = (e) => {
    setSelectedLocation(e);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: true,
        noLeftLogo: ((_g = ISS_DENMARK_HQ) == null ? void 0 : _g.includes((_f = currentUser == null ? void 0 : currentUser.selected_locations) == null ? void 0 : _f.id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/users/edit.jsx",
        lineNumber: 135,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: " page__wrap w-full flex justify-center items-center mh-145",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "border p-6 min-w-[400px] rounded-md border-gray-300 form-area",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "max-w-[400px] w-full px-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between items-center gap-5 w-full",
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
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 167,
                                  columnNumber: 27
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/users/edit.jsx",
                                lineNumber: 159,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/users/edit.jsx",
                              lineNumber: 158,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/users/edit.jsx",
                            lineNumber: 152,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/edit.jsx",
                          lineNumber: 151,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                            className: "text-xl font-semibold text-primary",
                            children: (_h = data[0]) == null ? void 0 : _h.first_name
                          }, void 0, false, {
                            fileName: "app/routes/users/edit.jsx",
                            lineNumber: 177,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/edit.jsx",
                          lineNumber: 176,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/users/edit.jsx",
                      lineNumber: 150,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-between items-center gap-5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          type: "button",
                          title: "Delete User",
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
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 200,
                                  columnNumber: 25
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                }, void 0, false, {
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 201,
                                  columnNumber: 25
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/users/edit.jsx",
                              lineNumber: 190,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/users/edit.jsx",
                            lineNumber: 189,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/edit.jsx",
                          lineNumber: 183,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          title: "Update User",
                          type: "button",
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
                                fileName: "app/routes/users/edit.jsx",
                                lineNumber: 221,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/users/edit.jsx",
                              lineNumber: 213,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/users/edit.jsx",
                            lineNumber: 212,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/users/edit.jsx",
                          lineNumber: 205,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/users/edit.jsx",
                      lineNumber: 182,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/users/edit.jsx",
                  lineNumber: 149,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 block w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
                                      fileName: "app/routes/users/edit.jsx",
                                      lineNumber: 239,
                                      columnNumber: 29
                                    }, this)
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 235,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                  type: "text",
                                  name: "user-name",
                                  id: "user-name",
                                  placeholder: "User Name",
                                  required: true,
                                  autoComplete: "given-name",
                                  value: namedata,
                                  onChange: (e) => setNamedata(e.target.value),
                                  className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                                }, void 0, false, {
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 241,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/users/edit.jsx",
                              lineNumber: 234,
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
                                      fileName: "app/routes/users/edit.jsx",
                                      lineNumber: 259,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 254,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                  type: "email",
                                  name: "email-address",
                                  id: "email-address",
                                  placeholder: "User Email",
                                  required: true,
                                  autoComplete: "email",
                                  value: emaildata,
                                  onChange: (e) => setEmaildata(e.target.value),
                                  className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                                }, void 0, false, {
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 261,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/users/edit.jsx",
                              lineNumber: 253,
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
                                    " ",
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                      className: "text-gray-400 text-xs",
                                      children: "(optional)"
                                    }, void 0, false, {
                                      fileName: "app/routes/users/edit.jsx",
                                      lineNumber: 279,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 274,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                  type: !isVisible ? "password" : "text",
                                  name: "user-password",
                                  id: "user-password",
                                  placeholder: "User Password",
                                  value: password || "",
                                  onChange: (e) => setPassword(e.target.value),
                                  required: true,
                                  autoComplete: "new-password",
                                  className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                                }, void 0, false, {
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 283,
                                  columnNumber: 23
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                  type: "button",
                                  onClick: () => {
                                    setVisible(!isVisible);
                                  },
                                  title: !isVisible === true ? "Show Password" : "Hide Password",
                                  className: "absolute z-10 right-5 bottom-[11px] cursor-pointer text-gray-300",
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
                                            fileName: "app/routes/users/edit.jsx",
                                            lineNumber: 320,
                                            columnNumber: 29
                                          }, this),
                                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
                                            x1: "1",
                                            y1: "1",
                                            x2: "23",
                                            y2: "23"
                                          }, void 0, false, {
                                            fileName: "app/routes/users/edit.jsx",
                                            lineNumber: 321,
                                            columnNumber: 29
                                          }, this)
                                        ]
                                      }, void 0, true, {
                                        fileName: "app/routes/users/edit.jsx",
                                        lineNumber: 310,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, false, {
                                      fileName: "app/routes/users/edit.jsx",
                                      lineNumber: 306,
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
                                            fileName: "app/routes/users/edit.jsx",
                                            lineNumber: 338,
                                            columnNumber: 29
                                          }, this),
                                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "3"
                                          }, void 0, false, {
                                            fileName: "app/routes/users/edit.jsx",
                                            lineNumber: 339,
                                            columnNumber: 29
                                          }, this)
                                        ]
                                      }, void 0, true, {
                                        fileName: "app/routes/users/edit.jsx",
                                        lineNumber: 328,
                                        columnNumber: 27
                                      }, this)
                                    }, void 0, false, {
                                      fileName: "app/routes/users/edit.jsx",
                                      lineNumber: 324,
                                      columnNumber: 25
                                    }, this)
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/users/edit.jsx",
                                  lineNumber: 294,
                                  columnNumber: 23
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/users/edit.jsx",
                              lineNumber: 273,
                              columnNumber: 21
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/users/edit.jsx",
                          lineNumber: 233,
                          columnNumber: 19
                        }, this),
                        " "
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/users/edit.jsx",
                      lineNumber: 232,
                      columnNumber: 17
                    }, this),
                    " "
                  ]
                }, void 0, true, {
                  fileName: "app/routes/users/edit.jsx",
                  lineNumber: 231,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/users/edit.jsx",
              lineNumber: 147,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/users/edit.jsx",
            lineNumber: 146,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/users/edit.jsx",
          lineNumber: 145,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/users/edit.jsx",
        lineNumber: 144,
        columnNumber: 7
      }, this),
      modalIsOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteModel, {
        open: setIsOpen,
        deleteHandle
      }, void 0, false, {
        fileName: "app/routes/users/edit.jsx",
        lineNumber: 376,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/users/edit.jsx",
        lineNumber: 378,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/users/edit.jsx",
    lineNumber: 134,
    columnNumber: 5
  }, this);
}
export {
  userUpdate as default,
  meta
};
//# sourceMappingURL=/build/routes/users/edit-KWRAJJQA.js.map
