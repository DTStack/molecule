"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var React = require("react");
var explore_1 = require("./explore");
function initActivityBar(moleculeCtx) {
    var folderFeat = {
        id: 'active-explorer',
        name: 'Explore',
        iconName: 'codicon-files',
        onClick: function (e, options) {
        },
    };
    moleculeCtx.activityBar.push([folderFeat]);
    moleculeCtx.activityBar.onSelect('folder');
    moleculeCtx.activityBar.onClick = function (e) {
        console.log('moleculeCtx onClick ', e);
    };
}
function initSideBar(moleculeCtx) {
    moleculeCtx.sidebar.panes.push({
        id: 'explore',
        name: 'EXPLORER',
        render: function () {
            return React.createElement(explore_1.Explorer, null);
        },
    });
}
function activate(moleculeCtx) {
    initActivityBar(moleculeCtx);
    initSideBar(moleculeCtx);
}
exports.activate = activate;
//# sourceMappingURL=index.js.map