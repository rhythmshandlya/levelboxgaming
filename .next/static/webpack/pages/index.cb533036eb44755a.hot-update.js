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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ConceptArtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConceptArtCard */ \"./components/ConceptArtCard.jsx\");\nvar _this = undefined;\n\n\n\nvar ConceptArt = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"md:my-16\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"font-bold text-center text-3xl\",\n                    children: \"Latest News\"\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-x-scroll flex md:mx-40 my-10 mx-5\",\n                    id: \"style-2\",\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:m-10 m-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ConceptArtCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 17\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ConceptArt.jsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_c = ConceptArt;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConceptArt);\nvar _c;\n$RefreshReg$(_c, \"ConceptArt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbmNlcHRBcnQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUEwQjtBQUNvQjtBQUU5QyxJQUFNRSxVQUFVLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUN4QixxQkFDRTtrQkFDRSw0RUFBQ0MsS0FBRztZQUFDQyxTQUFTLEVBQUMsVUFBVTs7OEJBQ3ZCLDhEQUFDQyxJQUFFO29CQUFDRCxTQUFTLEVBQUMsZ0NBQWdDOzhCQUFDLGFBQVc7Ozs7O3lCQUFLOzhCQUMvRCw4REFBQ0QsS0FBRztvQkFDRkMsU0FBUyxFQUFDLDRDQUE0QztvQkFDdERFLEVBQUUsRUFBQyxTQUFTOzhCQUVYSixJQUFJLENBQUNLLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUMsRUFBSzt3QkFDckIscUJBQ0UsOERBQUNOLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxhQUFhO3NDQUMxQiw0RUFBQ0osdURBQWM7Z0NBQ2JVLFFBQVEsRUFBRUYsSUFBSSxDQUFDRyxLQUFLO2dDQUNwQkMsS0FBSyxFQUFFSixJQUFJLENBQUNJLEtBQUs7Z0NBQ2pCQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtnQ0FDZkMsT0FBTyxFQUFFTixJQUFJLENBQUNPLFdBQVc7Ozs7O3NDQUN6Qjs7Ozs7a0NBQ0UsQ0FDTjtxQkFDSCxDQUFDOzs7Ozt5QkFDRTs7Ozs7O2lCQUNGO3FCQUNMLENBQ0g7Q0FDSDtBQXpCS2QsS0FBQUEsVUFBVTtBQTJCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbmNlcHRBcnQuanN4PzE1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbmNlcHRBcnRDYXJkIGZyb20gXCIuL0NvbmNlcHRBcnRDYXJkXCI7XG5cbmNvbnN0IENvbmNlcHRBcnQgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpteS0xNlwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtM3hsXCI+TGF0ZXN0IE5ld3M8L2gxPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1zY3JvbGwgZmxleCBtZDpteC00MCBteS0xMCBteC01XCJcbiAgICAgICAgICBpZD1cInN0eWxlLTJcIlxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEubWFwKChuZXdzLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm0tMTAgbS00XCI+XG4gICAgICAgICAgICAgICAgPENvbmNlcHRBcnRDYXJkXG4gICAgICAgICAgICAgICAgICBpbWFnZVNyYz17bmV3cy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtuZXdzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17bmV3cy5kYXRlfVxuICAgICAgICAgICAgICAgICAgc3VtbWFyeT17bmV3cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25jZXB0QXJ0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29uY2VwdEFydENhcmQiLCJDb25jZXB0QXJ0IiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaWQiLCJtYXAiLCJuZXdzIiwiaSIsImltYWdlU3JjIiwiaW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ConceptArt.jsx\n"));

/***/ })

});