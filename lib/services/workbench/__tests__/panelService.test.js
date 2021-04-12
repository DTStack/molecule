"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var tsyringe_1 = require("tsyringe");
var panelService_1 = require("../panelService");
var panel_1 = require("mo/model/workbench/panel");
describe('Test panelService', function () {
    var panelService = tsyringe_1.container.resolve(panelService_1.PanelService);
    test('Test panelService Class instance', function () {
        expect(panelService).not.toBeUndefined();
        expect(panelService.getState().data).not.toBeUndefined();
    });
    test('Test panelService add single panel', function () {
        var _a;
        panelService.setState({
            data: [],
        });
        panelService.add(Object.assign({}, panel_1.PANEL_OUTPUT, {
            id: 'test1',
        }));
        var result = panelService.getState();
        expect((_a = result.data) === null || _a === void 0 ? void 0 : _a.length).toEqual(1);
    });
    test('Test panelService add multiple Panels', function () {
        var _a;
        panelService.add([panel_1.PANEL_OUTPUT, panel_1.PANEL_PROBLEMS]);
        var result = panelService.getState();
        expect((_a = result.data) === null || _a === void 0 ? void 0 : _a.length).toEqual(3);
    });
    test('Test panelService remove one panel', function () {
        var _a, _b;
        panelService.setState({
            data: [],
        });
        panelService.add([panel_1.PANEL_OUTPUT, panel_1.PANEL_PROBLEMS]);
        expect((_a = panelService.getState().data) === null || _a === void 0 ? void 0 : _a.length).toEqual(2);
        panelService.remove(panel_1.PANEL_OUTPUT.id);
        var result = panelService.getState();
        expect((_b = result.data) === null || _b === void 0 ? void 0 : _b.length).toEqual(1);
    });
    test('Test panelService update one panel', function () {
        var expectedValue = Object.assign(panel_1.PANEL_PROBLEMS, {
            data: 'testData',
            name: 'testName',
        });
        panelService.update(expectedValue);
        var result = panelService.getState();
        var updated = result.data.find(function (item) { return item.id === panel_1.PANEL_PROBLEMS.id; });
        expect(updated).not.toBeUndefined();
        expect(updated).toEqual(expectedValue);
    });
    test('Test panelService getById method', function () {
        panelService.add(panel_1.PANEL_OUTPUT);
        var result = panelService.getById(panel_1.PANEL_OUTPUT.id);
        expect(result).not.toBeUndefined();
    });
    test('Test panelService updateOutput method', function () {
        var expectedValue = Object.assign(panel_1.PANEL_OUTPUT, {
            data: 'testData',
            name: 'testName',
        });
        panelService.updateOutput(expectedValue);
        var result = panelService.getById(panel_1.PANEL_OUTPUT.id);
        expect(result).toEqual(expectedValue);
    });
    test('Test panelService appendOutput method', function () {
        var expectedValue = Object.assign(panel_1.PANEL_OUTPUT, {
            data: 'testData',
            name: 'testName',
        });
        panelService.updateOutput(expectedValue);
        var appendContent = 'Append Content';
        panelService.appendOutput(appendContent);
        expectedValue.data = expectedValue.data + appendContent;
        var result = panelService.getById(panel_1.PANEL_OUTPUT.id);
        expect(result).toEqual(expectedValue);
    });
    test('Test panelService open method', function () {
        var expectedValue = {
            id: 'openPane',
            data: 'openPane',
            name: 'openPane',
        };
        panelService.open(expectedValue);
        var state = panelService.getState();
        expect(state.current).toEqual(expectedValue);
    });
});
//# sourceMappingURL=panelService.test.js.map