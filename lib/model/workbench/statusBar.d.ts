import * as React from 'react';
export interface IStatusBarItem extends HTMLElementProps {
    id: string;
    sortIndex: number;
    onClick?(e: React.MouseEvent, item?: IStatusBarItem): any;
    render?: () => ReactNode;
    name?: string;
}
export interface IStatusBar {
    rightItems: IStatusBarItem[];
    leftItems: IStatusBarItem[];
}
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
}
