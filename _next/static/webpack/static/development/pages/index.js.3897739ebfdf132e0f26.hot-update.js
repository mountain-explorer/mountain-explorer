webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Compass/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Compass/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
var _jsxFileName = "/Users/lyb/yb/explorer-src/src/components/Compass/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (window.DeviceOrientationEvent) {
      var webkitAlpha = 0;
      window.addEventListener("deviceorientation", function (event) {
        var alpha; //     判斷是否為 iOS 裝置

        if (event.webkitCompassHeading) {
          alpha = event.webkitCompassHeading; // iOS 裝置必須使用 event.webkitCompassHeading

          console.log("rotate(-" + alpha + "deg)");
        } else {
          alpha = event.alpha;
          webkitAlpha = alpha;

          if (!window.chrome) {
            webkitAlpha = alpha - 270;
          }
        }

        console.log("rotate(" + alpha + "deg)");
        console.log("rotate(" + webkitAlpha + "deg)");
        console.log("rotate(-" + alpha + "deg)");
      }, false);
    }
  }, []);
  return __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    m: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "TODO");
});

/***/ })

})
//# sourceMappingURL=index.js.3897739ebfdf132e0f26.hot-update.js.map