import { injectable } from 'tsyringe';

/**
 * The activity bar event definition
 */
export enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'menuBar.onClick',
}

export interface IMenuBarItem {
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
}
export interface IMenuBar {
    data?: IMenuBarItem[];
    hidden?: boolean;
}

export const MENU_FILE_UNDO = 'undo';
export const MENU_FILE_REDO = 'redo';
export const MENU_VIEW_MENUBAR = 'workbench.action.showMenuBar';
export const MENU_VIEW_SIDEBAR = 'workbench.action.showSideBar';
export const MENU_VIEW_ACTIVITYBAR = 'workbench.action.showActivityBar';
export const MENU_VIEW_STATUSBAR = 'workbench.action.showStatusBar';

export const undoRedoMenu = [
    {
        id: MENU_FILE_UNDO,
        label: 'Undo',
    },
    {
        id: MENU_FILE_REDO,
        label: 'Redo',
    },
];
@injectable()
export class MenuBarModel implements IMenuBar {
    public data: IMenuBarItem[];
    public hidden = false;

    constructor(data: IMenuBarItem[] = [], hidden = false) {
        this.data = data;
        this.hidden = hidden;
    }
}
