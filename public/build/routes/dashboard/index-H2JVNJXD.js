import {
  require_sessions
} from "/build/_shared/chunk-ZEWRAVBQ.js";
import {
  Form,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-TTVFAFS7.js";
import {
  Button
} from "/build/_shared/chunk-TOP7EFOP.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-EETRBLDB.js";

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
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/logout", reloadDocument: true, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", variant: "danger", children: "Logout" }, void 0, false, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 22,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/dashboard/index.jsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}
export {
  Dashboard as default
};
//# sourceMappingURL=/build/routes/dashboard/index-H2JVNJXD.js.map
