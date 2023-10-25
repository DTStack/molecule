import type { IBreadcrumbItemProps, IconType, IMenuItemProps, UniqueId } from 'mo/types';
import type { editor as MonacoEditor } from 'monaco-editor';

export enum EditorEvent {
    OnCloseTab = 'editor.closeTab',
    OnCloseAll = 'editor.closeAll',
    OnCloseOther = 'editor.closeOther',
    OnCloseToLeft = 'editor.closeToLeft',
    OnCloseToRight = 'editor.closeToRight',
    OnMoveTab = 'editor.moveTab',
    OpenTab = 'editor.openTab',
    OnSelectTab = 'editor.selectTab',
    OnUpdateTab = 'editor.updateTab',
    onActionsClick = 'editor.actionsClick',
    // OnSplitEditorRight = 'editor.splitEditorRight',
    onFocus = 'editor.onFocus',
    onCursorSelection = 'editor.onCursorSelection',
    onContextMenu = 'editor.onContextMenu',
    onToolbarClick = 'editor.onToolbarClick',
}

export type IEditorOptions = MonacoEditor.IEditorOptions & MonacoEditor.IGlobalEditorOptions;

export interface IEditorTab<T> {
    id: UniqueId;
    model?: MonacoEditor.ITextModel;
    value?: string;
    language?: string;
    breadcrumb?: IBreadcrumbItemProps[];
    modified?: boolean;
    icon?: IconType;
    name?: string;
    render?: (tab: IEditorTab<T>) => React.ReactNode;
    data?: T;
}

export class EditorGroupModel<T = any> {
    constructor(
        public id: UniqueId,
        public data: IEditorTab<T>[] = [],
        public activeTab?: UniqueId
    ) {}
}

export interface IEditor {
    /**
     * Current editor group's id
     */
    current?: UniqueId;
    /**
     * Editor Groups
     */
    groups?: EditorGroupModel[];
    /**
     * The welcome page of editor bench
     */
    entry?: React.ReactNode;
    /**
     * Built-in editor options, there is main apply it to monaco-editor
     */
    editorOptions?: IEditorOptions;
    /**
     * Toolbar items
     */
    toolbar?: IMenuItemProps[];
}

export class EditorModel implements IEditor {
    constructor(
        public groups: EditorGroupModel[] = [],
        public editorOptions: IEditorOptions = {},
        public toolbar: IMenuItemProps[] = [],
        public entry?: React.ReactNode,
        public current?: UniqueId | undefined
    ) {}
}
