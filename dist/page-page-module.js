(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-page-module"],{

/***/ "./demo/app/page/page.component.html":
/*!*******************************************!*\
  !*** ./demo/app/page/page.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n\n<h3>\n  <a routerLink=\"/\">Home</a>\n  <a routerLink=\"/somepage\">SomePage</a>\n  <a routerLink=\"/somepage1\">SomePage1</a>\n</h3>\n\n<h2>\n  320x50 or 728x90 or 970x90 responsive\n</h2>\n<dfp-ad adUnit=\"/35096353/pub-showcase\" responsive>\n  <dfp-size [width]=\"320\" [height]=\"50\"></dfp-size>\n  <dfp-size [width]=\"728\" [height]=\"90\"></dfp-size>\n  <dfp-size [width]=\"970\" [height]=\"90\"></dfp-size>\n  <dfp-targeting key=\"food\">\n    <dfp-value>chicken</dfp-value>\n    <dfp-value>meatballs</dfp-value>\n    <dfp-value>ice cream</dfp-value>\n  </dfp-targeting>\n</dfp-ad>\n\n<h2>\n  Responsive size mapping\n</h2>\n<dfp-ad adUnit=\"/35096353/pub-showcase\">\n  <dfp-size [width]=\"320\" [height]=\"50\"></dfp-size>\n  <dfp-responsive [viewport]=\"[800,0]\" [adSizes]=\"[[728,90],[600,300]]\"></dfp-responsive>\n  <dfp-responsive [viewWidth]=\"1024\">\n    <dfp-size [width]=\"970\" [height]=\"90\"></dfp-size>\n    <dfp-size [width]=\"1024\" [height]=\"90\"></dfp-size>\n  </dfp-responsive>\n</dfp-ad>\n\n<h2>\n  320x50 afterRefresh\n</h2>\n<dfp-ad adUnit=\"/35096353/pub-showcase\" (afterRefresh)=\"refreshed($event)\">\n  <dfp-size [width]=\"320\" [height]=\"50\"></dfp-size>\n  <dfp-targeting key=\"food\" [value]=\"['chicken','meatballs']\"></dfp-targeting>\n</dfp-ad>\n\n<h2>\n  320x50\n</h2>\n<dfp-ad adUnit=\"/35096353/pub-showcase\">\n  <dfp-size [width]=\"320\" [height]=\"50\"></dfp-size>\n  <dfp-targeting key=\"sport\" value=\"football\"></dfp-targeting>\n</dfp-ad>\n\n<h2>\n  video ad , click to start\n</h2>\n<dfp-video width=\"640\" height=\"480\" [adActions]=\"adInput\" (adEvents)=\"adEvent($event)\" adTag=\"https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vmap&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator=\">\n  <video class=\"video-js\" controls preload=\"auto\" data-setup=\"{}\" poster=\"https://developers.google.com/interactive-media-ads/images/vsi_poster.jpg\">\n    <source src=\"/assets/demo.mp4\">\n  </video>\n  <div class=\"ad-container\" (click)=\"adInput.emit('play')\"></div>\n</dfp-video>\n"

/***/ }),

/***/ "./demo/app/page/page.component.scss":
/*!*******************************************!*\
  !*** ./demo/app/page/page.component.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dfp-video {\n  display: inline-block;\n  position: relative; }\n  dfp-video .ad-container {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0; }\n"

/***/ }),

/***/ "./demo/app/page/page.component.ts":
/*!*****************************************!*\
  !*** ./demo/app/page/page.component.ts ***!
  \*****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-dfp */ "./src/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageComponent = /** @class */ (function () {
    function PageComponent() {
        this.title = 'ngx-dfp demo page 1';
        this.adInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.refreshed = function (event) {
        console.log(event);
        if (event.type === 'renderEnded') {
            console.log(event.data.isEmpty, event.data.size);
        }
    };
    PageComponent.prototype.adEvent = function (event) {
        console.log(event);
        if (event.type === 'complete') {
            // hide ad container
            this.dfpVideo.adContainer.style.zIndex = '-1';
        }
        if (event.type === 'start') {
            // show ad container
            this.dfpVideo.adContainer.style.zIndex = '1';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_dfp__WEBPACK_IMPORTED_MODULE_1__["DfpVideoDirective"]),
        __metadata("design:type", ngx_dfp__WEBPACK_IMPORTED_MODULE_1__["DfpVideoDirective"])
    ], PageComponent.prototype, "dfpVideo", void 0);
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./demo/app/page/page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./page.component.scss */ "./demo/app/page/page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./demo/app/page/page.module.ts":
/*!**************************************!*\
  !*** ./demo/app/page/page.module.ts ***!
  \**************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-dfp */ "./src/index.ts");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.component */ "./demo/app/page/page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]
            ],
            imports: [
                ngx_dfp__WEBPACK_IMPORTED_MODULE_2__["DfpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"]
                    }
                ])
            ]
        })
    ], PageModule);
    return PageModule;
}());



/***/ })

}]);
//# sourceMappingURL=page-page-module.js.map