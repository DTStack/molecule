import { expectFnCalled, sleep } from '@test/utils';
import { FileTypes } from 'mo/model';
import { FolderTreeService, BuiltinService } from 'mo/services';
import { constants, modules } from 'mo/services/builtinService/const';
import 'reflect-metadata';
import { container } from 'tsyringe';
import { FolderTreeController } from '../explorer/folderTree';

const folderTreeController = container.resolve(FolderTreeController);
const folderTreeService = container.resolve(FolderTreeService);
const builtinService = container.resolve(BuiltinService);

function reset() {
    folderTreeService.reset();
    folderTreeService.setFolderContextMenu([]);
    folderTreeService.setFileContextMenu([]);
}

describe('The folder tree controller', () => {
    test('Should support to initView', () => {
        folderTreeController.initView();

        const { folderTree } = folderTreeService.getState();
        expect(folderTree?.contextMenu).toEqual(modules.COMMON_CONTEXT_MENU);
        expect(folderTree?.folderPanelContextMenu).toEqual(
            modules.FOLDER_PANEL_CONTEXT_MENU
        );
        expect(folderTreeService.getFileContextMenu()).toEqual(
            modules.FILE_CONTEXT_MENU
        );
        expect(folderTreeService.getFolderContextMenu()).toEqual(
            modules.BASE_CONTEXT_MENU
        );

        reset();
    });

    test('Should support to controll the default value', () => {
        builtinService.inactiveModule('FILE_CONTEXT_MENU');
        builtinService.inactiveModule('BASE_CONTEXT_MENU');
        builtinService.inactiveModule('COMMON_CONTEXT_MENU');
        builtinService.inactiveModule('FOLDER_PANEL_CONTEXT_MENU');

        folderTreeController.initView();
        const { folderTree } = folderTreeService.getState();
        expect(folderTree?.contextMenu).toEqual([]);
        expect(folderTree?.folderPanelContextMenu).toEqual([]);
        expect(folderTreeService.getFileContextMenu()).toEqual([]);
        expect(folderTreeService.getFolderContextMenu()).toEqual([]);

        reset();
        builtinService.reset();
    });

    test('Should support to createTreeNode', () => {
        folderTreeController.initView();
        // add a root folder
        folderTreeService.add({
            id: 1,
            fileType: 'RootFolder',
            children: [{ id: 2, fileType: 'File' }],
        });
        const mockFn = jest.fn();
        // create a node after the first root node
        folderTreeService.onCreate(mockFn);
        folderTreeController.createTreeNode('File');

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe('File');
        expect(mockFn.mock.calls[0][1]).toBe(1);

        // create a node after the current
        folderTreeService.setActive(2);
        folderTreeController.createTreeNode('File');

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[1][0]).toBe('File');
        expect(mockFn.mock.calls[1][1]).toBe(2);
    });

    test('Should support to execute the onClickContextMenu method', () => {
        // RENAME_COMMAND_ID
        const mockContextMenu = { id: constants.RENAME_COMMAND_ID };
        const mockTreeNode = {
            id: 2,
            fileType: FileTypes.File,
        };
        const mockFn = jest.fn();
        folderTreeService.onRename(mockFn);
        folderTreeController.onClickContextMenu(mockContextMenu, mockTreeNode);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockTreeNode.id);
        mockFn.mockClear();

        // DELETE_COMMAND_ID
        mockContextMenu.id = constants.DELETE_COMMAND_ID;
        folderTreeService.onRemove(mockFn);
        folderTreeController.onClickContextMenu(mockContextMenu, mockTreeNode);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toBe(mockTreeNode.id);
        mockFn.mockClear();

        // NEW_FILE_COMMAND_ID
        mockContextMenu.id = constants.NEW_FILE_COMMAND_ID;
        folderTreeService.onCreate(mockFn);
        folderTreeController.onClickContextMenu(mockContextMenu, mockTreeNode);

        expect(mockFn).toBeCalled();
        mockFn.mockClear();

        // NEW_FOLDER_COMMAND_ID
        mockContextMenu.id = constants.NEW_FOLDER_COMMAND_ID;
        folderTreeService.onCreate(mockFn);
        folderTreeController.onClickContextMenu(mockContextMenu, mockTreeNode);

        expect(mockFn).toBeCalled();
        mockFn.mockClear();

        // OPEN_TO_SIDE_COMMAND_ID
        mockContextMenu.id = constants.OPEN_TO_SIDE_COMMAND_ID;
        folderTreeService.onSelectFile(mockFn);
        folderTreeController.onClickContextMenu(mockContextMenu, mockTreeNode);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(mockTreeNode);
        expect(folderTreeService.getState().folderTree?.current).toEqual(
            expect.objectContaining(mockTreeNode)
        );
        mockFn.mockClear();

        // default
        mockContextMenu.id = 'customized-id';
        folderTreeService.onContextMenu(mockFn);
        folderTreeController.onClickContextMenu(mockContextMenu, mockTreeNode);

        expect(mockFn).toBeCalled();
        expect(mockFn.mock.calls[0][0]).toEqual(mockContextMenu);
        expect(mockFn.mock.calls[0][1]).toEqual(mockTreeNode);
        mockFn.mockClear();
    });

    test('Should support to execute the onRightClick method', () => {
        const mockTreeNode = {
            id: 1,
            fileType: FileTypes.File,
        };
        // get the file contextMenus
        const mockFn = jest
            .fn()
            .mockImplementationOnce((_, menus) => menus)
            .mockImplementationOnce((_, menus) => menus)
            .mockImplementationOnce((_, menus) => menus)
            // make the array clear last time
            .mockImplementation((_, menus) => {
                menus.length = 0;
            });
        folderTreeService.onRightClick(mockFn);
        let menus = folderTreeController.onRightClick(mockTreeNode);

        expect(menus).toEqual([
            ...modules.FILE_CONTEXT_MENU,
            ...modules.COMMON_CONTEXT_MENU,
        ]);

        // get the folder contextMenus
        mockTreeNode.fileType = FileTypes.Folder;
        menus = folderTreeController.onRightClick(mockTreeNode);
        expect(menus).toEqual([
            ...modules.BASE_CONTEXT_MENU,
            ...modules.COMMON_CONTEXT_MENU,
        ]);

        // get the root folder contextMenus
        mockTreeNode.fileType = FileTypes.RootFolder;
        menus = folderTreeController.onRightClick(mockTreeNode);
        expect(menus).toEqual([
            ...modules.BASE_CONTEXT_MENU,
            ...modules.ROOT_FOLDER_CONTEXT_MENU,
        ]);

        // error fileTypes
        mockTreeNode.fileType = 'error-type' as any;
        menus = folderTreeController.onRightClick(mockTreeNode);
        expect(menus).toEqual([]);

        // the subscribe event can effect the result
        menus = folderTreeController.onRightClick(mockTreeNode);
        expect(menus).toEqual([]);
    });

    test('Should support to execute the onDropTree method', () => {
        expectFnCalled((mockFn) => {
            folderTreeService.onDropTree(mockFn);
            const mockSource = {
                id: 1,
            };
            const mockTarget = {
                id: 2,
            };
            folderTreeController.onDropTree(mockSource, mockTarget);

            expect(mockFn.mock.calls[0][0]).toBe(mockSource);
            expect(mockFn.mock.calls[0][1]).toBe(mockTarget);
        });
    });

    test('Should support to execute the onUpdateFileName method', () => {
        expectFnCalled((fn) => {
            const mockFile = { id: 1 };
            folderTreeService.onUpdateFileName(fn);
            folderTreeController.onUpdateFileName(mockFile);

            expect(fn.mock.calls[0][0]).toBe(mockFile);
        });
    });

    test('Should support to execute the onLoadData method', async () => {
        const mockTreeNode = {
            id: 2,
        };
        const res = folderTreeController.onLoadData(mockTreeNode);
        expect(res).toEqual(Promise.resolve());

        const mockFn = jest.fn().mockImplementation((treeNode, callback) => {
            sleep(1000).then(() => {
                treeNode.children = [{ id: 3 }];
                callback(treeNode);
            });
        });
        folderTreeService.onLoadData(mockFn);
        folderTreeController.onLoadData(mockTreeNode);

        await sleep(1000);
        expect(mockFn).toBeCalled();
        expect(folderTreeService.get(2)?.children).toHaveLength(1);
    });
});
