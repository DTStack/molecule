import { IMenuItemProps } from 'mo/types';

export enum EditorTreeEvent {
    onClose = 'editorTree.close',
    onSelect = 'editorTree.select',
    onGroupClick = 'editorTree.groupClick',
    onCloseOthers = 'editorTree.closeOthers',
    onCloseSaved = 'editorTree.closeSaved',
    onCloseAll = 'editorTree.closeAll',
    onSaveAll = 'editorTree.saveAll',
    onSplitEditorLayout = 'editorTree.splitEditorLayout',
    onToolbarClick = 'editorTree.toolbarClick',
    onContextMenu = 'editorTree.contextMenuClick',
    onGroupContextMenu = 'editorTree.groupContextMenu',
}

export interface IEditorTree {
    toolbar: IMenuItemProps[];
}

export class EditorTreeModel implements IEditorTree {
    constructor(public toolbar: IMenuItemProps[] = []) {}
}
