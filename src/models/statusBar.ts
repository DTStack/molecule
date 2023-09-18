import React from 'react';
import type { AlignmentLiteral, HTMLElementProps, IItemProps } from 'mo/types';

export type PartialAlignment = Extract<AlignmentLiteral, 'left' | 'right'>;

export interface IStatusBarItem<T = any> extends HTMLElementProps, IItemProps {
    alignment: PartialAlignment;
    data?: T;
    render?: (item: IStatusBarItem) => React.ReactNode;
}

export interface IStatusBar {
    data: IStatusBarItem[];
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
    constructor(public data: IStatusBarItem[] = []) {}
}
