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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapState = void 0;
var React = require("react");
var logger_1 = require("mo/common/logger");
/**
 * Mapping the state to the component
 * TODO support mapping service method to the component.
 * @param WrappedComponent The component will be wrapped
 * @param state The state you want to injected, notice the state must be an observable object
 * @param subscribes The events of your subscribe, it used to trigger the state re render
 */
function mapState(WrappedComponent, state, actions) {
    return /** @class */ (function (_super) {
        __extends(StateProvider, _super);
        function StateProvider(props) {
            var _this = _super.call(this, props) || this;
            _this.onChange = _this.onChange.bind(_this);
            _this.state = {
                lastUpdated: Date.now(),
            };
            return _this;
        }
        StateProvider.prototype.componentDidMount = function () {
            // There is no declare state parameter as IObservable type, so must convert to any type.
            if (state.subscribe) {
                state.subscribe(this.onChange);
            }
            else {
                logger_1.default.error('The state parameter of mapState must be an observable object.');
            }
        };
        /**
         * TODO: Performance optimize, now whatever any properties changed in target,
         * there always be trigger the onChange event, so need a compare operation.
         * @param nextState changed data
         */
        StateProvider.prototype.onChange = function (nextState) {
            logger_1.default.info(nextState, state);
            this.setState({
                lastUpdated: Date.now(),
            });
        };
        StateProvider.prototype.render = function () {
            return (React.createElement(WrappedComponent, __assign({}, this.state, state, this.props, actions)));
        };
        return StateProvider;
    }(React.Component));
}
exports.mapState = mapState;
//# sourceMappingURL=mapState.js.map