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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n// import React from 'react'\n\nvar LatestNewsCard = function(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"object-contain text-center m-6 max-w-xs mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-fit rounded-2xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    class: \"w-full\",\n                    src: props.imageSrc,\n                    alt: \"Sunset in the mountains\"\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNewsCard.jsx\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col content-center flex-wrap\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm font-normal break-normal\",\n                        children: props.summary\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNewsCard.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNewsCard.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNewsCard.jsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNewsCard.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = LatestNewsCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestNewsCard);\nvar _c;\n$RefreshReg$(_c, \"LatestNewsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdGVzdE5ld3NDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOztBQURBLDRCQUE0QjtBQUNHO0FBQy9CLElBQU1DLGNBQWMsR0FBRyxTQUFDQyxLQUFLLEVBQUs7SUFDaEMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGlEQUFpRDtrQkFDOUQsNEVBQUNELEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG1CQUFtQjs7OEJBQ2hDLDhEQUFDQyxLQUFHO29CQUNGQyxLQUFLLEVBQUMsUUFBUTtvQkFDZEMsR0FBRyxFQUFFTCxLQUFLLENBQUNNLFFBQVE7b0JBQ25CQyxHQUFHLEVBQUMseUJBQXlCOzs7Ozt5QkFDN0I7OEJBQ0YsOERBQUNOLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyx3Q0FBd0M7OEJBQ3JELDRFQUFDTSxHQUFDO3dCQUFDTixTQUFTLEVBQUMsa0NBQWtDO2tDQUFFRixLQUFLLENBQUNTLE9BQU87Ozs7OzZCQUFLOzs7Ozt5QkFDL0Q7Ozs7OztpQkFDRjs7Ozs7YUFDRixDQUNOO0NBQ0g7QUFmS1YsS0FBQUEsY0FBYztBQWlCcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xhdGVzdE5ld3NDYXJkLmpzeD80M2U5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuY29uc3QgTGF0ZXN0TmV3c0NhcmQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIHRleHQtY2VudGVyIG0tNiBtYXgtdy14cyBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0IHJvdW5kZWQtMnhsXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzcz1cInctZnVsbFwiXG4gICAgICAgICAgc3JjPXtwcm9wcy5pbWFnZVNyY31cbiAgICAgICAgICBhbHQ9XCJTdW5zZXQgaW4gdGhlIG1vdW50YWluc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb250ZW50LWNlbnRlciBmbGV4LXdyYXBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbm9ybWFsIGJyZWFrLW5vcm1hbFwiPntwcm9wcy5zdW1tYXJ5fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhdGVzdE5ld3NDYXJkO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGF0ZXN0TmV3c0NhcmQiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsImNsYXNzIiwic3JjIiwiaW1hZ2VTcmMiLCJhbHQiLCJwIiwic3VtbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LatestNewsCard.jsx\n"));

/***/ })

});