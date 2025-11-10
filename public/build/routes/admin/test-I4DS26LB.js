import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NGTZRT62.js";
import {
  __toESM
} from "/build/_shared/chunk-RGH7DKGJ.js";

// app/routes/admin/test.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var rows = [
  { id: 1, name: "Data Grid", description: "the Community version" },
  { id: 2, name: "Data Grid Pro", description: "the Pro version" },
  { id: 3, name: "Data Grid Premium", description: "the Premium version" }
];
var columns = [
  { field: "name", headerName: "Product Name", width: 200 },
  { field: "description", headerName: "Description", width: 300 }
];
function RenderComponent() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { height: 300, width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DataGrid, { rows, columns }, void 0, false, {
    fileName: "app/routes/admin/test.jsx",
    lineNumber: 17,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/admin/test.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}
export {
  RenderComponent as default
};
//# sourceMappingURL=/build/routes/admin/test-I4DS26LB.js.map
