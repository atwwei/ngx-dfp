"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DfpTargeting = /** @class */ (function () {
    function DfpTargeting() {
    }
    return DfpTargeting;
}());
exports.DfpTargeting = DfpTargeting;
var DfpConfig = /** @class */ (function () {
    function DfpConfig() {
    }
    return DfpConfig;
}());
exports.DfpConfig = DfpConfig;
exports.DFP_CONFIG = new core_1.InjectionToken('dfpConfig', {
    factory: function () { return new DfpConfig(); }
});
//# sourceMappingURL=dfp-config.class.js.map