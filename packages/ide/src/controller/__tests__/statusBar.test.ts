import 'reflect-metadata';
import { container } from 'tsyringe';
import { StatusBarController } from '../statusBar';
import { StatusBarService, BuiltinService } from 'mo/services';
import { MenuBarController } from '../menuBar';
import { constants, modules } from 'mo/services/builtinService/const';

const statusBarController = container.resolve(StatusBarController);
const menuBarController = container.resolve(MenuBarController);
const statusBarService = container.resolve(StatusBarService);
const builtinService = container.resolve(BuiltinService);

describe('The statusBar controller', () => {
    test('Should support to inject default value into service', () => {
        statusBarController.initView();

        const { leftItems, rightItems, contextMenu } =
            statusBarService.getState();
        expect(rightItems).toHaveLength(1);
        expect(leftItems).toHaveLength(0);
        expect(contextMenu).toHaveLength(1);
        expect(rightItems[0]).toEqual(
            expect.objectContaining(modules.STATUS_EDITOR_INFO?.())
        );

        statusBarService.reset();
    });

    test('Should support to controll the default value', () => {
        builtinService.inactiveModule('STATUS_EDITOR_INFO');
        builtinService.inactiveModule('CONTEXT_MENU_HIDE_STATUS_BAR');
        statusBarController.initView();

        const { leftItems, rightItems, contextMenu } =
            statusBarService.getState();
        expect(rightItems).toHaveLength(0);
        expect(leftItems).toHaveLength(0);
        expect(contextMenu).toHaveLength(0);
    });

    test('Should support to emit onClick', () => {
        const mockFn = jest.fn();
        statusBarService.onClick(mockFn);

        const event = {} as any;
        const item = {
            id: 'mock',
        };

        statusBarController.onClick(event, item);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(event);
        expect(mockFn.mock.calls[0][1]).toBe(item);
    });

    test('Should support to execute onContextMenuClick', () => {
        const original = menuBarController.updateStatusBar;
        const mockFn = jest.fn();
        menuBarController.updateStatusBar = mockFn;
        statusBarController.onContextMenuClick({} as any, { id: 'mock' });
        expect(mockFn).not.toBeCalled();

        const item = {
            id: constants.STATUS_BAR_HIDE_ID,
        };
        statusBarController.onContextMenuClick({} as any, item);
        expect(mockFn).toBeCalled();

        menuBarController.updateStatusBar = original;
    });
});
