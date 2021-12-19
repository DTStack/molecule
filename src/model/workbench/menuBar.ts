import React from 'react';
import { ISubMenuProps } from 'mo/components/menu/subMenu';
import { IMenuItemProps } from 'mo/components/menu';
import type { UniqueId } from 'mo/common/types';
import { MenuBarMode } from './layout';
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
    id?: UniqueId;
    name?: string;
    icon?: string | JSX.Element;
    data?: ISubMenuProps[];
    render?: (data: IMenuItemProps) => React.ReactNode | JSX.Element;
}

export interface IMenuBar {
    data: IMenuBarItem[];
    mode?: keyof typeof MenuBarMode;
    logo?: React.ReactNode;
}
export class MenuBarModel implements IMenuBar {
    public data: IMenuBarItem[];

    constructor(data: IMenuBarItem[] = []) {
        this.data = data;
    }
}
