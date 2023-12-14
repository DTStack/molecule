import type { AlignmentLiteral, HTMLElementProps, IItemProps, RenderProps } from 'mo/types';

export type PartialAlignment = Extract<AlignmentLiteral, 'left' | 'right'>;

export interface IStatusBarItem<T = any>
    extends HTMLElementProps,
        IItemProps,
        RenderProps<IStatusBarItem> {
    alignment: PartialAlignment;
    data?: T;
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
}

export class StatusBarModel implements IStatusBar {
    constructor(public data: IStatusBarItem[] = []) {}
}
