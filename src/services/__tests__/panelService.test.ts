import 'reflect-metadata';
import { container } from 'tsyringe';
import { PanelService } from '../workbench/panelService';
import {
    builtInOutputPanel,
    builtInPanelToolboxResize,
    builtInPanelToolboxReStore,
    PanelEvent,
} from 'mo/model/workbench/panel';
import { expectLoggerErrorToBeCalled } from '@test/utils';
import { modules } from '../builtinService/const';

const paneOutput = builtInOutputPanel();
const panelProblems = modules.builtInPanelProblems;

const resize = builtInPanelToolboxResize();
const restore = builtInPanelToolboxReStore();

const panelService = container.resolve(PanelService);

describe('The PanelService test', () => {
    afterEach(() => {
        panelService.reset();
    });

    test('Should support to add a single panel', () => {
        panelService.add(paneOutput);

        const state = panelService.getState();
        expect(state.data).toHaveLength(1);
        expect(state.data![0]).toEqual(paneOutput);
    });

    test('Should support to batch add panels', () => {
        panelService.add([paneOutput, panelProblems]);

        const state = panelService.getState();
        expect(state.data).toHaveLength(2);
        expect(state.data![0]).toEqual(paneOutput);
        expect(state.data![1]).toEqual(panelProblems);
    });

    test('Should support to remove the specific panel and returns the removed panel', () => {
        panelService.add([paneOutput, panelProblems]);

        const state = panelService.getState();
        expect(state.data).toHaveLength(2);

        const removed = panelService.remove(paneOutput.id);
        expect(state.data).toHaveLength(1);
        expect(removed).toEqual(paneOutput);
    });

    test('Should log error when remove the panel failed', () => {
        let removed;
        expectLoggerErrorToBeCalled(() => {
            removed = panelService.remove(paneOutput.id);
        });

        expect(removed).toBeUndefined();
    });

    test('Should support to update the specific panel', () => {
        panelService.add([paneOutput, panelProblems]);

        const state = panelService.getState();
        expect(state.data![0]).toEqual(paneOutput);

        const nextPanel = {
            id: paneOutput.id,
            data: 'test',
        };
        const updated = panelService.update(nextPanel);

        expect(state.data![0]).toEqual({ ...paneOutput, ...nextPanel });
        expect(updated).toEqual({ ...paneOutput, ...nextPanel });
    });

    test('Should support to update several properties of the Output Panel', () => {
        const output = { ...paneOutput, renderPane: jest.fn() };
        panelService.add([output]);
        expect(panelService.getPanel(output.id)).toEqual(output);

        panelService.updateOutput({
            title: 'update-output',
            name: 'test',
            sortIndex: 999,
            active: true,
            closable: true,
            editable: true,
        });
        expect(panelService.getPanel(output.id)).toEqual({
            ...output,
            title: 'update-output',
            name: 'test',
            sortIndex: 999,
            active: true,
            closable: true,
            editable: true,
        });

        panelService.updateOutput({
            data: 'update value will failed',
        });
        expect(panelService.getPanel(output.id)).toEqual({
            ...output,
            title: 'update-output',
            name: 'test',
            sortIndex: 999,
            active: true,
            closable: true,
            editable: true,
        });
    });

    test('Should log error when update failed', () => {
        let updated;
        expectLoggerErrorToBeCalled(() => {
            updated = panelService.update({
                id: paneOutput.id,
                data: 'test',
            });
        });

        expect(updated).toBeUndefined();
    });

    test('Should support to get specific panel', () => {
        panelService.add([paneOutput]);

        const target = panelService.getPanel(paneOutput.id);
        expect(target).toEqual(paneOutput);
    });

    test('Should support to active a exist panel', () => {
        panelService.add([paneOutput]);

        const state = panelService.getState();
        expect(state.current).toBeNull();

        panelService.setActive(paneOutput.id);
        expect(state.current).toEqual(paneOutput);
    });

    test("Should log error when active a panel that doesn't exist", () => {
        const state = panelService.getState();
        expect(state.current).toBeNull();

        expectLoggerErrorToBeCalled(() => {
            panelService.setActive(paneOutput.id);
        });

        expect(state.current).toBeNull();
    });

    test('Should support to open a exist panel', () => {
        panelService.add([paneOutput]);

        const state = panelService.getState();
        expect(state.current).toBeNull();

        panelService.open(paneOutput);
        expect(state.current).toEqual(paneOutput);
    });

    test("Should support to open a panel that doesn't exist", () => {
        const state = panelService.getState();
        const newPanel = Object.assign({}, paneOutput, { id: 'test' });
        expect(state.current).toBeNull();
        expect(panelService.getPanel(newPanel.id)).toBeUndefined();

        panelService.open(newPanel);
        expect(state.current).toEqual(newPanel);
        expect(panelService.getPanel(newPanel.id)).not.toBeUndefined();
    });

    test('Should support to toggle maximize status', () => {
        panelService.setState({
            toolbox: [resize],
        });

        const state = panelService.getState();
        expect(state.toolbox?.find((item) => item.id === resize.id)).toEqual(
            resize
        );

        panelService.toggleMaximize();

        expect(state.toolbox?.find((item) => item.id === resize.id)).toEqual(
            restore
        );
    });

    test('Should support append value into Output Panel', () => {
        panelService.add(paneOutput);

        expect(panelService.getOutputValue()).toBe('');

        panelService.appendOutput('test');
        expect(panelService.getOutputValue()).toBe('test');

        panelService.appendOutput('-panel');
        expect(panelService.getOutputValue()).toBe('test-panel');
    });

    test('Should ensure that the current and the panel data are consistent', () => {
        panelService.add(paneOutput);
        panelService.setActive(paneOutput.id);

        const state = panelService.getState();
        expect(state.current).toEqual(paneOutput);

        panelService.update({
            id: paneOutput.id,
            data: 'test',
        });

        expect(state.current).toEqual({
            ...paneOutput,
            data: 'test',
        });

        expect(state.data![0]).toEqual({
            ...paneOutput,
            data: 'test',
        });
    });

    test('Should support to subscribe onTabChange', () => {
        const mockFn = jest.fn();
        panelService.onTabChange(mockFn);

        panelService.emit(PanelEvent.onTabChange, 'test');
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe('test');
    });

    test('Should support to subscribe onToolbarClick', () => {
        const mockFn = jest.fn();
        panelService.onToolbarClick(mockFn);

        const mockClick = new Event('click');
        const mockAction = {
            id: 1,
        };
        panelService.emit(PanelEvent.onToolbarClick, mockClick, mockAction);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(mockClick);
        expect(mockFn.mock.calls[0][1]).toEqual(mockAction);
    });

    test('Should support to subscribe onTabClose', () => {
        const mockFn = jest.fn();
        panelService.onTabClose(mockFn);

        panelService.emit(PanelEvent.onTabClose, 'test');
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe('test');
    });
});
