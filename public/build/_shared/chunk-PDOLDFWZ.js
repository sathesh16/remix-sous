import {
  Form,
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useNavigate
} from "/build/_shared/chunk-TYUI5MFT.js";

// empty-module:../../sessions.server
var require_sessions = __commonJS({
  "empty-module:../../sessions.server"(exports, module) {
    module.exports = {};
  }
});

// empty-module:../../auth.server
var require_auth = __commonJS({
  "empty-module:../../auth.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/login/index.jsx
var import_react = __toESM(require_react());
var import_sessions = __toESM(require_sessions());
var import_auth = __toESM(require_auth());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LoginPage() {
  const actionData = useActionData();
  const navigation = useNavigate();
  (0, import_react.useEffect)(() => {
    if (actionData?.error) {
      alert(actionData.error);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Login" }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", placeholder: "Email", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 70,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "password", type: "password", placeholder: "Password", required: true }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: navigation.state === "submitting", children: navigation.state === "submitting" ? "Logging in..." : "Login" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 72,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 69,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 67,
    columnNumber: 9
  }, this);
}

export {
  LoginPage
};
//# sourceMappingURL=/build/_shared/chunk-PDOLDFWZ.js.map
