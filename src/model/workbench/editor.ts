import 'reflect-metadata';
import { ITab } from 'mo/components/tabs/tab';
import { injectable } from 'tsyringe';
import { ITabs } from 'mo/components/tabs';
import { IMenuItem } from 'mo/components/menu';
import { IBreadcrumbItem } from 'mo/components/breadcrumb';

export enum EditorEvent {
    OnCloseTab = 'editor.closeTab',
    OnCloseAll = 'editor.closeAll',
    OnMoveTab = 'editor.moveTab',
    OpenTab = 'editor.openTab',
    OnSelectTab = 'editor.selectTab',
    OnSplitEditorRight = 'editor.splitEditorRight',
}
interface BuiltInEditorTabDataType {
    language?: string | undefined;
    path?: string;
    value?: string;
}

export interface IEditorTab<T = BuiltInEditorTabDataType> extends ITab<T> {
    modified?: boolean;
    breadcrumb?: IBreadcrumbItem[];
}
export interface IEditorAction {
    actions?: IMenuItem[];
    menu?: IMenuItem[];
}
export interface IEditorGroup<E = any, T = any> extends ITabs<T> {
    id?: number;
    /**
     * Current editor group tab
     */
    tab?: IEditorTab<T>;
    actions?: IMenuItem[];
    menu?: IMenuItem[];
    editorInstance?: E;
}
export interface IEditor {
    /**
     * Current editor group
     */
    current?: IEditorGroup | null;
    groups?: IEditorGroup[];
}

const baseMenu = [
    {
        id: 'closeToRight',
        name: 'Close To Right',
    },
    {
        id: 'closeSaved',
        name: 'Close Saved',
    },
];

const initialActions: IMenuItem[] = [
    {
        id: 'showOpenEditors',
        name: 'Show Opened Editors',
    },
    ...baseMenu,
];

const initialMenu: IMenuItem[] = [
    {
        id: 'close',
        name: 'Close',
    },
    {
        id: 'closeOther',
        name: 'Close Others',
    },
    {
        id: 'closeToRight',
        name: 'Close To Right',
    },
    ...baseMenu,
];

export class EditorGroupModel<E = any, T = any> implements IEditorGroup<E, T> {
    id: number;
    tab: IEditorTab<T>;
    data?: IEditorTab<T>[];
    actions: IMenuItem[];
    menu: IMenuItem[];
    editorInstance: E | undefined;

    constructor(
        id: number,
        tab: IEditorTab<T>,
        data: IEditorTab<T>[],
        actions: IMenuItem[] = initialActions,
        menu: IMenuItem[] = initialMenu,
        editorInstance?: E
    ) {
        this.id = id;
        this.data = data;
        this.menu = menu;
        this.actions = actions;
        this.tab = tab;
        this.editorInstance = editorInstance;
    }
}

@injectable()
export class EditorModel<T> implements IEditor {
    public current: IEditorGroup | null = null;
    public groups: IEditorGroup[] = [];
}
