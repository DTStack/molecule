"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = exports.observableWrapper = void 0;
/**
 * Wrap an object to an observable object
 * @param object target object
 * @param callback callback when target observed
 */
function observableWrapper(object, callback) {
    Object.setPrototypeOf(object, {
        handlers: [],
        subscribe: function (onChange) {
            object.handlers.push(onChange);
        },
    });
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
                object.handlers.forEach(function (hand) {
                    return hand(target, property, value);
                });
            }
            return nextTarget;
        },
    };
    return new Proxy(object, handler);
}
exports.observableWrapper = observableWrapper;
/**
 * Observable decorator
 * @param target observable target object
 * @param name
 * @param descriptor
 */
function observable() {
    return function (target, property, descriptor) {
        try {
            var Original_1 = target;
            var decoratedConstructor = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var Obj = function () {
                    return new Original_1(args);
                };
                Obj.prototype = Original_1.prototype;
                var result = new Obj();
                return observableWrapper(result);
            };
            decoratedConstructor.prototype = Original_1.prototype;
            return decoratedConstructor;
        }
        catch (e) {
            return target;
        }
    };
}
exports.observable = observable;
//# sourceMappingURL=observable.js.map