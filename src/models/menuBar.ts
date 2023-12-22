import type { IMenuItemProps } from 'mo/types';

/**
 * The menu bar event definition
 */
export enum MenuBarEvent {
    onSelect = 'menuBar.onSelect',
    onContextMenu = 'menuBar.onContextMenu',
}

export class MenuBarModel {
    constructor(public data: IMenuItemProps[] = []) {}
}
