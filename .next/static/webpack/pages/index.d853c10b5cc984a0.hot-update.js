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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Ol\\xe1 Mundo!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizg\\\\Documents\\\\Meus Projetos\\\\SimpleGames\\\\SimpleGames\\\\pages\\\\index.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Contador, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizg\\\\Documents\\\\Meus Projetos\\\\SimpleGames\\\\SimpleGames\\\\pages\\\\index.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Home;\nvar Contador = function() {\n    var adicionarContador = function adicionarContador() {\n        setContador(contador + 1);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), contador = ref[0], setContador = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: contador\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizg\\\\Documents\\\\Meus Projetos\\\\SimpleGames\\\\SimpleGames\\\\pages\\\\index.js\",\n                lineNumber: 20,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: adicionarContador,\n                children: \"Adicionar\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\luizg\\\\Documents\\\\Meus Projetos\\\\SimpleGames\\\\SimpleGames\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(Contador, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = Contador;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"Contador\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBOzs7QUFBZ0M7QUFFaEMsSUFBTUMsSUFBSSxHQUFHLFdBQU07SUFFZixxQkFDSTs7MEJBQ0ksOERBQUNDLElBQUU7MEJBQUMsZUFBVTs7Ozs7cUJBQUs7MEJBQ25CLDhEQUFDQyxRQUFROzs7O3FCQUFZOztvQkFDdEIsQ0FDTjtDQUNKO0FBUktGLEtBQUFBLElBQUk7QUFTVixJQUFNRSxRQUFRLEdBQUcsV0FBTTtRQUVWQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCLEdBQUc7UUFDekJDLFdBQVcsQ0FBQ0MsUUFBUSxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7SUFIRCxJQUFnQ04sR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUFwQ00sUUFBUSxHQUFpQk4sR0FBVyxHQUE1QixFQUFFSyxXQUFXLEdBQUlMLEdBQVcsR0FBZjtJQUk1QixxQkFDSTs7MEJBQ0EsOERBQUNPLElBQUU7MEJBQUVELFFBQVE7Ozs7O3FCQUFNOzBCQUNuQiw4REFBQ0UsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFTCxpQkFBaUI7MEJBQUUsV0FBUzs7Ozs7cUJBQVM7O29CQUNuRCxDQUNGO0NBRVI7R0FaS0QsUUFBUTtBQUFSQSxNQUFBQSxRQUFRO0FBYWQsK0RBQWVGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPk9sw6EgTXVuZG8hPC9oMT5cclxuICAgICAgICAgICAgPENvbnRhZG9yPjwvQ29udGFkb3I+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuY29uc3QgQ29udGFkb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY29udGFkb3IsIHNldENvbnRhZG9yXSA9IHVzZVN0YXRlKDApXHJcbiAgICBmdW5jdGlvbiBhZGljaW9uYXJDb250YWRvcigpIHtcclxuICAgICAgICBzZXRDb250YWRvcihjb250YWRvciArIDEpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgPGgyPntjb250YWRvcn08L2gyPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRpY2lvbmFyQ29udGFkb3J9PkFkaWNpb25hcjwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhvbWUiLCJoMSIsIkNvbnRhZG9yIiwiYWRpY2lvbmFyQ29udGFkb3IiLCJzZXRDb250YWRvciIsImNvbnRhZG9yIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});