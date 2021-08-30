import 'reflect-metadata';
import { container } from 'tsyringe';
import {
    IFolderTreeService,
    FolderTreeService,
} from '../explorer/folderTreeService';

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

    test('FolderTreeService Class instance', () => {
        expect(folderTreeService).not.toBeUndefined();
        console.log(folderTreeService.getState());
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
});
