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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SimpleSlider\": function() { return /* binding */ SimpleSlider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nuka-carousel */ \"./node_modules/nuka-carousel/es-v5/index.js\");\n\n\nvar _this = undefined;\n\n\n\n\n\nvar LatestNews = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    var renderSlides = function() {\n        return [\n            1,\n            2,\n            3\n        ].map(function(num) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center flex-wrap\",\n                    children: data.map(function(news) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            imageSrc: news.image,\n                            title: news.title,\n                            date: news.date,\n                            summary: news.description\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this1);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold mt-8 mb-8 text-3xl\",\n                children: \"Latest News\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden w-full mr-256 ml-256 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(nuka_carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    autoplay: true,\n                    renderCenterLeftControls: function(param) {\n                        var previousSlide = param.previousSlide;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                display: \"none\"\n                            },\n                            onClick: previousSlide,\n                            children: \"Previous\"\n                        }, void 0, false, void 0, void 0);\n                    },\n                    renderCenterRightControls: function(param) {\n                        var nextSlide = param.nextSlide;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                display: \"none\"\n                            },\n                            onClick: nextSlide,\n                            children: \"Next\"\n                        }, void 0, false, void 0, void 0);\n                    },\n                    slidesToShow: 1,\n                    cellAlign: \"center\",\n                    children: renderSlides()\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_c = LatestNews;\nfunction SimpleSlider(param) {\n    var data = param.data;\n    var _this = this;\n    var settings = {\n        dots: true,\n        infinite: true,\n        adaptiveHeight: true,\n        speed: 500,\n        slidesToShow: 2,\n        slidesToScroll: 1\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold mt-8 mb-8 text-3xl\",\n                children: \"Latest News\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_slick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, settings), {\n                children: data.map(function(news) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            imageSrc: news.image,\n                            title: news.title,\n                            date: news.date,\n                            summary: news.description\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 13\n                    }, _this);\n                })\n            }), void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_c1 = SimpleSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleSlider);\nvar _c, _c1;\n$RefreshReg$(_c, \"LatestNews\");\n$RefreshReg$(_c1, \"SimpleSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFTCxJQUFJLENBQUNNLFdBQVc7Ozs7O2lDQUN6Qjs7Ozs7NkJBQ0UsQ0FDTjtpQkFDSCxDQUFDOzs7OztvQkFDSzs7Ozs7O1lBQ0wsQ0FDTjtDQUNIO0FBNUJlYSxNQUFBQSxZQUFZO0FBOEI1QiwrREFBZUEsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF0ZXN0TmV3cy5qc3g/MDRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF0ZXN0TmV3c0NhcmQgZnJvbSBcIi4vTGF0ZXN0TmV3c0NhcmRcIjtcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XG5cbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwibnVrYS1jYXJvdXNlbFwiO1xuXG5jb25zdCBMYXRlc3ROZXdzID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IHJlbmRlclNsaWRlcyA9ICgpID0+XG4gICAgWzEsIDIsIDNdLm1hcCgobnVtKSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgobmV3cykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExhdGVzdE5ld3NDYXJkXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM9e25ld3MuaW1hZ2V9XG4gICAgICAgICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgZGF0ZT17bmV3cy5kYXRlfVxuICAgICAgICAgICAgICAgIHN1bW1hcnk9e25ld3MuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTggbWItOCB0ZXh0LTN4bFwiPkxhdGVzdCBOZXdzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBtci0yNTYgbWwtMjU2IFwiPlxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICBhdXRvcGxheT17dHJ1ZX1cbiAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHM9eyh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fSBvbkNsaWNrPXtwcmV2aW91c1NsaWRlfT5cbiAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0gb25DbGljaz17bmV4dFNsaWRlfT5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XG4gICAgICAgICAgY2VsbEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJTbGlkZXMoKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbXBsZVNsaWRlcih7IGRhdGEgfSkge1xuICB2YXIgc2V0dGluZ3MgPSB7XG4gICAgZG90czogdHJ1ZSxcbiAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWJvbGQgbXQtOCBtYi04IHRleHQtM3hsXCI+TGF0ZXN0IE5ld3M8L2gxPlxuICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxuICAgICAgICB7ZGF0YS5tYXAoKG5ld3MpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPExhdGVzdE5ld3NDYXJkXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM9e25ld3MuaW1hZ2V9XG4gICAgICAgICAgICAgICAgdGl0bGU9e25ld3MudGl0bGV9XG4gICAgICAgICAgICAgICAgZGF0ZT17bmV3cy5kYXRlfVxuICAgICAgICAgICAgICAgIHN1bW1hcnk9e25ld3MuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvU2xpZGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVTbGlkZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXRlc3ROZXdzQ2FyZCIsIlNsaWRlciIsIkNhcm91c2VsIiwiTGF0ZXN0TmV3cyIsImRhdGEiLCJyZW5kZXJTbGlkZXMiLCJtYXAiLCJudW0iLCJkaXYiLCJjbGFzc05hbWUiLCJuZXdzIiwiaW1hZ2VTcmMiLCJpbWFnZSIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJkZXNjcmlwdGlvbiIsImgxIiwiYXV0b3BsYXkiLCJyZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHMiLCJwcmV2aW91c1NsaWRlIiwiYnV0dG9uIiwic3R5bGUiLCJkaXNwbGF5Iiwib25DbGljayIsInJlbmRlckNlbnRlclJpZ2h0Q29udHJvbHMiLCJuZXh0U2xpZGUiLCJzbGlkZXNUb1Nob3ciLCJjZWxsQWxpZ24iLCJTaW1wbGVTbGlkZXIiLCJzZXR0aW5ncyIsImRvdHMiLCJpbmZpbml0ZSIsImFkYXB0aXZlSGVpZ2h0Iiwic3BlZWQiLCJzbGlkZXNUb1Njcm9sbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});