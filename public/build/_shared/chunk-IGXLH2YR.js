import {
  Form,
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useTransition
} from "/build/_shared/chunk-AFQYU5YQ.js";

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
  const transition = useTransition();
  (0, import_react.useEffect)(() => {
    if (actionData?.error) {
      alert(actionData.error);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center items-center max-w-[600px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full p-6 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { style: { marginBottom: 12 }, children: "Login" }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "email", type: "email", placeholder: "Email", required: true, style: { width: "100%", padding: 8, marginBottom: 8 } }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 62,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { name: "password", type: "password", placeholder: "Password", required: true, style: { width: "100%", padding: 8, marginBottom: 12 } }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 63,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          disabled: transition.state === "submitting",
          style: {
            width: "100%",
            padding: 10,
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: 6
          },
          children: transition.state === "submitting" ? "Logging in..." : "Login"
        },
        void 0,
        false,
        {
          fileName: "app/routes/login/index.jsx",
          lineNumber: 64,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 61,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 59,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

export {
  LoginPage
};
//# sourceMappingURL=/build/_shared/chunk-IGXLH2YR.js.map
