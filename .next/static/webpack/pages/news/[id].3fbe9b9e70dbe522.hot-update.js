"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/news/[id]",{

/***/ "./pages/news/[id].js":
/*!****************************!*\
  !*** ./pages/news/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _json_news_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json/news.json */ \"./json/news.json\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction isImage(str) {\n    return str.startsWith(\"__IMG__\");\n}\nfunction isGroup(str) {\n    return str.startsWith(\"__GRP__\");\n}\nvar BlogPage = function() {\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mounted = ref1[0], setMounted = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var news = _json_news_json__WEBPACK_IMPORTED_MODULE_3__[id];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        return setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-[500px] object-cover\",\n                src: news === null || news === void 0 ? void 0 : news.heroImage\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex hover:text-[#DC143C] align-middle\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mx-3\",\n                                        children: \" <\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\",\n                                        children: \"More News\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#DC143C]\",\n                                children: \"Level Up! June 23rd 2022\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl lg:m-20 my-2\",\n                        children: news === null || news === void 0 ? void 0 : news.title\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    news === null || news === void 0 ? void 0 : (ref = news.para) === null || ref === void 0 ? void 0 : ref.map(function(element, index) {\n                        if (isGroup(element)) {\n                            var s = element.substring(7);\n                            var arr = s.split(\"|\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex scroll-x-auto overflow-scroll hide-scrollbar m-5 md:m-0\",\n                                children: [\n                                    arr.length == 3 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                className: \"rounded-xl mx-auto my-10 lg:w-[400px] w-[full]\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                                lineNumber: 46,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 45,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr.length == 2 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                className: \"rounded-xl mx-auto my-10 lg:w-[600px] w-[full]\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                                lineNumber: 57,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 56,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr.length == 1 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-10 lg:w-[600px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 67,\n                                            columnNumber: 23\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, _this);\n                        } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"m-3\",\n                            children: element\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(BlogPage, \"0BUTGuNHX7KAjbi2/y+OhWJjYfY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VmxCLFNBQVMsRUFBQyxnREFBZ0Q7Ozs7O3FEQUNyRDs7Ozs7aURBQ0gsQ0FDTjtxQ0FDSCxDQUFDO29DQUNIZSxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDLElBQ2RGLEdBQUcsQ0FBQ0wsR0FBRyxDQUFDLFNBQUNRLEtBQUssRUFBSzt3Q0FDakIscUJBQ0UsOERBQUNmLEtBQUc7NENBQUNILFNBQVMsRUFBQyxLQUFLO3NEQUNsQiw0RUFBQ0QsS0FBRztnREFDRkUsR0FBRyxFQUFFaUIsS0FBSztnREFDVmxCLFNBQVMsRUFBQyxnREFBZ0Q7Ozs7O3FEQUNyRDs7Ozs7aURBQ0gsQ0FDTjtxQ0FDSCxDQUFDO29DQUNIZSxHQUFHLENBQUNFLE1BQU0sSUFBSSxDQUFDLElBQ2RGLEdBQUcsQ0FBQ0wsR0FBRyxDQUFDLFNBQUNRLEtBQUssRUFBSzt3Q0FDakIscUJBQ0UsOERBQUNuQixLQUFHOzRDQUNGRSxHQUFHLEVBQUVpQixLQUFLOzRDQUNWbEIsU0FBUyxFQUFDLGdEQUFnRDs7Ozs7aURBQ3JELENBQ1A7cUNBQ0gsQ0FBQzs7Ozs7O3FDQUNBLENBQ047eUJBQ0gsTUFBTSxxQkFBTyw4REFBQ00sR0FBQzs0QkFBQ04sU0FBUyxFQUFDLEtBQUs7c0NBQUVXLE9BQU87Ozs7O2lDQUFLLENBQUM7cUJBQ2hELENBQUM7Ozs7OztxQkFDRTs7b0JBQ0wsQ0FDSDtDQUNIO0dBcEVLbkIsUUFBUTs7UUFFR1Asa0RBQVM7OztBQUZwQk8sS0FBQUEsUUFBUTtBQXNFZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL25ld3MvW2lkXS5qcz9hYjExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBhbGxOZXdzIGZyb20gXCIuLi8uLi9qc29uL25ld3MuanNvblwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuXG5mdW5jdGlvbiBpc0ltYWdlKHN0cikge1xuICByZXR1cm4gc3RyLnN0YXJ0c1dpdGgoXCJfX0lNR19fXCIpO1xufVxuZnVuY3Rpb24gaXNHcm91cChzdHIpIHtcbiAgcmV0dXJuIHN0ci5zdGFydHNXaXRoKFwiX19HUlBfX1wiKTtcbn1cbmNvbnN0IEJsb2dQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IG5ld3MgPSBhbGxOZXdzW2lkXTtcblxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xuICBpZiAoIW1vdW50ZWQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzUwMHB4XSBvYmplY3QtY292ZXJcIlxuICAgICAgICBzcmM9e25ld3M/Lmhlcm9JbWFnZX1cbiAgICAgID48L2ltZz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bXgtWzIwMHB4XSBsZzpteS1bMTAwcHhdIG14LVs1cHhdIG15LVsxMHB4XVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmxleCBob3Zlcjp0ZXh0LVsjREMxNDNDXSBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTNcIj4gJmx0Ozwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPk1vcmUgTmV3czwvc3Bhbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0RDMTQzQ11cIj5MZXZlbCBVcCEgSnVuZSAyM3JkIDIwMjI8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgbGc6bS0yMCBteS0yXCI+e25ld3M/LnRpdGxlfTwvaDE+XG4gICAgICAgIHtuZXdzPy5wYXJhPy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGlzR3JvdXAoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHMgPSBlbGVtZW50LnN1YnN0cmluZyg3KTtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IHMuc3BsaXQoXCJ8XCIpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNjcm9sbC14LWF1dG8gb3ZlcmZsb3ctc2Nyb2xsIGhpZGUtc2Nyb2xsYmFyIG0tNSBtZDptLTBcIj5cbiAgICAgICAgICAgICAgICB7YXJyLmxlbmd0aCA9PSAzICYmXG4gICAgICAgICAgICAgICAgICBhcnIubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXgtYXV0byBteS0xMCBsZzp3LVs0MDBweF0gdy1bZnVsbF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2Fyci5sZW5ndGggPT0gMiAmJlxuICAgICAgICAgICAgICAgICAgYXJyLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG14LWF1dG8gbXktMTAgbGc6dy1bNjAwcHhdIHctW2Z1bGxdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHthcnIubGVuZ3RoID09IDEgJiZcbiAgICAgICAgICAgICAgICAgIGFyci5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXgtYXV0byBteS0xMCBsZzp3LVs2MDBweF0gdy1bZnVsbF1cIlxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHJldHVybiA8cCBjbGFzc05hbWU9XCJtLTNcIj57ZWxlbWVudH08L3A+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImFsbE5ld3MiLCJGb250QXdlc29tZUljb24iLCJpc0ltYWdlIiwic3RyIiwic3RhcnRzV2l0aCIsImlzR3JvdXAiLCJCbG9nUGFnZSIsIm5ld3MiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJpbWciLCJjbGFzc05hbWUiLCJzcmMiLCJoZXJvSW1hZ2UiLCJkaXYiLCJhIiwic3BhbiIsInAiLCJoMSIsInRpdGxlIiwicGFyYSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInMiLCJzdWJzdHJpbmciLCJhcnIiLCJzcGxpdCIsImxlbmd0aCIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/[id].js\n"));

/***/ })

});