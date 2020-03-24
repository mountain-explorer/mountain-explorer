webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/CoordinateCurrent/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/CoordinateCurrent/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var utils_coordinate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/coordinate */ "./src/utils/coordinate.ts");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/constants */ "./src/utils/constants.ts");
var _jsxFileName = "/Users/lyb/yb/explorer-src/src/components/CoordinateCurrent/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (_) {
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createStyles"])({
    loadingBox: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    textLabel: {
      padding: theme.spacing(1)
    },
    textFieldGroup: {
      marginBottom: theme.spacing(4)
    },
    containerCenter: {
      display: "flex",
      alignItems: "center"
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState[0],
      setIsLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      longitude = _useState2[0],
      setLongitude = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      latitude = _useState3[0],
      setLatitude = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      altitude = _useState4[0],
      setAltitude = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      accuracy = _useState5[0],
      setAccuracy = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      altitudeAccuracy = _useState6[0],
      setAltitudeAccuracy = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var geoOptions = {
      enableHighAccuracy: true
    };
    var watchId = navigator.geolocation.watchPosition(function (position) {
      var _position$coords = position.coords,
          longitude = _position$coords.longitude,
          latitude = _position$coords.latitude,
          accuracy = _position$coords.accuracy,
          altitude = _position$coords.altitude,
          altitudeAccuracy = _position$coords.altitudeAccuracy;
      setLongitude(longitude);
      setLatitude(latitude);
      setAccuracy(accuracy);
      setAltitude(altitude);
      setAltitudeAccuracy(altitudeAccuracy);
      setIsLoading(false);
    }, function (error) {
      // TODO: handle error
      console.log("Error occurred. Error code: " + error.code); // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from location provider)
      //   3: timed out
    }, geoOptions);
    return function () {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  if ( false || isLoading) {
    return __jsx("div", {
      className: classes.loadingBox,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }));
  }

  if (!navigator.geolocation) {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, "Geolocation is not supported for your Browser/OS version yet."));
  }

  var twd97 = longitude && latitude ? Object(utils_coordinate__WEBPACK_IMPORTED_MODULE_6__["convertFromWGS84ToTWD97"])([longitude, latitude]) : null;
  var twd67 = longitude && latitude ? Object(utils_coordinate__WEBPACK_IMPORTED_MODULE_6__["convertFromWGS84ToTWD67"])([longitude, latitude]) : null;
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {
    m: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    component: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_7__["TITLE_WGS84"]), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_7__["WGS84_LONGITUDE"], ": ", longitude), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_7__["WGS84_LATITUDE"], ": ", latitude), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_7__["WGS84_ACCURACY"], ": ", accuracy, " ", utils_constants__WEBPACK_IMPORTED_MODULE_7__["WGS84_UNIT"]), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_7__["WGS84_ALTITUDE"], ": ", altitude, " ", utils_constants__WEBPACK_IMPORTED_MODULE_7__["WGS84_UNIT"]), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_7__["WGS84_ALTITUDE_ACCURACY"], ": ", altitudeAccuracy, " ", utils_constants__WEBPACK_IMPORTED_MODULE_7__["WGS84_UNIT"])), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    component: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_7__["TITLE_TWD97"]), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: utils_constants__WEBPACK_IMPORTED_MODULE_7__["TWD97_X"],
    type: "number",
    variant: "outlined",
    InputProps: {
      readOnly: true
    },
    value: (twd97 === null || twd97 === void 0 ? void 0 : twd97[0]) || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }), __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    label: utils_constants__WEBPACK_IMPORTED_MODULE_7__["TWD97_Y"],
    type: "number",
    variant: "outlined",
    InputProps: {
      readOnly: true
    },
    value: (twd97 === null || twd97 === void 0 ? void 0 : twd97[1]) || "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_7__["TITLE_TWD67"]), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, twd67 === null || twd67 === void 0 ? void 0 : twd67[0]), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, twd67 === null || twd67 === void 0 ? void 0 : twd67[1])));
});

/***/ })

})
//# sourceMappingURL=index.js.1755af673ed0b3c7715f.hot-update.js.map