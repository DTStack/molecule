import { Button } from 'mo/components/button';
import 'reflect-metadata';
import { container } from 'tsyringe';
import {
    FileTypes,
    IFolderTreeNodeProps,
    TreeNodeModel,
} from 'mo/model/workbench/explorer/folderTree';
import { expectFnCalled, expectLoggerErrorToBeCalled } from '@test/utils';

import {
    IFolderTreeService,
    FolderTreeService,
} from '../explorer/folderTreeService';
import { FolderTreeEvent } from 'mo/model/workbench/explorer/folderTree';
import { randomId } from 'mo/common/utils';

const TEST_ID = 'test-id';

describe('Test StatusBarService', () => {
    const folderTreeService =
        container.resolve<IFolderTreeService>(FolderTreeService);
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

    test('Should support to set active node', () => {
        const mockRootTree: IFolderTreeNodeProps = {
            id: 0,
            name: 'test0',
            fileType: 'RootFolder',
            location: 'test0',
        };
        folderTreeService.add(mockRootTree);

        let activeNode = folderTreeService.getState().folderTree?.current;
        expect(activeNode).toBeFalsy();

        folderTreeService.setActive(mockRootTree.id);
        activeNode = folderTreeService.getState().folderTree?.current;
        expect(activeNode).not.toBeFalsy();

        folderTreeService.setActive();
        activeNode = folderTreeService.getState().folderTree?.current;
        expect(activeNode).toBeFalsy();
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

    test('Should insert a  file or a folder in a sorted way', () => {
        const mockRootTree = new TreeNodeModel({
            id: randomId(),
            name: 'molecule_temp',
            fileType: FileTypes.RootFolder,
        });
        folderTreeService.add(mockRootTree);
        const mockFolder = new TreeNodeModel({
            id: randomId(),
            name: 'mock_folder',
            fileType: FileTypes.Folder,
            isLeaf: false,
        });
        folderTreeService.add(mockFolder, mockRootTree.id);
        let rootFolder = folderTreeService.get(mockRootTree.id)!;

        expect(rootFolder.children).toHaveLength(1);

        const anotherMockFolder = new TreeNodeModel({
            id: randomId(),
            name: 'another_mock_folder',
            fileType: FileTypes.Folder,
            isLeaf: false,
        });
        folderTreeService.add(anotherMockFolder, mockRootTree.id);
        rootFolder = folderTreeService.get(mockRootTree.id)!;

        expect(rootFolder.children).toHaveLength(2);
        expect(rootFolder.children).toEqual([anotherMockFolder, mockFolder]);

        const mockFile = new TreeNodeModel({
            id: randomId(),
            name: 'mock_file',
            fileType: FileTypes.File,
            isLeaf: true,
        });
        folderTreeService.add(mockFile, mockRootTree.id);
        rootFolder = folderTreeService.get(mockRootTree.id)!;

        expect(rootFolder.children).toHaveLength(3);
        expect(rootFolder.children).toEqual([
            anotherMockFolder,
            mockFolder,
            mockFile,
        ]);
    });

    test('Should NOT add root folder when there is a root folder', () => {
        const mockRootTree: IFolderTreeNodeProps = {
            id: '0',
            name: 'test0',
            fileType: 'RootFolder',
            location: 'test0',
        };
        const anotherMockRoot: IFolderTreeNodeProps = {
            id: '1',
            name: 'test1',
            fileType: 'RootFolder',
            location: 'test1',
        };

        folderTreeService.add(mockRootTree);
        let data = folderTreeService.getState().folderTree?.data || [];

        expect(data).toHaveLength(1);
        expect(data[0]).toEqual(mockRootTree);

        folderTreeService.add(anotherMockRoot);
        data = folderTreeService.getState().folderTree?.data || [];
        expect(data).toHaveLength(1);
        expect(data[0]).toEqual(mockRootTree);
    });

    test('Should throw Error when adding without providing id', () => {
        const mockRootTree: IFolderTreeNodeProps = {
            id: '0',
            name: 'test0',
            fileType: 'RootFolder',
            location: 'test0',
        };
        folderTreeService.add(mockRootTree);

        expect(() =>
            folderTreeService.add({ id: '1', name: 'test1', fileType: 'File' })
        ).toThrow();
    });

    test('Should logger ERROR message when adding failed', () => {
        const mockRootTree: IFolderTreeNodeProps = {
            id: '0',
            name: 'test0',
            fileType: 'RootFolder',
            location: 'test0',
        };
        folderTreeService.add(mockRootTree);
        expectLoggerErrorToBeCalled(() => {
            folderTreeService.add(
                { id: '1', name: 'test1', fileType: 'File' },
                'without-id'
            );
        });
    });

    test('Should recognize the type of the parent node', () => {
        const mockRootTree: IFolderTreeNodeProps = {
            id: '0',
            name: 'test0',
            fileType: 'RootFolder',
            location: 'test0',
        };
        const fileNode: IFolderTreeNodeProps = {
            id: '1',
            name: 'test1',
            fileType: 'File',
            location: 'test1',
            isLeaf: true,
        };
        const pendingNode: IFolderTreeNodeProps = {
            id: '2',
            name: 'test2',
            fileType: 'File',
            location: 'test2',
            isLeaf: true,
        };
        folderTreeService.add(mockRootTree);
        folderTreeService.add(fileNode, mockRootTree.id);

        folderTreeService.add(pendingNode, fileNode.id);
        const data = folderTreeService.getState().folderTree?.data || [];

        expect(data).toHaveLength(1);

        const children = data[0].children!;
        expect(children).toHaveLength(2);
        expect(children[0]).toEqual({
            ...pendingNode,
        });
    });

    test('Should in sort', () => {
        const ignoreFolder = new TreeNodeModel({
            id: 'ignore-folder',
            fileType: FileTypes.Folder,
            name: '.git',
            isLeaf: false,
            children: [],
        });
        const normalFolder = new TreeNodeModel({
            id: 'nomral-folder',
            fileType: FileTypes.Folder,
            name: 'folder',
            isLeaf: false,
            children: [],
        });
        const normalFile = new TreeNodeModel({
            id: 'nomral-file',
            fileType: FileTypes.File,
            name: 'file',
            isLeaf: true,
            children: [],
        });
        const ignoreFile = new TreeNodeModel({
            id: 'ignore-file',
            fileType: FileTypes.File,
            name: '.gitignore',
            isLeaf: true,
            children: [],
        });
        const root = new TreeNodeModel({
            id: 'root',
            fileType: FileTypes.RootFolder,
            name: 'root-test',
            isLeaf: false,
            children: [ignoreFile, normalFile, normalFolder, ignoreFolder],
        });
        folderTreeService.toggleAutoSort();
        folderTreeService.add(root);

        // let data = folderTreeService.getState().folderTree?.data || [];
        let rootNode = folderTreeService.get('root')!;
        expect(rootNode.children?.map((i) => i.name)).toEqual([
            '.git',
            'folder',
            '.gitignore',
            'file',
        ]);

        // add a file
        folderTreeService.add(
            new TreeNodeModel({
                id: 'another-ignore-file',
                fileType: FileTypes.File,
                name: '.prettierignore',
                isLeaf: true,
                children: [],
            }),
            'root'
        );

        rootNode = folderTreeService.get('root')!;
        expect(rootNode.children?.map((i) => i.name)).toEqual([
            '.git',
            'folder',
            '.gitignore',
            '.prettierignore',
            'file',
        ]);

        // add a folder
        folderTreeService.add(
            new TreeNodeModel({
                id: 'another-normal-folder',
                fileType: FileTypes.Folder,
                name: 'another-folder',
                isLeaf: false,
                children: [],
            }),
            'root'
        );

        rootNode = folderTreeService.get('root')!;
        expect(rootNode.children?.map((i) => i.name)).toEqual([
            '.git',
            'another-folder',
            'folder',
            '.gitignore',
            '.prettierignore',
            'file',
        ]);

        // add a input
        folderTreeService.add(
            new TreeNodeModel({
                id: 'create-folder',
                fileType: FileTypes.Folder,
                name: '',
                isEditable: true,
                isLeaf: false,
                children: [],
            }),
            'root'
        );

        rootNode = folderTreeService.get('root')!;
        expect(rootNode.children?.map((i) => i.name)).toEqual([
            '',
            '.git',
            'another-folder',
            'folder',
            '.gitignore',
            '.prettierignore',
            'file',
        ]);

        // update tree node when autoSort is true
        root.name = 'new-root';
        folderTreeService.update(root);
        expect(folderTreeService.get(root.id)?.name).toBe('new-root');
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

    test('Should support to logger ERROR message when remove failed', () => {
        expectLoggerErrorToBeCalled(() => {
            folderTreeService.remove('1');
        });
    });

    test('Should support to update file name', () => {
        expectFnCalled((fn) => {
            folderTreeService.onUpdateFileName(fn);
            folderTreeService.emit(FolderTreeEvent.onUpdateFileName, 0);
            expect(fn.mock.calls[0][0]).toBe(0);
        });
    });

    test('Should support to logger ERROR message when update failde', () => {
        expectLoggerErrorToBeCalled(() => {
            folderTreeService.update({
                id: 1,
                name: 'test',
                fileType: 'RootFolder',
            });
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
