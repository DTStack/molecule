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
    onChangeTab = 'editor.onChangeTab',
    onCloseTab = 'editor.onCloseTab',
    onCloseAll = 'editor.onCloseAll',
    onCloseOther = 'editor.onCloseOther',
    onCloseToLeft = 'editor.onCloseToLeft',
    onCloseToRight = 'editor.onCloseToRight',
    onMoveTab = 'editor.onMoveTab',
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
