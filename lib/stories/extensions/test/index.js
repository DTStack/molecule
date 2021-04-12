"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendTestPane = void 0;
var React = require("react");
var mo_1 = require("mo");
var testPane_1 = require("./testPane");
exports.ExtendTestPane = {
    activate: function () {
        var testSidePane = {
            id: 'testPane',
            title: 'TEST',
            render: function () {
                return React.createElement(testPane_1.default, null);
            },
        };
        mo_1.sidebarService.push(testSidePane);
        var newItem = {
            id: 'ActivityBarTestPane',
            iconName: 'codicon-beaker',
            name: '测试',
        };
        mo_1.activityBarService.addBar(newItem);
        mo_1.activityBarService.onSelect(function (e, item) {
            if (item.id === newItem.id) {
                mo_1.sidebarService.setState({
                    current: testSidePane.id,
                });
            }
        });
    },
};
//# sourceMappingURL=index.js.map