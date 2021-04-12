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
var React = require("react");
var react_1 = require("react");
var monaco = require("monaco-editor");
var const_1 = require("mo/common/const");
exports.SYMBOL_MONACO_EDITOR = const_1.APP_PREFIX + "-monaco-editor";
var MonacoEditor = /** @class */ (function (_super) {
    __extends(MonacoEditor, _super);
    function MonacoEditor(props) {
        return _super.call(this, props) || this;
    }
    MonacoEditor.prototype.componentDidMount = function () {
        var _a = this.props, _b = _a.options, options = _b === void 0 ? {} : _b, override = _a.override, editorInstanceRef = _a.editorInstanceRef;
        this.monacoInstance = monaco.editor.create(this.monacoDom, options, override);
        if (editorInstanceRef) {
            editorInstanceRef(this.monacoInstance);
        }
    };
    MonacoEditor.prototype.componentWillUnmount = function () {
        if (this.monacoInstance) {
            this.monacoInstance.dispose();
        }
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