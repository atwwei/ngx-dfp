"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dfp_ad_directive_1 = require("./dfp-ad.directive");
var service_1 = require("../service");
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
    DfpAdResponsiveDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-ad[responsive]'
                },] },
    ];
    /** @nocollapse */
    DfpAdResponsiveDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: dfp_ad_directive_1.DfpAdDirective, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return dfp_ad_directive_1.DfpAdDirective; }),] }] },
        { type: service_1.DfpRefreshService }
    ]; };
    DfpAdResponsiveDirective.propDecorators = {
        normalizeIframe: [{ type: core_1.HostListener, args: ['window:resize',] }]
    };
    return DfpAdResponsiveDirective;
}());
exports.DfpAdResponsiveDirective = DfpAdResponsiveDirective;
//# sourceMappingURL=dfp-ad-responsive.directive.js.map