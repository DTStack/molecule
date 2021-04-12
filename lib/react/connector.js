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
exports.connect = void 0;
var React = require("react");
var logger_1 = require("mo/common/logger");
function connect(Service, View, Controller, watchFiled) {
    return /** @class */ (function (_super) {
        __extends(Connector, _super);
        function Connector(props) {
            var _this = _super.call(this, props) || this;
            _this.update = function () {
                _this.setState({
                    lastUpdated: Date.now(),
                });
            };
            _this.onChange = _this.onChange.bind(_this);
            _this.state = {
                lastUpdated: Date.now(),
            };
            return _this;
        }
        Connector.prototype.componentDidMount = function () {
            if (Service.onUpdateState) {
                var service = Service;
                service.onUpdateState(this.onChange);
            }
            else {
                for (var name_1 in Service) {
                    if (name_1) {
                        var service = Service[name_1];
                        if (service.onUpdateState) {
                            service.onUpdateState(this.onChange);
                        }
                    }
                }
            }
        };
        Connector.prototype.onChange = function (prevState, nextState) {
            logger_1.default.info(prevState, nextState);
            if (!watchFiled) {
                this.update();
            }
            else {
                // TODO, 目前会全量触发更新，后期根据 watchField 字段来控制更新粒度
                // const prev = get(prevState, watchFiled);
                // const next = get(nextState, watchFiled);
                // if (!equals(prev, next)) {
                //     this.update();
                // }
            }
        };
        Connector.prototype.getServiceState = function () {
            var _a;
            var target = {};
            if (Service.onUpdateState) {
                var service = Service;
                Object.assign(target, __assign({}, service.getState()));
            }
            else {
                for (var name_2 in Service) {
                    if (name_2) {
                        var service = Service[name_2];
                        if (service.getState) {
                            Object.assign(target, (_a = {},
                                _a[name_2] = __assign({}, service.getState()),
                                _a));
                        }
                    }
                }
            }
            return target;
        };
        Connector.prototype.render = function () {
            return (React.createElement(View, __assign({}, this.state, this.getServiceState(), this.props, Controller)));
        };
        return Connector;
    }(React.Component));
}
exports.connect = connect;
//# sourceMappingURL=connector.js.map