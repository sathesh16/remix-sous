import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-3MN2X4JC.js";
import {
  __toESM
} from "/build/_shared/chunk-L572RSQW.js";

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

export {
  Button
};
//# sourceMappingURL=/build/_shared/chunk-KDSGW5EK.js.map
