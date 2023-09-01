import React from 'react';
import type { AlignmentLiteral, HTMLElementProps, UniqueId } from 'mo/types';

export type PartialAlignment = Extract<AlignmentLiteral, 'left' | 'right'>;

export interface IStatusBarItem<T = any> extends HTMLElementProps {
    id: UniqueId;
    alignment: PartialAlignment;
    sortIndex?: number;
    data?: T;
    name?: string;
    hidden?: boolean;
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
