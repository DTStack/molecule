"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var monaco_1 = require("mo/components/monaco");
var scrollable_1 = require("mo/components/scrollable");
var tabs_1 = require("mo/components/tabs");
var React = require("react");
var react_1 = require("react");
var base_1 = require("./base");
var action_1 = require("./action");
var breadcrumb_1 = require("./breadcrumb");
var menu_1 = require("mo/components/menu");
var contextView_1 = require("mo/components/contextView");
var dom_1 = require("mo/common/dom");
function EditorGroup(props) {
    var _a, _b;
    var id = props.id, data = props.data, _c = props.tab, tab = _c === void 0 ? {} : _c, currentGroup = props.currentGroup, _d = props.actions, actions = _d === void 0 ? [] : _d, _e = props.menu, menu = _e === void 0 ? [] : _e, onMoveTab = props.onMoveTab, onCloseTab = props.onCloseTab, onSelectTab = props.onSelectTab, onTabContextMenu = props.onTabContextMenu, onSplitEditorRight = props.onSplitEditorRight, onUpdateEditorIns = props.onUpdateEditorIns;
    var isActiveGroup = id === (currentGroup === null || currentGroup === void 0 ? void 0 : currentGroup.id);
    var contextView = contextView_1.useContextView({
        render: function () { return React.createElement(menu_1.Menu, { data: menu }); },
    });
    var handleTabContextMenu = function (e, item) {
        e.preventDefault();
        contextView.show(dom_1.getEventPosition(e));
        onTabContextMenu === null || onTabContextMenu === void 0 ? void 0 : onTabContextMenu(e, item);
    };
    react_1.useEffect(function () {
        return function cleanup() {
            contextView === null || contextView === void 0 ? void 0 : contextView.dispose();
        };
    });
    return (React.createElement("div", { className: base_1.groupClassName },
        React.createElement("div", { className: base_1.groupHeaderClassName },
            React.createElement("div", { className: base_1.groupTabsClassName },
                React.createElement(scrollable_1.Scrollable, null,
                    React.createElement(tabs_1.Tabs, { editable: true, type: "card", data: data, onMoveTab: onMoveTab, style: { overflow: 'hidden' }, onSelectTab: onSelectTab, onContextMenu: handleTabContextMenu, activeTab: isActiveGroup ? tab.id : '', onCloseTab: onCloseTab }))),
            React.createElement(action_1.default, { isActiveGroup: isActiveGroup, actions: actions, menu: menu, onSplitEditorRight: onSplitEditorRight })),
        React.createElement(breadcrumb_1.default, { breadcrumbs: tab.breadcrumb }),
        React.createElement("div", { className: base_1.groupContainerClassName }, 
        // Default we use monaco editor, but also you can customize by renderPanel() function
        tab.renderPanel || (React.createElement(monaco_1.default, { options: {
                value: (_a = tab.data) === null || _a === void 0 ? void 0 : _a.value,
                language: (_b = tab.data) === null || _b === void 0 ? void 0 : _b.language,
                automaticLayout: true,
            }, editorInstanceRef: function (editorInstance) {
                // This assignment will trigger moleculeCtx update, and subNodes update
                onUpdateEditorIns === null || onUpdateEditorIns === void 0 ? void 0 : onUpdateEditorIns(editorInstance, id);
            } })))));
}
exports.default = react_1.memo(EditorGroup);
//# sourceMappingURL=group.js.map