import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-NDJ7IIGF.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/login/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LoginPage() {
  const actionData = useActionData();
  const transition = useTransition();
  const isSubmitting = transition.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { padding: "2rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Login" }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 54,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", placeholder: "Email", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", placeholder: "Password", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, children: isSubmitting ? "Logging in..." : "Login" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { style: { color: "red", marginTop: "1rem" }, children: actionData.error }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

export {
  LoginPage
};
//# sourceMappingURL=/build/_shared/chunk-V7MPTPBL.js.map
