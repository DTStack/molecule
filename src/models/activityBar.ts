import type { IActivityBarItem, UniqueId } from 'mo/types';

/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    onClick = 'activityBar.onClick',
    onContextMenu = 'activityBar.onContextMenu',
    onContextMenuClick = 'activityBar.onContextMenuClick',
}

export interface IActivityBar {
    data: IActivityBarItem[];
    current?: UniqueId;
}

export class ActivityBarModel implements IActivityBar {
    constructor(public data: IActivityBarItem[] = [], public current?: UniqueId) {}
}
