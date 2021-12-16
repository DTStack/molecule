import { ID_SIDE_BAR } from 'mo/common/id';
import { MonacoService } from 'mo/monaco/monacoService';
import { MenuBarService, BuiltinService, LayoutService } from 'mo/services';
import { constants, modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { MenuBarController } from '../menuBar';
import { MenuBarMode } from 'mo/model/workbench/layout';

const menuBarController = container.resolve(MenuBarController);
const menuBarService = container.resolve(MenuBarService);
const monacoService = container.resolve(MonacoService);
const builtinService = container.resolve(BuiltinService);
const layoutService = container.resolve(LayoutService);

const mockEle = document.createElement('div');

describe('The menuBar controller', () => {
    test('Should support to inject the default value', () => {
        menuBarController.initView();

        const {
            MENUBAR_MODE_HORIZONTAL,
            MENUBAR_MODE_VERTICAL,
        } = builtinService.getConstants();
        const mode = layoutService.getMenuBarMode();
        const ids: (string | undefined)[] = [];

        if (mode === MenuBarMode.horizontal) {
            ids.push(MENUBAR_MODE_HORIZONTAL);
        } else if (mode === MenuBarMode.vertical) {
            ids.push(MENUBAR_MODE_VERTICAL);
        }
        const menuBarData = menuBarController.getFilteredMenuBarData(
            modules.builtInMenuBarData(),
            ids
        );

        expect(menuBarService.getState().data).toEqual(menuBarData);
        menuBarService.reset();
    });

    test('Should support to controll the default value', () => {
        builtinService.inactiveModule('builtInMenuBarData');
        menuBarController.initView();

        expect(menuBarService.getState().data).toEqual([]);

        builtinService.reset();
        menuBarController.initView();
    });

    test('Should support to update the focusin element', () => {
        menuBarController.updateFocusinEle(mockEle);

        expect((menuBarController as any).focusinEle).toBe(mockEle);
    });

    test('Should support to execute the onClick method', () => {
        // create file
        const mockEvent = {} as any;
        const mockItem = { id: constants.ACTION_QUICK_CREATE_FILE };
        const mockFn = jest.fn();
        const original = monacoService.commandService.executeCommand;
        const mockExecute = jest.fn();
        monacoService.commandService.executeCommand = mockExecute;
        menuBarService.onSelect(mockFn);

        menuBarController.onClick(mockEvent, mockItem);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockItem.id);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(
            constants.ACTION_QUICK_CREATE_FILE
        );
        mockFn.mockClear();
        mockExecute.mockClear();

        // undo
        mockItem.id = constants.ACTION_QUICK_UNDO;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(constants.ACTION_QUICK_UNDO);
        expect(mockExecute.mock.calls[0][1]).toBe(mockEle);
        mockExecute.mockClear();

        // redo
        mockItem.id = constants.ACTION_QUICK_REDO;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(constants.ACTION_QUICK_REDO);
        expect(mockExecute.mock.calls[0][1]).toBe(mockEle);
        mockExecute.mockClear();

        // select all
        mockItem.id = constants.ACTION_QUICK_SELECT_ALL;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(
            constants.ACTION_QUICK_SELECT_ALL
        );
        expect(mockExecute.mock.calls[0][1]).toBe(mockEle);
        mockExecute.mockClear();

        // copy line up
        mockItem.id = constants.ACTION_QUICK_COPY_LINE_UP;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(
            constants.ACTION_QUICK_COPY_LINE_UP
        );
        mockExecute.mockClear();

        // go to quick command
        mockItem.id = constants.MENU_QUICK_COMMAND;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(
            constants.ACTION_QUICK_COMMAND
        );
        mockExecute.mockClear();

        // update side bar
        mockItem.id = ID_SIDE_BAR;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(ID_SIDE_BAR);
        mockExecute.mockClear();

        // update side bar
        mockItem.id = constants.MENU_VIEW_PANEL;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(constants.MENU_VIEW_PANEL);
        mockExecute.mockClear();
        monacoService.commandService.executeCommand = original;

        const originalUpdate = menuBarService.update;
        menuBarService.update = mockExecute;

        // update activity bar
        mockItem.id = constants.MENU_VIEW_ACTIVITYBAR;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(
            constants.MENU_VIEW_ACTIVITYBAR
        );
        expect(mockExecute.mock.calls[0][1]).toEqual({ icon: '' });

        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute.mock.calls[1][1]).toEqual({ icon: 'check' });
        mockExecute.mockClear();

        // update menu bar
        mockItem.id = constants.MENU_VIEW_MENUBAR;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(constants.MENU_VIEW_MENUBAR);
        expect(mockExecute.mock.calls[0][1]).toEqual({ icon: '' });

        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute.mock.calls[1][1]).toEqual({ icon: 'check' });
        mockExecute.mockClear();

        // update status bar
        mockItem.id = constants.MENU_VIEW_STATUSBAR;
        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute).toBeCalled();
        expect(mockExecute.mock.calls[0][0]).toBe(
            constants.MENU_VIEW_STATUSBAR
        );
        expect(mockExecute.mock.calls[0][1]).toEqual({ icon: '' });

        menuBarController.onClick(mockEvent, mockItem);
        expect(mockExecute.mock.calls[1][1]).toEqual({ icon: 'check' });
        mockExecute.mockClear();
        menuBarService.update = originalUpdate;
    });
});
