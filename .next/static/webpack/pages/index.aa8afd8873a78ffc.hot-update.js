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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar ArrowRight = function(param) {\n    var className = param.className, style = param.style, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, style), {\n            left: \"52%\",\n            top: \"480px\"\n        }),\n        onClick: onClick,\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n            icon: \"fas fa-arrow-circle-right\"\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, _this);\n};\n_c = ArrowRight;\nvar ArrowLeft = function(param) {\n    var className = param.className, style = param.style, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, style), {\n            left: \"48%\",\n            top: \"480px\"\n        }),\n        onClick: onClick,\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"back\"\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = ArrowLeft;\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    var settings = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: false,\n        speed: 500,\n        slidesToShow: theme == \"dark\" ? 3 : 2,\n        slidesToScroll: 1,\n        autoplaySpeed: 2000,\n        rows: theme == \"dark\" ? 1 : 2,\n        pauseOnDotsHover: true,\n        pauseOnHover: false,\n        centerMode: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowLeft, {}, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n            lineNumber: 38,\n            columnNumber: 16\n        }, this),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowRight, {}, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n            lineNumber: 39,\n            columnNumber: 16\n        }, this),\n        responsive: [\n            {\n                breakpoint: 900,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center my-40 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, settings), {\n                    children: [\n                        data.map(function(news, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"my-20\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    imageSrc: news.image,\n                                    title: news.title,\n                                    date: news.date,\n                                    summary: news.description\n                                }, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, _this);\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-fit rounded-2xl sm:w-[300px] md:w-[350px] mx-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: \"w-full rounded-[30px]\",\n                                    src: data[0].imageSrc,\n                                    alt: \"Sunset in the mountains\"\n                                }, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-col content-center flex-wrap w-full text-low\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs font-normal break-normal\",\n                                        children: data[0].summary\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this),\n                        \";\"\n                    ]\n                }), void 0, true, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ArrowRight\");\n$RefreshReg$(_c1, \"ArrowLeft\");\n$RefreshReg$(_c2, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akJDLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO29DQUNmQyxPQUFPLEVBQUVOLElBQUksQ0FBQ08sV0FBVzs7Ozs7eUNBQ3pCOzs7OztxQ0FDRSxDQUNOO3lCQUNILENBQUM7c0NBQ0YsOERBQUM5QixLQUFHOzRCQUFDUixTQUFTLEVBQUMscURBQXFEOzs4Q0FDbEUsOERBQUN1QyxLQUFHO29DQUNGQyxLQUFLLEVBQUMsdUJBQXVCO29DQUM3QkMsR0FBRyxFQUFFL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDdUIsUUFBUTtvQ0FDckJTLEdBQUcsRUFBQyx5QkFBeUI7Ozs7O3dDQUM3Qjs4Q0FDRiw4REFBQ2xDLEtBQUc7b0NBQUNSLFNBQVMsRUFBQyx3REFBd0Q7OENBQ3JFLDRFQUFDMkMsR0FBQzt3Q0FBQzNDLFNBQVMsRUFBQyxrQ0FBa0M7a0RBQzVDVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMyQixPQUFPOzs7Ozs0Q0FDZDs7Ozs7d0NBQ0E7Ozs7OztnQ0FDRjt3QkFBQSxHQUVSOzs7Ozs7d0JBQVM7Ozs7O29CQUNTOzs7Ozs7WUFDaEIsQ0FDTjtDQUNIO0FBNURlNUIsTUFBQUEsWUFBWTtBQThENUIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xhdGVzdE5ld3MuanN4PzA0ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF0ZXN0TmV3c0NhcmQgZnJvbSBcIi4vTGF0ZXN0TmV3c0NhcmRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBBbmltYXRpb25PblNjcm9sbCB9IGZyb20gXCJyZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmNvbnN0IEFycm93UmlnaHQgPSAoeyBjbGFzc05hbWUsIHN0eWxlLCBvbkNsaWNrIH0pID0+IChcbiAgPGJ1dHRvblxuICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBsZWZ0OiBcIjUyJVwiLCB0b3A6IFwiNDgwcHhcIiB9fVxuICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gID5cbiAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJmYXMgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0XCIgLz5cbiAgPC9idXR0b24+XG4pO1xuY29uc3QgQXJyb3dMZWZ0ID0gKHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9KSA9PiAoXG4gIDxidXR0b25cbiAgICBzdHlsZT17eyAuLi5zdHlsZSwgbGVmdDogXCI0OCVcIiwgdG9wOiBcIjQ4MHB4XCIgfX1cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICA+XG4gICAgPGRpdj5iYWNrPC9kaXY+XG4gIDwvYnV0dG9uPlxuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcih7IGRhdGEsIHRoZW1lIH0pIHtcbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRoZW1lID09IFwiZGFya1wiID8gZmFsc2UgOiB0cnVlLFxuICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogdGhlbWUgPT0gXCJkYXJrXCIgPyAzIDogMixcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgIHJvd3M6IHRoZW1lID09IFwiZGFya1wiID8gMSA6IDIsXG4gICAgcGF1c2VPbkRvdHNIb3ZlcjogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgcHJldkFycm93OiA8QXJyb3dMZWZ0IC8+LFxuICAgIG5leHRBcnJvdzogPEFycm93UmlnaHQgLz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIG15LTQwIFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+Q29uY2VwdCBBcnQ8L2gxPlxuICAgICAgPEFuaW1hdGlvbk9uU2Nyb2xsIGFuaW1hdGVJbj1cImFuaW1hdGVfX2ZhZGVJblVwXCIgYW5pbWF0ZU9uY2U9XCJ0cnVlXCI+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKG5ld3MsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMjBcIj5cbiAgICAgICAgICAgICAgICA8TGF0ZXN0TmV3c0NhcmRcbiAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtuZXdzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtuZXdzLmRhdGV9XG4gICAgICAgICAgICAgICAgICBzdW1tYXJ5PXtuZXdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZml0IHJvdW5kZWQtMnhsIHNtOnctWzMwMHB4XSBtZDp3LVszNTBweF0gbXgtYXV0b1wiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCByb3VuZGVkLVszMHB4XVwiXG4gICAgICAgICAgICAgIHNyYz17ZGF0YVswXS5pbWFnZVNyY31cbiAgICAgICAgICAgICAgYWx0PVwiU3Vuc2V0IGluIHRoZSBtb3VudGFpbnNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBjb250ZW50LWNlbnRlciBmbGV4LXdyYXAgdy1mdWxsIHRleHQtbG93XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1ub3JtYWwgYnJlYWstbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAge2RhdGFbMF0uc3VtbWFyeX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgO1xuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvQW5pbWF0aW9uT25TY3JvbGw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGF0ZXN0TmV3c0NhcmQiLCJTbGlkZXIiLCJBbmltYXRpb25PblNjcm9sbCIsIkZvbnRBd2Vzb21lSWNvbiIsIkFycm93UmlnaHQiLCJjbGFzc05hbWUiLCJzdHlsZSIsIm9uQ2xpY2siLCJidXR0b24iLCJsZWZ0IiwidG9wIiwiaWNvbiIsIkFycm93TGVmdCIsImRpdiIsIlNpbXBsZVNsaWRlciIsImRhdGEiLCJ0aGVtZSIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImF1dG9wbGF5U3BlZWQiLCJyb3dzIiwicGF1c2VPbkRvdHNIb3ZlciIsInBhdXNlT25Ib3ZlciIsImNlbnRlck1vZGUiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImgxIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU9uY2UiLCJtYXAiLCJuZXdzIiwiaSIsImltYWdlU3JjIiwiaW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJpbWciLCJjbGFzcyIsInNyYyIsImFsdCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});