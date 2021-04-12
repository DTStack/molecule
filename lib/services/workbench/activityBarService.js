"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityBarService = void 0;
var tsyringe_1 = require("tsyringe");
var component_1 = require("mo/react/component");
var activityBar_1 = require("mo/model/workbench/activityBar");
var ActivityBarService = /** @class */ (function (_super) {
    __extends(ActivityBarService, _super);
    function ActivityBarService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(activityBar_1.ActivityBarModel);
        return _this;
    }
    ActivityBarService.prototype.reset = function () {
        this.setState({
            data: [],
            selected: '',
        });
    };
    ActivityBarService.prototype.addBar = function (data) {
        var next = __spread(this.state.data);
        if (Array.isArray(data)) {
            next = next === null || next === void 0 ? void 0 : next.concat(data);
        }
        else {
            next === null || next === void 0 ? void 0 : next.push(data);
        }
        this.setState({
            data: next,
        });
    };
    ActivityBarService.prototype.remove = function (index) {
        if (this.state.data) {
            var data = this.state.data;
            data.splice(index, 1);
        }
    };
    // ====== The belows for subscribe activity bar events ======
    ActivityBarService.prototype.onClick = function (callback) {
        this.subscribe(activityBar_1.ActivityBarEvent.OnClick, callback);
    };
    ActivityBarService.prototype.onSelect = function (callback) {
        this.subscribe(activityBar_1.ActivityBarEvent.Selected, callback);
    };
    ActivityBarService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], ActivityBarService);
    return ActivityBarService;
}(component_1.Component));
exports.ActivityBarService = ActivityBarService;
//# sourceMappingURL=activityBarService.js.map