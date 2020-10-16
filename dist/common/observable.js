"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = void 0;
function observable(object, callback) {
    object.handlers = [];
    object.observe = function (handler) {
        object.handlers.push(handler);
    };
    var handler = {
        get: function (target, property, receiver) {
            if (target.hasOwnProperty(property)) {
                try {
                    return new Proxy(target[property], handler);
                }
                catch (err) {
                    return Reflect.get(target, property, receiver);
                }
            }
            return Reflect.get(target, property, receiver);
        },
        set: function (target, property, value, receiver) {
            console.log('set value:', target, property, value, receiver);
            var nextTarget = target;
            if (target.hasOwnProperty(property)) {
                try {
                    Reflect.set(target, property, value, receiver);
                    nextTarget = new Proxy(target[property], handler);
                }
                catch (err) {
                    nextTarget = Reflect.set(target, property, value, receiver);
                }
            }
            else {
                nextTarget = Reflect.set(target, property, value, receiver);
            }
            if (callback) {
                callback(target, property, value);
            }
            if (object.handlers) {
                object.handlers.forEach(function (hand) { return hand(target, property, value); });
            }
            return nextTarget;
        },
    };
    return new Proxy(object, handler);
}
exports.observable = observable;
//# sourceMappingURL=observable.js.map