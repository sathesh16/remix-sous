import {
  clickOutsideDiv_default,
  confirmationModal_default,
  require_month_picker
} from "/build/_shared/chunk-GNOU3FC5.js";
import "/build/_shared/chunk-KATHKNLH.js";
import {
  Loader
} from "/build/_shared/chunk-SYZM45ZP.js";
import "/build/_shared/chunk-MOIBM2EW.js";
import {
  require_db
} from "/build/_shared/chunk-HHTSHZGZ.js";
import {
  Footer
} from "/build/_shared/chunk-NO54GCYG.js";
import {
  HeaderFile,
  require_lib
} from "/build/_shared/chunk-Y7VWJ7EJ.js";
import "/build/_shared/chunk-I24TZKN2.js";
import "/build/_shared/chunk-TQXZOQST.js";
import {
  Q
} from "/build/_shared/chunk-776WLWWM.js";
import {
  FRONTEND_URL,
  directusLoaderLink
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  Custom404Page
} from "/build/_shared/chunk-5ZR5TTKP.js";
import {
  addDays,
  addWeeks,
  format,
  getWeek,
  startOfWeek,
  subWeeks
} from "/build/_shared/chunk-6W3RSCO2.js";
import {
  require_session
} from "/build/_shared/chunk-2FLU7E64.js";
import {
  useLoaderData
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/spa.jsx
var import_react3 = __toESM(require_react());
var import_react_month_picker = __toESM(require_month_picker());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_react5 = __toESM(require_react());

// app/components/Modal/spaThreeColModal.jsx
var import_react = __toESM(require_react());
var import_react_modal = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SpaThreeColModal({
  content,
  IsModalOpen,
  ActivityName,
  date,
  closeHandle,
  setRefresh,
  refresh,
  locationId,
  isAdmin
}) {
  const DateFormat = "yyyy-MM-dd";
  const [modalIsOpen, setIsOpen] = (0, import_react.useState)(
    IsModalOpen === true ? true : false
  );
  const [confirmModalIsOpen, setConfirmIsOpen] = (0, import_react.useState)(false);
  const [title, setTitle] = (0, import_react.useState)(
    !!(content == null ? void 0 : content.treatment) ? content == null ? void 0 : content.treatment : ""
  );
  const [description, setDescription] = (0, import_react.useState)(
    !!(content == null ? void 0 : content.description) ? content == null ? void 0 : content.description : ""
  );
  const [price, setPrice] = (0, import_react.useState)(!!(content == null ? void 0 : content.price) ? content == null ? void 0 : content.price : "");
  const [price1, setPrice1] = (0, import_react.useState)(
    !!(content == null ? void 0 : content.price_1) ? content == null ? void 0 : content.price_1 : ""
  );
  const [price2, setPrice2] = (0, import_react.useState)(
    !!(content == null ? void 0 : content.price_2) ? content == null ? void 0 : content.price_2 : ""
  );
  const [title1, setTitle1] = (0, import_react.useState)(
    !!(content == null ? void 0 : content.treatment_1) ? content == null ? void 0 : content.treatment_1 : ""
  );
  const [description1, setDescription1] = (0, import_react.useState)(
    !!(content == null ? void 0 : content.description_1) ? content == null ? void 0 : content.description_1 : ""
  );
  const [title2, setTitle2] = (0, import_react.useState)(
    !!(content == null ? void 0 : content.treatment_2) ? content == null ? void 0 : content.treatment_2 : ""
  );
  const [description2, setDescription2] = (0, import_react.useState)(
    !!(content == null ? void 0 : content.description_2) ? content == null ? void 0 : content.description_2 : ""
  );
  const [preventDouble, setPreventDouble] = (0, import_react.useState)(false);
  const [modalLoader, setModalLoader] = (0, import_react.useState)(false);
  const cancelHandle = () => {
    setIsOpen(false);
    closeHandle();
  };
  import_react.default.useEffect(() => {
    if ((title == null ? void 0 : title.length) > 100) {
      setTitle(title == null ? void 0 : title.substring(0, 100));
    }
    if ((description == null ? void 0 : description.length) > 100) {
      setDescription(description == null ? void 0 : description.substring(0, 100));
    }
    if ((title1 == null ? void 0 : title1.length) > 100) {
      setTitle1(title1 == null ? void 0 : title1.substring(0, 100));
    }
    if ((description1 == null ? void 0 : description1.length) > 100) {
      setDescription1(description1 == null ? void 0 : description1.substring(0, 100));
    }
    if ((title2 == null ? void 0 : title2.length) > 100) {
      setTitle2(title2 == null ? void 0 : title2.substring(0, 100));
    }
    if ((description2 == null ? void 0 : description2.length) > 100) {
      setDescription2(description2 == null ? void 0 : description2.substring(0, 100));
    }
  }, [title, description, title1, description1, title2, description2]);
  const BodyContent = ({
    titleName,
    setTitleName,
    descriptionName,
    setDescriptionName,
    border,
    priceName,
    setPriceName
  }) => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: `
        flex py-6 px-2 font-normal min-w-[750px] min-h-[150px] border-1 line-normal left-5 z-10 gap-[15px] text-sm top-12 ${border ? " border-b-2 border-gray-300" : ""}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "title-price grid gap-y-[15px] w-1/2",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col-span-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "title",
                  className: "block text-sm font-medium text-gray-700 uppercase",
                  children: "title"
                }, void 0, false, {
                  fileName: "app/components/Modal/spaThreeColModal.jsx",
                  lineNumber: 94,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative spa-title",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                      type: "text",
                      name: "title",
                      id: "title",
                      placeholder: "Enter the title",
                      value: titleName,
                      onChange: (e) => setTitleName(e.target.value),
                      className: "resize-none min-h-[80px] mt-1 block w-full rounded-md border border-primary py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/Modal/spaThreeColModal.jsx",
                      lineNumber: 101,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-[10px] absolute bottom-0 right-2",
                      children: [
                        titleName == null ? void 0 : titleName.length,
                        "/100"
                      ]
                    }, void 0, true, {
                      fileName: "app/components/Modal/spaThreeColModal.jsx",
                      lineNumber: 110,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/Modal/spaThreeColModal.jsx",
                  lineNumber: 100,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/Modal/spaThreeColModal.jsx",
              lineNumber: 93,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col-span-6 ",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "price",
                  className: "block text-sm font-medium text-gray-700 uppercase",
                  children: "Price"
                }, void 0, false, {
                  fileName: "app/components/Modal/spaThreeColModal.jsx",
                  lineNumber: 116,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative mt-1",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                      type: "number",
                      name: "price",
                      id: "price",
                      placeholder: "Enter the price",
                      value: priceName,
                      onChange: (e) => setPriceName(e.target.value),
                      className: " block w-full rounded-md border border-primary py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/Modal/spaThreeColModal.jsx",
                      lineNumber: 123,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: " absolute right-6  bottom-[25%] text-center",
                      children: "kr"
                    }, void 0, false, {
                      fileName: "app/components/Modal/spaThreeColModal.jsx",
                      lineNumber: 132,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/Modal/spaThreeColModal.jsx",
                  lineNumber: 122,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/Modal/spaThreeColModal.jsx",
              lineNumber: 115,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/Modal/spaThreeColModal.jsx",
          lineNumber: 92,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "desc w-1/2",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "col-span-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                htmlFor: "description",
                className: "block text-sm font-medium text-gray-700 uppercase",
                children: "Description"
              }, void 0, false, {
                fileName: "app/components/Modal/spaThreeColModal.jsx",
                lineNumber: 140,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative spa-title",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                    type: "text",
                    name: "description",
                    id: "description",
                    placeholder: "Enter the description",
                    value: descriptionName || "",
                    onChange: (e) => setDescriptionName(e.target.value),
                    className: "resize-none min-h-[80px] mt-1 block w-full rounded-md border border-primary py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                  }, void 0, false, {
                    fileName: "app/components/Modal/spaThreeColModal.jsx",
                    lineNumber: 147,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "text-[10px] absolute bottom-0 right-2",
                    children: [
                      descriptionName == null ? void 0 : descriptionName.length,
                      "/100"
                    ]
                  }, void 0, true, {
                    fileName: "app/components/Modal/spaThreeColModal.jsx",
                    lineNumber: 156,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/Modal/spaThreeColModal.jsx",
                lineNumber: 146,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Modal/spaThreeColModal.jsx",
            lineNumber: 139,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/Modal/spaThreeColModal.jsx",
          lineNumber: 138,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/components/Modal/spaThreeColModal.jsx",
      lineNumber: 86,
      columnNumber: 7
    }, this);
  };
  const createHandle = async (e) => {
    var _a, _b, _c;
    setPreventDouble(true);
    const body = {
      activity_type: ActivityName,
      date: format(date, DateFormat),
      location_id: locationId,
      treatment: title,
      price: !!price ? price : null,
      description: !!description ? description == null ? void 0 : description.trim() : null,
      treatment_1: title1,
      price_1: !!price1 ? price1 : null,
      description_1: !!description1 ? description1 == null ? void 0 : description1.trim() : null,
      treatment_2: title2,
      price_2: !!price2 ? price2 : null,
      description_2: !!description2 ? description2 == null ? void 0 : description2.trim() : null
    };
    if (!!title) {
      const section2title = !!description1 ? ((_a = description1 == null ? void 0 : description1.trim()) == null ? void 0 : _a.length) > 0 : !!price1 ? price1 : false;
      if (section2title ? !!title1 : true) {
        const section3title = !!description2 ? ((_b = description2 == null ? void 0 : description2.trim()) == null ? void 0 : _b.length) > 0 : !!price2 ? price2 : false;
        if (section3title ? !!title2 : true) {
          if (content == null ? void 0 : content.id) {
            await directusLoaderLink.items("spa").updateOne(content == null ? void 0 : content.id, body).then((res) => {
              Q.success("Updated successfully");
              cancelHandle();
              setRefresh(!refresh);
            }).catch((err) => {
              console.log(err);
              Q.error(err);
            });
          } else {
            await directusLoaderLink.items("spa").createOne(body).then((res) => {
              Q.success(" Created successfully");
              cancelHandle();
              setRefresh(!refresh);
            }).catch((err) => {
              console.log(err);
              Q.error(err);
            });
          }
          localStorage.setItem(
            "SpaWacthedWeek",
            ((_c = new Date(date)) == null ? void 0 : _c.getDay()) == 0 ? format(addDays(new Date(date), -2), "yyyy-MM-dd") : date
          );
        } else {
          Q.error("Section 3 Title is required");
        }
      } else {
        Q.error("Section 2 Title is required");
      }
    } else {
      Q.error("Section 1 Title is required");
    }
    setPreventDouble(false);
  };
  const deleteHandle = async () => {
    if (content == null ? void 0 : content.id) {
      setModalLoader(true);
      await directusLoaderLink.items("spa").deleteOne(content == null ? void 0 : content.id).then((res) => {
        Q.success("Data deleted successfully");
      }).catch((err) => {
        console.log(err);
      });
      setModalLoader(false);
      setRefresh(!refresh);
      cancelHandle();
      location.reload();
    }
  };
  const confirmCancelHandle = () => {
    setConfirmIsOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_modal.default, {
    isOpen: modalIsOpen,
    contentLabel: "Logout Modal",
    ariaHideApp: false,
    className: "spaModal",
    overlayClassName: "spaModal_overlay",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "close-div",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          className: "close-act",
          onClick: cancelHandle,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
            className: "ri-close-line text-primary"
          }, void 0, false, {
            fileName: "app/components/Modal/spaThreeColModal.jsx",
            lineNumber: 273,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/components/Modal/spaThreeColModal.jsx",
          lineNumber: 272,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/Modal/spaThreeColModal.jsx",
        lineNumber: 271,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "spa-three-row",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex justify-center uppercase text-primary font-bold",
            children: ActivityName
          }, void 0, false, {
            fileName: "app/components/Modal/spaThreeColModal.jsx",
            lineNumber: 277,
            columnNumber: 9
          }, this),
          BodyContent({
            titleName: title,
            setTitleName: setTitle,
            descriptionName: description,
            setDescriptionName: setDescription,
            priceName: price,
            setPriceName: setPrice,
            border: true
          }),
          BodyContent({
            titleName: title1,
            setTitleName: setTitle1,
            descriptionName: description1,
            setDescriptionName: setDescription1,
            priceName: price1,
            setPriceName: setPrice1,
            border: true
          }),
          BodyContent({
            titleName: title2,
            setTitleName: setTitle2,
            descriptionName: description2,
            setDescriptionName: setDescription2,
            priceName: price2,
            setPriceName: setPrice2,
            border: false
          }),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `flex ${(content == null ? void 0 : content.id) && isAdmin ? "justify-between" : "justify-end"}`,
            children: [
              (content == null ? void 0 : content.id) && isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "py-1 px-2 border text-white border-red-700 bg-red-700 text-sm font-medium rounded-[5px]",
                onClick: () => setConfirmIsOpen(true),
                title: "delete",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  className: "ri-delete-bin-line"
                }, void 0, false, {
                  fileName: "app/components/Modal/spaThreeColModal.jsx",
                  lineNumber: 318,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/Modal/spaThreeColModal.jsx",
                lineNumber: 313,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "py-1 px-2 border text-white border-primary bg-primary text-sm font-medium rounded-[5px]",
                onClick: () => createHandle(),
                disabled: preventDouble,
                title: "save",
                children: preventDouble ? "Saving..." : "Save"
              }, void 0, false, {
                fileName: "app/components/Modal/spaThreeColModal.jsx",
                lineNumber: 321,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Modal/spaThreeColModal.jsx",
            lineNumber: 307,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/Modal/spaThreeColModal.jsx",
        lineNumber: 276,
        columnNumber: 7
      }, this),
      confirmModalIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(confirmationModal_default, {
        modalIsOpen: confirmModalIsOpen,
        setIsOpen: setConfirmIsOpen,
        content: "Are you sure to delete data?",
        callFunction: deleteHandle,
        cancelHandle: confirmCancelHandle,
        Loader: modalLoader
      }, void 0, false, {
        fileName: "app/components/Modal/spaThreeColModal.jsx",
        lineNumber: 332,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/Modal/spaThreeColModal.jsx",
    lineNumber: 263,
    columnNumber: 5
  }, this);
}
var spaThreeColModal_default = SpaThreeColModal;

// app/components/Modal/spaActivityModal.jsx
var import_react2 = __toESM(require_react());
var import_react_modal2 = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SpaActivityModal({
  content,
  IsModalOpen,
  date,
  closeHandle,
  setRefresh,
  refresh,
  locationId,
  isAdmin
}) {
  const [modalIsOpen, setIsOpen] = (0, import_react2.useState)(
    IsModalOpen === true ? true : false
  );
  const DateFormat = "yyyy-MM-dd";
  const [title, setTitle] = (0, import_react2.useState)(
    !!(content == null ? void 0 : content.treatment) ? content == null ? void 0 : content.treatment : ""
  );
  const [description, setDescription] = (0, import_react2.useState)(
    !!(content == null ? void 0 : content.description) ? content == null ? void 0 : content.description : ""
  );
  const [price, setPrice] = (0, import_react2.useState)(!!(content == null ? void 0 : content.price) ? content == null ? void 0 : content.price : "");
  const [time, setTime] = (0, import_react2.useState)(!!(content == null ? void 0 : content.time) ? content == null ? void 0 : content.time : "");
  const [preventDouble, setPreventDouble] = (0, import_react2.useState)(false);
  const [modalLoader, setModalLoader] = (0, import_react2.useState)(false);
  const [confirmModalIsOpen, setConfirmIsOpen] = (0, import_react2.useState)(false);
  import_react2.default.useEffect(() => {
    if ((title == null ? void 0 : title.length) > 100) {
      setTitle(title == null ? void 0 : title.substring(0, 100));
    }
    if ((description == null ? void 0 : description.length) > 100) {
      setDescription(description == null ? void 0 : description.substring(0, 100));
    }
  }, [title, description]);
  const cancelHandle = () => {
    setIsOpen(false);
    closeHandle();
  };
  const createHandle = async (e) => {
    var _a;
    setPreventDouble(true);
    const body = {
      activity_type: "activities",
      treatment: title,
      date: format(date, DateFormat),
      time,
      location_id: locationId,
      price: !!price ? price : null,
      description: !!description ? description == null ? void 0 : description.trim() : null
    };
    if (!!title) {
      if (!!time) {
        if (content == null ? void 0 : content.id) {
          await directusLoaderLink.items("spa").updateOne(content == null ? void 0 : content.id, body).then((res) => {
            Q.success("Updated successfully");
            cancelHandle();
            setRefresh(!refresh);
          }).catch((err) => {
            console.log(err);
            Q.error(err);
          });
        } else {
          await directusLoaderLink.items("spa").createOne(body).then((res) => {
            Q.success(" Created successfully");
            cancelHandle();
            setRefresh(!refresh);
          }).catch((err) => {
            console.log(err);
            Q.error(err);
          });
        }
        localStorage.setItem(
          "SpaWacthedWeek",
          ((_a = new Date(date)) == null ? void 0 : _a.getDay()) == 0 ? format(addDays(new Date(date), -2), "yyyy-MM-dd") : date
        );
      } else {
        Q.error("Time is required");
      }
    } else {
      Q.error("Title is required");
    }
    setPreventDouble(false);
  };
  const deleteHandle = async () => {
    if (content == null ? void 0 : content.id) {
      setModalLoader(true);
      await directusLoaderLink.items("spa").deleteOne(content == null ? void 0 : content.id).then((res) => {
        Q.success("Data deleted successfully");
      }).catch((err) => {
        console.log(err);
      });
      setModalLoader(false);
      setRefresh(!refresh);
      cancelHandle();
      location.reload();
    }
  };
  const confirmCancelHandle = () => {
    setConfirmIsOpen(false);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_modal2.default, {
    isOpen: modalIsOpen,
    contentLabel: "Logout Modal",
    ariaHideApp: false,
    className: "spaModal",
    overlayClassName: "spaModal_overlay",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `
          flex flex-col p-4 font-normal min-w-[300px] min-h-[300px] bg-[#EFF0EF] border-1 left-5 z-10 gap-4 text-sm top-12`,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "close-div",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
              className: "close-act",
              onClick: cancelHandle,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: "ri-close-line text-primary"
              }, void 0, false, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 155,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/components/Modal/spaActivityModal.jsx",
              lineNumber: 154,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/components/Modal/spaActivityModal.jsx",
            lineNumber: 153,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "col-span-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                htmlFor: "title",
                className: "block text-sm font-medium text-gray-700 uppercase",
                children: "Treatement"
              }, void 0, false, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 159,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative spa-title",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                    type: "text",
                    name: "title",
                    id: "title",
                    placeholder: "Enter the title",
                    value: title,
                    onChange: (e) => setTitle(e.target.value),
                    className: "mt-1 block w-full rounded-md border border-primary py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                  }, void 0, false, {
                    fileName: "app/components/Modal/spaActivityModal.jsx",
                    lineNumber: 166,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "text-[10px] absolute bottom-0 right-2",
                    children: [
                      title == null ? void 0 : title.length,
                      "/100"
                    ]
                  }, void 0, true, {
                    fileName: "app/components/Modal/spaActivityModal.jsx",
                    lineNumber: 175,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 165,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Modal/spaActivityModal.jsx",
            lineNumber: 158,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "col-span-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                htmlFor: "description",
                className: "block text-sm font-medium text-gray-700 uppercase",
                children: "Description"
              }, void 0, false, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 181,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative spa-title",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                    type: "text",
                    name: "description",
                    id: "description",
                    placeholder: "Enter the description",
                    value: description || "",
                    onChange: (e) => setDescription(e.target.value),
                    className: "resize-none min-h-[80px] mt-1 block w-full rounded-md border border-primary py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                  }, void 0, false, {
                    fileName: "app/components/Modal/spaActivityModal.jsx",
                    lineNumber: 188,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "text-[10px] absolute bottom-0 right-2",
                    children: [
                      description == null ? void 0 : description.length,
                      "/100"
                    ]
                  }, void 0, true, {
                    fileName: "app/components/Modal/spaActivityModal.jsx",
                    lineNumber: 197,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 187,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Modal/spaActivityModal.jsx",
            lineNumber: 180,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-row gap-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-1/2 price",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "price",
                    className: "block text-sm font-medium text-gray-700 uppercase",
                    children: "Price"
                  }, void 0, false, {
                    fileName: "app/components/Modal/spaActivityModal.jsx",
                    lineNumber: 204,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "relative mt-1",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        type: "number",
                        name: "price",
                        id: "price",
                        placeholder: "Enter the price",
                        value: price,
                        onChange: (e) => setPrice(e.target.value),
                        className: " block w-full rounded-md border border-primary py-2 px-3 pr-[30px] shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                      }, void 0, false, {
                        fileName: "app/components/Modal/spaActivityModal.jsx",
                        lineNumber: 211,
                        columnNumber: 15
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: " absolute right-3  bottom-[25%] text-center",
                        children: "kr"
                      }, void 0, false, {
                        fileName: "app/components/Modal/spaActivityModal.jsx",
                        lineNumber: 220,
                        columnNumber: 15
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/components/Modal/spaActivityModal.jsx",
                    lineNumber: 210,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 203,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "w-1/2 time",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    htmlFor: "price",
                    className: "block text-sm font-medium text-gray-700 uppercase",
                    children: "Time / Slot"
                  }, void 0, false, {
                    fileName: "app/components/Modal/spaActivityModal.jsx",
                    lineNumber: 226,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "time",
                    name: "Timing",
                    id: "Timing",
                    placeholder: "00:00",
                    value: (time == null ? void 0 : time.slice(0, 5)) || "00:00",
                    onChange: (e) => setTime(e.target.value),
                    className: "mt-1 block w-full rounded-md border border-primary py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                  }, void 0, false, {
                    fileName: "app/components/Modal/spaActivityModal.jsx",
                    lineNumber: 232,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 225,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Modal/spaActivityModal.jsx",
            lineNumber: 202,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `flex ${(content == null ? void 0 : content.id) && isAdmin ? "justify-between" : "justify-end"}`,
            children: [
              (content == null ? void 0 : content.id) && isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "py-1 px-2 border text-white border-red-700 bg-red-700 text-sm font-medium rounded-[5px]",
                onClick: () => setConfirmIsOpen(true),
                title: "delete",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  className: "ri-delete-bin-line"
                }, void 0, false, {
                  fileName: "app/components/Modal/spaActivityModal.jsx",
                  lineNumber: 254,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 249,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "py-1 px-2 border text-white border-primary bg-primary text-sm font-medium rounded-[5px]",
                onClick: () => createHandle(),
                disabled: preventDouble,
                title: "save",
                children: preventDouble ? "Saving..." : "Save"
              }, void 0, false, {
                fileName: "app/components/Modal/spaActivityModal.jsx",
                lineNumber: 257,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/components/Modal/spaActivityModal.jsx",
            lineNumber: 243,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/components/Modal/spaActivityModal.jsx",
        lineNumber: 149,
        columnNumber: 7
      }, this),
      confirmModalIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(confirmationModal_default, {
        modalIsOpen: confirmModalIsOpen,
        setIsOpen: setConfirmIsOpen,
        content: "Are you sure to delete data?",
        callFunction: deleteHandle,
        cancelHandle: confirmCancelHandle,
        Loader: modalLoader
      }, void 0, false, {
        fileName: "app/components/Modal/spaActivityModal.jsx",
        lineNumber: 268,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/Modal/spaActivityModal.jsx",
    lineNumber: 141,
    columnNumber: 5
  }, this);
}
var spaActivityModal_default = SpaActivityModal;

// app/routes/spa.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Spa Dashboard" };
}
function Spa() {
  var _a, _b, _c, _d, _e;
  const loaderData = useLoaderData();
  const [datas, setDatas] = import_react5.default.useState(loaderData);
  const [spaDetails, setSpaDetails] = import_react5.default.useState(loaderData == null ? void 0 : loaderData.spaDetails);
  const LocationId = datas == null ? void 0 : datas.locationId;
  const DateFormat = "yyyy-MM-dd";
  const directus = directusLoaderLink;
  const [currentMonth, setCurrentMonth] = (0, import_react3.useState)(new Date());
  const [currentWeek, setCurrentWeek] = (0, import_react3.useState)(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = (0, import_react3.useState)(new Date());
  const [loading, setLoading] = (0, import_react3.useState)(false);
  const [showActivity, setShowActivity] = (0, import_react3.useState)(true);
  const [showDrinks, setShowDrinks] = (0, import_react3.useState)(true);
  const [modalData, setModalData] = (0, import_react3.useState)("");
  const [activityModalIsOpen, setActivityModalIsOpen] = (0, import_react3.useState)(false);
  const [drinksModalIsOpen, setDrinksModalIsOpen] = (0, import_react3.useState)(false);
  const [refresh, setRefresh] = (0, import_react3.useState)(true);
  (0, import_react3.useEffect)(() => {
    var _a2, _b2, _c2, _d2, _e2;
    const SpaWacthedWeek = localStorage.getItem("SpaWacthedWeek");
    const isUserExist = localStorage.getItem("isUserExist");
    if (!isUserExist) {
      Q.success("You are successfully logged in");
      localStorage.setItem("isUserExist", true);
    }
    if (SpaWacthedWeek) {
      try {
        setCurrentMonth(new Date(SpaWacthedWeek));
        setCurrentWeek(getWeek(new Date(SpaWacthedWeek)));
        setSelectedDate(new Date(SpaWacthedWeek));
        datafetch({ date: new Date(SpaWacthedWeek) });
        localStorage.removeItem("SpaWacthedWeek");
      } catch (err) {
        console.log(err);
      }
    }
    const lastLocation = ((_a2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a2.selected_locations) !== null ? (_b2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _b2.selected_locations : (_c2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _c2.allowed_locations[0].Locations_id;
    localStorage.setItem("admin", (_d2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _d2.is_admin);
    localStorage.setItem("selectedLocation", JSON.stringify(lastLocation));
    localStorage.setItem(
      "showDietary",
      JSON.stringify((_e2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _e2.show_dietary)
    );
  }, [refresh]);
  const pickerRef = (0, import_react3.useRef)();
  const showLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  };
  const datafetch = async (prop) => {
    const startDate = format(
      startOfWeek(prop == null ? void 0 : prop.date, { weekStartsOn: 1 }),
      DateFormat
    );
    const endDate = format(
      startOfWeek(addDays(prop == null ? void 0 : prop.date, 7), { weekStartsOn: 0 }),
      DateFormat
    );
    await directus.items("spa").readByQuery({
      fields: ["*.*.*"],
      filter: {
        date: { _between: [startDate, endDate] },
        location_id: { _eq: LocationId }
      },
      sort: ["time", "id"]
    }).then((e) => {
      setSpaDetails(e == null ? void 0 : e.data);
    }).catch((e) => console.log(e));
  };
  const changeWeekHandle = async (btnType) => {
    showLoader();
    if (btnType === "prev") {
      await datafetch({ date: subWeeks(currentMonth, 1) });
      setCurrentMonth(subWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(subWeeks(currentMonth, 1)));
    }
    if (btnType === "next") {
      await datafetch({ date: addWeeks(currentMonth, 1) });
      setCurrentMonth(addWeeks(currentMonth, 1));
      setCurrentWeek(getWeek(addWeeks(currentMonth, 1)));
    }
  };
  const RenderDays = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    for (let i = 0; i < 7; i++) {
      days.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: `col col-center  ${i !== 6 ? "border-r" : null} bordersky  border-[#C2C2C2] border-collapse p-2 min-w-[110px] table-head`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `col col-center text-sm font-bold text-black`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex justify-between flex-row px-1 align-middle day-options text-white relative",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "day text-xs",
                    children: format(addDays(startDate, i), dateFormat)
                  }, void 0, false, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 194,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex gap-1 text-white bg-sky-200/75 px-0.5 rounded-md absolute right-[-8px] top-[-2px]",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "relative font-normal",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(clickOutsideDiv_default, {
                        setRefresh,
                        refresh,
                        Id: i,
                        startDate: addDays(startDate, i),
                        locationId: LocationId,
                        type: "spa"
                      }, i, false, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 215,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/spa.jsx",
                      lineNumber: 214,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 197,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/spa.jsx",
                lineNumber: 193,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-white text-left font-normal",
                children: format(addDays(startDate, i), "dd/MM/yyyy")
              }, void 0, false, {
                fileName: "app/routes/spa.jsx",
                lineNumber: 227,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/spa.jsx",
            lineNumber: 192,
            columnNumber: 11
          }, this)
        }, i, false, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 186,
          columnNumber: 9
        }, this)
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "days row",
      children: days
    }, void 0, false, {
      fileName: "app/routes/spa.jsx",
      lineNumber: 234,
      columnNumber: 12
    }, this);
  };
  const todayMenu = (prop) => {
    console.log("preview icon clicked");
    Q.warning("preview coming soon!");
  };
  const modalOpenHandle = ({ data, type, date }) => {
    setModalData({ content: !!data && data, title: type, date });
    if (type === "activities") {
      setActivityModalIsOpen(true);
    } else {
      setDrinksModalIsOpen(true);
    }
  };
  const renderCells = (props) => {
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = startOfWeek(addDays(new Date(startDate), 7), {
      weekStartsOn: 0
    });
    const rows = [];
    let days = [];
    let day = startDate;
    const dayFormat = "yyyy-MM-dd";
    while (day < endDate) {
      for (let i = 0; i < 7; i++) {
        const dayData = spaDetails == null ? void 0 : spaDetails.filter((e) => {
          return (e == null ? void 0 : e.date) === format(new Date(day), dayFormat) && (e == null ? void 0 : e.activity_type) === (props == null ? void 0 : props.type);
        });
        const data = dayData[(props == null ? void 0 : props.type) === "activities" ? props == null ? void 0 : props.index : 0];
        const date = day;
        days.push(
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative col cell border-r  border-b bordersky border-[#C2C2C2] border-collapse !pb-0 ${showActivity && (props == null ? void 0 : props.type) === "activities" && (props == null ? void 0 : props.index) == 2 ? " border-b-2 border-b-primary" : ""}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: !!dayData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "h-full",
                children: (props == null ? void 0 : props.type) === "activities" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "h-full p-[15px]",
                  children: (data == null ? void 0 : data.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "relative flex w-full",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-full nunito-font",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "spa-title font-futura text-primary font-medium mb-1",
                            children: data == null ? void 0 : data.treatment
                          }, void 0, false, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 289,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "spa-desc text-primary text-[12px]",
                            children: data == null ? void 0 : data.description
                          }, void 0, false, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 292,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: `spa-price text-primary ${(data == null ? void 0 : data.price) > 0 ? "text-[14px]" : "text-[12px]"}`,
                            children: (data == null ? void 0 : data.price) > 0 ? (data == null ? void 0 : data.price) + " kr" : "Free(unlimited Spots)"
                          }, void 0, false, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 295,
                            columnNumber: 29
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 288,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "w-[10%]",
                        onClick: () => modalOpenHandle({ data, type: props == null ? void 0 : props.type, date }),
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                          className: "ri-edit-line text-primary relative -right-[5px]"
                        }, void 0, false, {
                          fileName: "app/routes/spa.jsx",
                          lineNumber: 305,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 299,
                        columnNumber: 27
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 287,
                    columnNumber: 25
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    onClick: () => modalOpenHandle({ data, type: props == null ? void 0 : props.type, date }),
                    className: ` cursor-pointer nunito-font text-[14px] flex items-center font-semibold`,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                        className: "ri-add-fill color-primary mr-2"
                      }, void 0, false, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 315,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        children: "Add treatment"
                      }, void 0, false, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 316,
                        columnNumber: 27
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 309,
                    columnNumber: 25
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/spa.jsx",
                  lineNumber: 285,
                  columnNumber: 21
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `${i == 0 ? "flex justify-between h-full" : ""}`,
                  children: [
                    i == 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-[12%] min-w-[28px] rotate-180 text-center bg-[#F9F3E5] text-[12px] p-1 uppercase font-futura font-medium text-primary",
                      style: { writingMode: "vertical-rl" },
                      children: props == null ? void 0 : props.type
                    }, void 0, false, {
                      fileName: "app/routes/spa.jsx",
                      lineNumber: 327,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: `${i == 0 ? "" : ""} w-full p-4`,
                      children: (data == null ? void 0 : data.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "relative flex w-full at_the_spa",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "w-full nunito-font",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "atspa title font-futura text-primary text-[14px] py-2",
                                children: data == null ? void 0 : data.treatment
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 338,
                                columnNumber: 31
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "atspa desc font-futura text-primary py-2 text-[14px]",
                                children: data == null ? void 0 : data.treatment_1
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 341,
                                columnNumber: 31
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "atspa font-futura text-primary py-2 text-[14px]",
                                children: data == null ? void 0 : data.treatment_2
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 344,
                                columnNumber: 31
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 337,
                            columnNumber: 29
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "w-[10%]",
                            onClick: () => modalOpenHandle({
                              data,
                              type: props == null ? void 0 : props.type,
                              date
                            }),
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                              className: "ri-edit-line text-primary relative -right-[5px]"
                            }, void 0, false, {
                              fileName: "app/routes/spa.jsx",
                              lineNumber: 358,
                              columnNumber: 31
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 348,
                            columnNumber: 29
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 336,
                        columnNumber: 27
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          onClick: () => modalOpenHandle({
                            data,
                            type: props == null ? void 0 : props.type,
                            date
                          }),
                          className: ` cursor-pointer nunito-font text-[14px] flex items-center font-semibold`,
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                              className: "ri-add-fill color-primary mr-2"
                            }, void 0, false, {
                              fileName: "app/routes/spa.jsx",
                              lineNumber: 373,
                              columnNumber: 31
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              children: [
                                "Add",
                                " ",
                                (props == null ? void 0 : props.type) !== "treatments" ? props == null ? void 0 : props.type : "treatment"
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/spa.jsx",
                              lineNumber: 374,
                              columnNumber: 31
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/spa.jsx",
                          lineNumber: 363,
                          columnNumber: 29
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 362,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/spa.jsx",
                      lineNumber: 334,
                      columnNumber: 23
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/spa.jsx",
                  lineNumber: 321,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: "app/routes/spa.jsx",
                lineNumber: 283,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: "app/routes/spa.jsx",
              lineNumber: 281,
              columnNumber: 13
            }, this)
          }, Math.random(), false, {
            fileName: "app/routes/spa.jsx",
            lineNumber: 273,
            columnNumber: 11
          }, this)
        );
        day = addDays(day, 1);
      }
      rows.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "row spa",
          children: days
        }, Math.random(), false, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 394,
          columnNumber: 9
        }, this)
      );
      days = [];
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "row1",
      children: rows
    }, Math.random(), false, {
      fileName: "app/routes/spa.jsx",
      lineNumber: 403,
      columnNumber: 7
    }, this);
  };
  function handleMonth(pickedMonth) {
    var _a2;
    (_a2 = pickerRef.current) == null ? void 0 : _a2.dismiss();
  }
  async function updatedYear(updated) {
    var _a2, _b2;
    showLoader();
    var selectedISODate = "";
    selectedISODate = new Date(updated.year, updated.month - 1, 1);
    if (((_a2 = new Date(updated.year, updated.month - 1, 1)) == null ? void 0 : _a2.getDay()) == 0) {
      selectedISODate = new Date(updated.year, updated.month - 1, 2);
    }
    if (((_b2 = new Date(updated.year, updated.month - 1, 1)) == null ? void 0 : _b2.getDay()) == 6) {
      selectedISODate = new Date(updated.year, updated.month - 1, 3);
    }
    setSelectedDate(selectedDate);
    setCurrentMonth(selectedISODate);
    setCurrentWeek(getWeek(selectedISODate));
    await datafetch({ date: selectedISODate });
  }
  const renderHeader = () => {
    var _a2, _b2;
    const pickerLang = {
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      from: "From",
      to: "To"
    };
    var dateFormat = "dd";
    const startDate = startOfWeek(
      currentMonth,
      { weekStartsOn: 1 },
      { days: 7 }
    );
    const Week_start_end = `${currentWeek == getWeek(new Date()) && (currentMonth == null ? void 0 : currentMonth.getFullYear()) == ((_a2 = new Date()) == null ? void 0 : _a2.getFullYear()) ? "This week /" : ""} ${format(startDate, dateFormat)} th ${pickerLang.months[startDate.getMonth()]} - ${format(addDays(startDate, 6), dateFormat)} th ${pickerLang.months[(_b2 = addDays(startDate, 6)) == null ? void 0 : _b2.getMonth()]}`;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "spa",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "header row justify-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col mobile-full",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-row custom-date",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mr-2",
                    children: [
                      pickerLang.months[currentMonth.getMonth()],
                      ",",
                      " ",
                      currentMonth.getFullYear()
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 471,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "edit cursor-pointer",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_month_picker.default, {
                      ref: pickerRef,
                      years: {
                        min: { year: new Date().getFullYear() - 40 },
                        max: { year: new Date().getFullYear() + 40 }
                      },
                      value: {
                        year: new Date().getFullYear(),
                        month: new Date().getMonth() + 1
                      },
                      lang: pickerLang.months,
                      onChange: handleMonth,
                      onDismiss: updatedYear,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                        onClick: () => pickerRef.current.show(),
                        className: "ri-edit-fill"
                      }, void 0, false, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 490,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/spa.jsx",
                      lineNumber: 476,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 475,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/spa.jsx",
                lineNumber: 470,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "px-3 font-normal text-center text-base week !text-primary",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-bold",
                    children: "The Spa"
                  }, void 0, false, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 498,
                    columnNumber: 15
                  }, this),
                  " / Week ",
                  currentWeek
                ]
              }, void 0, true, {
                fileName: "app/routes/spa.jsx",
                lineNumber: 497,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/spa.jsx",
            lineNumber: 469,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 468,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "header row justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "icon cursor-pointer",
                onClick: () => changeWeekHandle("prev"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                    className: "ri-arrow-left-line ri-1x  "
                  }, void 0, false, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 511,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "font-nunito font-medium",
                    children: "Previous Week"
                  }, void 0, false, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 512,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/spa.jsx",
                lineNumber: 507,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/spa.jsx",
              lineNumber: 506,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col col-end flex flex-col justify-between items-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "icon cursor-pointer",
                onClick: () => changeWeekHandle("next"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "font-nunito font-medium",
                    children: "Next Week"
                  }, void 0, false, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 520,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                    className: "ri-arrow-right-line ri-1x ml-1 "
                  }, void 0, false, {
                    fileName: "app/routes/spa.jsx",
                    lineNumber: 521,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/spa.jsx",
                lineNumber: 516,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/spa.jsx",
              lineNumber: 515,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 505,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/spa.jsx",
      lineNumber: 467,
      columnNumber: 7
    }, this);
  };
  const updateUserProperties = async (newLocationId) => {
    var _a2;
    const directus2 = directusLoaderLink;
    await directus2.users.updateOne((_a2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a2.id, {
      selected_locations: { id: newLocationId }
    }).then((res) => {
      Q.success("Updated successfully");
      setLoading(true);
      setTimeout(() => {
        window.location.reload(true);
      }, 1700);
    }).catch((err) => {
      Q.error("Something went wrong");
    });
  };
  const Print = () => {
    let printContents = document.getElementById("printContent").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };
  const cellArray = (prop) => {
    var CellData = [];
    for (var i = 0; i < 3; i++) {
      CellData.push(
        renderCells({
          index: i,
          type: prop === "activity" ? "activities" : i == 0 ? "treatments" : i == 1 ? "drinks" : "snacks"
        })
      );
    }
    return CellData;
  };
  const closeHandle = () => {
    setDrinksModalIsOpen(false);
    setActivityModalIsOpen(false);
  };
  const CopyLink = (screenID) => {
    var _a2;
    (_a2 = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a2.writeText(
      `${FRONTEND_URL}/banner/spa/${LocationId}/screen/${screenID}`
    );
    Q.success("Link copied to clipboard!");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.default.Fragment, {
    children: !((_a = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a.spa) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/spa.jsx",
      lineNumber: 668,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
          title: true,
          logout: true,
          current: datas == null ? void 0 : datas.currentUser,
          location: datas == null ? void 0 : datas.currentUser,
          changeLocation: updateUserProperties,
          noLeftLogo: false
        }, void 0, false, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 671,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "main-content-area",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "justify-center items-center px-5 py-4 lg:px-10 p-10 pt-12",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "items-right ",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "pb-7  items-center lg:px-1",
                  children: renderHeader()
                }, void 0, false, {
                  fileName: "app/routes/spa.jsx",
                  lineNumber: 682,
                  columnNumber: 17
                }, this),
                loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, false, {
                  fileName: "app/routes/spa.jsx",
                  lineNumber: 686,
                  columnNumber: 19
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.default.Fragment, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "calendar rounded-md border-gray-500 border-collapse spa__dashboard",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        id: "printContent",
                        children: [
                          RenderDays(),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: `uppercase flex justify-center items-center bg-[#E7ECE6] text-primary ${!showActivity ? " border-b border-b-primary p-[14px]" : "p-[10px]"}`,
                            onClick: () => setShowActivity(!showActivity),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "font-medium mr-[20px] font-futura text-base",
                                children: "Today's Activities"
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 700,
                                columnNumber: 27
                              }, this),
                              !showActivity ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "9",
                                viewBox: "0 0 14 9",
                                fill: "none",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  d: "M1 1.24609L7 7.61596L13 1.24609",
                                  stroke: "#023937",
                                  strokeWidth: "1.5",
                                  strokeLinecap: "round"
                                }, void 0, false, {
                                  fileName: "app/routes/spa.jsx",
                                  lineNumber: 711,
                                  columnNumber: 31
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 704,
                                columnNumber: 29
                              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "9",
                                viewBox: "0 0 14 9",
                                fill: "none",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  d: "M13 8L7 2L1 8",
                                  stroke: "#023937",
                                  strokeWidth: "1.5",
                                  strokeLinecap: "round"
                                }, void 0, false, {
                                  fileName: "app/routes/spa.jsx",
                                  lineNumber: 726,
                                  columnNumber: 31
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 719,
                                columnNumber: 29
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 692,
                            columnNumber: 25
                          }, this),
                          showActivity && cellArray("activity"),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: `uppercase flex justify-center items-center bg-tab_text_color text-primary ${!showDrinks ? "p-[14px]" : "p-[10px]"}`,
                            onClick: () => setShowDrinks(!showDrinks),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "font-medium mr-[20px] font-futura text-base",
                                children: "At the Spa"
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 742,
                                columnNumber: 27
                              }, this),
                              !showDrinks ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "9",
                                viewBox: "0 0 14 9",
                                fill: "none",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  d: "M1 1.24609L7 7.61596L13 1.24609",
                                  stroke: "#023937",
                                  strokeWidth: "1.5",
                                  strokeLinecap: "round"
                                }, void 0, false, {
                                  fileName: "app/routes/spa.jsx",
                                  lineNumber: 754,
                                  columnNumber: 31
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 747,
                                columnNumber: 29
                              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "14",
                                height: "9",
                                viewBox: "0 0 14 9",
                                fill: "none",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  d: "M13 8L7 2L1 8",
                                  stroke: "#023937",
                                  strokeWidth: "1.5",
                                  strokeLinecap: "round"
                                }, void 0, false, {
                                  fileName: "app/routes/spa.jsx",
                                  lineNumber: 769,
                                  columnNumber: 31
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 762,
                                columnNumber: 29
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 736,
                            columnNumber: 25
                          }, this),
                          showDrinks && cellArray()
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 690,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/spa.jsx",
                      lineNumber: 689,
                      columnNumber: 21
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center justify-between print-copy",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "row-content flex justify-start items-center my-5 flex-wrap gap-5 print-list",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "text-black font-medium text-xs inline-flex",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                fill: "none",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "css-i6dzq1",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", {
                                    points: "6 9 6 2 18 2 18 9"
                                  }, void 0, false, {
                                    fileName: "app/routes/spa.jsx",
                                    lineNumber: 795,
                                    columnNumber: 29
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                                  }, void 0, false, {
                                    fileName: "app/routes/spa.jsx",
                                    lineNumber: 796,
                                    columnNumber: 29
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
                                    x: "6",
                                    y: "14",
                                    width: "12",
                                    height: "8"
                                  }, void 0, false, {
                                    fileName: "app/routes/spa.jsx",
                                    lineNumber: 797,
                                    columnNumber: 29
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 784,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "ml-2 cursor-pointer",
                                onClick: () => Print(),
                                children: "PRINT WEEKLY MENU"
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 799,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 783,
                            columnNumber: 25
                          }, this),
                          ((_b = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _b.is_admin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "text-black font-medium text-xs inline-flex",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                className: "ri-file-copy-line"
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 807,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "ml-2 cursor-pointer",
                                onClick: () => CopyLink("a"),
                                children: "COPY LINK TO SCREEN A"
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 808,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 806,
                            columnNumber: 56
                          }, this),
                          ((_c = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _c.is_admin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "text-black font-medium text-xs inline-flex",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                className: "ri-file-copy-line"
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 816,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "ml-2 cursor-pointer",
                                onClick: () => CopyLink("b"),
                                children: "COPY LINK TO SCREEN B"
                              }, void 0, false, {
                                fileName: "app/routes/spa.jsx",
                                lineNumber: 817,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/spa.jsx",
                            lineNumber: 815,
                            columnNumber: 55
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/spa.jsx",
                        lineNumber: 782,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/spa.jsx",
                      lineNumber: 781,
                      columnNumber: 21
                    }, this)
                  ]
                }, Math.random(), true, {
                  fileName: "app/routes/spa.jsx",
                  lineNumber: 688,
                  columnNumber: 19
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/spa.jsx",
              lineNumber: 681,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/routes/spa.jsx",
            lineNumber: 680,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 679,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 856,
          columnNumber: 11
        }, this),
        activityModalIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(spaActivityModal_default, {
          IsModalOpen: activityModalIsOpen,
          setIsParentOpen: setActivityModalIsOpen,
          content: modalData == null ? void 0 : modalData.content,
          date: modalData == null ? void 0 : modalData.date,
          closeHandle,
          setRefresh,
          refresh,
          locationId: LocationId,
          isAdmin: (_d = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _d.is_admin
        }, void 0, false, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 858,
          columnNumber: 13
        }, this),
        drinksModalIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(spaThreeColModal_default, {
          IsModalOpen: drinksModalIsOpen,
          setIsParentOpen: setDrinksModalIsOpen,
          content: modalData == null ? void 0 : modalData.content,
          ActivityName: modalData == null ? void 0 : modalData.title,
          date: modalData == null ? void 0 : modalData.date,
          closeHandle,
          setRefresh,
          refresh,
          locationId: LocationId,
          isAdmin: (_e = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _e.is_admin
        }, void 0, false, {
          fileName: "app/routes/spa.jsx",
          lineNumber: 871,
          columnNumber: 13
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/spa.jsx",
      lineNumber: 670,
      columnNumber: 9
    }, this)
  }, Math.random(), false, {
    fileName: "app/routes/spa.jsx",
    lineNumber: 666,
    columnNumber: 5
  }, this);
}
export {
  Spa as default,
  meta
};
//# sourceMappingURL=/build/routes/spa-D3RUAGFE.js.map
