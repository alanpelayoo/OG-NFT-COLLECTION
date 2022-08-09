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
exports.id = "pages/api/[tokenId]";
exports.ids = ["pages/api/[tokenId]"];
exports.modules = {

/***/ "(api)/./pages/api/[tokenId].js":
/*!********************************!*\
  !*** ./pages/api/[tokenId].js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    // get the tokenId from the query params\n    const tokenId = req.query.tokenId;\n    // As all the images are uploaded on github, we can extract the images from github directly.\n    const image_url = \"https://raw.githubusercontent.com/LearnWeb3DAO/NFT-Collection/main/my-app/public/cryptodevs/\";\n    // The api is sending back metadata for a Crypto Dev\n    // To make our collection compatible with Opensea, we need to follow some Metadata standards\n    // when sending back the response from the api\n    // More info can be found here: https://docs.opensea.io/docs/metadata-standards\n    res.status(200).json({\n        name: \"Crypto Dev #\" + tokenId,\n        description: \"Crypto Dev is a collection of developers in crypto\",\n        image: image_url + tokenId + \".svg\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvW3Rva2VuSWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxTQUFTQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLHdDQUF3QztJQUN4QyxNQUFNQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDRCxPQUFPO0lBQ2pDLDRGQUE0RjtJQUM1RixNQUFNRSxTQUFTLEdBQ2IsOEZBQThGO0lBQ2hHLG9EQUFvRDtJQUNwRCw0RkFBNEY7SUFDNUYsOENBQThDO0lBQzlDLCtFQUErRTtJQUMvRUgsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztRQUNuQkMsSUFBSSxFQUFFLGNBQWMsR0FBR0wsT0FBTztRQUM5Qk0sV0FBVyxFQUFFLG9EQUFvRDtRQUNqRUMsS0FBSyxFQUFFTCxTQUFTLEdBQUdGLE9BQU8sR0FBRyxNQUFNO0tBQ3BDLENBQUMsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvYXBpL1t0b2tlbklkXS5qcz84Yzg1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy8gZ2V0IHRoZSB0b2tlbklkIGZyb20gdGhlIHF1ZXJ5IHBhcmFtc1xuICBjb25zdCB0b2tlbklkID0gcmVxLnF1ZXJ5LnRva2VuSWQ7XG4gIC8vIEFzIGFsbCB0aGUgaW1hZ2VzIGFyZSB1cGxvYWRlZCBvbiBnaXRodWIsIHdlIGNhbiBleHRyYWN0IHRoZSBpbWFnZXMgZnJvbSBnaXRodWIgZGlyZWN0bHkuXG4gIGNvbnN0IGltYWdlX3VybCA9XG4gICAgXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTGVhcm5XZWIzREFPL05GVC1Db2xsZWN0aW9uL21haW4vbXktYXBwL3B1YmxpYy9jcnlwdG9kZXZzL1wiO1xuICAvLyBUaGUgYXBpIGlzIHNlbmRpbmcgYmFjayBtZXRhZGF0YSBmb3IgYSBDcnlwdG8gRGV2XG4gIC8vIFRvIG1ha2Ugb3VyIGNvbGxlY3Rpb24gY29tcGF0aWJsZSB3aXRoIE9wZW5zZWEsIHdlIG5lZWQgdG8gZm9sbG93IHNvbWUgTWV0YWRhdGEgc3RhbmRhcmRzXG4gIC8vIHdoZW4gc2VuZGluZyBiYWNrIHRoZSByZXNwb25zZSBmcm9tIHRoZSBhcGlcbiAgLy8gTW9yZSBpbmZvIGNhbiBiZSBmb3VuZCBoZXJlOiBodHRwczovL2RvY3Mub3BlbnNlYS5pby9kb2NzL21ldGFkYXRhLXN0YW5kYXJkc1xuICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgbmFtZTogXCJDcnlwdG8gRGV2ICNcIiArIHRva2VuSWQsXG4gICAgZGVzY3JpcHRpb246IFwiQ3J5cHRvIERldiBpcyBhIGNvbGxlY3Rpb24gb2YgZGV2ZWxvcGVycyBpbiBjcnlwdG9cIixcbiAgICBpbWFnZTogaW1hZ2VfdXJsICsgdG9rZW5JZCArIFwiLnN2Z1wiLFxuICB9KTtcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsInRva2VuSWQiLCJxdWVyeSIsImltYWdlX3VybCIsInN0YXR1cyIsImpzb24iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/[tokenId].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/[tokenId].js"));
module.exports = __webpack_exports__;

})();