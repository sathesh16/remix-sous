import {
  Input_default
} from "/build/_shared/chunk-WKCUV6SN.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/signup/index.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SignUp() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "SignUp",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 11,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "email", required: true, name: "email", placeholder: "Email" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 18,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Input_default,
          {
            type: showPassword ? "text" : "password",
            placeholder: "Enter password",
            name: "password"
          },
          void 0,
          false,
          {
            fileName: "app/routes/signup/index.jsx",
            lineNumber: 21,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "button",
          {
            type: "button",
            onClick: () => setShowPassword(!showPassword),
            className: "absolute inset-y-0 right-2 flex items-center text-gray-500",
            children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { size: 20 }, void 0, false, {
              fileName: "app/routes/signup/index.jsx",
              lineNumber: 30,
              columnNumber: 41
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { size: 20 }, void 0, false, {
              fileName: "app/routes/signup/index.jsx",
              lineNumber: 30,
              columnNumber: 64
            }, this)
          },
          void 0,
          false,
          {
            fileName: "app/routes/signup/index.jsx",
            lineNumber: 25,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, true, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 20,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "#", children: "Forgot Password?" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 34,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", disabled: transition.state === "submitting", children: transition.state === "submitting" ? "Logging in..." : "Login" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 14,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup/index.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
var signup_default = SignUp;
export {
  signup_default as default
};
//# sourceMappingURL=/build/routes/signup/index-YJSLRG7F.js.map
