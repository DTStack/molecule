"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextMenuDemo = void 0;
var React = require("react");
var contextMenu_1 = require("mo/components/contextMenu");
var react_1 = require("react");
require("../demo.scss");
var ContextMenuDemo = function () {
    react_1.useEffect(function () {
        var contextView1 = contextMenu_1.useContextMenu({
            anchor: document.getElementById('topLeft'),
            render: function () {
                return (React.createElement("ul", null,
                    React.createElement("li", null, "Item1"),
                    React.createElement("li", null, "Item2")));
            },
        });
        var contextView2 = contextMenu_1.useContextMenu({
            anchor: document.getElementById('topRight'),
            render: function () {
                return (React.createElement("ul", null,
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div")));
            },
        });
        var contextView3 = contextMenu_1.useContextMenu({
            anchor: document.getElementById('bottomLeft'),
            render: function () {
                return (React.createElement("ul", null,
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div")));
            },
        });
        var contextView4 = contextMenu_1.useContextMenu({
            anchor: document.getElementById('bottomRight'),
            render: function () {
                return (React.createElement("ul", null,
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div"),
                    React.createElement("li", null, "Item Div")));
            },
        });
        return function cleanup() {
            contextView1 === null || contextView1 === void 0 ? void 0 : contextView1.dispose();
            contextView2 === null || contextView2 === void 0 ? void 0 : contextView2.dispose();
            contextView3 === null || contextView3 === void 0 ? void 0 : contextView3.dispose();
            contextView4 === null || contextView4 === void 0 ? void 0 : contextView4.dispose();
        };
    });
    return (React.createElement("div", { className: "story-wrapper" },
        React.createElement("div", { id: "topLeft", style: {
                position: 'absolute',
                width: 200,
                height: 200,
                top: 0,
                left: 0,
                background: '#dddddd',
            } }, "Right Click me!"),
        React.createElement("div", { id: "topRight", style: {
                position: 'absolute',
                width: 200,
                height: 200,
                top: 0,
                right: 0,
                background: '#dddddd',
            } }, "Right Click me!"),
        React.createElement("div", { id: "bottomLeft", style: {
                position: 'absolute',
                width: 200,
                height: 200,
                left: 0,
                bottom: 10,
                background: '#dddddd',
            } }, "Right Click me!"),
        React.createElement("div", { id: "bottomRight", style: {
                position: 'absolute',
                width: 200,
                height: 200,
                right: 0,
                bottom: 10,
                background: '#dddddd',
            } }, "Right Click me!")));
};
exports.ContextMenuDemo = ContextMenuDemo;
exports.ContextMenuDemo.story = {
    name: 'Basic Demo',
};
exports.default = {
    title: 'ContextMenu',
    component: exports.ContextMenuDemo,
};
//# sourceMappingURL=7-ContextMenu.stories.js.map