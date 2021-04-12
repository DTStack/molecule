"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBEMModifier = exports.getBEMElement = exports.classNames = exports.prefixClaName = void 0;
var loadsh_1 = require("loadsh");
var const_1 = require("mo/common/const");
/**
 * This function help you prefix a css class name, default is molecule.
 * Example: prefixClaName('test') will return 'molecule-test',
 * prefixClaName('test', 'c') will return 'c-test'
 * @param name Default class name
 * @param prefix The prefix of class name you want to append
 */
function prefixClaName(name, prefix) {
    if (prefix === void 0) { prefix = const_1.APP_PREFIX; }
    return name ? prefix + "-" + name : '';
}
exports.prefixClaName = prefixClaName;
function classNames() {
    var e_1, _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (loadsh_1.isEmpty(args))
        return;
    var classList = [];
    try {
        for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
            var arg = args_1_1.value;
            if (!arg)
                continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classList.push("" + arg);
                continue;
            }
            if (argType === 'object') {
                if (arg.toString !== Object.prototype.toString) {
                    classList.push(arg.toString());
                    continue;
                }
                for (var key in arg) {
                    if (Object.hasOwnProperty.call(arg, key) && arg[key]) {
                        classList.push(key);
                    }
                }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (args_1_1 && !args_1_1.done && (_a = args_1.return)) _a.call(args_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return classList.join(' ');
}
exports.classNames = classNames;
/**
 * Element names may consist of Latin letters, digits, dashes and underscores.
 * CSS class is formed as block name plus two underscores plus element name: .block__elem
 * @param block
 * @param element
 */
function getBEMElement(block, element) {
    return block + "__" + element;
}
exports.getBEMElement = getBEMElement;
/**
 * CSS class is formed as block’s or element’s name plus two dashes:
 * .block--mod or .block__elem--mod and .block--color-black with .block--color-red.
 * Spaces in complicated modifiers are replaced by dash.
 * @param blockOrElement
 * @param modifier
 */
function getBEMModifier(blockOrElement, modifier) {
    return blockOrElement + "--" + modifier;
}
exports.getBEMModifier = getBEMModifier;
//# sourceMappingURL=className.js.map