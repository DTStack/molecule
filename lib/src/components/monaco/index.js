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
exports.SYMBOL_MONACO_EDITOR = void 0;
require("reflect-metadata");
var React = require("react");
var react_1 = require("react");
var loadsh_1 = require("loadsh");
var const_1 = require("mo/common/const");
var monacoService_1 = require("mo/monaco/monacoService");
exports.SYMBOL_MONACO_EDITOR = const_1.APP_PREFIX + "-monaco-editor";
var MonacoEditor = /** @class */ (function (_super) {
    __extends(MonacoEditor, _super);
    function MonacoEditor(props) {
        return _super.call(this, props) || this;
    }
    MonacoEditor.prototype.componentDidMount = function () {
        var _a = this.props, _b = _a.options, options = _b === void 0 ? {} : _b, override = _a.override, editorInstanceRef = _a.editorInstanceRef;
        this.monacoInstance = monacoService_1.monacoService === null || monacoService_1.monacoService === void 0 ? void 0 : monacoService_1.monacoService.create(this.monacoDom, options, override);
        editorInstanceRef === null || editorInstanceRef === void 0 ? void 0 : editorInstanceRef(this.monacoInstance);
    };
    MonacoEditor.prototype.componentDidUpdate = function (prevProps) {
        var onChangeEditorProps = this.props.onChangeEditorProps;
        !loadsh_1.isEqual(prevProps, this.props) && (onChangeEditorProps === null || onChangeEditorProps === void 0 ? void 0 : onChangeEditorProps(prevProps, this.props));
    };
    MonacoEditor.prototype.render = function () {
        var _this = this;
        var style = this.props.style;
        var renderStyle = {
            position: 'relative',
            minHeight: '400px',
            height: '100%',
            width: '100%',
        };
        renderStyle = style ? Object.assign(renderStyle, style) : renderStyle;
        return (React.createElement("div", { style: renderStyle, className: exports.SYMBOL_MONACO_EDITOR, ref: function (domIns) {
                _this.monacoDom = domIns;
            } }));
    };
    return MonacoEditor;
}(react_1.PureComponent));
exports.default = MonacoEditor;
//# sourceMappingURL=index.js.map