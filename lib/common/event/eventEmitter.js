"use strict";
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
exports.EventEmitter = void 0;
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this._events = new Map();
    }
    EventEmitter.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var events = this._events.get(name);
        if (events && events.length > 0) {
            // The log for development
            events.forEach(function (callEvent) {
                callEvent.apply(void 0, __spread(args));
            });
        }
    };
    EventEmitter.prototype.subscribe = function (name, callback) {
        var _this = this;
        if (Array.isArray(name)) {
            name.forEach(function (key) {
                _this.assignEvent(key, callback);
            });
        }
        else {
            this.assignEvent(name, callback);
        }
    };
    EventEmitter.prototype.unsubscribe = function (name) {
        var _this = this;
        if (Array.isArray(name)) {
            name.forEach(function (key) {
                _this._events.delete(key);
            });
        }
        else {
            this._events.delete(name);
        }
    };
    EventEmitter.prototype.assignEvent = function (name, callback) {
        var event = this._events.get(name);
        if (event) {
            event.push(callback);
        }
        else {
            this._events.set(name, [callback]);
        }
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
//# sourceMappingURL=eventEmitter.js.map