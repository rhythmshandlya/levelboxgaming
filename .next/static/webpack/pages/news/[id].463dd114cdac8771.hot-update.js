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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _json_news_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../json/news.json */ \"./json/news.json\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction isImage(str) {\n    return str.startsWith(\"__IMG__\");\n}\nfunction isGroup(str) {\n    return str.startsWith(\"__GRP__\");\n}\nvar BlogPage = function() {\n    var ref;\n    _s();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), mounted = ref1[0], setMounted = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id;\n    var news = _json_news_json__WEBPACK_IMPORTED_MODULE_3__[id];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        return setMounted(true);\n    }, []);\n    if (!mounted) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-[500px] object-cover\",\n                src: news === null || news === void 0 ? void 0 : news.heroImage\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex hover:text-[#DC143C] align-middle\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mx-3\",\n                                        children: \" <\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 30,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\",\n                                        children: \"More News\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                        lineNumber: 31,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-[#DC143C]\",\n                                children: \"Level Up! June 23rd 2022\"\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl lg:m-20 my-2\",\n                        children: news === null || news === void 0 ? void 0 : news.title\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    news === null || news === void 0 ? void 0 : (ref = news.para) === null || ref === void 0 ? void 0 : ref.map(function(element, index) {\n                        if (isGroup(element)) {\n                            var s = element.substring(7);\n                            var arr = s.split(\"|\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex scroll-x-auto overflow-scroll hide-scrollbar m-5\",\n                                children: [\n                                    arr.length == 3 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-10 lg:w-[400px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 45,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr.length == 2 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-10 lg:w-[600px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 54,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr.length == 1 && arr.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-10 lg:w-[700px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                            lineNumber: 63,\n                                            columnNumber: 23\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, _this);\n                        } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"m-3\",\n                            children: element\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                            lineNumber: 71,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/news/[id].js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(BlogPage, \"0BUTGuNHX7KAjbi2/y+OhWJjYfY=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = BlogPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogPage);\nvar _c;\n$RefreshReg$(_c, \"BlogPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0gsQ0FBQztvQ0FDSGUsR0FBRyxDQUFDRSxNQUFNLElBQUksQ0FBQyxJQUNkRixHQUFHLENBQUNMLEdBQUcsQ0FBQyxTQUFDUSxLQUFLLEVBQUs7d0NBQ2pCLHFCQUNFLDhEQUFDbkIsS0FBRzs0Q0FDRkUsR0FBRyxFQUFFaUIsS0FBSzs0Q0FDVmxCLFNBQVMsRUFBQyxnREFBZ0Q7Ozs7O2lEQUNyRCxDQUNQO3FDQUNILENBQUM7b0NBQ0hlLEdBQUcsQ0FBQ0UsTUFBTSxJQUFJLENBQUMsSUFDZEYsR0FBRyxDQUFDTCxHQUFHLENBQUMsU0FBQ1EsS0FBSyxFQUFLO3dDQUNqQixxQkFDRSw4REFBQ25CLEtBQUc7NENBQ0ZFLEdBQUcsRUFBRWlCLEtBQUs7NENBQ1ZsQixTQUFTLEVBQUMsZ0RBQWdEOzs7OztpREFDckQsQ0FDUDtxQ0FDSCxDQUFDOzs7Ozs7cUNBQ0EsQ0FDTjt5QkFDSCxNQUFNLHFCQUFPLDhEQUFDTSxHQUFDOzRCQUFDTixTQUFTLEVBQUMsS0FBSztzQ0FBRVcsT0FBTzs7Ozs7aUNBQUssQ0FBQztxQkFDaEQsQ0FBQzs7Ozs7O3FCQUNFOztvQkFDTCxDQUNIO0NBQ0g7R0FoRUtuQixRQUFROztRQUVHUCxrREFBUzs7O0FBRnBCTyxLQUFBQSxRQUFRO0FBa0VkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9baWRdLmpzP2FiMTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGFsbE5ld3MgZnJvbSBcIi4uLy4uL2pzb24vbmV3cy5qc29uXCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5cbmZ1bmN0aW9uIGlzSW1hZ2Uoc3RyKSB7XG4gIHJldHVybiBzdHIuc3RhcnRzV2l0aChcIl9fSU1HX19cIik7XG59XG5mdW5jdGlvbiBpc0dyb3VwKHN0cikge1xuICByZXR1cm4gc3RyLnN0YXJ0c1dpdGgoXCJfX0dSUF9fXCIpO1xufVxuY29uc3QgQmxvZ1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgbmV3cyA9IGFsbE5ld3NbaWRdO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRNb3VudGVkKHRydWUpLCBbXSk7XG4gIGlmICghbW91bnRlZCkgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNTAwcHhdIG9iamVjdC1jb3ZlclwiXG4gICAgICAgIHNyYz17bmV3cz8uaGVyb0ltYWdlfVxuICAgICAgPjwvaW1nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpteC1bMjAwcHhdIGxnOm15LVsxMDBweF0gbXgtWzVweF0gbXktWzEwcHhdXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGhvdmVyOnRleHQtWyNEQzE0M0NdIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXgtM1wiPiAmbHQ7PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiXCI+TW9yZSBOZXdzPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjREMxNDNDXVwiPkxldmVsIFVwISBKdW5lIDIzcmQgMjAyMjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBsZzptLTIwIG15LTJcIj57bmV3cz8udGl0bGV9PC9oMT5cbiAgICAgICAge25ld3M/LnBhcmE/Lm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaXNHcm91cChlbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgcyA9IGVsZW1lbnQuc3Vic3RyaW5nKDcpO1xuICAgICAgICAgICAgY29uc3QgYXJyID0gcy5zcGxpdChcInxcIik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc2Nyb2xsLXgtYXV0byBvdmVyZmxvdy1zY3JvbGwgaGlkZS1zY3JvbGxiYXIgbS01XCI+XG4gICAgICAgICAgICAgICAge2Fyci5sZW5ndGggPT0gMyAmJlxuICAgICAgICAgICAgICAgICAgYXJyLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBteC1hdXRvIG15LTEwIGxnOnctWzQwMHB4XSB3LVtmdWxsXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2Fyci5sZW5ndGggPT0gMiAmJlxuICAgICAgICAgICAgICAgICAgYXJyLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBteC1hdXRvIG15LTEwIGxnOnctWzYwMHB4XSB3LVtmdWxsXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2Fyci5sZW5ndGggPT0gMSAmJlxuICAgICAgICAgICAgICAgICAgYXJyLm1hcCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBteC1hdXRvIG15LTEwIGxnOnctWzcwMHB4XSB3LVtmdWxsXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2UgcmV0dXJuIDxwIGNsYXNzTmFtZT1cIm0tM1wiPntlbGVtZW50fTwvcD47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiYWxsTmV3cyIsIkZvbnRBd2Vzb21lSWNvbiIsImlzSW1hZ2UiLCJzdHIiLCJzdGFydHNXaXRoIiwiaXNHcm91cCIsIkJsb2dQYWdlIiwibmV3cyIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImltZyIsImNsYXNzTmFtZSIsInNyYyIsImhlcm9JbWFnZSIsImRpdiIsImEiLCJzcGFuIiwicCIsImgxIiwidGl0bGUiLCJwYXJhIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwicyIsInN1YnN0cmluZyIsImFyciIsInNwbGl0IiwibGVuZ3RoIiwiaW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/news/[id].js\n"));

/***/ })

});