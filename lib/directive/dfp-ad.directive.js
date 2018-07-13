"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var service_1 = require("../service");
var class_1 = require("../class");
var DfpRefreshEvent = /** @class */ (function () {
    function DfpRefreshEvent() {
    }
    return DfpRefreshEvent;
}());
exports.DfpRefreshEvent = DfpRefreshEvent;
var DfpAdDirective = /** @class */ (function () {
    function DfpAdDirective(platformId, elementRef, dfp, dfpIDGenerator, dfpRefresh, config, router) {
        var _this = this;
        this.platformId = platformId;
        this.elementRef = elementRef;
        this.dfp = dfp;
        this.dfpIDGenerator = dfpIDGenerator;
        this.dfpRefresh = dfpRefresh;
        this.config = config;
        this.personalizedAds = this.config.personalizedAds;
        this.afterRefresh = new core_1.EventEmitter();
        this.sizes = [];
        this.responsiveMapping = [];
        this.targetings = [];
        this.exclusions = [];
        this.scripts = [];
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.dfpRefresh.refreshEvent.subscribe(function (slot) {
                if (slot === _this.slot) {
                    _this.afterRefresh.emit({ type: 'refresh', slot: slot });
                }
            });
            if (router) {
                this.onSameNavigation = router.events.pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
                    .subscribe(function (event) {
                    if (_this.slot && !_this.refresh && _this.config.onSameNavigation === 'refresh') {
                        _this.refreshContent.call(_this);
                    }
                });
            }
        }
    }
    DfpAdDirective.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
            this.dfpIDGenerator.dfpIDGenerator(this.elementRef.nativeElement);
        }
    };
    DfpAdDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (common_1.isPlatformBrowser(this.platformId)) {
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
        if (this.personalizedAds === true) {
            this.slot.set('requestNonPersonalizedAds', 0);
            googletag.pubads().setRequestNonPersonalizedAds(0);
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
            throw new class_1.DFPIncompleteError('dfp-ad', 'dfp-size');
        }
        if (!this.adUnit) {
            throw new class_1.DFPIncompleteError('dfp-ad', 'ad-unit', true);
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
            personalizedAds: this.personalizedAds === this.config.personalizedAds,
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
    DfpAdDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-ad'
                },] },
    ];
    /** @nocollapse */
    DfpAdDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] }] },
        { type: core_1.ElementRef },
        { type: service_1.DfpService },
        { type: service_1.DfpIDGeneratorService },
        { type: service_1.DfpRefreshService },
        { type: class_1.DfpConfig, decorators: [{ type: core_1.Inject, args: [class_1.DFP_CONFIG,] }] },
        { type: router_1.Router, decorators: [{ type: core_1.Optional }] }
    ]; };
    DfpAdDirective.propDecorators = {
        adUnit: [{ type: core_1.Input }],
        clickUrl: [{ type: core_1.Input }],
        forceSafeFrame: [{ type: core_1.Input }],
        safeFrameConfig: [{ type: core_1.Input }],
        refresh: [{ type: core_1.Input }],
        personalizedAds: [{ type: core_1.Input }],
        collapseIfEmpty: [{ type: core_1.Input }],
        afterRefresh: [{ type: core_1.Output }]
    };
    return DfpAdDirective;
}());
exports.DfpAdDirective = DfpAdDirective;
//# sourceMappingURL=dfp-ad.directive.js.map