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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _json_news_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json/news.json */ \"./json/news.json\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nfunction isImage(str) {\n    return str.startsWith(\"__IMG__\");\n}\nfunction isVideo(str) {\n    return str.startsWith(\"__VDO__\");\n}\nfunction isList(str) {\n    return str.startsWith(\"__LIS__\");\n}\nvar BlogPage = function() {\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mounted = ref1[0], setMounted = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var news = _json_news_json__WEBPACK_IMPORTED_MODULE_3__[id];\n    if (id >= (news === null || news === void 0 ? void 0 : news.length)) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between cursor-pointer\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"flex hover:text-[#DC143C] align-middle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mx-3\",\n                                children: \" <\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 27,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\",\n                                children: \"More News\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 28,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#DC143C]\",\n                        children: \"Level Up! June 23rd 2022\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        return setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-[500px] object-cover\",\n                src: news === null || news === void 0 ? void 0 : news.heroImage\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]\",\n                children: [\n                    news.allowHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex hover:text-[#DC143C] align-middle\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mx-3\",\n                                        children: \" <\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 49,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\",\n                                        children: news.backText\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#DC143C]\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl lg:m-20 my-10\",\n                        children: news === null || news === void 0 ? void 0 : news.title\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    news === null || news === void 0 ? void 0 : (ref = news.para) === null || ref === void 0 ? void 0 : ref.map(function(element, index) {\n                        if (isVideo(element)) {\n                            var link = element.substring(7);\n                            console.log(link);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container p-6 mx-auto xl:px-0\",\n                                id: \"video\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 lg:mt-20 my-4 rounded-2xl \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                            src: link,\n                                            title: \"YouTube video player\",\n                                            frameBorder: \"0\",\n                                            allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                                            allowFullScreen: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 64,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                    lineNumber: 62,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, _this);\n                        }\n                        if (isList(element)) {\n                            var s = element.substring(7);\n                            var arr = s.split(\"|\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                className: \"pl-10\",\n                                children: arr.map(function(listItem, i) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    i + 1,\n                                                    \". \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                                lineNumber: 84,\n                                                columnNumber: 23\n                                            }, _this),\n                                            listItem\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 83,\n                                        columnNumber: 21\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 80,\n                                columnNumber: 15\n                            }, _this);\n                        }\n                        if (isImage(element)) {\n                            var s1 = element.substring(7);\n                            var arr1 = s1.split(\"|\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center m-5 md:m-0\",\n                                children: [\n                                    arr1.length == 3 && arr1.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                className: \"rounded-xl mx-auto my-5 md:my-10 lg:w-[350px] w-[full]\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                                lineNumber: 101,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 100,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr1.length == 2 && arr1.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                className: \"rounded-xl mx-auto my-5 md:my-10 lg:w-[500px] w-[full]\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                                lineNumber: 112,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 111,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr1.length == 1 && arr1.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-5 lg:w-[600px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 122,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr1.length >= 4 && arr1.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-5 md:my-10 md:w-[340px] lg:w-[460px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 131,\n                                            columnNumber: 23\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, _this);\n                        } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"m-3\",\n                            children: element\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                            lineNumber: 139,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(BlogPage, \"0BUTGuNHX7KAjbi2/y+OhWJjYfY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxTQUFDa0IsS0FBSyxFQUFLO3dDQUNqQixxQkFDRSw4REFBQzFCLEtBQUc7NENBQ0ZDLEdBQUcsRUFBRXlCLEtBQUs7NENBQ1Y5QixTQUFTLEVBQUMsK0NBQStDOzs7OztpREFDcEQsQ0FDUDtxQ0FDSCxDQUFDO29DQUNId0IsSUFBRyxDQUFDMUIsTUFBTSxJQUFJLENBQUMsSUFDZDBCLElBQUcsQ0FBQ1osR0FBRyxDQUFDLFNBQUNrQixLQUFLLEVBQUs7d0NBQ2pCLHFCQUNFLDhEQUFDMUIsS0FBRzs0Q0FDRkMsR0FBRyxFQUFFeUIsS0FBSzs0Q0FDVjlCLFNBQVMsRUFBQyxxRUFBc0U7Ozs7O2lEQUMzRSxDQUNQO3FDQUNILENBQUM7Ozs7OztxQ0FDQSxDQUNOO3lCQUNILE1BQU0scUJBQU8sOERBQUNHLEdBQUM7NEJBQUNILFNBQVMsRUFBQyxLQUFLO3NDQUFFYSxPQUFPOzs7OztpQ0FBSyxDQUFDO3FCQUNoRCxDQUFDOzs7Ozs7cUJBQ0U7O29CQUNMLENBQ0g7Q0FDSDtHQWpJS3RCLFFBQVE7O1FBRUdQLGtEQUFTOzs7QUFGcEJPLEtBQUFBLFFBQVE7QUFtSWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9uZXdzL1tpZF0uanM/YWIxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYWxsTmV3cyBmcm9tIFwiLi4vLi4vanNvbi9uZXdzLmpzb25cIjtcblxuZnVuY3Rpb24gaXNJbWFnZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5zdGFydHNXaXRoKFwiX19JTUdfX1wiKTtcbn1cbmZ1bmN0aW9uIGlzVmlkZW8oc3RyKSB7XG4gIHJldHVybiBzdHIuc3RhcnRzV2l0aChcIl9fVkRPX19cIik7XG59XG5mdW5jdGlvbiBpc0xpc3Qoc3RyKSB7XG4gIHJldHVybiBzdHIuc3RhcnRzV2l0aChcIl9fTElTX19cIik7XG59XG5cbmNvbnN0IEJsb2dQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IG5ld3MgPSBhbGxOZXdzW2lkXTtcblxuICBpZiAoaWQgPj0gbmV3cz8ubGVuZ3RoKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm14LVsyMDBweF0gbGc6bXktWzEwMHB4XSBteC1bNXB4XSBteS1bMTBweF1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGhvdmVyOnRleHQtWyNEQzE0M0NdIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0zXCI+ICZsdDs8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPk1vcmUgTmV3czwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWyNEQzE0M0NdXCI+TGV2ZWwgVXAhIEp1bmUgMjNyZCAyMDIyPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHNldE1vdW50ZWQodHJ1ZSksIFtdKTtcbiAgaWYgKCFtb3VudGVkKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVs1MDBweF0gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgc3JjPXtuZXdzPy5oZXJvSW1hZ2V9XG4gICAgICA+PC9pbWc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm14LVsyMDBweF0gbGc6bXktWzEwMHB4XSBteC1bNXB4XSBteS1bMTBweF1cIj5cbiAgICAgICAge25ld3MuYWxsb3dIZWFkZXIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZsZXggaG92ZXI6dGV4dC1bI0RDMTQzQ10gYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm14LTNcIj4gJmx0Ozwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+e25ld3MuYmFja1RleHR9PC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI0RDMTQzQ11cIj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBsZzptLTIwIG15LTEwXCI+e25ld3M/LnRpdGxlfTwvaDE+XG4gICAgICAgIHtuZXdzPy5wYXJhPy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGlzVmlkZW8oZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBlbGVtZW50LnN1YnN0cmluZyg3KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC02IG14LWF1dG8geGw6cHgtMFwiIGlkPVwidmlkZW9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy00eGwgbXgtYXV0byBvdmVyZmxvdy1oaWRkZW4gbGc6bWItMjAgbGc6bXQtMjAgbXktNCByb3VuZGVkLTJ4bCBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctaW5kaWdvLTMwMCBjdXJzb3ItcG9pbnRlciBhc3BlY3Qtdy0xNiBhc3BlY3QtaC05IFwiPlxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtsaW5rfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzTGlzdChlbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgcyA9IGVsZW1lbnQuc3Vic3RyaW5nKDcpO1xuICAgICAgICAgICAgY29uc3QgYXJyID0gcy5zcGxpdChcInxcIik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicGwtMTBcIj5cbiAgICAgICAgICAgICAgICB7YXJyLm1hcCgobGlzdEl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aSArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge2xpc3RJdGVtfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0ltYWdlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gZWxlbWVudC5zdWJzdHJpbmcoNyk7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBzLnNwbGl0KFwifFwiKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgbS01IG1kOm0tMFwiPlxuICAgICAgICAgICAgICAgIHthcnIubGVuZ3RoID09IDMgJiZcbiAgICAgICAgICAgICAgICAgIGFyci5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBteC1hdXRvIG15LTUgbWQ6bXktMTAgbGc6dy1bMzUwcHhdIHctW2Z1bGxdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHthcnIubGVuZ3RoID09IDIgJiZcbiAgICAgICAgICAgICAgICAgIGFyci5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBteC1hdXRvIG15LTUgbWQ6bXktMTAgIGxnOnctWzUwMHB4XSB3LVtmdWxsXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7YXJyLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgICBhcnIubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG14LWF1dG8gbXktNSBsZzp3LVs2MDBweF0gdy1bZnVsbF1cIlxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHthcnIubGVuZ3RoID49IDQgJiZcbiAgICAgICAgICAgICAgICAgIGFyci5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXgtYXV0byBteS01IG1kOm15LTEwICBtZDp3LVszNDBweF0gbGc6dy1bNDYwcHhdIHctW2Z1bGxdXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSByZXR1cm4gPHAgY2xhc3NOYW1lPVwibS0zXCI+e2VsZW1lbnR9PC9wPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhbGxOZXdzIiwiaXNJbWFnZSIsInN0ciIsInN0YXJ0c1dpdGgiLCJpc1ZpZGVvIiwiaXNMaXN0IiwiQmxvZ1BhZ2UiLCJuZXdzIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYSIsInNwYW4iLCJwIiwiaW1nIiwic3JjIiwiaGVyb0ltYWdlIiwiYWxsb3dIZWFkZXIiLCJiYWNrVGV4dCIsImgxIiwidGl0bGUiLCJwYXJhIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwibGluayIsInN1YnN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJpZnJhbWUiLCJmcmFtZUJvcmRlciIsImFsbG93IiwiYWxsb3dGdWxsU2NyZWVuIiwicyIsImFyciIsInNwbGl0Iiwib2wiLCJsaXN0SXRlbSIsImkiLCJsaSIsImltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/news/[id].js\n"));

/***/ })

});