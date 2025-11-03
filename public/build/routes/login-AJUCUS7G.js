import {
  require_verify,
  require_verifySession
} from "/build/_shared/chunk-GUTACO3S.js";
import {
  Footer
} from "/build/_shared/chunk-NO54GCYG.js";
import {
  HeaderFile
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import "/build/_shared/chunk-I24TZKN2.js";
import "/build/_shared/chunk-TQXZOQST.js";
import {
  Q,
  getAssetURL
} from "/build/_shared/chunk-776WLWWM.js";
import "/build/_shared/chunk-YBWC7QFI.js";
import {
  Form,
  Link,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/login.jsx
var React = __toESM(require_react());
var import_verify = __toESM(require_verify());
var import_verifySession = __toESM(require_verifySession());

// node_modules/js-cookie/dist/js.cookie.mjs
function assign(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target;
}
var defaultConverter = {
  read: function(value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function init(converter, defaultAttributes) {
  function set(name, value, attributes) {
    if (typeof document === "undefined") {
      return;
    }
    attributes = assign({}, defaultAttributes, attributes);
    if (typeof attributes.expires === "number") {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }
    name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
    var stringifiedAttributes = "";
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue;
      }
      stringifiedAttributes += "; " + attributeName;
      if (attributes[attributeName] === true) {
        continue;
      }
      stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
    }
    return document.cookie = name + "=" + converter.write(value, name) + stringifiedAttributes;
  }
  function get(name) {
    if (typeof document === "undefined" || arguments.length && !name) {
      return;
    }
    var cookies = document.cookie ? document.cookie.split("; ") : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split("=");
      var value = parts.slice(1).join("=");
      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);
        if (name === found) {
          break;
        }
      } catch (e) {
      }
    }
    return name ? jar[name] : jar;
  }
  return Object.create(
    {
      set,
      get,
      remove: function(name, attributes) {
        set(
          name,
          "",
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function(attributes) {
        return init(this.converter, assign({}, this.attributes, attributes));
      },
      withConverter: function(converter2) {
        return init(assign({}, this.converter, converter2), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  );
}
var api = init(defaultConverter, { path: "/" });

// app/routes/login.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Login" };
}
function LoginPage() {
  const loaderData = useLoaderData();
  const actiondata = useActionData();
  const [isVisible, setVisible] = React.useState(false);
  const [emaildata, setEmaildata] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [buttonTrigger, setButtonTrigger] = React.useState(false);
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  React.useEffect(() => {
    var _a;
    api.remove("_session");
    const element = document.getElementById("submitId");
    element.addEventListener("click", function() {
      if (!buttonTrigger) {
        if (!!(emaildata == null ? void 0 : emaildata.trim()) && !!(password == null ? void 0 : password.trim())) {
          if (document.activeElement !== emailRef.current && document.activeElement !== passwordRef.current) {
            element.style.pointerEvents = "none";
            setButtonTrigger(true);
          }
        }
      }
    });
    if (loaderData == null ? void 0 : loaderData.error) {
      if (emaildata && password) {
        if (document.activeElement !== emailRef.current && document.activeElement !== passwordRef.current) {
          Q.error((_a = loaderData == null ? void 0 : loaderData.error) == null ? void 0 : _a.message, {
            onClose: () => {
              element.style.pointerEvents = "auto";
              setButtonTrigger(false);
            }
          });
        }
      }
    }
    return () => {
      element.removeEventListener("click", function() {
        setButtonTrigger(false);
      });
    };
  }, [loaderData == null ? void 0 : loaderData.error, emaildata, password]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        login: true,
        logoCenter: true
      }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex justify-center h-[calc(100vh-75px)] items-center px-5",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            className: "max-w-[400px] w-full flex flex-col items-center text-[14px] ",
            method: "post",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "flex w-full justify-between mb-12 items-center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-left text-[24px] text-black ",
                    children: "Login Account"
                  }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 96,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    src: (loaderData == null ? void 0 : loaderData.Location1) ? getAssetURL(loaderData == null ? void 0 : loaderData.Location1) : "",
                    alt: "Logo",
                    className: "min-w-[110px]"
                  }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 99,
                    columnNumber: 25
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.jsx",
                lineNumber: 95,
                columnNumber: 24
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mb-6 w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "u-mail-id1",
                    className: "block text-sm font-bold text-primary",
                    children: "Email"
                  }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 102,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "email",
                    id: "u-mail-id1",
                    name: "email",
                    ref: emailRef,
                    placeholder: "Your@email.dk",
                    value: emaildata,
                    onChange: (e) => {
                      setEmaildata(e.target.value);
                      setButtonTrigger(false);
                      document.getElementById("submitId").style.pointerEvents = "auto";
                    },
                    required: true,
                    className: "mt-2 w-full px-4 py-3 flex justify-center items-center text-primary shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 108,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.jsx",
                lineNumber: 101,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mb-3 w-full relative",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "u-password-1",
                    className: "block text-sm font-bold text-primary",
                    children: "Password"
                  }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 126,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: !isVisible ? "password" : "text",
                    id: "u-password-1",
                    placeholder: "Password",
                    ref: passwordRef,
                    name: "password",
                    required: true,
                    value: password,
                    onChange: (e) => setPassword(e.target.value),
                    className: "mt-2 w-full px-4 py-3 flex justify-center items-center text-primary shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 132,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "show-password Password__icon absolute z-20 right-5 bottom-[8px] cursor-pointer text-gray-300",
                    children: !isVisible ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      id: "eye-off",
                      click: "show=true",
                      type: "button",
                      className: "show === true ? 'hidden':'inline-block'",
                      onClick: () => {
                        setVisible(!isVisible);
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-eye-off w-5 h-5 text-[#bbb]",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                            d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                          }, void 0, false, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 168,
                            columnNumber: 49
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", {
                            x1: "1",
                            y1: "1",
                            x2: "23",
                            y2: "23"
                          }, void 0, false, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 169,
                            columnNumber: 49
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 156,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 147,
                      columnNumber: 41
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      id: "eye-on",
                      click: "show=false",
                      type: "button",
                      className: "show === false ? 'hidden':'inline-block'",
                      onClick: () => {
                        setVisible(!isVisible);
                      },
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        className: "feather feather-eye w-5 h-5 text-[#bbb]",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                            d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                          }, void 0, false, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 193,
                            columnNumber: 49
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "3"
                          }, void 0, false, {
                            fileName: "app/routes/login.jsx",
                            lineNumber: 194,
                            columnNumber: 49
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/login.jsx",
                        lineNumber: 183,
                        columnNumber: 45
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/login.jsx",
                      lineNumber: 173,
                      columnNumber: 41
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/login.jsx",
                    lineNumber: 144,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/login.jsx",
                lineNumber: 125,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                to: "/forgetpassword",
                className: "self-end text-right font-semibold text-primary",
                children: "Forgot password?"
              }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 200,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-12 w-full",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  name: "myButton",
                  id: "submitId",
                  className: "inline-flex w-full items-center justify-center h-[50px] text-[18px] rounded border bg-primary border-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  children: buttonTrigger ? "Logging In..." : "Log In"
                }, void 0, false, {
                  fileName: "app/routes/login.jsx",
                  lineNumber: 207,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: "app/routes/login.jsx",
                lineNumber: 206,
                columnNumber: 25
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/login.jsx",
            lineNumber: 91,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/login.jsx",
          lineNumber: 90,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {
        login: true
      }, void 0, false, {
        fileName: "app/routes/login.jsx",
        lineNumber: 219,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/login.jsx",
    lineNumber: 87,
    columnNumber: 9
  }, this);
}
export {
  LoginPage as default,
  meta
};
/*! js-cookie v3.0.5 | MIT */
//# sourceMappingURL=/build/routes/login-AJUCUS7G.js.map
