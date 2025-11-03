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

// empty-module:~/sessions.server
var require_sessions = __commonJS({
  "empty-module:~/sessions.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/login/index.jsx
var import_sessions = __toESM(require_sessions());
var import_react2 = __toESM(require_react());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Login" }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", placeholder: "Email", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", placeholder: "Password", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Logging in..." : "Login" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 64,
    columnNumber: 5
  }, this);
}

export {
  Login
};
//# sourceMappingURL=/build/_shared/chunk-VYFVUCZ5.js.map
