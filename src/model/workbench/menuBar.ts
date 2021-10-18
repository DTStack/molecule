import React from 'react';
import { ISubMenuProps } from 'mo/components/menu/subMenu';
import { IMenuItemProps } from 'mo/components/menu';
/**
 * The activity bar event definition
 */
export enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onSelect = 'menuBar.onSelect',
}

export interface IMenuBarItem {
    id?: string;
    name?: string;
    icon?: string | JSX.Element;
    data?: ISubMenuProps[];
    render?: (data: IMenuItemProps) => React.ReactNode | JSX.Element;
}

export interface IMenuBar {
    data: IMenuBarItem[];
}
export class MenuBarModel implements IMenuBar {
    public data: IMenuBarItem[];

    constructor(data: IMenuBarItem[] = []) {
        this.data = data;
    }
}
