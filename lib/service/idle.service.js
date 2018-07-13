"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var IdleService = /** @class */ (function () {
    function IdleService(platformId, zone) {
        var win = common_1.isPlatformBrowser(platformId) ? window : {};
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
    IdleService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    IdleService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] }] },
        { type: core_1.NgZone }
    ]; };
    return IdleService;
}());
exports.IdleService = IdleService;
//# sourceMappingURL=idle.service.js.map