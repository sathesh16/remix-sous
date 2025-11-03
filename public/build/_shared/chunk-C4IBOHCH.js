import {
  require_lib
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/components/deleteModel.jsx
var import_react = __toESM(require_react());
var import_react_modal = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DeleteModel(props) {
  const [logoutmodalIsOpen, setLogoutIsOpen] = import_react.default.useState(
    (props == null ? void 0 : props.open) ? true : false
  );
  const customStyles = {
    overlay: {
      zIndex: 12
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };
  const okHandle = () => {
    props == null ? void 0 : props.deleteHandle();
    props == null ? void 0 : props.open(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_modal.default, {
    isOpen: logoutmodalIsOpen,
    onRequestClose: () => props == null ? void 0 : props.open(false),
    style: customStyles,
    contentLabel: "Delete Modal",
    ariaHideApp: false,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "p-10 max-w-[550px]",
      children: [
        !!(props == null ? void 0 : props.note) && (props == null ? void 0 : props.note) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-col text-black",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full",
              children: "Are you sure to delete it?"
            }, void 0, false, {
              fileName: "app/components/deleteModel.jsx",
              lineNumber: 38,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full mt-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "font-bold",
                  children: "Note:"
                }, void 0, false, {
                  fileName: "app/components/deleteModel.jsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "ml-1",
                  children: "Make sure this room is not allocated to any conference data. If it has any conference data associated with this room will also be removed."
                }, void 0, false, {
                  fileName: "app/components/deleteModel.jsx",
                  lineNumber: 41,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/deleteModel.jsx",
              lineNumber: 39,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/deleteModel.jsx",
          lineNumber: 37,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "text-black",
          children: "Are you sure to delete"
        }, void 0, false, {
          fileName: "app/components/deleteModel.jsx",
          lineNumber: 49,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex-row flex mt-10 justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              className: "inline-flex  items-center justify-center h-[40px] text-[18px] rounded border bg-transparent border-primary px-4 py-2 text-sm font-bold text-primary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              onClick: () => props == null ? void 0 : props.open(false),
              children: [
                "Cancel",
                " "
              ]
            }, void 0, true, {
              fileName: "app/components/deleteModel.jsx",
              lineNumber: 53,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              type: "submit",
              onClick: () => okHandle(),
              className: "inline-flex  items-center justify-center h-[40px] text-[18px] rounded border bg-primary border-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              children: [
                "Ok",
                " "
              ]
            }, void 0, true, {
              fileName: "app/components/deleteModel.jsx",
              lineNumber: 60,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/deleteModel.jsx",
          lineNumber: 52,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/deleteModel.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/components/deleteModel.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

export {
  DeleteModel
};
//# sourceMappingURL=/build/_shared/chunk-C4IBOHCH.js.map
