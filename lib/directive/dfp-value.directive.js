"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dfp_targeting_directive_1 = require("./dfp-targeting.directive");
var DfpValueDirective = /** @class */ (function () {
    function DfpValueDirective(elementRef, targeting) {
        this.elementRef = elementRef;
        this.targeting = targeting;
    }
    DfpValueDirective.prototype.ngOnInit = function () {
        this.targeting.addValue(this.elementRef.nativeElement.innerText);
    };
    DfpValueDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-value'
                },] },
    ];
    /** @nocollapse */
    DfpValueDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: dfp_targeting_directive_1.DfpTargetingDirective, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return dfp_targeting_directive_1.DfpTargetingDirective; }),] }] }
    ]; };
    return DfpValueDirective;
}());
exports.DfpValueDirective = DfpValueDirective;
//# sourceMappingURL=dfp-value.directive.js.map