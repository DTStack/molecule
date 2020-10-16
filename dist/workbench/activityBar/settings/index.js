"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingBar = void 0;
var React = require("react");
var className_1 = require("@/common/className");
require("./settings.scss");
function SettingBar() {
    return (React.createElement("div", { className: className_1.prefixClaName('settings') },
        React.createElement("a", { className: 'settings-action codicon codicon-settings-gear' })));
}
exports.SettingBar = SettingBar;
;
exports.default = SettingBar;
//# sourceMappingURL=index.js.map