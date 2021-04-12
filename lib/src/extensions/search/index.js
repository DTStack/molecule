"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendSearch = void 0;
var React = require("react");
var mo_1 = require("mo");
var searchPane_1 = require("./searchPane");
function init() {
    var searchSidePane = {
        id: 'searchPane',
        title: 'SEARCH',
        render: function () {
            return React.createElement(searchPane_1.default, null);
        },
    };
    mo_1.sidebarService.push(searchSidePane);
    var searchActivityItem = {
        id: 'search',
        name: 'Search',
        iconName: 'codicon-search',
    };
    mo_1.activityBarService.addBar(searchActivityItem);
    mo_1.activityBarService.onSelect(function (e, item) {
        if (item.id === searchActivityItem.id) {
            mo_1.sidebarService.setState({
                current: searchSidePane.id,
            });
        }
    });
    mo_1.editorService.onEvent(mo_1.EditorEvent.OnMoveTab, function (data) {
        console.log(data);
    });
    mo_1.editorService.onEvent(mo_1.EditorEvent.OnSelectTab, function (tabKey) {
        console.log("selected tabKey " + tabKey);
    });
    mo_1.editorService.onEvent(mo_1.EditorEvent.OnCloseTab, function (tabKey) {
        console.log("closed tabkey " + tabKey);
    });
}
exports.ExtendSearch = {
    activate: function (extensionCtx) {
        init();
    },
};
//# sourceMappingURL=index.js.map