"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/appContext.js":
/*!*******************************!*\
  !*** ./context/appContext.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppProvider\": function() { return /* binding */ AppProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _json_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json/data.json */ \"./json/data.json\");\n/* harmony import */ var _json_news_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../json/news.json */ \"./json/news.json\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nvar AppProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        dataStatic: _json_data_json__WEBPACK_IMPORTED_MODULE_2__,\n        newsStatic: _json_news_json__WEBPACK_IMPORTED_MODULE_3__\n    }), data = ref[0], setData = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: data,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/context/appContext.js\",\n        lineNumber: 11,\n        columnNumber: 10\n    }, _this);\n};\n_s(AppProvider, \"PGPOgVh1ks8hjGCVVYwh7fXmUSc=\");\n_c = AppProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AppContext);\nvar _c;\n$RefreshReg$(_c, \"AppProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2FwcENvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUFnRDtBQUlMO0FBQ0E7O0FBSDNDLElBQU1JLFVBQVUsaUJBQUdKLG9EQUFhLENBQUMsRUFBRSxDQUFDO0FBSzdCLElBQU1LLFdBQVcsR0FBRyxnQkFBa0I7UUFBZkMsUUFBUSxTQUFSQSxRQUFROztJQUNwQyxJQUF3QkwsR0FBb0MsR0FBcENBLCtDQUFRLENBQUM7UUFBRUMsVUFBVSxFQUFWQSw0Q0FBVTtRQUFFQyxVQUFVLEVBQVZBLDRDQUFVO0tBQUUsQ0FBQyxFQUFyREksSUFBSSxHQUFhTixHQUFvQyxHQUFqRCxFQUFFTyxPQUFPLEdBQUlQLEdBQW9DLEdBQXhDO0lBRXBCLHFCQUFPLDhEQUFDRyxVQUFVLENBQUNLLFFBQVE7UUFBQ0MsS0FBSyxFQUFFSCxJQUFJO2tCQUFHRCxRQUFROzs7OzthQUF1QixDQUFDO0NBQzNFLENBQUM7R0FKV0QsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBTXhCLCtEQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9hcHBDb250ZXh0LmpzPzBmMzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5pbXBvcnQgZGF0YVN0YXRpYyBmcm9tIFwiLi4vanNvbi9kYXRhLmpzb25cIjtcbmltcG9ydCBuZXdzU3RhdGljIGZyb20gXCIuLi9qc29uL25ld3MuanNvblwiO1xuXG5leHBvcnQgY29uc3QgQXBwUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHsgZGF0YVN0YXRpYywgbmV3c1N0YXRpYyB9KTtcblxuICByZXR1cm4gPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2RhdGF9PntjaGlsZHJlbn08L0FwcENvbnRleHQuUHJvdmlkZXI+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJkYXRhU3RhdGljIiwibmV3c1N0YXRpYyIsIkFwcENvbnRleHQiLCJBcHBQcm92aWRlciIsImNoaWxkcmVuIiwiZGF0YSIsInNldERhdGEiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/appContext.js\n"));

/***/ })

});