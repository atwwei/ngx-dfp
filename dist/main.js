(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./demo/$$_lazy_route_resource lazy recursive":
/*!***********************************************************!*\
  !*** ./demo/$$_lazy_route_resource lazy namespace object ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./page/page.module": [
		"./demo/app/page/page.module.ts",
		"page-page-module"
	],
	"./page2/page2.module": [
		"./demo/app/page2/page2.module.ts",
		"page2-page2-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./demo/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./demo/app/app.component.ts":
/*!***********************************!*\
  !*** ./demo/app/app.component.ts ***!
  \***********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./demo/app/app.module.ts":
/*!********************************!*\
  !*** ./demo/app/app.module.ts ***!
  \********************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_dfp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-dfp */ "./src/index.ts");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.cjs.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./demo/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





window['videojs'] = video_js__WEBPACK_IMPORTED_MODULE_4__;

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        children: [
                            {
                                path: '',
                                loadChildren: './page/page.module#PageModule'
                            },
                            {
                                path: ':page',
                                loadChildren: './page2/page2.module#Page2Module'
                            },
                        ]
                    }
                ]),
                ngx_dfp__WEBPACK_IMPORTED_MODULE_3__["DfpModule"].forRoot({
                    idleLoad: true,
                    enableVideoAds: true,
                    personalizedAds: false,
                    singleRequestMode: true,
                    onSameNavigation: 'refresh',
                    globalTargeting: {
                        food: ['chicken', 'meatballs']
                    }
                })
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./demo/environments/environment.ts":
/*!******************************************!*\
  !*** ./demo/environments/environment.ts ***!
  \******************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./demo/main.ts":
/*!**********************!*\
  !*** ./demo/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./demo/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./demo/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/class/dfp-config.class.ts":
/*!***************************************!*\
  !*** ./src/class/dfp-config.class.ts ***!
  \***************************************/
/*! exports provided: DfpTargeting, DfpConfig, DFP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpTargeting", function() { return DfpTargeting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpConfig", function() { return DfpConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DFP_CONFIG", function() { return DFP_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DfpTargeting = /** @class */ (function () {
    function DfpTargeting() {
    }
    return DfpTargeting;
}());

var DfpConfig = /** @class */ (function () {
    function DfpConfig() {
    }
    return DfpConfig;
}());

var DFP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('dfpConfig', {
    factory: function () { return new DfpConfig(); }
});


/***/ }),

/***/ "./src/class/dfp-errors.class.ts":
/*!***************************************!*\
  !*** ./src/class/dfp-errors.class.ts ***!
  \***************************************/
/*! exports provided: DFPIncompleteError, DFPTypeError, DFPMissingParentError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DFPIncompleteError", function() { return DFPIncompleteError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DFPTypeError", function() { return DFPTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DFPMissingParentError", function() { return DFPMissingParentError; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DFPIncompleteError = /** @class */ (function (_super) {
    __extends(DFPIncompleteError, _super);
    function DFPIncompleteError(directiveName, missingName, isAttribute) {
        return _super.call(this, "Incomplete definition of '" + directiveName + "': " +
            ("Missing " + (isAttribute ? 'attribute' : 'child directive') + " ") +
            ("'" + missingName + "'.")) || this;
    }
    return DFPIncompleteError;
}(Error));

var DFPTypeError = /** @class */ (function (_super) {
    __extends(DFPTypeError, _super);
    function DFPTypeError(directiveName, attributeName, wrongValue, expectedType) {
        return _super.call(this, "Wrong type for attribute '" + attributeName + "' on " +
            ("directive '" + directiveName + "': Expected " + expectedType) +
            (", got " + typeof wrongValue)) || this;
    }
    return DFPTypeError;
}(Error));

var DFPMissingParentError = /** @class */ (function (_super) {
    __extends(DFPMissingParentError, _super);
    function DFPMissingParentError(directiveName) {
        var parents = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parents[_i - 1] = arguments[_i];
        }
        var _this = this;
        console.assert(parents && parents.length > 0);
        if (Array.isArray(parents[0])) {
            parents = parents[0];
        }
        var parentMessage;
        if (parents.length > 1) {
            parents = parents.map(function (p) { return "'" + p + "'"; });
            parentMessage = ', which must be ';
            parentMessage += parents.slice(0, -1).join(', ');
            parentMessage += " or " + parents[parents.length - 1];
        }
        else {
            parentMessage = " '" + parents[0] + "'";
        }
        _this = _super.call(this, "Invalid use of '" + directiveName + "' directive. " +
            ("Missing parent directive" + parentMessage + ".")) || this;
        return _this;
    }
    return DFPMissingParentError;
}(Error));



/***/ }),

/***/ "./src/class/index.ts":
/*!****************************!*\
  !*** ./src/class/index.ts ***!
  \****************************/
/*! exports provided: DFPIncompleteError, DFPTypeError, DFPMissingParentError, DfpTargeting, DfpConfig, DFP_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dfp_errors_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dfp-errors.class */ "./src/class/dfp-errors.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DFPIncompleteError", function() { return _dfp_errors_class__WEBPACK_IMPORTED_MODULE_0__["DFPIncompleteError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DFPTypeError", function() { return _dfp_errors_class__WEBPACK_IMPORTED_MODULE_0__["DFPTypeError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DFPMissingParentError", function() { return _dfp_errors_class__WEBPACK_IMPORTED_MODULE_0__["DFPMissingParentError"]; });

/* harmony import */ var _dfp_config_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dfp-config.class */ "./src/class/dfp-config.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpTargeting", function() { return _dfp_config_class__WEBPACK_IMPORTED_MODULE_1__["DfpTargeting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpConfig", function() { return _dfp_config_class__WEBPACK_IMPORTED_MODULE_1__["DfpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DFP_CONFIG", function() { return _dfp_config_class__WEBPACK_IMPORTED_MODULE_1__["DFP_CONFIG"]; });





/***/ }),

/***/ "./src/dfp.module.ts":
/*!***************************!*\
  !*** ./src/dfp.module.ts ***!
  \***************************/
/*! exports provided: DfpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpModule", function() { return DfpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./src/class/index.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/service/index.ts");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive */ "./src/directive/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DIRECTIVES = [
    _directive__WEBPACK_IMPORTED_MODULE_3__["DfpAdDirective"], _directive__WEBPACK_IMPORTED_MODULE_3__["DfpAdResponsiveDirective"],
    _directive__WEBPACK_IMPORTED_MODULE_3__["DfpSizeDirective"],
    _directive__WEBPACK_IMPORTED_MODULE_3__["DfpResponsiveDirective"],
    _directive__WEBPACK_IMPORTED_MODULE_3__["DfpTargetingDirective"], _directive__WEBPACK_IMPORTED_MODULE_3__["DfpExclusionDirective"], _directive__WEBPACK_IMPORTED_MODULE_3__["DfpValueDirective"],
    _directive__WEBPACK_IMPORTED_MODULE_3__["DfpVideoDirective"],
    _directive__WEBPACK_IMPORTED_MODULE_3__["DfpAudiencePixelDirective"]
];
var SERVICES = [
    _service__WEBPACK_IMPORTED_MODULE_2__["HttpErrorService"],
    _service__WEBPACK_IMPORTED_MODULE_2__["ParseDurationService"],
    _service__WEBPACK_IMPORTED_MODULE_2__["ScriptInjectorService"],
    _service__WEBPACK_IMPORTED_MODULE_2__["DfpService"], _service__WEBPACK_IMPORTED_MODULE_2__["DfpIDGeneratorService"], _service__WEBPACK_IMPORTED_MODULE_2__["DfpRefreshService"]
];
var DfpModule = /** @class */ (function () {
    function DfpModule() {
    }
    DfpModule_1 = DfpModule;
    DfpModule.forRoot = function (config) {
        return {
            ngModule: DfpModule_1,
            providers: (config && config.idleLoad === true ? [_service__WEBPACK_IMPORTED_MODULE_2__["IdleLoad"]] : []).concat([
                { provide: _class__WEBPACK_IMPORTED_MODULE_1__["DFP_CONFIG"], useValue: config || {} }
            ])
        };
    };
    DfpModule = DfpModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [],
            declarations: DIRECTIVES.slice(),
            providers: SERVICES.slice(),
            exports: DIRECTIVES.slice()
        })
    ], DfpModule);
    return DfpModule;
    var DfpModule_1;
}());



/***/ }),

/***/ "./src/directive/dfp-ad-responsive.directive.ts":
/*!******************************************************!*\
  !*** ./src/directive/dfp-ad-responsive.directive.ts ***!
  \******************************************************/
/*! exports provided: DfpAdResponsiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpAdResponsiveDirective", function() { return DfpAdResponsiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dfp-ad.directive */ "./src/directive/dfp-ad.directive.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service */ "./src/service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DfpAdResponsiveDirective = /** @class */ (function () {
    function DfpAdResponsiveDirective(elementRef, ad, dfpRefresh) {
        var _this = this;
        this.elementRef = elementRef;
        this.ad = ad;
        this.dfpRefresh = dfpRefresh;
        this.ad.afterRefresh.subscribe(function (event) {
            _this.slot = event.slot;
        });
    }
    DfpAdResponsiveDirective.prototype.normalizeIframe = function () {
        var _this = this;
        if (this.ad.isHidden) {
            return false;
        }
        this.iframe = this.iframe || this.getIframe();
        if (!this.iframe) {
            return false;
        }
        this.iframeWidth = this.iframeWidth || +this.iframe.width;
        var winWidth = window.innerWidth;
        var state = this.ad.getState(), width = 0;
        state.sizes.forEach(function (size) {
            if (size[0] < winWidth) {
                width = Math.max(width, size[0]);
            }
        });
        if (state.sizes.length > 1 && width !== this.iframeWidth) {
            state = this.ad.getState();
            this.iframeWidth = width;
            this.iframe.setAttribute('width', width + '');
            this.dfpRefresh.slotRefresh(this.slot, state.refresh).then(function (slot) {
                _this.ad.afterRefresh.emit({ type: 'resize', slot: slot });
                _this.iframe = _this.getIframe();
            });
        }
    };
    DfpAdResponsiveDirective.prototype.getIframe = function () {
        var ad = this.elementRef.nativeElement, iframe = ad.querySelector('iframe');
        if (iframe && +iframe.width > 0) {
            return iframe;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DfpAdResponsiveDirective.prototype, "normalizeIframe", null);
    DfpAdResponsiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-ad[responsive]'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"]; }))),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"],
            _service__WEBPACK_IMPORTED_MODULE_2__["DfpRefreshService"]])
    ], DfpAdResponsiveDirective);
    return DfpAdResponsiveDirective;
}());



/***/ }),

/***/ "./src/directive/dfp-ad.directive.ts":
/*!*******************************************!*\
  !*** ./src/directive/dfp-ad.directive.ts ***!
  \*******************************************/
/*! exports provided: DfpRefreshEvent, DfpAdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpRefreshEvent", function() { return DfpRefreshEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpAdDirective", function() { return DfpAdDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service */ "./src/service/index.ts");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class */ "./src/class/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DfpRefreshEvent = /** @class */ (function () {
    function DfpRefreshEvent() {
    }
    return DfpRefreshEvent;
}());

var DfpAdDirective = /** @class */ (function () {
    function DfpAdDirective(platformId, elementRef, dfp, dfpIDGenerator, dfpRefresh, config, router) {
        var _this = this;
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.dfp = dfp;
        this.dfpIDGenerator = dfpIDGenerator;
        this.dfpRefresh = dfpRefresh;
        this.config = config;
        this.afterRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sizes = [];
        this.responsiveMapping = [];
        this.targetings = [];
        this.exclusions = [];
        this.scripts = [];
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.dfpRefresh.refreshEvent.subscribe(function (slot) {
                if (slot === _this.slot) {
                    _this.afterRefresh.emit({ type: 'refresh', slot: slot });
                }
            });
            if (router) {
                this.onSameNavigation = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
                    .subscribe(function (event) {
                    if (_this.slot && !_this.refresh && _this.config.onSameNavigation === 'refresh') {
                        _this.refreshContent.call(_this);
                    }
                });
            }
        }
    }
    DfpAdDirective.prototype.ngOnInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.dfpIDGenerator.dfpIDGenerator(this.elementRef.nativeElement);
        }
    };
    DfpAdDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this.dfp.defineTask(function () {
                _this.defineSlot();
            });
        }
    };
    DfpAdDirective.prototype.ngOnDestroy = function () {
        if (this.slot) {
            googletag.destroySlots([this.slot]);
        }
        if (this.onSameNavigation) {
            this.onSameNavigation.unsubscribe();
        }
    };
    DfpAdDirective.prototype.setResponsiveMapping = function (slot) {
        var ad = this.getState();
        if (ad.responsiveMapping.length === 0) {
            return;
        }
        var sizeMapping = googletag.sizeMapping();
        ad.responsiveMapping.forEach(function (mapping) {
            sizeMapping.addSize(mapping.viewportSize, mapping.adSizes);
        });
        slot.defineSizeMapping(sizeMapping.build());
    };
    DfpAdDirective.prototype.defineSlot = function () {
        var _this = this;
        var ad = this.getState(), element = this.elementRef.nativeElement;
        this.slot = googletag.defineSlot(ad.adUnit, ad.sizes, element.id);
        if (ad.forceSafeFrame !== undefined) {
            this.slot.setForceSafeFrame(true);
        }
        if (ad.clickUrl) {
            this.slot.setClickUrl(ad.clickUrl);
        }
        if (ad.collapseIfEmpty) {
            this.slot.setCollapseEmptyDiv(true, true);
        }
        if (ad.safeFrameConfig) {
            this.slot.setSafeFrameConfig((JSON.parse(ad.safeFrameConfig)));
        }
        this.slot.renderEnded = function (googleSlotEvent) {
            _this.afterRefresh.emit({ type: 'renderEnded', slot: _this.slot, data: googleSlotEvent });
        };
        this.setResponsiveMapping(this.slot);
        ad.targetings.forEach(function (targeting) {
            _this.slot.setTargeting(targeting.key, targeting.values);
        });
        ad.exclusions.forEach(function (exclusion) {
            _this.slot.setCategoryExclusion(exclusion);
        });
        ad.scripts.forEach(function (script) { script(_this.slot); });
        if (this.config.enableVideoAds) {
            this.slot.addService(googletag.companionAds());
        }
        this.slot.addService(googletag.pubads());
        this.refreshContent();
    };
    DfpAdDirective.prototype.refreshContent = function () {
        var _this = this;
        this.dfpRefresh.slotRefresh(this.slot, this.refresh, true).then(function (slot) {
            _this.afterRefresh.emit({ type: 'init', slot: slot });
        });
    };
    DfpAdDirective.prototype.checkValid = function () {
        if (this.sizes.length === 0) {
            throw new _class__WEBPACK_IMPORTED_MODULE_5__["DFPIncompleteError"]('dfp-ad', 'dfp-size');
        }
        if (!this.adUnit) {
            throw new _class__WEBPACK_IMPORTED_MODULE_5__["DFPIncompleteError"]('dfp-ad', 'ad-unit', true);
        }
    };
    Object.defineProperty(DfpAdDirective.prototype, "isHidden", {
        get: function () {
            return this.dfpRefresh.hiddenCheck(this.elementRef.nativeElement);
        },
        enumerable: true,
        configurable: true
    });
    DfpAdDirective.prototype.getState = function () {
        this.checkValid();
        return Object.freeze({
            sizes: this.sizes,
            responsiveMapping: this.responsiveMapping,
            targetings: this.targetings,
            exclusions: this.exclusions,
            adUnit: this.adUnit,
            forceSafeFrame: this.forceSafeFrame === true,
            safeFrameConfig: this.safeFrameConfig,
            clickUrl: this.clickUrl,
            refresh: this.refresh,
            scripts: this.scripts,
            collapseIfEmpty: this.collapseIfEmpty === true
        });
    };
    DfpAdDirective.prototype.addSize = function (size) {
        this.sizes.push(size);
    };
    DfpAdDirective.prototype.addResponsiveMapping = function (mapping) {
        this.responsiveMapping.push(mapping);
    };
    DfpAdDirective.prototype.addTargeting = function (targeting) {
        this.targetings.push(targeting);
    };
    DfpAdDirective.prototype.addExclusion = function (exclusion) {
        this.exclusions.push(exclusion);
    };
    DfpAdDirective.prototype.addScript = function (script) {
        this.scripts.push(script);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DfpAdDirective.prototype, "adUnit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DfpAdDirective.prototype, "clickUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DfpAdDirective.prototype, "forceSafeFrame", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DfpAdDirective.prototype, "safeFrameConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DfpAdDirective.prototype, "refresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], DfpAdDirective.prototype, "collapseIfEmpty", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DfpAdDirective.prototype, "afterRefresh", void 0);
    DfpAdDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-ad'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_class__WEBPACK_IMPORTED_MODULE_5__["DFP_CONFIG"])),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _service__WEBPACK_IMPORTED_MODULE_4__["DfpService"],
            _service__WEBPACK_IMPORTED_MODULE_4__["DfpIDGeneratorService"],
            _service__WEBPACK_IMPORTED_MODULE_4__["DfpRefreshService"],
            _class__WEBPACK_IMPORTED_MODULE_5__["DfpConfig"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DfpAdDirective);
    return DfpAdDirective;
}());



/***/ }),

/***/ "./src/directive/dfp-audience-pixel.directive.ts":
/*!*******************************************************!*\
  !*** ./src/directive/dfp-audience-pixel.directive.ts ***!
  \*******************************************************/
/*! exports provided: DfpAudiencePixelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpAudiencePixelDirective", function() { return DfpAudiencePixelDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DfpAudiencePixelDirective = /** @class */ (function () {
    function DfpAudiencePixelDirective(platformId, elementRef) {
        this.platformId = platformId;
        this.elementRef = elementRef;
    }
    DfpAudiencePixelDirective.prototype.ngOnInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var axel = Math.random(), random = axel * 10000000000000;
            var adUnit = '';
            if (this.adUnit) {
                adUnit = "dc_iu=" + this.adUnit;
            }
            var ppid = '';
            if (this.ppid) {
                ppid = "ppid=" + this.ppid;
            }
            var pixel = document.createElement('img');
            pixel.src = 'https://pubads.g.doubleclick.net/activity;ord=';
            pixel.src += random + ";dc_seg=" + this.segmentId + ";" + adUnit + ppid;
            pixel.width = 1;
            pixel.height = 1;
            pixel.border = '0';
            pixel.style.visibility = 'hidden';
            this.elementRef.nativeElement.append(pixel);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DfpAudiencePixelDirective.prototype, "adUnit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DfpAudiencePixelDirective.prototype, "segmentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DfpAudiencePixelDirective.prototype, "ppid", void 0);
    DfpAudiencePixelDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-audience-pixel'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DfpAudiencePixelDirective);
    return DfpAudiencePixelDirective;
}());



/***/ }),

/***/ "./src/directive/dfp-exclusion.directive.ts":
/*!**************************************************!*\
  !*** ./src/directive/dfp-exclusion.directive.ts ***!
  \**************************************************/
/*! exports provided: DfpExclusionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpExclusionDirective", function() { return DfpExclusionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dfp-ad.directive */ "./src/directive/dfp-ad.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DfpExclusionDirective = /** @class */ (function () {
    function DfpExclusionDirective(elementRef, ad) {
        this.elementRef = elementRef;
        this.ad = ad;
    }
    DfpExclusionDirective.prototype.ngOnInit = function () {
        this.ad.addExclusion(this.elementRef.nativeElement.innerText);
    };
    DfpExclusionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-exclusion'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"]; }))),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"]])
    ], DfpExclusionDirective);
    return DfpExclusionDirective;
}());



/***/ }),

/***/ "./src/directive/dfp-responsive.directive.ts":
/*!***************************************************!*\
  !*** ./src/directive/dfp-responsive.directive.ts ***!
  \***************************************************/
/*! exports provided: DfpResponsiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpResponsiveDirective", function() { return DfpResponsiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dfp-ad.directive */ "./src/directive/dfp-ad.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DfpResponsiveDirective = /** @class */ (function () {
    function DfpResponsiveDirective(ad) {
        this.ad = ad;
        this.viewport = [0, 0];
        this.adSizes = [];
    }
    DfpResponsiveDirective.prototype.ngOnInit = function () {
        this.ad.addResponsiveMapping(this.getState());
    };
    Object.defineProperty(DfpResponsiveDirective.prototype, "viewWidth", {
        set: function (val) {
            if (val > 0) {
                this.viewport[0] = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DfpResponsiveDirective.prototype, "viewHeight", {
        set: function (val) {
            if (val > 0) {
                this.viewport[1] = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    DfpResponsiveDirective.prototype.addSize = function (size) {
        this.adSizes.push(size);
    };
    DfpResponsiveDirective.prototype.getState = function () {
        return Object.freeze({
            viewportSize: this.viewport,
            adSizes: this.adSizes
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DfpResponsiveDirective.prototype, "viewport", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DfpResponsiveDirective.prototype, "adSizes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DfpResponsiveDirective.prototype, "viewWidth", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DfpResponsiveDirective.prototype, "viewHeight", null);
    DfpResponsiveDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-responsive'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"]; }))),
        __metadata("design:paramtypes", [_dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"]])
    ], DfpResponsiveDirective);
    return DfpResponsiveDirective;
}());



/***/ }),

/***/ "./src/directive/dfp-size.directive.ts":
/*!*********************************************!*\
  !*** ./src/directive/dfp-size.directive.ts ***!
  \*********************************************/
/*! exports provided: DfpSizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpSizeDirective", function() { return DfpSizeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dfp-ad.directive */ "./src/directive/dfp-ad.directive.ts");
/* harmony import */ var _dfp_responsive_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dfp-responsive.directive */ "./src/directive/dfp-responsive.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DfpSizeDirective = /** @class */ (function () {
    function DfpSizeDirective(elementRef, ad, resp) {
        this.elementRef = elementRef;
        this.ad = ad;
        this.resp = resp;
    }
    DfpSizeDirective.prototype.ngOnInit = function () {
        var target = this.resp || this.ad, innerText = this.elementRef.nativeElement.innerText;
        if (this.width && this.height) {
            target.addSize([this.width, this.height]);
        }
        else if (innerText.trim() !== '') {
            target.addSize(innerText);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DfpSizeDirective.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DfpSizeDirective.prototype, "height", void 0);
    DfpSizeDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-size'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"]; }))),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _dfp_responsive_directive__WEBPACK_IMPORTED_MODULE_2__["DfpResponsiveDirective"]; }))),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"],
            _dfp_responsive_directive__WEBPACK_IMPORTED_MODULE_2__["DfpResponsiveDirective"]])
    ], DfpSizeDirective);
    return DfpSizeDirective;
}());



/***/ }),

/***/ "./src/directive/dfp-targeting.directive.ts":
/*!**************************************************!*\
  !*** ./src/directive/dfp-targeting.directive.ts ***!
  \**************************************************/
/*! exports provided: DfpTargetingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpTargetingDirective", function() { return DfpTargetingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class */ "./src/class/index.ts");
/* harmony import */ var _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dfp-ad.directive */ "./src/directive/dfp-ad.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DfpTargetingDirective = /** @class */ (function () {
    function DfpTargetingDirective(ad) {
        this.ad = ad;
        this.values = [];
    }
    Object.defineProperty(DfpTargetingDirective.prototype, "value", {
        set: function (val) {
            var _this = this;
            if (val instanceof Array) {
                val.forEach(function (v) { return _this.addValue(v); });
            }
            else {
                this.addValue(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    DfpTargetingDirective.prototype.ngAfterContentInit = function () {
        var targeting = this.getState();
        this.ad.addTargeting(targeting);
    };
    DfpTargetingDirective.prototype.checkValid = function () {
        if (this.key === undefined) {
            throw new _class__WEBPACK_IMPORTED_MODULE_1__["DFPIncompleteError"]('dfp-targeting', 'key', true);
        }
        if (this.values.length === 0) {
            throw new _class__WEBPACK_IMPORTED_MODULE_1__["DFPIncompleteError"]('dfp-targeting', 'value', true);
        }
    };
    DfpTargetingDirective.prototype.getState = function () {
        this.checkValid();
        return Object.freeze({
            key: this.key,
            values: this.values
        });
    };
    DfpTargetingDirective.prototype.addValue = function (value) {
        if (value && !this.values.find(function (item) { return item === value; })) {
            this.values.push(value);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DfpTargetingDirective.prototype, "key", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DfpTargetingDirective.prototype, "value", null);
    DfpTargetingDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-targeting'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_2__["DfpAdDirective"]; }))),
        __metadata("design:paramtypes", [_dfp_ad_directive__WEBPACK_IMPORTED_MODULE_2__["DfpAdDirective"]])
    ], DfpTargetingDirective);
    return DfpTargetingDirective;
}());



/***/ }),

/***/ "./src/directive/dfp-value.directive.ts":
/*!**********************************************!*\
  !*** ./src/directive/dfp-value.directive.ts ***!
  \**********************************************/
/*! exports provided: DfpValueDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpValueDirective", function() { return DfpValueDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dfp_targeting_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dfp-targeting.directive */ "./src/directive/dfp-targeting.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DfpValueDirective = /** @class */ (function () {
    function DfpValueDirective(elementRef, targeting) {
        this.elementRef = elementRef;
        this.targeting = targeting;
    }
    DfpValueDirective.prototype.ngOnInit = function () {
        this.targeting.addValue(this.elementRef.nativeElement.innerText);
    };
    DfpValueDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-value'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _dfp_targeting_directive__WEBPACK_IMPORTED_MODULE_1__["DfpTargetingDirective"]; }))),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _dfp_targeting_directive__WEBPACK_IMPORTED_MODULE_1__["DfpTargetingDirective"]])
    ], DfpValueDirective);
    return DfpValueDirective;
}());



/***/ }),

/***/ "./src/directive/dfp-video.directive.ts":
/*!**********************************************!*\
  !*** ./src/directive/dfp-video.directive.ts ***!
  \**********************************************/
/*! exports provided: DfpVideoDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpVideoDirective", function() { return DfpVideoDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alugha_ima__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alugha/ima */ "./node_modules/@alugha/ima/lib/esm/index.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service */ "./src/service/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DfpVideoDirective = /** @class */ (function () {
    function DfpVideoDirective(platformId, elementRef, renderer, dfpIDGenerator) {
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dfpIDGenerator = dfpIDGenerator;
        this.adEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.adsDone = false;
    }
    DfpVideoDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var el = this.elementRef.nativeElement;
            this.dfpIDGenerator.dfpIDGenerator(el);
            this.contentPlayer = el.querySelector('video');
            this.renderer.setAttribute(this.contentPlayer, 'width', this.width.toString());
            this.renderer.setAttribute(this.contentPlayer, 'height', this.height.toString());
            this.adContainer = el.querySelector('.ad-container');
            if (!this.adContainer) {
                this.adContainer = this.renderer.createElement('div');
                this.renderer.addClass(this.adContainer, 'ad-container');
                this.renderer.appendChild(el, this.adContainer);
            }
            // ima setup
            Object(_alugha_ima__WEBPACK_IMPORTED_MODULE_2__["loadImaSdk"])().then(function () { return _this.setUpIMA(); });
            // simple control
            this.adActions.subscribe(function (act) {
                switch (act) {
                    case 'play':
                        _this.play();
                        break;
                    case 'pause':
                        _this.pause();
                        break;
                    case 'resume':
                        _this.resume();
                        break;
                }
            });
        }
    };
    DfpVideoDirective.prototype.play = function () {
        if (!this.adsDone) {
            this.initialUserAction();
            this.loadAds();
            this.adsDone = true;
        }
    };
    DfpVideoDirective.prototype.pause = function () {
        if (this.adsManager) {
            this.adsManager.pause();
        }
    };
    DfpVideoDirective.prototype.resume = function () {
        if (this.adsManager) {
            this.adsManager.resume();
        }
    };
    DfpVideoDirective.prototype.setUpIMA = function () {
        var _this = this;
        // Create the ad display container.
        this.adDisplayContainer = new google.ima.AdDisplayContainer(this.adContainer, this.contentPlayer);
        // Create ads loader.
        this.adsLoader = new google.ima.AdsLoader(this.adDisplayContainer);
        // Listen and respond to ads loaded and error events.
        this.adsLoader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (event) { return _this.onAdsManagerLoaded(event); }, false);
        this.adsLoader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (event) { return _this.onAdError(event); }, false);
        // An event listener to tell the SDK that our content video
        // is completed so the SDK can play any post-roll ads.
        this.contentPlayer.onended = function () {
            _this.contentEnded();
        };
    };
    DfpVideoDirective.prototype.initialUserAction = function () {
        this.adDisplayContainer.initialize();
        this.contentPlayer.load();
    };
    DfpVideoDirective.prototype.requestAds = function (adTagUrl) {
        var adsRequest = new google.ima.AdsRequest();
        adsRequest.adTagUrl = adTagUrl;
        adsRequest.linearAdSlotWidth = this.width;
        adsRequest.linearAdSlotHeight = this.height;
        adsRequest.nonLinearAdSlotWidth = this.width;
        adsRequest.nonLinearAdSlotHeight = this.height;
        this.adsLoader.requestAds(adsRequest);
    };
    DfpVideoDirective.prototype.contentEnded = function () {
        this.contentCompleteCalled = true;
        this.adsLoader.contentComplete();
    };
    DfpVideoDirective.prototype.onAdsManagerLoaded = function (adsManagerLoadedEvent) {
        var adsRenderingSettings = new google.ima.AdsRenderingSettings();
        adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
        this.adsManager = adsManagerLoadedEvent.getAdsManager(this.contentPlayer, adsRenderingSettings);
        this.startAdsManager(this.adsManager);
    };
    DfpVideoDirective.prototype.startAdsManager = function (adsManager) {
        var _this = this;
        // Attach the pause/resume events.
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED, function () { return _this.onContentPauseRequested(); }, false, this);
        adsManager.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, function () { return _this.onContentResumeRequested(); }, false, this);
        // Handle errors.
        adsManager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (event) { return _this.onAdError(event); }, false, this);
        var events = [google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
            google.ima.AdEvent.Type.CLICK,
            google.ima.AdEvent.Type.COMPLETE,
            google.ima.AdEvent.Type.FIRST_QUARTILE,
            google.ima.AdEvent.Type.LOADED,
            google.ima.AdEvent.Type.MIDPOINT,
            google.ima.AdEvent.Type.PAUSED,
            google.ima.AdEvent.Type.STARTED,
            google.ima.AdEvent.Type.THIRD_QUARTILE];
        events.forEach(function (event) {
            return adsManager.addEventListener(event, function (adEvent) { return _this.onAdEvent(adEvent); }, false);
        });
        adsManager.init(this.width, this.height, google.ima.ViewMode.NORMAL);
        adsManager.start();
    };
    DfpVideoDirective.prototype.onContentPauseRequested = function () {
        this.pauseForAd();
    };
    DfpVideoDirective.prototype.onContentResumeRequested = function () {
        // Without this check the video starts over from the beginning on a
        // post-roll's CONTENT_RESUME_REQUESTED
        if (!this.contentCompleteCalled) {
            this.resumeAfterAd();
        }
    };
    DfpVideoDirective.prototype.onAdEvent = function (adEvent) {
        if (adEvent.type === google.ima.AdEvent.Type.LOADED) {
            var ad = adEvent.getAd();
            if (!ad.isLinear()) {
                this.onContentResumeRequested();
            }
        }
        this.adEvents.emit(adEvent);
    };
    DfpVideoDirective.prototype.onAdError = function (adErrorEvent) {
        if (this.adsManager) {
            this.adsManager.destroy();
        }
        this.resumeAfterAd();
        this.adEvents.emit(adErrorEvent);
    };
    // application functions
    DfpVideoDirective.prototype.resumeAfterAd = function () {
        this.contentPlayer.play();
    };
    DfpVideoDirective.prototype.pauseForAd = function () {
        this.contentPlayer.pause();
    };
    DfpVideoDirective.prototype.loadAds = function () {
        this.requestAds(this.adTag);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DfpVideoDirective.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DfpVideoDirective.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DfpVideoDirective.prototype, "adTag", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DfpVideoDirective.prototype, "adActions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DfpVideoDirective.prototype, "adEvents", void 0);
    DfpVideoDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: 'dfp-video'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _service__WEBPACK_IMPORTED_MODULE_3__["DfpIDGeneratorService"]])
    ], DfpVideoDirective);
    return DfpVideoDirective;
}());



/***/ }),

/***/ "./src/directive/index.ts":
/*!********************************!*\
  !*** ./src/directive/index.ts ***!
  \********************************/
/*! exports provided: DfpAdDirective, DfpAdResponsiveDirective, DfpResponsiveDirective, DfpSizeDirective, DfpTargetingDirective, DfpExclusionDirective, DfpValueDirective, DfpVideoDirective, DfpAudiencePixelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dfp-ad.directive */ "./src/directive/dfp-ad.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpAdDirective", function() { return _dfp_ad_directive__WEBPACK_IMPORTED_MODULE_0__["DfpAdDirective"]; });

/* harmony import */ var _dfp_ad_responsive_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dfp-ad-responsive.directive */ "./src/directive/dfp-ad-responsive.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpAdResponsiveDirective", function() { return _dfp_ad_responsive_directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdResponsiveDirective"]; });

/* harmony import */ var _dfp_responsive_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dfp-responsive.directive */ "./src/directive/dfp-responsive.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpResponsiveDirective", function() { return _dfp_responsive_directive__WEBPACK_IMPORTED_MODULE_2__["DfpResponsiveDirective"]; });

/* harmony import */ var _dfp_size_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dfp-size.directive */ "./src/directive/dfp-size.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpSizeDirective", function() { return _dfp_size_directive__WEBPACK_IMPORTED_MODULE_3__["DfpSizeDirective"]; });

/* harmony import */ var _dfp_targeting_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dfp-targeting.directive */ "./src/directive/dfp-targeting.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpTargetingDirective", function() { return _dfp_targeting_directive__WEBPACK_IMPORTED_MODULE_4__["DfpTargetingDirective"]; });

/* harmony import */ var _dfp_exclusion_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dfp-exclusion.directive */ "./src/directive/dfp-exclusion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpExclusionDirective", function() { return _dfp_exclusion_directive__WEBPACK_IMPORTED_MODULE_5__["DfpExclusionDirective"]; });

/* harmony import */ var _dfp_value_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dfp-value.directive */ "./src/directive/dfp-value.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpValueDirective", function() { return _dfp_value_directive__WEBPACK_IMPORTED_MODULE_6__["DfpValueDirective"]; });

/* harmony import */ var _dfp_video_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dfp-video.directive */ "./src/directive/dfp-video.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpVideoDirective", function() { return _dfp_video_directive__WEBPACK_IMPORTED_MODULE_7__["DfpVideoDirective"]; });

/* harmony import */ var _dfp_audience_pixel_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dfp-audience-pixel.directive */ "./src/directive/dfp-audience-pixel.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpAudiencePixelDirective", function() { return _dfp_audience_pixel_directive__WEBPACK_IMPORTED_MODULE_8__["DfpAudiencePixelDirective"]; });












/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: DfpModule, HttpErrorService, ParseDurationService, ScriptInjectorService, IdleLoad, DfpService, DfpIDGeneratorService, DfpRefreshService, DfpAdDirective, DfpAdResponsiveDirective, DfpResponsiveDirective, DfpSizeDirective, DfpTargetingDirective, DfpExclusionDirective, DfpValueDirective, DfpVideoDirective, DfpAudiencePixelDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/service/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpErrorService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["HttpErrorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParseDurationService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ParseDurationService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptInjectorService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["ScriptInjectorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdleLoad", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["IdleLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["DfpService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpIDGeneratorService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["DfpIDGeneratorService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpRefreshService", function() { return _service__WEBPACK_IMPORTED_MODULE_0__["DfpRefreshService"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive */ "./src/directive/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpAdDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpAdResponsiveDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpAdResponsiveDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpResponsiveDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpResponsiveDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpSizeDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpSizeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpTargetingDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpTargetingDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpExclusionDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpExclusionDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpValueDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpValueDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpVideoDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpVideoDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpAudiencePixelDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["DfpAudiencePixelDirective"]; });

/* harmony import */ var _dfp_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dfp.module */ "./src/dfp.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpModule", function() { return _dfp_module__WEBPACK_IMPORTED_MODULE_2__["DfpModule"]; });






/***/ }),

/***/ "./src/service/dfp-id-generator.service.ts":
/*!*************************************************!*\
  !*** ./src/service/dfp-id-generator.service.ts ***!
  \*************************************************/
/*! exports provided: DfpIDGeneratorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpIDGeneratorService", function() { return DfpIDGeneratorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DfpIDGeneratorService = /** @class */ (function () {
    function DfpIDGeneratorService() {
        this.generatedIDs = {};
    }
    DfpIDGeneratorService.prototype.generateID = function () {
        var id = null;
        do {
            var number = Math.random().toString().slice(2);
            id = 'gpt-ad-' + number;
        } while (id in this.generatedIDs);
        this.generatedIDs[id] = true;
        return id;
    };
    DfpIDGeneratorService.prototype.dfpIDGenerator = function (element) {
        if (element && element.id && !(element.id in this.generatedIDs)) {
            return element.id;
        }
        var id = this.generateID();
        if (element) {
            element.id = id;
        }
        return id;
    };
    DfpIDGeneratorService.prototype.isTaken = function (id) {
        return id in this.generatedIDs;
    };
    DfpIDGeneratorService.prototype.isUnique = function (id) {
        return !this.isTaken(id);
    };
    DfpIDGeneratorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DfpIDGeneratorService);
    return DfpIDGeneratorService;
}());



/***/ }),

/***/ "./src/service/dfp-refresh.service.ts":
/*!********************************************!*\
  !*** ./src/service/dfp-refresh.service.ts ***!
  \********************************************/
/*! exports provided: DfpRefreshService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpRefreshService", function() { return DfpRefreshService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/timer */ "./node_modules/rxjs-compat/_esm5/observable/timer.js");
/* harmony import */ var rxjs_observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/from */ "./node_modules/rxjs-compat/_esm5/observable/from.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../class */ "./src/class/index.ts");
/* harmony import */ var _parse_duration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse-duration.service */ "./src/service/parse-duration.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DFPRefreshError = /** @class */ (function (_super) {
    __extends(DFPRefreshError, _super);
    function DFPRefreshError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DFPRefreshError;
}(Error));
var DfpRefreshService = /** @class */ (function () {
    function DfpRefreshService(config, inject, parseDuration) {
        this.config = config;
        this.inject = inject;
        this.parseDuration = parseDuration;
        this.refreshEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.refreshSlots = [];
        this.intervals = {};
    }
    DfpRefreshService.prototype.slotRefresh = function (slot, refreshInterval, initRefresh) {
        var _this = this;
        if (initRefresh === void 0) { initRefresh = false; }
        var deferred = Object(rxjs_observable_from__WEBPACK_IMPORTED_MODULE_3__["from"])([slot]).toPromise(), task = { slot: slot, deferred: deferred };
        deferred.then(function () {
            if (_this.hasSlotInterval(slot)) {
                _this.cancelInterval(slot);
            }
            if (refreshInterval) {
                _this.addSlotInterval(task, refreshInterval);
            }
        });
        if (this.config.singleRequestMode === true && initRefresh) {
            // Use a timer to handle refresh of a single request mode
            this.refreshSlots.push(slot);
            if (this.singleRequest && !this.singleRequest.closed) {
                this.singleRequest.unsubscribe();
            }
            this.singleRequest = Object(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(100).subscribe(function () {
                var pubads = googletag.pubads();
                pubads.enableSingleRequest();
                googletag.enableServices();
                _this.refreshSlots.forEach(function (s) {
                    googletag.display(s.getSlotElementId());
                });
                pubads.refresh(_this.refreshSlots);
                _this.refreshSlots = [];
            });
        }
        else {
            googletag.display(slot.getSlotElementId());
            this.refresh([task]);
        }
        return deferred;
    };
    DfpRefreshService.prototype.cancelInterval = function (slot) {
        if (!this.hasSlotInterval(slot)) {
            throw new DFPRefreshError('No interval for given slot');
        }
        var interval = this.intervals[this.slotIntervalKey(slot)];
        interval.unsubscribe();
        delete this.intervals[slot];
        return this;
    };
    DfpRefreshService.prototype.hasSlotInterval = function (slot) {
        return this.slotIntervalKey(slot) in this.intervals;
    };
    DfpRefreshService.prototype.refresh = function (tasks) {
        if (tasks === undefined) {
            googletag.cmd.push(function () {
                googletag.pubads().refresh();
            });
            return;
        }
        if (tasks.length === 0) {
            return false;
        }
        googletag.cmd.push(function () {
            googletag.pubads().refresh(tasks.map(function (task) { return task.slot; }));
            tasks.forEach(function (task) {
                Promise.resolve(task.slot);
            });
        });
    };
    DfpRefreshService.prototype.addSlotInterval = function (task, interval) {
        var _this = this;
        var parsedInterval = this.parseDuration.parseDuration(interval);
        this.validateInterval(parsedInterval, interval);
        var refresh = Object(rxjs_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(parsedInterval, parsedInterval).subscribe(function () {
            var doc = _this.inject.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]);
            if (!_this.hiddenCheck(doc.getElementById(task.slot.getSlotElementId()))) {
                _this.refresh([task]);
                _this.refreshEvent.emit(task.slot);
            }
        });
        this.intervals[this.slotIntervalKey(task.slot)] = refresh;
        return refresh;
    };
    DfpRefreshService.prototype.slotIntervalKey = function (slot) {
        return slot.getSlotId().getDomId();
    };
    DfpRefreshService.prototype.validateInterval = function (milliseconds, beforeParsing) {
        if (milliseconds < 1000) {
            console.warn('Careful: ${beforeParsing} is quite a low interval!');
        }
    };
    DfpRefreshService.prototype.hiddenCheck = function (element) {
        if (typeof (window) !== 'undefined') {
            var css = window.getComputedStyle(element);
            if (css.display === 'none') {
                return true;
            }
            else if (element.parentElement) {
                return this.hiddenCheck(element.parentElement);
            }
        }
        return false;
    };
    DfpRefreshService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_class__WEBPACK_IMPORTED_MODULE_4__["DFP_CONFIG"])),
        __metadata("design:paramtypes", [_class__WEBPACK_IMPORTED_MODULE_4__["DfpConfig"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _parse_duration_service__WEBPACK_IMPORTED_MODULE_5__["ParseDurationService"]])
    ], DfpRefreshService);
    return DfpRefreshService;
}());



/***/ }),

/***/ "./src/service/dfp.service.ts":
/*!************************************!*\
  !*** ./src/service/dfp.service.ts ***!
  \************************************/
/*! exports provided: GPT_LIBRARY_URL, DfpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GPT_LIBRARY_URL", function() { return GPT_LIBRARY_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfpService", function() { return DfpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class */ "./src/class/index.ts");
/* harmony import */ var _idle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idle.service */ "./src/service/idle.service.ts");
/* harmony import */ var _script_injector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script-injector.service */ "./src/service/script-injector.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var GPT_LIBRARY_URL = '//www.googletagservices.com/tag/js/gpt.js';
var DFPConfigurationError = /** @class */ (function (_super) {
    __extends(DFPConfigurationError, _super);
    function DFPConfigurationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DFPConfigurationError;
}(Error));
var DfpService = /** @class */ (function () {
    function DfpService(platformId, idleLoad, config, scriptInjector) {
        var _this = this;
        this.platformId = platformId;
        this.config = config;
        this.scriptInjector = scriptInjector;
        this.enableVideoAds = false;
        this.personalizedAds = false;
        this.collapseIfEmpty = true;
        this.centering = false;
        this.location = null;
        this.ppid = null;
        this.globalTargeting = null;
        this.forceSafeFrame = false;
        this.safeFrameConfig = null;
        this.loadGPT = true;
        this.loaded = false;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var win = window, googletag = win.googletag || {};
            this.dfpConfig();
            googletag.cmd = googletag.cmd || [];
            googletag.cmd.push(function () {
                _this.setup();
            });
            win.googletag = googletag;
            if (this.loadGPT) {
                var loadScript = function () {
                    _this.scriptInjector.scriptInjector(GPT_LIBRARY_URL).then(function (script) {
                        _this.loaded = true;
                    });
                };
                if (idleLoad) {
                    idleLoad.request(loadScript);
                }
                else {
                    loadScript();
                }
            }
        }
    }
    DfpService.prototype.dfpConfig = function () {
        for (var key in this.config) {
            if (this.hasOwnProperty(key)) {
                this[key] = this.config[key];
            }
        }
    };
    DfpService.prototype.addSafeFrameConfig = function (pubads) {
        if (!this.safeFrameConfig) {
            return false;
        }
        if (typeof this.safeFrameConfig !== 'object') {
            throw new DFPConfigurationError('FrameConfig must be an object');
        }
        pubads.setSafeFrameConfig(this.safeFrameConfig);
    };
    DfpService.prototype.addTargeting = function (pubads) {
        if (!this.globalTargeting) {
            return false;
        }
        if (typeof this.globalTargeting !== 'object') {
            throw new DFPConfigurationError('Targeting must be an object');
        }
        for (var key in this.globalTargeting) {
            if (this.globalTargeting.hasOwnProperty(key)) {
                pubads.setTargeting(key, this.globalTargeting[key]);
            }
        }
    };
    DfpService.prototype.addLocation = function (pubads) {
        if (!this.location) {
            return false;
        }
        if (typeof this.location === 'string') {
            pubads.setLocation(this.location);
            return;
        }
        if (!Array.isArray(this.location)) {
            throw new DFPConfigurationError('Location must be an ' +
                'array or string');
        }
        pubads.setLocation.apply(pubads, this.location);
    };
    DfpService.prototype.addPPID = function (pubads) {
        if (!this.ppid) {
            return false;
        }
        if (typeof this.ppid !== 'string') {
            throw new DFPConfigurationError('PPID must be a string');
        }
        pubads.setPublisherProvidedId(this.ppid);
    };
    DfpService.prototype.setup = function () {
        var win = window, googletag = win.googletag, pubads = googletag.pubads();
        if (this.enableVideoAds) {
            pubads.enableVideoAds();
        }
        // personalizedAds is default
        if (this.personalizedAds === false) {
            pubads.setRequestNonPersonalizedAds(1);
        }
        if (this.collapseIfEmpty) {
            pubads.collapseEmptyDivs();
        }
        // We always refresh ourselves
        pubads.disableInitialLoad();
        pubads.setForceSafeFrame(this.forceSafeFrame);
        pubads.setCentering(this.centering);
        this.addLocation(pubads);
        this.addPPID(pubads);
        this.addTargeting(pubads);
        this.addSafeFrameConfig(pubads);
        // pubads.enableSyncRendering();
        pubads.enableAsyncRendering();
        if (this.config.singleRequestMode !== true) {
            if (this.config.enableVideoAds) {
                pubads.enableVideoAds();
            }
            googletag.enableServices();
        }
    };
    DfpService.prototype.hasLoaded = function () {
        return this.loaded;
    };
    DfpService.prototype.defineTask = function (task) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            var win = window, googletag = win.googletag;
            googletag.cmd.push(task);
        }
    };
    DfpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_class__WEBPACK_IMPORTED_MODULE_2__["DFP_CONFIG"])),
        __metadata("design:paramtypes", [Object,
            _idle_service__WEBPACK_IMPORTED_MODULE_3__["IdleService"],
            _class__WEBPACK_IMPORTED_MODULE_2__["DfpConfig"],
            _script_injector_service__WEBPACK_IMPORTED_MODULE_4__["ScriptInjectorService"]])
    ], DfpService);
    return DfpService;
}());



/***/ }),

/***/ "./src/service/http-error.service.ts":
/*!*******************************************!*\
  !*** ./src/service/http-error.service.ts ***!
  \*******************************************/
/*! exports provided: HttpErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorService", function() { return HttpErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HttpErrorService = /** @class */ (function () {
    function HttpErrorService() {
        this.isErrorCode = function (code) {
            if (typeof code === 'number') {
                return !(code >= 200 && code < 300);
            }
            return code[0] !== '2';
        };
    }
    HttpErrorService.prototype.httpError = function (response, message) {
        console.log("Error (" + response.status + ") " + (message ? message : ''));
    };
    HttpErrorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HttpErrorService);
    return HttpErrorService;
}());



/***/ }),

/***/ "./src/service/idle.service.ts":
/*!*************************************!*\
  !*** ./src/service/idle.service.ts ***!
  \*************************************/
/*! exports provided: IdleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdleService", function() { return IdleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var IdleService = /** @class */ (function () {
    function IdleService(platformId, zone) {
        var win = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId) ? window : {};
        if (win.requestIdleCallback) {
            this.requestIdleCallback = function (fun) {
                return win.requestIdleCallback(fun);
            };
        }
        else {
            this.requestIdleCallback = function (fun) {
                return zone.runOutsideAngular(function () { return win.setTimeout(fun, 50); });
            };
        }
    }
    IdleService.prototype.request = function (fun) {
        this.requestIdleCallback(fun);
    };
    IdleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [Object,
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], IdleService);
    return IdleService;
}());



/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! exports provided: HttpErrorService, ParseDurationService, ScriptInjectorService, IdleLoad, DfpService, DfpIDGeneratorService, DfpRefreshService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_error_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-error.service */ "./src/service/http-error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpErrorService", function() { return _http_error_service__WEBPACK_IMPORTED_MODULE_0__["HttpErrorService"]; });

/* harmony import */ var _parse_duration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-duration.service */ "./src/service/parse-duration.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ParseDurationService", function() { return _parse_duration_service__WEBPACK_IMPORTED_MODULE_1__["ParseDurationService"]; });

/* harmony import */ var _script_injector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script-injector.service */ "./src/service/script-injector.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptInjectorService", function() { return _script_injector_service__WEBPACK_IMPORTED_MODULE_2__["ScriptInjectorService"]; });

/* harmony import */ var _idle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idle.service */ "./src/service/idle.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdleLoad", function() { return _idle_service__WEBPACK_IMPORTED_MODULE_3__["IdleService"]; });

/* harmony import */ var _dfp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dfp.service */ "./src/service/dfp.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpService", function() { return _dfp_service__WEBPACK_IMPORTED_MODULE_4__["DfpService"]; });

/* harmony import */ var _dfp_id_generator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dfp-id-generator.service */ "./src/service/dfp-id-generator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpIDGeneratorService", function() { return _dfp_id_generator_service__WEBPACK_IMPORTED_MODULE_5__["DfpIDGeneratorService"]; });

/* harmony import */ var _dfp_refresh_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dfp-refresh.service */ "./src/service/dfp-refresh.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DfpRefreshService", function() { return _dfp_refresh_service__WEBPACK_IMPORTED_MODULE_6__["DfpRefreshService"]; });










/***/ }),

/***/ "./src/service/parse-duration.service.ts":
/*!***********************************************!*\
  !*** ./src/service/parse-duration.service.ts ***!
  \***********************************************/
/*! exports provided: ParseDurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseDurationService", function() { return ParseDurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DFPDurationError = /** @class */ (function (_super) {
    __extends(DFPDurationError, _super);
    function DFPDurationError(interval) {
        return _super.call(this, "Invalid interval: '" + interval + "'ls") || this;
    }
    return DFPDurationError;
}(Error));
var ParseDurationService = /** @class */ (function () {
    function ParseDurationService() {
    }
    ParseDurationService.prototype.convertToMilliseconds = function (time, unit) {
        console.assert(/^(m?s|min|h)$/g.test(unit));
        if (unit === 'ms') {
            return time;
        }
        if (unit === 's') {
            return time * 1000;
        }
        if (unit === 'min') {
            return time * 60 * 1000;
        }
        return time * 60 * 60 * 1000;
    };
    ParseDurationService.prototype.convert = function (match) {
        var time = parseFloat(match[1]);
        if (match.length === 2) {
            return time;
        }
        return this.convertToMilliseconds(time, match[2]);
    };
    ParseDurationService.prototype.parseDuration = function (interval) {
        if (interval === undefined || interval === null) {
            throw new DFPDurationError(interval);
        }
        if (typeof interval === 'number') {
            return interval;
        }
        if (typeof interval !== 'string') {
            throw new TypeError("'" + interval + "' must be of number or string type");
        }
        var match = interval.match(/((?:\d+)?.?\d+)(m?s|min|h)?/);
        if (!match) {
            throw new DFPDurationError(interval);
        }
        return this.convert(match);
    };
    ParseDurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ParseDurationService);
    return ParseDurationService;
}());



/***/ }),

/***/ "./src/service/script-injector.service.ts":
/*!************************************************!*\
  !*** ./src/service/script-injector.service.ts ***!
  \************************************************/
/*! exports provided: ScriptInjectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptInjectorService", function() { return ScriptInjectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-error.service */ "./src/service/http-error.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScriptInjectorService = /** @class */ (function () {
    function ScriptInjectorService(httpError) {
        this.httpError = httpError;
    }
    ScriptInjectorService.prototype.completeURL = function (url) {
        var ssl = document.location.protocol === 'https:';
        return (ssl ? 'https:' : 'http:') + url;
    };
    ScriptInjectorService.prototype.createScript = function (url) {
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = this.completeURL(url);
        return script;
    };
    ScriptInjectorService.prototype.promiseScript = function (script, url) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            script.onload = function () {
                resolve(script);
            };
            script.onerror = function () {
                reject({
                    path: url,
                    loaded: false
                });
            };
        });
        promise.catch(function (response) {
            _this.httpError.httpError({ status: 400 }, "loading script \"" + url + "\"");
        });
        return promise;
    };
    ScriptInjectorService.prototype.injectScript = function (script) {
        var head = document.head || document.querySelector('head');
        head.appendChild(script);
    };
    ScriptInjectorService.prototype.scriptInjector = function (url) {
        var script = this.createScript(url);
        this.injectScript(script);
        return this.promiseScript(script, url);
    };
    ScriptInjectorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_http_error_service__WEBPACK_IMPORTED_MODULE_1__["HttpErrorService"]])
    ], ScriptInjectorService);
    return ScriptInjectorService;
}());



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./demo/main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielgbullido/Proyectos/own/ngx-dfp/demo/main.ts */"./demo/main.ts");


/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map