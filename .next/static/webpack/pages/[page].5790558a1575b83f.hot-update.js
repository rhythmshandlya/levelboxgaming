"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[page]",{

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useOthers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useOthers */ \"./hooks/useOthers.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction isImage(str) {\n    return str.startsWith(\"__IMG__\");\n}\nfunction isVideo(str) {\n    return str.startsWith(\"__VDO__\");\n}\nfunction isList(str) {\n    return str.startsWith(\"__LIS__\");\n}\nvar OtherPage = function() {\n    var ref;\n    _s();\n    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)().t;\n    var allData = (0,_hooks_useOthers__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var page = router.query.page;\n    var data = allData[page];\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center lg:m-40\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl lg:m-20 my-10\",\n                children: t(\"not_found\")\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            (data === null || data === void 0 ? void 0 : data.heroImage) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full h-[500px] object-cover\",\n                src: data === null || data === void 0 ? void 0 : data.heroImageLink\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:mx-[200px] lg:my-[100px] mx-[5px] my-[10px]\",\n                children: [\n                    (data === null || data === void 0 ? void 0 : data.allowHeader) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"flex hover:text-[#DC143C] align-middle\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"mx-3\",\n                                        children: \" <\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"\",\n                                        children: t(data === null || data === void 0 ? void 0 : data.backText)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: data === null || data === void 0 ? void 0 : data.alertLink,\n                                className: \"text-[#DC143C]\",\n                                children: t(data === null || data === void 0 ? void 0 : data.alertText)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-center text-3xl lg:m-20 my-10\",\n                        children: t(data === null || data === void 0 ? void 0 : data.title)\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    data === null || data === void 0 ? void 0 : (ref = data.para) === null || ref === void 0 ? void 0 : ref.map(function(element, index) {\n                        if (isVideo(element)) {\n                            var link = element.substring(7);\n                            console.log(link);\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"container p-6 mx-auto xl:px-0\",\n                                id: \"video\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 lg:mt-20 my-4 rounded-2xl \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                            src: link,\n                                            title: \"YouTube video player\",\n                                            frameBorder: \"0\",\n                                            allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n                                            allowFullScreen: true\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                            lineNumber: 61,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                        lineNumber: 60,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, _this);\n                        }\n                        if (isList(element)) {\n                            var s = element.substring(7);\n                            var arr = s.split(\"|\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                className: \"pl-10\",\n                                children: arr.map(function(listItem, i) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: [\n                                                    i + 1,\n                                                    \". \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                                lineNumber: 81,\n                                                columnNumber: 23\n                                            }, _this),\n                                            t(listItem)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                        lineNumber: 80,\n                                        columnNumber: 21\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, _this);\n                        }\n                        if (isImage(element)) {\n                            var s1 = element.substring(7);\n                            var arr1 = s1.split(\"|\");\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-wrap justify-center m-5 md:m-0\",\n                                children: [\n                                    arr1.length == 3 && arr1.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                className: \"rounded-xl mx-auto my-5 md:my-10 lg:w-[350px] w-[full]\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                                lineNumber: 98,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                            lineNumber: 97,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr1.length == 2 && arr1.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"m-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: image,\n                                                className: \"rounded-xl mx-auto my-5 md:my-10 lg:w-[500px] w-[full]\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                                lineNumber: 109,\n                                                columnNumber: 25\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                            lineNumber: 108,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr1.length == 1 && arr1.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-5 lg:w-[600px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                            lineNumber: 119,\n                                            columnNumber: 23\n                                        }, _this);\n                                    }),\n                                    arr1.length >= 4 && arr1.map(function(image) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: image,\n                                            className: \"rounded-xl mx-auto my-5 md:my-10 md:w-[340px] lg:w-[460px] w-[full]\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                            lineNumber: 128,\n                                            columnNumber: 23\n                                        }, _this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, _this);\n                        } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"m-3\",\n                            children: t(element)\n                        }, void 0, false, {\n                            fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                            lineNumber: 136,\n                            columnNumber: 25\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/[page].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(OtherPage, \"vMaNgFLa7sWk+lwMyZs7queqXqQ=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation,\n        _hooks_useOthers__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = OtherPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OtherPage);\nvar _c;\n$RefreshReg$(_c, \"OtherPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQ0UsOERBQUNoQyxLQUFHOzRDQUNGQyxHQUFHLEVBQUUrQixLQUFLOzRDQUNWbkMsU0FBUyxFQUFDLCtDQUErQzs7Ozs7aURBQ3BELENBQ1A7cUNBQ0gsQ0FBQztvQ0FDSDRCLElBQUcsQ0FBQ00sTUFBTSxJQUFJLENBQUMsSUFDZE4sSUFBRyxDQUFDYixHQUFHLENBQUMsU0FBQ29CLEtBQUssRUFBSzt3Q0FDakIscUJBQ0UsOERBQUNoQyxLQUFHOzRDQUNGQyxHQUFHLEVBQUUrQixLQUFLOzRDQUNWbkMsU0FBUyxFQUFDLHFFQUFzRTs7Ozs7aURBQzNFLENBQ1A7cUNBQ0gsQ0FBQzs7Ozs7O3FDQUNBLENBQ047eUJBQ0gsTUFBTSxxQkFBTyw4REFBQ29DLEdBQUM7NEJBQUNwQyxTQUFTLEVBQUMsS0FBSztzQ0FBRU4sQ0FBQyxDQUFDc0IsT0FBTyxDQUFDOzs7OztpQ0FBSyxDQUFDO3FCQUNuRCxDQUFDOzs7Ozs7cUJBQ0U7O29CQUNMLENBQ0g7Q0FDSDtHQTdIS3hCLFNBQVM7O1FBQ0NOLHlEQUFjO1FBQ1pGLHdEQUFRO1FBQ1RDLGtEQUFTOzs7QUFIcEJPLEtBQUFBLFNBQVM7QUErSGYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bcGFnZV0uanM/OWVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlT3RoZXIgZnJvbSBcIi4uL2hvb2tzL3VzZU90aGVyc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5cbmZ1bmN0aW9uIGlzSW1hZ2Uoc3RyKSB7XG4gIHJldHVybiBzdHIuc3RhcnRzV2l0aChcIl9fSU1HX19cIik7XG59XG5mdW5jdGlvbiBpc1ZpZGVvKHN0cikge1xuICByZXR1cm4gc3RyLnN0YXJ0c1dpdGgoXCJfX1ZET19fXCIpO1xufVxuZnVuY3Rpb24gaXNMaXN0KHN0cikge1xuICByZXR1cm4gc3RyLnN0YXJ0c1dpdGgoXCJfX0xJU19fXCIpO1xufVxuXG5jb25zdCBPdGhlclBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgYWxsRGF0YSA9IHVzZU90aGVyKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHBhZ2UgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgZGF0YSA9IGFsbERhdGFbcGFnZV07XG5cbiAgaWYgKCFkYXRhKVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGxnOm0tNDBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgbGc6bS0yMCBteS0xMFwiPnt0KFwibm90X2ZvdW5kXCIpfTwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGF0YT8uaGVyb0ltYWdlICYmIChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLVs1MDBweF0gb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICBzcmM9e2RhdGE/Lmhlcm9JbWFnZUxpbmt9XG4gICAgICAgID48L2ltZz5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm14LVsyMDBweF0gbGc6bXktWzEwMHB4XSBteC1bNXB4XSBteS1bMTBweF1cIj5cbiAgICAgICAge2RhdGE/LmFsbG93SGVhZGVyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmbGV4IGhvdmVyOnRleHQtWyNEQzE0M0NdIGFsaWduLW1pZGRsZVwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0zXCI+ICZsdDs8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPnt0KGRhdGE/LmJhY2tUZXh0KX08L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBocmVmPXtkYXRhPy5hbGVydExpbmt9IGNsYXNzTmFtZT1cInRleHQtWyNEQzE0M0NdXCI+XG4gICAgICAgICAgICAgIHt0KGRhdGE/LmFsZXJ0VGV4dCl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBsZzptLTIwIG15LTEwXCI+e3QoZGF0YT8udGl0bGUpfTwvaDE+XG4gICAgICAgIHtkYXRhPy5wYXJhPy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgaWYgKGlzVmlkZW8oZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBlbGVtZW50LnN1YnN0cmluZyg3KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC02IG14LWF1dG8geGw6cHgtMFwiIGlkPVwidmlkZW9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy00eGwgbXgtYXV0byBvdmVyZmxvdy1oaWRkZW4gbGc6bWItMjAgbGc6bXQtMjAgbXktNCByb3VuZGVkLTJ4bCBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctaW5kaWdvLTMwMCBjdXJzb3ItcG9pbnRlciBhc3BlY3Qtdy0xNiBhc3BlY3QtaC05IFwiPlxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtsaW5rfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiWW91VHViZSB2aWRlbyBwbGF5ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzTGlzdChlbGVtZW50KSkge1xuICAgICAgICAgICAgY29uc3QgcyA9IGVsZW1lbnQuc3Vic3RyaW5nKDcpO1xuICAgICAgICAgICAgY29uc3QgYXJyID0gcy5zcGxpdChcInxcIik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwicGwtMTBcIj5cbiAgICAgICAgICAgICAgICB7YXJyLm1hcCgobGlzdEl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57aSArIDF9LiA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAge3QobGlzdEl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc0ltYWdlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBzID0gZWxlbWVudC5zdWJzdHJpbmcoNyk7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBzLnNwbGl0KFwifFwiKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgbS01IG1kOm0tMFwiPlxuICAgICAgICAgICAgICAgIHthcnIubGVuZ3RoID09IDMgJiZcbiAgICAgICAgICAgICAgICAgIGFyci5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBteC1hdXRvIG15LTUgbWQ6bXktMTAgbGc6dy1bMzUwcHhdIHctW2Z1bGxdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHthcnIubGVuZ3RoID09IDIgJiZcbiAgICAgICAgICAgICAgICAgIGFyci5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBteC1hdXRvIG15LTUgbWQ6bXktMTAgIGxnOnctWzUwMHB4XSB3LVtmdWxsXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7YXJyLmxlbmd0aCA9PSAxICYmXG4gICAgICAgICAgICAgICAgICBhcnIubWFwKChpbWFnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIG14LWF1dG8gbXktNSBsZzp3LVs2MDBweF0gdy1bZnVsbF1cIlxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHthcnIubGVuZ3RoID49IDQgJiZcbiAgICAgICAgICAgICAgICAgIGFyci5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgbXgtYXV0byBteS01IG1kOm15LTEwICBtZDp3LVszNDBweF0gbGc6dy1bNDYwcHhdIHctW2Z1bGxdXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSByZXR1cm4gPHAgY2xhc3NOYW1lPVwibS0zXCI+e3QoZWxlbWVudCl9PC9wPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE90aGVyUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU90aGVyIiwidXNlUm91dGVyIiwidXNlVHJhbnNsYXRpb24iLCJpc0ltYWdlIiwic3RyIiwic3RhcnRzV2l0aCIsImlzVmlkZW8iLCJpc0xpc3QiLCJPdGhlclBhZ2UiLCJkYXRhIiwidCIsImFsbERhdGEiLCJyb3V0ZXIiLCJwYWdlIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImhlcm9JbWFnZSIsImltZyIsInNyYyIsImhlcm9JbWFnZUxpbmsiLCJhbGxvd0hlYWRlciIsImEiLCJzcGFuIiwiYmFja1RleHQiLCJocmVmIiwiYWxlcnRMaW5rIiwiYWxlcnRUZXh0IiwidGl0bGUiLCJwYXJhIiwibWFwIiwiZWxlbWVudCIsImluZGV4IiwibGluayIsInN1YnN0cmluZyIsImNvbnNvbGUiLCJsb2ciLCJpZCIsImlmcmFtZSIsImZyYW1lQm9yZGVyIiwiYWxsb3ciLCJhbGxvd0Z1bGxTY3JlZW4iLCJzIiwiYXJyIiwic3BsaXQiLCJvbCIsImxpc3RJdGVtIiwiaSIsImxpIiwibGVuZ3RoIiwiaW1hZ2UiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[page].js\n"));

/***/ })

});