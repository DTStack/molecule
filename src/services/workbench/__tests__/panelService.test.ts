import 'reflect-metadata';
import { container } from 'tsyringe';
import { IPanelService, PanelService } from '../panelService';
import { builtInOutputPanel } from 'mo/model/workbench/panel';
import { builtInPanelProblems } from 'mo/model/problems';

const paneOutput = builtInOutputPanel();
const panelProblems = builtInPanelProblems();

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
            Object.assign({}, paneOutput, {
                id: 'test1',
            })
        );
        const result = panelService.getState();
        expect(result.data?.length).toEqual(1);
    });

    test('Test panelService add multiple Panels', () => {
        panelService.add([paneOutput, panelProblems]);
        const result = panelService.getState();
        expect(result.data?.length).toEqual(3);
    });

    test('Test panelService remove one panel', () => {
        panelService.setState({
            data: [],
        });
        panelService.add([paneOutput, panelProblems]);
        expect(panelService.getState().data?.length).toEqual(2);
        panelService.remove(paneOutput.id);
        const result = panelService.getState();
        expect(result.data?.length).toEqual(1);
    });

    test('Test panelService update one panel', () => {
        const expectedValue = Object.assign(panelProblems, {
            data: 'testData',
            name: 'testName',
        });

        panelService.update(expectedValue);
        const result = panelService.getState();
        const updated = result.data!.find(
            (item) => item.id === panelProblems.id
        );
        expect(updated).not.toBeUndefined();
        expect(updated!).toEqual(expectedValue);
    });

    test('Test panelService getById method', () => {
        panelService.add(paneOutput);
        const result = panelService.getById(paneOutput.id);
        expect(result).not.toBeUndefined();
    });

    test('Test panelService updateOutput method', () => {
        const expectedValue = Object.assign(paneOutput, {
            data: 'testData',
            name: 'testName',
        });
        panelService.updateOutput(expectedValue);
        const result = panelService.getById(paneOutput.id);
        expect(result).toEqual(expectedValue);
    });

    test('Test panelService appendOutput method', () => {
        const expectedValue = Object.assign(paneOutput, {
            data: 'testData',
            name: 'testName',
        });
        panelService.updateOutput(expectedValue);
        const appendContent = 'Append Content';
        panelService.appendOutput(appendContent);
        expectedValue.data = expectedValue.data + appendContent;
        const result = panelService.getById(paneOutput.id);
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
