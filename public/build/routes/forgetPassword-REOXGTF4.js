import {
  Footer
} from "/build/_shared/chunk-NO54GCYG.js";
import {
  HeaderFile
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import "/build/_shared/chunk-I24TZKN2.js";
import "/build/_shared/chunk-TQXZOQST.js";
import {
  Q
} from "/build/_shared/chunk-776WLWWM.js";
import {
  FRONTEND_URL,
  MAIL_SENDER,
  RESET_BASE_URL,
  directusLoaderLink
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  Form,
  Link
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/forgetPassword.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Reset Password" };
}
function ForgetPassword() {
  const [emaildata, setEmaildata] = import_react.default.useState("");
  const [alertshow, setAlertshow] = import_react.default.useState(false);
  const [preventDouble, setPreventDouble] = import_react.default.useState(false);
  const directus = directusLoaderLink;
  const forgetHandle = async () => {
    setPreventDouble(true);
    await directus.users.readByQuery({
      fields: ["*"],
      filter: { email: { _eq: emaildata } }
    }).then(
      async (e) => {
        var _a, _b;
        return ((_a = e == null ? void 0 : e.data[0]) == null ? void 0 : _a.id) ? await updateHandle((_b = e == null ? void 0 : e.data[0]) == null ? void 0 : _b.id) : Q.error("No data found", {
          onClose: () => setPreventDouble(false)
        });
      }
    );
  };
  async function postData({ url, token, name, emailTo }) {
    var msg = {
      to: emailTo,
      from: MAIL_SENDER,
      subject: "Generated new password",
      name,
      html: `<div>
            <p>Hi<strong> ${name}</strong>,</p>
            <p>Your new password is <strong> ${token}</strong>.</p>
            <p>Click here to  <a href=${FRONTEND_URL}>login </a></p>
            
            <div>`
    };
    await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(msg)
    }).then(
      (e) => Q.success("we sent you a secure password to your mail", {
        onClose: () => setPreventDouble(false)
      })
    ).catch((e) => Q.error("Try again some other time", {
      onClose: () => setPreventDouble(false)
    }));
    return "";
  }
  const updateHandle = async (prop) => {
    const randomValue = Math.random().toString(36).slice(2, 7);
    await directus.users.updateOne(prop, {
      "password": randomValue,
      "password_token": randomValue,
      "password_copy": randomValue
    }).then(
      async (res) => {
        setAlertshow(true);
        await postData({ url: RESET_BASE_URL, token: res == null ? void 0 : res.password_token, name: res == null ? void 0 : res.first_name, emailTo: res == null ? void 0 : res.email });
        return res;
      }
    ).catch((err) => {
      console.log(err);
      Q.error("Something went wrong", {
        onClose: () => setPreventDouble(false)
      });
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        login: true
      }, void 0, false, {
        fileName: "app/routes/forgetPassword.jsx",
        lineNumber: 86,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex justify-center h-[calc(100vh-75px)] w-full items-center px-5",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
            className: "max-w-[400px] w-full flex flex-col items-center text-[14px] ",
            onSubmit: (e) => forgetHandle(e),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-center text-[24px] font-bold text-black mb-16",
                children: "RESET PASSWORD"
              }, void 0, false, {
                fileName: "app/routes/forgetPassword.jsx",
                lineNumber: 92,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mb-6 w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "u-mail-id1",
                    className: "block text-sm font-bold text-gray-700",
                    children: "Email"
                  }, void 0, false, {
                    fileName: "app/routes/forgetPassword.jsx",
                    lineNumber: 96,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "email",
                    id: "u-mail-id1",
                    placeholder: "Your@email.dk",
                    value: emaildata,
                    onChange: (e) => setEmaildata(e.target.value),
                    required: true,
                    className: "mt-2 w-full px-4 py-3 flex justify-center items-center shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-gray-600 sm:text-sm"
                  }, void 0, false, {
                    fileName: "app/routes/forgetPassword.jsx",
                    lineNumber: 102,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/forgetPassword.jsx",
                lineNumber: 95,
                columnNumber: 25
              }, this),
              alertshow ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mb-8  border-l-lime-500 ... bg-green-100 px-3 py-3 rounded-md",
                children: "If you have an account, we've sent you a secure link to reset your password"
              }, void 0, false, {
                fileName: "app/routes/forgetPassword.jsx",
                lineNumber: 113,
                columnNumber: 41
              }, this) : null,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "inline-flex w-full flex-row justify-between",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                      type: "submit",
                      disabled: preventDouble,
                      className: "inline-flex  items-center justify-center h-[50px] text-[18px] rounded border bg-primary border-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      children: "Reset"
                    }, void 0, false, {
                      fileName: "app/routes/forgetPassword.jsx",
                      lineNumber: 120,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/forgetPassword.jsx",
                    lineNumber: 119,
                    columnNumber: 29
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: " self-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      to: "/login",
                      children: "Sign In"
                    }, void 0, false, {
                      fileName: "app/routes/forgetPassword.jsx",
                      lineNumber: 129,
                      columnNumber: 33
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/forgetPassword.jsx",
                    lineNumber: 128,
                    columnNumber: 29
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/forgetPassword.jsx",
                lineNumber: 118,
                columnNumber: 25
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/forgetPassword.jsx",
            lineNumber: 89,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/forgetPassword.jsx",
          lineNumber: 88,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/forgetPassword.jsx",
        lineNumber: 87,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {
        login: true
      }, void 0, false, {
        fileName: "app/routes/forgetPassword.jsx",
        lineNumber: 135,
        columnNumber: 13
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/forgetPassword.jsx",
    lineNumber: 85,
    columnNumber: 9
  }, this);
}
export {
  ForgetPassword as default,
  meta
};
//# sourceMappingURL=/build/routes/forgetPassword-REOXGTF4.js.map
