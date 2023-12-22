import { IMenuItemProps } from 'mo/types';

export enum EditorTreeEvent {
    onClose = 'editorTree.onClose',
    onSelect = 'editorTree.onSelect',
    onGroupClick = 'editorTree.onGroupClick',
    onToolbarClick = 'editorTree.onToolbarClick',
    onContextMenu = 'editorTree.onContextMenu',
}

export class EditorTreeModel {
    constructor(public toolbar: IMenuItemProps[] = []) {}
}
