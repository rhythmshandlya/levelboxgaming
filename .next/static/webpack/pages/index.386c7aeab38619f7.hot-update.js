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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArtCard */ \"./components/ArtCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    _s();\n    var slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var settings = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: true,\n        speed: 400,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        rows: theme == \"dark\" ? 1 : 2,\n        pauseOnDotsHover: true,\n        centerMode: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        responsive: [\n            {\n                breakpoint: 800,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    centerPadding: \"30px\"\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center my-40\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n                    ref: slider\n                }, settings), {\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-8 mt-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArtCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-3 \",\n                        style: {\n                            outline: \"none\"\n                        },\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickPrev();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCircleArrowLeft,\n                            size: \"2x\",\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            outline: \"none\"\n                        },\n                        className: \"p-3 focus:outline-0 outline-inherit\",\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickNext();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCircleArrowRight,\n                            size: \"2x\",\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleSlider, \"sRm15xTJlFTCZpmb4IPgNQa1O08=\");\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixTQUFTLEVBQUMscUNBQXFDO3dCQUMvQ2lCLE9BQU8sRUFBRTtnQ0FBTWxDLEdBQWU7NEJBQWZBLE9BQUFBLE1BQU0sYUFBTkEsTUFBTSxXQUFTLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsQ0FBQUEsR0FBZSxHQUFmQSxNQUFNLENBQUVtQyxPQUFPLGNBQWZuQyxHQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsR0FBZSxDQUFFd0MsU0FBUyxFQUFFO3lCQUFBO2tDQUUzQyw0RUFBQzlDLDJFQUFlOzRCQUFDMkMsSUFBSSxFQUFFekMsaUZBQWtCOzRCQUFFMEMsSUFBSSxFQUFDLElBQUk7NEJBQUNDLEtBQUssRUFBQyxPQUFPOzs7OztnQ0FBRzs7Ozs7NEJBQzlEOzs7Ozs7b0JBQ0w7Ozs7OztZQUNGLENBQ047Q0FDSDtHQWhFZTFDLFlBQVk7QUFBWkEsS0FBQUEsWUFBWTtBQWtFNUIsK0RBQWVBLFlBQVksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydC5qc3g/M2RhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXRlc3ROZXdzQ2FyZCBmcm9tIFwiLi9BcnRDYXJkXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uT25TY3JvbGwgfSBmcm9tIFwicmVhY3QtYW5pbWF0aW9uLW9uLXNjcm9sbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQge1xuICBmYUNpcmNsZUFycm93TGVmdCxcbiAgZmFDaXJjbGVBcnJvd1JpZ2h0LFxufSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoeyBkYXRhLCB0aGVtZSB9KSB7XG4gIGNvbnN0IHNsaWRlciA9IFJlYWN0LnVzZVJlZihudWxsKTtcblxuICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdGhlbWUgPT0gXCJkYXJrXCIgPyBmYWxzZSA6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgc3BlZWQ6IDQwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgcm93czogdGhlbWUgPT0gXCJkYXJrXCIgPyAxIDogMixcbiAgICBwYXVzZU9uRG90c0hvdmVyOiB0cnVlLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgcHJldkFycm93OiA8PjwvPixcbiAgICBuZXh0QXJyb3c6IDw+PC8+LFxuICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgIHtcbiAgICAgICAgYnJlYWtwb2ludDogODAwLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICByb3dzOiAxLFxuICAgICAgICAgIGNlbnRlclBhZGRpbmc6IFwiMzBweFwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGFsaWduLW1pZGRsZSB0ZXh0LWNlbnRlciBteS00MFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+Q29uY2VwdCBBcnQ8L2gxPlxuICAgICAgPEFuaW1hdGlvbk9uU2Nyb2xsIGFuaW1hdGVJbj1cImFuaW1hdGVfX2ZhZGVJblVwXCIgYW5pbWF0ZU9uY2U9XCJ0cnVlXCI+XG4gICAgICAgIDxTbGlkZXIgcmVmPXtzbGlkZXJ9IHsuLi5zZXR0aW5nc30+XG4gICAgICAgICAge2RhdGEubWFwKChuZXdzLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggbXQtMTBcIj5cbiAgICAgICAgICAgICAgICA8TGF0ZXN0TmV3c0NhcmRcbiAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtuZXdzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtuZXdzLmRhdGV9XG4gICAgICAgICAgICAgICAgICBzdW1tYXJ5PXtuZXdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L0FuaW1hdGlvbk9uU2Nyb2xsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgXCJcbiAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlcj8uY3VycmVudD8uc2xpY2tQcmV2KCl9XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2lyY2xlQXJyb3dMZWZ0fSBzaXplPVwiMnhcIiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBmb2N1czpvdXRsaW5lLTAgb3V0bGluZS1pbmhlcml0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZXI/LmN1cnJlbnQ/LnNsaWNrTmV4dCgpfVxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZUFycm93UmlnaHR9IHNpemU9XCIyeFwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxhdGVzdE5ld3NDYXJkIiwiU2xpZGVyIiwiQW5pbWF0aW9uT25TY3JvbGwiLCJJbWFnZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2lyY2xlQXJyb3dMZWZ0IiwiZmFDaXJjbGVBcnJvd1JpZ2h0IiwiU2ltcGxlU2xpZGVyIiwiZGF0YSIsInRoZW1lIiwic2xpZGVyIiwidXNlUmVmIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicm93cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJjZW50ZXJNb2RlIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJjZW50ZXJQYWRkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhbmltYXRlSW4iLCJhbmltYXRlT25jZSIsInJlZiIsIm1hcCIsIm5ld3MiLCJpIiwiaW1hZ2VTcmMiLCJpbWFnZSIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInN0eWxlIiwib3V0bGluZSIsIm9uQ2xpY2siLCJjdXJyZW50Iiwic2xpY2tQcmV2IiwiaWNvbiIsInNpemUiLCJjb2xvciIsInNsaWNrTmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Art.jsx\n"));

/***/ })

});