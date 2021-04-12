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
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
}
export interface IMenuBar {
    data: IMenuBarItem[];
}
export declare class MenuBarModel implements IMenuBar {
    data: IMenuBarItem[];
    constructor(data?: IMenuBarItem[]);
}
