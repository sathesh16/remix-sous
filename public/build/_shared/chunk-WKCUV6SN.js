import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

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

export {
  Input_default
};
//# sourceMappingURL=/build/_shared/chunk-WKCUV6SN.js.map
