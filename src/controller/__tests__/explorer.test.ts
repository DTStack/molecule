import { EditorTreeEvent, ExplorerEvent, FileTypes } from 'mo/model';
import {
    ActivityBarService,
    SidebarService,
    ExplorerService,
    BuiltinService,
} from 'mo/services';
import { constants, modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { ExplorerController, FolderTreeController } from '..';

const explorerController = container.resolve(ExplorerController);

const activityBarService = container.resolve(ActivityBarService);
const sidebarService = container.resolve(SidebarService);
const explorerService = container.resolve(ExplorerService);
const folderTreeController = container.resolve(FolderTreeController);
const builtinService = container.resolve(BuiltinService);

describe('The explorer controller', () => {
    test('Should support to inject the default value into service', () => {
        explorerController.initView();

        const { headerToolBar, data } = explorerService.getState();
        const { id, icon, title } = modules.builtInExplorerHeaderToolbar();
        expect(headerToolBar!.id).toBe(id);
        expect(headerToolBar!.icon).toBe(icon);
        expect(headerToolBar!.title).toBe(title);
        expect(headerToolBar!.contextMenu).toHaveLength(1);

        expect(data).toHaveLength(1);
        expect(data[0]).toEqual(
            expect.objectContaining(modules.builtInExplorerFolderPanel())
        );

        const {
            data: activityBarData,
            selected,
        } = activityBarService.getState();
        const builtInExplorerActivityItem = modules.builtInExplorerActivityItem();

        expect(activityBarData).toHaveLength(1);
        expect(activityBarData![0]).toEqual(
            expect.objectContaining(builtInExplorerActivityItem)
        );
        expect(selected).toBe(builtInExplorerActivityItem.id);

        const { current, panes } = sidebarService.getState();
        expect(panes).toHaveLength(1);
        expect(panes[0]).toEqual(
            expect.objectContaining({
                id: constants.EXPLORER_ACTIVITY_ITEM,
                title: 'EXPLORER',
            })
        );
        expect(current).toBe(constants.EXPLORER_ACTIVITY_ITEM);

        explorerService.reset();
        activityBarService.reset();
        sidebarService.reset();
    });

    test('Should support to controll the default value by built-in service', () => {
        builtinService.inactiveModule('builtInExplorerActivityItem');
        builtinService.inactiveModule('builtInExplorerFolderPanel');
        builtinService.inactiveModule('builtInExplorerHeaderToolbar');

        explorerController.initView();
        const { data, headerToolBar } = explorerService.getState();
        expect(headerToolBar).toBeUndefined();
        expect(data).toHaveLength(0);

        const {
            data: activityBarData,
            selected,
        } = activityBarService.getState();
        expect(activityBarData).toHaveLength(0);
        expect(selected).toBe('');

        const { current, panes } = sidebarService.getState();
        expect(panes).toHaveLength(0);
        expect(current).toBe('');

        builtinService.reset();
    });

    test('Should support to emit the onClick method', () => {
        explorerController.initView();

        const mockFn = jest.fn();
        explorerService.onClick(mockFn);

        const mockEvent = {} as any;
        const mockItem = { id: 'test' };
        explorerController.onClick(mockEvent, mockItem);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockEvent);
        expect(mockFn.mock.calls[0][1]).toBe(mockItem);
    });

    test('Should execute onActionsContextMenuClick', () => {
        const original = explorerService.togglePanel;
        const mockFn = jest.fn();
        explorerService.togglePanel = mockFn;

        const mockItem = { id: 'test' };
        explorerController.onActionsContextMenuClick({} as any, mockItem);
        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockItem.id);

        explorerService.togglePanel = original;
    });

    test('Should support to emit the onCollapseChange method', () => {
        const mockFn = jest.fn();
        explorerController.subscribe(ExplorerEvent.onCollapseChange, mockFn);

        const mockKeys = [1, 2, 3];
        explorerController.onCollapseChange(mockKeys);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockKeys);
    });

    test('Should support to execute the create tree node in the onToolbarClick method', () => {
        const original = folderTreeController.createTreeNode;
        const mockFn = jest.fn();
        folderTreeController.createTreeNode = mockFn;

        const mockItem = { id: constants.NEW_FILE_COMMAND_ID };
        const mockParentPanel = { id: 'test', name: 'test' };
        explorerController.onToolbarClick(mockItem, mockParentPanel);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(FileTypes.File);

        mockFn.mockClear();

        mockItem.id = constants.NEW_FOLDER_COMMAND_ID;
        explorerController.onToolbarClick(mockItem, mockParentPanel);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(FileTypes.Folder);

        folderTreeController.createTreeNode = original;
    });

    test('Should suppor t o execute the collapse in the onToolbarClick method', () => {
        const original = folderTreeController.collapseAll;
        const mockFn = jest.fn();
        folderTreeController.collapseAll = mockFn;

        const mockItem = { id: constants.COLLAPSE_COMMAND_ID };
        const mockParentPanel = { id: 'test', name: 'test' };
        explorerController.onToolbarClick(mockItem, mockParentPanel);

        expect(mockFn).toBeCalled();
        folderTreeController.createTreeNode = original;
    });

    test('Should support to execute the others in the onToolbarClick method', () => {
        // REMOVE_COMMAND_ID
        const mockItem = { id: constants.REMOVE_COMMAND_ID };
        const mockParentPanel = { id: 'test', name: 'test' };

        const mockFn = jest.fn();
        explorerService.onRemovePanel(mockFn);

        explorerController.onToolbarClick(mockItem, mockParentPanel);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockParentPanel);

        // EXPLORER_TOGGLE_CLOSE_ALL_EDITORS
        mockItem.id = constants.EXPLORER_TOGGLE_CLOSE_ALL_EDITORS;
        mockFn.mockClear();
        expect(mockFn).not.toBeCalled();
        explorerController.subscribe(EditorTreeEvent.onCloseAll, mockFn);

        explorerController.onToolbarClick(mockItem, mockParentPanel);

        expect(mockFn).toBeCalled();

        // EXPLORER_TOGGLE_SAVE_ALL
        mockItem.id = constants.EXPLORER_TOGGLE_SAVE_ALL;
        mockFn.mockClear();
        expect(mockFn).not.toBeCalled();
        explorerController.subscribe(EditorTreeEvent.onSaveAll, mockFn);

        explorerController.onToolbarClick(mockItem, mockParentPanel);

        expect(mockFn).toBeCalled();

        // EXPLORER_TOGGLE_VERTICAL
        mockItem.id = constants.EXPLORER_TOGGLE_VERTICAL;
        mockFn.mockClear();
        expect(mockFn).not.toBeCalled();
        explorerController.subscribe(
            EditorTreeEvent.onSplitEditorLayout,
            mockFn
        );

        explorerController.onToolbarClick(mockItem, mockParentPanel);

        expect(mockFn).toBeCalled();

        // default
        mockItem.id = 'custom-id';
        mockFn.mockClear();
        expect(mockFn).not.toBeCalled();
        explorerService.onPanelToolbarClick(mockFn);

        explorerController.onToolbarClick(mockItem, mockParentPanel);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockParentPanel);
        expect(mockFn.mock.calls[0][1]).toBe(mockItem.id);
    });
});
