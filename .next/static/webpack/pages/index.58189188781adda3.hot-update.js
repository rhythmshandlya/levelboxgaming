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

/***/ "./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var _hooks_useData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useData */ \"./hooks/useData.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Hero() {\n    _s();\n    var hero = (0,_hooks_useData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().hero;\n    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;\n    var theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)().theme;\n    console.log(theme);\n    var style = {\n        backgroundImage: \"url('\".concat(hero.image, \"')\")\n    };\n    var light = {\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        zIndex: 100\n    };\n    var dark = {\n        zIndex: 100\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: style,\n        className: \"background-hero\",\n        id: \"hero\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hero-filter\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            theme == \"dark\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_1__.AnimationOnScroll, {\n                    animateIn: \"animate__fadeInDown\",\n                    animateOnce: \"true\",\n                    offset: -50,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-ful flex-col lg:dark:ml-20\",\n                        style: dark,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"max-w-xl text-3xl font-semibold text-left mb-3 text-white\",\n                                children: t(hero.heading)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"max-w-xl py-4 text-lg text-left text-white lg:text-xl xl:text-xl\",\n                                children: t(hero.subheading)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap  max-w-xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: hero.preOrder,\n                                        className: \"bg-red-500 w-40 px-3.5 py-2 m-1 hover:bg-white text-white hover:text-black font-medium rounded\",\n                                        children: t(\"pre_order\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: hero.explore,\n                                        className: \"rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-red-500 text-white\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"relative text-red-500 transition duration-300 group-hover:text-white ease\",\n                                                children: t(\"explore\")\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this),\n            theme != \"dark\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_1__.AnimationOnScroll, {\n                    animateIn: \"animate__fadeInDown\",\n                    animateOnce: \"true\",\n                    offset: -50,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-ful flex-col items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"max-w-xl text-3xl font-semibold text-center mb-3 text-white\",\n                                children: t(hero.heading)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"max-w-xl py-4 text-lg text-center text-white lg:text-xl xl:text-xl\",\n                                children: t(hero.subheading)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center max-w-xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: hero.preOrder,\n                                        className: \"bg-red-500 w-40 px-3.5 py-2 m-1 overflow-hidden hover:bg-white text-white hover:text-black font-medium rounded\",\n                                        children: t(\"pre_order\")\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                        href: hero.explore,\n                                        className: \"rounded-md w-40 px-3.5 py-2 m-1 overflow-hidden hover:bg-red-500 relative group cursor-pointer border-1 font-medium border-red-500 text-white\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"relative transition duration-300 text-red-500 group-hover:text-white ease\",\n                                            children: t(\"explore\")\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Hero.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_s(Hero, \"sxYT1BtXoWMNWhiyTNNi1j1I/Wk=\", false, function() {\n    return [\n        _hooks_useData__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation,\n        next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme\n    ];\n});\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7Ozs7O29DQUNkOzBDQUNKLDhEQUFDRCxHQUFDO2dDQUFDTCxTQUFTLEVBQUMsb0VBQW9FOzBDQUM5RWIsQ0FBQyxDQUFDRCxJQUFJLENBQUNxQixVQUFVLENBQUM7Ozs7O29DQUNqQjswQ0FDSiw4REFBQ1IsS0FBRztnQ0FBQ0MsU0FBUyxFQUFHLHdDQUFzQzs7a0RBQ3JELDhEQUFDUSxHQUFDO3dDQUNBQyxJQUFJLEVBQUV2QixJQUFJLENBQUN3QixRQUFRO3dDQUNuQlYsU0FBUyxFQUFDLGdIQUFnSDtrREFFekhiLENBQUMsQ0FBQyxXQUFXLENBQUM7Ozs7OzRDQUNiO2tEQUNKLDhEQUFDcUIsR0FBQzt3Q0FDQUMsSUFBSSxFQUFFdkIsSUFBSSxDQUFDeUIsT0FBTzt3Q0FDbEJYLFNBQVMsRUFBQywrSUFBZ0o7a0RBRTFKLDRFQUFDWSxNQUFJOzRDQUFDWixTQUFTLEVBQUMsMkVBQTRFO3NEQUN6RmIsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs7Ozs7Z0RBQ1I7Ozs7OzRDQUNMOzs7Ozs7b0NBQ0E7Ozs7Ozs0QkFDRjs7Ozs7d0JBQ1k7Ozs7O29CQUNoQjs7Ozs7O1lBRUosQ0FDTjtDQUNIO0dBNUZ1QkYsSUFBSTs7UUFDVEgsc0RBQU87UUFDVkMseURBQWM7UUFDVkMsaURBQVE7OztBQUhKQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVyby5qc3g/MjhhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb25PblNjcm9sbCB9IGZyb20gXCJyZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsXCI7XG5pbXBvcnQgdXNlRGF0YSBmcm9tIFwiLi4vaG9va3MvdXNlRGF0YVwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybygpIHtcbiAgY29uc3QgeyBoZXJvIH0gPSB1c2VEYXRhKCk7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc29sZS5sb2codGhlbWUpO1xuXG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtoZXJvLmltYWdlfScpYCxcbiAgfTtcbiAgY29uc3QgbGlnaHQgPSB7XG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB6SW5kZXg6IDEwMCxcbiAgfTtcbiAgY29uc3QgZGFyayA9IHtcbiAgICB6SW5kZXg6IDEwMCxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kLWhlcm9cIiBpZD1cImhlcm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1maWx0ZXJcIj48L2Rpdj5cbiAgICAgIHt0aGVtZSA9PSBcImRhcmtcIiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICA8QW5pbWF0aW9uT25TY3JvbGxcbiAgICAgICAgICAgIGFuaW1hdGVJbj1cImFuaW1hdGVfX2ZhZGVJbkRvd25cIlxuICAgICAgICAgICAgYW5pbWF0ZU9uY2U9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9mZnNldD17LTUwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCB3LWZ1bCBmbGV4LWNvbCBsZzpkYXJrOm1sLTIwYH0gc3R5bGU9e2Rhcmt9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy14bCB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtbGVmdCBtYi0zIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgICB7dChoZXJvLmhlYWRpbmcpfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LXhsIHB5LTQgdGV4dC1sZyB0ZXh0LWxlZnQgdGV4dC13aGl0ZSBsZzp0ZXh0LXhsIHhsOnRleHQteGxcIj5cbiAgICAgICAgICAgICAgICB7dChoZXJvLnN1YmhlYWRpbmcpfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBmbGV4LXdyYXAgIG1heC13LXhsYH0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2hlcm8ucHJlT3JkZXJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHctNDAgcHgtMy41IHB5LTIgbS0xIGhvdmVyOmJnLXdoaXRlIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1ibGFjayBmb250LW1lZGl1bSByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7dChcInByZV9vcmRlclwiKX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2hlcm8uZXhwbG9yZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbWQgdy00MCBweC0zLjUgcHktMiBtLTEgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIGdyb3VwIGN1cnNvci1wb2ludGVyIGJvcmRlci0yIGZvbnQtbWVkaXVtIGJvcmRlci1yZWQtNTAwIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHctNjQgaC0wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBvcmlnaW4tY2VudGVyIHJvdGF0ZS00NSAtdHJhbnNsYXRlLXgtMjAgYmctcmVkLTUwMCB0b3AtMS8yIGdyb3VwLWhvdmVyOmgtNjQgZ3JvdXAtaG92ZXI6LXRyYW5zbGF0ZS15LTMyIGVhc2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXJlZC01MDAgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSBlYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0KFwiZXhwbG9yZVwiKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9BbmltYXRpb25PblNjcm9sbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge3RoZW1lICE9IFwiZGFya1wiICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgIDxBbmltYXRpb25PblNjcm9sbFxuICAgICAgICAgICAgYW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluRG93blwiXG4gICAgICAgICAgICBhbmltYXRlT25jZT1cInRydWVcIlxuICAgICAgICAgICAgb2Zmc2V0PXstNTB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmbGV4IHctZnVsIGZsZXgtY29sIGl0ZW1zLWNlbnRlcmB9PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy14bCB0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIG1iLTMgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgIHt0KGhlcm8uaGVhZGluZyl9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWF4LXcteGwgcHktNCB0ZXh0LWxnIHRleHQtY2VudGVyIHRleHQtd2hpdGUgbGc6dGV4dC14bCB4bDp0ZXh0LXhsXCI+XG4gICAgICAgICAgICAgICAge3QoaGVyby5zdWJoZWFkaW5nKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIG1heC13LXhsYH0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2hlcm8ucHJlT3JkZXJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHctNDAgcHgtMy41IHB5LTIgbS0xIG92ZXJmbG93LWhpZGRlbiBob3ZlcjpiZy13aGl0ZSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtYmxhY2sgZm9udC1tZWRpdW0gcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3QoXCJwcmVfb3JkZXJcIil9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtoZXJvLmV4cGxvcmV9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIHctNDAgcHgtMy41IHB5LTIgbS0xIG92ZXJmbG93LWhpZGRlbiBob3ZlcjpiZy1yZWQtNTAwIHJlbGF0aXZlIGdyb3VwIGN1cnNvci1wb2ludGVyIGJvcmRlci0xIGZvbnQtbWVkaXVtICBib3JkZXItcmVkLTUwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCB0ZXh0LXJlZC01MDAgIGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgZWFzZVwiPlxuICAgICAgICAgICAgICAgICAgICB7dChcImV4cGxvcmVcIil9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQW5pbWF0aW9uT25TY3JvbGw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBbmltYXRpb25PblNjcm9sbCIsInVzZURhdGEiLCJ1c2VUcmFuc2xhdGlvbiIsInVzZVRoZW1lIiwiSGVybyIsImhlcm8iLCJ0IiwidGhlbWUiLCJjb25zb2xlIiwibG9nIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpbWFnZSIsImxpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiekluZGV4IiwiZGFyayIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU9uY2UiLCJvZmZzZXQiLCJwIiwiaGVhZGluZyIsInN1YmhlYWRpbmciLCJhIiwiaHJlZiIsInByZU9yZGVyIiwiZXhwbG9yZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Hero.jsx\n"));

/***/ })

});