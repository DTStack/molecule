import type { IEditorOptions, IEditorTab, IMenuItemProps, UniqueId } from 'mo/types';

export enum EditorEvent {
    onChangeTab = 'editor.onChangeTab',
    onCloseTab = 'editor.onCloseTab',
    onCloseAll = 'editor.onCloseAll',
    onCloseOther = 'editor.onCloseOther',
    onCloseToLeft = 'editor.onCloseToLeft',
    onCloseToRight = 'editor.onCloseToRight',
    onDragStart = 'editor.onDragStart',
    onDragOver = 'editor.onDragOver',
    onDragEnd = 'editor.onDragEnd',
    onDrop = 'editor.onDrop',
    OpenTab = 'editor.openTab',
    onSelectTab = 'editor.onSelectTab',
    onUpdateTab = 'editor.onUpdateTab',
    onSplitEditorRight = 'editor.onSplitEditorRight',
    onFocus = 'editor.onFocus',
    onCursorSelection = 'editor.onCursorSelection',
    onContextMenu = 'editor.onContextMenu',
    onContextMenuClick = 'editor.onContextMenuClick',
    onToolbarClick = 'editor.onToolbarClick',
}

export class EditorGroupModel<T = any> {
    constructor(
        public id: UniqueId,
        public data: IEditorTab<T>[] = [],
        public activeTab?: UniqueId
    ) {}
}

export class EditorModel {
    constructor(
        public groups: EditorGroupModel[] = [],
        public options: IEditorOptions = {},
        public toolbar: IMenuItemProps[] = [],
        public loading: boolean = false,
        public entry?: React.ReactNode,
        public current?: UniqueId | undefined
    ) {}
}
