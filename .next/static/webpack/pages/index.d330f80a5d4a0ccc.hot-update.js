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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ArtCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArtCard */ \"./components/ArtCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    _s();\n    var slider = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    var settings = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: true,\n        speed: 400,\n        slidesToShow: 3,\n        slidesToScroll: 1,\n        rows: theme == \"dark\" ? 1 : 2,\n        pauseOnDotsHover: true,\n        centerMode: true,\n        prevArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        nextArrow: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n        responsive: [\n            {\n                breakpoint: 800,\n                settings: {\n                    slidesToShow: 1,\n                    slidesToScroll: 1,\n                    rows: 1,\n                    centerPadding: \"30px\"\n                }\n            }, \n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center md:my-40 my-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n                    ref: slider\n                }, settings), {\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:my-20 my-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArtCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-3 \",\n                        style: {\n                            outline: \"none\"\n                        },\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickPrev();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCircleArrowLeft,\n                            size: \"2x\",\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: {\n                            outline: \"none\"\n                        },\n                        className: \"p-3 focus:outline-0 outline-inherit\",\n                        onClick: function() {\n                            var ref;\n                            return slider === null || slider === void 0 ? void 0 : (ref = slider.current) === null || ref === void 0 ? void 0 : ref.slickNext();\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {\n                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__.faCircleArrowRight,\n                            size: \"2x\",\n                            color: \"white\"\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/Art.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(SimpleSlider, \"sRm15xTJlFTCZpmb4IPgNQa1O08=\");\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXdDO0FBQ0Q7QUFDTjtBQUM2QjtBQUMvQjtBQUNrQztBQUl0Qjs7QUFFcEMsU0FBU1MsWUFBWSxDQUFDLEtBQWUsRUFBRTtRQUFmQyxJQUFJLEdBQU4sS0FBZSxDQUFiQSxJQUFJLEVBQUVDLEtBQUssR0FBYixLQUFlLENBQVBBLEtBQUs7OztJQUN4QyxJQUFNQyxNQUFNLEdBQUdaLG1EQUFZLENBQUMsSUFBSSxDQUFDO0lBRWpDLElBQUljLFFBQVEsR0FBRztRQUNiQyxJQUFJLEVBQUVKLEtBQUssSUFBSSxNQUFNLEdBQUcsS0FBSyxHQUFHLElBQUk7UUFDcENLLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLEtBQUssRUFBRSxHQUFHO1FBQ1ZDLFlBQVksRUFBRSxDQUFDO1FBQ2ZDLGNBQWMsRUFBRSxDQUFDO1FBQ2pCQyxJQUFJLEVBQUVULEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDN0JVLGdCQUFnQixFQUFFLElBQUk7UUFDdEJDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxTQUFTLGdCQUFFLDZJQUFLO1FBQ2hCQyxTQUFTLGdCQUFFLDZJQUFLO1FBQ2hCQyxVQUFVLEVBQUU7WUFDVjtnQkFDRUMsVUFBVSxFQUFFLEdBQUc7Z0JBQ2ZaLFFBQVEsRUFBRTtvQkFDUkksWUFBWSxFQUFFLENBQUM7b0JBQ2ZDLGNBQWMsRUFBRSxDQUFDO29CQUNqQkMsSUFBSSxFQUFFLENBQUM7b0JBQ1BPLGFBQWEsRUFBRSxNQUFNO2lCQUN0QjthQUNGO1NBQ0Y7S0FDRjtJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx1REFBdUQ7OzBCQUNwRSw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLFVBQVU7MEJBQUMsYUFBVzs7Ozs7b0JBQUs7MEJBQ3pDLDhEQUFDekIsd0VBQWlCO2dCQUFDMkIsU0FBUyxFQUFDLG1CQUFtQjtnQkFBQ0MsV0FBVyxFQUFDLE1BQU07MEJBQ2pFLDRFQUFDN0IsbURBQU07b0JBQUM4QixHQUFHLEVBQUVyQixNQUFNO21CQUFNRSxRQUFROzhCQUM5QkosSUFBSSxDQUFDd0IsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQyxFQUFLO3dCQUNyQixxQkFDRSw4REFBQ1IsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjtzQ0FDN0IsNEVBQUMzQixnREFBYztnQ0FDYm1DLFFBQVEsRUFBRUYsSUFBSSxDQUFDRyxLQUFLO2dDQUNwQkMsS0FBSyxFQUFFSixJQUFJLENBQUNJLEtBQUs7Z0NBQ2pCQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtnQ0FDZkMsT0FBTyxFQUFFTixJQUFJLENBQUNPLFdBQVc7Ozs7O3FDQUN6Qjs7Ozs7aUNBQ0UsQ0FDTjtxQkFDSCxDQUFDOzs7Ozt3QkFDSzs7Ozs7b0JBQ1M7MEJBQ3BCLDhEQUFDZCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUJBQXFCOztrQ0FDbEMsOERBQUNjLFFBQU07d0JBQ0xkLFNBQVMsRUFBQyxNQUFNO3dCQUNoQmUsS0FBSyxFQUFFOzRCQUFFQyxPQUFPLEVBQUUsTUFBTTt5QkFBRTt3QkFDMUJDLE9BQU8sRUFBRTtnQ0FBTWxDLEdBQWU7NEJBQWZBLE9BQUFBLE1BQU0sYUFBTkEsTUFBTSxXQUFTLEdBQWZBLEtBQUFBLENBQWUsR0FBZkEsQ0FBQUEsR0FBZSxHQUFmQSxNQUFNLENBQUVtQyxPQUFPLGNBQWZuQyxHQUFlLGNBQWZBLEtBQUFBLENBQWUsR0FBZkEsR0FBZSxDQUFFb0MsU0FBUyxFQUFFO3lCQUFBO2tDQUUzQyw0RUFBQzFDLDJFQUFlOzRCQUFDMkMsSUFBSSxFQUFFMUMsZ0ZBQWlCOzRCQUFFMkMsSUFBSSxFQUFDLElBQUk7NEJBQUNDLEtBQUssRUFBQyxPQUFPOzs7OztnQ0FBRzs7Ozs7NEJBQzdEO2tDQUNULDhEQUFDUixRQUFNO3dCQUNMQyxLQUFLLEVBQUU7NEJBQUVDLE9BQU8sRUFBRSxNQUFNO3lCQUFFO3dCQUMxQmhCLFNBQVMsRUFBQyxxQ0FBcUM7d0JBQy9DaUIsT0FBTyxFQUFFO2dDQUFNbEMsR0FBZTs0QkFBZkEsT0FBQUEsTUFBTSxhQUFOQSxNQUFNLFdBQVMsR0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxDQUFBQSxHQUFlLEdBQWZBLE1BQU0sQ0FBRW1DLE9BQU8sY0FBZm5DLEdBQWUsY0FBZkEsS0FBQUEsQ0FBZSxHQUFmQSxHQUFlLENBQUV3QyxTQUFTLEVBQUU7eUJBQUE7a0NBRTNDLDRFQUFDOUMsMkVBQWU7NEJBQUMyQyxJQUFJLEVBQUV6QyxpRkFBa0I7NEJBQUUwQyxJQUFJLEVBQUMsSUFBSTs0QkFBQ0MsS0FBSyxFQUFDLE9BQU87Ozs7O2dDQUFHOzs7Ozs0QkFDOUQ7Ozs7OztvQkFDTDs7Ozs7O1lBQ0YsQ0FDTjtDQUNIO0dBaEVlMUMsWUFBWTtBQUFaQSxLQUFBQSxZQUFZO0FBa0U1QiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQXJ0LmpzeD8zZGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExhdGVzdE5ld3NDYXJkIGZyb20gXCIuL0FydENhcmRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBBbmltYXRpb25PblNjcm9sbCB9IGZyb20gXCJyZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7XG4gIGZhQ2lyY2xlQXJyb3dMZWZ0LFxuICBmYUNpcmNsZUFycm93UmlnaHQsXG59IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcih7IGRhdGEsIHRoZW1lIH0pIHtcbiAgY29uc3Qgc2xpZGVyID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIHZhciBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0aGVtZSA9PSBcImRhcmtcIiA/IGZhbHNlIDogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNDAwLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICByb3dzOiB0aGVtZSA9PSBcImRhcmtcIiA/IDEgOiAyLFxuICAgIHBhdXNlT25Eb3RzSG92ZXI6IHRydWUsXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBwcmV2QXJyb3c6IDw+PC8+LFxuICAgIG5leHRBcnJvdzogPD48Lz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA4MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgICAgY2VudGVyUGFkZGluZzogXCIzMHB4XCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIG1kOm15LTQwIG15LTEwXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5Db25jZXB0IEFydDwvaDE+XG4gICAgICA8QW5pbWF0aW9uT25TY3JvbGwgYW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluVXBcIiBhbmltYXRlT25jZT1cInRydWVcIj5cbiAgICAgICAgPFNsaWRlciByZWY9e3NsaWRlcn0gey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKG5ld3MsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6bXktMjAgbXktMTBcIj5cbiAgICAgICAgICAgICAgICA8TGF0ZXN0TmV3c0NhcmRcbiAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtuZXdzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtuZXdzLmRhdGV9XG4gICAgICAgICAgICAgICAgICBzdW1tYXJ5PXtuZXdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L0FuaW1hdGlvbk9uU2Nyb2xsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJwLTMgXCJcbiAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNsaWRlcj8uY3VycmVudD8uc2xpY2tQcmV2KCl9XG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2lyY2xlQXJyb3dMZWZ0fSBzaXplPVwiMnhcIiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBzdHlsZT17eyBvdXRsaW5lOiBcIm5vbmVcIiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMyBmb2N1czpvdXRsaW5lLTAgb3V0bGluZS1pbmhlcml0XCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzbGlkZXI/LmN1cnJlbnQ/LnNsaWNrTmV4dCgpfVxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNpcmNsZUFycm93UmlnaHR9IHNpemU9XCIyeFwiIGNvbG9yPVwid2hpdGVcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxhdGVzdE5ld3NDYXJkIiwiU2xpZGVyIiwiQW5pbWF0aW9uT25TY3JvbGwiLCJJbWFnZSIsIkZvbnRBd2Vzb21lSWNvbiIsImZhQ2lyY2xlQXJyb3dMZWZ0IiwiZmFDaXJjbGVBcnJvd1JpZ2h0IiwiU2ltcGxlU2xpZGVyIiwiZGF0YSIsInRoZW1lIiwic2xpZGVyIiwidXNlUmVmIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicm93cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJjZW50ZXJNb2RlIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJjZW50ZXJQYWRkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJhbmltYXRlSW4iLCJhbmltYXRlT25jZSIsInJlZiIsIm1hcCIsIm5ld3MiLCJpIiwiaW1hZ2VTcmMiLCJpbWFnZSIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbiIsInN0eWxlIiwib3V0bGluZSIsIm9uQ2xpY2siLCJjdXJyZW50Iiwic2xpY2tQcmV2IiwiaWNvbiIsInNpemUiLCJjb2xvciIsInNsaWNrTmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Art.jsx\n"));

/***/ })

});