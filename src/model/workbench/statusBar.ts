import * as React from 'react';
import { injectable } from 'tsyringe';
export interface IStatusBarItem extends HTMLElementProps {
    id: string;
    sortIndex: number;
    onClick?(e: React.MouseEvent, item?: IStatusBarItem);
    render?: () => ReactNode;
    name?: string;
}

export interface IStatusBar {
    rightItems?: IStatusBarItem[];
    leftItems?: IStatusBarItem[];
    hidden?: boolean;
}

/**
 * The activity bar event definition
 */
export enum StatusBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'statusBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'statusBar.data',
}
@injectable()
export class StatusBarModel implements IStatusBar {
    public leftItems: IStatusBarItem[];
    public rightItems: IStatusBarItem[];
    public hidden = false

    constructor(
        leftItems: IStatusBarItem[] = [],
        rightItems: IStatusBarItem[] = [],
        hidden = false
    ) {
        this.leftItems = leftItems;
        this.rightItems = rightItems;
        this.hidden = hidden;
    }
}
