import {
  Input_default,
  PasswordInput_default
} from "/build/_shared/chunk-4PIHMYDQ.js";
import "/build/_shared/chunk-37D2R22D.js";
import "/build/_shared/chunk-D4W5BBVL.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-X2TMM4AH.js";
import {
  Button
} from "/build/_shared/chunk-KT7AXR6T.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-NGTZRT62.js";
import {
  __toESM,
  require_react
} from "/build/_shared/chunk-RGH7DKGJ.js";

// app/routes/signup/index.jsx
var import_react2 = __toESM(require_react());

// app/hooks/useImageUpload.js
var import_react = __toESM(require_react());
var DEFAULT_MAX_SIZE = 2 * 1024 * 1024;
function useImageUpload({ maxSize = DEFAULT_MAX_SIZE } = {}) {
  const [images, setImages] = (0, import_react.useState)([]);
  const [error, setError] = (0, import_react.useState)("");
  const [isDragging, setIsDragging] = (0, import_react.useState)(false);
  const resetError = (0, import_react.useCallback)(() => setError(""), []);
  const addFiles = (0, import_react.useCallback)(
    (fileList) => {
      if (!fileList || fileList.length === 0)
        return;
      const files = Array.from(fileList);
      const validFiles = [];
      const rejectedMessages = [];
      files.forEach((file) => {
        if (file.size > maxSize) {
          rejectedMessages.push(`${file.name} is larger than ${Math.round(maxSize / (1024 * 1024))} MB`);
          return;
        }
        validFiles.push({
          file,
          preview: URL.createObjectURL(file)
        });
      });
      if (rejectedMessages.length > 0) {
        setError(rejectedMessages.join("\n"));
      } else {
        resetError();
      }
      if (validFiles.length > 0) {
        setImages((prev) => [...prev, ...validFiles]);
      }
    },
    [maxSize, resetError]
  );
  const handleInputChange = (0, import_react.useCallback)(
    (event) => {
      addFiles(event.target.files);
      event.target.value = "";
    },
    [addFiles]
  );
  const handleDrop = (0, import_react.useCallback)(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      setIsDragging(false);
      addFiles(event.dataTransfer.files);
    },
    [addFiles]
  );
  const handleDragOver = (0, import_react.useCallback)((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  }, []);
  const handleDragLeave = (0, import_react.useCallback)((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  }, []);
  const removeImage = (0, import_react.useCallback)((index) => {
    setImages((prev) => {
      const next = [...prev];
      const [removed] = next.splice(index, 1);
      if (removed) {
        URL.revokeObjectURL(removed.preview);
      }
      return next;
    });
  }, []);
  (0, import_react.useEffect)(() => {
    return () => {
      images.forEach((img) => URL.revokeObjectURL(img.preview));
    };
  }, [images]);
  return {
    images,
    error,
    isDragging,
    addFiles,
    handleInputChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removeImage,
    resetError
  };
}
var useImageUpload_default = useImageUpload;

// app/components/ImagesUpload.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ImagesUpload({ name = "default-name", maxSize }) {
  const {
    images,
    error,
    isDragging,
    handleInputChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    removeImage
  } = useImageUpload_default({ maxSize });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        style: {
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: isDragging ? "2px dashed red" : "1px solid #000",
          margin: "10px auto",
          maxWidth: "500px"
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600", children: [
          "Drag & Drop your images here or",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "text-blue-600 cursor-pointer underline", children: [
            "click to browse",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "input",
              {
                type: "file",
                name,
                multiple: true,
                accept: ".jpg, .png",
                onChange: handleInputChange,
                className: "hidden"
              },
              void 0,
              false,
              {
                fileName: "app/components/ImagesUpload.jsx",
                lineNumber: 36,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, true, {
            fileName: "app/components/ImagesUpload.jsx",
            lineNumber: 34,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ImagesUpload.jsx",
          lineNumber: 32,
          columnNumber: 17
        }, this)
      },
      void 0,
      false,
      {
        fileName: "app/components/ImagesUpload.jsx",
        lineNumber: 18,
        columnNumber: 13
      },
      this
    ),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 mt-2", children: error }, void 0, false, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 49,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      "div",
      {
        className: "relative",
        style: { display: "flex", gap: "20px", flexDirection: "column" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "img",
            {
              src: img.preview,
              alt: `preview ${index}`,
              style: { width: "100px", height: "100px", objectFit: "cover" }
            },
            void 0,
            false,
            {
              fileName: "app/components/ImagesUpload.jsx",
              lineNumber: 59,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: () => removeImage(index),
              children: "Remove"
            },
            void 0,
            false,
            {
              fileName: "app/components/ImagesUpload.jsx",
              lineNumber: 64,
              columnNumber: 25
            },
            this
          )
        ]
      },
      index,
      true,
      {
        fileName: "app/components/ImagesUpload.jsx",
        lineNumber: 54,
        columnNumber: 21
      },
      this
    )) }, void 0, false, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 52,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ImagesUpload.jsx",
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

// app/routes/signup/index.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SignUp() {
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "SignUp",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 104,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-red-500 text-sm", children: actionData.error }, void 0, false, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 108,
      columnNumber: 17
    }, this),
    actionData?.success && /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-red-500 text-sm", children: "okay" }, void 0, false, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Form, { method: "post", encType: "multipart/form-data", onSubmit: () => console.log("Form submitted"), className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input_default, { type: "name", name: "first-name", required: true, placeholder: "Enter your first name" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input_default, { type: "name", name: "last-name", required: true, placeholder: "Enter your last name" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 119,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Input_default, { type: "email", required: true, name: "email", placeholder: "Email" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: "Upload your image" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 123,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ImagesUpload, { name: "avatar" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 125,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", required: true, name: "password" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 127,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PasswordInput_default, { placeholder: "Confirm password", required: true, name: "confirm-password" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 129,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Button, { type: "submit", children: "Sign up" }, void 0, false, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 131,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 115,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/signup/index.jsx",
    lineNumber: 100,
    columnNumber: 9
  }, this);
}
var signup_default = SignUp;
export {
  signup_default as default
};
//# sourceMappingURL=/build/routes/signup/index-B2DRCMML.js.map
