"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/faq/page",{

/***/ "(app-client)/./app/faq/page.js":
/*!*************************!*\
  !*** ./app/faq/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faq; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Faq() {\n    _s();\n    const [faq, setFaq] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const faqUrl = \"https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json\";\n        fetch(faqUrl).then((response)=>{\n            return response.json();\n        }).then((response)=>{\n            // console.log(response)\n            setFaq(response);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"FAQ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs\\\\app\\\\faq\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: faq.map((param)=>{\n                    let { answer, question } = param;\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: question\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs\\\\app\\\\faq\\\\page.js\",\n                                lineNumber: 38,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: answer\n                            }, void 0, false, {\n                                fileName: \"C:\\\\nextjs\\\\app\\\\faq\\\\page.js\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\nextjs\\\\app\\\\faq\\\\page.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\nextjs\\\\app\\\\faq\\\\page.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Faq, \"U+btVaewv5J64fV6r++q0Pwf8Nw=\");\n_c = Faq;\nvar _c;\n$RefreshReg$(_c, \"Faq\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2ZhcS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVtRDtBQUdwQyxTQUFTRzs7SUFFcEIsTUFBTSxDQUFDQyxLQUFLQyxPQUFPLEdBQUdILCtDQUFRQSxDQUFDLEVBQUU7SUFJakNELGdEQUFTQSxDQUFDO1FBQ04sTUFBTUssU0FBUztRQUVmQyxNQUFNRCxRQUNERSxJQUFJLENBQUMsQ0FBQ0M7WUFDSCxPQUFPQSxTQUFTQyxJQUFJO1FBQ3hCLEdBQ0NGLElBQUksQ0FBQyxDQUFDQztZQUNILHdCQUF3QjtZQUN4QkosT0FBT0k7UUFDWDtJQUdSO0lBRUEscUJBRUk7OzBCQUVJLDhEQUFDRTswQkFBRzs7Ozs7OzBCQUdKLDhEQUFDQzswQkFDSVIsSUFBSVMsR0FBRyxDQUFDO3dCQUFDLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFO2tDQUUxQiw4REFBQ0M7OzBDQUNHLDhEQUFDQzswQ0FBSUY7Ozs7OzswQ0FDTCw4REFBQ0U7MENBQUlIOzs7Ozs7Ozs7Ozs7Z0JBR2I7Ozs7Ozs7O0FBTWhCO0dBMUN3Qlg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2ZhcS9wYWdlLmpzP2FhM2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXEoKSB7XHJcblxyXG4gICAgY29uc3QgW2ZhcSwgc2V0RmFxXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmYXFVcmwgPSAnaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9vbWFyaW9zb3V0by8wY2VhYjU0YmRkODE4MmNiZDFhNDU0OWQzMjk0NWMxYS9yYXcvNTc4YWQxZThlNTI5NmZhMDQ4ZTNlN2ZmNmIzMTdmNzQ5N2IzMWFkOS9hbHVyYS1jYXNlcy1mYXEuanNvbidcclxuXHJcbiAgICAgICAgZmV0Y2goZmFxVXJsKVxyXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHNldEZhcShyZXNwb25zZSlcclxuICAgICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8PlxyXG5cclxuICAgICAgICAgICAgPGgxPkZBUTwvaDE+XHJcblxyXG5cclxuICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICB7ZmFxLm1hcCgoeyBhbnN3ZXIsIHF1ZXN0aW9uIH0pID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+e3F1ZXN0aW9ufTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT57YW5zd2VyfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvPlxyXG5cclxuICAgIClcclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZhcSIsImZhcSIsInNldEZhcSIsImZhcVVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImgxIiwic2VjdGlvbiIsIm1hcCIsImFuc3dlciIsInF1ZXN0aW9uIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/faq/page.js\n"));

/***/ })

});