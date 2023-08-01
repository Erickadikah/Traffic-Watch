"use strict";
(() => {
var exports = {};
exports.id = 628;
exports.ids = [628];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 86944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getPosts)
/* harmony export */ });
/* harmony import */ var _lib_mongo_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31399);
/* harmony import */ var _lib_mongo_postModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79498);


async function getPosts(req, res) {
    await (0,_lib_mongo_mongo__WEBPACK_IMPORTED_MODULE_0__/* .connect */ .$)(); // Establish MongoDB connection
    if (req.method === "GET") {
        try {
            const allPosts = await _lib_mongo_postModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.find({});
            res.status(200).json({
                posts: allPosts
            });
        } catch (error) {
            res.status(500).json({
                error: "An error occurred while retrieving the posts"
            });
        }
    } else {
        res.status(405).json({
            error: "Method not allowed"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [385], () => (__webpack_exec__(86944)));
module.exports = __webpack_exports__;

})();