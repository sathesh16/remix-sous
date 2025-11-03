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
  CALORIEMAMA_API_URL,
  ISS_DENMARK_HQ
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

// app/routes/get-nutrition-results.jsx
var import_react = __toESM(require_react());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function getNutritionResults() {
  var _a;
  const { location_id } = useLoaderData();
  const navigate = useNavigate();
  const [image, setImage] = (0, import_react.useState)(null);
  const [binaryData, setBinaryData] = (0, import_react.useState)(null);
  const [mainGroupName, setMainGroupName] = (0, import_react.useState)(null);
  const [isLoading, setIsLoading] = (0, import_react.useState)(false);
  const [errorMessage, setErrorMessage] = (0, import_react.useState)("");
  const [resultValue, setResultValue] = (0, import_react.useState)([]);
  const hiddenFileInput = import_react.default.useRef(null);
  const handleImageChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setBinaryData(reader.result.split(",")[1]);
    };
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    var _a2;
    event.preventDefault();
    const file = (_a2 = event == null ? void 0 : event.dataTransfer) == null ? void 0 : _a2.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        var _a3;
        setImage(reader.result);
        setBinaryData((_a3 = reader.result) == null ? void 0 : _a3.split(",")[1]);
      };
    } else {
      Q.error("Please upload the image again.");
    }
  };
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    await fetch(CALORIEMAMA_API_URL, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ "file_content": binaryData })
    }).then((response) => response.json()).then((data) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      if ((_a2 = data == null ? void 0 : data.output) == null ? void 0 : _a2.is_food) {
        if (((_c = (_b = data == null ? void 0 : data.output) == null ? void 0 : _b.results) == null ? void 0 : _c.length) >= 1) {
          setIsLoading(false);
          setMainGroupName((_f = (_e = (_d = data == null ? void 0 : data.output) == null ? void 0 : _d.results) == null ? void 0 : _e[0]) == null ? void 0 : _f.group);
          setResultValue((_i = (_h = (_g = data == null ? void 0 : data.output) == null ? void 0 : _g.results) == null ? void 0 : _h[0]) == null ? void 0 : _i.items);
          setErrorMessage("");
        } else {
          setIsLoading(false);
          setMainGroupName("");
          setResultValue([]);
          setErrorMessage("");
        }
      } else if ((_j = data == null ? void 0 : data.error) == null ? void 0 : _j.message) {
        setErrorMessage("Error, please type again: Image size too big. Crop to 544x544 px please");
        setIsLoading(false);
        setMainGroupName("");
        setResultValue([]);
      } else {
        setErrorMessage("");
        setIsLoading(false);
        setMainGroupName("");
        setResultValue([]);
      }
    }).catch((error) => {
      setErrorMessage("");
      console.log("error", error);
      setMainGroupName("");
      setResultValue([]);
      setIsLoading(false);
      Q.error("Something went wrong");
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: true,
        noLeftLogo: ((_a = ISS_DENMARK_HQ) == null ? void 0 : _a.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/get-nutrition-results.jsx",
        lineNumber: 334,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page__wrap py-6 max-w-[1440px] px-6 mx-auto",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-between items-center gap-5",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
                          fileName: "app/routes/get-nutrition-results.jsx",
                          lineNumber: 344,
                          columnNumber: 37
                        }, this),
                        " /"
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/get-nutrition-results.jsx",
                      lineNumber: 343,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/get-nutrition-results.jsx",
                    lineNumber: 339,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-xl font-semibold text-primary",
                      children: "Get Nutrition Results"
                    }, void 0, false, {
                      fileName: "app/routes/get-nutrition-results.jsx",
                      lineNumber: 348,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/get-nutrition-results.jsx",
                    lineNumber: 347,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/get-nutrition-results.jsx",
                lineNumber: 338,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/routes/get-nutrition-results.jsx",
              lineNumber: 337,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "py-6 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "grid grid-cols-12 gap-5 overflow-x-auto xl:gap-24",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "col-span-12 md:col-span-6 rounded-sm",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "file",
                        accept: "image/jpeg",
                        onChange: handleImageChange,
                        ref: hiddenFileInput,
                        style: { display: "none" }
                      }, void 0, false, {
                        fileName: "app/routes/get-nutrition-results.jsx",
                        lineNumber: 355,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        onDragOver: handleDragOver,
                        onDrop: handleDrop,
                        onClick: handleClick,
                        style: { height: "550px", border: "1px dashed #f0f0f0" },
                        children: image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                          className: "object-cover",
                          src: image,
                          alt: "uploaded image",
                          style: { width: "100%", height: "100%" }
                        }, void 0, false, {
                          fileName: "app/routes/get-nutrition-results.jsx",
                          lineNumber: 363,
                          columnNumber: 41
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "upload-placeholder-section flex items-center justify-center w-full h-full flex-col",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                version: "1.0",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "48.000000pt",
                                height: "48.000000pt",
                                viewBox: "0 0 48.000000 48.000000",
                                preserveAspectRatio: "xMidYMid meet",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
                                  transform: "translate(0.000000,48.000000) scale(0.100000,-0.100000)",
                                  fill: "#000000",
                                  stroke: "none",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                      d: "M77 402 c-14 -16 -17 -43 -17 -164 0 -188 -10 -178 182 -178 188 0\n                                                178 -10 178 182 0 188 10 178 -182 178 -128 0 -147 -2 -161 -18z m311 -124 c1\n                                                -60 -1 -108 -6 -108 -4 0 -21 14 -37 30 -32 33 -56 38 -75 15 -11 -13 -18 -10\n                                                -51 20 -47 42 -64 43 -101 8 l-28 -27 0 80 c0 45 3 84 7 88 4 3 70 5 147 4\n                                                l141 -3 3 -107z m-190 -71 l32 -33 -44 -43 c-57 -56 -89 -55 -94 3 -3 32 2 44\n                                                29 72 18 19 36 34 39 34 3 0 20 -15 38 -33z m151 -51 c24 -24 40 -49 37 -55\n                                                -5 -7 -45 -11 -104 -11 l-96 0 54 55 c30 30 57 55 60 55 3 0 25 -20 49 -44z"
                                    }, void 0, false, {
                                      fileName: "app/routes/get-nutrition-results.jsx",
                                      lineNumber: 373,
                                      columnNumber: 49
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                      d: "M272 338 c-15 -15 -15 -51 0 -66 15 -15 51 -15 66 0 28 28 7 78 -33\n                                                78 -12 0 -26 -5 -33 -12z m48 -33 c0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8\n                                                7 15 15 15 8 0 15 -7 15 -15z"
                                    }, void 0, false, {
                                      fileName: "app/routes/get-nutrition-results.jsx",
                                      lineNumber: 380,
                                      columnNumber: 49
                                    }, this)
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/get-nutrition-results.jsx",
                                  lineNumber: 371,
                                  columnNumber: 49
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/get-nutrition-results.jsx",
                                lineNumber: 367,
                                columnNumber: 49
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                className: "upload-placeholder-text",
                                children: "Drag and drop or click to upload an image"
                              }, void 0, false, {
                                fileName: "app/routes/get-nutrition-results.jsx",
                                lineNumber: 385,
                                columnNumber: 49
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/get-nutrition-results.jsx",
                            lineNumber: 366,
                            columnNumber: 45
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/get-nutrition-results.jsx",
                          lineNumber: 365,
                          columnNumber: 41
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/get-nutrition-results.jsx",
                        lineNumber: 356,
                        columnNumber: 33
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "button-area p-1 mt-6 text-center cursor-pointer",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          type: "submit",
                          onClick: () => handleSubmit(),
                          disabled: image ? false : true,
                          style: { opacity: image ? 1 : 0.5 },
                          className: "inline-flex  items-center justify-center h-[40px] text-[18px] rounded border bg-blue-500 border-blue-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                          children: "Get Results"
                        }, void 0, false, {
                          fileName: "app/routes/get-nutrition-results.jsx",
                          lineNumber: 391,
                          columnNumber: 37
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/get-nutrition-results.jsx",
                        lineNumber: 390,
                        columnNumber: 33
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/get-nutrition-results.jsx",
                    lineNumber: 354,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "col-span-12 md:col-span-6 text-[20px]",
                    children: isLoading || mainGroupName || errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                          className: "font-medium",
                          children: "Food AI API"
                        }, void 0, false, {
                          fileName: "app/routes/get-nutrition-results.jsx",
                          lineNumber: 403,
                          columnNumber: 41
                        }, this),
                        errorMessage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "error-text",
                          children: errorMessage
                        }, void 0, false, {
                          fileName: "app/routes/get-nutrition-results.jsx",
                          lineNumber: 405,
                          columnNumber: 45
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "mt-5",
                          children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "loading-div",
                            children: "Recognizing..."
                          }, void 0, false, {
                            fileName: "app/routes/get-nutrition-results.jsx",
                            lineNumber: 409,
                            columnNumber: 60
                          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                            children: [
                              mainGroupName ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "w-full rounded-sm groupName bg-[#ddd]",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "bg-[#51d297] text-base font-medium text-black text-left pl-1.5 pr-1 py-1 rounded-sm",
                                  style: { width: "80%" },
                                  children: [
                                    " ",
                                    mainGroupName
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/get-nutrition-results.jsx",
                                  lineNumber: 413,
                                  columnNumber: 61
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/get-nutrition-results.jsx",
                                lineNumber: 412,
                                columnNumber: 71
                              }, this) : null,
                              resultValue ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "food-items mt-2 w-full",
                                children: resultValue == null ? void 0 : resultValue.map((e, i) => {
                                  var _a2, _b, _c, _d, _e, _f, _g, _h;
                                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "items text-base",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                        className: "item-name",
                                        children: [
                                          e == null ? void 0 : e.name,
                                          " "
                                        ]
                                      }, void 0, true, {
                                        fileName: "app/routes/get-nutrition-results.jsx",
                                        lineNumber: 420,
                                        columnNumber: 73
                                      }, this),
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                        className: "serving-size font-bold",
                                        children: (_b = (_a2 = e == null ? void 0 : e.servingSizes) == null ? void 0 : _a2[0]) == null ? void 0 : _b.unit
                                      }, void 0, false, {
                                        fileName: "app/routes/get-nutrition-results.jsx",
                                        lineNumber: 422,
                                        columnNumber: 80
                                      }, this),
                                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                        className: "calorie-value float-right",
                                        children: Math.round(((_d = (_c = e == null ? void 0 : e.servingSizes) == null ? void 0 : _c[0]) == null ? void 0 : _d.servingWeight) ? ((_e = e == null ? void 0 : e.nutrition) == null ? void 0 : _e.calories) * ((_g = (_f = e == null ? void 0 : e.servingSizes) == null ? void 0 : _f[0]) == null ? void 0 : _g.servingWeight) : (_h = e == null ? void 0 : e.nutrition) == null ? void 0 : _h.calories)
                                      }, void 0, false, {
                                        fileName: "app/routes/get-nutrition-results.jsx",
                                        lineNumber: 423,
                                        columnNumber: 73
                                      }, this)
                                    ]
                                  }, i, true, {
                                    fileName: "app/routes/get-nutrition-results.jsx",
                                    lineNumber: 419,
                                    columnNumber: 69
                                  }, this);
                                })
                              }, void 0, false, {
                                fileName: "app/routes/get-nutrition-results.jsx",
                                lineNumber: 416,
                                columnNumber: 57
                              }, this) : null
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/get-nutrition-results.jsx",
                            lineNumber: 411,
                            columnNumber: 49
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/get-nutrition-results.jsx",
                          lineNumber: 407,
                          columnNumber: 41
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/get-nutrition-results.jsx",
                      lineNumber: 402,
                      columnNumber: 37
                    }, this) : null
                  }, void 0, false, {
                    fileName: "app/routes/get-nutrition-results.jsx",
                    lineNumber: 400,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/get-nutrition-results.jsx",
                lineNumber: 353,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/routes/get-nutrition-results.jsx",
              lineNumber: 352,
              columnNumber: 21
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/get-nutrition-results.jsx",
          lineNumber: 336,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/get-nutrition-results.jsx",
        lineNumber: 335,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/get-nutrition-results.jsx",
        lineNumber: 439,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/get-nutrition-results.jsx",
    lineNumber: 333,
    columnNumber: 9
  }, this);
}
export {
  getNutritionResults as default
};
//# sourceMappingURL=/build/routes/get-nutrition-results-XA4MUJAC.js.map
