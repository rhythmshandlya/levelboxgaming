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

/***/ "./components/LatestNews.jsx":
/*!***********************************!*\
  !*** ./components/LatestNews.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar ArrowRight = function(param) {\n    var className = param.className, style = param.style, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, style), {\n            left: \"52%\",\n            top: \"350px\"\n        }),\n        onClick: onClick,\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n            icon: \"fas fa-arrow-circle-right\"\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, _this);\n};\n_c = ArrowRight;\nvar ArrowLeft = function(param) {\n    var className = param.className, style = param.style, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, style), {\n            left: \"48%\",\n            top: \"350px\"\n        }),\n        onClick: onClick,\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"back\"\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = ArrowLeft;\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    var _obj;\n    var settings = (_obj = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: true,\n        adaptiveHeight: true,\n        speed: 500,\n        slidesToShow: theme == \"dark\" ? 3 : 2,\n        slidesToScroll: 1,\n        autoPlay: true,\n        autoplaySpeed: 2000\n    }, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"infinite\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"rows\", theme == \"dark\" ? 1 : 2), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"pauseOnDotsHover\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"pauseOnHover\", false), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"centerMode\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"prevArrow\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowLeft, {}, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 41,\n        columnNumber: 16\n    }, this)), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"nextArrow\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowRight, {}, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 42,\n        columnNumber: 16\n    }, this)), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"responsive\", [\n        {\n            breakpoint: 900,\n            settings: {\n                slidesToShow: 1,\n                slidesToScroll: 1,\n                rows: 1\n            }\n        }, \n    ]), _obj);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center my-40 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, settings), {\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ArrowRight\");\n$RefreshReg$(_c1, \"ArrowLeft\");\n$RefreshReg$(_c2, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUI7Z0JBQUNpQyxTQUFTLEVBQUMsbUJBQW1CO2dCQUFDQyxXQUFXLEVBQUMsTUFBTTswQkFDakUsNEVBQUNuQyxtREFBTSwwS0FBS2dCLFFBQVE7OEJBQ2pCRixJQUFJLENBQUNzQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7d0JBQ3JCLHFCQUNFLDhEQUFDMUIsS0FBRzs0QkFBQ1IsU0FBUyxFQUFDLE9BQU87c0NBQ3BCLDRFQUFDTCx1REFBYztnQ0FDYndDLFFBQVEsRUFBRUYsSUFBSSxDQUFDRyxLQUFLO2dDQUNwQkMsS0FBSyxFQUFFSixJQUFJLENBQUNJLEtBQUs7Z0NBQ2pCQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtnQ0FDZkMsT0FBTyxFQUFFTixJQUFJLENBQUNPLFdBQVc7Ozs7O3FDQUN6Qjs7Ozs7aUNBQ0UsQ0FDTjtxQkFDSCxDQUFDOzs7Ozt3QkFDSzs7Ozs7b0JBQ1M7Ozs7OztZQUNoQixDQUNOO0NBQ0g7QUFsRGUvQixNQUFBQSxZQUFZO0FBb0Q1QiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF0ZXN0TmV3cy5qc3g/MDRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF0ZXN0TmV3c0NhcmQgZnJvbSBcIi4vTGF0ZXN0TmV3c0NhcmRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBBbmltYXRpb25PblNjcm9sbCB9IGZyb20gXCJyZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNvbnN0IEFycm93UmlnaHQgPSAoeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0pID0+IChcbiAgPGJ1dHRvblxuICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBsZWZ0OiBcIjUyJVwiLCB0b3A6IFwiMzUwcHhcIiB9fVxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gID5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJmYXMgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0XCIgLz5cbiAgPC9idXR0b24+XG4pO1xuY29uc3QgQXJyb3dMZWZ0ID0gKHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9KSA9PiAoXG4gIDxidXR0b25cbiAgICBzdHlsZT17eyAuLi5zdHlsZSwgbGVmdDogXCI0OCVcIiwgdG9wOiBcIjM1MHB4XCIgfX1cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICA+XG4gICAgPGRpdj5iYWNrPC9kaXY+XG4gIDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcih7IGRhdGEsIHRoZW1lIH0pIHtcbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRoZW1lID09IFwiZGFya1wiID8gZmFsc2UgOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxuICAgIHNwZWVkOiA1MDAsXG4gICAgc2xpZGVzVG9TaG93OiB0aGVtZSA9PSBcImRhcmtcIiA/IDMgOiAyLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIGF1dG9QbGF5OiB0cnVlLFxuICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgcm93czogdGhlbWUgPT0gXCJkYXJrXCIgPyAxIDogMixcbiAgICBwYXVzZU9uRG90c0hvdmVyOiB0cnVlLFxuICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBwcmV2QXJyb3c6IDxBcnJvd0xlZnQgLz4sXG4gICAgbmV4dEFycm93OiA8QXJyb3dSaWdodCAvPixcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDkwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgcm93czogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBhbGlnbi1taWRkbGUgdGV4dC1jZW50ZXIgbXktNDAgXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5Db25jZXB0IEFydDwvaDE+XG4gICAgICA8QW5pbWF0aW9uT25TY3JvbGwgYW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluVXBcIiBhbmltYXRlT25jZT1cInRydWVcIj5cbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgIHtkYXRhLm1hcCgobmV3cywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICAgICAgICAgIDxMYXRlc3ROZXdzQ2FyZFxuICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e25ld3MuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17bmV3cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e25ld3MuZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHN1bW1hcnk9e25ld3MuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvQW5pbWF0aW9uT25TY3JvbGw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxhdGVzdE5ld3NDYXJkIiwiU2xpZGVyIiwiQW5pbWF0aW9uT25TY3JvbGwiLCJGb250QXdlc29tZUljb24iLCJBcnJvd1JpZ2h0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbkNsaWNrIiwiYnV0dG9uIiwibGVmdCIsInRvcCIsImljb24iLCJBcnJvd0xlZnQiLCJkaXYiLCJTaW1wbGVTbGlkZXIiLCJkYXRhIiwidGhlbWUiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsImFkYXB0aXZlSGVpZ2h0Iiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9QbGF5IiwiYXV0b3BsYXlTcGVlZCIsInJvd3MiLCJwYXVzZU9uRG90c0hvdmVyIiwicGF1c2VPbkhvdmVyIiwiY2VudGVyTW9kZSIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaDEiLCJhbmltYXRlSW4iLCJhbmltYXRlT25jZSIsIm1hcCIsIm5ld3MiLCJpIiwiaW1hZ2VTcmMiLCJpbWFnZSIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});