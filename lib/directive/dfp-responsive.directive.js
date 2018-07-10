"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dfp_ad_directive_1 = require("./dfp-ad.directive");
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
    DfpResponsiveDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-responsive'
                },] },
    ];
    /** @nocollapse */
    DfpResponsiveDirective.ctorParameters = function () { return [
        { type: dfp_ad_directive_1.DfpAdDirective, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return dfp_ad_directive_1.DfpAdDirective; }),] }] }
    ]; };
    DfpResponsiveDirective.propDecorators = {
        viewport: [{ type: core_1.Input }],
        adSizes: [{ type: core_1.Input }],
        viewWidth: [{ type: core_1.Input }],
        viewHeight: [{ type: core_1.Input }]
    };
    return DfpResponsiveDirective;
}());
exports.DfpResponsiveDirective = DfpResponsiveDirective;
//# sourceMappingURL=dfp-responsive.directive.js.map