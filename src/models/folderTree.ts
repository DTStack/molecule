import type { IMenuItemProps, UniqueId } from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';

export enum FolderTreeEvent {
    onSelectFile = 'folderTree.onSelectFile',
    onDelete = 'folderTree.onDelete',
    onRename = 'folderTree.onRename',
    onUpdateFileName = 'folderTree.onUpdateFileName',
    onRightClick = 'folderTree.onRightClick',
    onContextMenuClick = 'folderTree.onContextMenuClick',
    onLoadData = 'folderTree.onLoadData',
    onDrop = 'folderTree.onDrop',
    onExpandKeys = 'folderTree.onExpandKeys',
    onTreeItemKeyDown = 'folderTree.onTreeItemKeyDown',
    onCreateRoot = 'folderTree.onCreateRoot',
}

export interface IFolderTree {
    data?: TreeNodeModel<any>[];
    editing?: UniqueId;
    contextMenu?: IMenuItemProps[];
    fileContextMenu?: IMenuItemProps[];
    folderContextMenu?: IMenuItemProps[];
    current?: UniqueId;
    expandKeys?: UniqueId[];
    loadedKeys?: UniqueId[];
    entry?: React.ReactNode;
}

export class FolderTreeModel implements IFolderTree {
    constructor(
        public data: TreeNodeModel<any>[] = [],
        public contextMenu: IMenuItemProps[] = [],
        public fileContextMenu: IMenuItemProps[] = [],
        public folderContextMenu: IMenuItemProps[] = [],
        public expandKeys: UniqueId[] = [],
        public loadedKeys: UniqueId[] = [],
        public editing?: UniqueId,
        public current?: UniqueId,
        public entry?: React.ReactNode
    ) {}
}
