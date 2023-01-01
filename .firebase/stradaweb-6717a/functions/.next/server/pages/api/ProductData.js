"use strict";
(() => {
var exports = {};
exports.id = 658;
exports.ids = [658];
exports.modules = {

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            title: "Pavo CVI",
            date: "12/10/2021"
        },
        {
            id: 2,
            title: "Pavo DVI",
            date: "11/11/2021"
        },
        {
            id: 3,
            title: "Assettag",
            date: "5/09/2020"
        },
        {
            id: 4,
            title: "DeepRoad",
            date: "12/10/2021"
        }
    ]);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(104));
module.exports = __webpack_exports__;

})();