"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DfpIDGeneratorService = /** @class */ (function () {
    function DfpIDGeneratorService() {
        this.generatedIDs = {};
    }
    DfpIDGeneratorService.prototype.generateID = function () {
        var id = null;
        do {
            var number = Math.random().toString().slice(2);
            id = 'gpt-ad-' + number;
        } while (id in this.generatedIDs);
        this.generatedIDs[id] = true;
        return id;
    };
    DfpIDGeneratorService.prototype.dfpIDGenerator = function (element) {
        if (element && element.id && !(element.id in this.generatedIDs)) {
            return element.id;
        }
        var id = this.generateID();
        if (element) {
            element.id = id;
        }
        return id;
    };
    DfpIDGeneratorService.prototype.isTaken = function (id) {
        return id in this.generatedIDs;
    };
    DfpIDGeneratorService.prototype.isUnique = function (id) {
        return !this.isTaken(id);
    };
    DfpIDGeneratorService.decorators = [
        { type: core_1.Injectable },
    ];
    return DfpIDGeneratorService;
}());
exports.DfpIDGeneratorService = DfpIDGeneratorService;
//# sourceMappingURL=dfp-id-generator.service.js.map