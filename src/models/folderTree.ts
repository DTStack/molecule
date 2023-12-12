import type { IMenuItemProps, UniqueId } from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';

export enum FolderTreeEvent {
    onSelect = 'folderTree.onSelect',
    onTreeClick = 'folderTree.onTreeClick',
    onDelete = 'folderTree.onDelete',
    onRename = 'folderTree.onRename',
    onUpdateFileName = 'folderTree.onUpdateFileName',
    onAfterUpdateFileName = 'folderTree.onAfterUpdateFileName',
    onRightClick = 'folderTree.onRightClick',
    onContextMenuClick = 'folderTree.onContextMenuClick',
    onDrop = 'folderTree.onDrop',
    onExpand = 'folderTree.onExpand',
    onTreeItemKeyDown = 'folderTree.onTreeItemKeyDown',
    onCreateRoot = 'folderTree.onCreateRoot',
}

export interface IFolderTree {
    data: TreeNodeModel<any>[];
    editing?: UniqueId;
    contextMenu?: IMenuItemProps[];
    fileContextMenu?: IMenuItemProps[];
    folderContextMenu?: IMenuItemProps[];
    current?: UniqueId;
    expandKeys: UniqueId[];
    loadedKeys: UniqueId[];
    loadingKeys: UniqueId[];
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
        public loadingKeys: UniqueId[] = [],
        public editing?: UniqueId,
        public current?: UniqueId,
        public entry?: React.ReactNode
    ) {}
}
