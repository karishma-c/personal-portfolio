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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { title } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/home/karish/Desktop/Personal Portfolio/pages/index.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nconst HomePage = ()=>{\n    _s();\n    const names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleClick = ()=>{\n        setLikes(likes + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            class: \"welcome-section\",\n            id: \"about\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"introduction\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        class: \"role\",\n                        children: \"Front-end Developer\"\n                    }, void 0, false, {\n                        fileName: \"/home/karish/Desktop/Personal Portfolio/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        class: \"about\",\n                        children: \"Front-end Developer with 2.5 years of experience implementing user-friendly websites and web apps for desktop and mobile. Hands-on experience designing and developing user interfaces and reusable components based on requirements\"\n                    }, void 0, false, {\n                        fileName: \"/home/karish/Desktop/Personal Portfolio/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/karish/Desktop/Personal Portfolio/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/karish/Desktop/Personal Portfolio/pages/index.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/karish/Desktop/Personal Portfolio/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HomePage, \"m4sdoi624sGASZMfyLgbxubRP0c=\");\n_c1 = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBRWpDLFNBQVNDLE9BQU8sS0FBUztRQUFULEVBQUVDLEtBQUssRUFBRSxHQUFUO0lBQ2QscUJBQU8sOERBQUNDO2tCQUFJRCxRQUFRQSxRQUFROzs7Ozs7QUFDOUI7S0FGU0Q7QUFJVCxNQUFNRyxXQUFXOztJQUVmLE1BQU1DLFFBQVE7UUFBQztRQUFnQjtRQUFnQjtLQUFvQjtJQUNuRSxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFFbkMsTUFBTVEsY0FBYztRQUNsQkQsU0FBU0QsUUFBUTtJQUNuQjtJQUVBLHFCQUNFLDhEQUFDRztrQkFDQyw0RUFBQ0M7WUFBUUMsT0FBTTtZQUFrQkMsSUFBRztzQkFDOUIsNEVBQUNIO2dCQUFJRSxPQUFNOztrQ0FDUCw4REFBQ1I7d0JBQUdRLE9BQU07a0NBQU87Ozs7OztrQ0FDakIsOERBQUNFO3dCQUFFRixPQUFNO2tDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pDO0dBckJNUDtNQUFBQTtBQXVCTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiAnRGVmYXVsdCB0aXRsZSd9PC9oMT47XG59XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuXG4gIGNvbnN0IG5hbWVzID0gWydBZGEgTG92ZWxhY2UnLCAnR3JhY2UgSG9wcGVyJywgJ01hcmdhcmV0IEhhbWlsdG9uJ107XG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TGlrZXMobGlrZXMgKyAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzPVwid2VsY29tZS1zZWN0aW9uXCIgaWQ9XCJhYm91dFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImludHJvZHVjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cInJvbGVcIj5Gcm9udC1lbmQgRGV2ZWxvcGVyPC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFib3V0XCI+XG4gICAgICAgICAgICAgICAgICBGcm9udC1lbmQgRGV2ZWxvcGVyIHdpdGggMi41IHllYXJzIG9mIGV4cGVyaWVuY2UgaW1wbGVtZW50aW5nIHVzZXItZnJpZW5kbHkgd2Vic2l0ZXMgYW5kIHdlYiBhcHBzIGZvciBkZXNrdG9wIGFuZCBtb2JpbGUuIEhhbmRzLW9uIGV4cGVyaWVuY2UgZGVzaWduaW5nIGFuZCBkZXZlbG9waW5nIHVzZXIgaW50ZXJmYWNlcyBhbmQgcmV1c2FibGUgY29tcG9uZW50cyBiYXNlZCBvbiByZXF1aXJlbWVudHNcbiAgICAgICAgICAgICAgICA8L3A+ICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJIb21lUGFnZSIsIm5hbWVzIiwibGlrZXMiLCJzZXRMaWtlcyIsImhhbmRsZUNsaWNrIiwiZGl2Iiwic2VjdGlvbiIsImNsYXNzIiwiaWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});