"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendStatusBar = void 0;
var services_1 = require("mo/services");
function init() {
    services_1.statusBarService.onClick(function (e, item) {
        console.log('statusBarService:', e, item);
    });
}
exports.ExtendStatusBar = {
    activate: function (extensionCtx) {
        init();
    },
};
//# sourceMappingURL=index.js.map