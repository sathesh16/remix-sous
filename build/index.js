var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.jsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react3 = require("@remix-run/react"), import_node = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-RJMIR2IY.css";

// app/components/Header.jsx
var import_react2 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-full p-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: "/images/sous-chef.svg", alt: "site-logo", width: "100px" }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.jsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}
var Header_default = Header;

// app/styles/style.css
var style_default = "/build/_assets/style-GEOMIYT4.css";

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }, { rel: "stylesheet", href: style_default }], meta = () => ({
  charset: "utf-8",
  title: "My Remix App",
  viewport: "width=device-width, initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { class: "font-dm9pt", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 45,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Something went wrong" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error == null ? void 0 : error.message }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/index.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/sessions.server.js
var import_node2 = require("@remix-run/node"), sessionSecret = process.env.SESSION_SECRET || "supersecret", storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    maxAge: 60 * 60 * 24
  }
});
async function getSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function commitSession(session) {
  return storage.commitSession(session);
}
async function destroySession(session) {
  return storage.destroySession(session);
}
async function requireUserSession(request) {
  let user = (await getSession(request)).get("user");
  if (!user)
    throw (0, import_node2.redirect)("/login");
  return user;
}

// app/components/Button.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) {
  let styles = `px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring transition ${{
    primary: "bg-[#000022] text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300"
  }[variant]} ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type, className: styles, ...props, children }, void 0, !1, {
    fileName: "app/components/Button.jsx",
    lineNumber: 26,
    columnNumber: 9
  }, this);
}

// app/routes/dashboard/index.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
async function loader({ request }) {
  let user = await requireUserSession(request);
  return (0, import_node3.json)({ user });
}
function Dashboard() {
  let { user } = (0, import_react4.useLoaderData)(), action4 = (0, import_react4.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "text-2xl font-bold", children: [
      "Welcome, ",
      user.email || "User",
      " \u{1F44B}"
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 19,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react4.Form, { method: "post", action: "/logout", reloadDocument: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Button, { type: "submit", variant: "danger", children: "Logout" }, void 0, !1, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 22,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard/index.jsx",
      lineNumber: 21,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard/index.jsx",
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

// app/routes/admin/Settings.jsx
var Settings_exports = {};
__export(Settings_exports, {
  default: () => Settings_default
});
var import_react9 = require("react");

// app/components/AdminLayout.jsx
var import_react7 = require("@remix-run/react"), import_react8 = require("react");

// app/components/AdminPanelLink.jsx
var import_react5 = require("@remix-run/react"), import_lucide_react = require("lucide-react"), import_react6 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AdminPanelLink({
  to,
  icon: Icon = import_lucide_react.Settings,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    import_react5.Link,
    {
      to,
      className: "flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-700 transition-colors duration-200",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Icon, { className: "w-5 h-5 text-gray-300" }, void 0, !1, {
          fileName: "app/components/AdminPanelLink.jsx",
          lineNumber: 17,
          columnNumber: 13
        }, this),
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-white", children }, void 0, !1, {
          fileName: "app/components/AdminPanelLink.jsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/AdminPanelLink.jsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  );
}

// app/components/AdminLayout.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function AdminLayout({ children }) {
  let [open, setOpen] = (0, import_react8.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "min-h-screen flex bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "aside",
      {
        className: "bg-[var(--primary-color)] absolute p-4 top-0 h-full text-white transition-all duration-300 w-64",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/images/iss_logo.webp", alt: "iss logo", width: "50px", className: "logo" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 17,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/logout", className: "block px-3 py-2 hover:bg-gray-700", children: "Logout" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 19,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 16,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("nav", { className: "p-2 space-y-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/admin", className: "block px-3 py-2 hover:bg-gray-700" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 33,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react7.Link, { to: "/admin/kitchen", className: "block px-3 py-2 hover:bg-gray-700 sub-menu", children: "Kitchen" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 37,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(AdminPanelLink, { to: "/admin/settings", children: "Settings " }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 44,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 32,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: "/images/sous-chef-white.svg", alt: "sous-chef logo", width: "70px", className: "logo" }, void 0, !1, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 49,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-y-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: "Need support?" }, void 0, !1, {
                fileName: "app/components/AdminLayout.jsx",
                lineNumber: 51,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { href: "#", className: "font-bold", children: "Click here" }, void 0, !1, {
                fileName: "app/components/AdminLayout.jsx",
                lineNumber: 52,
                columnNumber: 25
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/AdminLayout.jsx",
              lineNumber: 50,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/AdminLayout.jsx",
            lineNumber: 48,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/AdminLayout.jsx",
        lineNumber: 11,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "flex-1 p-6 overflow-y-auto max-w-none ml-[16rem] mt-[0]", children }, void 0, !1, {
      fileName: "app/components/AdminLayout.jsx",
      lineNumber: 57,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AdminLayout.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/routes/admin/Settings.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Settings2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "This is setting" }, void 0, !1, {
    fileName: "app/routes/admin/Settings.jsx",
    lineNumber: 7,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/Settings.jsx",
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
var Settings_default = Settings2;

// app/routes/admin/Kitchen.jsx
var Kitchen_exports = {};
__export(Kitchen_exports, {
  default: () => Kitchen_default
});
var import_react15 = require("react");
var import_flowbite_react = require("flowbite-react");

// app/utils/constants.js
var API_BASE_URL = "http://192.168.1.51:8056";

// app/components/ProductGrid.jsx
var import_react13 = require("react");

// app/components/Toggle.jsx
var import_react10 = require("react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Toggle({ apiOn = !1, onToggle }) {
  let [on, setOn] = (0, import_react10.useState)(apiOn);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "button",
    {
      onClick: () => {
        setOn(!on), onToggle && onToggle(!on);
      },
      className: `w-20 h-8 rounded-full flex items-center px-1 relative transition-all duration-200 ${on ? "bg-[var(--primary-color)]" : "bg-gray-300"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "span",
          {
            className: `absolute left-2 text-sm font-medium transition-all duration-200 ${on ? "text-white" : "text-gray-500"}`,
            children: "On"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Toggle.jsx",
            lineNumber: 17,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "span",
          {
            className: `absolute right-2 text-sm font-medium transition-all duration-200 ${on ? "text-[transparent]" : "text-gray-600"}`,
            children: "Off"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Toggle.jsx",
            lineNumber: 23,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "div",
          {
            className: `w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-200 ${on ? "translate-x-12" : "translate-x-0"}`
          },
          void 0,
          !1,
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
    !0,
    {
      fileName: "app/components/Toggle.jsx",
      lineNumber: 11,
      columnNumber: 9
    },
    this
  );
}
var Toggle_default = Toggle;

// app/components/Toast.jsx
var import_react11 = require("react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Toast({ message, type = "success", onClose }) {
  return (0, import_react11.useEffect)(() => {
    let timer = setTimeout(onClose, 3e3);
    return () => clearTimeout(timer);
  }, [onClose]), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: `
      fixed top-4 right-4 px-4 py-3 rounded shadow-lg text-white text-sm animate-fade-in
      ${type === "success" ? "bg-green-600" : type === "warning" ? "bg-orange-500" : "bg-red-600"}

    `, children: message }, void 0, !1, {
    fileName: "app/components/Toast.jsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// app/components/ConfirmDialog.jsx
var import_react12 = require("react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function ConfirmDialog({ open, title, message, onCancel, onConfirm, confirmLabel = "Confirm", cancelLabel = "Cancel" }) {
  return open ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "fixed inset-0 bg-black/40 flex justify-center items-center z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "bg-white rounded-lg shadow-lg p-6 w-[350px] space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "text-lg font-semibold text-gray-900", children: title }, void 0, !1, {
      fileName: "app/components/ConfirmDialog.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "text-gray-700", children: message }, void 0, !1, {
      fileName: "app/components/ConfirmDialog.jsx",
      lineNumber: 10,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex justify-end gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "button",
        {
          className: "px-3 py-1 bg-gray-300 rounded hover:bg-gray-400",
          onClick: onCancel,
          children: cancelLabel
        },
        void 0,
        !1,
        {
          fileName: "app/components/ConfirmDialog.jsx",
          lineNumber: 13,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "button",
        {
          className: "px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700",
          onClick: onConfirm,
          children: confirmLabel
        },
        void 0,
        !1,
        {
          fileName: "app/components/ConfirmDialog.jsx",
          lineNumber: 20,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/ConfirmDialog.jsx",
      lineNumber: 12,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ConfirmDialog.jsx",
    lineNumber: 8,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/ConfirmDialog.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) : null;
}

// app/components/ProductGrid.jsx
var import_react14 = require("@remix-run/react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ProductsTable() {
  let [showExitDialog, setShowExitDialog] = (0, import_react13.useState)(!1), [nextLocation, setNextLocation] = (0, import_react13.useState)(null), [categories, setCategories] = (0, import_react13.useState)([]), [products, setProducts] = (0, import_react13.useState)([]);
  (0, import_react13.useEffect)(() => {
    async function fetchData() {
      try {
        let [catRes, prodRes] = await Promise.all([
          fetch(`${API_BASE_URL}/items/Products`).then((res) => res.json()),
          fetch(`${API_BASE_URL}/items/Product_list`).then((res) => res.json())
        ]);
        setCategories(catRes.data || []), setProducts(prodRes.data || []);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, []);
  let [sortBy, setSortBy] = (0, import_react13.useState)(null), [sortDirection, setSortDirection] = (0, import_react13.useState)("asc");
  function handleSort(field) {
    let newDirection = sortBy === field && sortDirection === "asc" ? "desc" : "asc";
    setSortBy(field), setSortDirection(newDirection), field === "category" && setCategories(
      (prev) => [...prev].sort((a, b) => {
        let res = a.name.localeCompare(b.name);
        return newDirection === "asc" ? res : -res;
      })
    );
  }
  let sortedCategories = categories;
  function sortedProducts(category) {
    let list = products.filter((p) => category.product_list.includes(p.id));
    return sortBy === "name" ? [...list].sort((a, b) => {
      let res = a.name.localeCompare(b.name);
      return sortDirection === "asc" ? res : -res;
    }) : list;
  }
  let [updates, setUpdates] = (0, import_react13.useState)({}), [toast, setToast] = (0, import_react13.useState)(null), hasUnsavedChanges = Object.keys(updates).length > 0, transition = (0, import_react14.useTransition)(), location = (0, import_react14.useLocation)(), navigate = (0, import_react14.useNavigate)();
  (0, import_react13.useEffect)(() => {
    var _a;
    if (!!hasUnsavedChanges && transition.state === "loading") {
      let nextUrl = (_a = transition.location) == null ? void 0 : _a.pathname;
      nextUrl && nextUrl !== location.pathname && (setShowExitDialog(!0), setNextLocation(nextUrl), navigate(location.pathname, { replace: !0 }));
    }
  }, [transition.state, hasUnsavedChanges]);
  function showToast(message, type = "success") {
    setToast({ message, type });
  }
  function handleProductUpdate(productId, updatedFields) {
    setProducts(
      (prev) => prev.map((p) => p.id === productId ? { ...p, ...updatedFields } : p)
    ), setUpdates((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId] || {},
        ...updatedFields
      }
    }));
  }
  async function saveAllUpdates() {
    let payload = Object.entries(updates).map(([id, data]) => ({
      id,
      ...data
    }));
    if (payload.length === 0) {
      console.log("No changes to save"), showToast("Kindly change any value to update", "warning");
      return;
    }
    console.log("Sending batch update:", payload);
    try {
      let result = await (await fetch(`${API_BASE_URL}/items/Product_list`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })).json();
      console.log("\u2705 Saved Successfully:", result), showToast("\u2705 Changes saved successfully!"), setUpdates({});
    } catch (error) {
      showToast("\u274C Failed to save changes.", "error"), console.error("\u274C Save failed:", error);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "p-6 bg-gray-50 min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex justify-between mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-2xl font-bold ", children: "Products Overview" }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 164,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { onClick: saveAllUpdates, variant: "primary", children: "Update" }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 165,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 163,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex justify-end items-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Button, { variant: "secondary", children: "Preview" }, void 0, !1, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 169,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 168,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "bg-white rounded-lg shadow overflow-hidden border border-gray-300", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("table", { className: "min-w-full border-collapse text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("thead", { className: "bg-gray-900 text-white font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
          !0,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 177,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
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
          !0,
          {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 184,
            columnNumber: 29
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Description" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 191,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Price" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 192,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Display Screen 1" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 193,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("th", { className: "p-3 border border-gray-300 text-left", children: "Display Screen 2" }, void 0, !1, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 194,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 176,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 175,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("tbody", { className: "divide-y divide-gray-200", children: sortedCategories.map((category) => {
        let categoryProducts = sortedProducts(category);
        return categoryProducts.map((product, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("tr", { className: "border-b hover:bg-gray-50", children: [
          index === 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            "td",
            {
              rowSpan: categoryProducts.length,
              className: "font-semibold text-gray-900 border-r p-3 align-top",
              children: category.name
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 208,
              columnNumber: 41
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "p-3 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col gap-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                value: product.name,
                maxLength: 250,
                onChange: (e) => handleProductUpdate(product.id, { name: e.target.value }),
                className: "w-full border-none px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 219,
                columnNumber: 45
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-gray-600", children: "Upto 250 characters" }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 228,
              columnNumber: 45
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 218,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 217,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col gap-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "textarea",
              {
                value: product.description || "",
                maxLength: 250,
                onChange: (e) => handleProductUpdate(product.id, {
                  description: e.target.value
                }),
                className: "w-full border-none px-2 py-1 h-16 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 235,
                columnNumber: 45
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-gray-600", children: "Upto 250 characters" }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 245,
              columnNumber: 45
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 234,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 233,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "p-3 font-medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-col gap-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              "input",
              {
                type: "text",
                value: product.price ?? "",
                onChange: (e) => {
                  let cleaned = e.target.value.replace(/[^0-9,\-]/g, "");
                  handleProductUpdate(product.id, { price: cleaned });
                },
                className: "w-24 border-none px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-blue-500"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProductGrid.jsx",
                lineNumber: 253,
                columnNumber: 45
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "text-gray-600", children: 'Only numbers, "," and "-" are allowed' }, void 0, !1, {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 262,
              columnNumber: 45
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 252,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 251,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            Toggle_default,
            {
              apiOn: product.display_on_screen_1,
              onToggle: (newVal) => handleProductUpdate(product.id, { display_on_screen_1: newVal })
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 268,
              columnNumber: 41
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 267,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("td", { className: "p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
            Toggle_default,
            {
              apiOn: product.display_on_screen_2,
              onToggle: (newVal) => handleProductUpdate(product.id, { display_on_screen_2: newVal })
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProductGrid.jsx",
              lineNumber: 278,
              columnNumber: 41
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/ProductGrid.jsx",
            lineNumber: 277,
            columnNumber: 37
          }, this)
        ] }, product.id, !0, {
          fileName: "app/components/ProductGrid.jsx",
          lineNumber: 204,
          columnNumber: 33
        }, this));
      }) }, void 0, !1, {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 199,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 173,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/components/ProductGrid.jsx",
      lineNumber: 172,
      columnNumber: 13
    }, this),
    toast && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      Toast,
      {
        message: toast.message,
        type: toast.type,
        onClose: () => setToast(null)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 293,
        columnNumber: 17
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      ConfirmDialog,
      {
        open: showExitDialog,
        title: "Unsaved Changes",
        message: "You have unsaved changes. Do you want to save before leaving?",
        cancelLabel: "Discard Changes",
        confirmLabel: "Save & Leave",
        onCancel: () => {
          setUpdates({}), window.location.href = nextLocation;
        },
        onConfirm: async () => {
          await saveAllUpdates(), window.location.href = nextLocation;
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProductGrid.jsx",
        lineNumber: 299,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/ProductGrid.jsx",
    lineNumber: 162,
    columnNumber: 9
  }, this);
}

// app/routes/admin/Kitchen.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function Kitchen() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(AdminLayout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex justify-between", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-2xl font-semibold mb-4 text-black", children: "User Management" }, void 0, !1, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 14,
      columnNumber: 21
    }, this) }, void 0, !1, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 13,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_flowbite_react.Tabs, { "aria-label": "Pills", variant: "pills", color: "purple", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_flowbite_react.TabItem, { active: !0, title: "Cafe", className: "!bg-[var(--primary-color)] !text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ProductsTable, {}, void 0, !1, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 21,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 20,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_flowbite_react.TabItem, { title: "Food Waste", className: "bg-[var(--primary-color)] !text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Dashboard tab content" }, void 0, !1, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 25,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/admin/Kitchen.jsx",
        lineNumber: 24,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/admin/Kitchen.jsx",
      lineNumber: 19,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/admin/Kitchen.jsx",
    lineNumber: 12,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/admin/Kitchen.jsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
var Kitchen_default = Kitchen;

// app/routes/logout/index.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  default: () => logout_default,
  loader: () => loader2
});
var import_react16 = require("react");
var import_node4 = require("@remix-run/node"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
async function action({ request }) {
  let session = await getSession(request);
  return (0, import_node4.redirect)("/login", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}
async function loader2() {
  return (0, import_node4.redirect)("/dashboard");
}
function Logout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: "You have been logged out" }, void 0, !1, {
    fileName: "app/routes/logout/index.jsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}
var logout_default = Logout;

// app/routes/signup/index.jsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action2,
  default: () => signup_default
});
var import_react20 = require("react");

// app/components/Input.jsx
var import_react17 = require("react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function Input({ children, type = "text", className = "", ...props }) {
  let styles = `w-full pr-10 pl-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type, className: styles, ...props }, void 0, !1, {
    fileName: "app/components/Input.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var Input_default = Input;

// app/components/ImagesUpload.jsx
var import_react18 = require("react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function ImagesUpload({ name = "default-name" }) {
  let [images, setImages] = (0, import_react18.useState)([]), [error, setError] = (0, import_react18.useState)(""), [isDragging, setIsDragging] = (0, import_react18.useState)(!1), maxSize = 2 * 1024 * 1024, handleFiles = (files) => {
    let newImages = Array.from(files).filter((file) => file.size > maxSize ? (setError(`${file.name} is larger than 2 MB`), !1) : !0).map((file) => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    setImages((prev) => [...prev, ...newImages]);
  }, handleImageChange = (e) => {
    handleFiles(e.target.files);
  }, handleDrop = (e) => {
    e.preventDefault(), e.stopPropagation(), setIsDragging(!1), handleFiles(e.dataTransfer.files);
  }, handleDragOver = (e) => {
    e.preventDefault(), e.stopPropagation(), setIsDragging(!0);
  }, handleDragLeave = (e) => {
    e.preventDefault(), e.stopPropagation(), setIsDragging(!1);
  };
  return (0, import_react18.useEffect)(() => () => images.forEach((img) => URL.revokeObjectURL(img.preview)), [images]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
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
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-gray-600", children: [
          "Drag & Drop your images here or",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("label", { className: "text-blue-600 cursor-pointer underline", children: [
            "click to browse",
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
              "input",
              {
                type: "file",
                name,
                multiple: !0,
                accept: ".jpg, .png",
                onChange: handleImageChange,
                className: "hidden"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ImagesUpload.jsx",
                lineNumber: 78,
                columnNumber: 25
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/ImagesUpload.jsx",
            lineNumber: 76,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ImagesUpload.jsx",
          lineNumber: 74,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/ImagesUpload.jsx",
        lineNumber: 60,
        columnNumber: 13
      },
      this
    ),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-red-500 mt-2", children: error }, void 0, !1, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 91,
      columnNumber: 23
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { style: { display: "flex", gap: "20px", flexWrap: "wrap" }, children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "div",
      {
        className: "relative",
        style: { display: "flex", gap: "20px", flexDirection: "column" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "img",
            {
              src: img.preview,
              alt: `preview ${index}`,
              style: { width: "100px", height: "100px", objectFit: "cover" }
            },
            void 0,
            !1,
            {
              fileName: "app/components/ImagesUpload.jsx",
              lineNumber: 101,
              columnNumber: 25
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "button",
            {
              type: "button",
              onClick: () => setImages(images.filter((_, i) => i !== index)),
              children: "Remove"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ImagesUpload.jsx",
              lineNumber: 106,
              columnNumber: 25
            },
            this
          )
        ]
      },
      index,
      !0,
      {
        fileName: "app/components/ImagesUpload.jsx",
        lineNumber: 96,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/ImagesUpload.jsx",
      lineNumber: 94,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ImagesUpload.jsx",
    lineNumber: 58,
    columnNumber: 9
  }, this);
}

// app/routes/signup/index.jsx
var import_react21 = require("@remix-run/react");

// app/components/PasswordInput.jsx
var import_react19 = require("react");
var import_lucide_react2 = require("lucide-react"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function PasswordInput({ ...props }) {
  let [showPassword, setShowPassword] = (0, import_react19.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      Input_default,
      {
        type: showPassword ? "text" : "password",
        ...props
      },
      void 0,
      !1,
      {
        fileName: "app/components/PasswordInput.jsx",
        lineNumber: 9,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute inset-y-0 right-2 flex items-center text-gray-500",
        children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_lucide_react2.EyeOff, { size: 20 }, void 0, !1, {
          fileName: "app/components/PasswordInput.jsx",
          lineNumber: 18,
          columnNumber: 33
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_lucide_react2.Eye, { size: 20 }, void 0, !1, {
          fileName: "app/components/PasswordInput.jsx",
          lineNumber: 18,
          columnNumber: 56
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/PasswordInput.jsx",
        lineNumber: 13,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/PasswordInput.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var PasswordInput_default = PasswordInput;

// app/routes/signup/index.jsx
var import_node5 = require("@remix-run/node");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
async function action2({ request }) {
  var _a, _b;
  let contentType = request.headers.get("content-type");
  if (console.log("Received Content-Type:", contentType), !contentType || !contentType.includes("multipart/form-data"))
    return (0, import_node5.json)({ error: "Bad content-type", contentType }, { status: 400 });
  let formData = await request.formData(), first_name = formData.get("first-name"), last_name = formData.get("last-name"), email = formData.get("email"), password = formData.get("password"), confirmPassword = formData.get("confirm-password");
  if (password !== confirmPassword)
    return (0, import_node5.json)({ error: "Passwords do not match" }, { status: 400 });
  let checkEmailJson = await (await fetch(
    `${API_BASE_URL}/users?filter[email][_eq]=${encodeURIComponent(email)}`
  )).json();
  if (((_a = checkEmailJson == null ? void 0 : checkEmailJson.data) == null ? void 0 : _a.length) > 0)
    return (0, import_node5.json)({ error: "Email already registered" }, { status: 400 });
  let images = formData.getAll("avatar"), uploadedImageIds = [];
  for (let image of images)
    if (image && typeof image != "string" && image.size > 0) {
      let uploadData = new FormData();
      uploadData.append("file", image, image.name);
      try {
        let uploadRes = await fetch(`${API_BASE_URL}/files`, {
          method: "POST",
          body: uploadData
        });
        if (!uploadRes.ok) {
          console.error("File upload failed:", await uploadRes.text());
          continue;
        }
        let uploadJson = await uploadRes.json();
        (_b = uploadJson == null ? void 0 : uploadJson.data) != null && _b.id && uploadedImageIds.push(uploadJson.data.id);
      } catch (error) {
        console.error("Error uploading avatar:", error);
      }
    }
  let avatarId = uploadedImageIds.length > 0 ? uploadedImageIds[0] : null, userRes = await fetch(`${API_BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      avatar: avatarId,
      status: "active"
    })
  });
  if (!userRes.ok) {
    let err = await userRes.text();
    return (0, import_node5.json)({ error: err }, { status: 400 });
  }
  return (0, import_node5.redirect)("/login");
}
function SignUp() {
  let actionData = (0, import_react21.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "SignUp",
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 104,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 102,
      columnNumber: 13
    }, this),
    (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-red-500 text-sm", children: actionData.error }, void 0, !1, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 108,
      columnNumber: 17
    }, this),
    (actionData == null ? void 0 : actionData.success) && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-red-500 text-sm", children: "okay" }, void 0, !1, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 112,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_react21.Form, { method: "post", encType: "multipart/form-data", onSubmit: () => console.log("Form submitted"), className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Input_default, { type: "name", name: "first-name", required: !0, placeholder: "Enter your first name" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 117,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Input_default, { type: "name", name: "last-name", required: !0, placeholder: "Enter your last name" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 119,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Input_default, { type: "email", required: !0, name: "email", placeholder: "Email" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 121,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { children: "Upload your image" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 123,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ImagesUpload, { name: "avatar" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 125,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", required: !0, name: "password" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 127,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(PasswordInput_default, { placeholder: "Confirm password", required: !0, name: "confirm-password" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 129,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Button, { type: "submit", children: "Sign up" }, void 0, !1, {
        fileName: "app/routes/signup/index.jsx",
        lineNumber: 131,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/signup/index.jsx",
      lineNumber: 115,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/signup/index.jsx",
    lineNumber: 100,
    columnNumber: 9
  }, this);
}
var signup_default = SignUp;

// app/routes/login/index.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => LoginPage,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_react22 = require("@remix-run/react");
var import_lucide_react3 = require("lucide-react");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  return (await getSession(request)).get("user") ? (0, import_node6.redirect)("/dashboard") : null;
}
async function loginToExternalApi({ email, password }) {
  let response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  if (!response.ok) {
    let err = await response.text();
    throw new Error(`Login failed: ${err}`);
  }
  return await response.json();
}
async function action3({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (!email || !password)
    return (0, import_node6.json)({ error: "Email and password required" }, { status: 400 });
  try {
    let result = await loginToExternalApi({ email, password }), session = await getSession(request);
    return session.set("user", result.user || { email }), (0, import_node6.redirect)("/dashboard?login=success", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } catch (error) {
    return console.error("\u274C Login error:", error), (0, import_node6.json)({ error: "Invalid email or password" }, { status: 401 });
  }
}
function LoginPage() {
  let actionData = (0, import_react22.useActionData)(), transition = (0, import_react22.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "Login",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react22.Form, { method: "post", className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Input_default, { type: "email", required: !0, name: "email", placeholder: "Email" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(PasswordInput_default, { placeholder: "Enter password", name: "password" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("a", { href: "#", children: "Forgot Password?" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 89,
        columnNumber: 45
      }, this) }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 89,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Button, { type: "submit", disabled: transition.state === "submitting", children: transition.state === "submitting" ? "Logging in..." : "Login" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 91,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 83,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login/index.jsx",
    lineNumber: 76,
    columnNumber: 9
  }, this);
}

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react23 = require("@remix-run/react");
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: "Hello" }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "800fdba9", entry: { module: "/build/entry.client-NF6MVTTO.js", imports: ["/build/_shared/chunk-EFHXRLPW.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6VR24QEP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/admin/Kitchen": { id: "routes/admin/Kitchen", parentId: "root", path: "admin/Kitchen", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/Kitchen-35ZSUVHR.js", imports: ["/build/_shared/chunk-CYJHFLYN.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-NNKHU6BE.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/Settings": { id: "routes/admin/Settings", parentId: "root", path: "admin/Settings", index: void 0, caseSensitive: void 0, module: "/build/routes/admin/Settings-NSIH3NGA.js", imports: ["/build/_shared/chunk-CYJHFLYN.js", "/build/_shared/chunk-NNKHU6BE.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "root", path: "dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-6TCVYVWA.js", imports: ["/build/_shared/chunk-ZEWRAVBQ.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-UVJXB3NG.js", imports: ["/build/_shared/chunk-BMDLP7Y6.js", "/build/_shared/chunk-EQAQK25Y.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-NNKHU6BE.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "root", path: "login", index: !0, caseSensitive: void 0, module: "/build/routes/login/index-QVFB6VBA.js", imports: ["/build/_shared/chunk-BMDLP7Y6.js", "/build/_shared/chunk-EQAQK25Y.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-NNKHU6BE.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout/index": { id: "routes/logout/index", parentId: "root", path: "logout", index: !0, caseSensitive: void 0, module: "/build/routes/logout/index-7G6HEEZD.js", imports: ["/build/_shared/chunk-ZEWRAVBQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup/index": { id: "routes/signup/index", parentId: "root", path: "signup", index: !0, caseSensitive: void 0, module: "/build/routes/signup/index-TOS36WTF.js", imports: ["/build/_shared/chunk-EQAQK25Y.js", "/build/_shared/chunk-37D2R22D.js", "/build/_shared/chunk-NNKHU6BE.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-800FDBA9.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "root",
    path: "dashboard",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/admin/Settings": {
    id: "routes/admin/Settings",
    parentId: "root",
    path: "admin/Settings",
    index: void 0,
    caseSensitive: void 0,
    module: Settings_exports
  },
  "routes/admin/Kitchen": {
    id: "routes/admin/Kitchen",
    parentId: "root",
    path: "admin/Kitchen",
    index: void 0,
    caseSensitive: void 0,
    module: Kitchen_exports
  },
  "routes/logout/index": {
    id: "routes/logout/index",
    parentId: "root",
    path: "logout",
    index: !0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/signup/index": {
    id: "routes/signup/index",
    parentId: "root",
    path: "signup",
    index: !0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: !0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
