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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _json_news_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json/news.json */ \"./json/news.json\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nfunction isImage(str) {\n    return str.startsWith(\"__IMG__\");\n}\nvar BlogPage = function() {\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mounted = ref1[0], setMounted = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var news = _json_news_json__WEBPACK_IMPORTED_MODULE_3__[id];\n    if (id >= (news === null || news === void 0 ? void 0 : news.length)) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"flex hover:text-[#DC143C] align-middle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mx-3\",\n                                children: \" <\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 21,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\",\n                                children: \"More News\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 22,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#DC143C]\",\n                        children: \"Level Up! June 23rd 2022\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        return setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-[500px] object-cover\",\n                src: news === null || news === void 0 ? void 0 : news.heroImage\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex hover:text-[#DC143C] align-middle\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mx-3\",\n                                        children: \" <\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 42,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\",\n                                        children: \"More News\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#DC143C]\",\n                                children: \"Level Up! June 23rd 2022\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl lg:m-20 my-10\",\n                        children: news === null || news === void 0 ? void 0 : news.title\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this),\n                    news === null || news === void 0 ? void 0 : (ref = news.para) === null || ref === void 0 ? void 0 : ref.map(function(element, index) {\n                        if (isImage(element)) {\n                            var s = element.substring(7);\n                            var arr = s.split(\"|\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center m-5 md:m-0\",\n                                children: [\n                                    arr.length == 3 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                className: \"rounded-xl mx-auto my-5 md:my-10 lg:w-[350px] w-[full]\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                                lineNumber: 58,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 57,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr.length == 2 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                className: \"rounded-xl mx-auto my-5 md:my-10 lg:w-[500px] w-[full]\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                                lineNumber: 69,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 68,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr.length == 1 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-5 lg:w-[600px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 79,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr.length >= 4 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-5 md:my-10 md:w-[340px] lg:w-[460px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 88,\n                                            columnNumber: 23\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this);\n                        } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"m-3\",\n                            children: element\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                            lineNumber: 96,\n                            columnNumber: 25\n                        }, _this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container p-6 mx-auto xl:px-0\",\n                        id: \"video\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 lg:mt-20 my-4 rounded-2xl \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                    src: \"https://www.youtube.com/embed/8C_ibG489oE\",\n                                    title: \"YouTube video player\",\n                                    frameBorder: \"0\",\n                                    allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                                    allowFullScreen: true\n                                }, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(BlogPage, \"0BUTGuNHX7KAjbi2/y+OhWJjYfY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFNBQUNPLEtBQUssRUFBSzt3Q0FDakIscUJBQ0UsOERBQUNiLEtBQUc7NENBQ0ZDLEdBQUcsRUFBRVksS0FBSzs0Q0FDVmpCLFNBQVMsRUFBQyxxRUFBc0U7Ozs7O2lEQUMzRSxDQUNQO3FDQUNILENBQUM7Ozs7OztxQ0FDQSxDQUNOO3lCQUNILE1BQU0scUJBQU8sOERBQUNHLEdBQUM7NEJBQUNILFNBQVMsRUFBQyxLQUFLO3NDQUFFVyxPQUFPOzs7OztpQ0FBSyxDQUFDO3FCQUNoRCxDQUFDO2tDQUNGLDhEQUFDWixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsK0JBQStCO3dCQUFDSixFQUFFLEVBQUMsT0FBTztrQ0FDdkQsNEVBQUNHLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyw4RUFBOEU7c0NBQzNGLDRFQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsK0RBQStEOzBDQUM1RSw0RUFBQ2tCLFFBQU07b0NBQ0xiLEdBQUcsRUFBQywyQ0FBMkM7b0NBQy9DRyxLQUFLLEVBQUMsc0JBQXNCO29DQUM1QlcsV0FBVyxFQUFDLEdBQUc7b0NBQ2ZDLEtBQUssRUFBQywwRkFBMEY7b0NBQ2hHQyxlQUFlOzs7Ozt5Q0FDUDs7Ozs7cUNBQ047Ozs7O2lDQUNGOzs7Ozs2QkFDRjs7Ozs7O3FCQUNGOztvQkFDTCxDQUNIO0NBQ0g7R0F6R0s5QixRQUFROztRQUVHTCxrREFBUzs7O0FBRnBCSyxLQUFBQSxRQUFRO0FBMkdkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9baWRdLmpzP2FiMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGFsbE5ld3MgZnJvbSBcIi4uLy4uL2pzb24vbmV3cy5qc29uXCI7XG5cbmZ1bmN0aW9uIGlzSW1hZ2Uoc3RyKSB7XG4gIHJldHVybiBzdHIuc3RhcnRzV2l0aChcIl9fSU1HX19cIik7XG59XG5cbmNvbnN0IEJsb2dQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IG5ld3MgPSBhbGxOZXdzW2lkXTtcblxuICBpZiAoaWQgPj0gbmV3cz8ubGVuZ3RoKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm14LVsyMDBweF0gbGc6bXktWzEwMHB4XSBteC1bNXB4XSBteS1bMTBweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGhvdmVyOnRleHQtWyNEQzE0M0NdIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0zXCI+ICZsdDs8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPk1vcmUgTmV3czwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyNEQzE0M0NdXCI+TGV2ZWwgVXAhIEp1bmUgMjNyZCAyMDIyPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcbiAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVs1MDBweF0gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgc3JjPXtuZXdzPy5oZXJvSW1hZ2V9XG4gICAgICA+PC9pbWc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm14LVsyMDBweF0gbGc6bXktWzEwMHB4XSBteC1bNXB4XSBteS1bMTBweF1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXggaG92ZXI6dGV4dC1bI0RDMTQzQ10gYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0zXCI+ICZsdDs8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj5Nb3JlIE5ld3M8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyNEQzE0M0NdXCI+TGV2ZWwgVXAhIEp1bmUgMjNyZCAyMDIyPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGxnOm0tMjAgbXktMTBcIj57bmV3cz8udGl0bGV9PC9oMT5cbiAgICAgICAge25ld3M/LnBhcmE/Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaXNJbWFnZShlbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgcyA9IGVsZW1lbnQuc3Vic3RyaW5nKDcpO1xuICAgICAgICAgICAgY29uc3QgYXJyID0gcy5zcGxpdChcInxcIik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyIG0tNSBtZDptLTBcIj5cbiAgICAgICAgICAgICAgICB7YXJyLmxlbmd0aCA9PSAzICYmXG4gICAgICAgICAgICAgICAgICBhcnIubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXgtYXV0byBteS01IG1kOm15LTEwIGxnOnctWzM1MHB4XSB3LVtmdWxsXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7YXJyLmxlbmd0aCA9PSAyICYmXG4gICAgICAgICAgICAgICAgICBhcnIubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXgtYXV0byBteS01IG1kOm15LTEwICBsZzp3LVs1MDBweF0gdy1bZnVsbF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2Fyci5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgYXJyLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBteC1hdXRvIG15LTUgbGc6dy1bNjAwcHhdIHctW2Z1bGxdXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7YXJyLmxlbmd0aCA+PSA0ICYmXG4gICAgICAgICAgICAgICAgICBhcnIubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG14LWF1dG8gbXktNSBtZDpteS0xMCAgbWQ6dy1bMzQwcHhdIGxnOnctWzQ2MHB4XSB3LVtmdWxsXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgcmV0dXJuIDxwIGNsYXNzTmFtZT1cIm0tM1wiPntlbGVtZW50fTwvcD47XG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTYgbXgtYXV0byB4bDpweC0wXCIgaWQ9XCJ2aWRlb1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LTR4bCBteC1hdXRvIG92ZXJmbG93LWhpZGRlbiBsZzptYi0yMCBsZzptdC0yMCBteS00IHJvdW5kZWQtMnhsIFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1pbmRpZ28tMzAwIGN1cnNvci1wb2ludGVyIGFzcGVjdC13LTE2IGFzcGVjdC1oLTkgXCI+XG4gICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC84Q19pYkc0ODlvRVwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXG4gICAgICAgICAgICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgICAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgICAgICAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhbGxOZXdzIiwiaXNJbWFnZSIsInN0ciIsInN0YXJ0c1dpdGgiLCJCbG9nUGFnZSIsIm5ld3MiLCJtb3VudGVkIiwic2V0TW91bnRlZCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJhIiwic3BhbiIsInAiLCJpbWciLCJzcmMiLCJoZXJvSW1hZ2UiLCJoMSIsInRpdGxlIiwicGFyYSIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsInMiLCJzdWJzdHJpbmciLCJhcnIiLCJzcGxpdCIsImltYWdlIiwiaWZyYW1lIiwiZnJhbWVCb3JkZXIiLCJhbGxvdyIsImFsbG93RnVsbFNjcmVlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/news/[id].js\n"));

/***/ })

});