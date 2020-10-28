import * as React from 'react';

export const SYMBOL_ACTIVITY_BAR = 'activityBar';

/**
 * The activity bar event definition
 */
export enum ActivityBarEvent {
    /**
     * Selected an activity bar
     */
    Selected = 'activityBar.selected',
    OnClick = 'activityBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'activityBar.data',
}

export interface IActivityBarItem {
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    checked?: boolean;
    type?: 'normal' | 'global';
    render?: () => React.ReactNode | JSX.Element;
    onClick?: (event: React.MouseEvent, item: IActivityBarItem) => void;
}

export interface IActivityBar {
    data: IActivityBarItem[];
    selected: string;
    onSelect: (key: string, item?: IActivityBarItem) => void;
    onClick: (event: React.MouseEvent, item: IActivityBarItem) => void;
    push: (data: IActivityBarItem | IActivityBarItem []) => void;
    remove: (index: number) => void;
    update: () => void;
    get: (id: string) => void;
    render?: () => React.ReactNode | JSX.Element;

}
