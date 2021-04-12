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
exports.MoleculeProvider = exports.MoleculeCtx = void 0;
var React = require("react");
var tsyringe_1 = require("tsyringe");
var extensions_1 = require("mo/extensions");
var extensionService_1 = require("mo/services/extensionService");
exports.MoleculeCtx = React.createContext({});
var MoleculeProvider = /** @class */ (function (_super) {
    __extends(MoleculeProvider, _super);
    function MoleculeProvider(props) {
        var _this = _super.call(this, props) || this;
        console.log('Molecule constructed.');
        return _this;
    }
    MoleculeProvider.prototype.componentDidMount = function () {
        var _a = this.props.extensions, extensions = _a === void 0 ? [] : _a;
        this.extensionService = tsyringe_1.container.resolve(extensionService_1.ExtensionService);
        this.extensionService.load(extensions_1.defaultExtensions);
        this.extensionService.load(extensions);
    };
    MoleculeProvider.prototype.render = function () {
        return (React.createElement(exports.MoleculeCtx.Provider, { value: {} }, this.props.children));
    };
    return MoleculeProvider;
}(React.Component));
exports.MoleculeProvider = MoleculeProvider;
//# sourceMappingURL=molecule.js.map