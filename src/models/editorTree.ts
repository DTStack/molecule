import { IMenuItemProps } from 'mo/types';

export enum EditorTreeEvent {
    onClose = 'editorTree.onClose',
    onSelect = 'editorTree.onSelect',
    onGroupClick = 'editorTree.onGroupClick',
    onToolbarClick = 'editorTree.onToolbarClick',
    onContextMenu = 'editorTree.onContextMenu',
}

export interface IEditorTree {
    toolbar: IMenuItemProps[];
}

export class EditorTreeModel implements IEditorTree {
    constructor(public toolbar: IMenuItemProps[] = []) {}
}
