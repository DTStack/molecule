"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var tabs_1 = require("mo/components/tabs");
var react_2 = require("@storybook/react");
var addon_knobs_1 = require("@storybook/addon-knobs");
var stories = react_2.storiesOf('Tab', module);
stories.addDecorator(addon_knobs_1.withKnobs);
stories.add('Basic Usage', function () {
    var userSetting = [
        {
            id: '1',
            label: 'User',
            renderPanel: 'this is user',
        },
        {
            id: '2',
            label: 'workSpace',
            renderPanel: 'this is a workSpace',
        },
    ];
    var tabArr = [
        {
            id: '1',
            label: 'Tab1',
            renderPanel: 'this is tab1',
        },
        {
            id: '2',
            label: 'Tab2',
            renderPanel: 'this is a tab2',
        },
        {
            id: '3',
            label: 'Tab3',
            renderPanel: 'this is a tab3',
        },
        {
            id: '4',
            label: 'Tab4',
            renderPanel: 'this is a tab4',
        },
    ];
    var _a = __read(react_1.useState(userSetting), 2), tabs = _a[0], setTabs = _a[1];
    var _b = __read(react_1.useState(tabArr), 2), tabs1 = _b[0], setTabs1 = _b[1];
    var _c = __read(react_1.useState('1'), 2), activeTab = _c[0], setActiveTab = _c[1];
    var _d = __read(react_1.useState('2'), 2), activeTab1 = _d[0], setActiveTab1 = _d[1];
    var onSelectTab = function (tabKey) {
        setActiveTab(tabKey);
    };
    var onSelectTab1 = function (tabKey) {
        setActiveTab1(tabKey);
    };
    var onMoveTab = function (data) {
        setTabs(data);
    };
    var onMoveTab1 = function (data) { return setTabs1(data); };
    var onCloseTab1 = function (targetKey) {
        var _a;
        var newActiveKey = activeTab;
        var lastIndex;
        tabs1.forEach(function (pane, i) {
            if (pane.id === targetKey) {
                lastIndex = i - 1;
            }
        });
        var newPanes = tabs1.filter(function (pane) { return pane.id !== targetKey; });
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].id;
            }
            else {
                newActiveKey = (_a = newPanes[0]) === null || _a === void 0 ? void 0 : _a.id;
            }
        }
        setTabs1(newPanes);
        setActiveTab1(newActiveKey);
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "\u7B80\u8FF0"),
        React.createElement("p", null, "Tab \u63D0\u4F9B\u7EC4\u4EF6\u591Atab\u5207\u6362\uFF1B\u62D6\u62FD"),
        React.createElement("div", null,
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B 1 - line\u6A21\u5F0F"),
            React.createElement("div", { style: { height: 300 } },
                React.createElement(tabs_1.Tabs, { data: tabs, activeTab: activeTab, onMoveTab: onMoveTab, onSelectTab: onSelectTab })),
            React.createElement("h3", null, "\u4F7F\u7528\u793A\u4F8B2 - card\u6A21\u5F0F"),
            React.createElement("div", { style: { height: 300 } },
                React.createElement(tabs_1.Tabs, { type: "card", data: tabs1, activeTab: activeTab1, onMoveTab: onMoveTab1, onSelectTab: onSelectTab1, onCloseTab: onCloseTab1 })))));
});
//# sourceMappingURL=3-Tabs.stories.js.map