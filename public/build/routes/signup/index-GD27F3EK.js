import {
  Input_default,
  PasswordInput_default
} from "/build/_shared/chunk-IW4PJBV3.js";
import {
  Button
} from "/build/_shared/chunk-TOP7EFOP.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-TTVFAFS7.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/signup/index.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SignUp() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "SignUp",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 86,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 84,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "name", name: "first-name", required: true, placeholder: "Enter your first name" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 91,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "name", name: "last-name", required: true, placeholder: "Enter your last name" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 93,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "email", required: true, name: "email", placeholder: "Email" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 95,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: "Upload your image" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 97,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input_default, { type: "file", name: "avatar", required: true, accept: "image/*" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 99,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", required: true, name: "password" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 101,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PasswordInput_default, { placeholder: "Confirm password", required: true, name: "confirm-password" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 103,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", children: "Sign up" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 105,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 89,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup/index.jsx",
    lineNumber: 82,
    columnNumber: 9
  }, this);
}
var signup_default = SignUp;
export {
  signup_default as default
};
//# sourceMappingURL=/build/routes/signup/index-GD27F3EK.js.map
