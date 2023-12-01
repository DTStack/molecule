import type {
    IBreadcrumbItemProps,
    IEditorOptions,
    IItemProps,
    IMenuItemProps,
    RenderProps,
    UniqueId,
} from 'mo/types';
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
    OpenTab = 'editor.openTab',
    OnSelectTab = 'editor.selectTab',
    OnUpdateTab = 'editor.updateTab',
    OnSplitEditorRight = 'editor.splitEditorRight',
    onFocus = 'editor.onFocus',
    onCursorSelection = 'editor.onCursorSelection',
    onContextMenu = 'editor.onContextMenu',
    onToolbarClick = 'editor.onToolbarClick',
}

export interface IEditorTab<T>
    extends RenderProps<IEditorTab<T>>,
        Pick<IItemProps, 'id' | 'name' | 'icon'> {
    model?: MonacoEditor.ITextModel;
    value?: string;
    language?: string;
    breadcrumb?: IBreadcrumbItemProps[];
    modified?: boolean;
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
    loading?: boolean;
}

export class EditorModel implements IEditor {
    constructor(
        public groups: EditorGroupModel[] = [],
        public editorOptions: IEditorOptions = {},
        public toolbar: IMenuItemProps[] = [],
        public loading: boolean = false,
        public entry?: React.ReactNode,
        public current?: UniqueId | undefined
    ) {}
}
