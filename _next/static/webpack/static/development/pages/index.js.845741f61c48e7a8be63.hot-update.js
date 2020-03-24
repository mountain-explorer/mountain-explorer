webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Home/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Home/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollableTabsButtonForce; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Phone */ "./node_modules/@material-ui/icons/Phone.js");
/* harmony import */ var _material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-swipeable-views */ "./node_modules/react-swipeable-views/lib/index.js");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var components_CoordinateCurrent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/CoordinateCurrent */ "./src/components/CoordinateCurrent/index.tsx");
/* harmony import */ var components_CoordinateCalculator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/CoordinateCalculator */ "./src/components/CoordinateCalculator/index.tsx");
/* harmony import */ var components_Compass__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Compass */ "./src/components/Compass/index.tsx");
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! utils/constants */ "./src/utils/constants.ts");



var _jsxFileName = "/Users/lyb/yb/explorer-src/src/components/Home/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
















function a11yProps(index) {
  return {
    id: "scrollable-force-tab-".concat(index),
    "aria-controls": "scrollable-force-tabpanel-".concat(index)
  };
}

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1,
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    title: {
      flexGrow: 1
    },
    content: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      height: "calc(100vh - 72px - 56px)",
      overflow: "scroll",
      position: "relative"
    }, "".concat(theme.breakpoints.up("sm")), {
      height: "calc(100vh - 72px - 64px)"
    })
  };
});
function ScrollableTabsButtonForce() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      tabIndex = _React$useState2[0],
      setTabIndex = _React$useState2[1];

  var handleChange = function handleChange(_, newValue) {
    setTabIndex(newValue);
  };

  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "static",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_17__["HEAD_TITLE"])), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
    variant: "h6",
    component: "h1",
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, utils_constants__WEBPACK_IMPORTED_MODULE_17__["HEAD_TITLE"]))), __jsx("div", {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(react_swipeable_views__WEBPACK_IMPORTED_MODULE_13___default.a, {
    enableMouseEvents: true,
    index: tabIndex,
    onChangeIndex: function onChangeIndex(index) {
      return setTabIndex(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(components_CoordinateCurrent__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(components_CoordinateCalculator__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx(components_Compass__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), __jsx(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    position: "static",
    color: "default",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: tabIndex,
    onChange: handleChange,
    variant: "scrollable",
    scrollButtons: "on",
    indicatorColor: "primary",
    textColor: "primary",
    "aria-label": "scrollable force tabs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "Item One",
    icon: __jsx(_material_ui_icons_Phone__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })
  }, a11yProps(0), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "Item Two",
    icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })
  }, a11yProps(1), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), __jsx(_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: "",
    icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    })
  }, a11yProps(2), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./src/utils/constants.ts":
/*!********************************!*\
  !*** ./src/utils/constants.ts ***!
  \********************************/
/*! exports provided: PREFIX_PATH, TAB_COORDINATE_CURRENT, TAB_COORDINATE_CALCULATOR, TAB_COMPASS, HEAD_TITLE, TITLE_WGS84, WGS84_LONGITUDE, WGS84_LATITUDE, WGS84_ACCURACY, WGS84_ALTITUDE, WGS84_ALTITUDE_ACCURACY, WGS84_UNIT, TITLE_TWD97, TWD97_X, TWD97_Y, TITLE_TWD67, TWD67_X, TWD67_Y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREFIX_PATH", function() { return PREFIX_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_COORDINATE_CURRENT", function() { return TAB_COORDINATE_CURRENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_COORDINATE_CALCULATOR", function() { return TAB_COORDINATE_CALCULATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_COMPASS", function() { return TAB_COMPASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEAD_TITLE", function() { return HEAD_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_WGS84", function() { return TITLE_WGS84; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGS84_LONGITUDE", function() { return WGS84_LONGITUDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGS84_LATITUDE", function() { return WGS84_LATITUDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGS84_ACCURACY", function() { return WGS84_ACCURACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGS84_ALTITUDE", function() { return WGS84_ALTITUDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGS84_ALTITUDE_ACCURACY", function() { return WGS84_ALTITUDE_ACCURACY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WGS84_UNIT", function() { return WGS84_UNIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_TWD97", function() { return TITLE_TWD97; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWD97_X", function() { return TWD97_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWD97_Y", function() { return TWD97_Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_TWD67", function() { return TITLE_TWD67; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWD67_X", function() { return TWD67_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWD67_Y", function() { return TWD67_Y; });
var PREFIX_PATH =  false ? undefined : "";
var TAB_COORDINATE_CURRENT = "現在位置";
var TAB_COORDINATE_CALCULATOR = "座標計算";
var TAB_COMPASS = "指北針";
var HEAD_TITLE = "台灣座標系統";
var TITLE_WGS84 = "經緯度";
var WGS84_LONGITUDE = "經度";
var WGS84_LATITUDE = "緯度";
var WGS84_ACCURACY = "誤差";
var WGS84_ALTITUDE = "海拔";
var WGS84_ALTITUDE_ACCURACY = "海拔誤差";
var WGS84_UNIT = "公尺";
var TITLE_TWD97 = "TWD 97";
var TWD97_X = "X";
var TWD97_Y = "Y";
var TITLE_TWD67 = "TWD 67";
var TWD67_X = "X";
var TWD67_Y = "Y";

/***/ })

})
//# sourceMappingURL=index.js.845741f61c48e7a8be63.hot-update.js.map