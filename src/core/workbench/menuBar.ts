import * as React from 'react';

export const SYMBOL_ACTIVITY_BAR = 'menuBar';

/**
 * The activity bar event definition
 */
export enum MenuBarEvent {
    /**
     * Selected an activity bar
     */
    onClick = 'menuBar.onClick',
    /**
     * Activity bar data changed
     */
    DataChanged = 'menuBar.data',
}

export interface IMenuBarItem {
    id?: string;
    name?: string;
    data?: any;
    iconName?: string;
    render?: () => React.ReactNode | JSX.Element;
    onClick?:(e: React.MouseEvent, option: IMenuBarItem) => any;
}

export interface IMenuBar {
    data: IMenuBarItem[];
    onClick:(event: React.MouseEvent<any, any>, item: IMenuBarItem) => void;
    push: (data: IMenuBarItem | IMenuBarItem []) => void;
    remove: (index: number) => void;
    update: () => void;
    render?: () => React.ReactNode | JSX.Element;
}
