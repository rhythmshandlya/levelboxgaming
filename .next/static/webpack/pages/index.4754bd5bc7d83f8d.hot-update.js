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

/***/ "./components/ArtCard.jsx":
/*!********************************!*\
  !*** ./components/ArtCard.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\n// import React from 'react'\nvar LatestNewsCard = function(props) {\n    _s();\n    var t = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-fit rounded-xl w-[300px] md:w-[300px] mx-auto p-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-full rounded-[30px]\",\n                src: props.image,\n                alt: \"Sunset in the mountains\"\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ArtCard.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col content-center flex-wrap w-full text-low\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs font-normal break-normal p-2\",\n                    children: t(props.title)\n                }, void 0, false, {\n                    fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ArtCard.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ArtCard.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rhythm/Documents/LevelBoxGames/components/ArtCard.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_s(LatestNewsCard, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function() {\n    return [\n        react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = LatestNewsCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestNewsCard);\nvar _c;\n$RefreshReg$(_c, \"LatestNewsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydENhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBK0M7O0FBRS9DLDRCQUE0QjtBQUM1QixJQUFNQyxjQUFjLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUNoQyxJQUFNLENBQUcsR0FBS0YsNkRBQWMsRUFBRSxDQUF0QkcsQ0FBQztJQUNULHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxxREFBcUQ7OzBCQUNsRSw4REFBQ0MsS0FBRztnQkFDRkQsU0FBUyxFQUFDLHVCQUF1QjtnQkFDakNFLEdBQUcsRUFBRUwsS0FBSyxDQUFDTSxLQUFLO2dCQUNoQkMsR0FBRyxFQUFDLHlCQUF5Qjs7Ozs7cUJBQzdCOzBCQUNGLDhEQUFDTCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0RBQXdEOzBCQUNyRSw0RUFBQ0ssR0FBQztvQkFBQ0wsU0FBUyxFQUFDLHNDQUFzQzs4QkFBRUYsQ0FBQyxDQUFDRCxLQUFLLENBQUNTLEtBQUssQ0FBQzs7Ozs7eUJBQUs7Ozs7O3FCQUNwRTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBZEtWLGNBQWM7O1FBQ0pELHlEQUFjOzs7QUFEeEJDLEtBQUFBLGNBQWM7QUFnQnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcnRDYXJkLmpzeD84N2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcblxuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuY29uc3QgTGF0ZXN0TmV3c0NhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1maXQgcm91bmRlZC14bCB3LVszMDBweF0gbWQ6dy1bMzAwcHhdIG14LWF1dG8gcC0zXCI+XG4gICAgICA8aW1nXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLVszMHB4XVwiXG4gICAgICAgIHNyYz17cHJvcHMuaW1hZ2V9XG4gICAgICAgIGFsdD1cIlN1bnNldCBpbiB0aGUgbW91bnRhaW5zXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgY29udGVudC1jZW50ZXIgZmxleC13cmFwIHctZnVsbCB0ZXh0LWxvd1wiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbm9ybWFsIGJyZWFrLW5vcm1hbCBwLTJcIj57dChwcm9wcy50aXRsZSl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXRlc3ROZXdzQ2FyZDtcbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbiIsIkxhdGVzdE5ld3NDYXJkIiwicHJvcHMiLCJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArtCard.jsx\n"));

/***/ })

});