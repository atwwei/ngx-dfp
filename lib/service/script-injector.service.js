"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_error_service_1 = require("./http-error.service");
var ScriptInjectorService = /** @class */ (function () {
    function ScriptInjectorService(httpError) {
        this.httpError = httpError;
    }
    ScriptInjectorService.prototype.completeURL = function (url) {
        var ssl = document.location.protocol === 'https:';
        return (ssl ? 'https:' : 'http:') + url;
    };
    ScriptInjectorService.prototype.createScript = function (url) {
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.src = this.completeURL(url);
        return script;
    };
    ScriptInjectorService.prototype.promiseScript = function (script, url) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            script.onload = function () {
                resolve(script);
            };
            script.onerror = function () {
                reject({
                    path: url,
                    loaded: false
                });
            };
        });
        promise.catch(function (response) {
            _this.httpError.httpError({ status: 400 }, "loading script \"" + url + "\"");
        });
        return promise;
    };
    ScriptInjectorService.prototype.injectScript = function (script) {
        var head = document.head || document.querySelector('head');
        head.appendChild(script);
    };
    ScriptInjectorService.prototype.scriptInjector = function (url) {
        var script = this.createScript(url);
        this.injectScript(script);
        return this.promiseScript(script, url);
    };
    ScriptInjectorService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ScriptInjectorService.ctorParameters = function () { return [
        { type: http_error_service_1.HttpErrorService }
    ]; };
    return ScriptInjectorService;
}());
exports.ScriptInjectorService = ScriptInjectorService;
//# sourceMappingURL=script-injector.service.js.map