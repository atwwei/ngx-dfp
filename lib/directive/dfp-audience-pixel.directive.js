"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var DfpAudiencePixelDirective = /** @class */ (function () {
    function DfpAudiencePixelDirective(platformId, elementRef) {
        this.platformId = platformId;
        this.elementRef = elementRef;
    }
    DfpAudiencePixelDirective.prototype.ngOnInit = function () {
        if (common_1.isPlatformBrowser(this.platformId)) {
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
    DfpAudiencePixelDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'dfp-audience-pixel'
                },] },
    ];
    /** @nocollapse */
    DfpAudiencePixelDirective.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] }] },
        { type: core_1.ElementRef }
    ]; };
    DfpAudiencePixelDirective.propDecorators = {
        adUnit: [{ type: core_1.Input }],
        segmentId: [{ type: core_1.Input }],
        ppid: [{ type: core_1.Input }]
    };
    return DfpAudiencePixelDirective;
}());
exports.DfpAudiencePixelDirective = DfpAudiencePixelDirective;
//# sourceMappingURL=dfp-audience-pixel.directive.js.map