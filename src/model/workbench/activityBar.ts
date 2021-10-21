import React from 'react';
import { IMenuItemProps } from 'mo/components';
/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    OnClick = 'activityBar.onClick',
    OnChange = 'activityBar.onChange',
    /**
     * Activity bar data changed
     */
    DataChanged = 'activityBar.data',
    ReRender = 'activityBar.reRender',
}

export interface IActivityBarItem {
    id: string;
    name?: React.ReactNode;
    title?: string;
    hidden?: boolean;
    data?: any;
    icon?: string | JSX.Element;
    checked?: boolean;
    disabled?: boolean;
    type?: 'normal' | 'global';
    contextMenu?: IActivityMenuItemProps[];
    className?: string;
    sortIndex?: number;
    render?: () => React.ReactNode | JSX.Element;
}

export interface IActivityMenuItemProps extends IMenuItemProps {
    id: string;
}

export interface IActivityBar {
    data?: IActivityBarItem[];
    contextMenu?: IActivityMenuItemProps[];
    selected?: string;
}

export class ActivityBarModel implements IActivityBar {
    public data: IActivityBarItem[];
    public contextMenu: IActivityMenuItemProps[];
    public selected: string;
    constructor(
        data: IActivityBarItem[] = [],
        contextMenu: IActivityMenuItemProps[] = [],
        selected: string = ''
    ) {
        this.data = data;
        this.contextMenu = contextMenu;
        this.selected = selected;
    }
}
