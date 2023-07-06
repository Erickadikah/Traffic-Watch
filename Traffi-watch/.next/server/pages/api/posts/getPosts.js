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
exports.id = "pages/api/posts/getPosts";
exports.ids = ["pages/api/posts/getPosts"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/lib/mongo/mongo.ts":
/*!********************************!*\
  !*** ./src/lib/mongo/mongo.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGO_URI;\nif (!MONGO_URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env.local\");\n}\nconst connect = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            serverSelectionTimeoutMS: 5000,\n            socketTimeoutMS: 30000\n        });\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL21vbmdvL21vbmdvLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsWUFBWUMsUUFBUUMsSUFBSUY7QUFFOUIsSUFBSSxDQUFDQSxXQUFXO0lBQ2QsTUFBTSxJQUFJRyxNQUFNO0FBQ2xCO0FBRU8sTUFBTUMsVUFBVTtJQUNyQixJQUFJO1FBQ0YsTUFBTUwsdURBQWdCSyxDQUFDSixXQUFXO1lBQ2hDSyxpQkFBaUI7WUFDakJDLG9CQUFvQjtZQUNwQkMsMEJBQTBCO1lBQzFCQyxpQkFBaUI7UUFDbkI7UUFDQUMsUUFBUUMsSUFBSTtJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxNQUFNLDZCQUE2QkE7SUFDN0M7QUFDRixFQUFFO0FBRUYsaUVBQWVQLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvbGliL21vbmdvL21vbmdvLnRzPzc3NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgTU9OR09fVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJO1xuXG5pZiAoIU1PTkdPX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCcpO1xufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KE1PTkdPX1VSSSwge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgc2VydmVyU2VsZWN0aW9uVGltZW91dE1TOiA1MDAwLFxuICAgICAgc29ja2V0VGltZW91dE1TOiAzMDAwMCwgLy8gU2V0IHRoZSBzb2NrZXQgdGltZW91dCB0byAzMCBzZWNvbmRzIChhZGp1c3QgYXMgbmVlZGVkKVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Q7XG5cbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJzb2NrZXRUaW1lb3V0TVMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/mongo/mongo.ts\n");

/***/ }),

/***/ "(api)/./src/lib/mongo/postModel.tsx":
/*!*************************************!*\
  !*** ./src/lib/mongo/postModel.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst postSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    location: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now()\n    },\n    image: {\n        type: Object,\n        required: true\n    },\n    cloudinary_id: {\n        type: String\n    }\n});\nconst Post = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Post\", postSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL21vbmdvL3Bvc3RNb2RlbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBUXRELE1BQU1FLGFBQWEsSUFBSUQsNENBQU1BLENBQUM7SUFDNUJFLFVBQVU7UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDQyxhQUFhO1FBQUVILE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUM1Q0UsV0FBVztRQUFFSixNQUFNSztRQUFNQyxTQUFTRCxLQUFLRTtJQUFNO0lBQzdDQyxPQUFPO1FBQUVSLE1BQU1TO1FBQVFQLFVBQVU7SUFBSztJQUN0Q1EsZUFBZTtRQUFFVixNQUFNQztJQUFPO0FBRWhDO0FBQ0EsTUFBTVUsT0FBT2Ysd0RBQWVnQixDQUFDRCxRQUFRZixxREFBY2lCLENBQVcsUUFBUWY7QUFFdEUsaUVBQWVhLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvbGliL21vbmdvL3Bvc3RNb2RlbC50c3g/Y2U3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hLCBEb2N1bWVudCB9IGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3N0VHlwZSBleHRlbmRzIERvY3VtZW50IHtcbiAgbG9jYXRpb246IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbn1cblxuY29uc3QgcG9zdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICBsb2NhdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgY3JlYXRlZEF0OiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93KCkgfSxcbiAgaW1hZ2U6IHsgdHlwZTogT2JqZWN0LCByZXF1aXJlZDogdHJ1ZSB9LFxuICBjbG91ZGluYXJ5X2lkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAvLyBpbWFnZTogeyB0eXBlOiBTdHJpbmd9XG59KTtcbmNvbnN0IFBvc3QgPSBtb25nb29zZS5tb2RlbHMuUG9zdCB8fCBtb25nb29zZS5tb2RlbDxQb3N0VHlwZT4oJ1Bvc3QnLCBwb3N0U2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInBvc3RTY2hlbWEiLCJsb2NhdGlvbiIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJpbWFnZSIsIk9iamVjdCIsImNsb3VkaW5hcnlfaWQiLCJQb3N0IiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/mongo/postModel.tsx\n");

/***/ }),

/***/ "(api)/./src/pages/api/posts/getPosts.ts":
/*!*****************************************!*\
  !*** ./src/pages/api/posts/getPosts.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPosts)\n/* harmony export */ });\n/* harmony import */ var _lib_mongo_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/mongo/mongo */ \"(api)/./src/lib/mongo/mongo.ts\");\n/* harmony import */ var _lib_mongo_postModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/mongo/postModel */ \"(api)/./src/lib/mongo/postModel.tsx\");\n\n\nasync function getPosts(req, res) {\n    await (0,_lib_mongo_mongo__WEBPACK_IMPORTED_MODULE_0__.connect)(); // Establish MongoDB connection\n    if (req.method === \"GET\") {\n        try {\n            const allPosts = await _lib_mongo_postModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n            res.status(200).json({\n                posts: allPosts\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: \"An error occurred while retrieving the posts\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3Bvc3RzL2dldFBvc3RzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUM0QztBQUNXO0FBRXhDLGVBQWVFLFNBQVNDLEdBQW1CLEVBQUVDLEdBQTJDO0lBQ3JHLE1BQU1KLHlEQUFPQSxJQUFJLCtCQUErQjtJQUVoRCxJQUFJRyxJQUFJRSxXQUFXLE9BQU87UUFDeEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUwsNERBQUlBLENBQUNNLEtBQUssQ0FBQztZQUNsQ0gsSUFBSUksT0FBTyxLQUFLQyxLQUFLO2dCQUFFQyxPQUFPSjtZQUFTO1FBQ3pDLEVBQUUsT0FBT0ssT0FBTztZQUNkUCxJQUFJSSxPQUFPLEtBQUtDLEtBQUs7Z0JBQUVFLE9BQU87WUFBK0M7UUFDL0U7SUFDRixPQUFPO1FBQ0xQLElBQUlJLE9BQU8sS0FBS0MsS0FBSztZQUFFRSxPQUFPO1FBQXFCO0lBQ3JEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udC1lbmQvLi9zcmMvcGFnZXMvYXBpL3Bvc3RzL2dldFBvc3RzLnRzPzU1NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ0AvbGliL21vbmdvL21vbmdvJztcbmltcG9ydCBQb3N0LCB7IFBvc3RUeXBlIH0gZnJvbSAnQC9saWIvbW9uZ28vcG9zdE1vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdHMocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2U8eyBwb3N0czogUG9zdFR5cGVbXSB9Pikge1xuICBhd2FpdCBjb25uZWN0KCk7IC8vIEVzdGFibGlzaCBNb25nb0RCIGNvbm5lY3Rpb25cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBQb3N0LmZpbmQoe30pO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBwb3N0czogYWxsUG9zdHMgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZXRyaWV2aW5nIHRoZSBwb3N0cycgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgZXJyb3I6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG59Il0sIm5hbWVzIjpbImNvbm5lY3QiLCJQb3N0IiwiZ2V0UG9zdHMiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhbGxQb3N0cyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwicG9zdHMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/posts/getPosts.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/posts/getPosts.ts"));
module.exports = __webpack_exports__;

})();