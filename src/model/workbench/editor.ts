import { ITabProps } from 'mo/components/tabs/tab';
import { ITabsProps } from 'mo/components/tabs';
import { IMenuItemProps } from 'mo/components/menu';
import { IBreadcrumbItemProps } from 'mo/components/breadcrumb';
import { localize } from 'mo/i18n/localize';

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
    onActionsClick = 'editor.actionsClick',
    OnSplitEditorRight = 'editor.splitEditorRight',
}
interface BuiltInEditorTabDataType {
    language?: string | undefined;
    path?: string;
    value?: string;
    modified?: boolean;
}

export interface IEditorActionsProps extends IMenuItemProps {
    id: string;
    /**
     * Mark the action placed in More menus or outer
     */
    place?: 'outer';
}

export interface IEditorTab<T = BuiltInEditorTabDataType> extends ITabProps<T> {
    breadcrumb?: IBreadcrumbItemProps[];
}
export interface IEditorAction {
    actions?: IEditorActionsProps[];
    menu?: IMenuItemProps[];
}
export interface IEditorGroup<E = any, T = any> extends ITabsProps<T> {
    id?: number;
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
    groups?: IEditorGroup[];
    entry?: React.ReactNode;
}

export const EDITOR_MENU_CLOSE_TO_RIGHT = 'editor.closeToRight';
export const EDITOR_MENU_CLOSE_TO_LEFT = 'editor.closeToLeft';
export const EDITOR_MENU_CLOSE_ALL = 'editor.closeAll';
export const EDITOR_MENU_CLOSE_OTHERS = 'editor.closeOthers';
export const EDITOR_MENU_CLOSE_SAVED = 'editor.closeSaved';
export const EDITOR_MENU_CLOSE = 'editor.close';
export const EDITOR_MENU_SHOW_OPENEDITORS = 'editor.showOpenEditors';
export const EDITOR_MENU_SPILIT = 'editor.split';

export function getBaseMenu() {
    return [
        {
            id: EDITOR_MENU_CLOSE_ALL,
            name: localize(EDITOR_MENU_CLOSE_ALL, 'Close All'),
        },
    ];
}

export function getEditorInitialActions(): IEditorActionsProps[] {
    return [
        {
            id: EDITOR_MENU_SPILIT,
            name: 'Split Editor Right',
            title: localize('editor.actions.splitRight', 'Split Editor Right'),
            icon: 'split-horizontal',
            place: 'outer',
        },
        {
            id: EDITOR_MENU_SHOW_OPENEDITORS,
            name: 'Show Opened Editors',
        },
        ...getBaseMenu(),
    ];
}

export function getEditorInitialMenu(): IMenuItemProps[] {
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
            id: EDITOR_MENU_CLOSE_TO_RIGHT,
            name: localize(EDITOR_MENU_CLOSE_TO_RIGHT, 'Close To Right'),
        },
        {
            id: EDITOR_MENU_CLOSE_TO_LEFT,
            name: localize(EDITOR_MENU_CLOSE_TO_LEFT, 'Close To Left'),
        },
        ...getBaseMenu(),
    ];
}

export class EditorGroupModel<E = any, T = any> implements IEditorGroup<E, T> {
    id: number;
    tab: IEditorTab<T>;
    data: IEditorTab<T>[];
    actions: IEditorActionsProps[];
    menu: IMenuItemProps[];
    editorInstance: E | undefined;

    constructor(
        id: number,
        tab: IEditorTab<T>,
        data: IEditorTab<T>[],
        actions: IEditorActionsProps[] = getEditorInitialActions(),
        menu: IMenuItemProps[] = getEditorInitialMenu(),
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
    public entry: React.ReactNode;

    constructor(
        current: IEditorGroup | null = null,
        groups: IEditorGroup[] = [],
        entry: React.ReactNode
    ) {
        this.current = current;
        this.groups = groups;
        this.entry = entry;
    }
}
