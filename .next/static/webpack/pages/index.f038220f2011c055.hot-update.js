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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    _s();\n    var slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var settings = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: true,\n        speed: 400,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        rows: theme == \"dark\" ? 1 : 2,\n        pauseOnDotsHover: true,\n        centerMode: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        responsive: [\n            {\n                breakpoint: 900,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center my-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n                    ref: slider\n                }, settings), {\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-20 mx-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-10\",\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickPrev();\n                        },\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-10\",\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickNext();\n                        },\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleSlider, \"sRm15xTJlFTCZpmb4IPgNQa1O08=\");\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBUzs7Ozs7O29CQUNMOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0F2RGVyQyxZQUFZO0FBQVpBLEtBQUFBLFlBQVk7QUF5RDVCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXRlc3ROZXdzLmpzeD8wNGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExhdGVzdE5ld3NDYXJkIGZyb20gXCIuL0xhdGVzdE5ld3NDYXJkXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uT25TY3JvbGwgfSBmcm9tIFwicmVhY3QtYW5pbWF0aW9uLW9uLXNjcm9sbFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU2ltcGxlU2xpZGVyKHsgZGF0YSwgdGhlbWUgfSkge1xuICBjb25zdCBzbGlkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRoZW1lID09IFwiZGFya1wiID8gZmFsc2UgOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHNwZWVkOiA0MDAsXG4gICAgc2xpZGVzVG9TaG93OiAzLFxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgIHJvd3M6IHRoZW1lID09IFwiZGFya1wiID8gMSA6IDIsXG4gICAgcGF1c2VPbkRvdHNIb3ZlcjogdHJ1ZSxcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIHByZXZBcnJvdzogPD48Lz4sXG4gICAgbmV4dEFycm93OiA8PjwvPixcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDkwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgcm93czogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBhbGlnbi1taWRkbGUgdGV4dC1jZW50ZXIgbXktNDBcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPkNvbmNlcHQgQXJ0PC9oMT5cbiAgICAgIDxBbmltYXRpb25PblNjcm9sbCBhbmltYXRlSW49XCJhbmltYXRlX19mYWRlSW5VcFwiIGFuaW1hdGVPbmNlPVwidHJ1ZVwiPlxuICAgICAgICA8U2xpZGVyIHJlZj17c2xpZGVyfSB7Li4uc2V0dGluZ3N9PlxuICAgICAgICAgIHtkYXRhLm1hcCgobmV3cywgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0yMCBteC0xMFwiPlxuICAgICAgICAgICAgICAgIDxMYXRlc3ROZXdzQ2FyZFxuICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e25ld3MuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17bmV3cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGRhdGU9e25ld3MuZGF0ZX1cbiAgICAgICAgICAgICAgICAgIHN1bW1hcnk9e25ld3MuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L1NsaWRlcj5cbiAgICAgIDwvQW5pbWF0aW9uT25TY3JvbGw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTEwXCIgb25DbGljaz17KCkgPT4gc2xpZGVyPy5jdXJyZW50Py5zbGlja1ByZXYoKX0+XG4gICAgICAgICAgUHJldlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTEwXCIgb25DbGljaz17KCkgPT4gc2xpZGVyPy5jdXJyZW50Py5zbGlja05leHQoKX0+XG4gICAgICAgICAgTmV4dFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxhdGVzdE5ld3NDYXJkIiwiU2xpZGVyIiwiQW5pbWF0aW9uT25TY3JvbGwiLCJGb250QXdlc29tZUljb24iLCJTaW1wbGVTbGlkZXIiLCJkYXRhIiwidGhlbWUiLCJzbGlkZXIiLCJ1c2VSZWYiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyb3dzIiwicGF1c2VPbkRvdHNIb3ZlciIsImNlbnRlck1vZGUiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU9uY2UiLCJyZWYiLCJtYXAiLCJuZXdzIiwiaSIsImltYWdlU3JjIiwiaW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwiY3VycmVudCIsInNsaWNrUHJldiIsInNsaWNrTmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});