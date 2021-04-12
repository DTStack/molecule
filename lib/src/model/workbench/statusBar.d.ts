import * as React from 'react';
export interface IStatusBarItem<T = any> extends HTMLElementProps {
    id: string;
    sortIndex: number;
    data?: T;
    onClick?(e: React.MouseEvent, item?: IStatusBarItem): any;
    render?: (item: IStatusBarItem) => ReactNode;
    name?: string;
}
export interface IStatusBar {
    rightItems: IStatusBarItem[];
    leftItems: IStatusBarItem[];
    hidden?: boolean;
}
export declare const STATUS_PROBLEMS: IStatusBarItem;
export declare const STATUS_EDITOR_INFO: IStatusBarItem;
/**
 * The activity bar event definition
 */
export declare enum StatusBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = "statusBar.onClick",
    /**
     * Activity bar data changed
     */
    DataChanged = "statusBar.data"
}
export declare class StatusBarModel implements IStatusBar {
    leftItems: IStatusBarItem[];
    rightItems: IStatusBarItem[];
    hidden: boolean;
    constructor(leftItems?: IStatusBarItem[], rightItems?: IStatusBarItem[], hidden?: boolean);
}
