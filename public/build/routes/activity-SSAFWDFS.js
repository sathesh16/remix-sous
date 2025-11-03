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
  getDay,
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

// app/routes/activity.jsx
var import_react2 = __toESM(require_react());
var import_react_month_picker = __toESM(require_month_picker());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_react4 = __toESM(require_react());

// app/components/activityContent.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ActivityContent({
  data,
  date,
  locationId,
  refresh,
  setRefresh,
  head,
  isAdmin
}) {
  const [title, setTitle] = (0, import_react.useState)(
    !!(data == null ? void 0 : data.activity_name) ? data == null ? void 0 : data.activity_name : ""
  );
  const DateFormat = "yyyy-MM-dd";
  const [description, setDescription] = (0, import_react.useState)(
    !!(data == null ? void 0 : data.activity_description) ? data == null ? void 0 : data.activity_description : ""
  );
  const [time, SetTime] = (0, import_react.useState)(!!(data == null ? void 0 : data.time) ? data == null ? void 0 : data.time : "");
  const [modalIsOpen, setIsOpen] = (0, import_react.useState)(false);
  const [modalLoader, setModalLoader] = (0, import_react.useState)(false);
  const saveHandle = async () => {
    var _a;
    if (!!(data == null ? void 0 : data.id) && (data == null ? void 0 : data.id)) {
      if ((title == null ? void 0 : title.trim()) !== (data == null ? void 0 : data.activity_name) || time !== (data == null ? void 0 : data.time) || (description == null ? void 0 : description.trim()) !== (data == null ? void 0 : data.activity_description)) {
        await directusLoaderLink.items("activities").updateOne(data == null ? void 0 : data.id, {
          activity_name: title == null ? void 0 : title.trim(),
          activity_description: description == null ? void 0 : description.trim(),
          time
        }).then((res) => {
          setRefresh(!refresh);
        }).catch((err) => {
          console.log(err);
        });
      }
    } else {
      if ((title == null ? void 0 : title.trim()) && time !== "") {
        await directusLoaderLink.items("activities").createOne({
          date: format(date, DateFormat),
          activity_name: title == null ? void 0 : title.trim(),
          activity_description: description == null ? void 0 : description.trim(),
          time,
          location_id: locationId
        }).then((res) => {
          setRefresh(!refresh);
        }).catch((err) => {
          console.log(err);
        });
      }
    }
    localStorage.setItem(
      "ActivityWacthedWeek",
      ((_a = new Date(date)) == null ? void 0 : _a.getDay()) == 0 ? format(addDays(new Date(date), -2), "yyyy-MM-dd") : date
    );
  };
  const deleteHandle = async () => {
    if (data == null ? void 0 : data.id) {
      setModalLoader(true);
      await directusLoaderLink.items("activities").deleteOne(data == null ? void 0 : data.id).then((res) => {
        Q.success("Data deleted successfully");
      }).catch((err) => {
        console.log(err);
      });
      location.reload();
      setRefresh(!refresh);
      setModalLoader(false);
    }
  };
  const cancelHandle = () => {
    setIsOpen(false);
  };
  import_react.default.useEffect(() => {
    if ((title == null ? void 0 : title.length) > 100) {
      setTitle(title == null ? void 0 : title.substring(0, 100));
    }
    if ((description == null ? void 0 : description.length) > 100) {
      setDescription(description == null ? void 0 : description.substring(0, 100));
    }
  }, [title, description]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col",
        onBlur: saveHandle,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex border-b border-[#E1E1E1] relative z-[1]",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "min-w-[135px] px-2 py-[30px] relative z-[1] block text-center",
              children: [
                head && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "inline-block uppercase p-2",
                  children: "time"
                }, void 0, false, {
                  fileName: "app/components/activityContent.jsx",
                  lineNumber: 116,
                  columnNumber: 22
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "time",
                  id: "activity-time",
                  name: "activity",
                  value: (time == null ? void 0 : time.slice(0, 5)) || "00:00",
                  onChange: (e) => {
                    SetTime(e.target.value);
                  },
                  className: " rounded-md  text-primary shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                }, void 0, false, {
                  fileName: "app/components/activityContent.jsx",
                  lineNumber: 117,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/activityContent.jsx",
              lineNumber: 115,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "px-4 py-[30px] w-full",
              children: [
                head && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "inline-block uppercase py-2 px-4",
                  children: "Activity"
                }, void 0, false, {
                  fileName: "app/components/activityContent.jsx",
                  lineNumber: 130,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative activity-title",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                      type: "text",
                      id: "activity-title",
                      name: "activity",
                      placeholder: "Enter the activity title",
                      value: title || "",
                      onChange: (e) => {
                        setTitle(e.target.value);
                      },
                      className: "resize-none  min-h-[80px] w-full px-4 py-3 flex rounded-md justify-center items-center text-primary shadow-sm border border-primary focus:border-primary placeholder:font-bold placeholder:text-[#6E7878] placeholder:text-[14px] focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/activityContent.jsx",
                      lineNumber: 134,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-[10px] absolute bottom-0 right-2",
                      children: [
                        title == null ? void 0 : title.length,
                        "/100"
                      ]
                    }, void 0, true, {
                      fileName: "app/components/activityContent.jsx",
                      lineNumber: 145,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/activityContent.jsx",
                  lineNumber: 133,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "relative activity-description",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                      type: "text",
                      name: "description",
                      id: "description",
                      placeholder: "Enter the activity description",
                      value: description || "",
                      onChange: (e) => setDescription(e.target.value),
                      className: "resize-none min-h-[80px] mt-4 block w-full rounded-md border border-primary py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                    }, void 0, false, {
                      fileName: "app/components/activityContent.jsx",
                      lineNumber: 150,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                      className: "text-[10px] absolute bottom-0 right-2",
                      children: [
                        description == null ? void 0 : description.length,
                        "/100"
                      ]
                    }, void 0, true, {
                      fileName: "app/components/activityContent.jsx",
                      lineNumber: 159,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/components/activityContent.jsx",
                  lineNumber: 149,
                  columnNumber: 13
                }, this),
                isAdmin && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: `flex justify-end cursor-pointer absolute bottom-[5px] right-[15px] ${!!(data == null ? void 0 : data.id) && (data == null ? void 0 : data.id) && isAdmin ? "" : "hidden"}`,
                  onClick: () => {
                    return setIsOpen(true);
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                    className: "ri-delete-bin-line"
                  }, void 0, false, {
                    fileName: "app/components/activityContent.jsx",
                    lineNumber: 172,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/components/activityContent.jsx",
                  lineNumber: 164,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/components/activityContent.jsx",
              lineNumber: 128,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/components/activityContent.jsx",
          lineNumber: 114,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/components/activityContent.jsx",
        lineNumber: 113,
        columnNumber: 7
      }, this),
      modalIsOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(confirmationModal_default, {
        modalIsOpen,
        setIsOpen,
        content: "Are you sure to delete data?",
        callFunction: deleteHandle,
        cancelHandle,
        Loader: modalLoader
      }, void 0, false, {
        fileName: "app/components/activityContent.jsx",
        lineNumber: 180,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/components/activityContent.jsx",
    lineNumber: 112,
    columnNumber: 5
  }, this);
}
var activityContent_default = ActivityContent;

// app/routes/activity.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Activity Dashboard" };
}
function Activity() {
  var _a, _b, _c;
  const loaderData = useLoaderData();
  const [datas, setDatas] = import_react4.default.useState(loaderData);
  const [activityDetails, setActivityDetails] = import_react4.default.useState(
    loaderData == null ? void 0 : loaderData.activityDetails
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
    var _a2, _b2, _c2, _d, _e, _f;
    const ActivityWacthedWeek = localStorage.getItem("ActivityWacthedWeek");
    const isUserExist = localStorage.getItem("isUserExist");
    if (!isUserExist) {
      Q.success("You are successfully logged in");
      localStorage.setItem("isUserExist", true);
    }
    if (ActivityWacthedWeek) {
      try {
        setCurrentMonth(new Date(ActivityWacthedWeek));
        setCurrentWeek(getWeek(new Date(ActivityWacthedWeek)));
        setSelectedDate(new Date(ActivityWacthedWeek));
        datafetch({ date: new Date(ActivityWacthedWeek) });
        localStorage.removeItem("ActivityWacthedWeek");
      } catch (err) {
        console.log(err);
      }
    }
    const lastLocation = ((_a2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a2.selected_locations) !== null ? (_b2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _b2.selected_locations : (_c2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _c2.allowed_locations[0].Locations_id;
    localStorage.setItem("admin", (_d = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _d.is_admin);
    localStorage.setItem("activity", (_e = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _e.activity);
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
      startOfWeek(prop == null ? void 0 : prop.date, { weekStartsOn: 5 }),
      DateFormat
    );
    const endDate = format(
      startOfWeek(addDays(prop == null ? void 0 : prop.date, 7), { weekStartsOn: 0 }),
      DateFormat
    );
    await directus.items("activities").readByQuery({
      fields: ["*.*.*"],
      filter: {
        date: { _between: [startDate, endDate] },
        location_id: { _eq: LocationId }
      },
      sort: ["time", "id"]
    }).then((e) => {
      setActivityDetails(e == null ? void 0 : e.data);
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
    const date = getDay(currentMonth) > 4 ? currentMonth : addDays(currentMonth, 4);
    let startDate = startOfWeek(date, { weekStartsOn: 5 });
    for (let i = 0; i < 3; i++) {
      days.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: `col col-center  ${i !== 6 ? "border-r" : null} bordersky  border-[#C2C2C2] border-collapse p-2 min-w-[110px] table-head`,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `col col-center text-sm font-bold text-black`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-between flex-row px-1 align-middle day-options text-white relative",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "day text-xs",
                  children: format(addDays(startDate, i), dateFormat)
                }, void 0, false, {
                  fileName: "app/routes/activity.jsx",
                  lineNumber: 192,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-white text-left font-normal",
                  children: format(addDays(startDate, i), "dd/MM/yyyy")
                }, void 0, false, {
                  fileName: "app/routes/activity.jsx",
                  lineNumber: 195,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "relative font-normal",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(clickOutsideDiv_default, {
                    setRefresh,
                    refresh,
                    Id: i,
                    startDate: addDays(startDate, i),
                    locationId: LocationId,
                    type: "activity"
                  }, i, false, {
                    fileName: "app/routes/activity.jsx",
                    lineNumber: 199,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/activity.jsx",
                  lineNumber: 198,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/activity.jsx",
              lineNumber: 191,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/activity.jsx",
            lineNumber: 190,
            columnNumber: 11
          }, this)
        }, i, false, {
          fileName: "app/routes/activity.jsx",
          lineNumber: 184,
          columnNumber: 9
        }, this)
      );
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "days row",
      children: days
    }, void 0, false, {
      fileName: "app/routes/activity.jsx",
      lineNumber: 214,
      columnNumber: 12
    }, this);
  };
  const todayMenu = (prop) => {
    console.log("preview icon clicked");
    Q.warning("preview coming soon!");
  };
  var renderStations;
  const renderCells = (props) => {
    var _a2;
    const date = getDay(currentMonth) > 4 ? currentMonth : addDays(currentMonth, 4);
    const startDate = startOfWeek(date, { weekStartsOn: 5 });
    const endDate = startOfWeek(addDays(new Date(startDate), 7), {
      weekStartsOn: 0
    });
    const rows = [];
    let days = [];
    let day = startDate;
    const dayFormat = "yyyy-MM-dd";
    renderStations = [];
    while (day < endDate) {
      for (let i = 0; i < 3; i++) {
        const dayData = activityDetails == null ? void 0 : activityDetails.filter((e) => {
          return (e == null ? void 0 : e.date) === format(new Date(day), dayFormat);
        });
        days.push(
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: `dashboard relative col cell border-r border-[#C2C2C2] border-collapse text-primary`,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "day-column",
              children: [
                !!dayData && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "day-activity",
                  children: dayData == null ? void 0 : dayData.map((e, i2) => {
                    var _a3;
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "w-full",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(activityContent_default, {
                        data: e,
                        date: day,
                        locationId: LocationId,
                        setRefresh,
                        refresh,
                        isAdmin: (_a3 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a3.is_admin,
                        head: i2 == 0 ? true : false
                      }, void 0, false, {
                        fileName: "app/routes/activity.jsx",
                        lineNumber: 254,
                        columnNumber: 23
                      }, this)
                    }, e == null ? void 0 : e.id, false, {
                      fileName: "app/routes/activity.jsx",
                      lineNumber: 253,
                      columnNumber: 21
                    }, this);
                  })
                }, void 0, false, {
                  fileName: "app/routes/activity.jsx",
                  lineNumber: 251,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(activityContent_default, {
                  data: "",
                  date: day,
                  locationId: LocationId,
                  setRefresh,
                  refresh,
                  head: (dayData == null ? void 0 : dayData.length) == 0 ? true : false,
                  isAdmin: (_a2 = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a2.is_admin
                }, void 0, false, {
                  fileName: "app/routes/activity.jsx",
                  lineNumber: 267,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/activity.jsx",
              lineNumber: 249,
              columnNumber: 13
            }, this)
          }, Math.random(), false, {
            fileName: "app/routes/activity.jsx",
            lineNumber: 245,
            columnNumber: 11
          }, this)
        );
        day = addDays(day, 1);
      }
      rows.push(
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "row activity",
          children: days
        }, Math.random(), false, {
          fileName: "app/routes/activity.jsx",
          lineNumber: 282,
          columnNumber: 9
        }, this)
      );
      days = [];
    }
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "row1",
      children: rows
    }, Math.random(), false, {
      fileName: "app/routes/activity.jsx",
      lineNumber: 291,
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
      className: "activity",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "header row justify-center ",
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
                    fileName: "app/routes/activity.jsx",
                    lineNumber: 359,
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
                        fileName: "app/routes/activity.jsx",
                        lineNumber: 378,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/activity.jsx",
                      lineNumber: 364,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/activity.jsx",
                    lineNumber: 363,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/activity.jsx",
                lineNumber: 358,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "px-3 font-normal text-center text-base week",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-medium",
                    children: "Activities"
                  }, void 0, false, {
                    fileName: "app/routes/activity.jsx",
                    lineNumber: 386,
                    columnNumber: 15
                  }, this),
                  " / Week",
                  " ",
                  currentWeek
                ]
              }, void 0, true, {
                fileName: "app/routes/activity.jsx",
                lineNumber: 385,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/activity.jsx",
            lineNumber: 357,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/activity.jsx",
          lineNumber: 356,
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
                    fileName: "app/routes/activity.jsx",
                    lineNumber: 400,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "font-nunito font-medium",
                    children: "Previous Week"
                  }, void 0, false, {
                    fileName: "app/routes/activity.jsx",
                    lineNumber: 401,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/activity.jsx",
                lineNumber: 396,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/activity.jsx",
              lineNumber: 395,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: "This week's activities"
            }, void 0, false, {
              fileName: "app/routes/activity.jsx",
              lineNumber: 404,
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
                    fileName: "app/routes/activity.jsx",
                    lineNumber: 410,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                    className: "ri-arrow-right-line ri-1x ml-1 "
                  }, void 0, false, {
                    fileName: "app/routes/activity.jsx",
                    lineNumber: 411,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/activity.jsx",
                lineNumber: 406,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/activity.jsx",
              lineNumber: 405,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/routes/activity.jsx",
          lineNumber: 394,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/activity.jsx",
      lineNumber: 355,
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
  const CopyLink = () => {
    var _a2;
    (_a2 = navigator == null ? void 0 : navigator.clipboard) == null ? void 0 : _a2.writeText(
      `${FRONTEND_URL}/banner/activities/${LocationId}`
    );
    Q.success("Link copied to clipboard!");
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.default.Fragment, {
    children: !((_a = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _a.activity) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Custom404Page, {}, void 0, false, {
      fileName: "app/routes/activity.jsx",
      lineNumber: 536,
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
          fileName: "app/routes/activity.jsx",
          lineNumber: 539,
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
                  fileName: "app/routes/activity.jsx",
                  lineNumber: 550,
                  columnNumber: 17
                }, this),
                loading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, false, {
                  fileName: "app/routes/activity.jsx",
                  lineNumber: 554,
                  columnNumber: 19
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react4.default.Fragment, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "calendar rounded-md border-gray-500 ... border-collapse overflow-hidden",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        id: "printContent",
                        children: [
                          RenderDays(),
                          renderCells()
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/activity.jsx",
                        lineNumber: 558,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/activity.jsx",
                      lineNumber: 557,
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
                                    fileName: "app/routes/activity.jsx",
                                    lineNumber: 577,
                                    columnNumber: 29
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                    d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
                                  }, void 0, false, {
                                    fileName: "app/routes/activity.jsx",
                                    lineNumber: 578,
                                    columnNumber: 29
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", {
                                    x: "6",
                                    y: "14",
                                    width: "12",
                                    height: "8"
                                  }, void 0, false, {
                                    fileName: "app/routes/activity.jsx",
                                    lineNumber: 579,
                                    columnNumber: 29
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/activity.jsx",
                                lineNumber: 566,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "ml-2 cursor-pointer",
                                onClick: () => Print(),
                                children: "PRINT WEEKLY MENU"
                              }, void 0, false, {
                                fileName: "app/routes/activity.jsx",
                                lineNumber: 581,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/activity.jsx",
                            lineNumber: 565,
                            columnNumber: 25
                          }, this),
                          ((_c = datas == null ? void 0 : datas.currentUser) == null ? void 0 : _c.is_admin) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "text-black font-medium text-xs inline-flex",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                className: "ri-file-copy-line"
                              }, void 0, false, {
                                fileName: "app/routes/activity.jsx",
                                lineNumber: 589,
                                columnNumber: 27
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "ml-2 cursor-pointer",
                                onClick: () => CopyLink(),
                                children: "COPY LINK TO BANNER"
                              }, void 0, false, {
                                fileName: "app/routes/activity.jsx",
                                lineNumber: 590,
                                columnNumber: 27
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/activity.jsx",
                            lineNumber: 588,
                            columnNumber: 56
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/activity.jsx",
                        lineNumber: 564,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/activity.jsx",
                      lineNumber: 563,
                      columnNumber: 21
                    }, this)
                  ]
                }, Math.random(), true, {
                  fileName: "app/routes/activity.jsx",
                  lineNumber: 556,
                  columnNumber: 19
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/activity.jsx",
              lineNumber: 549,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/routes/activity.jsx",
            lineNumber: 548,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/routes/activity.jsx",
          lineNumber: 547,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
          fileName: "app/routes/activity.jsx",
          lineNumber: 628,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/routes/activity.jsx",
      lineNumber: 538,
      columnNumber: 9
    }, this)
  }, Math.random(), false, {
    fileName: "app/routes/activity.jsx",
    lineNumber: 534,
    columnNumber: 5
  }, this);
}
export {
  Activity as default,
  meta
};
//# sourceMappingURL=/build/routes/activity-SSAFWDFS.js.map
