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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArtCard */ \"./components/ArtCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useData */ \"./hooks/useData.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _Icons_Arrows__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Icons/Arrows */ \"./components/Icons/Arrows.jsx\");\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SimpleSlider() {\n    var _this = this;\n    _s();\n    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)().t;\n    var art = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().art;\n    var theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme)().theme;\n    var slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var settings = {\n        dots: false,\n        infinite: true,\n        speed: 400,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        rows: 1,\n        pauseOnDotsHover: true,\n        centerMode: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        centerPadding: \"10\",\n        responsive: [\n            {\n                breakpoint: 600,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    centerPadding: \"30px\"\n                }\n            },\n            {\n                breakpoint: 1000,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    centerPadding: \"100px\"\n                }\n            },\n            {\n                breakpoint: 1200,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    centerPadding: \"10px\"\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center md:mt-36 my-10\",\n        id: \"conceptArt\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-semibold\",\n                children: t(\"concept_art\")\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:h-[450px] h-[300px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({\n                            ref: slider\n                        }, settings), {\n                            children: art.map(function(news, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:mb-5 md:mt-20 mt-16\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArtCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        image: news.image,\n                                        title: news.title\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, i, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 17\n                                }, _this);\n                            })\n                        }), void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center p-6 md:p-24\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"p-3 \",\n                                style: {\n                                    outline: \"none\"\n                                },\n                                onClick: function() {\n                                    var ref;\n                                    return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickPrev();\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons_Arrows__WEBPACK_IMPORTED_MODULE_7__.ArrowsLeft, {}, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                style: {\n                                    outline: \"none\"\n                                },\n                                className: \"p-3\",\n                                onClick: function() {\n                                    var ref;\n                                    return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickNext();\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Icons_Arrows__WEBPACK_IMPORTED_MODULE_7__.ArrowsRight, {}, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleSlider, \"oxZDHgONPqch1WNa4xOH0USRa0c=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation,\n        _hooks_useData__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        next_themes__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBZkEsT0FBQUEsTUFBTSxhQUFOQSxNQUFNLFdBQVMsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxDQUFBQSxHQUFlLEdBQWZBLE1BQU0sQ0FBRWdDLE9BQU8sY0FBZmhDLEdBQWUsY0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxHQUFlLENBQUVpQyxTQUFTLEVBQUU7aUNBQUE7MENBRTNDLDRFQUFDdkMscURBQVU7Ozs7d0NBQUc7Ozs7O29DQUNQOzBDQUNULDhEQUFDa0MsUUFBTTtnQ0FDTEMsS0FBSyxFQUFFO29DQUFFQyxPQUFPLEVBQUUsTUFBTTtpQ0FBRTtnQ0FDMUJiLFNBQVMsRUFBQyxLQUFLO2dDQUNmYyxPQUFPLEVBQUU7d0NBQU0vQixHQUFlO29DQUFmQSxPQUFBQSxNQUFNLGFBQU5BLE1BQU0sV0FBUyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLENBQUFBLEdBQWUsR0FBZkEsTUFBTSxDQUFFZ0MsT0FBTyxjQUFmaEMsR0FBZSxjQUFmQSxLQUFBQSxDQUFlLEdBQWZBLEdBQWUsQ0FBRWtDLFNBQVMsRUFBRTtpQ0FBQTswQ0FFM0MsNEVBQUN2QyxzREFBVzs7Ozt3Q0FBRzs7Ozs7b0NBQ1I7Ozs7Ozs0QkFDTDs7Ozs7O29CQUNZOzs7Ozs7WUFDaEIsQ0FDTjtDQUNIO0dBdEZlQyxZQUFZOztRQUNaSCx5REFBYztRQUNaRixzREFBTztRQUNMQyxpREFBUTs7O0FBSFpJLEtBQUFBLFlBQVk7QUF3RjVCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnQuanN4PzNkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXJ0Q2FyZCBmcm9tIFwiLi9BcnRDYXJkXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uT25TY3JvbGwgfSBmcm9tIFwicmVhY3QtYW5pbWF0aW9uLW9uLXNjcm9sbFwiO1xuaW1wb3J0IHVzZURhdGEgZnJvbSBcIi4uL2hvb2tzL3VzZURhdGFcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIm5leHQtdGhlbWVzXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyBBcnJvd3NMZWZ0LCBBcnJvd3NSaWdodCB9IGZyb20gXCIuL0ljb25zL0Fycm93c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2ltcGxlU2xpZGVyKCkge1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIGNvbnN0IHsgYXJ0IH0gPSB1c2VEYXRhKCk7XG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IHNsaWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgZG90czogZmFsc2UsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDQwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcm93czogMSxcbiAgICBwYXVzZU9uRG90c0hvdmVyOiB0cnVlLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgcHJldkFycm93OiA8PjwvPixcbiAgICBuZXh0QXJyb3c6IDw+PC8+LFxuICAgIGNlbnRlclBhZGRpbmc6IFwiMTBcIixcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgcm93czogMSxcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjMwcHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDEwMDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCIxMDBweFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgcm93czogMSxcbiAgICAgICAgICBjZW50ZXJQYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIG1kOm10LTM2IG15LTEwXCJcbiAgICAgIGlkPVwiY29uY2VwdEFydFwiXG4gICAgPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj57dChcImNvbmNlcHRfYXJ0XCIpfTwvaDE+XG4gICAgICA8QW5pbWF0aW9uT25TY3JvbGwgYW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluVXBcIiBhbmltYXRlT25jZT1cInRydWVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpoLVs0NTBweF0gaC1bMzAwcHhdXCI+XG4gICAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlcn0gey4uLnNldHRpbmdzfT5cbiAgICAgICAgICAgIHthcnQubWFwKChuZXdzLCBpKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1kOm1iLTUgbWQ6bXQtMjAgbXQtMTZcIj5cbiAgICAgICAgICAgICAgICAgIDxBcnRDYXJkIGltYWdlPXtuZXdzLmltYWdlfSB0aXRsZT17bmV3cy50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHAtNiBtZDpwLTI0XCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0zIFwiXG4gICAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVyPy5jdXJyZW50Py5zbGlja1ByZXYoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dzTGVmdCAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6IFwibm9uZVwiIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTNcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVyPy5jdXJyZW50Py5zbGlja05leHQoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QXJyb3dzUmlnaHQgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0FuaW1hdGlvbk9uU2Nyb2xsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFydENhcmQiLCJTbGlkZXIiLCJBbmltYXRpb25PblNjcm9sbCIsInVzZURhdGEiLCJ1c2VUaGVtZSIsInVzZVRyYW5zbGF0aW9uIiwiQXJyb3dzTGVmdCIsIkFycm93c1JpZ2h0IiwiU2ltcGxlU2xpZGVyIiwidCIsImFydCIsInRoZW1lIiwic2xpZGVyIiwidXNlUmVmIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicm93cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJjZW50ZXJNb2RlIiwicHJldkFycm93IiwibmV4dEFycm93IiwiY2VudGVyUGFkZGluZyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMSIsImFuaW1hdGVJbiIsImFuaW1hdGVPbmNlIiwicmVmIiwibWFwIiwibmV3cyIsImkiLCJpbWFnZSIsInRpdGxlIiwiYnV0dG9uIiwic3R5bGUiLCJvdXRsaW5lIiwib25DbGljayIsImN1cnJlbnQiLCJzbGlja1ByZXYiLCJzbGlja05leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Art.jsx\n"));

/***/ })

});