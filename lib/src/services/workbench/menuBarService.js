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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
exports.MenuBarService = void 0;
var loadsh_1 = require("loadsh");
var menuBar_1 = require("mo/model/workbench/menuBar");
var react_1 = require("mo/react");
var tsyringe_1 = require("tsyringe");
var MenuBarService = /** @class */ (function (_super) {
    __extends(MenuBarService, _super);
    function MenuBarService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(menuBar_1.MenuBarModel);
        return _this;
    }
    MenuBarService.prototype.showHide = function () {
        this.setState({
            hidden: !this.state.hidden,
        });
    };
    MenuBarService.prototype.push = function (item) {
        var original = this.state.data || [];
        if (Array.isArray(item)) {
            original = original.concat(item);
        }
        else {
            original.push(item);
        }
    };
    MenuBarService.prototype.remove = function (index) {
        this.state.data.splice(index, 1);
    };
    MenuBarService.prototype.update = function (menuId, menuItem) {
        var e_1, _a;
        if (menuItem === void 0) { menuItem = {}; }
        var data = this.state.data;
        var currentMenuItem = this.getMenuById(menuId, data);
        var deepData = loadsh_1.cloneDeep(data);
        try {
            for (var deepData_1 = __values(deepData), deepData_1_1 = deepData_1.next(); !deepData_1_1.done; deepData_1_1 = deepData_1.next()) {
                var menu = deepData_1_1.value;
                this.updateMenu(menu, currentMenuItem, menuItem);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (deepData_1_1 && !deepData_1_1.done && (_a = deepData_1.return)) _a.call(deepData_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.setState({ data: deepData });
    };
    MenuBarService.prototype.getMenuById = function (menuId, data) {
        var queue = __spread(data);
        while (queue.length) {
            var menu = queue.shift();
            if (menu.id === menuId)
                return menu;
            queue.push.apply(queue, __spread((menu.data || [])));
        }
    };
    MenuBarService.prototype.updateMenu = function (menu, currentMenuItem, menuItem) {
        var e_2, _a;
        var _b;
        if ((menu === null || menu === void 0 ? void 0 : menu.id) === (currentMenuItem === null || currentMenuItem === void 0 ? void 0 : currentMenuItem.id)) {
            for (var key in menuItem) {
                if (menuItem.hasOwnProperty(key)) {
                    delete menu[key];
                    menu[key] = menuItem[key];
                }
            }
        }
        else {
            if ((_b = menu === null || menu === void 0 ? void 0 : menu.data) === null || _b === void 0 ? void 0 : _b.length) {
                try {
                    for (var _c = __values(menu === null || menu === void 0 ? void 0 : menu.data), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var item = _d.value;
                        this.updateMenu(item, currentMenuItem, menuItem);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
    };
    MenuBarService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], MenuBarService);
    return MenuBarService;
}(react_1.Component));
exports.MenuBarService = MenuBarService;
//# sourceMappingURL=menuBarService.js.map