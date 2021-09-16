import React from 'react';
import { IMenuItemProps } from 'mo/components';
import { localize } from 'mo/i18n/localize';
import {
    ACTION_QUICK_ACCESS_SETTINGS,
    ACTION_QUICK_COMMAND,
    ACTION_SELECT_THEME,
} from '../keybinding';

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

export const ACTIVITY_BAR_GLOBAL_SETTINGS = 'global.menu.settings';
export const ACTIVITY_BAR_GLOBAL_ACCOUNT = 'global.menu.account';

export const CONTEXT_MENU_MENU = 'menubar';
export const CONTEXT_MENU_EXPLORER = 'sidebar.explore.title';
export const CONTEXT_MENU_SEARCH = 'sidebar.search.title';
export const CONTEXT_MENU_HIDE = 'menu.hideActivityBar';

export function builtInActivityBar(): IActivityBar {
    const activityBarData: IActivityBarItem[] = [
        {
            id: ACTIVITY_BAR_GLOBAL_ACCOUNT,
            name: localize('menu.account', 'Account'),
            title: localize('menu.account', 'Account'),
            icon: 'account',
            type: 'global',
        },
        {
            id: ACTIVITY_BAR_GLOBAL_SETTINGS,
            name: localize('menu.settings', 'Settings'),
            title: localize('menu.settings', 'Settings'),
            icon: 'settings-gear',
            type: 'global',
            contextMenu: [
                {
                    id: ACTION_QUICK_COMMAND,
                    name: localize('menu.commandPalette', 'Command Palette'),
                },
                {
                    id: ACTION_QUICK_ACCESS_SETTINGS,
                    name: localize('menu.settings', 'Settings'),
                },
                {
                    id: ACTION_SELECT_THEME,
                    name: localize('menu.colorTheme', 'Color Theme'),
                },
            ],
        },
    ];

    const contextMenuData: IActivityMenuItemProps[] = [
        {
            id: CONTEXT_MENU_MENU,
            name: localize('menubar', 'Menu'),
            icon: 'check',
        },
        {
            id: CONTEXT_MENU_EXPLORER,
            name: localize('sidebar.explore.title', 'Explorer'),
            icon: 'check',
        },
        {
            id: CONTEXT_MENU_SEARCH,
            name: localize('sidebar.search.title', 'Search'),
            icon: 'check',
        },
        {
            id: CONTEXT_MENU_HIDE,
            name: localize('menu.hideActivityBar', 'Hide Activity Bar'),
        },
    ];

    return {
        data: activityBarData,
        contextMenu: contextMenuData,
    };
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
