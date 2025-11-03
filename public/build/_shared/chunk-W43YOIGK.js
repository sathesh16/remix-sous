import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useActionData,
  useNavigationType
} from "/build/_shared/chunk-DBVC3FYL.js";

// empty-module:../../sessions.server
var require_sessions = __commonJS({
  "empty-module:../../sessions.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/login/index.jsx
var import_react = __toESM(require_react());
var import_sessions = __toESM(require_sessions());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Login() {
  const data = useActionData();
  const navigation = useNavigationType();
  useEffec(() => {
    if (data?.error) {
      const toast = document.getElementById("toast");
      toast.textContent = data.error;
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 3e3);
    }
  }, [data]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full items-center justify-center max-w-[600px] mx-auto p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center gap-6 w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/sous-chef.svg", alt: "sous-logo", width: "100px" }, void 0, false, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 58,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between items-center gap-x-4 w-full", children: [
      "Login Account",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/iss_logo.webp", alt: "iss-logo", width: "60px" }, void 0, false, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 61,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 59,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 57,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 56,
    columnNumber: 9
  }, this);
}
var login_default = Login;

export {
  login_default
};
//# sourceMappingURL=/build/_shared/chunk-W43YOIGK.js.map
