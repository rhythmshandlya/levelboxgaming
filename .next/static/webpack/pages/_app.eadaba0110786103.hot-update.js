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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"./node_modules/i18next/dist/esm/i18next.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next-http-backend */ \"./node_modules/i18next-http-backend/esm/index.js\");\n/* harmony import */ var i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! i18next-browser-languagedetector */ \"./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js\");\n\n\n\n\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(i18next_http_backend__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).use(i18next_browser_languagedetector__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).use(react_i18next__WEBPACK_IMPORTED_MODULE_3__.initReactI18next).init({\n    supportedLngs: [\n        \"en\",\n        \"ar\",\n        \"fr\"\n    ],\n    fallbackLng: \"en\",\n    debug: false,\n    // Options for language detector\n    detection: {\n        order: [\n            \"cookie\",\n            \"path\",\n            \"htmlTag\"\n        ],\n        caches: [\n            \"cookie\"\n        ]\n    },\n    saveMissing: true,\n    interpolation: {\n        escapeValue: false\n    },\n    react: {\n        wait: true,\n        useSuspense: false\n    },\n    backend: {\n        loadPath: \"/json/{{lng}}.json\"\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlsL2kxOG4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEI7QUFDbUI7QUFDTjtBQUNxQjtBQUVoRUEsbURBQ00sQ0FBQ0UsNERBQU8sQ0FBQyxDQUNaRSxHQUFHLENBQUNELHdFQUFnQixDQUFDLENBQ3JCQyxHQUFHLENBQUNILDJEQUFnQixDQUFDLENBQ3JCSSxJQUFJLENBQUM7SUFDSkMsYUFBYSxFQUFFO1FBQUMsSUFBSTtRQUFFLElBQUk7UUFBRSxJQUFJO0tBQUM7SUFDakNDLFdBQVcsRUFBRSxJQUFJO0lBQ2pCQyxLQUFLLEVBQUUsS0FBSztJQUNaLGdDQUFnQztJQUNoQ0MsU0FBUyxFQUFFO1FBQ1RDLEtBQUssRUFBRTtZQUFDLFFBQVE7WUFBRSxNQUFNO1lBQUUsU0FBUztTQUFDO1FBQ3BDQyxNQUFNLEVBQUU7WUFBQyxRQUFRO1NBQUM7S0FDbkI7SUFDREMsV0FBVyxFQUFFLElBQUk7SUFDakJDLGFBQWEsRUFBRTtRQUNiQyxXQUFXLEVBQUUsS0FBSztLQUNuQjtJQUNEQyxLQUFLLEVBQUU7UUFDTEMsSUFBSSxFQUFFLElBQUk7UUFDVkMsV0FBVyxFQUFFLEtBQUs7S0FDbkI7SUFDREMsT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxvQkFBb0I7S0FDL0I7Q0FDRixDQUFDLENBQUM7QUFFTCwrREFBZW5CLCtDQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbC9pMThuLmpzPzIzZGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG5leHQgZnJvbSBcImkxOG5leHRcIjtcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuaW1wb3J0IEh0dHBBcGkgZnJvbSBcImkxOG5leHQtaHR0cC1iYWNrZW5kXCI7XG5pbXBvcnQgTGFuZ3VhZ2VEZXRlY3RvciBmcm9tIFwiaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3JcIjtcblxuaTE4bmV4dFxuICAudXNlKEh0dHBBcGkpXG4gIC51c2UoTGFuZ3VhZ2VEZXRlY3RvcilcbiAgLnVzZShpbml0UmVhY3RJMThuZXh0KVxuICAuaW5pdCh7XG4gICAgc3VwcG9ydGVkTG5nczogW1wiZW5cIiwgXCJhclwiLCBcImZyXCJdLFxuICAgIGZhbGxiYWNrTG5nOiBcImVuXCIsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIC8vIE9wdGlvbnMgZm9yIGxhbmd1YWdlIGRldGVjdG9yXG4gICAgZGV0ZWN0aW9uOiB7XG4gICAgICBvcmRlcjogW1wiY29va2llXCIsIFwicGF0aFwiLCBcImh0bWxUYWdcIl0sXG4gICAgICBjYWNoZXM6IFtcImNvb2tpZVwiXSxcbiAgICB9LFxuICAgIHNhdmVNaXNzaW5nOiB0cnVlLFxuICAgIGludGVycG9sYXRpb246IHtcbiAgICAgIGVzY2FwZVZhbHVlOiBmYWxzZSxcbiAgICB9LFxuICAgIHJlYWN0OiB7XG4gICAgICB3YWl0OiB0cnVlLFxuICAgICAgdXNlU3VzcGVuc2U6IGZhbHNlLFxuICAgIH0sXG4gICAgYmFja2VuZDoge1xuICAgICAgbG9hZFBhdGg6IFwiL2pzb24ve3tsbmd9fS5qc29uXCIsXG4gICAgfSxcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGkxOG5leHQ7XG4iXSwibmFtZXMiOlsiaTE4bmV4dCIsImluaXRSZWFjdEkxOG5leHQiLCJIdHRwQXBpIiwiTGFuZ3VhZ2VEZXRlY3RvciIsInVzZSIsImluaXQiLCJzdXBwb3J0ZWRMbmdzIiwiZmFsbGJhY2tMbmciLCJkZWJ1ZyIsImRldGVjdGlvbiIsIm9yZGVyIiwiY2FjaGVzIiwic2F2ZU1pc3NpbmciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJyZWFjdCIsIndhaXQiLCJ1c2VTdXNwZW5zZSIsImJhY2tlbmQiLCJsb2FkUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./util/i18n.js\n"));

/***/ })

});