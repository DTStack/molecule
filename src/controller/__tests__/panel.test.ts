import { MonacoService } from 'mo/monaco/monacoService';
import { PanelService, BuiltinService } from 'mo/services';
import { constants, modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { PanelController } from '../panel';

const panelController = container.resolve(PanelController);
const panelService = container.resolve(PanelService);
const monacoService = container.resolve(MonacoService);
const builtinService = container.resolve(BuiltinService);

describe('The panel controller', () => {
    test('Should support to inject the default value into service', () => {
        panelController.initView();

        const { current, data, toolbox } = panelService.getState();
        expect(data).toHaveLength(1);
        expect(data![0]).toEqual(
            expect.objectContaining(modules.builtInOutputPanel())
        );
        expect(current).toEqual(
            expect.objectContaining(modules.builtInOutputPanel())
        );

        expect(toolbox).toHaveLength(2);
        expect(toolbox).toEqual([
            modules.builtInPanelToolboxResize(),
            modules.builtInPanelToolbox(),
        ]);

        panelService.reset();
    });

    test('Should support to adjust the default value', () => {
        builtinService.inactiveModule('builtInOutputPanel');
        builtinService.inactiveModule('builtInPanelToolbox');
        builtinService.inactiveModule('builtInPanelToolboxResize');
        panelController.initView();

        const { current, data, toolbox } = panelService.getState();
        expect(data).toHaveLength(0);
        expect(current).toBeFalsy();

        expect(toolbox).toHaveLength(0);

        builtinService.reset();
        panelService.reset();
    });

    test('Should support to execute onTabChange', () => {
        panelController.initView();

        const mockFn = jest.fn();
        panelService.onTabChange(mockFn);

        panelController.onTabChange(modules.builtInOutputPanel().id);

        expect(panelService.getState().current).toEqual(
            expect.objectContaining(modules.builtInOutputPanel())
        );
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(modules.builtInOutputPanel().id);
    });

    test('Should support to subscribe onClose', () => {
        const mockFn = jest.fn();
        panelService.onTabClose(mockFn);

        panelController.onClose(modules.builtInOutputPanel().id);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(modules.builtInOutputPanel().id);
    });

    test('Should support to execute onToolbarClick', () => {
        const mockFn = jest.fn();
        panelService.onToolbarClick(mockFn);
        const mockItem = { id: 'test' };
        const mockEvent = {} as any;
        panelController.onToolbarClick(mockEvent, mockItem);

        expect(mockFn).toBeCalledTimes(1);
        expect(mockFn.mock.calls[0][0]).toBe(mockEvent);
        expect(mockFn.mock.calls[0][1]).toBe(mockItem);
    });

    test('Should support to execute command by toolbar clicking', () => {
        const mockFn = jest.fn();
        panelService.onToolbarClick(mockFn);

        const original = monacoService.commandService.executeCommand;
        const mockExecute = jest.fn();
        monacoService.commandService.executeCommand = mockExecute;
        panelController.onToolbarClick({} as any, {
            id: constants.PANEL_TOOLBOX_CLOSE,
        });
        expect(mockFn).toBeCalledTimes(1);
        expect(mockExecute).toBeCalledTimes(1);

        monacoService.commandService.executeCommand = original;
    });

    test('Should support to toggle the panel maximize', () => {
        const mockFn = jest.fn();
        panelService.onToolbarClick(mockFn);

        const original = panelService.toggleMaximize;
        const mockToggle = jest.fn();
        panelService.toggleMaximize = mockToggle;
        panelController.onToolbarClick({} as any, {
            id: constants.PANEL_TOOLBOX_RESIZE,
        });
        expect(mockFn).toBeCalledTimes(1);
        expect(mockToggle).toBeCalledTimes(1);

        panelService.toggleMaximize = original;
    });
});
