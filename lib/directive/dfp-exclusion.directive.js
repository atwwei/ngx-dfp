"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dfp_ad_directive_1 = require("./dfp-ad.directive");
var DfpExclusionDirective = /** @class */ (function () {
    function DfpExclusionDirective(elementRef, ad) {
        this.elementRef = elementRef;
        this.ad = ad;
    }
    DfpExclusionDirective.prototype.ngOnInit = function () {
        this.ad.addExclusion(this.elementRef.nativeElement.innerText);
    };
    DfpExclusionDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-exclusion'
                },] },
    ];
    /** @nocollapse */
    DfpExclusionDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: dfp_ad_directive_1.DfpAdDirective, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return dfp_ad_directive_1.DfpAdDirective; }),] }] }
    ]; };
    return DfpExclusionDirective;
}());
exports.DfpExclusionDirective = DfpExclusionDirective;
//# sourceMappingURL=dfp-exclusion.directive.js.map