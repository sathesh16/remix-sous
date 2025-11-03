import {
  clickOutsideDiv_default,
  confirmationModal_default,
  require_month_picker
} from "/build/_shared/chunk-GNOU3FC5.js";
import {
  useHydrated
} from "/build/_shared/chunk-KATHKNLH.js";
import {
  Loader
} from "/build/_shared/chunk-SYZM45ZP.js";
import {
  import_react_select_cjs_default
} from "/build/_shared/chunk-MOIBM2EW.js";
import {
  require_db
} from "/build/_shared/chunk-HHTSHZGZ.js";
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
  ISS_DENMARK_HQ,
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

// app/routes/conference.jsx
var import_react2 = __toESM(require_react());
var import_react_month_picker = __toESM(require_month_picker());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_react4 = __toESM(require_react());

// app/components/Modal/conferenceModal.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ConferenceModal({
  date,
  locationId,
  roomDetail,
  showPlaceHolder,
  content,
  setRefresh,
  refresh,
  popupView,
  isAdmin
}) {
  const isHydrated = useHydrated();
  const DateFormat = "yyyy-MM-dd";
  const [roomName, setRoomName] = import_react.default.useState(
    !!(content == null ? void 0 : content.room_id) ? content == null ? void 0 : content.room_id : ""
  );
  const [companyName, setCompanyName] = import_react.default.useState(
    !!(content == null ? void 0 : content.company_name) ? content == null ? void 0 : content.company_name : ""
  );
  const [modalIsOpen, setIsOpen] = (0, import_react.useState)(false);
  const [modalLoader, setModalLoader] = (0, import_react.useState)(false);
  const [isDivVisible, setDivVisible] = (0, import_react.useState)(false);
  const [preventDouble, setPreventDouble] = (0, import_react.useState)(false);
  const divRef = (0, import_react.useRef)(null);
  const handleClickOutside = (event) => {
    setDivVisible(false);
    setCompanyName(!!(content == null ? void 0 : content.company_name) ? content == null ? void 0 : content.company_name : "");
    setRoomName(!!(content == null ? void 0 : content.room_id) ? content == null ? void 0 : content.room_id : "");
  };
  (0, import_react.useEffect)(() => {
    const handleClickOutside2 = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setDivVisible(false);
        setCompanyName(!!(content == null ? void 0 : content.company_name) ? content == null ? void 0 : content.company_name : "");
        setRoomName(!!(content == null ? void 0 : content.room_id) ? content == null ? void 0 : content.room_id : "");
      }
    };
    document.addEventListener("mousedown", handleClickOutside2);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  }, []);
  const toggleDiv = async () => {
    setDivVisible(!isDivVisible);
  };
  const createHandle = async (e) => {
    var _a, _b;
    const directus = directusLoaderLink;
    setPreventDouble(true);
    if (((_a = companyName == null ? void 0 : companyName.trim()) == null ? void 0 : _a.length) > 0) {
      if (!!roomName) {
        if (content == null ? void 0 : content.id) {
          await directus.items("conference").updateOne(content == null ? void 0 : content.id, {
            date: format(date, DateFormat),
            company_name: companyName,
            room_id: roomName == null ? void 0 : roomName.id,
            location_id: locationId
          }).then((res) => {
            Q.success("Updated successfully");
            setDivVisible(false);
            location.reload();
            setRefresh(!refresh);
          }).catch((err) => {
            console.log(err);
            Q.error(err);
          });
        } else {
          await directus.items("conference").createOne({
            date: format(date, DateFormat),
            company_name: companyName,
            room_id: roomName == null ? void 0 : roomName.id,
            location_id: locationId
          }).then((res) => {
            Q.success(" Created successfully");
            setDivVisible(false);
            setRefresh(!refresh);
          }).catch((err) => {
            console.log(err);
            Q.error(err);
          });
        }
        localStorage.setItem(
          "ConferenceWacthedWeek",
          ((_b = new Date(date)) == null ? void 0 : _b.getDay()) == 0 ? format(addDays(new Date(date), -2), "yyyy-MM-dd") : date
        );
      } else {
        Q.error("Rooms name is required");
      }
    } else {
      Q.error("Company name is required");
    }
    setPreventDouble(false);
  };
  const RepeatSelection = () => {
    const onChangeHandle = (e) => {
      setRoomName(e);
      return "";
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: isHydrated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_select_cjs_default._default, {
        id: "rooms",
        instanceId: "roomId",
        classNamePrefix: "cursor-pointer react-select",
        className: "react-select-container font-normal text-sm w-full",
        maxMenuHeight: 250,
        onChange: (e) => onChangeHandle(e),
        isSearchable: false,
        components: { IndicatorSeparator: () => null },
        value: roomName,
        options: roomDetail,
        getOptionLabel: (option) => option.name,
        getOptionValue: (option) => option,
        styles: {
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            boxShadow: "none"
          })
        }
      }, void 0, false, {
        fileName: "app/components/Modal/conferenceModal.jsx",
        lineNumber: 125,
        columnNumber: 11
      }, this) : null
    }, void 0, false, {
      fileName: "app/components/Modal/conferenceModal.jsx",
      lineNumber: 123,
      columnNumber: 7
    }, this);
  };
  const deleteHandle = async () => {
    if (content == null ? void 0 : content.id) {
      setModalLoader(true);
      await directusLoaderLink.items("conference").deleteOne(content == null ? void 0 : content.id).then((res) => {
        Q.success("Data deleted successfully");
      }).catch((err) => {
        console.log(err);
      });
      setRefresh(!refresh);
      setModalLoader(false);
      location.reload();
    }
  };
  const cancelHandle = () => {
    setIsOpen(false);
  };
  import_react.default.useEffect(() => {
    if ((companyName == null ? void 0 : companyName.length) > 100) {
      setCompanyName(companyName == null ? void 0 : companyName.substring(0, 100));
    }
  }, [companyName]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `relative ${popupView ? "c-popup-child" : ""}`,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: `tasksname font-futura p-2 text-left font-bold ${showPlaceHolder ? "no-data" : ""}`,
        onClick: toggleDiv,
        children: showPlaceHolder ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "flex",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                className: "ri-add-fill color-primary mr-2"
              }, void 0, false, {
                fileName: "app/components/Modal/conferenceModal.jsx",
                lineNumber: 186,
                columnNumber: 15
              }, this),
              "Add company"
            ]
          }, void 0, true, {
            fileName: "app/components/Modal/conferenceModal.jsx",
            lineNumber: 185,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/components/Modal/conferenceModal.jsx",
          lineNumber: 184,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
          children: content == null ? void 0 : content.company_name
        }, void 0, false, {
          fileName: "app/components/Modal/conferenceModal.jsx",
          lineNumber: 191,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/Modal/conferenceModal.jsx",
        lineNumber: 177,
        columnNumber: 7
      }, this),
      isDivVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "div-block",
        ref: divRef,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: `addcompany flex flex-col p-4 font-normal absolute min-w-[300px] min-h-[300px] bg-[#E7ECE6] border-1 z-10 gap-3 text-sm rounded-[7px]`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                className: "close-act",
                onClick: handleClickOutside,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  className: "ri-close-line text-primary"
                }, void 0, false, {
                  fileName: "app/components/Modal/conferenceModal.jsx",
                  lineNumber: 201,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/components/Modal/conferenceModal.jsx",
                lineNumber: 200,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/components/Modal/conferenceModal.jsx",
              lineNumber: 199,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col-span-6 mb-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "room-name",
                  className: "block text-sm font-medium text-gray-700 uppercase",
                  children: "Company"
                }, void 0, false, {
                  fileName: "app/components/Modal/conferenceModal.jsx",
                  lineNumber: 205,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative conference-name",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                      type: "text",
                      name: "company-name",
                      id: "company-name",
                      placeholder: "Company Name",
                      required: true,
                      value: companyName,
                      onChange: (e) => setCompanyName(e.target.value),
                      autoComplete: "given-name",
                      className: "resize-none  min-h-[80px] mt-1 block w-full rounded-[3px] border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/Modal/conferenceModal.jsx",
                      lineNumber: 212,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-[10px] absolute bottom-0 right-2",
                      children: [
                        companyName == null ? void 0 : companyName.length,
                        "/100"
                      ]
                    }, void 0, true, {
                      fileName: "app/components/Modal/conferenceModal.jsx",
                      lineNumber: 224,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/Modal/conferenceModal.jsx",
                  lineNumber: 211,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/Modal/conferenceModal.jsx",
              lineNumber: 204,
              columnNumber: 13
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "col-span-6 mb-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                  htmlFor: "room-name",
                  className: "block text-sm font-medium text-gray-700 uppercase",
                  children: "ROOM"
                }, void 0, false, {
                  fileName: "app/components/Modal/conferenceModal.jsx",
                  lineNumber: 230,
                  columnNumber: 15
                }, this),
                RepeatSelection(false)
              ]
            }, void 0, true, {
              fileName: "app/components/Modal/conferenceModal.jsx",
              lineNumber: 229,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: `flex pt-6 ${(content == null ? void 0 : content.id) && isAdmin ? "justify-between" : "justify-end"}`,
              children: [
                (content == null ? void 0 : content.id) && isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "py-1 px-2 border text-white border-red-700 bg-red-700 font-medium rounded-[5px] uppercase min-w-[100px] text-[12px]",
                  onClick: () => setIsOpen(true),
                  title: "delete",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                    className: "ri-delete-bin-line"
                  }, void 0, false, {
                    fileName: "app/components/Modal/conferenceModal.jsx",
                    lineNumber: 249,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/Modal/conferenceModal.jsx",
                  lineNumber: 244,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  className: "py-1 px-2 border text-white border-primary bg-primary font-medium rounded-[5px] uppercase min-w-[100px] text-[12px]",
                  onClick: () => createHandle(),
                  disabled: preventDouble,
                  title: "save",
                  children: preventDouble ? "Saving..." : "Save"
                }, void 0, false, {
                  fileName: "app/components/Modal/conferenceModal.jsx",
                  lineNumber: 252,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/Modal/conferenceModal.jsx",
              lineNumber: 238,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/Modal/conferenceModal.jsx",
          lineNumber: 196,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/components/Modal/conferenceModal.jsx",
        lineNumber: 195,
        columnNumber: 9
      }, this),
      modalIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(confirmationModal_default, {
        modalIsOpen,
        setIsOpen,
        content: "Are you sure to delete data?",
        callFunction: deleteHandle,
        cancelHandle,
        Loader: modalLoader
      }, void 0, false, {
        fileName: "app/components/Modal/conferenceModal.jsx",
        lineNumber: 265,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/Modal/conferenceModal.jsx",
    lineNumber: 176,
    columnNumber: 5
  }, this);
}
var conferenceModal_default = ConferenceModal;

// app/routes/conference.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Conference Dashboard" };
}
function Conference() {
  var _a, _b, _c, _d;
  const loaderData = useLoaderData();
  const [datas, setDatas] = import_react4.default.useState(loaderData);
  const [roomDetail, setRoomDetail] = import_react4.default.useState(loaderData == null ? void 0 : loaderData.RoomDetails);
  const [conferenceDetails, setConferenceDetails] = import_react4.default.useState(
    loaderData == null ? void 0 : loaderData.conferenceDetails
  );
  const LocationId = datas == null ? void 0 : datas.locationId;
  const DateFormat = "yyyy-MM-dd";
  const directus = directusLoaderLink;
  const [currentMonth, setCurrentMonth] = (0, import_react2.useState)(new Date());
  const [currentWeek, setCurrentWeek] = (0, import_react2.useState)(getWeek(currentMonth));
  const [selectedDate, setSelectedDate] = (0, import_react2.useState)(new Date());
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const [refresh, setRefresh] = (0, import_react2.useState)(true);
  (0, import_react2.useEffect)(() => {
    var _a2, _b2, _c2, _d2, _e, _f;
    const ConferenceWacthedWeek = localStorage.getItem("ConferenceWacthedWeek");
    const isUserExist = localStorage.getItem("isUserExist");
    if (!isUserExist) {
      Q.success("You are successfully logged in");
      localStorage.setItem("isUserExist", true);
    }
    if (ConferenceWacthedWeek) {
      try {
        setCurrentMonth(new Date(ConferenceWacthedWeek));
        setCurrentWeek(getWeek(new Date(ConferenceWacthedWeek)));
        setSelectedDate(new Date(ConferenceWacthedWeek));
        datafetch({ date: new Date(ConferenceWacthedWeek) });
        localStorage.removeItem("ConferenceWacthedWeek");
      } catch (err) {
        console.log(err);
      }
    }
    const lastLocation = ((_a2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a2.selected_locations) !== null ? (_b2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _b2.selected_locations : (_c2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _c2.allowed_locations[0].Locations_id;
    localStorage.setItem("admin", (_d2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _d2.is_admin);
    localStorage.setItem("conference", (_e = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _e.conference);
    localStorage.setItem("selectedLocation", JSON.stringify(lastLocation));
    localStorage.setItem(
      "showDietary",
      JSON.stringify((_f = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _f.show_dietary)
    );
  }, [refresh]);
  const pickerRef = (0, import_react2.useRef)();
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
    await directus.items("conference").readByQuery({
      fields: ["*.*.*"],
      filter: {
        date: { _between: [startDate, endDate] },
        location_id: { _eq: LocationId }
      },
      sort: ["id"]
    }).then((e) => {
      setConferenceDetails(e == null ? void 0 : e.data);
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
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 200,
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
                        type: "conference"
                      }, i, false, {
                        fileName: "app/routes/conference.jsx",
                        lineNumber: 221,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/conference.jsx",
                      lineNumber: 220,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 203,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/conference.jsx",
                lineNumber: 199,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "text-white text-left font-normal",
                children: format(addDays(startDate, i), "dd/MM/yyyy")
              }, void 0, false, {
                fileName: "app/routes/conference.jsx",
                lineNumber: 233,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/conference.jsx",
            lineNumber: 198,
            columnNumber: 11
          }, this)
        }, i, false, {
          fileName: "app/routes/conference.jsx",
          lineNumber: 192,
          columnNumber: 9
        }, this)
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "days row conference_day",
      children: days
    }, void 0, false, {
      fileName: "app/routes/conference.jsx",
      lineNumber: 240,
      columnNumber: 12
    }, this);
  };
  var renderStations;
  const renderCells = (props) => {
    var _a2;
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
    const endDate = startOfWeek(addDays(new Date(startDate), 7), {
      weekStartsOn: 0
    });
    const rows = [];
    let days = [];
    let day = startDate;
    const dayFormat = "yyyy-MM-dd";
    renderStations = [];
    while (day < endDate) {
      for (let i = 0; i < 7; i++) {
        const dayData = conferenceDetails == null ? void 0 : conferenceDetails.filter((e) => {
          return (e == null ? void 0 : e.date) === format(new Date(day), dayFormat);
        });
        days.push(
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `relative col cell border-r  border-b bordersky border-[#C2C2C2] border-collapse ${(dayData == null ? void 0 : dayData.length) >= 4 ? "c-popup-bottom" : ""}`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: [
                !!dayData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: dayData == null ? void 0 : dayData.map((e) => {
                    var _a3;
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "company_lists",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(conferenceModal_default, {
                        date: day,
                        locationId: LocationId,
                        roomDetail,
                        showPlaceHolder: false,
                        content: e,
                        setRefresh,
                        refresh,
                        popupView: false,
                        isAdmin: (_a3 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a3.is_admin
                      }, void 0, false, {
                        fileName: "app/routes/conference.jsx",
                        lineNumber: 273,
                        columnNumber: 23
                      }, this)
                    }, e == null ? void 0 : e.id, false, {
                      fileName: "app/routes/conference.jsx",
                      lineNumber: 272,
                      columnNumber: 21
                    }, this);
                  })
                }, void 0, false, {
                  fileName: "app/routes/conference.jsx",
                  lineNumber: 270,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(conferenceModal_default, {
                  date: day,
                  locationId: LocationId,
                  roomDetail,
                  showPlaceHolder: true,
                  content: "",
                  setRefresh,
                  refresh,
                  popupView: (dayData == null ? void 0 : dayData.length) >= 4 ? true : false,
                  isAdmin: (_a2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a2.is_admin
                }, void 0, false, {
                  fileName: "app/routes/conference.jsx",
                  lineNumber: 288,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/conference.jsx",
              lineNumber: 268,
              columnNumber: 13
            }, this)
          }, Math.random(), false, {
            fileName: "app/routes/conference.jsx",
            lineNumber: 262,
            columnNumber: 11
          }, this)
        );
        day = addDays(day, 1);
      }
      rows.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "row conference",
          children: days
        }, Math.random(), false, {
          fileName: "app/routes/conference.jsx",
          lineNumber: 305,
          columnNumber: 9
        }, this)
      );
      days = [];
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "row1",
      children: rows
    }, Math.random(), false, {
      fileName: "app/routes/conference.jsx",
      lineNumber: 314,
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
      className: "conference",
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
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 382,
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
                        fileName: "app/routes/conference.jsx",
                        lineNumber: 401,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/conference.jsx",
                      lineNumber: 387,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 386,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/conference.jsx",
                lineNumber: 381,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "px-3 font-normal text-center text-base week",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-medium",
                    children: "Conference"
                  }, void 0, false, {
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 409,
                    columnNumber: 15
                  }, this),
                  " / Week",
                  " ",
                  currentWeek
                ]
              }, void 0, true, {
                fileName: "app/routes/conference.jsx",
                lineNumber: 408,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/conference.jsx",
            lineNumber: 380,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/conference.jsx",
          lineNumber: 379,
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
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 420,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "font-nunito font-medium",
                    children: "Previous Week"
                  }, void 0, false, {
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 421,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/conference.jsx",
                lineNumber: 416,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/conference.jsx",
              lineNumber: 415,
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
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 429,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                    className: "ri-arrow-right-line ri-1x ml-1 "
                  }, void 0, false, {
                    fileName: "app/routes/conference.jsx",
                    lineNumber: 430,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/conference.jsx",
                lineNumber: 425,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/conference.jsx",
              lineNumber: 424,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/conference.jsx",
          lineNumber: 414,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/conference.jsx",
      lineNumber: 378,
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
  const CopyLink = (screenID) => {
    var _a2;
    (_a2 = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a2.writeText(
      `${FRONTEND_URL}/banner/conference/${LocationId}/screen/${screenID}`
    );
    Q.success("Link copied to clipboard!");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.default.Fragment, {
    children: !((_a = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a.conference) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/conference.jsx",
      lineNumber: 555,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
          title: true,
          logout: true,
          current: datas == null ? void 0 : datas.currentUser,
          location: datas == null ? void 0 : datas.currentUser,
          changeLocation: updateUserProperties,
          noLeftLogo: ((_b = ISS_DENMARK_HQ) == null ? void 0 : _b.includes(LocationId)) ? true : false
        }, void 0, false, {
          fileName: "app/routes/conference.jsx",
          lineNumber: 558,
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
                  fileName: "app/routes/conference.jsx",
                  lineNumber: 569,
                  columnNumber: 17
                }, this),
                loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, false, {
                  fileName: "app/routes/conference.jsx",
                  lineNumber: 573,
                  columnNumber: 19
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.default.Fragment, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "calendar rounded-md border-gray-500 border-collapse conference_dashboard",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        id: "printContent",
                        children: [
                          RenderDays(),
                          renderCells()
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/conference.jsx",
                        lineNumber: 577,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/conference.jsx",
                      lineNumber: 576,
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
                                    fileName: "app/routes/conference.jsx",
                                    lineNumber: 596,
                                    columnNumber: 29
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                                  }, void 0, false, {
                                    fileName: "app/routes/conference.jsx",
                                    lineNumber: 597,
                                    columnNumber: 29
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
                                    x: "6",
                                    y: "14",
                                    width: "12",
                                    height: "8"
                                  }, void 0, false, {
                                    fileName: "app/routes/conference.jsx",
                                    lineNumber: 598,
                                    columnNumber: 29
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/conference.jsx",
                                lineNumber: 585,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "ml-2 cursor-pointer",
                                onClick: () => Print(),
                                children: "PRINT WEEKLY MENU"
                              }, void 0, false, {
                                fileName: "app/routes/conference.jsx",
                                lineNumber: 600,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/conference.jsx",
                            lineNumber: 584,
                            columnNumber: 25
                          }, this),
                          ((_c = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _c.is_admin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "text-black font-medium text-xs inline-flex",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                className: "ri-file-copy-line"
                              }, void 0, false, {
                                fileName: "app/routes/conference.jsx",
                                lineNumber: 608,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "ml-2 cursor-pointer",
                                onClick: () => CopyLink("a"),
                                children: "COPY LINK TO SCREEN A"
                              }, void 0, false, {
                                fileName: "app/routes/conference.jsx",
                                lineNumber: 609,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/conference.jsx",
                            lineNumber: 607,
                            columnNumber: 56
                          }, this),
                          ((_d = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _d.is_admin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "text-black font-medium text-xs inline-flex",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                className: "ri-file-copy-line"
                              }, void 0, false, {
                                fileName: "app/routes/conference.jsx",
                                lineNumber: 617,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "ml-2 cursor-pointer",
                                onClick: () => CopyLink("b"),
                                children: "COPY LINK TO SCREEN B"
                              }, void 0, false, {
                                fileName: "app/routes/conference.jsx",
                                lineNumber: 618,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/conference.jsx",
                            lineNumber: 616,
                            columnNumber: 56
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/conference.jsx",
                        lineNumber: 583,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/conference.jsx",
                      lineNumber: 582,
                      columnNumber: 21
                    }, this)
                  ]
                }, Math.random(), true, {
                  fileName: "app/routes/conference.jsx",
                  lineNumber: 575,
                  columnNumber: 19
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/conference.jsx",
              lineNumber: 568,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/routes/conference.jsx",
            lineNumber: 567,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/conference.jsx",
          lineNumber: 566,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/routes/conference.jsx",
          lineNumber: 656,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/conference.jsx",
      lineNumber: 557,
      columnNumber: 9
    }, this)
  }, Math.random(), false, {
    fileName: "app/routes/conference.jsx",
    lineNumber: 553,
    columnNumber: 5
  }, this);
}
export {
  Conference as default,
  meta
};
//# sourceMappingURL=/build/routes/conference-BCF6FKNY.js.map
