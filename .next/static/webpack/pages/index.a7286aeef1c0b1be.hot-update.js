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

/***/ "./components/Banner.jsx":
/*!*******************************!*\
  !*** ./components/Banner.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\nvar _this = undefined;\n\n\n\nvar Banner = function(param) {\n    var data = param.data;\n    console.clear();\n    console.log(data.image);\n    var style = {\n        backgroundImage: \"url('\".concat(data.image, \"')\")\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"background-coc flex\",\n            style: style,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"banner-filter\"\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Banner.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_2__.AnimationOnScroll, {\n                    animateIn: \"animate__fadeInUp\",\n                    animateOnce: \"true\",\n                    offset: -50,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative max-w-[500px] \".concat(data.align == \"right\" ? \"ml-auto mr-0\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-white font-bold lg:leading-tight lg:text-4xl dark:text-white\",\n                                children: data.title\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Banner.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg\",\n                                children: data.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Banner.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"learn-more mt-8\",\n                                children: \"Learn More\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Banner.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Banner.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Banner.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Banner.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = Banner;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Banner);\nvar _c;\n$RefreshReg$(_c, \"Banner\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jhbm5lci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQTBCO0FBQ29DO0FBRTlELElBQU1FLE1BQU0sR0FBRyxnQkFBYztRQUFYQyxJQUFJLFNBQUpBLElBQUk7SUFDcEJDLE9BQU8sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDaEJELE9BQU8sQ0FBQ0UsR0FBRyxDQUFDSCxJQUFJLENBQUNJLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLElBQU1DLEtBQUssR0FBRztRQUNaQyxlQUFlLEVBQUUsT0FBTSxDQUFhLE1BQUUsQ0FBYk4sSUFBSSxDQUFDSSxLQUFLLEVBQUMsSUFBRSxDQUFDO0tBQ3hDO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNHLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLHFCQUFxQjtZQUFDSCxLQUFLLEVBQUVBLEtBQUs7OzhCQUMvQyw4REFBQ0UsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGVBQWU7Ozs7O3lCQUFPOzhCQUNyQyw4REFBQ1Ysd0VBQWlCO29CQUNoQlcsU0FBUyxFQUFDLG1CQUFtQjtvQkFDN0JDLFdBQVcsRUFBQyxNQUFNO29CQUNsQkMsTUFBTSxFQUFFLENBQUMsRUFBRTs4QkFFWCw0RUFBQ0osS0FBRzt3QkFDRkMsU0FBUyxFQUFFLHlCQUF3QixDQUVsQyxPQURDUixJQUFJLENBQUNZLEtBQUssSUFBSSxPQUFPLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FDM0M7OzBDQUVGLDhEQUFDQyxJQUFFO2dDQUFDTCxTQUFTLEVBQUMsbUVBQW1FOzBDQUM5RVIsSUFBSSxDQUFDYyxLQUFLOzs7OztxQ0FDUjswQ0FDTCw4REFBQ0MsR0FBQztnQ0FBQ1AsU0FBUyxFQUFDLFNBQVM7MENBQUVSLElBQUksQ0FBQ2dCLFdBQVc7Ozs7O3FDQUFLOzBDQUM3Qyw4REFBQ0MsR0FBQztnQ0FBQ1QsU0FBUyxFQUFDLGlCQUFpQjswQ0FBQyxZQUFVOzs7OztxQ0FBSTs7Ozs7OzZCQUN6Qzs7Ozs7eUJBQ1k7Ozs7OztpQkFDaEI7cUJBQ0wsQ0FDSDtDQUNIO0FBOUJLVCxLQUFBQSxNQUFNO0FBZ0NaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYW5uZXIuanN4PzRkODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uT25TY3JvbGwgfSBmcm9tIFwicmVhY3QtYW5pbWF0aW9uLW9uLXNjcm9sbFwiO1xuXG5jb25zdCBCYW5uZXIgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5jbGVhcigpO1xuICBjb25zb2xlLmxvZyhkYXRhLmltYWdlKTtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2RhdGEuaW1hZ2V9JylgLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmQtY29jIGZsZXhcIiBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lci1maWx0ZXJcIj48L2Rpdj5cbiAgICAgICAgPEFuaW1hdGlvbk9uU2Nyb2xsXG4gICAgICAgICAgYW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluVXBcIlxuICAgICAgICAgIGFuaW1hdGVPbmNlPVwidHJ1ZVwiXG4gICAgICAgICAgb2Zmc2V0PXstNTB9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2ByZWxhdGl2ZSBtYXgtdy1bNTAwcHhdICR7XG4gICAgICAgICAgICAgIGRhdGEuYWxpZ24gPT0gXCJyaWdodFwiID8gXCJtbC1hdXRvIG1yLTBcIiA6IFwiXCJcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtYm9sZCBsZzpsZWFkaW5nLXRpZ2h0IGxnOnRleHQtNHhsIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICB7ZGF0YS50aXRsZX1cbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGVhcm4tbW9yZSBtdC04XCI+TGVhcm4gTW9yZTwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BbmltYXRpb25PblNjcm9sbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQW5pbWF0aW9uT25TY3JvbGwiLCJCYW5uZXIiLCJkYXRhIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwiaW1hZ2UiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImRpdiIsImNsYXNzTmFtZSIsImFuaW1hdGVJbiIsImFuaW1hdGVPbmNlIiwib2Zmc2V0IiwiYWxpZ24iLCJoMiIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Banner.jsx\n"));

/***/ })

});