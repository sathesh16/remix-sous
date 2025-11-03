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

// empty-module:../../sessions.server.js
var require_sessions_server = __commonJS({
  "empty-module:../../sessions.server.js"(exports, module) {
    module.exports = {};
  }
});

// app/routes/login/index.jsx
var import_react2 = __toESM(require_react());
var import_sessions_server = __toESM(require_sessions_server());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function LoginPage() {
  const actionData = useActionData();
  const transition = useTransition();
  const [toast, setToast] = (0, import_react2.useState)(null);
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      setToast({ type: "error", message: actionData.error });
      setTimeout(() => setToast(null), 3e3);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative", children: [
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: `fixed top-4 right-4 px-4 py-2 rounded shadow-lg text-white ${toast.type === "error" ? "bg-red-600" : "bg-green-600"}`,
        children: toast.message
      },
      void 0,
      false,
      {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 74,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold", children: "Login" }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex flex-col gap-2 w-64", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          name: "email",
          type: "email",
          placeholder: "Email",
          required: true,
          className: "border p-2 rounded"
        },
        void 0,
        false,
        {
          fileName: "app/routes/login/index.jsx",
          lineNumber: 86,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "input",
        {
          name: "password",
          type: "password",
          placeholder: "Password",
          required: true,
          className: "border p-2 rounded"
        },
        void 0,
        false,
        {
          fileName: "app/routes/login/index.jsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "bg-blue-600 text-white py-2 rounded",
          disabled: transition.state === "submitting",
          children: transition.state === "submitting" ? "Logging in..." : "Login"
        },
        void 0,
        false,
        {
          fileName: "app/routes/login/index.jsx",
          lineNumber: 100,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 72,
    columnNumber: 5
  }, this);
}

export {
  LoginPage
};
//# sourceMappingURL=/build/_shared/chunk-FJEB2ONO.js.map
