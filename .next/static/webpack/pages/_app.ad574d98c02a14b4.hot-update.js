"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./util/i18n.js":
/*!**********************!*\
  !*** ./util/i18n.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-http-backend */ \"./node_modules/i18next-http-backend/esm/index.js\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js\");\n\n\n\n\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_3__.initReactI18next).init({\n    supportedLngs: [\n        \"en\",\n        \"ar\",\n        \"fr\"\n    ],\n    fallbackLng: \"en\",\n    debug: false,\n    // Options for language detector\n    detection: {\n        order: [\n            \"cookie\",\n            \"path\",\n            \"htmlTag\"\n        ],\n        caches: [\n            \"cookie\"\n        ]\n    },\n    saveMissing: true,\n    keySeparator: false,\n    interpolation: {\n        escapeValue: false\n    },\n    react: {\n        wait: true,\n        useSuspense: false\n    },\n    backend: {\n        loadPath: \"/json/{{lng}}.json\"\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2kxOG4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEI7QUFDbUI7QUFDTjtBQUNxQjtBQUVoRUEsbURBQ00sQ0FBQ0UsNERBQU8sQ0FBQyxDQUNaRSxHQUFHLENBQUNELHdFQUFnQixDQUFDLENBQ3JCQyxHQUFHLENBQUNILDJEQUFnQixDQUFDLENBQ3JCSSxJQUFJLENBQUM7SUFDSkMsYUFBYSxFQUFFO1FBQUMsSUFBSTtRQUFFLElBQUk7UUFBRSxJQUFJO0tBQUM7SUFDakNDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCQyxLQUFLLEVBQUUsS0FBSztJQUNaLGdDQUFnQztJQUNoQ0MsU0FBUyxFQUFFO1FBQ1RDLEtBQUssRUFBRTtZQUFDLFFBQVE7WUFBRSxNQUFNO1lBQUUsU0FBUztTQUFDO1FBQ3BDQyxNQUFNLEVBQUU7WUFBQyxRQUFRO1NBQUM7S0FDbkI7SUFDREMsV0FBVyxFQUFFLElBQUk7SUFDakJDLFlBQVksRUFBRSxLQUFLO0lBRW5CQyxhQUFhLEVBQUU7UUFDYkMsV0FBVyxFQUFFLEtBQUs7S0FDbkI7SUFDREMsS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLFdBQVcsRUFBRSxLQUFLO0tBQ25CO0lBQ0RDLE9BQU8sRUFBRTtRQUNQQyxRQUFRLEVBQUUsb0JBQW9CO0tBQy9CO0NBQ0YsQ0FBQyxDQUFDO0FBRUwsK0RBQWVwQiwrQ0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWwvaTE4bi5qcz8yM2RiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpMThuZXh0IGZyb20gXCJpMThuZXh0XCI7XG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCBIdHRwQXBpIGZyb20gXCJpMThuZXh0LWh0dHAtYmFja2VuZFwiO1xuaW1wb3J0IExhbmd1YWdlRGV0ZWN0b3IgZnJvbSBcImkxOG5leHQtYnJvd3Nlci1sYW5ndWFnZWRldGVjdG9yXCI7XG5cbmkxOG5leHRcbiAgLnVzZShIdHRwQXBpKVxuICAudXNlKExhbmd1YWdlRGV0ZWN0b3IpXG4gIC51c2UoaW5pdFJlYWN0STE4bmV4dClcbiAgLmluaXQoe1xuICAgIHN1cHBvcnRlZExuZ3M6IFtcImVuXCIsIFwiYXJcIiwgXCJmclwiXSxcbiAgICBmYWxsYmFja0xuZzogXCJlblwiLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICAvLyBPcHRpb25zIGZvciBsYW5ndWFnZSBkZXRlY3RvclxuICAgIGRldGVjdGlvbjoge1xuICAgICAgb3JkZXI6IFtcImNvb2tpZVwiLCBcInBhdGhcIiwgXCJodG1sVGFnXCJdLFxuICAgICAgY2FjaGVzOiBbXCJjb29raWVcIl0sXG4gICAgfSxcbiAgICBzYXZlTWlzc2luZzogdHJ1ZSxcbiAgICBrZXlTZXBhcmF0b3I6IGZhbHNlLCAvLyB3ZSBkbyBub3QgdXNlIGtleXMgaW4gZm9ybSBtZXNzYWdlcy53ZWxjb21lXG5cbiAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICBlc2NhcGVWYWx1ZTogZmFsc2UsXG4gICAgfSxcbiAgICByZWFjdDoge1xuICAgICAgd2FpdDogdHJ1ZSxcbiAgICAgIHVzZVN1c3BlbnNlOiBmYWxzZSxcbiAgICB9LFxuICAgIGJhY2tlbmQ6IHtcbiAgICAgIGxvYWRQYXRoOiBcIi9qc29uL3t7bG5nfX0uanNvblwiLFxuICAgIH0sXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBpMThuZXh0O1xuIl0sIm5hbWVzIjpbImkxOG5leHQiLCJpbml0UmVhY3RJMThuZXh0IiwiSHR0cEFwaSIsIkxhbmd1YWdlRGV0ZWN0b3IiLCJ1c2UiLCJpbml0Iiwic3VwcG9ydGVkTG5ncyIsImZhbGxiYWNrTG5nIiwiZGVidWciLCJkZXRlY3Rpb24iLCJvcmRlciIsImNhY2hlcyIsInNhdmVNaXNzaW5nIiwia2V5U2VwYXJhdG9yIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIiwicmVhY3QiLCJ3YWl0IiwidXNlU3VzcGVuc2UiLCJiYWNrZW5kIiwibG9hZFBhdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./util/i18n.js\n"));

/***/ })

});