import React from 'react';
import { IMenuItemProps } from 'mo/components/menu';
import type { HTMLElementProps, UniqueId } from 'mo/common/types';

export enum Float {
    left = 'left',
    right = 'right',
}

export interface IStatusBarItem<T = any> extends HTMLElementProps {
    id: UniqueId;
    sortIndex?: number;
    data?: T;
    onClick?(e: React.MouseEvent, item?: IStatusBarItem);
    render?: (item: IStatusBarItem) => React.ReactNode;
    name?: string;
}

export interface IStatusBar {
    rightItems: IStatusBarItem[];
    leftItems: IStatusBarItem[];
    contextMenu?: IMenuItemProps[];
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

export class StatusBarModel implements IStatusBar {
    public leftItems: IStatusBarItem[] = [];
    public rightItems: IStatusBarItem[] = [];
    public contextMenu: IMenuItemProps[];

    constructor(
        leftItems: IStatusBarItem[] = [],
        rightItems: IStatusBarItem[] = [],
        contextMenu: IMenuItemProps[] = []
    ) {
        this.leftItems = leftItems;
        this.rightItems = rightItems;
        this.contextMenu = contextMenu;
    }
}
