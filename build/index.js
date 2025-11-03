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
var app_default = "/build/_assets/app-OFVQDYGV.css";

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

// app/root.jsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }], meta = () => ({
  charset: "utf-8",
  title: "My Remix App",
  viewport: "width=device-width, initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: "Error" }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Something went wrong" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: error == null ? void 0 : error.message }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 42,
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
  let { user } = (0, import_react4.useLoaderData)(), action3 = (0, import_react4.useActionData)();
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

// app/routes/logout/index.jsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  default: () => logout_default,
  loader: () => loader2
});
var import_react5 = require("react");
var import_node4 = require("@remix-run/node"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: "You have been logged out" }, void 0, !1, {
    fileName: "app/routes/logout/index.jsx",
    lineNumber: 22,
    columnNumber: 9
  }, this);
}
var logout_default = Logout;

// app/routes/login/index.jsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => LoginPage,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_react8 = require("react");
var import_lucide_react = require("lucide-react");

// app/components/Input.jsx
var import_react6 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Input({ children, type = "text", className = "", ...props }) {
  let styles = `w-full pr-10 pl-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("input", { type, className: styles, ...props }, void 0, !1, {
    fileName: "app/components/Input.jsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var Input_default = Input;

// app/routes/login/index.jsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
async function loader3({ request }) {
  return (await getSession(request)).get("user") ? (0, import_node5.redirect)("/dashboard") : null;
}
async function loginToExternalApi({ email, password }) {
  let response = await fetch("http://192.168.1.51:8056/auth/login", {
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
async function action2({ request }) {
  let formData = await request.formData(), email = formData.get("email"), password = formData.get("password");
  if (!email || !password)
    return (0, import_node5.json)({ error: "Email and password required" }, { status: 400 });
  try {
    let result = await loginToExternalApi({ email, password }), session = await getSession(request);
    return session.set("user", result.user || { email }), (0, import_node5.redirect)("/dashboard?login=success", {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    });
  } catch (error) {
    return console.error("\u274C Login error:", error), (0, import_node5.json)({ error: "Invalid email or password" }, { status: 401 });
  }
}
function LoginPage() {
  let actionData = (0, import_react7.useActionData)(), transition = (0, import_react7.useTransition)(), [showPassword, setShowPassword] = (0, import_react8.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col items-center justify-center min-h-screen gap-4 relative p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex items-center justify-between w-full max-w-[400px]", children: [
      "Login",
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: "/images/iss_logo.webp", width: "50px" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 80,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login/index.jsx",
      lineNumber: 78,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react7.Form, { method: "post", className: "flex flex-col gap-6 max-w-[400px] w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Input_default, { type: "email", required: !0, name: "email", placeholder: "Email" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 85,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "input",
          {
            type: showPassword ? "text" : "password",
            placeholder: "Enter password",
            className: "w-full pr-10 pl-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login/index.jsx",
            lineNumber: 88,
            columnNumber: 21
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "button",
          {
            type: "button",
            onClick: () => setShowPassword(!showPassword),
            className: "absolute inset-y-0 right-2 flex items-center text-gray-500",
            children: showPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_lucide_react.EyeOff, { size: 20 }, void 0, !1, {
              fileName: "app/routes/login/index.jsx",
              lineNumber: 99,
              columnNumber: 41
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_lucide_react.Eye, { size: 20 }, void 0, !1, {
              fileName: "app/routes/login/index.jsx",
              lineNumber: 99,
              columnNumber: 64
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login/index.jsx",
            lineNumber: 94,
            columnNumber: 21
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 87,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { href: "#", children: "Forgot Password?" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 103,
        columnNumber: 45
      }, this) }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 103,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Button, { type: "submit", disabled: transition.state === "submitting", children: transition.state === "submitting" ? "Logging in..." : "Login" }, void 0, !1, {
        fileName: "app/routes/login/index.jsx",
        lineNumber: 105,
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
var import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: "Hello" }, void 0, !1, {
    fileName: "app/routes/index.jsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cfe51c64", entry: { module: "/build/entry.client-X7X2F7GU.js", imports: ["/build/_shared/chunk-TTVFAFS7.js", "/build/_shared/chunk-EETRBLDB.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-QNR5GE7P.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "root", path: "dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-C47S5VVA.js", imports: ["/build/_shared/chunk-ZEWRAVBQ.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-ZU6ILNTF.js", imports: ["/build/_shared/chunk-I37RGDAI.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "root", path: "login", index: !0, caseSensitive: void 0, module: "/build/routes/login/index-BRDNEINO.js", imports: ["/build/_shared/chunk-I37RGDAI.js", "/build/_shared/chunk-TOP7EFOP.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout/index": { id: "routes/logout/index", parentId: "root", path: "logout", index: !0, caseSensitive: void 0, module: "/build/routes/logout/index-7G6HEEZD.js", imports: ["/build/_shared/chunk-ZEWRAVBQ.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-CFE51C64.js" };

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
  "routes/logout/index": {
    id: "routes/logout/index",
    parentId: "root",
    path: "logout",
    index: !0,
    caseSensitive: void 0,
    module: logout_exports
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
