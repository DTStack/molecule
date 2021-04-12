"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var tree_1 = require("mo/components/tree");
var menu_1 = require("mo/components/menu");
var dom_1 = require("mo/common/dom");
var button_1 = require("mo/components/button");
var contextView_1 = require("mo/components/contextView");
var services_1 = require("mo/services");
var model_1 = require("mo/model");
var FolderTree = function (props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, _b = props.contextMenu, contextMenu = _b === void 0 ? [] : _b, onSelectFile = props.onSelectFile, onDropTree = props.onDropTree, filterContextMenu = props.filterContextMenu, onClickContextMenu = props.onClickContextMenu, restProps = __rest(props, ["data", "contextMenu", "onSelectFile", "onDropTree", "filterContextMenu", "onClickContextMenu"]);
    var inputRef = react_1.useRef(null);
    var contextView = contextView_1.useContextView();
    var handleRightClick = function (_a) {
        var event = _a.event, node = _a.node;
        var menuItems = filterContextMenu === null || filterContextMenu === void 0 ? void 0 : filterContextMenu(contextMenu, node.data);
        var handleOnMenuClick = function (e, item) {
            onClickContextMenu === null || onClickContextMenu === void 0 ? void 0 : onClickContextMenu(e, item, node.data, onFocus);
            contextView.hide();
        };
        contextView === null || contextView === void 0 ? void 0 : contextView.show(dom_1.getEventPosition(event), function () { return (React.createElement(menu_1.Menu, { onClick: handleOnMenuClick, data: menuItems })); });
    };
    var onFocus = function () {
        setTimeout(function () {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        });
    };
    var handleUpdateFile = function (e, node) {
        var newName = e.target.value;
        services_1.explorerService.updateFile(__assign(__assign({}, node), { name: newName }), function () {
            if ((node === null || node === void 0 ? void 0 : node.fileType) === tree_1.FileTypes.file && newName) {
                onSelectFile === null || onSelectFile === void 0 ? void 0 : onSelectFile(__assign(__assign({}, node), { name: newName }));
            }
        });
    };
    var renderTitle = function (node, index) {
        var modify = node.modify, name = node.name;
        var handleInputKeyDown = function (e) {
            if (e.keyCode === 13) {
                handleUpdateFile(e, node);
            }
        };
        var handleInputBlur = function (e) {
            handleUpdateFile(e, node);
        };
        return modify ? (React.createElement("input", { type: "text", ref: inputRef, onKeyDown: handleInputKeyDown, autoComplete: "off", onBlur: handleInputBlur })) : (name);
    };
    var renderByData = (React.createElement(React.Fragment, null,
        React.createElement(tree_1.default, __assign({ data: data, draggable: true, onSelectFile: onSelectFile, onRightClick: handleRightClick, renderTitle: renderTitle }, restProps)),
        React.createElement("div", { style: { marginTop: '100px' } },
            React.createElement(button_1.Button, { onClick: function () {
                    var _a;
                    (_a = services_1.explorerService.addRootFolder) === null || _a === void 0 ? void 0 : _a.call(services_1.explorerService, new model_1.TreeNodeModel({
                        name: "tree_" + (Math.random() * 10 + 1),
                        fileType: 'rootFolder',
                    }));
                } }, "Add Folder"),
            React.createElement(button_1.Button, { onClick: function () {
                    var _a;
                    console.log('test');
                    (_a = services_1.explorerService.newFile) === null || _a === void 0 ? void 0 : _a.call(services_1.explorerService);
                } }, "New File"))));
    var renderInitial = (React.createElement("span", null,
        "you have not yet opened a folder",
        React.createElement(button_1.Button, { onClick: function () {
                var _a;
                console.log('test');
                (_a = services_1.explorerService.addRootFolder) === null || _a === void 0 ? void 0 : _a.call(services_1.explorerService, new model_1.TreeNodeModel({
                    name: 'molecule_temp',
                    fileType: 'rootFolder',
                }));
            } }, "Add Folder")));
    return (data === null || data === void 0 ? void 0 : data.length) > 0 ? renderByData : renderInitial;
};
exports.default = react_1.memo(FolderTree);
//# sourceMappingURL=folderTree.js.map