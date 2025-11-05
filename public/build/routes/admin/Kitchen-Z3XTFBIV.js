import {
  AdminLayout
} from "/build/_shared/chunk-JQAXFAEU.js";
import {
  API_BASE_URL
} from "/build/_shared/chunk-37D2R22D.js";
import "/build/_shared/chunk-NNKHU6BE.js";
import "/build/_shared/chunk-TOP7EFOP.js";
import "/build/_shared/chunk-AR2N75KP.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-EETRBLDB.js";

// app/routes/admin/Kitchen.jsx
var import_react2 = __toESM(require_react());

// app/components/ProductGrid.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductsTable() {
  const [categories, setCategories] = (0, import_react.useState)([]);
  const [products, setProducts] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    async function fetchData() {
      try {
        const [catRes, prodRes] = await Promise.all([
          fetch(`${API_BASE_URL}/items/Products`).then((res) => res.json()),
          fetch(`${API_BASE_URL}/items/Product_list`).then((res) => res.json())
        ]);
        setCategories(catRes.data || []);
        setProducts(prodRes.data || []);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, []);
  const [sortBy, setSortBy] = (0, import_react.useState)(null);
  const [sortDirection, setSortDirection] = (0, import_react.useState)("asc");
  function handleSort(field) {
    const newDirection = sortBy === field && sortDirection === "asc" ? "desc" : "asc";
    setSortBy(field);
    setSortDirection(newDirection);
    if (field === "category") {
      setCategories(
        (prev) => [...prev].sort((a, b) => {
          const res = a.name.localeCompare(b.name);
          return newDirection === "asc" ? res : -res;
        })
      );
    }
  }
  const sortedCategories = categories;
  function sortedProducts(category) {
    const list = products.filter((p) => category.product_list.includes(p.id));
    return sortBy === "name" ? [...list].sort((a, b) => {
      const res = a.name.localeCompare(b.name);
      return sortDirection === "asc" ? res : -res;
    }) : list;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-6 bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-6", children: "Products Overview" }, void 0, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 66,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden border border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "min-w-full border-collapse text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { className: "bg-gray-900 text-white font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "th",
          {
            className: "p-3 border border-gray-300 text-left",
            onClick: () => handleSort("category"),
            children: [
              "Category",
              " ",
              sortBy === "category" && (sortDirection === "asc" ? "\u2191" : "\u2193")
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 73,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "th",
          {
            onClick: () => handleSort("name"),
            className: "p-3 border border-gray-300 text-left",
            children: [
              "Product Name",
              " ",
              sortBy === "name" && (sortDirection === "asc" ? "\u2191" : "\u2193")
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 80,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Description" }, void 0, false, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 87,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Price" }, void 0, false, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 88,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Display Screen 1" }, void 0, false, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 89,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Display Screen 2" }, void 0, false, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 90,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 72,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 71,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: sortedCategories.map((category) => {
        const categoryProducts = sortedProducts(category);
        return categoryProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b hover:bg-gray-50", children: [
          index === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
              lineNumber: 103,
              columnNumber: 41
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3 font-medium", children: product.name }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 111,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: product.description?.length > 150 ? product.description.slice(0, 150) + "..." : product.description }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 113,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3 font-medium", children: product.price ?? "\u2014" }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 119,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, { apiOn: product.display_on_screen_1 }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 124,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 123,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Toggle, { apiOn: product.display_on_screen_2 }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 128,
            columnNumber: 41
          }, this) }, void 0, false, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 127,
            columnNumber: 37
          }, this)
        ] }, product.id, true, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 100,
          columnNumber: 33
        }, this));
      }) }, void 0, false, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 95,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 69,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 68,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 65,
    columnNumber: 9
  }, this);
}
function Toggle({ apiOn = false }) {
  const [on, setOn] = (0, import_react.useState)(apiOn);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "button",
    {
      onClick: () => setOn(!on),
      className: `w-12 h-6 rounded-full flex items-center transition-all duration-200 ${on ? "bg-blue-600" : "bg-gray-300"}`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: `w-5 h-5 bg-white rounded-full shadow transform transition-all duration-200 ${on ? "translate-x-6" : "translate-x-1"}`
        },
        void 0,
        false,
        {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 148,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    false,
    {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 143,
      columnNumber: 9
    },
    this
  );
}

// app/routes/admin/Kitchen.jsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Kitchen() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-2xl font-semibold mb-4 text-black", children: "User Management" }, void 0, false, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 14,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Tabs, { "aria-label": "Tabs with underline", variant: "pills", color: "purple", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabItem, { active: true, title: "Cafe", className: "bg-[var(--primary-color)] !text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ProductsTable, {}, void 0, false, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 21,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 20,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(TabItem, { title: "Food Waste", className: "bg-[var(--primary-color)] text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: "Dashboard tab content" }, void 0, false, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 25,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 24,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 19,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/Kitchen.jsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/admin/Kitchen.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
var Kitchen_default = Kitchen;
export {
  Kitchen_default as default
};
//# sourceMappingURL=/build/routes/admin/Kitchen-Z3XTFBIV.js.map
