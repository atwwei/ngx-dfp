"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dfp_ad_directive_1 = require("./dfp-ad.directive");
var dfp_responsive_directive_1 = require("./dfp-responsive.directive");
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
    DfpSizeDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-size'
                },] },
    ];
    /** @nocollapse */
    DfpSizeDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: dfp_ad_directive_1.DfpAdDirective, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return dfp_ad_directive_1.DfpAdDirective; }),] }] },
        { type: dfp_responsive_directive_1.DfpResponsiveDirective, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [core_1.forwardRef(function () { return dfp_responsive_directive_1.DfpResponsiveDirective; }),] }] }
    ]; };
    DfpSizeDirective.propDecorators = {
        width: [{ type: core_1.Input }],
        height: [{ type: core_1.Input }]
    };
    return DfpSizeDirective;
}());
exports.DfpSizeDirective = DfpSizeDirective;
//# sourceMappingURL=dfp-size.directive.js.map