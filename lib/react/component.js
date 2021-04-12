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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var event_1 = require("mo/common/event");
var componentEvents;
(function (componentEvents) {
    componentEvents["Update"] = "Component.Update";
})(componentEvents || (componentEvents = {}));
var Component = /** @class */ (function (_super) {
    __extends(Component, _super);
    function Component() {
        var _this = _super.call(this) || this;
        _this._event = new event_1.EventEmitter();
        return _this;
    }
    /**
     * Set the state values, and notify the view component to re render
     * @param values update target state values
     */
    Component.prototype.setState = function (values, callback) {
        var nextState = Object.assign(this.state, values);
        this.render(nextState);
        callback === null || callback === void 0 ? void 0 : callback(this.state, nextState);
    };
    /**
     * Initiative notify the component to render the view by the state
     * @param nextState
     */
    Component.prototype.render = function (nextState) {
        this._event.emit(componentEvents.Update, this.state, nextState);
    };
    Component.prototype.onUpdateState = function (callback) {
        this._event.subscribe(componentEvents.Update, callback);
    };
    Component.prototype.getState = function () {
        return this.state;
    };
    Component.prototype.onEvent = function (name, callback) {
        this.subscribe(name, callback);
    };
    return Component;
}(event_1.GlobalEvent));
exports.Component = Component;
//# sourceMappingURL=component.js.map