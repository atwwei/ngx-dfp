(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page2-page2-module"],{

/***/ "./demo/app/page2/page2.component.html":
/*!*********************************************!*\
  !*** ./demo/app/page2/page2.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    {{title}}\n</h1>\n\n<h3>\n    <a routerLink=\"/\">Home</a> <a routerLink=\"/somepage\">SomePage</a> <a routerLink=\"/somepage1\">SomePage1</a>\n</h3>\n\n<h2>\n    320x50 or 728x90 or 970x90 responsive\n</h2>\n<dfp-ad adUnit=\"/35096353/pub-showcase\" responsive>\n    <dfp-size [width]=\"320\" [height]=\"50\"></dfp-size>\n    <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n    <dfp-size [width]=\"970\" [height]=\"90\"></dfp-size>\n    <dfp-targeting key=\"food\">\n        <dfp-value>chicken</dfp-value>\n        <dfp-value>meatballs</dfp-value>\n        <dfp-value>ice cream</dfp-value>\n    </dfp-targeting>\n</dfp-ad>\n\n<h2>\n    320x50 afterRefresh\n</h2>\n<dfp-ad adUnit=\"/35096353/pub-showcase\" (afterRefresh)=\"refreshed($event)\">\n    <dfp-size [width]=\"320\" [height]=\"50\"></dfp-size>\n    <dfp-targeting key=\"food\" [value]=\"['chicken','meatballs']\"></dfp-targeting>\n</dfp-ad>\n\n<h2>\n    320x50\n</h2>\n<dfp-ad adUnit=\"/35096353/pub-showcase\">\n    <dfp-size [width]=\"320\" [height]=\"50\"></dfp-size>\n    <dfp-targeting key=\"sport\" value=\"football\"></dfp-targeting>\n</dfp-ad>\n"

/***/ }),

/***/ "./demo/app/page2/page2.component.ts":
/*!*******************************************!*\
  !*** ./demo/app/page2/page2.component.ts ***!
  \*******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page2Component = /** @class */ (function () {
    function Page2Component() {
        this.title = 'ngx-dfp demo page 2';
    }
    Page2Component.prototype.ngOnInit = function () {
    };
    Page2Component.prototype.refreshed = function (event) {
        console.log(event);
        if (event.type === 'renderEnded') {
            console.log(event.data.isEmpty, event.data.size);
        }
    };
    Page2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page2',
            template: __webpack_require__(/*! ./page2.component.html */ "./demo/app/page2/page2.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./demo/app/page2/page2.module.ts":
/*!****************************************!*\
  !*** ./demo/app/page2/page2.module.ts ***!
  \****************************************/
/*! exports provided: Page2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Module", function() { return Page2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-dfp */ "./src/index.ts");
/* harmony import */ var _page2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page2.component */ "./demo/app/page2/page2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Page2Module = /** @class */ (function () {
    function Page2Module() {
    }
    Page2Module = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"]
            ],
            imports: [
                ngx_dfp__WEBPACK_IMPORTED_MODULE_2__["DfpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"]
                    }
                ])
            ]
        })
    ], Page2Module);
    return Page2Module;
}());



/***/ })

}]);
//# sourceMappingURL=page2-page2-module.js.map