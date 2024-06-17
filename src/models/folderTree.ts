import type { InputValidateInfo, UniqueId } from 'mo/types';
import type { TreeNodeModel } from 'mo/utils/tree';

export enum FolderTreeEvent {
    onSelect = 'folderTree.onSelect',
    onDelete = 'folderTree.onDelete',
    onRename = 'folderTree.onRename',
    onContextMenu = 'folderTree.onContextMenu',
    onContextMenuClick = 'folderTree.onContextMenuClick',
    onDrop = 'folderTree.onDrop',
    onExpand = 'folderTree.onExpand',
    onKeyDown = 'folderTree.onKeyDown',
    onBlur = 'folderTree.onBlur',
    onCreateRoot = 'folderTree.onCreateRoot',
    onUpdate = 'folderTree.onUpdate',
    onLoad = 'folderTree.onLoad',
    onDragStart = 'folderTree.onDragStart',
    onDragOver = 'folderTree.onDragOver',
    onDragEnd = 'folderTree.onDragEnd',
    onCurrentChange = 'folderTree.onCurrentChange',
}

export class FolderTreeModel {
    constructor(
        public data: TreeNodeModel<any>[] = [],
        public loadingKeys: UniqueId[] = [],
        public expandedKeys: UniqueId[] = [],
        public editing?: UniqueId,
        public current?: UniqueId,
        public entry?: React.ReactNode,
        public validateInfo?: InputValidateInfo
    ) {}
}
