import type { UniqueId } from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';

export enum FolderTreeEvent {
    onSelect = 'folderTree.onSelect',
    onDelete = 'folderTree.onDelete',
    onRename = 'folderTree.onRename',
    onUpdateFileName = 'folderTree.onUpdateFileName',
    onAfterUpdateFileName = 'folderTree.onAfterUpdateFileName',
    onContextMenu = 'folderTree.onContextMenu',
    onContextMenuClick = 'folderTree.onContextMenuClick',
    onDrop = 'folderTree.onDrop',
    onExpand = 'folderTree.onExpand',
    onTreeItemKeyDown = 'folderTree.onTreeItemKeyDown',
    onCreateRoot = 'folderTree.onCreateRoot',
}

export interface IFolderTree {
    data: TreeNodeModel<any>[];
    editing?: UniqueId;
    current?: UniqueId;
    expandKeys: UniqueId[];
    loadedKeys: UniqueId[];
    loadingKeys: UniqueId[];
    entry?: React.ReactNode;
}

export class FolderTreeModel implements IFolderTree {
    constructor(
        public data: TreeNodeModel<any>[] = [],
        public expandKeys: UniqueId[] = [],
        public loadedKeys: UniqueId[] = [],
        public loadingKeys: UniqueId[] = [],
        public editing?: UniqueId,
        public current?: UniqueId,
        public entry?: React.ReactNode
    ) {}
}
