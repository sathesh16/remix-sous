import {
  Form,
  __toESM,
  require_jsx_dev_runtime,
  useLoaderData
} from "/build/_shared/chunk-WO46FJ2D.js";

// app/routes/dashboard/index.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Dashboard() {
  const { user } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: [
      "Welcome, ",
      user.email || "User",
      " \u{1F44B}"
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-red-500 text-white px-3 py-1 rounded mt-4", children: "Logout" }, void 0, false, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/index.jsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard/index-QPFPO6NO.js.map
