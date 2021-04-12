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
var dom_1 = require("mo/common/dom");
var tree_1 = require("mo/components/tree");
var menu_1 = require("mo/components/menu");
var dom_2 = require("mo/common/dom");
var button_1 = require("mo/components/button");
var contextView_1 = require("mo/components/contextView");
var contextMenu_1 = require("mo/components/contextMenu");
var services_1 = require("mo/services");
var model_1 = require("mo/model");
var FolderTree = function (props) {
    var _a = props.data, data = _a === void 0 ? [] : _a, _b = props.contextMenu, contextMenu = _b === void 0 ? [] : _b, _c = props.folderPanelContextMenu, folderPanelContextMenu = _c === void 0 ? [] : _c, onSelectFile = props.onSelectFile, onDropTree = props.onDropTree, filterContextMenu = props.filterContextMenu, onClickContextMenu = props.onClickContextMenu, getInputEvent = props.getInputEvent, restProps = __rest(props, ["data", "contextMenu", "folderPanelContextMenu", "onSelectFile", "onDropTree", "filterContextMenu", "onClickContextMenu", "getInputEvent"]);
    var inputRef = react_1.useRef(null);
    var contextView = contextView_1.useContextView();
    var contextViewMenu;
    var onClickMenuItem = react_1.useCallback(function (e, item) {
        onClickContextMenu === null || onClickContextMenu === void 0 ? void 0 : onClickContextMenu(e, item);
        contextViewMenu === null || contextViewMenu === void 0 ? void 0 : contextViewMenu.dispose();
    }, [folderPanelContextMenu]);
    var renderContextMenu = function () { return (React.createElement(menu_1.Menu, { onClick: onClickMenuItem, data: folderPanelContextMenu })); };
    react_1.useEffect(function () {
        if (folderPanelContextMenu.length > 0) {
            contextViewMenu = contextMenu_1.useContextMenu({
                anchor: dom_1.select('.samplefolder'),
                render: renderContextMenu,
            });
        }
        return function cleanup() {
            contextViewMenu === null || contextViewMenu === void 0 ? void 0 : contextViewMenu.dispose();
        };
    });
    var onFocus = function () {
        setTimeout(function () {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        });
    };
    var setInputValue = function (val) {
        setTimeout(function () {
            if (inputRef.current) {
                inputRef.current.value = val;
            }
        });
    };
    var inputEvents = {
        onFocus: onFocus,
        setValue: function (val) { return setInputValue(val); },
    };
    var handleRightClick = function (_a) {
        var event = _a.event, node = _a.node;
        var menuItems = filterContextMenu === null || filterContextMenu === void 0 ? void 0 : filterContextMenu(contextMenu, node.data);
        var handleOnMenuClick = function (e, item) {
            onClickContextMenu === null || onClickContextMenu === void 0 ? void 0 : onClickContextMenu(e, item, node.data, getInputEvent === null || getInputEvent === void 0 ? void 0 : getInputEvent(inputEvents));
            contextView.hide();
        };
        contextView === null || contextView === void 0 ? void 0 : contextView.show(dom_2.getEventPosition(event), function () { return (React.createElement(menu_1.Menu, { onClick: handleOnMenuClick, data: menuItems })); });
    };
    var handleUpdateFile = function (e, node) {
        var newName = e.target.value;
        services_1.folderTreeService.updateFileName(__assign(__assign({}, node), { name: newName }), function () {
            if ((node === null || node === void 0 ? void 0 : node.fileType) === tree_1.FileTypes.file && newName) {
                onSelectFile === null || onSelectFile === void 0 ? void 0 : onSelectFile(__assign(__assign({}, node), { isEditable: false, name: newName }), true);
            }
        });
    };
    var renderTitle = function (node, index) {
        var isEditable = node.isEditable, name = node.name;
        var handleInputKeyDown = function (e) {
            if (e.keyCode === 13) {
                handleUpdateFile(e, node);
            }
        };
        var handleInputBlur = function (e) {
            handleUpdateFile(e, node);
        };
        return isEditable ? (React.createElement("input", { type: "text", ref: inputRef, onKeyDown: handleInputKeyDown, autoComplete: "off", onBlur: handleInputBlur })) : (name);
    };
    var renderByData = (React.createElement(tree_1.default, __assign({ data: data, draggable: true, onSelectFile: onSelectFile, onRightClick: handleRightClick, renderTitle: renderTitle }, restProps)));
    var renderInitial = (React.createElement("span", null,
        "you have not yet opened a folder",
        React.createElement(button_1.Button, { onClick: function () {
                var _a;
                // test
                (_a = services_1.folderTreeService.addRootFolder) === null || _a === void 0 ? void 0 : _a.call(services_1.folderTreeService, new model_1.TreeNodeModel({
                    name: 'molecule_temp',
                    fileType: 'rootFolder',
                    children: [
                        new model_1.TreeNodeModel({
                            name: 'test_sql',
                            fileType: 'file',
                            icon: 'symbol-file',
                            content: "show tables;\nSELECT 1;\nDESC 6d_target_test;\ncreate table if not exists ods_order_header1213 (\n     order_header_id     string comment '\u8BA2\u5355\u5934id'\n    ,order_date          bigint comment '\u8BA2\u5355\u65E5\u671F'\n    ,shop_id             string comment '\u5E97\u94FAid'\n    ,customer_id         string comment '\u5BA2\u6237id'\n    ,order_status        bigint comment '\u8BA2\u5355\u72B6\u6001'\n    ,pay_date            bigint comment '\u652F\u4ED8\u65E5\u671F'\n)comment '\u9500\u552E\u8BA2\u5355\u660E\u7EC6\u8868'\nPARTITIONED BY (ds string) lifecycle 1000;\n",
                        }),
                    ],
                }));
            } }, "Add Folder")));
    return (data === null || data === void 0 ? void 0 : data.length) > 0 ? renderByData : renderInitial;
};
exports.default = react_1.memo(FolderTree);
//# sourceMappingURL=folderTree.js.map