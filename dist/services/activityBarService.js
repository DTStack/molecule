"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityBarService = void 0;
var ActivityBarService = /** @class */ (function () {
    function ActivityBarService(data, selected) {
        if (data === void 0) { data = []; }
        if (selected === void 0) { selected = ''; }
        this.data = data;
        this.selected = selected;
    }
    ActivityBarService.prototype.onSelect = function (key, item) {
        this.selected = key;
    };
    ActivityBarService.prototype.onClick = function (event, item) {
    };
    ActivityBarService.prototype.push = function (data) {
        if (Array.isArray(data)) {
            this.data = this.data.concat(data);
            // this.data = [...this.data, ...data];
        }
        else {
            this.data.push(data);
            // this.data = [...this.data, data];
        }
    };
    ActivityBarService.prototype.remove = function (index) {
        this.data.splice(index, 1);
    };
    ActivityBarService.prototype.update = function () {
        // this.data.
    };
    ;
    ActivityBarService.prototype.get = function (id) {
    };
    return ActivityBarService;
}());
exports.ActivityBarService = ActivityBarService;
//# sourceMappingURL=activityBarService.js.map