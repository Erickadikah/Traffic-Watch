"use strict";
(() => {
var exports = {};
exports.id = 912;
exports.ids = [912];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 5435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/auth/[...nextauth]/route.tsx
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (handler),
  POST: () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(38198);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(19311);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/github.js
var github = __webpack_require__(45898);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/twitter.js
var twitter = __webpack_require__(99940);
;// CONCATENATED MODULE: ./src/lib/auth.tsx




const authOptions = {
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        (0,credentials/* default */.Z)({
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                const user = {
                    id: "1",
                    name: "Admin",
                    email: "admin@admin.com"
                };
                return user;
            }
        }),
        (0,google/* default */.Z)({
            clientId: "74060280128-srahfv87jcjccmc2evv9p2onapjk7248.apps.googleusercontent.com",
            clientSecret: "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",
            allowDangerousEmailAccountLinking: true
        }),
        (0,github/* default */.Z)({
            clientId: "Iv1.1f9b3b4b3b3b3b3b",
            clientSecret: "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"
        }),
        (0,twitter/* default */.ZP)({
            clientId: "Iv1.1f9b3b4b3b3b3b3b",
            clientSecret: "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"
        })
    ],
    callbacks: {
        async signIn ({ user , account , profile , email , credentials  }) {
            // alert('user loged in')
            console.log({
                user
            });
            return true;
        },
        async redirect ({ url , baseUrl  }) {
            return "/Home";
        },
        async session ({ session , token , user  }) {
            return session;
        },
        async jwt ({ token , user , account , profile , isNewUser  }) {
            return token;
        }
    }
};

// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(24279);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
;// CONCATENATED MODULE: ./src/app/api/auth/[...nextauth]/route.tsx


const handler = next_auth_default()(authOptions);


;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.tsx&appDir=%2Fhome%2Ferick%2Fgithub%2FTraffic-Watch%2FTraffi-watch%2Fsrc%2Fapp&appPaths=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/[...nextauth]/route","pathname":"/api/auth/[...nextauth]","filename":"route","bundlePath":"app/api/auth/[...nextauth]/route"},"resolvedPagePath":"/home/erick/github/Traffic-Watch/Traffi-watch/src/app/api/auth/[...nextauth]/route.tsx","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/auth/[...nextauth]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [405,981,809], () => (__webpack_exec__(5435)));
module.exports = __webpack_exports__;

})();