"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var class_1 = require("./class");
var service_1 = require("./service");
var directive_1 = require("./directive");
var DIRECTIVES = [
    directive_1.DfpAdDirective, directive_1.DfpAdResponsiveDirective,
    directive_1.DfpSizeDirective,
    directive_1.DfpResponsiveDirective,
    directive_1.DfpTargetingDirective, directive_1.DfpExclusionDirective, directive_1.DfpValueDirective,
    directive_1.DfpVideoDirective,
    directive_1.DfpAudiencePixelDirective
];
var SERVICES = [
    service_1.HttpErrorService,
    service_1.ParseDurationService,
    service_1.ScriptInjectorService,
    service_1.DfpService, service_1.DfpIDGeneratorService, service_1.DfpRefreshService
];
var DfpModule = /** @class */ (function () {
    function DfpModule() {
    }
    DfpModule.forRoot = function (config) {
        return {
            ngModule: DfpModule,
            providers: (config && config.idleLoad === true ? [service_1.IdleLoad] : []).concat([
                { provide: class_1.DFP_CONFIG, useValue: config || {} }
            ])
        };
    };
    DfpModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: DIRECTIVES.slice(),
                    providers: SERVICES.slice(),
                    exports: DIRECTIVES.slice()
                },] },
    ];
    return DfpModule;
}());
exports.DfpModule = DfpModule;
//# sourceMappingURL=dfp.module.js.map