import {
  Eye,
  EyeOff
} from "/build/_shared/chunk-AVTA3SMB.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-L7QJ2AIG.js";
import {
  __toESM,
  require_react
} from "/build/_shared/chunk-EF4SK2WZ.js";

// app/components/Input.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Input({ children, type = "text", className = "", ...props }) {
  const baseStyles = "w-full pr-10 pl-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";
  const styles = `${baseStyles} ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type, className: styles, ...props }, void 0, false, {
    fileName: "app/components/Input.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var Input_default = Input;

// app/components/PasswordInput.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function PasswordInput({ ...props }) {
  const [showPassword, setShowPassword] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      Input_default,
      {
        type: showPassword ? "text" : "password",
        ...props
      },
      void 0,
      false,
      {
        fileName: "app/components/PasswordInput.jsx",
        lineNumber: 9,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute inset-y-0 right-2 flex items-center text-gray-500",
        children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(EyeOff, { size: 20 }, void 0, false, {
          fileName: "app/components/PasswordInput.jsx",
          lineNumber: 18,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Eye, { size: 20 }, void 0, false, {
          fileName: "app/components/PasswordInput.jsx",
          lineNumber: 18,
          columnNumber: 56
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/PasswordInput.jsx",
        lineNumber: 13,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/PasswordInput.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var PasswordInput_default = PasswordInput;

export {
  Input_default,
  PasswordInput_default
};
//# sourceMappingURL=/build/_shared/chunk-RV4VTXBV.js.map
