"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.scss");
var modal_1 = require("./modal");
var confirm_1 = require("./confirm");
function modalWarn(props) {
    return confirm_1.default(confirm_1.withWarn(props));
}
var Modal = modal_1.default;
Modal.warning = modalWarn;
Modal.warn = modalWarn;
Modal.confirm = function confirmFn(props) {
    return confirm_1.default(confirm_1.withConfirm(props));
};
Modal.destroyAll = function destroyAllFn() {
    while (modal_1.destroyFns.length) {
        var close_1 = modal_1.destroyFns.pop();
        if (close_1) {
            close_1();
        }
    }
};
exports.default = Modal;
//# sourceMappingURL=index.js.map