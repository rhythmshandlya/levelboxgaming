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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArtCard */ \"./components/ArtCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    _s();\n    var slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var settings = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: true,\n        speed: 400,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        rows: theme == \"dark\" ? 1 : 2,\n        pauseOnDotsHover: true,\n        variableWidth: true,\n        centerMode: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        responsive: [\n            {\n                breakpoint: 800,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    infinite: false\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center my-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n                    ref: slider\n                }, settings), {\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArtCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-3 \",\n                        style: {\n                            outline: \"none\"\n                        },\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickPrev();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCircleArrowLeft,\n                            size: \"2x\",\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            outline: \"none\"\n                        },\n                        className: \"p-3 focus:outline-0 outline-inherit\",\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickNext();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCircleArrowRight,\n                            size: \"2x\",\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleSlider, \"sRm15xTJlFTCZpmb4IPgNQa1O08=\");\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLE1BQU07eUJBQUU7d0JBQzFCaEIsU0FBUyxFQUFDLHFDQUFxQzt3QkFDL0NpQixPQUFPLEVBQUU7Z0NBQU1sQyxHQUFlOzRCQUFmQSxPQUFBQSxNQUFNLGFBQU5BLE1BQU0sV0FBUyxHQUFmQSxLQUFBQSxDQUFlLEdBQWZBLENBQUFBLEdBQWUsR0FBZkEsTUFBTSxDQUFFbUMsT0FBTyxjQUFmbkMsR0FBZSxjQUFmQSxLQUFBQSxDQUFlLEdBQWZBLEdBQWUsQ0FBRXdDLFNBQVMsRUFBRTt5QkFBQTtrQ0FFM0MsNEVBQUM5QywyRUFBZTs0QkFBQzJDLElBQUksRUFBRXpDLGlGQUFrQjs0QkFBRTBDLElBQUksRUFBQyxJQUFJOzRCQUFDQyxLQUFLLEVBQUMsT0FBTzs7Ozs7Z0NBQUc7Ozs7OzRCQUM5RDs7Ozs7O29CQUNMOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FqRWUxQyxZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUFtRTVCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnQuanN4PzNkYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF0ZXN0TmV3c0NhcmQgZnJvbSBcIi4vQXJ0Q2FyZFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCB7IEFuaW1hdGlvbk9uU2Nyb2xsIH0gZnJvbSBcInJlYWN0LWFuaW1hdGlvbi1vbi1zY3JvbGxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHtcbiAgZmFDaXJjbGVBcnJvd0xlZnQsXG4gIGZhQ2lyY2xlQXJyb3dSaWdodCxcbn0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2ltcGxlU2xpZGVyKHsgZGF0YSwgdGhlbWUgfSkge1xuICBjb25zdCBzbGlkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRoZW1lID09IFwiZGFya1wiID8gZmFsc2UgOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA0MDAsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHJvd3M6IHRoZW1lID09IFwiZGFya1wiID8gMSA6IDIsXG4gICAgcGF1c2VPbkRvdHNIb3ZlcjogdHJ1ZSxcbiAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgcHJldkFycm93OiA8PjwvPixcbiAgICBuZXh0QXJyb3c6IDw+PC8+LFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogODAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBhbGlnbi1taWRkbGUgdGV4dC1jZW50ZXIgbXktNDBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPkNvbmNlcHQgQXJ0PC9oMT5cbiAgICAgIDxBbmltYXRpb25PblNjcm9sbCBhbmltYXRlSW49XCJhbmltYXRlX19mYWRlSW5VcFwiIGFuaW1hdGVPbmNlPVwidHJ1ZVwiPlxuICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyfSB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgIHtkYXRhLm1hcCgobmV3cywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yMFwiPlxuICAgICAgICAgICAgICAgIDxMYXRlc3ROZXdzQ2FyZFxuICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e25ld3MuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17bmV3cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e25ld3MuZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHN1bW1hcnk9e25ld3MuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvQW5pbWF0aW9uT25TY3JvbGw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBcIlxuICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6IFwibm9uZVwiIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2xpZGVyPy5jdXJyZW50Py5zbGlja1ByZXYoKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDaXJjbGVBcnJvd0xlZnR9IHNpemU9XCIyeFwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHN0eWxlPXt7IG91dGxpbmU6IFwibm9uZVwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwicC0zIGZvY3VzOm91dGxpbmUtMCBvdXRsaW5lLWluaGVyaXRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlcj8uY3VycmVudD8uc2xpY2tOZXh0KCl9XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2lyY2xlQXJyb3dSaWdodH0gc2l6ZT1cIjJ4XCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbXBsZVNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGF0ZXN0TmV3c0NhcmQiLCJTbGlkZXIiLCJBbmltYXRpb25PblNjcm9sbCIsIkltYWdlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaXJjbGVBcnJvd0xlZnQiLCJmYUNpcmNsZUFycm93UmlnaHQiLCJTaW1wbGVTbGlkZXIiLCJkYXRhIiwidGhlbWUiLCJzbGlkZXIiLCJ1c2VSZWYiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyb3dzIiwicGF1c2VPbkRvdHNIb3ZlciIsInZhcmlhYmxlV2lkdGgiLCJjZW50ZXJNb2RlIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImFuaW1hdGVJbiIsImFuaW1hdGVPbmNlIiwicmVmIiwibWFwIiwibmV3cyIsImkiLCJpbWFnZVNyYyIsImltYWdlIiwidGl0bGUiLCJkYXRlIiwic3VtbWFyeSIsImRlc2NyaXB0aW9uIiwiYnV0dG9uIiwic3R5bGUiLCJvdXRsaW5lIiwib25DbGljayIsImN1cnJlbnQiLCJzbGlja1ByZXYiLCJpY29uIiwic2l6ZSIsImNvbG9yIiwic2xpY2tOZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Art.jsx\n"));

/***/ })

});