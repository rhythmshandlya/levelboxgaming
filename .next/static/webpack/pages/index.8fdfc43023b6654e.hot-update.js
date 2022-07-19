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

/***/ "./components/video.js":
/*!*****************************!*\
  !*** ./components/video.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Video; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container */ \"./components/container.js\");\n/* harmony import */ var react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-animation-on-scroll */ \"./node_modules/react-animation-on-scroll/dist/esm/index.js\");\n\n\n\nfunction Video(param) {\n    var data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_animation_on_scroll__WEBPACK_IMPORTED_MODULE_2__.AnimationOnScroll, {\n            animateIn: \"animate__fadeIn\",\n            animateOnce: \"true\",\n            offset: -50,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 mt-20 rounded-2xl \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm mb-5 text-center font-bold tracking-wider text-indigo-600 uppercase\",\n                        children: \"Watch a Video\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/video.js\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                            src: data.link,\n                            title: \"YouTube video player\",\n                            frameborder: \"0\",\n                            allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                            allowfullscreen: true\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/video.js\",\n                            lineNumber: 18,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/video.js\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/video.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/components/video.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/video.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n_c = Video;\nvar _c;\n$RefreshReg$(_c, \"Video\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZpZGVvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBb0M7QUFDMEI7QUFFL0MsU0FBU0UsS0FBSyxDQUFDLEtBQVEsRUFBRTtRQUFWLElBQU0sR0FBTixLQUFRLENBQU5DLElBQUk7SUFDbEMscUJBQ0UsOERBQUNILGtEQUFTO2tCQUNSLDRFQUFDQyx3RUFBaUI7WUFDaEJHLFNBQVMsRUFBQyxpQkFBaUI7WUFDM0JDLFdBQVcsRUFBQyxNQUFNO1lBQ2xCQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO3NCQUVYLDRFQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsc0VBQXNFOztrQ0FDbkYsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw2RUFBNkU7a0NBQUMsZUFFN0Y7Ozs7OzRCQUFNO2tDQUVOLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsK0RBQStEO2tDQUM1RSw0RUFBQ0MsUUFBTTs0QkFDTEMsR0FBRyxFQUFFUCxJQUFJLENBQUNRLElBQUk7NEJBQ2RDLEtBQUssRUFBQyxzQkFBc0I7NEJBQzVCQyxXQUFXLEVBQUMsR0FBRzs0QkFDZkMsS0FBSyxFQUFDLDBGQUEwRjs0QkFDaEdDLGVBQWU7Ozs7O2dDQUNQOzs7Ozs0QkFDTjs7Ozs7O29CQUNGOzs7OztnQkFDWTs7Ozs7WUFDVixDQUNaO0NBQ0g7QUExQnVCYixLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdmlkZW8uanM/MjA4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbnRhaW5lclwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uT25TY3JvbGwgfSBmcm9tIFwicmVhY3QtYW5pbWF0aW9uLW9uLXNjcm9sbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWRlbyh7IGRhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8QW5pbWF0aW9uT25TY3JvbGxcbiAgICAgICAgYW5pbWF0ZUluPVwiYW5pbWF0ZV9fZmFkZUluXCJcbiAgICAgICAgYW5pbWF0ZU9uY2U9XCJ0cnVlXCJcbiAgICAgICAgb2Zmc2V0PXstNTB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBteC1hdXRvIG92ZXJmbG93LWhpZGRlbiBsZzptYi0yMCBtdC0yMCByb3VuZGVkLTJ4bCBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbWItNSB0ZXh0LWNlbnRlciBmb250LWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1pbmRpZ28tNjAwIHVwcGVyY2FzZVwiPlxuICAgICAgICAgICAgV2F0Y2ggYSBWaWRlb1xuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1pbmRpZ28tMzAwIGN1cnNvci1wb2ludGVyIGFzcGVjdC13LTE2IGFzcGVjdC1oLTkgXCI+XG4gICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgIHNyYz17ZGF0YS5saW5rfVxuICAgICAgICAgICAgICB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCJcbiAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuXG4gICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9BbmltYXRpb25PblNjcm9sbD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJBbmltYXRpb25PblNjcm9sbCIsIlZpZGVvIiwiZGF0YSIsImFuaW1hdGVJbiIsImFuaW1hdGVPbmNlIiwib2Zmc2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWZyYW1lIiwic3JjIiwibGluayIsInRpdGxlIiwiZnJhbWVib3JkZXIiLCJhbGxvdyIsImFsbG93ZnVsbHNjcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/video.js\n"));

/***/ })

});