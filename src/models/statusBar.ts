import React from 'react';
import type { HTMLElementProps, IMenuItemProps, UniqueId } from 'mo/types';

export enum Float {
    left = 'left',
    right = 'right',
}
export type FloatStr = keyof typeof Float;

export interface IStatusBarItem<T = any> extends Omit<HTMLElementProps, 'id' | 'hidden'> {
    id: UniqueId;
    sortIndex?: number;
    data?: T;
    name?: string;
    hidden?: boolean;
    render?: (item: IStatusBarItem) => React.ReactNode;
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
     * ContextMenu event
     */
    onContextMenu = 'statusBar.onContextMenu',
    /**
     * Activity bar data changed
     */
    DataChanged = 'statusBar.data',
}

export class StatusBarModel implements IStatusBar {
    constructor(
        public leftItems: IStatusBarItem[] = [],
        public rightItems: IStatusBarItem[] = [],
        public contextMenu: IMenuItemProps[] = []
    ) {}
}
