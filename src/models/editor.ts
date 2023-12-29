import type { IEditorOptions, IEditorTab, IMenuItemProps, UniqueId } from 'mo/types';
import { editor } from 'monaco-editor';

export enum EditorEvent {
    onChange = 'editor.onChange',
    onCloseTab = 'editor.onCloseTab',
    onCloseAll = 'editor.onCloseAll',
    onCloseOther = 'editor.onCloseOther',
    onCloseToLeft = 'editor.onCloseToLeft',
    onCloseToRight = 'editor.onCloseToRight',
    onDragStart = 'editor.onDragStart',
    onDragOver = 'editor.onDragOver',
    onDragEnd = 'editor.onDragEnd',
    onDrop = 'editor.onDrop',
    onOpenTab = 'editor.onOpenTab',
    onSelectTab = 'editor.onSelectTab',
    onUpdateTab = 'editor.onUpdateTab',
    onSplitEditorRight = 'editor.onSplitEditorRight',
    onFocus = 'editor.onFocus',
    onCursorSelection = 'editor.onCursorSelection',
    onContextMenu = 'editor.onContextMenu',
    onContextMenuClick = 'editor.onContextMenuClick',
    onToolbarClick = 'editor.onToolbarClick',
    onMount = 'editor.onMount',
    onModelMount = 'editor.onModelMount',
}

export class EditorGroupModel<T = any> {
    constructor(
        public id: UniqueId,
        public data: IEditorTab<T>[] = [],
        public activeTab?: UniqueId,
        public editorInstance?: editor.IStandaloneCodeEditor
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
