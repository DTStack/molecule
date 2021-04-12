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
exports.GlobalEvent = exports.EventBus = void 0;
var eventEmitter_1 = require("mo/common/event/eventEmitter");
exports.EventBus = new eventEmitter_1.EventEmitter();
var GlobalEvent = /** @class */ (function () {
    function GlobalEvent() {
    }
    /**
     * Subscribe the service event
     * @param name Event name
     * @param callback Callback function
     */
    GlobalEvent.prototype.subscribe = function (name, callback) {
        exports.EventBus.subscribe(name, callback);
    };
    /**
     * Emit the service event
     * @param name Event name
     * @param args Arguments
     */
    GlobalEvent.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        exports.EventBus.emit.apply(exports.EventBus, __spread([name], args));
    };
    return GlobalEvent;
}());
exports.GlobalEvent = GlobalEvent;
//# sourceMappingURL=eventBus.js.map