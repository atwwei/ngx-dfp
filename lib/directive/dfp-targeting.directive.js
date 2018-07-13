"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var class_1 = require("../class");
var dfp_ad_directive_1 = require("./dfp-ad.directive");
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
            throw new class_1.DFPIncompleteError('dfp-targeting', 'key', true);
        }
        if (this.values.length === 0) {
            throw new class_1.DFPIncompleteError('dfp-targeting', 'value', true);
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
    DfpTargetingDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-targeting'
                },] },
    ];
    /** @nocollapse */
    DfpTargetingDirective.ctorParameters = function () { return [
        { type: dfp_ad_directive_1.DfpAdDirective, decorators: [{ type: core_1.Inject, args: [core_1.forwardRef(function () { return dfp_ad_directive_1.DfpAdDirective; }),] }] }
    ]; };
    DfpTargetingDirective.propDecorators = {
        key: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }]
    };
    return DfpTargetingDirective;
}());
exports.DfpTargetingDirective = DfpTargetingDirective;
//# sourceMappingURL=dfp-targeting.directive.js.map