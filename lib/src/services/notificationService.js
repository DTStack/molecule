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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.NotificationService = void 0;
var notification_1 = require("mo/model/notification");
var react_1 = require("mo/react");
var tsyringe_1 = require("tsyringe");
var helper_1 = require("./helper");
var NotificationService = /** @class */ (function (_super) {
    __extends(NotificationService, _super);
    function NotificationService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(notification_1.NotificationModel);
        return _this;
    }
    NotificationService.prototype.showHideNotifications = function () {
        this.setState(__assign(__assign({}, this.state), { showNotifications: !this.state.showNotifications }));
    };
    NotificationService.prototype.updateNotification = function (item) {
        var _a = this.state.data, data = _a === void 0 ? [] : _a;
        if (data.length > -1) {
            var index = data.findIndex(helper_1.searchById(item.id));
            if (index > -1) {
                var original = data[index];
                data[index] = Object.assign(original, item);
                this.setState(__assign(__assign({}, this.state), { data: __spread(data) }));
                return data[index];
            }
        }
        return null;
    };
    NotificationService.prototype.removeNotification = function (id) {
        var _a = this.state.data, data = _a === void 0 ? [] : _a;
        if (data.length > -1) {
            var index = data.findIndex(helper_1.searchById(id));
            if (index > -1) {
                data.splice(index, 1);
                this.setState(__assign(__assign({}, this.state), { data: __spread(data) }));
            }
        }
    };
    NotificationService.prototype.addNotification = function (item) {
        var _a = this.state.data, data = _a === void 0 ? [] : _a;
        if (item) {
            if (item.id === undefined)
                item.id = data.length;
            item.status = notification_1.NotificationStatus.WaitRead;
            var arr = __spread(data, [item]);
            this.setState(__assign(__assign({}, this.state), { data: arr }));
            return item;
        }
        return null;
    };
    NotificationService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}(react_1.Component));
exports.NotificationService = NotificationService;
//# sourceMappingURL=notificationService.js.map