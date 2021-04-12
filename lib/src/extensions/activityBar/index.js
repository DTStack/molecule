"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendActivityBar = void 0;
var mo_1 = require("mo");
var settings_1 = require("./settings");
function initActivityBar(extensionCtx) {
    settings_1.initGlobalActivityBars();
    mo_1.activityBarService.onClick(function (e, data) {
        var target = e.target;
        // activityBarService.setState({ selected: 'search' });
        console.log('activityBar onClick:', data, target);
    });
    mo_1.activityBarService.onSelect(function (e, data) {
        var target = e.target;
        console.log('activityBar onSelect:', data, target);
    });
}
exports.ExtendActivityBar = {
    activate: function (extensionCtx) {
        initActivityBar(extensionCtx);
    },
};
//# sourceMappingURL=index.js.map