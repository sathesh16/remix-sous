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

// app/routes/dietary-requirements/create.jsx
var import_react2 = __toESM(require_react());
var import_session = __toESM(require_session());
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Create Dietary Preferences" };
}
function Dietarycreate() {
  var _a;
  const { location_id } = useLoaderData();
  const [auth, setAuth] = (0, import_react2.useState)(true);
  const navigate = useNavigate();
  const [dietary, setDietary] = (0, import_react2.useState)("");
  const [buttonTrigger, setButtonTrigger] = import_react2.default.useState(false);
  const dietaryRef = import_react2.default.useRef(null);
  let fromLang = "da";
  let toLang = "en";
  import_react2.default.useEffect(() => {
    const element = document.getElementById("submitId");
    element.addEventListener("click", function() {
      if (!buttonTrigger) {
        if (!!(dietary == null ? void 0 : dietary.trim())) {
          if (document.activeElement !== dietaryRef.current) {
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
  }, [dietary]);
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
      const responce = res.json();
      return responce;
    } catch (err) {
      console.log("error", err);
    }
  }
  const createHandle = async (e) => {
    var _a2;
    const directus = directusLoaderLink;
    let pattern = /[A-z]/g;
    if (((_a2 = dietary == null ? void 0 : dietary.trim(" ")) == null ? void 0 : _a2.length) > 0) {
      await GoogleTranslator(dietary).then(async (res) => {
        var _a3, _b, _c, _d, _e;
        return await directus.items("Dietary").createOne({
          "name": dietary,
          "translated_name": (_e = (_d = decodeURI(decodeURIComponent((_c = (_b = (_a3 = res == null ? void 0 : res.data) == null ? void 0 : _a3.translations) == null ? void 0 : _b[0]) == null ? void 0 : _c.translatedText))) == null ? void 0 : _d.replaceAll("&#39;", "'")) != null ? _e : "translatedText"
        }).then(
          (res2) => {
            navigate("/dietary-requirements/manage");
            Q.success(" Created successfully");
          }
        ).catch((err) => {
          navigate(".", { replace: true });
          console.log(err);
          Q.error(err);
        });
      });
    } else {
      Q.error("Enter valid charecters");
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page-content",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: setAuth,
        noLeftLogo: ((_a = ISS_DENMARK_HQ) == null ? void 0 : _a.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/dietary-requirements/create.jsx",
        lineNumber: 109,
        columnNumber: 13
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
                                    fileName: "app/routes/dietary-requirements/create.jsx",
                                    lineNumber: 124,
                                    columnNumber: 57
                                  }, this)
                                }, void 0, false, {
                                  fileName: "app/routes/dietary-requirements/create.jsx",
                                  lineNumber: 122,
                                  columnNumber: 53
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/dietary-requirements/create.jsx",
                                lineNumber: 121,
                                columnNumber: 49
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/dietary-requirements/create.jsx",
                              lineNumber: 118,
                              columnNumber: 45
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/dietary-requirements/create.jsx",
                            lineNumber: 117,
                            columnNumber: 41
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                              className: "text-xl font-semibold text-primary",
                              children: "Create a Dietary Preferences"
                            }, void 0, false, {
                              fileName: "app/routes/dietary-requirements/create.jsx",
                              lineNumber: 131,
                              columnNumber: 45
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/dietary-requirements/create.jsx",
                            lineNumber: 130,
                            columnNumber: 41
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/dietary-requirements/create.jsx",
                        lineNumber: 116,
                        columnNumber: 37
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
                                fileName: "app/routes/dietary-requirements/create.jsx",
                                lineNumber: 140,
                                columnNumber: 53
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/dietary-requirements/create.jsx",
                              lineNumber: 138,
                              columnNumber: 49
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/dietary-requirements/create.jsx",
                            lineNumber: 137,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/dietary-requirements/create.jsx",
                          lineNumber: 135,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/dietary-requirements/create.jsx",
                        lineNumber: 134,
                        columnNumber: 37
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/dietary-requirements/create.jsx",
                    lineNumber: 115,
                    columnNumber: 33
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mt-6 block",
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
                                  fileName: "app/routes/dietary-requirements/create.jsx",
                                  lineNumber: 150,
                                  columnNumber: 132
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/dietary-requirements/create.jsx",
                              lineNumber: 150,
                              columnNumber: 49
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                              type: "text",
                              name: "user-name",
                              id: "user-name",
                              placeholder: "Dietary Name",
                              required: true,
                              ref: dietaryRef,
                              value: dietary,
                              onChange: (e) => setDietary(e.target.value),
                              autoComplete: "given-name",
                              className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                            }, void 0, false, {
                              fileName: "app/routes/dietary-requirements/create.jsx",
                              lineNumber: 152,
                              columnNumber: 49
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/dietary-requirements/create.jsx",
                          lineNumber: 149,
                          columnNumber: 45
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/dietary-requirements/create.jsx",
                        lineNumber: 148,
                        columnNumber: 41
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/dietary-requirements/create.jsx",
                      lineNumber: 147,
                      columnNumber: 37
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/dietary-requirements/create.jsx",
                    lineNumber: 146,
                    columnNumber: 33
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/dietary-requirements/create.jsx",
                lineNumber: 114,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: "app/routes/dietary-requirements/create.jsx",
              lineNumber: 113,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: "app/routes/dietary-requirements/create.jsx",
            lineNumber: 112,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/dietary-requirements/create.jsx",
          lineNumber: 111,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/dietary-requirements/create.jsx",
        lineNumber: 110,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/dietary-requirements/create.jsx",
        lineNumber: 169,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/dietary-requirements/create.jsx",
    lineNumber: 108,
    columnNumber: 9
  }, this);
}
export {
  Dietarycreate as default,
  meta
};
//# sourceMappingURL=/build/routes/dietary-requirements/create-OT5A5CCB.js.map
