import 'reflect-metadata';
import { container } from 'tsyringe';
import { IPanelService, PanelService } from '../panelService';
import {
    builtInOutputPanel,
    builtInPanelToolbox,
    builtInPanelToolboxResize,
    builtInPanelToolboxReStore,
    PANEL_TOOLBOX_RESIZE,
} from 'mo/model/workbench/panel';
import { builtInPanelProblems } from 'mo/model/problems';
import { searchById } from 'mo/services/helper';

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
        let removed = panelService.remove(paneOutput.id);
        const result = panelService.getState();
        expect(result.data?.length).toEqual(1);
        expect(removed).toEqual(paneOutput);

        removed = panelService.remove('1');
        expect(removed).toBeUndefined();
    });

    test('Test panelService update one panel', () => {
        const expectedValue = Object.assign(panelProblems, {
            data: 'testData',
            name: 'testName',
        });

        panelService.update(expectedValue);
        const result = panelService.getState();
        let updated = result.data!.find((item) => item.id === panelProblems.id);
        expect(updated).not.toBeUndefined();
        expect(updated!).toEqual(expectedValue);

        updated = panelService.update({ id: '1' });
        expect(updated).toBeUndefined();
    });

    test('Test panelService getById method', () => {
        panelService.add(paneOutput);
        const result = panelService.getPanel(paneOutput.id);
        expect(result).not.toBeUndefined();
    });

    test('Test panelService setActive method', () => {
        const state = panelService.getState();
        panelService.add(paneOutput);

        expect(state.current).toBeNull();

        panelService.setActive(paneOutput.id);
        expect(state.current).toEqual(paneOutput);
    });

    test('Test panelService updateOutput method', () => {
        const expectedValue = Object.assign(paneOutput, {
            data: 'testData',
            name: 'testName',
        });
        panelService.updateOutput(expectedValue);
        const result = panelService.getPanel(paneOutput.id);
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
        const result = panelService.getPanel(paneOutput.id);
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

    test('Test panelService toggleMaximize method', () => {
        const state = panelService.getState();
        panelService.setState({
            toolbox: builtInPanelToolbox(),
        });

        const resizeBtn = state.toolbox?.findIndex(
            searchById(PANEL_TOOLBOX_RESIZE)
        );

        expect(resizeBtn).not.toBeUndefined();
        expect(state.toolbox?.[resizeBtn!]).toEqual(
            builtInPanelToolboxResize()
        );

        panelService.toggleMaximize();
        expect(state.toolbox?.[resizeBtn!]).toEqual(
            builtInPanelToolboxReStore()
        );
    });
});
