"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@testing-library/react");
var react_test_renderer_1 = require("react-test-renderer");
var index_1 = require("../index");
var mockData = [
    {
        id: '1',
        title: 'mockDataTitle',
        iconName: 'codicon-add',
    },
];
describe('Test ActionBar Component', function () {
    test('Test the ActionBar Snapshot', function () {
        var component = react_test_renderer_1.default.create(React.createElement(index_1.default, { data: mockData }));
        var tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('Test the ActionBar by the data Props', function () {
        react_1.render(React.createElement(index_1.default, { data: mockData }));
        expect(react_1.screen.getByTitle(/mockDataTitle/)).not.toBeNull();
    });
});
//# sourceMappingURL=actionBar.test.js.map