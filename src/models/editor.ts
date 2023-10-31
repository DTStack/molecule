import type { IBreadcrumbItemProps, IconType, IMenuItemProps, UniqueId } from 'mo/types';
import type { editor as MonacoEditor } from 'monaco-editor';

export enum EditorEvent {
    // edit Editor event
    OnChangeTab = 'editor.changeTab',
    OnCloseTab = 'editor.closeTab',
    OnCloseAll = 'editor.closeAll',
    OnCloseOther = 'editor.closeOther',
    OnCloseToLeft = 'editor.closeToLeft',
    OnCloseToRight = 'editor.closeToRight',
    OnMoveTab = 'editor.moveTab',
    OnMoveTabOver = 'editor.moveTabOver',
    OpenTab = 'editor.openTab',
    OnSelectTab = 'editor.selectTab',
    OnUpdateTab = 'editor.updateTab',
    OnSplitEditorRight = 'editor.splitEditorRight',
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
        public activeTab?: UniqueId,
        /**
         * hover tab when tabs moving
         */
        public coveredTabInMove?: UniqueId,
        /**
         * update time hover simple tab when tabs moving
         * simple tab hover MAX_WAIT_MS_COVERED_TAB ms set active tab is coveredTab
         */
        public lastUpdateTime?: number
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
    /**
     * update time hover simple tab when tabs moving
     * simple tab hover max wait ms set active tab is coveredTab
     *
     * @ EditorGroupModel.lastUpdateTime
     */
    public MAX_WAIT_MS_COVERED_TAB = 1000;
}
