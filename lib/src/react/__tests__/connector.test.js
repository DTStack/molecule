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
var react_1 = require("mo/react");
var react_2 = require("@testing-library/react");
var TestServiceA = /** @class */ (function (_super) {
    __extends(TestServiceA, _super);
    function TestServiceA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: 'A',
        };
        return _this;
    }
    return TestServiceA;
}(react_1.Component));
var TestServiceB = /** @class */ (function (_super) {
    __extends(TestServiceB, _super);
    function TestServiceB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            data: 'B',
        };
        return _this;
    }
    return TestServiceB;
}(react_1.Component));
var TestControllerA = /** @class */ (function (_super) {
    __extends(TestControllerA, _super);
    function TestControllerA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.methodA = function () { };
        return _this;
    }
    return TestControllerA;
}(controller_1.Controller));
var TestControllerB = /** @class */ (function (_super) {
    __extends(TestControllerB, _super);
    function TestControllerB() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.methodB = function () { };
        return _this;
    }
    return TestControllerB;
}(controller_1.Controller));
function TestComponent(props) {
    var _a = props.A, A = _a === void 0 ? {} : _a, _b = props.B, B = _b === void 0 ? {} : _b, _c = props.actionA, actionA = _c === void 0 ? {} : _c, _d = props.actionB, actionB = _d === void 0 ? {} : _d;
    return (React.createElement("div", null,
        React.createElement("span", { onClick: actionA.methodA }, A.data),
        React.createElement("span", { onClick: actionB.methodB }, B.data)));
}
var controller_1 = require("../controller");
describe('Test Connector Component', function () {
    var serviceA = new TestServiceA();
    var serviceB = new TestServiceB();
    var actionA = new TestControllerA();
    var actionB = new TestControllerB();
    test('Test connect method bind multiple Services and Controllers to the Component', function () {
        var TestView = react_1.connect({
            A: serviceA,
            B: serviceB,
        }, TestComponent, {
            actionA: actionA,
            actionB: actionB,
        });
        var getByText = react_2.render(React.createElement(React.Fragment, null,
            React.createElement(TestView, null))).getByText;
        expect(getByText('A')).not.toBeNull();
        expect(getByText('B')).not.toBeNull();
    });
    test('Test connect update to the Component view after state changed.', function () {
        var TestView = react_1.connect({
            A: serviceA,
            B: serviceB,
        }, TestComponent, {
            actionA: actionA,
            actionB: actionB,
        });
        var getByText = react_2.render(React.createElement(React.Fragment, null,
            React.createElement(TestView, null))).getByText;
        expect(getByText('A')).not.toBeNull();
        expect(getByText('B')).not.toBeNull();
        serviceA.setState({
            data: 'updateA',
        });
        serviceB.setState({
            data: 'updateB',
        });
        expect(getByText('updateA')).not.toBeNull();
        expect(getByText('updateB')).not.toBeNull();
    });
});
//# sourceMappingURL=connector.test.js.map