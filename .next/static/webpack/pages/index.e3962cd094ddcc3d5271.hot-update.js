"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/LatestNewsCard.jsx":
/*!***************************************!*\
  !*** ./components/LatestNewsCard.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/hashcat/Desktop/cc/levelboxgaming/components/LatestNewsCard.jsx\",\n    _this = undefined;\n\n// import React from 'react'\n\n\nvar LatestNewsCard = function LatestNewsCard(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"w-[500px] h-[300px] mb-64 ml-8 text-center\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()) //   loader={myLoader}\n    , {\n      src: props.imageSrc,\n      alt: \"Picture of the author\",\n      width: '500em',\n      height: '200em'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-col content-center flex-wrap\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"font-semibold text-xl mt-2 break-normal\",\n        children: props.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"font-medium text-base break-normal\",\n        children: props.date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-lg font-normal break-normal\",\n        children: props.summary\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = LatestNewsCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestNewsCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"LatestNewsCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdGVzdE5ld3NDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBQ0EsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFDaEMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsNENBQWY7QUFBQSw0QkFDSSw4REFBQyxtREFBRCxDQUNKO0FBREk7QUFFRixTQUFHLEVBQUVBLEtBQUssQ0FBQ0MsUUFGVDtBQUdGLFNBQUcsRUFBQyx1QkFIRjtBQUlGLFdBQUssRUFBRSxPQUpMO0FBS0YsWUFBTSxFQUFFO0FBTE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBUUE7QUFBSyxlQUFTLEVBQUMsd0NBQWY7QUFBQSw4QkFDQTtBQUFHLGlCQUFTLEVBQUMseUNBQWI7QUFBQSxrQkFBd0RELEtBQUssQ0FBQ0U7QUFBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBRUE7QUFBRyxpQkFBUyxFQUFDLG9DQUFiO0FBQUEsa0JBQW1ERixLQUFLLENBQUNHO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQSxlQUdBO0FBQUcsaUJBQVMsRUFBQyxrQ0FBYjtBQUFBLGtCQUFpREgsS0FBSyxDQUFDSTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0FqQkQ7O0tBQU1MO0FBbUJOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF0ZXN0TmV3c0NhcmQuanN4PzAxMTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuY29uc3QgTGF0ZXN0TmV3c0NhcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bNTAwcHhdIGgtWzMwMHB4XSBtYi02NCBtbC04IHRleHQtY2VudGVyJz5cbiAgICAgICAgPEltYWdlIFxuICAgIC8vICAgbG9hZGVyPXtteUxvYWRlcn1cbiAgICAgIHNyYz17cHJvcHMuaW1hZ2VTcmN9XG4gICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgd2lkdGg9eyc1MDBlbSd9XG4gICAgICBoZWlnaHQ9eycyMDBlbSd9XG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBjb250ZW50LWNlbnRlciBmbGV4LXdyYXAnPlxuICAgIDxwIGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCB0ZXh0LXhsIG10LTIgYnJlYWstbm9ybWFsJz57cHJvcHMudGl0bGV9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT0nZm9udC1tZWRpdW0gdGV4dC1iYXNlIGJyZWFrLW5vcm1hbCc+e3Byb3BzLmRhdGV9PC9wPlxuICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBmb250LW5vcm1hbCBicmVhay1ub3JtYWwnPntwcm9wcy5zdW1tYXJ5fTwvcD5cbiAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXRlc3ROZXdzQ2FyZCJdLCJuYW1lcyI6WyJJbWFnZSIsIkxhdGVzdE5ld3NDYXJkIiwicHJvcHMiLCJpbWFnZVNyYyIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LatestNewsCard.jsx\n");

/***/ })

});