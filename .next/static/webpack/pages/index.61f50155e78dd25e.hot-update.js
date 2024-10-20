/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/game/game.js":
/*!*********************************!*\
  !*** ./components/game/game.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-cell */ \"./components/game/game-cell.jsx\");\n/* harmony import */ var _game_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-info */ \"./components/game/game-info.jsx\");\n/* harmony import */ var _reset_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-button */ \"./components/game/reset-button.jsx\");\n/* harmony import */ var _reset_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reset_button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _use_game_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-game-state */ \"./components/game/use-game-state.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Game() {\n    _s();\n    const { cells, currentStep, winnerSymbol, isDraw, resetGame, toggleCell, getWinnerCell } = (0,_use_game_state__WEBPACK_IMPORTED_MODULE_4__.useGameState)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center w-40 mx-auto my-24 border border-black p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_info__WEBPACK_IMPORTED_MODULE_2__.GameInfo, {\n                isDraw: isDraw,\n                winnerSymbol: winnerSymbol,\n                currentStep: currentStep\n            }, void 0, false, {\n                fileName: \"D:\\\\e_paromov\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid pt-px pl-px grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)]\",\n                children: cells.map((symbol, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_game_cell__WEBPACK_IMPORTED_MODULE_1__.GameCell, {\n                        symbol: symbol,\n                        isWinner: getWinnerCell(index),\n                        onClick: ()=>toggleCell(index)\n                    }, index, false, {\n                        fileName: \"D:\\\\e_paromov\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\e_paromov\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_reset_button__WEBPACK_IMPORTED_MODULE_3__.ResetButton, {\n                onClick: resetGame\n            }, void 0, false, {\n                fileName: \"D:\\\\e_paromov\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\e_paromov\\\\tic-tac-toe-online\\\\components\\\\game\\\\game.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Game, \"i0mNiP7PQqf1a1KkwnldtvMcovs=\", false, function() {\n    return [\n        _use_game_state__WEBPACK_IMPORTED_MODULE_4__.useGameState\n    ];\n});\n_c = Game;\nvar _c;\n$RefreshReg$(_c, \"Game\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dhbWUvZ2FtZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0E7QUFDTTtBQUNHO0FBRXpDLFNBQVNJOztJQUNkLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFLEdBQ3RGUiw2REFBWUE7SUFFZCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNaLGdEQUFRQTtnQkFBQ08sUUFBUUE7Z0JBQVFELGNBQWNBO2dCQUFjRCxhQUFhQTs7Ozs7OzBCQUNuRSw4REFBQ007Z0JBQUlDLFdBQVU7MEJBQ1pSLE1BQU1TLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDbEIsOERBQUNoQixnREFBUUE7d0JBRVBlLFFBQVFBO3dCQUNSRSxVQUFVTixjQUFjSzt3QkFDeEJFLFNBQVMsSUFBTVIsV0FBV007dUJBSHJCQTs7Ozs7Ozs7OzswQkFPWCw4REFBQ2Qsc0RBQVdBO2dCQUFDZ0IsU0FBU1Q7Ozs7Ozs7Ozs7OztBQUc1QjtHQXBCZ0JMOztRQUVaRCx5REFBWUE7OztLQUZBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dhbWUvZ2FtZS5qcz83MDcyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVDZWxsIH0gZnJvbSAnLi9nYW1lLWNlbGwnO1xyXG5pbXBvcnQgeyBHYW1lSW5mbyB9IGZyb20gJy4vZ2FtZS1pbmZvJztcclxuaW1wb3J0IHsgUmVzZXRCdXR0b24gfSBmcm9tICcuL3Jlc2V0LWJ1dHRvbic7XHJcbmltcG9ydCB7IHVzZUdhbWVTdGF0ZSB9IGZyb20gJy4vdXNlLWdhbWUtc3RhdGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdhbWUoKSB7XHJcbiAgY29uc3QgeyBjZWxscywgY3VycmVudFN0ZXAsIHdpbm5lclN5bWJvbCwgaXNEcmF3LCByZXNldEdhbWUsIHRvZ2dsZUNlbGwsIGdldFdpbm5lckNlbGwgfSA9XHJcbiAgICB1c2VHYW1lU3RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LTQwIG14LWF1dG8gbXktMjQgYm9yZGVyIGJvcmRlci1ibGFjayBwLTUnPlxyXG4gICAgICA8R2FtZUluZm8gaXNEcmF3PXtpc0RyYXd9IHdpbm5lclN5bWJvbD17d2lubmVyU3ltYm9sfSBjdXJyZW50U3RlcD17Y3VycmVudFN0ZXB9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIHB0LXB4IHBsLXB4IGdyaWQtY29scy1bcmVwZWF0KDMsXzMwcHgpXSBncmlkLXJvd3MtW3JlcGVhdCgzLF8zMHB4KV0nPlxyXG4gICAgICAgIHtjZWxscy5tYXAoKHN5bWJvbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxHYW1lQ2VsbFxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzeW1ib2w9e3N5bWJvbH1cclxuICAgICAgICAgICAgaXNXaW5uZXI9e2dldFdpbm5lckNlbGwoaW5kZXgpfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVDZWxsKGluZGV4KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UmVzZXRCdXR0b24gb25DbGljaz17cmVzZXRHYW1lfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiR2FtZUNlbGwiLCJHYW1lSW5mbyIsIlJlc2V0QnV0dG9uIiwidXNlR2FtZVN0YXRlIiwiR2FtZSIsImNlbGxzIiwiY3VycmVudFN0ZXAiLCJ3aW5uZXJTeW1ib2wiLCJpc0RyYXciLCJyZXNldEdhbWUiLCJ0b2dnbGVDZWxsIiwiZ2V0V2lubmVyQ2VsbCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInN5bWJvbCIsImluZGV4IiwiaXNXaW5uZXIiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/game/game.js\n"));

/***/ }),

/***/ "./components/game/reset-button.jsx":
/*!******************************************!*\
  !*** ./components/game/reset-button.jsx ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});