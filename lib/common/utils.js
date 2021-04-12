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
exports.mergeFunctions = exports.cloneInstance = void 0;
/**
 * Clone a new object by an object instance
 * @param origin Original object instance
 */
function cloneInstance(origin) {
    try {
        var prototypes_1 = Object.getPrototypeOf(origin) || {};
        Object.keys(prototypes_1).forEach(function (prop) {
            if (typeof prototypes_1[prop] === 'function') {
                prototypes_1[prop].bind(origin);
            }
        });
        return __assign(__assign({}, origin), prototypes_1);
    }
    catch (e) {
        console.error('Function cloneInstance error:', e);
    }
}
exports.cloneInstance = cloneInstance;
/**
 * Merge multiple functions to one function
 * @param funcs
 */
function mergeFunctions() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        funcs.filter(function (fn) { return !!fn; }).forEach(function (fn) { return fn === null || fn === void 0 ? void 0 : fn.apply(void 0, __spread(args)); });
    };
}
exports.mergeFunctions = mergeFunctions;
//# sourceMappingURL=utils.js.map