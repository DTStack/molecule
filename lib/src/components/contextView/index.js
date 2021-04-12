"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useContextView = exports.shadowClassName = void 0;
var React = require("react");
var ReactDOM = require("react-dom");
var className_1 = require("mo/common/className");
var dom_1 = require("mo/common/dom");
var event_1 = require("mo/common/event");
var dt_utils_1 = require("@dtinsight/dt-utils");
var ContextViewEvent;
(function (ContextViewEvent) {
    ContextViewEvent["onHide"] = "onHide";
})(ContextViewEvent || (ContextViewEvent = {}));
var contextViewClass = className_1.prefixClaName('context-view');
var contentClassName = className_1.getBEMElement(contextViewClass, 'content');
var blockClassName = className_1.getBEMElement(contextViewClass, 'block');
exports.shadowClassName = className_1.getBEMModifier(contextViewClass, 'shadow');
var Emitter = new event_1.EventEmitter();
function useContextView(props) {
    if (props === void 0) { props = {}; }
    var _a = props.shadowOutline, shadowOutline = _a === void 0 ? true : _a;
    var claName = className_1.classNames(contextViewClass, 'fade-in');
    var contextView = dom_1.select('.' + contextViewClass); // Singleton contextView dom
    var show = function (anchorPos, render) {
        var content = dom_1.select('.' + contentClassName);
        var renderContent = render || (props === null || props === void 0 ? void 0 : props.render);
        if (!renderContent)
            throw Error('ContextView show Error: the render parameter not allowed be null!');
        ReactDOM.render(React.createElement(React.Fragment, null, renderContent()), content, function () {
            // Notice: if want to get the computed offsetHeight of contextView,
            // must display contextView ahead.
            contextView.style.display = 'visible';
            var position = dom_1.getRelativePosition(contextView, anchorPos);
            contextView.style.cssText = "\n                top: " + position.y + "px;\n                left: " + position.x + "px;\n            ";
        });
    };
    var hide = function () {
        if (contextView) {
            contextView.style.visibility = 'hidden';
            ReactDOM.unmountComponentAtNode(dom_1.select('.' + contentClassName));
            Emitter.emit(ContextViewEvent.onHide);
        }
    };
    var onHide = function (callback) {
        Emitter.subscribe(ContextViewEvent.onHide, callback);
    };
    var onMaskClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        hide();
    };
    var dispose = function () {
        Emitter.unsubscribe(ContextViewEvent.onHide);
    };
    if (!contextView) {
        contextView = document.createElement('div');
        contextView.className = className_1.classNames(claName, dt_utils_1.Utils.isMacOs() ? 'mac' : '');
        contextView.style.visibility = 'hidden';
        var root = document.getElementById('molecule');
        if (!root) {
            document.body.appendChild(contextView);
        }
        else {
            root.appendChild(contextView);
        }
        var shadowClass = !shadowOutline ? '' : exports.shadowClassName;
        ReactDOM.render(React.createElement(React.Fragment, null,
            React.createElement("div", { className: blockClassName, onClick: onMaskClick, onContextMenu: onMaskClick }),
            React.createElement("div", { className: className_1.classNames(contentClassName, shadowClass) })), contextView);
    }
    return { view: contextView, show: show, hide: hide, onHide: onHide, dispose: dispose };
}
exports.useContextView = useContextView;
//# sourceMappingURL=index.js.map