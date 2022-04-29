import React from 'react';
import { ISubMenuProps, IMenuItemProps } from '@dtinsight/molecule-ui';
import type { UniqueId } from '@dtinsight/molecule-common';
import { MenuBarMode } from './layout';
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

export interface IMenuBarItem {
    id?: UniqueId;
    name?: string;
    icon?: string | JSX.Element;
    data?: ISubMenuProps[];
    render?: (data: IMenuItemProps) => React.ReactNode | JSX.Element;
    disabled?: boolean;
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
