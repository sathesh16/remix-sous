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

// app/components/Button.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  const baseStyles = "px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring transition";
  const variants = {
    primary: "bg-[#000022] text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
  };
  const styles = `${baseStyles} ${variants[variant]} ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type, className: styles, ...props, children }, void 0, false, {
    fileName: "app/components/Button.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/routes/login/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function LoginPage() {
  const actionData = useActionData();
  const transition = useTransition();
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      setToast({ type: "error", message: actionData.error });
      setTimeout(() => setToast(null), 3e3);
    }
  }, [actionData]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[600px]", children: [
      "Login",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 77,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 75,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "bg-[#000022] text-white py-2 rounded",
          disabled: transition.state === "submitting",
          children: transition.state === "submitting" ? "Logging in..." : "Login"
        },
        void 0,
        false,
        {
          fileName: "app/routes/login/index.jsx",
          lineNumber: 95,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", children: transition.state === "submitting" ? "Logging in..." : "Login" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 103,
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
//# sourceMappingURL=/build/_shared/chunk-H5U24AEU.js.map
