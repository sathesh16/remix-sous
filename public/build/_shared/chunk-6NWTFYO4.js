import {
  Button
} from "/build/_shared/chunk-TOP7EFOP.js";
import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-TTVFAFS7.js";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "Login",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
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
          lineNumber: 81,
          columnNumber: 17
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
          lineNumber: 88,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Forgot Password?" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 95,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 95,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: transition.state === "submitting", children: transition.state === "submitting" ? "Logging in..." : "Login" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 104,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 80,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 73,
    columnNumber: 9
  }, this);
}

export {
  LoginPage
};
//# sourceMappingURL=/build/_shared/chunk-6NWTFYO4.js.map
