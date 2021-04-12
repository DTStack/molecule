"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mo_1 = require("mo");
var services_1 = require("mo/services");
var button_1 = require("mo/components/button");
var select_1 = require("mo/components/select");
var TestPane = /** @class */ (function (_super) {
    __extends(TestPane, _super);
    function TestPane(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (e, item) {
            console.log('onClick:', e, item);
        };
        _this.onChangeTheme = function (e, option) {
            if (option && option.value) {
                console.log('onChangeTheme:', option.value);
                mo_1.colorThemeService.applyTheme(option.value);
            }
        };
        return _this;
    }
    TestPane.prototype.renderColorThemes = function () {
        var colorThemes = mo_1.colorThemeService.getThemes();
        var defaultTheme = mo_1.colorThemeService.colorTheme;
        var options = colorThemes.map(function (theme) {
            return (React.createElement(select_1.Option, { key: theme.id, value: theme.id }, theme.label));
        });
        return (React.createElement(select_1.Select, { defaultValue: defaultTheme.id, onSelect: this.onChangeTheme }, options));
    };
    TestPane.prototype.render = function () {
        var addABar = function () {
            var id = Math.random() * 10 + 1;
            mo_1.activityBarService.addBar({
                id: id + '',
                name: 'folder' + id,
                iconName: 'codicon-edit',
            });
        };
        var addPanel = function () {
            var id = Math.random() * 10 + 1;
            mo_1.panelService.open({
                id: 'Pane' + id,
                name: 'Panel' + id,
                render: function () { return React.createElement("h1", null, "Test Pane"); },
            });
        };
        var showHidePanel = function () {
            mo_1.panelService.showHide();
        };
        var newEditor = function () {
            var key = (Math.random() * 10 + 1).toFixed(2);
            var tabData = {
                id: "" + key,
                name: "editor" + key + ".ts",
                data: {
                    value: key + "export interface Type<T> { new(...args: any[]): T;}\nexport type GenericClassDecorator<T> = (target: T) => void;",
                    path: 'desktop/molecule/editor1',
                    language: 'typescript',
                    modified: false,
                },
                breadcrumb: [{ id: "" + key, name: "editor.ts" }],
            };
            console.log('open editor:', tabData);
            services_1.editorService.open(tabData);
        };
        var notify;
        var addANotification = function () {
            notify = services_1.notificationService.addNotification({
                value: 'Test Notification!',
            });
            console.log('Add Notification index:', notify);
        };
        var removeNotification = function () {
            services_1.notificationService.removeNotification(notify.id);
        };
        var openCommand = function () { };
        return (React.createElement("div", null,
            React.createElement("div", { style: { margin: '50px 20px' } },
                React.createElement(button_1.Button, { onClick: addABar }, "Add Bar"),
                React.createElement(button_1.Button, { onClick: newEditor }, "New Editor"),
                React.createElement(button_1.Button, { onClick: openCommand }, "Command Palette")),
            React.createElement("div", { style: { margin: '50px 20px' } },
                React.createElement("h1", null, "Select a ColorTheme:"),
                this.renderColorThemes()),
            React.createElement("div", { style: { margin: '50px 20px' } },
                React.createElement("h2", null, "Add a new Panel:"),
                React.createElement(button_1.Button, { onClick: addPanel }, "Add Panel"),
                React.createElement(button_1.Button, { onClick: showHidePanel }, "Show/Hide Panel")),
            React.createElement("div", { style: { margin: '50px 20px' } },
                React.createElement("h2", null, "Notification:"),
                React.createElement(button_1.Button, { onClick: addANotification }, "Add A Notification"),
                React.createElement(button_1.Button, { onClick: removeNotification }, "Remove A Notification"))));
    };
    return TestPane;
}(React.Component));
exports.default = TestPane;
//# sourceMappingURL=testPane.js.map