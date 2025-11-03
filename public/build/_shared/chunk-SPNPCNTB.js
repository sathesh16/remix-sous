import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-NDJ7IIGF.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/login/index.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LoginPage() {
  const actionData = useActionData();
  const transition = useTransition();
  const isSubmitting = transition.state === "submitting";
  (0, import_react2.useEffect)(() => {
    if (actionData)
      console.log("Login Result:", actionData);
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { padding: "2rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Login" }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", placeholder: "Email", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 62,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", placeholder: "Password", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Logging in..." : "Login" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 64,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 61,
      columnNumber: 13
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { color: "red", marginTop: "1rem" }, children: actionData.error }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 70,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 59,
    columnNumber: 9
  }, this);
}

export {
  LoginPage
};
//# sourceMappingURL=/build/_shared/chunk-SPNPCNTB.js.map
