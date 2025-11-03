import {
  Form,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-TTVFAFS7.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

// empty-module:../../sessions.server
var require_sessions = __commonJS({
  "empty-module:../../sessions.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/dashboard/index.jsx
var import_sessions = __toESM(require_sessions());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Dashboard() {
  const { user } = useLoaderData();
  const action = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold", children: [
      "Welcome, ",
      user.email || "User",
      " \u{1F44B}"
    ] }, void 0, true, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 18,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-red-500 text-white px-3 py-1 rounded mt-4", children: "Logout" }, void 0, false, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 21,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/index.jsx",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard/index-O7BV2Y6X.js.map
