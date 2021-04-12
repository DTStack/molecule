/// <reference types="react" />
/**
 * The activity bar event definition
 */
export declare enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = "menuBar.onClick"
}
export interface IMenuBarItem {
    id?: string;
    name?: string;
    icon?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
}
export interface IMenuBar {
    data?: IMenuBarItem[];
    hidden?: boolean;
}
export declare const MENU_FILE_UNDO = "undo";
export declare const MENU_FILE_REDO = "redo";
export declare const MENU_VIEW_MENUBAR = "workbench.action.showMenuBar";
export declare const MENU_VIEW_SIDEBAR = "workbench.action.showSideBar";
export declare const MENU_VIEW_ACTIVITYBAR = "workbench.action.showActivityBar";
export declare const MENU_VIEW_STATUSBAR = "workbench.action.showStatusBar";
export declare const undoRedoMenu: {
    id: string;
    label: string;
}[];
export declare class MenuBarModel implements IMenuBar {
    data: IMenuBarItem[];
    hidden: boolean;
    constructor(data?: IMenuBarItem[], hidden?: boolean);
}
