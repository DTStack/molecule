import type { IMenuItemProps } from 'mo/types';

/**
 * The activity bar event definition
 */
export enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onSelect = 'menuBar.onSelect',
    onChangeMode = 'menuBar.onChangeMode',
}

export interface IMenuBar {
    data: IMenuItemProps[];
}
export class MenuBarModel implements IMenuBar {
    constructor(public data: IMenuItemProps[] = []) {}
}
