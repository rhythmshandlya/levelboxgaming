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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n\n\n\n\n\n\n\n\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    var _obj;\n    var settings = (_obj = {\n        dots: true,\n        infinite: true,\n        adaptiveHeight: true,\n        speed: 500,\n        slidesToShow: theme == \"dark\" ? 2 : 2,\n        slidesToScroll: 2,\n        autoPlay: true,\n        autoplaySpeed: 2000\n    }, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"infinite\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"rows\", theme == \"dark\" ? 1 : 2), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"pauseOnDotsHover\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"pauseOnHover\", false), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"prevArrow\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"nextArrow\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"responsive\", [\n        {\n            breakpoint: 900,\n            settings: {\n                slidesToShow: 1,\n                slidesToScroll: 1,\n                rows: 1\n            }\n        }, \n    ]), _obj);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center lg:mt-24 lg:ml-24 lg:mr-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold lg:mb-14 text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, settings), {\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdGVzdE5ld3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDb0I7QUFDYjtBQUM2QjtBQUV2RCxTQUFTSSxZQUFZLENBQUMsS0FBZSxFQUFFO1FBQWZDLElBQUksR0FBTixLQUFlLENBQWJBLElBQUksRUFBRUMsS0FBSyxHQUFiLEtBQWUsQ0FBUEEsS0FBSzs7UUFDekIsSUF5QmQ7SUF6QkQsSUFBSUMsUUFBUSxJQUFHLElBeUJkO1FBeEJDQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxjQUFjLEVBQUUsSUFBSTtRQUNwQkMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsWUFBWSxFQUFFTixLQUFLLElBQUksTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3JDTyxjQUFjLEVBQUUsQ0FBQztRQUNqQkMsUUFBUSxFQUFFLElBQUk7UUFDZEMsYUFBYSxFQUFFLElBQUk7T0FDbkJOLGdGQUFBQSxDQVRhLElBeUJkLEVBaEJDQSxVQUFRLEVBQUUsSUFBSSxHQUNkTyxnRkFBQUEsQ0FWYSxJQXlCZCxFQWZDQSxNQUFJLEVBQUVWLEtBQUssSUFBSSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FDN0JXLGdGQUFBQSxDQVhhLElBeUJkLEVBZENBLGtCQUFnQixFQUFFLElBQUksR0FDdEJDLGdGQUFBQSxDQVphLElBeUJkLEVBYkNBLGNBQVksRUFBRSxLQUFLLEdBQ25CQyxnRkFBQUEsQ0FiYSxJQXlCZCxFQVpDQSxXQUFTLGdCQUFFLDZJQUFLLEdBQ2hCQyxnRkFBQUEsQ0FkYSxJQXlCZCxFQVhDQSxXQUFTLGdCQUFFLDZJQUFLLEdBQ2hCQyxnRkFBQUEsQ0FmYSxJQXlCZCxFQVZDQSxZQUFVLEVBQUU7UUFDVjtZQUNFQyxVQUFVLEVBQUUsR0FBRztZQUNmZixRQUFRLEVBQUU7Z0JBQ1JLLFlBQVksRUFBRSxDQUFDO2dCQUNmQyxjQUFjLEVBQUUsQ0FBQztnQkFDakJHLElBQUksRUFBRSxDQUFDO2FBQ1I7U0FDRjtLQUNGLEdBeEJZLElBeUJkO0lBRUQscUJBQ0UsOERBQUNPLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG1FQUFtRTs7MEJBQ2hGLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsNkJBQTZCOzBCQUFDLGFBQVc7Ozs7O29CQUFLOzBCQUM1RCw4REFBQ3JCLHdFQUFpQjtnQkFBQ3VCLFNBQVMsRUFBQyxtQkFBbUI7Z0JBQUNDLFdBQVcsRUFBQyxNQUFNOzBCQUNqRSw0RUFBQ3pCLG1EQUFNLDBLQUFLSyxRQUFROzhCQUNqQkYsSUFBSSxDQUFDdUIsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQyxFQUFLO3dCQUNyQixxQkFDRSw4REFBQ1AsS0FBRztzQ0FDRiw0RUFBQ3RCLHVEQUFjO2dDQUNiOEIsUUFBUSxFQUFFRixJQUFJLENBQUNHLEtBQUs7Z0NBQ3BCQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztnQ0FDakJDLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO2dDQUNmQyxPQUFPLEVBQUVOLElBQUksQ0FBQ08sV0FBVzs7Ozs7cUNBQ3pCOzs7OztpQ0FDRSxDQUNOO3FCQUNILENBQUM7Ozs7O3dCQUNLOzs7OztvQkFDUzs7Ozs7O1lBQ2hCLENBQ047Q0FDSDtBQWpEZWhDLEtBQUFBLFlBQVk7QUFtRDVCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXRlc3ROZXdzLmpzeD8wNGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXRlc3ROZXdzQ2FyZCBmcm9tIFwiLi9MYXRlc3ROZXdzQ2FyZFwiO1xuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCB7IEFuaW1hdGlvbk9uU2Nyb2xsIH0gZnJvbSBcInJlYWN0LWFuaW1hdGlvbi1vbi1zY3JvbGxcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcih7IGRhdGEsIHRoZW1lIH0pIHtcbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IHRoZW1lID09IFwiZGFya1wiID8gMiA6IDIsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgYXV0b1BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICByb3dzOiB0aGVtZSA9PSBcImRhcmtcIiA/IDEgOiAyLFxuICAgIHBhdXNlT25Eb3RzSG92ZXI6IHRydWUsXG4gICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICBwcmV2QXJyb3c6IDw+PC8+LFxuICAgIG5leHRBcnJvdzogPD48Lz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIGxnOm10LTI0IGxnOm1sLTI0IGxnOm1yLTI0XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGxnOm1iLTE0IHRleHQtM3hsXCI+Q29uY2VwdCBBcnQ8L2gxPlxuICAgICAgPEFuaW1hdGlvbk9uU2Nyb2xsIGFuaW1hdGVJbj1cImFuaW1hdGVfX2ZhZGVJblVwXCIgYW5pbWF0ZU9uY2U9XCJ0cnVlXCI+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKG5ld3MsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPExhdGVzdE5ld3NDYXJkXG4gICAgICAgICAgICAgICAgICBpbWFnZVNyYz17bmV3cy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtuZXdzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgZGF0ZT17bmV3cy5kYXRlfVxuICAgICAgICAgICAgICAgICAgc3VtbWFyeT17bmV3cy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvU2xpZGVyPlxuICAgICAgPC9BbmltYXRpb25PblNjcm9sbD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF0ZXN0TmV3c0NhcmQiLCJTbGlkZXIiLCJBbmltYXRpb25PblNjcm9sbCIsIlNpbXBsZVNsaWRlciIsImRhdGEiLCJ0aGVtZSIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwiYWRhcHRpdmVIZWlnaHQiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b1BsYXkiLCJhdXRvcGxheVNwZWVkIiwicm93cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJwYXVzZU9uSG92ZXIiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU9uY2UiLCJtYXAiLCJuZXdzIiwiaSIsImltYWdlU3JjIiwiaW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});