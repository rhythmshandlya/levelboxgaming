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

/***/ "./components/LatestNews.jsx":
/*!***********************************!*\
  !*** ./components/LatestNews.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestNewsCard */ \"./components/LatestNewsCard.jsx\");\n/* harmony import */ var nuka_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nuka-carousel */ \"./node_modules/nuka-carousel/es-v5/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/home/hashcat/Desktop/cc/levelboxgaming/components/LatestNews.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar LatestNews = function LatestNews() {\n  // var a=`/../public/img/News-Thumbnail(${i}).png`;\n  var renderSlides = function renderSlides() {\n    return [1, 2, 3].map(function (num) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"flex justify-center flex-wrap\",\n          children: [0, 1, 2, 3].map(function (i) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LatestNewsCard__WEBPACK_IMPORTED_MODULE_2__.default, {\n              imageSrc: \"/../public/img/News-Thumbnail(\".concat(i, \").png\"),\n              title: \"P.E.K.K.A King Update\",\n              date: \"6.09.2022\",\n              summary: \"Our dream is to create games that as many people as possible play for many years and that remembered forever.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 13,\n              columnNumber: 34\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 7\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 7\n      }, _this);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"text-center \",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      className: \"font-bold mt-8 mb-8 text-3xl\",\n      children: \"Latest News\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"overflow-hidden w-full mr-256 ml-256 \",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(nuka_carousel__WEBPACK_IMPORTED_MODULE_3__.default, {\n        autoplay: true,\n        renderCenterLeftControls: function renderCenterLeftControls(_ref) {\n          var previousSlide = _ref.previousSlide;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            style: {\n              display: \"none\"\n            },\n            onClick: previousSlide,\n            children: \"Previous\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 6\n          }, _this);\n        },\n        renderCenterRightControls: function renderCenterRightControls(_ref2) {\n          var nextSlide = _ref2.nextSlide;\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            style: {\n              display: \"none\"\n            },\n            onClick: nextSlide,\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 6\n          }, _this);\n        },\n        slidesToShow: 1,\n        adaptiveHeight: true,\n        className: \"overflow-hidden\",\n        children: renderSlides()\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = LatestNews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LatestNews);\n\nvar _c;\n\n$RefreshReg$(_c, \"LatestNews\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhdGVzdE5ld3MuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QjtBQUNBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsV0FDbkIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVUMsR0FBVixDQUFjLFVBQUNDLEdBQUQ7QUFBQSwwQkFDWjtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSwrQkFDQTtBQUFLLG1CQUFTLEVBQUMsK0JBQWY7QUFBQSxvQkFFRSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBVUQsR0FBVixDQUFjLFVBQUFFLENBQUMsRUFBRTtBQUFDLGdDQUFPLDhEQUFDLG9EQUFEO0FBQWdCLHNCQUFRLDBDQUFtQ0EsQ0FBbkMsVUFBeEI7QUFBcUUsbUJBQUssRUFBQyx1QkFBM0U7QUFBbUcsa0JBQUksRUFBQyxXQUF4RztBQUFvSCxxQkFBTyxFQUFDO0FBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFBc1AsV0FBeFE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURZO0FBQUEsS0FBZCxDQURtQjtBQUFBLEdBQXJCOztBQVVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyw4QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBTSxlQUFTLEVBQUMsdUNBQWhCO0FBQUEsNkJBQ0EsOERBQUMsa0RBQUQ7QUFDQSxnQkFBUSxFQUFFLElBRFY7QUFFQSxnQ0FBd0IsRUFBRTtBQUFBLGNBQUdDLGFBQUgsUUFBR0EsYUFBSDtBQUFBLDhCQUMzQjtBQUFRLGlCQUFLLEVBQUU7QUFBQ0MsY0FBQUEsT0FBTyxFQUFDO0FBQVQsYUFBZjtBQUFrQyxtQkFBTyxFQUFFRCxhQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEMkI7QUFBQSxTQUYxQjtBQUtELGlDQUF5QixFQUFFO0FBQUEsY0FBR0UsU0FBSCxTQUFHQSxTQUFIO0FBQUEsOEJBQzNCO0FBQVEsaUJBQUssRUFBRTtBQUFDRCxjQUFBQSxPQUFPLEVBQUM7QUFBVCxhQUFmO0FBQWlDLG1CQUFPLEVBQUVDLFNBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUQyQjtBQUFBLFNBTDFCO0FBUUQsb0JBQVksRUFBRSxDQVJiO0FBU0Qsc0JBQWMsRUFBRSxJQVRmO0FBVUQsaUJBQVMsRUFBQyxpQkFWVDtBQUFBLGtCQVlDTixZQUFZO0FBWmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQWxDRDs7S0FBTUQ7QUFvQ04sK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXRlc3ROZXdzLmpzeD9hY2ZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXRlc3ROZXdzQ2FyZCBmcm9tIFwiLi9MYXRlc3ROZXdzQ2FyZFwiO1xuXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnbnVrYS1jYXJvdXNlbCc7XG5cbmNvbnN0IExhdGVzdE5ld3MgPSAoKSA9PiB7XG4gIC8vIHZhciBhPWAvLi4vcHVibGljL2ltZy9OZXdzLVRodW1ibmFpbCgke2l9KS5wbmdgO1xuICBjb25zdCByZW5kZXJTbGlkZXMgPSAoKSA9PlxuICAgIFsxLCAyLCAzXS5tYXAoKG51bSkgPT4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgZmxleC13cmFwJz5cbiAgICAgIHtcbiAgICAgICAgWzAsMSwyLDNdLm1hcChpPT57cmV0dXJuIDxMYXRlc3ROZXdzQ2FyZCBpbWFnZVNyYz17YC8uLi9wdWJsaWMvaW1nL05ld3MtVGh1bWJuYWlsKCR7aX0pLnBuZ2B9IHRpdGxlPVwiUC5FLksuSy5BIEtpbmcgVXBkYXRlXCIgZGF0ZT1cIjYuMDkuMjAyMlwiIHN1bW1hcnk9XCJPdXIgZHJlYW0gaXMgdG8gY3JlYXRlIGdhbWVzIHRoYXQgYXMgbWFueSBwZW9wbGUgYXMgcG9zc2libGUgcGxheSBmb3IgbWFueSB5ZWFycyBhbmQgdGhhdCByZW1lbWJlcmVkIGZvcmV2ZXIuXCIvPiB9KVxuICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgJz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCBtdC04IG1iLTggdGV4dC0zeGwnPkxhdGVzdCBOZXdzPC9oMT5cbiAgICAgIDxkaXYgIGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiB3LWZ1bGwgbXItMjU2IG1sLTI1NiBcIj5cbiAgICAgIDxDYXJvdXNlbCBcbiAgICAgIGF1dG9wbGF5PXt0cnVlfVxuICAgICAgcmVuZGVyQ2VudGVyTGVmdENvbnRyb2xzPXsoeyBwcmV2aW91c1NsaWRlIH0pID0+IChcbiAgICAgPGJ1dHRvbiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fSAgb25DbGljaz17cHJldmlvdXNTbGlkZX0+UHJldmlvdXM8L2J1dHRvbj5cbiAgICAgKX1cbiAgICAgcmVuZGVyQ2VudGVyUmlnaHRDb250cm9scz17KHsgbmV4dFNsaWRlIH0pID0+IChcbiAgICAgPGJ1dHRvbiBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fSBvbkNsaWNrPXtuZXh0U2xpZGV9Pk5leHQ8L2J1dHRvbj5cbiAgICAgKX1cbiAgICAgc2xpZGVzVG9TaG93PXsxfVxuICAgICBhZGFwdGl2ZUhlaWdodD17dHJ1ZX1cbiAgICAgY2xhc3NOYW1lPSdvdmVyZmxvdy1oaWRkZW4nXG4gICAgICA+XG4gICAgICB7cmVuZGVyU2xpZGVzKCl9XG4gICAgICA8L0Nhcm91c2VsPlxuICA8L2Rpdj5cbjwvZGl2PlxuICAgICBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXRlc3ROZXdzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF0ZXN0TmV3c0NhcmQiLCJDYXJvdXNlbCIsIkxhdGVzdE5ld3MiLCJyZW5kZXJTbGlkZXMiLCJtYXAiLCJudW0iLCJpIiwicHJldmlvdXNTbGlkZSIsImRpc3BsYXkiLCJuZXh0U2xpZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/LatestNews.jsx\n");

/***/ })

});