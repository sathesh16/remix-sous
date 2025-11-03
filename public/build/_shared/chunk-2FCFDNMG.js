import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-NDJ7IIGF.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// empty-module:../../sessions.server
var require_sessions = __commonJS({
  "empty-module:../../sessions.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/login/index.jsx
var import_react2 = __toESM(require_react());
var import_sessions = __toESM(require_sessions());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  const actionData = useActionData();
  const transition = useTransition();
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      alert(actionData.error);
    }
  }, [actionData]);
  const isSubmitting = transition.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "login-page", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Login" }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Email:" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 58,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Password:" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Logging in..." : "Login" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 55,
    columnNumber: 9
  }, this);
}

export {
  Login
};
//# sourceMappingURL=/build/_shared/chunk-2FCFDNMG.js.map
