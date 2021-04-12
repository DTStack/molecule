"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@testing-library/react");
var mo_1 = require("mo");
var index_1 = require("../index");
describe('Test Workbench Component', function () {
    test('The Workbench DOM Testing', function () {
        var container = react_1.render(React.createElement(mo_1.MoleculeProvider, null,
            React.createElement(index_1.Workbench, null))).container;
        expect(container.querySelector('#molecule')).not.toBeNull();
        expect(container.querySelector('.mo-workbench')).not.toBeNull();
        expect(container.querySelector('.mo-statusBar')).not.toBeNull();
    });
});
//# sourceMappingURL=workbench.test.js.map