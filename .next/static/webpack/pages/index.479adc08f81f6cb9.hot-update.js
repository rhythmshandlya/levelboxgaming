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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hero */ \"./components/hero.js\");\n/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar */ \"./components/navbar.js\");\n/* harmony import */ var _components_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/video */ \"./components/video.js\");\n/* harmony import */ var _components_benefits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/benefits */ \"./components/benefits.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* harmony import */ var _components_popupWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/popupWidget */ \"./components/popupWidget.js\");\n/* harmony import */ var _components_LatestNews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/LatestNews */ \"./components/LatestNews.jsx\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ \"./node_modules/slick-carousel/slick/slick.css\");\n/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ \"./node_modules/slick-carousel/slick/slick-theme.css\");\n/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\n// import useSWR from \"swr\";\n// const fetcher = (url) => fetch(url).then((res) => res.json());\nvar staticData = '{\\n  \"navigation\": {\\n      \"links\":[\\n          { \"name\": \"Start Attack\", \"href\": \"#\", \"current\": false },\\n          { \"name\": \"News\", \"href\": \"#\", \"current\": false },\\n          { \"name\": \"About Us\", \"href\": \"#\", \"current\": false },\\n          { \"name\": \"Careers\", \"href\": \"#\", \"current\": false },\\n          { \"name\": \"Support\", \"href\": \"#\", \"current\": false }\\n      ]\\n  },\\n  \"hero\": {\\n      \"heading\": \"Stack Attack\",\\n      \"subheading\": \"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit.\"\\n  },\\n  \"video\":{\\n      \"link\":\"https://www.youtube.com/embed/_CPrYB6Q-HM?controls=0\"\\n  },\\n  \"bannerSoon\":{\\n      \"title\": \"Available Soon\",\\n      \"desc\": \"You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.\",\\n      \"image\": \"/img/coc_landscape.png\",\\n      \"android\": \"#\",\\n      \"ios\": \"#\"\\n  },\\n  \"news\": [\\n    {\\n        \"title\":\"P.E.K.K.A King Update\",\\n        \"description\": \"Our dream is to create games that as many people as possible play for many years and that remembered.\",\\n        \"image\": \"/img/nt1.png\",\\n        \"date\": \"7.09.2022\"\\n    },\\n    {\\n        \"title\":\"Skeleton King Skin\",\\n        \"description\":\"Our dream is to create games that as many people as possible play for many years and that remembered.\",\\n        \"image\":\"/img/nt2.png\",\\n        \"date\":\"6.09.2022\"\\n    },\\n    {\\n        \"title\":\"Angry Birds Journey - New Game\",\\n        \"description\": \"Our dream is to create games that as many people as possible play for many years and that remembered.\",\\n        \"image\": \"/img/nt3.png\",\\n        \"date\":\"8.10.2022\"\\n    },\\n    {\\n        \"title\":\"Clash Royals Season 20 Update\",\\n        \"description\": \"Our dream is to create games that as many people as possible play for many years and that remembered.\",\\n        \"image\": \"/img/nt4.png\",\\n        \"date\":\"12.10.2022\"\\n    }\\n  ]\\n}';\nfunction Home() {\n    //const { data, error } = useSWR(\"/api/static\", fetcher);\n    //if (error) return <div>Failed to load</div>;\n    //if (!data) return <div>Loading</div>;\n    var data = JSON.parse(staticData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Level Box Games\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Clash Of Clans: Level Box Games\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                data: data.navigation\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data.hero\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_video__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                data: data.video\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_benefits__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                imgPos: \"left\",\n                data: data.bannerSoon\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LatestNews__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                data: data.news\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_popupWidget__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDUztBQUNJO0FBQ0Y7QUFDTTtBQUNKO0FBQ1U7QUFDRjtBQUNWO0FBQ007QUFFOUMsNEJBQTRCO0FBQzVCLGlFQUFpRTtBQUVqRSxJQUFJUSxVQUFVLEdBQUksMCtEQWtEakI7QUFFYyxTQUFTQyxJQUFJLEdBQUc7SUFDN0IseURBQXlEO0lBRXpELDhDQUE4QztJQUM5Qyx1Q0FBdUM7SUFFdkMsSUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0osVUFBVSxDQUFDO0lBQ25DLHFCQUNFOzswQkFDRSw4REFBQ1Isa0RBQUk7O2tDQUNILDhEQUFDYSxPQUFLO2tDQUFDLGlCQUFlOzs7Ozs0QkFBUTtrQ0FDOUIsOERBQUNDLE1BQUk7d0JBQUNDLElBQUksRUFBQyxhQUFhO3dCQUFDQyxPQUFPLEVBQUMsaUNBQWlDOzs7Ozs0QkFBRztrQ0FDckUsOERBQUNDLE1BQUk7d0JBQUNDLEdBQUcsRUFBQyxNQUFNO3dCQUFDQyxJQUFJLEVBQUMsY0FBYzs7Ozs7NEJBQUc7Ozs7OztvQkFDbEM7MEJBRVAsOERBQUNqQiwwREFBTTtnQkFBQ1EsSUFBSSxFQUFFQSxJQUFJLENBQUNVLFVBQVU7Ozs7O29CQUFJOzBCQUVqQyw4REFBQ25CLHdEQUFJO2dCQUFDUyxJQUFJLEVBQUVBLElBQUksQ0FBQ1csSUFBSTs7Ozs7b0JBQUk7MEJBRXpCLDhEQUFDbEIseURBQUs7Z0JBQUNPLElBQUksRUFBRUEsSUFBSSxDQUFDWSxLQUFLOzs7OztvQkFBSTswQkFFM0IsOERBQUNsQiw0REFBUTtnQkFBQ21CLE1BQU0sRUFBQyxNQUFNO2dCQUFDYixJQUFJLEVBQUVBLElBQUksQ0FBQ2MsVUFBVTs7Ozs7b0JBQUk7MEJBRWpELDhEQUFDakIsOERBQVU7Z0JBQUNHLElBQUksRUFBRUEsSUFBSSxDQUFDZSxJQUFJOzs7OztvQkFBSTswQkFFL0IsOERBQUNwQiwwREFBTTs7OztvQkFBRzswQkFFViw4REFBQ0MsK0RBQVc7Ozs7b0JBQUc7O29CQUNkLENBQ0g7Q0FDSDtBQTlCdUJHLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi4vY29tcG9uZW50cy9oZXJvXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdmJhclwiO1xuaW1wb3J0IFZpZGVvIGZyb20gXCIuLi9jb21wb25lbnRzL3ZpZGVvXCI7XG5pbXBvcnQgQmVuZWZpdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvYmVuZWZpdHNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgUG9wdXBXaWRnZXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wdXBXaWRnZXRcIjtcbmltcG9ydCBMYXRlc3ROZXdzIGZyb20gXCIuLi9jb21wb25lbnRzL0xhdGVzdE5ld3NcIjtcbmltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzc1wiO1xuaW1wb3J0IFwic2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzXCI7XG5cbi8vIGltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuLy8gY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGZldGNoKHVybCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKTtcblxubGV0IHN0YXRpY0RhdGEgPSBge1xuICBcIm5hdmlnYXRpb25cIjoge1xuICAgICAgXCJsaW5rc1wiOltcbiAgICAgICAgICB7IFwibmFtZVwiOiBcIlN0YXJ0IEF0dGFja1wiLCBcImhyZWZcIjogXCIjXCIsIFwiY3VycmVudFwiOiBmYWxzZSB9LFxuICAgICAgICAgIHsgXCJuYW1lXCI6IFwiTmV3c1wiLCBcImhyZWZcIjogXCIjXCIsIFwiY3VycmVudFwiOiBmYWxzZSB9LFxuICAgICAgICAgIHsgXCJuYW1lXCI6IFwiQWJvdXQgVXNcIiwgXCJocmVmXCI6IFwiI1wiLCBcImN1cnJlbnRcIjogZmFsc2UgfSxcbiAgICAgICAgICB7IFwibmFtZVwiOiBcIkNhcmVlcnNcIiwgXCJocmVmXCI6IFwiI1wiLCBcImN1cnJlbnRcIjogZmFsc2UgfSxcbiAgICAgICAgICB7IFwibmFtZVwiOiBcIlN1cHBvcnRcIiwgXCJocmVmXCI6IFwiI1wiLCBcImN1cnJlbnRcIjogZmFsc2UgfVxuICAgICAgXVxuICB9LFxuICBcImhlcm9cIjoge1xuICAgICAgXCJoZWFkaW5nXCI6IFwiU3RhY2sgQXR0YWNrXCIsXG4gICAgICBcInN1YmhlYWRpbmdcIjogXCJBbWV0IG1pbmltIG1vbGxpdCBub24gZGVzZXJ1bnQgdWxsYW1jbyBlc3Qgc2l0IGFsaXF1YSBkb2xvciBkbyBhbWV0IHNpbnQuIFZlbGl0IG9mZmljaWEgY29uc2VxdWF0IGR1aXMgZW5pbSB2ZWxpdC5cIlxuICB9LFxuICBcInZpZGVvXCI6e1xuICAgICAgXCJsaW5rXCI6XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9fQ1ByWUI2US1ITT9jb250cm9scz0wXCJcbiAgfSxcbiAgXCJiYW5uZXJTb29uXCI6e1xuICAgICAgXCJ0aXRsZVwiOiBcIkF2YWlsYWJsZSBTb29uXCIsXG4gICAgICBcImRlc2NcIjogXCJZb3UgY2FuIHVzZSB0aGlzIHNwYWNlIHRvIGhpZ2hsaWdodCB5b3VyIGZpcnN0IGJlbmVmaXQgb3IgYSBmZWF0dXJlIG9mIHlvdXIgcHJvZHVjdC4gSXQgY2FuIGFsc28gY29udGFpbiBhbiBpbWFnZSBvciBJbGx1c3RyYXRpb24gbGlrZSBpbiB0aGUgZXhhbXBsZSBhbG9uZyB3aXRoIHNvbWUgYnVsbGV0IHBvaW50cy5cIixcbiAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL2NvY19sYW5kc2NhcGUucG5nXCIsXG4gICAgICBcImFuZHJvaWRcIjogXCIjXCIsXG4gICAgICBcImlvc1wiOiBcIiNcIlxuICB9LFxuICBcIm5ld3NcIjogW1xuICAgIHtcbiAgICAgICAgXCJ0aXRsZVwiOlwiUC5FLksuSy5BIEtpbmcgVXBkYXRlXCIsXG4gICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJPdXIgZHJlYW0gaXMgdG8gY3JlYXRlIGdhbWVzIHRoYXQgYXMgbWFueSBwZW9wbGUgYXMgcG9zc2libGUgcGxheSBmb3IgbWFueSB5ZWFycyBhbmQgdGhhdCByZW1lbWJlcmVkLlwiLFxuICAgICAgICBcImltYWdlXCI6IFwiL2ltZy9udDEucG5nXCIsXG4gICAgICAgIFwiZGF0ZVwiOiBcIjcuMDkuMjAyMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwidGl0bGVcIjpcIlNrZWxldG9uIEtpbmcgU2tpblwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6XCJPdXIgZHJlYW0gaXMgdG8gY3JlYXRlIGdhbWVzIHRoYXQgYXMgbWFueSBwZW9wbGUgYXMgcG9zc2libGUgcGxheSBmb3IgbWFueSB5ZWFycyBhbmQgdGhhdCByZW1lbWJlcmVkLlwiLFxuICAgICAgICBcImltYWdlXCI6XCIvaW1nL250Mi5wbmdcIixcbiAgICAgICAgXCJkYXRlXCI6XCI2LjA5LjIwMjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6XCJBbmdyeSBCaXJkcyBKb3VybmV5IC0gTmV3IEdhbWVcIixcbiAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk91ciBkcmVhbSBpcyB0byBjcmVhdGUgZ2FtZXMgdGhhdCBhcyBtYW55IHBlb3BsZSBhcyBwb3NzaWJsZSBwbGF5IGZvciBtYW55IHllYXJzIGFuZCB0aGF0IHJlbWVtYmVyZWQuXCIsXG4gICAgICAgIFwiaW1hZ2VcIjogXCIvaW1nL250My5wbmdcIixcbiAgICAgICAgXCJkYXRlXCI6XCI4LjEwLjIwMjJcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcInRpdGxlXCI6XCJDbGFzaCBSb3lhbHMgU2Vhc29uIDIwIFVwZGF0ZVwiLFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT3VyIGRyZWFtIGlzIHRvIGNyZWF0ZSBnYW1lcyB0aGF0IGFzIG1hbnkgcGVvcGxlIGFzIHBvc3NpYmxlIHBsYXkgZm9yIG1hbnkgeWVhcnMgYW5kIHRoYXQgcmVtZW1iZXJlZC5cIixcbiAgICAgICAgXCJpbWFnZVwiOiBcIi9pbWcvbnQ0LnBuZ1wiLFxuICAgICAgICBcImRhdGVcIjpcIjEyLjEwLjIwMjJcIlxuICAgIH1cbiAgXVxufWA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8vY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS9zdGF0aWNcIiwgZmV0Y2hlcik7XG5cbiAgLy9pZiAoZXJyb3IpIHJldHVybiA8ZGl2PkZhaWxlZCB0byBsb2FkPC9kaXY+O1xuICAvL2lmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcblxuICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShzdGF0aWNEYXRhKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5MZXZlbCBCb3ggR2FtZXM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiQ2xhc2ggT2YgQ2xhbnM6IExldmVsIEJveCBHYW1lc1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPE5hdmJhciBkYXRhPXtkYXRhLm5hdmlnYXRpb259IC8+XG5cbiAgICAgIDxIZXJvIGRhdGE9e2RhdGEuaGVyb30gLz5cblxuICAgICAgPFZpZGVvIGRhdGE9e2RhdGEudmlkZW99IC8+XG5cbiAgICAgIDxCZW5lZml0cyBpbWdQb3M9XCJsZWZ0XCIgZGF0YT17ZGF0YS5iYW5uZXJTb29ufSAvPlxuXG4gICAgICA8TGF0ZXN0TmV3cyBkYXRhPXtkYXRhLm5ld3N9IC8+XG5cbiAgICAgIDxGb290ZXIgLz5cblxuICAgICAgPFBvcHVwV2lkZ2V0IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkhlcm8iLCJOYXZiYXIiLCJWaWRlbyIsIkJlbmVmaXRzIiwiRm9vdGVyIiwiUG9wdXBXaWRnZXQiLCJMYXRlc3ROZXdzIiwic3RhdGljRGF0YSIsIkhvbWUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm5hdmlnYXRpb24iLCJoZXJvIiwidmlkZW8iLCJpbWdQb3MiLCJiYW5uZXJTb29uIiwibmV3cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});