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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\n\nvar ArrowRight = function(param) {\n    var className = param.className, style = param.style, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, style), {\n            left: \"52%\",\n            top: \"480px\"\n        }),\n        onClick: onClick,\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__.FontAwesomeIcon, {\n            icon: \"fas fa-arrow-circle-right\"\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, _this);\n};\n_c = ArrowRight;\nvar ArrowLeft = function(param) {\n    var className = param.className, style = param.style, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        style: (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, style), {\n            left: \"48%\",\n            top: \"480px\"\n        }),\n        onClick: onClick,\n        className: className,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"back\"\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 17,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = ArrowLeft;\nfunction SimpleSlider(param) {\n    var data = param.data, theme = param.theme;\n    var _this = this;\n    var _obj;\n    var settings = (_obj = {\n        dots: theme == \"dark\" ? false : true,\n        infinite: true,\n        speed: 500,\n        slidesToShow: theme == \"dark\" ? 3 : 2,\n        slidesToScroll: 1,\n        autoPlay: true,\n        autoplaySpeed: 2000\n    }, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"infinite\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"rows\", theme == \"dark\" ? 1 : 2), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"pauseOnDotsHover\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"pauseOnHover\", false), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"centerMode\", true), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"prevArrow\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowLeft, {}, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 40,\n        columnNumber: 16\n    }, this)), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"nextArrow\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ArrowRight, {}, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 41,\n        columnNumber: 16\n    }, this)), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_obj, \"responsive\", [\n        {\n            breakpoint: 900,\n            settings: {\n                slidesToShow: 1,\n                slidesToScroll: 1,\n                rows: 1\n            }\n        }, \n    ]), _obj);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center my-40 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl\",\n                children: \"Concept Art\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_4__.AnimationOnScroll, {\n                animateIn: \"animate__fadeInUp\",\n                animateOnce: \"true\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, settings), {\n                    children: data.map(function(news, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"my-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                imageSrc: news.image,\n                                title: news.title,\n                                date: news.date,\n                                summary: news.description\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }), void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_c2 = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ArrowRight\");\n$RefreshReg$(_c1, \"ArrowLeft\");\n$RefreshReg$(_c2, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUI7Z0JBQUNDLFdBQVcsRUFBQyxNQUFNOzBCQUNqRSw0RUFBQ2xDLG1EQUFNLDBLQUFLZ0IsUUFBUTs4QkFDakJGLElBQUksQ0FBQ3FCLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUVDLENBQUMsRUFBSzt3QkFDckIscUJBQ0UsOERBQUN6QixLQUFHOzRCQUFDUixTQUFTLEVBQUMsT0FBTztzQ0FDcEIsNEVBQUNMLHVEQUFjO2dDQUNidUMsUUFBUSxFQUFFRixJQUFJLENBQUNHLEtBQUs7Z0NBQ3BCQyxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FBSztnQ0FDakJDLElBQUksRUFBRUwsSUFBSSxDQUFDSyxJQUFJO2dDQUNmQyxPQUFPLEVBQUVOLElBQUksQ0FBQ08sV0FBVzs7Ozs7cUNBQ3pCOzs7OztpQ0FDRSxDQUNOO3FCQUNILENBQUM7Ozs7O3dCQUNLOzs7OztvQkFDUzs7Ozs7O1lBQ2hCLENBQ047Q0FDSDtBQWpEZTlCLE1BQUFBLFlBQVk7QUFtRDVCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXRlc3ROZXdzLmpzeD8wNGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExhdGVzdE5ld3NDYXJkIGZyb20gXCIuL0xhdGVzdE5ld3NDYXJkXCI7XG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uT25TY3JvbGwgfSBmcm9tIFwicmVhY3QtYW5pbWF0aW9uLW9uLXNjcm9sbFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuXG5jb25zdCBBcnJvd1JpZ2h0ID0gKHsgY2xhc3NOYW1lLCBzdHlsZSwgb25DbGljayB9KSA9PiAoXG4gIDxidXR0b25cbiAgICBzdHlsZT17eyAuLi5zdHlsZSwgbGVmdDogXCI1MiVcIiwgdG9wOiBcIjQ4MHB4XCIgfX1cbiAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICA+XG4gICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZmFzIGZhLWFycm93LWNpcmNsZS1yaWdodFwiIC8+XG4gIDwvYnV0dG9uPlxuKTtcbmNvbnN0IEFycm93TGVmdCA9ICh7IGNsYXNzTmFtZSwgc3R5bGUsIG9uQ2xpY2sgfSkgPT4gKFxuICA8YnV0dG9uXG4gICAgc3R5bGU9e3sgLi4uc3R5bGUsIGxlZnQ6IFwiNDglXCIsIHRvcDogXCI0ODBweFwiIH19XG4gICAgb25DbGljaz17b25DbGlja31cbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgPlxuICAgIDxkaXY+YmFjazwvZGl2PlxuICA8L2J1dHRvbj5cbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoeyBkYXRhLCB0aGVtZSB9KSB7XG4gIHZhciBzZXR0aW5ncyA9IHtcbiAgICBkb3RzOiB0aGVtZSA9PSBcImRhcmtcIiA/IGZhbHNlIDogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogdGhlbWUgPT0gXCJkYXJrXCIgPyAzIDogMixcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICBhdXRvUGxheTogdHJ1ZSxcbiAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIHJvd3M6IHRoZW1lID09IFwiZGFya1wiID8gMSA6IDIsXG4gICAgcGF1c2VPbkRvdHNIb3ZlcjogdHJ1ZSxcbiAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgcHJldkFycm93OiA8QXJyb3dMZWZ0IC8+LFxuICAgIG5leHRBcnJvdzogPEFycm93UmlnaHQgLz4sXG4gICAgcmVzcG9uc2l2ZTogW1xuICAgICAge1xuICAgICAgICBicmVha3BvaW50OiA5MDAsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgIHJvd3M6IDEsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYWxpZ24tbWlkZGxlIHRleHQtY2VudGVyIG15LTQwIFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+Q29uY2VwdCBBcnQ8L2gxPlxuICAgICAgPEFuaW1hdGlvbk9uU2Nyb2xsIGFuaW1hdGVJbj1cImFuaW1hdGVfX2ZhZGVJblVwXCIgYW5pbWF0ZU9uY2U9XCJ0cnVlXCI+XG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKG5ld3MsIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMjBcIj5cbiAgICAgICAgICAgICAgICA8TGF0ZXN0TmV3c0NhcmRcbiAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtuZXdzLmltYWdlfVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICBkYXRlPXtuZXdzLmRhdGV9XG4gICAgICAgICAgICAgICAgICBzdW1tYXJ5PXtuZXdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TbGlkZXI+XG4gICAgICA8L0FuaW1hdGlvbk9uU2Nyb2xsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxhdGVzdE5ld3NDYXJkIiwiU2xpZGVyIiwiQW5pbWF0aW9uT25TY3JvbGwiLCJGb250QXdlc29tZUljb24iLCJBcnJvd1JpZ2h0IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJvbkNsaWNrIiwiYnV0dG9uIiwibGVmdCIsInRvcCIsImljb24iLCJBcnJvd0xlZnQiLCJkaXYiLCJTaW1wbGVTbGlkZXIiLCJkYXRhIiwidGhlbWUiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvUGxheSIsImF1dG9wbGF5U3BlZWQiLCJyb3dzIiwicGF1c2VPbkRvdHNIb3ZlciIsInBhdXNlT25Ib3ZlciIsImNlbnRlck1vZGUiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImgxIiwiYW5pbWF0ZUluIiwiYW5pbWF0ZU9uY2UiLCJtYXAiLCJuZXdzIiwiaSIsImltYWdlU3JjIiwiaW1hZ2UiLCJ0aXRsZSIsImRhdGUiLCJzdW1tYXJ5IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});