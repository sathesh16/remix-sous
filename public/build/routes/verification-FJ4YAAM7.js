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
  Q
} from "/build/_shared/chunk-776WLWWM.js";
import "/build/_shared/chunk-YBWC7QFI.js";
import {
  require_session
} from "/build/_shared/chunk-2FLU7E64.js";
import {
  Form,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// empty-module:~/services/auth.server
var require_auth = __commonJS({
  "empty-module:~/services/auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/verification.jsx
var React = __toESM(require_react());
var import_auth = __toESM(require_auth());
var import_session = __toESM(require_session());
var import_verifySession = __toESM(require_verifySession());
var import_verify = __toESM(require_verify());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Verification" };
}
function Verification() {
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const [pin, setPin] = React.useState("");
  const [buttonTrigger, setButtonTrigger] = React.useState(false);
  React.useEffect(() => {
    const element = document.getElementById("verifyId");
    element.addEventListener("click", function() {
      if (!buttonTrigger) {
        element.style.pointerEvents = "none";
        setButtonTrigger(true);
      }
    });
    if (actionData == null ? void 0 : actionData.error) {
      Q.error(actionData == null ? void 0 : actionData.error, {
        onClose: () => {
          element.style.pointerEvents = "auto";
          setButtonTrigger(false);
        }
      });
    }
    return () => {
      element.removeEventListener("click", function() {
        setButtonTrigger(false);
      });
    };
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        login: true
      }, void 0, false, {
        fileName: "app/routes/verification.jsx",
        lineNumber: 87,
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-[24px] font-bold text-primary mb-12",
                children: "Verification"
              }, void 0, false, {
                fileName: "app/routes/verification.jsx",
                lineNumber: 94,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mb-6 w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "u-mail-id1",
                    className: "block text-sm font-bold text-primary",
                    children: "Verify OTP"
                  }, void 0, false, {
                    fileName: "app/routes/verification.jsx",
                    lineNumber: 98,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "tel",
                    id: "u-mail-id1",
                    name: "otp",
                    placeholder: "enter your pin",
                    value: pin,
                    onChange: (e) => setPin(e.target.value),
                    required: true,
                    className: "mt-2 w-full px-4 py-3 flex justify-center items-center text-black shadow-sm border border-primary focus:border-primary placeholder:text-[#6E7878] placeholder:text-[14px] placeholder:font-normal focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  }, void 0, false, {
                    fileName: "app/routes/verification.jsx",
                    lineNumber: 104,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/verification.jsx",
                lineNumber: 97,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "self-end text-left font-normal text-green-600",
                children: "*Please get in touch with the support team for the verification PIN."
              }, void 0, false, {
                fileName: "app/routes/verification.jsx",
                lineNumber: 115,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-12 w-full",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  id: "verifyId",
                  className: "inline-flex w-full items-center justify-center h-[50px] text-[18px] rounded border bg-primary border-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                  children: buttonTrigger ? "Verifing..." : "Verify"
                }, void 0, false, {
                  fileName: "app/routes/verification.jsx",
                  lineNumber: 121,
                  columnNumber: 29
                }, this)
              }, void 0, false, {
                fileName: "app/routes/verification.jsx",
                lineNumber: 120,
                columnNumber: 25
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/verification.jsx",
            lineNumber: 90,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/verification.jsx",
          lineNumber: 89,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/verification.jsx",
        lineNumber: 88,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {
        login: true
      }, void 0, false, {
        fileName: "app/routes/verification.jsx",
        lineNumber: 133,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/verification.jsx",
    lineNumber: 86,
    columnNumber: 9
  }, this);
}
export {
  Verification as default,
  meta
};
//# sourceMappingURL=/build/routes/verification-FJ4YAAM7.js.map
