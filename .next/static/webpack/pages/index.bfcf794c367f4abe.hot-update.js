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

/***/ "./components/LightNews.jsx":
/*!**********************************!*\
  !*** ./components/LightNews.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LightNews\": function() { return /* binding */ LightNews; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LightNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LightNewsCard */ \"./components/LightNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var _hooks_useNews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useNews */ \"./hooks/useNews.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction LightNews() {\n    var _this = this;\n    _s();\n    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)().t;\n    var news = (0,_hooks_useNews__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    var theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme)().theme;\n    var slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    console.log(\"news\", news);\n    var settings = {\n        dots: true,\n        infinite: true,\n        speed: 400,\n        slidesToShow: 2,\n        slidesToScroll: 2,\n        rows: 2,\n        pauseOnDotsHover: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        responsive: [\n            {\n                breakpoint: 900,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle max-w-[1100px] mx-auto my-20\",\n        id: \"conceptArt\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-semibold text-center my-10\",\n                children: t(\"concept_art\")\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({\n                        ref: slider\n                    }, settings), {\n                        children: news === null || news === void 0 ? void 0 : news.map(function(n, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-5 text-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LightNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    news: n.card,\n                                    id: i\n                                }, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 19\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }), void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"bg-white cursor-pointer w-40 mt-20 px-3.5 py-2 bg-red\",\n                    children: t(\"news_archives\")\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LightNews.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(LightNews, \"6bo2xhPUbJHb3TDdyXAMwJ5DmH8=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation,\n        _hooks_useNews__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c = LightNews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LightNews);\nvar _c;\n$RefreshReg$(_c, \"LightNews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xpZ2h0TmV3cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBd0M7QUFDSTtBQUNYO0FBQzZCO0FBQ3ZCO0FBQ0E7QUFDUTs7QUFFeEMsU0FBU1EsU0FBUyxHQUFHOzs7SUFDMUIsSUFBTSxDQUFHLEdBQUtELDZEQUFjLEVBQUUsQ0FBdEJFLENBQUM7SUFDVCxJQUFNQyxJQUFJLEdBQUdMLDBEQUFPLEVBQUU7SUFDdEIsSUFBTSxLQUFPLEdBQUtDLHFEQUFRLEVBQUUsQ0FBcEJLLEtBQUs7SUFDYixJQUFNQyxNQUFNLEdBQUdaLG1EQUFZLENBQUMsSUFBSSxDQUFDO0lBRWpDYyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLEVBQUVMLElBQUksQ0FBQyxDQUFDO0lBRTFCLElBQUlNLFFBQVEsR0FBRztRQUNiQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxLQUFLLEVBQUUsR0FBRztRQUNWQyxZQUFZLEVBQUUsQ0FBQztRQUNmQyxjQUFjLEVBQUUsQ0FBQztRQUNqQkMsSUFBSSxFQUFFLENBQUM7UUFDUEMsZ0JBQWdCLEVBQUUsSUFBSTtRQUN0QkMsU0FBUyxnQkFBRSw2SUFBSztRQUNoQkMsU0FBUyxnQkFBRSw2SUFBSztRQUNoQkMsVUFBVSxFQUFFO1lBQ1Y7Z0JBQ0VDLFVBQVUsRUFBRSxHQUFHO2dCQUNmWCxRQUFRLEVBQUU7b0JBQ1JJLFlBQVksRUFBRSxDQUFDO29CQUNmQyxjQUFjLEVBQUUsQ0FBQztvQkFDakJDLElBQUksRUFBRSxDQUFDO2lCQUNSO2FBQ0Y7U0FDRjtLQUNGO0lBRUQscUJBQ0UsOERBQUNNLEtBQUc7UUFDRkMsU0FBUyxFQUFDLHlEQUF5RDtRQUNuRUMsRUFBRSxFQUFDLFlBQVk7OzBCQUVmLDhEQUFDQyxJQUFFO2dCQUFDRixTQUFTLEVBQUMsMENBQTJDOzBCQUN0RHBCLENBQUMsQ0FBQyxhQUFhLENBQUM7Ozs7O29CQUNkOzBCQUNMLDhEQUFDTCx3RUFBaUI7Z0JBQUM0QixTQUFTLEVBQUMsbUJBQW1CO2dCQUFDQyxXQUFXLEVBQUMsTUFBTTswQkFDakUsNEVBQUNMLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxlQUFlOzhCQUM1Qiw0RUFBQzFCLG1EQUFNO3dCQUFDK0IsR0FBRyxFQUFFdEIsTUFBTTt1QkFBTUksUUFBUTtrQ0FDOUJOLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFeUIsR0FBRyxDQUFDLFNBQUNDLENBQUMsRUFBRUMsQ0FBQyxFQUFLOzRCQUNuQixxQkFDRSw4REFBQ1QsS0FBRztnQ0FBU0MsU0FBUyxFQUFDLGtCQUFrQjswQ0FDdkMsNEVBQUMzQixzREFBYTtvQ0FBQ1EsSUFBSSxFQUFFMEIsQ0FBQyxDQUFDRSxJQUFJO29DQUFFUixFQUFFLEVBQUVPLENBQUM7Ozs7O3lDQUFJOytCQUQ5QkEsQ0FBQzs7OztxQ0FFTCxDQUNOO3lCQUNILENBQUM7Ozs7OzRCQUNLOzs7Ozt3QkFDTDs7Ozs7b0JBQ1k7MEJBQ3BCLDhEQUFDRSxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDQSxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDQSxJQUFFOzs7O29CQUFHOzBCQUNOLDhEQUFDWCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsYUFBYTswQkFDMUIsNEVBQUNXLEdBQUM7b0JBQUNYLFNBQVMsRUFBQyx1REFBdUQ7OEJBQ2pFcEIsQ0FBQyxDQUFDLGVBQWUsQ0FBQzs7Ozs7d0JBQ2pCOzs7OztvQkFDQTs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBN0RlRCxTQUFTOztRQUNURCx5REFBYztRQUNmRixzREFBTztRQUNGQyxpREFBUTs7O0FBSFpFLEtBQUFBLFNBQVM7QUErRHpCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MaWdodE5ld3MuanN4Pzk5NDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGlnaHROZXdzQ2FyZCBmcm9tIFwiLi9MaWdodE5ld3NDYXJkXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uT25TY3JvbGwgfSBmcm9tIFwicmVhY3QtYW5pbWF0aW9uLW9uLXNjcm9sbFwiO1xuaW1wb3J0IHVzZU5ld3MgZnJvbSBcIi4uL2hvb2tzL3VzZU5ld3NcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBMaWdodE5ld3MoKSB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgbmV3cyA9IHVzZU5ld3MoKTtcbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3Qgc2xpZGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnNvbGUubG9nKFwibmV3c1wiLCBuZXdzKTtcblxuICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNDAwLFxuICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICBzbGlkZXNUb1Njcm9sbDogMixcbiAgICByb3dzOiAyLFxuICAgIHBhdXNlT25Eb3RzSG92ZXI6IHRydWUsXG4gICAgcHJldkFycm93OiA8PjwvPixcbiAgICBuZXh0QXJyb3c6IDw+PC8+LFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogOTAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICByb3dzOiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBhbGlnbi1taWRkbGUgbWF4LXctWzExMDBweF0gbXgtYXV0byBteS0yMFwiXG4gICAgICBpZD1cImNvbmNlcHRBcnRcIlxuICAgID5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyICBteS0xMFwiPlxuICAgICAgICB7dChcImNvbmNlcHRfYXJ0XCIpfVxuICAgICAgPC9oMT5cbiAgICAgIDxBbmltYXRpb25PblNjcm9sbCBhbmltYXRlSW49XCJhbmltYXRlX19mYWRlSW5VcFwiIGFuaW1hdGVPbmNlPVwidHJ1ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyfSB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgICAge25ld3M/Lm1hcCgobiwgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJteS01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8TGlnaHROZXdzQ2FyZCBuZXdzPXtuLmNhcmR9IGlkPXtpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9TbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRpb25PblNjcm9sbD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiYmctd2hpdGUgY3Vyc29yLXBvaW50ZXIgdy00MCBtdC0yMCBweC0zLjUgcHktMiBiZy1yZWRcIj5cbiAgICAgICAgICB7dChcIm5ld3NfYXJjaGl2ZXNcIil9XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaWdodE5ld3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpZ2h0TmV3c0NhcmQiLCJTbGlkZXIiLCJBbmltYXRpb25PblNjcm9sbCIsInVzZU5ld3MiLCJ1c2VUaGVtZSIsInVzZVRyYW5zbGF0aW9uIiwiTGlnaHROZXdzIiwidCIsIm5ld3MiLCJ0aGVtZSIsInNsaWRlciIsInVzZVJlZiIsImNvbnNvbGUiLCJsb2ciLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyb3dzIiwicGF1c2VPbkRvdHNIb3ZlciIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMSIsImFuaW1hdGVJbiIsImFuaW1hdGVPbmNlIiwicmVmIiwibWFwIiwibiIsImkiLCJjYXJkIiwiYnIiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LightNews.jsx\n"));

/***/ })

});