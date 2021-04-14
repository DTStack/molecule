import 'reflect-metadata';
import { ITab } from 'mo/components/tabs/tab';
import { ITabs } from 'mo/components/tabs';
import { IMenuItem } from 'mo/components/menu';
import { IBreadcrumbItem } from 'mo/components/breadcrumb';
export declare enum EditorEvent {
    OnCloseTab = "editor.closeTab",
    OnCloseAll = "editor.closeAll",
    OnCloseOthers = "editor.closeOthers",
    OnCloseToLeft = "editor.closeToLeft",
    OnCloseToRight = "editor.closeToRight",
    OnMoveTab = "editor.moveTab",
    OpenTab = "editor.openTab",
    OnSelectTab = "editor.selectTab",
    OnSplitEditorRight = "editor.splitEditorRight"
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
export declare const EDITOR_MENU_CLOSE_TO_RIGHT = "editor.closeToRight";
export declare const EDITOR_MENU_CLOSE_TO_LEFT = "editor.closeToLeft";
export declare const EDITOR_MENU_CLOSE_ALL = "editor.closeAll";
export declare const EDITOR_MENU_CLOSE_OTHERS = "editor.closeOthers";
export declare const EDITOR_MENU_CLOSE = "editor.close";
export declare const EDITOR_MENU_SHOW_OPENEDITORS = "editor.showOpenEditors";
export declare class EditorGroupModel<E = any, T = any> implements IEditorGroup<E, T> {
    id: number;
    tab: IEditorTab<T>;
    data: IEditorTab<T>[];
    actions: IMenuItem[];
    menu: IMenuItem[];
    editorInstance: E | undefined;
    constructor(id: number, tab: IEditorTab<T>, data: IEditorTab<T>[], actions?: IMenuItem[], menu?: IMenuItem[], editorInstance?: E);
}
export declare class EditorModel<T> implements IEditor {
    current: IEditorGroup | null;
    groups: IEditorGroup[];
    constructor(current?: IEditorGroup | null, groups?: IEditorGroup[]);
}
export {};