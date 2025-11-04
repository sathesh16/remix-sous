import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-VIPVJV6J.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

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

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var import_react3 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/shared/src/utils.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
var toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
var hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};

// node_modules/lucide-react/dist/esm/Icon.js
var import_react2 = __toESM(require_react());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/Icon.js
var Icon = (0, import_react2.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0, import_react2.createElement)(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0, import_react2.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);

// node_modules/lucide-react/dist/esm/createLucideIcon.js
var createLucideIcon = (iconName, iconNode) => {
  const Component = (0, import_react3.forwardRef)(
    ({ className, ...props }, ref) => (0, import_react3.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/eye-off.js
var __iconNode = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
var EyeOff = createLucideIcon("eye-off", __iconNode);

// node_modules/lucide-react/dist/esm/icons/eye.js
var __iconNode2 = [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
var Eye = createLucideIcon("eye", __iconNode2);

// app/components/PasswordInput.jsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function PasswordInput({ ...props }) {
  const [showPassword, setShowPassword] = (0, import_react4.useState)(false);
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
//# sourceMappingURL=/build/_shared/chunk-4TRI46JR.js.map
