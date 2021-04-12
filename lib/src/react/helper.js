"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneReactChildren = void 0;
var react_1 = require("react");
/**
 * Clone react children props
 * @param children ReactNode
 * @param props Parent props
 */
function cloneReactChildren(children, props) {
    return react_1.Children.map(children, function (child) {
        if (react_1.isValidElement(child)) {
            return react_1.cloneElement(child, props);
        }
        return child;
    });
}
exports.cloneReactChildren = cloneReactChildren;
//# sourceMappingURL=helper.js.map