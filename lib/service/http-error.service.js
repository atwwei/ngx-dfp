"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HttpErrorService = /** @class */ (function () {
    function HttpErrorService() {
        this.isErrorCode = function (code) {
            if (typeof code === 'number') {
                return !(code >= 200 && code < 300);
            }
            return code[0] !== '2';
        };
    }
    HttpErrorService.prototype.httpError = function (response, message) {
        console.log("Error (" + response.status + ") " + (message ? message : ''));
    };
    HttpErrorService.decorators = [
        { type: core_1.Injectable },
    ];
    return HttpErrorService;
}());
exports.HttpErrorService = HttpErrorService;
//# sourceMappingURL=http-error.service.js.map