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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n\n\n\n\n\n\nfunction SimpleSlider(param) {\n    var data = param.data;\n    var _this = this;\n    var settings = {\n        dots: true,\n        infinite: true,\n        adaptiveHeight: true,\n        speed: 500,\n        slidesToShow: 2,\n        slidesToScroll: 2,\n        centerPadding: \"150px\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col align-middle text-center m-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold mb-14 text-3xl\",\n                children: \"Latest News\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, settings), {\n                children: data.map(function(news) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            imageSrc: news.image,\n                            title: news.title,\n                            date: news.date,\n                            summary: news.description\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }), void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_c = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c;\n$RefreshReg$(_c, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdGVzdE5ld3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBMEI7QUFDb0I7QUFDYjtBQUUxQixTQUFTRyxZQUFZLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7SUFDakMsSUFBSUMsUUFBUSxHQUFHO1FBQ2JDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFFBQVEsRUFBRSxJQUFJO1FBQ2RDLGNBQWMsRUFBRSxJQUFJO1FBQ3BCQyxLQUFLLEVBQUUsR0FBRztRQUNWQyxZQUFZLEVBQUUsQ0FBQztRQUNmQyxjQUFjLEVBQUUsQ0FBQztRQUNqQkMsYUFBYSxFQUFFLE9BQU87S0FDdkI7SUFDRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsNkNBQTZDOzswQkFDMUQsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQywwQkFBMEI7MEJBQUMsYUFBVzs7Ozs7b0JBQUs7MEJBQ3pELDhEQUFDWixtREFBTSwwS0FBS0csUUFBUTswQkFDakJELElBQUksQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztvQkFDbEIscUJBQ0UsOERBQUNKLEtBQUc7a0NBQ0YsNEVBQUNaLHVEQUFjOzRCQUNiaUIsUUFBUSxFQUFFRCxJQUFJLENBQUNFLEtBQUs7NEJBQ3BCQyxLQUFLLEVBQUVILElBQUksQ0FBQ0csS0FBSzs0QkFDakJDLElBQUksRUFBRUosSUFBSSxDQUFDSSxJQUFJOzRCQUNmQyxPQUFPLEVBQUVMLElBQUksQ0FBQ00sV0FBVzs7Ozs7aUNBQ3pCOzs7Ozs2QkFDRSxDQUNOO2lCQUNILENBQUM7Ozs7O29CQUNLOzs7Ozs7WUFDTCxDQUNOO0NBQ0g7QUE3QmVwQixLQUFBQSxZQUFZO0FBK0I1QiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF0ZXN0TmV3cy5qc3g/MDRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF0ZXN0TmV3c0NhcmQgZnJvbSBcIi4vTGF0ZXN0TmV3c0NhcmRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTaW1wbGVTbGlkZXIoeyBkYXRhIH0pIHtcbiAgdmFyIHNldHRpbmdzID0ge1xuICAgIGRvdHM6IHRydWUsXG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgc3BlZWQ6IDUwMCxcbiAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgY2VudGVyUGFkZGluZzogXCIxNTBweFwiLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBhbGlnbi1taWRkbGUgdGV4dC1jZW50ZXIgbS0yNFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBtYi0xNCB0ZXh0LTN4bFwiPkxhdGVzdCBOZXdzPC9oMT5cbiAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAge2RhdGEubWFwKChuZXdzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxMYXRlc3ROZXdzQ2FyZFxuICAgICAgICAgICAgICAgIGltYWdlU3JjPXtuZXdzLmltYWdlfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtuZXdzLnRpdGxlfVxuICAgICAgICAgICAgICAgIGRhdGU9e25ld3MuZGF0ZX1cbiAgICAgICAgICAgICAgICBzdW1tYXJ5PXtuZXdzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlU2xpZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF0ZXN0TmV3c0NhcmQiLCJTbGlkZXIiLCJTaW1wbGVTbGlkZXIiLCJkYXRhIiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJhZGFwdGl2ZUhlaWdodCIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJjZW50ZXJQYWRkaW5nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJtYXAiLCJuZXdzIiwiaW1hZ2VTcmMiLCJpbWFnZSIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});