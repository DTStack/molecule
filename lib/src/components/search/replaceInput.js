"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceInput = void 0;
var React = require("react");
var toolbar_1 = require("mo/components/toolbar");
var className_1 = require("mo/common/className");
var base_1 = require("./base");
function ReplaceInput(props) {
    var _a = props.replaceAddons, replaceAddons = _a === void 0 ? [] : _a, setReplaceValue = props.setReplaceValue, onToggleAddon = props.onToggleAddon;
    var onClick = function (e, item) {
        console.log('onClick:', item);
        onToggleAddon === null || onToggleAddon === void 0 ? void 0 : onToggleAddon(item);
    };
    return (React.createElement("div", { className: className_1.classNames(base_1.defaultSearchClassName, base_1.replaceContainerClassName) },
        React.createElement("input", { placeholder: "Replace", onChange: function (e) {
                setReplaceValue === null || setReplaceValue === void 0 ? void 0 : setReplaceValue(e.target.value);
            } }),
        React.createElement(toolbar_1.default, { className: base_1.searchToolBarClassName, data: replaceAddons, onClick: onClick })));
}
exports.ReplaceInput = ReplaceInput;
//# sourceMappingURL=replaceInput.js.map