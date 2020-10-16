"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoleculeProvider = exports.MoleculeCtx = void 0;
var React = require("react");
var extensionService_1 = require("@/services/extensionService");
var editorService_1 = require("@/services/editor/editorService");
var activityBarService_1 = require("@/services/activityBarService");
var moleculeService_1 = require("@/services/moleculeService");
var groupService_1 = require("@/services/editor/groupService");
var themeServices_1 = require("@/services/themeServices");
var sidebarService_1 = require("@/services/sidebarService");
var observable_1 = require("@/common/observable");
// const DEFAULT_COLOR_THEME = 'light-vs';
// const DEFAULT_LOCALE_LANG = 'en-us';
var tab = {
    id: 1,
    name: 'test1',
    mode: 'sql',
    value: 'select * from test',
};
// const tab1: ITab = {
//     id: 2,
//     name: 'test2',
//     mode: 'sql',
//     value: 'select * from test',
// };
// const tab2: ITab = {
//     id: 3,
//     name: 'test3',
//     mode: 'sql',
//     value: 'select * from test',
// };
var editorGroup0 = new groupService_1.EditorGroupService(1, tab, [tab], [], ['a', 'b'], [{ id: '1', name: 'a' }], null);
// const editorGroup1 = new EditorGroupService(
//     1,
//     tab1,
//     [tab1],
//     [],
//     ['a', 'b'],
//     [{ id: '1', name: 'a' }],
//     null,
// );
// const editorGroup2 = new EditorGroupService(
//     1,
//     tab2,
//     [tab2],
//     [],
//     ['a', 'b'],
//     [{ id: '1', name: 'a' }],
//     null,
// );
var initialState = new moleculeService_1.MoleculeService(new activityBarService_1.ActivityBarService(), new editorService_1.EditorService(editorGroup0, [
    editorGroup0,
]), new themeServices_1.ThemeService('vs-dark', 'vs-dark'), new sidebarService_1.SidebarBarService());
// https://medium.com/dev-genius/reactjs-manage-your-state-nicely-with-context-1ed3090a6a46
exports.MoleculeCtx = React.createContext(initialState);
var MoleculeProvider = /** @class */ (function (_super) {
    __extends(MoleculeProvider, _super);
    function MoleculeProvider(props) {
        var _this = _super.call(this, props) || this;
        var _a = _this.props, extensionEntry = _a.extensionEntry, locales = _a.locales;
        _this.state = observable_1.observable(initialState);
        _this.loadLocales(locales);
        _this.extensionService = new extensionService_1.ExtensionService(extensionEntry, _this.state);
        _this.stateChanged = _this.stateChanged.bind(_this);
        console.log('Molecule constructed.');
        return _this;
    }
    MoleculeProvider.prototype.componentDidMount = function () {
        console.log('nextState', this.state);
        this.state.observe(this.stateChanged);
    };
    MoleculeProvider.prototype.stateChanged = function () {
        console.log('state eq:', this.state === initialState);
        // TODO 目前是很粗粒度的更新 state 对象
        // this.setState( { ...nextState } );
        this.setState(Object.assign({}, this.state));
    };
    MoleculeProvider.prototype.initMolecule = function () {
        console.log('Init molecule component.', this.extensionService);
    };
    MoleculeProvider.prototype.loadLocales = function (locales) {
    };
    MoleculeProvider.prototype.getValue = function () {
        return this.state;
    };
    MoleculeProvider.prototype.render = function () {
        return (React.createElement(exports.MoleculeCtx.Provider, { value: this.state }, this.props.children));
    };
    return MoleculeProvider;
}(React.Component));
exports.MoleculeProvider = MoleculeProvider;
//# sourceMappingURL=molecule.js.map