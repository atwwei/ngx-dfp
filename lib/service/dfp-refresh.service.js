"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var timer_1 = require("rxjs/observable/timer");
var from_1 = require("rxjs/observable/from");
var class_1 = require("../class");
var parse_duration_service_1 = require("./parse-duration.service");
var DFPRefreshError = /** @class */ (function (_super) {
    __extends(DFPRefreshError, _super);
    function DFPRefreshError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DFPRefreshError;
}(Error));
var DfpRefreshService = /** @class */ (function () {
    function DfpRefreshService(config, inject, parseDuration) {
        this.config = config;
        this.inject = inject;
        this.parseDuration = parseDuration;
        this.refreshEvent = new core_1.EventEmitter();
        this.refreshSlots = [];
        this.intervals = {};
    }
    DfpRefreshService.prototype.slotRefresh = function (slot, refreshInterval, initRefresh) {
        var _this = this;
        if (initRefresh === void 0) { initRefresh = false; }
        var deferred = from_1.from([slot]).toPromise(), task = { slot: slot, deferred: deferred };
        deferred.then(function () {
            if (_this.hasSlotInterval(slot)) {
                _this.cancelInterval(slot);
            }
            if (refreshInterval) {
                _this.addSlotInterval(task, refreshInterval);
            }
        });
        if (this.config.singleRequestMode === true && initRefresh) {
            // Use a timer to handle refresh of a single request mode
            this.refreshSlots.push(slot);
            if (this.singleRequest && !this.singleRequest.closed) {
                this.singleRequest.unsubscribe();
            }
            this.singleRequest = timer_1.timer(100).subscribe(function () {
                var pubads = googletag.pubads();
                pubads.enableSingleRequest();
                googletag.enableServices();
                _this.refreshSlots.forEach(function (s) {
                    googletag.display(s.getSlotElementId());
                });
                pubads.refresh(_this.refreshSlots);
                _this.refreshSlots = [];
            });
        }
        else {
            googletag.display(slot.getSlotElementId());
            this.refresh([task]);
        }
        return deferred;
    };
    DfpRefreshService.prototype.cancelInterval = function (slot) {
        if (!this.hasSlotInterval(slot)) {
            throw new DFPRefreshError('No interval for given slot');
        }
        var interval = this.intervals[this.slotIntervalKey(slot)];
        interval.unsubscribe();
        delete this.intervals[slot];
        return this;
    };
    DfpRefreshService.prototype.hasSlotInterval = function (slot) {
        return this.slotIntervalKey(slot) in this.intervals;
    };
    DfpRefreshService.prototype.refresh = function (tasks) {
        if (tasks === undefined) {
            googletag.cmd.push(function () {
                googletag.pubads().refresh();
            });
            return;
        }
        if (tasks.length === 0) {
            return false;
        }
        googletag.cmd.push(function () {
            googletag.pubads().refresh(tasks.map(function (task) { return task.slot; }));
            tasks.forEach(function (task) {
                Promise.resolve(task.slot);
            });
        });
    };
    DfpRefreshService.prototype.addSlotInterval = function (task, interval) {
        var _this = this;
        var parsedInterval = this.parseDuration.parseDuration(interval);
        this.validateInterval(parsedInterval, interval);
        var refresh = timer_1.timer(parsedInterval, parsedInterval).subscribe(function () {
            var doc = _this.inject.get(common_1.DOCUMENT);
            if (!_this.hiddenCheck(doc.getElementById(task.slot.getSlotElementId()))) {
                _this.refresh([task]);
                _this.refreshEvent.emit(task.slot);
            }
        });
        this.intervals[this.slotIntervalKey(task.slot)] = refresh;
        return refresh;
    };
    DfpRefreshService.prototype.slotIntervalKey = function (slot) {
        return slot.getSlotId().getDomId();
    };
    DfpRefreshService.prototype.validateInterval = function (milliseconds, beforeParsing) {
        if (milliseconds < 1000) {
            console.warn('Careful: ${beforeParsing} is quite a low interval!');
        }
    };
    DfpRefreshService.prototype.hiddenCheck = function (element) {
        if (typeof (window) !== 'undefined') {
            var css = window.getComputedStyle(element);
            if (css.display === 'none') {
                return true;
            }
            else if (element.parentElement) {
                return this.hiddenCheck(element.parentElement);
            }
        }
        return false;
    };
    DfpRefreshService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    DfpRefreshService.ctorParameters = function () { return [
        { type: class_1.DfpConfig, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [class_1.DFP_CONFIG,] }] },
        { type: core_1.Injector },
        { type: parse_duration_service_1.ParseDurationService }
    ]; };
    return DfpRefreshService;
}());
exports.DfpRefreshService = DfpRefreshService;
//# sourceMappingURL=dfp-refresh.service.js.map