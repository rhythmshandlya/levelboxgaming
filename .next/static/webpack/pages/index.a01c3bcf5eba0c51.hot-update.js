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

/***/ "./components/Art.jsx":
/*!****************************!*\
  !*** ./components/Art.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArtCard */ \"./components/ArtCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/useData */ \"./components/hooks/useData.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _Icons_Arrows__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Icons/Arrows */ \"./components/Icons/Arrows.jsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SimpleSlider() {\n    var _this = this;\n    _s();\n    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)().t;\n    var art = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])().art;\n    var theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_7__.useTheme)().theme;\n    var slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var settings = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: true,\n        speed: 400,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        rows: theme == \"dark\" ? 1 : 2,\n        pauseOnDotsHover: true,\n        centerMode: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        centerPadding: \"10\",\n        responsive: [\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    centerPadding: \"30px\"\n                }\n            },\n            {\n                breakpoint: 1000,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    centerPadding: \"100px\"\n                }\n            },\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    centerPadding: \"10px\"\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center md:mt-36 my-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-semibold\",\n                children: t(\"concept_art\")\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[500px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                    animateIn: \"animate__fadeInUp\",\n                    animateOnce: \"true\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({\n                        ref: slider\n                    }, settings), {\n                        children: art.map(function(news, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"md:mb-5 md:mt-20 mt-16\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArtCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    image: news.image,\n                                    title: news.title\n                                }, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 19\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }), void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-3 \",\n                        style: {\n                            outline: \"none\"\n                        },\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickPrev();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons_Arrows__WEBPACK_IMPORTED_MODULE_8__.ArrowsLeft, {}, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            outline: \"none\"\n                        },\n                        className: \"p-3 focus:outline-0 outline-inherit\",\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickNext();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons_Arrows__WEBPACK_IMPORTED_MODULE_8__.ArrowsRight, {}, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleSlider, \"oxZDHgONPqch1WNa4xOH0USRa0c=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation,\n        _hooks_useData__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        next_themes__WEBPACK_IMPORTED_MODULE_7__.useTheme\n    ];\n});\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTs0QkFBRUMsT0FBTyxFQUFFLE1BQU07eUJBQUU7d0JBQzFCQyxPQUFPLEVBQUU7Z0NBQU05QixHQUFlOzRCQUFmQSxPQUFBQSxNQUFNLGFBQU5BLE1BQU0sV0FBUyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLENBQUFBLEdBQWUsR0FBZkEsTUFBTSxDQUFFK0IsT0FBTyxjQUFmL0IsR0FBZSxjQUFmQSxLQUFBQSxDQUFlLEdBQWZBLEdBQWUsQ0FBRWdDLFNBQVMsRUFBRTt5QkFBQTtrQ0FFM0MsNEVBQUN0QyxxREFBVTs7OztnQ0FBRzs7Ozs7NEJBQ1A7a0NBQ1QsOERBQUNpQyxRQUFNO3dCQUNMQyxLQUFLLEVBQUU7NEJBQUVDLE9BQU8sRUFBRSxNQUFNO3lCQUFFO3dCQUMxQlosU0FBUyxFQUFDLHFDQUFxQzt3QkFDL0NhLE9BQU8sRUFBRTtnQ0FBTTlCLEdBQWU7NEJBQWZBLE9BQUFBLE1BQU0sYUFBTkEsTUFBTSxXQUFTLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsQ0FBQUEsR0FBZSxHQUFmQSxNQUFNLENBQUUrQixPQUFPLGNBQWYvQixHQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsR0FBZSxDQUFFaUMsU0FBUyxFQUFFO3lCQUFBO2tDQUUzQyw0RUFBQ3RDLHNEQUFXOzs7O2dDQUFHOzs7Ozs0QkFDUjs7Ozs7O29CQUNMOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FuRmVDLFlBQVk7O1FBQ1pILHlEQUFjO1FBQ1pGLHNEQUFPO1FBQ0xDLGlEQUFROzs7QUFIWkksS0FBQUEsWUFBWTtBQXFGNUIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydC5qc3g/M2RhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRDYXJkIGZyb20gXCIuL0FydENhcmRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBBbmltYXRpb25PblNjcm9sbCB9IGZyb20gXCJyZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge1xuICBmYUNpcmNsZUFycm93TGVmdCxcbiAgZmFDaXJjbGVBcnJvd1JpZ2h0LFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgdXNlRGF0YSBmcm9tIFwiLi9ob29rcy91c2VEYXRhXCI7XG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gXCJuZXh0LXRoZW1lc1wiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgQXJyb3dzTGVmdCwgQXJyb3dzUmlnaHQgfSBmcm9tIFwiLi9JY29ucy9BcnJvd3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcigpIHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCB7IGFydCB9ID0gdXNlRGF0YSgpO1xuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCBzbGlkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRoZW1lID09IFwiZGFya1wiID8gZmFsc2UgOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA0MDAsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHJvd3M6IHRoZW1lID09IFwiZGFya1wiID8gMSA6IDIsXG4gICAgcGF1c2VPbkRvdHNIb3ZlcjogdHJ1ZSxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIHByZXZBcnJvdzogPD48Lz4sXG4gICAgbmV4dEFycm93OiA8PjwvPixcbiAgICBjZW50ZXJQYWRkaW5nOiBcIjEwXCIsXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCIzMHB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiAxMDAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiMTAwcHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIG1kOm10LTM2IG15LTEwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiPnt0KFwiY29uY2VwdF9hcnRcIil9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNTAwcHhdXCI+XG4gICAgICAgIDxBbmltYXRpb25PblNjcm9sbCBhbmltYXRlSW49XCJhbmltYXRlX19mYWRlSW5VcFwiIGFuaW1hdGVPbmNlPVwidHJ1ZVwiPlxuICAgICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXJ9IHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAgICB7YXJ0Lm1hcCgobmV3cywgaSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtZDptYi01IG1kOm10LTIwIG10LTE2XCI+XG4gICAgICAgICAgICAgICAgICA8QXJ0Q2FyZCBpbWFnZT17bmV3cy5pbWFnZX0gdGl0bGU9e25ld3MudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1NsaWRlcj5cbiAgICAgICAgPC9BbmltYXRpb25PblNjcm9sbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgXCJcbiAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlcj8uY3VycmVudD8uc2xpY2tQcmV2KCl9XG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dzTGVmdCAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6IFwibm9uZVwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGZvY3VzOm91dGxpbmUtMCBvdXRsaW5lLWluaGVyaXRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlcj8uY3VycmVudD8uc2xpY2tOZXh0KCl9XG4gICAgICAgID5cbiAgICAgICAgICA8QXJyb3dzUmlnaHQgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJBcnRDYXJkIiwiU2xpZGVyIiwiQW5pbWF0aW9uT25TY3JvbGwiLCJGb250QXdlc29tZUljb24iLCJmYUNpcmNsZUFycm93TGVmdCIsImZhQ2lyY2xlQXJyb3dSaWdodCIsInVzZURhdGEiLCJ1c2VUaGVtZSIsInVzZVRyYW5zbGF0aW9uIiwiQXJyb3dzTGVmdCIsIkFycm93c1JpZ2h0IiwiU2ltcGxlU2xpZGVyIiwidCIsImFydCIsInRoZW1lIiwic2xpZGVyIiwidXNlUmVmIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicm93cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJjZW50ZXJNb2RlIiwicHJldkFycm93IiwibmV4dEFycm93IiwiY2VudGVyUGFkZGluZyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhbmltYXRlSW4iLCJhbmltYXRlT25jZSIsInJlZiIsIm1hcCIsIm5ld3MiLCJpIiwiaW1hZ2UiLCJ0aXRsZSIsImJ1dHRvbiIsInN0eWxlIiwib3V0bGluZSIsIm9uQ2xpY2siLCJjdXJyZW50Iiwic2xpY2tQcmV2Iiwic2xpY2tOZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Art.jsx\n"));

/***/ })

});