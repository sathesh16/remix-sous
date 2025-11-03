import {
  require_dist
} from "/build/_shared/chunk-PHEGSDT5.js";
import {
  DeleteModel
} from "/build/_shared/chunk-C4IBOHCH.js";
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
  Q,
  getAssetURL
} from "/build/_shared/chunk-776WLWWM.js";
import {
  ISS_DENMARK_HQ,
  SECTION_6_1_ID,
  SECTION_6_2_ID,
  SECTION_6_3_ID,
  SECTION_7_1_ID,
  SECTION_7_2_ID,
  SECTION_7_3_ID,
  directusLoaderLink
} from "/build/_shared/chunk-YBWC7QFI.js";
import {
  require_session
} from "/build/_shared/chunk-2FLU7E64.js";
import {
  Form,
  useLoaderData,
  useLocation,
  useNavigate
} from "/build/_shared/chunk-GKE4LW75.js";
import {
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-BXKBYPJS.js";
import {
  __toESM
} from "/build/_shared/chunk-JE7OEZ56.js";

// app/routes/locations/edit.jsx
var import_react = __toESM(require_react());
var import_db = __toESM(require_db());
var import_session = __toESM(require_session());
var import_multiselect_react_dropdown = __toESM(require_dist());
var import_react_modal = __toESM(require_lib());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function meta() {
  return { title: "Edit Location" };
}
function locationEdit() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const { data, uId, getAllStations, response, location_id } = useLoaderData();
  const [modalIsOpen, setIsOpen] = (0, import_react.useState)(false);
  const [preventDouble, setPreventDouble] = import_react.default.useState(false);
  const [detailsConfirmModel, setDetailsConfirmModel] = (0, import_react.useState)(false);
  const [namedata, setNamedata] = import_react.default.useState((_a = data[0]) == null ? void 0 : _a.name);
  const [image, setImage] = import_react.default.useState((_c = (_b = data[0]) == null ? void 0 : _b.logo) == null ? void 0 : _c.id);
  const [screenId, setScreenId] = import_react.default.useState((_d = data[0]) == null ? void 0 : _d.screen_ids);
  const [allowedSelectedLocation, setAllowedSelectedLocation] = import_react.default.useState(
    (_e = data[0]) == null ? void 0 : _e.allowed_stations
  );
  const directus = directusLoaderLink;
  const navigate = useNavigate();
  let location = useLocation();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      minWidth: "300px"
    }
  };
  const createImageHandle = async (props) => {
    const formData = new FormData();
    formData.append("folder", props);
    const val = await directus.files.createOne(formData).then((res) => {
      return res == null ? void 0 : res.id;
    }).catch((err) => {
      console.log("Image create error", err == null ? void 0 : err.message);
    });
    return val;
  };
  const stationDatas = async (prop) => {
    await directus.items("Stations").readByQuery({
      fields: ["station_name_translation"],
      filter: {
        station_unique_id: {
          _eq: prop == null ? void 0 : prop.uniqueId
        }
      }
    }).then(
      async (res) => {
        var _a2, _b2, _c2, _d2, _e2, _f2;
        const body = ((_c2 = (_b2 = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.station_name_translation) == null ? void 0 : _c2.length) ? (_f2 = (_e2 = (_d2 = res == null ? void 0 : res.data) == null ? void 0 : _d2[0]) == null ? void 0 : _e2.station_name_translation) == null ? void 0 : _f2.filter((e) => (e == null ? void 0 : e.location_id) != uId) : [];
        await directus.items("Stations").updateOne(prop == null ? void 0 : prop.stationId, {
          station_name_translation: body
        });
      }
    ).catch((err) => console.log(err));
  };
  const deleteStations = async () => {
    var _a2, _b2, _c2;
    const oldValue = (_b2 = (_a2 = data[0]) == null ? void 0 : _a2.allowed_stations) == null ? void 0 : _b2.map((e) => e == null ? void 0 : e.Stations_id);
    const newValue = allowedSelectedLocation == null ? void 0 : allowedSelectedLocation.map((e) => e == null ? void 0 : e.value);
    const val = oldValue == null ? void 0 : oldValue.filter(
      (id1) => !(newValue == null ? void 0 : newValue.some((id2) => {
        return (id2 == null ? void 0 : id2.id) === (id1 == null ? void 0 : id1.id);
      }))
    );
    if (((_c2 = allowedSelectedLocation == null ? void 0 : allowedSelectedLocation.map((e) => e == null ? void 0 : e.value)) == null ? void 0 : _c2.length) > 0) {
      val == null ? void 0 : val.map(async (e, i) => {
        var _a3, _b3;
        if (((_a3 = e == null ? void 0 : e.child_list) == null ? void 0 : _a3.length) > 1) {
          const child = ((_b3 = e == null ? void 0 : e.child_list) == null ? void 0 : _b3.length) === 3 ? [SECTION_6_1_ID, SECTION_6_2_ID, SECTION_6_3_ID] : [SECTION_7_1_ID, SECTION_7_2_ID, SECTION_7_3_ID];
          child == null ? void 0 : child.map(async (res) => {
            await directus.items("screen_display").readByQuery({
              fields: ["id"],
              filter: {
                location_id: { id: { _eq: uId } },
                station_name: { station_unique_id: { _eq: res } }
              }
            }).then(async (el) => {
              var _a4;
              await directus.items("screen_display").deleteMany((_a4 = el == null ? void 0 : el.data) == null ? void 0 : _a4.map((re) => re == null ? void 0 : re.id)).then((re) => {
              }).catch((err) => console.log(err));
            });
          });
        }
        await stationDatas({ uniqueId: e == null ? void 0 : e.station_unique_id, stationId: e == null ? void 0 : e.id });
        await directus.items("screen_display").readByQuery({
          fields: ["id"],
          filter: {
            location_id: { id: { _eq: uId } },
            station_name: { station_unique_id: { _eq: e == null ? void 0 : e.station_unique_id } }
          }
        }).then(async (el) => {
          var _a4;
          await directus.items("screen_display").deleteMany((_a4 = el == null ? void 0 : el.data) == null ? void 0 : _a4.map((re) => re == null ? void 0 : re.id)).then((re) => {
          }).catch((err) => console.log(err));
        });
        if (i + 1 === (val == null ? void 0 : val.length)) {
          await dataupdateHandle();
        }
      });
    } else {
      Q.error(
        "Please select a station from the allowed stations field to continue"
      );
    }
  };
  const updateHandle = async (e) => {
    var _a2, _b2, _c2, _d2, _e2;
    if (((_a2 = namedata == null ? void 0 : namedata.trim()) == null ? void 0 : _a2.length) > 0) {
      setPreventDouble(true);
      const first = ((_b2 = allowedSelectedLocation[0]) == null ? void 0 : _b2.value) ? allowedSelectedLocation == null ? void 0 : allowedSelectedLocation.map((e2) => e2 == null ? void 0 : e2.value) : allowedSelectedLocation;
      const second = (_d2 = (_c2 = data[0]) == null ? void 0 : _c2.allowed_stations) == null ? void 0 : _d2.map((e2) => e2 == null ? void 0 : e2.Stations_id);
      const results = second == null ? void 0 : second.filter(
        (id1) => !(first == null ? void 0 : first.some((id2) => {
          return (id2 == null ? void 0 : id2.id) === (id1 == null ? void 0 : id1.id);
        }))
      );
      if ((results == null ? void 0 : results.length) > 0 && ((_e2 = data[0]) == null ? void 0 : _e2.allowed_stations) !== first) {
        setDetailsConfirmModel(true);
      } else {
        await dataupdateHandle();
      }
    } else {
      Q.error("Name is required");
    }
  };
  const dataupdateHandle = async (e) => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
    const first = ((_a2 = allowedSelectedLocation[0]) == null ? void 0 : _a2.value) ? allowedSelectedLocation == null ? void 0 : allowedSelectedLocation.map((e2) => e2 == null ? void 0 : e2.value) : allowedSelectedLocation;
    if (first) {
      const ImageId = image !== ((_c2 = (_b2 = data[0]) == null ? void 0 : _b2.logo) == null ? void 0 : _c2.id) ? await createImageHandle(image) : true;
      var IsStationUpdate = ((_d2 = data[0]) == null ? void 0 : _d2.allowed_stations) === first ? true : false;
      if (IsStationUpdate === false) {
        await StationIdGenarate(uId);
        IsStationUpdate = true;
      }
      if (ImageId) {
        if (IsStationUpdate) {
          const allowedStationList = await directus.items("Locations_Stations").readByQuery({
            fields: ["id", "*.*.*.*"],
            filter: { Locations_id: { id: { _eq: uId } } }
          }).then((el) => {
            var _a3;
            return (_a3 = el == null ? void 0 : el.data) == null ? void 0 : _a3.map((e2) => e2 == null ? void 0 : e2.id);
          });
          const body = ((_e2 = data[0]) == null ? void 0 : _e2.allowed_stations) === first ? {
            name: namedata !== ((_f2 = data[0]) == null ? void 0 : _f2.name) ? namedata : (_g2 = data[0]) == null ? void 0 : _g2.name,
            logo: image !== ((_i2 = (_h2 = data[0]) == null ? void 0 : _h2.logo) == null ? void 0 : _i2.id) ? ImageId : (_k = (_j = data[0]) == null ? void 0 : _j.logo) == null ? void 0 : _k.id,
            screen_ids: screenId !== ((_l = data[0]) == null ? void 0 : _l.screen_ids) ? screenId : (_m = data[0]) == null ? void 0 : _m.screen_ids,
            allowed_stations: (_o = (_n = data[0]) == null ? void 0 : _n.allowed_stations) == null ? void 0 : _o.map((e2) => e2 == null ? void 0 : e2.id)
          } : {
            name: namedata !== ((_p = data[0]) == null ? void 0 : _p.name) ? namedata : (_q = data[0]) == null ? void 0 : _q.name,
            logo: image !== ((_s = (_r = data[0]) == null ? void 0 : _r.logo) == null ? void 0 : _s.id) ? ImageId : (_u = (_t = data[0]) == null ? void 0 : _t.logo) == null ? void 0 : _u.id,
            screen_ids: screenId !== ((_v = data[0]) == null ? void 0 : _v.screen_ids) ? screenId : (_w = data[0]) == null ? void 0 : _w.screen_ids,
            allowed_stations: await allowedStationList
          };
          await directus.items("Locations").updateOne(uId, body).then((res) => {
            Q.success("Updated successfully");
            navigate("/");
          }).catch((err) => {
            navigate(".", { replace: true });
            Q.error("Something went wrong");
          });
          const second = (_y = (_x = data[0]) == null ? void 0 : _x.allowed_stations) == null ? void 0 : _y.map((e2) => e2 == null ? void 0 : e2.Stations_id);
          const results = first == null ? void 0 : first.filter((id1) => !(second == null ? void 0 : second.some((id2) => {
            return (id2 == null ? void 0 : id2.id) === (id1 == null ? void 0 : id1.id);
          })));
          if (results == null ? void 0 : results.length) {
            for (let i = 0; i < (results == null ? void 0 : results.length); i++) {
              await ((_A = directus.items("screen_display")) == null ? void 0 : _A.createOne({
                menu_info: "",
                menu_info_1: "",
                location_id: { id: uId },
                station_name: (_z = results[i]) == null ? void 0 : _z.id,
                date: new Date()
              }));
            }
          }
        }
      } else {
        Q.error("Something went wrong");
      }
    } else {
      Q.error(
        "Please select a station from the allowed stations field to continue"
      );
    }
  };
  const StationIdGenarate = async (prop) => {
    var _a2, _b2, _c2, _d2, _e2;
    const first = ((_a2 = allowedSelectedLocation[0]) == null ? void 0 : _a2.value) ? allowedSelectedLocation == null ? void 0 : allowedSelectedLocation.map((e) => e == null ? void 0 : e.value) : allowedSelectedLocation;
    const second = (_c2 = (_b2 = data[0]) == null ? void 0 : _b2.allowed_stations) == null ? void 0 : _c2.map((e) => e == null ? void 0 : e.Stations_id);
    const results = first == null ? void 0 : first.filter((id1) => !(second == null ? void 0 : second.some((id2) => {
      return (id2 == null ? void 0 : id2.id) === (id1 == null ? void 0 : id1.id);
    })));
    const dresults = second == null ? void 0 : second.filter((id1) => !(first == null ? void 0 : first.some((id2) => {
      return (id2 == null ? void 0 : id2.id) === (id1 == null ? void 0 : id1.id);
    })));
    for (let i = 0; i < (results == null ? void 0 : results.length); i++) {
      await directus.items("Locations_Stations").createOne({
        Locations_id: prop,
        Stations_id: Number((_d2 = results[i]) == null ? void 0 : _d2.id)
      }).then(async (res) => {
        return res == null ? void 0 : res.id;
      }).catch((err) => {
        console.log(err == null ? void 0 : err.message);
        navigate(".", { replace: true });
        Q.error(err == null ? void 0 : err.message);
      });
    }
    if (dresults == null ? void 0 : dresults.length) {
      for (let i = 0; i < (dresults == null ? void 0 : dresults.length); i++) {
        const idGet = await directus.items("Locations_Stations").readByQuery({
          fields: ["id"],
          filter: {
            Locations_id: { id: { _eq: uId } },
            Stations_id: { _eq: (_e2 = dresults[i]) == null ? void 0 : _e2.id }
          }
        }).then((el) => {
          var _a3;
          return (_a3 = el == null ? void 0 : el.data) == null ? void 0 : _a3.map((e) => e == null ? void 0 : e.id);
        });
        await directus.items("Locations_Stations").deleteOne(idGet);
      }
    }
    return "";
  };
  const deleteHandle = async () => {
    await directus.items("Locations").deleteOne(uId).then((res) => {
      navigate("/locations/manage");
      Q.success("Deleted successfully");
    }).catch((err) => {
      console.log("catch error", err);
      Q.error("Something went wrong");
    });
  };
  const download = (e) => {
    fetch(e, {
      method: "GET",
      headers: {}
    }).then((response2) => {
      response2.arrayBuffer().then(function(buffer) {
        const InitialRef = (location == null ? void 0 : location.pathname) + (location == null ? void 0 : location.search);
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png");
        document.body.appendChild(link);
        link.click();
        navigate(InitialRef);
      });
    }).catch((err) => {
      console.log(err);
    });
  };
  const closeModel = () => {
    setPreventDouble(false);
    setDetailsConfirmModel(false);
  };
  const optionShow = [];
  getAllStations == null ? void 0 : getAllStations.map((e) => {
    var _a2, _b2, _c2, _d2;
    return optionShow.push((e == null ? void 0 : e.station_name_translation) ? { station_name: ((_b2 = (_a2 = e == null ? void 0 : e.station_name_translation.filter((re) => (re == null ? void 0 : re.location_id) == uId)) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.name) ? (_d2 = (_c2 = e == null ? void 0 : e.station_name_translation.filter((re) => (re == null ? void 0 : re.location_id) == uId)) == null ? void 0 : _c2[0]) == null ? void 0 : _d2.name : e == null ? void 0 : e.station_name, value: e } : { station_name: e == null ? void 0 : e.station_name, value: e });
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderFile, {
        title: true,
        logout: true,
        noLeftLogo: ((_f = ISS_DENMARK_HQ) == null ? void 0 : _f.includes(location_id)) ? true : false
      }, void 0, false, {
        fileName: "app/routes/locations/edit.jsx",
        lineNumber: 357,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "main-content-area",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "page__wrap w-full flex justify-center items-center max-h-[100vh] h-[100vh] min-h-[100vh]",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "border p-6 rounded-md border-gray-300 form-area",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "max-w-[400px] w-full px-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex justify-between items-center gap-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-start items-center gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            type: "button",
                            title: "Backward",
                            onClick: () => navigate("/"),
                            className: "w-10 h-10 min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-full border border-gray-100 bg-white  text-sm font-medium text-primary shadow-md hover:bg-gray-50 focus:outline-none focus:shadow-md sm:w-auto",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: "3",
                                stroke: "currentColor",
                                className: "w-5 h-5",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  d: "M15.75 19.5L8.25 12l7.5-7.5"
                                }, void 0, false, {
                                  fileName: "app/routes/locations/edit.jsx",
                                  lineNumber: 380,
                                  columnNumber: 27
                                }, this)
                              }, void 0, false, {
                                fileName: "app/routes/locations/edit.jsx",
                                lineNumber: 372,
                                columnNumber: 25
                              }, this)
                            }, void 0, false, {
                              fileName: "app/routes/locations/edit.jsx",
                              lineNumber: 371,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/locations/edit.jsx",
                            lineNumber: 365,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/locations/edit.jsx",
                          lineNumber: 364,
                          columnNumber: 19
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                            className: "text-xl font-semibold text-primary",
                            children: (_g = data[0]) == null ? void 0 : _g.name
                          }, void 0, false, {
                            fileName: "app/routes/locations/edit.jsx",
                            lineNumber: 390,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/locations/edit.jsx",
                          lineNumber: 389,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/locations/edit.jsx",
                      lineNumber: 363,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex justify-between items-center gap-5",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        title: "Update Location",
                        type: "button",
                        onClick: (e) => preventDouble ? null : updateHandle(e),
                        disabled: preventDouble,
                        className: "w-10 h-10 min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-full border border-transparent bg-primary text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            strokeWidth: "2",
                            stroke: "currentColor",
                            className: "w-5 h-5",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              d: "M4.5 12.75l6 6 9-13.5"
                            }, void 0, false, {
                              fileName: "app/routes/locations/edit.jsx",
                              lineNumber: 434,
                              columnNumber: 25
                            }, this)
                          }, void 0, false, {
                            fileName: "app/routes/locations/edit.jsx",
                            lineNumber: 426,
                            columnNumber: 23
                          }, this)
                        }, void 0, false, {
                          fileName: "app/routes/locations/edit.jsx",
                          lineNumber: 425,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/locations/edit.jsx",
                        lineNumber: 418,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/locations/edit.jsx",
                      lineNumber: 395,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/locations/edit.jsx",
                  lineNumber: 362,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 block",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "space-y-6 bg-white py-6",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "grid grid-cols-6 gap-6",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "user-name",
                                className: "block text-sm font-medium text-gray-700",
                                children: [
                                  "Name",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/locations/edit.jsx",
                                    lineNumber: 453,
                                    columnNumber: 31
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/locations/edit.jsx",
                                lineNumber: 449,
                                columnNumber: 25
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                type: "text",
                                name: "user-name",
                                id: "user-name",
                                placeholder: "User Name",
                                required: true,
                                value: namedata,
                                onChange: (e) => setNamedata(e.target.value),
                                autoComplete: "given-name",
                                className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                              }, void 0, false, {
                                fileName: "app/routes/locations/edit.jsx",
                                lineNumber: 455,
                                columnNumber: 25
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/locations/edit.jsx",
                            lineNumber: 448,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6 ",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "location-name",
                                className: "block text-sm font-medium text-gray-700",
                                children: [
                                  "UploadImage",
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-red-600 text-base",
                                    children: "*"
                                  }, void 0, false, {
                                    fileName: "app/routes/locations/edit.jsx",
                                    lineNumber: 473,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/locations/edit.jsx",
                                lineNumber: 468,
                                columnNumber: 25
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "flex",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                                    type: "file",
                                    id: "u-heading-01",
                                    placeholder: "Location Name",
                                    title: " ",
                                    onChange: (e) => setImage(e.target.files[0]),
                                    autoComplete: "given-name",
                                    className: "mt-1  block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                                  }, void 0, false, {
                                    fileName: "app/routes/locations/edit.jsx",
                                    lineNumber: 476,
                                    columnNumber: 27
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                    className: `${image !== ((_i = (_h = data[0]) == null ? void 0 : _h.logo) == null ? void 0 : _i.id) ? "pointer-events-none bg-gray-400 " : ""} ml-2 w-10 h-10 min-w-[40px] min-h-[40px] inline-flex float-right mt-2 items-center justify-center rounded-full border border-transparent bg-primary text-sm font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto`,
                                    onClick: () => image ? download(getAssetURL(image)) : "",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                      className: "ri-download-2-line "
                                    }, void 0, false, {
                                      fileName: "app/routes/locations/edit.jsx",
                                      lineNumber: 496,
                                      columnNumber: 29
                                    }, this)
                                  }, void 0, false, {
                                    fileName: "app/routes/locations/edit.jsx",
                                    lineNumber: 486,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/routes/locations/edit.jsx",
                                lineNumber: 475,
                                columnNumber: 25
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/locations/edit.jsx",
                            lineNumber: 467,
                            columnNumber: 23
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "col-span-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                                htmlFor: "location-name",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Location screen ids"
                              }, void 0, false, {
                                fileName: "app/routes/locations/edit.jsx",
                                lineNumber: 527,
                                columnNumber: 25
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                                type: "text",
                                name: "location-ids",
                                id: "location-ids",
                                placeholder: "Screen Ids",
                                value: screenId || "",
                                onChange: (e) => setScreenId(e.target.value),
                                className: "mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm placeholder:text-gray-400 placeholder:!text-sm placeholder:font-medium focus:border-primary  focus:outline-none focus:ring-primary sm:text-sm"
                              }, void 0, false, {
                                fileName: "app/routes/locations/edit.jsx",
                                lineNumber: 534,
                                columnNumber: 25
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/routes/locations/edit.jsx",
                            lineNumber: 526,
                            columnNumber: 23
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/locations/edit.jsx",
                        lineNumber: 447,
                        columnNumber: 21
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/locations/edit.jsx",
                      lineNumber: 446,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/locations/edit.jsx",
                    lineNumber: 445,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/locations/edit.jsx",
                  lineNumber: 444,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/locations/edit.jsx",
              lineNumber: 361,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/routes/locations/edit.jsx",
            lineNumber: 360,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/locations/edit.jsx",
          lineNumber: 359,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/locations/edit.jsx",
        lineNumber: 358,
        columnNumber: 7
      }, this),
      modalIsOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteModel, {
        open: setIsOpen,
        deleteHandle
      }, void 0, false, {
        fileName: "app/routes/locations/edit.jsx",
        lineNumber: 554,
        columnNumber: 9
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react_modal.default, {
        isOpen: detailsConfirmModel,
        onRequestClose: () => closeModel(),
        style: customStyles,
        ariaHideApp: false,
        contentLabel: "Example Modal",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "",
            children: [
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-black",
                children: "Are you sure you have deleted the data for the stations you have deselected?"
              }, void 0, false, {
                fileName: "app/routes/locations/edit.jsx",
                lineNumber: 566,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex-row flex mt-10 justify-center gap-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "button",
                    className: "inline-flex font-semibold  justify-center  border border-transparent bg-red-100 px-4 py-2 text-sm text-red-600 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:w-auto sm:text-sm",
                    onClick: () => closeModel(),
                    children: [
                      "Cancel",
                      " "
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/locations/edit.jsx",
                    lineNumber: 571,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "button",
                    onClick: () => deleteStations(),
                    className: "inline-flex  items-center justify-center h-[40px] text-[18px] rounded border bg-blue-500 border-blue-500 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    children: [
                      "Ok",
                      " "
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/locations/edit.jsx",
                    lineNumber: 579,
                    columnNumber: 15
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/locations/edit.jsx",
                lineNumber: 570,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/locations/edit.jsx",
            lineNumber: 564,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/routes/locations/edit.jsx",
          lineNumber: 563,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/locations/edit.jsx",
        lineNumber: 556,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
        fileName: "app/routes/locations/edit.jsx",
        lineNumber: 590,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/locations/edit.jsx",
    lineNumber: 356,
    columnNumber: 5
  }, this);
}
export {
  locationEdit as default,
  meta
};
//# sourceMappingURL=/build/routes/locations/edit-UQE2H3WB.js.map
