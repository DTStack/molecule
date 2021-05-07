import 'reflect-metadata';
import { container } from 'tsyringe';
import { IPanelService, PanelService } from '../panelService';
import { PANEL_OUTPUT } from 'mo/model/workbench/panel';
import { PANEL_PROBLEMS } from 'mo/model/problems';

describe('Test panelService', () => {
    const panelService = container.resolve<IPanelService>(PanelService);

    test('Test panelService Class instance', () => {
        expect(panelService).not.toBeUndefined();
        expect(panelService.getState().data).not.toBeUndefined();
    });

    test('Test panelService add single panel', () => {
        panelService.setState({
            data: [],
        });
        panelService.add(
            Object.assign({}, PANEL_OUTPUT, {
                id: 'test1',
            })
        );
        const result = panelService.getState();
        expect(result.data?.length).toEqual(1);
    });

    test('Test panelService add multiple Panels', () => {
        panelService.add([PANEL_OUTPUT, PANEL_PROBLEMS]);
        const result = panelService.getState();
        expect(result.data?.length).toEqual(3);
    });

    test('Test panelService remove one panel', () => {
        panelService.setState({
            data: [],
        });
        panelService.add([PANEL_OUTPUT, PANEL_PROBLEMS]);
        expect(panelService.getState().data?.length).toEqual(2);
        panelService.remove(PANEL_OUTPUT.id);
        const result = panelService.getState();
        expect(result.data?.length).toEqual(1);
    });

    test('Test panelService update one panel', () => {
        const expectedValue = Object.assign(PANEL_PROBLEMS, {
            data: 'testData',
            name: 'testName',
        });

        panelService.update(expectedValue);
        const result = panelService.getState();
        const updated = result.data!.find(
            (item) => item.id === PANEL_PROBLEMS.id
        );
        expect(updated).not.toBeUndefined();
        expect(updated!).toEqual(expectedValue);
    });

    test('Test panelService getById method', () => {
        panelService.add(PANEL_OUTPUT);
        const result = panelService.getById(PANEL_OUTPUT.id);
        expect(result).not.toBeUndefined();
    });

    test('Test panelService updateOutput method', () => {
        const expectedValue = Object.assign(PANEL_OUTPUT, {
            data: 'testData',
            name: 'testName',
        });
        panelService.updateOutput(expectedValue);
        const result = panelService.getById(PANEL_OUTPUT.id);
        expect(result).toEqual(expectedValue);
    });

    test('Test panelService appendOutput method', () => {
        const expectedValue = Object.assign(PANEL_OUTPUT, {
            data: 'testData',
            name: 'testName',
        });
        panelService.updateOutput(expectedValue);
        const appendContent = 'Append Content';
        panelService.appendOutput(appendContent);
        expectedValue.data = expectedValue.data + appendContent;
        const result = panelService.getById(PANEL_OUTPUT.id);
        expect(result).toEqual(expectedValue);
    });
    test('Test panelService open method', () => {
        const expectedValue = {
            id: 'openPane',
            data: 'openPane',
            name: 'openPane',
        };
        panelService.open(expectedValue);
        const state = panelService.getState();
        expect(state.current).toEqual(expectedValue);
    });
});
