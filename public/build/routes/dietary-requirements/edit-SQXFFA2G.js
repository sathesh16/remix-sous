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
  GOOGLE_TRANSLATION_APIKEY,
  GOOGLE_TRANSLATOR_URL,
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

// app/routes/dietary-requirements/edit.jsx
var import_react = __toESM(require_react());
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Edit Dietary" };
}
function DietaryEdit() {
  var _a, _b, _c;
  const { data, uId, location_id } = useLoaderData();
  const [modalIsOpen, setIsOpen] = import_react.default.useState(false);
  const [namedata, setNamedata] = import_react.default.useState((_a = data[0]) == null ? void 0 : _a.name);
  const [preventDouble, setPreventDouble] = import_react.default.useState(false);
  const navigate = useNavigate();
  let fromLang = "da";
  let toLang = "en";
  async function GoogleTranslator(text) {
    try {
      let url = `${GOOGLE_TRANSLATOR_URL}/language/translate/v2?key=${GOOGLE_TRANSLATION_APIKEY}`;
      url += "&q=" + encodeURI(encodeURIComponent(text));
      url += `&source=${fromLang}`;
      url += `&target=${toLang}`;
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      });
      return res.json();
    } catch (err) {
      console.log("error");
      setIsError(true);
    }
  }
  const updateHandle = async (e) => {
    var _a2;
    if (((_a2 = namedata == null ? void 0 : namedata.trim()) == null ? void 0 : _a2.length) > 0) {
      setPreventDouble(true);
      const directus = directusLoaderLink;
      await GoogleTranslator(namedata).then(async (res) => {
        var _a3, _b2, _c2, _d, _e, _f, _g;
        return await directus.items("Dietary").updateOne(uId, {
          "name": namedata !== ((_a3 = data[0]) == null ? void 0 : _a3.name) ? namedata : (_b2 = data[0]) == null ? void 0 : _b2.name,
          "translated_name": (_g = (_f = decodeURI(decodeURIComponent((_e = (_d = (_c2 = res == null ? void 0 : res.data) == null ? void 0 : _c2.translations) == null ? void 0 : _d[0]) == null ? void 0 : _e.translatedText))) == null ? void 0 : _f.replaceAll("&#39;", "'")) != null ? _g : "translatedText"
        }).then(
          (res2) => {
            navigate("/dietary-requirements/manage");
            Q.success("Updated successfully");
          }
        ).catch((err) => {
          navigate(".", { replace: true });
          console.log(err);
          Q.error("Something went wrong");
        });
      });
    } else {
      Q.error("Name is required");
    }
  };
  const deleteHandle = async () => {
    const directus = directusLoaderLink;
    await directus.items("Dietary").deleteOne(uId).then(
      (res) => {
        navigate("/dietary-requirements/manage");
        Q.success("Deleted successfully");
      }
    ).catch((err) => {
      navigate(".", { replace: true });
      console.log(err);
      Q.error("Something went wrong");
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page-content",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: true,
        noLeftLogo: ((_b = ISS_DENMARK_HQ) == null ? void 0 : _b.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/dietary-requirements/edit.jsx",
        lineNumber: 106,
        columnNumber: 13
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
                                  fileName: "app/routes/dietary-requirements/edit.jsx",
                                  lineNumber: 120,
                                  columnNumber: 53
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/dietary-requirements/edit.jsx",
                                lineNumber: 118,
                                columnNumber: 49
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/dietary-requirements/edit.jsx",
                              lineNumber: 117,
                              columnNumber: 45
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/dietary-requirements/edit.jsx",
                            lineNumber: 114,
                            columnNumber: 41
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/dietary-requirements/edit.jsx",
                          lineNumber: 113,
                          columnNumber: 37
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                            className: "text-xl font-semibold text-primary",
                            children: (_c = data[0]) == null ? void 0 : _c.name
                          }, void 0, false, {
                            fileName: "app/routes/dietary-requirements/edit.jsx",
                            lineNumber: 127,
                            columnNumber: 41
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/dietary-requirements/edit.jsx",
                          lineNumber: 126,
                          columnNumber: 37
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/dietary-requirements/edit.jsx",
                      lineNumber: 112,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-between items-center gap-5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          type: "button",
                          title: "Delete Dietary Preferences",
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
                                  fileName: "app/routes/dietary-requirements/edit.jsx",
                                  lineNumber: 138,
                                  columnNumber: 49
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                }, void 0, false, {
                                  fileName: "app/routes/dietary-requirements/edit.jsx",
                                  lineNumber: 139,
                                  columnNumber: 49
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/dietary-requirements/edit.jsx",
                              lineNumber: 135,
                              columnNumber: 45
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/dietary-requirements/edit.jsx",
                            lineNumber: 134,
                            columnNumber: 41
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/dietary-requirements/edit.jsx",
                          lineNumber: 131,
                          columnNumber: 37
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          title: "Update Dietary Preferences",
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
                                fileName: "app/routes/dietary-requirements/edit.jsx",
                                lineNumber: 153,
                                columnNumber: 49
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/dietary-requirements/edit.jsx",
                              lineNumber: 151,
                              columnNumber: 45
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/dietary-requirements/edit.jsx",
                            lineNumber: 150,
                            columnNumber: 41
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/dietary-requirements/edit.jsx",
                          lineNumber: 146,
                          columnNumber: 37
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/dietary-requirements/edit.jsx",
                      lineNumber: 130,
                      columnNumber: 33
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/dietary-requirements/edit.jsx",
                  lineNumber: 111,
                  columnNumber: 29
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
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
                                  fileName: "app/routes/dietary-requirements/edit.jsx",
                                  lineNumber: 167,
                                  columnNumber: 132
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/dietary-requirements/edit.jsx",
                              lineNumber: 167,
                              columnNumber: 49
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                              type: "text",
                              name: "user-name",
                              id: "user-name",
                              placeholder: "Dietary Name",
                              required: true,
                              value: namedata,
                              onChange: (e) => setNamedata(e.target.value),
                              autoComplete: "given-name",
                              className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                            }, void 0, false, {
                              fileName: "app/routes/dietary-requirements/edit.jsx",
                              lineNumber: 169,
                              columnNumber: 49
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/dietary-requirements/edit.jsx",
                          lineNumber: 166,
                          columnNumber: 45
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/dietary-requirements/edit.jsx",
                        lineNumber: 165,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/dietary-requirements/edit.jsx",
                      lineNumber: 164,
                      columnNumber: 37
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/dietary-requirements/edit.jsx",
                    lineNumber: 163,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/dietary-requirements/edit.jsx",
                  lineNumber: 162,
                  columnNumber: 29
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/dietary-requirements/edit.jsx",
              lineNumber: 110,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: "app/routes/dietary-requirements/edit.jsx",
            lineNumber: 109,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/dietary-requirements/edit.jsx",
          lineNumber: 108,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/dietary-requirements/edit.jsx",
        lineNumber: 107,
        columnNumber: 13
      }, this),
      modalIsOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteModel, {
        open: setIsOpen,
        deleteHandle
      }, void 0, false, {
        fileName: "app/routes/dietary-requirements/edit.jsx",
        lineNumber: 184,
        columnNumber: 28
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/dietary-requirements/edit.jsx",
        lineNumber: 185,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/dietary-requirements/edit.jsx",
    lineNumber: 105,
    columnNumber: 9
  }, this);
}
export {
  DietaryEdit as default,
  meta
};
//# sourceMappingURL=/build/routes/dietary-requirements/edit-SQXFFA2G.js.map
