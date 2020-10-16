"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Explorer = void 0;
var React = require("react");
var collapse_1 = require("@/components/collapse");
var className_1 = require("@/common/className");
var molecule_1 = require("@/provider/molecule");
exports.Explorer = function (IExplorerProps) {
    var moleculeCtx = React.useContext(molecule_1.MoleculeCtx);
    var AddABar = function () {
        var id = Math.random() * 10 + 1;
        moleculeCtx.activityBar.push({
            id: id + '',
            name: 'folder' + id,
            iconName: 'codicon-edit',
        });
    };
    var NewEditor = function () {
        var id = Math.random() * 10 + 1;
        moleculeCtx.editor.open({
            id: id,
            name: 'test-tab1',
            value: 'just test tab data',
        }, 1);
    };
    return (React.createElement("div", { className: className_1.prefixClaName('explorer', 'sidebar') },
        React.createElement(collapse_1.default, { className: "dee" },
            React.createElement(collapse_1.Panel, { header: "OPEN EDITORS" },
                "OPEN EDITORS",
                React.createElement("button", { onClick: AddABar }, "Add Bar"),
                React.createElement("button", { onClick: NewEditor }, "New Editor")),
            React.createElement(collapse_1.Panel, { header: "Sample-Folder" }),
            React.createElement(collapse_1.Panel, { header: "OUTLINE" }, "OUTLINE"))));
};
//# sourceMappingURL=explore.js.map