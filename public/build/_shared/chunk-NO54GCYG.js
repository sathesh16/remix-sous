import {
  require_lib
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import {
  Q
} from "/build/_shared/chunk-776WLWWM.js";
import {
  MAIL_SENDER,
  SEND_SUPPORT_MAIL,
  SUPPORT_MAIL_SENDER_LIST
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/components/Footer.jsx
var import_react2 = __toESM(require_react());

// app/components/EmailSupportModal.jsx
var import_react = __toESM(require_react());
var import_react_modal = __toESM(require_lib());

// app/assets/images/closeIcon.png
var closeIcon_default = "/build/_assets/closeIcon-XU4IO7EI.png";

// app/components/EmailSupportModal.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MAX_FILE_SIZE = 2e6;
function EmailSupportModal({ isOpen, setIsOpen }) {
  const [email, setEmail] = (0, import_react.useState)("");
  const [name, setName] = (0, import_react.useState)("");
  const [title, setTitle] = (0, import_react.useState)("");
  const [message, setMessage] = (0, import_react.useState)("");
  const [attachment, setAttachment] = (0, import_react.useState)();
  const [file, setFile] = (0, import_react.useState)("");
  const buttonRef = import_react.default.useRef(null);
  const [preventDouble, setPreventDouble] = (0, import_react.useState)(false);
  const closeModal = () => {
    setName("");
    setEmail("");
    setTitle("");
    setMessage("");
    setAttachment("");
    setIsOpen(false);
  };
  const readFileAsync = async (file2) => {
    return new Promise((resolve, reject) => {
      var filereader = new FileReader();
      filereader.readAsDataURL(file2);
      var base64;
      filereader.onload = () => {
        base64 = resolve(filereader.result);
      };
      filereader.onerror = reject;
      setFile(base64);
      return base64;
    });
  };
  const ShowToast = (errMessage) => {
    Q.error(errMessage, {
      onClose: () => setPreventDouble(false)
    });
  };
  const EmailSupport = async () => {
    var _a, _b, _c, _d, _e, _f, _g;
    setPreventDouble(true);
    if (!name) {
      ShowToast("Name is required field");
    } else if (!email) {
      ShowToast("Email is required field");
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      ShowToast("Enter a valid email address");
    } else if (!message) {
      ShowToast("Message is required field");
    } else if (((_a = attachment == null ? void 0 : attachment.target) == null ? void 0 : _a.files[0].name.length) > 0 && !/.*\.(?:jpg|png|pdf|doc|docx)$/.test((_b = attachment == null ? void 0 : attachment.target) == null ? void 0 : _b.files[0].name)) {
      ShowToast("Upload a valid file format");
    } else if (((_c = attachment == null ? void 0 : attachment.target) == null ? void 0 : _c.files[0].size) > MAX_FILE_SIZE) {
      ShowToast("Please upload file less than 2MB.");
    } else {
      var files = ((_d = attachment == null ? void 0 : attachment.target) == null ? void 0 : _d.files) ? await readFileAsync((_e = attachment == null ? void 0 : attachment.target) == null ? void 0 : _e.files[0]) : "";
      var msg = {
        "from": MAIL_SENDER,
        "to": SUPPORT_MAIL_SENDER_LIST,
        "subject": "Support Email",
        "html": `
                    <div>
                        <p>Hi</p>
                        <p><strong>Name:</strong>${" "}${name}.</p>
                        <p><strong>Email:</strong>${" "}${email}.</p>
                        <p><strong>Title: </strong>${" "}${title}.</p>
                        <p><strong>Message: </strong>${" "}${message}.</p>
                    <div>
                `,
        attachments: files ? [
          {
            filename: (_g = (_f = attachment == null ? void 0 : attachment.target) == null ? void 0 : _f.files[0]) == null ? void 0 : _g.name,
            path: files
          }
        ] : []
      };
      await fetch(SEND_SUPPORT_MAIL, {
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
        (e) => {
          Q.success("Support form submitted successfully", {
            onClose: () => setPreventDouble(false)
          });
          closeModal();
        }
      ).catch((e) => {
        console.log("error", e);
        ShowToast("Something went wrong");
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-100,h-100",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_modal.default, {
      isOpen,
      onRequestClose: closeModal,
      ariaHideApp: false,
      contentLabel: "Banner Preview",
      className: "support-form",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#FAFAFA] rounded-[10px] shadow-lg px-6 py-12 relative lg:px-9 station-preview",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "close-div",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              onClick: closeModal,
              className: "float-right",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: closeIcon_default,
                  alt: "close-icon"
                }, void 0, false, {
                  fileName: "app/components/EmailSupportModal.jsx",
                  lineNumber: 154,
                  columnNumber: 101
                }, this),
                " "
              ]
            }, void 0, true, {
              fileName: "app/components/EmailSupportModal.jsx",
              lineNumber: 154,
              columnNumber: 48
            }, this)
          }, void 0, false, {
            fileName: "app/components/EmailSupportModal.jsx",
            lineNumber: 154,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-center items-center px-5 py-[30px]",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "max-w-[400px] w-full flex flex-col items-center text-[14px] ",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-center text-[24px] font-bold text-primary mb-5",
                  children: "Support Form"
                }, void 0, false, {
                  fileName: "app/components/EmailSupportModal.jsx",
                  lineNumber: 159,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mb-2 w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "u-mail-id1",
                      className: "block text-sm font-bold text-primary",
                      children: "Name"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 163,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "text",
                      id: "u-name-id1",
                      name: "name",
                      placeholder: "Name",
                      value: name,
                      onChange: (e) => setName(e.target.value),
                      required: true,
                      className: "mt-2 w-full px-4 py-3 flex justify-center items-center text-black shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 169,
                      columnNumber: 33
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/EmailSupportModal.jsx",
                  lineNumber: 162,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mb-2 w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "u-mail-id1",
                      className: "block text-sm font-bold text-primary",
                      children: "Email"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 181,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "email",
                      id: "u-mail-id1",
                      name: "email",
                      placeholder: "Your@email.dk",
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      required: true,
                      className: "mt-2 w-full px-4 py-3 flex justify-center items-center text-black shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 187,
                      columnNumber: 33
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/EmailSupportModal.jsx",
                  lineNumber: 180,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mb-2 w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "u-mail-id1",
                      className: "block text-sm font-bold text-primary",
                      children: "Title"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 199,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "text",
                      id: "u-title-id1",
                      name: "title",
                      placeholder: "Share the title",
                      value: title,
                      onChange: (e) => setTitle(e.target.value),
                      className: "mt-2 w-full px-4 py-3 flex justify-center items-center text-black shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 205,
                      columnNumber: 33
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/EmailSupportModal.jsx",
                  lineNumber: 198,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mb-2 w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "u-mail-id1",
                      className: "block text-sm font-bold text-primary",
                      children: "Message"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 217,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                      type: "text",
                      id: "u-title-id1",
                      name: "title",
                      placeholder: "Share the message",
                      value: message,
                      onChange: (e) => setMessage(e.target.value),
                      required: true,
                      className: "mt-2 w-full px-4 py-3 flex justify-center items-center text-black shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 223,
                      columnNumber: 33
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/EmailSupportModal.jsx",
                  lineNumber: 216,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mb-2 w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "u-mail-id1",
                      className: "block text-sm font-bold text-primary",
                      children: "Attachments"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 235,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "file",
                      id: "u-attachment-id1",
                      name: "title",
                      placeholder: "Share the title",
                      accept: ".png,.jpg,.pdf,.docx,.doc",
                      onChange: (e) => setAttachment(e),
                      className: "mt-2 w-full px-4 py-3 flex justify-center items-center text-black shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 241,
                      columnNumber: 33
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "red-text text-xs",
                      children: "*Upload file must be .png,.jpg,.pdf,.docx and .doc less than 2MB "
                    }, void 0, false, {
                      fileName: "app/components/EmailSupportModal.jsx",
                      lineNumber: 250,
                      columnNumber: 33
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/EmailSupportModal.jsx",
                  lineNumber: 234,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 w-full",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    ref: buttonRef,
                    disabled: preventDouble,
                    onClick: () => preventDouble ? null : EmailSupport(),
                    className: "inline-flex w-full items-center justify-center h-[50px] text-[18px] rounded border bg-primary border-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    children: "Submit"
                  }, void 0, false, {
                    fileName: "app/components/EmailSupportModal.jsx",
                    lineNumber: 253,
                    columnNumber: 33
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/EmailSupportModal.jsx",
                  lineNumber: 252,
                  columnNumber: 29
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/EmailSupportModal.jsx",
              lineNumber: 156,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: "app/components/EmailSupportModal.jsx",
            lineNumber: 155,
            columnNumber: 21
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/EmailSupportModal.jsx",
        lineNumber: 153,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: "app/components/EmailSupportModal.jsx",
      lineNumber: 146,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: "app/components/EmailSupportModal.jsx",
    lineNumber: 145,
    columnNumber: 9
  }, this);
}

// app/components/Footer.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Footer(props) {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: !(props == null ? void 0 : props.login) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
      className: "bg-white mt-2 flex justify-center items-center shadow-md px-3 md:px-5 py-4 lg:px-10 w-[100%]",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-sm text-center text-black",
          children: [
            "Need support ? Click ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              className: "text-primary cursor-pointer font-semibold",
              onClick: () => setIsOpen(!isOpen),
              children: "here"
            }, void 0, false, {
              fileName: "app/components/Footer.jsx",
              lineNumber: 11,
              columnNumber: 82
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmailSupportModal, {
          isOpen,
          setIsOpen
        }, void 0, false, {
          fileName: "app/components/Footer.jsx",
          lineNumber: 12,
          columnNumber: 13
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Footer.jsx",
      lineNumber: 10,
      columnNumber: 13
    }, this) : null
  }, void 0, false, {
    fileName: "app/components/Footer.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

export {
  closeIcon_default,
  Footer
};
//# sourceMappingURL=/build/_shared/chunk-NO54GCYG.js.map
