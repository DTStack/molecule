import { ITabProps } from 'mo/components/tabs/tab';
import { ITabsProps } from 'mo/components/tabs';
import { IMenuItemProps } from 'mo/components/menu';
import { IBreadcrumbItemProps } from 'mo/components/breadcrumb';
import { editor as MonacoEditor } from 'monaco-editor';
import type { UniqueId } from 'mo/common/types';

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
    OnSplitEditorRight = 'editor.splitEditorRight',
}

export interface BuiltInEditorTabDataType {
    language?: string | undefined;
    path?: string;
    value?: string;
    modified?: boolean;
    [key: string]: any;
}

export type IEditorOptions = MonacoEditor.IEditorOptions &
    MonacoEditor.IGlobalEditorOptions;

export interface IEditorActionsProps extends IMenuItemProps {
    id: UniqueId;
    /**
     * Mark the action placed in More menus or outer
     */
    place?: 'outer' | 'inner';
}

export interface IEditorTab<T = BuiltInEditorTabDataType> extends ITabProps<T> {
    breadcrumb?: IBreadcrumbItemProps[];
}
export interface IEditorAction {
    actions?: IEditorActionsProps[];
    menu?: IMenuItemProps[];
}
export interface IEditorGroup<E = any, T = any> extends ITabsProps {
    id: UniqueId;
    /**
     * Current editor group tab
     */
    tab?: IEditorTab<T>;
    actions?: IEditorActionsProps[];
    menu?: IMenuItemProps[];
    editorInstance?: E;
}
export interface IEditor {
    /**
     * Current editor group
     */
    current?: IEditorGroup | null;
    /**
     * Editor Groups
     */
    groups?: IEditorGroup[];
    /**
     * The welcome page of editor bench
     */
    entry?: React.ReactNode;
    /**
     * Built-in editor options, there is main apply it to monaco-editor
     */
    editorOptions?: IEditorOptions;
}

export class EditorGroupModel<E = any, T = any> implements IEditorGroup<E, T> {
    id: UniqueId;
    tab: IEditorTab<T>;
    data: IEditorTab<T>[];
    actions: IEditorActionsProps[];
    menu: IMenuItemProps[];
    editorInstance: E | undefined;
    activeTab: UniqueId | undefined;

    constructor(
        id: UniqueId,
        tab: IEditorTab<T>,
        activeTab: UniqueId | undefined,
        data: IEditorTab<T>[],
        actions: IEditorActionsProps[] = [],
        menu: IMenuItemProps[] = [],
        editorInstance?: E
    ) {
        this.id = id;
        this.data = data;
        this.menu = menu;
        this.actions = actions;
        this.tab = tab;
        this.activeTab = activeTab;
        this.editorInstance = editorInstance;
    }
}

export class EditorModel implements IEditor {
    public current: IEditorGroup | null;
    public groups: IEditorGroup[];
    public entry: React.ReactNode;
    public editorOptions: IEditorOptions;

    constructor(
        current: IEditorGroup | null = null,
        groups: IEditorGroup[] = [],
        entry: React.ReactNode,
        editorOptions: IEditorOptions = {}
    ) {
        this.current = current;
        this.groups = groups;
        this.entry = entry;
        this.editorOptions = editorOptions;
    }
}
