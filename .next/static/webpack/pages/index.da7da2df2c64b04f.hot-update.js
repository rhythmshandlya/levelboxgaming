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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n\n\n\n\n\n\n\n\nfunction SimpleSlider(param) {\n    var data = param.data;\n    var _this = this;\n    var _obj;\n    var settings = (_obj = {\n        dots: true,\n        infinite: true,\n        adaptiveHeight: true,\n        speed: 500,\n        slidesToShow: 2,\n        slidesToScroll: 2,\n        autoPlay: true,\n        autoPlaySpeed: 500\n    }, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"infinite\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"rows\", 2), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"pauseOnDotsHover\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"pauseOnHover\", false), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"prevArrow\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"nextArrow\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_obj, \"responsive\", [\n        {\n            breakpoint: 900,\n            settings: {\n                slidesToShow: 1,\n                slidesToScroll: 1,\n                rows: 1\n            }\n        }, \n    ]), _obj);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center lg:mt-24 mb-10 lg:ml-24 lg:mr-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold lg:mb-14 text-3xl\",\n                children: \"Latest News\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, settings), {\n                    children: data.map(function(news, i) {\n                        if (i < 8) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 19\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdGVzdE5ld3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFBMEI7QUFDb0I7QUFDYjtBQUM2QjtBQUV2RCxTQUFTSSxZQUFZLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7UUFDbEIsSUF5QmQ7SUF6QkQsSUFBSUMsUUFBUSxJQUFHLElBeUJkO1FBeEJDQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsSUFBSTtRQUNkQyxjQUFjLEVBQUUsSUFBSTtRQUNwQkMsS0FBSyxFQUFFLEdBQUc7UUFDVkMsWUFBWSxFQUFFLENBQUM7UUFDZkMsY0FBYyxFQUFFLENBQUM7UUFDakJDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLGFBQWEsRUFBRSxHQUFHO09BQ2xCTixnRkFBQUEsQ0FUYSxJQXlCZCxFQWhCQ0EsVUFBUSxFQUFFLElBQUksR0FDZE8sZ0ZBQUFBLENBVmEsSUF5QmQsRUFmQ0EsTUFBSSxFQUFFLENBQUMsR0FDUEMsZ0ZBQUFBLENBWGEsSUF5QmQsRUFkQ0Esa0JBQWdCLEVBQUUsSUFBSSxHQUN0QkMsZ0ZBQUFBLENBWmEsSUF5QmQsRUFiQ0EsY0FBWSxFQUFFLEtBQUssR0FDbkJDLGdGQUFBQSxDQWJhLElBeUJkLEVBWkNBLFdBQVMsZ0JBQUUsNklBQUssR0FDaEJDLGdGQUFBQSxDQWRhLElBeUJkLEVBWENBLFdBQVMsZ0JBQUUsNklBQUssR0FDaEJDLGdGQUFBQSxDQWZhLElBeUJkLEVBVkNBLFlBQVUsRUFBRTtRQUNWO1lBQ0VDLFVBQVUsRUFBRSxHQUFHO1lBQ2ZmLFFBQVEsRUFBRTtnQkFDUkssWUFBWSxFQUFFLENBQUM7Z0JBQ2ZDLGNBQWMsRUFBRSxDQUFDO2dCQUNqQkcsSUFBSSxFQUFFLENBQUM7YUFDUjtTQUNGO0tBQ0YsR0F4QlksSUF5QmQ7SUFDRCxxQkFDRSw4REFBQ08sS0FBRztRQUFDQyxTQUFTLEVBQUMseUVBQXlFOzswQkFDdEYsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyw2QkFBNkI7MEJBQUMsYUFBVzs7Ozs7b0JBQUs7MEJBQzVELDhEQUFDcEIsd0VBQWlCO2dCQUFDc0IsU0FBUyxFQUFDLG1CQUFtQjtnQkFBQ0MsV0FBVyxFQUFDLE1BQU07MEJBQ2pFLDRFQUFDeEIsbURBQU0sMEtBQUtJLFFBQVE7OEJBQ2pCRCxJQUFJLENBQUNzQixHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7d0JBQ3JCLElBQUlBLENBQUMsR0FBRyxDQUFDLEVBQ1AscUJBQ0UsOERBQUNQLEtBQUc7c0NBQ0YsNEVBQUNyQix1REFBYztnQ0FDYjZCLFFBQVEsRUFBRUYsSUFBSSxDQUFDRyxLQUFLO2dDQUNwQkMsS0FBSyxFQUFFSixJQUFJLENBQUNJLEtBQUs7Z0NBQ2pCQyxJQUFJLEVBQUVMLElBQUksQ0FBQ0ssSUFBSTtnQ0FDZkMsT0FBTyxFQUFFTixJQUFJLENBQUNPLFdBQVc7Ozs7O3FDQUN6Qjs7Ozs7aUNBQ0UsQ0FDTjtxQkFDTCxDQUFDOzs7Ozt3QkFDSzs7Ozs7b0JBQ1M7Ozs7OztZQUNoQixDQUNOO0NBQ0g7QUFqRGUvQixLQUFBQSxZQUFZO0FBbUQ1QiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF0ZXN0TmV3cy5qc3g/MDRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF0ZXN0TmV3c0NhcmQgZnJvbSBcIi4vTGF0ZXN0TmV3c0NhcmRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5pbXBvcnQgeyBBbmltYXRpb25PblNjcm9sbCB9IGZyb20gXCJyZWFjdC1hbmltYXRpb24tb24tc2Nyb2xsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoeyBkYXRhIH0pIHtcbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgYXV0b1BsYXk6IHRydWUsXG4gICAgYXV0b1BsYXlTcGVlZDogNTAwLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHJvd3M6IDIsXG4gICAgcGF1c2VPbkRvdHNIb3ZlcjogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgIHByZXZBcnJvdzogPD48Lz4sXG4gICAgbmV4dEFycm93OiA8PjwvPixcbiAgICByZXNwb25zaXZlOiBbXG4gICAgICB7XG4gICAgICAgIGJyZWFrcG9pbnQ6IDkwMCxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgcm93czogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIGxnOm10LTI0IG1iLTEwIGxnOm1sLTI0IGxnOm1yLTI0XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIGxnOm1iLTE0IHRleHQtM3hsXCI+TGF0ZXN0IE5ld3M8L2gxPlxuICAgICAgPEFuaW1hdGlvbk9uU2Nyb2xsIGFuaW1hdGVJbj1cImFuaW1hdGVfX2ZhZGVJblVwXCIgYW5pbWF0ZU9uY2U9XCJ0cnVlXCI+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKG5ld3MsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpIDwgOClcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPExhdGVzdE5ld3NDYXJkXG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtuZXdzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17bmV3cy50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17bmV3cy5kYXRlfVxuICAgICAgICAgICAgICAgICAgICBzdW1tYXJ5PXtuZXdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L0FuaW1hdGlvbk9uU2Nyb2xsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXRlc3ROZXdzQ2FyZCIsIlNsaWRlciIsIkFuaW1hdGlvbk9uU2Nyb2xsIiwiU2ltcGxlU2xpZGVyIiwiZGF0YSIsInNldHRpbmdzIiwiZG90cyIsImluZmluaXRlIiwiYWRhcHRpdmVIZWlnaHQiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b1BsYXkiLCJhdXRvUGxheVNwZWVkIiwicm93cyIsInBhdXNlT25Eb3RzSG92ZXIiLCJwYXVzZU9uSG92ZXIiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU9uY2UiLCJtYXAiLCJuZXdzIiwiaSIsImltYWdlU3JjIiwiaW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});