"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusBarModel = exports.StatusBarEvent = exports.STATUS_EDITOR_INFO = exports.STATUS_PROBLEMS = void 0;
var React = require("react");
var tsyringe_1 = require("tsyringe");
var editor_1 = require("mo/workbench/statusBar/editor");
var problems_1 = require("mo/workbench/statusBar/problems");
exports.STATUS_PROBLEMS = {
    id: 'MoProblems',
    sortIndex: 1,
    data: {
        warnings: 0,
        errors: 0,
        infos: 0,
    },
    name: 'Problems',
    render: function (item) { return React.createElement(problems_1.ProblemsMarkers, __assign({}, item)); },
};
exports.STATUS_EDITOR_INFO = {
    id: 'MoEditorInfo',
    sortIndex: 2,
    data: {
        ln: 0,
        col: 0,
    },
    name: 'Go to Line/Column',
    render: function (item) { return React.createElement(editor_1.EditorMarkers, __assign({}, item)); },
};
/**
 * The activity bar event definition
 */
var StatusBarEvent;
(function (StatusBarEvent) {
    /**
     * Selected an activity bar
     */
    StatusBarEvent["onClick"] = "statusBar.onClick";
    /**
     * Activity bar data changed
     */
    StatusBarEvent["DataChanged"] = "statusBar.data";
})(StatusBarEvent = exports.StatusBarEvent || (exports.StatusBarEvent = {}));
var StatusBarModel = /** @class */ (function () {
    function StatusBarModel(leftItems, rightItems, hidden) {
        if (leftItems === void 0) { leftItems = [exports.STATUS_PROBLEMS]; }
        if (rightItems === void 0) { rightItems = [exports.STATUS_EDITOR_INFO]; }
        if (hidden === void 0) { hidden = false; }
        this.leftItems = [];
        this.rightItems = [];
        this.hidden = false;
        this.leftItems = leftItems;
        this.rightItems = rightItems;
        this.hidden = hidden;
    }
    StatusBarModel = __decorate([
        tsyringe_1.injectable(),
        __metadata("design:paramtypes", [Array, Array, Object])
    ], StatusBarModel);
    return StatusBarModel;
}());
exports.StatusBarModel = StatusBarModel;
//# sourceMappingURL=statusBar.js.map