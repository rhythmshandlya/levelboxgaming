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

/***/ "./components/ConceptArt.jsx":
/*!***********************************!*\
  !*** ./components/ConceptArt.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ConceptArtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConceptArtCard */ \"./components/ConceptArtCard.jsx\");\nvar _this = undefined;\n\n\n\nvar ConceptArt = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-text-3xl\",\n                children: \"Latest News\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-scroll flex m-40\",\n                id: \"style-2\",\n                children: data.map(function(news, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"m-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConceptArtCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            imageSrc: news.image,\n                            title: news.title,\n                            date: news.date,\n                            summary: news.description\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n                            lineNumber: 12,\n                            columnNumber: 15\n                        }, _this1)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 13\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n_c = ConceptArt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConceptArt);\nvar _c;\n$RefreshReg$(_c, \"ConceptArt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmNlcHRBcnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEwQjtBQUNvQjtBQUU5QyxJQUFNRSxVQUFVLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUN4QixxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7Z0JBQUNDLFNBQVMsRUFBQyxlQUFlOzBCQUFDLGFBQVc7Ozs7O3FCQUFLOzBCQUM5Qyw4REFBQ0YsS0FBRztnQkFBQ0UsU0FBUyxFQUFDLDZCQUE2QjtnQkFBQ0MsRUFBRSxFQUFDLFNBQVM7MEJBQ3RESixJQUFJLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUMsRUFBSztvQkFDckIscUJBQ0UsOERBQUNOLEtBQUc7d0JBQUNFLFNBQVMsRUFBQyxNQUFNO2tDQUNuQiw0RUFBQ0wsdURBQWM7NEJBQ2JVLFFBQVEsRUFBRUYsSUFBSSxDQUFDRyxLQUFLOzRCQUNwQkMsS0FBSyxFQUFFSixJQUFJLENBQUNJLEtBQUs7NEJBQ2pCQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTs0QkFDZkMsT0FBTyxFQUFFTixJQUFJLENBQUNPLFdBQVc7Ozs7O2tDQUN6Qjs7Ozs7OEJBQ0UsQ0FDTjtpQkFDSCxDQUFDOzs7OztxQkFDRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBcEJLZCxLQUFBQSxVQUFVO0FBc0JoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29uY2VwdEFydC5qc3g/MTVhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29uY2VwdEFydENhcmQgZnJvbSBcIi4vQ29uY2VwdEFydENhcmRcIjtcblxuY29uc3QgQ29uY2VwdEFydCA9ICh7IGRhdGEgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC10ZXh0LTN4bFwiPkxhdGVzdCBOZXdzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1zY3JvbGwgZmxleCBtLTQwXCIgaWQ9XCJzdHlsZS0yXCI+XG4gICAgICAgIHtkYXRhLm1hcCgobmV3cywgaSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTBcIj5cbiAgICAgICAgICAgICAgPENvbmNlcHRBcnRDYXJkXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM9e25ld3MuaW1hZ2V9XG4gICAgICAgICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgZGF0ZT17bmV3cy5kYXRlfVxuICAgICAgICAgICAgICAgIHN1bW1hcnk9e25ld3MuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uY2VwdEFydDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbmNlcHRBcnRDYXJkIiwiQ29uY2VwdEFydCIsImRhdGEiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImlkIiwibWFwIiwibmV3cyIsImkiLCJpbWFnZVNyYyIsImltYWdlIiwidGl0bGUiLCJkYXRlIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ConceptArt.jsx\n"));

/***/ })

});