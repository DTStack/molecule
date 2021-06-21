import { localize } from 'mo/i18n/localize';
import {
    EDITOR_MENU_CLOSE,
    EDITOR_MENU_CLOSE_ALL,
    EDITOR_MENU_CLOSE_OTHERS,
    EDITOR_MENU_CLOSE_SAVED,
} from 'mo/model';

export enum EditorTreeEvent {
    onClose = 'editorTree.close',
    onSelect = 'editorTree.select',
    onCloseOthers = 'editorTree.closeOthers',
    onCloseSaved = 'editorTree.closeSaved',
    onCloseAll = 'editorTree.closeAll',
    onSaveAll = 'editorTree.saveAll',
    onSplitEditorLayout = 'editorTree.splitEditorLayout',
    onContextMenu = 'editorTree.contextMenuClick',
}

export function builtInEditorTreeHeaderContextMenu() {
    return [
        {
            id: EDITOR_MENU_CLOSE_SAVED,
            name: localize(EDITOR_MENU_CLOSE_SAVED, 'Close Saved'),
        },
        {
            id: EDITOR_MENU_CLOSE_ALL,
            name: localize(EDITOR_MENU_CLOSE_ALL, 'Close All'),
        },
    ];
}

export function builtInEditorTreeContextMenu() {
    return [
        {
            id: EDITOR_MENU_CLOSE,
            name: localize(EDITOR_MENU_CLOSE, 'Close'),
        },
        {
            id: EDITOR_MENU_CLOSE_OTHERS,
            name: localize(EDITOR_MENU_CLOSE_OTHERS, 'Close Others'),
        },
        {
            id: EDITOR_MENU_CLOSE_SAVED,
            name: localize(EDITOR_MENU_CLOSE_SAVED, 'Close Saved'),
        },
        {
            id: EDITOR_MENU_CLOSE_ALL,
            name: localize(EDITOR_MENU_CLOSE_ALL, 'Close All'),
        },
    ];
}

export class EditorTree {
    constructor() {}
}
