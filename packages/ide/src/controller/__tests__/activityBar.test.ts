import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { constants } from 'mo/services/builtinService/const';
import { container } from 'tsyringe';
import { MenuBarController, ActivityBarController } from 'mo/controller';
import { ActivityBarService, SettingsService } from 'mo/services';
import { MonacoService } from 'mo/monaco/monacoService';

const menuBarController = container.resolve(MenuBarController);
const activityBarController = container.resolve(ActivityBarController);
const activityBarService = container.resolve(ActivityBarService);
const monacoService = container.resolve(MonacoService);
const settingsService = container.resolve(SettingsService);

describe('The ActivityBar Controller', () => {
    afterEach(cleanup);

    test('Should support to inject the default value', () => {
        activityBarController.initView();
        expect(activityBarService.getState().data?.length).toBeGreaterThan(0);
        expect(
            activityBarService.getState().contextMenu?.length
        ).toBeGreaterThan(0);
        activityBarService.reset();
    });

    test('Should support to execute onContextMenuClick', () => {
        const mockFn = jest.fn();
        const item = { id: constants.CONTEXT_MENU_MENU };
        let originalFunc;

        // click menu item
        originalFunc = menuBarController.updateMenuBar;
        menuBarController.updateMenuBar = mockFn;
        activityBarController.onContextMenuClick({} as any, item);
        expect(mockFn).toBeCalled();
        menuBarController.updateMenuBar = originalFunc;
        mockFn.mockClear();

        // click explorer item
        item.id = constants.CONTEXT_MENU_EXPLORER;
        originalFunc = activityBarService.toggleBar;
        activityBarService.toggleBar = mockFn;
        activityBarController.onContextMenuClick({} as any, item);
        expect(mockFn).toBeCalled();
        activityBarService.toggleBar = originalFunc;
        mockFn.mockClear();

        // click search item
        item.id = constants.CONTEXT_MENU_SEARCH;
        originalFunc = activityBarService.toggleBar;
        activityBarService.toggleBar = mockFn;
        activityBarController.onContextMenuClick({} as any, item);
        expect(mockFn).toBeCalled();
        activityBarService.toggleBar = originalFunc;
        mockFn.mockClear();

        // click hide item
        item.id = constants.CONTEXT_MENU_HIDE;
        originalFunc = menuBarController.updateActivityBar;
        menuBarController.updateActivityBar = mockFn;
        activityBarController.onContextMenuClick({} as any, item);
        expect(mockFn).toBeCalled();
        menuBarController.updateActivityBar = originalFunc;
        mockFn.mockClear();

        // click command item
        item.id = constants.ACTION_QUICK_COMMAND;
        originalFunc = monacoService.commandService.executeCommand;
        monacoService.commandService.executeCommand = mockFn;
        activityBarController.onContextMenuClick({} as any, item);
        expect(mockFn).toBeCalled();
        monacoService.commandService.executeCommand = originalFunc;
        mockFn.mockClear();

        // click theme item
        item.id = constants.ACTION_SELECT_THEME;
        originalFunc = monacoService.commandService.executeCommand;
        monacoService.commandService.executeCommand = mockFn;
        activityBarController.onContextMenuClick({} as any, item);
        expect(mockFn).toBeCalled();
        monacoService.commandService.executeCommand = originalFunc;
        mockFn.mockClear();

        // click settings item
        item.id = constants.ACTION_QUICK_ACCESS_SETTINGS;
        originalFunc = settingsService.openSettingsInEditor;
        settingsService.openSettingsInEditor = mockFn;
        activityBarController.onContextMenuClick({} as any, item);
        expect(mockFn).toBeCalled();
        settingsService.openSettingsInEditor = originalFunc;
        mockFn.mockClear();
    });
});
