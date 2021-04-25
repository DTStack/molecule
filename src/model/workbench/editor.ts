import { ITab } from 'mo/components/tabs/tab';
import { ITabs } from 'mo/components/tabs';
import { IMenuItem } from 'mo/components/menu';
import { IBreadcrumbItem } from 'mo/components/breadcrumb';

export enum EditorEvent {
    OnCloseTab = 'editor.closeTab',
    OnCloseAll = 'editor.closeAll',
    OnCloseOthers = 'editor.closeOthers',
    OnCloseToLeft = 'editor.closeToLeft',
    OnCloseToRight = 'editor.closeToRight',
    OnMoveTab = 'editor.moveTab',
    OpenTab = 'editor.openTab',
    OnSelectTab = 'editor.selectTab',
    OnUpdateTab = 'editor.updateTab',
    OnSplitEditorRight = 'editor.splitEditorRight',
}
interface BuiltInEditorTabDataType {
    language?: string | undefined;
    path?: string;
    value?: string;
    modified?: boolean;
}

export interface IEditorTab<T = BuiltInEditorTabDataType> extends ITab<T> {
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

export const EDITOR_MENU_CLOSE_TO_RIGHT = 'editor.closeToRight';
export const EDITOR_MENU_CLOSE_TO_LEFT = 'editor.closeToLeft';
export const EDITOR_MENU_CLOSE_ALL = 'editor.closeAll';
export const EDITOR_MENU_CLOSE_OTHERS = 'editor.closeOthers';
export const EDITOR_MENU_CLOSE = 'editor.close';
export const EDITOR_MENU_SHOW_OPENEDITORS = 'editor.showOpenEditors';

const baseMenu = [
    {
        id: EDITOR_MENU_CLOSE_ALL,
        name: 'Close All',
    },
];

const initialActions: IMenuItem[] = [
    {
        id: EDITOR_MENU_SHOW_OPENEDITORS,
        name: 'Show Opened Editors',
    },
    ...baseMenu,
];

const initialMenu: IMenuItem[] = [
    {
        id: EDITOR_MENU_CLOSE,
        name: 'Close',
    },
    {
        id: EDITOR_MENU_CLOSE_OTHERS,
        name: 'Close Others',
    },
    {
        id: EDITOR_MENU_CLOSE_TO_RIGHT,
        name: 'Close To Right',
    },
    {
        id: EDITOR_MENU_CLOSE_TO_LEFT,
        name: 'Close To Left',
    },
    ...baseMenu,
];

export class EditorGroupModel<E = any, T = any> implements IEditorGroup<E, T> {
    id: number;
    tab: IEditorTab<T>;
    data: IEditorTab<T>[];
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

export class EditorModel implements IEditor {
    public current: IEditorGroup | null;
    public groups: IEditorGroup[];

    constructor(
        current: IEditorGroup | null = null,
        groups: IEditorGroup[] = []
    ) {
        this.current = current;
        this.groups = groups;
    }
}
