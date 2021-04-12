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
exports.EditorService = void 0;
var tsyringe_1 = require("tsyringe");
var react_1 = require("mo/react");
var model_1 = require("mo/model");
var helper_1 = require("../helper");
var EditorService = /** @class */ (function (_super) {
    __extends(EditorService, _super);
    function EditorService() {
        var _this = _super.call(this) || this;
        _this.state = tsyringe_1.container.resolve(model_1.EditorModel);
        return _this;
    }
    EditorService.prototype.getTabById = function (tabId, group) {
        var _a;
        return (_a = group.data) === null || _a === void 0 ? void 0 : _a.find(helper_1.searchById(tabId));
    };
    EditorService.prototype.updateTab = function (tab, groupId) {
        var _a = this.state.groups, groups = _a === void 0 ? [] : _a;
        var index = this.getGroupIndexById(groupId);
        if (index > -1) {
            var group = groups[index];
            if (group.data && group.data.length > 0) {
                var tabIndex = group.data.findIndex(helper_1.searchById(tab.id));
                if (tabIndex > -1) {
                    var tabData = group.data[tabIndex];
                    group.data[tabIndex] = Object.assign({}, tabData, tab);
                    this.render();
                }
            }
        }
        return tab;
    };
    EditorService.prototype.closeTab = function (tabId, groupId) {
        var _a = this.state.groups, groups = _a === void 0 ? [] : _a;
        var nextGroups = __spread(groups);
        var groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex <= -1)
            return;
        var nextGroup = nextGroups[groupIndex];
        var tabIndex = nextGroup.data.findIndex(helper_1.searchById(tabId));
        var activeTab = tabId === nextGroup.activeTab;
        if (nextGroup.data.length === 1 && tabIndex === 0) {
            var activeGroup = nextGroups[groupIndex + 1] || nextGroups[groupIndex - 1];
            nextGroups.splice(groupIndex, 1);
            this.setState({
                groups: nextGroups,
                current: (nextGroups === null || nextGroups === void 0 ? void 0 : nextGroups.length) === 0 ? undefined : activeGroup,
            });
            return;
        }
        if (tabIndex === -1)
            return;
        if (activeTab) {
            var nextTab = nextGroup.data[tabIndex + 1] || nextGroup.data[tabIndex - 1];
            nextGroup.tab = __assign({}, nextTab);
            nextGroup.activeTab = nextTab === null || nextTab === void 0 ? void 0 : nextTab.id;
        }
        nextGroup.data.splice(tabIndex, 1);
        nextGroups[groupIndex] = nextGroup;
        this.setState({
            current: nextGroup,
            groups: nextGroups,
        });
    };
    EditorService.prototype.getGroupById = function (id) {
        var groups = this.state.groups;
        return groups.find(function (group) { return group.id === id; });
    };
    EditorService.prototype.getGroupIndexById = function (id) {
        var groups = this.state.groups;
        return groups.findIndex(function (group) { return group.id === id; });
    };
    EditorService.prototype.setActive = function (groupId, tabId) {
        var _a = this.state.groups, groups = _a === void 0 ? [] : _a;
        var groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex > -1) {
            var nextGroups = __spread(groups);
            var group = nextGroups[groupIndex];
            var tab = this.getTabById(tabId, group);
            if (tab) {
                var nextGroup = __assign({}, group);
                nextGroup.tab = __assign({}, tab);
                nextGroup.activeTab = tabId;
                nextGroups[groupIndex] = nextGroup;
                this.setState({
                    current: nextGroup,
                    groups: nextGroups,
                });
            }
        }
    };
    EditorService.prototype.updateGroup = function (groupId, groupValues) {
        var _a = this.state.groups, groups = _a === void 0 ? [] : _a;
        var groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex > -1) {
            var group = Object.assign({}, groups[groupIndex], groupValues);
            groups[groupIndex] = group;
            this.render();
        }
    };
    EditorService.prototype.open = function (tab, groupId) {
        var _a = this.state, current = _a.current, _b = _a.groups, groups = _b === void 0 ? [] : _b;
        var group = current;
        if (groupId) {
            group = this.getGroupById(groupId);
        }
        if (group) {
            var tabId_1 = tab.id;
            var isExist = group === null || group === void 0 ? void 0 : group.data.find(function (tab) { return tab.id === tabId_1; });
            var groupIndex = this.getGroupIndexById(group.id);
            if (isExist && tabId_1 === (group === null || group === void 0 ? void 0 : group.activeTab))
                return;
            var currentGroup = groups[groupIndex];
            if (!isExist)
                group.data.push(tab);
            group.tab = tab;
            group.activeTab = tabId_1;
            groups[groupIndex] = __assign(__assign({}, currentGroup), { tab: tab, activeTab: tabId_1 });
        }
        else {
            group = new model_1.EditorGroupModel(groups.length + 1, tab, [tab]);
            groups.push(group);
        }
        this.setState({
            current: group,
            groups: __spread(groups),
        });
    };
    EditorService.prototype.closeAll = function (groupId) {
        var _a = this.state, current = _a.current, _b = _a.groups, groups = _b === void 0 ? [] : _b;
        var groupIndex = this.getGroupIndexById(groupId);
        if (groupIndex > -1) {
            var nextGroups = __spread(groups);
            var nextCurrentGroup = current;
            nextGroups.splice(groupIndex, 1);
            if (current && current.id === groupId) {
                nextCurrentGroup = groups[groupIndex - 1];
            }
            this.setState({
                groups: nextGroups,
                current: nextCurrentGroup,
            });
        }
    };
    EditorService.prototype.cloneGroup = function (groupId) {
        var _a = this.state, current = _a.current, _b = _a.groups, groups = _b === void 0 ? [] : _b;
        var cloneGroup = Object.assign({}, groupId ? this.getGroupById(groupId) : current);
        var ids = groups.map(function (g) { return g.id || 0; });
        var id = ids.length > 0 ? Math.max.apply(Math, __spread(ids)) + 1 : 1;
        var initialTab = __assign({}, cloneGroup.tab);
        cloneGroup.data = [initialTab];
        cloneGroup.tab = initialTab;
        cloneGroup.activeTab = initialTab.id;
        cloneGroup.id = id;
        this.setState({
            current: cloneGroup,
            groups: __spread(groups, [cloneGroup]),
        });
        return cloneGroup;
    };
    EditorService = __decorate([
        tsyringe_1.singleton(),
        __metadata("design:paramtypes", [])
    ], EditorService);
    return EditorService;
}(react_1.Component));
exports.EditorService = EditorService;
//# sourceMappingURL=editorService.js.map