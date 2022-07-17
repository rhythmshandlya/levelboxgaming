"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/static";
exports.ids = ["pages/api/static"];
exports.modules = {

/***/ "./pages/api/static.js":
/*!*****************************!*\
  !*** ./pages/api/static.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n  const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), \"json\");\n  const fileContents = await fs__WEBPACK_IMPORTED_MODULE_1__.promises.readFile(jsonDirectory + \"/data.json\", \"utf8\");\n  res.status(200).json(fileContents);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3RhdGljLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLGVBQWVHLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxRQUFNQyxhQUFhLEdBQUdOLGdEQUFBLENBQVVRLE9BQU8sQ0FBQ0MsR0FBUixFQUFWLEVBQXlCLE1BQXpCLENBQXRCO0FBQ0EsUUFBTUMsWUFBWSxHQUFHLE1BQU1SLGlEQUFBLENBQVlJLGFBQWEsR0FBRyxZQUE1QixFQUEwQyxNQUExQyxDQUEzQjtBQUNBRCxFQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQkgsWUFBckI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRseS10ZW1wbGF0ZS8uL3BhZ2VzL2FwaS9zdGF0aWMuanM/MGQ2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnMgfSBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBqc29uRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIFwianNvblwiKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gYXdhaXQgZnMucmVhZEZpbGUoanNvbkRpcmVjdG9yeSArIFwiL2RhdGEuanNvblwiLCBcInV0ZjhcIik7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGZpbGVDb250ZW50cyk7XG59XG4iXSwibmFtZXMiOlsicGF0aCIsInByb21pc2VzIiwiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwianNvbkRpcmVjdG9yeSIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGUiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/static.js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/static.js"));
module.exports = __webpack_exports__;

})();