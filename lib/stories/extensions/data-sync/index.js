"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendDataSync = void 0;
var mo_1 = require("mo");
exports.ExtendDataSync = {
    activate: function () {
        var newItem = {
            id: '3333',
            iconName: 'codicon-sync',
            name: '数据同步',
        };
        console.log('extend a new activity bar item:', newItem);
        mo_1.activityBarService.addBar(newItem);
    },
};
//# sourceMappingURL=index.js.map