import {
  Settings
} from "/build/_shared/chunk-NNKHU6BE.js";
import {
  Link
} from "/build/_shared/chunk-EFHXRLPW.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/components/AdminLayout.jsx
var import_react4 = __toESM(require_react());

// app/components/AdminPanelLink.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function AdminPanelLink({
  to,
  icon: Icon = Settings,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Link,
    {
      to,
      className: "flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "w-5 h-5 text-gray-300" }, void 0, false, {
          fileName: "app/components/AdminPanelLink.jsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white", children }, void 0, false, {
          fileName: "app/components/AdminPanelLink.jsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/AdminPanelLink.jsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/components/AdminLayout.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function AdminLayout({ children }) {
  const [open, setOpen] = (0, import_react4.useState)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-h-screen flex bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "aside",
      {
        className: `bg-[var(--primary-color)] absolute p-4 top-0 h-full text-white transition-all duration-300 ${open ? "w-64" : "w-64"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/iss_logo.webp", alt: "", width: "50px", className: "logo" }, void 0, false, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 17,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/logout", className: "block px-3 py-2 hover:bg-gray-700", children: "Logout" }, void 0, false, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 19,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 16,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "p-2 space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/admin", className: "block px-3 py-2 hover:bg-gray-700" }, void 0, false, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 33,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Link, { to: "/admin/kitchen", className: "block px-3 py-2 hover:bg-gray-700 sub-menu", children: "Kitchen" }, void 0, false, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminPanelLink, { to: "/admin/settings", children: "Settings " }, void 0, false, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 44,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 32,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      true,
      {
        fileName: "app/components/AdminLayout.jsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("main", { className: "flex-1 p-6 overflow-y-auto max-w-none ml-[16rem] mt-[0]", children }, void 0, false, {
      fileName: "app/components/AdminLayout.jsx",
      lineNumber: 51,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/AdminLayout.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

export {
  AdminLayout
};
//# sourceMappingURL=/build/_shared/chunk-JTWADRKL.js.map
