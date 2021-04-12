"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchInput = void 0;
var React = require("react");
var toolbar_1 = require("mo/components/toolbar");
var className_1 = require("mo/common/className");
var base_1 = require("./base");
function SearchInput(props) {
    var setSearchValue = props.setSearchValue, _a = props.searchAddons, searchAddons = _a === void 0 ? [] : _a, onToggleAddon = props.onToggleAddon;
    var onClick = function (e, item) {
        console.log('onClick:', item);
        onToggleAddon === null || onToggleAddon === void 0 ? void 0 : onToggleAddon(item);
    };
    return (React.createElement("div", { className: className_1.classNames(base_1.defaultSearchClassName, base_1.searchContainerClassName) },
        React.createElement("input", { placeholder: "Search", onChange: function (e) {
                setSearchValue === null || setSearchValue === void 0 ? void 0 : setSearchValue(e.target.value);
            } }),
        React.createElement(toolbar_1.default, { className: base_1.searchToolBarClassName, data: searchAddons, onClick: onClick })));
}
exports.SearchInput = SearchInput;
//# sourceMappingURL=searchInput.js.map