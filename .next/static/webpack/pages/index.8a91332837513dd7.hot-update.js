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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nuka-carousel */ \"./node_modules/nuka-carousel/es-v5/index.js\");\nvar _this = undefined;\n\n\n\n\nvar LatestNews = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    // var a=`/../public/img/News-Thumbnail(${i}).png`;\n    var renderSlides = function() {\n        return [\n            1,\n            2,\n            3\n        ].map(function(num) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center flex-wrap\",\n                    children: data.map(function(i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            imageSrc: \"\",\n                            title: \"P.E.K.K.A King Update\",\n                            date: \"6.09.2022\",\n                            summary: \"Our dream is to create games that as many people as possible play for many years and that remembered forever.\"\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 15\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this1);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold mt-8 mb-8 text-3xl\",\n                children: \"Latest News\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-hidden w-full mr-256 ml-256 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(nuka_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    autoplay: true,\n                    renderCenterLeftControls: function(param) {\n                        var previousSlide = param.previousSlide;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                display: \"none\"\n                            },\n                            onClick: previousSlide,\n                            children: \"Previous\"\n                        }, void 0, false, void 0, void 0);\n                    },\n                    renderCenterRightControls: function(param) {\n                        var nextSlide = param.nextSlide;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            style: {\n                                display: \"none\"\n                            },\n                            onClick: nextSlide,\n                            children: \"Next\"\n                        }, void 0, false, void 0, void 0);\n                    },\n                    slidesToShow: 1,\n                    cellAlign: \"center\",\n                    children: renderSlides()\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/LatestNews.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_c = LatestNews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestNews);\nvar _c;\n$RefreshReg$(_c, \"LatestNews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdGVzdE5ld3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDb0I7QUFFVDtBQUVyQyxJQUFNRyxVQUFVLEdBQUcsZ0JBQWM7UUFBWEMsSUFBSSxTQUFKQSxJQUFJOztJQUN4QixtREFBbUQ7SUFDbkQsSUFBTUMsWUFBWSxHQUFHO2VBQ25CO0FBQUMsYUFBQztBQUFFLGFBQUM7QUFBRSxhQUFDO1NBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQUNDLEdBQUc7aUNBQ2hCLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMscUJBQXFCOzBCQUNsQyw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLCtCQUErQjs4QkFDM0NMLElBQUksQ0FBQ0UsR0FBRyxDQUFDLFNBQUNJLENBQUMsRUFBSzt3QkFDZixxQkFDRSw4REFBQ1QsdURBQWM7NEJBQ2JVLFFBQVEsRUFBRzs0QkFDWEMsS0FBSyxFQUFDLHVCQUF1Qjs0QkFDN0JDLElBQUksRUFBQyxXQUFXOzRCQUNoQkMsT0FBTyxFQUFDLCtHQUErRzs7Ozs7a0NBQ3ZILENBQ0Y7cUJBQ0gsQ0FBQzs7Ozs7MEJBQ0U7Ozs7O3NCQUNGO1NBQ1AsQ0FBQztLQUFBO0lBQ0oscUJBQ0UsOERBQUNOLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGNBQWM7OzBCQUMzQiw4REFBQ00sSUFBRTtnQkFBQ04sU0FBUyxFQUFDLDhCQUE4QjswQkFBQyxhQUFXOzs7OztxQkFBSzswQkFDN0QsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyx1Q0FBdUM7MEJBQ3BELDRFQUFDUCxxREFBUTtvQkFDUGMsUUFBUSxFQUFFLElBQUk7b0JBQ2RDLHdCQUF3QixFQUFFOzRCQUFHQyxhQUFhLFNBQWJBLGFBQWE7NkNBQ3hDLDhEQUFDQyxRQUFNOzRCQUFDQyxLQUFLLEVBQUU7Z0NBQUVDLE9BQU8sRUFBRSxNQUFNOzZCQUFFOzRCQUFFQyxPQUFPLEVBQUVKLGFBQWE7c0NBQUUsVUFFNUQ7eURBQVM7cUJBQ1Y7b0JBQ0RLLHlCQUF5QixFQUFFOzRCQUFHQyxTQUFTLFNBQVRBLFNBQVM7NkNBQ3JDLDhEQUFDTCxRQUFNOzRCQUFDQyxLQUFLLEVBQUU7Z0NBQUVDLE9BQU8sRUFBRSxNQUFNOzZCQUFFOzRCQUFFQyxPQUFPLEVBQUVFLFNBQVM7c0NBQUUsTUFFeEQ7eURBQVM7cUJBQ1Y7b0JBQ0RDLFlBQVksRUFBRSxDQUFDO29CQUNmQyxTQUFTLEVBQUMsUUFBUTs4QkFFakJyQixZQUFZLEVBQUU7Ozs7O3lCQUNOOzs7OztxQkFDUDs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBM0NLRixLQUFBQSxVQUFVO0FBNkNoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF0ZXN0TmV3cy5qc3g/MDRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF0ZXN0TmV3c0NhcmQgZnJvbSBcIi4vTGF0ZXN0TmV3c0NhcmRcIjtcblxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJudWthLWNhcm91c2VsXCI7XG5cbmNvbnN0IExhdGVzdE5ld3MgPSAoeyBkYXRhIH0pID0+IHtcbiAgLy8gdmFyIGE9YC8uLi9wdWJsaWMvaW1nL05ld3MtVGh1bWJuYWlsKCR7aX0pLnBuZ2A7XG4gIGNvbnN0IHJlbmRlclNsaWRlcyA9ICgpID0+XG4gICAgWzEsIDIsIDNdLm1hcCgobnVtKSA9PiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtd3JhcFwiPlxuICAgICAgICAgIHtkYXRhLm1hcCgoaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExhdGVzdE5ld3NDYXJkXG4gICAgICAgICAgICAgICAgaW1hZ2VTcmM9e2BgfVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUC5FLksuSy5BIEtpbmcgVXBkYXRlXCJcbiAgICAgICAgICAgICAgICBkYXRlPVwiNi4wOS4yMDIyXCJcbiAgICAgICAgICAgICAgICBzdW1tYXJ5PVwiT3VyIGRyZWFtIGlzIHRvIGNyZWF0ZSBnYW1lcyB0aGF0IGFzIG1hbnkgcGVvcGxlIGFzIHBvc3NpYmxlIHBsYXkgZm9yIG1hbnkgeWVhcnMgYW5kIHRoYXQgcmVtZW1iZXJlZCBmb3JldmVyLlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTggbWItOCB0ZXh0LTN4bFwiPkxhdGVzdCBOZXdzPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHctZnVsbCBtci0yNTYgbWwtMjU2IFwiPlxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICBhdXRvcGxheT17dHJ1ZX1cbiAgICAgICAgICByZW5kZXJDZW50ZXJMZWZ0Q29udHJvbHM9eyh7IHByZXZpb3VzU2xpZGUgfSkgPT4gKFxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fSBvbkNsaWNrPXtwcmV2aW91c1NsaWRlfT5cbiAgICAgICAgICAgICAgUHJldmlvdXNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0gb25DbGljaz17bmV4dFNsaWRlfT5cbiAgICAgICAgICAgICAgTmV4dFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgICBzbGlkZXNUb1Nob3c9ezF9XG4gICAgICAgICAgY2VsbEFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtyZW5kZXJTbGlkZXMoKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0TmV3cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxhdGVzdE5ld3NDYXJkIiwiQ2Fyb3VzZWwiLCJMYXRlc3ROZXdzIiwiZGF0YSIsInJlbmRlclNsaWRlcyIsIm1hcCIsIm51bSIsImRpdiIsImNsYXNzTmFtZSIsImkiLCJpbWFnZVNyYyIsInRpdGxlIiwiZGF0ZSIsInN1bW1hcnkiLCJoMSIsImF1dG9wbGF5IiwicmVuZGVyQ2VudGVyTGVmdENvbnRyb2xzIiwicHJldmlvdXNTbGlkZSIsImJ1dHRvbiIsInN0eWxlIiwiZGlzcGxheSIsIm9uQ2xpY2siLCJyZW5kZXJDZW50ZXJSaWdodENvbnRyb2xzIiwibmV4dFNsaWRlIiwic2xpZGVzVG9TaG93IiwiY2VsbEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n"));

/***/ })

});