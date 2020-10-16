"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = exports.renderGroups = void 0;
require("./editor.scss");
var React = require("react");
var react_1 = require("react");
var dt_react_monaco_editor_1 = require("dt-react-monaco-editor");
var react_split_pane_1 = require("react-split-pane");
var className_1 = require("@/common/className");
var tabs_1 = require("@/components/tabs");
function renderEditorGroup(group, theme) {
    var editor = group.activeTab;
    return (React.createElement("div", { className: className_1.prefixClaName('editor-group') },
        React.createElement("div", { className: "group-header" },
            React.createElement("div", { className: "group-tabs" },
                React.createElement(tabs_1.default, { data: group.tabs })),
            React.createElement("div", { className: "group-breadcrumbs" })),
        React.createElement("div", { className: "group-container" }, 
        // Default we use monaco editor, but also you can customize by renderPane() function
        editor.renderPane ?
            editor.renderPane() :
            React.createElement(dt_react_monaco_editor_1.default, { value: editor.value, language: editor.mode, editorInstanceRef: function (editorInstance) {
                    // This assignment will trigger moleculeCtx update, and subNodes update
                    group.editorInstance = editorInstance;
                }, theme: theme.id, options: editor.options }))));
}
;
function renderGroups(groups, theme) {
    if (groups.length === 1) {
        return renderEditorGroup(groups[0], theme);
    }
    else if (groups.length > 1) {
        var averageNum = Math.round(100 / groups.length);
        return (React.createElement(react_split_pane_1.default, { split: 'vertical', defaultSize: averageNum + "%", primary: "first", allowResize: true }, groups.map(function (g) { return renderEditorGroup(g, theme); })));
    }
    return null;
}
exports.renderGroups = renderGroups;
;
function Editor(props) {
    var groups = props.groups, theme = props.theme;
    console.log('Editor render:', props);
    return (React.createElement("div", { className: className_1.prefixClaName('editor') }, props.render ? props.render() : renderGroups(groups, theme)));
}
exports.Editor = Editor;
;
exports.default = react_1.memo(Editor, function (prevProps, nextProps) {
    return prevProps.groups !== nextProps.groups ||
        prevProps.render !== nextProps.render ||
        prevProps.current !== nextProps.current;
});
//# sourceMappingURL=index.js.map