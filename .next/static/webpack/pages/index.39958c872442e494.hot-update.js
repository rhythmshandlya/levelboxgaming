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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    _s();\n    var slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var settings = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: true,\n        speed: 400,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        rows: theme == \"dark\" ? 1 : 2,\n        pauseOnDotsHover: true,\n        centerMode: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        responsive: [\n            {\n                breakpoint: 900,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center my-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n                    ref: slider\n                }, settings), {\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-20 mx-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-4\",\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickPrev();\n                        },\n                        children: \"Prev\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-4\",\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickNext();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            src: \"/img/next.svg\",\n                            height: 10,\n                            width: 10\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleSlider, \"sRm15xTJlFTCZpmb4IPgNQa1O08=\");\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bURBQUs7NEJBQUN1QyxHQUFHLEVBQUMsZUFBZTs0QkFBQ0MsTUFBTSxFQUFFLEVBQUU7NEJBQUVDLEtBQUssRUFBRSxFQUFFOzs7OztnQ0FBSTs7Ozs7NEJBQzdDOzs7Ozs7b0JBQ0w7Ozs7OztZQUNGLENBQ047Q0FDSDtHQXZEZXhDLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQXlENUIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xhdGVzdE5ld3MuanN4PzA0ZjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF0ZXN0TmV3c0NhcmQgZnJvbSBcIi4vTGF0ZXN0TmV3c0NhcmRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBBbmltYXRpb25PblNjcm9sbCB9IGZyb20gXCJyZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcih7IGRhdGEsIHRoZW1lIH0pIHtcbiAgY29uc3Qgc2xpZGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0aGVtZSA9PSBcImRhcmtcIiA/IGZhbHNlIDogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNDAwLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByb3dzOiB0aGVtZSA9PSBcImRhcmtcIiA/IDEgOiAyLFxuICAgIHBhdXNlT25Eb3RzSG92ZXI6IHRydWUsXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBwcmV2QXJyb3c6IDw+PC8+LFxuICAgIG5leHRBcnJvdzogPD48Lz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIG15LTQwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5Db25jZXB0IEFydDwvaDE+XG4gICAgICA8QW5pbWF0aW9uT25TY3JvbGwgYW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluVXBcIiBhbmltYXRlT25jZT1cInRydWVcIj5cbiAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlcn0gey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKG5ld3MsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMjAgbXgtMTBcIj5cbiAgICAgICAgICAgICAgICA8TGF0ZXN0TmV3c0NhcmRcbiAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtuZXdzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtuZXdzLmRhdGV9XG4gICAgICAgICAgICAgICAgICBzdW1tYXJ5PXtuZXdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L0FuaW1hdGlvbk9uU2Nyb2xsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC00XCIgb25DbGljaz17KCkgPT4gc2xpZGVyPy5jdXJyZW50Py5zbGlja1ByZXYoKX0+XG4gICAgICAgICAgUHJldlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwLTRcIiBvbkNsaWNrPXsoKSA9PiBzbGlkZXI/LmN1cnJlbnQ/LnNsaWNrTmV4dCgpfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2ltZy9uZXh0LnN2Z1wiIGhlaWdodD17MTB9IHdpZHRoPXsxMH0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMYXRlc3ROZXdzQ2FyZCIsIlNsaWRlciIsIkFuaW1hdGlvbk9uU2Nyb2xsIiwiSW1hZ2UiLCJTaW1wbGVTbGlkZXIiLCJkYXRhIiwidGhlbWUiLCJzbGlkZXIiLCJ1c2VSZWYiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyb3dzIiwicGF1c2VPbkRvdHNIb3ZlciIsImNlbnRlck1vZGUiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU9uY2UiLCJyZWYiLCJtYXAiLCJuZXdzIiwiaSIsImltYWdlU3JjIiwiaW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwiY3VycmVudCIsInNsaWNrUHJldiIsInNsaWNrTmV4dCIsInNyYyIsImhlaWdodCIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});