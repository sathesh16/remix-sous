import {
  HeaderFile
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import "/build/_shared/chunk-I24TZKN2.js";
import "/build/_shared/chunk-TQXZOQST.js";
import {
  k
} from "/build/_shared/chunk-776WLWWM.js";
import "/build/_shared/chunk-YBWC7QFI.js";
import {
  Form,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// empty-module:./utils/db.server
var require_db = __commonJS({
  "empty-module:./utils/db.server"(exports, module) {
    module.exports = {};
  }
});

// node_modules/modern-normalize/modern-normalize.css
var modern_normalize_default = "/build/_assets/modern-normalize-HKFOKGAH.css";

// app/stylesheet/main.css
var main_default = "/build/_assets/main-GHOMOIF3.css";

// app/stylesheet/banner.css
var banner_default = "/build/_assets/banner-LTBMEQCH.css";

// app/stylesheet/marketing.css
var marketing_default = "/build/_assets/marketing-P4ONQROA.css";

// app/stylesheet/ingredients_popup.css
var ingredients_popup_default = "/build/_assets/ingredients_popup-5WBP6X4O.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-3RXYB7KS.css";

// app/assets/images/favicon.ico
var favicon_default = "/build/_assets/favicon-BMKCEN4F.ico";

// app/styles/app.css
var app_default = "/build/_assets/app-GPLU2N7P.css";

// app/stylesheet/month-picker.css
var month_picker_default = "/build/_assets/month-picker-XJ4RG7J7.css";

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-MAHHHE2E.css";

// node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css
var react_draft_wysiwyg_default = "/build/_assets/react-draft-wysiwyg-KEUQXAIR.css";

// node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min_default = "/build/_assets/carousel.min-72LBGBGP.css";

// node_modules/react-calendar/dist/Calendar.css
var Calendar_default = "/build/_assets/Calendar-YDLNKHQ2.css";

// app/stylesheet/conference.css
var conference_default = "/build/_assets/conference-Q4HVTU73.css";

// app/root.jsx
var import_db = __toESM(require_db());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "The Food Place" };
}
function links() {
  return [
    { rel: "stylesheet", href: modern_normalize_default },
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: month_picker_default },
    { rel: "stylesheet", href: main_default },
    { rel: "stylesheet", href: ReactToastify_default },
    { rel: "stylesheet", href: react_draft_wysiwyg_default },
    { rel: "stylesheet", href: banner_default },
    { rel: "stylesheet", href: marketing_default },
    { rel: "stylesheet", href: ingredients_popup_default },
    { rel: "stylesheet", href: carousel_min_default },
    { rel: "stylesheet", href: Calendar_default },
    { rel: "stylesheet", href: conference_default },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
    },
    {
      rel: "stylesheet",
      href: "https://use.typekit.net/kmm0snb.css"
    }
  ];
}
function ErrorBoundary({ error }, req, res) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "p-4 justify-center align-middle",
    style: { position: "relative", margin: "-8px", width: "calc(100% + 16px)", height: "100vh" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        login: true,
        server: true,
        logoCenter: true
      }, void 0, false, {
        fileName: "app/root.jsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "oops-message",
        style: { textAlign: "center", padding: "25px", height: "calc(100vh - 140px)", display: "flex", flexDirection: "column", justifyContent: "center", fontFamily: "Arial" },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
            className: "text-2xl",
            style: { fontFamily: "Arial" },
            children: "Oops!! Something went wrong!"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 93,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            style: { fontSize: "18px", padding: "10px 0", fontFamily: "Arial" },
            children: error.message
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 94,
            columnNumber: 13
          }, this),
          (error == null ? void 0 : error.message) === "Invalid user credentials." && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            className: "max-w-[400px] w-full flex flex-col items-center text-[14px] ",
            method: "post",
            style: { paddingTop: "20px" },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "text",
                name: "error",
                style: { display: "none" },
                value: error,
                onChange: () => {
                }
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 101,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                style: { textAlign: "center", padding: "16px 40px", backgroundColor: "#000022", color: "#fff", border: "none", boxShadow: "none", borderRadius: "5px", fontSize: "16px", cursor: "pointer" },
                children: "Back to login"
              }, void 0, false, {
                fileName: "app/root.jsx",
                lineNumber: 108,
                columnNumber: 17
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/root.jsx",
            lineNumber: 96,
            columnNumber: 13
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 88,
    columnNumber: 9
  }, this);
}
function App() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    suppressHydrationWarning: true,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 121,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 122,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            httpEquiv: "content-type",
            content: "text/html;charset=utf-8"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "robots",
            content: "noindex, nofollow"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 124,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "googlebot",
            content: "noindex"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 125,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "icon",
            href: favicon_default
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 126,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 127,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 128,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 120,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "bg-white",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(k, {
            position: "bottom-center",
            autoClose: 2100,
            hideProgressBar: true,
            newestOnTop: false,
            closeOnClick: true,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: true,
            pauseOnHover: true
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 143,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 144,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            dangerouslySetInnerHTML: {
              __html: `window.ENV = ${JSON.stringify(data.ENV)}`
            }
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 145,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            src: "//cdnjs.cloudflare.com/ajax/libs/alpinejs/3.10.5/cdn.js"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 150,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 151,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 130,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 119,
    columnNumber: 9
  }, this);
}
var root_default = App;
export {
  ErrorBoundary,
  root_default as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-F24O2MS5.js.map
