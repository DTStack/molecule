import { Button } from 'mo/components/button';
import 'reflect-metadata';
import { container } from 'tsyringe';
import {
    FileTypes,
    IFolderTreeNodeProps,
} from 'mo/model/workbench/explorer/folderTree';
import { expectFnCalled } from '@test/utils';

import {
    IFolderTreeService,
    FolderTreeService,
} from '../explorer/folderTreeService';
import { FolderTreeEvent } from 'mo/model/workbench/explorer/folderTree';

const TEST_ID = 'test-id';

describe('Test StatusBarService', () => {
    const folderTreeService = container.resolve<IFolderTreeService>(
        FolderTreeService
    );
    const mockMenuProps = [
        {
            id: 'File',
            name: 'File',
            data: [
                {
                    id: 'New File',
                    name: 'New File',
                },
                {
                    id: 'OpenFile',
                    name: 'Open',
                },
            ],
        },
    ];

    beforeEach(() => {
        folderTreeService.reset();
    });

    test('FolderTreeService Class instance', () => {
        expect(folderTreeService).not.toBeUndefined();
        expect(folderTreeService.getState()).not.toBeUndefined();
    });

    test('Should support to set empty file context menu', () => {
        folderTreeService.setFileContextMenu([]);
        expect(folderTreeService.getFileContextMenu()).toEqual([]);
    });

    test('Should support to set file context menu', () => {
        folderTreeService.setFileContextMenu(mockMenuProps);
        expect(folderTreeService.getFileContextMenu()).toEqual(mockMenuProps);
    });

    test('Should support to set empty folder context menu', () => {
        folderTreeService.setFolderContextMenu([]);
        expect(folderTreeService.getFolderContextMenu()).toEqual([]);
    });

    test('Should support to set folder context menu', () => {
        folderTreeService.setFolderContextMenu(mockMenuProps);
        expect(folderTreeService.getFolderContextMenu()).toEqual(mockMenuProps);
    });

    test('Should support to set root folder tree', () => {
        const mockRootTree: IFolderTreeNodeProps = {
            id: '0',
            name: 'test0',
            fileType: 'RootFolder',
            location: 'test0',
        };
        const mockTreeData = {
            id: '1',
            name: 'test1',
            children: [
                {
                    id: '2',
                    name: 'test1-1',
                    icon: 'test',
                    isLeaf: true,
                    fileType: FileTypes.File,
                },
            ],
        };
        const mockFileData = {
            id: '3',
            name: 'test1-2',
            icon: 'test',
            isLeaf: true,
            fileType: FileTypes.File,
        };

        folderTreeService.add(mockRootTree);
        expect(folderTreeService.get(mockRootTree.id)).toEqual(mockRootTree);

        folderTreeService.add(mockTreeData, mockRootTree.id);
        expect(folderTreeService.get(mockTreeData.id)).toEqual(mockTreeData);

        folderTreeService.add(mockFileData, mockTreeData.id);
        expect(folderTreeService.get(mockFileData.id)).toEqual(mockFileData);

        folderTreeService.setActive(mockRootTree.id);
        const currentNode = folderTreeService.getState()?.folderTree!.current;
        expect(currentNode!.id).toBe(mockRootTree.id);

        folderTreeService.remove(mockFileData.id);
        expect(folderTreeService.get(mockFileData.id)).toBeNull();

        mockTreeData.name = TEST_ID;
        folderTreeService.update(mockTreeData);
        expect(folderTreeService.get(mockTreeData.id)?.name).toBe(TEST_ID);
    });

    test('Should support to set entry', () => {
        folderTreeService.setEntry(Button);
        expect(folderTreeService.getState().entry).toEqual(Button);
    });

    test('Should support to rename', () => {
        expectFnCalled((fn) => {
            folderTreeService.onRename(fn);
            folderTreeService.emit(FolderTreeEvent.onRename);
        });
    });

    test('Should support to remove', () => {
        expectFnCalled((fn) => {
            folderTreeService.onRemove(fn);
            folderTreeService.emit(FolderTreeEvent.onDelete);
        });
    });

    test('Should support to update file name', () => {
        expectFnCalled((fn) => {
            folderTreeService.onUpdateFileName(fn);
            folderTreeService.emit(FolderTreeEvent.onUpdateFileName, 0);
            expect(fn.mock.calls[0][0]).toBe(0);
        });
    });

    test('Should support to select file', () => {
        expectFnCalled((fn) => {
            folderTreeService.onSelectFile(fn);
            folderTreeService.emit(FolderTreeEvent.onSelectFile);
        });
    });

    test('Should support to right click', () => {
        expectFnCalled((fn) => {
            folderTreeService.onRightClick(fn);
            folderTreeService.emit(FolderTreeEvent.onRightClick);
        });
    });

    test('Should support to create event', () => {
        expectFnCalled((fn) => {
            folderTreeService.onCreate(fn);
            folderTreeService.emit(FolderTreeEvent.onCreate);
        });
    });

    test('Should support to contextMenu event', () => {
        expectFnCalled((fn) => {
            folderTreeService.onContextMenu(fn);
            folderTreeService.emit(FolderTreeEvent.onContextMenuClick);
        });
    });

    test('Should support to load data', () => {
        expectFnCalled((fn) => {
            folderTreeService.onLoadData(fn);
            folderTreeService.emit(FolderTreeEvent.onLoadData);
        });
    });

    test('Should support to subscribe drop tree event', () => {
        expectFnCalled((fn) => {
            folderTreeService.onDropTree(fn);
            folderTreeService.emit(FolderTreeEvent.onDrop);
        });
    });
});
