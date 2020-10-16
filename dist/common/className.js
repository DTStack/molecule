"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefixClaName = void 0;
var const_1 = require("@/common/const");
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
//# sourceMappingURL=className.js.map