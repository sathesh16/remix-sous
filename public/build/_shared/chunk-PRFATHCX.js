import {
  Toast
} from "/build/_shared/chunk-YG2SNN7E.js";
import {
  API_BASE_URL
} from "/build/_shared/chunk-37D2R22D.js";
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

// app/components/ProductGrid.jsx
var import_react6 = __toESM(require_react());

// app/components/Toggle.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Toggle({ apiOn = false, onToggle }) {
  const [on, setOn] = (0, import_react.useState)(apiOn);
  const handleClick = () => {
    setOn(!on);
    if (onToggle)
      onToggle(!on);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "button",
    {
      onClick: handleClick,
      className: `w-20 h-8 rounded-full flex items-center px-1 relative transition-all duration-200 ${on ? "bg-[var(--primary-color)]" : "bg-gray-300"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "span",
          {
            className: `absolute left-2 text-sm font-medium transition-all duration-200 ${on ? "text-white" : "text-gray-500"}`,
            children: "On"
          },
          void 0,
          false,
          {
            fileName: "app/components/Toggle.jsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "span",
          {
            className: `absolute right-2 text-sm font-medium transition-all duration-200 ${!on ? "text-gray-600" : "text-[transparent]"}`,
            children: "Off"
          },
          void 0,
          false,
          {
            fileName: "app/components/Toggle.jsx",
            lineNumber: 23,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: `w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-200 ${on ? "translate-x-12" : "translate-x-0"}`
          },
          void 0,
          false,
          {
            fileName: "app/components/Toggle.jsx",
            lineNumber: 31,
            columnNumber: 13
          },
          this
        )
      ]
    },
    void 0,
    true,
    {
      fileName: "app/components/Toggle.jsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  );
}
var Toggle_default = Toggle;

// app/components/PreviewModal.jsx
var import_react4 = __toESM(require_react());

// app/components/CopyLinkButton.jsx
var import_react3 = __toESM(require_react());

// app/hooks/useClipboard.js
var import_react2 = __toESM(require_react());
var DEFAULT_RESET_DELAY = 2e3;
function useClipboard({ resetDelay = DEFAULT_RESET_DELAY } = {}) {
  const [status, setStatus] = (0, import_react2.useState)("idle");
  const [error, setError] = (0, import_react2.useState)(null);
  const reset = (0, import_react2.useCallback)(() => {
    setStatus("idle");
    setError(null);
  }, []);
  const copy = (0, import_react2.useCallback)(
    async (text) => {
      if (!text)
        return;
      try {
        await navigator.clipboard.writeText(text);
        setStatus("success");
        setError(null);
      } catch (err) {
        console.error("Failed to copy text:", err);
        setStatus("error");
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        if (resetDelay > 0) {
          window.setTimeout(reset, resetDelay);
        }
      }
    },
    [reset, resetDelay]
  );
  return {
    copy,
    status,
    error,
    reset,
    isSuccess: status === "success",
    isError: status === "error"
  };
}
var useClipboard_default = useClipboard;

// app/utils/url.js
function buildAbsoluteUrl(relativePath, baseUrl) {
  if (!relativePath) {
    throw new Error("relativePath is required to build an absolute URL");
  }
  if (!baseUrl) {
    throw new Error("baseUrl is required to build an absolute URL");
  }
  return new URL(relativePath, baseUrl).href;
}

// app/components/CopyLinkButton.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function CopyLinkButton({ screenNumber }) {
  const clipboard = useClipboard_default({ resetDelay: 2e3 });
  const linkToCopy = (0, import_react3.useMemo)(() => {
    const { origin } = window.location;
    return buildAbsoluteUrl(`/banner/product/1/${screenNumber}`, origin);
  }, [screenNumber]);
  const label = clipboard.status === "success" ? "Copied!" : clipboard.status === "error" ? "Failed to copy" : "Copy Link";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "button",
    {
      onClick: () => clipboard.copy(linkToCopy),
      className: "bg-[var(--banner-text-color)] text-[var(--banner-bg-color)] text-sm p-2",
      disabled: clipboard.status === "success",
      children: label
    },
    void 0,
    false,
    {
      fileName: "app/components/CopyLinkButton.jsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  );
}
var CopyLinkButton_default = CopyLinkButton;

// app/components/PreviewModal.jsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function PreviewModal({ open, onClose, data, screen, setScreen, screenNumber }) {
  if (!open)
    return null;
  const hasError = data.some((item) => item.error);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "div",
    {
      className: "fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 regular-text",
      onClick: onClose,
      onKeyDown: (e) => {
        if (e.key === "Escape")
          onClose();
      },
      tabIndex: 0,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "div",
        {
          className: "w-[1080px] p-8 max-h-[80vh] min-h-[70vh] overflow-y-auto svg-bg bg-[var(--banner-bg-color)]",
          onClick: (e) => e.stopPropagation(),
          children: [
            hasError ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, {}, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 23,
              columnNumber: 33
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-wrapper p-6 pt-12 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-3 mt-6 justify-end", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setScreen("screen1") }, void 0, false, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 26,
                  columnNumber: 33
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => setScreen("screen2"), children: "next" }, void 0, false, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 27,
                  columnNumber: 33
                }, this)
              ] }, void 0, true, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 25,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { className: "text-4xl bold-text mb-2", children: "THE BRICK" }, void 0, false, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 29,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h6", { className: "text-2xl regular-text mb-6", children: "Lounge & Bar" }, void 0, false, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 33,
                columnNumber: 29
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "columns-2 gap-x-10 w-full", children: data.map(({ category, products }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "category mb-6 break-inside-avoid", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "bold-text text-lg pb-1 mb-2", children: category }, void 0, false, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 38,
                  columnNumber: 41
                }, this),
                products.map((prod) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between items-center py-1", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: prod.name }, void 0, false, {
                    fileName: "app/components/PreviewModal.jsx",
                    lineNumber: 42,
                    columnNumber: 49
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: prod.price }, void 0, false, {
                    fileName: "app/components/PreviewModal.jsx",
                    lineNumber: 43,
                    columnNumber: 49
                  }, this)
                ] }, prod.id, true, {
                  fileName: "app/components/PreviewModal.jsx",
                  lineNumber: 41,
                  columnNumber: 45
                }, this))
              ] }, category, true, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 37,
                columnNumber: 37
              }, this)) }, void 0, false, {
                fileName: "app/components/PreviewModal.jsx",
                lineNumber: 35,
                columnNumber: 29
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 24,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 23,
              columnNumber: 43
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "menu-wrapper p-6 pt-32 text-[var(--banner-text-color)] rounded-tr-[50px] rounded-br-[50px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-center mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(CopyLinkButton_default, { screenNumber }, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 78,
              columnNumber: 25
            }, this) }, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 77,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/components/PreviewModal.jsx",
              lineNumber: 52,
              columnNumber: 17
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "app/components/PreviewModal.jsx",
          lineNumber: 19,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/PreviewModal.jsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/hooks/useProductsTable.js
var import_react5 = __toESM(require_react());

// app/lib/products.js
async function fetchCategoriesAndProducts() {
  const [categoriesResponse, productsResponse] = await Promise.all([
    fetch(`${API_BASE_URL}/items/Products`),
    fetch(`${API_BASE_URL}/items/Product_list`)
  ]);
  if (!categoriesResponse.ok || !productsResponse.ok) {
    throw new Error("Failed to fetch product data.");
  }
  const [categories, products] = await Promise.all([
    categoriesResponse.json(),
    productsResponse.json()
  ]);
  const categoriesData = (categories.data || []).slice().sort(
    (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
  );
  const productsData = (products.data || []).slice().sort(
    (a, b) => (a.sequence ?? 9999) - (b.sequence ?? 9999)
  );
  return {
    categories: categoriesData,
    products: productsData
  };
}
async function patchProducts(payload) {
  const response = await fetch(`${API_BASE_URL}/items/Product_list`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Failed to save products.");
  }
  return response.json();
}

// app/utils/preview.js
function buildPreviewData(categories = [], products = [], screen = "screen1") {
  if (!Array.isArray(categories) || !Array.isArray(products)) {
    return [
      {
        error: true,
        message: "Invalid data supplied.",
        category: null,
        products: []
      }
    ];
  }
  const screenKey = screen === "screen2" ? "display_on_screen_2" : "display_on_screen_1";
  const filtered = categories.map((category) => {
    const categoryProductIds = new Set(category?.product_list || []);
    const filteredProducts = products.filter(
      (product) => categoryProductIds.has(product.id) && Boolean(product?.[screenKey])
    );
    if (filteredProducts.length === 0) {
      return null;
    }
    return {
      category: category.name,
      products: filteredProducts
    };
  }).filter(Boolean);
  if (filtered.length === 0) {
    return [
      {
        error: true,
        message: "No products found for this screen.",
        category: null,
        products: []
      }
    ];
  }
  return filtered;
}

// app/hooks/useProductsTable.js
function useProductsTable() {
  const [categories, setCategories] = (0, import_react5.useState)([]);
  const [products, setProducts] = (0, import_react5.useState)([]);
  const [updates, setUpdates] = (0, import_react5.useState)({});
  const [toast, setToast] = (0, import_react5.useState)(null);
  const [loading, setLoading] = (0, import_react5.useState)(false);
  const [error, setError] = (0, import_react5.useState)(null);
  const [isSaving, setIsSaving] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    let isMounted = true;
    async function loadData() {
      setLoading(true);
      try {
        const data = await fetchCategoriesAndProducts();
        if (!isMounted)
          return;
        setCategories(data.categories);
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, []);
  const showToast = (0, import_react5.useCallback)((message, type = "success") => {
    setToast({ message, type });
  }, []);
  const dismissToast = (0, import_react5.useCallback)(() => setToast(null), []);
  const handleProductUpdate = (0, import_react5.useCallback)((productId, updatedFields) => {
    setProducts(
      (prev) => prev.map(
        (product) => product.id === productId ? { ...product, ...updatedFields } : product
      )
    );
    setUpdates((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId] || {},
        ...updatedFields
      }
    }));
  }, []);
  const saveAllUpdates = (0, import_react5.useCallback)(async () => {
    const payload = Object.entries(updates).map(([id, data]) => ({
      id,
      ...data
    }));
    if (payload.length === 0) {
      showToast("Kindly change any value to update", "warning");
      return;
    }
    setIsSaving(true);
    try {
      await patchProducts(payload);
      showToast("\u2705 Changes saved successfully!");
      setUpdates({});
    } catch (err) {
      console.error("Failed to save products:", err);
      showToast("\u274C Failed to save changes.", "error");
    } finally {
      setIsSaving(false);
    }
  }, [showToast, updates]);
  const getProductsForCategory = (0, import_react5.useCallback)(
    (category) => {
      if (!category)
        return [];
      const productIds = new Set(category.product_list || []);
      return products.filter((product) => productIds.has(product.id));
    },
    [products]
  );
  const previewDataForScreen = (0, import_react5.useCallback)(
    (screen) => buildPreviewData(categories, products, screen),
    [categories, products]
  );
  const hasPendingUpdates = (0, import_react5.useMemo)(() => Object.keys(updates).length > 0, [updates]);
  return {
    categories,
    products,
    getProductsForCategory,
    handleProductUpdate,
    saveAllUpdates,
    toast,
    showToast,
    dismissToast,
    loading,
    error,
    isSaving,
    hasPendingUpdates,
    previewDataForScreen
  };
}
var useProductsTable_default = useProductsTable;

// app/components/ProductGrid.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function ProductsTable() {
  const {
    categories,
    getProductsForCategory,
    handleProductUpdate,
    saveAllUpdates,
    toast,
    dismissToast,
    loading,
    error,
    isSaving,
    previewDataForScreen
  } = useProductsTable_default();
  const [showPreviewModal, setShowPreviewModal] = (0, import_react6.useState)(false);
  const [previewScreen, setPreviewScreen] = (0, import_react6.useState)("screen1");
  const previewData = (0, import_react6.useMemo)(
    () => previewDataForScreen(previewScreen),
    [previewDataForScreen, previewScreen]
  );
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-6", children: "Loading products\u2026" }, void 0, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 31,
      columnNumber: 16
    }, this);
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-6 text-red-600", children: error }, void 0, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 35,
      columnNumber: 16
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-6 bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-end items-center mb-6 pos-top", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mr-4", children: "Remember to update before leaving" }, void 0, false, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 41,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Button, { onClick: saveAllUpdates, variant: "primary", disabled: isSaving, children: isSaving ? "Saving..." : "Update" }, void 0, false, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 40,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-end items-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      Button,
      {
        variant: "secondary",
        onClick: () => {
          setPreviewScreen("screen1");
          setShowPreviewModal(true);
        },
        children: "Preview"
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 48,
        columnNumber: 17
      },
      this
    ) }, void 0, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden border border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("table", { className: "min-w-full border-collapse text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("thead", { className: "bg-gray-900 text-white font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "th",
          {
            className: "p-3 border border-gray-300 text-left",
            children: [
              "Category",
              " "
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 64,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "th",
          {
            className: "p-3 border border-gray-300 text-left",
            children: [
              "Product Name",
              " "
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 69,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Description" }, void 0, false, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 75,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Price" }, void 0, false, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 76,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Display Screen 1" }, void 0, false, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 77,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Display Screen 2" }, void 0, false, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 78,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 63,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 62,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: categories.map((category) => {
        const categoryProducts = getProductsForCategory(category);
        return categoryProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { className: "border-b hover:bg-gray-50", children: [
          index === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "td",
            {
              rowSpan: categoryProducts.length,
              className: "font-semibold text-gray-900 border-r p-3 align-top",
              children: category.name
            },
            void 0,
            false,
            {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 92,
              columnNumber: 41
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-3 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-y-4 w-[300px] h-[150px] justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "textarea",
              {
                value: product.name || "",
                maxLength: 250,
                onChange: (e) => handleProductUpdate(product.id, {
                  name: e.target.value
                }),
                className: "w-full border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar h-[100px]"
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 103,
                columnNumber: 45
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-gray-600", children: [
              "Upto ",
              product.name?.length || 0,
              " / 250 characters"
            ] }, void 0, true, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 113,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 102,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 101,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-y-4 w-[300px] h-[150px] justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "textarea",
              {
                value: product.description || "",
                maxLength: 250,
                onChange: (e) => handleProductUpdate(product.id, {
                  description: e.target.value
                }),
                className: "w-full border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 no-scrollbar h-[100px]"
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 120,
                columnNumber: 45
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-gray-600", children: [
              "Upto ",
              product.description?.length || 0,
              " /     250 characters"
            ] }, void 0, true, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 130,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 119,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 118,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-3 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                type: "text",
                value: product.price ?? "",
                onChange: (e) => {
                  const cleaned = e.target.value.replace(/[^0-9,\-]/g, "");
                  handleProductUpdate(product.id, { price: cleaned });
                },
                className: "w-24 border-none px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
              },
              void 0,
              false,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 138,
                columnNumber: 45
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-gray-600", children: 'Only numbers, "," and "-" are allowed' }, void 0, false, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 147,
              columnNumber: 45
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 137,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 136,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Toggle_default,
            {
              apiOn: product.display_on_screen_1,
              onToggle: (newVal) => handleProductUpdate(product.id, { display_on_screen_1: newVal })
            },
            void 0,
            false,
            {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 153,
              columnNumber: 41
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 152,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            Toggle_default,
            {
              apiOn: product.display_on_screen_2,
              onToggle: (newVal) => handleProductUpdate(product.id, { display_on_screen_2: newVal })
            },
            void 0,
            false,
            {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 163,
              columnNumber: 41
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 162,
            columnNumber: 37
          }, this)
        ] }, product.id, true, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 88,
          columnNumber: 33
        }, this));
      }) }, void 0, false, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 83,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 60,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: dismissToast
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 178,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      PreviewModal,
      {
        open: showPreviewModal,
        onClose: () => setShowPreviewModal(false),
        data: previewData,
        screen: previewScreen,
        setScreen: setPreviewScreen,
        screenNumber: previewScreen === "screen1" ? 1 : 2
      },
      void 0,
      false,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 193,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

export {
  ProductsTable
};
//# sourceMappingURL=/build/_shared/chunk-PRFATHCX.js.map
